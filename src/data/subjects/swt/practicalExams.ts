import type { PracticalExam } from '../../../types/study';

export const swtPracticalExams: PracticalExam[] = [
  {
    id: 'swt-pe-fa26',
    semester: 'FA26',
    title: 'SWT301 — FA26 — PE (Đề Thi Thực Hành Chính Thức Mới Nhất)',
    code: 'SWT301_FA26_PE',
    description:
      'Đề thi thực hành kiểm thử phần mềm kỳ Fall 2026 chính thức mới nhất. Đề bài gồm 3 phần trọng tâm: Code Review & Phát hiện lỗi tĩnh (3.0đ), Thiết kế ca kiểm thử hộp trắng đạt 100% Branch Coverage (3.0đ), và Kiểm thử hộp đen kết hợp lập Bug Report chuẩn IEEE (4.0đ).',
    durationMinutes: 85,
    scenarioSummary:
      'Bài toán hệ thống xử lý giao dịch thương mại và tính phí vận chuyển động. Sinh viên cần rà soát đoạn mã nguồn Java được cung cấp, tìm 6 lỗi tiềm ẩn (logic, kiểu dữ liệu, thiếu kiểm tra biên), vẽ sơ đồ dòng điều khiển (CFG), tính độ phức tạp Cyclomatic và thiết kế bộ test case tối ưu.',
    requirements: [
      'Question 1 (3.0đ) — Code Review & Bug Identification: Đọc hiểu hàm Java được cấp trong đề. Tìm và chỉ rõ tối thiểu 6 lỗi (Defect Type, Line Number, Description, Suggested Fix). Phân loại chính xác: Logic Error, Missing Validation, Wrong Data Type, Off-by-one Error.',
      'Question 2 (3.0đ) — Component Test Case Design (White-box): Vẽ Control Flow Graph (CFG) cho hàm tính phí. Tính độ phức tạp Cyclomatic V(G) = E - N + 2P = P + 1. Thiết kế bộ test case tối thiểu (ID, Input parameters, Expected Return, Coverage Target) để đạt 100% Branch Coverage (Decision Coverage).',
      'Question 3 - Task 1 (2.0đ) — Functional Test Cases (Black-box): Áp dụng phân vùng tương đương (EP) và phân tích giá trị biên (BVA) viết bảng Test Cases (ID, Description, Pre-condition, Test Steps, Expected Result, Actual Result, Status Pass/Fail). Bắt buộc phải có đúng 2 test case FAIL tương ứng với 2 Bug trong hệ thống.',
      'Question 3 - Task 2 (2.0đ) — Bug Report: Lập 2 phiếu báo cáo lỗi chuẩn (BugID, Summary, Steps to Reproduce, Expected vs Actual Result, Severity: Blocker/Critical/Major, Priority: P1/P2/P3).',
    ],
    images: [
      {
        pageNumber: 1,
        title: 'Trang 1 — Yêu cầu Question 1 (Code Review)',
        url: '/images/swt-pe/fa26-pe/page_1.webp',
      },
      {
        pageNumber: 2,
        title: 'Trang 2 — Mã nguồn Java bài toán tính phí',
        url: '/images/swt-pe/fa26-pe/page_2.webp',
      },
      {
        pageNumber: 3,
        title: 'Trang 3 — Yêu cầu Question 2 (CFG & Branch Coverage)',
        url: '/images/swt-pe/fa26-pe/page_3.webp',
      },
      {
        pageNumber: 4,
        title: 'Trang 4 — Yêu cầu Question 3 (Black-box & Barem điểm)',
        url: '/images/swt-pe/fa26-pe/page_4.webp',
      },
    ],
    materialsZipUrl: '/materials/swt-pe/sp26-b5-pe_template.docx',
    solutionTips: [
      '⏱️ Phân bổ thời gian 85 phút: 20p làm Q1 (tìm 6 bugs trong code) -> 30p làm Q2 (vẽ CFG, tính V(G), viết test cases branch coverage) -> 25p làm Q3 (viết test case hộp đen & 2 bug reports) -> 10p rà soát lại file nộp bài.',
      '🔍 Mẹo làm Q1 (Code Review): Quét từ trên xuống dưới theo thứ tự: 1) Kiểu dữ liệu biến (int fare thay vì double fare); 2) Khởi tạo biến cục bộ; 3) Điều kiện rẽ nhánh if/else if có bị thiếu trường hợp biên không (ví dụ < thay vì <=); 4) Biểu thức logic and/or (&& vs ||); 5) Vòng lặp có nguy cơ lặp vô tận không; 6) Xử lý ngoại lệ NullPointerException hoặc chia cho 0.',
      '📐 Mẹo làm Q2 (CFG & V(G)): Mỗi câu lệnh if là một decision node. Với if có toán tử phức hợp (A && B), nếu tách 2 node riêng thì mỗi điều kiện đơn là 1 decision node. Đảm bảo mọi cạnh True/False của mỗi nhánh đều được phủ bởi ít nhất một Test Case.',
      '📋 Mẹo làm Q3 (Bug Report): Trong phần Actual Result, phải mô tả CHÍNH XÁC hành vi sai của hệ thống (ví dụ: "System returned fare = 0 instead of expected 50,000 VND"). Tránh viết chung chung kiểu "System error".',
    ],
  },
  {
    id: 'swt-pe-su26-b5',
    semester: 'SU26',
    title: 'SWT301 — SU26 Block 5 — PE (Đề Thi Thực Hành)',
    code: 'SWT301_SU26_B5_PE',
    description:
      'Đề thi thực hành kỳ Summer 2026 Block 5. Bài toán kiểm thử module xử lý đơn hàng và tính điểm thưởng khách hàng thân thiết.',
    durationMinutes: 85,
    scenarioSummary:
      'Hệ thống quản lý điểm tích lũy và áp mã giảm giá cho khách hàng dựa trên hạng thẻ (Bronze, Silver, Gold, Platinum). Sinh viên thực hiện kiểm thử hộp trắng cho hàm phân loại khách hàng và kiểm thử hộp đen cho giao dịch thanh toán.',
    requirements: [
      'Question 1 (3.0đ): Rà soát mã nguồn hàm loyaltyPointsCalculator(), tìm và chỉ rõ 6 lỗi nghiêm trọng (kiểu dữ liệu tích lũy, điều kiện biên của hạng thẻ, lỗi chia tỷ lệ).',
      'Question 2 (3.0đ): Vẽ sơ đồ dòng điều khiển (CFG), xác định tập đường cơ sở (Basis Path Testing) và lập bảng ca kiểm thử đạt 100% Decision Coverage.',
      'Question 3 (4.0đ): Thiết kế bảng quyết định (Decision Table) cho quy tắc áp dụng Voucher giảm giá và viết 2 Bug Report chi tiết cho các ca kiểm thử thất bại.',
    ],
    images: [
      {
        pageNumber: 1,
        title: 'Trang 1 — Ngữ cảnh bài toán & Mã nguồn Q1',
        url: '/images/swt-pe/su26-b5-pe/page_1.webp',
      },
      {
        pageNumber: 2,
        title: 'Trang 2 — Yêu cầu kiểm thử hộp trắng Q2',
        url: '/images/swt-pe/su26-b5-pe/page_2.webp',
      },
      {
        pageNumber: 3,
        title: 'Trang 3 — Kịch bản hộp đen & Mẫu báo cáo lỗi Q3',
        url: '/images/swt-pe/su26-b5-pe/page_3.webp',
      },
    ],
    materialsZipUrl: '/materials/swt-pe/su26-pe_template.xlsx',
    solutionTips: [
      '💡 Chú ý lỗi chuyển đổi kiểu số (integer division): biểu thức `int discount = total * (percent / 100)` sẽ luôn bằng 0 nếu percent < 100 vì `percent / 100` ra phép chia nguyên!',
      '💡 Khi xác định độ phức tạp Cyclomatic: V(G) = P + 1 (với P là số nút quyết định vị ngữ đơn). Hãy đếm cẩn thận từng lệnh if, while, for, case.',
    ],
  },
  {
    id: 'swt-pe-su26-b5-re',
    semester: 'SU26',
    title: 'SWT301 — SU26 Block 5 — PE Retake (Đề Thi Lại)',
    code: 'SWT301_SU26_B5_PE_RE',
    description:
      'Đề thi thực hành kỳ Summer 2026 Block 5 đợt thi lại. Kiểm thử chức năng đặt vé xem phim và chọn ghế VIP/Standard kèm phụ phí.',
    durationMinutes: 85,
    scenarioSummary:
      'Xử lý logic tính tiền vé xem phim dựa trên loại ghế, khung giờ (Suất chiếu sớm, Giờ vàng, Suất khuya), và độ tuổi khán giả (Trẻ em, Sinh viên, Người cao tuổi).',
    requirements: [
      'Question 1 (3.0đ): Code Inspection đoạn mã đặt vé Java, tìm 6 lỗi cú pháp, logic gán giá vé và bỏ sót kiểm tra ghế đã được đặt trước đó.',
      'Question 2 (3.0đ): Vẽ sơ đồ CFG, tính Cyclomatic Complexity và liệt kê các test case độc lập tuyến tính.',
      'Question 3 (4.0đ): Thiết kế test cases phân vùng tương đương (EP) cho số lượng vé mua tối đa (1 đến 8 vé) và viết Bug Report cho lỗi tính sai phụ thu ghế VIP.',
    ],
    images: [
      {
        pageNumber: 1,
        title: 'Trang 1 — Đề bài Code Review & Mã nguồn',
        url: '/images/swt-pe/su26-b5-pe-re/page_1.webp',
      },
      {
        pageNumber: 2,
        title: 'Trang 2 — Đặc tả hàm tính giá vé',
        url: '/images/swt-pe/su26-b5-pe-re/page_2.webp',
      },
      {
        pageNumber: 3,
        title: 'Trang 3 — Yêu cầu độ phủ nhánh',
        url: '/images/swt-pe/su26-b5-pe-re/page_3.webp',
      },
      {
        pageNumber: 4,
        title: 'Trang 4 — Barem điểm chi tiết',
        url: '/images/swt-pe/su26-b5-pe-re/page_4.webp',
      },
    ],
    materialsZipUrl: '/materials/swt-pe/sp26-b5-pe_template.docx',
    solutionTips: [
      '⚠️ Lỗi thường gặp: Khi sinh viên viết test case cho số vé [1..8], các giá trị biên cần kiểm tra là 0, 1, 8, 9 (2-value BVA) hoặc 0, 1, 2, 7, 8, 9 (3-value BVA).',
      '⚠️ Không được bỏ sót các ca kiểm thử ngoại lệ như số lượng âm hoặc chuỗi ký tự không hợp lệ.',
    ],
  },
  {
    id: 'swt-pe-su26',
    semester: 'SU26',
    title: 'SWT301 — SU26 — PE (Đề Thi Thực Hành Đợt 1 Mã 287177)',
    code: 'SWT301_SU26_PE_287177',
    description:
      'Đề thi thực hành kỳ Summer 2026 chính thức PaperNo 1 (Mã 287177). Kiểm thử chức năng Rút tiền ATM (checkWithdrawal) và Chuyển tiền liên ngân hàng (Interbank Transfer).',
    durationMinutes: 85,
    scenarioSummary:
      'Bài toán ngân hàng lõi: 1) Hàm `checkWithdrawal(accountBalance, withdrawAmount, accountType)` kiểm tra số dư tối thiểu, hạn mức rút tiền ngày và phí rút tiền; 2) Module Chuyển khoản liên ngân hàng với mã OTP xác thực và hạn mức giao dịch.',
    requirements: [
      'Sheet Q1 (Issue No, Description, Line, Fix Suggestion): Kiểm tra tĩnh mã nguồn Java kiểm tra giao dịch rút tiền. Tìm ít nhất 5 lỗi logic và sai kiểu dữ liệu.',
      'Sheet Q2 (checkWithdrawal 100% Branch Coverage): Vẽ CFG và thiết kế tối thiểu 7 Test Cases để đạt 100% branch coverage (mỗi test case đạt chuẩn 0.43đ, trừ 0.1đ nếu thiếu trường thông tin).',
      'Sheet Q3 (Interbank Transfer Functional Tests): Lập bảng kiểm thử chức năng Table 3.3 chia làm 2 phần: Validation Test Cases (1.0đ) và Business Flow Test Cases (2.0đ) + 2 Bug Reports.',
    ],
    images: [
      {
        pageNumber: 1,
        title: 'Trang 1 — Giới thiệu đề thi & Hướng dẫn nộp bài',
        url: '/images/swt-pe/su26-pe/page_1.webp',
      },
      {
        pageNumber: 2,
        title: 'Trang 2 — Q1: Mã nguồn Java hàm kiểm tra giao dịch',
        url: '/images/swt-pe/su26-pe/page_2.webp',
      },
      {
        pageNumber: 3,
        title: 'Trang 3 — Q2: Yêu cầu hàm checkWithdrawal',
        url: '/images/swt-pe/su26-pe/page_3.webp',
      },
      {
        pageNumber: 4,
        title: 'Trang 4 — Q3: Đặc tả chuyển tiền liên ngân hàng',
        url: '/images/swt-pe/su26-pe/page_4.webp',
      },
      {
        pageNumber: 5,
        title: 'Trang 5 — Barem chấm điểm chính thức FPT',
        url: '/images/swt-pe/su26-pe/page_5.webp',
      },
    ],
    materialsZipUrl: '/materials/swt-pe/su26-pe_template.xlsx',
    solutionTips: [
      '🎯 Barem Q2 quy định rất rõ: "Tối thiểu 7 TCs để đạt 100% branch coverage, mỗi TC đúng ~0.43đ. Mỗi lỗi thiếu thông tin trừ 0.1đ, mỗi TC thừa trừ 0.1đ". Hãy vẽ CFG trước để biết đúng 7 nhánh cần phủ!',
      '💡 Trong Q1, lỗi kinh điển: `double minBalance = 50000; int amount; if (balance - amount < minBalance)` nhưng lại không kiểm tra `amount <= 0` dẫn đến lỗ hổng rút số tiền âm để cộng thêm tiền!',
    ],
  },
  {
    id: 'swt-pe-su26-re',
    semester: 'SU26',
    title: 'SWT301 — SU26 — PE Retake (Đề Thi Lại)',
    code: 'SWT301_SU26_PE_RE',
    description:
      'Đề thi thực hành kỳ Summer 2026 đợt thi lại. Kiểm thử chức năng tính cước taxi công nghệ (Grab/Be/XanhSM) theo giờ cao điểm và quãng đường.',
    durationMinutes: 85,
    scenarioSummary:
      'Hàm tính cước phí xe công nghệ: Quãng đường mở cửa (2km đầu), quãng đường tiếp theo (km 3 đến 10), và cước đường dài (>10km), nhân với hệ số phụ thu thời tiết và giờ cao điểm.',
    requirements: [
      'Question 1 (3.0đ): Code Review hàm calculateTaxiFare(), chỉ rõ 6 lỗi (nhầm lẫn giữa km lũy tiến và km chẵn, thiếu validate số âm, lỗi làm tròn tiền).',
      'Question 2 (3.0đ): Thiết kế tối thiểu 6 ca kiểm thử hộp trắng đạt 100% Decision Coverage.',
      'Question 3 (4.0đ): Bảng quyết định Decision Table kết hợp phụ phí thời tiết mưa/ngập và lập 2 Bug Report.',
    ],
    images: [
      {
        pageNumber: 1,
        title: 'Trang 1 — Đề bài & Code tính cước xe',
        url: '/images/swt-pe/su26-pe-re/page_1.webp',
      },
      {
        pageNumber: 2,
        title: 'Trang 2 — Bảng biểu phí và phụ thu cao điểm',
        url: '/images/swt-pe/su26-pe-re/page_2.webp',
      },
      {
        pageNumber: 3,
        title: 'Trang 3 — Barem chấm điểm PE',
        url: '/images/swt-pe/su26-pe-re/page_3.webp',
      },
    ],
    materialsZipUrl: '/materials/swt-pe/su26-pe_template.xlsx',
    solutionTips: [
      '🚖 Bẫy tính cước bậc thang: 15km không phải là 15 * 12,000 mà là 2km * 20,000 + 8km * 15,000 + 5km * 12,000. Kiểm tra kỹ xem code có dùng biểu thức bậc thang (tiered pricing) chính xác hay không!',
    ],
  },
  {
    id: 'swt-pe-sp26-b5',
    semester: 'SP26',
    title: 'SWT301 — SP26 Block 5 — PE (Đề Thi Thực Hành)',
    code: 'SWT301_SP26_B5_PE',
    description:
      'Đề thi thực hành kỳ Spring 2026 Block 5 kèm Template Word chính thức FPT. Gồm 3 câu: Code review (3.0đ), Component Test Case Design (3.0đ), Functional testing & Bug reporting (4.0đ).',
    durationMinutes: 85,
    scenarioSummary:
      'Module xác thực tài khoản và phân quyền truy cập hệ thống quản trị bệnh viện (Bác sĩ, Y tá, Lễ tân, Quản trị viên) với mã PIN và thời gian hiệu lực phiên đăng nhập.',
    requirements: [
      'Question 1 (3.0đ): Điền vào bảng mẫu Word: No. | Line Number | Defect Type | Description | Suggested Fix (tối thiểu 6 defects: logic error, missing validation, naming convention, code maintainability).',
      'Question 2 (3.0đ): Component Test Case Design: ID | Function name(param1, param2...) | Expected Output | Coverage Target (Statement coverage, Branch coverage).',
      'Question 3 - Task 1 (2.0đ): Bảng Test Cases hộp đen gồm đúng 2 test case FAIL tương ứng với 2 Bug trong hệ thống.',
      'Question 3 - Task 2 (2.0đ): Lập 2 phiếu Bug Report đầy đủ các mục: BugID, Reporter, Submit date, Summary, Steps to Reproduce, Expected vs Actual result, Severity, Priority.',
    ],
    images: [
      {
        pageNumber: 1,
        title: 'Trang 1 — Yêu cầu Question 1 & Bảng mẫu Defect',
        url: '/images/swt-pe/sp26-b5-pe/page_1.webp',
      },
      {
        pageNumber: 2,
        title: 'Trang 2 — Đoạn mã nguồn Java kiểm tra phân quyền',
        url: '/images/swt-pe/sp26-b5-pe/page_2.webp',
      },
      {
        pageNumber: 3,
        title: 'Trang 3 — Yêu cầu Question 2 & Question 3',
        url: '/images/swt-pe/sp26-b5-pe/page_3.webp',
      },
      {
        pageNumber: 4,
        title: 'Trang 4 — Hướng dẫn làm bài trên Template Word',
        url: '/images/swt-pe/sp26-b5-pe/page_4.webp',
      },
      {
        pageNumber: 5,
        title: 'Trang 5 — Barem chấm điểm chính thức',
        url: '/images/swt-pe/sp26-b5-pe/page_5.webp',
      },
    ],
    materialsZipUrl: '/materials/swt-pe/sp26-b5-pe_template.docx',
    solutionTips: [
      '📄 Sử dụng đúng template `sp26-b5-pe_template.docx` được đính kèm để điền câu trả lời, không tự ý thay đổi cấu trúc bảng.',
      '🛡️ Kiểm tra lỗi phân quyền: Xem xét các trường hợp role không hợp lệ, phân biệt chữ hoa chữ thường (case-sensitive equals), và lỗ hổng session timeout bằng 0.',
    ],
  },
  {
    id: 'swt-pe-sp26',
    semester: 'SP26',
    title: 'SWT301 — SP26 — PE (Đề Thi Thực Hành Đợt 1)',
    code: 'SWT301_SP26_PE_01',
    description:
      'Đề thi thực hành kỳ Spring 2026 chính thức đợt 1 kèm Template Excel. Kiểm thử hệ thống tính lương nhân viên và hoa hồng theo doanh số bán hàng.',
    durationMinutes: 85,
    scenarioSummary:
      'Module tính lương kết hợp: Lương cơ bản, phụ cấp thâm niên, chỉ tiêu KPI, và hoa hồng bậc thang theo doanh thu bán hàng.',
    requirements: [
      'Question 1 (3.0đ): Code Review trong file Excel, phát hiện các lỗi tính tràn số (integer overflow), sai tỷ lệ hoa hồng và không kiểm tra giá trị âm.',
      'Question 2 (3.0đ): Vẽ CFG, xác định tập kiểm thử đạt 100% Branch Coverage cho hàm tính thưởng KPI.',
      'Question 3 (4.0đ): Phân tích giá trị biên BVA cho các mốc doanh số (0, 10 triệu, 50 triệu, 100 triệu) và viết 2 Bug Report chuẩn.',
    ],
    images: [
      {
        pageNumber: 1,
        title: 'Trang 1 — Đề bài tổng quan & Quy định',
        url: '/images/swt-pe/sp26-pe/page_1.webp',
      },
      {
        pageNumber: 2,
        title: 'Trang 2 — Q1: Code Review tính hoa hồng',
        url: '/images/swt-pe/sp26-pe/page_2.webp',
      },
      {
        pageNumber: 3,
        title: 'Trang 3 — Q2: Yêu cầu độ phủ nhánh',
        url: '/images/swt-pe/sp26-pe/page_3.webp',
      },
      {
        pageNumber: 4,
        title: 'Trang 4 — Q3: Kịch bản kiểm thử chức năng',
        url: '/images/swt-pe/sp26-pe/page_4.webp',
      },
      {
        pageNumber: 5,
        title: 'Trang 5 — Mẫu phiếu báo cáo lỗi',
        url: '/images/swt-pe/sp26-pe/page_5.webp',
      },
    ],
    materialsZipUrl: '/materials/swt-pe/sp26-pe_template.xlsx',
    solutionTips: [
      '📊 Đối với bài toán hoa hồng bậc thang, vẽ bảng Boundary Value Analysis trước: Giá trị ngay dưới biên (Min- / Nom-), ngay tại biên (Min/Nom), và ngay trên biên (Min+ / Nom+) để không sót ca kiểm thử.',
    ],
  },
  {
    id: 'swt-pe-sp26-re',
    semester: 'SP26',
    title: 'SWT301 — SP26 — PE Retake (Đề Thi Lại)',
    code: 'SWT301_SP26_PE_RE',
    description:
      'Đề thi thực hành kỳ Spring 2026 đợt thi lại. Kiểm thử chức năng xếp loại học lực sinh viên và điều kiện nhận học bổng của trường đại học.',
    durationMinutes: 85,
    scenarioSummary:
      'Hàm tính điểm trung bình tích lũy GPA (thang điểm 10 và thang điểm 4), xét điều kiện qua môn (tất cả các môn >= 4.0 và GPA >= 5.0) và tiêu chí xét học bổng khuyến khích học tập.',
    requirements: [
      'Question 1 (3.0đ): Code Review hàm calculateGPA(), chỉ ra 6 lỗi (chia cho 0 khi tổng số tín chỉ = 0, sai làm tròn số thập phân, lỗi so sánh float/double).',
      'Question 2 (3.0đ): Vẽ sơ đồ dòng điều khiển CFG, tính V(G) và lập danh sách ca kiểm thử phủ 100% nhánh.',
      'Question 3 (4.0đ): Thiết kế bảng quyết định (Decision Table) cho 3 điều kiện học bổng (GPA >= 8.0, rèn luyện >= 80, không nợ môn) và viết 2 Bug Report.',
    ],
    images: [
      {
        pageNumber: 1,
        title: 'Trang 1 — Yêu cầu kiểm tra tĩnh & Mã nguồn',
        url: '/images/swt-pe/sp26-pe-re/page_1.webp',
      },
      {
        pageNumber: 2,
        title: 'Trang 2 — Quy tắc xét học bổng & Decision Table',
        url: '/images/swt-pe/sp26-pe-re/page_2.webp',
      },
      {
        pageNumber: 3,
        title: 'Trang 3 — Barem chấm điểm chính thức',
        url: '/images/swt-pe/sp26-pe-re/page_3.webp',
      },
    ],
    materialsZipUrl: '/materials/swt-pe/sp26-b5-pe_template.docx',
    solutionTips: [
      '🎓 Bẫy xét học bổng: Hãy chú ý điều kiện "Không có môn nào dưới 5.0". Dù GPA = 9.5 nhưng nếu có 1 môn 4.9 thì vẫn KHÔNG được nhận học bổng!',
      '📝 Khi viết Steps to Reproduce trong Bug Report: Phải ghi rõ từng bước từ lúc nhập điểm, nhấn nút Tính điểm, đến kết quả hiển thị sai trên màn hình.',
    ],
  },
];
