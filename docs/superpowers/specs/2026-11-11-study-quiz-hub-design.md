# Đặc Tả Thiết Kế (Design Spec): Hệ Thống Học Lý Thuyết & Luyện Thi Đa Môn (Study & Quiz Hub)

**Ngày tạo:** 2026-11-11  
**Thư mục dự án:** `E:\SELF-STUDY\study-quiz-hub`  
**Môn học khởi điểm:** `SWR (Software Requirements)` — thiết kế mở rộng cho nhiều môn học tiếp theo.

---

## 1. Mục tiêu & Phạm vi Hệ thống (Purpose & Scope)

Xây dựng ứng dụng Web cá nhân chạy trực tiếp trên máy tính giúp người học:
1. **Học Lý Thuyết Trọng Tâm (Study Guide):** Đọc kiến thức cốt lõi được chắt lọc từ Slide bài giảng theo từng Chương/Bài (khái niệm chính, từ khóa nhận diện, bảng so sánh, mẹo làm bài).
2. **Tự động tạo Câu hỏi từ Slide (Slide-to-Quiz Generation Workflow):** Khi chưa có sẵn ngân hàng đề thi, hệ thống có quy trình tiếp nhận Slide bài giảng để biên soạn tự động cả **Bài giảng tóm tắt** lẫn **Bộ câu hỏi trắc nghiệm** (chia theo câu hỏi ôn tập chương, câu hỏi Quiz định kỳ, và câu hỏi tổng hợp Final Exam) kèm giải thích chi tiết.
3. **Làm Bài & Thi Thử Đa Chế Độ:**
   - **Luyện tập theo Chương (Chapter Practice):** Củng cố ngay sau khi đọc xong lý thuyết chương đó.
   - **Thi Quiz (Progress Test / Quiz 1, 2, 3...):** Kiểm tra ngắn theo cụm chương hoặc bộ đề Quiz.
   - **Thi Final (Final Exam / Mock FE):** Đề thi tổng hợp toàn môn (50–60 câu / 60 phút).
   - **Kho Câu Sai & Đánh Dấu (Mistake Notebook & Bookmarks):** Tự động lưu các câu trả lời sai để ôn tập lại.
4. **Mở rộng & Nạp đề sau (Multi-Subject & Smart Import):** Hỗ trợ thêm môn học mới và nạp bổ sung câu hỏi thật sau này thông qua giao diện Import (copy-paste văn bản câu hỏi hoặc tải file `.json` / `.md`).

---

## 2. Kiến trúc & Cấu trúc Thư mục (Architecture & Directory Structure)

- **Tech Stack:** React 18 + TypeScript + Vite + Tailwind CSS + Lucide React + React Router + Vitest.
- **Cấu trúc thư mục dự án (`E:\SELF-STUDY\study-quiz-hub`):**

```text
E:\SELF-STUDY\study-quiz-hub\
├── slides/                         # Thư mục chứa file Slide gốc do người dùng cung cấp (VD: slides/swr/)
├── docs/
│   └── superpowers/
│       ├── specs/                  # Tài liệu thiết kế (Design Specs)
│       └── plans/                  # Kế hoạch triển khai (Implementation Plans)
├── src/
│   ├── types/
│   │   └── study.ts                # Toàn bộ interface: Subject, Chapter, Question, ExamPack, Attempt, Progress
│   ├── data/
│   │   └── subjects/
│   │       ├── index.ts            # Registry đăng ký tất cả các môn học có sẵn trong code
│   │       └── swr/                # Dữ liệu môn SWR (Software Requirements)
│   │           ├── subject.ts      # Thông tin chung môn SWR
│   │           ├── chapters.ts     # Lý thuyết trọng tâm chắt lọc từ Slide SWR
│   │           ├── questions.ts    # Ngân hàng câu hỏi được tạo từ Slide + câu hỏi nạp thêm
│   │           └── exams.ts        # Cấu hình các đề Quiz 1..N và Final Exam
│   ├── services/
│   │   ├── storage/
│   │   │   └── storageService.ts   # Hybrid Data Service: gộp dữ liệu code + LocalStorage & lưu tiến độ
│   │   ├── exam/
│   │   │   └── examEngine.ts       # Logic trộn đề (shuffle), sinh đề Quiz/Final, chấm điểm Single/Multiple choice
│   │   └── importer/
│   │       └── questionParser.ts   # Smart Parser phân tích câu hỏi từ văn bản copy-paste hoặc JSON/Markdown
│   ├── features/
│   │   ├── dashboard/              # Màn hình danh sách môn học & thống kê tổng quan
│   │   ├── subject-detail/         # Trang tổng quan của 1 môn (chọn Học Lý Thuyết / Thi Quiz / Thi Final / Câu Sai)
│   │   ├── study/                  # Giao diện đọc lý thuyết chương + bảng so sánh + chuyển nhanh sang bài tập
│   │   ├── exam/                   # Giao diện làm bài (Practice Mode & Timed Exam Mode) + Kết quả chi tiết
│   │   └── manager/                # Giao diện Import câu hỏi mới, tạo môn mới, Backup/Restore JSON
│   ├── App.tsx
│   └── main.tsx
└── package.json
```

