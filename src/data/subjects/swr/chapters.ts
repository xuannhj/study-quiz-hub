import type { Chapter } from '../../../types/study';

export const swrChapters: Chapter[] = [
  {
    id: 'swr-ch1',
    order: 1,
    title: 'Chương 1: Tổng quan & Phân loại Yêu cầu Phần mềm (Starter)',
    summary:
      'Phân biệt các cấp độ yêu cầu (Business, User, Functional) và yêu cầu phi chức năng (Non-Functional Requirements), cùng vai trò của tài liệu SRS.',
    sections: [
      {
        id: 'swr-ch1-sec1',
        type: 'concept',
        title: 'Ba cấp độ yêu cầu cốt lõi (Karl Wiegers)',
        content:
          '- **Business Requirements (Yêu cầu nghiệp vụ):** Giải thích *tại sao* tổ chức đầu tư xây dựng hệ thống (mục tiêu kinh doanh, ROI). Thường nằm trong **Vision and Scope Document**.\n- **User Requirements (Yêu cầu người dùng):** Mô tả *tác vụ* người dùng cần thực hiện với hệ thống (Use Cases, User Stories).\n- **Functional Requirements (Yêu cầu chức năng):** Mô tả *hành vi cụ thể* mà phần mềm phải thực hiện dưới dạng đầu vào, xử lý, đầu ra (được đặc tả trong **SRS**).',
      },
      {
        id: 'swr-ch1-sec2',
        type: 'comparison',
        title: 'Phân biệt Functional vs Non-Functional Requirements',
        content:
          '| Tiêu chí | Functional Requirements (FR) | Non-Functional Requirements (NFR) |\n|---|---|---|\n| Câu hỏi trả lời | Hệ thống **làm gì**? (What) | Hệ thống làm **tốt đến mức nào**? (How well) |\n| Ví dụ | Cho phép đặt hàng, xuất hóa đơn PDF | Thời gian phản hồi < 2s, uptime 99.9%, mã hóa AES-256 |\n| Nhóm con thường gặp | Tính năng, quy tắc xử lý | Quality Attributes (Hiệu năng, Bảo mật), Constraints |',
      },
      {
        id: 'swr-ch1-sec3',
        type: 'keywords',
        title: 'Từ khóa nhận diện nhanh khi làm đề',
        content:
          '- `Vision and Scope` → Gắn liền với **Business Requirements** & ranh giới dự án.\n- `Use Case / User Story` → Gắn liền với **User Requirements**.\n- `Quality Attributes (Usability, Reliability, Security)` → Thuộc **Non-Functional Requirements**.\n- `Business Rules` → Quy định/chính sách của tổ chức (không phải là functional requirement trực tiếp, nhưng sinh ra chúng).',
      },
      {
        id: 'swr-ch1-sec4',
        type: 'exam_tip',
        title: 'Bẫy hay gặp trong Quiz & Final',
        content:
          'Đề thi hay gài câu hỏi liệt kê **Business Rules** (ví dụ: chính sách giảm giá 10% cho VIP) hoặc **Design Constraints** (ví dụ: phải chạy trên PostgreSQL) và hỏi có phải Functional Requirement không — câu trả lời là **KHÔNG**.',
      },
    ],
  },
  {
    id: 'swr-ch2',
    order: 2,
    title: 'Chương 2: Khai thác Yêu cầu & Phân tích Stakeholder (Starter)',
    summary:
      'Quy trình tìm hiểu Stakeholder, các kỹ thuật khai thác yêu cầu (Elicitation Techniques) và cách chọn kỹ thuật phù hợp theo bối cảnh.',
    sections: [
      {
        id: 'swr-ch2-sec1',
        type: 'concept',
        title: 'Kỹ thuật Khai thác Yêu cầu (Elicitation Techniques)',
        content:
          '- **Interviews (Phỏng vấn):** Hiệu quả để lấy góc nhìn sâu từ stakeholder chủ chốt hoặc chuyên gia nghiệp vụ.\n- **Workshops (Hội thảo JAD):** Nhanh chóng thống nhất yêu cầu và giải quyết xung đột giữa nhiều nhóm stakeholder.\n- **Observation / Job Shadowing (Quan sát thực tế):** Tốt nhất để phát hiện các bước làm việc ngầm định (tacit knowledge) mà người dùng quên kể.\n- **Document Analysis:** Khai thác tài liệu, biểu mẫu, hệ thống cũ có sẵn.\n- **Prototyping:** Dùng bản mẫu giao diện để xác nhận nhanh khi yêu cầu còn mơ hồ.',
      },
      {
        id: 'swr-ch2-sec2',
        type: 'comparison',
        title: 'Chọn kỹ thuật phù hợp theo tình huống',
        content:
          '| Tình huống trong đề | Kỹ thuật ưu tiên |\n|---|---|\n| Thu thập ý kiến từ hàng trăm người dùng ở xa | **Questionnaire / Survey** |\n| Giải quyết bất đồng giữa 2 phòng ban | **Facilitated Workshop** |\n| Người dùng khó diễn đạt thao tác lặp hàng ngày | **Observation (Quan sát)** |\n| Khách hàng chưa hình dung được giao diện | **Prototyping** |',
      },
      {
        id: 'swr-ch2-sec3',
        type: 'exam_tip',
        title: 'Mẹo loại trừ nhanh',
        content:
          'Một trong những nguyên nhân lớn nhất gây thiếu sót yêu cầu là **bỏ sót Stakeholder** (đặc biệt là người vận hành, bảo trì, pháp chế, hoặc người dùng gián tiếp), chứ không phải chỉ phỏng vấn end-user.',
      },
    ],
  },
];
