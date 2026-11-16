# Sổ Tay Câu Sai & Flashcard (Mistake Notebook) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Xây dựng trang Sổ tay câu sai & Flashcard liên môn học khoa học, cho phép bé Xuân Nhi ôn lại toàn bộ các câu làm sai từ các đề thi (Quiz & Final Exam), lật thẻ xem giải thích chi tiết, tự đánh dấu "Đã thuộc" hoặc chuyển sang làm bài Quiz kiểm tra lại.

**Architecture:**
- Mở rộng `storageService` với hàm `setQuestionMastered` để cập nhật trạng thái làm chủ câu hỏi thủ công khi lật thẻ.
- Tạo module `src/features/mistakes/` với `MistakeNotebookView.tsx` hỗ trợ 2 chế độ xem: Flashcard tương tác (với phím tắt) và Danh sách câu sai chi tiết.
- Tích hợp bộ lọc khoa học đa môn học (`All` + từng môn có badge đếm số câu) và bộ lọc trạng thái (`Cần ôn`, `Đã thuộc`, `Sai >= 2 lần`).
- Tích hợp điều hướng: Route `/mistakes`, nút Header với badge số lượng câu sai trực quan trên `Layout.tsx`, và CTA tại `DashboardView.tsx`.

**Tech Stack:** React 18.3, TypeScript 5.6, Tailwind CSS 3.4, React Router DOM v6, Lucide Icons, Vitest, React Testing Library.

## Global Constraints
- Naming & Design: Tuân thủ phong cách Cozy Pixel-Art ấm cúng của Góc học của Xuân Nhi (palette `sage`, `moss`, `paper`, `firefly`, `blossom`).
- Không phá vỡ 38 test case hiện có của hệ thống.
- Client-side storage: Sử dụng `storageService` hiện tại với key `study_quiz_hub_v1` trong `localStorage`.
- Phím tắt bàn phím tiện lợi: `Space` (lật thẻ), `ArrowRight` (thẻ tiếp), `ArrowLeft` (thẻ trước), `1` (chưa thuộc), `2` (đã thuộc).

## Review Focus
- Khi chưa có câu sai nào: Hiển thị Empty state pixel-art động viên dễ thương.
- Khi người dùng bấm "Đã thuộc": Cập nhật trạng thái `mastered: true` trong `storageService` và cập nhật tức thì danh sách hiển thị cùng badge số lượng trên Header.
- Khi lọc theo từng môn: Danh sách và thẻ flashcard chỉ hiển thị câu hỏi thuộc môn đó, đếm chính xác số lượng.
- Khả năng chuyển sang làm bài test: Nút "Bắt đầu làm bài test" tạo `dynamicExamPack` và điều hướng sang `/subjects/:subjectId/exam` mượt mà.
- Khả năng xử lý hình ảnh/sơ đồ câu hỏi: Giữ trọn vẹn `imageUrl`, `imageCaption` và `QuestionDiagram` khi hiển thị trên Flashcard.

---

### Task 1: Mở rộng `storageService` hỗ trợ đánh dấu Mastered thủ công

**Files:**
- Modify: `src/services/storage/storageService.ts`
- Modify: `src/services/storage/storageService.test.ts`

- [x] Viết test trong `storageService.test.ts` cho phương thức `setQuestionMastered`:
  - Đánh dấu một câu hỏi đã có thống kê sai thành `mastered = true`.
  - Đánh dấu một câu hỏi chưa có trong thống kê thành câu sai (`mastered = false`).
- [x] Chạy test `npm test storageService.test.ts` (xác nhận fail vì hàm chưa tồn tại).
- [x] Bổ sung định nghĩa `setQuestionMastered` vào `StorageService` interface trong `storageService.ts`.
- [x] Triển khai hàm `setQuestionMastered(subjectId, questionId, mastered)` trong `createStorageService`.
- [x] Chạy lại test `npm test storageService.test.ts` để đảm bảo 100% passed.

---

