# Richer Editor

A reusable, modern rich text editor for React and Next.js, built on Tiptap. Supports both JavaScript and TypeScript projects.

## Features
- Full-featured Tiptap-based editor
- Works in React and Next.js (JS/TS)
- ESM and CJS support
- TypeScript types included
- Customizable toolbar, image/video upload, and more

## Installation
```bash
npm install richer-editor @tiptap/react @tiptap/core react react-dom
```

> **Note:** `@tiptap/react`, `@tiptap/core`, `react`, and `react-dom` are peer dependencies and must be installed in your project.

## Usage (JavaScript)
```jsx
import { RicherEditor } from 'richer-editor';

function MyEditor() {
  const [content, setContent] = React.useState('');
  return (
    <RicherEditor
      content={content}
      onChange={setContent}
      placeholder="Write something..."
    />
  );
}
```

## Usage (TypeScript)
```tsx
import { RicherEditor } from 'richer-editor';

const MyEditor: React.FC = () => {
  const [content, setContent] = React.useState<string>('');
  return (
    <RicherEditor
      content={content}
      onChange={setContent}
      placeholder="Write something..."
    />
  );
};
```

## Components
- `RicherEditor` – Main editor
- `SmallRicherEditor` – Compact version
- `RicherContent` – Read-only renderer

## Custom Extensions
- `CustomBulletList`
- `CustomOrderedList`

## Styles
Import the CSS in your app:
```js
import 'richer-editor/dist/RicherEditor.css';
```

## License
MIT