---

## 3. Mô hình Dữ liệu Chuẩn (Core Data Interfaces)

### 3.1. Môn học (`Subject`) & Chương lý thuyết (`Chapter`)
- **`Subject`**:
  - `id`: Mã môn (VD: `"swr"`)
  - `code`: Mã học phần (VD: `"SWR302"`)
  - `name`: Tên môn học (VD: `"Software Requirements"`)
  - `description`: Mô tả môn học
  - `chapters`: Danh sách `Chapter[]`
  - `questions`: Danh sách `Question[]`
  - `examPacks`: Danh sách `ExamPack[]`
- **`Chapter`**:
  - `id`: Mã chương (VD: `"swr-ch1"`)
  - `order`: Số thứ tự chương
  - `title`: Tên chương (tương ứng với từng bài/slot trên Slide)
  - `summary`: Tóm tắt mục tiêu cốt lõi của chương
  - `sections`: Danh sách các khối kiến thức (`StudySection[]`) gồm:
    - `type`: `"concept"` (Khái niệm cốt lõi) | `"comparison"` (Bảng phân biệt/so sánh) | `"keywords"` (Từ khóa nhận diện nhanh) | `"exam_tip"` (Mẹo thi & Bẫy thường gặp)
    - `title`: Tiêu đề mục
    - `content`: Nội dung chi tiết (hỗ trợ Markdown / danh sách / bảng)

### 3.2. Câu hỏi (`Question`)
- `id`: Mã câu hỏi duy nhất (VD: `"swr-q-001"`)
- `subjectId`: Mã môn (`"swr"`)
- `chapterId`: Thuộc chương nào (`"swr-ch1"`)
- `source`: Nguồn câu hỏi (`"slide-generated"` — tạo từ slide | `"imported"` — đề nạp sau)
- `examTarget`: Phân loại mức độ đề (`"quiz"` | `"final"` | `"both"`)
- `difficulty`: `"remember"` (Nhớ khái niệm) | `"understand"` (Hiểu/Phân biệt) | `"scenario"` (Tình huống vận dụng)
- `type`: `"single"` (Chọn 1 đáp án đúng) | `"multiple"` (Chọn nhiều đáp án đúng)
- `prompt`: Nội dung câu hỏi
- `options`: Danh sách lựa chọn `{ id: string; text: string }[]`
- `correctOptionIds`: Mảng ID đáp án đúng `string[]`
- `explanation`: Giải thích chi tiết vì sao đáp án đó đúng và các đáp án khác sai (trích dẫn kiến thức từ chương/slide tương ứng).

### 3.3. Bộ đề thi (`ExamPack`)
- `id`: Mã đề
- `subjectId`: Mã môn
- `category`: `"chapter"` (Ôn theo chương) | `"quiz"` (Kiểm tra Quiz định kỳ) | `"final"` (Thi cuối kỳ Final Exam)
- `title`: Tên bộ đề (VD: `"Quiz 1: Chương 1 - Chương 3"`, `"Final Exam Mock #1"`)
- `durationMinutes`: Thời gian làm bài (VD: Quiz 25 phút, Final 60 phút)
- `questionCount`: Số lượng câu hỏi
- `chapterIds`: Danh sách chương áp dụng (để rút câu hỏi tự động hoặc cố định)
- `fixedQuestionIds?`: Danh sách câu hỏi cố định (nếu là đề cố định)
- `passScorePercent`: Điểm đạt (mặc định `50%` hoặc `60%`)

### 3.4. Tiến độ Người học (`UserSubjectProgress`)
- `completedChapterIds`: Các chương đã học xong lý thuyết
- `bookmarkedQuestionIds`: Các câu hỏi đánh dấu sao cần xem lại
- `wrongQuestionStats`: Lưu danh sách câu làm sai `{ [questionId]: { wrongCount: number; lastWrongAt: string; mastered: boolean } }`
- `attempts`: Lịch sử các lần làm Quiz / Final (`ExamAttempt[]`)
- `activeSession?`: Phiên làm bài đang dang dở (để tự động khôi phục khi F5 / đóng tab)

---

## 4. Quy trình Tự động Tạo Câu hỏi từ Slide (Slide-to-Quiz Workflow)

