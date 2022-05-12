# 🌈 🧰 RainbowKit Examples

**Example projects using [RainbowKit,](https://rainbowkit.com) the best way to connect a wallet 🌈**

### Available examples

The following examples are provided in this repo.

- `with-create-react-app`
- `with-next`
- `with-next-custom-button`

### Setup

This repo uses [pnpm](https://pnpm.io) to manage dependencies.

```bash
pnpm install
```

### Running examples

Each example has its own dev script.

```bash
pnpm dev:with-next
```

### Scaffolding a new project from an example

Quickly scaffold a new project from an example using [npx](https://docs.npmjs.com/cli/v7/commands/npx) and [degit.](https://github.com/Rich-Harris/degit)

For example, to use the `with-next` starter project:

```bash
npx degit rainbow-me/rainbowkit-examples/with-next my-rainbowkit-app
```

After downloading the example, move into your project directory, install dependencies and run the local development server.

> 💡 Our example projects do **not** provide a lock file, so feel free to use your npm client of choice (`npm`, `yarn`, `pnpm`) in the following step.

```bash
cd my-rainbowkit-app
npm install
npm run dev
```

## License

[MIT.](./LICENSE.md)
