# Troubleshooting

## Common Issues and Solutions

### 1. Peer Dependencies Not Installed

**Error:** `Module not found: Can't resolve '@tiptap/react'`

**Solution:** Install all peer dependencies:
```bash
npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-link @tiptap/extension-text-align @tiptap/extension-task-list @tiptap/extension-task-item @tiptap/extension-superscript @tiptap/extension-subscript @tiptap/extension-image @tiptap/extension-drag-handle-react @tiptap/extension-youtube @tiptap/extension-highlight @tiptap/extension-text-style @tiptap/extension-font-family @tiptap/extension-font-size @tiptap/extension-color clsx
```

**Alternative:** If you're using yarn or pnpm, use the appropriate package manager:
```bash
# For yarn
yarn add @tiptap/react @tiptap/starter-kit @tiptap/extension-link @tiptap/extension-text-align @tiptap/extension-task-list @tiptap/extension-task-item @tiptap/extension-superscript @tiptap/extension-subscript @tiptap/extension-image @tiptap/extension-drag-handle-react @tiptap/extension-youtube @tiptap/extension-highlight @tiptap/extension-text-style @tiptap/extension-font-family @tiptap/extension-font-size @tiptap/extension-color clsx

# For pnpm
pnpm add @tiptap/react @tiptap/starter-kit @tiptap/extension-link @tiptap/extension-text-align @tiptap/extension-task-list @tiptap/extension-task-item @tiptap/extension-superscript @tiptap/extension-subscript @tiptap/extension-image @tiptap/extension-drag-handle-react @tiptap/extension-youtube @tiptap/extension-highlight @tiptap/extension-text-style @tiptap/extension-font-family @tiptap/extension-font-size @tiptap/extension-color clsx
```

### 2. Next.js App Router Issues

**Error:** `use client` directive missing

**Solution:** Add `'use client'` directive to components using the editor:
```tsx
'use client';

import { RicherEditor } from 'richer-editor';
// ... rest of your component
```

**Additional Note:** Make sure your component is properly configured for client-side rendering if you're using Next.js 13+ with the App Router.

### 3. TypeScript Errors

**Error:** Type definitions not found

**Solution:** Ensure you're using TypeScript and the types are properly imported:
```tsx
import { RicherEditor } from 'richer-editor';

interface ContentType {
  html: string;
  json: object | string;
}
```

**Additional Solutions:**
- Check your `tsconfig.json` includes the necessary type definitions
- Ensure you have `@types/react` and `@types/react-dom` installed
- Clear your TypeScript cache: `rm -rf node_modules/.cache`

### 4. Styling Issues

**Problem:** Editor styles not applying correctly

**Solution:** Make sure the editor's CSS is properly imported. The component includes its own CSS, but you may need to ensure it's not being overridden by your global styles.

**Additional Solutions:**
- Check for CSS conflicts in your global styles
- Ensure Tailwind CSS is properly configured if you're using it
- Try adding `!important` to critical styles if needed
- Check browser developer tools for CSS specificity issues

### 5. Image Upload Issues

**Problem:** Images not uploading

**Solution:** Ensure your API endpoint is properly configured and returns the expected response format:
```json
{
  "success": true,
  "url": "https://example.com/uploaded-image.jpg"
}
```

**Additional Troubleshooting:**
- Check your API endpoint is accessible and returns the correct CORS headers
- Verify the file size limits in your server configuration
- Ensure your server can handle multipart/form-data requests
- Check browser network tab for any failed requests

### 6. Editor Not Rendering

**Problem:** Editor component doesn't appear or renders incorrectly

**Solution:** Check the following:
```tsx
// Ensure proper imports
import { RicherEditor } from 'richer-editor';

// Check component structure
const MyComponent = () => {
  const [content, setContent] = useState({ html: '', json: {} });

  return (
    <RicherEditor
      content={content}
      onChange={setContent}
      // Add minimum height to ensure visibility
      minHeight="200px"
    />
  );
};
```

### 7. Performance Issues

