import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const wardsData = require('../src/data/mumbai-wards.json');
const acsData = require('../src/data/mumbai-acs.json');
const pcsData = require('../src/data/mumbai-pcs.json');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting FixMumbai Database Seed...');

  // 1. Data Sources
  const dataSources = [
    {
      name: 'BMC Official Ward & Office Directory',
      organization: 'Brihanmumbai Municipal Corporation',
      url: 'https://portal.mcgm.gov.in/irj/portal/anonymous/BMC-on-Map-Wards-Offices',
      dataType: 'Administrative Ward Boundaries & Assistant Commissioner Directory',
      retrievedAt: '2026-09-20',
      lastVerified: '2026-09-20',
      version: 'v2026.1',
      notes: 'Official primary source for 24 BMC administrative wards and ward officer details.'
    },
    {
      name: 'BMC Solid Waste Management Portal',
      organization: 'Brihanmumbai Municipal Corporation (SWM)',
      url: 'https://portal.mcgm.gov.in/irj/portal/anonymous/qlceswm',
      dataType: 'Civic Sanitation & Garbage Management Operations',
      retrievedAt: '2026-09-20',
      lastVerified: '2026-09-20',
      version: 'v2026.1',
      notes: 'Primary source for municipal solid waste responsibility procedures.'
    },
    {
      name: 'Chief Electoral Officer Maharashtra',
      organization: 'Government of Maharashtra / ECI',
      url: 'https://ceoelection.maharashtra.gov.in/',
      dataType: 'Assembly Constituencies & Electoral Roll Data',
      retrievedAt: '2026-09-20',
      lastVerified: '2026-09-20',
      version: 'v2024.11',
      notes: 'Official government source for 36 Mumbai Assembly Constituency boundaries and representative records.'
    },
    {
      name: 'Election Commission of India Results',
      organization: 'Election Commission of India',
      url: 'https://results.eci.gov.in/',
      dataType: '2024 Maharashtra Legislative Assembly Election Results',
      retrievedAt: '2026-09-20',
      lastVerified: '2026-09-20',
      version: '2024 Assembly',
      notes: 'Official verified election result data for current MLAs.'
    }
  ];

  for (const ds of dataSources) {
    await prisma.dataSource.upsert({
      where: { name: ds.name },
      update: ds,
      create: ds
    });
  }

  // 2. Categories
  const categories = [
    { name: 'Garbage pile', description: 'Uncollected accumulated trash or refuse pile', icon: 'Trash2' },
    { name: 'Overflowing garbage bin', description: 'Public bin overflowing with waste onto surrounding ground', icon: 'Container' },
    { name: 'Open dumping', description: 'Unauthorized open dumping of household or commercial waste', icon: 'AlertTriangle' },
    { name: 'Construction waste', description: 'Debris, concrete, plaster, sand, or building material dumped illegally', icon: 'Building2' },
    { name: 'Illegal dumping', description: 'Bulk dumping by trucks or private vendors in non-designated zones', icon: 'Truck' },
    { name: 'Sanitation issue', description: 'Public toilet cleanliness, drainage overflow, or foul odor', icon: 'Droplets' },
    { name: 'Other civic issue', description: 'Other civic cleanliness and public amenity concerns', icon: 'HelpCircle' }
  ];

  const categoryMap = new Map<string, string>();
  for (const c of categories) {
    const cat = await prisma.category.upsert({
      where: { name: c.name },
      update: c,
      create: c
    });
    categoryMap.set(c.name, cat.id);
  }

  // 3. Parliamentary Constituencies
  const pcMap = new Map<number, string>();
  for (const pc of pcsData) {
    const createdPc = await prisma.parliamentaryConstituency.upsert({
      where: { pcNumber: pc.pcNumber },
      update: {
        pcName: pc.pcName,
        district: pc.district,
        mpName: pc.mpName,
        party: pc.party,
        source: pc.source,
        sourceDate: pc.sourceDate
      },
      create: {
        pcNumber: pc.pcNumber,
        pcName: pc.pcName,
        district: pc.district,
        mpName: pc.mpName,
        party: pc.party,
        source: pc.source,
        sourceDate: pc.sourceDate
      }
    });
    pcMap.set(pc.pcNumber, createdPc.id);
  }

  // 4. BMC Wards
  const wardMap = new Map<string, string>();
  for (const w of wardsData) {
    const wardPayload = {
      wardCode: w.wardCode,
      wardName: w.wardName,
      municipalBody: w.municipalBody,
      regionZone: w.regionZone,
      wardOfficeName: w.wardOfficeName,
      wardOfficeAddress: w.wardOfficeAddress,
      officialSourceUrl: w.officialSourceUrl,
      sourceLastVerified: w.sourceLastVerified,
      centerLatitude: w.centerLatitude,
      centerLongitude: w.centerLongitude,
      assistantCommissioner: w.assistantCommissioner,
      assistantCommissionerSource: w.assistantCommissionerSource
    };
    const createdWard = await prisma.bmcWard.upsert({
      where: { wardCode: w.wardCode },
      update: wardPayload,
      create: wardPayload
    });
    wardMap.set(w.wardCode, createdWard.id);
  }

  // 5. Assembly Constituencies & Representatives
  const acMap = new Map<number, string>();
  for (const ac of acsData) {
    const pcId = pcMap.get(ac.pcNumber);
    const createdAc = await prisma.assemblyConstituency.upsert({
      where: { acNumber: ac.acNumber },
      update: {
        acName: ac.acName,
        district: ac.district,
        centerLatitude: ac.centerLatitude,
        centerLongitude: ac.centerLongitude,
        pcId: pcId
      },
      create: {
        acNumber: ac.acNumber,
        acName: ac.acName,
        district: ac.district,
        centerLatitude: ac.centerLatitude,
        centerLongitude: ac.centerLongitude,
        pcId: pcId
      }
    });
    acMap.set(ac.acNumber, createdAc.id);

    // Create Representative & Term
    await prisma.representative.create({
      data: {
        name: ac.representative,
        type: 'MLA',
        party: ac.party,
        partyShort: ac.partyShort,
        acId: createdAc.id,
        source: 'Official Election Commission Results / Maharashtra CEO',
        verifiedAt: '2026-09-20',
        active: true,
        terms: {
          create: {
            electionCycle: '2024',
            constituencyName: `${ac.acNumber} - ${ac.acName}`,
            roleTitle: 'Member of Legislative Assembly (MLA)',
            startDate: '2024-11-23',
            officialSource: 'Election Commission of India / Govt of Maharashtra',
            verifiedAt: '2026-09-20'
          }
        }
      }
    });
  }

  // Also Seed MPs as Representatives
  for (const pc of pcsData) {
    const pcId = pcMap.get(pc.pcNumber);
    if (pc.mpName && pcId) {
      await prisma.representative.create({
        data: {
          name: pc.mpName,
          type: 'MP',
          party: pc.party || 'Independent',
          partyShort: pc.party ? pc.party.substring(0, 4) : 'IND',
          pcId: pcId,
          source: 'Election Commission of India',
          verifiedAt: '2026-09-20',
          active: true,
          terms: {
            create: {
              electionCycle: '2024',
              constituencyName: `${pc.pcNumber} - ${pc.pcName}`,
              roleTitle: 'Member of Parliament (MP)',
              startDate: '2024-06-04',
              officialSource: 'Election Commission of India',
              verifiedAt: '2026-09-20'
            }
          }
        }
      });
    }
  }

  // 6. System Users
  const passwordHash = bcrypt.hashSync('FixMumbai2026!', 10);
  const users = [
    {
      email: 'superadmin@fixmumbai.org',
      name: 'FixMumbai System Administrator',
      role: 'SUPER_ADMIN',
      passwordHash
    },
    {
      email: 'admin.swm@bmc.gov.in',
      name: 'BMC SWM Central Authority',
      role: 'AUTHORITY_ADMIN',
      passwordHash
    },
    {
      email: 'operator.kwest@bmc.gov.in',
      name: 'Ward K/West Officer',
      role: 'WARD_OPERATOR',
      wardId: wardMap.get('K West'),
      passwordHash
    },
    {
      email: 'moderator@fixmumbai.org',
      name: 'Civic Content Moderator',
      role: 'MODERATOR',
      passwordHash
    },
    {
      email: 'citizen.mumbai@gmail.com',
      name: 'Rohan Sharma',
      role: 'AUTHENTICATED_USER',
      passwordHash
    }
  ];

  for (const u of users) {
    await prisma.user.upsert({
      where: { email: u.email },
      update: u,
      create: u
    });
  }

  // 7. Seed Demo Reports
  const sampleReports = [
    {
      publicReportId: 'MUM-000182',
      categoryName: 'Garbage pile',
      description: 'DEMO: Uncollected organic garbage and plastic bags dumped near Lokhandwala market gate.',
      latitude: 19.1360,
      longitude: 72.8320,
      locality: 'Lokhandwala Market, Andheri West',
      wardCode: 'K West',
      acNumber: 165,
      status: 'VERIFIED',
      severity: 'HIGH',
      verificationStatus: 'VERIFIED_BY_CITIZEN',
      photoUrl: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&auto=format&fit=crop&q=60',
      resolvedPhotoUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60'
    },
    {
      publicReportId: 'MUM-000183',
      categoryName: 'Overflowing garbage bin',
      description: 'DEMO: BMC bin overflowing on Turner Road near Bandra station junction.',
      latitude: 19.0600,
      longitude: 72.8330,
      locality: 'Turner Road, Bandra West',
      wardCode: 'H West',
      acNumber: 177,
      status: 'IN_PROGRESS',
      severity: 'MEDIUM',
      verificationStatus: 'PENDING',
      photoUrl: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=800&auto=format&fit=crop&q=60'
    },
    {
      publicReportId: 'MUM-000184',
      categoryName: 'Construction waste',
      description: 'DEMO: Debris and plaster sacks dumped along Worli Sea Face promenade curve.',
      latitude: 19.0060,
      longitude: 72.8180,
      locality: 'Worli Sea Face',
      wardCode: 'G South',
      acNumber: 182,
      status: 'ASSIGNED',
      severity: 'HIGH',
      verificationStatus: 'PENDING',
      photoUrl: 'https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?w=800&auto=format&fit=crop&q=60'
    },
    {
      publicReportId: 'MUM-000185',
      categoryName: 'Open dumping',
      description: 'DEMO: Open waste dumping near Kurla West railway colony lane.',
      latitude: 19.0850,
      longitude: 72.8890,
      locality: 'Station Road, Kurla West',
      wardCode: 'L',
      acNumber: 174,
      status: 'SUBMITTED',
      severity: 'HIGH',
      verificationStatus: 'PENDING',
      photoUrl: 'https://images.unsplash.com/photo-1611284446314-60a55ac7deab?w=800&auto=format&fit=crop&q=60'
    },
    {
      publicReportId: 'MUM-000186',
      categoryName: 'Illegal dumping',
      description: 'DEMO: Truck commercial packaging dumped in Malad West Link Road service alley.',
      latitude: 19.1850,
      longitude: 72.8460,
      locality: 'Link Road, Malad West',
      wardCode: 'P North',
      acNumber: 162,
      status: 'ACKNOWLEDGED',
      severity: 'MEDIUM',
      verificationStatus: 'PENDING',
      photoUrl: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&auto=format&fit=crop&q=60'
    },
    {
      publicReportId: 'MUM-000187',
      categoryName: 'Sanitation issue',
      description: 'DEMO: Drainage overflow and sanitation issue near Colaba Causeway market lane.',
      latitude: 18.9220,
      longitude: 72.8310,
      locality: 'Colaba Causeway',
      wardCode: 'A',
      acNumber: 187,
      status: 'RESOLUTION_SUBMITTED',
      severity: 'HIGH',
      verificationStatus: 'PENDING',
      photoUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60',
      resolvedPhotoUrl: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&auto=format&fit=crop&q=60'
    }
  ];

  for (const item of sampleReports) {
    const categoryId = categoryMap.get(item.categoryName)!;
    const wardId = wardMap.get(item.wardCode);
    const acId = acMap.get(item.acNumber);
    const acObj = acsData.find((a: any) => a.acNumber === item.acNumber);
    const pcId = acObj ? pcMap.get(acObj.pcNumber) : undefined;

    const report = await prisma.report.create({
      data: {
        publicReportId: item.publicReportId,
        categoryId: categoryId,
        description: item.description,
        latitude: item.latitude,
        longitude: item.longitude,
        locality: item.locality,
        bmcWardId: wardId,
        assemblyConstituencyId: acId,
        parliamentaryConstituencyId: pcId,
        status: item.status,
        severity: item.severity,
        verificationStatus: item.verificationStatus,
        resolvedAt: item.status === 'VERIFIED' ? new Date() : null,
        verifiedAt: item.status === 'VERIFIED' ? new Date() : null,
        photos: {
          create: {
            storagePath: item.photoUrl,
            mimeType: 'image/jpeg',
            fileSize: 450000
          }
        },
        timelineEvents: {
          create: [
            {
              eventType: 'SUBMITTED',
              actorType: 'CITIZEN',
              description: 'Report submitted by citizen via FixMumbai web app',
              timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000)
            },
            {
              eventType: 'ACKNOWLEDGED',
              actorType: 'ADMIN',
              description: `Report acknowledged by BMC Ward ${item.wardCode} Solid Waste Management cell`,
              timestamp: new Date(Date.now() - 36 * 60 * 60 * 1000)
            }
          ]
        }
      }
    });

    if (item.resolvedPhotoUrl) {
      await prisma.resolutionEvidence.create({
        data: {
          reportId: report.id,
          beforeImagePath: item.photoUrl,
          afterImagePath: item.resolvedPhotoUrl,
          description: 'Area cleaned and sanitized by BMC SWM ward squad.',
          actorName: 'SWM Ward Inspector',
          actorRole: 'WARD_OPERATOR'
        }
      });
    }

    if (item.status === 'VERIFIED') {
      await prisma.citizenVerification.create({
        data: {
          reportId: report.id,
          isResolved: true,
          rating: 5,
          comments: 'Verified in person. Trash cleared completely.'
        }
      });
    }
  }

  console.log('✅ FixMumbai Database Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Database seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
