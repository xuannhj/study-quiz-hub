import type { Chapter } from '../../../types/study';

export const swtChapters: Chapter[] = [
  {
    id: 'swt-ch1',
    order: 1,
    title: 'Chương 1: Fundamentals of Testing (Đại Cương & 7 Nguyên Tắc Kiểm Thử)',
    summary:
      'Mục tiêu và bản chất của kiểm thử, phân biệt Error vs Defect vs Failure, 7 nguyên tắc kiểm thử kinh điển của ISTQB, quy trình kiểm thử cơ bản (Fundamental Test Process), tâm lý học kiểm thử, đạo đức nghề nghiệp và ứng dụng AI trong testing.',
    sections: [
      {
        id: 'swt-ch1-sec1',
        type: 'concept',
        title: 'Khái niệm cốt lõi: Bản chất & Mục tiêu của Kiểm thử',
        content: `### 1. Kiểm thử phần mềm là gì?
- Kiểm thử phần mềm không chỉ đơn thuần là chạy chương trình để xem nó có chạy được không. Đó là một **tiến trình xuyên suốt vòng đời phát triển** bao gồm lập kế hoạch, phân tích, thiết kế, thực thi và đánh giá kết quả nhằm xác định xem sản phẩm có đáp ứng các yêu cầu đã định và phù hợp với mục đích sử dụng hay không.
- **Mục tiêu chính của kiểm thử:**
  - Tìm ra các lỗi (defects) và khiếm khuyết trong phần mềm càng sớm càng tốt.
  - Ngăn ngừa lỗi phát sinh trong các giai đoạn sau.
  - Tăng cường sự tự tin về mức độ chất lượng của phần mềm.
  - Cung cấp thông tin đầy đủ cho các bên liên quan (stakeholders) ra quyết định phát hành.
  - Đáp ứng các yêu cầu pháp lý, tiêu chuẩn công nghiệp hoặc hợp đồng.

### 2. Bộ ba thuật ngữ kinh điển: Error vs Defect vs Failure
- **Error (Mistake - Sai sót):** Một hành động sai lầm của con người (developer, BA, designer). Ví dụ: Lập trình viên mệt mỏi gõ nhầm \`>\` thành \`>=\`.
- **Defect (Fault / Bug - Lỗi / Khuyết tật):** Sai sót trong mã nguồn, tài liệu hoặc cấu hình được tạo ra do Error. Ví dụ: Dòng code mang lỗi logic nằm im trong repository.
- **Failure (Sự cố / Thất bại):** Một sự sai lệch (deviation) giữa hành vi thực tế của phần mềm và hành vi kỳ vọng khi phần mềm được thực thi. Failure chỉ xảy ra khi code chứa Defect được chạy (executed)!
> **Quy luật nhân quả:** Con người phạm **Error** $\\rightarrow$ Tạo ra **Defect** trong code $\\rightarrow$ Khi chạy gặp điều kiện kích hoạt sẽ dẫn đến **Failure**. (Lưu ý: Không phải mọi Defect đều dẫn đến Failure, ví dụ: Dead code không bao giờ chạy tới).

### 3. Verification vs Validation
- **Verification (Xác minh - "Are we building the product right?"):** Kiểm tra xem sản phẩm ở mỗi giai đoạn có đáp ứng đúng các đặc tả (specifications) của giai đoạn trước đó không. Thường dùng kỹ thuật tĩnh (Reviews, Inspections, Walkthroughs).
- **Validation (Xác nhận - "Are we building the right product?"):** Kiểm tra xem sản phẩm cuối cùng có đáp ứng đúng nhu cầu thực tế và mong đợi của người dùng cuối trong môi trường thực hay không. Thường dùng kỹ thuật động (Dynamic testing, UAT).`,
      },
      {
        id: 'swt-ch1-sec2',
        type: 'comparison',
        title: 'Bảng phân biệt: Error vs Defect vs Failure & Verification vs Validation',
        content: `| Tiêu chí | Error (Mistake) | Defect (Bug / Fault) | Failure |
|---|---|---|---|
| **Bản chất** | Hành vi sai của con người | Lỗi nằm tĩnh trong tài liệu/code | Hiện tượng sai lệch khi chạy chương trình |
| **Chủ thể** | Con người (Dev, BA, Tester) | Tài liệu, Code, Cấu hình | Phần mềm đang thực thi (Runtime) |
| **Thời điểm phát hiện** | Lúc con người suy nghĩ/thao tác | Qua Static Testing (Review, Inspection) | Qua Dynamic Testing hoặc lúc khách hàng dùng |
| **Ví dụ** | Dev tính nhầm công thức thuế | Code ghi \`tax = income * 0.5\` thay vì \`0.05\` | Hệ thống trừ của khách 5 triệu thay vì 500 nghìn |

---

### Verification vs Validation
| Đặc điểm | Verification (Xác minh) | Validation (Xác nhận) |
|---|---|---|
| **Câu hỏi cốt lõi** | "Are we building the product right?" | "Are we building the right product?" |
| **Tiêu chuẩn đối chiếu** | Đặc tả thiết kế, tài liệu SRS, kiến trúc | Nhu cầu người dùng thực tế, bối cảnh vận hành |
| **Phương pháp chính** | Static testing: Reviews, Walkthroughs, Inspections | Dynamic testing: System test, Acceptance test (UAT) |
| **Thực hiện bởi ai** | Dev team, Reviewers, QA | Tester, Khách hàng, End-users |`,
      },
      {
        id: 'swt-ch1-sec3',
        type: 'keywords',
        title: '7 Nguyên Tắc Kiểm Thử (7 Testing Principles - ISTQB)',
        content: `1. **Testing shows the presence of defects, not their absence (Kiểm thử chỉ ra sự hiện diện của lỗi, không chứng minh không có lỗi):**
   - Testing có thể chứng minh phần mềm có lỗi, nhưng KHÔNG BAO GIỜ chứng minh được phần mềm hoàn toàn sạch 100% không còn lỗi nào.
2. **Exhaustive testing is impossible (Kiểm thử kiệt quệ là bất khả thi):**
   - Việc thử nghiệm tất cả các tổ hợp đầu vào và tiền điều kiện là không thể (trừ các trường hợp cực kỳ nhỏ). Do đó phải dùng **phân tích rủi ro (risk analysis)** và kỹ thuật thiết kế để chọn lọc test case tối ưu.
3. **Early testing saves time and money (Kiểm thử sớm giúp tiết kiệm thời gian và chi phí):**
   - Lỗi tìm thấy ở giai đoạn Requirement sửa rất rẻ; lỗi để lọt đến Production sửa đắt gấp hàng chục đến hàng trăm lần (**Defect Cost Escalation**).
4. **Defects cluster together (Lỗi tập trung cục bộ - Nguyên lý Pareto 80/20):**
   - Phần lớn lỗi thường tập trung ở một số ít module phức tạp, nhiều thay đổi hoặc nhiều phụ thuộc (khoảng 80% lỗi nằm trong 20% module).
5. **Beware of the pesticide paradox (Nghịch lý thuốc trừ sâu):**
   - Nếu cứ lặp đi lặp lại cùng một bộ test case cũ thì dần dần chúng sẽ không tìm thêm được lỗi mới nữa (như sâu bọ kháng thuốc). Cần định kỳ cập nhật và viết thêm test case mới.
6. **Testing is context dependent (Kiểm thử phụ thuộc vào ngữ cảnh):**
   - Cách test một ứng dụng thương mại điện tử khác hoàn toàn với kiểm thử phần mềm điều khiển tên lửa, thiết bị y tế hay ứng dụng ngân hàng.
7. **Absence-of-errors is a fallacy (Ngụy biện về sự vắng bóng của lỗi):**
   - Một phần mềm được test kỹ không thấy lỗi nhưng nếu không giải quyết được nhu cầu thực tế của người dùng thì vẫn là một sản phẩm thất bại.`,
      },
      {
        id: 'swt-ch1-sec4',
        type: 'exam_tip',
        title: 'Bẫy đề thi & Quy trình kiểm thử cơ bản (Fundamental Test Process)',
        content: `### Quy trình kiểm thử cơ bản (5 giai đoạn ISTQB)
1. **Test Planning & Control:** Xác định phạm vi, mục tiêu, rủi ro, phân bổ nguồn lực; giám sát tiến độ so với kế hoạch.
2. **Test Analysis & Design:** Phân tích tài liệu yêu cầu (Test Basis), xác định Test Conditions và thiết kế Test Cases, Test Data.
3. **Test Implementation & Execution:** Sắp xếp Test Cases thành Test Suites, thiết lập môi trường test, chạy test, so sánh Actual vs Expected và log Defect.
4. **Evaluating Exit Criteria & Reporting:** Đánh giá xem đã đạt điều kiện dừng test chưa (độ phủ code, số bug tồn đọng), viết Test Summary Report.
5. **Test Closure Activities:** Thu thập dữ liệu bài học kinh nghiệm, bàn giao testware, đóng các bug báo cáo và lưu trữ môi trường.

### 🎯 Các bẫy trắc nghiệm hay gặp:
- **Bẫy 1:** Đề hỏi *"Testing có chứng minh được phần mềm 100% không còn bug không?"* $\\rightarrow$ Đáp án luôn là **KHÔNG** (Principle 1).
- **Bẫy 2:** Phân biệt **Test Planning** (lập kế hoạch lúc đầu) vs **Test Control** (theo dõi liên tục và điều chỉnh kế hoạch khi có biến động).
- **Bẫy 3:** Phân biệt **Test Design** (tạo ra các test cases mức logic) vs **Test Implementation** (tạo dữ liệu cụ thể, viết test script và gom thành test suite).
- **Bẫy 4 (Psychology):** Giao tiếp giữa Tester và Dev phải khách quan, tập trung vào sản phẩm chứ không chỉ trích cá nhân.
- **Bẫy 5 (Code of Ethics):** Nguyên tắc hàng đầu của kiểm thử viên là phục vụ lợi ích công cộng (**Public Interest**).`,
      },
    ],
  },
  {
    id: 'swt-ch2',
    order: 2,
    title: 'Chương 2: Testing Throughout the SDLC (Kiểm Thử Theo Vòng Đời)',
    summary:
      'Các mô hình phát triển phần mềm (V-Model, Agile), 4 cấp độ kiểm thử (Component, Integration, System, Acceptance), 4 loại kiểm thử (Functional, Non-functional, Structural, Change-related) và Kiểm thử bảo trì (Maintenance Testing).',
    sections: [
      {
        id: 'swt-ch2-sec1',
        type: 'concept',
        title: '4 Cấp độ Kiểm thử (Test Levels)',
        content: `### 1. Component Testing (Unit Testing - Kiểm thử đơn vị)
- **Đối tượng:** Các đơn vị nhỏ nhất có thể kiểm thử riêng biệt (hàm, class, module).
- **Test Basis:** Chi tiết thiết kế (Detailed design), code, data model.
- **Người thực hiện:** Lập trình viên (Developer).
- **Kỹ thuật:** White-box testing, Mocking, Stubs & Drivers. Dùng JUnit, NUnit, PyTest.

### 2. Integration Testing (Kiểm thử tích hợp)
- **Mục tiêu:** Kiểm tra giao tiếp và tương tác giữa các thành phần đã tích hợp.
- **Phân loại:**
  - *Component Integration Testing:* Tương tác giữa các module code.
  - *System Integration Testing:* Tương tác giữa hệ thống này với hệ thống khác (API, microservices, 3rd party).
- **Chiến lược tích hợp:**
  - **Big Bang:** Nối tất cả module lại cùng lúc rồi mới test $\\rightarrow$ Cực kỳ khó cô lập vị trí lỗi!
  - **Incremental (Tích lũy):**
    - *Top-Down:* Tích hợp từ module cấp cao xuống, cần dùng **Stubs** (module giả lập cấp dưới).
    - *Bottom-Up:* Tích hợp từ module cấp thấp lên, cần dùng **Drivers** (chương trình gọi giả lập cấp trên).

### 3. System Testing (Kiểm thử hệ thống)
- **Mục tiêu:** Kiểm tra toàn bộ hệ thống hoàn chỉnh xem có đáp ứng đúng tài liệu yêu cầu (SRS / FRD).
- **Test Basis:** SRS, Use Cases, User Stories, Rủi ro hệ thống.
- **Môi trường:** Càng giống môi trường Production càng tốt để tránh sai lệch môi trường.
- **Bao gồm:** Cả kiểm thử chức năng lẫn phi chức năng (Performance, Security, Reliability).

### 4. Acceptance Testing (Kiểm thử chấp nhận)
- **Mục tiêu:** Xây dựng sự tự tin rằng hệ thống sẵn sàng bàn giao và đưa vào sử dụng thực tế.
- **Các hình thức:**
  - **User Acceptance Testing (UAT):** Do người dùng nghiệp vụ thực hiện.
  - **Operational Acceptance Testing (OAT):** Kiểm tra backup, restore, disaster recovery, bảo mật.
  - **Alpha Testing:** Thực hiện tại địa điểm của nhà phát triển (in-house) bởi người dùng hoặc nhóm test độc lập.
  - **Beta Testing (Field Testing):** Thực hiện tại môi trường của khách hàng / người dùng cuối thực tế.`,
      },
      {
        id: 'swt-ch2-sec2',
        type: 'comparison',
        title: 'Bảng so sánh: 4 Loại Kiểm thử & Confirmation vs Regression Testing',
        content: `### 4 Loại Kiểm thử (Test Types)
| Loại kiểm thử | Trọng tâm kiểm tra | Kỹ thuật áp dụng | Ví dụ |
|---|---|---|---|
| **Functional Testing** | Hệ thống làm **ĐƯỢC GÌ** (What the system does) | Black-box | Đăng nhập đúng password thì vào được dashboard |
| **Non-functional Testing** | Hệ thống hoạt động **NHƯ THẾ NÀO** (How well it works) | Black-box / Công cụ đo | Tải 10,000 users cùng lúc phản hồi < 2s; bảo mật SSL |
| **Structural Testing** | Dựa trên cấu trúc nội bộ mã nguồn/kiến trúc | White-box | Đạt 100% Statement Coverage, 85% Branch Coverage |
| **Change-related Testing** | Kiểm tra các thay đổi sau khi sửa code | Cả Black-box & White-box | Re-testing và Regression Testing |

---

### Phân biệt Confirmation Testing vs Regression Testing
| Tiêu chí | Confirmation Testing (Re-testing) | Regression Testing (Kiểm thử hồi quy) |
|---|---|---|
| **Mục đích** | Kiểm tra lại xem con bug cụ thể đã được sửa thành công chưa | Đảm bảo việc sửa bug / thêm code mới KHÔNG làm hỏng tính năng cũ |
| **Phạm vi** | Chỉ chạy lại đúng các test case đã fail vì con bug đó | Chạy lại tập hợp test suite diện rộng trên các module liên quan |
| **Thời điểm chạy** | Ngay sau khi Developer thông báo đã fix bug | Sau khi Re-testing thành công và merge code |
| **Tự động hóa** | Thường làm thủ công nhanh | **Rất phù hợp để tự động hóa (Automation)** vì phải chạy lặp lại nhiều lần |`,
      },
      {
        id: 'swt-ch2-sec3',
        type: 'keywords',
        title: 'Kiểm Thử Bảo Trì (Maintenance Testing) & V-Model',
        content: `### V-Model (Mô hình chữ V)
- Minh họa mối quan hệ song song giữa mỗi giai đoạn phát triển và giai đoạn kiểm thử tương ứng:
  - *Business Requirements* $\\leftrightarrow$ *Acceptance Testing*
  - *System Requirements / Architecture* $\\leftrightarrow$ *System Testing*
  - *High-Level Design* $\\leftrightarrow$ *Integration Testing*
  - *Detailed Design / Coding* $\\leftrightarrow$ *Component / Unit Testing*
- **Nguyên lý cốt lõi:** Việc **thiết kế test case phải được bắt đầu ngay từ khi viết tài liệu yêu cầu**, chứ không đợi đến khi code xong mới nghĩ cách test!

### Kiểm Thử Bảo Trì (Maintenance Testing)
- Diễn ra trên một hệ thống **đã được triển khai và đang hoạt động (in production)**.
- **3 Nguyên nhân kích hoạt bảo trì (Triggers for maintenance):**
  1. *Modification (Sửa đổi/Nâng cấp):* Thêm tính năng mới, sửa lỗi phát sinh trong vận hành.
  2. *Migration (Di chuyển):* Chuyển phần mềm sang hệ điều hành mới, database mới, nền tảng đám mây mới. Cần test cả tính năng lẫn conversion data.
  3. *Retirement (Ngừng hoạt động):* Hủy bỏ hệ thống, cần test quy trình sao lưu và lưu trữ dữ liệu (Data archiving).
- **Impact Analysis (Phân tích tác động):** Xác định những vùng nào của hệ thống có thể bị ảnh hưởng bởi thay đổi để quyết định phạm vi Regression Testing.`,
      },
      {
        id: 'swt-ch2-sec4',
        type: 'exam_tip',
        title: 'Bẫy đề thi về Stubs, Drivers và Test Levels',
        content: `### 🎯 Bẫy kinh điển:
- **Stub vs Driver:**
  - **Stub (Module giả lập cấp DƯỚI):** Dùng trong kiểm thử tích hợp **Top-Down**. Thay thế cho các module con chưa được viết.
  - **Driver (Module giả lập cấp TRÊN):** Dùng trong kiểm thử tích hợp **Bottom-Up**. Thay thế cho module cha để gọi module con đang được test.
- **Alpha vs Beta:**
  - *Alpha:* Tại công ty phát triển (Developer's site).
  - *Beta:* Tại máy khách hàng / thị trường (Client's site).
- **Regression Testing:**
  - Có thể áp dụng ở **TẤT CẢ các cấp độ kiểm thử** (Component, Integration, System, Acceptance), không riêng gì System test!
- **Đề bài hỏi:** *"Khi chuyển database từ Oracle sang PostgreSQL, loại test nào cần thực hiện?"* $\\rightarrow$ Đó là **Maintenance Testing (Migration)** kèm Data conversion testing.`,
      },
    ],
  },
  {
    id: 'swt-ch3',
    order: 3,
    title: 'Chương 3: Static Techniques & Reviews (Kỹ Thuật Tĩnh & Quy Trình Review)',
    summary:
      'Static testing vs Dynamic testing, quy trình Review chính thức 6 giai đoạn, 4 hình thức review (Informal, Walkthrough, Technical Review, Inspection), các vai trò trong review và phân tích tĩnh bằng công cụ & AI.',
    sections: [
      {
        id: 'swt-ch3-sec1',
        type: 'concept',
        title: 'Khái niệm: Static Testing & Lợi ích vượt trội',
        content: `### 1. Static Testing là gì?
- Kiểm thử tĩnh là hình thức kiểm tra các sản phẩm công việc (work products) như tài liệu yêu cầu, thiết kế kiến trúc, mã nguồn, kế hoạch test... **MÀ KHÔNG CẦN CHẠY PHẦN MỀM (without executing code)**.
- **Hai hình thức chính của Static Testing:**
  - **Reviews (Đánh giá thủ công):** Con người đọc, phân tích tài liệu và mã nguồn.
  - **Static Analysis (Phân tích tĩnh tự động):** Dùng tool hoặc AI quét code để tìm lỗi cú pháp, quy chuẩn và vi phạm bảo mật.

### 2. Tại sao Static Testing lại tiết kiệm chi phí nhất?
- Tìm thấy nguyên nhân gốc rễ của lỗi (Defect / Cause) trực tiếp trong tài liệu trước khi chúng biến thành bug trong code.
- Sửa lỗi trong tài liệu requirement rẻ hơn từ 10 đến 100 lần so với sửa lỗi sau khi code đã được build và chạy.
- Phát hiện được những lỗi mà Dynamic testing rất khó hoặc không thể tìm thấy:
  - Yêu cầu mâu thuẫn, thiếu sót hoặc mơ hồ.
  - Vi phạm chuẩn lập trình (Coding standards).
  - Biến khai báo nhưng không dùng (Unused variables).
  - Mã không bao giờ chạy tới (Dead code / Unreachable code).
  - Lỗ hổng bảo mật (SQL Injection, Buffer overflow).`,
      },
      {
        id: 'swt-ch3-sec2',
        type: 'comparison',
        title: 'Bảng so sánh: 4 Cấp độ Review (Từ Không chính thức đến Inspection)',
        content: `| Đặc điểm | Informal Review | Walkthrough | Technical Review | Inspection (Thanh tra) |
|---|---|---|---|---|
| **Mức độ chính thức** | Thấp nhất | Trung bình | Khá cao | **Cao nhất (Strictly formal)** |
| **Mục đích chính** | Đạt kết quả nhanh, ít tốn chi phí | Đào tạo, chia sẻ hiểu biết, thu thập phản hồi | Đánh giá kỹ thuật, ra quyết định kiến trúc | **Tìm và ghi nhận tối đa defects** |
| **Người dẫn dắt (Leader)** | Không cố định | **Tác giả (Author)** | Chuyên gia kỹ thuật / Moderator | **Moderator (được đào tạo bài bản)** |
| **Vai trò Tác giả** | Tự do | Trình bày, dẫn dắt cả buổi | Thành viên tham gia | Thành viên (KHÔNG ĐƯỢC làm Moderator) |
| **Chuẩn bị trước** | Không bắt buộc | Tùy chọn | Bắt buộc đọc trước | **Bắt buộc chuẩn bị kỹ (gặp riêng)** |
| **Sử dụng Checklist** | Hiếm khi | Tùy chọn | Có thể dùng | **Bắt buộc dùng Checklist & Rules** |
| **Biên bản / Báo cáo** | Không có | Tùy ý | Có biên bản | **Báo cáo chính thức có số liệu (Metrics)** |
| **Điều kiện Vào/Ra** | Không có | Không chính thức | Có Entry/Exit criteria | **Có Entry và Exit criteria rất chặt chẽ** |`,
      },
      {
        id: 'swt-ch3-sec3',
        type: 'keywords',
        title: 'Quy trình 6 giai đoạn Review & Các vai trò',
        content: `### 6 Giai đoạn của Quy trình Review chính thức (Phases)
1. **Planning (Lập kế hoạch):** Xác định mục tiêu, tiêu chí chọn tài liệu, ước tính thời gian và phân công vai trò.
2. **Kick-off (Khởi động):** Phân phát tài liệu, giải thích mục tiêu và phạm vi cho người tham gia.
3. **Individual Preparation (Chuẩn bị cá nhân):** Từng thành viên tự đọc trước tài liệu, phát hiện lỗi tiềm năng và ghi chú câu hỏi.
4. **Review Meeting (Họp đánh giá):** Thảo luận các lỗi đã tìm thấy, đề xuất hướng xử lý và ghi chép biên bản. Gồm 3 phần: Logging, Discussion, Decision.
5. **Rework (Sửa chữa):** Tác giả nhận danh sách lỗi và tiến hành sửa chữa mã nguồn / tài liệu.
6. **Follow-up (Theo dõi & Kết thúc):** Moderator kiểm tra xem tất cả các lỗi đã được sửa đúng chưa, đánh giá tiêu chí Exit criteria.

### Các vai trò cốt lõi trong Review
- **Author (Tác giả):** Người tạo ra tài liệu/code cần review. Chịu trách nhiệm sửa lỗi (Rework).
- **Management (Nhà quản lý):** Quyết định tiến hành review, cấp thời gian, tài nguyên, nhưng **KHÔNG tham gia soi lỗi chi tiết**.
- **Moderator / Facilitator (Điều phối viên):** Vai trò **QUAN TRỌNG NHẤT**! Điều phối buổi họp, giải quyết tranh cãi, giữ cuộc họp đi đúng trọng tâm và đúng giờ.
- **Reviewer / Inspector (Người đánh giá):** Người có chuyên môn đọc tài liệu để tìm lỗi.
- **Scribe / Recorder (Thư ký):** Ghi chép từng defect được phát hiện trong buổi họp vào Defect Log.`,
      },
      {
        id: 'swt-ch3-sec4',
        type: 'exam_tip',
        title: 'Bẫy đề thi về Static Analysis & Kỹ thuật Review',
        content: `### 🎯 Bẫy trắc nghiệm hay gặp:
- **Bẫy 1:** Trong Inspection, ai là người dẫn dắt?
  - *Đáp án đúng:* **Moderator**.
  - *Bẫy sai:* Author (Tác giả chỉ dẫn dắt trong **Walkthrough**!).
- **Bẫy 2:** Giai đoạn nào trong Review tốn công sức của cá nhân nhất?
  - *Đáp án đúng:* **Individual Preparation** (chuẩn bị cá nhân tìm lỗi độc lập).
- **Bẫy 3:** Static Analysis tìm được gì mà Dynamic testing KHÔNG tìm được?
  - **Unreachable code (Dead code)**, biến chưa khởi tạo đã dùng, vi phạm tiêu chuẩn coding style, độ phức tạp Cyclomatic quá cao.
- **Bẫy 4:** Yếu tố thành công của Review:
  - Mục tiêu rõ ràng, không khí tôn trọng lẫn nhau, khiếm khuyết được coi là cơ hội cải tiến sản phẩm chứ không phải để đánh giá năng lực của tác giả!`,
      },
    ],
  },
  {
    id: 'swt-ch4',
    order: 4,
    title: 'Chương 4: Test Design Techniques (Kỹ Thuật Thiết Kế Test Case)',
    summary:
      'Trọng tâm điểm số của đề thi FPT: Kỹ thuật Hộp đen (Equivalence Partitioning, Boundary Value Analysis, Decision Table, State Transition, Use Case), Hộp trắng (Statement Coverage, Decision Coverage, CFG, Cyclomatic Complexity) và Kỹ thuật dựa trên kinh nghiệm (Error Guessing, Exploratory Testing).',
    sections: [
      {
        id: 'swt-ch4-sec1',
        type: 'concept',
        title: 'Kỹ thuật Hộp Đen: EP, BVA & Decision Table',
        content: `### 1. Equivalence Partitioning (EP - Phân vùng tương đương)
- **Ý tưởng:** Chia miền dữ liệu đầu vào hoặc đầu ra thành các phân vùng (partitions) mà hệ thống được kỳ vọng sẽ xử lý như nhau.
- **Quy tắc vàng:** Chỉ cần chọn **1 giá trị đại diện** từ mỗi phân vùng. Nếu một giá trị pass/fail thì tất cả các giá trị khác trong cùng phân vùng cũng được coi là pass/fail tương tự.
- Có 2 loại phân vùng:
  - **Valid Equivalence Partition:** Chứa các giá trị hợp lệ mà hệ thống phải chấp nhận.
  - **Invalid Equivalence Partition:** Chứa các giá trị không hợp lệ mà hệ thống phải từ chối hoặc báo lỗi.

### 2. Boundary Value Analysis (BVA - Phân tích giá trị biên)
- **Ý tưởng:** Lỗi thường tập trung nhiều nhất ở ranh giới giữa các phân vùng (ví dụ: nhầm dấu \`<\` thành \`<=\`).
- **Cách chọn giá trị biên:**
  - **2-value BVA (Chuẩn ISTQB Foundation):** Với mỗi biên, chọn **giá trị tại biên** và **giá trị ngay sát bên ngoài biên**.
    - Ví dụ: Khoảng hợp lệ $18 \\le \\text{tuổi} \\le 60$.
    - Biên dưới: 18 (valid) và 17 (invalid).
    - Biên trên: 60 (valid) và 61 (invalid).
    - Tổng cộng: **4 test cases** (17, 18, 60, 61).
  - **3-value BVA:** Chọn giá trị ngay trước biên, tại biên, và ngay sau biên. Với khoảng $[18, 60]$: $17, 18, 19$ và $59, 60, 61$ (6 test cases).

### 3. Decision Table Testing (Bảng quyết định)
- Dùng khi hệ thống có **nhiều điều kiện kết hợp với nhau** để tạo ra các hành động khác nhau.
- Cấu trúc gồm: **Conditions (Điều kiện)** ở trên, **Actions (Hành động)** ở dưới. Mỗi cột là một **Rule (Quy tắc)**.
- Với $N$ điều kiện nhị phân (True/False), số cột tối đa của bảng là $2^N$.
- Có thể rút gọn (collapse) các cột có kết quả trùng lặp bằng dấu \`-\` (Don't care).`,
      },
      {
        id: 'swt-ch4-sec2',
        type: 'concept',
        title: 'Kỹ thuật Hộp Trắng: CFG, Coverage & Độ Phức Tạp Cyclomatic',
        content: `### 1. Control Flow Graph (CFG - Đồ thị luồng điều khiển)
- Chuyển đổi mã nguồn thành đồ thị:
  - **Node (Nút):** Đại diện cho một câu lệnh hoặc khối lệnh tuần tự.
  - **Edge (Cạnh):** Mũi tên chỉ hướng thực thi giữa các lệnh.
  - **Predicate Node:** Nút rẽ nhánh (chứa điều kiện IF, WHILE) có từ 2 cạnh đi ra trở lên.

### 2. Statement Coverage vs Decision / Branch Coverage
- **Statement Coverage:**
  $$\\text{Statement Coverage} = \\frac{\\text{Số câu lệnh được thực thi}}{\\text{Tổng số câu lệnh}} \\times 100\\%$$
- **Decision (Branch) Coverage:**
  $$\\text{Decision Coverage} = \\frac{\\text{Số nhánh True/False được thực thi}}{\\text{Tổng số nhánh điều kiện}} \\times 100\\%$$
- **Mối quan hệ tối quan trọng:**
  - **100% Decision Coverage $\\implies$ 100% Statement Coverage!**
  - **100% Statement Coverage $\\not\\implies$ 100% Decision Coverage!**
  - *(Ví dụ một lệnh \`IF (x > 0) print(x)\` không có ELSE: nếu test với $x=5$, 100% Statement được chạy, nhưng nhánh False chưa hề được test! Do đó Decision Coverage mới chỉ đạt 50%).*

### 3. Cyclomatic Complexity (Độ phức tạp vòng - McCabe)
- Đại diện cho số lượng đường đi độc lập tối thiểu cần có để phủ kín đồ thị.
- **3 Công thức tính $V(G)$ kinh điển:**
  1. $V(G) = E - N + 2P$ (với $E$ là số cạnh, $N$ là số nút, $P$ là số thành phần liên thông, thường $P=1$).
  2. $V(G) = P_{\\text{decision}} + 1$ (Số câu lệnh rẽ nhánh nhị phân cộng 1).
  3. $V(G) = \\text{Số vùng kín (Regions)} + 1$.`,
      },
      {
        id: 'swt-ch4-sec3',
        type: 'comparison',
        title: 'Bảng tổng hợp các kỹ thuật kiểm thử (Black-box vs White-box vs Experience)',
        content: `| Kỹ thuật | Phân loại | Căn cứ thiết kế (Test Basis) | Điểm mạnh |
|---|---|---|---|
| **Equivalence Partitioning (EP)** | Black-box | Tài liệu đặc tả, yêu cầu | Giảm số lượng test case đáng kể mà vẫn đảm bảo độ phủ |
| **Boundary Value Analysis (BVA)** | Black-box | Miền giá trị số, ngày tháng, độ dài | Phát hiện các lỗi sai dấu so sánh, tràn bộ nhớ |
| **Decision Table** | Black-box | Quy tắc nghiệp vụ phức tạp | Đảm bảo không bỏ sót tổ hợp logic điều kiện |
| **State Transition** | Black-box | Biểu đồ trạng thái (State Machine) | Cực tốt cho quy trình (ATM, giỏ hàng, game, order status) |
| **Use Case Testing** | Black-box | Kịch bản Use Case người dùng | Kiểm tra luồng nghiệp vụ thực tế (Happy path & Exception) |
| **Statement Testing** | White-box | Cấu trúc mã nguồn | Đảm bảo không có dòng code nào không được chạm tới |
| **Decision Testing** | White-box | Luồng điều khiển, rẽ nhánh | Mạnh hơn Statement, bao quát các trường hợp rẽ nhánh |
| **Error Guessing** | Experience | Kinh nghiệm, trực giác của Tester | Tìm các lỗi đặc biệt mà phương pháp có cấu trúc bỏ sót |
| **Exploratory Testing** | Experience | Charter, kiến thức thực tế | Rất nhanh, linh hoạt khi thiếu tài liệu hoặc gấp rút |`,
      },
      {
        id: 'swt-ch4-sec4',
        type: 'exam_tip',
        title: 'Bẫy đề thi tính toán & Cheatsheet Thầy Giáo Làng',
        content: `### 🎯 Công thức tính toán ăn điểm tuyệt đối:
1. **Bài toán BVA cho biến $X$ trong $[A, B]$:**
   - 2-value: $A-1, A, B, B+1$. (4 giá trị).
   - Nếu đề cho 2 biến $X \\in [A, B]$ và $Y \\in [C, D]$ (Single fault assumption):
     - Mỗi biến lấy 4 giá trị biên + 1 giá trị danh định (Nominal). Tổng số test cases = $4 \\times 2 + 1 = 9$ test cases!
2. **Bài toán Decision Coverage:**
   - Đề cho đoạn code có 3 câu lệnh \`IF\` độc lập không lồng nhau $\\rightarrow$ Tổng số nhánh = $3 \\times 2 = 6$ nhánh. Để đạt 100% Decision coverage cần ít nhất 2 test cases (1 test làm cả 3 IF đều True, 1 test làm cả 3 IF đều False).
3. **State Transition:**
   - *0-switch coverage (hay 1-hop):* Kiểm tra mọi chuyển đổi đơn lẻ (mọi mũi tên).
   - *1-switch coverage:* Kiểm tra chuỗi 2 chuyển đổi liên tiếp (cặp 2 mũi tên).
4. **State Table:** Hàng là Trạng thái hiện tại, Cột là Sự kiện. Giao điểm là Trạng thái tiếp theo + Hành động. Ô trống là Chuyển đổi không hợp lệ (Invalid Transition) $\\rightarrow$ Bắt buộc phải có test case kiểm tra!`,
      },
    ],
  },
  {
    id: 'swt-ch5',
    order: 5,
    title: 'Chương 5: Test Management (Quản Lý Kiểm Thử, Rủi Ro & Bug)',
    summary:
      'Tổ chức đội ngũ test và tính độc lập, vai trò Test Manager vs Tester, lập kế hoạch test theo IEEE 829, ước lượng kiểm thử, quản lý rủi ro (Product vs Project Risk), giám sát tiến độ và quy trình quản lý sự cố (Incident/Defect Management).',
    sections: [
      {
        id: 'swt-ch5-sec1',
        type: 'concept',
        title: 'Tổ chức Kiểm thử & Tính Độc Lập (Independence of Testing)',
        content: `### Các cấp độ độc lập của kiểm thử (Từ thấp đến cao)
1. **Mức 1 (Thấp nhất):** Không có tester độc lập; chính lập trình viên tự test code của mình. (Dễ bị "mù lỗi" do thiên kiến xác nhận).
2. **Mức 2:** Lập trình viên đồng nghiệp trong cùng team test chéo cho nhau.
3. **Mức 3:** Nhóm tester độc lập chuyên trách nằm trong nhóm dự án (báo cáo cho PM hoặc Test Lead).
4. **Mức 4:** Nhóm tester độc lập chuyên sâu về bảo mật, hiệu năng hoặc thuộc bộ phận QA/QC riêng của tổ chức.
5. **Mức 5 (Cao nhất):** Thuê tổ chức kiểm thử độc lập bên ngoài (3rd Party Outsourcing).

### Phân công công việc: Test Manager vs Tester
- **Test Manager (Trưởng nhóm kiểm thử / Test Lead):**
  - Viết và cập nhật **Test Plan (Kế hoạch kiểm thử)**.
  - Ước lượng thời gian và chi phí kiểm thử.
  - Lựa chọn công cụ kiểm thử và tổ chức đào tạo.
  - Giám sát tiến độ và viết báo cáo tóm tắt (**Test Summary Report**).
  - Quản lý cấu hình và phân tích rủi ro cấp cao.
- **Tester (Kiểm thử viên):**
  - Đọc hiểu tài liệu yêu cầu (Test Basis).
  - Xác định điều kiện kiểm thử (Test Conditions) và thiết kế **Test Cases**, chuẩn bị Test Data.
  - Thực thi test (thủ công hoặc chạy script automation).
  - Ghi nhận và báo cáo lỗi (**Log Defects**) và thực hiện Re-testing.`,
      },
      {
        id: 'swt-ch5-sec2',
        type: 'comparison',
        title: 'Bảng so sánh: Product Risk vs Project Risk & Severity vs Priority',
        content: `### Product Risk vs Project Risk
| Tiêu chí | Product Risk (Rủi ro sản phẩm / Chất lượng) | Project Risk (Rủi ro dự án / Quản lý) |
|---|---|---|
| **Bản chất** | Khả năng phần mềm **không hoạt động đúng** hoặc gây hại | Khả năng dự án **không hoàn thành đúng tiến độ / ngân sách** |
| **Tác động tới** | Chất lượng phần mềm, người dùng cuối | Kế hoạch, tài chính, nhân sự dự án |
| **Ví dụ** | Phần mềm tính sai tiền lãi vay; hệ thống sập khi quá tải | Nhân sự chủ chốt nghỉ việc; nhà cung cấp giao trễ server |
| **Ứng phó** | **Risk-based Testing:** Ưu tiên test sâu các module rủi ro cao | Bổ sung nhân sự, điều chỉnh phạm vi, dự phòng thời gian |

---

### Severity (Mức độ nghiêm trọng) vs Priority (Mức độ ưu tiên)
| Tiêu chí | Severity | Priority |
|---|---|---|
| **Định nghĩa** | Mức độ ảnh hưởng kỹ thuật của bug lên hệ thống | Thứ tự cấp bách cần sửa bug từ góc độ kinh doanh/khách hàng |
| **Đánh giá bởi** | **Tester** (dựa trên mức độ phá hủy/lỗi của hệ thống) | **Test Manager / Product Owner / Client** |
| **Ví dụ: High Sev - Low Pri** | Hệ thống bị crash khi chạy trên Windows 98 (rất nặng nhưng không ai dùng) |
| **Ví dụ: Low Sev - High Pri** | Logo công ty bị sai chính tả ở ngay trang chủ (không lỗi kỹ thuật nhưng mất uy tín) |`,
      },
      {
        id: 'swt-ch5-sec3',
        type: 'keywords',
        title: 'Test Planning (IEEE 829), Entry/Exit Criteria & Vòng đời của Bug',
        content: `### Cấu trúc Test Plan (Chuẩn IEEE 829)
- Gồm: Phạm vi kiểm thử (In scope / Out of scope), Cách tiếp cận (Approach), Nguồn lực, Môi trường, Lịch trình, Rủi ro, và tiêu chí Bắt đầu/Kết thúc.
- **Entry Criteria (Tiêu chí bắt đầu):** Các điều kiện cần có để bắt đầu một giai đoạn test (ví dụ: môi trường test đã sẵn sàng, code đã pass Unit test, tài liệu SRS đã được duyệt).
- **Exit Criteria (Tiêu chí dừng test / Definition of Done):** Điều kiện để kết thúc việc test (ví dụ: đạt 95% test case pass, không còn bug Critical/High nào mở, độ phủ code > 80%).

### Vòng đời của một Defect (Defect Lifecycle)
$$\\text{New} \\rightarrow \\text{Assigned} \\rightarrow \\text{Open} \\rightarrow \\text{Fixed} \\rightarrow \\text{Pending Retest} \\rightarrow \\text{Retest} \\rightarrow \\begin{cases} \\text{Closed} & \\text{(nếu test đạt)} \\\\ \\text{Reopened} & \\text{(nếu bug vẫn còn)} \\end{cases}$$
- Các trạng thái khác: **Deferred** (hoãn sửa sang release sau), **Rejected / Not a Bug** (từ chối do tester hiểu sai yêu cầu), **Duplicate** (trùng bug đã báo trước đó).`,
      },
      {
        id: 'swt-ch5-sec4',
        type: 'exam_tip',
        title: 'Bẫy đề thi về Ước lượng kiểm thử & Risk-Based Testing',
        content: `### 🎯 Bẫy trắc nghiệm hay gặp:
- **Hai phương pháp ước lượng kiểm thử:**
  1. *Metrics-based:* Dựa trên số liệu thực tế đo được từ các dự án tương tự trước đó (Defect density, Test execution rate).
  2. *Expert-based:* Dựa trên kinh nghiệm và phán đoán của các chuyên gia (Delphi, Planning Poker).
- **Risk-based Testing:**
  - Mức độ rủi ro = **Likelihood (Xác suất xảy ra)** $\\times$ **Impact (Mức độ tổn thất)**.
  - Vùng có rủi ro cao nhất sẽ được: **Viết test case sớm nhất, dùng kỹ thuật test sâu nhất, và phân bổ tester giàu kinh nghiệm nhất!**
- **Test Summary Report:** Do **Test Manager** viết, tổng kết lại số test case đã chạy, số bug còn tồn đọng, đánh giá chất lượng sản phẩm so với Exit criteria để ban giám đốc quyết định có Go-Live hay không.`,
      },
    ],
  },
  {
    id: 'swt-ch6',
    order: 6,
    title: 'Chương 6: Tool Support for Testing (Công Cụ Kiểm Thử & Tự Động Hóa)',
    summary:
      'Phân loại công cụ kiểm thử theo hoạt động, lợi ích và rủi ro tiềm ẩn của tự động hóa (Test Automation), và các bước triển khai công cụ mới vào tổ chức thông qua Dự án thí điểm (Pilot Project).',
    sections: [
      {
        id: 'swt-ch6-sec1',
        type: 'concept',
        title: 'Phân loại Công cụ Kiểm thử (Test Tools Classification)',
        content: `### Các nhóm công cụ kiểm thử chính
1. **Tools supporting Management (Quản lý kiểm thử & quy trình):**
   - *Test Management Tools:* Quản lý test case, ma trận truy vết, test run (Jira, TestRail, Zephyr, HP ALM).
   - *Incident / Defect Management Tools:* Theo dõi vòng đời bug (Bugzilla, Jira, Mantis).
   - *Configuration Management Tools:* Quản lý phiên bản code và testware (Git, SVN).
2. **Tools supporting Static Testing (Kiểm thử tĩnh):**
   - *Static Analysis Tools:* Quét mã nguồn tự động không cần chạy (SonarQube, ESLint, Checkstyle).
   - *Review Support Tools:* Hỗ trợ quy trình review online.
3. **Tools supporting Test Specification (Thiết kế test):**
   - Tạo test data, mô hình hóa test case.
4. **Tools supporting Test Execution & Logging (Thực thi test):**
   - *Test Execution Tools (Automation):* Chạy script tự động (Selenium, Playwright, Cypress, Appium, Postman).
   - *Unit Test Frameworks:* Hỗ trợ viết và chạy unit test (JUnit, TestNG, NUnit, PyTest).
   - *Test Harness / Unit Test Drivers & Stubs.*
5. **Tools supporting Performance & Monitoring (Hiệu năng):**
   - Đo tải và khả năng chịu đựng của hệ thống (Apache JMeter, LoadRunner, K6, Gatling).`,
      },
      {
        id: 'swt-ch6-sec2',
        type: 'comparison',
        title: 'Bảng so sánh: Lợi ích và Rủi ro của Test Automation',
        content: `| Tiêu chí | Lợi ích (Potential Benefits) | Rủi ro tiềm ẩn (Potential Risks) |
|---|---|---|
| **Tốc độ & Công sức** | Chạy lặp lại các bài test hồi quy (Regression) cực nhanh, giảm công sức tay chân | Kỳ vọng phi thực tế rằng automation có thể thay thế hoàn toàn con người |
| **Độ chính xác** | Không bị mệt mỏi, không bị mất tập trung như con người; tính lặp lại 100% | Đánh giá thấp chi phí ban đầu (mua tool, đào tạo nhân sự, xây dựng framework) |
| **Khả năng kiểm thử** | Thực hiện được những việc mà con người không thể làm (giả lập 100,000 users tải cùng lúc) | **Chi phí bảo trì script rất cao (Maintenance effort)** khi giao diện UI hay đổi |
| **Đo lường & Báo cáo** | Tự động xuất báo cáo, biểu đồ độ phủ, tích hợp vào CI/CD pipeline | Công cụ bị lỗi thời hoặc không tương thích với công nghệ mới của dự án |`,
      },
      {
        id: 'swt-ch6-sec3',
        type: 'keywords',
        title: 'Quy trình đưa công cụ vào tổ chức & Dự án thí điểm (Pilot Project)',
        content: `### 1. Đánh giá và lựa chọn công cụ (Tool Selection)
- Xác định nhu cầu thực tế của tổ chức, đánh giá các công cụ phù hợp với công nghệ hiện có.
- Đánh giá nhà cung cấp (hỗ trợ, đào tạo, giấy phép, chi phí).

### 2. Dự án thí điểm (Pilot Project - Bắt buộc!)
- **Mục tiêu của Pilot Project:**
  - Tìm hiểu sâu chi tiết về công cụ và kiểm tra tính tương thích thực tế.
  - Đánh giá xem công cụ có phù hợp với quy trình và thói quen hiện tại không.
  - Quyết định cách thức đặt tên, lưu trữ và tiêu chuẩn viết script kiểm thử.
  - **Đo lường chi phí và lợi ích thực tế (ROI - Return on Investment)** để làm căn cứ trình ban giám đốc.
- **Triển khai rộng rãi (Roll-out):**
  - Cung cấp đào tạo, hướng dẫn cho các đội ngũ.
  - Thu thập bài học kinh nghiệm và liên tục cải tiến cách dùng công cụ.`,
      },
      {
        id: 'swt-ch6-sec4',
        type: 'exam_tip',
        title: 'Bẫy đề thi về Automation & Phân loại Tool',
        content: `### 🎯 Bẫy trắc nghiệm hay gặp:
- **Bẫy 1:** *"Test Automation có thể thay thế hoàn toàn Manual Testing không?"* $\\rightarrow$ **KHÔNG BAO GIỜ!** Các bài test về giao diện trải nghiệm người dùng (Usability), kiểm thử thăm dò (Exploratory), và các tính năng mới luôn cần con người.
- **Bẫy 2:** Công cụ nào thuộc loại **Static Testing Tool**?
  - SonarQube, Checkstyle, Compiler. (Selenium, JMeter, JUnit là Dynamic!).
- **Bẫy 3:** Mục đích chính của **Pilot Project** là gì?
  - Để học hỏi công cụ, định hình quy chuẩn sử dụng và đo lường tính khả thi (chứ KHÔNG PHẢI để chạy test toàn bộ hệ thống công ty ngay lập tức!).
- **Bẫy 4:** Chi phí lớn nhất của Automation nằm ở đâu?
  - Nằm ở **chi phí bảo trì (Maintenance)** lâu dài cho các kịch bản test khi phần mềm liên tục thay đổi!`,
      },
    ],
  },
  {
    id: 'swt-ch7',
    order: 7,
    title: 'Chương 7: Agile Testing & Ứng Dụng AI (Kiểm Thử Hiện Đại)',
    summary:
      'Nguyên lý kiểm thử trong môi trường Agile, mô hình 4 góc phần tư Agile (Agile Testing Quadrants), TDD vs BDD, CI/CD pipeline và ứng dụng AI (ChatGPT, Copilot, Grok) trong việc sinh kịch bản test và phân tích tĩnh theo FLM 2026.',
    sections: [
      {
        id: 'swt-ch7-sec1',
        type: 'concept',
        title: 'Agile Testing: Whole-Team Approach & 4 Góc Phần Tư (Quadrants)',
        content: `### 1. Whole-Team Approach trong Agile
- Trong Agile, chất lượng là trách nhiệm của **TOÀN BỘ NHÓM (Whole-team)** chứ không phải trách nhiệm riêng của Tester.
- Tester cộng tác liên tục hàng ngày với Product Owner và Developer từ lúc viết User Story đến khi Release.

### 2. Mô hình 4 góc phần tư Agile (Brian Marick - Agile Testing Quadrants)
- **Q1 (Technology-facing, Support team):**
  - Mục đích: Hỗ trợ lập trình viên xây dựng phần mềm chất lượng ngay từ đầu.
  - Bao gồm: Unit test, Component test. Thường dùng **TDD (Test-Driven Development)** và chạy tự động.
- **Q2 (Business-facing, Support team):**
  - Mục đích: Định nghĩa các hành vi nghiệp vụ mong muốn.
  - Bao gồm: Functional test, User story test, kịch bản ví dụ. Thường dùng **BDD (Behavior-Driven Development)** hoặc ATDD.
- **Q3 (Business-facing, Critique product):**
  - Mục đích: Đánh giá sản phẩm dưới góc nhìn người dùng thực tế.
  - Bao gồm: **Exploratory Testing**, Usability Testing, User Acceptance Testing (UAT), Alpha/Beta. Chủ yếu là kiểm thử thủ công!
- **Q4 (Technology-facing, Critique product):**
  - Mục đích: Đánh giá các thuộc tính kỹ thuật phi chức năng.
  - Bao gồm: Performance, Load, Stress, Security, Reliability testing. Chủ yếu dùng công cụ hỗ trợ.`,
      },
      {
        id: 'swt-ch7-sec2',
        type: 'comparison',
        title: 'Bảng so sánh: TDD vs BDD & Traditional vs Agile Testing',
        content: `### TDD vs BDD
| Tiêu chí | TDD (Test-Driven Development) | BDD (Behavior-Driven Development) |
|---|---|---|
| **Cốt lõi** | Viết Test trước khi viết Code | Viết Hành vi nghiệp vụ trước dưới dạng ngôn ngữ tự nhiên |
| **Quy trình** | **Red $\\rightarrow$ Green $\\rightarrow$ Refactor** | Given $\\rightarrow$ When $\\rightarrow$ Then (Gherkin syntax) |
| **Đối tượng dùng** | Developer (mức code / unit test) | BA, Tester, Dev, Product Owner cùng hiểu |
| **Công cụ phổ biến** | JUnit, NUnit, PyTest | Cucumber, SpecFlow, Behave |

---

### Traditional Testing vs Agile Testing
| Tiêu chí | Traditional (Thác nước / V-Model) | Agile Testing |
|---|---|---|
| **Thời điểm test** | Cuối quy trình sau khi code xong | Song song liên tục trong từng Sprint (Early & Continuous) |
| **Kế hoạch test** | Tài liệu Test Plan dày cộp, cố định | Linh hoạt, cập nhật theo từng User Story |
| **Tài liệu** | Rất nặng về tài liệu chính thức | Ưu tiên phần mềm hoạt động và giao tiếp trực tiếp |
| **Phản hồi** | Chậm (sau nhiều tháng) | Nhanh chóng (hàng ngày / sau mỗi Sprint 2 tuần) |`,
      },
      {
        id: 'swt-ch7-sec3',
        type: 'keywords',
        title: 'Ứng dụng AI trong Testing (Theo chuẩn FLM FPT 2026)',
        content: `### 1. Vai trò của AI trong Software Testing
- **AI-assisted Test Generation:** Sử dụng LLM (ChatGPT, Gemini, DeepSeek, Grok) để phân tích User Stories và tự động gợi ý các Test Scenarios, Test Cases biên và các trường hợp ngoại lệ (Edge cases).
- **AI for Static Document Review:** Yêu cầu AI rà soát tài liệu yêu cầu (SRS) để phát hiện sự mâu thuẫn, tính mơ hồ (ambiguity) hoặc lỗ hổng logic nghiệp vụ.
- **AI-driven Static Code Analysis:** Quét mã nguồn để tìm kiếm Code smells, phát hiện vi phạm nguyên tắc SOLID và đề xuất tối ưu hóa hiệu năng.
- **AI Test Optimization:** Chọn lọc bộ test case hồi quy tối ưu dựa trên vùng mã nguồn vừa thay đổi (Test Impact Analysis).

### 2. Giới hạn & Cảnh báo khi dùng AI
- **Ảo giác (Hallucination):** AI có thể bịa đặt ra các quy tắc nghiệp vụ không tồn tại trong tài liệu. Tester bắt buộc phải kiểm chứng lại.
- **Bảo mật dữ liệu:** Tuyệt đối không paste mã nguồn chứa thông tin bảo mật, API key hoặc dữ liệu nhạy cảm của khách hàng lên các công cụ AI công cộng.`,
      },
      {
        id: 'swt-ch7-sec4',
        type: 'exam_tip',
        title: 'Bẫy đề thi về Agile Quadrants & TDD',
        content: `### 🎯 Bẫy trắc nghiệm hay gặp:
- **Bẫy 1:** Trong TDD, bước đầu tiên là gì?
  - *Đáp án:* **Viết một bài test và chạy thử để nó FAIL (Red)**.
- **Bẫy 2:** Góc phần tư nào trong Agile Testing Quadrants tập trung vào **Exploratory Testing**?
  - *Đáp án:* **Q3** (Business-facing, Critique product).
- **Bẫy 3:** Góc phần tư nào tập trung vào **Unit test tự động**?
  - *Đáp án:* **Q1** (Technology-facing, Support team).
- **Bẫy 4:** Cú pháp chuẩn của kịch bản BDD:
  - **Given** (Tiền điều kiện) $\\rightarrow$ **When** (Hành động người dùng thực hiện) $\\rightarrow$ **Then** (Kết quả kỳ vọng).`,
      },
    ],
  },
];