### Task 2: Xây dựng Component `MistakeNotebookView` (Flashcard + Bộ lọc đa môn)

**Files:**
- Create: `src/features/mistakes/MistakeNotebookView.tsx`
- Create: `src/features/mistakes/MistakeNotebookView.test.tsx`

- [x] Viết test `MistakeNotebookView.test.tsx`:
  - Render đúng danh sách câu sai của nhiều môn học.
  - Cho phép lọc theo môn học (ví dụ: click chọn FER202 chỉ hiện câu hỏi của FER202).
  - Cho phép chuyển đổi chế độ Thẻ Flashcard vs Danh sách chi tiết.
  - Thao tác lật thẻ: xem câu hỏi -> bấm lật hiện đáp án và lời giải thích.
  - Bấm nút "Đã thuộc" gọi `setQuestionMastered` và chuyển sang câu tiếp theo.
  - Hiển thị Empty state dễ thương khi không có câu sai nào.
- [x] Triển khai `MistakeNotebookView.tsx`:
  - Lấy toàn bộ subjects từ `storageService.getSubjects()`.
  - Gom các câu hỏi có thống kê sai (`wrongQuestionStats`) từ tất cả các môn.
  - Bộ lọc Tabs môn học (`All` + tên môn kèm badge số lượng).
  - Bộ lọc trạng thái (`unmastered`, `mastered`, `frequent_wrong`).
  - Chế độ Flashcard:
    - Hiển thị số thứ tự thẻ (VD: Thẻ 3/10).
    - Thẻ lật 3D hoặc hiển thị mặt trước / mặt sau mượt mà.
    - Mặt trước: Badge môn, số lần sai, nội dung câu hỏi, ảnh minh họa (nếu có), các phương án A, B, C, D.
    - Mặt sau: Highlight đáp án đúng màu xanh ngọc, hộp giải thích chi tiết, nút "Vẫn chưa nhớ" (Next) và "Đã hiểu & nhớ rồi" (Mastered).
    - Hỗ trợ sự kiện bàn phím (`keydown`: Space, ArrowLeft, ArrowRight, 1, 2).
  - Chế độ Danh sách: Accordion / Card xem nhanh toàn bộ câu sai.
  - Nút "Làm bài Quiz kiểm tra lại" điều hướng sang `/subjects/:subjectId/exam`.
- [x] Chạy test `npm test MistakeNotebookView.test.tsx` xác nhận passed.

---

### Task 3: Tích hợp Route, Header Badge trên `Layout` và Dashboard CTA

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/Layout.tsx`
- Modify: `src/components/Layout.test.tsx`
- Modify: `src/features/dashboard/DashboardView.tsx`

- [x] Cập nhật `App.tsx`:
  - Thêm route: `<Route path="/mistakes" element={<MistakeNotebookView />} />`.
- [x] Cập nhật `Layout.tsx`:
  - Tính tổng số câu hỏi chưa thuộc (`unmastered`) trên toàn bộ các môn bằng cách đọc từ `storageService`.
  - Thêm nút liên kết **"Sổ tay câu sai" 🎴** trên thanh điều hướng với badge số lượng (ví dụ: `Sổ tay (5)`).
- [x] Cập nhật `DashboardView.tsx`:
  - Bổ sung nút/liên kết trực tiếp đến Sổ tay câu sai tại phần hành động nhanh hoặc thẻ môn học.
- [x] Cập nhật và chạy `npm test Layout.test.tsx` cùng toàn bộ test suite `npm test` để xác nhận không có regression.

---

### Task 4: Kiểm thử tích hợp tổng thể & Hoàn thiện giao diện

- [x] Chạy toàn bộ test suite `npm test` để xác thực tất cả các test case đều xanh (40/40 passed).
- [x] Chạy build production `npm run build` để kiểm tra TypeScript type check và bundle Vite.
- [x] Kiểm tra thực tế giao diện cả theme Sáng và Tối, responsive trên mobile/tablet/desktop.
