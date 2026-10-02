# Authority Account Management

This project uses **Google Authentication** for authority/admin login.

Only Google accounts that have been explicitly added to the database can access the authority dashboard.

## Adding a New Authority Account

### 1. Make sure you are in the project directory

```bash
cd /path/to/Fixmumbai
```

### 2. Generate the Prisma client

Run this if the Prisma schema has changed or after pulling new code:

```bash
npx prisma generate
```

### 3. Add the authority account

For a normal authority administrator:

```bash
npm run admin:add-authority -- authority@example.com "Authority Officer"
```

Replace:

* `authority@example.com` → the person's **Google account email**
* `"Authority Officer"` → the name displayed in the admin dashboard

Example:

```bash
npm run admin:add-authority -- officer@mcgm.gov.in "Ward Officer"
```

The account will be created with:

```text
Role: AUTHORITY_ADMIN
```

### 4. For a Super Admin

If the account should have `SUPER_ADMIN` privileges:

```bash
npm run admin:add-authority -- superadmin@example.com "System Administrator" SUPER_ADMIN
```

Example:

```bash
npm run admin:add-authority -- admin@healthrytix.com "System Administrator" SUPER_ADMIN
```

---

## What Happens After Adding the Account?

The account does **not** need a password.

The database stores:

```text
Email
Name
Role
```

The user logs in using:

```text
Continue with Google
        ↓
Google Authentication
        ↓
Google email
        ↓
Check email against User table
        ↓
Account exists + valid authority role
        ↓
Access granted
```

If the Google account has not been added to the database, login will be rejected.

---

## Important: Use the Google Account's Exact Email

The email passed to the command must match the Google account the person will use to sign in.

For example, if the person signs into Google as:

```text
officer@mcgm.gov.in
```

add:

```bash
npm run admin:add-authority -- officer@mcgm.gov.in "Ward Officer"
```

Do not add a personal Gmail address if they will actually sign in using their official Google account.

---

## Do I Need to Run `prisma db push` Every Time?

**No.**

You do **not** need to run:

```bash
npx prisma db push
```

every time you add an account.

`prisma db push` is only required when the **Prisma database schema changes**.

For normal account creation, simply run:

```bash
npm run admin:add-authority -- EMAIL "NAME"
```

or:

```bash
npm run admin:add-authority -- EMAIL "NAME" SUPER_ADMIN
```

---

## Quick Reference

### Normal Authority

```bash
npm run admin:add-authority -- officer@example.com "Officer Name"
```

### Super Admin

```bash
npm run admin:add-authority -- admin@example.com "Admin Name" SUPER_ADMIN
```

### Schema changed

If you changed `prisma/schema.prisma`:

```bash
npx prisma generate
npx prisma db push
```

Then add the account:

```bash
npm run admin:add-authority -- officer@example.com "Officer Name"
```

---

## Production Deployment

If the application is running inside Docker, run the account command **inside the application container**.

First identify the container:

```bash
docker ps
```

Then:

```bash
docker exec -it <CONTAINER_NAME> npm run admin:add-authority -- officer@example.com "Officer Name"
```

For example:

```bash
docker exec -it fixmumbai-app npm run admin:add-authority -- officer@example.com "Ward Officer"
```

For Super Admin:

```bash
docker exec -it fixmumbai-app npm run admin:add-authority -- admin@example.com "System Administrator" SUPER_ADMIN
```

Replace `fixmumbai-app` with the actual container name shown by:

```bash
docker ps
```

---

## Security Notes

* Never store or ask for the user's Google password.
* Only add trusted authority accounts.
* `SUPER_ADMIN` should be given only to accounts that require full administrative access.
* Removing an account from the `User` table immediately prevents that Google account from authenticating into the authority dashboard.
* The Google account itself is managed by Google; this application only controls whether that account is authorized to access the dashboard.
