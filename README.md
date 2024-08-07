# Turborepo JavaScript, Tailwindcss, shadcn/ui and NextUI starter for Multi-vendor & e-com solutions.

This is `Not` an official starter Turborepo.

## Using this example

Clone this repo then run the following command:

```sh
npm i
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `store`: a [Next.js 14](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `dashboard`: another [Next.js 14](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `@repo/ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/), [NextUI](https://nextui.org/), [shadcn\ui](https://ui.shadcn.com/) shared by both `store` & `dashboard`
- `@repo/database`: [Prisma](https://www.prisma.io/) ORM wrapper to manage & access your database


Each package/app is 100% `JavaScript`.

### Building packages/ui

This example is set up to produce compiled styles for `ui` components into the `dist` directory. The component `.jsx` files are consumed by the Next.js apps directly using `transpilePackages` in `next.config.js`. This was chosen for several reasons:

- Make sharing one `tailwind.config.js` to apps and packages as easy as possible.
- Make package compilation simple by only depending on the Next.js Compiler and `tailwindcss`.
- Maintain clear package export boundaries.

Another option is to consume `packages/ui` directly from source without building. If using this option, you will need to update the `tailwind.config.js` in your apps to be aware of your package locations, so it can find all usages of the `tailwindcss` class names for CSS compilation.

For example, in [tailwind.config.js](packages/tailwind-config/tailwind.config.js):

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/ui/*.{js,ts,jsx,tsx}",
  ],
```

If you choose this strategy, you can remove the `tailwindcss` and `autoprefixer` dependencies from the `ui` package.

### Note

To add shadcn component cd into `packages/ui` then use any shadcn CLI
example :

```sh
# C:\..\your-project\packages\ui>
npx  shadcn-ui@latest  add  button
```

this will add the component in `packages/ui/src/Shadcn`

#### Don't forget to add your component to the export in `packages/ui/package.json` .

### Database

We use [Prisma](https://prisma.io/) to manage & access our database. As such you will need a database for this project, either locally or hosted in the cloud.

To make this process easier, we offer a [`docker-compose.yml`](https://docs.docker.com/compose/) file to deploy a MySQL server locally with a new database named `turborepo` (To change this update the `MYSQL_DATABASE` environment variable in the `docker-compose.yml` file):

```sh
cd my-turborepo
docker-compose up -d
```

Once deployed you will need to copy the `.env.example` file to `.env` in order for Prisma to have a `DATABASE_URL` environment variable to access.

```sh
cp .env.example .env
```

If you added a custom database name, or use a cloud based database, you will need to update the `DATABASE_URL` in your `.env` accordingly.

Once deployed & up & running, you will need to create & deploy migrations to your database to add the necessary tables. This can be done using [Prisma Migrate](https://www.prisma.io/migrate):

```sh
npx prisma migrate dev
```

If you need to push any existing migrations to the database, you can use either the Prisma db push or the Prisma migrate deploy command(s):

```sh
npm run db:push

# OR

npm run db:migrate:deploy
```

There is slight difference between the two commands & [Prisma offers a breakdown on which command is best to use](https://www.prisma.io/docs/concepts/components/prisma-migrate/db-push#choosing-db-push-or-prisma-migrate).

An optional additional step is to seed some initial or fake data to your database using [Prisma's seeding functionality](https://www.prisma.io/docs/guides/database/seed-database).

To do this update check the seed script located in `packages/database/src/seed.js` & add or update any users you wish to seed to the database.

Once edited run the following command to run tell Prisma to run the seed script defined in the Prisma configuration:

```sh
npm run db:seed
```

For further more information on migrations, seeding & more, we recommend reading through the [Prisma Documentation](https://www.prisma.io/docs/).


### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/), [NextUI](https://nextui.org/), [shadcn\ui](https://ui.shadcn.com/) for styles
- [Prisma](https://www.prisma.io/) for database ORM
- [Docker Compose](https://docs.docker.com/compose/) for local database
