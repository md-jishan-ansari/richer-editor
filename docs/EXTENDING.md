# Extending the Editor

This editor is built using Tiptap, which means you can extend it as much as you want by using Tiptap extensions. Tiptap provides a powerful and flexible foundation that allows you to add custom functionality, create new content types, and customize the editing experience to match your specific needs.

## `extensions` - Custom Tiptap Extensions

The `extensions` prop allows you to add custom Tiptap extensions to enhance the editor's functionality. This is useful for adding specialized features like custom marks, nodes, or editor behaviors.

```tsx
import { Extension } from '@tiptap/core';
import { Plugin, PluginKey } from '@tiptap/pm/state';

// Example: Custom extension for word count
const WordCountExtension = Extension.create({
  name: 'wordCount',

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey('wordCount'),
        view: () => ({
          update: (view) => {
            const text = view.state.doc.textBetween(0, view.state.doc.content.size, ' ');
            const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;

            // Update word count display
            const wordCountElement = document.getElementById('word-count');
            if (wordCountElement) {
              wordCountElement.textContent = `Words: ${wordCount}`;
            }
          },
        }),
      }),
    ];
  },
});

// Example: Custom extension for auto-save
const AutoSaveExtension = Extension.create({
  name: 'autoSave',

  addOptions() {
    return {
      autoSaveInterval: 30000, // 30 seconds
      onAutoSave: () => {},
    };
  },

  onCreate() {
    const interval = setInterval(() => {
      this.options.onAutoSave();
    }, this.options.autoSaveInterval);

    return () => clearInterval(interval);
  },
});

// Add multiple extensions with configuration
<RicherEditor
  content={content}
  onChange={setContent}
  extensions={[
      WordCountExtension.configure({
        onAutoSave: () => {
          console.log('Auto-saving content...');
          // Your auto-save logic here
        },
      }),
      AutoSaveExtension.configure({
        autoSaveInterval: 60000, // 1 minute
      }),
  ]}
/>
```

**Common Use Cases for Custom Extensions:**
- **Word/Character Count**: Track content length
- **Auto-save**: Automatically save content at intervals
- **Custom Marks**: Add specialized text formatting
- **Custom Nodes**: Create new content block types
- **Keyboard Shortcuts**: Add custom keyboard commands
- **Content Validation**: Validate content as users type

## `customToolbarButtons` - Custom Toolbar Elements

The `customToolbarButtons` prop allows you to add custom buttons or elements to the editor's toolbar. This is perfect for adding application-specific functionality like save buttons, export options, or custom formatting tools.

```tsx
import React from 'react';
import { Editor } from '@tiptap/react';

// IMPORTANT: Define custom components OUTSIDE the main component to avoid hooks issues

// Example: Custom save button component
const CustomSaveButton = ({ editor }: { editor: Editor }) => (
  <button
    onClick={() => {
      const content = editor.getHTML();
      console.log('Saving content:', content);
      // Your save logic here
    }}
    className="toolbar-button bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
    title="Save Content"
  >
    💾 Save
  </button>
);

// Example: Custom export button
const CustomExportButton = ({ editor }: { editor: Editor }) => (
  <button
    onClick={() => {
      const content = editor.getHTML();
      const blob = new Blob([content], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'content.html';
      a.click();
      URL.revokeObjectURL(url);
    }}
    className="toolbar-button bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
    title="Export as HTML"
  >
    📄 Export
  </button>
);

// Example: Custom word count display (defined outside main component)
const WordCountDisplay = ({ editor }: { editor: Editor }) => {
  const [wordCount, setWordCount] = React.useState(0);

  React.useEffect(() => {
    const updateWordCount = () => {
      const text = editor.getText();
      const words = text.split(/\s+/).filter(word => word.length > 0);
      setWordCount(words.length);
    };

    editor.on('update', updateWordCount);
    updateWordCount();

    return () => {
      editor.off('update', updateWordCount);
    };
  }, [editor]);

  return (
    <span className="text-sm text-gray-600 px-2">
      {wordCount} words
    </span>
  );
};

// Main component
const MyEditor = () => {
  const [content, setContent] = React.useState({ html: '', json: {} });

  return (
    <div>
      {/* Using custom toolbar buttons as components */}
      <RicherEditor
        content={content}
        onChange={setContent}
        customToolbarButtons={CustomSaveButton}
      />

      {/* Using custom toolbar buttons as a function (more flexible) */}
      <RicherEditor
        content={content}
        onChange={setContent}
        customToolbarButtons={(editor) => (
          <div className="flex items-center gap-2 border-l border-gray-300 pl-2 ml-2">
            <CustomSaveButton editor={editor} />
            <CustomExportButton editor={editor} />
            <WordCountDisplay editor={editor} />
          </div>
        )}
      />

      {/* Example: Conditional toolbar buttons based on editor state */}
      <RicherEditor
        content={content}
        onChange={setContent}
        customToolbarButtons={(editor) => {
          const isContentEmpty = editor.isEmpty;

          return (
            <div className="flex items-center gap-2">
              {!isContentEmpty && <CustomSaveButton editor={editor} />}
              {!isContentEmpty && <CustomExportButton editor={editor} />}
              <WordCountDisplay editor={editor} />
            </div>
          );
        }}
      />
    </div>
  );
};
```

