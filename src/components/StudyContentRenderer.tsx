import { Fragment } from 'react';
import { CodeBlock } from './FormattedText';

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={idx} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={idx} className="italic text-ink/90">
          {part.slice(1, -1)}
        </em>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={idx}
          className="rounded-md bg-sage-tint px-1.5 py-0.5 text-xs font-mono text-moss"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <Fragment key={idx}>{part}</Fragment>;
  });
}

function parseTable(lines: string[]) {
  const rows = lines
    .map((line) =>
      line
        .trim()
        .replace(/^\|/, '')
        .replace(/\|$/, '')
        .split('|')
        .map((c) => c.trim())
    )
    .filter((cells) => !cells.every((cell) => /^:?-{2,}:?$/.test(cell)));
  const [header, ...body] = rows;
  return { header: header ?? [], body };
}

function dedentCode(raw: string): string {
  const lines = raw.replace(/\r\n/g, '\n').split('\n');
  while (lines.length > 0 && lines[0].trim() === '') lines.shift();
  while (lines.length > 0 && lines[lines.length - 1].trim() === '') lines.pop();
  const indents = lines
    .filter((l) => l.trim().length > 0)
    .map((l) => l.match(/^[ \t]*/)?.[0].length ?? 0);
  const minIndent = indents.length > 0 ? Math.min(...indents) : 0;
  return lines.map((l) => l.slice(minIndent)).join('\n');
}

function renderTextBlocks(text: string, keyPrefix: string) {
  const trimmed = text.trim();
  if (!trimmed) return null;

  const blocks = trimmed.split(/\n\s*\n/);

  return blocks.map((block, bIdx) => {
    const lines = block
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length === 0) return null;

    if (lines.length >= 2 && lines.every((l) => l.startsWith('|'))) {
      const { header, body } = parseTable(lines);
      return (
        <div
          key={`${keyPrefix}-t-${bIdx}`}
          className="overflow-x-auto rounded-2xl border border-sage-border bg-paper"
        >
          <table className="min-w-full divide-y divide-sage-border text-left text-sm">
            <thead className="bg-sage-tint text-ink">
              <tr>
                {header.map((cell, cIdx) => (
                  <th key={cIdx} className="px-3.5 py-2.5 font-semibold">
                    {renderInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-sage-border/60 bg-paper">
              {body.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  className={rIdx % 2 === 1 ? 'bg-mist/60' : 'bg-paper'}
                >
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-3.5 py-2.5 align-top">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    if (lines.every((l) => l.startsWith('- '))) {
      return (
        <ul
          key={`${keyPrefix}-ul-${bIdx}`}
          className="list-disc pl-5 space-y-1.5 marker:text-moss"
        >
          {lines.map((line, lIdx) => (
            <li key={lIdx}>{renderInline(line.slice(2))}</li>
          ))}
        </ul>
      );
    }

    return (
      <div key={`${keyPrefix}-p-${bIdx}`} className="space-y-1.5">
        {lines.map((line, lIdx) =>
          line.startsWith('- ') ? (
            <div key={lIdx} className="flex gap-2 pl-2">
              <span className="text-moss font-bold">•</span>
              <span>{renderInline(line.slice(2))}</span>
            </div>
          ) : (
            <p key={lIdx}>{renderInline(line)}</p>
          )
        )}
      </div>
    );
  });
}

export function StudyContentRenderer({ content }: { content: string }) {
  const codeBlockRegex = /```([a-zA-Z0-9_#-]*)[ \t]*\r?\n([\s\S]*?)```/g;
  const segments: Array<
    | { kind: 'text'; value: string }
    | { kind: 'code'; language: string; value: string }
  > = [];

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = codeBlockRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        kind: 'text',
        value: content.slice(lastIndex, match.index),
      });
    }
    segments.push({
      kind: 'code',
      language: match[1]?.trim() || 'code',
      value: dedentCode(match[2] ?? ''),
    });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    segments.push({
      kind: 'text',
      value: content.slice(lastIndex),
    });
  }

  return (
    <div className="space-y-3 text-sm leading-relaxed text-ink/90">
      {segments.map((seg, idx) =>
        seg.kind === 'code' ? (
          <CodeBlock
            key={`code-${idx}`}
            language={seg.language}
            code={seg.value}
          />
        ) : (
          <Fragment key={`txt-${idx}`}>
            {renderTextBlocks(seg.value, `seg-${idx}`)}
          </Fragment>
        )
      )}
    </div>
  );
}
