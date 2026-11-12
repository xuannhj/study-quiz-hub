import { useState } from 'react';
import { CalendarDays, Clock, MapPin, X } from 'lucide-react';
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
 * Cute compact upcoming-exam timetable strip for the left workspace card,
 * with a full modal schedule view.
 */
export function ExamScheduleWidget() {
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [swrDate, setSwrDate] = useState<string>(() => loadSavedExamDate());

  const upcomingPrimary = getUpcomingPrimaryExams();
  const uniqueUpcomingSubjects = upcomingPrimary.filter(
    (item, idx, arr) =>
      arr.findIndex((other) => other.subjectCode === item.subjectCode) === idx
  );

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
      <div className="rounded-2xl border border-sage-border/80 bg-mist/80 p-3.5 space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink">
            <CalendarDays className="h-3.5 w-3.5 text-rain shrink-0" />
            <span>Thời gian biểu thi sắp tới</span>
          </span>
          <button
            type="button"
            onClick={() => setScheduleOpen(true)}
            className="text-xs font-semibold text-moss hover:underline"
          >
            Xem lịch thi
          </button>
        </div>

        {uniqueUpcomingSubjects.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {uniqueUpcomingSubjects.map((slot) => {
              const days =
                slot.subjectCode === 'SWR302'
                  ? computeDaysUntilExamDate(swrDate)
                  : computeDaysUntilExamDate(slot.date);
              const isSwr = slot.subjectCode === 'SWR302';

              return (
                <div
                  key={slot.id}
                  className={`rounded-xl border p-2.5 text-xs transition-colors ${
                    isSwr
                      ? 'border-moss/50 bg-moss-soft/75'
                      : 'border-sage-border bg-paper'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-mono font-bold text-ink">
                      {slot.subjectCode}
                    </span>
                    <span className="text-[10px] font-semibold text-moss">
                      còn {days}d
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-ink-soft font-mono">
                    <Clock className="h-3 w-3 text-rain shrink-0" />
                    <span className="truncate">
                      {slot.dateLabel.slice(0, 5)} · {slot.time.slice(0, 5)}
                    </span>
                  </div>
                  <div className="mt-0.5 flex items-center gap-1 text-[11px] text-ink-soft">
                    <MapPin className="h-3 w-3 text-blossom shrink-0" />
                    <span>Phòng {slot.room}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-xs text-ink-soft">
            Đã hoàn thành hết các mốc thi trong kỳ này rồi!
          </p>
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
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-rain-soft px-2.5 py-0.5 text-[11px] font-medium text-rain-ink">
                  <CalendarDays className="h-3 w-3" />
                  <span>Lịch thi chính thức &amp; 2NDFE</span>
                </div>
                <h2 className="mt-2 text-lg font-bold text-ink">
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
                          ? 'border-moss/50 bg-moss-soft/45'
                          : 'border-sage-border bg-mist/80'
                    }`}
                  >
                    <div className="space-y-0.5 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="font-mono font-bold text-ink">
                          {slot.subjectCode}
                        </span>
                        <span className="rounded-md bg-paper px-1.5 py-0.5 text-[10px] font-semibold border border-sage-border">
                          {slot.examType}
                        </span>
                        <span className="text-[11px] text-ink-soft">
                          {slot.format === 'PRACTICAL_EXAM'
                            ? 'Thực hành (PE)'
                            : 'Trắc nghiệm (FE)'}
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
                      <div className="inline-flex items-center gap-1 text-[11px] text-ink-soft justify-end">
                        <MapPin className="h-3 w-3 text-rain" />
                        <span>Phòng {slot.room}</span>
                        {!isPast && (
                          <span className="ml-1 text-moss font-semibold">
                            · Còn {days} ngày
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-sage-border/70 flex flex-wrap items-center justify-between gap-2 text-xs text-ink-soft">
              <span>Tùy chỉnh mốc đếm ngược SWR302:</span>
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

