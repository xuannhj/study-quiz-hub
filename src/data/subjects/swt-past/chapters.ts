import type { Chapter } from '../../../types/study';

export const swtPastChapters: Chapter[] = [
  {
    id: 'swt-ch-fa26',
    order: 1,
    title: 'Kì Fall 2026 (FA26 — Đề Thi Chính Thức)',
    summary:
      'Bộ đề thi trắc nghiệm FE kì Fall 2026 chính thức mới nhất gồm 60 câu hỏi kèm ảnh chụp đề thi gốc phòng máy và lời giải chi tiết.',
    sections: [
      {
        id: 'swt-ch-fa26-sec1',
        type: 'concept',
        title: 'Trọng tâm kì FA26',
        content:
          '7 nguyên lý kiểm thử ISTQB (Testing shows presence of defects, Exhaustive testing is impossible, Early testing, Defect clustering, Pesticide paradox, Testing is context dependent, Absence-of-errors fallacy), V-model levels (Unit, Integration, System, Acceptance), kỹ thuật BVA 2-value/3-value và độ phức tạp Cyclomatic V(G) = E - N + 2P.',
      },
      {
        id: 'swt-ch-fa26-sec2',
        type: 'exam_tip',
        title: 'Bẫy trắc nghiệm kì FA26',
        content:
          'Phân biệt rõ: Error (lỗi người lập trình tạo ra trong tư duy) -> Defect/Fault/Bug (lỗi nằm trong mã nguồn hoặc tài liệu) -> Failure (sự cố hệ thống khi thực thi phần mềm). Kiểm thử tĩnh (Static testing) tìm ra Defect trực tiếp; kiểm thử động (Dynamic testing) gây ra Failure để phát hiện Defect.',
      },
    ],
  },
  {
    id: 'swt-ch-su26-b5',
    order: 2,
    title: 'Kì Summer 2026 (SU26 — Block 5)',
    summary:
      'Đề thi FE chính thức kỳ hè Summer 2026 đợt Block 5 gồm 60 câu hỏi kèm ảnh đề gốc, tập trung vào kỹ thuật thiết kế ca kiểm thử hộp đen và quản lý rủi ro kiểm thử.',
    sections: [
      {
        id: 'swt-ch-su26-b5-sec1',
        type: 'concept',
        title: 'Trọng tâm kiến thức',
        content:
          'Phân vùng tương đương (Equivalence Partitioning), Bảng quyết định (Decision Table), Sơ đồ chuyển trạng thái (State Transition Testing), và Phân loại rủi ro sản phẩm (Product Risk) vs rủi ro dự án (Project Risk).',
      },
      {
        id: 'swt-ch-su26-b5-sec2',
        type: 'exam_tip',
        title: 'Bẫy trắc nghiệm kì SU26 B5',
        content:
          'Khi áp dụng Equivalence Partitioning cho các tập giá trị độc lập, mỗi phân vùng không hợp lệ (Invalid Partition) BẮT BUỘC phải được kiểm tra bằng một ca kiểm thử riêng biệt để tránh che giấu lỗi lẫn nhau (fault masking).',
      },
    ],
  },
  {
    id: 'swt-ch-su26-b5-re',
    order: 3,
    title: 'Kì Summer 2026 (SU26 — Block 5 Retake)',
    summary:
      'Đề thi FE kỳ Summer 2026 Block 5 đợt thi lại (60 câu kèm ảnh đề gốc) chuyên sâu về công cụ kiểm thử (Tool Support) và kiểm thử hồi quy (Regression Testing).',
    sections: [
      {
        id: 'swt-ch-su26-b5-re-sec1',
        type: 'concept',
        title: 'Trọng tâm lý thuyết',
        content:
          'Phân loại công cụ kiểm thử: Quản lý (Management), Kiểm thử tĩnh (Static analysis), Đặc tả (Specification), Thực thi và Giám sát (Execution & Monitoring). Rủi ro của tự động hóa: Chi phí bảo trì kịch bản test cao, kỳ vọng phi thực tế, phụ thuộc công cụ.',
      },
      {
        id: 'swt-ch-su26-b5-re-sec2',
        type: 'exam_tip',
        title: 'Bẫy trắc nghiệm kì SU26 B5 Retake',
        content:
          'Dự án thí điểm (Pilot Project) khi đưa công cụ mới vào tổ chức nhằm mục đích tìm hiểu chi tiết về công cụ, đánh giá tính phù hợp với quy trình hiện tại, xác định quy chuẩn đặt tên và ước lượng chi phí/lợi ích thực tế.',
      },
    ],
  },
  {
    id: 'swt-ch-su26-re',
    order: 4,
    title: 'Kì Summer 2026 (SU26 — Đề Thi Lại / Retake)',
    summary:
      'Đề thi FE kỳ Summer 2026 đợt thi lại (mã đề SWT301_SU26_RE_930316) gồm 60 câu hỏi đầy đủ văn bản và ảnh chụp màn hình phòng máy.',
    sections: [
      {
        id: 'swt-ch-su26-re-sec1',
        type: 'concept',
        title: 'Trọng tâm kì SU26 Retake',
        content:
          'Khái niệm Incident, Defect Lifecycle, White-box vs Black-box, quy trình đánh giá tài liệu (Formal Review Process: Planning -> Kick-off -> Individual preparation -> Review meeting -> Rework -> Follow-up).',
      },
      {
        id: 'swt-ch-su26-re-sec2',
        type: 'exam_tip',
        title: 'Bẫy trắc nghiệm kì SU26 Retake',
        content:
          'Incident logging system ghi nhận mọi sự cố trong kiểm thử. Phân biệt rõ Confirmation Testing (re-testing: chạy lại đúng test case đã fail để xác nhận bug đã được sửa) vs Regression Testing (chạy lại các phần khác để đảm bảo không phát sinh lỗi mới do việc sửa bug gây ra).',
      },
    ],
  },
  {
    id: 'swt-ch-su26',
    order: 5,
    title: 'Kì Summer 2026 (SU26 — Đợt 1)',
    summary:
      'Đề thi FE kỳ Summer 2026 đợt 1 chính thức gồm 60 câu hỏi kèm ảnh đề gốc phòng thi.',
    sections: [
      {
        id: 'swt-ch-su26-sec1',
        type: 'concept',
        title: 'Trọng tâm kiến thức',
        content:
          'Mô hình kiểm thử Agile (Agile Testing Quadrants Q1-Q4), TDD (Test-Driven Development), BDD (Behavior-Driven Development) và Test Pyramid (Unit > Service/Integration > UI).',
      },
      {
        id: 'swt-ch-su26-sec2',
        type: 'exam_tip',
        title: 'Bẫy trắc nghiệm kì SU26',
        content:
          'Trong Agile Testing Quadrants của Brian Marick: Q1 (Công nghệ hỗ trợ đội phát triển - Unit/Component tests tự động), Q2 (Nghiệp vụ hỗ trợ đội phát triển - Functional/Story tests), Q3 (Nghiệp vụ đánh giá sản phẩm - Exploratory/Usability testing), Q4 (Công nghệ đánh giá sản phẩm - Performance/Security testing).',
      },
    ],
  },
  {
    id: 'swt-ch-sp26-b5',
    order: 6,
    title: 'Kì Spring 2026 (SP26 — Block 5)',
    summary:
      'Đề thi FE kỳ Spring 2026 Block 5 gồm 60 câu hỏi trắc nghiệm kèm ảnh chụp phòng máy.',
    sections: [
      {
        id: 'swt-ch-sp26-b5-sec1',
        type: 'concept',
        title: 'Trọng tâm kiến thức',
        content:
          'Độ đo kiểm thử (Test Metrics): Defect Density, Test Case Pass Rate, Residual Defect Density; Tiêu chí dừng kiểm thử (Exit Criteria); và Kế hoạch kiểm thử (Test Plan chuẩn IEEE 829).',
      },
      {
        id: 'swt-ch-sp26-b5-sec2',
        type: 'exam_tip',
        title: 'Bẫy trắc nghiệm kì SP26 B5',
        content:
          'Mật độ lỗi (Defect Density) = Tổng số lỗi / Kích thước phần mềm (KLOC hoặc Function Points). Kế hoạch kiểm thử (Test Plan) định nghĩa chiến lược, phạm vi và tiêu chí dừng; không chứa các ca kiểm thử chi tiết hay kết quả mong đợi cụ thể.',
      },
    ],
  },
  {
    id: 'swt-ch-sp26-re',
    order: 7,
    title: 'Kì Spring 2026 (SP26 — Đề Thi Lại / Retake)',
    summary:
      'Đề thi FE kỳ Spring 2026 đợt thi lại gồm 60 câu hỏi kèm ảnh chụp đề thi gốc.',
    sections: [
      {
        id: 'swt-ch-sp26-re-sec1',
        type: 'concept',
        title: 'Trọng tâm kiến thức',
        content:
          'Kỹ thuật kiểm thử dựa trên kinh nghiệm (Experience-based testing): Error Guessing, Exploratory Testing, Checklist-based testing; Kiểm thử bảo trì (Maintenance Testing) và Phân tích tác động (Impact Analysis).',
      },
      {
        id: 'swt-ch-sp26-re-sec2',
        type: 'exam_tip',
        title: 'Bẫy trắc nghiệm kì SP26 Retake',
        content:
          'Kiểm thử bảo trì được kích hoạt bởi 3 lý do chính: 1) Sửa đổi/nâng cấp hệ thống; 2) Di chuyển môi trường (Migration/Platform change); 3) Khai tử hệ thống (Retirement/Data archiving). Phân tích tác động (Impact Analysis) dùng để xác định phạm vi cần hồi quy.',
      },
    ],
  },
  {
    id: 'swt-ch-sp26',
    order: 8,
    title: 'Kì Spring 2026 (SP26 — Đợt 1)',
    summary:
      'Đề thi FE kỳ Spring 2026 đợt 1 chính thức gồm 60 câu hỏi kèm ảnh chụp phòng máy.',
    sections: [
      {
        id: 'swt-ch-sp26-sec1',
        type: 'concept',
        title: 'Trọng tâm kiến thức',
        content:
          'Tâm lý học kiểm thử (Psychology of Testing), Giao tiếp mang tính xây dựng giữa Tester và Developer, Đạo đức nghề nghiệp kiểm thử (ISTQB Code of Ethics).',
      },
      {
        id: 'swt-ch-sp26-sec2',
        type: 'exam_tip',
        title: 'Bẫy trắc nghiệm kì SP26',
        content:
          'Tester và Developer đều có mục tiêu chung là chất lượng sản phẩm. Tester tìm lỗi để giúp sản phẩm hoàn thiện hơn, không phải để chỉ trích con người. Luôn truyền đạt kết quả kiểm thử một cách khách quan, trung thực và dựa trên dữ liệu thực tế.',
      },
    ],
  },
  {
    id: 'swt-ch-su25',
    order: 9,
    title: 'Kì Summer 2025 (SU25 — FE & Practice Exam)',
    summary:
      'Bộ đề thi FE kỳ Summer 2025 (60 câu) và đề thi luyện tập thực hành (Practice Exam) có 67 câu hỏi kèm ảnh đề gốc.',
    sections: [
      {
        id: 'swt-ch-su25-sec1',
        type: 'concept',
        title: 'Trọng tâm kiến thức',
        content:
          'Tổng hợp câu hỏi kiểm thử toàn diện từ cơ bản đến nâng cao: Statement vs Decision vs Condition Coverage, Driver vs Stub trong kiểm thử tích hợp (Integration Testing Top-down vs Bottom-up).',
      },
      {
        id: 'swt-ch-su25-sec2',
        type: 'exam_tip',
        title: 'Bẫy trắc nghiệm kì SU25',
        content:
          '100% Decision Coverage luôn đảm bảo 100% Statement Coverage, nhưng chiều ngược lại KHÔNG ĐÚNG (100% Statement coverage có thể chỉ đạt 50% Decision coverage nếu có lệnh if không có nhánh else). Stub mô phỏng module cấp dưới bị gọi (dùng trong Top-down); Driver mô phỏng module cấp trên gọi đến (dùng trong Bottom-up).',
      },
    ],
  },
  {
    id: 'swt-ch-su23-ftes',
    order: 10,
    title: 'Kì Summer 2023 (SU23 — Đề Thi Thật FTES)',
    summary:
      'Đề thi FE chính thức kỳ hè Summer 2023 (40 câu) trích xuất từ đề thi thật phòng máy trên FTES kèm ảnh chụp gốc và giải thích.',
    sections: [
      {
        id: 'swt-ch-su23-sec1',
        type: 'concept',
        title: 'Trọng tâm kì SU23',
        content:
          'Chiến lược kiểm thử phân tích rủi ro (Risk-based Testing), Pilot Project công cụ quản lý test, thứ tự ưu tiên thực thi ca kiểm thử theo thời gian và mức độ rủi ro.',
      },
      {
        id: 'swt-ch-su23-sec2',
        type: 'exam_tip',
        title: 'Mẹo làm bài SU23',
        content:
          'Khi lập báo cáo sự cố (Defect Report), phiên bản phần mềm được test (Software Version) và môi trường kiểm thử là thông tin sống còn để lập trình viên có thể tái hiện lỗi (reproduce).',
      },
    ],
  },
  {
    id: 'swt-ch-sp23-ftes',
    order: 11,
    title: 'Kì Spring 2023 (SP23 — Đề Thi Thật FTES)',
    summary:
      'Đề thi FE chính thức kỳ xuân Spring 2023 (40 câu) trích xuất từ ngân hàng đề thi thật phòng máy FTES kèm ảnh chụp gốc.',
    sections: [
      {
        id: 'swt-ch-sp23-sec1',
        type: 'concept',
        title: 'Trọng tâm kì SP23',
        content:
          'Quản lý cấu hình (Configuration Management cho Test object, Test material, Test environment), Tiêu chuẩn hoàn thành kiểm thử (Test completion criteria / Exit criteria).',
      },
      {
        id: 'swt-ch-sp23-sec2',
        type: 'exam_tip',
        title: 'Mẹo làm bài SP23',
        content:
          'Test completion criterion (tiêu chí kết thúc kiểm thử) dùng để xác định "Khi nào thì dừng kiểm thử" (When to stop testing), dựa trên độ bao phủ, số lỗi còn tồn đọng và ngân sách/thời gian cho phép.',
      },
    ],
  },
];
