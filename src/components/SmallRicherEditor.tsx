
import React, { useCallback, useImperativeHandle, forwardRef, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Highlight from '@tiptap/extension-highlight';
import Youtube from '@tiptap/extension-youtube';
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from '@tiptap/extension-text-style';
import FontSize from '@tiptap/extension-font-size';
import Image from "@tiptap/extension-image";


import { CustomCodeBlock } from './tiptap-extensions/CustomCodeBlock';
import CustomSelect from './ui/CustomSelect';
import CustomDropdown from './ui/CustomDropdown';
import CodeLanguageSelect from './ui/CodeLanguageSelect';
import BoldIcon from '../icons/BoldIcon';
import UnderlineIcon from '../icons/UnderlineIcon';
import Highlighter from '../icons/Highlighter';
import CodeIcon from '../icons/CodeIcon';
import BulletListIcon from '../icons/BulletListIcon';
import OrderedListIcon from '../icons/OrderedListIcon';
import LinkIcon from '../icons/LinkIcon';
import ImageIcon from '../icons/ImageIcon';
import VideoIcon from '../icons/VideoIcon';
import AlignLeft from '../icons/AlignLeft';
import AlignCenter from '../icons/AlignCenter';
import AlignRight from '../icons/AlignRight';
import AlignJustify from '../icons/AlignJustify';
import FontSizeIcon from '../icons/FontSizeIcon';

// Import CSS inside the component so it is bundled
import './RicherEditor.css';
import { getSafeContent } from "@/lib/utils";
import Heading1 from "@/icons/Heading1";
import Heading2 from "@/icons/Heading2";
import Heading3 from "@/icons/Heading3";
import Heading4 from "@/icons/Heading4";
import Heading5 from "@/icons/Heading5";
import Heading6 from "@/icons/Heading6";
import ItalicIcon from "@/icons/ItalicIcon";
import StrikeIcon from "@/icons/StrikeIcon";
import BlockquoteIcon from "@/icons/BlockquoteIcon";
import Heading from "@/icons/Heading";

function isSafeUrl(url: string): boolean {
  try {
    const parsed = new URL(url, window.location.origin);
    return (
      ["http:", "https:"].includes(parsed.protocol) ||
      (parsed.protocol === "data:" && url.startsWith("data:image/"))
    );
  } catch {
    return false;
  }
}

const fontSizes = [
  { name: '10px', value: '10px' },
  { name: '12px', value: '12px' },
  { name: '14px', value: '14px' },
  { name: '16px', value: '16px' },
  { name: '18px', value: '18px' },
  { name: '20px', value: '20px' },
  { name: '22px', value: '22px' },
  { name: '24px', value: '24px' },
  { name: '26px', value: '26px' },
  { name: '28px', value: '28px' },
  { name: '30px', value: '30px' },
  { name: '32px', value: '32px' },
];

const fontFamilies = [
  { name: 'Sans-serif', value: 'sans-serif' },
  { name: 'Serif', value: 'serif' },
  { name: 'Monospace', value: 'monospace' },
  { name: 'Arial', value: 'Arial, sans-serif' },
  { name: 'Georgia', value: 'Georgia, serif' },
  { name: 'Inter', value: 'Inter, sans-serif' },
];

const alignmentOptions = [
  { value: 'left', label: <AlignLeft size={18} />, name: 'Left' },
  { value: 'center', label: <AlignCenter size={18} />, name: 'Center' },
  { value: 'right', label: <AlignRight size={18} />, name: 'Right' },
  { value: 'justify', label: <AlignJustify size={18} />, name: 'Justify' },
];

const headingOptions = [
  { level: 1, label: <Heading1 size={18} /> },
  { level: 2, label: <Heading2 size={18} /> },
  { level: 3, label: <Heading3 size={18} /> },
  { level: 4, label: <Heading4 size={18} /> },
  { level: 5, label: <Heading5 size={18} /> },
  { level: 6, label: <Heading6 size={18} /> },
];

// Add/expand defaultI18n with all needed keys
const defaultI18n = {
  bold: 'Bold',
  italic: 'Italic',
  underline: 'Underline',
  strike: 'Strikethrough',
  highlight: 'Highlight',
  code: 'Code Block',
  bulletList: 'Bullet List',
  orderedList: 'Ordered List',
  blockquote: 'Blockquote',
  hr: 'Horizontal Rule',
  link: 'Insert/Edit Link',
  image: 'Insert Image',
  video: 'Insert YouTube Video',
  insert: 'Insert',
  remove: 'Remove',
  add: 'Add',
  cancel: 'Cancel',
  fontSize: 'Font Size',
  heading: 'Heading',
  paragraph: 'Paragraph',
  url: 'URL',
  upload: 'Upload',
  pasteImageUrl: 'Paste image URL here...',
  pasteLinkUrl: 'Paste link URL here...',
  pasteVideoUrl: 'Paste YouTube video URL here...',
  width: 'Width',
  height: 'Height',
  uploading: 'Uploading...',
  uploadFailed: 'Upload failed',
  newTab: 'New Tab (_blank)',
  sameTab: 'Same Tab (_self)',
  parentFrame: 'Parent Frame (_parent)',
  topFrame: 'Top Frame (_top)',
};

// Update MenuBar to accept customToolbarButtons
const MenuBar = ({ editor, imageUploadUrl, excludeToolbarButtons = [], i18n = {}, fontSizeOptions, fontFamilyOptions, customToolbarButtons }: { editor: any, imageUploadUrl?: string, excludeToolbarButtons?: string[], i18n?: Record<string, string>, fontSizeOptions?: { name: string; value: string }[], fontFamilyOptions?: { name: string; value: string }[], customToolbarButtons?: React.ReactNode | ((editor: any) => React.ReactNode) }) => {
  // Add state to track editor changes in real-time
  const [editorState, setEditorState] = useState({
    isCodeBlockActive: false,
    codeBlockLanguage: null as string | null,
  });

  // Update state when editor changes
  React.useEffect(() => {
    if (!editor) return;

        const updateState = () => {
      setEditorState({
        isCodeBlockActive: editor.isActive("codeBlock"),
        codeBlockLanguage: editor.getAttributes('codeBlock').language,
      });
    };

    // Update state immediately
    updateState();

    // Listen for editor changes
    editor.on('selectionUpdate', updateState);
    editor.on('transaction', updateState);

    return () => {
      editor.off('selectionUpdate', updateState);
      editor.off('transaction', updateState);
    };
  }, [editor]);
  // Dropdown state for link, image, video
  const [imageDropdownOpen, setImageDropdownOpen] = useState(false);
  const [imageTab, setImageTab] = useState<'url' | 'upload'>('url');
  const [imageUrl, setImageUrl] = useState('');
  const [imageWidth, setImageWidth] = useState('');
  const [imageHeight, setImageHeight] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoDropdownOpen, setVideoDropdownOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoWidth, setVideoWidth] = useState('');
  const [videoHeight, setVideoHeight] = useState('');
  const [linkDropdownOpen, setLinkDropdownOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkTarget, setLinkTarget] = useState('_blank');
  const linkButtonRef = React.useRef<HTMLButtonElement>(null);
  const imageButtonRef = React.useRef<HTMLButtonElement>(null);
  const videoButtonRef = React.useRef<HTMLButtonElement>(null);

  const labels = { ...defaultI18n, ...i18n };

  // Helper for image by URL
  const handleImageUrlInsert = useCallback(() => {
    if (imageUrl && isSafeUrl(imageUrl)) {
      const attrs: any = { src: imageUrl };
      if (imageWidth) attrs.width = imageWidth;
      if (imageHeight) attrs.height = imageHeight;
      editor.chain().focus().setImage(attrs).run();
      setImageDropdownOpen(false);
      setImageUrl('');
      setImageWidth('');
      setImageHeight('');
    } else if (imageUrl) {
      window.alert('Invalid or unsafe image URL.');
    }
  }, [editor, imageUrl, imageWidth, imageHeight]);

  // Helper for image upload
  const handleImageUpload = async (file: File) => {
    if (!imageUploadUrl) return;
    setUploading(true);
    setUploadError(null);
    setUploadedImageUrl('');
    try {
      const formData = new FormData();
      formData.append('file', file);
      // If tiptap expects a specific field name, adjust here
      const response = await fetch(imageUploadUrl, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Upload failed');
      const data = await response.json();
      // Tiptap expects { link: 'url' } or similar; adjust as needed
      const url = data.link || data.url || data.src || '';
      if (!url) throw new Error('No image URL returned');
      setUploadedImageUrl(url);
    } catch (err: any) {
      setUploadError(err.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleUploadInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      handleImageUpload(file);
    }
  };

  const handleUploadedImageInsert = () => {
    if (uploadedImageUrl) {
      const attrs: any = { src: uploadedImageUrl };
      if (imageWidth) attrs.width = imageWidth;
      if (imageHeight) attrs.height = imageHeight;
      editor.chain().focus().setImage(attrs).run();
      setImageDropdownOpen(false);
      setUploadedImageUrl('');
      setImageFile(null);
      setImageWidth('');
      setImageHeight('');
      setUploadError(null);
      setImageTab('url');
    }
  };

  // Helper for video embedding (popover)
  const handleVideoUrlInsert = useCallback(() => {
    if (videoUrl && isSafeUrl(videoUrl)) {
      const attrs: any = { src: videoUrl };
      if (videoWidth) attrs.width = videoWidth;
      if (videoHeight) attrs.height = videoHeight;
      editor.chain().focus().setYoutubeVideo(attrs).run();
      setVideoDropdownOpen(false);
      setVideoUrl('');
      setVideoWidth('');
      setVideoHeight('');
    } else if (videoUrl) {
      window.alert('Invalid or unsafe video URL.');
    }
  }, [editor, videoUrl, videoWidth, videoHeight]);

  // Helper for link insertion (popover)
  const handleLinkInsert = useCallback(() => {
    if (linkUrl && isSafeUrl(linkUrl)) {
      editor.chain().focus().setLink({ href: linkUrl, target: linkTarget }).run();
      setLinkDropdownOpen(false);
      setLinkUrl('');
      setLinkTarget('_blank');
    } else if (linkUrl) {
      window.alert('Invalid or unsafe link URL.');
    }
  }, [editor, linkUrl, linkTarget]);
  const handleLinkUnset = useCallback(() => {
    editor.chain().focus().unsetLink().run();
    setLinkDropdownOpen(false);
    setLinkUrl('');
  }, [editor]);

  if (!editor) return null;

  return (
    <>
      <div className="richer-editor-toolbar">

        {/* Headings Dropdown */}
        {!excludeToolbarButtons.includes('heading') && (
          <>
            <CustomSelect
              value={'__placeholder__'}
              options={[
                { value: 'paragraph', label: 'Paragraph' },
                ...headingOptions.map(opt => ({ value: opt.level.toString(), label: `H${opt.level}` }))
              ]}
              onChange={(val: string) => {
                if (val === 'paragraph') {
                  editor.chain().focus().setParagraph().run();
                } else {
                  editor.chain().focus().toggleHeading({ level: Number(val) }).run();
                }
              }}
              className="richer-editor-select"
              placeholder={<Heading size={16}  />} // Use Heading1 icon as placeholder
              aria-label="Heading Level"
            />
            <div className="richer-editor-toolbar-divider" />
          </>
        )}

        {/* Font Size Dropdown */}
        {!excludeToolbarButtons.includes('fontSize') && (
          <CustomSelect
            value={'__placeholder__'}
            options={(fontSizeOptions || fontSizes).map(f => ({ value: f.value, label: f.name }))}
            onChange={val => editor.chain().focus().setFontSize(val).run()}
            className="richer-editor-select"
            placeholder={labels.fontSize} // Use FontSizeIcon as placeholder
            aria-label={labels.fontSize || 'Font Size'}
          />
        )}

        {/* Bold */}
        {!excludeToolbarButtons.includes('bold') && (
          <button onClick={() => editor.chain().focus().toggleBold().run()} className={`richer-editor-button${editor.isActive("bold") ? ' richer-editor-buttonActive' : ''}`} type="button" aria-label={labels.bold} title={labels.bold}><BoldIcon size={16} /></button>
        )}
        {!excludeToolbarButtons.includes('italic') && (
          <button onClick={() => editor.chain().focus().toggleItalic().run()} className={`richer-editor-button ${editor.isActive("italic") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={labels.italic} title={labels.italic}><ItalicIcon size={16} /></button>
        )}
        {/* Underline */}
        {!excludeToolbarButtons.includes('underline') && (
          <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={`richer-editor-button${editor.isActive("underline") ? ' richer-editor-buttonActive' : ''}`} type="button" aria-label={labels.underline} title={labels.underline}><UnderlineIcon size={16} /></button>
        )}
        {!excludeToolbarButtons.includes('strike') && (
          <button onClick={() => editor.chain().focus().toggleStrike().run()} className={`richer-editor-button ${editor.isActive("strike") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={labels.strike} title={labels.strike}><StrikeIcon size={16} /></button>
        )}
        {/* Highlighter (single color) */}
        {!excludeToolbarButtons.includes('highlight') && (
          <button onClick={() => editor.chain().focus().toggleHighlight({ color: '#fff59d' }).run()} className={`richer-editor-button${editor.isActive("highlight") ? ' richer-editor-buttonActive' : ''}`} type="button" aria-label={labels.highlight} title={labels.highlight}><Highlighter size={16} /></button>
        )}
        {/* Code block */}
        {!excludeToolbarButtons.includes('code') && (
          <>
            <button onClick={() => {
              if (editor.isActive('codeBlock')) {
                editor.chain().focus().toggleCodeBlock().run();
              } else {
                // Create a code block with a space to ensure it's not empty
                editor.chain().focus().toggleCodeBlock().insertContent(' ').run();
              }
            }} className={`richer-editor-button${editorState.isCodeBlockActive ? ' richer-editor-buttonActive' : ''}`} type="button" aria-label={labels.code} title={labels.code}><CodeIcon size={16} /></button>
            {editorState.isCodeBlockActive && (
              <CodeLanguageSelect
                editor={editor}
                currentLanguage={editorState.codeBlockLanguage}
                onLanguageChange={(language) => {
                  editor.chain().focus().setCodeBlockLanguage(language).run();
                }}
              />
            )}
            <div className="richer-editor-toolbar-divider" />
          </>
        )}
        {/* Unordered List */}
        {!excludeToolbarButtons.includes('bulletList') && (
          <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={`richer-editor-button${editor.isActive("bulletList") ? ' richer-editor-buttonActive' : ''}`} type="button" aria-label={labels.bulletList} title={labels.bulletList}><BulletListIcon size={16} /></button>
        )}
        {/* Ordered List */}
        {!excludeToolbarButtons.includes('orderedList') && (
          <>
            <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={`richer-editor-button${editor.isActive("orderedList") ? ' richer-editor-buttonActive' : ''}`} type="button" aria-label={labels.orderedList} title={labels.orderedList}><OrderedListIcon size={16} /></button>
            <div className="richer-editor-toolbar-divider" />
          </>
        )}
        {/* Blockquote, hr */}
        {!excludeToolbarButtons.includes('blockquote') && (
          <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={`richer-editor-button ${editor.isActive("blockquote") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={labels.blockquote} title={labels.blockquote}><BlockquoteIcon size={16} /></button>
        )}
        {!excludeToolbarButtons.includes('hr') && (
          <>
            <button onClick={() => editor.chain().focus().setHorizontalRule().run()} className="richer-editor-button" type="button" aria-label={labels.hr} title={labels.hr}>HR</button>
            <div className="richer-editor-toolbar-divider" />
          </>
        )}
        {/* Link Dropdown */}
        {!excludeToolbarButtons.includes('link') && (
          <CustomDropdown
            open={linkDropdownOpen}
            onOpenChange={(open) => {
              setLinkDropdownOpen(open);
              if (open) {
                setLinkUrl(editor.getAttributes('link').href || '');
                setLinkTarget(editor.getAttributes('link').target || '_blank');
              }
            }}
            trigger={
              <button
                className={`richer-editor-button${editor.isActive("link") ? ' richer-editor-buttonActive' : ''}`}
                type="button"
                aria-label={labels.link}
                title={labels.link}
              >
                <LinkIcon size={16} />
              </button>
            }
            width="280px"
          >
            <div className="richer-editor-mb2 richer-editor-fontSemibold richer-editor-textBase">{labels.link}</div>
            <input
              type="text"
              placeholder={labels.pasteLinkUrl}
              value={linkUrl}
              onChange={e => setLinkUrl(e.target.value)}
              className="richer-editor-input"
              autoFocus
            />
            <select
              name="target"
              value={linkTarget}
              onChange={e => setLinkTarget(e.target.value)}
              className="richer-editor-input"
              style={{ marginBottom: 8 }}
            >
              <option value="_blank">{labels.newTab}</option>
              <option value="_self">{labels.sameTab}</option>
              <option value="_parent">{labels.parentFrame}</option>
              <option value="_top">{labels.topFrame}</option>
            </select>
            <div className="richer-editor-flexRow">
              <button
                className="richer-editor-primaryBtn"
                onClick={handleLinkInsert}
                disabled={!linkUrl}
              >
                {labels.insert}
              </button>
              <button
                className="richer-editor-secondaryBtn"
                onClick={handleLinkUnset}
                disabled={!editor.isActive('link')}
              >
                {labels.remove}
              </button>
            </div>
          </CustomDropdown>
        )}
        {/* Image Dropdown */}
        {!excludeToolbarButtons.includes('image') && (
          <CustomDropdown
            open={imageDropdownOpen}
            onOpenChange={(open) => {
              setImageDropdownOpen(open);
              if (open && !imageUploadUrl) setImageTab('url');
            }}
            trigger={
              <button
                className="richer-editor-button"
                type="button"
                aria-label={labels.image}
                title={labels.image}
              >
                <ImageIcon size={16} />
              </button>
            }
            width="320px"
          >
            <div className="richer-editor-mb2 richer-editor-fontSemibold richer-editor-textBase flex gap-4 border-b pb-2">
              <button className={`richer-editor-button${imageTab === 'url' ? ' richer-editor-buttonActive' : ''}`} onClick={() => setImageTab('url')}>{labels.url}</button>
              {imageUploadUrl && (
                <button className={`richer-editor-button${imageTab === 'upload' ? ' richer-editor-buttonActive' : ''}`} onClick={() => setImageTab('upload')}>{labels.upload}</button>
              )}
            </div>
            {imageTab === 'url' && (
              <>
                <input
                  type="text"
                  placeholder={labels.pasteImageUrl}
                  value={imageUrl}
                  onChange={e => setImageUrl(e.target.value)}
                  className="richer-editor-input"
                  autoFocus
                />
                <div className="richer-editor-flexRowMb2">
                  <input
                    type="text"
                    placeholder={labels.width}
                    value={imageWidth}
                    onChange={e => setImageWidth(e.target.value)}
                    className="richer-editor-input"
                  />
                  <input
                    type="text"
                    placeholder={labels.height}
                    value={imageHeight}
                    onChange={e => setImageHeight(e.target.value)}
                    className="richer-editor-input"
                  />
                </div>
                <div className="richer-editor-textXs">Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%).</div>
                <button
                  className="richer-editor-primaryBtn"
                  onClick={handleImageUrlInsert}
                  disabled={!imageUrl}
                >
                  {labels.image}
                </button>
              </>
            )}
            {imageTab === 'upload' && imageUploadUrl && (
              <>
                {!uploadedImageUrl && (
                  <>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleUploadInputChange}
                      className="richer-editor-mb2"
                      disabled={uploading}
                    />
                    {uploading && <div className="richer-editor-textSm richer-editor-textBlue600 richer-editor-mb2">{labels.uploading}</div>}
                    {uploadError && <div className="richer-editor-textSm richer-editor-textRed600 richer-editor-mb2">{labels.uploadFailed}</div>}
                  </>
                )}
                {uploadedImageUrl && (
                  <>
                    <div className="richer-editor-mb2 flex flex-col items-center">
                      <img src={uploadedImageUrl} alt="Preview" className="richer-editor-maxH40 richer-editor-maxWFull rounded border mb-2" />
                    </div>
                    <div className="richer-editor-flexRowMb2">
                      <input
                        type="text"
                        placeholder={labels.width}
                        value={imageWidth}
                        onChange={e => setImageWidth(e.target.value)}
                        className="richer-editor-input"
                      />
                      <input
                        type="text"
                        placeholder={labels.height}
                        value={imageHeight}
                        onChange={e => setImageHeight(e.target.value)}
                        className="richer-editor-input"
                      />
                    </div>
                    <div className="richer-editor-flexRow">
                      <button
                        className="richer-editor-primaryBtn"
                        onClick={handleUploadedImageInsert}
                      >
                        {labels.add}
                      </button>
                      <button
                        className="richer-editor-secondaryBtn"
                        onClick={() => {
                          setUploadedImageUrl('');
                          setImageFile(null);
                          setImageWidth('');
                          setImageHeight('');
                          setUploadError(null);
                        }}
                      >
                        {labels.cancel}
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </CustomDropdown>
        )}
        {/* Video Dropdown */}
        {!excludeToolbarButtons.includes('video') && (
          <CustomDropdown
            open={videoDropdownOpen}
            onOpenChange={(open) => setVideoDropdownOpen(open)}
            trigger={
              <button
                className="richer-editor-button"
                type="button"
                aria-label={labels.video}
                title={labels.video}
              >
                <VideoIcon size={16} />
              </button>
            }
            width="280px"
          >
            <div className="richer-editor-mb2 richer-editor-fontSemibold richer-editor-textBase">{labels.video}</div>
            <input
              type="text"
              placeholder={labels.pasteVideoUrl}
              value={videoUrl}
              onChange={e => setVideoUrl(e.target.value)}
              className="richer-editor-input"
              autoFocus
            />
            <div className="richer-editor-flexRowMb2">
              <input
                type="text"
                placeholder={labels.width}
                value={videoWidth}
                onChange={e => setVideoWidth(e.target.value)}
                className="richer-editor-input"
              />
              <input
                type="text"
                placeholder={labels.height}
                value={videoHeight}
                onChange={e => setVideoHeight(e.target.value)}
                className="richer-editor-input"
              />
            </div>
            <div className="richer-editor-textXs">Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%).</div>
            <button
              className="richer-editor-primaryBtn"
              onClick={handleVideoUrlInsert}
              disabled={!videoUrl}
            >
              {labels.video}
            </button>
          </CustomDropdown>
        )}
        {/* Alignment Dropdown */}
        {!excludeToolbarButtons.includes('align') && (
          <CustomSelect
            value={'__placeholder__'}
            options={alignmentOptions.map(opt => ({ value: opt.value, label: <>{opt.label} {opt.name}</> }))}
            onChange={val => editor.chain().focus().setTextAlign(val).run()}
            className="richer-editor-select"
            placeholder={<AlignJustify size={16} />}
          />
        )}
        {/* Custom Toolbar Buttons (rendered at the end) */}
        {customToolbarButtons && (typeof customToolbarButtons === 'function' ? customToolbarButtons(editor) : customToolbarButtons)}
      </div>
    </>
  );
};

// Update SmallRicherEditorProps to accept only { json: object }
interface SmallRicherEditorProps {
  content?: { json?: object | string, html?: string };
  onChange?: (value: { html: string; json: object | string }) => void;
  imageUploadUrl?: string;
  minHeight?: string;
  maxHeight?: string;
  editorProps?: any;
  className?: string;
  excludeToolbarButtons?: string[];
  i18n?: Record<string, string>;
  fontSizeOptions?: { name: string; value: string }[];
  fontFamilyOptions?: { name: string; value: string }[];
  extensions?: any[]; // Allow user to pass additional TipTap extensions
  customToolbarButtons?: React.ReactNode | ((editor: any) => React.ReactNode);
}

const SmallRicherEditor  = forwardRef(function SmallRicherEditor({
  content = {},
  onChange,
  imageUploadUrl,
  minHeight,
  maxHeight,
  editorProps = {},
  className = '',
  excludeToolbarButtons = [],
  i18n = {},
  fontSizeOptions,
  fontFamilyOptions,
  extensions = [], // default to empty array
  customToolbarButtons,
}: SmallRicherEditorProps, ref) {
  // Use safe content conversion only for initial value
  const initialContent = getSafeContent(content);
  const defaultExtensions = [
    StarterKit.configure({
      codeBlock: false, // Disable default code block to use our custom one
    }),
    CustomCodeBlock,
    Link.configure({ openOnClick: true }),
    Highlight.configure({ multicolor: false, HTMLAttributes: { style: 'background-color: #fff59d' } }),
    TextAlign.configure({ types: ["paragraph"] }),
    Image,
    Youtube.configure({
      controls: true,
      allowFullscreen: true,
      width: 640,
      height: 360,
      HTMLAttributes: {
        class: 'mx-auto my-4 rounded-lg shadow',
      },
    }),
    TextStyle,
    FontSize
  ];
  const editor = useEditor({
    extensions: [
      ...defaultExtensions,
      ...extensions
    ],
    content: initialContent,
    editorProps: {
      ...editorProps,
      attributes: {
        class: `richer-editor-textarea ${className || ''}`,
        style: `${minHeight ? `min-height:${minHeight};` : ''}${editorProps?.attributes?.style || ''}`,
        spellCheck: 'true',
        ...editorProps?.attributes,
      },
    },
    immediatelyRender: false,
  });

    // Add effect to update content if prop changes and editor is empty
    React.useEffect(() => {
      if (editor && content && editor.isEmpty) {
        const safeContent = getSafeContent(content);
        const currentContent = editor.getJSON();
        // Only update if the new content is different from current
        if (JSON.stringify(currentContent) !== JSON.stringify(safeContent)) {
          editor.commands.setContent(safeContent);
        }
      }
    }, [content, editor]);

  // Handler to call onChange with current content
  const save = useCallback(() => {
    if (editor && onChange) {
      onChange({
        html: editor.getHTML(),
        json: editor.getJSON(),
      });
    }
  }, [editor, onChange]);

  // Handler for blur event
  const handleBlur = useCallback(() => {
    save();
  }, [save]);

  // Expose save() and clear() via ref
  useImperativeHandle(ref, () => ({
    save,
    editor,
    clear: () => editor?.commands.clearContent(),
  }), [save, editor]);

  return (
      <div className={`richer-editor-roundedMdBorder`}>
        <MenuBar editor={editor} imageUploadUrl={imageUploadUrl} excludeToolbarButtons={excludeToolbarButtons} i18n={i18n} fontSizeOptions={fontSizeOptions} fontFamilyOptions={fontFamilyOptions} customToolbarButtons={customToolbarButtons} />
        <div className="richer-editor-overflowAuto" style={{maxHeight: maxHeight}}>
          <EditorContent editor={editor} onBlur={handleBlur} />
        </div>
      </div>
  );
});

export default SmallRicherEditor;