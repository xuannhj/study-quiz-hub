/**
 * Strips redundant scraped numbering/header prefixes from question prompts
 * (e.g. "[Đề 01 - Câu 32]", "### Trang 1/50", "**Câu 1.**", "Question: 49 (Choose 1 answer)")
 * so the UI never displays duplicate question numbers next to "Câu 1 / 60".
 */
export function cleanQuestionPrompt(raw: string): string {
  if (!raw) return '';
  let s = raw.trim();
  // Remove scraped FrosTES exam headers
  s = s.replace(/^#\s*[A-Z0-9_]+\s*\n+/i, '');
  s = s.replace(/^>\s*Môn:[^\n]*\n+/m, '');
  s = s.replace(/^###\s*Trang\s*\d+\/\d+\s*\n+/im, '');
  // Remove leading "[Đề 01 - Câu 32]" / "[Đề 12 – Câu 5]" / "[Câu 12]" tags
  s = s.replace(/^\s*\[(?:Đề\s*\d+\s*[-–—]\s*)?Câu\s*\d+\]\s*/i, '');
  // Remove leading "**Câu 1.**" / "Câu 1:" / "Question: 49"
  s = s.replace(/^\*\*Câu\s*\d+[.:]?\*\*\s*/i, '');
  s = s.replace(/^Question\s*:?\s*\d+\s*\n*/i, '');
  s = s.replace(/^\(Choose\s+\d+\s+answers?\)\s*\n*/i, '');
  // Remove stray leading "A\n\nB\n\nC\n\nD\n\n" prefixes from scraped prompts
  s = s.replace(/^(?:[A-F]\s*\n+){2,}/, '');
  return s.trim();
}
