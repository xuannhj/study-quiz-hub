import type { Question } from '../../../types/study';

export const swrPdfQuestions: Question[] = [
  // ===========================================================================
  // LESSON 01 - SWIMLANE DIAGRAM (12 câu: swr-pdf-q-001 .. swr-pdf-q-012)
  // ===========================================================================
  {
    id: 'swr-pdf-q-001',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l1',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo Lesson 01 (Swimlane Diagram, Page 3), vì sao Swimlane Diagram được xem là một trong những mô hình dễ hiểu nhất đối với các bên liên quan (stakeholders)?',
    options: [
      { id: 'a', text: 'Vì nó sử dụng ký hiệu toán học hình thức để chứng minh tính đúng đắn của thuật toán.' },
      { id: 'b', text: 'Vì nó là biến thể của flowchart với ký hiệu đơn giản, quen thuộc và chia rõ các bước theo làn.' },
      { id: 'c', text: 'Vì nó tự động sinh mã nguồn giao diện người dùng từ các làn ngang.' },
      { id: 'd', text: 'Vì nó thay thế hoàn toàn nhu cầu viết tài liệu đặc tả SRS.' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Lesson 01 (Page 3) nêu rõ Swimlane diagram là một biến thể của flowchart được chia thành các lanes, dùng ký hiệu đơn giản và phổ biến nên rất dễ hiểu với stakeholder.',
  },
  {
    id: 'swr-pdf-q-002',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l1',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Trong ký pháp chuẩn của Swimlane Diagram (Lesson 01, Page 4), hình thoi (diamond) và nhãn văn bản trên các mũi tên đi ra từ hình thoi lần lượt biểu diễn thành phần gì?',
    options: [
      { id: 'a', text: 'Hình thoi là kho dữ liệu; nhãn mũi tên là tên thực thể ngoài.' },
      { id: 'b', text: 'Hình thoi là bước xử lý chính; nhãn mũi tên là thời gian thực thi.' },
      { id: 'c', text: 'Hình thoi là điểm quyết định (Decisions); nhãn mũi tên là các lựa chọn rẽ nhánh (decision choices).' },
      { id: 'd', text: 'Hình thoi là ranh giới hệ thống; nhãn mũi tên là luồng sự kiện thời gian.' },
    ],
    correctOptionIds: ['c'],
    explanation:
      'Theo Lesson 01 (Page 4): Rectangles biểu diễn Process steps, Arrows nối bước, Diamonds biểu diễn Decisions và text labels trên các mũi tên rời hình thoi thể hiện các decision choices.',
  },
  {
    id: 'swr-pdf-q-003',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l1',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'multiple',
    prompt:
      'Theo Lesson 01 (Page 4), các làn (Swimlanes) phân chia quy trình thường đại diện cho 2 nhóm đối tượng phổ biến nào để chỉ rõ ai/cái gì đang thực thi bước đó?',
    options: [
      { id: 'a', text: 'Vai trò người dùng (Roles) hoặc phòng ban (Departments)' },
      { id: 'b', text: 'Các hệ thống tham gia xử lý (Systems)' },
      { id: 'c', text: 'Các bảng khóa ngoại trong cơ sở dữ liệu vật lý' },
      { id: 'd', text: 'Các thuộc tính chất lượng phi chức năng như Usability và Security' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Lesson 01 (Page 4) quy định Swimlanes thường đại diện cho roles, departments, hoặc systems để thể hiện rõ ai/hệ thống nào thực thi từng bước trong làn.',
  },
  {
    id: 'swr-pdf-q-004',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l1',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Quan sát Figure 12-2 ("Order a chemical from a vendor" — Lesson 01, Page 5), quy trình đặt mua hóa chất bắt đầu từ bước nào và ở làn nào?',
    imageUrl: '/images/swr-pdf/figure-12-2-swimlane.png',
    imageCaption: 'Figure 12-2: Swimlane diagram — Order a chemical from a vendor (Lesson 01, Page 5)',
    options: [
      { id: 'a', text: 'Làn Buyer: Create a vendor purchase order' },
      { id: 'b', text: 'Làn Chemist: Create a chemical request' },
      { id: 'c', text: 'Làn Vendor: Receive and fulfill chemical order' },
      { id: 'd', text: 'Làn Receiving: Receive shipment at receiving dock' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Trong Figure 12-2 (Lesson 01, Page 5), điểm khởi đầu ở góc trên bên trái thuộc làn Chemist với bước "Create a chemical request", sau đó chuyển sang làn Buyer để "Create a vendor purchase order".',
  },
  {
    id: 'swr-pdf-q-005',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l1',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Trong sơ đồ Swimlane Figure 12-2 (Lesson 01, Page 5), sau khi Vendor xử lý "Receive and fulfill chemical order", luồng kiểm tra tại hình thoi "Order accepted?" trong làn Buyer sẽ đi đâu nếu kết quả là "No"?',
    imageUrl: '/images/swr-pdf/figure-12-2-swimlane.png',
    imageCaption: 'Figure 12-2: Swimlane diagram — Order a chemical from a vendor (Lesson 01, Page 5)',
    options: [
      { id: 'a', text: 'Quay lại bước "Create a vendor purchase order" ở làn Buyer.' },
      { id: 'b', text: 'Quay lại bước "Create a chemical request" ở làn Chemist.' },
      { id: 'c', text: 'Chuyển thẳng sang bước "Receive shipment at receiving dock" ở làn Receiving.' },
      { id: 'd', text: 'Đi tới bước "Update order status" ở làn Buyer.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo Figure 12-2 (Lesson 01, Page 5), từ hình thoi "Order accepted?" nếu chọn nhánh "No", mũi tên đi ngược lên bước "Create a vendor purchase order" trong làn Buyer; chỉ khi "Yes" mới đi xuống "Update order status".',
  },
  {
    id: 'swr-pdf-q-006',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l1',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Trong Figure 12-2 (Lesson 01, Page 5), sau khi Vendor thực hiện "Ship chemical containers", bước nào tiếp nhận kiện hàng trước khi Chemist nhận hóa chất tại phòng thí nghiệm?',
    imageUrl: '/images/swr-pdf/figure-12-2-swimlane.png',
    imageCaption: 'Figure 12-2: Swimlane diagram — Order a chemical from a vendor (Lesson 01, Page 5)',
    options: [
      { id: 'a', text: 'Buyer thực hiện "Review and approve invoice".' },
      { id: 'b', text: 'Receiving thực hiện "Receive shipment at receiving dock".' },
      { id: 'c', text: 'Vendor thực hiện "Create and send invoice" rồi giao thẳng cho Chemist.' },
      { id: 'd', text: 'Buyer thực hiện "Update order status" lần thứ hai.' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Trong Figure 12-2 (Lesson 01, Page 5), mũi tên từ "Ship chemical containers" (làn Vendor) đi sang "Receive shipment at receiving dock" (làn Receiving), rồi mới nối tiếp tới "Receive chemical in laboratory" (làn Chemist).',
  },
  {
    id: 'swr-pdf-q-007',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l1',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo Lesson 01 (Page 4), các bước xử lý (Process steps) và hướng chuyển tiếp giữa các bước (Transitions) trên Swimlane Diagram được vẽ bằng cặp ký hiệu nào?',
    options: [
      { id: 'a', text: 'Process steps là hình chữ nhật (rectangles); Transitions là các mũi tên (arrows) nối từng cặp hình chữ nhật.' },
      { id: 'b', text: 'Process steps là hình tròn; Transitions là đường thẳng hai vạch song song.' },
      { id: 'c', text: 'Process steps là hình oval; Transitions là mũi tên nét đứt <<include>>.' },
      { id: 'd', text: 'Process steps là hình thoi; Transitions là đường không có đầu mũi tên.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 01 (Page 4) định nghĩa: Process steps dùng rectangles; Transitions dùng arrows connecting pairs of rectangles; Decisions dùng diamonds.',
  },
  {
    id: 'swr-pdf-q-008',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l1',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo Lesson 01 (Page 4), các đường kẻ phân chia làn (Swimlanes) trên sơ đồ có thể được bố trí theo hướng nào?',
    options: [
      { id: 'a', text: 'Chỉ được kẻ theo chiều dọc, tuyệt đối cấm kẻ ngang.' },
      { id: 'b', text: 'Chỉ được kẻ theo chiều ngang, tuyệt đối cấm kẻ dọc.' },
      { id: 'c', text: 'Có thể là các đường kẻ ngang hoặc dọc (horizontal or vertical lines) tùy bố cục trang.' },
      { id: 'd', text: 'Phải vẽ dạng đường tròn đồng tâm.' },
    ],
    correctOptionIds: ['c'],
    explanation:
      'Lesson 01 (Page 4) ghi rõ: "Swimlanes to subdivide the process, shown as horizontal or vertical lines on the page."',
  },
  {
    id: 'swr-pdf-q-009',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l1',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Quan sát luồng thanh toán hóa đơn ở nửa dưới Figure 12-2 (Lesson 01, Page 5), trình tự chính xác từ lúc Vendor xuất hóa đơn cho tới khi nhận tiền là gì?',
    imageUrl: '/images/swr-pdf/figure-12-2-swimlane.png',
    imageCaption: 'Figure 12-2: Swimlane diagram — Order a chemical from a vendor (Lesson 01, Page 5)',
    options: [
      { id: 'a', text: 'Vendor: Create and send invoice -> Buyer: Review and approve invoice -> Buyer: Send payment -> Vendor: Receive payment.' },
      { id: 'b', text: 'Chemist: Review and approve invoice -> Receiving: Send payment -> Vendor: Receive payment.' },
      { id: 'c', text: 'Buyer: Create and send invoice -> Chemist: Send payment -> Receiving: Receive payment.' },
      { id: 'd', text: 'Vendor: Create and send invoice -> Vendor: Receive payment (không qua Buyer).' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Trong Figure 12-2 (Lesson 01, Page 5), từ "Ship chemical containers" (Vendor) đi xuống "Create and send invoice" (Vendor), nối sang trái tới "Review and approve invoice" (Buyer) -> xuống "Send payment" (Buyer) -> sang phải tới "Receive payment" (Vendor).',
  },
  {
    id: 'swr-pdf-q-010',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l1',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Lesson 01 (Page 3), Swimlane Diagram đặc biệt phù hợp để biểu diễn hai khía cạnh nào của hệ thống/tổ chức?',
    options: [
      { id: 'a', text: 'Các bước trong một quy trình nghiệp vụ (business process) hoặc các thao tác vận hành của hệ thống phần mềm đề xuất.' },
      { id: 'b', text: 'Cấu trúc bảng vật lý (column data types) và mật khẩu bảo mật.' },
      { id: 'c', text: 'Danh sách câu lệnh SQL và kiến trúc mạng vật lý.' },
      { id: 'd', text: 'Chỉ dùng cho kiểm thử hiệu năng Planguage.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 01 (Page 3) nêu rõ: "Swimlane diagrams provide a way to represent the steps involved in a business process or the operations of a proposed software system."',
  },
  {
    id: 'swr-pdf-q-011',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l1',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Trong Figure 12-2 (Lesson 01, Page 5), bước "Update order status" do ai thực hiện và diễn ra ngay sau điều kiện nào?',
    imageUrl: '/images/swr-pdf/figure-12-2-swimlane.png',
    imageCaption: 'Figure 12-2: Swimlane diagram — Order a chemical from a vendor (Lesson 01, Page 5)',
    options: [
      { id: 'a', text: 'Do Buyer thực hiện, ngay sau khi "Order accepted?" rẽ nhánh "Yes".' },
      { id: 'b', text: 'Do Vendor thực hiện, ngay sau khi giao hàng.' },
      { id: 'c', text: 'Do Chemist thực hiện, trước khi tạo yêu cầu hóa chất.' },
      { id: 'd', text: 'Do Receiving thực hiện, sau khi thanh toán hóa đơn.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Trên làn Buyer trong Figure 12-2 (Page 5), hình thoi "Order accepted?" đi xuống nhánh "Yes" nối trực tiếp vào bước "Update order status".',
  },
  {
    id: 'swr-pdf-q-012',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l1',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Một thành viên vẽ Swimlane Diagram có hình thoi "Hóa đơn hợp lệ?" với 2 mũi tên đi ra nhưng lại quên ghi chữ "Yes" / "No" trên hai mũi tên đó. Lỗi này vi phạm quy ước nào trong Lesson 01 (Page 4)?',
    options: [
      { id: 'a', text: 'Thiếu nhãn lựa chọn quyết định (decision choices) trên từng mũi tên đi ra khỏi hình thoi.' },
      { id: 'b', text: 'Dùng sai hình chữ nhật thay cho hình tròn cho bước xử lý.' },
      { id: 'c', text: 'Không đặt hình thoi vào đúng kho dữ liệu Data Store.' },
      { id: 'd', text: 'Không đánh số thứ tự cho các Actor.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 01 (Page 4) quy định rõ: "Decisions, shown as diamonds. The decision choices are shown as text labels on each arrow leaving a diamond."',
  },

  // ===========================================================================
  // LESSON 02 - CONTEXT DIAGRAM (12 câu: swr-pdf-q-013 .. swr-pdf-q-024)
  // ===========================================================================
  {
    id: 'swr-pdf-q-013',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l2',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo Lesson 02 (Context Diagram, Page 7), Context Diagram nên được vẽ ở thời điểm nào trong quy trình phát triển yêu cầu?',
    options: [
      { id: 'a', text: 'Sau khi hoàn thiện thiết kế cơ sở dữ liệu vật lý ở Chương 13.' },
      { id: 'b', text: 'Sớm ở giai đoạn đầu dự án, trong bước "Define product vision and scope" (Business Requirements).' },
      { id: 'c', text: 'Chỉ vẽ ở giai đoạn kiểm thử chấp nhận UAT trước khi bàn giao.' },
      { id: 'd', text: 'Sau khi đã viết xong toàn bộ Test Case chi tiết cho các Use Case.' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Lesson 02 (Page 7) nêu rõ Context Diagram được thực hiện sớm ở bước "Define product vision and scope" thuộc Business Requirements và có thể đưa vào tài liệu Vision and Scope.',
  },
  {
    id: 'swr-pdf-q-014',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l2',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'multiple',
    prompt:
      'Theo Lesson 02 (Page 6), chọn 2 mục đích chính (Purpose) của việc xây dựng Context Diagram:',
    options: [
      { id: 'a', text: 'Xác định phạm vi hệ thống (Defines Scope) và nhận diện các thực thể ngoài giao tiếp với hệ thống.' },
      { id: 'b', text: 'Thúc đẩy giao tiếp rõ ràng, chính xác giữa các bên liên quan (stakeholders).' },
      { id: 'c', text: 'Mô tả chi tiết cấu trúc bảng dữ liệu và khóa ngoại nội bộ.' },
      { id: 'd', text: 'Thay thế Use Case Specification để lập trình viên code trực tiếp.' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Lesson 02 (Page 6) xác định 3 mục đích của Context Diagram: Defines Scope, thúc đẩy giao tiếp rõ ràng giữa các stakeholders, và xác định External Entities giao tiếp với hệ thống.',
  },
  {
    id: 'swr-pdf-q-015',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l2',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo Lesson 02 (Page 9), các Thực thể ngoài (External Entities) trên Context Diagram có thể thuộc 4 nhóm đối tượng nào?',
    options: [
      { id: 'a', text: 'User classes, organizations, other systems, hoặc hardware devices.' },
      { id: 'b', text: 'Database tables, UI screens, API endpoints, hoặc class methods.' },
      { id: 'c', text: 'Business rules, quality attributes, constraints, hoặc assumptions.' },
      { id: 'd', text: 'Test plans, defect reports, baselines, hoặc release notes.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 02 (Page 9) liệt kê 4 loại External Entities: User classes (như Chemist, Buyer), organizations (Health and Safety Dept.), other systems (Training Database), hoặc hardware devices (Bar Code Reader).',
  },
  {
    id: 'swr-pdf-q-016',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l2',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Trên Context Diagram (Lesson 02, Page 9), các mũi tên có nhãn (Data-flows) đại diện cho điều gì?',
    options: [
      { id: 'a', text: 'Thứ tự gọi hàm nội bộ giữa các class trong hệ thống.' },
      { id: 'b', text: 'Sự di chuyển của thông tin hoặc vật liệu (information or materials) đi qua ranh giới hệ thống.' },
      { id: 'c', text: 'Quan hệ kế thừa (Generalization) giữa các Actor.' },
      { id: 'd', text: 'Mức độ ưu tiên MoSCoW của từng yêu cầu người dùng.' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Lesson 02 (Page 9) định nghĩa Data-flows bằng mũi tên có nhãn biểu diễn sự dịch chuyển của thông tin hoặc vật liệu (VD: "chemical container", "scanned bar code") xuyên qua ranh giới hệ thống.',
  },
  {
    id: 'swr-pdf-q-017',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l2',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Quan sát ví dụ Context Diagram "Chemical Tracking System" (Lesson 02, Pages 5 & 8), thực thể ngoài "Bar Code Reader" thuộc loại nào và trao đổi luồng gì với hệ thống?',
    imageUrl: '/images/swr-pdf/context-diagram-cts.png',
    imageCaption: 'Context Diagram — Chemical Tracking System (Lesson 02, Pages 5 & 8)',
    options: [
      { id: 'a', text: 'Là thiết bị phần cứng (hardware device), gửi luồng "scanned bar code" vào Chemical Tracking System.' },
      { id: 'b', text: 'Là kho dữ liệu nội bộ, nhận luồng "inventory report" từ hệ thống.' },
      { id: 'c', text: 'Là một quy trình xử lý (process) nằm bên trong vòng tròn hệ thống.' },
      { id: 'd', text: 'Là tổ chức quản lý an toàn nhận "chemical usage report".' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Trên Context Diagram ở Page 5/8 của Lesson 02, "Bar Code Reader" nằm ở hình chữ nhật bên dưới với mũi tên "scanned bar code" hướng vào vòng tròn "Chemical Tracking System" — minh họa điển hình cho External Entity dạng hardware device.',
  },
  {
    id: 'swr-pdf-q-018',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l2',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Khi kiểm tra bản nháp Context Diagram của một sinh viên, BA thấy sinh viên vẽ thêm một hình tròn thứ hai bên trong vòng tròn hệ thống chính và vẽ 2 đường thẳng song song biểu diễn bảng CSDL "Orders". Lỗi này vi phạm nguyên tắc nào của Lesson 02 (Pages 4 & 9)?',
    options: [
      { id: 'a', text: 'Context Diagram chỉ dùng 1 hình tròn duy nhất cho Hệ thống và cố ý KHÔNG hiển thị tiến trình, đối tượng hay dữ liệu nội bộ bên trong.' },
      { id: 'b', text: 'Context Diagram bắt buộc phải vẽ đầy đủ mọi bảng CSDL thì mới xác định được phạm vi.' },
      { id: 'c', text: 'Context Diagram phải đặt External Entities vào bên trong hình tròn hệ thống.' },
      { id: 'd', text: 'Context Diagram chỉ chấp nhận luồng dữ liệu một chiều từ hệ thống ra ngoài.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 02 (Pages 4 & 9) nhấn mạnh: System chỉ biểu diễn bằng một hình tròn duy nhất (a single circle) và Context Diagram cố ý KHÔNG cung cấp góc nhìn vào các đối tượng, tiến trình hay kho dữ liệu bên trong hệ thống.',
  },
  {
    id: 'swr-pdf-q-019',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l2',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo Lesson 02 (Page 4), Context Diagram nằm ở vị trí nào trong phân cấp của Data Flow Diagram (DFD) và thuộc nhóm kỹ thuật nào của Chương 5?',
    options: [
      { id: 'a', text: 'Là mức cao nhất (top level) của DFD và là một trong các Scope representation techniques.' },
      { id: 'b', text: 'Là mức chi tiết thấp nhất (Level 3 DFD) và thuộc nhóm Data Modeling.' },
      { id: 'c', text: 'Là biến thể của State-Transition Diagram.' },
      { id: 'd', text: 'Là biểu đồ kiểm thử đơn vị (Unit Test Diagram).' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 02 (Page 4) nêu rõ: Context Diagram là một trong các Scope representation techniques và được xem là top level trong Data Flow Diagram (DFD).',
  },
  {
    id: 'swr-pdf-q-020',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l2',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Quan sát Context Diagram "Chemical Tracking System" (Lesson 02, Pages 5 & 8), thực thể "Training Database" (hệ thống ngoài) trao đổi cặp luồng dữ liệu nào với hệ thống?',
    imageUrl: '/images/swr-pdf/context-diagram-cts.png',
    imageCaption: 'Context Diagram — Chemical Tracking System (Lesson 02, Pages 5 & 8)',
    options: [
      { id: 'a', text: 'Hệ thống gửi "training record request" ra Training Database, và Training Database trả về "hazardous training record" vào hệ thống.' },
      { id: 'b', text: 'Hệ thống gửi "scanned bar code" ra Training Database.' },
      { id: 'c', text: 'Training Database gửi "vendor order status" vào hệ thống.' },
      { id: 'd', text: 'Training Database nhận "chemical usage report" từ hệ thống.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Ở góc dưới bên phải Context Diagram (Pages 5 & 8), giữa "Chemical Tracking System" và "Training Database" có hai mũi tên: "training record request" hướng ra Training Database và "hazardous training record" hướng vào Hệ thống.',
  },
  {
    id: 'swr-pdf-q-021',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l2',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Trong Context Diagram ở Pages 5 & 8 (Lesson 02), thực thể ngoài "Health and Safety Department" tương tác với Chemical Tracking System qua cặp luồng nào?',
    imageUrl: '/images/swr-pdf/context-diagram-cts.png',
    imageCaption: 'Context Diagram — Chemical Tracking System (Lesson 02, Pages 5 & 8)',
    options: [
      { id: 'a', text: 'Gửi "request for usage report" vào hệ thống và nhận "chemical usage report" từ hệ thống.' },
      { id: 'b', text: 'Gửi "vendor catalog query" và nhận "vendor catalog information".' },
      { id: 'c', text: 'Gửi "inventory update" và nhận "inventory report".' },
      { id: 'd', text: 'Chỉ gửi "scanned bar code" một chiều.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Quan sát góc dưới bên trái Context Diagram (Pages 5 & 8): "Health and Safety Department" gửi mũi tên "request for usage report" vào hệ thống và nhận mũi tên "chemical usage report" từ hệ thống.',
  },
  {
    id: 'swr-pdf-q-022',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l2',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Trong ví dụ Context Diagram (Lesson 02, Pages 5 & 8), cụm từ "chemical container" xuất hiện giữa Chemical Tracking System với 2 thực thể nào — minh họa cho việc Data-flow có thể là vật liệu (materials) chứ không chỉ là dữ liệu số?',
    imageUrl: '/images/swr-pdf/context-diagram-cts.png',
    imageCaption: 'Context Diagram — Chemical Tracking System (Lesson 02, Pages 5 & 8)',
    options: [
      { id: 'a', text: 'Chemist (nhận chemical container từ hệ thống) và Chemical Stockroom (kết nối chemical container với hệ thống).' },
      { id: 'b', text: 'Bar Code Reader và Training Database.' },
      { id: 'c', text: 'Health and Safety Department và Buyer.' },
      { id: 'd', text: 'Training Database và Buyer.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Pages 5 & 8 cho thấy nhãn "chemical container" xuất hiện ở mũi tên nối giữa Hệ thống với Chemist và với Chemical Stockroom, giải thích vì sao Page 9 định nghĩa Data-flows là "movement of information or materials".',
  },
  {
    id: 'swr-pdf-q-023',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l2',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Lesson 02 (Pages 5 & 9), hình khối tiêu chuẩn trong khung chú giải (Key) dùng để vẽ "System" và "External Entity" trên Context Diagram lần lượt là gì?',
    options: [
      { id: 'a', text: 'System là 1 hình tròn (single circle); External Entity là hình chữ nhật (rectangle).' },
      { id: 'b', text: 'System là hình chữ nhật lớn; External Entity là hình người que.' },
      { id: 'c', text: 'System là hình thoi; External Entity là 2 đường song song.' },
      { id: 'd', text: 'System là hình oval; External Entity là hình tròn.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Trong hộp Key ở Page 5/8 và mô tả chi tiết ở Page 9 (Lesson 02): System = a single circle; External Entities = rectangles; Data-flows = arrows with label.',
  },
  {
    id: 'swr-pdf-q-024',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l2',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Trên Context Diagram của Chemical Tracking System (Lesson 02, Pages 5 & 8), một mũi tên nối trực tiếp từ "Buyer" sang "Chemist" (không đi qua vòng tròn hệ thống) có xuất hiện hay không, và vì sao?',
    imageUrl: '/images/swr-pdf/context-diagram-cts.png',
    imageCaption: 'Context Diagram — Chemical Tracking System (Lesson 02, Pages 5 & 8)',
    options: [
      { id: 'a', text: 'Không — Context Diagram chỉ mô tả các kết nối giữa Hệ thống (ở tâm) với từng External Entity qua ranh giới hệ thống, không vẽ giao tiếp ngoài ranh giới giữa hai thực thể ngoài với nhau.' },
      { id: 'b', text: 'Có — mọi External Entity phải nối chéo trực tiếp với tất cả External Entity khác.' },
      { id: 'c', text: 'Có — vì Buyer phải gửi hóa đơn trực tiếp cho Chemist.' },
      { id: 'd', text: 'Không — vì Buyer không được phép có mặt trên Context Diagram.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo định nghĩa ở Page 4 & Page 9 (Lesson 02), Context Diagram minh họa ranh giới và kết nối GIỮA hệ thống đang phát triển với mọi thứ bên ngoài ("movement across the system boundary"), nên mọi data flow đều đi vào hoặc đi ra từ hình tròn System.',
  },

  // ===========================================================================
  // LESSON 03 - USE CASE DIAGRAM (12 câu: swr-pdf-q-025 .. swr-pdf-q-036)
  // ===========================================================================
  {
    id: 'swr-pdf-q-025',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l3',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo Lesson 03 (Use Case Diagram, Page 3), hai cách phổ biến nhất để biểu diễn User Requirements là gì và một User Story chuẩn thường viết theo mẫu nào?',
    options: [
      { id: 'a', text: 'Use cases và User stories; mẫu User Story: "As a [role], I want [goal], so that [benefit/reason]".' },
      { id: 'b', text: 'Context diagram và Physical ERD; mẫu: "System shall + passive voice".' },
      { id: 'c', text: 'CRUD Matrix và State Table; mẫu: "TAG / SCALE / METER / GOAL".' },
      { id: 'd', text: 'Swimlane và Decision Tree; mẫu: "IF condition THEN constraint".' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 03 (Page 3) nêu hai cách biểu diễn User Requirements là Use cases và User stories, kèm ví dụ mẫu User Story: "As a potential customer, I want to read book reviews, so that I can decide which one to buy".',
  },
  {
    id: 'swr-pdf-q-026',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l3',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Trong Lesson 03 (Page 6), sự khác biệt giữa "Users" và "Actors" được giải thích qua phép ẩn dụ nào?',
    options: [
      { id: 'a', text: 'Users là con người (hoặc hệ thống) thực tế; còn Actor là vai trò trừu tượng — giống như một người có bộ sưu tập nhiều chiếc mũ (hats), mỗi chiếc mũ gắn nhãn một Actor mà họ có thể đóng vai.' },
      { id: 'b', text: 'Users là các tiến trình phần mềm; còn Actors chỉ có thể là con người không bao giờ là thiết bị.' },
      { id: 'c', text: 'Mỗi User thực tế bắt buộc chỉ được tương ứng với duy nhất một Actor cố định.' },
      { id: 'd', text: 'Actors nằm bên trong hộp ranh giới hệ thống còn Users nằm bên ngoài.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 03 (Page 6) giải thích: Users là người/hệ thống thực tế, còn Actors là khái niệm trừu tượng (collection of hats) — một user thực tế có thể đội nhiều mũ Actor khác nhau khi tham gia các Use Case.',
  },
  {
    id: 'swr-pdf-q-027',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l3',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo quy trình 3 bước xác định Use Cases trong Lesson 03 (Page 7), bước đầu tiên BA cần làm là gì?',
    options: [
      { id: 'a', text: 'Xác định các Actors trước (Identify the actors first), sau đó phác thảo quy trình nghiệp vụ rồi định nghĩa các Use Cases.' },
      { id: 'b', text: 'Vẽ chi tiết toàn bộ các quan hệ <<extend>> và <<include>> trước khi tìm Actor.' },
      { id: 'c', text: 'Thiết kế các bảng cơ sở dữ liệu vật lý trước khi liệt kê Use Case.' },
      { id: 'd', text: 'Viết mã nguồn giao diện rồi mới suy ngược lại tên Use Case.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 03 (Page 7) quy định trình tự: (1) Identify the actors first -> (2) Lay out the business processes being supported -> (3) Define the use cases for activities where actors and systems interact.',
  },
  {
    id: 'swr-pdf-q-028',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l3',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Trong Use Case Diagram (Lesson 03, Page 8), quan hệ "Association" được vẽ bằng ký hiệu gì và dùng để nối thành phần nào với thành phần nào?',
    options: [
      { id: 'a', text: 'Đường thẳng nét liền (solid line) nối trực tiếp giữa một Actor và một Use Case.' },
      { id: 'b', text: 'Mũi tên nét đứt có chữ <<include>> nối giữa hai Actor.' },
      { id: 'c', text: 'Mũi tên tam giác rỗng nối từ Use Case về Actor.' },
      { id: 'd', text: 'Hình thoi đặt giữa hai Use Case.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 03 (Page 8) minh họa quan hệ Association bằng một đường thẳng nét liền nối giữa hình người que Actor và hình oval Use Case.',
  },
  {
    id: 'swr-pdf-q-029',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l3',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Trong UML Use Case Diagram (Lesson 03, Page 9), khi biểu diễn quan hệ tổng quát hóa/kế thừa (Generalization) giữa các Actor hoặc Use Case, chiều mũi tên tam giác rỗng được vẽ như thế nào?',
    options: [
      { id: 'a', text: 'Nét liền có mũi tên tam giác rỗng trỏ TỪ phần tử con (như Salesperson, Supervisor hoặc Withdraw Money) TỚI phần tử cha (Employee hoặc Perform Money Transaction).' },
      { id: 'b', text: 'Nét đứt có mũi tên tam giác rỗng trỏ từ phần tử cha xuống phần tử con.' },
      { id: 'c', text: 'Chỉ áp dụng cho Actor, tuyệt đối không áp dụng giữa hai Use Case.' },
      { id: 'd', text: 'Dùng mũi tên nét đứt gắn nhãn <<generalize>> từ cha xuống con.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 03 (Page 9) minh họa cả hai trường hợp: Actor (Salesperson, Supervisor -> Employee) và Use Case (Withdraw Money, Deposit Money -> Perform Money Transaction), đều dùng đường liền có đầu mũi tên tam giác rỗng hướng từ Con lên Cha.',
  },
  {
    id: 'swr-pdf-q-030',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l3',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo quy ước UML Use Case Diagram (Lesson 03, Page 10), với tình huống Use Case "Create Account" luôn bắt buộc gọi bước kiểm tra "Validate Email", quan hệ và chiều mũi tên nào là ĐÚNG?',
    options: [
      { id: 'a', text: 'Mũi tên nét đứt gắn nhãn <<include>> trỏ TỪ "Create Account" ĐẾN "Validate Email".' },
      { id: 'b', text: 'Mũi tên nét đứt gắn nhãn <<include>> trỏ từ "Validate Email" về "Create Account".' },
      { id: 'c', text: 'Mũi tên nét đứt gắn nhãn <<extend>> trỏ từ "Create Account" đến "Validate Email".' },
      { id: 'd', text: 'Mũi tên tam giác rỗng từ "Create Account" đến "Validate Email".' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 03 (Page 10) vẽ rõ: Create Account ----<<include>>----> Validate Email. Với <<include>>, mũi tên nét đứt luôn xuất phát từ Use Case cơ sở trỏ tới Use Case con bắt buộc được bao gồm.',
  },
  {
    id: 'swr-pdf-q-031',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l3',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo quy ước UML Use Case Diagram (Lesson 03, Page 10), khi đặt hàng ("Place Order"), khách hàng CÓ THỂ tùy chọn áp mã giảm giá ("Apply Discount") hoặc cập nhật địa chỉ giao hàng ("Update Delivery Address"). Quan hệ và chiều mũi tên nào là ĐÚNG?',
    options: [
      { id: 'a', text: 'Mũi tên nét đứt gắn nhãn <<extend>> trỏ TỪ "Apply Discount" và "Update Delivery Address" VỀ "Place Order".' },
      { id: 'b', text: 'Mũi tên nét đứt gắn nhãn <<extend>> trỏ từ "Place Order" ra "Apply Discount" và "Update Delivery Address".' },
      { id: 'c', text: 'Mũi tên nét đứt gắn nhãn <<include>> trỏ từ "Place Order" tới "Apply Discount".' },
      { id: 'd', text: 'Mũi tên tam giác rỗng từ "Place Order" trỏ tới "Apply Discount".' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 03 (Page 10) chỉ rõ bẫy ngược chiều rất hay thi: với <<extend>> (mở rộng tùy chọn), mũi tên nét đứt phải trỏ NGƯỢC từ Use Case mở rộng ("Apply Discount", "Update Delivery Address") về Use Case cơ sở ("Place Order").',
  },
  {
    id: 'swr-pdf-q-032',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l3',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Quan sát Figure 8-2 ("Partial use case diagram for the Chemical Tracking System" — Lesson 03, Page 4), nhận xét nào ĐÚNG về cấu trúc Use Case Diagram này?',
    imageUrl: '/images/swr-pdf/figure-8-2-usecase.jpg',
    imageCaption: 'Figure 8-2: Partial Use Case Diagram for Chemical Tracking System (Lesson 03, Page 4)',
    options: [
      { id: 'a', text: 'Hộp chữ nhật ranh giới hệ thống chứa các Use Case (hình oval như "Request a Chemical", "Dispose of a Chemical"); các Actor (kể cả "Training Database") đứng bên ngoài hộp.' },
      { id: 'b', text: 'Actor "Training Database" nằm bên trong hộp hệ thống vì nó là cơ sở dữ liệu.' },
      { id: 'c', text: 'Chỉ có Actor "Requester" tương tác với Use Case "Request a Chemical", không có Actor bên phải.' },
      { id: 'd', text: 'Tên Use Case được đặt dạng danh từ như "Chemical Request Form" và "Inventory Data".' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Trong Figure 8-2 (Lesson 03, Page 4), tất cả Use Case đều đặt tên bắt đầu bằng động từ và nằm trong hộp ranh giới hệ thống; toàn bộ Actors (Requester, Health and Safety Dept., Training Database, Buyer, Chemical Stockroom) nằm ngoài hộp và nối với Use Case bằng Association.',
  },
  {
    id: 'swr-pdf-q-033',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l3',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Một bạn trong nhóm đặt tên Use Case trên sơ đồ là "Customer Login Screen" và "Monthly Sales Data". Theo Lesson 03 (Page 7), cần sửa lại theo nguyên tắc nào?',
    options: [
      { id: 'a', text: 'Tên Use Case phải mô tả mục tiêu người dùng muốn đạt được và bắt đầu bằng động từ (VD: "Log In to System", "Generate Monthly Sales Report").' },
      { id: 'b', text: 'Tên Use Case phải giữ nguyên dạng tên màn hình UI để lập trình viên dễ tìm file.' },
      { id: 'c', text: 'Tên Use Case bắt buộc phải là danh từ số ít giống như tên thực thể trong ERD.' },
      { id: 'd', text: 'Tên Use Case phải chứa từ khóa "shall" ở đầu câu.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 03 (Page 7) quy định: tên Use Case phải chỉ rõ mục tiêu (goal) người dùng muốn hoàn thành và bắt buộc bắt đầu bằng động từ (verb).',
  },
  {
    id: 'swr-pdf-q-034',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l3',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Quan sát Figure 8-2 (Lesson 03, Page 4), Actor "Requester" kết nối trực tiếp với 3 Use Case nào?',
    imageUrl: '/images/swr-pdf/figure-8-2-usecase.jpg',
    imageCaption: 'Figure 8-2: Partial Use Case Diagram for Chemical Tracking System (Lesson 03, Page 4)',
    options: [
      { id: 'a', text: 'Obtain Material Safety Data Sheet, Request a Chemical và Dispose of a Chemical.' },
      { id: 'b', text: 'Search Vendor Catalogs, Manage Inventory và Dispose of a Chemical.' },
      { id: 'c', text: 'Chỉ duy nhất Use Case Request a Chemical.' },
      { id: 'd', text: 'Obtain Material Safety Data Sheet và Manage Inventory.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Trong Figure 8-2 (Lesson 03, Page 4), bên trái có hình Actor `Requester` nối 3 mũi tên tới: `Obtain Material Safety Data Sheet`, `Request a Chemical` và `Dispose of a Chemical`.',
  },
  {
    id: 'swr-pdf-q-035',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l3',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'multiple',
    prompt:
      'Quan sát Figure 8-2 (Lesson 03, Page 4), ngoài Requester, chọn 2 Actor phía bên phải cũng tham gia vào Use Case "Request a Chemical":',
    imageUrl: '/images/swr-pdf/figure-8-2-usecase.jpg',
    imageCaption: 'Figure 8-2: Partial Use Case Diagram for Chemical Tracking System (Lesson 03, Page 4)',
    options: [
      { id: 'a', text: 'Training Database và Buyer.' },
      { id: 'b', text: 'Chemical Stockroom.' },
      { id: 'c', text: 'Health and Safety Dept.' },
      { id: 'd', text: 'Bar Code Reader.' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Trong Figure 8-2 (Page 4), Use Case "Request a Chemical" nối với Requester (bên trái) và 3 Actor bên phải: Training Database, Buyer, Chemical Stockroom (còn Health and Safety Dept. nối với Dispose of a Chemical).',
  },
  {
    id: 'swr-pdf-q-036',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l3',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Lesson 03 (Pages 4 & 7), Use Case Diagram trả lời tốt nhất câu hỏi nào cho dự án?',
    options: [
      { id: 'a', text: 'Cung cấp góc nhìn trực quan cấp cao về các User Requirements — ai tương tác với hệ thống để đạt được mục tiêu mang lại giá trị gì.' },
      { id: 'b', text: 'Định nghĩa kiểu dữ liệu (VARCHAR, INT) của từng cột trong bảng cơ sở dữ liệu.' },
      { id: 'c', text: 'Mô tả từng bước thuật toán rẽ nhánh chi tiết bằng hình thoi Yes/No.' },
      { id: 'd', text: 'Định lượng thời gian phản hồi tính bằng mili-giây theo Planguage.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 03 (Pages 4 & 7) định nghĩa: Use case diagrams cung cấp high-level visual representation of user requirements, thể hiện chuỗi tương tác giữa hệ thống và actor ngoài để đạt outcome of value.',
  },

  // ===========================================================================
  // LESSON 04 - USE CASE SPECIFICATION (12 câu: swr-pdf-q-037 .. swr-pdf-q-048)
  // ===========================================================================
  {
    id: 'swr-pdf-q-037',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l4',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Trong mẫu đặc tả "UC-4 Request a Chemical" (Lesson 04, Page 5), phân biệt nào ĐÚNG giữa Primary Actor và Secondary Actors?',
    imageUrl: '/images/swr-pdf/uc-4-part1.jpg',
    imageCaption: 'UC-4 Request a Chemical — Use Case Specification phần 1 (Lesson 04, Page 5)',
    options: [
      { id: 'a', text: 'Primary Actor là Requester (người khởi phát mục tiêu yêu cầu hóa chất); Secondary Actors là Buyer, Chemical Stockroom và Training Database.' },
      { id: 'b', text: 'Primary Actor là Training Database; Secondary Actors là Requester.' },
      { id: 'c', text: 'Cả Requester và Buyer đều là Primary Actors, không có Secondary Actor.' },
      { id: 'd', text: 'Secondary Actors là những bên chỉ đọc tài liệu SRS sau khi hệ thống hoàn thành.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo bảng đặc tả UC-4 (Lesson 04, Page 5): Primary Actor là "Requester" (tác nhân chính kích hoạt và hưởng kết quả giá trị của Use Case), còn Secondary Actors là "Buyer, Chemical Stockroom, Training Database".',
  },
  {
    id: 'swr-pdf-q-038',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l4',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Trong bảng đặc tả UC-4 (Lesson 04, Page 5), "Trigger" khác gì với "Preconditions"?',
    imageUrl: '/images/swr-pdf/uc-4-part1.jpg',
    imageCaption: 'UC-4 Request a Chemical — Use Case Specification phần 1 (Lesson 04, Page 5)',
    options: [
      { id: 'a', text: 'Trigger là sự kiện/hành động khởi phát Use Case ("Requester indicates that he wants to request a chemical"); Preconditions là các điều kiện tiên quyết phải đúng sẵn trước khi chạy (user đã xác thực, được phân quyền, CSDL đang online).' },
      { id: 'b', text: 'Trigger mô tả trạng thái sau khi chạy xong Use Case; Preconditions mô tả lỗi ngoại lệ.' },
      { id: 'c', text: 'Trigger chỉ xuất hiện trong User Story còn Preconditions chỉ có trong ERD.' },
      { id: 'd', text: 'Preconditions là hành động người dùng bấm nút; Trigger là danh sách Business Rules liên quan.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo Lesson 04 (Page 5): Trigger là tác nhân kích hoạt Use Case bắt đầu ("Requester indicates that he wants to request a chemical"), còn Preconditions (PRE-1..3) là trạng thái/điều kiện phải thỏa mãn trước đó (authenticated, authorized, database online).',
  },
  {
    id: 'swr-pdf-q-039',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l4',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Trong đặc tả UC-4 (Lesson 04, Pages 5–6), tình huống "4.1 Request a Chemical from a Vendor" và "4.1.E1 Chemical Is Not Commercially Available" lần lượt được xếp vào mục nào?',
    imageUrl: '/images/swr-pdf/uc-4-part2.jpg',
    imageCaption: 'UC-4 Request a Chemical — Alternative Flows & Exceptions phần 2 (Lesson 04, Page 6)',
    options: [
      { id: 'a', text: '4.1 là Alternative Flow (luồng thay thế khi đặt mua từ nhà cung cấp); 4.1.E1 là Exception (ngoại lệ khi không có nhà cung cấp nào bán hóa chất đó).' },
      { id: 'b', text: '4.1 là Normal Flow; 4.1.E1 là Postcondition.' },
      { id: 'c', text: 'Cả 4.1 và 4.1.E1 đều là Preconditions.' },
      { id: 'd', text: '4.1 là Assumption; 4.1.E1 là Business Rule.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo Lesson 04 (Pages 5–6): Normal Flow là 4.0 (lấy từ Chemical Stockroom), 4.1 nằm ở mục Alternative Flows (đặt mua từ Vendor), còn 4.1.E1 nằm ở mục Exceptions (xử lý khi hóa chất không bán thương mại).',
  },
  {
    id: 'swr-pdf-q-040',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l4',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Trong ngoại lệ "4.1.E1 Chemical Is Not Commercially Available" (Lesson 04, Page 6), nếu người dùng chọn nhánh 3a ("Requester asks to request another chemical") thì điều gì xảy ra tiếp theo ở bước 3b?',
    imageUrl: '/images/swr-pdf/uc-4-part2.jpg',
    imageCaption: 'UC-4 Request a Chemical — Exceptions 4.1.E1 (Lesson 04, Page 6)',
    options: [
      { id: 'a', text: 'Hệ thống bắt đầu lại Normal Flow từ đầu (System starts normal flow over).' },
      { id: 'b', text: 'Hệ thống chấm dứt ngay lập tức Use Case và ghi POST-1.' },
      { id: 'c', text: 'Hệ thống tự động đặt hàng hóa chất bất kỳ từ Buyer.' },
      { id: 'd', text: 'Hệ thống chuyển quyền điều khiển sang Secondary Actor Training Database.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo mục Exceptions 4.1.E1 (Lesson 04, Page 6): bước 3a–3b quy định khi Requester muốn chọn hóa chất khác thì "System starts normal flow over", còn nếu chọn thoát (4a–4b) thì "System terminates use case".',
  },
  {
    id: 'swr-pdf-q-041',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l4',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Quan sát sơ đồ luồng "Normal Flow vs Alternative Flow" ở Lesson 04 (Page 7), đường đi chuẩn của một Alternative Flow thông thường diễn ra như thế nào?',
    imageUrl: '/images/swr-pdf/uc-flow-branch.png',
    imageCaption: 'Normal Flow vs Alternative Flow (Lesson 04, Page 7)',
    options: [
      { id: 'a', text: 'Rẽ nhánh từ điều kiện nhánh (branch condition) sau Step 2, chạy qua các bước thay thế (Step 3a -> 3b -> 3c), rồi nhập lại vào Normal Flow ở Step 4 trước khi đạt use case postconditions.' },
      { id: 'b', text: 'Chạy song song độc lập từ đầu đến cuối và không bao giờ nhập lại Normal Flow.' },
      { id: 'c', text: 'Bắt đầu sau khi đã đạt use case postconditions.' },
      { id: 'd', text: 'Bỏ qua hoàn toàn mọi precondition của Use Case.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Sơ đồ ở Lesson 04 (Page 7) minh họa: Normal Flow đi từ Preconditions -> Step 1 -> Step 2 -> hình thoi điều kiện; nhánh (branch condition) sang Alternative Flow (Step 3a -> 3b -> 3c) rồi quay lại nhập vào Step 4 -> Postconditions.',
  },
  {
    id: 'swr-pdf-q-042',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l4',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo mẫu đặc tả UC-4 (Lesson 04, Page 6), mục "Assumptions" và "Business Rules" dùng để ghi nhận thông tin gì?',
    imageUrl: '/images/swr-pdf/uc-4-part2.jpg',
    imageCaption: 'UC-4 Request a Chemical — Business Rules & Assumptions (Lesson 04, Page 6)',
    options: [
      { id: 'a', text: 'Assumptions ghi giả định mặc định đúng (VD: cấu trúc hóa chất import được giả định là hợp lệ); Business Rules tham chiếu mã quy tắc nghiệp vụ chi phối (VD: BR-28, BR-31).' },
      { id: 'b', text: 'Assumptions ghi lịch trình bàn giao dự án; Business Rules ghi danh sách bug đã phát hiện.' },
      { id: 'c', text: 'Assumptions ghi mã nguồn SQL; Business Rules ghi giao diện CSS.' },
      { id: 'd', text: 'Cả hai mục đều dùng để liệt kê tên tác giả viết tài liệu.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 04 (Page 6) cho thấy: mục Business Rules liệt kê các mã quy tắc liên quan ("BR-28, BR-31"), còn Assumptions ghi giả định nền ("Imported chemical structures are assumed to be valid").',
  },
  {
    id: 'swr-pdf-q-043',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l4',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Figure 8-1 ("From Use cases to functional requirements" — Lesson 04, Page 10), từ "Use Case Specification" qua bước "analysis" sẽ trực tiếp sinh ra 2 sản phẩm nào?',
    imageUrl: '/images/swr-pdf/figure-8-1-uc-to-fr.jpg',
    imageCaption: 'Figure 8-1: From Use cases/User stories to functional requirements & tests (Lesson 04, Page 10)',
    options: [
      { id: 'a', text: 'Functional requirements và Tests.' },
      { id: 'b', text: 'Business objectives và Context diagram.' },
      { id: 'c', text: 'Physical database tables và Deployment scripts.' },
      { id: 'd', text: 'User personas và Product vision.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Figure 8-1 (Lesson 04, Page 10) vẽ hai lộ trình rõ ràng: (1) Use Case Name --(conversations)--> Use Case Specification --(analysis)--> Functional requirements & Tests; (2) User Story --(conversations)--> Refined user stories --(conversations)--> Acceptance tests.',
  },
  {
    id: 'swr-pdf-q-044',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l4',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Trong Figure 8-1 (Lesson 04, Page 10), theo hướng tiếp cận Agile User Story, các cuộc hội thoại làm rõ User Story ("conversations" -> "refined user stories" -> "conversations") dẫn trực tiếp đến đầu ra nào để kiểm chứng?',
    imageUrl: '/images/swr-pdf/figure-8-1-uc-to-fr.jpg',
    imageCaption: 'Figure 8-1: From Use cases/User stories to functional requirements & tests (Lesson 04, Page 10)',
    options: [
      { id: 'a', text: 'Acceptance tests (kiểm thử chấp nhận).' },
      { id: 'b', text: 'Cockburn Use Case ID & Assumptions.' },
      { id: 'c', text: 'Crow’s Foot ERD & Data Dictionary.' },
      { id: 'd', text: 'Formal Planguage specification.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Figure 8-1 (Lesson 04, Page 10) thể hiện luồng dưới: User Story -> conversations -> refined user stories -> conversations -> acceptance tests.',
  },
  {
    id: 'swr-pdf-q-045',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l4',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Một đội phát triển nhận được tài liệu Use Case Specification nhưng than phiền rằng lập trình viên vẫn hay đoán mò chi tiết xử lý và validation bên trong. Theo Lesson 04 (Pages 9–10), nguyên nhân cốt lõi là gì?',
    options: [
      { id: 'a', text: 'Use Case chỉ mô tả góc nhìn hành vi bên ngoài của người dùng; chưa thực hiện bước phân tích (analysis) để suy dẫn thành các Functional Requirements chi tiết cho lập trình viên triển khai.' },
      { id: 'b', text: 'Do chưa biến Use Case thành bảng màu giao diện trong Prototype.' },
      { id: 'c', text: 'Do lập trình viên đáng lẽ chỉ nên đọc Business Requirements thay vì Functional Requirements.' },
      { id: 'd', text: 'Do Use Case Specification không bao giờ được phép có Alternative Flows.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 04 (Page 9) nhấn mạnh: Use Case nhìn từ góc độ người dùng (externally visible behavior); lập trình viên KHÔNG cài đặt trực tiếp User Requirements mà cài đặt Functional Requirements được phân tích chi tiết từ Use Case.',
  },
  {
    id: 'swr-pdf-q-046',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l4',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Trong Normal Flow `4.0` của `UC-4 Request a Chemical` (Lesson 04, Page 5), ở Bước 4 ("Requester selects a specific container or asks to place a vendor order"), nếu Requester chọn đặt từ Vendor thì hệ thống rẽ sang mục nào và sau khi hoàn tất Bước 5 của nhánh đó thì ai được thông báo?',
    imageUrl: '/images/swr-pdf/uc-4-part1.jpg',
    imageCaption: 'UC-4 Request a Chemical — Normal Flow 4.0 & Postconditions (Lesson 04, Page 5)',
    options: [
      { id: 'a', text: 'Rẽ sang Alternative Flow 4.1 ("Request a Chemical from a Vendor"); sau khi lưu request, hệ thống thông báo cho Buyer (còn Normal Flow 4.0 thông báo cho Chemical Stockroom).' },
      { id: 'b', text: 'Rẽ sang Exception 4.1.E1 và thông báo cho Training Database.' },
      { id: 'c', text: 'Quay lại PRE-1 để xác thực lại người dùng.' },
      { id: 'd', text: 'Thông báo cho Health and Safety Dept. ngay lập tức.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo bảng đặc tả UC-4 (Lesson 04, Pages 5–6): bước 4 của 4.0 ghi `(see 4.1)`; trong Alternative Flow 4.1, bước 5 kết thúc bằng `"System stores the request and notifies the Buyer"`, khớp với `POST-2: Request was sent to the Chemical Stockroom or to a Buyer`.',
  },
  {
    id: 'swr-pdf-q-047',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l4',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Trong bảng đặc tả UC-4 (Lesson 04, Page 6), mục "Frequency of Use" và "Priority" ghi thông tin gì?',
    imageUrl: '/images/swr-pdf/uc-4-part2.jpg',
    imageCaption: 'UC-4 Request a Chemical — Priority & Frequency of Use (Lesson 04, Page 6)',
    options: [
      { id: 'a', text: 'Priority: High; Frequency of Use: ước lượng tần suất sử dụng thực tế ("khoảng 5 lần/tuần bởi mỗi chemist, 200 lần/tuần bởi nhân viên kho hóa chất").' },
      { id: 'b', text: 'Priority: Low; Frequency of Use: chỉ dùng 1 lần duy nhất lúc cài đặt.' },
      { id: 'c', text: 'Priority: Won’t have; Frequency of Use: số dòng code trong backend.' },
      { id: 'd', text: 'Không hề có hai trường thông tin này trong mẫu đặc tả UC-4.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Page 6 (Lesson 04) hiển thị rõ hai dòng ngay dưới Exceptions: `Priority: High` và `Frequency of Use: Approximately 5 times per week by each chemist, 200 times per week by chemical stockroom staff`.',
  },
  {
    id: 'swr-pdf-q-048',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l4',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Lesson 04 (Page 5), mục đích chính của việc dùng một "Use Case Specification template" chuẩn hóa cho từng Use Case là gì?',
    options: [
      { id: 'a', text: 'Nhắc nhở BA rà soát đầy đủ mọi thông tin cần cân nhắc (trigger, preconditions, postconditions, normal/alt flows, exceptions, business rules...) cho từng Use Case, tránh bỏ sót.' },
      { id: 'b', text: 'Để thay thế hoàn toàn sơ đồ Use Case Diagram ở bước đầu.' },
      { id: 'c', text: 'Để sinh trực tiếp giao diện người dùng mà không cần wireframe.' },
      { id: 'd', text: 'Để giảm số lượng Stakeholder tham gia kiểm tra tài liệu.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 04 (Page 5) viết nguyên văn: "The template reminds you of all the information you should contemplate regarding each use case."',
  },

  // ===========================================================================
  // LESSON 05 & 06 - STATE DIAGRAM & DFD (14 câu: swr-pdf-q-049 .. swr-pdf-q-062)
  // ===========================================================================
  {
    id: 'swr-pdf-q-049',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l56',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo Lesson 05–06 (Page 3), State-Transition Diagram (STD) mang lại giá trị cốt lõi gì khi phân tích yêu cầu?',
    options: [
      { id: 'a', text: 'Cung cấp biểu diễn ngắn gọn, đầy đủ và không mơ hồ về các trạng thái của đối tượng/hệ thống cùng các chuyển đổi khả dĩ giữa chúng.' },
      { id: 'b', text: 'Thể hiện sự phân công công việc giữa các phòng ban theo làn ngang.' },
      { id: 'c', text: 'Mô tả cấu trúc thuộc tính khóa chính và khóa ngoại của các thực thể.' },
      { id: 'd', text: 'Liệt kê danh sách các bên liên quan và quyền hạn sử dụng phần mềm.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 05–06 (Page 3) định nghĩa STD là mô hình cung cấp biểu diễn súc tích, đầy đủ và rõ ràng (concise, complete, unambiguous) về các trạng thái và các bước chuyển trạng thái trực quan.',
  },
  {
    id: 'swr-pdf-q-050',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l56',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Quan sát State-Transition Diagram của Chemical Request (Lesson 05–06, Page 4), khi yêu cầu đang ở trạng thái "In Preparation", đối tượng có thể chuyển trực tiếp sang những trạng thái nào?',
    imageUrl: '/images/swr-pdf/std-chemical-request.png',
    imageCaption: 'State-Transition Diagram — Chemical Request (Lesson 05–06, Page 4)',
    options: [
      { id: 'a', text: 'Chỉ "Postponed" (lưu nháp chưa hoàn tất) hoặc "Accepted" (hệ thống chấp nhận yêu cầu hợp lệ).' },
      { id: 'b', text: 'Có thể chuyển thẳng sang "Canceled" hoặc "Fulfilled".' },
      { id: 'c', text: 'Chỉ chuyển sang "Placed" rồi quay lại "In Preparation".' },
      { id: 'd', text: 'Chuyển thẳng sang "Back-Ordered" nếu kho hết hàng.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo sơ đồ Page 4 (Lesson 05–06), từ "In Preparation" chỉ có 2 mũi tên đi ra: sang "Postponed" (requester saves incomplete request, có mũi tên quay lại) và xuống "Accepted" (system accepts valid request). Không có mũi tên nối trực tiếp từ "In Preparation" sang "Canceled" hay "Fulfilled".',
  },
  {
    id: 'swr-pdf-q-051',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l56',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Theo State-Transition Diagram ở Lesson 05–06 (Page 4), từ trạng thái "Accepted", yêu cầu hóa chất có thể chuyển sang trạng thái "Fulfilled" theo sự kiện nào?',
    imageUrl: '/images/swr-pdf/std-chemical-request.png',
    imageCaption: 'State-Transition Diagram — Chemical Request (Lesson 05–06, Page 4)',
    options: [
      { id: 'a', text: 'Sự kiện "chemical stockroom fills request" (kho hóa chất cấp phát trực tiếp từ tồn kho).' },
      { id: 'b', text: 'Sự kiện "requester retrieves incomplete request".' },
      { id: 'c', text: 'Sự kiện "vendor places chemical on back-order".' },
      { id: 'd', text: 'Sự kiện "buyer cancels vendor order".' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Trên STD (Lesson 05–06, Page 4), từ "Accepted" có nhánh "chemical stockroom fills request" đi thẳng tới "Fulfilled" (ngoài nhánh "buyer places order with vendor" -> "Placed" và "requester cancels request" -> "Canceled").',
  },
  {
    id: 'swr-pdf-q-052',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l56',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'multiple',
    prompt:
      'Quan sát State-Transition Diagram ở Lesson 05–06 (Page 4), chọn 2 nhóm trạng thái có mũi tên cho phép chuyển sang "Canceled":',
    imageUrl: '/images/swr-pdf/std-chemical-request.png',
    imageCaption: 'State-Transition Diagram — Chemical Request (Lesson 05–06, Page 4)',
    options: [
      { id: 'a', text: 'Postponed và Accepted (khi requester hủy yêu cầu)' },
      { id: 'b', text: 'Placed và Back-Ordered (khi buyer hủy đơn đặt hàng với vendor)' },
      { id: 'c', text: 'In Preparation (ngay khi vừa bắt đầu soạn)' },
      { id: 'd', text: 'Fulfilled (sau khi đã nhận đủ hóa chất)' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Theo Page 4 (Lesson 05–06), 4 trạng thái dẫn tới "Canceled" là: Postponed, Accepted (requester cancels request), Placed và Back-Ordered (buyer cancels vendor order). Trạng thái "In Preparation" và trạng thái kết thúc "Fulfilled" không có mũi tên tới "Canceled".',
  },
  {
    id: 'swr-pdf-q-053',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l56',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Trong State-Transition Diagram (Lesson 05–06, Page 4), một đơn đặt hàng đang ở trạng thái "Placed" nhưng nhà cung cấp tạm hết hàng nên báo "vendor places chemical on back-order". Sau khi chuyển sang "Back-Ordered", đơn hàng có thể đi tiếp tới trạng thái nào?',
    imageUrl: '/images/swr-pdf/std-chemical-request.png',
    imageCaption: 'State-Transition Diagram — Chemical Request (Lesson 05–06, Page 4)',
    options: [
      { id: 'a', text: '"Fulfilled" (khi nhận được hóa chất từ vendor) hoặc "Canceled" (khi buyer hủy đơn).' },
      { id: 'b', text: 'Quay ngược lại "In Preparation" để người dùng sửa yêu cầu.' },
      { id: 'c', text: 'Quay lại "Postponed" để tạm hoãn.' },
      { id: 'd', text: 'Dừng vĩnh viễn tại "Back-Ordered" không thể chuyển tiếp.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Trên sơ đồ Page 4, từ "Back-Ordered" có 2 mũi tên đi ra: sang trái tới "Fulfilled" (chemical received from vendor) và sang phải tới "Canceled" (buyer cancels vendor order).',
  },
  {
    id: 'swr-pdf-q-054',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l56',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Trong State-Transition Diagram (Lesson 05–06, Page 4), tổng cộng có bao nhiêu trạng thái của Chemical Request được vẽ và từ "Placed" có thể đi trực tiếp tới "Fulfilled" mà không qua "Back-Ordered" không?',
    imageUrl: '/images/swr-pdf/std-chemical-request.png',
    imageCaption: 'State-Transition Diagram — Chemical Request (Lesson 05–06, Page 4)',
    options: [
      { id: 'a', text: 'Có 7 trạng thái (In Preparation, Postponed, Accepted, Placed, Back-Ordered, Fulfilled, Canceled); và từ "Placed" CÓ đường đi thẳng tới "Fulfilled" khi "chemical received from vendor".' },
      { id: 'b', text: 'Có 5 trạng thái; từ "Placed" bắt buộc phải qua "Back-Ordered" mới tới được "Fulfilled".' },
      { id: 'c', text: 'Có 6 trạng thái; không có trạng thái "Postponed".' },
      { id: 'd', text: 'Có 7 trạng thái; từ "Fulfilled" có thể quay lại "Accepted".' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Đếm trên sơ đồ Page 4: 7 ô trạng thái gồm In Preparation, Postponed, Accepted, Placed, Back-Ordered, Fulfilled, Canceled. Từ "Placed" có nhánh "chemical received from vendor" đi thẳng sang "Fulfilled".',
  },
  {
    id: 'swr-pdf-q-055',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l56',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo Lesson 05–06 (Page 5), mối quan hệ phân cấp giữa Context Diagram và Level 0 DFD là gì?',
    options: [
      { id: 'a', text: 'Ta có thể khai triển chi tiết (elaborate) Context Diagram thành Level 0 DFD — mức cao nhất của mô hình luồng dữ liệu có thể thấy các xử lý và kho lưu trữ.' },
      { id: 'b', text: 'Level 0 DFD là mô hình đơn giản hơn nằm bên trên Context Diagram.' },
      { id: 'c', text: 'Context Diagram là bản vẽ vật lý chi tiết của từng màn hình UI trong Level 0 DFD.' },
      { id: 'd', text: 'Level 0 DFD chỉ vẽ các trạng thái thời gian thực, không chứa kho dữ liệu.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 05–06 (Page 5) nêu rõ: Context Diagram được khai triển (elaborate) thành Level 0 DFD (mức cao nhất của data flow model), giúp nhìn bức tranh tổng thể cách dữ liệu di chuyển qua hệ thống.',
  },
  {
    id: 'swr-pdf-q-056',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l56',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Lesson 05–06 (Page 5), việc rà soát Data Flow Diagram (DFD reviews) thường mang lại lợi ích bất ngờ nào cho BA?',
    options: [
      { id: 'a', text: 'Giúp phát hiện các nhóm người dùng (user classes), quy trình nghiệp vụ (business processes) và kết nối với hệ thống khác mà trước đó chưa nhận ra.' },
      { id: 'b', text: 'Tự động sinh toàn bộ mã SQL tối ưu chỉ mục cho cơ sở dữ liệu.' },
      { id: 'c', text: 'Xác định bảng màu và font chữ chuẩn cho màn hình ứng dụng.' },
      { id: 'd', text: 'Đo tốc độ phản hồi phần cứng theo đơn vị milli-giây.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Lesson 05–06 (Page 5) ghi rõ: DFD reviews thường giúp phát hiện các user classes, business processes và kết nối tới hệ thống khác trước đây chưa được nhận diện.',
  },
  {
    id: 'swr-pdf-q-057',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l56',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Trong Level 0 DFD (Lesson 05–06, Page 6), 4 ký hiệu chuẩn dùng để biểu diễn sơ đồ luồng dữ liệu gồm những hình gì?',
    options: [
      { id: 'a', text: 'Mũi tên (data flow), hình tròn (process), cặp đường thẳng song song (Data Store), hình chữ nhật (External Entity).' },
      { id: 'b', text: 'Hình oval (use case), người que (actor), mũi tên nét đứt (include), hộp hệ thống.' },
      { id: 'c', text: 'Hình chữ nhật (state), mũi tên chuyển trạng thái, hình thoi (decision), làn bơi (lane).' },
      { id: 'd', text: 'Hình chữ nhật (entity), hình thoi (relationship), hình elip (attribute).' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Trong Key của Figure 12-1 (Lesson 05–06, Page 6): data flow là mũi tên, process là hình tròn, Data Store là hai đường thẳng song song (trên-dưới) và External Entity là hình chữ nhật.',
  },
  {
    id: 'swr-pdf-q-058',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l56',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Quan sát Figure 12-1 ("Partial level 0 DFD for the Chemical Tracking System" — Lesson 05–06, Page 6), thành phần "Chemical Stockroom Inventory" thuộc loại ký hiệu nào và tương tác trực tiếp với những Process nào?',
    imageUrl: '/images/swr-pdf/figure-12-1-dfd-level0.jpg',
    imageCaption: 'Figure 12-1: Partial level 0 DFD for the Chemical Tracking System (Lesson 05–06, Page 6)',
    options: [
      { id: 'a', text: 'Là Data Store; cấp dữ liệu cho Process 2 ("fulfill request from stockroom") & Process 4 ("generate reports"), và nhận cập nhật từ Process 5 ("update stockroom inventory").' },
      { id: 'b', text: 'Là External Entity; gửi đơn hàng cho Process 3 ("order a chemical from a vendor").' },
      { id: 'c', text: 'Là Process số 7 nối trực tiếp với Chemist và Buyer.' },
      { id: 'd', text: 'Là Data Flow mang nhãn "vendor order status".' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Trong Figure 12-1 (Page 6), "Chemical Stockroom Inventory" được vẽ bằng ký hiệu Data Store (2 nét song song), nối với Process 2 (chemical stockroom inventory), Process 5 (inventory update), và Process 4 (inventory status).',
  },
  {
    id: 'swr-pdf-q-059',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l56',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Điểm khác biệt quan trọng về thành phần giữa Context Diagram (Lesson 02) và Level 0 DFD (Lesson 05–06, Figure 12-1) là gì?',
    options: [
      { id: 'a', text: 'Context Diagram chỉ có đúng 1 hình tròn hệ thống và KHÔNG có Data Store; Level 0 DFD phân rã thành nhiều Process đánh số (1, 2, 3...) và hiển thị các Data Store bên trong.' },
      { id: 'b', text: 'Context Diagram hiển thị toàn bộ Data Store còn Level 0 DFD lược bỏ hết Data Store.' },
      { id: 'c', text: 'Level 0 DFD không còn External Entity nào bên ngoài.' },
      { id: 'd', text: 'Context Diagram chỉ dành cho thiết kế UI còn Level 0 DFD chỉ dành cho phần cứng.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'So sánh Lesson 02 (Page 4 & 9) với Lesson 05–06 (Page 6): Context Diagram giấu hoàn toàn tiến trình và kho dữ liệu nội bộ (chỉ 1 hình tròn System), trong khi Level 0 DFD mở bên trong ra thành các Processes (1..6) và các Data Stores (Vendor Catalog, Chemical Request, Chemical Stockroom Inventory).',
  },
  {
    id: 'swr-pdf-q-060',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l56',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Quan sát Figure 12-1 (Lesson 05–06, Page 6), 3 kho dữ liệu (Data Stores) xuất hiện trong Level 0 DFD của Chemical Tracking System là gì?',
    imageUrl: '/images/swr-pdf/figure-12-1-dfd-level0.jpg',
    imageCaption: 'Figure 12-1: Partial level 0 DFD for the Chemical Tracking System (Lesson 05–06, Page 6)',
    options: [
      { id: 'a', text: 'Vendor Catalog, Chemical Request và Chemical Stockroom Inventory.' },
      { id: 'b', text: 'Chemist, Buyer và Health and Safety Department.' },
      { id: 'c', text: 'Place a chemical request, Search vendor catalogs và Generate reports.' },
      { id: 'd', text: 'In Preparation, Accepted và Fulfilled.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Trên Figure 12-1 (Page 6), ba biểu tượng hai đường thẳng song song (Data Store) mang nhãn: `Vendor Catalog`, `Chemical Request` và `Chemical Stockroom Inventory`.',
  },
  {
    id: 'swr-pdf-q-061',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l56',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Trong Figure 12-1 (Lesson 05–06, Page 6), mũi tên dữ liệu đi ra từ Process "1. place a chemical request" được lưu vào Data Store nào, để rồi cấp tiếp cho Process 2 và Process 3?',
    imageUrl: '/images/swr-pdf/figure-12-1-dfd-level0.jpg',
    imageCaption: 'Figure 12-1: Partial level 0 DFD for the Chemical Tracking System (Lesson 05–06, Page 6)',
    options: [
      { id: 'a', text: 'Data Store "Chemical Request" (với luồng "chemical request").' },
      { id: 'b', text: 'Data Store "Vendor Catalog".' },
      { id: 'c', text: 'External Entity "Health and Safety Department".' },
      { id: 'd', text: 'Process "4. generate reports".' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo Figure 12-1 (Page 6): Chemist gửi `request for chemical` vào Process `1. place a chemical request`, process này ghi `chemical request` vào Data Store `Chemical Request`; sau đó Process 2 (`fulfill request from stockroom`) và Process 3 (`order a chemical from a vendor`) đọc `chemical request` từ kho đó.',
  },
  {
    id: 'swr-pdf-q-062',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l56',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Trong quy ước vẽ DFD ở Figure 12-1 (Lesson 05–06, Page 6), có dòng dữ liệu nào chạy trực tiếp từ External Entity "Chemist" sang thẳng Data Store "Chemical Request" mà không đi qua một Process hay không?',
    imageUrl: '/images/swr-pdf/figure-12-1-dfd-level0.jpg',
    imageCaption: 'Figure 12-1: Partial level 0 DFD for the Chemical Tracking System (Lesson 05–06, Page 6)',
    options: [
      { id: 'a', text: 'Không — mọi dữ liệu ra/vào Data Store trong DFD đều đi thông qua một Process (như Process 1 "place a chemical request" hoặc Process 6 "search vendor catalogs").' },
      { id: 'b', text: 'Có — External Entity nối thẳng trực tiếp vào Data Store để bỏ qua Process.' },
      { id: 'c', text: 'Có — tất cả External Entity đều nối trực tiếp với nhau bằng Data Store.' },
      { id: 'd', text: 'Không — vì Chemical Request là một External Entity.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Quan sát Figure 12-1 (Page 6): External Entity (Chemist, Buyer, Stockroom Staff, Health & Safety) luôn giao tiếp qua các hình tròn Process (1..6), chứ không đọc/ghi thẳng vào Data Store bỏ qua Process.',
  },

  // ===========================================================================
  // KNOWLEDGE - CHAPTERS 13 PDF (18 câu: swr-pdf-q-063 .. swr-pdf-q-080)
  // ===========================================================================
  {
    id: 'swr-pdf-q-063',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'multiple',
    prompt:
      'Theo "Data Modeling Review Process" trong Knowledge Chapter 13 PDF (Page 4), BA cần tự đặt ra 2 câu hỏi kiểm tra nào khi rà soát mô hình dữ liệu?',
    options: [
      { id: 'a', text: 'Các mối quan hệ (relationships) được thể hiện đã đúng và phù hợp hết chưa?' },
      { id: 'b', text: 'Có thực thể (entities) nào bị thiếu, hoặc có mối quan hệ khả dĩ nào giữa các thực thể mà mô hình chưa vẽ ra không?' },
      { id: 'c', text: 'Tốc độ phản hồi trang chủ có dưới 2 giây không?' },
      { id: 'd', text: 'Các Use Case có được đặt tên bắt đầu bằng danh từ số nhiều không?' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Knowledge Chapter 13 PDF (Page 4) nêu 3 câu hỏi rà soát Data Model: (1) Relationships có đúng và phù hợp không? (2) Có thực thể nào bị thiếu không? (3) Có mối quan hệ khả dĩ nào giữa các thực thể mà mô hình chưa thể hiện không?',
  },
  {
    id: 'swr-pdf-q-064',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Trong 3 mức Data Modeling ở Knowledge Chapter 13 PDF (Page 5), điểm khác biệt chính xác giữa Conceptual Data Model và Logical Data Model là gì?',
    options: [
      { id: 'a', text: 'Conceptual chỉ có Entity names và Entity relationships; Logical bổ sung thêm Attributes, Primary keys và Foreign keys.' },
      { id: 'b', text: 'Conceptual đã có sẵn Table names, Column names và Column data types; Logical chỉ có Entity names.' },
      { id: 'c', text: 'Logical có Column data types còn Physical thì không có Primary keys.' },
      { id: 'd', text: 'Conceptual và Logical hoàn toàn giống nhau, chỉ khác tên gọi.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo bảng ở Page 5 (Knowledge Chapter 13 PDF): Conceptual gồm Entity names & Entity relationships; Logical gồm Entity names, Entity relationships, Attributes, Primary keys, Foreign keys; Physical gồm Primary keys, Foreign keys, Table names, Column names, Column data types.',
  },
  {
    id: 'swr-pdf-q-065',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo lý thuyết 3 mức Data Modeling ở Page 5 (Knowledge Chapter 13 PDF), những thành phần nào chỉ xuất hiện ở mức Physical Data Model (không có ở Conceptual và Logical)?',
    options: [
      { id: 'a', text: 'Table names, Column names và Column data types.' },
      { id: 'b', text: 'Primary keys và Foreign keys.' },
      { id: 'c', text: 'Entity names và Entity relationships.' },
      { id: 'd', text: 'Attributes và Business rules.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Bảng so sánh ở Page 5 đánh dấu X vào cả Logical và Physical cho Primary/Foreign keys, nhưng chỉ riêng Physical mới có Table names, Column names và Column data types.',
  },
  {
    id: 'swr-pdf-q-066',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo lý thuyết 3 mức Data Modeling ở Page 5 (Knowledge Chapter 13 PDF), hai thành phần nào xuất hiện ở CẢ Logical Data Model VÀ Physical Data Model?',
    options: [
      { id: 'a', text: 'Primary keys và Foreign keys.' },
      { id: 'b', text: 'Entity names và Attributes.' },
      { id: 'c', text: 'Table names và Column data types.' },
      { id: 'd', text: 'Entity relationships và Column names.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo bảng Page 5 (Knowledge Chapter 13 PDF): Primary keys và Foreign keys đều được đánh X ở hai cột Logical và Physical (còn Entity names/relationships ở Conceptual & Logical; Table/Column names & data types chỉ ở Physical).',
  },
  {
    id: 'swr-pdf-q-067',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo Knowledge Chapter 13 PDF (Page 6), khi xây dựng Entity-Relationship Diagram (ERD) theo chuẩn Chen, các hình chữ nhật (rectangles) và hình thoi (diamonds) biểu diễn điều gì?',
    options: [
      { id: 'a', text: 'Hình chữ nhật là Entities (đặt tên danh từ số ít); hình thoi là Relationships (liên kết logic giữa các cặp thực thể).' },
      { id: 'b', text: 'Hình chữ nhật là Attributes; hình thoi là Primary keys.' },
      { id: 'c', text: 'Hình chữ nhật là External Entities; hình thoi là Decisions rẽ nhánh.' },
      { id: 'd', text: 'Hình chữ nhật là States; hình thoi là Data Stores.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Knowledge Chapter 13 PDF (Page 6) nêu rõ: Entities đặt tên bằng danh từ số ít (singular nouns) trong hình chữ nhật, mỗi thực thể có các attributes mô tả, và hình thoi biểu diễn relationships liên kết logic giữa cặp thực thể.',
  },
  {
    id: 'swr-pdf-q-068',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Knowledge Chapter 13 PDF (Page 7 — "ERD Notations"), cùng một quan hệ một–nhiều ("Chemical Stockroom Inventory" chứa nhiều "Chemical Container") được biểu diễn khác nhau thế nào giữa Chen Notation và Crow’s Foot Notation?',
    options: [
      { id: 'a', text: 'Chen dùng hình thoi "storing" cùng số "1" và "M" trên đường nối; Crow’s Foot dùng đường thẳng gắn nhãn động từ "stores" với vạch "|" bên phía 1 và ký hiệu vòng tròn-chân chim "o<" bên phía nhiều.' },
      { id: 'b', text: 'Chen dùng ký hiệu chân chim "o<" còn Crow’s Foot dùng hình thoi.' },
      { id: 'c', text: 'Crow’s Foot không thể biểu diễn được quan hệ 1–nhiều.' },
      { id: 'd', text: 'Chen Notation chỉ dùng ở mức Physical còn Crow’s Foot chỉ dùng ở mức Conceptual.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Page 7 (Knowledge Chapter 13 PDF) đặt hai ký pháp cạnh nhau: Chen vẽ hình chữ nhật — `1` — hình thoi `storing` — `M` — hình chữ nhật; Crow’s Foot vẽ hai hình chữ nhật nối bằng đường thẳng nhãn `stores` với ký hiệu vạch đơn ở phía `Inventory` và `o<` (zero or many) ở phía `Chemical Container`.',
  },
  {
    id: 'swr-pdf-q-069',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Knowledge Chapter 13 PDF (Page 8 — "Is it important which notation selected?"), điều gì quan trọng nhất khi đội dự án lựa chọn ký pháp vẽ mô hình dữ liệu (Chen hay Crow’s Foot)?',
    options: [
      { id: 'a', text: 'Mọi người tham gia tạo mô hình phải tuân thủ CÙNG một quy ước ký pháp nhất quán, và mọi người sử dụng/rà soát đều hiểu cách đọc ký pháp đó.' },
      { id: 'b', text: 'Bắt buộc mọi dự án phần mềm trên thế giới đều phải dùng Chen Notation.' },
      { id: 'c', text: 'Mỗi thành viên nên tự chọn ký pháp mình thích để tăng tốc độ vẽ.' },
      { id: 'd', text: 'Phải đổi ký pháp khác nhau cho mỗi chương của tài liệu SRS.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Knowledge Chapter 13 PDF (Page 8) khẳng định việc chọn Chen hay Crow’s Foot không quan trọng bằng việc cả nhóm thống nhất cùng một convention và tất cả người dùng/reviewer đều biết cách diễn giải chúng.',
  },
  {
    id: 'swr-pdf-q-070',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Quan sát mô hình ERD "From Context to Data Model" (Knowledge Chapter 13 PDF, Page 3), mối quan hệ giữa "Chemical Request" và "Chemical" có bản số (cardinality) là gì, và "Chemical Container" nối tới "Container History" với bản số nào?',
    imageUrl: '/images/swr-pdf/erd-cts.jpg',
    imageCaption: 'ERD — From Context to Data Model: Chemical Tracking System (Knowledge Chapter 13, Page 3)',
    options: [
      { id: 'a', text: 'Chemical Request — Chemical là M:M (many-to-many); Chemical Container — Container History là 1:1 (one-to-one).' },
      { id: 'b', text: 'Chemical Request — Chemical là 1:1; Chemical Container — Container History là M:M.' },
      { id: 'c', text: 'Requester — Chemical Request là M:1 (một Request có nhiều Requester).' },
      { id: 'd', text: 'Chemical — Vendor Catalog là 1:1.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo ERD ở Page 3 (Knowledge Chapter 13 PDF): `Chemical Request` --M-- `listing` --M-- `Chemical`; còn `Chemical Container` --1-- `tracking` --1-- `Container History` (và `Requester` 1--M `Chemical Request`).',
  },
  {
    id: 'swr-pdf-q-071',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Tiếp tục quan sát ERD ở Page 3 (Knowledge Chapter 13 PDF — "From Context to Data Model"), quan hệ nào sau đây mô tả ĐÚNG bản số giữa các cặp thực thể?',
    imageUrl: '/images/swr-pdf/erd-cts.jpg',
    imageCaption: 'ERD — From Context to Data Model: Chemical Tracking System (Knowledge Chapter 13, Page 3)',
    options: [
      { id: 'a', text: 'Chemical Stockroom Inventory (1) — storing — (M) Chemical Container; và Requester (1) — placing — (M) Chemical Request.' },
      { id: 'b', text: 'Chemical Stockroom Inventory (M) — storing — (1) Chemical Container.' },
      { id: 'c', text: 'Chemical (1) — listing — (1) Vendor Catalog.' },
      { id: 'd', text: 'Chemical Request (M) — fulfilling — (1) Chemical Container.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo hình ERD bên phải ở Page 3 (Knowledge Chapter 13 PDF): `Chemical Stockroom Inventory` (1) -- `storing` -- (M) `Chemical Container`; `Requester` (1) -- `placing` -- (M) `Chemical Request`; `Chemical Request` (1) -- `fulfilling` -- (M) `Chemical Container`; `Chemical` (M) -- `listing` -- (M) `Vendor Catalog`.',
  },
  {
    id: 'swr-pdf-q-072',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Quan sát Figure 13-5 ("Sample CRUD matrix for the Chemical Tracking System" — Knowledge Chapter 13 PDF, Page 10), nhìn vào cột thực thể "Vendor Catalog" chỉ có duy nhất chữ "R" ở hàng "Place Order" và "Change Order". Ma trận này giúp BA phát hiện điều gì?',
    imageUrl: '/images/swr-pdf/figure-13-5-crud.jpg',
    imageCaption: 'Figure 13-5: Sample CRUD matrix for the Chemical Tracking System (Knowledge Chapter 13, Page 10)',
    options: [
      { id: 'a', text: 'Thiếu các Use Case hoặc yêu cầu chức năng để Create, Update, Delete dữ liệu "Vendor Catalog" (hệ thống mới chỉ có đọc R mà chưa thấy ai tạo/cập nhật danh mục nhà cung cấp).' },
      { id: 'b', text: 'Use Case "Place Order" đang bị dư thừa chức năng xóa dữ liệu.' },
      { id: 'c', text: 'Thực thể "Vendor Catalog" không nên lưu trong cơ sở dữ liệu.' },
      { id: 'd', text: 'Cần xóa bỏ Use Case "Report on Orders" vì không đụng vào Vendor Catalog.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Trong Figure 13-5 (Page 10), cột `Vendor Catalog` chỉ xuất hiện `R` (Read) ở Place Order và Change Order mà vắng bóng hoàn toàn `C`, `U`, `D`. Đây chính là cách CRUD Matrix phát hiện missing requirements (chưa có chức năng nhập/cập nhật Vendor Catalog hoặc chỉ đọc từ hệ thống ngoài).',
  },
  {
    id: 'swr-pdf-q-073',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Tiếp tục đọc Figure 13-5 (Knowledge Chapter 13 PDF, Page 10), hai trục hàng và cột của bảng CRUD Matrix đối chiếu cặp thành phần nào với nhau, và trong bảng mẫu, Use Case "Edit Requesters" thực hiện những thao tác nào lên Entity "Requester"?',
    imageUrl: '/images/swr-pdf/figure-13-5-crud.jpg',
    imageCaption: 'Figure 13-5: Sample CRUD matrix for the Chemical Tracking System (Knowledge Chapter 13, Page 10)',
    options: [
      { id: 'a', text: 'Hàng là Use Case, cột là Entity; "Edit Requesters" thực hiện C, U (Create, Update) lên "Requester" (chưa thấy thao tác D - Delete).' },
      { id: 'b', text: 'Hàng là Actor, cột là Report; "Edit Requesters" thực hiện R, D.' },
      { id: 'c', text: 'Hàng là Business Rule, cột là State; "Edit Requesters" thực hiện C, R, U, D.' },
      { id: 'd', text: 'Hàng là Entity, cột là Table; "Edit Requesters" chỉ thực hiện R.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Figure 13-5 (Page 10) đặt Use Case ở hàng (Place Order, Change Order, Manage Chemical Inventory, Report on Orders, Edit Requesters) và Entity ở cột (Order, Chemical, Requester, Vendor Catalog). Ô giao giữa `Edit Requesters` và `Requester` ghi `C, U`.',
  },
  {
    id: 'swr-pdf-q-074',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Trong Figure 13-5 (Knowledge Chapter 13 PDF, Page 10), hàng Use Case "Report on Orders" tương tác với những Entity nào và bằng thao tác gì?',
    imageUrl: '/images/swr-pdf/figure-13-5-crud.jpg',
    imageCaption: 'Figure 13-5: Sample CRUD matrix for the Chemical Tracking System (Knowledge Chapter 13, Page 10)',
    options: [
      { id: 'a', text: 'Chỉ thực hiện thao tác R (Read) trên 3 Entity: Order, Chemical và Requester.' },
      { id: 'b', text: 'Thực hiện C, U, D trên Order và Vendor Catalog.' },
      { id: 'c', text: 'Chỉ đọc R trên Vendor Catalog.' },
      { id: 'd', text: 'Thực hiện C, U trên Requester.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Đọc hàng thứ 4 `Report on Orders` trong Figure 13-5 (Page 10): có chữ `R` tại các cột `Order`, `Chemical` và `Requester` (cột `Vendor Catalog` để trống).',
  },
  {
    id: 'swr-pdf-q-075',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Trong Knowledge Chapter 13 PDF (Page 10), bảng CRUD Matrix được định nghĩa ngắn gọn là kỹ thuật gì?',
    options: [
      { id: 'a', text: 'Một kỹ thuật phân tích dữ liệu chặt chẽ dùng để phát hiện các yêu cầu bị thiếu ("A rigorous data analysis technique for detecting missing requirements").' },
      { id: 'b', text: 'Một công cụ thiết kế giao diện đồ họa màu sắc.' },
      { id: 'c', text: 'Một ngôn ngữ định lượng chất lượng hiệu năng như Planguage.' },
      { id: 'd', text: 'Một biểu đồ phân chia vai trò giữa các phòng ban.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Page 10 (Knowledge Chapter 13 PDF) định nghĩa nguyên văn: "A CRUD matrix — A rigorous data analysis technique for detecting missing requirements."',
  },
  {
    id: 'swr-pdf-q-076',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'multiple',
    prompt:
      'Khi khai thác yêu cầu báo cáo ("Eliciting reporting requirements" — Knowledge Chapter 13 PDF, Page 12), BA nên đặt 2 câu hỏi thực tế nào để tránh làm thừa hoặc làm sai?',
    options: [
      { id: 'a', text: 'Hiện tại người dùng đang sử dụng những báo cáo nào, và báo cáo cũ nào cần chỉnh sửa?' },
      { id: 'b', text: 'Có báo cáo nào hiện vẫn đang được hệ thống tạo ra nhưng thực tế không ai dùng tới không?' },
      { id: 'c', text: 'Lập trình viên thích dùng thư viện biểu đồ JavaScript nào để vẽ?' },
      { id: 'd', text: 'Khách hàng muốn đặt mật khẩu Wi-Fi phòng họp là gì?' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Page 12 (Knowledge Chapter 13 PDF) liệt kê 3 câu hỏi khai thác báo cáo: (1) What reports do you currently use? (2) Which existing reports need to be modified? (3) Which reports are currently generated but are not used?',
  },
  {
    id: 'swr-pdf-q-077',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'multiple',
    prompt:
      'Theo trang 13 của Knowledge Chapter 13 PDF ("To explore for each customer-requested report"), chọn 2 khía cạnh BA cần tìm hiểu sâu cho từng báo cáo khách hàng yêu cầu:',
    options: [
      { id: 'a', text: 'Mục đích nghiệp vụ (purpose/business intent) và cách tạo (thủ công hay tự động định kỳ).' },
      { id: 'b', text: 'Báo cáo được xử lý/lưu trữ thế nào sau khi tạo (disposition) và có giới hạn bảo mật/riêng tư/phân quyền truy cập nào không.' },
      { id: 'c', text: 'Số lượng dòng code của thuật toán sắp xếp dữ liệu.' },
      { id: 'd', text: 'Khách hàng có biết viết câu truy vấn SQL hay không.' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Page 13 (Knowledge Chapter 13 PDF) liệt kê 4 điểm cần làm rõ cho mỗi báo cáo: (1) purpose/business intent; (2) generated manually or automatically; (3) disposition after generated; (4) security, privacy, or management access restrictions.',
  },
  {
    id: 'swr-pdf-q-078',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Trong 4 điểm lưu ý khi đặc tả báo cáo ("Report specification considerations" — Knowledge Chapter 13 PDF, Page 14), nhóm 4 yếu tố nào là ĐÚNG?',
    options: [
      { id: 'a', text: 'Find the data; Anticipate growth (Users/data); Look for similarities; Distinguish static and dynamic reports.' },
      { id: 'b', text: 'Write SQL triggers; Design UI CSS; Buy hardware servers; Skip security checks.' },
      { id: 'c', text: 'Merge all entities; Avoid Data Dictionary; Use only paper reports; Ignore old reports.' },
      { id: 'd', text: 'Choose Chen notation; Draw Use Case actors; Apply MoSCoW; Write Throwaway code.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Page 14 (Knowledge Chapter 13 PDF) nêu đúng 4 mục: Find the data, Anticipate growth Users, Look for similarities, và Distinguish static and dynamic reports.',
  },
  {
    id: 'swr-pdf-q-079',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Khách hàng yêu cầu 2 loại báo cáo: (1) Báo cáo chốt số liệu doanh thu tháng cố định không cho lọc lại; (2) Màn hình báo cáo cho phép người dùng tự chọn khoảng ngày, lọc theo chi nhánh và khoan sâu (drill-down) theo thời gian thực. Theo Page 14 (Knowledge Chapter 13 PDF), BA cần phân biệt rõ điều gì khi đặc tả?',
    options: [
      { id: 'a', text: 'Phân biệt báo cáo tĩnh (Static report) và báo cáo động (Dynamic report).' },
      { id: 'b', text: 'Phân biệt Conceptual Data Model và Physical Data Model.' },
      { id: 'c', text: 'Phân biệt Chen Notation và Crow’s Foot Notation.' },
      { id: 'd', text: 'Phân biệt Horizontal Prototype và Throwaway Prototype.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Trang 14 (Knowledge Chapter 13 PDF) nhấn mạnh lưu ý "Distinguish static and dynamic reports" để thiết kế đúng mức tương tác, truy vấn dữ liệu và hiệu năng.',
  },
  {
    id: 'swr-pdf-q-080',
    subjectId: 'swr-pdf',
    chapterId: 'swr-pdf-l6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Một nhân viên kế toán yêu cầu làm 5 báo cáo khác nhau cho 5 chi nhánh, nhưng khi kiểm tra cấu trúc cột và bộ lọc thì cả 5 gần như giống hệt nhau, chỉ khác tham số chi nhánh. Theo tiêu chí Page 14 (Knowledge Chapter 13 PDF), BA nên áp dụng lưu ý nào?',
    options: [
      { id: 'a', text: '"Look for similarities" — tìm điểm tương đồng để gộp thành 1 mẫu báo cáo tham số hóa theo chi nhánh thay vì xây 5 báo cáo riêng lẻ.' },
      { id: 'b', text: '"Anticipate growth Users" — tách thành 5 cơ sở dữ liệu độc lập.' },
      { id: 'c', text: 'Viết 5 SRS riêng biệt không liên kết với nhau.' },
      { id: 'd', text: 'Bỏ qua yêu cầu của 4 chi nhánh còn lại.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Tiêu chí "Look for similarities" (Page 14, Knowledge Chapter 13 PDF) khuyên BA tìm các báo cáo giống nhau về nội dung/cấu trúc để hợp nhất thành một báo cáo linh hoạt có bộ lọc tham số, giảm chi phí xây dựng và bảo trì.',
  },
];

