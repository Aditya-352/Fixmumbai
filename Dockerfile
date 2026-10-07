FROM node:20-alpine AS deps

RUN apk add --no-cache libc6-compat openssl

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci


FROM node:20-alpine AS builder

RUN apk add --no-cache libc6-compat openssl

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npx prisma generate
RUN npm run build


FROM node:20-alpine AS runner

RUN apk add --no-cache libc6-compat openssl

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/scripts ./scripts
COPY --from=builder /app/next.config.js ./next.config.js

# public/ holds static assets and the uploads tree written at runtime by
# /api/vegetation/photos. Omitting it previously 404'd every uploaded image.
COPY --from=builder /app/public ./public

# The photo API writes into public/uploads/greenery at runtime. Create the
# directory up front so a read-only or fresh container does not fail.
RUN mkdir -p /app/public/uploads/greenery

EXPOSE 3000

CMD ["npm", "start"]
