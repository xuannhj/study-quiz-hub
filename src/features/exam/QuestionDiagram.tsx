import { useEffect, useState } from 'react';
import { Maximize2, X } from 'lucide-react';

interface QuestionDiagramProps {
  imageUrl?: string;
  imageCaption?: string;
  compact?: boolean;
}

/**
 * Renders a quiz diagram image from public assets with optional click-to-zoom lightbox.
 */
export function QuestionDiagram({
  imageUrl,
  imageCaption,
  compact = false,
}: QuestionDiagramProps) {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!zoomed) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoomed(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [zoomed]);

  if (!imageUrl) return null;

  return (
    <>
      <figure className="rounded-2xl border border-sage-border bg-mist/70 p-3">
        <div className="relative overflow-hidden rounded-xl border border-sage-border/80 bg-white p-2">
          <button
            type="button"
            onClick={() => setZoomed(true)}
            className="group relative block w-full cursor-zoom-in text-left focus:outline-none focus:ring-2 focus:ring-moss/40 rounded-lg"
            aria-label={`Phóng to hình minh họa${imageCaption ? `: ${imageCaption}` : ''}`}
          >
            <img
              src={imageUrl}
              alt={imageCaption ?? 'Hình minh họa câu hỏi'}
              className={`mx-auto w-full object-contain transition-transform duration-200 group-hover:scale-[1.01] ${
                compact ? 'max-h-72' : 'max-h-[420px]'
              }`}
              loading="lazy"
            />
            <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-lg border border-sage-border bg-paper/95 px-2 py-1 text-[11px] font-medium text-ink shadow-sm">
              <Maximize2 className="h-3 w-3 text-moss" />
              Phóng to
            </span>
          </button>
        </div>
        {imageCaption && (
          <figcaption className="mt-2 px-1 text-xs text-ink-soft leading-relaxed">
            {imageCaption}
          </figcaption>
        )}
      </figure>

      {zoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={imageCaption ?? 'Xem phóng to sơ đồ'}
          onClick={() => setZoomed(false)}
        >
          <div
            className="relative flex max-h-[92vh] max-w-5xl flex-col rounded-2xl border border-sage-border bg-paper p-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-2 flex items-center justify-between gap-3 px-1">
              <p className="text-xs font-medium text-ink-soft">
                {imageCaption ?? 'Hình minh họa câu hỏi'}
              </p>
              <button
                type="button"
                onClick={() => setZoomed(false)}
                className="inline-flex items-center gap-1 rounded-lg border border-sage-border bg-mist px-2.5 py-1 text-xs font-semibold text-ink hover:bg-sage-tint"
                aria-label="Đóng ảnh phóng to"
              >
                <X className="h-3.5 w-3.5" />
                Đóng
              </button>
            </div>
            <div className="overflow-auto rounded-xl border border-sage-border bg-white p-3">
              <img
                src={imageUrl}
                alt={imageCaption ?? 'Hình minh họa câu hỏi'}
                className="mx-auto max-h-[80vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

