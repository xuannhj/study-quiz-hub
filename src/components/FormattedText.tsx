import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface FormattedTextProps {
  content: string;
  className?: string;
  codeClassName?: string;
  inlineCodeClassName?: string;
}

interface CodeBlockProps {
  language?: string;
  code: string;
  className?: string;
}

export function CodeBlock({ language, code, className = '' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const displayLang = (language || 'code').toUpperCase();

  return (
    <div
      className={`my-3 overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900 text-slate-100 shadow-sm ${className}`}
    >
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/70 px-3.5 py-1.5 text-[11px] font-mono font-medium text-slate-400 select-none">
        <span className="flex items-center gap-1.5 tracking-wider text-moss">
          <span className="h-1.5 w-1.5 rounded-full bg-moss inline-block" />
          {displayLang}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors"
          title="Sao chép đoạn mã"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-emerald-400" />
              <span className="text-emerald-400 font-sans text-[11px]">Đã chép</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span className="font-sans text-[11px]">Sao chép</span>
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-3.5 font-mono text-xs sm:text-[13px] leading-relaxed whitespace-pre selection:bg-moss/30 selection:text-white">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}

function renderInlineText(
  text: string,
  keyPrefix: string,
  inlineCodeClassName?: string
): React.ReactNode[] {
  // Regex matches: **bold**, *italic*, `inline code`
  const tokenRegex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, idx) => {
    const key = `${keyPrefix}-${idx}`;
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={key} className="font-bold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={key} className="italic text-ink/90">
          {part.slice(1, -1)}
        </em>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={key}
          className={
            inlineCodeClassName ||
            'mx-0.5 rounded-md bg-amber-500/10 dark:bg-amber-400/15 px-1.5 py-0.5 font-mono text-xs sm:text-[13px] font-medium text-amber-800 dark:text-amber-300 border border-amber-300/40 inline-block align-baseline'
          }
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    // Handle newlines within plain text part
    if (part.includes('\n')) {
      const subLines = part.split('\n');
      return (
        <React.Fragment key={key}>
          {subLines.map((sub, sIdx) => (
            <React.Fragment key={`${key}-s${sIdx}`}>
              {sIdx > 0 && <br />}
              {sub}
            </React.Fragment>
          ))}
        </React.Fragment>
      );
    }

    return <React.Fragment key={key}>{part}</React.Fragment>;
  });
}

export function FormattedText({
  content,
  className = '',
  codeClassName,
  inlineCodeClassName,
}: FormattedTextProps) {
  if (!content) return null;

  // Split by fenced code blocks: ```lang\ncode\n``` or ```code```
  // Pattern matches ``` optional_lang \n or space ... ```
  const codeBlockRegex = /```([a-zA-Z0-9_#-]*)\s*\n?([\s\S]*?)```/g;
  const segments: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = codeBlockRegex.exec(content)) !== null) {
    const textBefore = content.slice(lastIndex, match.index);
    if (textBefore) {
      segments.push(
        <span key={`text-${lastIndex}`}>
          {renderInlineText(textBefore, `pre-${lastIndex}`, inlineCodeClassName)}
        </span>
      );
    }

    const language = match[1]?.trim() || '';
    const code = match[2] || '';
    segments.push(
      <CodeBlock
        key={`code-${match.index}`}
        language={language}
        code={code}
        className={codeClassName}
      />
    );

    lastIndex = match.index + match[0].length;
  }

  const remainingText = content.slice(lastIndex);
  if (remainingText) {
    segments.push(
      <span key={`text-${lastIndex}`}>
        {renderInlineText(remainingText, `post-${lastIndex}`, inlineCodeClassName)}
      </span>
    );
  }

  return <div className={`leading-relaxed ${className}`}>{segments}</div>;
}

export function FormattedOptionText({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  // Check if option is entirely a code snippet (e.g. starts with `import`, `const`, `return`, `function`, or has backticks)
  const isLikelyCode =
    text.includes('`') ||
    text.includes(';') ||
    /^(import |export |const |let |var |function |return |class |<[A-Z]|\[.*\]|\{.*\})/m.test(
      text.trim()
    );

  if (text.includes('```')) {
    return <FormattedText content={text} className={className} />;
  }

  if (text.includes('`') || text.includes('**')) {
    return (
      <span className={className}>
        {renderInlineText(text, 'opt')}
      </span>
    );
  }

  if (isLikelyCode) {
    return (
      <span className={`font-mono text-xs sm:text-[13px] ${className}`}>
        {text}
      </span>
    );
  }

  return <span className={className}>{text}</span>;
}
