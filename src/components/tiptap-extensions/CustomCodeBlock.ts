import { CodeBlock } from '@tiptap/extension-code-block';
import { mergeAttributes } from '@tiptap/core';

export const CustomCodeBlock = CodeBlock.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      language: {
        default: null,
        parseHTML: element => {
          const classNames = element.getAttribute('class') || '';
          const languageMatch = classNames.match(/language-(\w+)/);
          return languageMatch ? languageMatch[1] : null;
        },
        renderHTML: attributes => {
          if (!attributes.language) {
            return {};
          }
          return {
            class: `language-${attributes.language}`,
          };
        },
      },
    };
  },

  addCommands() {
    return {
      ...this.parent?.(),
            setCodeBlockLanguage: (language: string) => ({ commands }: { commands: any }) => {
        return commands.updateAttributes('codeBlock', { language });
      },
    };
  },

  addPasteRules() {
    return [
      {
        find: /^```(\w+)?\n([\s\S]+?)\n```$/g,
        type: this.type,
        getAttributes: (match: any) => ({
          language: match[1] || null,
        }),
        getContent: (match: any) => match[2],
      },
      // Also handle single-line code blocks
      {
        find: /^```(\w+)?\s*([^\n]+)$/gm,
        type: this.type,
        getAttributes: (match: any) => ({
          language: match[1] || null,
        }),
        getContent: (match: any) => match[2],
      },
    ];
  },

  addInputRules() {
    return [
      {
        find: /^```(\w+)?\s$/,
        type: this.type,
        getAttributes: (match: any) => ({
          language: match[1] || null,
        }),
      },
    ];
  },

  parseHTML() {
    return [
      {
        tag: 'pre',
        preserveWhitespace: 'full',
        getAttrs: (element) => {
          // Look for language class on the code element inside pre
          const codeElement = element.querySelector('code');
          if (codeElement) {
            const classNames = codeElement.getAttribute('class') || '';
            const languageMatch = classNames.match(/language-(\w+)/);
            if (languageMatch) {
              return { language: languageMatch[1] };
            }
          }
          return {};
        },
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    // Extract language class from HTMLAttributes
    const { class: languageClass, ...otherAttributes } = HTMLAttributes;

    return [
      'pre',
      mergeAttributes(this.options.HTMLAttributes, otherAttributes),
      ['code', languageClass ? { class: languageClass } : {}, 0],
    ];
  },
});