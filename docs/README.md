# Richer Editor

A modern, customizable React and Next.js rich text editor built with Tiptap and ProseMirror. Fast, extensible, and perfect for blogs, CMS, and web applications.

Richer Editor provides a powerful, feature-rich text editing experience with a clean, modern interface. Built on top of Tiptap and ProseMirror, it offers excellent performance, extensibility, and a comprehensive set of formatting tools. Whether you're building a blog platform, content management system, or any web application that requires rich text editing, Richer Editor delivers a professional editing experience with minimal setup and maximum flexibility.

## What is Richer Editor?

Richer Editor is a React component library that provides a complete rich text editing solution for modern web applications. It's designed to be:

- **Easy to Use**: Simple API with sensible defaults
- **Highly Customizable**: Extensive configuration options and theming support
- **Production Ready**: Built with performance and reliability in mind
- **Accessible**: Follows web accessibility standards
- **TypeScript Ready**: Full TypeScript support with comprehensive type definitions

## Key Features

* **Comprehensive Text Formatting**: Bold, italic, underline, strikethrough, code, and text highlighting
* **Block-level Elements**: Headings (H1-H6), bullet lists, ordered lists, task lists, and blockquotes
* **Advanced Typography**: Font family selection, font size control, text color, and background color
* **Content Alignment**: Left, center, right, and justify alignment options
* **Media Support**: Image and video embedding with drag-and-drop functionality
* **Link Management**: Easy link insertion and editing
* **Customizable Toolbar**: Show/hide specific buttons or add custom toolbar elements
* **Internationalization**: Built-in i18n support for customizing labels
* **Responsive Design**: Works seamlessly across desktop and mobile devices
* **TypeScript Support**: Full TypeScript definitions for better development experience
* **Extensible Architecture**: Add custom Tiptap extensions and toolbar buttons

## Two Editor Variants

Richer Editor comes with two main components to suit different use cases:

### RicherEditor
The full-featured editor with comprehensive formatting options, media support, and advanced typography controls. Perfect for blog posts, articles, and rich content creation.

 <Image
   src="https://www.staticcdn.technotes4u.com/technotes4u-bWRqaXNoYW5hbnNhcmkyMDAwQGdtYWlsLmNvbQ==/richereditor-1753617654606-1.png"
    width={1400}
    height={1400}
    alt="code-screenshot"
    className="w-full"
 />

### SmallRicherEditor
A simplified version with a streamlined toolbar and fewer formatting options. Ideal for comments, quick notes, and when you need a distraction-free writing experience.

 <Image
   src="https://www.staticcdn.technotes4u.com/technotes4u-bWRqaXNoYW5hbnNhcmkyMDAwQGdtYWlsLmNvbQ==/smallrichereditor-1753617671119-1.png"
    width={1400}
    height={1400}
    alt="code-screenshot"
    className="w-full"
 />

 ## What Can You Build?

Richer Editor is perfect for building:

- **Blog Platforms**: Create rich blog posts with formatting, images, and media
- **Content Management Systems**: Build powerful CMS interfaces for content creators
- **Document Editors**: Create document editing applications with rich formatting
- **Comment Systems**: Add rich text commenting to your applications
- **Email Editors**: Build email composition interfaces
- **Note-taking Apps**: Create note-taking applications with rich formatting
- **Forum Platforms**: Add rich text posting capabilities to forums
- **Knowledge Bases**: Build documentation and knowledge base systems

## Quick Start

```bash
npm install richer-editor
```

<TabsWrapper>
  <Tab id="richereditor-example" title="RicherEditor">
    ```tsx
    import { RicherEditor } from 'richer-editor';

    const MyEditor = () => {
      const [content, setContent] = useState({ html: '', json: {} });

      return (
        <RicherEditor
          content={content}
          onChange={setContent}
          minHeight="300px"
        />
      );
    };
    ```
  </Tab>

  <Tab id="smallrichereditor-example" title="SmallRicherEditor">
    ```tsx
    import { SmallRicherEditor } from 'richer-editor';

    const MyEditor = () => {
      const [content, setContent] = useState({ html: '', json: {} });

      return (
        <SmallRicherEditor
          content={content}
          onChange={setContent}
          minHeight="300px"
        />
      );
    };
    ```
  </Tab>
</TabsWrapper>

<Alert type="warning">All further documentation uses **RicherEditor** for examples, but the same concepts can also be used for **SmallRicherEditor**</Alert>

## Documentation

- **[Installation Guide](INSTALLATION.md)** - Setup, configuration, and getting started
- **[API Reference](API-REFERENCE.md)** - Complete props documentation and component variants
- **[Examples](EXAMPLES.md)** - Code examples and usage patterns
- **[Extending the Editor](EXTENDING.md)** - Custom extensions and advanced features
- **[Troubleshooting](TROUBLESHOOTING.md)** - Common issues and solutions

## License

This project is licensed under the MIT license. See the [LICENSE](../LICENSE) file for details.