Vì hiện tại người dùng có **Slide bài giảng** và chưa có sẵn bộ đề, quy trình nạp kiến thức môn SWR (và các môn tiếp theo) sẽ hoạt động như sau:
1. **Đầu vào:** Người dùng bỏ file Slide (`.pdf`, `.pptx`, `.docx`, `.txt`...) vào thư mục `E:\SELF-STUDY\study-quiz-hub\slides\swr\` hoặc gửi đường dẫn/nội dung trong khung chat.
2. **Xử lý & Biên soạn Lý thuyết (`chapters.ts`):**
   - Trích xuất toàn bộ nội dung từng Slide/Chương.
   - Chuyển hóa thành các mục dễ học: **Khái niệm trọng tâm**, **Bảng so sánh các thuật ngữ dễ nhầm**, **Từ khóa bắt bài nhanh (Keywords)**, và **Lưu ý bẫy đề thi**.
3. **Tự động Sinh Ngân hàng Câu hỏi (`questions.ts`):**
   - Với mỗi chương trên Slide, tạo bộ câu hỏi phủ kín 3 cấp độ:
     - **Mức độ Nhớ & Hiểu (Dành cho Luyện chương & Quiz):** Hỏi định nghĩa, đặc điểm, phân biệt khái niệm đúng/sai từ slide.
     - **Mức độ Tình huống / Đa lựa chọn (Dành cho Quiz & Final Exam):** Câu hỏi tình huống thực tế (Scenario-based) và câu hỏi chọn 2–3 đáp án đúng (`Choose N correct answers`).
   - Mỗi câu hỏi đều kèm **Giải thích (`explanation`)** chỉ rõ nằm ở phần kiến thức nào trong Slide.
4. **Nạp bổ sung đề thật về sau (Smart Import):**
   - Khi người dùng có thêm đề Quiz/Final thật, có thể gửi vào chat hoặc dán trực tiếp vào màn hình **Import Câu Hỏi** trên web để bổ sung vào ngân hàng câu hỏi của môn học.

---

## 5. Thiết kế Giao diện & Luồng Tương tác (UI Components & Data Flow)

1. **Trang Chủ Đa Môn (`DashboardView`):**
   - Hiển thị danh sách thẻ môn học (bắt đầu với **SWR302 - Software Requirements**).
   - Mỗi thẻ hiển thị: Số chương lý thuyết đã đọc, tổng số câu hỏi hiện có, số đề Quiz / Final, số câu đang làm sai cần ôn.
   - Nút **"+ Thêm Môn Học"** và **"Import / Backup Dữ liệu"**.
2. **Trang Chi Tiết Môn Học (`SubjectHubView`):**
   - Có 4 Tab chính rõ ràng:
     - **📖 Học Lý Thuyết (Study Guide):** Xem danh sách chương, đọc tóm tắt slide, đánh dấu đã học, bấm *"Luyện ngay câu hỏi chương này"*.
     - **📝 Thi Quiz (Quiz Tests):** Danh sách các bài Quiz định kỳ (Quiz 1, Quiz 2...) hoặc tự tạo bài Quiz nhanh theo các chương muốn ôn.
     - **🎓 Thi Final (Final Exams):** Danh sách đề thi cuối kỳ chuẩn và nút *"Tạo đề Final ngẫu nhiên (50–60 câu / 60 phút)"*.
     - **🔁 Kho Câu Sai & Đánh Dấu (`Mistake & Bookmark Review`):** Làm lại riêng những câu từng sai ở Quiz/Final cho đến khi thuộc.
3. **Phòng Làm Bài (`ExamRunnerView`):**
   - Trước khi bắt đầu cho phép chọn:
     - **Chế độ Ôn tập (Practice):** Chọn đáp án xong hiện ngay Đúng/Sai + Lời giải thích từ slide.
     - **Chế độ Thi bấm giờ (Timed Exam):** Đồng hồ đếm ngược, làm xong nộp bài mới chấm điểm.
     - Tuỳ chọn bật/tắt **Đảo câu hỏi & Đảo đáp án A/B/C/D**.
   - Hỗ trợ phím tắt (`1-6` chọn đáp án, `←/→` chuyển câu, `F` cắm cờ, `Enter` kiểm tra).
4. **Trình Quản lý & Import (`ImportManagerView`):**
   - Hỗ trợ dán văn bản câu hỏi thô (Smart Text Parser) hoặc tải file `.json` lên với màn hình xem trước (Preview) và báo lỗi chi tiết nếu câu hỏi thiếu đáp án.

---

## 6. Xử lý Lỗi & Kiểm thử (Error Handling & Testing Strategy)

- **An toàn dữ liệu:**
  - Mọi tiến độ làm bài đang diễn ra được lưu tự động (`activeSession`) vào `localStorage` sau mỗi thao tác chọn đáp án.
  - Khi dữ liệu trong code (`src/data/subjects/swr/`) được cập nhật thêm chương mới hoặc câu hỏi mới từ slide, `storageService` tự động giữ nguyên lịch sử học tập và các câu đã import trước đó của người dùng.
- **Unit Testing (`Vitest`):**
  - Kiểm thử bộ chấm điểm `examEngine` (đặc biệt với câu hỏi Multiple Choice: phải chọn đúng và đủ tất cả các đáp án mới tính điểm).
  - Kiểm thử thuật toán trộn câu hỏi/đáp án (`shuffle`) và rút đề Quiz / Final theo tỷ trọng chương.
  - Kiểm thử bộ `questionParser` khi import văn bản câu hỏi.
  - Kiểm thử `storageService` khi gộp dữ liệu code và dữ liệu trình duyệt.
