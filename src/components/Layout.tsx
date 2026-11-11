import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpenCheck, Upload } from 'lucide-react';

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const isImport = location.pathname.startsWith('/import');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2.5 font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <BookOpenCheck className="h-4 w-4" />
            </span>
            <span>Study &amp; Quiz Hub</span>
          </Link>

          <nav className="flex items-center gap-2">
            <Link
              to="/"
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                !isImport
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Môn học
            </Link>
            <Link
              to="/import"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isImport
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Upload className="h-4 w-4" />
              Import &amp; Backup
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full max-w-6xl px-4 sm:px-6 py-6">
        {children}
      </main>
    </div>
  );
}

