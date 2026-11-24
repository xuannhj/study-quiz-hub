import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StudyContentRenderer } from './StudyContentRenderer';

describe('StudyContentRenderer', () => {
  it('renders fenced code blocks inside dark CodeBlock with language badge and preserves blank lines', () => {
    const content = `• **Ví dụ React.lazy:**
  \`\`\`jsx
  const Dashboard = React.lazy(() => import('./Dashboard'));

  function App() {
    return <Dashboard />;
  }
  \`\`\`
• **Ghi chú:** Dùng kèm \`<Suspense>\`.`;

    const { container } = render(<StudyContentRenderer content={content} />);

    // Language badge rendered by CodeBlock
    expect(screen.getByText('JSX')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sao chép/i })).toBeInTheDocument();

    // Code content inside <pre><code> without raw triple backticks
    const pre = container.querySelector('pre');
    expect(pre).not.toBeNull();
    expect(pre?.textContent).toContain("const Dashboard = React.lazy(() => import('./Dashboard'));");
    expect(pre?.textContent).toContain('function App()');
    expect(container.textContent).not.toContain('```');

    // Surrounding inline text and inline code still render
    expect(screen.getByText('Ví dụ React.lazy:')).toBeInTheDocument();
    expect(screen.getByText('<Suspense>')).toBeInTheDocument();
  });
});
