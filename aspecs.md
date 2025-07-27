

**Hello! I need you to generate documentation for my new npm package. Please follow the structure and instructions below to create a comprehensive, well-organized, and developer-friendly `README.md` file.**

**1. Preliminary Information (for your context):**

*   **Package Name:** `[Your Package Name]` (e.g., `super-editor`)
*   **Package Description:** `[A brief, one-sentence description of what your editor package does]` (e.g., "A lightweight and highly customizable rich text editor for React applications.")
*   **Core Features:**
    *   `[Feature 1]` (e.g., "Inline text formatting: bold, italic, underline")
    *   `[Feature 2]` (e.g., "Block-level elements: headings, lists, blockquotes")
    *   `[Feature 3]` (e.g., "Customizable toolbar")
    *   `[Add other key features]`
*   **List of all component props:**
    *   `propName: 'value', type: 'string', defaultValue: "'default-value'", description: 'Controls the initial content of the editor.'`
    *   `propName: 'onChange', type: '(newValue: string) => void', defaultValue: 'undefined', description: 'Callback function that fires when the editor content changes.'`
    *   `propName: 'theme', type: "'light' | 'dark'", defaultValue: "'light'", description: 'Sets the color theme of the editor.'`
    *   `propName: 'isToolbarVisible', type: 'boolean', defaultValue: 'true', description: 'Toggles the visibility of the toolbar.'`
    *   `[Add all other props with their name, type, default value, and a brief description]`

**2. Documentation Generation:**

Please generate the documentation with the following sections:

---

## `[Your Package Name]`

`[Your one-sentence package description here]`

A brief, engaging paragraph that expands on the description. Mention the core problem it solves and why a developer would want to use it. Mention it's built for React and Next.js and is highly customizable.

**(Optional: Add a GIF or screenshot showing your editor in action here)**

### Features

*   `[List the core features you provided above]`

### Table of Contents

*   Getting Started
*   Usage with Next.js/React and Tailwind CSS
*   Usage with Next.js/React without Tailwind CSS
*   Props API Reference
*   In-Depth Prop Usage and Features
*   Contributing
*   License

### Getting Started

Provide clear installation instructions for both npm and yarn.

```bash
npm install [your-package-name]
```

```bash
yarn add [your-package-name]
```

### Usage with Next.js/React and Tailwind CSS

Provide a step-by-step guide on how to integrate and use the editor in a Next.js/React project that uses Tailwind CSS.

1.  **Installation:** Remind the user to install the package.
2.  **Import:** Show how to import the editor component.
3.  **Basic Example:** Provide a simple, copy-pasteable code snippet showing the editor component within a React component.
4.  **Styling with Tailwind:** Explain how to apply Tailwind CSS classes to the editor or its container. If your editor has specific class names that can be targeted, mention them here. Provide a code example.

**(Example Code Snippet for this section):**

```jsx
import React, { useState } from 'react';
import Editor from '[your-package-name]';

const MyPageWithTailwind = () => {
  const [content, setContent] = useState('<p>Start typing here...</p>');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Awesome Editor with Tailwind</h1>
      <div className="border border-gray-300 rounded-md">
        <Editor
          value={content}
          onChange={setContent}
        />
      </div>
    </div>
  );
};

export default MyPageWithTailwind;
```

### Usage with Next.js/React without Tailwind CSS

Provide a step-by-step guide for projects that do not use Tailwind CSS.

1.  **Import:** Show the import statement again for clarity.
2.  **Basic Example:** Provide a clean example without any Tailwind classes.
3.  **Custom Styling:** Explain how to apply custom styles. You can suggest a few methods:
    *   **CSS Modules:** Show how to use a separate CSS file and import it as a module.
    *   **Inline Styles:** Briefly explain how inline styles can be used for quick customizations.
    *   **Styled-Components or other CSS-in-JS libraries:** Provide a conceptual example.

**(Example Code Snippet for this section using CSS Modules):**

```jsx
// MyPage.module.css
.editorWrapper {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
}

// MyPage.js
import React, { useState } from 'react';
import Editor from '[your-package-name]';
import styles from './MyPage.module.css';

const MyPageWithoutTailwind = () => {
  const [content, setContent] = useState('<p>Start typing here...</p>');

  return (
    <div>
      <h1>My Awesome Editor</h1>
      <div className={styles.editorWrapper}>
        <Editor
          value={content}
          onChange={setContent}
        />
      </div>
    </div>
  );
};

export default MyPageWithoutTailwind;
```

### Props API Reference

Based on the list of props I provided at the beginning, generate a Markdown table with the following columns: `Prop`, `Type`, `Default`, and `Description`.

| Prop               | Type                           | Default       | Description                                                 |
| ------------------ | ------------------------------ | ------------- | ----------------------------------------------------------- |
| `value`            | `string`                       | `''`          | Controls the initial content of the editor.                 |
| `onChange`         | `(newValue: string) => void`   | `undefined`   | Callback function that fires when the editor content changes. |
| `[propName]`       | `[propType]`                   | `[defaultValue]`| `[propDescription]`                                         |
| `...`              | `...`                          | `...`         | `...`                                                       |

### In-Depth Prop Usage and Features

For each of the significant props from my list, create a detailed subsection. For each prop, explain:

1.  **What it is:** A more detailed explanation of the feature this prop controls.
2.  **How to use it:** Provide clear code snippets demonstrating its usage.
3.  **When to use it:** Describe practical scenarios and use cases. For example, for the `isToolbarVisible` prop, explain that it's useful for a "distraction-free" mode.

**(Example for a single prop):**

#### `isToolbarVisible`

*   **What it is:** The `isToolbarVisible` prop is a boolean that allows you to show or hide the editor's toolbar.
*   **How to use it:**
    ```jsx
    <Editor isToolbarVisible={false} />
    ```
*   **When to use it:** You should set this to `false` when you want to provide a cleaner, more minimalist writing experience for your users. It's also useful if you plan to implement your own custom toolbar and want to disable the default one.

**(Generate a similar section for all the important props you were given.)**

### Contributing

Add a standard section encouraging contributions. Mention that users can open issues for bugs and feature requests, and pull requests are welcome.

### License

State that the project is licensed under the `[Your License]` (e.g., MIT) license.

---

By providing this detailed prompt, you give the AI all the necessary context and structure to generate high-quality documentation for your npm package.