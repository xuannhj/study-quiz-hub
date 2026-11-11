import type { Question } from '../../../types/study';

export const swrQuestions: Question[] = [
  {
    id: 'swr-q-001',
    subjectId: 'swr',
    chapterId: 'swr-ch1',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Tài liệu nào thường dùng để ghi nhận Business Requirements và ranh giới tổng thể của dự án phần mềm?',
    options: [
      { id: 'a', text: 'Vision and Scope Document' },
      { id: 'b', text: 'Unit Test Specification' },
      { id: 'c', text: 'Database Schema Design' },
      { id: 'd', text: 'Deployment Checklist' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo Chương 1, Business Requirements (mục tiêu tổ chức, lý do đầu tư) và ranh giới dự án được tổng hợp trong Vision and Scope Document.',
  },
  {
    id: 'swr-q-002',
    subjectId: 'swr',
    chapterId: 'swr-ch1',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Phát biểu nào sau đây mô tả đúng nhất về Functional Requirement (Yêu cầu chức năng)?',
    options: [
      { id: 'a', text: 'Hệ thống phải đạt thời gian phản hồi dưới 1.5 giây với 1.000 người dùng đồng thời.' },
      { id: 'b', text: 'Hệ thống cho phép giảng viên xuất bảng điểm lớp học ra định dạng CSV.' },
      { id: 'c', text: 'Ứng dụng bắt buộc phải triển khai trên máy chủ Linux.' },
      { id: 'd', text: 'Tất cả mật khẩu phải được băm bằng thuật toán Argon2.' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Xuất bảng điểm CSV mô tả hành vi/tính năng cụ thể hệ thống phải làm (Functional). Các lựa chọn còn lại thuộc Hiệu năng, Ràng buộc thiết kế và Bảo mật (Non-Functional).',
  },
  {
    id: 'swr-q-003',
    subjectId: 'swr',
    chapterId: 'swr-ch1',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'understand',
    type: 'multiple',
    prompt:
      'Chọn 2 mục thuộc nhóm Non-Functional Requirements (Quality Attributes & Constraints):',
    options: [
      { id: 'a', text: 'Hệ thống đạt độ sẵn sàng (Availability) tối thiểu 99.9% mỗi năm.' },
      { id: 'b', text: 'Người dùng có thể lọc danh sách đơn hàng theo ngày tạo.' },
      { id: 'c', text: 'Giao diện đáp ứng chuẩn truy cập WCAG 2.1 AA cho người khiếm thị.' },
      { id: 'd', text: 'Hệ thống gửi email xác nhận sau khi thanh toán thành công.' },
    ],
    correctOptionIds: ['a', 'c'],
    explanation:
      'Availability (độ sẵn sàng) và Accessibility/Usability (khả năng tiếp cận) là các thuộc tính chất lượng thuộc Non-Functional Requirements.',
  },
  {
    id: 'swr-q-004',
    subjectId: 'swr',
    chapterId: 'swr-ch1',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Một công ty quy định: "Khách hàng hạng Vàng được miễn phí vận chuyển cho đơn hàng từ 500.000đ trở lên." Trong phân loại yêu cầu, quy định này là gì?',
    options: [
      { id: 'a', text: 'Business Rule (Quy tắc nghiệp vụ)' },
      { id: 'b', text: 'Design Constraint (Ràng buộc thiết kế)' },
      { id: 'c', text: 'Quality Attribute (Thuộc tính chất lượng)' },
      { id: 'd', text: 'System Interface Requirement' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Chính sách giảm giá hoặc miễn phí vận chuyển là Business Rule — quy định kinh doanh của tổ chức làm cơ sở sinh ra các yêu cầu chức năng tương ứng.',
  },
  {
    id: 'swr-q-005',
    subjectId: 'swr',
    chapterId: 'swr-ch2',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Nhân viên kho thường thực hiện nhiều thao tác quen tay mà họ không nhớ để kể lại khi phỏng vấn. Kỹ thuật khai thác nào hiệu quả nhất để phát hiện các bước ẩn này?',
    options: [
      { id: 'a', text: 'Gửi bảng khảo sát trực tuyến (Questionnaire)' },
      { id: 'b', text: 'Quan sát trực tiếp tại nơi làm việc (Observation / Job Shadowing)' },
      { id: 'c', text: 'Đọc lại hợp đồng mua phần mềm cũ' },
      { id: 'd', text: 'Tổ chức họp trực tuyến với ban giám đốc' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Theo Chương 2, Observation (quan sát trực tiếp) giúp BA nhìn thấy quy trình thực tế và tri thức ngầm định (tacit knowledge) mà người dùng bỏ qua khi phỏng vấn.',
  },
  {
    id: 'swr-q-006',
    subjectId: 'swr',
    chapterId: 'swr-ch2',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Khi có xung đột yêu cầu giữa bộ phận Kế toán và bộ phận Bán hàng, kỹ thuật nào giúp hai bên thảo luận và thống nhất nhanh nhất?',
    options: [
      { id: 'a', text: 'Facilitated Requirements Workshop' },
      { id: 'b', text: 'Questionnaire ẩn danh' },
      { id: 'c', text: 'Phỏng vấn riêng từng lập trình viên' },
      { id: 'd', text: 'Viết mã nguồn thử nghiệm rồi bàn sau' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Workshop có người điều phối (Facilitated Workshop) quy tụ các bên liên quan cùng giải quyết mâu thuẫn và chốt ưu tiên ngay trong phiên làm việc.',
  },
  {
    id: 'swr-q-007',
    subjectId: 'swr',
    chapterId: 'swr-ch2',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'understand',
    type: 'multiple',
    prompt:
      'Chọn 2 lợi ích chính của việc sử dụng Prototype trong quá trình khai thác yêu cầu (Requirements Elicitation):',
    options: [
      { id: 'a', text: 'Giúp khách hàng hình dung trực quan và phản hồi sớm khi yêu cầu còn mơ hồ.' },
      { id: 'b', text: 'Thay thế hoàn toàn việc viết tài liệu SRS và kiểm thử tích hợp.' },
      { id: 'c', text: 'Phát hiện sớm các hiểu lầm về luồng thao tác trước khi lập trình chính thức.' },
      { id: 'd', text: 'Đảm bảo không bao giờ phát sinh thay đổi yêu cầu ở các giai đoạn sau.' },
    ],
    correctOptionIds: ['a', 'c'],
    explanation:
      'Prototyping làm rõ yêu cầu mơ hồ và phát hiện hiểu lầm sớm; nó không thay thế hoàn toàn đặc tả hay loại bỏ 100% thay đổi sau này.',
  },
  {
    id: 'swr-q-008',
    subjectId: 'swr',
    chapterId: 'swr-ch2',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Kỹ thuật nào phù hợp nhất để thu thập ý kiến thống kê từ 500 người dùng phân tán ở nhiều chi nhánh khác nhau với chi phí thấp?',
    options: [
      { id: 'a', text: 'Phỏng vấn trực tiếp 1-1 toàn bộ 500 người' },
      { id: 'b', text: 'Khảo sát bằng bảng câu hỏi (Questionnaire / Survey)' },
      { id: 'c', text: 'Job Shadowing từng người một' },
      { id: 'd', text: 'Hội thảo tập trung 500 người cùng lúc' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Questionnaire / Survey là kỹ thuật tối ưu khi cần thu thập dữ liệu có cấu trúc từ số lượng lớn stakeholder ở xa nhau.',
  },
];