**Common Use Cases for Custom Toolbar Buttons:**
- **Save/Submit Buttons**: Direct content saving functionality
- **Export Options**: Export content in different formats (HTML, PDF, etc.)
- **Content Statistics**: Display word count, character count, or reading time
- **Custom Formatting**: Application-specific formatting options
- **Integration Buttons**: Connect with external services or APIs
- **Preview Toggle**: Switch between edit and preview modes

## `editorProps` - Additional Tiptap Props

The `editorProps` prop allows you to pass additional configuration options directly to the underlying Tiptap editor. This gives you fine-grained control over the editor's behavior, styling, and event handling.

```tsx
import { Editor } from '@tiptap/react';

// Example: Custom editor styling and attributes
<RicherEditor
  content={content}
  onChange={setContent}
  editorProps={{
    attributes: {
      class: 'custom-editor-class prose max-w-none',
      style: 'background-color: #f9f9f9; border: 1px solid #e5e7eb;',
      'data-testid': 'rich-text-editor',
      spellcheck: 'true',
    },
  }}
/>

// Example: Custom keyboard shortcuts and event handling
<RicherEditor
  content={content}
  onChange={setContent}
  editorProps={{
    handleDOMEvents: {
      keydown: (view, event) => {
        // Custom keyboard shortcuts
        if (event.ctrlKey && event.key === 's') {
          event.preventDefault();
          console.log('Ctrl+S pressed - saving content...');
          // Your save logic here
          return true; // Prevent default behavior
        }

        // Custom paste handling
        if (event.ctrlKey && event.key === 'v') {
          // You can intercept paste events here
          return false; // Allow default behavior
        }

        return false; // Allow other default behaviors
      },

      paste: (view, event) => {
        // Custom paste handling
        const clipboardData = event.clipboardData;
        if (clipboardData) {
          const text = clipboardData.getData('text/plain');
          // Process pasted text if needed
          console.log('Pasted text:', text);
        }
        return false; // Allow default paste behavior
      },

      drop: (view, event) => {
        // Custom drop handling for drag-and-drop
        const files = event.dataTransfer?.files;
        if (files && files.length > 0) {
          console.log('Files dropped:', files);
          // Handle file drops (images, etc.)
        }
        return false; // Allow default drop behavior
      },
    },
  }}
/>

// Example: Custom editor configuration with extensions
<RicherEditor
  content={content}
  onChange={setContent}
  editorProps={{
    enableCoreExtensions: true,
    parseOptions: {
      preserveWhitespace: 'full',
    },
    injectCSS: false, // Disable default CSS injection
    editorProps: {
      handleDOMEvents: {
        focus: (view, event) => {
          console.log('Editor focused');
          return false;
        },
        blur: (view, event) => {
          console.log('Editor blurred');
          return false;
        },
      },
    },
  }}
/>

// Example: Advanced editor configuration
<RicherEditor
  content={content}
  onChange={setContent}
  editorProps={{
    attributes: {
      class: 'custom-editor prose prose-sm lg:prose-lg',
      placeholder: 'Start typing your content here...',
    },
    handleDOMEvents: {
      keydown: (view, event) => {
        // Auto-save on specific key combinations
        if (event.ctrlKey && event.shiftKey && event.key === 'S') {
          event.preventDefault();
          console.log('Auto-saving...');
          // Trigger auto-save
          return true;
        }
        return false;
      },
    },
    // Custom transaction handling
    onTransaction: ({ transaction, editor }) => {
      // Log all editor changes
      if (transaction.docChanged) {
        console.log('Content changed:', editor.getHTML());
      }
    },
    // Custom update handling
    onUpdate: ({ editor }) => {
      // Handle content updates
      const content = editor.getHTML();
      console.log('Content updated:', content);
    },
  }}
/>
```

**Common Use Cases for Editor Props:**
- **Custom Styling**: Apply custom CSS classes and inline styles
- **Keyboard Shortcuts**: Add custom keyboard commands and shortcuts
- **Event Handling**: Intercept and customize paste, drop, and other events
- **Accessibility**: Add ARIA attributes and improve accessibility
- **Performance**: Configure editor performance options
- **Integration**: Connect with external libraries and services
- **Validation**: Add custom content validation rules
- **Auto-save**: Implement auto-save functionality with custom triggers

## Best Practices for Extending

### Performance Optimization

1. **Lazy Loading**: Load custom extensions only when needed
2. **Memory Management**: Clean up event listeners and intervals
3. **Caching**: Cache expensive operations like word counting
4. **Debouncing**: Debounce frequent operations like auto-save

### Security Considerations

1. **Input Validation**: Validate all custom inputs and content
2. **XSS Prevention**: Sanitize any HTML content you generate
3. **File Upload Security**: Validate file types and sizes
4. **API Security**: Secure any external API calls

### Accessibility

1. **ARIA Labels**: Add proper ARIA labels to custom buttons
2. **Keyboard Navigation**: Ensure all custom features are keyboard accessible
3. **Screen Reader Support**: Test with screen readers
4. **Focus Management**: Implement proper focus management

### Code Organization

1. **Separation of Concerns**: Keep custom extensions focused and single-purpose
2. **Reusability**: Make extensions reusable across different projects
3. **Documentation**: Document custom extensions thoroughly
4. **Testing**: Write tests for custom functionality