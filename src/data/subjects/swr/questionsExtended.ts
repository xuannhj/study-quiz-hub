import type { Question } from '../../../types/study';

export const swrExtendedQuestions: Question[] = [
  // ===========================================================================
  // CHƯƠNG 1 (3 câu: swr-q-116 .. swr-q-118)
  // ===========================================================================
  {
    id: 'swr-q-116',
    subjectId: 'swr',
    chapterId: 'swr-ch1',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo Slide 5 Chương 1, Brian Lawrence (1997) định nghĩa ngắn gọn "Requirement" là gì, và Sommerville & Sawyer (1997) bổ sung khía cạnh nào?',
    options: [
      { id: 'a', text: 'Lawrence: "bất cứ điều gì dẫn dắt các lựa chọn thiết kế"; Sommerville & Sawyer: đặc tả hệ thống nên làm gì, thuộc tính hệ thống hoặc ràng buộc lên quá trình phát triển.' },
      { id: 'b', text: 'Lawrence: "bản vẽ lược đồ cơ sở dữ liệu vật lý"; Sommerville & Sawyer: kịch bản kiểm thử đơn vị.' },
      { id: 'c', text: 'Lawrence: "ngân sách và lịch trình dự án"; Sommerville & Sawyer: danh sách nhân sự lập trình.' },
      { id: 'd', text: 'Cả hai tác giả đều định nghĩa Requirement chỉ bao gồm giao diện đồ họa người dùng.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 5 Chương 1 trích dẫn Brian Lawrence (1997): "anything that drives design choices", và Ian Sommerville & Pete Sawyer (1997): đặc tả những gì cần triển khai (hành vi, thuộc tính hoặc ràng buộc lên quá trình phát triển).',
  },
  {
    id: 'swr-q-117',
    subjectId: 'swr',
    chapterId: 'swr-ch1',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Slide 9 Chương 1, phát biểu nào phân biệt ĐÚNG giữa Product Requirements và Project Requirements?',
    options: [
      { id: 'a', text: 'Product requirements mô tả các đặc tính của phần mềm sẽ xây dựng; Project requirements là các kỳ vọng và sản phẩm bàn giao ngoài phần mềm nhưng cần thiết để hoàn thành dự án (VD: đào tạo, chứng chỉ, cơ sở hạ tầng).' },
      { id: 'b', text: 'Product requirements là chi phí và nhân sự; Project requirements là tốc độ phản hồi API.' },
      { id: 'c', text: 'Product requirements chỉ dành cho Agile; Project requirements chỉ dành cho Waterfall.' },
      { id: 'd', text: 'Project requirements là tập con nằm bên trong Functional requirements.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 9 Chương 1 phân biệt rõ: Product requirements là các đặc tính của hệ thống phần mềm cần xây dựng, còn Project requirements là những kỳ vọng/deliverables khác không thuộc mã phần mềm nhưng cần thiết cho sự thành công chung của dự án.',
  },
  {
    id: 'swr-q-118',
    subjectId: 'swr',
    chapterId: 'swr-ch1',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'multiple',
    prompt:
      'Theo Slide 11 Chương 1 ("When bad requirements happen to good people"), chọn 2 nguyên nhân phổ biến gây thất bại yêu cầu (ngoài Gold plating):',
    options: [
      { id: 'a', text: 'Insufficient user involvement (thiếu sự tham gia của người dùng) và Overlooked stakeholders (bỏ sót bên liên quan).' },
      { id: 'b', text: 'Creeping user requirements (yêu cầu phình to không kiểm soát) và Ambiguous requirements (yêu cầu mơ hồ).' },
      { id: 'c', text: 'Viết đặc tả bằng tiếng Anh chuẩn với từ khóa "shall".' },
      { id: 'd', text: 'Thực hiện kiểm tra chéo tài liệu (Inspection) từ sớm.' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Slide 11 Chương 1 liệt kê 6 vấn đề kinh điển: Insufficient user involvement, Inaccurate planning, Creeping user requirements, Ambiguous requirements, Gold plating và Overlooked stakeholders.',
  },

  // ===========================================================================
  // CHƯƠNG 2 (3 câu: swr-q-119 .. swr-q-121)
  // ===========================================================================
  {
    id: 'swr-q-119',
    subjectId: 'swr',
    chapterId: 'swr-ch2',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Trong "Requirements Bill of Rights for Software Customers" (Chương 2, Slide 6), quyền lợi nào cho phép khách hàng đẩy nhanh tiến độ phát triển?',
    options: [
      { id: 'a', text: 'Được nghe về các cách điều chỉnh yêu cầu để đẩy nhanh quá trình phát triển thông qua tái sử dụng (reuse).' },
      { id: 'b', text: 'Được quyền tự ý sửa mã nguồn trên server production.' },
      { id: 'c', text: 'Được quyền yêu cầu bỏ qua giai đoạn kiểm thử chấp nhận.' },
      { id: 'd', text: 'Được quyền từ chối cung cấp tiêu chí nghiệm thu.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 6 Chương 2 liệt kê 10 quyền của khách hàng, trong đó có quyền: "Hear about ways to adjust requirements to accelerate development through reuse" và quyền nghe các ý tưởng, phương án thay thế cho yêu cầu/giải pháp.',
  },
  {
    id: 'swr-q-120',
    subjectId: 'swr',
    chapterId: 'swr-ch2',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Khi nhiều nhóm người dùng bất đồng ý kiến về một yêu cầu mới (Chương 2, Slide 8 — "Identifying decision makers"), BA và dự án cần xác lập sẵn 2 yếu tố nào ngay từ đầu để tránh bế tắc?',
    options: [
      { id: 'a', text: 'Decision leader (ai là người có quyền chốt quyết định cuối cùng) và Decision rule (quy tắc ra quyết định như đồng thuận, đa số hay người lãnh đạo quyết).' },
      { id: 'b', text: 'Bug tracker và Source code repository.' },
      { id: 'c', text: 'Ngôn ngữ lập trình và hệ quản trị CSDL.' },
      { id: 'd', text: 'Hợp đồng bảo trì sau khi hết hạn bảo hành.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 8 Chương 2 nhấn mạnh hai yếu tố then chốt để giải quyết mâu thuẫn yêu cầu: xác định đúng Decision leader và thống nhất Decision rule trước khi xung đột xảy ra.',
  },
  {
    id: 'swr-q-121',
    subjectId: 'swr',
    chapterId: 'swr-ch2',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Slide 9 Chương 2 ("Reaching agreement on requirements"), trước khi chốt Requirements Baseline, nhóm Developers và nhóm Management lần lượt cần đồng thuận điều gì?',
    options: [
      { id: 'a', text: 'Developers đồng thuận rằng họ hiểu rõ yêu cầu và thấy khả thi; Management đồng thuận rằng bộ yêu cầu sẽ đạt được mục tiêu kinh doanh.' },
      { id: 'b', text: 'Developers đồng thuận về màu sắc thương hiệu; Management đồng thuận về cấu trúc bảng SQL.' },
      { id: 'c', text: 'Developers tự quyết định mục tiêu doanh thu; Management tự viết kịch bản kiểm thử.' },
      { id: 'd', text: 'Cả hai bên đều không cần xác nhận nếu khách hàng đã ký hợp đồng.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 9 Chương 2 nêu 4 phía đồng thuận để chốt baseline: Customers (đáp ứng nhu cầu), Developers (hiểu và thấy khả thi), Testers (kiểm chứng được — verifiable), Management (đạt mục tiêu kinh doanh).',
  },

  // ===========================================================================
  // CHƯƠNG 3 (3 câu: swr-q-122 .. swr-q-124)
  // ===========================================================================
  {
    id: 'swr-q-122',
    subjectId: 'swr',
    chapterId: 'swr-ch3',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'multiple',
    prompt:
      'Theo khung Good Practices ở Chương 3 (Slide 8), chọn 2 hoạt động thuộc nhóm REQUIREMENTS ANALYSIS (Phân tích yêu cầu):',
    options: [
      { id: 'a', text: 'Tạo Data dictionary và phân tích giao tiếp với thế giới bên ngoài (Analyze interfaces).' },
      { id: 'b', text: 'Phân bổ yêu cầu cho các phân hệ (Allocate requirements to subsystems) và đánh giá tính khả thi.' },
      { id: 'c', text: 'Tổ chức Focus groups với người dùng điển hình.' },
      { id: 'd', text: 'Thiết lập quy trình kiểm soát thay đổi yêu cầu (Change control process).' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Slide 8 Chương 3 xếp vào nhóm Analysis: Model application environment, Create UI/technical prototypes, Analyze feasibility, Prioritize, Create data dictionary, Model requirements, Analyze interfaces, Allocate requirements to subsystems. Focus groups thuộc Elicitation (Slide 7) còn Change control thuộc Management (Slide 11).',
  },
  {
    id: 'swr-q-123',
    subjectId: 'swr',
    chapterId: 'swr-ch3',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Trong phân loại Good Practices của Chương 3 (Slides 12–13), các thực hành "Tạo bảng thuật ngữ (Create a glossary)" và "Thương lượng lại cam kết dự án khi yêu cầu thay đổi (Renegotiate project commitments)" lần lượt thuộc 2 nhóm nào?',
    options: [
      { id: 'a', text: 'Create a glossary thuộc nhóm Knowledge; Renegotiate project commitments thuộc nhóm Project Management.' },
      { id: 'b', text: 'Create a glossary thuộc nhóm Validation; Renegotiate project commitments thuộc nhóm Specification.' },
      { id: 'c', text: 'Cả hai đều thuộc nhóm Requirements Elicitation.' },
      { id: 'd', text: 'Cả hai đều thuộc nhóm Requirements Analysis.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo Slide 12 Chương 3, nhóm Knowledge gồm Train BAs, Educate stakeholders/developers, Define RE process và Create a glossary. Theo Slide 13, nhóm Project Management gồm Select SDLC, Estimate RE effort, Renegotiate commitments, Manage RE risks, Track effort spent...',
  },
  {
    id: 'swr-q-124',
    subjectId: 'swr',
    chapterId: 'swr-ch3',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo Slide 10 Chương 3, 4 thực hành cốt lõi thuộc nhóm REQUIREMENTS VALIDATION (Kiểm chứng yêu cầu) là gì?',
    options: [
      { id: 'a', text: 'Review the requirements, Test the requirements, Define acceptance criteria, Simulate the requirements.' },
      { id: 'b', text: 'Hold elicitation interviews, Distribute questionnaires, Observe users, Document analysis.' },
      { id: 'c', text: 'Adopt SRS templates, Identify requirement origins, Uniquely label each requirement, Record business rules.' },
      { id: 'd', text: 'Establish baselines, Maintain traceability matrix, Perform impact analysis, Track status.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 10 Chương 3 liệt kê chính xác 4 hoạt động thuộc Requirements Validation: Review, Test, Define acceptance criteria và Simulate the requirements.',
  },

  // ===========================================================================
  // CHƯƠNG 4 (3 câu: swr-q-125 .. swr-q-127)
  // ===========================================================================
  {
    id: 'swr-q-125',
    subjectId: 'swr',
    chapterId: 'swr-ch4',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Slide 6 Chương 4 ("Essential analyst skills"), kỹ năng nào giúp Business Analyst phản ứng nhanh nhạy, đặt câu hỏi nối tiếp kịp thời ngay trong buổi phỏng vấn hoặc workshop trực tiếp?',
    options: [
      { id: 'a', text: 'Thinking on your feet (tư duy ứng biến nhanh) kết hợp Listening skills và Interviewing/questioning skills.' },
      { id: 'b', text: 'Kỹ năng lập trình hợp ngữ cấp thấp.' },
      { id: 'c', text: 'Kỹ năng quản trị phần cứng mạng trung tâm dữ liệu.' },
      { id: 'd', text: 'Kỹ năng tránh giao tiếp trực tiếp để giảm xung đột.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 6 Chương 4 liệt kê 14 kỹ năng thiết yếu của BA gồm: Listening, Interviewing and questioning, Thinking on your feet, Analytical, Systems thinking, Learning, Facilitation, Leadership, Observational, Communication, Organizational, Modeling, Interpersonal, Creativity.',
  },
  {
    id: 'swr-q-126',
    subjectId: 'swr',
    chapterId: 'swr-ch4',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Slide 5 Chương 4 ("The business analyst’s tasks"), hoạt động nào KHÔNG thuộc danh sách nhiệm vụ của Business Analyst?',
    options: [
      { id: 'a', text: 'Trực tiếp viết mã nguồn phần mềm (coding) và triển khai hạ tầng mạng sản xuất.' },
      { id: 'b', text: 'Plan the requirements approach và Identify project stakeholders and user classes.' },
      { id: 'c', text: 'Lead requirements validation và Facilitate requirements prioritization.' },
      { id: 'd', text: 'Define business requirements, Elicit, Analyze, Document, Communicate và Manage requirements.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 5 Chương 4 liệt kê 10 nhiệm vụ của BA: Define business requirements, Plan requirements approach, Identify stakeholders/user classes, Elicit, Analyze, Document, Communicate, Lead validation, Facilitate prioritization, Manage requirements — lập trình sản phẩm không thuộc nhiệm vụ của BA.',
  },
  {
    id: 'swr-q-127',
    subjectId: 'swr',
    chapterId: 'swr-ch4',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Một Business Analyst xuất thân từ "Subject Matter Expert (SME)" hoặc "Former user" bước vào làm BA cho dự án mới. Theo Slide 7–8 Chương 4, lợi thế lớn nhất của người có hiểu biết sâu về miền nghiệp vụ này là gì?',
    options: [
      { id: 'a', text: 'Dễ phát hiện các giả định ngầm (unstated assumptions) và yêu cầu ngụ ý (implicit requirements), đồng thời đề xuất cách cải tiến quy trình nghiệp vụ mà stakeholder khác chưa nghĩ tới.' },
      { id: 'b', text: 'Không cần phải trao đổi với bất kỳ nhóm người dùng nào khác nữa.' },
      { id: 'c', text: 'Không cần học thêm các kỹ thuật mô hình hóa hay quy trình kỹ thuật yêu cầu.' },
      { id: 'd', text: 'Có thể tự ý loại bỏ mọi yêu cầu phi chức năng khỏi tài liệu SRS.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 7 Chương 4 chỉ rõ BA am hiểu tổ chức và business domain thường phát hiện được unstated assumptions & implicit requirements, giảm hiểu lầm và gợi ý cải tiến quy trình nghiệp vụ có giá trị.',
  },

  // ===========================================================================
  // CHƯƠNG 5 (3 câu: swr-q-128 .. swr-q-130)
  // ===========================================================================
  {
    id: 'swr-q-128',
    subjectId: 'swr',
    chapterId: 'swr-ch5',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Ngoài Context Diagram, 3 kỹ thuật biểu diễn phạm vi (Scope representation techniques) nào khác được liệt kê trong Chương 5 (Slides 3 & 6)?',
    options: [
      { id: 'a', text: 'Ecosystem map, Feature tree và Event list.' },
      { id: 'b', text: 'CRUD matrix, Data dictionary và Planguage.' },
      { id: 'c', text: 'MoSCoW, $100 Allocation và Pairwise comparison.' },
      { id: 'd', text: 'Formal Inspection, Walkthrough và Passaround.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slides 3 & 6 Chương 5 liệt kê 4 Scope representation techniques: Context diagram, Ecosystem map, Feature tree và Event list.',
  },
  {
    id: 'swr-q-129',
    subjectId: 'swr',
    chapterId: 'swr-ch5',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Hai phòng ban trong công ty đưa ra các Business Requirements trái ngược nhau khi xây dựng tài liệu Vision and Scope (Chương 5, Slides 4 & 7). BA nên ưu tiên làm gì để xử lý mâu thuẫn phạm vi?',
    options: [
      { id: 'a', text: 'Đối chiếu với mục tiêu kinh doanh cốt lõi (Business objectives), đánh giá tác động thay đổi phạm vi và làm việc với Decision leader để giải quyết xung đột.' },
      { id: 'b', text: 'Đưa cả hai yêu cầu mâu thuẫn vào hệ thống rồi để lập trình viên tự chọn cái dễ code hơn.' },
      { id: 'c', text: 'Bỏ hẳn tài liệu Vision and Scope để tránh tranh cãi.' },
      { id: 'd', text: 'Giữ yêu cầu của phòng ban gửi email đến sớm hơn.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 4 & 7 Chương 5 đề cập "Conflicting business requirements" và hướng giải quyết "Using business objectives to make scoping decisions" cùng "Assessing the impact of scope changes".',
  },
  {
    id: 'swr-q-130',
    subjectId: 'swr',
    chapterId: 'swr-ch5',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Trên dự án Agile (Chương 5, Slide 8), việc xác lập Vision and Scope khác biệt chính ở điểm nào so với dự án truyền thống?',
    options: [
      { id: 'a', text: 'Vẫn cần Product Vision & định hướng ranh giới sản phẩm ngắn gọn, nhưng phạm vi chi tiết phát triển linh hoạt qua Product Backlog / Roadmap theo từng release/iteration thay vì đóng băng toàn bộ từ đầu.' },
      { id: 'b', text: 'Dự án Agile tuyệt đối cấm viết Product Vision hoặc mục tiêu kinh doanh.' },
      { id: 'c', text: 'Dự án Agile phải viết tài liệu Vision and Scope dài hàng trăm trang trước Sprint 1.' },
      { id: 'd', text: 'Agile không cần quan tâm đến Business Objectives.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Chương 5 nhấn mạnh ngay cả Agile vẫn cần Product Vision và phạm vi định hướng (Product Roadmap/Backlog), nhưng phạm vi tính năng chi tiết tiến hóa linh hoạt qua các vòng lặp chứ không khóa cứng toàn bộ upfront.',
  },

  // ===========================================================================
  // CHƯƠNG 6 (3 câu: swr-q-131 .. swr-q-133)
  // ===========================================================================
  {
    id: 'swr-q-131',
    subjectId: 'swr',
    chapterId: 'swr-ch6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Chương 6 (Slides 10–12), điểm khác biệt chính giữa "Product Champion" và "Product Owner" (trong Agile) là gì?',
    options: [
      { id: 'a', text: 'Mỗi User Class có thể có một Product Champion đại diện tiếng nói cho nhóm người dùng đó; còn Product Owner (Agile) là một vai trò duy nhất sở hữu Product Backlog, ưu tiên giá trị và ra quyết định cho cả sản phẩm.' },
      { id: 'b', text: 'Product Champion là lập trình viên viết code; Product Owner là Tester.' },
      { id: 'c', text: 'Product Owner chỉ dùng trong Waterfall; Product Champion chỉ dùng trong Scrum.' },
      { id: 'd', text: 'Hai khái niệm giống nhau 100% và không bao giờ cùng tồn tại.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 10–12 Chương 6 phân biệt rõ: có thể có nhiều Product Champions (mỗi User Class một người đại diện cung cấp yêu cầu chi tiết), trong khi Product Owner ở Agile là đầu mối chịu trách nhiệm quản lý, xếp ưu tiên và chốt Product Backlog cho đội phát triển.',
  },
  {
    id: 'swr-q-132',
    subjectId: 'swr',
    chapterId: 'swr-ch6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Một công ty phát triển phần mềm kế toán bán đại trà ra thị trường cho hàng nghìn doanh nghiệp bên ngoài nên không thể dễ dàng kéo nhân viên trong công ty mình ra làm người dùng cuối thực. Theo Chương 6 (Slide 10), giải pháp đại diện người dùng nào phù hợp?',
    options: [
      { id: 'a', text: 'Mời External Product Champions (đại diện người dùng từ khách hàng thực tế/beta bên ngoài).' },
      { id: 'b', text: 'Bảo đội lập trình viên tự tưởng tượng nhu cầu của kế toán viên.' },
      { id: 'c', text: 'Chỉ hỏi ý kiến bảo vệ tòa nhà công ty.' },
      { id: 'd', text: 'Loại bỏ hoàn toàn bước tìm hiểu tiếng nói người dùng.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 10 Chương 6 đề cập khái niệm "External product champion" dành cho các sản phẩm thương mại khi người dùng cuối nằm bên ngoài tổ chức phát triển.',
  },
  {
    id: 'swr-q-133',
    subjectId: 'swr',
    chapterId: 'swr-ch6',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'multiple',
    prompt:
      'Theo Chương 6 (Slides 5–6), chọn 2 ý ĐÚNG về cách tìm kiếm và phân loại User Classes:',
    options: [
      { id: 'a', text: 'Có thể dùng Collaboration pattern (Ellen Gottesdiener), Context diagram hoặc Sơ đồ tổ chức doanh nghiệp (Corporate organization chart) để phát hiện ứng viên User Class.' },
      { id: 'b', text: 'Có thể phân loại User Classes theo nền tảng thiết bị sử dụng (PC, tablet, smartphone), ngôn ngữ bản địa, hoặc tương tác trực tiếp vs gián tiếp.' },
      { id: 'c', text: 'Chỉ những người dùng thao tác trực tiếp bàn phím mới được coi là User Class; người nhận báo cáo gián tiếp bị loại bỏ.' },
      { id: 'd', text: 'Mọi hệ thống đều chỉ được có tối đa 2 User Classes.' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Slide 5–6 Chương 6 nêu 8 tiêu chí phân loại (bao gồm platforms, native language, direct/indirect interaction) và 3 công cụ tìm User Classes: Collaboration pattern (Gottesdiener), Context diagram, Corporate organization chart (Beatty & Chen 2012).',
  },

  // ===========================================================================
  // CHƯƠNG 7 (4 câu: swr-q-134 .. swr-q-137)
  // ===========================================================================
  {
    id: 'swr-q-134',
    subjectId: 'swr',
    chapterId: 'swr-ch7',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Slide 8 Chương 7 (Observations), điểm khác nhau giữa "Passive observation", "Active observation" và "Ethnographic studies" là gì?',
    options: [
      { id: 'a', text: 'Passive: đứng ngoài quan sát không can thiệp; Active: trực tiếp tham gia làm việc như thành viên nhóm; Ethnographic studies: quan sát dài hạn để khám phá các đặc tính xã hội/tập quán nảy sinh trong nhóm.' },
      { id: 'b', text: 'Passive là gửi bảng hỏi trắc nghiệm online; Active là vẽ ERD.' },
      { id: 'c', text: 'Ethnographic studies là buổi phỏng vấn nhanh 15 phút.' },
      { id: 'd', text: 'Active observation cấm tuyệt đối việc trò chuyện với người làm việc.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 8 Chương 7 định nghĩa chính xác 4 dạng Observation: Passive (không can thiệp), Protocol analysis (vừa làm vừa giải thích thành tiếng), Ethnographic studies (dài hạn tìm đặc tính xã hội), và Active observation (trực tiếp tham gia làm cùng).',
  },
  {
    id: 'swr-q-135',
    subjectId: 'swr',
    chapterId: 'swr-ch7',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'multiple',
    prompt:
      'Theo Slide 10 Chương 7 ("Questionnaires"), bảng hỏi dễ bị sai lệch (biases) và thông tin thiếu tin cậy. Chọn 2 nguyên tắc thiết kế bảng hỏi giúp khắc phục điều này:',
    options: [
      { id: 'a', text: 'Thêm các câu hỏi lặp lại ngụ ý (implicitly redundant questions) để phát hiện câu trả lời mâu thuẫn.' },
      { id: 'b', text: 'Nhờ bên thứ ba (third party) kiểm tra bảng hỏi trước khi phát hành và chọn mẫu đại diện có ý nghĩa thống kê.' },
      { id: 'c', text: 'Dùng từ ngữ định hướng gài ý để người trả lời chọn đáp án mình mong muốn.' },
      { id: 'd', text: 'Chỉ gửi cho 2 người thân quen để tiết kiệm thời gian.' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Slide 10 Chương 7 nêu 5 hướng dẫn thiết kế Questionnaire: chọn mẫu đại diện có ý nghĩa thống kê + tạo động lực trả lời; kiểm tra độ bao phủ; đảm bảo câu hỏi/đáp án không thiên vị và không mơ hồ; thêm câu hỏi lặp ngụ ý để phát hiện mâu thuẫn; nhờ bên thứ ba review.',
  },
  {
    id: 'swr-q-136',
    subjectId: 'swr',
    chapterId: 'swr-ch7',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Slides 5, 7 & 18 Chương 7, "Straw man models" trong phỏng vấn và "Focus groups" lần lượt phù hợp nhất để làm gì?',
    options: [
      { id: 'a', text: 'Straw man models là mô hình/bản nháp sơ bộ chuẩn bị trước để gợi mở thảo luận khi phỏng vấn; Focus groups dùng để khai thác thái độ, sở thích cho sản phẩm thương mại khi khó tiếp cận trực tiếp người dùng nội bộ.' },
      { id: 'b', text: 'Straw man models là mã nguồn hoàn chỉnh; Focus groups chỉ dùng để kiểm thử áp lực tải server.' },
      { id: 'c', text: 'Straw man models cấm không cho khách hàng sửa đổi; Focus groups chỉ có 1 người tham gia.' },
      { id: 'd', text: 'Cả hai đều là kỹ thuật ước lượng số dòng code.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 5 & 18 Chương 7 khuyên chuẩn bị câu hỏi và straw man models (bản nháp giả định để khách hàng phản biện/sửa lại); Slide 7 nêu Focus groups hữu ích để khám phá thái độ, ấn tượng, nhu cầu cho commercial products.',
  },
  {
    id: 'swr-q-137',
    subjectId: 'swr',
    chapterId: 'swr-ch7',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Khi khách hàng yêu cầu chức năng "Quên mật khẩu qua email" nhưng không hề nói đến việc "hệ thống cần tạo mã token xác thực hết hạn sau 15 phút và gửi email từ hệ thống SMTP", yêu cầu bị ẩn này thuộc loại nào theo Slide 25 Chương 7?',
    options: [
      { id: 'a', text: 'Assumed hoặc Implied requirements (yêu cầu ngầm định/ngụ ý cần thiết để thực hiện một yêu cầu khác nhưng không được nói rõ ra).' },
      { id: 'b', text: 'Gold plating (tính năng thừa thãi tự thêm).' },
      { id: 'c', text: 'Physical constraint (ràng buộc vật lý).' },
      { id: 'd', text: 'Product vision statement.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 25 Chương 7 phân biệt: Assumed requirements là điều người ta mặc định coi là hiển nhiên không nói ra; Implied requirements là yêu cầu tất yếu kéo theo bởi một yêu cầu khác nhưng không được phát biểu tường minh — dev sẽ không thể tự đoán đúng nếu BA không làm rõ.',
  },

  // ===========================================================================
  // CHƯƠNG 8 (2 câu: swr-q-138 .. swr-q-139)
  // ===========================================================================
  {
    id: 'swr-q-138',
    subjectId: 'swr',
    chapterId: 'swr-ch8',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'multiple',
    prompt:
      'Theo Use Case Anatomy (Chương 8, Slide 7), chọn 2 thành phần thuộc nhóm TÙY CHỌN (Optional elements) chứ không phải Mandatory elements:',
    options: [
      { id: 'a', text: 'Pre-conditions và Post-conditions.' },
      { id: 'b', text: 'Special requirements (như performance, throughput) và Other stakeholders (non-users).' },
      { id: 'c', text: 'Name (tên duy nhất, mô tả rõ) và Actors.' },
      { id: 'd', text: 'Flow of events (Basic flow và Alternate flows).' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Slide 7 Chương 8 xếp Name, Brief description, Actors, Flow of events vào Mandatory elements; còn Pre-conditions, Post-conditions, System/subsystem level, Other stakeholder và Special requirements thuộc Optional elements.',
  },
  {
    id: 'swr-q-139',
    subjectId: 'swr',
    chapterId: 'swr-ch8',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Trong mẫu Cockburn Use Case Specification ở Slide 11–12 Chương 8, thang đo Priority (1–5) quy ước giá trị nào là mức ưu tiên CAO NHẤT và định dạng các bước Main Scenario được viết theo cặp tương tác nào?',
    options: [
      { id: 'a', text: '1 = lowest priority, 5 = highest priority; các bước viết theo định dạng "system-user-system" (hệ thống – người dùng tương tác qua lại).' },
      { id: 'b', text: '1 = highest priority, 5 = lowest priority; viết theo ngôn ngữ SQL.' },
      { id: 'c', text: 'Priority chỉ nhận Yes/No; các bước chỉ ghi hành động nội bộ CSDL.' },
      { id: 'd', text: '5 = đã hủy bỏ; các bước không cần đánh số thứ tự.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 11 Chương 8 ghi rõ: `Priority: 1-5 (1 = lowest priority, 5 = highest priority)` (như ví dụ Withdraw Money có Priority = 5 ở Slide 12), và `Main Scenario` viết theo format `"system-user-system, etc."`.',
  },

  // ===========================================================================
  // CHƯƠNG 9 (4 câu: swr-q-140 .. swr-q-143)
  // ===========================================================================
  {
    id: 'swr-q-140',
    subjectId: 'swr',
    chapterId: 'swr-ch9',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo giáo trình Software Requirements 3rd Edition (Chapter 9, Figure 9-1), 5 nhóm trong bảng phân loại Business Rules Taxonomy gồm những loại nào?',
    options: [
      { id: 'a', text: 'Facts, Constraints, Action enablers, Inferences và Computations.' },
      { id: 'b', text: 'Use Cases, User Stories, Personas, Scenarios và Wireframes.' },
      { id: 'c', text: 'Availability, Security, Usability, Portability và Scalability.' },
      { id: 'd', text: 'Planning, Preparation, Inspection, Rework và Follow-up.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Figure 9-1 trong giáo trình (Book p.169) trình bày 5 loại Business Rules: Facts, Constraints, Action enablers, Inferences và Computations (nhóm thứ 6 là Terms có thể gộp vào Facts hoặc Glossary).',
  },
  {
    id: 'swr-q-141',
    subjectId: 'swr',
    chapterId: 'swr-ch9',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Xét 2 quy tắc nghiệp vụ: (1) "Nếu khách hàng không thanh toán trong 30 ngày sau hạn, tài khoản được xem là quá hạn (delinquent)." (2) "Nếu ngày hết hạn bình hóa chất đã tới, hệ thống gửi thông báo cho người đang giữ bình." Theo Chapter 9 Taxonomy, hai quy tắc này lần lượt thuộc loại nào?',
    options: [
      { id: 'a', text: '(1) là Inference (suy ra một sự thật/trạng thái mới); (2) là Action enabler (kích hoạt một hành động cụ thể).' },
      { id: 'b', text: '(1) là Computation; (2) là Fact.' },
      { id: 'c', text: 'Cả hai đều là Physical constraints.' },
      { id: 'd', text: '(1) là Action enabler; (2) là Inference.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Giáo trình Chương 9 (Book pp.171–173) phân biệt rất tinh tế: cả hai đều có mẫu "if/then", nhưng vế "then" của Inference chỉ cung cấp tri thức/sự thật suy dẫn ("account is delinquent"), còn vế "then" của Action enabler kích hoạt hành động ("notify the person").',
  },
  {
    id: 'swr-q-142',
    subjectId: 'swr',
    chapterId: 'swr-ch9',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'multiple',
    prompt:
      'Theo giáo trình Chapter 9 (Book pp.171, 174), chọn 2 thực hành ĐÚNG khi viết và biểu diễn Business Rules:',
    options: [
      { id: 'a', text: 'Viết quy tắc ở mức nguyên tử (Atomic business rules): tránh dùng "OR" ở vế trái và tránh dùng "AND" ở vế phải của cấu trúc if/then.' },
      { id: 'b', text: 'Dùng "Roles and permissions matrix" cho Constraint phân quyền theo vai trò, và tránh chồng chéo giá trị biên như 1–5, 5–10 trong bảng Computation.' },
      { id: 'c', text: 'Gộp nhiều điều kiện và nhiều hành động khác nhau vào một câu thật dài cho tiết kiệm dòng.' },
      { id: 'd', text: 'Sao chép nguyên văn toàn bộ Business Rules vào nhiều mục khác nhau trong SRS.' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Giáo trình Chương 9 (pp.171, 174) khuyên dùng Roles & permissions matrix cho constraints phân quyền, cảnh báo bẫy chồng biên `1-5, 5-10`, và viết Atomic rules bằng cách tránh OR bên trái / AND bên phải câu if/then.',
  },
  {
    id: 'swr-q-143',
    subjectId: 'swr',
    chapterId: 'swr-ch9',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Slides 7 & 10 Chương 9, nhược điểm của việc tìm Business Rules bằng cách dịch ngược hệ thống cũ (Legacy systems) và nhược điểm của dùng Hyperlinks để nối rule từ SRS là gì?',
    options: [
      { id: 'a', text: 'Dịch ngược hệ thống cũ đôi khi cho kiến thức không đầy đủ; Hyperlink trong Word/Excel dễ bị gãy (broken) nếu vị trí file chứa rule bị thay đổi.' },
      { id: 'b', text: 'Dịch ngược hệ thống cũ luôn cho kết quả đầy đủ 100%; Hyperlink không bao giờ hỏng.' },
      { id: 'c', text: 'Cả hai cách đều bị cấm trong quy chuẩn quốc tế IEEE.' },
      { id: 'd', text: 'Hyperlink làm tăng dung lượng RAM của máy khách khi mở trình duyệt.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 7 Chương 9 lưu ý reverse-engineering legacy systems "sometimes yields incomplete knowledge", và Slide 10 cảnh báo "hyperlinks are prone to breaking if the location of the rules collection changes".',
  },

  // ===========================================================================
  // CHƯƠNG 10 (4 câu: swr-q-144 .. swr-q-147)
  // ===========================================================================
  {
    id: 'swr-q-144',
    subjectId: 'swr',
    chapterId: 'swr-ch10',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo Slide 5 Chương 10, tài liệu SRS đôi khi còn được gọi bằng những tên nào khác trong thực tế doanh nghiệp?',
    options: [
      { id: 'a', text: 'Business Requirements Document (BRD), Functional Specification, Product Specification, hoặc System Specification.' },
      { id: 'b', text: 'Entity-Relationship Diagram, CRUD Matrix, hoặc State Table.' },
      { id: 'c', text: 'User Persona, Collaboration Pattern, hoặc Feature Tree.' },
      { id: 'd', text: 'Formal Inspection Checklist hoặc Planguage Specification.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 5 Chương 10 liệt kê các tên gọi tương đương: BRD, functional specification, product specification, system specification, hoặc requirements document (và phục vụ 9 nhóm độc giả gồm Legal staff, Subcontractors, Doc writers, Training personnel...).',
  },
  {
    id: 'swr-q-145',
    subjectId: 'swr',
    chapterId: 'swr-ch10',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'So sánh 3 cách đánh mã định danh yêu cầu (Labeling requirements — Slide 6 Chương 10 & Book pp.187–188), ưu điểm vượt trội của "Hierarchical textual tags" (như `Print.ConfirmCopies`) so với "Hierarchical numbering" (như `3.2.4.3`) là gì?',
    options: [
      { id: 'a', text: 'Có cấu trúc rõ nghĩa, đọc biết ngay thuộc tính năng nào và KHÔNG bị nhảy số dây chuyền khi thêm, xóa hay di chuyển yêu cầu khác.' },
      { id: 'b', text: 'Tự động tạo số ngắn nhất có thể trong Word mà không cần nghĩ tên.' },
      { id: 'c', text: 'Chỉ dùng được cho các gạch đầu dòng không cần truy vết.' },
      { id: 'd', text: 'Không bao giờ bị trùng lặp ngay cả khi nhiều người cùng đặt tên tùy tiện.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Giáo trình Chương 10 (pp.187–188) chỉ rõ Hierarchical numbering trong Word dễ bị xáo trộn toàn bộ số phía sau khi chèn/xóa/dời mục và không gợi ý nghĩa; còn Hierarchical textual tags (Tom Gilb) vừa có cấu trúc ngữ nghĩa rõ ràng vừa ổn định khi thêm/xóa/di chuyển.',
  },
  {
    id: 'swr-q-146',
    subjectId: 'swr',
    chapterId: 'swr-ch10',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Khi còn thiếu thông tin cho một yêu cầu trong SRS và phải ghi chú "TBD (To Be Determined)", thực hành tốt nào được khuyến nghị trong Chapter 10 (Book pp.188–189)?',
    options: [
      { id: 'a', text: 'Đánh số các mục TBD, ghi rõ người chịu trách nhiệm giải quyết (owner) và thời hạn hoàn thành (target date), đưa vào Issues List và theo dõi cho tới khi đóng hoàn toàn.' },
      { id: 'b', text: 'Ghi chung chữ "TBD" không cần người phụ trách để lập trình viên tự đoán và code luôn.' },
      { id: 'c', text: 'Xóa bỏ yêu cầu đó khỏi SRS cho tài liệu trông hoàn hảo.' },
      { id: 'd', text: 'Giữ nguyên TBD qua tới tận ngày bàn giao sản phẩm chính thức cho khách hàng.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Giáo trình Chương 10 (pp.188–189) nhấn mạnh: "TBDs won’t resolve themselves" — cần đánh số TBD, ghi rõ người chịu trách nhiệm, hạn chót, rà soát định kỳ và giải quyết hết trước khi triển khai (hoặc cô lập phần chưa chốt để dễ sửa).',
  },
  {
    id: 'swr-q-147',
    subjectId: 'swr',
    chapterId: 'swr-ch10',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Khi đưa hình ảnh giao diện người dùng (UI) vào tài liệu SRS (Chapter 10, Book pp.189–190), cách cân bằng hợp lý nhất được tác giả Karl Wiegers khuyến nghị là gì?',
    options: [
      { id: 'a', text: 'Đính kèm dưới dạng bản phác thảo khái niệm ("sketches") để minh họa ý tưởng yêu cầu mà không ép đội thiết kế UI phải làm y hệt từng pixel, và tuyệt đối không dùng ảnh chụp màn hình thay thế cho yêu cầu chức năng viết bằng văn bản.' },
      { id: 'b', text: 'Chỉ chụp ảnh màn hình giao diện để lập trình viên tự suy luận toàn bộ nghiệp vụ và quan hệ dữ liệu.' },
      { id: 'c', text: 'Trì hoãn chốt baseline SRS cho đến khi hoàn thiện 100% thiết kế đồ họa UI cuối cùng.' },
      { id: 'd', text: 'Cấm hoàn toàn mọi hình minh họa màn hình trong dự án phần mềm.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Book pp.189–190 nêu rõ: ảnh màn hình không thay thế written requirements; tránh đóng băng UI sớm khiến designer bị trói tay; giải pháp cân bằng là chèn các "sketches" minh họa khái niệm (hoặc tách User Interface Specification riêng nếu có quá nhiều màn hình).',
  },

  // ===========================================================================
  // CHƯƠNG 11 (3 câu: swr-q-148 .. swr-q-150)
  // ===========================================================================
  {
    id: 'swr-q-148',
    subjectId: 'swr',
    chapterId: 'swr-ch11',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo Slide 4 Chương 11, 7 đặc tính chuẩn của một CÂU YÊU CẦU ĐƠN LẺ (Requirement Statement) xuất sắc gồm những tiêu chí nào?',
    options: [
      { id: 'a', text: 'Complete, Correct, Feasible, Necessary, Prioritized, Unambiguous, Verifiable.' },
      { id: 'b', text: 'Complete, Consistent, Modifiable, Traceable.' },
      { id: 'c', text: 'Availability, Reliability, Security, Usability.' },
      { id: 'd', text: 'Author, Moderator, Reader, Recorder.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 4 Chương 11 chia hai bảng: Requirement Statements có 7 đặc tính (Complete, Correct, Feasible, Necessary, Prioritized, Unambiguous, Verifiable), còn Requirements Collections có 4 đặc tính (Complete, Consistent, Modifiable, Traceable).',
  },
  {
    id: 'swr-q-149',
    subjectId: 'swr',
    chapterId: 'swr-ch11',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Xét câu đặc tả: "The database shall allow/prevent users from deleting archived/active records." Theo Slides 5–6 Chương 11, câu này mắc những lỗi viết yêu cầu nghiêm trọng nào?',
    options: [
      { id: 'a', text: 'Dùng cấu trúc gạch chéo "A/B" ("allow/prevent", "archived/active") gây mơ hồ đa nghĩa và không rõ hành vi thực tế trong từng trường hợp.' },
      { id: 'b', text: 'Vi phạm quy tắc không được dùng từ khóa "shall".' },
      { id: 'c', text: 'Viết quá ngắn khiến thiếu từ khóa Planguage.' },
      { id: 'd', text: 'Vi phạm quy tắc đặt tên Use Case bằng động từ.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 6 Chương 11 cảnh báo lỗi "The A/B construct" (như `and/or`, `allow/prevent`, `archived/active`) vì tạo ra nhiều cách hiểu mâu thuẫn nhau (vi phạm tính Unambiguous).',
  },
  {
    id: 'swr-q-150',
    subjectId: 'swr',
    chapterId: 'swr-ch11',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'multiple',
    prompt:
      'Theo Slides 5–6 Chương 11 ("Avoiding ambiguity & incompleteness"), chọn 2 lỗi dễ bỏ sót nhất trong đặc tả chức năng:',
    options: [
      { id: 'a', text: 'Thiếu tính đối xứng (Symmetry): có yêu cầu tạo/mở/đăng ký nhưng quên đặc tả yêu cầu sửa/đóng/hủy tương ứng.' },
      { id: 'b', text: 'Mơ hồ giá trị biên (Boundary values): viết "nhỏ hơn 10" và "lớn hơn 10" nhưng bỏ quên đúng giá trị 10, hoặc dùng nhiều câu phủ định (Negative requirements) khó hiểu.' },
      { id: 'c', text: 'Sử dụng giọng chủ động (Active voice) bắt đầu bằng "The system shall...".' },
      { id: 'd', text: 'Giữ mức độ chi tiết đồng nhất (Consistent granularity) trong cùng một cấp yêu cầu.' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Slide 5–6 Chương 11 khuyến nghị dùng Active voice + `shall` và Consistent granularity; đồng thời cảnh báo các lỗi: Fuzzy words, A/B construct, Boundary values, Negative requirements, thiếu Symmetry, Complex logic và Missing exceptions.',
  },

  // ===========================================================================
  // CHƯƠNG 12 (3 câu: swr-q-151 .. swr-q-153)
  // ===========================================================================
  {
    id: 'swr-q-151',
    subjectId: 'swr',
    chapterId: 'swr-ch12',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo giáo trình Chapter 12 (Dialog Map — Book pp.235–236), phát biểu nào ĐÚNG về cách vẽ và đơn giản hóa một Dialog Map?',
    options: [
      { id: 'a', text: 'Mỗi màn hình/hộp thoại (dialog element) là một trạng thái (hình chữ nhật), đường chuyển hướng là mũi tên có điều kiện kích hoạt; nên lược bỏ các hàm toàn cục như phím F1 Help hoặc nút Back của trình duyệt để sơ đồ đỡ rối.' },
      { id: 'b', text: 'Dialog Map phải vẽ chi tiết từng màu sắc, cỡ chữ và CSS của mọi nút bấm trên màn hình.' },
      { id: 'c', text: 'Dialog Map hiển thị chi tiết từng bước xử lý thuật toán nội bộ giống hệt Flowchart.' },
      { id: 'd', text: 'Bắt buộc phải vẽ thêm đường nối tới màn hình Help từ tất cả mọi ô trên Dialog Map.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Book pp.235–236 giải thích: Dialog map chính là giao diện mô hình hóa dạng State-transition diagram (ô = màn hình/dialog element, mũi tên = điều hướng), khác Flowchart ở chỗ không vẽ xử lý nội bộ; và nên bỏ qua nút Back trình duyệt hay phím F1 Help lặp lại ở mọi màn hình.',
  },
  {
    id: 'swr-q-152',
    subjectId: 'swr',
    chapterId: 'swr-ch12',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Khi hệ thống có nhiều điều kiện Boolean kết hợp phức tạp (VD: 4 điều kiện Đúng/Sai tạo ra 2^4 = 16 tổ hợp — Chapter 12, Book pp.239–240), BA nên dùng 2 mô hình nào để tránh bỏ sót nhánh logic và rút gọn các tổ hợp cho cùng một kết quả?',
    options: [
      { id: 'a', text: 'Decision Table (Bảng quyết định) và Decision Tree (Cây quyết định).' },
      { id: 'b', text: 'Context Diagram và Ecosystem Map.' },
      { id: 'c', text: 'Chen Notation ERD và Data Dictionary.' },
      { id: 'd', text: 'User Persona và Storyboard.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Book pp.239–240 minh họa bằng Figure 12-6 (Decision table) và Figure 12-7 (Decision tree): từ 4 điều kiện (16 tổ hợp lý thuyết), nhờ đánh dấu các điều kiện không ảnh hưởng ("—"), ta rút gọn rõ ràng thành 5 nhánh hành vi không bỏ sót trường hợp nào.',
  },
  {
    id: 'swr-q-153',
    subjectId: 'swr',
    chapterId: 'swr-ch12',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Trong Event-Response Table (Chapter 12, Book pp.240–241), hệ thống có thể phản hồi 3 nhóm sự kiện nào, và việc hệ thống tự động xuất dữ liệu vào lúc 00:00 mỗi đêm thuộc loại sự kiện nào?',
    options: [
      { id: 'a', text: '3 nhóm: Business event, Signal event, Temporal event; tác vụ tự chạy lúc 00:00 thuộc Temporal event (sự kiện kích hoạt theo thời gian).' },
      { id: 'b', text: '3 nhóm: Normal, Alternative, Exception; tác vụ 00:00 thuộc Business event.' },
      { id: 'c', text: '3 nhóm: Conceptual, Logical, Physical; tác vụ 00:00 thuộc Signal event.' },
      { id: 'd', text: '3 nhóm: Include, Extend, Generalization; tác vụ 00:00 thuộc Business event.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Figure 12-8 (Book pp.240–241) phân loại 3 lớp sự kiện: Business event (người dùng kích hoạt), Signal event (tín hiệu phần cứng/hệ thống ngoài), và Temporal event (kích hoạt theo mốc giờ hoặc chu kỳ thời gian như xuất dữ liệu lúc nửa đêm).',
  },

  // ===========================================================================
  // CHƯƠNG 13 (1 câu bổ sung cho Data Dictionary: swr-q-154)
  // ===========================================================================
  {
    id: 'swr-q-154',
    subjectId: 'swr',
    chapterId: 'swr-ch13',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Trong Chương 13 (Slide 5 — "The data dictionary"), vai trò chính của Data Dictionary đối với đội phát triển và BA là gì?',
    options: [
      { id: 'a', text: 'Định nghĩa chuẩn xác từng phần tử dữ liệu (tên trường, ý nghĩa, kiểu dữ liệu, độ dài, định dạng, miền giá trị hợp lệ) để mọi thành viên và giao diện dùng thống nhất một nguồn sự thật.' },
      { id: 'b', text: 'Thay thế hoàn toàn biểu đồ Use Case và Swimlane.' },
      { id: 'c', text: 'Lưu trữ danh sách lỗi kiểm thử sau mỗi lần Formal Inspection.' },
      { id: 'd', text: 'Đo tốc độ mạng giữa máy khách và máy chủ.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Data Dictionary (Slide 5 Chương 13) đóng vai trò từ điển dữ liệu dùng chung, mô tả chính xác cấu trúc, kiểu, kích thước và quy tắc hợp lệ cho mọi thực thể/trường dữ liệu xuất hiện trong mô hình và SRS.',
  },

  // ===========================================================================
  // CHƯƠNG 14 (4 câu: swr-q-155 .. swr-q-158)
  // ===========================================================================
  {
    id: 'swr-q-155',
    subjectId: 'swr',
    chapterId: 'swr-ch14',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'multiple',
    prompt:
      'Theo Slide 6 Chương 14, chọn 2 nhóm thuộc tính thuộc EXTERNAL Quality Attributes (người dùng cảm nhận trực tiếp khi vận hành sản phẩm):',
    options: [
      { id: 'a', text: 'Availability, Reliability, Performance và Usability.' },
      { id: 'b', text: 'Security, Safety, Integrity và Interoperability.' },
      { id: 'c', text: 'Modifiability và Reusability.' },
      { id: 'd', text: 'Portability và Verifiability (Testability).' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Slide 6 Chương 14 chia 10 External quality attributes (Availability, Installability, Integrity, Interoperability, Performance, Reliability, Robustness, Safety, Security, Usability) và 6 Internal quality attributes (Efficiency, Modifiability, Portability, Reusability, Scalability, Verifiability).',
  },
  {
    id: 'swr-q-156',
    subjectId: 'swr',
    chapterId: 'swr-ch14',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo ma trận đánh đổi Quality Attribute Trade-offs (Chapter 14, Figure 14-2 — Book p.289), phát biểu nào ĐÚNG về mối quan hệ KHÔNG ĐỐI XỨNG giữa các thuộc tính chất lượng?',
    options: [
      { id: 'a', text: 'Tăng Security thường làm giảm Performance (do phải mã hóa, xác thực, quét mã độc), nhưng tăng Performance chưa chắc có tác động gì đến Security.' },
      { id: 'b', text: 'Mọi cặp thuộc tính chất lượng luôn tác động đối xứng 100% theo cả hai chiều.' },
      { id: 'c', text: 'Tăng Portability luôn làm giảm Reusability và Interoperability.' },
      { id: 'd', text: 'Tăng Efficiency/Performance luôn giúp mã nguồn dễ bảo trì (Modifiability) hơn.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Giáo trình Chương 14 (Book p.289) chỉ rõ ma trận Figure 14-2 KHÔNG đối xứng: tăng Security làm giảm Performance, còn tăng Performance hầu như không ảnh hưởng Security; tối ưu code siêu nhanh (Performance/Efficiency) hay làm code khó sửa (giảm Modifiability) và khó mang sang nền tảng khác (giảm Portability).',
  },
  {
    id: 'swr-q-157',
    subjectId: 'swr',
    chapterId: 'swr-ch14',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Trong cú pháp Planguage (Chương 14, Slide 8 & Book p.288), điểm khác biệt giữa 3 mức giá trị GOAL, STRETCH và WISH là gì?',
    options: [
      { id: 'a', text: 'GOAL là mức đạt tối thiểu bắt buộc để yêu cầu được xem là thỏa mãn; STRETCH là mục tiêu mong muốn tốt hơn; WISH là kết quả lý tưởng nhất.' },
      { id: 'b', text: 'WISH là mức bắt buộc tối thiểu; GOAL là mục tiêu không cần đạt.' },
      { id: 'c', text: 'METER chỉ thời gian tối thiểu; SCALE chỉ tên người quản lý.' },
      { id: 'd', text: 'DEFINED là ngưỡng thất bại của hệ thống.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Book p.288 giải thích rõ: GOAL là minimum acceptable achievement level (bắt buộc phải thỏa hết mới đạt); STRETCH là mức phấn đấu tốt hơn; WISH là kết quả lý tưởng (ideal outcome); còn SCALE là đơn vị đo và METER là cách đo.',
  },
  {
    id: 'swr-q-158',
    subjectId: 'swr',
    chapterId: 'swr-ch14',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Xét 2 ràng buộc trong Slide 11 Chương 14: `CON-2: Chỉ được dùng phần mềm mã nguồn mở theo giấy phép GNU GPL` và `CON-4: Máy ATM chỉ chứa tờ tiền mệnh giá $20`. Hai ràng buộc này lần lượt thuộc loại nào?',
    options: [
      { id: 'a', text: 'CON-2 là Implementation constraint; CON-4 là Physical constraint.' },
      { id: 'b', text: 'CON-2 là Data constraint; CON-4 là UI control constraint.' },
      { id: 'c', text: 'CON-2 là Physical constraint; CON-4 là Architecture constraint.' },
      { id: 'd', text: 'Cả hai đều là External quality attributes.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 11 Chương 14 gán nhãn chính xác: CON-1 (UI control constraint), CON-2 (Implementation constraint — GPL), CON-3 (Architecture constraint — .NET 4.5), CON-4 (Physical constraint — $20 bills), CON-5 (Design constraint — PayPal), CON-6 (Data constraint — XML).',
  },

  // ===========================================================================
  // CHƯƠNG 15 (3 câu: swr-q-159 .. swr-q-161)
  // ===========================================================================
  {
    id: 'swr-q-159',
    subjectId: 'swr',
    chapterId: 'swr-ch15',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo Slides 4 & 6 Chương 15, một bản mẫu (Prototype) được phân loại theo 3 chiều thuộc tính nào, và Wireframe cho website giúp làm rõ 3 khía cạnh nào?',
    options: [
      { id: 'a', text: '3 chiều: Scope (Horizontal/Vertical), Future use (Throwaway/Evolutionary), Form (Paper/Electronic); Wireframe làm rõ: Conceptual requirements, Information architecture/navigation, và High-resolution detailed page design.' },
      { id: 'b', text: '3 chiều: Cost, Time, Quality; Wireframe chỉ làm rõ màu sắc logo.' },
      { id: 'c', text: '3 chiều: Conceptual, Logical, Physical; Wireframe dùng để vẽ ERD.' },
      { id: 'd', text: '3 chiều: Business, User, Functional; Wireframe thay thế hoàn toàn Test Plan.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 4 Chương 15 liệt kê 3 classes of prototype attributes: Scope, Future use, Form; Slide 6 liệt kê 3 khía cạnh website mà Wireframe giúp làm rõ: Conceptual requirements, Information architecture/navigation design, và High-resolution detailed page design.',
  },
  {
    id: 'swr-q-160',
    subjectId: 'swr',
    chapterId: 'swr-ch15',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Slide 7 Chương 15, Evolutionary Prototype khác Throwaway Prototype ở điểm cốt lõi nào và phù hợp với loại dự án nào?',
    options: [
      { id: 'a', text: 'Evolutionary Prototype được xây dựng trên nền tảng kiến trúc vững chắc để phát triển tăng tiến thành sản phẩm thật (rất hợp với Agile và dự án Web), không vứt bỏ như Throwaway.' },
      { id: 'b', text: 'Evolutionary Prototype làm bằng giấy và bị vứt bỏ ngay sau buổi họp đầu tiên.' },
      { id: 'c', text: 'Evolutionary Prototype tuyệt đối không được nhận phản hồi người dùng.' },
      { id: 'd', text: 'Throwaway Prototype bắt buộc phải có đầy đủ xử lý lỗi và tài liệu kiến trúc hoàn chỉnh.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 7 Chương 15 giải thích Evolutionary prototype cung cấp solid architectural foundation để xây dựng sản phẩm tăng tiến qua từng iteration (như Agile) và rất hợp cho web development projects; ngược lại Throwaway (Slide 14) làm nhanh-rẻ rồi bỏ.',
  },
  {
    id: 'swr-q-161',
    subjectId: 'swr',
    chapterId: 'swr-ch15',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Sau khi khách hàng xem và khen bản Electronic Prototype giao diện rất đẹp, quản lý dự án đề nghị không cần viết tài liệu SRS nữa để tiết kiệm thời gian. Theo Slide 14 Chương 15 ("Prototyping success factors"), nhận định nào ĐÚNG?',
    options: [
      { id: 'a', text: 'Sai lầm — Prototype không thể thay thế cho tài liệu đặc tả yêu cầu viết bằng văn bản (Don’t expect a prototype to replace written requirements), và cần nêu rõ số phận của bản mẫu (bỏ hay phát triển tiếp) ngay từ đầu.' },
      { id: 'b', text: 'Hợp lý — chỉ cần giao file mockup cho lập trình viên là đủ xây dựng hệ thống hoàn chỉnh.' },
      { id: 'c', text: 'Nên phát hành ngay bản Throwaway Prototype đó lên môi trường production.' },
      { id: 'd', text: 'Chỉ cần dùng dữ liệu giả ngẫu nhiên vô nghĩa ("lorem ipsum") để đánh giá là đủ.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 14 Chương 15 khẳng định: "Don’t expect a prototype to replace written requirements", đồng thời khuyên dùng dữ liệu hợp lý (plausible data) và tuyên bố rõ ngay từ đầu sẽ discard hay build upon bản mẫu đó.',
  },

  // ===========================================================================
  // CHƯƠNG 16 (3 câu: swr-q-162 .. swr-q-164)
  // ===========================================================================
  {
    id: 'swr-q-162',
    subjectId: 'swr',
    chapterId: 'swr-ch16',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Alan Davis (2005) gọi việc xếp hạng ưu tiên yêu cầu là "Requirements Triage" và chỉ ra 6 yếu tố thực tiễn cần thấu hiểu (Chương 16, Slides 4–5). Yếu tố kỹ thuật nào bắt buộc phải xem xét bên cạnh nhu cầu và giá trị khách hàng?',
    options: [
      { id: 'a', text: 'Các yêu cầu đóng vai trò tiền đề (predecessors/dependencies), các yêu cầu phải triển khai theo nhóm (as a group), thời điểm cần bàn giao và chi phí đáp ứng từng yêu cầu.' },
      { id: 'b', text: 'Sở thích cá nhân của lập trình viên về ngôn ngữ code.' },
      { id: 'c', text: 'Số lượng trang trong tài liệu SRS.' },
      { id: 'd', text: 'Thứ tự bảng chữ cái tên của tính năng.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 5 Chương 16 liệt kê 6 yếu tố thực tiễn của Alan Davis: Customer needs, Relative importance, Timing needed, Predecessor requirements & relationships, Requirements implemented as a group, và Cost to satisfy.',
  },
  {
    id: 'swr-q-163',
    subjectId: 'swr',
    chapterId: 'swr-ch16',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Trong buổi họp xếp ưu tiên, khách hàng khăng khăng: "Tất cả 30 tính năng này đều là High Priority, thiếu một cái cũng không được!" Theo Slide 6 Chương 16 ("Games people play with priorities"), BA nên đặt câu hỏi nào để giúp khách hàng phân tách mức ưu tiên thực tế?',
    options: [
      { id: 'a', text: '"Hậu quả sẽ là gì nếu dời yêu cầu này sang bản sau?" hoặc "Tính năng này có đáng để làm trễ ngày phát hành của toàn bộ các tính năng High priority khác không?"' },
      { id: 'b', text: '"Nếu vậy bên anh cứ giữ nguyên 30 cái High, bên em làm được đến đâu hay đến đó."' },
      { id: 'c', text: '"Anh có thể tự chọn ngẫu nhiên 10 tính năng để đội dev xóa bớt không?"' },
      { id: 'd', text: '"Chờ làm xong hết 30 tính năng rồi mới hỏi lại độ ưu tiên."' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 6 Chương 16 cung cấp bộ 5 câu hỏi thực tế giúp khách hàng tự nhận ra có những yêu cầu mức thấp hơn: cách thay thế, hậu quả nếu bỏ/hoãn, ảnh hưởng mục tiêu kinh doanh nếu trễ vài tháng, lý do không hài lòng, và liệu có đáng làm trễ toàn bộ tính năng cùng mức ưu tiên không.',
  },
  {
    id: 'swr-q-164',
    subjectId: 'swr',
    chapterId: 'swr-ch16',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'So sánh các kỹ thuật xếp hạng ưu tiên ở Slide 7 Chương 16, kỹ thuật nào so sánh từng cặp yêu cầu với nhau để xếp thứ tự 1..N, và kỹ thuật nào dùng 3 mức phân loại kèm tiêu chí rõ ràng?',
    options: [
      { id: 'a', text: 'Pairwise comparison and rank ordering (so sánh từng cặp); Three-level scale (High / Medium / Low).' },
      { id: 'b', text: 'MoSCoW (so sánh từng cặp); $100 Allocation (3 mức).' },
      { id: 'c', text: 'In or Out (so sánh từng cặp); Planguage (3 mức).' },
      { id: 'd', text: 'Value-Cost-Risk (chỉ có 2 mức); CRUD Matrix (so sánh từng cặp).' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 7 Chương 16 liệt kê 5 kỹ thuật: In or out, Pairwise comparison and rank ordering, Three-level scale (High/Medium/Low), MoSCoW, và $100 Allocation (bổ sung ở Slide 8 là mô hình định lượng Value, Cost, and Risk).',
  },

  // ===========================================================================
  // CHƯƠNG 17 (3 câu: swr-q-165 .. swr-q-167)
  // ===========================================================================
  {
    id: 'swr-q-165',
    subjectId: 'swr',
    chapterId: 'swr-ch17',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Trong 3 hình thức Informal Review ở Slide 6 Chương 17, sự khác biệt giữa "Peer deskcheck", "Passaround" và "Walkthrough" là gì?',
    options: [
      { id: 'a', text: 'Peer deskcheck: gửi 1 đồng nghiệp tự đọc góp ý; Passaround: gửi bản sao cho nhiều người cùng đọc góp ý song song; Walkthrough: tác giả chủ trì buổi họp trình bày dẫn dắt người xem qua tài liệu.' },
      { id: 'b', text: 'Walkthrough luôn trang trọng và có 4 vai trò Moderator/Reader/Recorder hơn cả Formal Inspection.' },
      { id: 'c', text: 'Passaround là hình thức viết Test Case tự động.' },
      { id: 'd', text: 'Peer deskcheck bắt buộc phải có đại diện khách hàng và pháp chế tham dự trực tiếp.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 6 Chương 17 phân biệt 3 hình thức review không chính thức theo mức độ phối hợp tăng dần: Peer deskcheck (1 người đọc), Passaround (nhiều người đọc góp ý), và Walkthrough (tác giả dẫn dắt trình bày).',
  },
  {
    id: 'swr-q-166',
    subjectId: 'swr',
    chapterId: 'swr-ch17',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'multiple',
    prompt:
      'Theo giáo trình Chapter 17 về quy trình Formal Inspection (Book pp.337–341), chọn 2 nhận định ĐÚNG dựa trên số liệu thực nghiệm:',
    options: [
      { id: 'a', text: 'Giai đoạn tự chuẩn bị (Preparation) giúp phát hiện tới 75% số lỗi; cuộc họp Inspection không nên kéo dài quá 2 giờ.' },
      { id: 'b', text: 'Chia thành nhiều nhóm nhỏ kiểm tra song song (parallel inspections) phát hiện được nhiều lỗi hơn một nhóm quá đông (trên 10 người).' },
      { id: 'c', text: 'Có thể họp Inspection ngay cả khi các thành viên chưa đọc trước tài liệu để tiết kiệm thời gian chuẩn bị.' },
      { id: 'd', text: 'Gộp toàn bộ 15 bên liên quan vào chung 1 phòng họp duy nhất luôn đạt hiệu quả cao nhất.' },
    ],
    correctOptionIds: ['a', 'b'],
    explanation:
      'Book pp.337–341 trích dẫn Humphrey (1989): tới 75% lỗi được tìm thấy ở bước Preparation (cảnh báo KHÔNG họp nếu chưa chuẩn bị trước), họp tối đa ~2 giờ, và nhiều nghiên cứu (Martin & Tsai, Kosman) chứng minh nhiều nhóm nhỏ song song tìm được nhiều lỗi hơn một nhóm lớn.',
  },
  {
    id: 'swr-q-167',
    subjectId: 'swr',
    chapterId: 'swr-ch17',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Requirements Review Tips (Chapter 17, Slide 10 & Book p.340), nên bắt đầu review khi tài liệu mới hoàn thiện khoảng bao nhiêu phần trăm và không nên yêu cầu cùng một người review lại cùng nội dung quá bao nhiêu lần?',
    options: [
      { id: 'a', text: 'Bắt đầu sớm khi mới xong khoảng 10% (Start early); không nên bắt review lại quá 3 lần (Limit re-reviews) để tránh "reviewer fatigue".' },
      { id: 'b', text: 'Chỉ bắt đầu review khi tài liệu đã hoàn thành 100%; có thể bắt review lại 10 lần liên tục.' },
      { id: 'c', text: 'Bắt đầu khi code xong 80%; giới hạn tối đa 1 lần.' },
      { id: 'd', text: 'Luôn đọc từ trang 1 tới trang cuối theo đúng thứ tự, không cần chia phạm vi.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Book p.340 (Start early & Limit re-reviews): bắt đầu review khi bộ yêu cầu mới đạt khoảng 10% để chặn lỗi hệ thống từ đầu, và không bắt một người rà lại cùng tài liệu quá 3 lần để tránh mệt mỏi mất tập trung ("reviewer fatigue").',
  },

  // ===========================================================================
  // CHƯƠNG 18 (3 câu: swr-q-168 .. swr-q-170)
  // ===========================================================================
  {
    id: 'swr-q-168',
    subjectId: 'swr',
    chapterId: 'swr-ch18',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Table 18-1 trong giáo trình Chapter 18 (Book pp.352–355), "3 Dimensions of Requirements Reuse" gồm những chiều nào và cơ chế tái sử dụng nào tránh được rủi ro copy-and-paste lạc hậu?',
    options: [
      { id: 'a', text: '3 chiều: Extent of reuse, Extent of modification, Reuse mechanism; cơ chế tốt hơn copy-and-paste là tham chiếu tới nguồn gốc (Refer to an original source / công cụ RM quản lý phiên bản).' },
      { id: 'b', text: '3 chiều: Scope, Future use, Form; cơ chế tốt nhất là copy-and-paste trực tiếp mọi chỗ.' },
      { id: 'c', text: '3 chiều: Conceptual, Logical, Physical; cơ chế tốt nhất là viết lại từ đầu.' },
      { id: 'd', text: '3 chiều: Goal, Stretch, Wish; cơ chế tốt nhất là gửi email file đính kèm.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Table 18-1 (Book p.353) xác định 3 chiều: Extent of reuse, Extent of modification, và Reuse mechanism. Giáo trình (pp.354–355) khuyên tái sử dụng bằng tham chiếu (cross-reference, pointer ID hoặc versioned RM tool) thay vì copy-and-paste mất ngữ cảnh và dễ lệch bản.',
  },
  {
    id: 'swr-q-169',
    subjectId: 'swr',
    chapterId: 'swr-ch18',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Trong kịch bản "Software Product Lines" (Chapter 18, Book p.357), các tính năng của họ sản phẩm được phân thành 3 nhóm nào, và một "Requirement Pattern" (Slide 8) gồm những thành phần nào?',
    options: [
      { id: 'a', text: 'Product line: Common, Optional, Variants; Requirement Pattern gồm: Guidance, Content, Template, Examples, Extra requirements, Considerations for development and testing.' },
      { id: 'b', text: 'Product line: High, Medium, Low; Requirement Pattern gồm: Primary, Secondary, Tertiary.' },
      { id: 'c', text: 'Product line: Facts, Rules, Constraints; Requirement Pattern gồm: Actor, Trigger, Flow.' },
      { id: 'd', text: 'Product line: Static, Dynamic, Real-time; Requirement Pattern chỉ có mỗi Template.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Book p.357 phân tích 3 nhóm feature trong Software Product Lines: Common (có ở mọi sản phẩm), Optional (chỉ có ở một số bản), Variants (biến thể khác nhau); Slide 8 Chương 18 liệt kê đúng 6 phần của Requirement Pattern (Stephen Withall).',
  },
  {
    id: 'swr-q-170',
    subjectId: 'swr',
    chapterId: 'swr-ch18',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Theo Slide 9 Chương 18, 5 yếu tố quyết định thành công khi triển khai Requirements Reuse (Reuse Success Factors) trong tổ chức gồm những gì?',
    options: [
      { id: 'a', text: 'Repository (kho lưu trữ dùng chung), Quality (chất lượng yêu cầu gốc tốt), Interactions (tương tác liên nhóm), Terminology (thống nhất thuật ngữ), Organizational culture (văn hóa tổ chức).' },
      { id: 'b', text: 'NIH, NAH, Writing style, Inconsistent organization, Ownership.' },
      { id: 'c', text: 'In or Out, MoSCoW, $100 Allocation, Pairwise, Triage.' },
      { id: 'd', text: 'Mock-up, Wireframe, Proof of concept, Paper prototype, Throwaway.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 9 Chương 18 đối lập rõ: Barriers (Missing/poor reqs, NIH/NAH, Writing style, Inconsistent organization, Project type, Ownership) và Success Factors (Repository, Quality, Interactions, Terminology, Organizational culture).',
  },

  // ===========================================================================
  // CHƯƠNG 19 (2 câu: swr-q-171 .. swr-q-172)
  // ===========================================================================
  {
    id: 'swr-q-171',
    subjectId: 'swr',
    chapterId: 'swr-ch19',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Slide 5 Chương 19 ("Estimating requirements effort"), cách phân bổ hoạt động Requirements Engineering xuyên suốt dự án phụ thuộc trực tiếp vào yếu tố nào?',
    options: [
      { id: 'a', text: 'Mô hình vòng đời phát triển phần mềm (SDLC) mà dự án áp dụng: tuần tự (Waterfall — dồn nhiều ở đầu) hay lặp/tăng tiến (Iterative / Incremental — rải đều qua các vòng).' },
      { id: 'b', text: 'Số lượng màn hình máy tính trong phòng làm việc.' },
      { id: 'c', text: 'Loại ký pháp vẽ ERD (Chen hay Crow’s Foot).' },
      { id: 'd', text: 'Giá bản quyền công cụ soạn thảo văn bản.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 5 Chương 19 nêu rõ hoạt động RE được phân bổ rất khác nhau tùy dự án theo Sequential (Waterfall), Iterative hay Incremental development life cycle.',
  },
  {
    id: 'swr-q-172',
    subjectId: 'swr',
    chapterId: 'swr-ch19',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Theo Slide 7 Chương 19 ("From requirements to designs, code, and tests"), yêu cầu phần mềm sau khi hoàn thiện sẽ trực tiếp dẫn xuất và định hướng sang 3 mảng công việc hạ nguồn nào?',
    options: [
      { id: 'a', text: 'Architecture & allocation (phân bổ yêu cầu vào kiến trúc), Software & UI design / code, và Conceptual & system Tests.' },
      { id: 'b', text: 'Chỉ phục vụ viết mã giao diện CSS, không liên quan kiến trúc hay kiểm thử.' },
      { id: 'c', text: 'Chỉ phục vụ bộ phận kế toán xuất hóa đơn lương.' },
      { id: 'd', text: 'Hoàn toàn tách rời khỏi khâu thiết kế và kiểm thử phần mềm.' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Slide 7 Chương 19 trình bày cầu nối từ Requirements Development sang: Architecture and allocation, Software design, User interface design, và Tests (dẫn tới sản phẩm thành công).',
  },
];

