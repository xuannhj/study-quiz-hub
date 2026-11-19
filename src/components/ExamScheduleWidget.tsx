import { useState } from 'react';
import { CalendarDays, Edit2, Check, X } from 'lucide-react';
import {
  XUAN_NHI_EXAM_SCHEDULE,
  computeDaysUntilExamDate,
  getUpcomingPrimaryExams,
} from '../data/examSchedule';

const EXAM_DATE_STORAGE_KEY = 'xuannhi_swr_exam_date_v1';
const DEFAULT_SWR_EXAM_DATE = '2026-11-18';
const CUSTOM_ROOMS_KEY = 'xuannhi_custom_exam_rooms_v1';

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

function loadSavedRooms(): Record<string, string> {
  try {
    const raw = window.localStorage.getItem(CUSTOM_ROOMS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/**
 * Minimal 3-slot upcoming exam strip inside the primary workspace card,
 * plus full exam schedule modal with custom room updating.
 */
export function ExamScheduleWidget() {
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [swrDate, setSwrDate] = useState<string>(() => loadSavedExamDate());
  const [customRooms, setCustomRooms] = useState<Record<string, string>>(() =>
    loadSavedRooms()
  );

  // Inline room editing state
  const [editingSlotId, setEditingSlotId] = useState<string | null>(null);
  const [tempRoomInput, setTempRoomInput] = useState<string>('');

  const upcomingExams = getUpcomingPrimaryExams();
  const topThreeExams = upcomingExams
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

  const handleSaveRoom = (slotId: string, roomVal: string) => {
    const trimmed = roomVal.trim();
    const next = { ...customRooms };
    if (trimmed) {
      next[slotId] = trimmed;
    } else {
      delete next[slotId];
    }
    setCustomRooms(next);
    setEditingSlotId(null);
    try {
      window.localStorage.setItem(CUSTOM_ROOMS_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage errors safely.
    }
  };

  const startEditRoom = (slotId: string, currentVal: string) => {
    setEditingSlotId(slotId);
    setTempRoomInput(currentVal === '-' ? '' : currentVal);
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
                slot.subjectCode === 'SWR302' && slot.examType !== '2NDFE'
                  ? computeDaysUntilExamDate(swrDate)
                  : computeDaysUntilExamDate(slot.date);
              const isNearest = idx === 0;
              const isWithinWeek = days <= 7;
              const formattedTime = slot.time.slice(0, 5).replace('h', ':');

              const roomVal = customRooms[slot.id] || slot.room;
              const hasRoom =
                roomVal && roomVal !== '-' && roomVal.toLowerCase() !== 'chưa có';

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
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[14px] font-semibold text-ink font-mono">
                      {slot.subjectCode}
                    </span>
                    {slot.examType === '2NDFE' && (
                      <span className="rounded bg-amber-500/15 border border-amber-500/30 px-1.5 py-0.5 text-[10px] font-bold text-amber-700 dark:text-amber-300">
                        Thi lần 2
                      </span>
                    )}
                  </div>
                  <div
                    className={`mt-0.5 text-2xl font-bold leading-tight ${
                      days === 0
                        ? 'text-crimson'
                        : isWithinWeek
                          ? 'text-[#B45309] dark:text-[#F5B971]'
                          : 'text-moss'
                    }`}
                  >
                    {days === 0 ? 'Hôm nay' : `${days} ngày`}
                  </div>
                  <div className="mt-1 text-[12px] text-ink-soft truncate font-mono">
                    {slot.dateLabel.slice(0, 5)} · {formattedTime} ·{' '}
                    {hasRoom ? (
                      `P.${roomVal}`
                    ) : (
                      <span className="text-amber-600 dark:text-amber-400 font-sans font-medium">
                        Chờ phòng
                      </span>
                    )}
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
                <div>
                  <h2 className="text-lg font-bold text-ink">
                    Lịch thi của Xuân Nhi
                  </h2>
                  <p className="text-xs text-ink-soft">
                    Fall 2026 — Lịch thi FE &amp; PE (Lần 1 &amp; Lần 2)
                  </p>
                </div>
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
                const days =
                  slot.subjectCode === 'SWR302' && slot.examType !== '2NDFE'
                    ? computeDaysUntilExamDate(swrDate)
                    : computeDaysUntilExamDate(slot.date);
                const isPast = days < 0;
                const isSecondary = slot.examType === '2NDFE';

                const roomVal = customRooms[slot.id] || slot.room;
                const hasRoom =
                  roomVal &&
                  roomVal !== '-' &&
                  roomVal.toLowerCase() !== 'chưa có';
                const isEditingThisRoom = editingSlotId === slot.id;

                return (
                  <div
                    key={slot.id}
                    className={`rounded-2xl border p-3 text-xs flex flex-wrap items-center justify-between gap-2.5 transition-all ${
                      isPast
                        ? 'border-sage-border/50 bg-mist/40 opacity-60'
                        : isSecondary
                          ? 'border-amber-500/40 bg-amber-500/5'
                          : 'border-sage-border bg-paper'
                    }`}
                  >
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="font-mono font-bold text-ink text-sm">
                          {slot.subjectCode}
                        </span>
                        {isSecondary ? (
                          <span className="rounded-md bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 px-1.5 py-0.5 text-[10px] font-bold">
                            Thi lần 2
                          </span>
                        ) : (
                          <span className="rounded-md bg-mist px-1.5 py-0.5 text-[10px] font-semibold border border-sage-border text-ink-soft">
                            {slot.examType}
                          </span>
                        )}
                        <span className="text-[11px] text-ink-soft">
                          {slot.format === 'PRACTICAL_EXAM'
                            ? 'Thực hành'
                            : 'Trắc nghiệm'}
                        </span>
                      </div>
                      <div className="text-ink-soft truncate font-medium">
                        {slot.subjectName}
                      </div>
                    </div>

                    <div className="text-right shrink-0 space-y-1">
                      <div className="font-mono font-semibold text-ink">
                        {slot.dateLabel} · {slot.time}
                      </div>

                      {/* Room & Edit Action */}
                      <div className="flex items-center justify-end gap-1.5 text-[11px]">
                        {isEditingThisRoom ? (
                          <div
                            className="flex items-center gap-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <input
                              type="text"
                              value={tempRoomInput}
                              placeholder="Số phòng..."
                              autoFocus
                              onChange={(e) => setTempRoomInput(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  handleSaveRoom(slot.id, tempRoomInput);
                                } else if (e.key === 'Escape') {
                                  setEditingSlotId(null);
                                }
                              }}
                              className="w-20 rounded-lg border border-moss bg-paper px-2 py-0.5 text-xs font-mono text-ink outline-none"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                handleSaveRoom(slot.id, tempRoomInput)
                              }
                              className="rounded-lg bg-moss p-1 text-white hover:bg-moss-hover"
                              title="Lưu phòng"
                            >
                              <Check className="h-3 w-3" />
                            </button>
                            <button
                              type="button"
                              onClick={() => setEditingSlotId(null)}
                              className="rounded-lg border border-sage-border p-1 text-ink-soft hover:bg-sage-tint"
                              title="Hủy"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        ) : (
                          <>
                            {hasRoom ? (
                              <span className="font-mono font-medium text-ink">
                                Phòng {roomVal}
                              </span>
                            ) : (
                              <span className="rounded-md bg-amber-500/15 border border-amber-500/30 px-1.5 py-0.5 font-sans font-semibold text-amber-700 dark:text-amber-300">
                                Chưa có phòng
                              </span>
                            )}
                            <button
                              type="button"
                              onClick={() => startEditRoom(slot.id, roomVal)}
                              className="inline-flex items-center gap-0.5 text-ink-soft hover:text-moss ml-1 underline transition-colors"
                            >
                              {hasRoom ? (
                                <>
                                  <Edit2 className="h-2.5 w-2.5" /> Sửa
                                </>
                              ) : (
                                '+ Nhập phòng'
                              )}
                            </button>
                          </>
                        )}

                        {/* Days countdown indicator */}
                        {!isPast ? (
                          <span
                            className={`font-semibold ml-1 ${
                              days === 0
                                ? 'text-crimson font-bold'
                                : days <= 7
                                  ? 'text-amber-600 dark:text-amber-400'
                                  : 'text-moss'
                            }`}
                          >
                            · {days === 0 ? 'Hôm nay thi' : `Còn ${days} ngày`}
                          </span>
                        ) : (
                          <span className="text-ink-soft/60 ml-1">
                            · Đã thi xong
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-sage-border/70 flex flex-wrap items-center justify-between gap-3 text-xs text-ink-soft">
              <span className="text-ink-soft leading-relaxed max-w-sm">
                💡 Khi nhà trường xếp phòng thi các môn lần 2, Nhi chỉ cần bấm{' '}
                <strong className="text-ink">+ Nhập phòng</strong> để lưu lại
                nhé!
              </span>

              <div className="flex items-center gap-2 shrink-0">
                <span>Mốc ngày thi SWR302:</span>
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
        </div>
      )}
    </>
  );
}
