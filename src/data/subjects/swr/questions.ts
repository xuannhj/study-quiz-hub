import type { Question } from '../../../types/study';

export const swrQuestions: Question[] = [
  // Chương 1 (4 câu)
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
      'Theo Chương 1 & Chương 5, Business Requirements và phạm vi tổng thể dự án được lưu trong Vision and Scope Document.',
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
      'Xuất bảng điểm CSV mô tả hành vi cụ thể của hệ thống (Functional Requirement). Ba lựa chọn còn lại thuộc hiệu năng, ràng buộc triển khai và bảo mật (NFR).',
  },
  {
    id: 'swr-q-003',
    subjectId: 'swr',
    chapterId: 'swr-ch1',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo thống kê của Martin & Leffingwell trong Slide Chương 1, yêu cầu (Requirements) chiếm bao nhiêu phần trăm nguyên nhân gây lỗi và công sức sửa lỗi?',
    options: [
      { id: 'a', text: '27% số lỗi và 13% công sức sửa lỗi' },
      { id: 'b', text: '56% số lỗi và 82% công sức sửa lỗi' },
      { id: 'c', text: '7% số lỗi và 1% công sức sửa lỗi' },
      { id: 'd', text: '40% số lỗi và 60% công sức sửa lỗi' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Theo Slide 4 Chương 1 (Martin & Leffingwell): Requirements chiếm 56% phân bố lỗi nhưng tiêu tốn tới 82% công sức sửa chữa.',
  },
  {
    id: 'swr-q-004',
    subjectId: 'swr',
    chapterId: 'swr-ch1',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Một lập trình viên tự ý thêm tính năng hiệu ứng hoạt ảnh 3D và biểu đồ thống kê nâng cao dù không có trong đặc tả hay yêu cầu của khách hàng. Hiện tượng này gọi là gì?',
    options: [
      { id: 'a', text: 'Gold plating' },
      { id: 'b', text: 'Requirements traceability' },
      { id: 'c', text: 'Requirements baseline' },
      { id: 'd', text: 'Impact analysis' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo Slide 11 Chương 1, Gold plating là tình trạng thành viên dự án tự ý thêm tính năng "mạ vàng" không có trong yêu cầu khách hàng, gây lãng phí và tăng rủi ro.',
  },

  // Chương 2 (3 câu)
  {
    id: 'swr-q-005',
    subjectId: 'swr',
    chapterId: 'swr-ch2',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'understand',
    type: 'multiple',
    prompt:
      'Theo "Requirements Bill of Rights for Software Customers" (Chương 2, Slide 6), khách hàng có 2 quyền lợi nào sau đây?',
    options: [
      { id: 'a', text: 'Kỳ vọng BA nói ngôn ngữ của mình và tìm hiểu mục tiêu kinh doanh của doanh nghiệp.' },
      { id: 'b', text: 'Thay đổi yêu cầu khi nhu cầu nghiệp vụ thay đổi.' },
      { id: 'c', text: 'Yêu cầu đội ngũ code thêm tính năng miễn phí không cần đánh giá chi phí.' },
      { id: 'd', text: 'Bỏ qua việc đánh giá prototype để đội phát triển tự đoán.' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Theo Slide 6 Chương 2, khách hàng có quyền kỳ vọng BA nói ngôn ngữ của họ, tìm hiểu nghiệp vụ và được phép thay đổi yêu cầu. Ngược lại, tôn trọng đánh giá chi phí và đánh giá prototype thuộc trách nhiệm (Responsibilities).',
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
      'Trong "Requirements Bill of Responsibilities" (Chương 2, Slide 7), đâu là TRÁCH NHIỆM của khách hàng?',
    options: [
      { id: 'a', text: 'Tự viết toàn bộ mã nguồn kiểm thử đơn vị (Unit Test).' },
      { id: 'b', text: 'Đưa ra quyết định kịp thời khi được hỏi và xác lập tiêu chí nghiệm thu (Acceptance Criteria).' },
      { id: 'c', text: 'Định nghĩa cấu trúc bảng cơ sở dữ liệu vật lý.' },
      { id: 'd', text: 'Phân bổ công việc lập trình cho từng thành viên đội dev.' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Theo Slide 7 Chương 2, khách hàng có trách nhiệm ra quyết định kịp thời, cụ thể hóa yêu cầu, đặt Acceptance Criteria và đánh giá prototype.',
  },
  {
    id: 'swr-q-007',
    subjectId: 'swr',
    chapterId: 'swr-ch2',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Để đạt được sự đồng thuận (Reaching agreement) chốt Requirements Baseline (Chương 2, Slide 9), nhóm Tester cần xác nhận điều gì về bộ yêu cầu?',
    options: [
      { id: 'a', text: 'Yêu cầu mang lại doanh thu tối đa cho công ty.' },
      { id: 'b', text: 'Yêu cầu có tính kiểm chứng được (Verifiable).' },
      { id: 'c', text: 'Yêu cầu sử dụng công nghệ mới nhất.' },
      { id: 'd', text: 'Yêu cầu có chi phí phần cứng thấp nhất.' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Theo Slide 9 Chương 2: Customers đồng ý đáp ứng nhu cầu; Developers đồng ý hiểu rõ & khả thi; Testers đồng ý có thể kiểm thử (Verifiable); Management đồng ý đạt mục tiêu kinh doanh.',
  },

  // Chương 3 (3 câu)
  {
    id: 'swr-q-008',
    subjectId: 'swr',
    chapterId: 'swr-ch3',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Hoạt động nào thuộc nhóm Requirements Management (Quản lý yêu cầu) thay vì Requirements Development (Chương 3, Slide 11)?',
    options: [
      { id: 'a', text: 'Tổ chức phỏng vấn và workshop khai thác yêu cầu.' },
      { id: 'b', text: 'Thực hiện phân tích tác động thay đổi (Impact analysis) và duy trì Ma trận truy vết (Traceability matrix).' },
      { id: 'c', text: 'Xây dựng nguyên mẫu giao diện người dùng (UI prototype).' },
      { id: 'd', text: 'Xác định các lớp người dùng (User classes).' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Theo Slide 11 Chương 3, kiểm soát thay đổi, Impact analysis, thiết lập baseline và Traceability matrix là các thực hành thuộc Requirements Management.',
  },
  {
    id: 'swr-q-009',
    subjectId: 'swr',
    chapterId: 'swr-ch3',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'multiple',
    prompt:
      'Chọn 2 hoạt động thuộc nhóm Requirements Specification trong khung quy trình Chương 3 (Slide 9):',
    options: [
      { id: 'a', text: 'Áp dụng mẫu tài liệu đặc tả chuẩn (Requirement document templates).' },
      { id: 'b', text: 'Gán mã định danh duy nhất cho từng yêu cầu (Uniquely label each requirement).' },
      { id: 'c', text: 'Quan sát người dùng thao tác công việc thực tế.' },
      { id: 'd', text: 'Theo dõi nỗ lực (effort) tiêu tốn cho dự án.' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Theo Slide 9 Chương 3, Requirements Specification gồm dùng template tài liệu, định danh nguồn gốc, gắn nhãn duy nhất, ghi Business Rules và đặc tả NFR.',
  },
  {
    id: 'swr-q-010',
    subjectId: 'swr',
    chapterId: 'swr-ch3',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Với một hệ thống có cả ứng dụng Web cho người dùng cuối và tầng dịch vụ tích hợp API phía server, BA nên áp dụng thực hành nào hiệu quả nhất theo khuyến nghị Chương 3 (Slide 2)?',
    options: [
      { id: 'a', text: 'Chỉ dùng Use Case và UI Prototype cho cả server lẫn client.' },
      { id: 'b', text: 'Dùng Use Case & UI Prototype cho phía client, kết hợp Interface Analysis cho phía server.' },
      { id: 'c', text: 'Áp dụng duy nhất bảng khảo sát Questionnaire cho cả hai phía.' },
      { id: 'd', text: 'Bỏ qua bước Validation để tiết kiệm thời gian.' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Slide 2 Chương 3 nêu rõ: các phần khác nhau của dự án cần kỹ thuật phù hợp khác nhau — Use Case và UI Prototype hữu ích ở phía client, trong khi Interface Analysis giá trị hơn ở phía server.',
  },

  // Chương 4 (3 câu)
  {
    id: 'swr-q-011',
    subjectId: 'swr',
    chapterId: 'swr-ch4',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'remember',
    type: 'multiple',
    prompt:
      'Theo Slide 8 Chương 4 ("The making of a business analyst"), 2 xuất thân phổ biến nào có thể phát triển thành Business Analyst?',
    options: [
      { id: 'a', text: 'Former Developer hoặc Tester' },
      { id: 'b', text: 'Subject Matter Expert (Chuyên gia nghiệp vụ)' },
      { id: 'c', text: 'Chỉ dành riêng cho kỹ sư phần cứng' },
      { id: 'd', text: 'Chỉ dành cho bộ phận kiểm toán tài chính' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Slide 8 Chương 4 liệt kê 5 nền tảng phổ biến của BA: Former user, Former developer/tester, Former/concurrent PM, Subject matter expert và Rookie.',
  },
  {
    id: 'swr-q-012',
    subjectId: 'swr',
    chapterId: 'swr-ch4',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Trong dự án Agile (Chương 4, Slide 9), vai trò của Business Analyst thể hiện rõ nhất qua hành động nào?',
    options: [
      { id: 'a', text: 'Viết đặc tả SRS dày hàng trăm trang trước khi lập trình bất kỳ dòng code nào.' },
      { id: 'b', text: 'Xây dựng quy trình yêu cầu tinh gọn, hỗ trợ làm rõ Product Backlog và đánh giá tác động thay đổi lên Iteration/Release.' },
      { id: 'c', text: 'Ngăn cản khách hàng thay đổi độ ưu tiên trong suốt dự án.' },
      { id: 'd', text: 'Thay thế toàn bộ Product Owner trong mọi quyết định kinh doanh.' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Theo Slide 9 Chương 4, trên dự án Agile, BA tạo quy trình nhẹ/linh hoạt, giữ mức tài liệu vừa đủ, hỗ trợ backlog/story cards và đánh giá tác động thay đổi lên iteration & release.',
  },
  {
    id: 'swr-q-013',
    subjectId: 'swr',
    chapterId: 'swr-ch4',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Vì sao BA am hiểu miền nghiệp vụ (business domain) lại đặc biệt có giá trị trong dự án phần mềm (Chương 4, Slide 7)?',
    options: [
      { id: 'a', text: 'Họ có thể phát hiện các giả định ngầm và yêu cầu ẩn, đồng thời đề xuất cải tiến quy trình nghiệp vụ.' },
      { id: 'b', text: 'Họ không cần phỏng vấn bất kỳ người dùng nào khác.' },
      { id: 'c', text: 'Họ tự động kiểm thử hiệu năng thay cho toàn bộ đội QA.' },
      { id: 'd', text: 'Họ loại bỏ nhu cầu sử dụng sơ đồ phân tích.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 7 Chương 4 chỉ ra: BA hiểu tổ chức và business domain thường phát hiện được các unstated assumptions, implicit requirements và đề xuất tính năng giá trị.',
  },

  // Chương 5 + Lesson 02 Context Diagram (4 câu)
  {
    id: 'swr-q-014',
    subjectId: 'swr',
    chapterId: 'swr-ch5',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'remember',
    type: 'multiple',
    prompt:
      'Chọn 2 kỹ thuật biểu diễn phạm vi (Scope representation techniques) được giới thiệu trong Chương 5 (Slide 6):',
    options: [
      { id: 'a', text: 'Context Diagram & Ecosystem Map' },
      { id: 'b', text: 'Feature Tree & Event List' },
      { id: 'c', text: 'Class Diagram & Sequence Diagram' },
      { id: 'd', text: 'Network Topology Map' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Slide 6 Chương 5 liệt kê 4 kỹ thuật biểu diễn phạm vi: Context diagram, Ecosystem map, Feature tree và Event list.',
  },
  {
    id: 'swr-q-015',
    subjectId: 'swr',
    chapterId: 'swr-ch5',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Trong Context Diagram (Lesson 02, Page 9), ký hiệu chuẩn dùng để biểu diễn Hệ thống (The System) và Thực thể ngoài (External Entities) lần lượt là gì?',
    options: [
      { id: 'a', text: 'Một hình tròn duy nhất (System) và Hình chữ nhật (External Entities)' },
      { id: 'b', text: 'Hình thoi (System) và Hình tam giác (External Entities)' },
      { id: 'c', text: 'Nhiều hình chữ nhật lồng nhau (System) và Đường nét đứt (External Entities)' },
      { id: 'd', text: 'Hình trụ (System) và Hình tròn (External Entities)' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo Lesson 02 (Context Diagram, Page 9): Hệ thống được vẽ bằng một hình tròn duy nhất (single circle), các thực thể ngoài bằng hình chữ nhật (rectangles) và luồng dữ liệu bằng mũi tên có nhãn.',
  },
  {
    id: 'swr-q-016',
    subjectId: 'swr',
    chapterId: 'swr-ch5',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Phát biểu nào ĐÚNG về mức độ chi tiết của Context Diagram (Lesson 02, Page 4)?',
    options: [
      { id: 'a', text: 'Nó hiển thị đầy đủ các bảng dữ liệu nội bộ và thuật toán xử lý trong hệ thống.' },
      { id: 'b', text: 'Nó là mức cao nhất của DFD và cố ý không hiển thị các đối tượng, xử lý hay dữ liệu nội bộ bên trong hệ thống.' },
      { id: 'c', text: 'Nó chỉ được vẽ sau khi đã hoàn thành giai đoạn kiểm thử chấp nhận.' },
      { id: 'd', text: 'Nó thay thế hoàn toàn Use Case Specification.' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Theo Lesson 02 Page 4: Context Diagram là top-level của DFD, chỉ thể hiện ranh giới & kết nối với bên ngoài, cố ý không để lộ đối tượng/process/data nội bộ.',
  },
  {
    id: 'swr-q-017',
    subjectId: 'swr',
    chapterId: 'swr-ch5',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Một khách hàng đề xuất thêm module tính lương nhân sự vào phần mềm quản lý bán hàng đang xây dựng. BA nên đối chiếu trước hết với điều gì để ra quyết định phạm vi (Chương 5, Slide 7)?',
    options: [
      { id: 'a', text: 'Mục tiêu nghiệp vụ (Business Objectives) và ranh giới trong Vision and Scope Document.' },
      { id: 'b', text: 'Màu sắc giao diện của màn hình đăng nhập.' },
      { id: 'c', text: 'Tên biến trong mã nguồn backend.' },
      { id: 'd', text: 'Loại trình duyệt khách hàng đang cài.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 7 Chương 5 ("Keeping the scope in focus") nhấn mạnh phải dùng Business Objectives để ra quyết định phạm vi và đánh giá tác động của thay đổi phạm vi.',
  },

  // Chương 6 (3 câu)
  {
    id: 'swr-q-018',
    subjectId: 'swr',
    chapterId: 'swr-ch6',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Khi mới lập danh sách User Classes cho dự án, công cụ/mô hình nào từ Chương 5 có thể dùng trực tiếp để nhận diện các ứng viên User Class (Chương 6, Slide 6)?',
    options: [
      { id: 'a', text: 'Các External Entities nằm bên ngoài hệ thống trên Context Diagram' },
      { id: 'b', text: 'State-Transition Table' },
      { id: 'c', text: 'CRUD Matrix của bảng log hệ thống' },
      { id: 'd', text: 'Planguage Metric' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo Slide 6 Chương 6: Các External Entities bên ngoài hệ thống trên Context Diagram chính là nguồn ứng viên tuyệt vời cho User Classes (cùng với Collaboration Pattern và Org Chart).',
  },
  {
    id: 'swr-q-019',
    subjectId: 'swr',
    chapterId: 'swr-ch6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Khái niệm "User Persona" trong Chương 6 (Slide 7) được định nghĩa là gì?',
    options: [
      { id: 'a', text: 'Bản mô tả một nhân vật giả định đại diện cho một nhóm người dùng có đặc điểm và nhu cầu tương đồng.' },
      { id: 'b', text: 'Danh sách tài khoản quản trị hệ thống thực tế trên server.' },
      { id: 'c', text: 'Hợp đồng pháp lý giữa công ty phần mềm và đối tác.' },
      { id: 'd', text: 'Sơ đồ kiến trúc cơ sở dữ liệu quan hệ.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 7 Chương 6 định nghĩa: Persona là mô tả một người giả định đại diện cho cộng đồng người dùng có đặc điểm/nhu cầu giống nhau để thiết kế trải nghiệm phù hợp.',
  },
  {
    id: 'swr-q-020',
    subjectId: 'swr',
    chapterId: 'swr-ch6',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'understand',
    type: 'multiple',
    prompt:
      'Chọn 2 tiêu chí hợp lệ để phân loại các nhóm người dùng (User Classes) theo Chương 6 (Slide 5):',
    options: [
      { id: 'a', text: 'Mức độ quyền truy cập / bảo mật (như guest, user thường, admin) và tần suất sử dụng.' },
      { id: 'b', text: 'Tác vụ thực hiện, nền tảng thiết bị (PC, smartphone...) và tương tác trực tiếp hay gián tiếp.' },
      { id: 'c', text: 'Chiều cao và nhóm máu của người dùng.' },
      { id: 'd', text: 'Hãng sản xuất màn hình máy tính của nhân viên.' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Slide 5 Chương 6 liệt kê 8 tiêu chí: quyền truy cập/bảo mật, tác vụ nghiệp vụ, tính năng sử dụng, tần suất dùng, kinh nghiệm chuyên môn/máy tính, nền tảng sử dụng, ngôn ngữ mẹ đẻ và tương tác trực tiếp/gián tiếp.',
  },

  // Chương 7 (4 câu)
  {
    id: 'swr-q-021',
    subjectId: 'swr',
    chapterId: 'swr-ch7',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Nhân viên kho thường thực hiện nhiều thao tác quen tay mà họ không nhớ để kể lại khi phỏng vấn. Kỹ thuật khai thác nào hiệu quả nhất để phát hiện các bước ẩn này?',
    options: [
      { id: 'a', text: 'Gửi bảng khảo sát trực tuyến (Questionnaire)' },
      { id: 'b', text: 'Quan sát trực tiếp tại nơi làm việc (Observation)' },
      { id: 'c', text: 'Đọc lại hợp đồng mua phần mềm cũ' },
      { id: 'd', text: 'Tổ chức họp trực tuyến với ban giám đốc' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Theo Slide 8 Chương 7, Observation ("như cách buộc dây giày") giúp hiểu thao tác thực tế dễ hơn nhiều so với lời kể hoặc văn bản.',
  },
  {
    id: 'swr-q-022',
    subjectId: 'swr',
    chapterId: 'swr-ch7',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Trong kỹ thuật Observation (Chương 7, Slide 8), hình thức nào mà người thực hiện tác vụ vừa làm vừa giải thích thành tiếng những gì họ đang làm?',
    options: [
      { id: 'a', text: 'Passive observation' },
      { id: 'b', text: 'Protocol analysis' },
      { id: 'c', text: 'Ethnographic studies' },
      { id: 'd', text: 'Straw man modeling' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Theo Slide 8 Chương 7: Protocol analysis là hình thức người thực hiện công việc đồng thời giải thích nó (concurrently explain it) trong khi BA quan sát.',
  },
  {
    id: 'swr-q-023',
    subjectId: 'swr',
    chapterId: 'swr-ch7',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Trong một Requirements Workshop, xuất hiện chủ đề ngoài phạm vi nhưng có thể cần xem xét sau. Người điều phối nên xử lý thế nào theo Chương 7 (Slide 6)?',
    options: [
      { id: 'a', text: 'Ghi chú vào "Parking lot" để xem xét sau nhằm giữ buổi họp đúng phạm vi và timebox.' },
      { id: 'b', text: 'Dừng ngay toàn bộ buổi workshop và giải tán.' },
      { id: 'c', text: 'Dành 2 tiếng tiếp theo tranh luận về chủ đề ngoài phạm vi đó.' },
      { id: 'd', text: 'Xóa bỏ hoàn toàn ý kiến đó mà không ghi nhận.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 6 Chương 7 khuyên dùng "parking lots" để lưu lại các mục cần xem xét sau, giữ cuộc thảo luận đi đúng scope và timebox.',
  },
  {
    id: 'swr-q-024',
    subjectId: 'swr',
    chapterId: 'swr-ch7',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'understand',
    type: 'multiple',
    prompt:
      'Chọn 2 dấu hiệu cho thấy quá trình khai thác yêu cầu (Elicitation) có thể đã sắp hoàn thành theo Chương 7 (Slides 22–23):',
    options: [
      { id: 'a', text: 'Người dùng lặp lại các vấn đề đã thảo luận trước đó và không nghĩ thêm được Use Case mới.' },
      { id: 'b', text: 'Các đề xuất mới đều nằm ngoài phạm vi hoặc có độ ưu tiên thấp ("sometime in the lifetime").' },
      { id: 'c', text: 'Lập trình viên liên tục phát sinh hàng loạt câu hỏi lớn về nghiệp vụ cốt lõi.' },
      { id: 'd', text: 'Chưa từng phỏng vấn bất kỳ nhóm người dùng chính nào.' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Slides 22–23 Chương 7 nêu rõ: khi user không nghĩ ra use case mới, lặp lại vấn đề cũ, các đề xuất mới đều out-of-scope/low-priority và dev/tester đặt rất ít câu hỏi thì có thể đã gần hoàn tất elicitation.',
  },

  // Chương 8 + Lessons 03 & 04 (4 câu)
  {
    id: 'swr-q-025',
    subjectId: 'swr',
    chapterId: 'swr-ch8',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Tên của một Use Case chuẩn luôn được đặt theo quy tắc ngữ pháp nào (Chương 8, Slide 4 & Lesson 03)?',
    options: [
      { id: 'a', text: 'Một danh từ ghép dài mô tả bảng dữ liệu' },
      { id: 'b', text: 'Động từ theo sau bởi Tân ngữ/Danh từ (Verb + Object), ví dụ "Withdraw Money"' },
      { id: 'c', text: 'Tính từ + Trạng từ mô tả hiệu năng' },
      { id: 'd', text: 'Tên riêng của lập trình viên phụ trách' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Slide 4 Chương 8 & Lesson 03 quy định: tên Use Case viết dưới dạng động từ + tân ngữ (verb followed by object) thể hiện mục tiêu mang lại giá trị cho actor.',
  },
  {
    id: 'swr-q-026',
    subjectId: 'swr',
    chapterId: 'swr-ch8',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'multiple',
    prompt:
      'Trong Use Case Anatomy (Chương 8, Slide 7), chọn 2 thành phần BẮT BUỘC (Mandatory elements) phải có cho một Use Case:',
    options: [
      { id: 'a', text: 'Name (Tên duy nhất, rõ nghĩa) & Brief description (Mô tả ngắn)' },
      { id: 'b', text: 'Actors & Flow of events (Basic flow và Alternate flows)' },
      { id: 'c', text: 'Pre-conditions (luôn bắt buộc trong mọi trường hợp)' },
      { id: 'd', text: 'Sơ đồ cấu trúc phần cứng máy chủ' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Slide 7 Chương 8 phân tách rõ: Mandatory elements gồm Name, Brief description, Actors, Flow of events; còn Pre-conditions, Post-conditions, Special requirements xếp vào Optional elements.',
  },
  {
    id: 'swr-q-027',
    subjectId: 'swr',
    chapterId: 'swr-ch8',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      '4 loại quan hệ chính xuất hiện trong Use Case Diagram (Lesson 03, Page 8) gồm những quan hệ nào?',
    options: [
      { id: 'a', text: 'Association, Generalization, Include, Extend' },
      { id: 'b', text: 'Aggregation, Composition, Inheritance, Dependency' },
      { id: 'c', text: 'Create, Read, Update, Delete' },
      { id: 'd', text: 'Trigger, State, Transition, Swimlane' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 03 Page 8 nêu 4 mối quan hệ chính trong Use Case Diagram: Association, Generalization, Include và Extend.',
  },
  {
    id: 'swr-q-028',
    subjectId: 'swr',
    chapterId: 'swr-ch8',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Lesson 04 (Use Case Specification, Page 9), phát biểu nào đúng về mối quan hệ giữa Use Case và lập trình viên?',
    options: [
      { id: 'a', text: 'Lập trình viên trực tiếp cài đặt Business Requirements và không cần Functional Requirements.' },
      { id: 'b', text: 'Lập trình viên không trực tiếp implement Business/User requirements mà implement các Functional Requirements được suy dẫn từ Use Case.' },
      { id: 'c', text: 'Mỗi Use Case chỉ tương ứng duy nhất một dòng code.' },
      { id: 'd', text: 'Actor trong Use Case luôn phải là con người, không thể là thiết bị hay hệ thống khác.' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Lesson 04 Page 9 nhấn mạnh: "Software developers don’t implement business requirements or user requirements. They implement functional requirements, specific bits of system behavior."',
  },

  // Chương 9 (3 câu)
  {
    id: 'swr-q-029',
    subjectId: 'swr',
    chapterId: 'swr-ch9',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Một công ty quy định: "Khách hàng hạng Vàng được miễn phí vận chuyển cho đơn hàng từ 500.000đ trở lên." Quy định này thuộc loại nào?',
    options: [
      { id: 'a', text: 'Business Rule (Quy tắc nghiệp vụ)' },
      { id: 'b', text: 'Design Constraint' },
      { id: 'c', text: 'Internal Quality Attribute' },
      { id: 'd', text: 'Hardware Interface' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo Chương 9, đây là chính sách kinh doanh của tổ chức (Business Rule), làm căn cứ để suy dẫn Functional Requirement thực thi nó trong phần mềm.',
  },
  {
    id: 'swr-q-030',
    subjectId: 'swr',
    chapterId: 'swr-ch9',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Để tránh trùng lặp khi liên kết Business Rules với Functional Requirements trong SRS (Chương 9, Slide 10), cách làm được khuyến nghị là gì?',
    options: [
      { id: 'a', text: 'Sao chép toàn bộ văn bản Business Rules vào từng dòng Functional Requirement trong SRS.' },
      { id: 'b', text: 'Lưu tập trung tại Business Rules Catalog rồi tham chiếu bằng thuộc tính "Origin" hoặc Traceability Matrix.' },
      { id: 'c', text: 'Không lưu Business Rules ở bất kỳ tài liệu nào.' },
      { id: 'd', text: 'Đưa toàn bộ Business Rules vào mục chú thích ở cuối màn hình đăng nhập.' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Slide 10 Chương 9 khuyên: không copy trùng lặp rule vào SRS; hãy tham chiếu ngược lại rule gốc qua thuộc tính "Origin" hoặc Requirements Traceability/Mapping Matrix.',
  },
  {
    id: 'swr-q-031',
    subjectId: 'swr',
    chapterId: 'swr-ch9',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'understand',
    type: 'multiple',
    prompt:
      'Chọn 2 nguồn hữu ích để BA khám phá các Business Rules của tổ chức theo Chương 9 (Slide 7):',
    options: [
      { id: 'a', text: 'Hệ thống cũ (reverse-engineering logic trong code) và bộ phận tuân thủ pháp chế (Compliance).' },
      { id: 'b', text: 'Phân tích tài liệu chính sách, hợp đồng, luật định và mô hình hóa quy trình nghiệp vụ.' },
      { id: 'c', text: 'Màu sắc đồng phục nhân viên văn phòng.' },
      { id: 'd', text: 'Thông số tản nhiệt CPU của máy trạm.' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Slide 7 Chương 9 liệt kê 6 nguồn: common knowledge, legacy systems, business process modeling, tài liệu/quy định/hợp đồng, phân tích trạng thái dữ liệu và compliance departments.',
  },

  // Chương 10 (3 câu)
  {
    id: 'swr-q-032',
    subjectId: 'swr',
    chapterId: 'swr-ch10',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'remember',
    type: 'multiple',
    prompt:
      'Chọn 2 đối tượng độc giả (Audiences) sử dụng tài liệu SRS theo Chương 10 (Slide 5):',
    options: [
      { id: 'a', text: 'Customers, Project Managers, Development Teams và Testers.' },
      { id: 'b', text: 'Maintenance/Support, Documentation Writers, Training, Legal Staff và Subcontractors.' },
      { id: 'c', text: 'Chỉ duy nhất Trưởng nhóm lập trình được phép đọc SRS.' },
      { id: 'd', text: 'Nhà cung cấp điện lưới thành phố.' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Slide 5 Chương 10 liệt kê đầy đủ 9 nhóm độc giả của SRS: Customers, Project managers, Software dev teams, Testers, Maintenance/support, Documentation writers, Training personnel, Legal staff và Subcontractors.',
  },
  {
    id: 'swr-q-033',
    subjectId: 'swr',
    chapterId: 'swr-ch10',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Ba cách biểu diễn yêu cầu phần mềm được nêu trong Chương 10 (Slide 4) là gì?',
    options: [
      { id: 'a', text: 'Ngôn ngữ tự nhiên có cấu trúc, Mô hình trực quan (Visual models) và Đặc tả hình thức (Formal specifications)' },
      { id: 'b', text: 'Video quay màn hình, Email cá nhân và Tin nhắn SMS' },
      { id: 'c', text: 'Mã máy nhị phân, Assembly và Script triển khai' },
      { id: 'd', text: 'Chỉ duy nhất đoạn văn xuôi tự do không cần cấu trúc' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 4 Chương 10 nêu 3 hình thức biểu diễn: Well-structured natural language, Visual models và Formal specifications.',
  },
  {
    id: 'swr-q-034',
    subjectId: 'swr',
    chapterId: 'swr-ch10',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Trong dự án Agile (Chương 10, Slide 8), yếu tố nào quyết định việc nhóm có cần lưu giữ tài liệu đặc tả yêu cầu đầy đủ hơn thay vì chỉ trao đổi miệng?',
    options: [
      { id: 'a', text: 'Nhu cầu bảo trì lâu dài, kiểm toán/chứng nhận sản phẩm, hợp đồng pháp lý hoặc nhóm làm việc phân tán thời gian/không gian.' },
      { id: 'b', text: 'Số lượng ghế ngồi trong phòng họp.' },
      { id: 'c', text: 'Tên viết tắt của ngôn ngữ lập trình.' },
      { id: 'd', text: 'Sở thích cá nhân của thực tập sinh.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 8 Chương 10 chỉ rõ: tài liệu hóa trong Agile phụ thuộc mức độ giữ đồng bộ xuyên thời gian/không gian và nhu cầu giữ tri thức cho bảo trì, reengineering, audit, chứng nhận hoặc hợp đồng.',
  },

  // Chương 11 (3 câu)
  {
    id: 'swr-q-035',
    subjectId: 'swr',
    chapterId: 'swr-ch11',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'remember',
    type: 'multiple',
    prompt:
      'Theo Chương 11 (Slide 4), 2 nhóm đặc tính nào lần lượt thuộc về "Tập hợp yêu cầu (Requirements Collections)"?',
    options: [
      { id: 'a', text: 'Complete và Consistent' },
      { id: 'b', text: 'Modifiable và Traceable' },
      { id: 'c', text: 'Colorful và Animated' },
      { id: 'd', text: 'Encrypted và Compressed' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Slide 4 Chương 11 quy định 4 đặc tính của tập hợp yêu cầu (Collections): Complete, Consistent, Modifiable, Traceable.',
  },
  {
    id: 'swr-q-036',
    subjectId: 'swr',
    chapterId: 'swr-ch11',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Câu yêu cầu sau đây vi phạm lỗi gì khi viết SRS theo Chương 11 (Slide 6): "The system shall process user requests quickly and reliably."?',
    options: [
      { id: 'a', text: 'Dùng từ ngữ mơ hồ (Fuzzy words: "quickly", "reliably") khiến yêu cầu không thể kiểm chứng (Unverifiable).' },
      { id: 'b', text: 'Dùng sai thì quá khứ đơn.' },
      { id: 'c', text: 'Quá ngắn vì thiếu tên lập trình viên.' },
      { id: 'd', text: 'Thiếu số phiên bản hệ điều hành.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo Slide 6 Chương 11, các từ mơ hồ như "quickly", "user-friendly", "reliably" không đo đếm được, làm mất tính Unambiguous và Verifiable.',
  },
  {
    id: 'swr-q-037',
    subjectId: 'swr',
    chapterId: 'swr-ch11',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Từ khóa tiếng Anh tiêu chuẩn nào được khuyến nghị dùng trong câu đặc tả yêu cầu bắt buộc (Chương 11, Slide 5)?',
    options: [
      { id: 'a', text: 'shall' },
      { id: 'b', text: 'might' },
      { id: 'c', text: 'hopefully' },
      { id: 'd', text: 'maybe' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 5 Chương 11 nhấn mạnh chuẩn sử dụng từ khóa "shall" và câu chủ động (active voice) cho các yêu cầu hệ thống.',
  },

  // Chương 12 + Lessons 01, 05-06 (4 câu)
  {
    id: 'swr-q-038',
    subjectId: 'swr',
    chapterId: 'swr-ch12',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Sơ đồ nào chia quy trình thành các làn (lanes) đại diện cho các vai trò, phòng ban hoặc hệ thống thực thi từng bước công việc (Chương 12 & Lesson 01)?',
    options: [
      { id: 'a', text: 'Swimlane Diagram (Cross-functional diagram)' },
      { id: 'b', text: 'Entity-Relationship Diagram' },
      { id: 'c', text: 'State-Transition Table' },
      { id: 'd', text: 'Feature Tree' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo Slide 12 Chương 12 & Lesson 01: Swimlane Diagram chia biểu đồ luồng thành các làn (lanes) thể hiện vai trò/phòng ban/hệ thống thực hiện bước xử lý tương ứng.',
  },
  {
    id: 'swr-q-039',
    subjectId: 'swr',
    chapterId: 'swr-ch12',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Trong State-Transition Diagram (Chương 12, Slide 14), 3 thành phần cơ bản gồm những gì?',
    options: [
      { id: 'a', text: 'Hình chữ nhật (Possible states), Mũi tên (Transitions) và Nhãn chữ trên mũi tên (Events/Conditions)' },
      { id: 'b', text: 'Hình tròn (Actors), Hình thoi (Relationships) và Kho dữ liệu (Data stores)' },
      { id: 'c', text: 'Các cột Swimlane, Bảng CRUD và Cây tính năng' },
      { id: 'd', text: 'Số dòng code, Biểu đồ Gantt và Story points' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 14 Chương 12 nêu chính xác 3 thành phần của State-Transition Diagram: Possible system states (rectangles), Allowed transitions (arrows) và Events/conditions gây chuyển trạng thái (text labels trên mũi tên).',
  },
  {
    id: 'swr-q-040',
    subjectId: 'swr',
    chapterId: 'swr-ch12',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Khi muốn có cái nhìn tổng quan về cách DỮ LIỆU di chuyển qua các thao tác xử lý và kho lưu trữ (Data repository), cũng như phát hiện thiếu sót dữ liệu, BA nên dùng sơ đồ nào (Chương 12 & Lesson 05-06)?',
    options: [
      { id: 'a', text: 'Data Flow Diagram (DFD)' },
      { id: 'b', text: 'Swimlane Diagram' },
      { id: 'c', text: 'Dialog Map' },
      { id: 'd', text: 'Org Chart' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 10 Chương 12 & Lesson 05-06 chỉ ra: DFD cho cái nhìn lớn về luồng di chuyển dữ liệu và giúp phát hiện các yêu cầu dữ liệu bị thiếu.',
  },
  {
    id: 'swr-q-041',
    subjectId: 'swr',
    chapterId: 'swr-ch12',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Nguyên tắc chính khi tạo mô hình phân tích (Modeling) trên dự án Agile theo Chương 12 (Slide 19) là gì?',
    options: [
      { id: 'a', text: 'Chỉ tạo những mô hình thực sự cần, đúng thời điểm cần và ở mức chi tiết đủ để các bên hiểu yêu cầu.' },
      { id: 'b', text: 'Luôn vẽ đầy đủ mọi loại sơ đồ UML ở mức chi tiết code trước khi họp Sprint 1.' },
      { id: 'c', text: 'Tuyệt đối cấm sử dụng bất kỳ hình vẽ nào trong dự án Agile.' },
      { id: 'd', text: 'Chỉ vẽ mô hình sau khi đã bàn giao sản phẩm cho khách hàng.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 19 Chương 12 nhấn mạnh: "create only the models you need, only when you need them, and only to the level of detail you need".',
  },

  // Chương 13 + Knowledge PDF (3 câu)
  {
    id: 'swr-q-042',
    subjectId: 'swr',
    chapterId: 'swr-ch13',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Kỹ thuật phân tích dữ liệu nào dùng ma trận đối chiếu Entity với các thao tác Create, Read, Update, Delete để phát hiện các yêu cầu chức năng bị thiếu (Chương 13, Slide 6)?',
    options: [
      { id: 'a', text: 'CRUD Matrix' },
      { id: 'b', text: 'MoSCoW Matrix' },
      { id: 'c', text: 'Planguage Table' },
      { id: 'd', text: 'RACI Matrix' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 6 Chương 13 & Knowledge PDF Page 10 định nghĩa: CRUD matrix (Create, Read, Update, Delete) là kỹ thuật phân tích chặt chẽ giúp phát hiện các yêu cầu bị thiếu.',
  },
  {
    id: 'swr-q-043',
    subjectId: 'swr',
    chapterId: 'swr-ch13',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Trong ERD (Knowledge PDF Chương 13, Pages 6–8), tên các Thực thể (Entities) được đặt theo quy tắc nào và điều gì quan trọng nhất khi chọn ký pháp (Chen vs Crow’s Foot)?',
    options: [
      { id: 'a', text: 'Entities đặt bằng danh từ số ít (singular nouns); cả nhóm phải thống nhất dùng chung một ký pháp và hiểu cách đọc.' },
      { id: 'b', text: 'Entities đặt bằng động từ số nhiều; mỗi thành viên tự chọn ký pháp riêng.' },
      { id: 'c', text: 'Bắt buộc chỉ được dùng ký pháp Chen ở mọi dự án.' },
      { id: 'd', text: 'Entities phải được vẽ bằng hình tròn thay vì hình chữ nhật.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo Knowledge PDF Chương 13: Entities dùng singular nouns trong hình chữ nhật, relationships dùng hình thoi; việc chọn Chen hay Crow’s Foot không quan trọng bằng việc mọi người trong dự án dùng cùng quy ước và hiểu cách đọc nó.',
  },
  {
    id: 'swr-q-044',
    subjectId: 'swr',
    chapterId: 'swr-ch13',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Điểm đặc trưng của Dashboard Reporting theo Chương 13 (Slide 9) là gì?',
    options: [
      { id: 'a', text: 'Cung cấp góc nhìn tổng hợp đa chiều về các KPIs (doanh số, chi phí...) bằng nhiều biểu đồ/bảng để nắm bắt chỉ trong nháy mắt.' },
      { id: 'b', text: 'Chỉ chứa các tệp nhật ký lỗi thô dạng văn bản thuần túy.' },
      { id: 'c', text: 'Thay thế hoàn toàn bước sao lưu cơ sở dữ liệu.' },
      { id: 'd', text: 'Chỉ dành cho lập trình viên xem truy vấn SQL.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 9 Chương 13 định nghĩa Dashboard là màn hình/báo cáo dùng nhiều dạng biểu diễn chữ và đồ họa giúp tổng hợp các KPIs đa chiều để người xem quét nhanh (at a glance).',
  },

  // Chương 14 (4 câu)
  {
    id: 'swr-q-045',
    subjectId: 'swr',
    chapterId: 'swr-ch14',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'understand',
    type: 'multiple',
    prompt:
      'Chọn 2 thuộc tính chất lượng thuộc nhóm INTERNAL Quality Attributes theo Chương 14 (Slide 6):',
    options: [
      { id: 'a', text: 'Modifiability (Khả năng sửa đổi) và Portability (Khả năng chuyển đổi nền tảng)' },
      { id: 'b', text: 'Scalability (Khả năng mở rộng) và Verifiability (Khả năng kiểm chứng)' },
      { id: 'c', text: 'Usability (Tính dễ dùng) và Availability (Độ sẵn sàng)' },
      { id: 'd', text: 'Safety (Tính an toàn) và Security (Bảo mật)' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Slide 6 Chương 14 phân chia: External gồm Availability, Installability, Integrity, Interoperability, Performance, Reliability, Robustness, Safety, Security, Usability; Internal gồm Efficiency, Modifiability, Portability, Reusability, Scalability, Verifiability.',
  },
  {
    id: 'swr-q-046',
    subjectId: 'swr',
    chapterId: 'swr-ch14',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Công cụ ngôn ngữ nào sử dụng các từ khóa như TAG, AMBITION, SCALE, METER, GOAL, STRETCH để đặc tả định lượng chính xác các Quality Requirements (Chương 14, Slides 7–8)?',
    options: [
      { id: 'a', text: 'Planguage' },
      { id: 'b', text: 'UML Activity' },
      { id: 'c', text: 'SQL DDL' },
      { id: 'd', text: 'Gherkin' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slides 7–8 Chương 14 giới thiệu Planguage với các từ khóa TAG, AMBITION, SCALE, METER, GOAL, STRETCH, WISH, DEFINED nhằm khắc phục yêu cầu phi chức năng mơ hồ.',
  },
  {
    id: 'swr-q-047',
    subjectId: 'swr',
    chapterId: 'swr-ch14',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Khách hàng yêu cầu: "Thanh toán trực tuyến chỉ được phép thực hiện qua cổng PayPal" và "Ứng dụng phải dùng .NET Framework 4.5". Những yêu cầu này thuộc loại nào (Chương 14, Slide 11)?',
    options: [
      { id: 'a', text: 'Constraints (Ràng buộc thiết kế & kiến trúc)' },
      { id: 'b', text: 'Use Case Extensions' },
      { id: 'c', text: 'Business Objectives' },
      { id: 'd', text: 'User Personas' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 11 Chương 14 phân loại rõ đây là Design constraint (chỉ qua PayPal) và Architecture constraint (dùng .NET Framework 4.5).',
  },
  {
    id: 'swr-q-048',
    subjectId: 'swr',
    chapterId: 'swr-ch14',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Tại sao các dự án Agile không nên trì hoãn việc đặc tả Quality Attributes & Constraints sang các iteration cuối (Chương 14, Slide 12)?',
    options: [
      { id: 'a', text: 'Vì rất khó và tốn kém nếu phải vá chất lượng nền tảng vào cuối kỳ; kiến trúc cần biết các NFR này từ sớm.' },
      { id: 'b', text: 'Vì ngôn ngữ lập trình không biên dịch được nếu thiếu NFR ở Sprint 1.' },
      { id: 'c', text: 'Vì Agile bắt buộc phải viết xong 100% mã nguồn ở Sprint 1.' },
      { id: 'd', text: 'Vì Tester không làm việc ở các iteration cuối.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 12 Chương 14 nêu rõ: "It can be difficult and expensive to retrofit desired quality characteristics into a product late in development", nên cần đặt ưu tiên NFR song song với User Stories từ sớm.',
  },

  // Chương 15 (3 câu)
  {
    id: 'swr-q-049',
    subjectId: 'swr',
    chapterId: 'swr-ch15',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Sự khác biệt chính giữa Horizontal Prototype (Mock-up) và Vertical Prototype (Proof of Concept) theo Chương 15 (Slide 5) là gì?',
    options: [
      { id: 'a', text: 'Horizontal mô phỏng bề mặt giao diện/điều hướng; Vertical cài đặt một lát cắt chức năng xuyên suốt từ UI qua mọi tầng kỹ thuật.' },
      { id: 'b', text: 'Horizontal chỉ dùng cho phần mềm nhúng; Vertical chỉ vẽ trên giấy.' },
      { id: 'c', text: 'Horizontal luôn giữ lại làm sản phẩm thật; Vertical luôn bị xóa bỏ.' },
      { id: 'd', text: 'Hai khái niệm này hoàn toàn giống nhau.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 5 Chương 15 định nghĩa: Mock-up = Horizontal prototype (look, feel, navigation); Proof of concept = Vertical prototype (một lát cắt xuyên qua toàn bộ tầng dịch vụ kỹ thuật).',
  },
  {
    id: 'swr-q-050',
    subjectId: 'swr',
    chapterId: 'swr-ch15',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'multiple',
    prompt:
      'Chọn 2 rủi ro phổ biến cần đề phòng khi áp dụng Prototyping theo Chương 15 (Slide 13):',
    options: [
      { id: 'a', text: 'Áp lực từ phía quản lý/khách hàng đòi phát hành luôn bản prototype thành sản phẩm thật.' },
      { id: 'b', text: 'Bị phân tâm bởi chi tiết giao diện (màu sắc, font) hoặc tạo kỳ vọng phi thực tế về hiệu năng.' },
      { id: 'c', text: 'Khách hàng hiểu quá rõ yêu cầu nên không cần họp thêm.' },
      { id: 'd', text: 'Giảm được quá nhiều hiểu lầm về luồng thao tác.' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Slide 13 Chương 15 liệt kê 4 rủi ro của Prototyping: Pressure to release prototype, Distraction by details, Unrealistic performance expectations và Investing excessive effort in prototypes.',
  },
  {
    id: 'swr-q-051',
    subjectId: 'swr',
    chapterId: 'swr-ch15',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Với một Throwaway Prototype (bản mẫu dùng rồi bỏ, Chương 15 Slide 14), lời khuyên nào đúng?',
    options: [
      { id: 'a', text: 'Làm nhanh và rẻ nhất có thể; không nên đầu tư defensive coding, xử lý lỗi chi tiết hay tài liệu hóa phức tạp.' },
      { id: 'b', text: 'Phải viết đầy đủ unit test, logging và tối ưu hiệu năng sản xuất trước khi cho khách xem.' },
      { id: 'c', text: 'Chỉ dựng bản mẫu cho những yêu cầu mà cả nhóm đã hiểu 100%.' },
      { id: 'd', text: 'Dùng bản mẫu để thay thế hoàn toàn tài liệu SRS bằng văn bản.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 14 Chương 15 khuyên: tạo throwaway prototype nhanh và rẻ nhất có thể, bỏ qua defensive coding/error-handling, không prototype thứ đã rõ, và không thay thế written requirements.',
  },

  // Chương 16 (3 câu)
  {
    id: 'swr-q-052',
    subjectId: 'swr',
    chapterId: 'swr-ch16',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Trong kỹ thuật xếp hạng ưu tiên MoSCoW (Chương 16, Slide 7), bốn chữ viết tắt đại diện cho điều gì?',
    options: [
      { id: 'a', text: 'Must have, Should have, Could have, Won’t have' },
      { id: 'b', text: 'Manage, Observe, Specify, Control, Watch' },
      { id: 'c', text: 'Model, System, Context, Workflow' },
      { id: 'd', text: 'Maximum, Optimal, Standard, Critical' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'MoSCoW phân loại yêu cầu theo 4 mức: Must have (bắt buộc), Should have (nên có), Could have (có thì tốt), Won’t have (chưa làm đợt này).',
  },
  {
    id: 'swr-q-053',
    subjectId: 'swr',
    chapterId: 'swr-ch16',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Mô hình bảng tính xếp hạng độ ưu tiên của Karl Wiegers trong Chương 16 (Slide 8) tính toán dựa trên các yếu tố cốt lõi nào?',
    options: [
      { id: 'a', text: 'Value (Giá trị mang lại / Tổn thất nếu thiếu), Cost (Chi phí thực hiện) và Risk (Rủi ro kỹ thuật)' },
      { id: 'b', text: 'Số lượng trang SRS và kích thước phông chữ' },
      { id: 'c', text: 'Tuổi đời công ty khách hàng và số phòng ban' },
      { id: 'd', text: 'Thứ tự bảng chữ cái của tên chức năng' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 8 Chương 16 trình bày mô hình phân tích độ ưu tiên dựa trên Value, Cost và Risk (Prioritization based on value, cost, and risk).',
  },
  {
    id: 'swr-q-054',
    subjectId: 'swr',
    chapterId: 'swr-ch16',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Khi sử dụng kỹ thuật $100 Allocation (Chương 16, Slide 7), các bên liên quan thực hiện việc xếp ưu tiên bằng cách nào?',
    options: [
      { id: 'a', text: 'Mỗi người dùng $100 giả định để phân bổ vào các tính năng tương ứng với mức độ quan trọng họ mong muốn.' },
      { id: 'b', text: 'Khách hàng phải đóng $100 tiền mặt cho mỗi yêu cầu mới.' },
      { id: 'c', text: 'Loại bỏ toàn bộ yêu cầu có chi phí phát triển trên $100.' },
      { id: 'd', text: 'Chia đều $100 bằng nhau cho tất cả các yêu cầu bất kể quan trọng hay không.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Kỹ thuật $100 giúp stakeholder bộc lộ mức độ ưu tiên thật sự thông qua ngân sách giới hạn $100 giả định để đặt cược vào các tính năng giá trị nhất.',
  },

  // Chương 17 (3 câu)
  {
    id: 'swr-q-055',
    subjectId: 'swr',
    chapterId: 'swr-ch17',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Phát biểu nào phân biệt đúng giữa Verification và Validation (Chương 17, Slide 5)?',
    options: [
      { id: 'a', text: 'Verification = "doing the thing right" (đúng đặc tả); Validation = "doing the right thing" (đúng nhu cầu khách hàng).' },
      { id: 'b', text: 'Validation = "doing the thing right"; Verification = "doing the right thing".' },
      { id: 'c', text: 'Verification chỉ làm ở cuối dự án, Validation chỉ làm khi viết code.' },
      { id: 'd', text: 'Cả hai đều có nghĩa là kiểm thử hiệu năng máy chủ.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 5 Chương 17 định nghĩa: Verification kiểm tra sản phẩm có khớp đặc tả đầu vào ("doing the thing right"), còn Validation đánh giá sản phẩm có thỏa mãn nhu cầu thực của khách hàng ("doing the right thing").',
  },
  {
    id: 'swr-q-056',
    subjectId: 'swr',
    chapterId: 'swr-ch17',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Trong quy trình Formal Inspection (Kiểm tra chính quy tài liệu yêu cầu, Chương 17 Slide 7), 4 vai trò chuẩn tham gia gồm những ai?',
    options: [
      { id: 'a', text: 'Author, Moderator, Reader, Recorder' },
      { id: 'b', text: 'Sponsor, Scrum Master, DevOps, Designer' },
      { id: 'c', text: 'CEO, Accountant, Lawyer, Sales' },
      { id: 'd', text: 'Admin, Guest, Customer, Vendor' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 7 Chương 17 liệt kê 4 vai trò chuẩn trong Inspection: Author (tác giả), Moderator (người điều phối), Reader (người đọc/trình bày lại) và Recorder (người ghi chép lỗi).',
  },
  {
    id: 'swr-q-057',
    subjectId: 'swr',
    chapterId: 'swr-ch17',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Tại sao Chương 17 (Slide 2) khuyên bắt đầu lập kế hoạch kiểm thử và viết Test Case song song với quá trình phát triển yêu cầu?',
    options: [
      { id: 'a', text: 'Giúp phát hiện sớm nhiều lỗi mơ hồ hoặc mâu thuẫn ngay khi yêu cầu vừa được đưa ra, tiết kiệm lớn thời gian & chi phí.' },
      { id: 'b', text: 'Để bỏ qua hoàn toàn bước Review tài liệu SRS.' },
      { id: 'c', text: 'Vì Tester không cần hiểu nghiệp vụ khi viết Test Case.' },
      { id: 'd', text: 'Để thay thế việc lập trình hệ thống.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 2 Chương 17 nhấn mạnh: bắt đầu test planning và viết test case song song với requirements development giúp phát hiện lỗi ngay sau khi chúng vừa xuất hiện.',
  },

  // Chương 18 (2 câu)
  {
    id: 'swr-q-058',
    subjectId: 'swr',
    chapterId: 'swr-ch18',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'multiple',
    prompt:
      'Theo Chương 18 (Slide 9), chọn 2 yếu tố thuộc nhóm RÀO CẢN (Reuse barriers) và 2 từ viết tắt tâm lý cản trở việc tái sử dụng yêu cầu:',
    options: [
      { id: 'a', text: 'Tâm lý NIH ("Not Invented Here") và NAH ("Not Applicable Here")' },
      { id: 'b', text: 'Yêu cầu gốc thiếu/kém chất lượng, văn phong viết khác nhau và không rõ quyền sở hữu (Ownership)' },
      { id: 'c', text: 'Có kho lưu trữ tập trung (Repository) chuẩn hóa tốt' },
      { id: 'd', text: 'Độ nhất quán thuật ngữ cao giữa các nhóm' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Slide 9 Chương 18 liệt kê các Barriers: Missing/poor requirements, NIH & NAH, Writing style, Inconsistent organization, Project type, Ownership; còn Repository và Terminology là Success factors.',
  },
  {
    id: 'swr-q-061',
    subjectId: 'swr',
    chapterId: 'swr-ch18',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Kịch bản nào sau đây phù hợp nhất để áp dụng Requirements Reuse nhằm đảm bảo đồng nhất chức năng và tiết kiệm thời gian đặc tả (Chương 18, Slides 4 & 7)?',
    options: [
      { id: 'a', text: 'Phát triển họ sản phẩm phần mềm (Software product lines) hoặc xây dựng hệ thống thay thế (Replacement systems).' },
      { id: 'b', text: 'Viết mã hợp ngữ riêng cho một cảm biến độc nhất chưa từng tồn tại.' },
      { id: 'c', text: 'Bỏ qua bước kiểm thử các yêu cầu đã tái sử dụng.' },
      { id: 'd', text: 'Chỉ sao chép giao diện màu sắc mà bỏ qua hành vi hệ thống.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slides 4 & 7 Chương 18 nêu rõ: Software product lines và Reengineered/replacement systems là hai kịch bản phổ biến nhất mang lại hiệu quả cao từ tái sử dụng yêu cầu.',
  },

  // Chương 19 (2 câu)
  {
    id: 'swr-q-059',
    subjectId: 'swr',
    chapterId: 'swr-ch19',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'remember',
    type: 'multiple',
    prompt:
      'Theo Chương 19 (Slide 6), chọn 2 thước đo từ yêu cầu có thể dùng để ước lượng quy mô và công sức (Project size & effort) của dự án:',
    options: [
      { id: 'a', text: 'Số lượng yêu cầu có thể kiểm thử độc lập và Function Points' },
      { id: 'b', text: 'Story Points, Use Case Points và độ phức tạp thành phần giao diện UI' },
      { id: 'c', text: 'Giá thuê mặt bằng văn phòng mỗi tháng' },
      { id: 'd', text: 'Số lượng bàn phím dự phòng trong kho' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Slide 6 Chương 19 liệt kê 5 cơ sở ước lượng: số yêu cầu kiểm thử độc lập, Function points, Story points / Use case points, số lượng/độ phức tạp UI elements và ước lượng LOC.',
  },
  {
    id: 'swr-q-060',
    subjectId: 'swr',
    chapterId: 'swr-ch19',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Để chuyển từ quy mô ước lượng sang lập lịch trình dự án (Scheduling, Chương 19 Slide 6), Project Manager KHÔNG cần thông tin nào sau đây?',
    options: [
      { id: 'a', text: 'Năng suất lịch sử của đội phát triển và danh sách tác vụ hoàn thành tính năng' },
      { id: 'b', text: 'Bộ yêu cầu tương đối ổn định cho iteration sắp tới và kinh nghiệm điều chỉnh của PM' },
      { id: 'c', text: 'Màu sơn tường của phòng làm việc khách hàng' },
      { id: 'd', text: 'Quy mô sản phẩm ước lượng (Estimated product size)' },
    ],
    correctOptionIds: ['c'],
    explanation:
      'Slide 6 Chương 19 nêu 5 yếu tố lập lịch: Estimated product size, Known team productivity, Task list, Reasonably stable requirements cho iteration tới, và PM experience.',
  },
];
