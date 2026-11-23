import { useState, useEffect } from 'react';
import {
  Cloud,
  CloudOff,
  RefreshCw,
  Check,
  Copy,
  Smartphone,
  Laptop,
  KeyRound,
  X,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import {
  cloudSyncService,
  generateRandomSyncCode,
  type SyncStatus,
} from '../services/firebase/syncService';

interface CloudSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CloudSyncModal({ isOpen, onClose }: CloudSyncModalProps) {
  const [status, setStatus] = useState<SyncStatus>(() => cloudSyncService.getStatus());
  const [inputCode, setInputCode] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    return cloudSyncService.subscribeStatus((newStatus) => {
      setStatus(newStatus);
      if (newStatus.syncCode && !inputCode) {
        setInputCode(newStatus.syncCode);
      }
    });
  }, []);

  if (!isOpen) return null;

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);
    const targetCode = inputCode.trim();
    if (!targetCode || targetCode.length < 3) {
      setLocalError('Mã đồng bộ cần có ít nhất 3 ký tự (chữ hoặc số).');
      return;
    }

    const res = await cloudSyncService.connect(targetCode);
    if (res.ok) {
      setIsEditing(false);
    } else {
      setLocalError(res.error || 'Kết nối thất bại. Vui lòng thử lại!');
    }
  };

  const handleSyncNow = async () => {
    setLocalError(null);
    try {
      await cloudSyncService.pushNow();
    } catch (e: any) {
      setLocalError(e?.message || 'Không thể đồng bộ ngay lúc này.');
    }
  };

  const handleDisconnect = () => {
    cloudSyncService.disconnect();
    setInputCode('');
    setIsEditing(false);
    setLocalError(null);
  };

  const handleRandomCode = () => {
    const code = generateRandomSyncCode();
    setInputCode(code);
  };

  const handleCopyCode = async () => {
    if (!status.syncCode) return;
    try {
      await navigator.clipboard.writeText(status.syncCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const formatLastSynced = (iso: string | null) => {
    if (!iso) return 'Chưa có lần nào';
    try {
      const date = new Date(iso);
      return date.toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    } catch {
      return iso;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/50 backdrop-blur-sm animate-fade-in">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cloud-sync-title"
        className="relative w-full max-w-lg rounded-3xl border border-sage-border bg-paper p-6 sm:p-7 shadow-2xl transition-all"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng cửa sổ"
          className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-xl text-ink-soft hover:bg-sage-tint hover:text-ink transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-firefly-soft text-firefly-bright shadow-sm border border-firefly/30">
            <Cloud className="h-6 w-6 text-moss" />
          </div>
          <div>
            <h2 id="cloud-sync-title" className="text-lg sm:text-xl font-bold text-ink flex items-center gap-2">
              Đồng bộ Đám mây
              <span className="rounded-full bg-moss-soft px-2 py-0.5 text-[11px] font-semibold text-moss">
                Firebase Realtime
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-ink-soft mt-0.5">
              Đồng bộ tự động mọi câu sai, ghi chú và chuỗi học giữa Điện thoại &amp; Máy tính.
            </p>
          </div>
        </div>

        {/* Two-device Illustration */}
        <div className="mb-5 flex items-center justify-between rounded-2xl bg-mist p-3.5 border border-sage-border/60 text-xs text-ink-soft">
          <div className="flex items-center gap-2 font-medium">
            <Laptop className="h-4 w-4 text-moss" />
            <span>Máy tính (PC/Laptop)</span>
          </div>
          <div className="flex items-center gap-1.5 font-bold text-moss">
            <RefreshCw className={`h-3.5 w-3.5 ${status.isSyncing ? 'animate-spin' : ''}`} />
            <span>Hai chiều</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <Smartphone className="h-4 w-4 text-moss" />
            <span>Điện thoại (Mobile)</span>
          </div>
        </div>

        {/* Active Connected State */}
        {status.connected && !isEditing ? (
          <div className="space-y-4">
            <div className="rounded-2xl border border-moss/30 bg-moss-soft/40 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                    Đang kết nối thời gian thực
                  </span>
                </div>
                <span className="text-[11px] text-ink-muted">
                  Đồng bộ: {formatLastSynced(status.lastSyncedAt)}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-paper px-3.5 py-2.5 border border-sage-border/80 shadow-xs">
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-ink-muted">
                    Mã đồng bộ cá nhân của bạn
                  </div>
                  <div className="font-mono text-base font-extrabold text-ink tracking-wide">
                    {status.syncCode}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-mist px-3 py-1.5 text-xs font-semibold text-ink hover:bg-sage-tint transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Đã chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-ink-soft" />
                      <span>Sao chép mã</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs text-ink-soft leading-relaxed flex items-start gap-1.5">
                <ShieldCheck className="h-4 w-4 text-moss shrink-0 mt-0.5" />
                <span>
                  Chỉ cần mở web này trên điện thoại, bấm <b>Đồng bộ đám mây</b> và nhập đúng mã{' '}
                  <code className="font-bold text-ink bg-mist px-1 rounded">{status.syncCode}</code> là toàn bộ dữ liệu sẽ xuất hiện ngay!
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button
                type="button"
                onClick={handleSyncNow}
                disabled={status.isSyncing}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-moss px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-moss/90 active:scale-98 transition-all disabled:opacity-60"
              >
                <RefreshCw className={`h-4 w-4 ${status.isSyncing ? 'animate-spin' : ''}`} />
                <span>{status.isSyncing ? 'Đang đồng bộ...' : 'Đồng bộ ngay'}</span>
              </button>

              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-sage-border bg-paper px-3.5 py-2.5 text-xs font-semibold text-ink hover:bg-mist transition-colors"
              >
                <span>Đổi mã khác</span>
              </button>

              <button
                type="button"
                onClick={handleDisconnect}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-red-200 dark:border-red-900/50 bg-paper px-3.5 py-2.5 text-xs font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
              >
                <CloudOff className="h-3.5 w-3.5" />
                <span>Ngắt kết nối</span>
              </button>
            </div>
          </div>
        ) : (
          /* Connect / Edit Code Form */
          <form onSubmit={handleConnect} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="sync-code-input" className="block text-xs font-bold text-ink">
                Nhập Mã đồng bộ cá nhân (Sync Key)
              </label>
              <div className="relative flex items-center">
                <KeyRound className="absolute left-3.5 h-4 w-4 text-ink-muted" />
                <input
                  id="sync-code-input"
                  type="text"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  placeholder="Ví dụ: xuannhi hoặc nhi-2026"
                  maxLength={32}
                  className="w-full rounded-2xl border border-sage-border bg-mist py-2.5 pl-10 pr-24 text-sm font-semibold text-ink placeholder:text-ink-muted/70 focus:border-moss focus:bg-paper focus:outline-hidden transition-colors"
                />
                <button
                  type="button"
                  onClick={handleRandomCode}
                  className="absolute right-2 inline-flex items-center gap-1 rounded-xl bg-paper px-2.5 py-1 text-xs font-semibold text-moss shadow-xs hover:bg-moss-soft transition-colors border border-sage-border/60"
                >
                  <Sparkles className="h-3 w-3" />
                  <span>Tạo mã</span>
                </button>
              </div>
              <p className="text-[11px] text-ink-muted">
                Bạn có thể tự đặt một từ gợi nhớ (như nickname) hoặc bấm Tạo mã ngẫu nhiên.
              </p>
            </div>

            {(localError || status.error) && (
              <div className="rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 p-3 text-xs text-red-700 dark:text-red-400">
                {localError || status.error}
              </div>
            )}

            <div className="flex items-center gap-2 pt-2">
              <button
                type="submit"
                disabled={status.isSyncing || !inputCode.trim()}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-moss py-3 px-4 text-sm font-bold text-white shadow-sm hover:bg-moss/90 active:scale-98 transition-all disabled:opacity-50"
              >
                <Cloud className={`h-4 w-4 ${status.isSyncing ? 'animate-bounce' : ''}`} />
                <span>
                  {status.isSyncing
                    ? 'Đang kết nối & tải dữ liệu...'
                    : status.connected
                    ? 'Lưu & Đổi mã đồng bộ'
                    : 'Kết nối & Đồng bộ ngay'}
                </span>
              </button>

              {isEditing && (
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="rounded-2xl border border-sage-border bg-paper py-3 px-4 text-xs font-semibold text-ink hover:bg-mist transition-colors"
                >
                  Hủy
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
