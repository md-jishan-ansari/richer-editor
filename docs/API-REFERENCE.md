# API Reference

## Props API Reference

<Table>
   <TableHeader>
     <TableRow>
       <TableHead>Prop</TableHead>
       <TableHead>Type</TableHead>
       <TableHead>Default</TableHead>
       <TableHead>Description</TableHead>
     </TableRow>
   </TableHeader>
   <TableBody>
       <TableRow>
         <TableCell>`content`</TableCell>
         <TableCell>`{ json?: object \| string, html?: string }`</TableCell>
         <TableCell>`{}`</TableCell>
         <TableCell>Controls the initial content of the editor. Can contain both HTML and JSON formats.</TableCell>
       </TableRow>
       <TableRow>
         <TableCell>`onChange`</TableCell>
         <TableCell>`(value: { html: string; json: object \| string }) => void`</TableCell>
         <TableCell>`undefined`</TableCell>
         <TableCell>Callback function that fires when the editor content changes. Returns both HTML and JSON formats.</TableCell>
       </TableRow>
       <TableRow>
         <TableCell>`imageUploadUrl`</TableCell>
         <TableCell>`string`</TableCell>
         <TableCell>`undefined`</TableCell>
         <TableCell>URL endpoint for image upload functionality. If not provided, only URL insertion is available.</TableCell>
       </TableRow>
       <TableRow>
         <TableCell>`minHeight`</TableCell>
         <TableCell>`string`</TableCell>
         <TableCell>`undefined`</TableCell>
         <TableCell>Sets the minimum height of the editor.</TableCell>
       </TableRow>
       <TableRow>
         <TableCell>`maxHeight`</TableCell>
         <TableCell>`string`</TableCell>
         <TableCell>`undefined`</TableCell>
         <TableCell>Sets the maximum height of the editor.</TableCell>
       </TableRow>
       <TableRow>
         <TableCell>`editorProps`</TableCell>
         <TableCell>`any`</TableCell>
         <TableCell>`{}`</TableCell>
         <TableCell>Additional props to pass to the underlying Tiptap editor.</TableCell>
       </TableRow>
       <TableRow>
         <TableCell>`className`</TableCell>
         <TableCell>`string`</TableCell>
         <TableCell>`''`</TableCell>
         <TableCell>Additional CSS classes to apply to the editor container.</TableCell>
       </TableRow>
       <TableRow>
         <TableCell>`excludeToolbarButtons`</TableCell>
         <TableCell>`string[]`</TableCell>
         <TableCell>`[]`</TableCell>
         <TableCell>Array of toolbar button keys to hide from the editor.</TableCell>
       </TableRow>
       <TableRow>
         <TableCell>`i18n`</TableCell>
         <TableCell>`Record<string, string>`</TableCell>
         <TableCell>`{}`</TableCell>
         <TableCell>Internationalization object for customizing button labels and text.</TableCell>
       </TableRow>
       <TableRow>
         <TableCell>`fontSizeOptions`</TableCell>
         <TableCell>`{ name: string; value: string }[]`</TableCell>
         <TableCell>`undefined`</TableCell>
         <TableCell>Custom font size options to replace the default ones.</TableCell>
       </TableRow>
       <TableRow>
         <TableCell>`fontFamilyOptions`</TableCell>
         <TableCell>`{ name: string; value: string }[]`</TableCell>
         <TableCell>`undefined`</TableCell>
         <TableCell>Custom font family options to replace the default ones.</TableCell>
       </TableRow>
       <TableRow>
         <TableCell>`extensions`</TableCell>
         <TableCell>`any[]`</TableCell>
         <TableCell>`[]`</TableCell>
         <TableCell>Additional Tiptap extensions to add to the editor.</TableCell>
       </TableRow>
       <TableRow>
         <TableCell>`customToolbarButtons`</TableCell>
         <TableCell>`React.ReactNode \| ((editor: any) => React.ReactNode)`</TableCell>
         <TableCell>`undefined`</TableCell>
         <TableCell>Custom toolbar buttons or function to render custom toolbar elements.</TableCell>
       </TableRow>
   </TableBody>
 </Table>

## Image Upload

### Setting up Image Upload

To enable image upload functionality, provide the `imageUploadUrl` prop:

