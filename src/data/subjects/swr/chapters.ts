import type { Chapter } from '../../../types/study';

export const swrChapters: Chapter[] = [
  {
    id: 'swr-ch1',
    order: 1,
    title: 'Chương 1: Bản chất của Yêu cầu Phần mềm (The Essentials of Software Requirements)',
    summary:
      'Tại sao Requirements Engineering quan trọng (56% lỗi & 82% chi phí sửa lỗi), phân biệt Product vs Project requirements, Development vs Management và 6 vấn đề kinh điển.',
    sections: [
      {
        id: 'swr-ch1-sec1',
        type: 'concept',
        title: 'Ba cấp độ yêu cầu cốt lõi (Karl Wiegers)',
        content:
          '- **Business Requirements:** Lý do tổ chức đầu tư xây dựng hệ thống (mục tiêu kinh doanh, ROI), lưu trong **Vision and Scope Document**.\n- **User Requirements:** Tác vụ/mục tiêu người dùng muốn thực hiện với hệ thống (Use Cases, User Stories).\n- **Functional Requirements:** Hành vi cụ thể phần mềm phải thực hiện dưới dạng đầu vào, xử lý, đầu ra (đặc tả trong **SRS**).\n- **Product vs Project Requirements:** Product requirements mô tả thuộc tính phần mềm sẽ xây dựng; Project requirements là các kỳ vọng/deliverable không nằm trong code phần mềm nhưng cần để hoàn tất dự án (lịch trình, đào tạo, hợp đồng).',
      },
      {
        id: 'swr-ch1-sec2',
        type: 'comparison',
        title: 'Phân bố lỗi (Martin & Leffingwell) & Phân biệt nhóm hoạt động',
        content:
          '| Nguồn lỗi | Tỷ lệ sinh ra lỗi (Defects) | Tỷ lệ công sức sửa lỗi (Effort to Fix) |\n|---|---|---|\n| **Requirements** | **56%** | **82%** |\n| Design | 27% | 13% |\n| Other | 10% | 4% |\n| Code | 7% | 1% |\n\n- **Requirements Development:** Elicitation (khai thác), Analysis (phân tích), Specification (đặc tả), Validation (kiểm chứng).\n- **Requirements Management:** Kiểm soát thay đổi, phân tích tác động, quản lý phiên bản/baseline, theo dõi trạng thái và ma trận truy vết (Traceability).',
      },
      {
        id: 'swr-ch1-sec3',
        type: 'keywords',
        title: '6 nguyên nhân gây ra Bad Requirements (Slide 11)',
        content:
          '- `Insufficient user involvement`: Thiếu sự tham gia của người dùng thực tế.\n- `Inaccurate planning`: Lập kế hoạch/ước lượng thiếu chính xác.\n- `Creeping user requirements` (Scope creep): Yêu cầu phình to dần không kiểm soát.\n- `Ambiguous requirements`: Yêu cầu mơ hồ, hiểu nhiều nghĩa.\n- `Gold plating`: Lập trình viên tự thêm tính năng đẹp nhưng khách hàng không yêu cầu.\n- `Overlooked stakeholders`: Bỏ sót các bên liên quan quan trọng.',
      },
      {
        id: 'swr-ch1-sec4',
        type: 'exam_tip',
        title: 'Mẹo nhớ số liệu & Bẫy thường gặp',
        content:
          'Nhớ cặp số vàng **56% lỗi – 82% công sức sửa** thuộc về Requirements. Phân biệt rõ **Gold plating** (dev tự thêm tính năng không ai hỏi) với **Scope creep** (khách hàng cứ thêm dần yêu cầu mới sau khi đã chốt phạm vi).',
      },
    ],
  },
  {
    id: 'swr-ch2',
    order: 2,
    title: 'Chương 2: Yêu cầu từ Góc nhìn Khách hàng (Customer Perspective)',
    summary:
      'Khoảng cách kỳ vọng (Expectation Gap), Bộ Quyền lợi & Trách nhiệm của Khách hàng (Bill of Rights / Responsibilities), người ra quyết định và đồng thuận Baseline.',
    sections: [
      {
        id: 'swr-ch2-sec1',
        type: 'concept',
        title: 'Quan hệ đối tác Khách hàng – Đội phát triển',
        content:
          '- **Requirements Bill of Rights (Quyền lợi của khách hàng):** Yêu cầu BA nói ngôn ngữ của mình; BA hiểu nghiệp vụ; ghi nhận yêu cầu đúng dạng; giải thích quy trình/deliverable; được quyền thay đổi yêu cầu; môi trường tôn trọng lẫn nhau; nghe đề xuất giải pháp thay thế & tái sử dụng; mô tả tính dễ dùng; nhận sản phẩm đáp ứng chức năng và chất lượng.\n- **Requirements Bill of Responsibilities (Trách nhiệm của khách hàng):** Đào tạo BA/dev về nghiệp vụ; dành thời gian làm rõ yêu cầu; cụ thể và chính xác; ra quyết định kịp thời; tôn trọng đánh giá chi phí & khả thi của dev; cùng dev đặt độ ưu tiên thực tế; review yêu cầu & đánh giá prototype; đặt acceptance criteria; báo thay đổi kịp thời; tôn trọng quy trình.',
      },
      {
        id: 'swr-ch2-sec2',
        type: 'comparison',
        title: '4 bên đồng thuận để chốt Requirements Baseline (Slide 9)',
        content:
          '| Vai trò | Điều kiện đồng thuận (Agreement) |\n|---|---|\n| **Customers** | Yêu cầu giải quyết đúng nhu cầu nghiệp vụ của họ |\n| **Developers** | Hiểu rõ yêu cầu và xác nhận tính khả thi kỹ thuật |\n| **Testers** | Yêu cầu có thể kiểm thử/xác minh được (Verifiable) |\n| **Management** | Yêu cầu giúp đạt được mục tiêu kinh doanh của tổ chức |',
      },
      {
        id: 'swr-ch2-sec3',
        type: 'exam_tip',
        title: 'Lưu ý về Decision Makers',
        content:
          'Trước khi dự án xung đột, phải xác định rõ **Decision Leader** (người chốt cuối) và **Decision Rule** (quy tắc ra quyết định: đồng thuận, bỏ phiếu, hay quản lý cấp cao quyết).',
      },
    ],
  },
  {
    id: 'swr-ch3',
    order: 3,
    title: 'Chương 3: Thực hành Chuẩn trong Kỹ thuật Yêu cầu (Good Practices)',
    summary:
      'Khung quy trình phát triển & quản lý yêu cầu gồm 4 nhánh Development + Management + Knowledge + Project Management.',
    sections: [
      {
        id: 'swr-ch3-sec1',
        type: 'concept',
        title: 'Phân loại các Good Practices theo giai đoạn (Slides 7–13)',
        content:
          '- **Elicitation:** Xác định Vision & Scope, phân nhóm User Classes, chọn Product Champion, Focus Groups, phỏng vấn, workshop, quan sát (observation), khảo sát, phân tích tài liệu & báo cáo lỗi hệ thống cũ, tái sử dụng yêu cầu.\n- **Analysis:** Mô hình hóa môi trường ứng dụng, dựng prototype UI/kỹ thuật, phân tích tính khả thi, sắp xếp độ ưu tiên, tạo Data Dictionary, phân tích giao tiếp ngoài, phân bổ yêu cầu cho subsystem.\n- **Specification:** Áp dụng template SRS, ghi nhận nguồn gốc (origins), gắn mã định danh duy nhất (unique label), ghi chép Business Rules và Nonfunctional Requirements.\n- **Validation:** Review yêu cầu, kiểm thử yêu cầu (viết test case từ sớm), định nghĩa Acceptance Criteria, mô phỏng (simulate).\n- **Management:** Quy trình kiểm soát thay đổi, phân tích tác động (Impact Analysis), thiết lập Baseline & version, lịch sử thay đổi, theo dõi trạng thái, ma trận truy vết (Traceability Matrix), dùng công cụ RM.',
      },
      {
        id: 'swr-ch3-sec2',
        type: 'exam_tip',
        title: 'Nguyên tắc áp dụng Good Practices',
        content:
          'Slide nhấn mạnh: **không có practice nào phù hợp cho mọi tình huống** — ví dụ Use Case & UI prototype hợp cho phía client, còn Interface Analysis hữu ích hơn cho phía server/hệ thống tích hợp.',
      },
    ],
  },
  {
    id: 'swr-ch4',
    order: 4,
    title: 'Chương 4: Vai trò của Business Analyst (The Business Analyst)',
    summary:
      '10 nhiệm vụ trọng tâm, 14 kỹ năng thiết yếu, 5 xuất thân của BA và cách BA làm việc trong dự án Agile.',
    sections: [
      {
        id: 'swr-ch4-sec1',
        type: 'concept',
        title: 'Nhiệm vụ & Kỹ năng cốt lõi của BA',
        content:
          '- **10 nhiệm vụ của BA:** Định nghĩa Business Requirements → Lập kế hoạch tiếp cận yêu cầu → Xác định Stakeholders & User Classes → Khai thác (Elicit) → Phân tích (Analyze) → Đặc tả tài liệu (Document) → Truyền đạt (Communicate) → Dẫn dắt kiểm chứng (Validation) → Điều phối ưu tiên (Prioritization) → Quản lý yêu cầu (Manage).\n- **Kỹ năng thiết yếu:** Lắng nghe chủ động, phỏng vấn & đặt câu hỏi, ứng biến nhanh (thinking on your feet), phân tích, tư duy hệ thống (systems thinking), điều phối (facilitation), quan sát, mô hình hóa, giao tiếp & sáng tạo.',
      },
      {
        id: 'swr-ch4-sec2',
        type: 'comparison',
        title: '5 con đường trở thành BA & Vai trò trên dự án Agile',
        content:
          '| 5 xuất thân phổ biến (Making of a BA) | Vai trò BA trong Agile |\n|---|---|\n| Former User (Người dùng cũ) | Điều chỉnh quy trình nhẹ, linh hoạt |\n| Former Developer / Tester | Tài liệu vừa đủ (không quá ít cũng không quá nhiều) |\n| Former / Concurrent Project Manager | Hỗ trợ quản lý Product Backlog & Story Cards |\n| Subject Matter Expert (Chuyên gia nghiệp vụ) | Đảm bảo nhu cầu khách hàng phản ánh đúng vào Backlog |\n| The Rookie (Người mới) | Đánh giá tác động khi khách hàng đổi ý lên Iteration/Release |',
      },
    ],
  },
  {
    id: 'swr-ch5',
    order: 5,
    title: 'Chương 5: Thiết lập Yêu cầu Nghiệp vụ & Context Diagram (Business Requirements)',
    summary:
      'Cấu trúc Vision and Scope Document, 4 kỹ thuật biểu diễn phạm vi (Context Diagram, Ecosystem Map, Feature Tree, Event List) và chuyên đề Context Diagram.',
    sections: [
      {
        id: 'swr-ch5-sec1',
        type: 'concept',
        title: 'Vision and Scope & 4 Kỹ thuật Biểu diễn Phạm vi',
        content:
          '- **Business Requirements** xác định lợi ích kinh doanh mong muốn, mục tiêu nghiệp vụ (Business Objectives) và phạm vi dự án (**Product Vision** vs **Project Scope**).\n- **4 kỹ thuật Scope Representation:**\n  1. **Context Diagram:** Vẽ ranh giới và luồng dữ liệu/vật chất giữa hệ thống với các thực thể bên ngoài.\n  2. **Ecosystem Map:** Hiển thị toàn bộ các hệ thống liên kết và mối tương tác trong hệ sinh thái.\n  3. **Feature Tree:** Phân rã trực quan các nhóm tính năng và mức độ chi tiết.\n  4. **Event List:** Danh sách sự kiện nghiệp vụ/thời gian/tín hiệu kích hoạt hệ thống phản hồi.',
      },
      {
        id: 'swr-ch5-sec2',
        type: 'comparison',
        title: 'Chuyên đề Lesson 02: Context Diagram (Sơ đồ Ngữ cảnh)',
        content:
          '| Thành phần | Ký hiệu chuẩn (Notation) | Ý nghĩa |\n|---|---|---|\n| **The System** | **Một hình tròn duy nhất** (Single Circle) | Đại diện cho toàn bộ phần mềm đang phát triển |\n| **External Entities** | **Hình chữ nhật** (Rectangles) | Nhóm người dùng, tổ chức, hệ thống khác, thiết bị phần cứng |\n| **Data Flows** | **Mũi tên có nhãn** (Arrows with label) | Dòng thông tin hoặc vật chất đi qua ranh giới hệ thống |',
      },
      {
        id: 'swr-ch5-sec3',
        type: 'exam_tip',
        title: 'Điểm bẫy cực hay thi ở Context Diagram',
        content:
          'Context Diagram được xem là **mức cao nhất (Top-level) của DFD**, thực hiện sớm trong pha *Define product vision and scope*, và **cố ý KHÔNG hiển thị** các đối tượng nội bộ, quy trình xử lý bên trong hay kho dữ liệu (data store) bên trong hệ thống!',
      },
    ],
  },
  {
    id: 'swr-ch6',
    order: 6,
    title: 'Chương 6: Lắng nghe Tiếng nói Người dùng (Finding the Voice of the User)',
    summary:
      'Phân nhóm User Classes theo 8 tiêu chí, User Personas, vai trò Product Champion vs Product Owner trên dự án Agile.',
    sections: [
      {
        id: 'swr-ch6-sec1',
        type: 'concept',
        title: '3 bước tìm tiếng nói người dùng & 8 tiêu chí phân loại User Classes',
        content:
          '- **3 bước:** (1) Xác định các User Classes khác nhau → (2) Chọn cá nhân đại diện cho từng nhóm (Product Champion) và Stakeholder → (3) Thống nhất ai là Requirements Decision Makers.\n- **8 tiêu chí phân loại User Classes:** Quyền truy cập/bảo mật (user thường, guest, admin); Tác vụ nghiệp vụ; Tính năng sử dụng; Tần suất sử dụng; Kinh nghiệm miền nghiệp vụ & CNTT; Nền tảng thiết bị (PC, mobile, thiết bị chuyên dụng); Ngôn ngữ mẹ đẻ; Tương tác trực tiếp hay gián tiếp.\n- **Gợi ý tìm User Classes:** Dùng Collaboration Pattern (Ellen Gottesdiener), các **External Entities trên Context Diagram**, và sơ đồ tổ chức công ty (Org Chart).',
      },
      {
        id: 'swr-ch6-sec2',
        type: 'comparison',
        title: 'User Persona, Product Champion & Product Owner',
        content:
          '| Khái niệm | Định nghĩa & Vai trò |\n|---|---|\n| **User Persona** | Hồ sơ nhân vật giả định đại diện cho một nhóm người dùng có đặc điểm & nhu cầu tương đồng, giúp thiết kế UX sát thực tế |\n| **Product Champion** | Cá nhân đại diện trực tiếp cho một User Class cụ thể để cung cấp, làm rõ và rà soát yêu cầu thay cho nhóm đó |\n| **Product Owner (Agile)** | Người sở hữu & sắp xếp độ ưu tiên Product Backlog, chịu trách nhiệm giá trị kinh doanh cho toàn sản phẩm |',
      },
    ],
  },
  {
    id: 'swr-ch7',
    order: 7,
    title: 'Chương 7: Khai thác Yêu cầu (Requirements Elicitation)',
    summary:
      'Các kỹ thuật Elicitation (Interviews, Workshops, Focus Groups, Observations, Questionnaires, Document/Interface Analysis, Prototyping), Assumed vs Implied và cách tìm yêu cầu bị thiếu.',
    sections: [
      {
        id: 'swr-ch7-sec1',
        type: 'concept',
        title: 'Các kỹ thuật Elicitation chuyên sâu (Slides 5–16)',
        content:
          '- **Interviews:** Tạo thiện cảm (rapport), bám sát phạm vi, chuẩn bị câu hỏi & mô hình nháp (straw man model), lắng nghe chủ động.\n- **Workshops:** Quy tắc chung, đủ vai trò, agenda rõ ràng, dùng **Parking Lot** để ghi lại vấn đề ngoài lề xử lý sau, **Timebox** thảo luận.\n- **Focus Groups:** Rất hữu ích cho sản phẩm thương mại (commercial products) khi không tiếp cận trực tiếp end-user nội bộ, giúp khám phá thái độ, ấn tượng, sở thích.\n- **Observations:** Gồm *Passive observation* (không can thiệp), *Protocol analysis* (người làm vừa thao tác vừa giải thích to thành tiếng), *Ethnographic studies* (nghiên cứu dài hạn hành vi xã hội/nhóm), *Active observation* (tham gia trực tiếp làm cùng).\n- **Questionnaires:** Nhanh, rẻ, lấy thông tin từ nhiều người ở xa; dễ mắc thiên kiến (bias) → cần câu hỏi kiểm tra chéo (redundant questions) và nhờ bên thứ 3 kiểm tra.',
      },
      {
        id: 'swr-ch7-sec2',
        type: 'comparison',
        title: 'Assumed Requirements vs Implied Requirements (Slide 25)',
        content:
          '| Loại yêu cầu ẩn | Định nghĩa |\n|---|---|\n| **Assumed Requirements** | Yêu cầu mà người ta mặc nhiên nghĩ là hiển nhiên nên không nói ra (dễ dẫn tới dev hiểu một đằng, khách hàng nghĩ một nẻo) |\n| **Implied Requirements** | Yêu cầu bắt buộc phải có vì phát sinh logic từ một yêu cầu khác, dù không được nêu trực tiếp |',
      },
      {
        id: 'swr-ch7-sec3',
        type: 'exam_tip',
        title: 'Dấu hiệu nhận biết sắp xong Elicitation & Cách tìm yêu cầu thiếu',
        content:
          '- **Dấu hiệu sắp xong:** Người dùng không nghĩ ra Use Case mới (hoặc chỉ là luồng phụ của cái cũ), lặp lại ý đã bàn, chỉ đề xuất tính năng ngoài scope/ưu tiên thấp, dev & tester ít đặt thêm câu hỏi.\n- **Tìm yêu cầu thiếu:** Kiểm tra logic Boolean phức tạp (`AND/OR/NOT`), giá trị biên (boundary values), truy vết từ Business Rules/Event list và đối chiếu với Data Model.',
      },
    ],
  },
  {
    id: 'swr-ch8',
    order: 8,
    title: 'Chương 8: Hiểu Yêu cầu Người dùng & Use Case (Understanding User Requirements)',
    summary:
      'Use Case vs User Story, Actors, Use Case Diagram (Association, Generalization, Include, Extend) và cấu trúc Use Case Specification chuẩn Cockburn.',
    sections: [
      {
        id: 'swr-ch8-sec1',
        type: 'concept',
        title: 'Use Case, Actor & Use Case Diagram (Slides 4–8 & Lesson 03)',
        content:
          '- **Use Case:** Chuỗi tương tác giữa hệ thống và tác nhân bên ngoài (Actor) nhằm đạt một kết quả có giá trị. Tên Use Case luôn viết dạng **Động từ + Danh từ/Tân ngữ** (verb-object, VD: *Withdraw Money*, *Program Vacation Setting*).\n- **Users vs Actors:** User là con người/hệ thống thực tế; **Actor** là khái niệm trừu tượng (như các chiếc "mũ vai trò" user đội vào). Actor có thể là Con người, Hệ thống khác, hoặc Thiết bị phần cứng (như máy in, đèn).\n- **4 quan hệ chính trong Use Case Diagram:** **Association** (kết nối Actor–Use Case), **Generalization** (kế thừa), **Include** (bắt buộc gọi dùng chung), **Extend** (mở rộng tùy chọn/điều kiện).',
      },
      {
        id: 'swr-ch8-sec2',
        type: 'comparison',
        title: 'Thành phần Bắt buộc vs Tùy chọn & Cockburn Specification (Slides 7, 11–13)',
        content:
          '| Nhóm thông tin | Thành phần chi tiết |\n|---|---|\n| **Mandatory (Bắt buộc)** | Name (duy nhất, rõ nghĩa), Brief Description, Actors, Flow of Events (**Basic flow** + **Alternate flows**) |\n| **Optional (Tùy chọn)** | Preconditions, Postconditions, System/Subsystem level, Other Stakeholders, Special Requirements (performance...) |\n| **Cockburn Template** | Number, Name, Summary, Priority (1=thấp nhất, 5=cao nhất), Pre/Postconditions, Primary & Secondary Actors, **Trigger**, **Main Scenario** (happy path), **Extensions** (nhánh 5a, 5b...), Open Issues |',
      },
      {
        id: 'swr-ch8-sec3',
        type: 'exam_tip',
        title: 'Bẫy đề thi Use Case & Functional Requirements (Lesson 04)',
        content:
          'Lập trình viên **KHÔNG trực tiếp code Business Requirements hay User Requirements (Use Case)** — họ lập trình các **Functional Requirements** chi tiết được suy dẫn ra từ Use Case!',
      },
    ],
  },
  {
    id: 'swr-ch9',
    order: 9,
    title: 'Chương 9: Tuân thủ Quy tắc Nghiệp vụ (Playing by the Rules)',
    summary:
      'Bản chất Business Rules, 6 nguồn khai thác Business Rules và cách liên kết với Functional Requirements mà không bị trùng lặp.',
    sections: [
      {
        id: 'swr-ch9-sec1',
        type: 'concept',
        title: 'Business Rules & 6 cách phát hiện (Slides 7–10)',
        content:
          '- **Business Rules** là các quy định/chính sách bên ngoài tổ chức mà phần mềm cần thực thi (atomic business rules).\n- **6 nguồn khám phá Business Rules:** (1) Kiến thức phổ thông của nhân viên lâu năm; (2) Hệ thống cũ (reverse-engineering logic trong code cũ); (3) Mô hình hóa quy trình nghiệp vụ (constraints, triggering events, công thức tính); (4) Tài liệu cũ, luật pháp, chuẩn ngành, hợp đồng; (5) Phân tích trạng thái & chuyển trạng thái dữ liệu; (6) Bộ phận tuân thủ pháp chế (Compliance).\n- **Liên kết không trùng lặp:** Không copy nội dung rule vào SRS; hãy lưu ở Business Rules Catalog và gắn thuộc tính **"Origin"**, lập **Traceability Matrix**, hoặc gắn hyperlink (chú ý hyperlink dễ hỏng khi dời file).',
      },
      {
        id: 'swr-ch9-sec2',
        type: 'exam_tip',
        title: 'Phân biệt Rule và Functional Requirement',
        content:
          'Business Rule là chính sách (VD: *"Khách hàng VIP được giảm 15%"*). Functional Requirement là hành vi hệ thống thực thi chính sách đó (VD: *"Hệ thống tự động trừ 15% tổng tiền khi tài khoản khách hàng có trạng thái VIP"*).',
      },
    ],
  },
  {
    id: 'swr-ch10',
    order: 10,
    title: 'Chương 10: Tài liệu hóa Yêu cầu — SRS (Documenting the Requirements)',
    summary:
      'Mục đích, tên gọi khác, 9 nhóm độc giả của SRS, phương pháp đánh mã định danh (Labeling) và đặc tả trên dự án Agile.',
    sections: [
      {
        id: 'swr-ch10-sec1',
        type: 'concept',
        title: 'SRS & 3 cách biểu diễn yêu cầu (Slides 4–6)',
        content:
          '- **SRS (Software Requirements Specification):** Bản thỏa thuận bằng văn bản lưu trữ cả Functional & Nonfunctional Requirements (còn gọi là BRD, Functional Spec, Product Spec, System Spec).\n- **3 cách biểu diễn:** Ngôn ngữ tự nhiên có cấu trúc; Mô hình trực quan (Visual models); Đặc tả hình thức bằng ngôn ngữ toán học (Formal specifications).\n- **9 nhóm độc giả dùng SRS:** Customers, Project Managers, Development Teams, Testers, Maintenance & Support, Documentation Writers, Training Personnel, Legal Staff, Subcontractors.\n- **3 cách đánh mã (Labeling):** Sequence number (đánh số tuần tự), Hierarchical numbering (`3.1.2`), Hierarchical textual tags (`FR-ORD-01` — dễ hiểu & ít xáo trộn khi chèn thêm).',
      },
      {
        id: 'swr-ch10-sec2',
        type: 'exam_tip',
        title: 'SRS trong Agile & Dealing with Incompleteness',
        content:
          'Khi một yêu cầu chưa đủ thông tin, phải đánh dấu **TBD (To Be Determined)** để theo dõi chứ không bỏ trống âm thầm. Trên dự án **Agile**, mức độ chi tiết của tài liệu phụ thuộc vào: nhóm có làm phân tán không, có cần lưu tri thức bảo trì/kiểm toán/chứng nhận hợp đồng không, và Acceptance Tests có thay thế được mô tả văn bản không.',
      },
    ],
  },
  {
    id: 'swr-ch11',
    order: 11,
    title: 'Chương 11: Viết Yêu cầu Xuất sắc (Writing Excellent Requirements)',
    summary:
      '7 đặc tính của một câu yêu cầu tốt, 4 đặc tính của tập hợp yêu cầu tốt và các lỗi mơ hồ/thiếu sót cần tránh.',
    sections: [
      {
        id: 'swr-ch11-sec1',
        type: 'comparison',
        title: 'Đặc tính Yêu cầu Đơn lẻ vs Tập hợp Yêu cầu (Slide 4)',
        content:
          '| Yêu cầu đơn lẻ (Statement — 7 tiêu chí) | Tập hợp yêu cầu / SRS (Collection — 4 tiêu chí) |\n|---|---|\n| **Complete** (Đầy đủ thông tin) | **Complete** (Không thiếu yêu cầu/mục nào) |\n| **Correct** (Chính xác nguồn gốc) | **Consistent** (Không mâu thuẫn nhau) |\n| **Feasible** (Khả thi thực hiện) | **Modifiable** (Dễ sửa đổi, lịch sử rõ) |\n| **Necessary** (Thực sự cần thiết) | **Traceable** (Truy vết được ngược/xuôi) |\n| **Prioritized** (Có độ ưu tiên) | |\n| **Unambiguous** (Chỉ 1 cách hiểu) | |\n| **Verifiable** (Kiểm thử được) | |',
      },
      {
        id: 'swr-ch11-sec2',
        type: 'keywords',
        title: 'Quy tắc viết & Các bẫy mơ hồ cần tránh (Slides 5–6)',
        content:
          '- Dùng từ khóa **`shall`** cho yêu cầu bắt buộc và **Active voice** (chủ động: *The system shall...*).\n- Tránh **Fuzzy words** (từ mơ hồ không đo được: *fast, user-friendly, maximize, minimize, state-of-the-art, support, several*).\n- Tránh cấu trúc **`A/B`** hoặc `and/or` gây hiểu nhầm.\n- Làm rõ **Boundary values** (giá trị biên `<=` vs `<`), **Symmetry** (có mở thì phải có đóng/hủy), **Complex logic**, và **Missing exceptions**.',
      },
    ],
  },
  {
    id: 'swr-ch12',
    order: 12,
    title: 'Chương 12: Mô hình Trực quan (A Picture is Worth 1024 Words)',
    summary:
      'DFD (Data Flow Diagram), Swimlane Diagram (Cross-functional), State-Transition Diagram & State Table, và mô hình hóa trong Agile.',
    sections: [
      {
        id: 'swr-ch12-sec1',
        type: 'comparison',
        title: 'So sánh 3 Sơ đồ phân tích trọng tâm (Slides 10–16 & Lessons 01, 05–06)',
        content:
          '| Sơ đồ | Mục đích chính | Ký hiệu thành phần cốt lõi |\n|---|---|---|\n| **Data Flow Diagram (DFD)** | Xem bức tranh lớn cách **dữ liệu di chuyển** qua các xử lý và kho dữ liệu (Level 0 DFD chi tiết hóa Context Diagram) | Operation/Process, Data Repository (kho dữ liệu), External Entity/System component, Input/Output Data Flow |\n| **Swimlane Diagram** | Biểu diễn **quy trình nghiệp vụ/luồng công việc** theo từng vai trò/hệ thống thực thi (còn gọi Cross-functional diagram) | Lanes (làn ngang/dọc = Actor/Phòng ban/Hệ thống), Rectangles (bước xử lý), Diamonds (rẽ nhánh quyết định), Arrows |\n| **State-Transition Diagram (STD)** | Biểu diễn rõ ràng **các trạng thái** của đối tượng/hệ thống thời gian thực và điều kiện chuyển trạng thái | **3 thành phần:** Rectangles (States), Arrows (Transitions), Text labels on arrows (Events / Conditions) |',
      },
      {
        id: 'swr-ch12-sec2',
        type: 'exam_tip',
        title: 'Từ khóa & Nguyên tắc Agile Modeling (Slide 19)',
        content:
          '- **Swimlane diagram** là một biến thể của flowchart, tương tự **UML Activity Diagram**, rất dễ cho stakeholder đọc hiểu.\n- **DFD** giúp phát hiện thiếu sót dữ liệu (missing data requirements), user class hoặc kết nối hệ thống bị bỏ sót.\n- **Agile Modeling:** Chỉ tạo những mô hình thực sự cần, đúng lúc cần và ở mức độ chi tiết vừa đủ để đội ngũ hiểu yêu cầu.',
      },
    ],
  },
  {
    id: 'swr-ch13',
    order: 13,
    title: 'Chương 13: Đặc tả Yêu cầu Dữ liệu (Specifying Data Requirements)',
    summary:
      'Data Modeling (Conceptual/Logical/Physical), ERD (Chen vs Crow’s Foot), Data Dictionary, CRUD Matrix, Specifying Reports và Dashboard.',
    sections: [
      {
        id: 'swr-ch13-sec1',
        type: 'concept',
        title: 'ERD, Data Dictionary & CRUD Matrix (Slides 4–6 & Knowledge PDF)',
        content:
          '- **3 mức Data Modeling:** Conceptual Data Model → Logical Data Model → Physical Data Model.\n- **ERD (Entity-Relationship Diagram):** Entities đặt tên **danh từ số ít** (singular nouns) trong hình chữ nhật; mô tả bằng Attributes; hình thoi (diamonds) thể hiện Relationships. Có 2 ký pháp phổ biến: **Chen Notation** và **Crow’s Foot Notation** — quan trọng nhất là cả nhóm thống nhất dùng chung một quy ước.\n- **CRUD Matrix (Create, Read, Update, Delete):** Kỹ thuật phân tích dữ liệu chặt chẽ để **phát hiện yêu cầu bị thiếu** (VD: có entity được Create/Read nhưng thiếu chức năng Update hoặc Delete).\n- **Data Dictionary:** Định nghĩa cấu trúc, kiểu dữ liệu, độ dài, giá trị hợp lệ cho từng trường dữ liệu.',
      },
      {
        id: 'swr-ch13-sec2',
        type: 'comparison',
        title: 'Đặc tả Báo cáo (Reports) vs Dashboard (Slides 7–9)',
        content:
          '| Tiêu chí | Specifying Reports | Dashboard Reporting |\n|---|---|---|\n| Bản chất | Báo cáo dạng bảng hoặc biểu đồ từ CSDL/file | Màn hình/báo cáo tổng hợp đa chiều nhiều dạng chữ + biểu đồ |\n| Trọng tâm | Phân biệt báo cáo **Static vs Dynamic**, kiểm tra báo cáo cũ không dùng, bảo mật/phân quyền, tăng trưởng dữ liệu | Tổng hợp **KPIs** (doanh số, chi phí...) giúp người dùng nắm bắt tình hình chỉ trong nháy mắt (at a glance) |',
      },
    ],
  },
  {
    id: 'swr-ch14',
    order: 14,
    title: 'Chương 14: Yêu cầu Phi chức năng & Planguage (Beyond Functionality)',
    summary:
      'External vs Internal Quality Attributes, đặc tả chính xác bằng Planguage, đánh đổi (Trade-offs), Constraints và NFR trên dự án Agile.',
    sections: [
      {
        id: 'swr-ch14-sec1',
        type: 'comparison',
        title: 'External vs Internal Quality Attributes (Slide 6)',
        content:
          '| External Quality Attributes (Người dùng cảm nhận trực tiếp) | Internal Quality Attributes (Đội phát triển/bảo trì quan tâm) |\n|---|---|\n| **Availability, Installability, Integrity, Interoperability, Performance, Reliability, Robustness, Safety, Security, Usability** | **Efficiency, Modifiability, Portability, Reusability, Scalability, Verifiability** |',
      },
      {
        id: 'swr-ch14-sec2',
        type: 'keywords',
        title: 'Planguage & Các loại Constraints (Slides 7–11)',
        content:
          '- **Planguage (Simmons / Tom Gilb):** Ngôn ngữ từ khóa định lượng chính xác NFR gồm: `TAG`, `AMBITION`, `SCALE`, `METER` (cách đo), `GOAL` (mục tiêu bắt buộc), `STRETCH`, `WISH`, `DEFINED`.\n- **Các loại Constraints (Ràng buộc):** UI control constraint (`CON-1`), Implementation/License (`GPL open source`), Architecture (`.NET framework 4.5`), Physical (`ATM chỉ chứa tờ $20`), Design (`chỉ thanh toán qua PayPal`), Data (`lưu dạng XML`).',
      },
      {
        id: 'swr-ch14-sec3',
        type: 'exam_tip',
        title: 'Nguyên tắc xử lý Quality Attributes trên dự án Agile (Slide 12)',
        content:
          'Rất đắt đỏ nếu vá chất lượng (hiệu năng, bảo mật, mở rộng) vào giai đoạn cuối! Vì thế ngay cả dự án **Agile** cũng **phải xác định NFR & Constraints quan trọng ngay từ đầu** và xếp độ ưu tiên song song với User Stories để thiết kế kiến trúc nền tảng phù hợp.',
      },
    ],
  },
  {
    id: 'swr-ch15',
    order: 15,
    title: 'Chương 15: Giảm thiểu Rủi ro bằng Prototyping (Risk Reduction Through Prototyping)',
    summary:
      'Horizontal (Mock-up) vs Vertical (Proof of Concept), Throwaway vs Evolutionary, Paper vs Electronic và 4 rủi ro của Prototyping.',
    sections: [
      {
        id: 'swr-ch15-sec1',
        type: 'comparison',
        title: 'Phân loại Prototypes theo Phạm vi & Tương lai sử dụng (Slides 4–8)',
        content:
          '| Phân loại | Tên gọi / Bản chất | Mục đích sử dụng |\n|---|---|---|\n| **Horizontal Prototype** | **Mock-up** | Mô phỏng giao diện, bố cục, điều hướng bề mặt (look & feel), chưa nối xử lý sâu bên dưới |\n| **Vertical Prototype** | **Proof of Concept (PoC)** | Chạy thử một lát cắt xuyên suốt từ UI qua mọi tầng kỹ thuật để kiểm chứng tính khả thi/hiệu năng |\n| **Throwaway Prototype** | Làm nhanh–rẻ rồi bỏ (VD: **Wireframe**) | Giải đáp thắc mắc, làm rõ yêu cầu mơ hồ; KHÔNG viết defensive code, error-handling hay tài liệu sâu |\n| **Evolutionary Prototype** | Nền tảng kiến trúc vững chắc | Xây dựng tăng tiến dần thành sản phẩm thật qua nhiều vòng phản hồi (VD: **Agile**) |',
      },
      {
        id: 'swr-ch15-sec2',
        type: 'exam_tip',
        title: '4 Rủi ro lớn của Prototyping (Slide 13)',
        content:
          '1. **Áp lực phát hành bản mẫu** thành sản phẩm chính thức (`Pressure to release the prototype`).\n2. **Bị phân tâm bởi chi tiết nhỏ** như màu sắc, font chữ (`Distraction by details`).\n3. **Kỳ vọng hiệu năng phi thực tế** từ bản demo nhanh.\n4. **Đầu tư quá nhiều công sức** cho một bản mẫu đáng lẽ chỉ dùng để bỏ (`Throwaway`). Lưu ý: Prototype **không thay thế** tài liệu đặc tả yêu cầu viết bằng văn bản!',
      },
    ],
  },
  {
    id: 'swr-ch16',
    order: 16,
    title: 'Chương 16: Xác định Độ ưu tiên Yêu cầu (Setting Requirement Priorities)',
    summary:
      'Requirements Triage, 6 yếu tố thực tiễn của Alan Davis và 6 kỹ thuật xếp hạng ưu tiên (In/Out, Pairwise, 3-Level, MoSCoW, $100, Value-Cost-Risk).',
    sections: [
      {
        id: 'swr-ch16-sec1',
        type: 'concept',
        title: '6 Kỹ thuật Xếp hạng Độ ưu tiên (Slides 7–8)',
        content:
          '- **In or Out:** Nhóm stakeholder chọn từng yêu cầu là Đưa vào hay Bỏ ra cho release hiện tại.\n- **Pairwise comparison & Rank ordering:** So sánh từng cặp để xếp thứ tự 1..N.\n- **Three-level scale:** High / Medium / Low (cần tiêu chí định nghĩa rõ cho từng mức).\n- **MoSCoW:** **M**ust have, **S**hould have, **C**ould have, **W**on’t have (this time).\n- **\$100 Allocation:** Mỗi người có 100 đô giả định để phân bổ vào các tính năng quan trọng nhất.\n- **Value, Cost, and Risk Model:** Bảng tính định lượng điểm ưu tiên dựa trên Giá trị mang lại (+), Phí tổn mất mát nếu thiếu, Chi phí thực hiện (-) và Rủi ro kỹ thuật (-).',
      },
      {
        id: 'swr-ch16-sec2',
        type: 'exam_tip',
        title: 'Thuật ngữ "Requirements Triage" & Tâm lý khách hàng',
        content:
          'Alan Davis gọi Prioritization là **Requirements Triage**. Khi khách hàng nói *"tính năng nào cũng High priority"*, BA phải hỏi hậu quả nếu dời sang bản sau, hoặc liệu giữ tính năng này có đáng làm trễ toàn bộ các tính năng High khác hay không.',
      },
    ],
  },
  {
    id: 'swr-ch17',
    order: 17,
    title: 'Chương 17: Kiểm chứng Yêu cầu (Validating the Requirements)',
    summary:
      'Phân biệt Verification vs Validation, Review không chính thức vs Inspection (4 vai trò), phát triển Test Case song song và Acceptance Criteria.',
    sections: [
      {
        id: 'swr-ch17-sec1',
        type: 'comparison',
        title: 'Verification vs Validation & Hình thức Review (Slides 5–7)',
        content:
          '| Khái niệm | Định nghĩa ngắn gọn |\n|---|---|\n| **Verification** | Kiểm tra sản phẩm của một bước phát triển có đáp ứng đúng đặc tả đầu vào của nó không (**"Doing the thing right"**) |\n| **Validation** | Đánh giá sản phẩm có thỏa mãn nhu cầu thực sự của khách hàng không (**"Doing the right thing"**) |\n| **Informal Reviews** | **Peer deskcheck** (1 người đọc góp ý), **Passaround** (gửi nhiều người đọc), **Walkthrough** (tác giả dẫn dắt trình bày) |\n| **Formal Inspection** | Quy trình chính quy nhiều giai đoạn với 4 vai trò chuẩn: **Author, Moderator, Reader, Recorder** |',
      },
      {
        id: 'swr-ch17-sec2',
        type: 'exam_tip',
        title: 'Mẹo phát hiện lỗi sớm & Thách thức Review (Slides 2, 11)',
        content:
          '- Bắt đầu viết **Test Case & Acceptance Criteria song song với lúc viết Requirements** sẽ bắt được rất nhiều lỗi mơ hồ/thiếu sót ngay từ trứng nước.\n- **4 thách thức của Inspection:** Tài liệu quá đồ sộ, nhóm review quá đông, thành viên phân tán địa lý, người đọc chưa chuẩn bị trước.',
      },
    ],
  },
  {
    id: 'swr-ch18',
    order: 18,
    title: 'Chương 18: Tái sử dụng Yêu cầu (Requirements Reuse)',
    summary:
      'Lợi ích tái sử dụng, kịch bản (Product lines, Reengineered systems), cấu trúc Requirement Patterns, rào cản (NIH/NAH) và yếu tố thành công.',
    sections: [
      {
        id: 'swr-ch18-sec1',
        type: 'concept',
        title: 'Kịch bản Tái sử dụng & Requirement Patterns (Slides 4–8)',
        content:
          '- **Lợi ích:** Giao hàng nhanh hơn, giảm chi phí, đồng nhất giữa các ứng dụng trong dòng sản phẩm (product line), giảm lỗi & rework, ước lượng effort chính xác hơn.\n- **Kịch bản phổ biến:** Software Product Lines (dòng sản phẩm chung nền tảng), Reengineered/Replacement Systems (thay thế hệ thống cũ).\n- **Cấu trúc 1 Requirement Pattern:** Guidance, Content, Template, Examples, Extra requirements, Considerations for development & testing.',
      },
      {
        id: 'swr-ch18-sec2',
        type: 'keywords',
        title: 'Rào cản (Barriers) vs Yếu tố Thành công (Success Factors) (Slide 9)',
        content:
          '- **Barriers:** Yêu cầu gốc kém/thiếu; tâm lý **`NIH` (Not Invented Here)** & **`NAH` (Not Applicable Here)**; khác văn phong viết; tổ chức thiếu nhất quán; loại dự án khác nhau; không rõ quyền sở hữu (Ownership).\n- **Success Factors:** Kho lưu trữ tập trung (Repository), Chất lượng yêu cầu gốc tốt (Quality), Tương tác liên nhóm, Thống nhất thuật ngữ (Terminology), Văn hóa tổ chức (Organizational culture).',
      },
    ],
  },
  {
    id: 'swr-ch19',
    order: 19,
    title: 'Chương 19: Từ Yêu cầu đến Kế hoạch, Thiết kế & Kiểm thử (Beyond Requirements Development)',
    summary:
      'Phân bổ công sức RE theo vòng đời SDLC, ước lượng quy mô/nỗ lực dự án từ yêu cầu (Function Points, Story Points, Use Case Points) và lập lịch.',
    sections: [
      {
        id: 'swr-ch19-sec1',
        type: 'concept',
        title: 'Ước lượng Quy mô & Lập lịch từ Yêu cầu (Slides 5–7)',
        content:
          '- **5 thước đo ước lượng quy mô & effort từ yêu cầu:**\n  1. Số lượng yêu cầu kiểm thử độc lập (Individually testable requirements — Wilson).\n  2. **Function Points** (IFPUG / Jones).\n  3. **Story Points** (Agile) hoặc **Use Case Points** (Wiegers).\n  4. Số lượng, loại và độ phức tạp các thành phần UI.\n  5. Số dòng code ước tính (Estimated LOC).\n- **5 yếu tố đầu vào lập lịch (Scheduling):** Quy mô sản phẩm ước lượng; Năng suất lịch sử của team; Danh sách tác vụ thực hiện tính năng; Yêu cầu tương đối ổn định cho iteration sắp tới; Kinh nghiệm điều chỉnh của PM.',
      },
      {
        id: 'swr-ch19-sec2',
        type: 'exam_tip',
        title: 'Liên kết sang Design & Test',
        content:
          'Hoạt động RE phân bổ khác nhau tùy SDLC (**Waterfall** dồn ở đầu, **Iterative/Incremental** lặp lại theo từng vòng). Yêu cầu không chỉ phục vụ viết code mà còn trực tiếp định hướng **Kiến trúc (Architecture & allocation), Thiết kế UI, và Kịch bản kiểm thử (Tests)**.',
      },
    ],
  },
];