**Problem:** Editor is slow or unresponsive

**Solution:**
- Limit the content size for better performance
- Use `maxHeight` prop to prevent extremely long content
- Consider implementing virtual scrolling for very long documents
- Check for memory leaks in custom extensions or event handlers

### 8. Content Not Saving

**Problem:** Content changes are not being saved

**Solution:** Ensure your `onChange` handler is properly implemented:
```tsx
const handleContentChange = (newContent) => {
  console.log('Content changed:', newContent);
  setContent(newContent);
  // Add your save logic here
};

<RicherEditor
  content={content}
  onChange={handleContentChange}
/>
```

### 9. "Rendered more hooks than during the previous render" Error

**Problem:** This error occurs when components with hooks are defined inside other components

**Solution:** Always define components with hooks OUTSIDE the main component:
```tsx
// ❌ WRONG - Component with hooks defined inside main component
const MyEditor = () => {
  const [content, setContent] = useState({});

  // This will cause the hooks error
  const CustomButton = ({ editor }) => {
    const [count, setCount] = useState(0); // Hook inside nested component
    return <button>{count}</button>;
  };

  return <RicherEditor customToolbarButtons={CustomButton} />;
};

// ✅ CORRECT - Component with hooks defined outside
const CustomButton = ({ editor }) => {
  const [count, setCount] = useState(0); // Hook in top-level component
  return <button>{count}</button>;
};

const MyEditor = () => {
  const [content, setContent] = useState({});

  return <RicherEditor customToolbarButtons={CustomButton} />;
};
```

## Best Practices

### Performance Optimization

1. **Content Size Management**: Limit content size for better performance, especially for large documents
2. **Lazy Loading**: Consider lazy loading the editor for better initial page load times
3. **Memory Management**: Clean up event listeners and custom extensions when components unmount
4. **Caching**: Implement proper caching strategies for content and assets

### Security Considerations

1. **Content Sanitization**: Always sanitize HTML content on the server-side before storing or displaying
2. **XSS Prevention**: Use the provided content sanitization API or implement your own
3. **File Upload Security**: Validate file types and sizes on both client and server
4. **CORS Configuration**: Properly configure CORS for image upload endpoints

### Accessibility

1. **ARIA Labels**: Add appropriate ARIA labels for custom toolbar buttons
2. **Keyboard Navigation**: Ensure all editor features are accessible via keyboard
3. **Screen Reader Support**: Test with screen readers and add necessary attributes
4. **Focus Management**: Implement proper focus management for custom components

### Content Management

1. **Backup Strategy**: Implement regular content backups
2. **Version Control**: Consider implementing content versioning for important documents
3. **Auto-save**: Implement auto-save functionality to prevent data loss
4. **Content Validation**: Add validation rules for specific content requirements

### Integration Tips

1. **State Management**: Use appropriate state management solutions (Redux, Zustand, etc.) for complex applications
2. **API Integration**: Implement proper error handling for API calls
3. **Real-time Collaboration**: Consider implementing real-time collaboration features using WebSockets
4. **Mobile Optimization**: Test and optimize for mobile devices

## Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/richer-editor.git`
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`
5. Make your changes and test thoroughly
6. Submit a pull request

### Reporting Issues

When reporting issues, please include:

1. **Environment Details**: Node.js version, package manager, operating system
2. **Reproduction Steps**: Clear steps to reproduce the issue
3. **Expected vs Actual Behavior**: What you expected to happen vs what actually happened
4. **Code Example**: Minimal code example that reproduces the issue
5. **Error Messages**: Full error messages and stack traces
6. **Browser Information**: Browser version and any relevant console logs

### Feature Requests

When requesting features, please include:

1. **Use Case**: Describe the specific use case or problem you're trying to solve
2. **Proposed Solution**: Your suggested approach or implementation
3. **Alternatives Considered**: Other solutions you've considered
4. **Impact**: How this feature would benefit other users

### Code Style

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add tests for new functionality
- Update documentation for any API changes
- Ensure all tests pass before submitting a PR