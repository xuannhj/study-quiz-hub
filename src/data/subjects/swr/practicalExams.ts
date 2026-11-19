import type { PracticalExam } from '../../../types/study';

export const swrPracticalExams: PracticalExam[] = [
  {
    id: 'fa26-pe',
    semester: 'FA26',
    title: 'SWR302 — FA26 — PE (Đề Thi Chính Thức Mới Nhất)',
    code: 'SWR302_FA26_PE',
    description:
      'Đề thi thực hành SWR302 kỳ Fall 2026 mới nhất. Yêu cầu đọc hiểu kịch bản nghiệp vụ thực tế, trích xuất thực thể ngoài, vẽ sơ đồ ngữ cảnh (Context Diagram), lưu đồ phân làn (Swimlane), sơ đồ Use Case và viết Use Case Specification chuẩn IEEE.',
    durationMinutes: 90,
    scenarioSummary:
      'Bài toán nghiệp vụ hệ thống quản lý tích hợp. Yêu cầu sinh viên xác định chính xác ranh giới hệ thống, các Actor tương tác trực tiếp/gián tiếp, và các kịch bản luồng chính/luồng rẽ nhánh.',
    requirements: [
      'Q1 (0.5đ): Điền đầy đủ Title SRS, Tên dự án, Họ tên sinh viên, Mã số SV (MSSV) và Campus vào Template.',
      'Q2 (1.5đ): Vẽ Context Diagram (DFD Level 0) — Xác định tối thiểu 3-4 External Entities với mũi tên luồng dữ liệu 2 chiều kèm nhãn rõ ràng (danh từ/cụm danh từ).',
      'Q3 (2.0đ): Vẽ Swimlane Diagram (Activity Diagram with Partitions) — Thể hiện quy trình nghiệp vụ trọng tâm với đầy đủ Start Node, Activity Actions, Decision Diamonds, và End Node.',
      'Q4 (2.0đ): Vẽ Use Case Diagram — Gom nhóm theo Subsystem/Package, vẽ ranh giới System Boundary, chỉ rõ Primary Actor, Supporting Actor, quan hệ <<include>> (bắt buộc) và <<extend>> (tùy chọn có điều kiện).',
      'Q5 (2.5đ): Viết Use Case Specification hoàn chỉnh — Gồm ID, Use Case Name, Primary Actor, Preconditions, Postconditions, Main Success Scenario (từng bước rõ ràng), ít nhất 2 Alternative Flows và 1 Exception Flow.',
      'Q6 (1.5đ): Xác định Business Rules (BR) và Non-functional Requirements (Hiệu năng, bảo mật, thời gian phản hồi theo kịch bản đề bài).',
    ],
    images: [
      {
        pageNumber: 1,
        title: 'Trang 1 — Ngữ cảnh bài toán & Yêu cầu 1-3',
        url: '/images/swr-pe/fa26-pe/page_1.webp',
      },
      {
        pageNumber: 2,
        title: 'Trang 2 — Yêu cầu đặc tả Use Case & Barem',
        url: '/images/swr-pe/fa26-pe/page_2.webp',
      },
    ],
    solutionTips: [
      '⏱️ Phân bổ thời gian 90 phút: 10p đọc kỹ đề & gạch chân Actor + Danh từ/Động từ -> 20p vẽ Context Diagram & Swimlane -> 25p vẽ Use Case Diagram -> 25p viết Use Case Specification -> 10p rà soát & kiểm tra template docx.',
      '⚠️ Lỗi mất điểm hay gặp ở Context Diagram: Quên mũi tên ngược về External Entity, hoặc vẽ luồng giao tiếp giữa 2 External Entity trực tiếp với nhau (vi phạm quy tắc DFD).',
      '💡 Quan hệ <<include>> vs <<extend>>: Nếu tính năng A BẮT BUỘC phải thực hiện thì luôn là <<include>> (mũi tên hướng từ Base -> Included). Nếu chỉ kích hoạt khi có điều kiện phát sinh/ngoại lệ thì là <<extend>> (mũi tên hướng ngược lại từ Extending -> Base).',
    ],
  },
  {
    id: 'su26-b5-pe',
    semester: 'SU26',
    title: 'SWR302 — SU26 Block 5 — PE',
    code: 'SWR302_SU26_B5_PE',
    description:
      'Đề thi thực hành kỳ Summer 2026 Block 5. Bài toán mô hình hóa nghiệp vụ chuyên sâu với quy trình phối hợp giữa khách hàng, nhân viên vận hành và hệ thống thanh toán bên thứ ba.',
    durationMinutes: 90,
    scenarioSummary:
      'Quy trình xử lý giao dịch và điều phối đơn hàng đa luồng. Kiểm tra năng lực phân tích luồng công việc giữa các đối tác.',
    requirements: [
      'Q1 (0.5đ): Khởi tạo tài liệu SRS theo Template chuẩn FPT.',
      'Q2 (1.5đ): Context Diagram — Mô hình hóa tương tác giữa hệ thống lõi và các hệ thống vệ tinh (Payment Gateway, SMS/Email Provider, Delivery Partner).',
      'Q3 (2.0đ): Swimlane Diagram — Phân chia tối thiểu 3 làn: Khách hàng (User), Hệ thống (System), và Bộ phận duyệt/xử lý (Staff).',
      'Q4 (2.0đ): Use Case Diagram — Tối thiểu 6-8 Use Case chính, phân chia rõ quyền hạn người dùng.',
      'Q5 (2.5đ): Use Case Specification — Đặc tả chi tiết kịch bản nghiệp vụ phức tạp nhất trong đề.',
      'Q6 (1.5đ): Business Rules — Liệt kê bảng quy tắc tính phí, điều kiện hủy và chính sách hoàn tiền.',
    ],
    images: [
      {
        pageNumber: 1,
        title: 'Trang 1 — Scenario Description',
        url: '/images/swr-pe/su26-b5-pe/page_1.webp',
      },
      {
        pageNumber: 2,
        title: 'Trang 2 — Detailed Tasks & Rubric',
        url: '/images/swr-pe/su26-b5-pe/page_2.webp',
      },
    ],
    solutionTips: [
      'Swimlane cần thể hiện rõ thông điệp truyền từ làn này sang làn khác, tránh việc nhảy cóc không qua hệ thống.',
      'Lưu ý tên Use Case luôn bắt đầu bằng ĐỘNG TỪ dạng nguyên mẫu (e.g. Place Order, Cancel Booking, Verify Identity).',
    ],
  },
  {
    id: 'su26-pe1',
    semester: 'SU26',
    title: 'SWR302 — SU26 — PE (Đề 1)',
    code: 'SWR302_SU26_PE1',
    description:
      'Đề thi chính thức Summer 2026 Đề 1 kèm file mẫu Word (.docx) trích xuất từ đề thi gốc phòng máy thi FPT.',
    durationMinutes: 90,
    scenarioSummary:
      'Bài toán xây dựng giải pháp phần mềm quản lý lịch hẹn và dịch vụ chăm sóc khách hàng.',
    requirements: [
      'Q1 (0.5đ): Điền thông tin đề bài và thông tin thí sinh vào template Word.',
      'Q2 (1.5đ): Context Diagram (DFD Level 0).',
      'Q3 (2.0đ): Swimlane Process Workflow.',
      'Q4 (2.0đ): Use Case Diagram với Boundary và quan hệ chuẩn.',
      'Q5 (2.5đ): Use Case Specification chuẩn cấu trúc IEEE.',
      'Q6 (1.5đ): Danh mục Business Rules và các ràng buộc phi chức năng.',
    ],
    images: [
      {
        pageNumber: 1,
        title: 'Trang 1 — Nội dung đề thi chi tiết',
        url: '/images/swr-pe/su26-pe1/page_1.webp',
      },
    ],
    materialsZipUrl: '/materials/swr-pe/su26-pe1-materials.zip',
    solutionTips: [
      'Tải file Template (.docx) ở góc trên để luyện gõ trực tiếp vào định dạng Word nộp bài thi thực tế.',
      'Chú ý các ràng buộc thời gian (ví dụ: hủy trước 24h) để đưa vào mục Business Rules.',
    ],
  },
  {
    id: 'su26-pe-re',
    semester: 'SU26',
    title: 'SWR302 — SU26 — PE Retake (Đề Thi Lại)',
    code: 'SWR302_SU26_PE_RE',
    description:
      'Đề thi lại thực hành kỳ Summer 2026 kèm Template Word (.docx). Đề có độ khó nâng cao về các luồng ngoại lệ (Exception Handling).',
    durationMinutes: 90,
    scenarioSummary:
      'Kịch bản quản lý tài nguyên và kiểm soát truy cập phân quyền chặt chẽ giữa Quản trị viên và Khách hàng.',
    requirements: [
      'Q1 (0.5đ): Chuẩn bị file bài làm theo SWR302_Template.docx.',
      'Q2 (1.5đ): Xây dựng DFD Level 0 thể hiện dòng luồng dữ liệu.',
      'Q3 (2.0đ): Thiết kế Swimlane Diagram có phân nhánh rẽ (Decisions).',
      'Q4 (2.0đ): Thiết kế Use Case Model.',
      'Q5 (2.5đ): Viết đặc tả Use Case cho luồng chính và tối thiểu 2 nhánh rẽ lỗi.',
      'Q6 (1.5đ): Bảng ma trận Business Rules.',
    ],
    images: [
      {
        pageNumber: 1,
        title: 'Trang 1 — Đề bài thi lại SU26',
        url: '/images/swr-pe/su26-pe-re/page_1.webp',
      },
    ],
    materialsZipUrl: '/materials/swr-pe/su26-pe-re-materials.zip',
    solutionTips: [
      'Đề thi lại thường nhấn mạnh vào trường hợp người dùng nhập sai dữ liệu hoặc hệ thống đối tác mất kết nối.',
    ],
  },
  {
    id: 'sp26-b5-no4-pe',
    semester: 'SP26',
    title: 'SWR302 — SP26 Block 5 — PE (Đề 4)',
    code: 'SWR302_SP26_B5_NO4_PE',
    description:
      'Đề thi PE Spring 2026 Block 5 Ca 4. Trọn bộ 2 trang yêu cầu chi tiết về phân tích yêu cầu phần mềm.',
    durationMinutes: 90,
    scenarioSummary:
      'Phần mềm hỗ trợ quản lý vận hành dịch vụ lưu trú và đặt phòng khách sạn thông minh.',
    requirements: [
      'Q1 (0.5đ): Cấu hình tài liệu SRS tiêu chuẩn.',
      'Q2 (1.5đ): Context Diagram — Xác định khách du lịch, lễ tân, quản lý và cổng thanh toán.',
      'Q3 (2.0đ): Swimlane Diagram quy trình kiểm tra phòng và xác nhận đặt cọc.',
      'Q4 (2.0đ): Sơ đồ Use Case phân hệ Đặt phòng (Reservation Subsystem).',
      'Q5 (2.5đ): Đặc tả chi tiết Use Case "Book Room" hoặc "Cancel Reservation".',
      'Q6 (1.5đ): Xây dựng bảng quy tắc kinh doanh (Business Rules).',
    ],
    images: [
      {
        pageNumber: 1,
        title: 'Trang 1 — Đề bài nghiệp vụ',
        url: '/images/swr-pe/sp26-b5-no4-pe/page_1.webp',
      },
      {
        pageNumber: 2,
        title: 'Trang 2 — Barem & Yêu cầu câu hỏi',
        url: '/images/swr-pe/sp26-b5-no4-pe/page_2.webp',
      },
    ],
    solutionTips: [
      'Đối với bài toán đặt phòng, lưu ý luồng thời gian thực khóa giữ phòng tạm thời trong 15 phút.',
    ],
  },
  {
    id: 'sp26-b5-no3-pe',
    semester: 'SP26',
    title: 'SWR302 — SP26 Block 5 — PE (Đề 3)',
    code: 'SWR302_SP26_B5_NO3_PE',
    description:
      'Đề thi thực hành Spring 2026 Block 5 Ca 3 kèm bộ tài liệu mẫu Given Materials (.zip).',
    durationMinutes: 90,
    scenarioSummary:
      'Hệ thống quản lý kho vận và kiểm kê hàng hóa cho chuỗi bán lẻ.',
    requirements: [
      'Q1 (0.5đ): Khởi tạo SWR302_SP26_PE3_Template.docx.',
      'Q2 (1.5đ): Sơ đồ ngữ cảnh Context Diagram.',
      'Q3 (2.0đ): Swimlane Diagram luồng nhập/xuất kho.',
      'Q4 (2.0đ): Use Case Model phân hệ quản lý kho.',
      'Q5 (2.5đ): Đặc tả Use Case kiểm kê hàng hóa.',
      'Q6 (1.5đ): Business Rules về ngưỡng tồn kho an toàn và cảnh báo.',
    ],
    images: [
      {
        pageNumber: 1,
        title: 'Trang 1 — Scenario Description',
        url: '/images/swr-pe/sp26-b5-no3-pe/page_1.webp',
      },
      {
        pageNumber: 2,
        title: 'Trang 2 — Requirements & Scoring Criteria',
        url: '/images/swr-pe/sp26-b5-no3-pe/page_2.webp',
      },
    ],
    materialsZipUrl: '/materials/swr-pe/sp26-b5-no3-pe-materials.zip',
    solutionTips: [
      'Vẽ sơ đồ bằng Draw.io hoặc Astah / StarUML, sau đó chụp ảnh chèn vào Word theo đúng thứ tự câu.',
    ],
  },
  {
    id: 'sp26-pe-re',
    semester: 'SP26',
    title: 'SWR302 — SP26 — PE Retake (Đề Thi Lại)',
    code: 'SWR302_SP26_PE_RE',
    description:
      'Đề thi lại PE kỳ Spring 2026 kèm Given materials (.zip) và file mẫu template docx.',
    durationMinutes: 90,
    scenarioSummary:
      'Hệ thống đánh giá và quản lý phản hồi khách hàng đa kênh.',
    requirements: [
      'Q1 (0.5đ): Chuẩn bị tài liệu báo cáo theo Template.',
      'Q2 (1.5đ): Context Diagram.',
      'Q3 (2.0đ): Swimlane Diagram xử lý khiếu nại.',
      'Q4 (2.0đ): Use Case Diagram.',
      'Q5 (2.5đ): Use Case Specification cho tính năng xử lý khiếu nại.',
      'Q6 (1.5đ): Business Rules & Yêu cầu phi chức năng.',
    ],
    images: [
      {
        pageNumber: 1,
        title: 'Trang 1 — Đề thi thực hành lại SP26',
        url: '/images/swr-pe/sp26-pe-re/page_1.webp',
      },
    ],
    materialsZipUrl: '/materials/swr-pe/sp26-pe-re-materials.zip',
    solutionTips: [
      'Chú ý phân biệt rõ ràng giữa Người khiếu nại, Nhân viên tiếp nhận, và Quản lý giải quyết.',
    ],
  },
  {
    id: 'sp26-pe1',
    semester: 'SP26',
    title: 'SWR302 — SP26 — PE (Đề 1)',
    code: 'SWR302_SP26_PE1',
    description:
      'Đề thi chính thức PE Spring 2026 Đề số 1. Trọn vẹn 2 trang mô tả bài toán và bộ Given Zip.',
    durationMinutes: 90,
    scenarioSummary:
      'Nghiệp vụ hệ thống quản lý thư viện số và mượn trả tài liệu học tập trực tuyến.',
    requirements: [
      'Q1 (0.5đ): Hoàn thiện trang bìa SRS Template.',
      'Q2 (1.5đ): Context Diagram kết nối Độc giả, Thủ thư, và Cổng xác thực sinh viên.',
      'Q3 (2.0đ): Swimlane luồng đăng ký mượn và phê duyệt tài liệu.',
      'Q4 (2.0đ): Use Case Diagram toàn diện.',
      'Q5 (2.5đ): Use Case Specification mượn trả sách.',
      'Q6 (1.5đ): Business Rules về thời hạn mượn và tính phí trễ hạn.',
    ],
    images: [
      {
        pageNumber: 1,
        title: 'Trang 1 — Mô tả kịch bản mượn sách',
        url: '/images/swr-pe/sp26-pe1/page_1.webp',
      },
      {
        pageNumber: 2,
        title: 'Trang 2 — Barem điểm & Yêu cầu kỹ thuật',
        url: '/images/swr-pe/sp26-pe1/page_2.webp',
      },
    ],
    materialsZipUrl: '/materials/swr-pe/sp26-pe1-materials.zip',
    solutionTips: [
      'Nhớ đặt tên các data flow trên Context Diagram mang tính thông tin/dữ liệu (e.g. Member Info, Book Request, Borrow Slip).',
    ],
  },
  {
    id: 'su25-pe1',
    semester: 'SU25',
    title: 'SWR302 — SU25 — PE (Đề 1)',
    code: 'SWR302_SU25_PE1',
    description:
      'Đề thi thực hành kinh điển Summer 2025 gồm 4 trang đề bài toán nghiệp vụ đầy đủ chi tiết + file template docx.',
    durationMinutes: 90,
    scenarioSummary:
      'Hệ thống quản lý dịch vụ bảo dưỡng xe và phụ tùng ô tô tự động.',
    requirements: [
      'Q1 (0.4đ): Khởi tạo tài liệu SRS theo Template.',
      'Q2 (1.6đ): Context Diagram với 4 External Entities.',
      'Q3 (2.0đ): Swimlane Diagram quy trình bảo dưỡng.',
      'Q4 (2.0đ): Use Case Diagram hoàn chỉnh.',
      'Q5 (2.5đ): Use Case Specification chi tiết.',
      'Q6 (1.5đ): Business Rules và Non-functional Requirements.',
    ],
    images: [
      {
        pageNumber: 1,
        title: 'Trang 1 — Đề bài và phạm vi dự án',
        url: '/images/swr-pe/su25-pe1/page_1.webp',
      },
      {
        pageNumber: 2,
        title: 'Trang 2 — Luồng nghiệp vụ bảo dưỡng',
        url: '/images/swr-pe/su25-pe1/page_2.webp',
      },
      {
        pageNumber: 3,
        title: 'Trang 3 — Danh sách phân hệ & Quy tắc',
        url: '/images/swr-pe/su25-pe1/page_3.webp',
      },
      {
        pageNumber: 4,
        title: 'Trang 4 — Hướng dẫn nộp bài và barem điểm',
        url: '/images/swr-pe/su25-pe1/page_4.webp',
      },
    ],
    materialsZipUrl: '/materials/swr-pe/su25-pe1-materials.zip',
    solutionTips: [
      'Đề thi 4 trang có nhiều chi tiết, hãy dùng bút highlight gạch chân ngay các thực thể và hành động chính trước khi vẽ.',
    ],
  },
];
