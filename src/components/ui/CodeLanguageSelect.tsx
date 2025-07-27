import React, { useState } from 'react';
import CustomDropdown from './CustomDropdown';
import ExpandIcon from '@/icons/ExpandIcon';

interface CodeLanguageSelectProps {
  editor: any;
  currentLanguage?: string | null;
  onLanguageChange: (language: string) => void;
}

const commonLanguages = [
  { name: 'Plain Text', value: '' },
  { name: 'JavaScript', value: 'javascript' },
  { name: 'TypeScript', value: 'typescript' },
  { name: 'JSX', value: 'jsx' },
  { name: 'TSX', value: 'tsx' },
  { name: 'HTML', value: 'html' },
  { name: 'CSS', value: 'css' },
  { name: 'SCSS', value: 'scss' },
  { name: 'SASS', value: 'sass' },
  { name: 'JSON', value: 'json' },
  { name: 'Python', value: 'python' },
  { name: 'Java', value: 'java' },
  { name: 'C++', value: 'cpp' },
  { name: 'C#', value: 'csharp' },
  { name: 'PHP', value: 'php' },
  { name: 'Ruby', value: 'ruby' },
  { name: 'Go', value: 'go' },
  { name: 'Rust', value: 'rust' },
  { name: 'Swift', value: 'swift' },
  { name: 'Kotlin', value: 'kotlin' },
  { name: 'Scala', value: 'scala' },
  { name: 'R', value: 'r' },
  { name: 'SQL', value: 'sql' },
  { name: 'Markdown', value: 'markdown' },
  { name: 'YAML', value: 'yaml' },
  { name: 'XML', value: 'xml' },
  { name: 'Shell', value: 'shell' },
  { name: 'Bash', value: 'bash' },
  { name: 'PowerShell', value: 'powershell' },
  { name: 'Docker', value: 'dockerfile' },
  { name: 'Git', value: 'git' },
  { name: 'Diff', value: 'diff' },
  { name: 'GraphQL', value: 'graphql' },
  { name: 'Vue', value: 'vue' },
  { name: 'Svelte', value: 'svelte' },
  { name: 'Angular', value: 'angular' },
  { name: 'React', value: 'react' },
  { name: 'Next.js', value: 'nextjs' },
  { name: 'Tailwind CSS', value: 'tailwindcss' },
  { name: 'Prisma', value: 'prisma' },
  { name: 'MongoDB', value: 'mongodb' },
  { name: 'PostgreSQL', value: 'postgresql' },
  { name: 'MySQL', value: 'mysql' },
  { name: 'Redis', value: 'redis' },
  { name: 'Nginx', value: 'nginx' },
  { name: 'Apache', value: 'apache' },
  { name: 'Linux', value: 'linux' },
  { name: 'Windows', value: 'windows' },
  { name: 'macOS', value: 'macos' },
];

const CodeLanguageSelect: React.FC<CodeLanguageSelectProps> = ({
  editor,
  currentLanguage,
  onLanguageChange,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getLanguageDisplayName = (value: string | null | undefined) => {
    if (!value) return 'Plain Text';
    const lang = commonLanguages.find(l => l.value === value);
    return lang ? lang.name : value;
  };

  const handleLanguageSelect = (language: string) => {
    onLanguageChange(language);
    setDropdownOpen(false);
    editor.commands.focus();
  };

  return (
    <CustomDropdown
      open={dropdownOpen}
      onOpenChange={setDropdownOpen}
      trigger={
        <button
          className="richer-editor-button richer-editor-code-language-select"
          type="button"
          aria-label="Select code language"
          title="Select code language"
        >
          <span>{getLanguageDisplayName(currentLanguage)}</span>
          <ExpandIcon size={12} />
        </button>
      }
      width="200px"
    >
      <div className="richer-editor-mb2 richer-editor-fontSemibold richer-editor-textBase" style={{ color: 'var(--richer-editor-primary)', borderBottom: '1px solid var(--richer-editor-border)', paddingBottom: '8px' }}>
        Select Language
      </div>
      <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {commonLanguages.map((lang) => (
          <button
            key={lang.value}
            onClick={() => handleLanguageSelect(lang.value)}
            className={`richer-editor-button richer-editor-textSm richer-editor-wFull richer-editor-textLeft ${
              currentLanguage === lang.value ? 'richer-editor-buttonActive' : ''
            }`}
            style={{
              justifyContent: 'flex-start',
              padding: '8px 12px',
              marginBottom: '1px',
              fontSize: '13px',
              borderRadius: '4px',
              border: 'none',
              background: currentLanguage === lang.value ? 'var(--richer-editor-primary)' : 'transparent',
              color: currentLanguage === lang.value ? 'white' : 'var(--richer-editor-text)',
              transition: 'all 0.15s ease'
            }}
            type="button"
          >
            {lang.name}
          </button>
        ))}
      </div>
    </CustomDropdown>
  );
};

export default CodeLanguageSelect;