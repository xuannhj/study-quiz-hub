# Góc học của Xuân Nhi 🍮 (Study & Quiz Hub)

<p align="center">
  <img src="https://img.shields.io/badge/Live_Demo-study.xuannhj.tech-4f46e5?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  <img src="https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5.6-3178c6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Tests-38%20Passed-10b981?style=for-the-badge&logo=vitest&logoColor=white" alt="Tests" />
</p>

Không gian học tập, ôn lý thuyết và luyện đề trắc nghiệm cá nhân hóa của **Xuân Nhi** — được thiết kế theo phong cách **pixel-art ấm cúng**, tối giản và tập trung cao độ khi ôn thi đại học và các môn chuyên ngành FPT University.

🌐 **Trải nghiệm trực tiếp:** [https://study.xuannhj.tech](https://study.xuannhj.tech) *(hoặc [study-quiz-hub-plum.vercel.app](https://study-quiz-hub-plum.vercel.app))*

---

## 📚 Ngân Hàng Môn Học & Đề Thi Tích Hợp

### 1. FER202 — Phát triển ứng dụng Web Front-End với React
- **Lý thuyết Slide & React 18/19 hiện đại:**
  - Hệ thống hóa trọn vẹn **15 bài giảng Slide chính thức (Slot 1–20)**: Virtual DOM, Concurrent React, ES6, JSX, Bootstrap 5 (12 cột, 6 breakpoints), Component Lifecycle, React-Bootstrap, Props/State, Context API, React Hooks chuyên sâu, Event Handling & Render-Commit (ẩn dụ Kitchen/Waiter), PropTypes & TypeScript, React Router v6 (Nested Routes, Outlet), Code Splitting (React.lazy & Suspense), Flux & Redux Toolkit (RTK), RESTful API & JSON Server, Data Fetching (Fetch vs Axios, AbortController), Next.js (SSR/SSG, App Router) & Tailwind CSS.
  - **150 câu hỏi phân tích chuyên sâu** kèm giải thích tiếng Việt chi tiết từng câu.
  - **9 bộ đề:** 5 Đề Progress Test/Quiz theo cụm Slot + 4 Đề Thi Thử Final Exam (không trùng lặp).
- **Đề thi các kì trước (FE Past Exams):**
  - **754 câu hỏi thực tế** thu thập từ 15 đề thi thử FE qua **8 học kỳ gần nhất** (SU26, SP26, FA25, SU25, SP25, FA24, SU24, SP24).
  - Tích hợp 16 đề luyện thi FE bấm giờ và giải thích chi tiết nguồn gốc đáp án.

### 2. SWR302 — Software Requirements (Kỹ nghệ yêu cầu phần mềm)
- **19 chương Slide giáo trình:** 118 câu hỏi trắc nghiệm bao quát toàn bộ quy trình Requirements Engineering.
- **6 chuyên đề bài giảng PDF trọng tâm:** 80 câu hỏi phân tích sơ đồ thực chiến (Swimlane Diagram, Context Diagram, Use Case Diagram, Sequence Diagram, Data Dictionary & Ma trận CRUD).
- **11 bộ đề thi chuyên biệt:** 8 bài kiểm tra theo bài và 3 đề thi thử Final Exam.

---

## ✨ Điểm Nổi Bật

- 🎨 **Giao diện Pixel-Art Sáng / Tối toàn màn hình:** Ban ngày ngắm khung cửa sổ mưa rơi; ban đêm dịu mắt với ánh đèn phòng ấm áp và hiệu ứng âm thanh nền thư giãn (tiếng mưa rơi, giai điệu lofi nhẹ nhàng).
- 🎯 **3 Chế độ học linh hoạt:**
  - **Luyện tập (Practice Mode):** Bấm kiểm tra là hiện ngay đáp án đúng/sai và lời giải thích cặn kẽ.
  - **Thi thử (Exam Mode):** Bấm giờ chuẩn phòng thi, tự động tính điểm và đánh giá Đạt / Không đạt (Pass >= 60%).
  - **Sổ tay nhớ nhầm (Mistake Notebook):** Tự động gom những câu từng trả lời sai để luyện lại đến khi thành thạo.
- 🖼️ **Hỗ trợ sơ đồ & hình ảnh chi tiết:** Xem ảnh minh họa, bảng biểu và phóng to sơ đồ chất lượng cao khi làm bài.
- ⏱️ **Động lực học tập bền bỉ:** Đồng hồ tập trung Pomodoro `25:00`, mục tiêu hũ đom đóm pixel `5–7 đề/ngày`, đếm ngược các kỳ thi sắp tới và chuỗi ngày học liên tục (Streak).
- 💾 **Lưu trữ an toàn trên máy khách:** Toàn bộ tiến độ học, lịch sử thi và câu sai được lưu tự động trên trình duyệt (`localStorage`), hỗ trợ Export/Backup dữ liệu JSON.

---

## 🛠️ Công Nghệ Sử Dụng

- **Giao diện & Logic:** [React 18.3](https://react.dev/), [TypeScript 5.6](https://www.typescriptlang.org/), [React Router DOM v6](https://reactrouter.com/)
- **Đóng gói & Tạo kiểu:** [Vite 6](https://vitejs.dev/), [Tailwind CSS 3](https://tailwindcss.com/), [Lucide Icons](https://lucide.dev/), Web Audio API
- **Kiểm thử tự động:** [Vitest](https://vitest.dev/), React Testing Library, JSDOM (100% tests passing)
- **Triển khai (Deployment):** [Vercel](https://vercel.com/) với cơ chế Single Page Application URL Rewrites

---

## 🚀 Chạy Mã Nguồn Tại Máy

```bash
# Cài đặt thư viện
npm install

# Chạy môi trường phát triển (Local Dev)
npm run dev

# Chạy bộ kiểm thử tự động (38 unit tests)
npm test

# Đóng gói bản Production
npm run build
```

---

<p align="center">
  Được xây dựng với tình yêu dành riêng cho <b>Xuân Nhi</b> 🍮 — Chúc bé học tốt và đạt điểm cao trong mọi kỳ thi!
</p>
