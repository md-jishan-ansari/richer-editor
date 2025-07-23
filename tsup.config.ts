// File: tsup.config.ts
// TSUP config for building ESM, CJS, and types for the Richer Editor React component library
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/components/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
  external: [
    'react',
    'react-dom',
    '@tiptap/react',
    '@tiptap/core',
    'clsx',
  ],
  loader: {
    '.css': 'copy',
  },
  esbuildOptions(options: any) {
    options.resolveExtensions = ['.tsx', '.ts', '.jsx', '.js', '.json'];
  },
});