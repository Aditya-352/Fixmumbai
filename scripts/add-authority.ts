import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const [, , emailArg, nameArg, roleArg = 'AUTHORITY_ADMIN'] = process.argv;

  const email = emailArg?.trim().toLowerCase();
  const name = nameArg?.trim();

  if (!email || !name) {
    console.error(
      'Usage: npx ts-node scripts/add-authority.ts <google-email> "<name>" [AUTHORITY_ADMIN|SUPER_ADMIN]'
    );
    process.exit(1);
  }

  if (!['AUTHORITY_ADMIN', 'SUPER_ADMIN'].includes(roleArg)) {
    console.error('Role must be AUTHORITY_ADMIN or SUPER_ADMIN.');
    process.exit(1);
  }

  const user = await prisma.user.upsert({
    where: { email },
    update: {
      name,
      role: roleArg,
    },
    create: {
      email,
      name,
      role: roleArg,
      passwordHash: '',
    },
  });

  console.log(`Authority account ready: ${user.email} (${user.role})`);
}

main()
  .catch((error) => {
    console.error('Failed to add authority account:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