```tsx
<RicherEditor
  content={content}
  onChange={setContent}
  imageUploadUrl="/api/upload-image"
/>
```

### API Endpoint Example

Your API endpoint should handle file uploads and return the image URL:

```tsx {14}
// app/api/upload-image/route.ts (Next.js Router)

import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {

    const formData = await request.formData();

    // Handle file upload logic here
    // Example: upload to cloud storage, save to database, etc.

    // Return the uploaded image url or link
    return NextResponse.json({
        link: 'https://example.com/uploaded-image.jpg'
    });

}
```

### Without Image Upload

<Alert>
If you don't provide `imageUploadUrl`, only the URL insertion option will be available for images. Users can paste image URLs directly into the editor.
</Alert>

## Detailed Prop Examples

### `content` - Initial Content

```tsx {3-6, 12}
// With both HTML and JSON (Internally, the editor only requires JSON inside the content object)
<RicherEditor
  content={{
    html: '<h1>Hello World</h1><p>This is some content.</p>',
    json: { /* Tiptap JSON structure */ }
  }}
  onChange={setContent}
/>

// For editing existing content (only JSON required)
<RicherEditor
  content={{ json: existingContentJson }}
  onChange={setContent}
/>
```

### `onChange` - Content Change Handler

```tsx {3}
<RicherEditor
  content={content}
  onChange={setContent}
/>

// With custom handler
const handleSave = () => {
  editorRef.current?.save();

  // Save to database content?.html
};
```

### `imageUploadUrl` - Image Upload Endpoint

```tsx {5, }
// With image upload enabled
<RicherEditor
  content={content}
  onChange={setContent}
  imageUploadUrl="/api/upload-image"
/>

// Without image upload (only URL insertion available)
<RicherEditor
  content={content}
  onChange={setContent}
  // imageUploadUrl not provided
/>
```

### `minHeight` and `maxHeight` - Editor Dimensions

```tsx {5, 12, 19, 20}
// Set minimum height
<RicherEditor
  content={content}
  onChange={setContent}
  minHeight="300px"
/>

// Set maximum height with scrolling
<RicherEditor
  content={content}
  onChange={setContent}
  maxHeight="500px"
/>

// Both minimum and maximum height
<RicherEditor
  content={content}
  onChange={setContent}
  minHeight="200px"
  maxHeight="600px"
/>
```

### `className` - Custom CSS Classes

```tsx {5, 12}
// With Tailwind CSS classes
<RicherEditor
  content={content}
  onChange={setContent}
  className="prose max-w-none border border-gray-300 rounded-lg"
/>

// With custom CSS classes
<RicherEditor
  content={content}
  onChange={setContent}
  className="my-custom-editor-class"
/>
```

### `excludeToolbarButtons` - Hide Toolbar Buttons

```tsx {5, 11-21}
// Hide specific buttons
<RicherEditor
  content={content}
  onChange={setContent}
  excludeToolbarButtons={['image', 'video', 'table']}
/>

// Hide multiple buttons for simplified editor
<RicherEditor
  content={content}
  onChange={setContent}
  excludeToolbarButtons={[
    'heading',
    'fontSize',
    'fontFamily',
    'textColor',
    'bgColor',
    'subscript',
    'superscript',
    'image',
    'video'
  ]}
/>
```

#### Available Toolbar Buttons for `excludeToolbarButtons`

```tsx
const excludeToolbarButtons = [
  'heading',        // Heading dropdown (H1-H6)
  'fontSize',       // Font size dropdown
  'fontFamily',     // Font family dropdown
  'bold',           // Bold button
  'italic',         // Italic button
  'underline',      // Underline button
  'strike',         // Strikethrough button
  'highlight',      // Text highlight button
  'code',           // Code block button
  'bulletList',     // Bullet list button
  'orderedList',    // Ordered list button
  'taskList',       // Task list button
  'blockquote',     // Blockquote button
  'hr',             // Horizontal rule button
  'table',          // Table button
  'link',           // Link button
  'image',          // Image button
  'video',          // Video button
  'alignLeft',      // Align left button
  'alignCenter',    // Align center button
  'alignRight',     // Align right button
  'alignJustify',   // Align justify button
  'textColor',      // Text color button
  'bgColor',        // Background color button
  'subscript',      // Subscript button
  'superscript',    // Superscript button
  'undo',           // Undo button
  'redo'            // Redo button
];
```

