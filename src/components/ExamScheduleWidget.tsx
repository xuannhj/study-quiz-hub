import { useState } from 'react';
import { CalendarDays, X } from 'lucide-react';
import {
  XUAN_NHI_EXAM_SCHEDULE,
  computeDaysUntilExamDate,
  getUpcomingPrimaryExams,
} from '../data/examSchedule';

const EXAM_DATE_STORAGE_KEY = 'xuannhi_swr_exam_date_v1';
const DEFAULT_SWR_EXAM_DATE = '2026-11-18';

function loadSavedExamDate(): string {
  try {
    return (
      window.localStorage.getItem(EXAM_DATE_STORAGE_KEY) ||
      DEFAULT_SWR_EXAM_DATE
    );
  } catch {
    return DEFAULT_SWR_EXAM_DATE;
  }
}

/**
 * Minimal 3-slot upcoming exam strip inside the primary workspace card,
 * plus full exam schedule modal.
 */
export function ExamScheduleWidget() {
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [swrDate, setSwrDate] = useState<string>(() => loadSavedExamDate());

  const upcomingPrimary = getUpcomingPrimaryExams();
  const topThreeExams = upcomingPrimary
    .filter(
      (item, idx, arr) =>
        arr.findIndex((other) => other.subjectCode === item.subjectCode) === idx
    )
    .slice(0, 3);

  const handleSaveCustomSwrDate = (value: string) => {
    const next = value || DEFAULT_SWR_EXAM_DATE;
    setSwrDate(next);
    try {
      window.localStorage.setItem(EXAM_DATE_STORAGE_KEY, next);
    } catch {
      // Ignore storage errors safely.
    }
  };

  return (
    <>
      <div className="space-y-2">
        <div className="flex items-center justify-end gap-1.5">
          <CalendarDays className="h-3.5 w-3.5 text-ink-soft" />
          <button
            type="button"
            onClick={() => setScheduleOpen(true)}
            className="text-xs font-semibold text-moss hover:underline"
          >
            Xem lịch thi
          </button>
        </div>

        {topThreeExams.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {topThreeExams.map((slot, idx) => {
              const days =
                slot.subjectCode === 'SWR302'
                  ? computeDaysUntilExamDate(swrDate)
                  : computeDaysUntilExamDate(slot.date);
              const isNearest = idx === 0;
              const isWithinWeek = days <= 7;
              const formattedTime = slot.time.slice(0, 5).replace('h', ':');

              return (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => setScheduleOpen(true)}
                  className={`text-left rounded-2xl border p-3 transition-colors hover:bg-mist-deep hover:border-moss/60 ${
                    isNearest
                      ? 'border-moss/60 bg-paper'
                      : idx === 1
                        ? 'border-sage-border bg-paper opacity-90'
                        : 'border-sage-border bg-paper opacity-75'
                  }`}
                >
                  <div className="text-[14px] font-semibold text-ink font-mono">
                    {slot.subjectCode}
                  </div>
                  <div
                    className={`mt-0.5 text-2xl font-bold leading-tight ${
                      isWithinWeek
                        ? 'text-[#B45309] dark:text-[#F5B971]'
                        : 'text-moss'
                    }`}
                  >
                    {days} ngày
                  </div>
                  <div className="mt-1 text-[12px] text-ink-soft truncate font-mono">
                    {slot.dateLabel.slice(0, 5)} · {formattedTime} · P.
                    {slot.room}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {scheduleOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Lịch thi của Xuân Nhi"
          onClick={() => setScheduleOpen(false)}
        >
          <div
            className="w-full max-w-2xl max-h-[88vh] flex flex-col rounded-3xl border border-sage-border bg-paper p-5 sm:p-6 shadow-2xl text-ink"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-moss" />
                <h2 className="text-lg font-bold text-ink">
                  Lịch thi của Xuân Nhi
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setScheduleOpen(false)}
                aria-label="Đóng lịch thi"
                className="rounded-xl p-1.5 text-ink-soft hover:bg-sage-tint hover:text-ink transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 overflow-y-auto space-y-2 pr-1">
              {XUAN_NHI_EXAM_SCHEDULE.map((slot) => {
                const days = computeDaysUntilExamDate(slot.date);
                const isPast = days < 0;
                const isSecondary = slot.examType === '2NDFE';

                return (
                  <div
                    key={slot.id}
                    className={`rounded-2xl border p-3 text-xs flex flex-wrap items-center justify-between gap-2 ${
                      isPast
                        ? 'border-sage-border/50 bg-mist/40 opacity-60'
                        : slot.subjectCode === 'SWR302' && !isSecondary
                          ? 'border-moss/60 bg-mist-deep'
                          : 'border-sage-border bg-paper'
                    }`}
                  >
                    <div className="space-y-0.5 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="font-mono font-bold text-ink">
                          {slot.subjectCode}
                        </span>
                        <span className="rounded-md bg-mist px-1.5 py-0.5 text-[10px] font-semibold border border-sage-border">
                          {slot.examType}
                        </span>
                        <span className="text-[11px] text-ink-soft">
                          {slot.format === 'PRACTICAL_EXAM'
                            ? 'Thực hành'
                            : 'Trắc nghiệm'}
                        </span>
                      </div>
                      <div className="text-ink-soft truncate">
                        {slot.subjectName}
                      </div>
                    </div>

                    <div className="text-right shrink-0 space-y-0.5">
                      <div className="font-mono font-semibold text-ink">
                        {slot.dateLabel} · {slot.time}
                      </div>
                      <div className="text-[11px] text-ink-soft">
                        Phòng {slot.room}
                        {!isPast && (
                          <span className="ml-1.5 text-moss font-semibold">
                            · {days} ngày
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-sage-border/70 flex flex-wrap items-center justify-between gap-2 text-xs text-ink-soft">
              <span>Ngày thi SWR302:</span>
              <input
                type="date"
                value={swrDate}
                onChange={(e) => handleSaveCustomSwrDate(e.target.value)}
                aria-label="Mốc ngày thi SWR302"
                className="rounded-xl border border-sage-border bg-mist px-2.5 py-1 text-xs text-ink outline-none focus:border-moss"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
