# Turborepo JavaScript, Tailwindcss, shadcn/ui and NextUI starter for Multi-vendor & e-com solutions.

This is `Not` an official starter Turborepo.

## Using this example

Clone it then run the following command:

```sh
npm i
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `store`: a [Next.js 14](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `dashboard`: another [Next.js 14](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/), [NextUI](https://nextui.org/), [shadcn\ui](https://ui.shadcn.com/) shared by both `store` & `dashboard`

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

```cmd
C:\..\your-project\packages\ui>npx  shadcn-ui@latest  add  button
```

this will add the component in `packages/ui/src/Shadcn`

#### Don't forget to add your component to the export in `packages/ui/package.json` .

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/), [NextUI](https://nextui.org/), [shadcn\ui](https://ui.shadcn.com/) for styles
