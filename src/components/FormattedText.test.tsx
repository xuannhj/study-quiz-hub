import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormattedText, FormattedOptionText } from './FormattedText';

describe('FormattedText Component', () => {
  it('renders plain text normally', () => {
    render(<FormattedText content="Đây là một câu hỏi trắc nghiệm bình thường." />);
    expect(screen.getByText(/Đây là một câu hỏi/)).toBeDefined();
  });

  it('renders inline bold and inline code', () => {
    const { container } = render(
      <FormattedText content="Cho đoạn mã sử dụng **Destructuring** và `Rest operator`:" />
    );
    const strongEl = container.querySelector('strong');
    expect(strongEl?.textContent).toBe('Destructuring');

    const codeEl = container.querySelector('code');
    expect(codeEl?.textContent).toBe('Rest operator');
  });

  it('renders fenced code blocks with language badge and code block container', () => {
    const content = `Cho đoạn mã:
\`\`\`js
const [first, , third, ...rest] = [10, 20, 30, 40, 50];
console.log(third, rest);
\`\`\`
Kết quả in ra là gì?`;

    const { container } = render(<FormattedText content={content} />);
    expect(screen.getByText('JS')).toBeDefined();
    expect(screen.getByText('Sao chép')).toBeDefined();

    const preEl = container.querySelector('pre');
    expect(preEl?.textContent).toContain('const [first, , third, ...rest]');
  });

  it('handles options with code formatting', () => {
    const { container } = render(
      <FormattedOptionText text="import { multiply, PI, sum } from './utils';" />
    );
    expect(container.firstChild).toHaveClass('font-mono');
  });
});