### `i18n` - Internationalization (It will update the visible text and title)

```tsx {24, 39}
// Spanish labels
const spanishLabels = {
  bold: 'Negrita',
  italic: 'Cursiva',
  underline: 'Subrayado',
  strike: 'Tachado',
  code: 'Código',
  bulletList: 'Lista con viñetas',
  orderedList: 'Lista numerada',
  taskList: 'Lista de tareas',
  blockquote: 'Cita',
  link: 'Enlace',
  image: 'Imagen',
  video: 'Video',
  alignLeft: 'Alinear izquierda',
  alignCenter: 'Centrar',
  alignRight: 'Alinear derecha',
  alignJustify: 'Justificar'
};

<RicherEditor
  content={content}
  onChange={setContent}
  i18n={spanishLabels}
/>

// Custom labels for specific use case
const customLabels = {
  bold: 'Make Bold',
  italic: 'Make Italic',
  link: 'Add Link',
  image: 'Insert Picture',
  video: 'Add Video'
};

<RicherEditor
  content={content}
  onChange={setContent}
  i18n={customLabels}
/>
```


#### Available i18n Keys

```tsx
const i18n = {
  heading: 'Heading',
  fontSize: 'Font Size',
  fontFamily: 'Font Family',
  lineHeight: 'Line Height',
  bold: 'Bold',
  italic: 'Italic',
  underline: 'Underline',
  strike: 'Strikethrough',
  highlight: 'Highlight',
  code: 'Code Block',
  bulletList: 'Bullet List',
  orderedList: 'Ordered List',
  taskList: 'Task List',
  blockquote: 'Blockquote',
  hr: 'Horizontal Rule',
  link: 'Insert/Edit Link',
  image: 'Insert Image',
  video: 'Insert YouTube Video',
  alignLeft: 'Align Left',
  alignCenter: 'Align Center',
  alignRight: 'Align Right',
  alignJustify: 'Align Justify',
  textColor: 'Text Color',
  bgColor: 'Background Color',
  subscript: 'Subscript',
  superscript: 'Superscript',
  undo: 'Undo',
  redo: 'Redo',
  insert: 'Insert',
  remove: 'Remove',
  add: 'Add',
  cancel: 'Cancel',
  paragraph: 'Paragraph',
  url: 'URL',
  upload: 'Upload',
  pasteImageUrl: 'Paste image URL here...',
  pasteLinkUrl: 'Paste link URL here...',
  pasteVideoUrl: 'Paste YouTube video URL here...',
  width: 'Width',
  height: 'Height',
  ulStyle: 'UL Style',
  olStyle: 'OL Style',
  removeColor: 'Remove Color',
  uploading: 'Uploading...',
  uploadFailed: 'Upload failed',
  newTab: 'New Tab (_blank)',
  sameTab: 'Same Tab (_self)',
  parentFrame: 'Parent Frame (_parent)',
  topFrame: 'Top Frame (_top)'
};
```


### `fontSizeOptions` - Custom Font Sizes

```tsx {2-7, 13}
// Custom font size options
const customFontSizes = [
  { name: 'Small', value: '12px' },
  { name: 'Normal', value: '16px' },
  { name: 'Large', value: '20px' },
  { name: 'Extra Large', value: '24px' },
  { name: 'Huge', value: '32px' }
];

<RicherEditor
  content={content}
  onChange={setContent}
  fontSizeOptions={customFontSizes}
/>
```

### `fontFamilyOptions` - Custom Font Families

```tsx {2-9, 14}
// Custom font family options
const customFontFamilies = [
  { name: 'Default', value: 'system-ui, sans-serif' },
  { name: 'Serif', value: 'Georgia, serif' },
  { name: 'Monospace', value: 'Consolas, monospace' },
  { name: 'Handwriting', value: 'Comic Sans MS, cursive' },
  { name: 'Modern', value: 'Inter, sans-serif' }
];

<RicherEditor
  content={content}
  onChange={setContent}
  fontFamilyOptions={customFontFamilies}
/>
```

`extensions` and `customToolbarButtons` will be explained separately in the [Extending the Editor](EXTENDING.md) documentation.