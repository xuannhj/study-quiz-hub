import type { Chapter } from '../../../types/study';

export const swrPdfChapters: Chapter[] = [
  {
    id: 'swr-pdf-l1',
    order: 1,
    title: 'PDF 1: Lesson 01 — Swimlane Diagram (Part of Chapter 12)',
    summary:
      'Ký hiệu Swimlane Diagram (rectangles, arrows, diamonds, lanes) và phân tích luồng nghiệp vụ đa phòng ban qua ví dụ Order a chemical from a vendor (Figure 12-2).',
    sections: [
      {
        id: 'swr-pdf-l1-sec1',
        type: 'concept',
        title: 'Khái niệm & 4 Ký hiệu chuẩn (Pages 3–4)',
        content:
          '- **Swimlane Diagram** là biến thể của flowchart (tương tự UML Activity Diagram / Cross-functional diagram), chia nhỏ quy trình thành các làn (**lanes**) để hiển thị ai/bộ phận/hệ thống nào thực thi từng bước.\n- **4 thành phần cốt lõi:**\n  1. **Process steps:** Hình chữ nhật (**rectangles**).\n  2. **Transitions:** Mũi tên (**arrows**) nối giữa các hình chữ nhật.\n  3. **Decisions:** Hình thoi (**diamonds**) với nhãn lựa chọn (`Yes`/`No`...) đặt trên các mũi tên đi ra.\n  4. **Swimlanes:** Các đường kẻ ngang hoặc dọc chia làn cho **Roles, Departments, hoặc Systems**.',
      },
      {
        id: 'swr-pdf-l1-sec2',
        type: 'exam_tip',
        title: 'Luồng ví dụ Figure 12-2: Order a chemical from a vendor (Page 5)',
        content:
          '- **4 làn:** `Chemist` → `Buyer` → `Receiving` → `Vendor`.\n- **Điểm bẫy hay thi:** Từ `Order accepted?` ở làn `Buyer`, nhánh **`No`** quay ngược về `Create a vendor purchase order` (Buyer); nhánh **`Yes`** xuống `Update order status`.\n- Luồng nhận hàng đi từ `Ship chemical containers` (**Vendor**) → `Receive shipment at receiving dock` (**Receiving**) → `Receive chemical in laboratory` (**Chemist**); còn luồng thanh toán đi từ `Create and send invoice` (Vendor) → `Review and approve invoice` → `Send payment` (Buyer) → `Receive payment` (Vendor).',
      },
    ],
  },
  {
    id: 'swr-pdf-l2',
    order: 2,
    title: 'PDF 2: Lesson 02 — Context Diagram (Chapter 5)',
    summary:
      'Mục đích, thời điểm vẽ, quy tắc ẩn nội bộ và đọc đúng ký hiệu Context Diagram của Chemical Tracking System (Pages 4–9).',
    sections: [
      {
        id: 'swr-pdf-l2-sec1',
        type: 'concept',
        title: 'Bản chất, Thời điểm & Ký hiệu (Pages 4–9)',
        content:
          '- **Khái niệm:** Mô hình phân tích đơn giản thuộc nhóm Scope representation techniques, là mức cao nhất (**top level**) của DFD, chỉ ra ranh giới và kết nối giữa hệ thống với thế giới bên ngoài.\n- **Timing (When?):** Thực hiện **sớm** ở bước *"Define product vision and scope"* (Business Requirements), nằm trong Vision and Scope Document.\n- **3 Ký hiệu chuẩn:**\n  1. **The System:** Duy nhất **1 hình tròn** (`a single circle`).\n  2. **External Entities:** **Hình chữ nhật** gồm 4 nhóm: *User classes, organizations, other systems, hardware devices*.\n  3. **Data-flows:** Mũi tên có nhãn biểu diễn sự di chuyển của **thông tin hoặc vật liệu** qua ranh giới hệ thống.',
      },
      {
        id: 'swr-pdf-l2-sec2',
        type: 'exam_tip',
        title: 'Quy tắc vàng & Ví dụ Chemical Tracking System (Pages 4, 5, 8)',
        content:
          '- **KHÔNG BAO GIỜ** vẽ các tiến trình con, đối tượng hay kho dữ liệu (Data Store) bên trong vòng tròn hệ thống của Context Diagram.\n- Trong **Chemical Tracking System**: `Bar Code Reader` là External Entity dạng thiết bị phần cứng gửi `scanned bar code`; `Training Database` là hệ thống ngoài nhận `training record request` và trả về `hazardous training record`; `Health and Safety Department` gửi `request for usage report` và nhận `chemical usage report`; `Buyer` nhận `vendor chemical request` và gửi `vendor order status`.',
      },
    ],
  },
  {
    id: 'swr-pdf-l3',
    order: 3,
    title: 'PDF 3: Lesson 03 — Use Case Diagram (Chapter 8)',
    summary:
      'User Stories vs Use Cases, Users vs Actors ("collection of hats"), quy tắc đặt tên và chiều mũi tên 4 quan hệ chuẩn (Pages 3–10).',
    sections: [
      {
        id: 'swr-pdf-l3-sec1',
        type: 'comparison',
        title: '4 Quan hệ & Chiều Mũi Tên Chuẩn (Pages 8–10)',
        content:
          '| Quan hệ | Ký hiệu & Chiều mũi tên | Ví dụ trên Slide PDF |\n|---|---|---|\n| **Association** | Đường thẳng nét liền giữa Actor và Use Case | `Customer` — `Place Order` |\n| **Generalization** | Nét liền + mũi tên tam giác rỗng từ **Con → Cha** | `Salesperson`/`Supervisor` → `Employee`; `Withdraw`/`Deposit Money` → `Perform Money Transaction` |\n| **`<<include>>`** | Nét đứt từ **Base Use Case → Included Use Case** | `Create Account` ---`<<include>>`---> `Validate Email` |\n| **`<<extend>>`** | Nét đứt từ **Extending Use Case → Base Use Case** | `Apply Discount` / `Update Delivery Address` ---`<<extend>>`---> `Place Order` |',
      },
      {
        id: 'swr-pdf-l3-sec2',
        type: 'keywords',
        title: 'Users vs Actors & Quy trình 3 bước (Pages 6–7, 4)',
        content:
          '- **Users vs Actors:** Users là người/hệ thống thực tế; Actors là vai trò trừu tượng (*"collection of hats"*).\n- **3 bước:** (1) Identify actors first → (2) Lay out business processes → (3) Define use cases (tên Use Case bắt đầu bằng **động từ**).\n- **Figure 8-2 (Chemical Tracking System):** `Requester` nối `Obtain Material Safety Data Sheet`, `Request a Chemical`, `Dispose of a Chemical`; `Buyer` nối `Search Vendor Catalogs` & `Request a Chemical`; `Training Database` nối `Request a Chemical`; `Health and Safety Dept.` nối `Dispose of a Chemical`; `Chemical Stockroom` nối `Request a Chemical` & `Manage Inventory`.',
      },
    ],
  },
  {
    id: 'swr-pdf-l4',
    order: 4,
    title: 'PDF 4: Lesson 04 — Use Case Specification (Chapter 8)',
    summary:
      'Mẫu đặc tả UC-4 Request a Chemical, luồng Normal/Alternative/Exception, sơ đồ nhánh rẽ và chuyển đổi sang Functional Requirements (Pages 5–10).',
    sections: [
      {
        id: 'swr-pdf-l4-sec1',
        type: 'concept',
        title: 'Cấu trúc UC-4 Request a Chemical (Pages 5–6)',
        content:
          '- **Primary Actor:** `Requester` | **Secondary Actors:** `Buyer, Chemical Stockroom, Training Database`.\n- **Trigger:** `Requester indicates that he wants to request a chemical.`\n- **Preconditions (`PRE-1..3`):** User authenticated, authorized, Chemical inventory database online.\n- **Normal Flow (`4.0`):** Yêu cầu hóa chất có sẵn trong Chemical Stockroom (6 bước từ nhập tên/ID/cấu trúc tới lưu request và báo Chemical Stockroom).\n- **Alternative Flow (`4.1`):** Đặt mua từ Vendor (tìm catalog, chọn vendor/size/grade/số lượng, lưu và báo Buyer).\n- **Exceptions (`4.1.E1`):** Hóa chất không bán thương mại — cho phép chọn hóa chất khác (`3a–3b`: khởi động lại Normal Flow) hoặc thoát (`4a–4b`: kết thúc Use Case).',
      },
      {
        id: 'swr-pdf-l4-sec2',
        type: 'exam_tip',
        title: 'Nhánh luồng & Đường tới Functional Requirements (Pages 7, 9–10)',
        content:
          '- **Page 7:** Alternative Flow rẽ từ `(branch condition)` (`Step 3a -> 3b -> 3c`) rồi **nhập lại Normal Flow** tại `Step 4` trước khi tới Postconditions.\n- **Figure 8-1 (Pages 9–10):** Lập trình viên **không code Use Case** mà code **Functional Requirements** (suy dẫn từ `Use Case Specification` qua bước `analysis`, cùng với `Tests`). Với User Story: `User Story` → conversations → `Refined user stories` → conversations → `Acceptance tests`.',
      },
    ],
  },
  {
    id: 'swr-pdf-l56',
    order: 5,
    title: 'PDF 5: Lesson 05–06 — State-Transition Diagram & Level 0 DFD (Chapter 12)',
    summary:
      'Đọc chuẩn các chuyển trạng thái của Chemical Request (Page 4) và các thành phần/luồng dữ liệu Level 0 DFD (Figure 12-1, Page 6).',
    sections: [
      {
        id: 'swr-pdf-l56-sec1',
        type: 'concept',
        title: 'State-Transition Diagram — Chemical Request (Pages 3–4)',
        content:
          '- **Mục đích:** Biểu diễn súc tích, đầy đủ, không mơ hồ các trạng thái (rectangles) và chuyển trạng thái (arrows) của đối tượng.\n- **Các chuyển đổi hợp lệ trên Page 4:**\n  - `In Preparation` ↔ `Postponed` (`saves / retrieves incomplete request`)\n  - `In Preparation` → `Accepted` (`system accepts valid request`)\n  - `Accepted` → `Fulfilled` (stockroom fills) | `Placed` (buyer orders with vendor) | `Canceled`\n  - `Placed` → `Fulfilled` | `Back-Ordered` | `Canceled`\n  - `Back-Ordered` → `Fulfilled` | `Canceled`\n  - `Postponed` → `Canceled`.\n- **Bẫy:** Không có mũi tên trực tiếp từ `In Preparation` sang `Canceled` hay `Fulfilled`.',
      },
      {
        id: 'swr-pdf-l56-sec2',
        type: 'comparison',
        title: 'Level 0 DFD — Figure 12-1 (Pages 5–6)',
        content:
          '- **Mối quan hệ với Context Diagram:** Khai triển (elaborate) Context Diagram thành **Level 0 DFD**; review DFD giúp phát hiện User Class, quy trình hoặc kết nối hệ thống còn sót.\n- **4 Ký hiệu trong Key:** `data flow` (mũi tên), `process` (hình tròn đánh số `1..6`), `Data Store` (2 đường song song: `Vendor Catalog`, `Chemical Request`, `Chemical Stockroom Inventory`), `External Entity` (hình chữ nhật: `Chemist`, `Chemical Stockroom Staff`, `Buyer`, `Health and Safety Department`).',
      },
    ],
  },
  {
    id: 'swr-pdf-l6',
    order: 6,
    title: 'PDF 6: Knowledge Chapter 13 — Data Modeling, ERD, CRUD & Reports',
    summary:
      '3 mức Data Modeling (Conceptual/Logical/Physical), Chen vs Crow’s Foot, phân tích CRUD Matrix (Figure 13-5) và đặc tả Reports (Pages 3–14).',
    sections: [
      {
        id: 'swr-pdf-l6-sec1',
        type: 'comparison',
        title: 'Bảng so sánh 3 mức Data Modeling & Ký pháp ERD (Pages 5–8)',
        content:
          '| Đặc điểm | Conceptual | Logical | Physical |\n|---|---|---|---|\n| Entity names & Relationships | X | X | |\n| Attributes | | X | |\n| Primary keys & Foreign keys | | X | X |\n| Table names, Column names, Column data types | | | X |\n\n- **ERD:** Entity đặt tên **danh từ số ít** trong hình chữ nhật; hình thoi là Relationship (**Chen** dùng `1`/`M` + hình thoi; **Crow’s Foot** dùng `|` và `o<` + nhãn động từ). Quan trọng nhất là **cả nhóm thống nhất dùng chung một quy ước**.',
      },
      {
        id: 'swr-pdf-l6-sec2',
        type: 'exam_tip',
        title: 'CRUD Matrix (Page 10) & Specifying Reports (Pages 11–14)',
        content:
          '- **Figure 13-5 (CRUD Matrix):** Hàng là Use Case, cột là Entity (`Order`, `Chemical`, `Requester`, `Vendor Catalog`). Cột `Vendor Catalog` chỉ có `R` (thiếu `C, U, D`), `Requester` có `C, U, R` (thiếu `D`) — kỹ thuật cực mạnh để **phát hiện missing requirements**.\n- **Specifying Reports:** Khai thác báo cáo đang dùng / cần sửa / tạo nhưng không dùng; làm rõ mục đích, thủ công vs tự động, xử lý sau khi tạo (disposition), bảo mật truy cập; chú ý **Find the data, Anticipate growth, Look for similarities, Distinguish static vs dynamic reports**.',
      },
    ],
  },
];

