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
  { name: 'Next.js', value: 'javascript-nextjs' },
  { name: 'Tailwind CSS', value: 'css-tailwind' },
  { name: 'Prisma', value: 'sql-prisma' },
  { name: 'MongoDB', value: 'javascript-mongodb' },
  { name: 'PostgreSQL', value: 'sql-postgresql' },
  { name: 'MySQL', value: 'sql-mysql' },
  { name: 'Redis', value: 'bash-redis' },
  { name: 'Linux', value: 'bash-linux' },
  { name: 'Windows', value: 'powershell-windows' },
  { name: 'macOS', value: 'bash-macos' },
  { name: 'Nginx', value: 'bash-nginx' },
  { name: 'Apache', value: 'bash-apache' },
];

const CodeLanguageSelect: React.FC<CodeLanguageSelectProps> = ({
  editor,
  currentLanguage,
  onLanguageChange,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getLanguageDisplayName = (value: string | null | undefined) => {
    if (!value) return 'Plain Text';

    // First try to find an exact match
    const lang = commonLanguages.find(l => l.value === value);
    if (lang) return lang.name;

    // If no exact match, try to find a base language match
    // This handles cases where the editor might store base language values
    const baseLang = commonLanguages.find(l => {
      if (l.value === value) return true;
      // Handle extended values by checking if they start with the base value
      if (value && l.value && value.startsWith(l.value + '-')) return true;
      return false;
    });

    return baseLang ? baseLang.name : value;
  };

  const handleLanguageSelect = (language: string) => {
    // Map extended language values back to base language values for the editor
    let baseLanguage = language;
    if (language.includes('-')) {
      baseLanguage = language.split('-')[0];
    }

    onLanguageChange(baseLanguage);
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
      <div className="richer-editor-dropdown-header">
        Select Language
      </div>
      <div className="richer-editor-language-list">
        {commonLanguages.map((lang) => (
          <button
            key={lang.value}
            onClick={() => handleLanguageSelect(lang.value)}
            className={`richer-editor-language-option ${
              currentLanguage === lang.value ? 'richer-editor-language-option-active' : ''
            }`}
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