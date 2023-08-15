# Michal Töpfer's website

*<http://michal.topfer.matfyz.cz/> (redirects to <https://gimli.ms.mff.cuni.cz/~topfermi/>)*

Website of Michal Töpfer built with [Next.js](https://nextjs.org/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) and [Bootstrap](https://getbootstrap.com/) (the [Lux](https://bootswatch.com/lux/) theme from [Bootswatch](https://bootswatch.com/)).

## Development – running the code

The command

```bash
yarn dev
```

runs the Next.js development server.

## Building

The command

```bash
yarn build
```

builds the website (in the [static export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports) mode) and saves it in the [`out`](out) directory.

The website is built to be hosted on the `/~topfermi` base URL (<https://gimli.ms.mff.cuni.cz/~topfermi/>) so serving it locally won't work properly. If necessary, the `basePath` can be configured in [`next.config.js`](next.config.js).

## Deployment

GitLab CI ([`.gitlab-ci.yml`](.gitlab-ci.yml)) is set up to automatically deploy the website to [Gimli](https://gimli.ms.mff.cuni.cz/) (a server at [MFF UK](https://www.mff.cuni.cz/)).

## Notes

### Main navigation

The main navigation is generated using a prebuild script ([`preBuild/navigation.ts`](preBuild/navigation.ts)). The generated structure is stored in [`preBuild/navigation.json`](preBuild/navigation.json). To update the main navigation, change the `pages` variable in [`preBuild/navigation.ts`](preBuild/navigation.ts) and build the website.

*Related resources: [NextJS getStaticProps With Components](https://dev.to/brewhousedigital/nextjs-getstaticprops-with-components-f25), [Use import in .ts files outside module](https://stackoverflow.com/a/71389363)*
