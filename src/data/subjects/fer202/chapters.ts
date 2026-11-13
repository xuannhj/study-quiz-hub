import type { Chapter } from '../../../types/study';

export const fer202Chapters: Chapter[] = [
  {
    id: 'fer202-ch1',
    order: 1,
    title: 'Slot 1: Tổng Quan React, Virtual DOM, React 18 & Kiến Trúc Node.js',
    summary:
      'Khái niệm thư viện React, Virtual DOM & Reconciliation, tính năng mới trên React 18 (Automatic Batching, createRoot, Transitions, Suspense SSR) và nền tảng runtime Node.js đơn luồng bất đồng bộ.',
    sections: [
      {
        id: 'fer202-ch1-s1',
        type: 'concept',
        title: 'Bản Chất React, Virtual DOM & Điểm Mới React 18+',
        content: `• **React là gì?** React là một **thư viện JavaScript mã nguồn mở** (Open-source JavaScript library — **không phải** một full-scale framework như Angular) do Facebook (Meta) phát triển, chuyên dùng để xây dựng giao diện người dùng (UI) dựa trên **Component** cho các ứng dụng **SPA (Single Page Application)**.
• **Virtual DOM & Reconciliation:**
  - Thao tác trực tiếp trên **Real DOM** rất chậm vì mỗi lần thay đổi có thể kích hoạt trình duyệt tính toán lại bố cục (**Reflow / Layout**) và vẽ lại (**Repaint**).
  - React duy trì một bản sao nhẹ trong bộ nhớ gọi là **Virtual DOM**. Khi \`state\` hoặc \`props\` thay đổi, React tạo cây Virtual DOM mới, dùng thuật toán **Diffing / Reconciliation** so sánh với bản chụp (snapshot) Virtual DOM trước đó để tìm ra tập thay đổi tối thiểu, rồi mới cập nhật hàng loạt (**batch update**) xuống Real DOM.
• **Nâng cấp quan trọng trên React 18 & React 19 hiện đại:**
  - **Root API mới:** Thay thế \`ReactDOM.render(<App />, rootNode)\` (React 17) bằng \`ReactDOM.createRoot(rootNode).render(<App />)\` từ \`react-dom/client\` để bật **Concurrent Rendering**.
  - **Automatic Batching:** Trước React 18, React chỉ gộp (batch) các lệnh \`setState\` bên trong React event handlers. Từ **React 18**, mọi cập nhật state bên trong \`Promise\`, \`setTimeout\`, \`fetch\` callbacks hay native event handlers đều được **tự động gộp chung vào 1 lần re-render duy nhất** (trừ khi ép cập nhật tức thì bằng \`flushSync\`).
  - **Transitions (\`startTransition\`, \`useTransition\`):** Phân tách cập nhật khẩn cấp (urgent: gõ phím, click) và cập nhật chuyển tiếp không khẩn cấp (non-urgent: lọc danh sách lớn) giúp UI không bị đơ.
  - **Kiến trúc Node.js (Môi trường chạy công cụ & build React):** Dựa trên động cơ **Chrome V8**, hoạt động theo mô hình **Single-Threaded Event Loop** kết hợp **Non-blocking I/O** (bất đồng bộ hướng sự kiện) và trình quản lý gói **NPM / NPX**.`,
      },
      {
        id: 'fer202-ch1-s2',
        type: 'comparison',
        title: 'So Sánh: Real DOM vs Virtual DOM & React 17 vs React 18',
        content: `| Tiêu chí | Real DOM (Browser DOM) | Virtual DOM (React) |
| :--- | :--- | :--- |
| **Bản chất** | Cây đối tượng HTML thật trên trình duyệt | Bản biểu diễn nhẹ bằng JavaScript Object trong RAM |
| **Khi cập nhật** | Vẽ lại trực tiếp, dễ gây Reflow/Repaint toàn nhánh | Diffing 2 bản chụp, chỉ patch đúng node thay đổi |
| **Tốc độ & Chi phí** | Chậm khi cập nhật tần suất cao | Nhanh, tối ưu nhờ Reconciliation & Batching |

| Tính năng | React 17 (Legacy) | React 18+ (Concurrent) |
| :--- | :--- | :--- |
| **Khởi tạo Root** | \`ReactDOM.render(<App />, el)\` | \`createRoot(el).render(<App />)\` |
| **Batching** | Chỉ trong React Event Handlers | **Automatic Batching** (cả Promise, setTimeout, native event) |
| **SSR & Suspense** | Chờ toàn trang tải xong | Streaming HTML + Selective Hydration với \`<Suspense>\` |`,
      },
      {
        id: 'fer202-ch1-s3',
        type: 'keywords',
        title: 'Từ Khóa Cốt Lõi Trong Slide Slot 1',
        content: `• **JavaScript Library for UI** (không phải full MVC framework)
• **SPA (Single Page Application):** Tải 1 trang HTML duy nhất, cập nhật nội dung động không reload trang.
• **Virtual DOM & Reconciliation (Diffing Algorithm)**
• **Declarative UI (Khai báo):** Mô tả UI trông như thế nào ứng với từng state, thay vì chỉ dẫn từng bước thao tác DOM (Imperative).
• **Automatic Batching**, **Concurrent React**, **Transitions (\`startTransition\`)**
• **Node.js:** Single-threaded Event Loop, Non-blocking I/O, V8 Engine, \`npm\` (cài đặt gói) vs \`npx\` (thực thi gói không cần cài global).`,
      },
      {
        id: 'fer202-ch1-s4',
        type: 'exam_tip',
        title: 'Mẹo & Bẫy Đề Thi FE Slot 1',
        content: `• **Bẫy 1:** Đề hỏi *"Is React a framework or a library?"* → Chọn **Library** (chỉ tập trung tầng View/UI; muốn routing hay global state phải cài thêm \`react-router-dom\`, \`redux\`).
• **Bẫy 2:** Đề hỏi về **Automatic Batching trong React 18**: Nếu trong 1 hàm \`setTimeout\` hoặc \`.then()\` của \`fetch\` gọi liên tiếp 2 lệnh \`setCount\` và \`setFlag\`, component sẽ re-render **1 lần duy nhất** (ở React 17 là 2 lần).
• **Bẫy 3:** Đề hỏi về **Node.js**: Nhớ cụm từ vàng **"Single-threaded, non-blocking, event-driven I/O"** — Node.js KHÔNG tạo thread mới cho mỗi request giống mô hình đa luồng truyền thống.`,
      },
    ],
  },
  {
    id: 'fer202-ch2',
    order: 2,
    title: 'Slot 2–3: Cú Pháp ES6 Hiện Đại & Cơ Chế Biên Dịch JSX',
    summary:
      'Làm chủ let/const, Arrow Function & lexical this, Template Literals, Object/Array Destructuring, Default/Rest/Spread operators, ES6 Modules, Classes và quy tắc viết JSX trong React.',
    sections: [
      {
        id: 'fer202-ch2-s1',
        type: 'concept',
        title: 'Trọn Bộ Cú Pháp ES6 (ECMAScript 2015) & JSX Nền Tảng',
        content: `• **Khai báo biến (\`var\` vs \`let\` vs \`const\`):**
  - \`var\`: **Function-scoped** (hoặc global), bị hoisting với giá trị \`undefined\`, cho phép khai báo trùng tên trong cùng phạm vi.
  - \`let\`: **Block-scoped** (\`{ ... }\`), có thể gán lại giá trị (reassign) nhưng không được khai báo lại trong cùng block; nằm trong **Temporal Dead Zone (TDZ)** trước dòng khai báo.
  - \`const\`: **Block-scoped**, bắt buộc khởi tạo ngay khi khai báo, **không thể gán lại tham chiếu** (nhưng nếu là Object/Array thì vẫn thay đổi được thuộc tính/phần tử bên trong — *mutable contents, immutable binding*).
• **Arrow Function (\`=>\`):** Cú pháp ngắn gọn, **không có \`this\` riêng** (kế thừa *lexical \`this\`* từ phạm vi bao ngoài), không có đối tượng \`arguments\` riêng và không thể dùng với từ khóa \`new\`. Lưu ý: nếu trả về trực tiếp một Object literal ở dạng rút gọn, phải bọc trong ngoặc tròn: \`() => ({ id: 1 })\`.
• **Destructuring, Rest (\`...\`) & Spread (\`...\`):**
  - **Destructuring:** Tách nhanh thuộc tính object \`const { name, age = 18 } = user;\` hoặc phần tử mảng \`const [first, , third] = list;\`.
  - **Rest parameter (\`...args\`):** Gom các phần tử/tham số còn lại thành một mảng thực sự (phải đứng ở **cuối** danh sách tham số).
  - **Spread operator (\`...\`):** Trải phẳng các phần tử của mảng/thuộc tính của object sang mảng/object mới — công cụ sống còn để cập nhật **immutable state** trong React (\`setUser({ ...user, age: 20 })\`).
• **ES6 Modules:** Mỗi file chỉ có **tối đa 1 \`export default\`** (khi import không dùng \`{}\` và đặt tên tùy ý) nhưng có thể có **nhiều Named Exports** (khi import phải dùng \`{ exactName }\` hoặc đổi tên bằng \`as\`).
• **JSX (JavaScript XML):** Cú pháp mở rộng giúp viết cấu trúc giống HTML ngay trong JS. Babel biên dịch JSX thành lời gọi \`React.createElement(type, props, ...children)\` (hoặc hàm \`_jsx()\` của React 17+ JSX Transform mới) tạo ra các **React Elements** (plain JS objects).`,
      },
      {
        id: 'fer202-ch2-s2',
        type: 'comparison',
        title: 'So Sánh: HTML Chuẩn vs JSX & Default Export vs Named Export',
        content: `| Quy tắc | HTML Truyền Thống | JSX Trong React |
| :--- | :--- | :--- |
| **Phần tử gốc (Root)** | Nhiều thẻ ngang hàng tùy ý | Bắt buộc **1 phần tử cha duy nhất** (hoặc bọc bằng \`<React.Fragment>\` / \`<>...</>\`) |
| **Đóng thẻ** | Thẻ rỗng như \`<img>\`, \`<br>\`, \`<input>\` không cần đóng | **Mọi thẻ đều phải đóng** (\`<img />\`, \`<br />\`, \`<input />\`) |
| **Tên thuộc tính DOM** | \`class\`, \`for\`, \`onclick\`, \`tabindex\` | **camelCase:** \`className\`, \`htmlFor\`, \`onClick\`, \`tabIndex\` |
| **Thuộc tính \`style\`** | Chuỗi CSS: \`style="background-color: red"\` | **Object JS:** \`style={{ backgroundColor: 'red', fontSize: 16 }}\` |

| Tiêu chí | Default Export (\`export default A\`) | Named Export (\`export const A = ...\`) |
| :--- | :--- | :--- |
| **Số lượng mỗi file** | Tối đa **1** | **Không giới hạn** |
| **Cú pháp Import** | \`import AnyName from './file'\` (không có \`{}\`) | \`import { A, B as AliasB } from './file'\` (bắt buộc có \`{}\`) |`,
      },
      {
        id: 'fer202-ch2-s3',
        type: 'keywords',
        title: 'Từ Khóa & Quy Tắc Biểu Thức Trong JSX \`{ ... }\`',
        content: `• **Nhúng biểu thức JS trong JSX:** Dùng cặp ngoặc nhọn \`{ expression }\`. Bên trong \`{}\` chỉ chấp nhận **JavaScript Expressions** (biến, phép tính, toán tử 3 ngôi \`a ? b : c\`, toán tử ngắn mạch \`cond && <Comp />\`, hàm \`.map()\`), **KHÔNG chấp nhận câu lệnh (Statements)** như \`if/else\`, \`for\`, \`switch\`.
• **Giá trị không hiển thị khi render trong JSX:** \`false\`, \`null\`, \`undefined\`, \`true\` đều không in ra màn hình. **Cẩn thận bẫy số \`0\`:** Viết \`{items.length && <List />}\` khi \`items.length === 0\` sẽ in số \`0\` ra màn hình! Phải viết \`{items.length > 0 && <List />}\`.`,
      },
      {
        id: 'fer202-ch2-s4',
        type: 'exam_tip',
        title: 'Mẹo & Bẫy Đề Thi FE Slot 2–3',
        content: `• **Bẫy \`const\` với Object/Array:** \`const arr = [1, 2]; arr.push(3);\` hoàn toàn **HỢP LỆ** (không báo lỗi), chỉ khi gán lại \`arr = [4, 5]\` mới ném lỗi \`TypeError: Assignment to constant variable\`.
• **Bẫy \`React.createElement\`:** Nhớ thứ tự 3 tham số: \`React.createElement(type, props, ...children)\`.
• **Bẫy tên Component trong JSX:** Component do người dùng định nghĩa **bắt buộc viết hoa chữ cái đầu (PascalCase)** như \`<MyButton />\`; nếu viết chữ thường \`<myButton />\`, JSX hiểu đó là thẻ HTML chuẩn và không render đúng component.`,
      },
    ],
  },
  {
    id: 'fer202-ch3',
    order: 3,
    title: 'Slot 4–5: Front-End UI Frameworks, Hệ Thống Lưới Bootstrap 5 & Flexbox',
    summary:
      'Khái niệm UI Framework, Responsive Web Design (Mobile-First), hệ thống Grid 12 cột của Bootstrap 5, 6 ngưỡng Breakpoints (xs, sm, md, lg, xl, xxl) và tiện ích Flexbox.',
    sections: [
      {
        id: 'fer202-ch3-s1',
        type: 'concept',
        title: 'Bootstrap 5 Grid System 12 Cột & Triết Lý Mobile-First',
        content: `• **Front-End UI Framework (Bootstrap 5):** Bộ khung CSS/JS dựng sẵn giúp chuẩn hóa giao diện, đảm bảo tương thích đa trình duyệt và thiết kế đáp ứng (**Responsive Web Design — RWD**) theo triết lý **Mobile-First** (style mặc định ưu tiên màn hình nhỏ trước, sau đó mở rộng dần lên màn hình lớn qua media queries \`min-width\`).
• **Điểm mới quan trọng của Bootstrap 5 (so với Bootstrap 4):**
  - **Loại bỏ hoàn toàn phụ thuộc vào jQuery** (chuyển sang thuần Vanilla JavaScript).
  - Bổ sung breakpoint siêu lớn **\`xxl\` (\`≥ 1400px\`)**.
  - Thay thế các class hướng trái/phải (\`ml-\`, \`mr-\`, \`pl-\`, \`pr-\`, \`text-left\`, \`text-right\`) bằng **Logical Properties** hỗ trợ RTL: **\`ms-\` (margin-start), \`me-\` (margin-end), \`ps-\`, \`pe-\`, \`text-start\`, \`text-end\`**.
  - Khoảng cách giữa các cột (Gutter) dùng tiện ích \`g-*\`, \`gx-*\`, \`gy-*\` (thay cho \`.no-gutters\` cũ bằng \`.g-0\`).
• **Cấu trúc 3 tầng của Bootstrap Grid:**
  1. **Container (\`.container\`, \`.container-fluid\`, \`.container-{breakpoint}\`):** Bọc ngoài cùng để căn giữa và tạo padding ngang. \`.container\` có chiều rộng tối đa cố định theo từng breakpoint; \`.container-fluid\` luôn rộng \`100%\` trên mọi kích thước màn hình.
  2. **Row (\`.row\`):** Là một **Flexbox wrapper** (\`display: flex; flex-wrap: wrap\`) chứa các cột, dùng margin âm để triệt tiêu padding ngoài của cột.
  3. **Columns (\`.col-*\`):** Mỗi hàng (\`.row\`) được chia thành tối đa **12 cột đơn vị**. Nếu tổng số cột trong 1 \`.row\` vượt quá **12**, nhóm cột thừa sẽ tự động **rớt xuống dòng mới (wrap to a new line)**.`,
      },
      {
        id: 'fer202-ch3-s2',
        type: 'comparison',
        title: 'Bảng 6 Breakpoints Chuẩn Của Bootstrap 5 (Rất Hay Hỏi Thi)',
        content: `| Tên Breakpoint | Tiền tố Class | Kích thước Viewport | Cách hoạt động của \`col-{bp}-{n}\` |
| :--- | :--- | :--- | :--- |
| **Extra small (xs)** | \`col-\` *(không có infix)* | \`< 576px\` | Áp dụng cho **mọi màn hình** từ \`0px\` trở lên |
| **Small (sm)** | \`col-sm-\` | \`≥ 576px\` | Chia cột khi \`≥ 576px\`, dưới \`576px\` tự xếp chồng \`100%\` |
| **Medium (md)** | \`col-md-\` | \`≥ 768px\` | Chia cột khi \`≥ 768px\` (Tablet ngang), nhỏ hơn thì xếp chồng |
| **Large (lg)** | \`col-lg-\` | \`≥ 992px\` | Chia cột khi \`≥ 992px\` (Desktop/Laptop) |
| **Extra large (xl)** | \`col-xl-\` | \`≥ 1200px\` | Chia cột khi \`≥ 1200px\` |
| **Extra extra large (xxl)** | \`col-xxl-\` | \`≥ 1400px\` | Chia cột khi \`≥ 1400px\` (Màn hình rộng) |`,
      },
      {
        id: 'fer202-ch3-s3',
        type: 'keywords',
        title: 'Từ Khóa Flexbox, Offset & Ordering Trong Slide Slot 4–5',
        content: `• **Tự động chia đều (\`.col\`):** Đặt 3 thẻ \`<div class="col">\` trong 1 \`.row\` → mỗi cột tự chiếm \`12 / 3 = 4\` đơn vị (\`33.33%\`).
• **Kết hợp nhiều Breakpoint:** Ví dụ \`class="col-12 col-md-6 col-lg-4"\`:
  - Trên Mobile (\`< 768px\`): mỗi phần tử chiếm trọn 12 cột (**1 cột/hàng**).
  - Trên Tablet (\`≥ 768px\`): mỗi phần tử chiếm 6 cột (**2 cột/hàng**).
  - Trên Desktop (\`≥ 992px\`): mỗi phần tử chiếm 4 cột (**3 cột/hàng**).
• **Offsetting (\`offset-md-*\`):** Đẩy cột sang phải một số đơn vị cột bằng \`margin-left\`.
• **Flexbox Utilities:** \`d-flex\`, \`flex-row\`, \`flex-column\`, \`justify-content-center/between/around\`, \`align-items-center\`, \`order-1\`..\`order-5\`.`,
      },
      {
        id: 'fer202-ch3-s4',
        type: 'exam_tip',
        title: 'Mẹo & Bẫy Đề Thi FE Slot 4–5',
        content: `• **Bẫy tính số phần tử trên 1 hàng:** Đề cho \`<div class="col-sm-6 col-md-4 col-lg-3">\` và hỏi *"Trên màn hình rộng 800px (hoặc md), có bao nhiêu cột trên 1 hàng?"* → Ta lấy \`12 / 4 = 3\` cột/hàng! Nếu màn hình \`1024px\` (\`lg\`) → \`12 / 3 = 4\` cột/hàng!
• **Bẫy tiền tố \`xs\`:** Trong Bootstrap 4/5 **KHÔNG CÒN** class \`col-xs-6\` (đó là cú pháp cũ của Bootstrap 3). Ở Bootstrap 5 phải viết là **\`col-6\`**.`,
      },
    ],
  },
  {
    id: 'fer202-ch4',
    order: 4,
    title: 'Slot 6: React Components, Vòng Đời (Lifecycle), HOC & Composition',
    summary:
      'Phân biệt Function Component vs Class Component, 3 giai đoạn Lifecycle (Mounting, Updating, Unmounting), Higher-Order Components (HOC) và mô hình Composition.',
    sections: [
      {
        id: 'fer202-ch4-s1',
        type: 'concept',
        title: 'Kiến Trúc Component, Vòng Đời (Lifecycle) & Tái Sử Dụng Logic',
        content: `• **Hai cách định nghĩa Component trong React:**
  1. **Function Component (Tiêu chuẩn hiện đại):** Là một hàm JavaScript nhận đối tượng \`props\` làm tham số và trả về JSX. Từ React 16.8 (nhờ **Hooks**), Function Component quản lý được cả state, side effects, context và thay thế hoàn toàn Class Component trong dự án mới.
  2. **Class Component (Legacy nhưng vẫn xuất hiện trong đề thi FE):** Kế thừa từ \`React.Component\` (hoặc \`React.PureComponent\`), bắt buộc phải có phương thức **\`render()\`** trả về JSX, truy cập props qua \`this.props\`, khởi tạo state trong \`constructor(props)\` (phải gọi \`super(props)\` đầu tiên) và cập nhật qua \`this.setState()\`.
• **Ba giai đoạn Vòng đời (Lifecycle) của một Component:**
  1. **Mounting (Khởi tạo & gắn vào DOM):** \`constructor()\` → \`static getDerivedStateFromProps()\` → \`render()\` → **\`componentDidMount()\`** (nơi gọi API, đăng ký timer/subscription).
  2. **Updating (Khi \`props\` hoặc \`state\` thay đổi):** \`getDerivedStateFromProps()\` → \`shouldComponentUpdate()\` → \`render()\` → \`getSnapshotBeforeUpdate()\` → **\`componentDidUpdate(prevProps, prevState)\`**.
  3. **Unmounting (Gỡ khỏi DOM):** **\`componentWillUnmount()\`** (nơi dọn dẹp \`clearInterval\`, hủy subscription, abort request để chống rò rỉ bộ nhớ).
• **Higher-Order Component (HOC):** Là một kỹ thuật nâng cao (pattern, không phải API có sẵn của React) dùng để tái sử dụng logic giữa các component. **Định nghĩa chuẩn:** *Một HOC là một hàm thuần khiết nhận vào một Component và trả về một Component mới đã được tăng cường dữ liệu/hành vi* (\`const EnhancedComponent = withAuth(WrappedComponent)\`).`,
      },
      {
        id: 'fer202-ch4-s2',
        type: 'comparison',
        title: 'Ánh Xạ Class Lifecycle Sang React Hooks Hiện Đại',
        content: `| Giai đoạn / Tác vụ | Class Component (Slide Slot 6) | Function Component + Hooks (Hiện đại) |
| :--- | :--- | :--- |
| **Khởi tạo State** | \`this.state = { count: 0 }\` trong \`constructor\` | \`const [count, setCount] = useState(0)\` |
| **Sau khi Mount lần đầu** | \`componentDidMount()\` | \`useEffect(() => { ... }, [])\` *(mảng rỗng)* |
| **Sau khi Update \`dep\`** | \`componentDidUpdate(prevProps, prevState)\` | \`useEffect(() => { ... }, [dep])\` |
| **Trước khi Unmount** | \`componentWillUnmount()\` | Hàm \`return () => { cleanup() }\` trong \`useEffect\` |
| **Tối ưu Re-render nông** | \`extends React.PureComponent\` / \`shouldComponentUpdate\` | Bọc component bằng \`React.memo(MyComponent)\` |
| **Bắt lỗi cây con (Error Boundary)** | \`getDerivedStateFromError\` + \`componentDidCatch\` | *(Vẫn phải dùng Class hoặc thư viện \`react-error-boundary\`)* |`,
      },
      {
        id: 'fer202-ch4-s3',
        type: 'keywords',
        title: 'Từ Khóa Cốt Lõi Trong Slide Slot 6',
        content: `• **Composition vs Inheritance:** React **khuyến nghị dùng Composition** (ghép nối component qua \`props.children\` hoặc truyền JSX qua prop chuyên biệt) thay vì kế thừa Class (\`extends\`) giữa các component.
• **\`super(props)\` trong Constructor:** Nếu viết \`constructor(props)\` trong Class Component, bắt buộc gọi \`super(props)\` trước khi dùng từ khóa \`this\`, nếu không \`this.props\` bên trong constructor sẽ bị \`undefined\`.
• **PureComponent / \`React.memo\`:** Thực hiện **so sánh nông (shallow comparison)** trên \`props\` (và \`state\` với PureComponent) để bỏ qua lần render không cần thiết.`,
      },
      {
        id: 'fer202-ch4-s4',
        type: 'exam_tip',
        title: 'Mẹo & Bẫy Đề Thi FE Slot 6',
        content: `• **Bẫy phương thức bắt buộc duy nhất trong Class Component:** Chỉ có **\`render()\`** là bắt buộc; \`constructor\`, \`componentDidMount\` đều là tùy chọn.
• **Bẫy gọi \`setState\` trong Lifecycle:** Tuyệt đối **KHÔNG** gọi \`this.setState()\` trực tiếp trong hàm \`render()\` (gây vòng lặp vô tận). Trong \`componentDidUpdate\`, nếu gọi \`setState\` thì **bắt buộc phải bọc trong điều kiện \`if (this.props.id !== prevProps.id)\`**.`,
      },
    ],
  },
  {
    id: 'fer202-ch5',
    order: 5,
    title: 'Slot 7: Thư Viện Giao Diện React-Bootstrap',
    summary:
      'Cách cài đặt và sử dụng các Component của React-Bootstrap: Container, Row, Col, Button, ButtonGroup, ToggleButton, Nav, Navbar, Card, Modal và Form Validation.',
    sections: [
      {
        id: 'fer202-ch5-s1',
        type: 'concept',
        title: 'Triết Lý & Các Component Trọng Tâm Của React-Bootstrap',
        content: `• **React-Bootstrap là gì?** Là thư viện viết lại toàn bộ các thành phần của Bootstrap thành **React Components thực thụ** (không dùng \`jQuery\`, không cần thao tác \`data-bs-toggle\` bằng DOM trực tiếp, mà quản lý trạng thái đóng/mở thông qua **React \`props\` và \`state\`**).
• **Cài đặt & Import CSS:**
  - Lệnh cài: \`npm install react-bootstrap bootstrap\`
  - Bắt buộc phải import file CSS gốc của Bootstrap vào \`index.js\` / \`main.jsx\` hoặc \`App.js\`:
    \`import 'bootstrap/dist/css/bootstrap.min.css';\`
  - **Khuyến nghị Import riêng lẻ** để giảm kích thước bundle (Tree-shaking):
    \`import Button from 'react-bootstrap/Button';\` (tốt hơn \`import { Button } from 'react-bootstrap';\`).
• **Hệ thống Grid bằng Props trên \`<Container>\`, \`<Row>\`, \`<Col>\`:**
  - Thay vì viết chuỗi class \`className="col-12 col-md-6 col-lg-4"\`, trong React-Bootstrap ta truyền trực tiếp qua **breakpoint props**:
    \`<Col xs={12} md={6} lg={4}>\` hoặc truyền object \`<Col md={{ span: 6, offset: 3 }}>\`.
  - \`<Container fluid>\` tương đương \`.container-fluid\`; \`<Container fluid="md">\` giữ \`100%\` cho tới breakpoint \`md\`.`,
      },
      {
        id: 'fer202-ch5-s2',
        type: 'comparison',
        title: 'Bảng Tra Cứu Props Của Các Component React-Bootstrap Hay Thi',
        content: `| Component | Các Props & Sub-components Quan Trọng Nhất |
| :--- | :--- |
| **\`<Button>\`** | \`variant="primary" | "outline-success" | "danger"\`, \`size="sm" | "lg"\`, \`active\`, \`disabled\`, \`as="a"\` |
| **\`<Modal>\`** | \`show={isOpen}\` (bool), \`onHide={handleClose}\`, \`backdrop="static"\`, \`centered\`; gồm \`Modal.Header closeButton\`, \`Modal.Title\`, \`Modal.Body\`, \`Modal.Footer\` |
| **\`<Navbar>\` & \`<Nav>\`** | \`expand="lg"\`, \`bg="dark"\`, \`variant="dark"\`, \`fixed="top"\`; gồm \`Navbar.Brand\`, \`Navbar.Toggle\`, \`Navbar.Collapse\`, \`Nav.Link\`, \`NavDropdown\` |
| **\`<Form>\`** | \`noValidate\`, \`validated={validated}\`; gồm \`Form.Group controlId="..."\`, \`Form.Label\`, \`Form.Control\`, \`Form.Select\`, \`Form.Check\`, \`Form.Control.Feedback type="invalid"\` |
| **\`<Card>\`** | \`Card.Img variant="top"\`, \`Card.Body\`, \`Card.Title\`, \`Card.Subtitle\`, \`Card.Text\`, \`Card.Footer\` |`,
      },
      {
        id: 'fer202-ch5-s3',
        type: 'keywords',
        title: 'Từ Khóa Cốt Lõi Trong Slide Slot 7',
        content: `• **Prop \`as\` (Polymorphic prop):** Cho phép đổi thẻ HTML hoặc Component được render bên dưới mà vẫn giữ nguyên style của React-Bootstrap, ví dụ \`<Nav.Link as={Link} to="/about">\` khi kết hợp với React Router.
• **\`ToggleButton\` & \`ToggleButtonGroup\`:** Hỗ trợ cả kiểu \`type="checkbox"\` (chọn nhiều, \`value\` là mảng) và \`type="radio"\` (chọn một).
• **\`controlId\` trên \`<Form.Group>\`:** Tự động gán \`id\` cho \`<Form.Control>\` và \`htmlFor\` cho \`<Form.Label>\` bên trong để đảm bảo Accessibility.`,
      },
      {
        id: 'fer202-ch5-s4',
        type: 'exam_tip',
        title: 'Mẹo & Bẫy Đề Thi FE Slot 7',
        content: `• **Bẫy quên import CSS:** Nếu cài \`react-bootstrap\` và import \`<Button variant="primary">\` nhưng nút hiển thị không có màu xanh của Bootstrap → Nguyên nhân là **chưa import \`'bootstrap/dist/css/bootstrap.min.css'\`**.
• **Bẫy điều khiển \`<Modal>\`:** Trong React-Bootstrap, \`<Modal>\` được bật/tắt bằng cặp prop **\`show={boolean}\`** và **\`onHide={callback}\`** (không phải \`isOpen\` hay \`visible\`).`,
      },
    ],
  },
  {
    id: 'fer202-ch6',
    order: 6,
    title: 'Slot 8: Props, State, Stateless vs Stateful & Context API',
    summary:
      'Phân biệt sâu sắc Props (bất biến, truyền từ cha xuống con) và State (nội bộ, khả biến qua setter), Lifting State Up, Prop Drilling và giải pháp Context API.',
    sections: [
      {
        id: 'fer202-ch6-s1',
        type: 'concept',
        title: 'Luồng Dữ Liệu Một Chiều (One-Way Data Flow), Props, State & Context',
        content: `• **Props (Properties):**
  - Là đối số truyền từ **Component Cha xuống Component Con** theo luồng một chiều (**Unidirectional / Top-down Data Flow**).
  - **Props là Read-Only (Immutable / Bất biến):** Component con **tuyệt đối không được sửa trực tiếp \`props\`** của chính nó (quy tắc *Pure function wrt props*).
  - Prop đặc biệt **\`props.children\`** chứa mọi nội dung JSX được đặt giữa thẻ mở và thẻ đóng của Component (\`<Card><p>Nội dung</p></Card>\`).
• **State (Trạng thái nội bộ):**
  - Là bộ nhớ riêng của một Component, thay đổi theo thời gian (do người dùng tương tác hoặc phản hồi từ API).
  - Khi \`state\` được cập nhật qua hàm setter (\`setState\` / \`useState\`), React sẽ **lên lịch re-render** component đó và các component con của nó.
• **Lifting State Up (Nâng State lên cha chung):** Khi 2 component anh em (siblings) cần chia sẻ và đồng bộ cùng một dữ liệu, ta di chuyển state đó lên **Component Cha chung gần nhất (Closest Common Ancestor)**, rồi truyền dữ liệu xuống qua \`props\` và truyền hàm callback \`onChange\` xuống để con báo ngược sự kiện lên cha.
• **Bài toán Prop Drilling & Giải pháp Context API:**
  - **Prop Drilling:** Tình trạng phải truyền \`props\` xuyên qua nhiều tầng component trung gian không thực sự dùng đến dữ liệu đó chỉ để đưa tới component cháu chắt ở sâu bên dưới.
  - **React Context API** giải quyết Prop Drilling cho dữ liệu toàn cục (Theme, User Auth, Language/Locale) qua 3 bước:
    1. **Khởi tạo:** \`export const ThemeContext = React.createContext(defaultValue);\`
    2. **Cung cấp:** Bọc nhánh cây bằng \`<ThemeContext.Provider value={themeData}>...</ThemeContext.Provider>\` (Trên React 19 hiện đại có thể viết gọn \`<ThemeContext value={themeData}>\`).
    3. **Tiêu thụ:** Trong bất kỳ component con nào bên dưới, gọi hook **\`const theme = useContext(ThemeContext);\`** (hoặc \`<ThemeContext.Consumer>\` cũ).`,
      },
      {
        id: 'fer202-ch6-s2',
        type: 'comparison',
        title: 'So Sánh: Props vs State & Presentational (Stateless) vs Container (Stateful)',
        content: `| Tiêu chí | Props | State |
| :--- | :--- | :--- |
| **Nguồn gốc** | Truyền từ Component Cha xuống | Khởi tạo và quản lý bên trong chính Component |
| **Khả năng thay đổi** | **Immutable (Read-only)** ở phía Component nhận | **Mutable** thông qua hàm \`setState\` / setter của \`useState\` |
| **Mục đích** | Cấu hình Component & giao tiếp Cha → Con (hoặc Con → Cha qua callback prop) | Lưu dữ liệu động thay đổi theo tương tác/thời gian |

| Mô hình Component (Slide Slot 8) | Presentational / Stateless Component | Container / Stateful Component |
| :--- | :--- | :--- |
| **Mối quan tâm chính** | Giao diện trông như thế nào (*How things look*) | Dữ liệu hoạt động ra sao (*How things work*) |
| **Phụ thuộc State** | Nhận dữ liệu & hàm xử lý thuần túy qua \`props\` | Nắm giữ \`state\`, gọi API và truyền dữ liệu xuống Presentational |`,
      },
      {
        id: 'fer202-ch6-s3',
        type: 'keywords',
        title: 'Từ Khóa Cốt Lõi Trong Slide Slot 8',
        content: `• **Unidirectional Data Flow (One-way binding):** Dữ liệu đi xuống qua \`props\`, sự kiện đi lên qua **callback function props**.
• **Default Props:** Trong Function Component hiện đại, dùng **ES6 default parameter** ngay khi destructuring: \`function Button({ color = 'blue', size = 'md' })\` (cách cũ \`Component.defaultProps\` đã bị deprecated cho function components từ React 18.3/19).
• **\`defaultValue\` trong \`createContext(defaultValue)\`:** Giá trị mặc định này **CHỈ** được sử dụng khi một component gọi \`useContext(MyContext)\` nhưng bên trên nó **không có bất kỳ thẻ \`<MyContext.Provider>\` nào** bao bọc!`,
      },
      {
        id: 'fer202-ch6-s4',
        type: 'exam_tip',
        title: 'Mẹo & Bẫy Đề Thi FE Slot 8',
        content: `• **Bẫy \`createContext(defaultValue)\` cực kỳ phổ biến:** Nếu có \`<MyContext.Provider value={undefined}>\` bọc bên ngoài, thì \`useContext(MyContext)\` sẽ trả về \`undefined\` chứ **không phải** \`defaultValue\`! \`defaultValue\` chỉ phát huy tác dụng khi thiếu hẳn \`Provider\` ở cây cha.
• **Bẫy sửa trực tiếp State:** Viết \`state.count = state.count + 1\` sẽ **KHÔNG kích hoạt re-render**. Bắt buộc phải gọi hàm setter \`setCount(count + 1)\`.`,
      },
    ],
  },
  {
    id: 'fer202-ch7',
    order: 7,
    title: 'Slot 9–10: React Hooks Chuyên Sâu (useState, useEffect, useReducer, useRef, useMemo, useCallback)',
    summary:
      'Hai quy tắc vàng (Rules of Hooks), cơ chế Closure & Functional Update của useState, 3 trường hợp Dependency Array của useEffect, useReducer cho state phức tạp, useRef và tối ưu hiệu năng.',
    sections: [
      {
        id: 'fer202-ch7-s1',
        type: 'concept',
        title: 'Rules of Hooks & Bộ Tứ Hooks Cốt Lõi Trong Slide Slot 9–10',
        content: `• **Hai Quy Tắc Vàng Của Hooks (Rules of Hooks):**
  1. **Chỉ gọi Hooks ở cấp cao nhất (Top Level)** của Function Component hoặc Custom Hook — **TUYỆT ĐỐI KHÔNG** gọi Hooks bên trong vòng lặp (\`for\`, \`while\`), câu lệnh điều kiện (\`if/else\`), hay các hàm lồng nhau (vì React dựa vào **thứ tự gọi Hook cố định** giữa các lần render để ánh xạ đúng vùng nhớ state).
  2. **Chỉ gọi Hooks từ React Function Components hoặc Custom Hooks** (bắt đầu bằng tiền tố \`use...\`), không gọi từ hàm JavaScript thông thường hay Class Component.
• **\`useState(initialState)\`:**
  - Trả về mảng 2 phần tử \`[state, setState]\`.
  - **Functional Update \`setCount(prev => prev + 1)\`:** Khi cập nhật state dựa trên giá trị trước đó hoặc gọi nhiều lần liên tiếp trong cùng 1 sự kiện, bắt buộc dùng hàm updater \`prev => ...\` để tránh lỗi **Stale Closure** (nhìn thấy giá trị cũ của lần render hiện tại).
  - **Lazy Initial State \`useState(() => computeExpensiveValue())\`:** Truyền một hàm khởi tạo để chỉ tính toán ở lần render đầu tiên.
• **\`useEffect(setup, dependencies?)\` — Xử lý Side Effects:**
  - Side effects gồm: gọi API (data fetching), đăng ký/hủy sự kiện DOM (\`addEventListener\`), bộ đếm thời gian (\`setInterval\`/\`setTimeout\`), thao tác DOM thủ công.
  - **Hàm Cleanup (\`return () => { ... }\`):** Chạy trước khi effect chạy lại ở lần render kế tiếp VÀ khi component bị unmount.
• **\`useReducer(reducer, initialState)\`:** Giải pháp thay thế \`useState\` khi state là object lồng nhau phức tạp hoặc có nhiều hành động cập nhật liên quan nhau. Hàm \`reducer(state, action)\` phải là một **pure function** trả về state mới dựa trên \`action.type\` và \`action.payload\`.`,
      },
      {
        id: 'fer202-ch7-s2',
        type: 'comparison',
        title: '3 Trường Hợp Dependency Array Của \`useEffect\` & Phân Biệt \`useRef\` / \`useMemo\` / \`useCallback\`',
        content: `| Cách viết \`useEffect\` | Thời điểm chạy hàm Effect |
| :--- | :--- |
| \`useEffect(() => { ... })\` *(Không có tham số thứ 2)* | Chạy sau lần Mount đầu tiên **VÀ sau MỌI lần re-render** |
| \`useEffect(() => { ... }, [])\` *(Mảng rỗng \`[]\`)* | Chỉ chạy **1 lần sau khi Mount** (trong React 18 StrictMode ở môi trường dev sẽ chạy \`mount → cleanup → mount\` để kiểm tra lỗi cleanup) |
| \`useEffect(() => { ... }, [a, b])\` *(Có dependencies)* | Chạy sau khi Mount và **mỗi khi \`a\` hoặc \`b\` thay đổi giá trị** (so sánh bằng \`Object.is\`) |

| Hook | Giá trị trả về & Công dụng chính | Thay đổi có gây Re-render không? |
| :--- | :--- | :--- |
| **\`useRef(initialValue)\`** | Trả về object \`{ current: initialValue }\` giữ nguyên qua các lần render; dùng để **trỏ tới phần tử DOM** (\`<input ref={inputRef} />\`) hoặc lưu biến ngầm (timer ID, previous state). | **KHÔNG** (Gán \`ref.current = newVal\` không gây re-render) |
| **\`useMemo(() => fn(), [deps])\`** | Ghi nhớ (cache) **kết quả tính toán (value)** của một hàm nặng, chỉ tính lại khi \`deps\` đổi. | Không tự gây re-render |
| **\`useCallback(fn, [deps])\`** | Ghi nhớ **bản thân tham chiếu hàm (function reference)** để truyền xuống con bọc \`React.memo\` mà không làm con re-render oan. | Không tự gây re-render |`,
      },
      {
        id: 'fer202-ch7-s3',
        type: 'keywords',
        title: 'Từ Khóa Custom Hooks & Bẫy Closure Trong Slide Slot 9–10',
        content: `• **Custom Hook (\`useFetch\`, \`useLocalStorage\`, \`useDebounce\`):** Tên hàm **bắt buộc bắt đầu bằng \`use\`** để React kiểm tra Rules of Hooks. Lưu ý: Hai component cùng gọi 1 Custom Hook sẽ **TÁI SỬ DỤNG LOGIC trạng thái**, chứ **KHÔNG chia sẻ chung cùng một biến state** (mỗi component có một vùng state độc lập hoàn toàn).
• **Bẫy \`async\` trực tiếp trên hàm callback của \`useEffect\`:**
  - **SAI:** \`useEffect(async () => { await fetchData(); }, [])\` vì hàm \`async\` luôn trả về một \`Promise\`, trong khi \`useEffect\` chỉ cho phép trả về \`undefined\` hoặc một **cleanup function**!
  - **ĐÚNG:** Định nghĩa hàm \`async\` bên trong \`useEffect\` rồi gọi nó ngay bên dưới.`,
      },
      {
        id: 'fer202-ch7-s4',
        type: 'exam_tip',
        title: 'Mẹo & Bẫy Đề Thi FE Slot 9–10',
        content: `• **Bẫy đếm số khi gọi \`setCount(count + 1)\` 3 lần liên tiếp:**
  \`\`\`jsx
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  \`\`\`
  Sau 1 lần click, \`count\` chỉ tăng lên **\`1\`** (vì cả 3 dòng đều đọc \`count === 0\` của snapshot hiện tại: \`0 + 1 = 1\`). Nếu viết \`setCount(c => c + 1)\` 3 lần thì \`count\` mới tăng lên **\`3\`**!`,
      },
    ],
  },
  {
    id: 'fer202-ch8',
    order: 8,
    title: 'Slot 11–12: Event Handling, Quy Trình 3 Bước Render & Commit, và Rendering Lists (Keys)',
    summary:
      'SyntheticEvent trong React, truyền tham số vào Event Handler, ẩn dụ Nhà hàng (Waiter/Kitchen) cho 3 bước Trigger → Render → Commit, và quy tắc chọn key khi render danh sách.',
    sections: [
      {
        id: 'fer202-ch8-s1',
        type: 'concept',
        title: 'Xử Lý Sự Kiện (Event Handling) & Ẩn Dụ Nhà Hàng (Render and Commit)',
        content: `• **React SyntheticEvent:**
  - React bọc sự kiện gốc của trình duyệt vào một đối tượng chuẩn hóa đa trình duyệt gọi là **\`SyntheticEvent\`** (có giao diện giống hệt sự kiện chuẩn: \`e.stopPropagation()\`, \`e.preventDefault()\`, \`e.target\`, \`e.currentTarget\`).
  - Trong JSX, tên sự kiện viết theo **camelCase** (\`onClick\`, \`onChange\`, \`onSubmit\`) và truyền vào **một tham chiếu hàm** \`onClick={handleClick}\`, **KHÔNG gọi hàm ngay** \`onClick={handleClick()}\` (nếu gọi ngay, hàm sẽ chạy ngay lúc render!).
  - Muốn ngăn hành vi mặc định (như reload trang khi submit \`<form>\`), phải gọi tường minh **\`e.preventDefault()\`** (trả về \`false\` trong handler không có tác dụng trong React).
• **Quy trình 3 bước hiển thị UI của React (Ẩn dụ Nhà hàng trong Slide Slot 11–12):**
  - Trong Slide chính thức, React ví **Component như Đầu bếp trong nhà bếp (Kitchen)** lắp ráp món ăn từ nguyên liệu (\`props\` và \`state\`), còn **React là Người phục vụ (Waiter)** nhận yêu cầu từ khách và bưng món ăn ra bàn (**DOM**):
  1. **Bước 1 — Triggering a render (Chuyển order của khách vào bếp):** Xảy ra ở 2 trường hợp duy nhất: (a) **Initial render** khi ứng dụng khởi chạy (\`createRoot().render()\`), hoặc (b) **State của component (hoặc tổ tiên của nó) được cập nhật** bằng hàm \`set...\`.
  2. **Bước 2 — Rendering the component (Đầu bếp chế biến món ăn trong bếp):** React gọi hàm Component của bạn để tính toán xem UI cần hiển thị gì. Quá trình render phải là **Pure Calculation** (*Same inputs → Same output*, không làm thay đổi biến bên ngoài có sẵn trước khi render).
  3. **Bước 3 — Committing to the DOM (Người phục vụ đặt món lên bàn):** Ở lần đầu, React dùng \`appendChild()\` gắn toàn bộ node lên màn hình. Ở các lần re-render, React chỉ áp dụng những thay đổi tối thiểu (đã tính ở bước Render) lên Real DOM — nếu kết quả render giống hệt lần trước, React không chạm vào DOM của node đó.`,
      },
      {
        id: 'fer202-ch8-s2',
        type: 'comparison',
        title: 'So Sánh Cách Truyền Event Handler & Quy Tắc Chọn \`key\` Cho Danh Sách',
        content: `| Cú pháp trong JSX | Điều gì xảy ra? | Đúng / Sai |
| :--- | :--- | :--- |
| \`<button onClick={handleClick}>\` | Truyền tham chiếu hàm, chỉ chạy khi người dùng click | **ĐÚNG** |
| \`<button onClick={() => handleDelete(id)}>\` | Tạo arrow function bọc lời gọi kèm tham số \`id\`, chạy khi click | **ĐÚNG** |
| \`<button onClick={handleClick()}>\` | Thực thi \`handleClick()\` **ngay lập tức trong lúc render** (dễ gây vòng lặp vô hạn nếu có \`setState\`) | **SAI (Bẫy kinh điển)** |

| Nguồn lấy giá trị \`key\` khi \`.map()\` | Đánh giá & Hậu quả |
| :--- | :--- |
| **ID duy nhất, ổn định từ Database (\`item.id\`)** | **TỐT NHẤT:** Giúp React nhận diện chính xác phần tử nào được thêm/xóa/đổi chỗ. |
| **Chỉ số mảng (\`index\`)** | **KHÔNG KHUYẾN KHÍCH** nếu danh sách có thêm đầu, xóa giữa, sắp xếp lại (reorder) — gây lệch state của các ô input con và giảm hiệu năng. Chỉ tạm chấp nhận khi danh sách hoàn toàn tĩnh. |
| **Số ngẫu nhiên (\`Math.random()\` / \`uuid()\` gọi trong render)** | **TUYỆT ĐỐI CẤM:** Tạo key mới ở mỗi lần render khiến React hủy và dựng lại toàn bộ DOM con + mất sạch state/focus mỗi lần render! |`,
      },
      {
        id: 'fer202-ch8-s3',
        type: 'keywords',
        title: 'Từ Khóa Cốt Lõi Trong Slide Slot 11–12',
        content: `• **Ẩn dụ Nhà hàng (Restaurant Metaphor — Đề SU26 vừa hỏi!):**
  - **UI Request / Món ăn (Dish)** = JSX Elements được trả về.
  - **Nhà bếp (Kitchen)** = Các **Components** nơi chuẩn bị/lắp ráp giao diện.
  - **Người phục vụ (Waiter)** = **React**, người tiếp nhận trigger từ khách và commit kết quả ra bàn ăn (DOM).
• **Quy tắc của \`key\`:**
  1. \`key\` phải **duy nhất giữa các phần tử anh em (unique among siblings)** trong cùng một mảng (nhưng được phép trùng với \`key\` ở một mảng khác).
  2. \`key\` phải **ổn định (stable)**, không tự đổi theo thời gian hay giữa các lần render.
  3. \`key\` là thuộc tính nội bộ của React — Component con **KHÔNG đọc được \`props.key\`** (nếu con cần ID thì phải truyền thêm prop riêng như \`id={item.id}\`).`,
      },
      {
        id: 'fer202-ch8-s4',
        type: 'exam_tip',
        title: 'Mẹo & Bẫy Đề Thi FE Slot 11–12',
        content: `• **Bẫy \`key\` đặt ở đâu:** Khi tách phần tử lặp ra thành một Component riêng (ví dụ \`items.map(item => <TodoItem key={item.id} item={item} />)\`), thuộc tính \`key\` phải đặt **trực tiếp trên thẻ \`<TodoItem key={item.id} />\` bên trong hàm \`.map()\`**, chứ không phải đặt trên thẻ \`<li>\` ẩn bên trong file \`TodoItem.jsx\`.`,
      },
    ],
  },
  {
    id: 'fer202-ch9',
    order: 9,
    title: 'Slot 13: Kiểm Tra Kiểu Dữ Liệu Props Với PropTypes & TypeScript',
    summary:
      'Thư viện prop-types, kiểm tra kiểu cơ bản và nâng cao (node vs element, oneOf vs oneOfType, arrayOf, shape vs exact, isRequired), Custom Validator và xu hướng TypeScript hiện đại.',
    sections: [
      {
        id: 'fer202-ch9-s1',
        type: 'concept',
        title: 'Cơ Chế Kiểm Tra Kiểu Runtime Với \`prop-types\` (Slide Slot 13)',
        content: `• **Tại sao cần kiểm tra kiểu Props?** JavaScript là ngôn ngữ định kiểu động (dynamically typed), nên việc truyền sai kiểu dữ liệu vào component rất dễ gây lỗi ngầm. Thư viện **\`prop-types\`** (tách riêng khỏi gói \`react\` từ React 15.5: \`import PropTypes from 'prop-types'\`) giúp kiểm tra kiểu của \`props\` ngay tại **Runtime trong chế độ Development**:
  - Khi một prop truyền vào không khớp kiểu khai báo, React sẽ **in cảnh báo \`Warning: Failed prop type...\` ra Console** (nhưng **không** ném ngoại lệ làm sập ứng dụng).
  - Trong bản build **Production**, React tự động bỏ qua kiểm tra \`PropTypes\` để tối ưu hiệu năng.
• **Cú pháp khai báo \`propTypes\`:**
  \`\`\`jsx
  import PropTypes from 'prop-types';
  function UserCard({ name, age, role, onSave }) { ... }
  UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    role: PropTypes.oneOf(['admin', 'student', 'guest']),
    onSave: PropTypes.func.isRequired,
  };
  \`\`\`
  *(Lưu ý: Thuộc tính gắn trên Component viết chữ \`p\` thường: \`Component.propTypes = { ... }\`, còn đối tượng import từ thư viện viết chữ \`P\` hoa: \`PropTypes.string\`).*`,
      },
      {
        id: 'fer202-ch9-s2',
        type: 'comparison',
        title: 'Phân Biệt Các Bộ Kiểm Tra Kiểu Dễ Nhầm Nhất Trong \`PropTypes\`',
        content: `| Cặp Validator | Điểm khác biệt cốt lõi (Rất hay ra thi FE!) |
| :--- | :--- |
| **\`PropTypes.node\`** vs **\`PropTypes.element\`** | • **\`PropTypes.node\`**: Bất kỳ thứ gì React có thể render được (số, chuỗi, React element, mảng hoặc Fragment chứa chúng) — thường dùng cho \`children\`.<br>• **\`PropTypes.element\`**: Bắt buộc phải là một **React Element** (JSX như \`<MyIcon />\`). |
| **\`PropTypes.oneOf([...])\`** vs **\`PropTypes.oneOfType([...])\`** | • **\`oneOf(['sm', 'lg'])\`**: Giới hạn prop phải bằng **một trong các giá trị cụ thể** (giống Enum).<br>• **\`oneOfType([PropTypes.string, PropTypes.number])\`**: Cho phép prop thuộc **một trong các kiểu dữ liệu** liệt kê (giống Union type). |
| **\`PropTypes.shape({...})\`** vs **\`PropTypes.exact({...})\`** | • **\`shape({...})\`**: Kiểm tra các trường đã khai báo của object nhưng **cho phép dư thêm các thuộc tính khác**.<br>• **\`exact({...})\`**: Kiểm tra đúng các trường khai báo và **cảnh báo nếu object có bất kỳ thuộc tính thừa nào**. |
| **\`PropTypes\` (Runtime)** vs **TypeScript (Compile-time)** | Trong dự án React 18/19 hiện đại, **TypeScript (\`interface Props { ... }\`)** được ưa chuộng hơn vì bắt lỗi ngay trong IDE và lúc build trước khi chạy code. |`,
      },
      {
        id: 'fer202-ch9-s3',
        type: 'keywords',
        title: 'Từ Khóa & Custom Validator Trong Slide Slot 13',
        content: `• **Các kiểu nguyên thủy trong \`PropTypes\`:**
  - \`PropTypes.array\`, \`PropTypes.bool\` *(chú ý viết tắt là \`bool\`, không phải \`boolean\`!)*, \`PropTypes.func\` *(viết tắt là \`func\`, không phải \`function\`!)*, \`PropTypes.number\`, \`PropTypes.object\`, \`PropTypes.string\`, \`PropTypes.symbol\`, \`PropTypes.any\`.
• **Kiểm tra cấu trúc lồng nhau:** \`PropTypes.arrayOf(PropTypes.number)\`, \`PropTypes.objectOf(PropTypes.string)\`, \`PropTypes.instanceOf(Date)\`.
• **Custom Validator Function (Hàm kiểm tra tùy chỉnh — Đề thi FE rất thích hỏi!):**
  \`\`\`js
  MyComponent.propTypes = {
    email: function(props, propName, componentName) {
      if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(props[propName])) {
        return new Error('Invalid prop ' + propName + ' supplied to ' + componentName);
      }
    }
  };
  \`\`\`
  Quy tắc vàng: Hàm Custom Validator nhận 3 tham số \`(props, propName, componentName)\` và khi thất bại phải **\`return new Error(...)\`** (tuyệt đối **không dùng \`throw new Error\`** bên trong validator!).`,
      },
      {
        id: 'fer202-ch9-s4',
        type: 'exam_tip',
        title: 'Mẹo & Bẫy Đề Thi FE Slot 13',
        content: `• **Bẫy chính tả tên kiểu:** Nhớ kỹ **\`PropTypes.bool\`** và **\`PropTypes.func\`** (đề thi rất hay gài đáp án nhiễu là \`PropTypes.boolean\` hoặc \`PropTypes.function\`).
• **Bẫy \`isRequired\`:** Mặc định mọi prop trong \`propTypes\` đều là **tùy chọn (optional)** — nếu không truyền (\`undefined\`), React không cảnh báo, trừ khi nối đuôi **\`.isRequired\`** (ví dụ \`PropTypes.string.isRequired\`).`,
      },
    ],
  },
  {
    id: 'fer202-ch10',
    order: 10,
    title: 'Slot 14: Điều Hướng SPA Với React Router v6',
    summary:
      'Kiến trúc Client-Side Routing, BrowserRouter vs HashRouter, Routes & Route, Link vs NavLink, Nested Routes với Outlet, Dynamic Params (useParams), Query Strings (useSearchParams) và điều hướng bằng code (useNavigate, Navigate).',
    sections: [
      {
        id: 'fer202-ch10-s1',
        type: 'concept',
        title: 'Cơ Chế Client-Side Routing & Các Thành Phần Cốt Lõi Của React Router v6',
        content: `• **Client-Side Routing trong SPA:** Thay vì mỗi lần bấm link trình duyệt phải gửi request tải lại toàn bộ trang HTML mới từ server, **React Router** sử dụng **HTML5 History API** (\`window.history.pushState\`) để cập nhật URL trên thanh địa chỉ và hoán đổi Component tương ứng ngay trên trình duyệt mà không reload trang.
• **Các Component chính trong \`react-router-dom\` v6 (Slide Slot 14):**
  1. **\`<BrowserRouter>\`:** Bọc ở cấp cao nhất của ứng dụng (thường trong \`main.jsx\` hoặc \`App.jsx\`), đồng bộ UI với URL chuẩn (ví dụ \`/products/10\`). *(Ngoài ra còn có \`<HashRouter>\` dùng dấu \`#\` như \`/#/products\` cho static server cũ, và \`<MemoryRouter>\` dùng khi chạy unit test).*
  2. **\`<Routes>\` và \`<Route>\`:** \`<Routes>\` (thay thế \`<Switch>\` của v5) tự động chọn \`<Route>\` có \`path\` khớp chính xác nhất với URL hiện tại. Cú pháp v6 truyền JSX vào prop **\`element\`**:
     \`<Route path="/products/:id" element={<ProductDetail />} />\`
  3. **Nested Routes & \`<Outlet />\`:** Khi lồng các \`<Route>\` con bên trong một \`<Route>\` cha (Layout route), component cha cần đặt thẻ **\`<Outlet />\`** ở đúng vị trí muốn hiển thị nội dung của route con đang khớp. Route con mặc định ở đường dẫn gốc của cha được khai báo bằng prop **\`index\`** (\`<Route index element={<Home />} />\`).
  4. **Route Bắt Lỗi 404 (Catch-all / No-match Route):** Dùng ký tự đại diện \`path="*"\` (\`<Route path="*" element={<NotFound />} />\`) để khớp mọi URL không tồn tại.`,
      },
      {
        id: 'fer202-ch10-s2',
        type: 'comparison',
        title: 'So Sánh: \`<a>\` vs \`<Link>\` vs \`<NavLink>\` & Bộ Hooks Của React Router v6',
        content: `| Thẻ điều hướng | Hành vi khi người dùng Click |
| :--- | :--- |
| **\`<a href="/about">\`** | Tải lại (full page reload) toàn bộ ứng dụng, **mất sạch React state trong RAM** |
| **\`<Link to="/about">\`** | Chuyển URL mượt mà không reload trang (Client-side navigation) |
| **\`<NavLink to="/about">\`** | Giống \`<Link>\` nhưng tự động biết trạng thái đang kích hoạt (**\`isActive\`**), hỗ trợ hàm \`className={({ isActive }) => isActive ? 'active' : ''}\` cho thanh menu |

| Hook / Component (v6) | Công dụng & Ví dụ thực tế |
| :--- | :--- |
| **\`useParams()\`** | Đọc tham số động trên đường dẫn URL. Ví dụ route \`/users/:userId\` với URL \`/users/42\` → \`const { userId } = useParams()\` trả về chuỗi \`"42"\`. |
| **\`useSearchParams()\`** | Đọc và cập nhật Query String sau dấu \`?\`. Ví dụ \`/items?sort=asc\` → \`const [searchParams, setSearchParams] = useSearchParams(); searchParams.get('sort')\`. |
| **\`useNavigate()\`** | Trả về hàm điều hướng bằng code: \`const navigate = useNavigate(); navigate('/login', { replace: true })\` hoặc quay lại trang trước \`navigate(-1)\`. |
| **\`useLocation()\`** | Trả về object \`location\` hiện tại (\`pathname\`, \`search\`, \`hash\`, \`state\`). |
| **\`<Navigate to="/login" replace />\`** | Component dùng để chuyển hướng khai báo (Declarative redirect), rất phổ biến trong **Protected Route** khi người dùng chưa đăng nhập. |`,
      },
      {
        id: 'fer202-ch10-s3',
        type: 'keywords',
        title: 'Từ Khóa Nâng Cấp Từ React Router v5 Lên v6 (Đề Thi Rất Hay So Sánh)',
        content: `• **\`<Switch>\` (v5) → \`<Routes>\` (v6)**.
• **\`<Route component={Home} />\` (v5) → \`<Route element={<Home />} />\` (v6)**.
• **\`useHistory()\` (v5) → \`useNavigate()\` (v6)** (\`history.push('/a')\` đổi thành \`navigate('/a')\`; \`history.replace('/a')\` đổi thành \`navigate('/a', { replace: true })\`).
• **\`<Redirect to="/login" />\` (v5) → \`<Navigate to="/login" replace />\` (v6)**.`,
      },
      {
        id: 'fer202-ch10-s4',
        type: 'exam_tip',
        title: 'Mẹo & Bẫy Đề Thi FE Slot 14',
        content: `• **Bẫy phân biệt \`useParams\` vs \`useSearchParams\`:**
  - Nếu URL có dạng \`/products/123\` (khai báo \`path="/products/:id"\`) → dùng **\`useParams()\`**.
  - Nếu URL có dạng \`/products?id=123&page=2\` (query string sau dấu \`?\`) → dùng **\`useSearchParams()\`** và lấy giá trị bằng **\`searchParams.get('id')\`**.
• **Bẫy thiếu \`<Outlet />\`:** Nếu khai báo Nested Routes trong \`App.jsx\` nhưng trong component cha (\`<DashboardLayout />\`) quên đặt \`<Outlet />\`, các component con sẽ **không bao giờ hiển thị** ra màn hình!`,
      },
    ],
  },
  {
    id: 'fer202-ch11',
    order: 11,
    title: 'Slot 15: Code Splitting Với React.lazy() & Suspense',
    summary:
      'Khái niệm Bundling và Code Splitting, cú pháp Dynamic import(), hàm React.lazy() (quy tắc Default Export), bọc giao diện chờ với <Suspense fallback={...}> và Route-based Code Splitting.',
    sections: [
      {
        id: 'fer202-ch11-s1',
        type: 'concept',
        title: 'Tại Sao Cần Code Splitting? Cơ Chế Của \`React.lazy\` & \`<Suspense>\`',
        content: `• **Bundling vs Code Splitting:**
  - Mặc định, các công cụ đóng gói (Webpack, Vite, Rollup) gộp toàn bộ các file JavaScript được \`import\` tĩnh thành một file **bundle** lớn duy nhất. Khi ứng dụng phình to, file bundle quá nặng làm tăng thời gian tải trang lần đầu (**Initial Load Time**).
  - **Code Splitting (Tách nhỏ mã nguồn):** Kỹ thuật chia bundle lớn thành nhiều mảnh nhỏ (**chunks**) để trình duyệt chỉ tải đúng phần code người dùng đang cần (**Lazy Loading on demand**).
• **Dynamic \`import()\`:** Khác với \`import\` tĩnh ở đầu file, cú pháp hàm \`import('./math').then(math => ...)\` trả về một **Promise** và báo cho bundler tách module đó thành một file chunk riêng biệt.
• **\`React.lazy()\`:** Cho phép render một Component được import động giống như một Component thông thường:
  \`\`\`jsx
  import React, { Suspense, lazy } from 'react';
  const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

  function App() {
    return (
      <Suspense fallback={<div>Loading dashboard...</div>}>
        <AdminDashboard />
      </Suspense>
    );
  }
  \`\`\`
• **Quy tắc bắt buộc của \`React.lazy()\`:**
  1. Hàm truyền vào \`React.lazy(fn)\` phải gọi \`import()\` động và trả về một **Promise** mà kết quả phân giải (resolve) là một module có **\`default\` export** chứa một React Component.
  2. Component tạo bởi \`React.lazy\` **nên được render bên trong một thẻ \`<Suspense>\`** có prop **\`fallback\`** (nhận bất kỳ phần tử React nào như Spinner, Skeleton) để hiển thị trong lúc chờ tải file chunk qua mạng.`,
      },
      {
        id: 'fer202-ch11-s2',
        type: 'comparison',
        title: 'So Sánh: Static Import vs \`React.lazy()\` & Xử Lý Lỗi Tải Chunk',
        content: `| Tiêu chí | Static Import (\`import Comp from './Comp'\`) | Lazy Import (\`const Comp = lazy(() => import('./Comp'))\`) |
| :--- | :--- | :--- |
| **Thời điểm tải code** | Tải ngay từ đầu trong file bundle chính | Chỉ tải file chunk khi Component được **render lần đầu tiên** |
| **Kích thước Bundle ban đầu** | Lớn (gộp tất cả trang vào 1 file) | Nhỏ gọn, tăng tốc độ hiển thị trang đầu (FCP / TTI) |
| **Yêu cầu Export của Module** | Hỗ trợ cả Default Export và Named Export | **Chỉ hỗ trợ trực tiếp Default Export** |
| **Yêu cầu bọc UI chờ** | Không cần | Cần bọc trong **\`<Suspense fallback={...}>\`** |`,
      },
      {
        id: 'fer202-ch11-s3',
        type: 'keywords',
        title: 'Từ Khóa Route-Based Code Splitting & Error Boundary Trong Slide Slot 15',
        content: `• **Route-based Code Splitting:** Vị trí lý tưởng nhất để áp dụng \`React.lazy\` là ở cấp độ **các trang định tuyến (Routes)** kết hợp với React Router: bọc \`<Routes>\` bên trong \`<Suspense fallback={<PageLoader />}>\`, còn từng trang khai báo bằng \`lazy(() => import('./pages/...'))\`.
• **Xử lý khi mạng rớt làm \`import()\` thất bại:** Nếu tải chunk thất bại (ví dụ mất mạng), Promise bị reject và ném lỗi. Ta bọc bên ngoài \`<Suspense>\` một **Error Boundary** (Class component có \`getDerivedStateFromError\` / \`componentDidCatch\`) để bắt lỗi và hiển thị giao diện báo lỗi thân thiện.`,
      },
      {
        id: 'fer202-ch11-s4',
        type: 'exam_tip',
        title: 'Mẹo & Bẫy Đề Thi FE Slot 15',
        content: `• **Bẫy số 1 (Rất hay ra thi):** \`React.lazy()\` hiện tại chỉ hỗ trợ **\`export default\`**! Nếu một module chỉ có Named Export (\`export const Chart = ...\`), muốn dùng với \`React.lazy\` thì phải tạo module trung gian re-export làm default hoặc nối \`.then(module => ({ default: module.Chart }))\`.
• **Bẫy số 2:** Đề hỏi prop nào của \`<Suspense>\` dùng để truyền giao diện hiển thị trong lúc chờ tải component lười → Đáp án luôn là **\`fallback\`** (ví dụ \`<Suspense fallback={<Spinner />}>\`).`,
      },
    ],
  },
  {
    id: 'fer202-ch12',
    order: 12,
    title: 'Slot 16–17: Kiến Trúc Flux, Redux Cốt Lõi, Redux Thunk & Redux Toolkit (RTK)',
    summary:
      'So sánh MVC hai chiều vs Flux một chiều vs Redux, 3 nguyên lý vàng của Redux, Store / Action / Pure Reducer / Dispatch, xử lý bất đồng bộ với Redux Thunk và chuẩn hiện đại Redux Toolkit (createSlice, configureStore).',
    sections: [
      {
        id: 'fer202-ch12-s1',
        type: 'concept',
        title: 'Từ MVC Đến Flux & Ba Nguyên Lý Cốt Lõi Của Redux (Slide Slot 16–17)',
        content: `• **Hạn chế của MVC truyền thống & Sự ra đời của Flux:**
  - Trong kiến trúc **MVC (Model – View – Controller)** khi quy mô lớn, nhiều Model và nhiều View có thể cập nhật chéo hai chiều (**Cascading updates / Two-way data flow**), tạo thành mạng nhện cực kỳ khó debug.
  - Facebook giới thiệu kiến trúc **Flux** ép buộc **Luồng dữ liệu một chiều (Unidirectional Data Flow)**:
    **Action → Dispatcher → Store(s) → View** (nếu View muốn đổi dữ liệu, View phải phát ra một Action mới đi qua Dispatcher).
• **Ba Nguyên Lý Vàng Của Redux (Three Fundamental Principles of Redux):**
  1. **Single Source of Truth (Một nguồn chân lý duy nhất):** Toàn bộ state toàn cục của ứng dụng được lưu trong một cây object duy nhất nằm trong **1 Store duy nhất**.
  2. **State is Read-Only (State chỉ đọc):** Cách duy nhất để thay đổi state là phát đi (**\`dispatch\`**) một **Action** — một plain JavaScript object có thuộc tính bắt buộc **\`type\`** (và dữ liệu đi kèm thường đặt trong **\`payload\`**).
  3. **Changes are made with Pure Functions (Thay đổi được thực hiện bởi các hàm thuần khiết):** Để chỉ định cách cây state biến đổi theo Action, bạn viết các **Reducers** — là những **pure functions** nhận \`(previousState, action)\` và trả về **một đối tượng \`nextState\` mới hoàn toàn** (không đột biến/mutate state cũ, không gọi API hay dùng \`Math.random()\`/\`Date.now()\` bên trong reducer).`,
      },
      {
        id: 'fer202-ch12-s2',
        type: 'comparison',
        title: 'So Sánh: Flux vs Redux & Redux Truyền Thống vs Redux Toolkit (RTK)',
        content: `| Tiêu chí | Kiến trúc Flux (Facebook) | Thư viện Redux (Dan Abramov) |
| :--- | :--- | :--- |
| **Số lượng Store** | Có thể có **nhiều Stores (Multiple Stores)** | Chỉ có **1 Store duy nhất (Single Store)** |
| **Dispatcher** | Có một đối tượng **Dispatcher** riêng biệt điều phối | **Không có Dispatcher riêng** (thay bằng \`store.dispatch()\` và Reducers) |
| **Tính chất của State** | State trong Store có thể bị thay đổi trực tiếp (Mutable) | State hoàn toàn **Bất biến (Immutable)**, cập nhật qua Pure Reducers |

| Tiêu chí | Redux Truyền Thống (Core) | Redux Toolkit (RTK — Chuẩn Hiện Đại) |
| :--- | :--- | :--- |
| **Tạo Store** | \`createStore(rootReducer, applyMiddleware(thunk))\` | **\`configureStore({ reducer: { ... } })\`** (tự bật sẵn Thunk & DevTools) |
| **Viết Reducer & Action** | Viết rời Action Types, Action Creators và \`switch-case\` Reducer thủ công | **\`createSlice({ name, initialState, reducers })\`** tự sinh cả Action Creators và Reducer |
| **Cập nhật Immutable** | Phải copy thủ công bằng Spread \`{ ...state, value: state.value + 1 }\` | Tích hợp sẵn thư viện **Immer**, cho phép viết cú pháp "đột biến an toàn" \`state.value += 1\` trong \`createSlice\` |`,
      },
      {
        id: 'fer202-ch12-s3',
        type: 'keywords',
        title: 'Từ Khóa React-Redux Hooks, Middleware & Redux Thunk',
        content: `• **Kết nối Redux với React (\`react-redux\`):**
  - Bọc ứng dụng trong \`<Provider store={store}><App /></Provider>\`.
  - **\`useSelector(state => state.counter.value)\`:** Hook dùng để đọc/trích xuất dữ liệu từ Redux Store (tự động re-render component khi giá trị được chọn thay đổi).
  - **\`useDispatch()\`:** Hook trả về hàm \`dispatch\` để gửi action lên Store (\`dispatch(increment())\`).
• **Middleware & Bất đồng bộ (\`redux-thunk\` / \`createAsyncThunk\`):**
  - Vì Reducer bắt buộc phải thuần khiết và đồng bộ, mọi tác vụ bất đồng bộ (gọi API, \`setTimeout\`) phải đặt ở **Middleware**.
  - **Redux Thunk** cho phép \`dispatch\` một **hàm (function)** nhận \`(dispatch, getState)\` thay vì chỉ dispatch một plain action object. Trong RTK, dùng **\`createAsyncThunk\`** tự động sinh 3 trạng thái lifecycle action: **\`pending\`**, **\`fulfilled\`**, **\`rejected\`**.`,
      },
      {
        id: 'fer202-ch12-s4',
        type: 'exam_tip',
        title: 'Mẹo & Bẫy Đề Thi FE Slot 16–17',
        content: `• **Bẫy phân biệt Flux vs Redux (Cực hay hỏi):** Nhớ 2 điểm khác biệt lớn nhất: (1) Flux có **Multiple Stores** và có **Dispatcher**; (2) Redux chỉ có **Single Store**, **không có Dispatcher**, và dùng **Pure Reducers** với **Immutable State**.
• **Bẫy thuộc tính bắt buộc của Action Object:** Mọi Redux Action object bắt buộc phải có thuộc tính **\`type\`** (\`{ type: 'todos/add', payload: 'Học FER202' }\`).`,
      },
    ],
  },
  {
    id: 'fer202-ch13',
    order: 13,
    title: 'Slot 18: Giao Tiếp Client–Server, HTTP, RESTful API & JSON Server',
    summary:
      'Mô hình Request–Response, cấu trúc HTTP Message, các phương thức HTTP (GET, POST, PUT, PATCH, DELETE), tính chất Idempotent, bảng mã HTTP Status Codes và giả lập REST API với json-server.',
    sections: [
      {
        id: 'fer202-ch13-s1',
        type: 'concept',
        title: 'Giao Thức HTTP, Kiến Trúc RESTful API & JSON (Slide Slot 18)',
        content: `• **Mô hình Client–Server & HTTP:**
  - Trình duyệt (React App — Client) giao tiếp với Backend (Server) qua giao thức **HTTP/HTTPS** theo chu trình **Request – Response** không trạng thái (**Stateless**).
  - Mỗi bản tin HTTP gồm: **Start Line** (Method + URI + HTTP Version hoặc Status Code), **Headers** (\`Content-Type: application/json\`, \`Authorization: Bearer <token>\`), và **Body** (payload dữ liệu, thường ở định dạng **JSON — JavaScript Object Notation**).
• **Hàm xử lý JSON trong JavaScript:**
  - **\`JSON.stringify(obj)\`:** Chuyển đổi một JavaScript Object/Array thành **chuỗi JSON (JSON string)** để gửi đi trong phần \`body\` của request hoặc lưu vào \`localStorage\`.
  - **\`JSON.parse(jsonString)\`:** Phân tích chuỗi JSON nhận về thành **JavaScript Object/Array** để sử dụng trong code.
• **Giả lập Backend nhanh với \`json-server\` (Rất phổ biến trong bài thi thực hành PE & câu hỏi FE):**
  - Chỉ cần tạo 1 file \`db.json\` chứa các mảng tài nguyên (ví dụ \`{ "products": [...], "users": [...] }\`) và chạy lệnh:
    \`npx json-server --watch db.json --port 3001\`
  - \`json-server\` tự động tạo đầy đủ các endpoint RESTful chuẩn (\`GET\`, \`POST\`, \`PUT\`, \`PATCH\`, \`DELETE\`) và tự ghi nhận thay đổi trực tiếp vào file \`db.json\`.`,
      },
      {
        id: 'fer202-ch13-s2',
        type: 'comparison',
        title: 'Bảng Phương Thức HTTP (CRUD) & Bảng Mã Trạng Thái HTTP Status Codes',
        content: `| HTTP Method | Tác vụ CRUD | Có Body? | Idempotent (Lặp lại N lần kết quả như 1 lần)? | Ý nghĩa trong RESTful API |
| :--- | :--- | :--- | :--- | :--- |
| **\`GET\`** | **Read** | Không | **Có** (và Safe) | Lấy danh sách (\`/users\`) hoặc chi tiết 1 bản ghi (\`/users/5\`) |
| **\`POST\`** | **Create** | Có | **Không** (Gọi N lần tạo ra N bản ghi mới) | Tạo mới tài nguyên trong tập hợp (\`POST /users\`) |
| **\`PUT\`** | **Update (Replace)** | Có | **Có** | Thay thế **toàn bộ** bản ghi tại \`/users/5\` |
| **\`PATCH\`** | **Update (Partial)** | Có | Thường có | Cập nhật **một phần** các trường được gửi lên của \`/users/5\` |
| **\`DELETE\`** | **Delete** | Không | **Có** | Xóa bản ghi tại \`/users/5\` |

| Nhóm Mã | Các Mã HTTP Status Codes Điển Hình Nhất Trong Đề Thi |
| :--- | :--- |
| **2xx (Success)** | • **\`200 OK\`**: Thành công chuẩn (GET, PUT, PATCH).<br>• **\`201 Created\`**: Tạo mới tài nguyên thành công (sau lệnh \`POST\`).<br>• **\`204 No Content\`**: Xử lý thành công nhưng không trả về body (thường sau \`DELETE\`). |
| **3xx (Redirection)** | • **\`301 Moved Permanently\`**, **\`304 Not Modified\`** (dùng bản cache của trình duyệt). |
| **4xx (Client Error)** | • **\`400 Bad Request\`**: Cú pháp/dữ liệu gửi lên không hợp lệ.<br>• **\`401 Unauthorized\`**: Chưa xác thực (thiếu hoặc sai token đăng nhập).<br>• **\`403 Forbidden\`**: Đã đăng nhập nhưng **không đủ quyền (permission/role)** truy cập.<br>• **\`404 Not Found\`**: Không tìm thấy tài nguyên/endpoint. |
| **5xx (Server Error)** | • **\`500 Internal Server Error\`**, **\`502 Bad Gateway\`**, **\`503 Service Unavailable\`**. |`,
      },
      {
        id: 'fer202-ch13-s3',
        type: 'keywords',
        title: 'Từ Khóa Thiết Kế RESTful URI & CORS Trong Slide Slot 18',
        content: `• **Quy chuẩn đặt tên Endpoint trong RESTful API:** Dùng **danh từ số nhiều (plural nouns)** chỉ tài nguyên (ví dụ \`/api/articles\`, \`/api/articles/10/comments\`), **không đặt động từ** trong URL như \`/api/getArticles\` hay \`/api/deleteArticle\`, vì hành động đã được thể hiện qua **HTTP Method** (\`GET\`, \`DELETE\`).
• **CORS (Cross-Origin Resource Sharing):** Cơ chế bảo mật của trình duyệt chặn lời gọi AJAX/Fetch từ origin này (ví dụ \`http://localhost:3000\`) sang origin khác (\`http://api.example.com:8080\`) trừ khi Server trả về header cho phép như \`Access-Control-Allow-Origin\`.`,
      },
      {
        id: 'fer202-ch13-s4',
        type: 'exam_tip',
        title: 'Mẹo & Bẫy Đề Thi FE Slot 18',
        content: `• **Bẫy phân biệt \`401\` vs \`403\`:** Nhớ mẹo: **\`401 Unauthorized\` = Chưa biết bạn là ai (Authentication failed)**; còn **\`403 Forbidden\` = Biết bạn là ai rồi nhưng bạn không có quyền vào (Authorization failed)**.
• **Bẫy phân biệt \`PUT\` vs \`PATCH\`:** \`PUT\` thay thế toàn bộ object (trường nào không gửi lên có thể bị ghi đè mất), còn \`PATCH\` chỉ sửa đúng các trường được gửi kèm trong body.`,
      },
    ],
  },
  {
    id: 'fer202-ch14',
    order: 14,
    title: 'Slot 19: Fetching & Caching Data — Promises, Async/Await, Fetch API vs Axios',
    summary:
      'Ba trạng thái của Promise, cú pháp async/await với try/catch, khác biệt cốt lõi giữa window.fetch và thư viện Axios, hủy request với AbortController và quản lý Server State hiện đại.',
    sections: [
      {
        id: 'fer202-ch14-s1',
        type: 'concept',
        title: 'Promises, \`async/await\` & Quy Trình Gọi API Chuẩn Trong React (Slide Slot 19)',
        content: `• **JavaScript Promise:** Là đối tượng đại diện cho kết quả của một tác vụ bất đồng bộ trong tương lai, luôn nằm ở 1 trong **3 trạng thái**:
  1. **\`Pending\`**: Đang chờ xử lý.
  2. **\`Fulfilled\` (Resolved)**: Thành công, kích hoạt nhánh \`.then(data => ...)\`.
  3. **\`Rejected\`**: Thất bại, kích hoạt nhánh \`.catch(error => ...)\`. Nhánh \`.finally(() => ...)\` luôn chạy dù thành công hay thất bại (rất hợp để tắt \`setLoading(false)\`).
• **\`async / await\` (ES2017):** Cú pháp "syntactic sugar" xây dựng trên nền tảng Promise giúp viết code bất đồng bộ trông tuần tự, dễ đọc như code đồng bộ:
  - Một hàm có từ khóa **\`async\`** luôn luôn trả về một **Promise**.
  - Từ khóa **\`await\`** tạm dừng việc thực thi hàm \`async\` cho đến khi Promise được giải quyết, và bắt lỗi bằng khối **\`try { ... } catch (err) { ... } finally { ... }\`**.
• **Mẫu 3 biến State khi Fetch Data trong React Component:**
  Khi gọi API trong \`useEffect\`, ta luôn quản lý 3 trạng thái: **\`data\`** (dữ liệu nhận về), **\`loading\` / \`isLoading\`** (hiển thị Spinner khi đang tải), và **\`error\`** (thông báo lỗi nếu request thất bại).`,
      },
      {
        id: 'fer202-ch14-s2',
        type: 'comparison',
        title: 'So Sánh Kinh Điển: Native \`fetch()\` vs Thư Viện \`axios\` (Đề Thi Hỏi Rất Nhiều!)',
        content: `| Tiêu chí | Native \`window.fetch()\` | Thư viện \`axios\` |
| :--- | :--- | :--- |
| **Cài đặt** | Có sẵn trên trình duyệt (Built-in Web API) | Phải cài qua NPM (\`npm install axios\`) |
| **Chuyển đổi dữ liệu JSON** | Phải qua **2 bước Promise**: gọi **\`const res = await fetch(url)\`** rồi phải gọi tiếp **\`const data = await res.json()\`**; khi gửi POST phải tự \`JSON.stringify(body)\`. | **Tự động parse JSON**: Dữ liệu nằm sẵn trong thuộc tính **\`response.data\`**; khi gửi POST tự động stringify object. |
| **Xử lý lỗi HTTP (\`404\`, \`500\`)** | **KHÔNG tự nhảy vào \`.catch()\`** khi gặp mã lỗi \`404\` hay \`500\`! (\`fetch\` chỉ reject khi rớt mạng hoàn toàn). Phải tự kiểm tra **\`if (!res.ok) throw new Error(...)\`**. | **Tự động reject Promise (nhảy vào \`.catch()\`)** ngay khi status code nằm ngoài khoảng \`2xx\` (ví dụ \`400\`, \`401\`, \`404\`, \`500\`). |
| **Tính năng nâng cao** | Cơ bản; hủy request bằng \`AbortController\` | Có sẵn **Request/Response Interceptors** (tự đính kèm JWT token), cấu hình \`baseURL\`, \`timeout\`. |`,
      },
      {
        id: 'fer202-ch14-s3',
        type: 'keywords',
        title: 'Từ Khóa Race Condition, \`AbortController\` & Caching Hiện Đại (SWR / TanStack Query)',
        content: `• **Chống Race Condition & Memory Leak với \`AbortController\` trong \`useEffect\`:**
  \`\`\`jsx
  useEffect(() => {
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => { if (err.name !== 'AbortError') setError(err); });
    return () => controller.abort(); // Hủy request cũ khi url đổi hoặc component unmount
  }, [url]);
  \`\`\`
• **Data Fetching & Caching trong React hiện đại:** Thay vì tự viết \`useEffect\` thủ công (không có cache, dễ gọi trùng API), các dự án thực tế và tài liệu React hiện đại khuyến nghị dùng thư viện quản lý Server State như **TanStack Query (React Query)** hoặc **SWR** (tự động caching, deduplication, stale-while-revalidate, background refetching).`,
      },
      {
        id: 'fer202-ch14-s4',
        type: 'exam_tip',
        title: 'Mẹo & Bẫy Đề Thi FE Slot 19',
        content: `• **Bẫy \`fetch()\` gặp lỗi 404:** Nếu đề cho đoạn code \`fetch('/api/missing').then(res => console.log('Success')).catch(err => console.log('Error'))\` khi server trả về **\`404 Not Found\`**, màn hình vẫn in ra **\`Success\`** (với \`res.ok === false\` và \`res.status === 404\`) vì \`fetch\` không coi lỗi HTTP status là lỗi mạng!
• **Bẫy đọc dữ liệu Axios:** Trong Axios, dữ liệu trả về từ server nằm ở **\`response.data\`**, không cần và không có hàm \`response.json()\`.`,
      },
    ],
  },
  {
    id: 'fer202-ch15',
    order: 15,
    title: 'Slot 20: Giới Thiệu Next.js (SSR/SSG, App Router) & Tailwind CSS',
    summary:
      'So sánh CSR (React thuần) với SSR/SSG trên Next.js, lợi ích SEO & hiệu năng, File-system Routing, React Server Components vs Client Components ("use client") và triết lý Utility-First của Tailwind CSS.',
    sections: [
      {
        id: 'fer202-ch15-s1',
        type: 'concept',
        title: 'Next.js Framework & Các Chiến Lược Render (CSR, SSR, SSG, ISR)',
        content: `• **Next.js là gì (Slide Slot 20)?** Là một **React Framework cho Production** do **Vercel** phát triển, bổ sung sẵn các tính năng mà thư viện React thuần không có sẵn: **Server-Side Rendering (SSR)**, **Static Site Generation (SSG)**, **File-system Based Routing** (định tuyến tự động theo cấu trúc thư mục mà không cần cấu hình \`react-router-dom\`), API Routes, và tối ưu ảnh/font tự động.
• **Tại sao ứng dụng CSR (Client-Side Rendering) thuần gặp bất lợi về SEO và Tốc độ tải đầu?**
  - Trong React SPA thuần (CSR), server chỉ trả về một file \`index.html\` gần như rỗng (\`<div id="root"></div>\`). Trình duyệt phải tải toàn bộ file JS bundle về, thực thi React rồi mới gọi API lấy dữ liệu để vẽ nội dung → Người dùng nhìn màn hình trắng lâu hơn (FCP chậm) và các bot tìm kiếm/mạng xã hội khó thu thập nội dung (**SEO kém**).
  - **Next.js khắc phục bằng Pre-rendering:** Tạo sẵn mã HTML có đầy đủ nội dung ngay trên Server trước khi gửi về trình duyệt, sau đó trình duyệt thực hiện **Hydration** để gắn các sự kiện React vào cây HTML tĩnh đó.
• **Khởi tạo dự án Next.js chuẩn:** \`npx create-next-app@latest\`.`,
      },
      {
        id: 'fer202-ch15-s2',
        type: 'comparison',
        title: 'So Sánh CSR vs SSR vs SSG & Tailwind CSS vs Bootstrap',
        content: `| Chiến lược Render | Thời điểm tạo HTML | Ưu điểm & Trường hợp sử dụng |
| :--- | :--- | :--- |
| **CSR (Client-Side Rendering)** | Trên trình duyệt của người dùng sau khi tải JS | Tương tác mượt sau khi đã tải xong; hợp với trang Dashboard nội bộ không cần SEO. |
| **SSR (Server-Side Rendering)** | Trên Server ở **mỗi request (On every request)** | HTML luôn có dữ liệu mới nhất + **SEO tốt**; hợp với trang chi tiết sản phẩm/bảng tin thay đổi liên tục. |
| **SSG (Static Site Generation)** | Trên Server chỉ 1 lần lúc **Build time (\`next build\`)** | Tốc độ phản hồi nhanh nhất (phân phối qua CDN); hợp với Blog, trang giới thiệu, tài liệu ít thay đổi. |

| Tiêu chí | Bootstrap 5 (Component-based CSS) | Tailwind CSS (Utility-First CSS — Slide Slot 20) |
| :--- | :--- | :--- |
| **Triết lý thiết kế** | Cung cấp sẵn các class thành phần hoàn chỉnh (\`.btn\`, \`.card\`, \`.navbar\`) | Cung cấp các **class tiện ích nguyên tử (Utility classes)** ghép trực tiếp trong \`className\` (\`flex items-center p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700\`) |
| **Tùy biến & Kích thước** | Dễ trùng lặp giao diện giữa các web; ghi đè style phải viết CSS riêng | Tùy biến tự do trong \`tailwind.config.js\`; chỉ quét và giữ lại đúng các class có sử dụng trong code nên file CSS build ra cực nhẹ. |`,
      },
      {
        id: 'fer202-ch15-s3',
        type: 'keywords',
        title: 'Từ Khóa Next.js Hiện Đại (App Router, Server vs Client Components) & Tailwind CSS',
        content: `• **File-system Routing trong Next.js:**
  - **Pages Router (Cổ điển trong Slide):** Mỗi file trong thư mục \`pages/\` (ví dụ \`pages/about.js\`) tự động trở thành route \`/about\`; dùng \`getServerSideProps\` cho SSR và \`getStaticProps\` cho SSG.
  - **App Router (Next.js 13/14/15 hiện đại):** Đặt trong thư mục \`app/\` (ví dụ \`app/about/page.tsx\` tạo route \`/about\`, \`app/layout.tsx\` tạo layout chung).
• **React Server Components (RSC) vs Client Components:**
  - Trong Next.js App Router, mọi component mặc định là **Server Component** (chạy trên server, gọi trực tiếp DB/API bảo mật, không gửi JS xuống trình duyệt).
  - Khi một component cần dùng **React Hooks (\`useState\`, \`useEffect\`)**, bắt **sự kiện trình duyệt (\`onClick\`, \`onChange\`)** hoặc dùng Browser API (\`window\`, \`localStorage\`), bắt buộc phải khai báo chỉ thị **\`"use client"\`** ở dòng đầu tiên của file!
• **Cấu hình Tailwind CSS trong dự án React/Next.js:** Cài đặt \`tailwindcss postcss autoprefixer\`, khởi tạo \`npx tailwindcss init -p\`, khai báo đường dẫn quét file trong mảng \`content: ["./src/**/*.{js,jsx,ts,tsx}"]\` của \`tailwind.config.js\`, và thêm 3 directive \`@tailwind base; @tailwind components; @tailwind utilities;\` vào file CSS gốc.`,
      },
      {
        id: 'fer202-ch15-s4',
        type: 'exam_tip',
        title: 'Mẹo & Bẫy Đề Thi FE Slot 20',
        content: `• **Bẫy bản chất Tailwind CSS:** Đề hỏi *"Tailwind CSS thuộc loại framework nào?"* → Chọn **Utility-First CSS Framework** (không phải thư viện React Component dựng sẵn như Material UI hay React-Bootstrap).
• **Bẫy Next.js SSR vs CSR:** Nhớ lý do lớn nhất chọn Next.js thay cho Create React App thuần là **Pre-rendering (SSR/SSG) giúp tối ưu SEO và tăng tốc độ hiển thị trang lần đầu (First Contentful Paint)**.`,
      },
    ],
  },
];

