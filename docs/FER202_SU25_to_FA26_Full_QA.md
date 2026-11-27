# 📚 TỔNG HỢP TOÀN BỘ CÂU HỎI & ĐÁP ÁN FER202 (SU25 → FA26)

> Tổng hợp đầy đủ **10 bộ đề thi thật từ kì Summer 2025 (SU25) đến kì Fall 2026 (FA26)** — gồm **504 câu hỏi** kèm rõ đáp án đúng và giải thích chi tiết.

## 📑 Mục Lục Nhanh
1. **Đề 08: Kì SU25 — Đề 1 (54 câu)**
2. **Đề 06: Kì SU25 — Đề 2 (50 câu)**
3. **Đề 12: Kì FA25 — Đề Thi Chính Thức (50 câu)**
4. **Đề 11: Kì SP26 — Đề 1 (50 câu)**
5. **Đề 14: Kì SP26 — Đề 1 [Bản B] (50 câu)**
6. **Đề 01: Kì SP26 — Đề 2 (50 câu)**
7. **Đề 13: Kì SP26 — Đề 2 [Bản B] (50 câu)**
8. **Đề 15: Kì SP26 — Đề 3 (50 câu)**
9. **Đề 03: Kì SU26 — Đề Thi Chính Thức (50 câu)**
10. **Đề Thi FE Kì Fall 2026 (FA26 — Đề Chính Thức 163998)**

---

## 1. Đề 08: Kì SU25 — Đề 1 (54 câu)

### Câu 1

How can you import functions or variables from an ES6 module?

- **A. By using the import keyword** ✅
- B. By using the require function
- C. By using the export keyword
- D. By using the include directive

> ✅ **Đáp án đúng:** **A** (By using the import keyword)
>
> 💡 **Giải thích:** Trong ES6, để import hàm hoặc biến từ module, dùng từ khóa 'import'. 'require' là của CommonJS, 'export' dùng để xuất, 'include' không tồn tại trong ES6.

---

### Câu 2

Which action dispatch would correctly increment the count in the reducer setup?

- A. dispatch({ type: 'add' });
- B. dispatch({ action: 'increment' });
- **C. dispatch({ type: 'increment' });** ✅
- D. dispatch({ command: 'increment' });

> ✅ **Đáp án đúng:** **C** (dispatch({ type: 'increment' });)
>
> 💡 **Giải thích:** Trong Redux/React, action phải có thuộc tính 'type' để reducer nhận biết. 'increment' là tên hành động phổ biến. Các lựa chọn khác dùng 'action' hoặc 'command' — không chuẩn — nên sai.

---

### Câu 3

Evaluate the differences between using the Fetch API and Axios for making HTTP requests. Which statement is true?

- A. The Fetch API automatically handles JSON responses, while Axios requires manual parsing
- **B. Axios provides built-in support for request and response interception, while the Fetch API does not** ✅
- C. The Fetch API supports automatic retries for failed requests, while Axios does not
- D. Axios is built into all modern browsers, while the Fetch API requires an additional library

> ✅ **Đáp án đúng:** **B** (Axios provides built-in support for request and response interception, while the Fetch API does not)
>
> 💡 **Giải thích:** Axios hỗ trợ sẵn cơ chế interceptors để xử lý request/response trước khi gửi hoặc nhận, trong khi Fetch API không có tính năng này, phải tự viết logic.

---

### Câu 4

How would you extract and display multiple parameters, userId and postId, in a component?

- **A. `const { userId, postId } = useParams();`** ✅
- B. `const userId = useParams('userId'); const postId = useParams('postId');`
- C. `const userId = route.params.userId; const postId = route.params.postId;`
- D. `const { userId } = useParams(); const { postId } = useParams();`

> ✅ **Đáp án đúng:** **A** (`const { userId, postId } = useParams();`)
>
> 💡 **Giải thích:** Trong React Router v6, `useParams()` trả về một object chứa các tham số route. Cách đúng để trích xuất nhiều tham số là dùng destructuring: `const { userId, postId } = useParams();`.

---

### Câu 5

What is the primary purpose of the tailwind.config.js file in a Tailwind CSS project?

- A. To define custom utility classes for HTML elements.
- **B. To configure and customize the default Tailwind CSS settings.** ✅
- C. To handle CSS minification for production.
- D. To install third-party plugins automatically.

> ✅ **Đáp án đúng:** **B** (To configure and customize the default Tailwind CSS settings.)
>
> 💡 **Giải thích:** Tệp tailwind.config.js dùng để tùy chỉnh cài đặt mặc định của Tailwind CSS như màu sắc, khoảng cách, font, v.v. — không dùng để tạo class hay minify CSS.

---

### Câu 6

What does the npx create-next-app command do?

- A. It creates a new React application
- **B. It creates a new Next.js application** ✅
- C. It installs Tailwind CSS
- D. It creates a new package.json in NextJS

> ✅ **Đáp án đúng:** **B** (It creates a new Next.js application)
>
> 💡 **Giải thích:** Lệnh npx create-next-app là công cụ chính thức của Next.js để khởi tạo một dự án Next.js mới, bao gồm cấu trúc thư mục, các dependency cần thiết và cấu hình cơ bản.

---

### Câu 7

Analyze the differences between Flux and MVC architectures. Which statement is true?

- **A. Flux enforces unidirectional data flow, while MVC allows bidirectional data flow.** ✅
- B. MVC enforces unidirectional data flow, while Flux allows bidirectional data flow.
- C. Both Flux and MVC enforce unidirectional data flow.
- D. Both Flux and MVC allow bidirectional data flow.

> ✅ **Đáp án đúng:** **A** (Flux enforces unidirectional data flow, while MVC allows bidirectional data flow.)
>
> 💡 **Giải thích:** Flux architecture strictly follows unidirectional data flow (Action → Dispatcher → Store → View), whereas MVC allows bidirectional communication between Model, View, and Controller, which can lead to complex dependencies.

---

### Câu 8

What is the initial state of a promise?

- A. Fulfilled
- B. Rejected
- **C. Pending** ✅
- D. Resolved

> ✅ **Đáp án đúng:** **C** (Pending)
>
> 💡 **Giải thích:** Khi một Promise được tạo, trạng thái ban đầu luôn là 'pending', cho đến khi nó được resolve (fulfilled) hoặc reject.

---

### Câu 9

Answer (Choose 1
answer)
A
B
C
D

What is the difference between the render() method and the commit() method in React?

- A. The render() method defines the component's structure, while the commit() method handles side effects.
- B. The render() method handles events, while the commit() method defines the component's structure.
- C. The render() method is called before the component is mounted, while the commit() method is called after the component is mounted.
- **D. There is no commit() method in React.** ✅

> ✅ **Đáp án đúng:** **D** (There is no commit() method in React.)
>
> 💡 **Giải thích:** Trong React, không tồn tại phương thức commit() như một phần của API chính thức. Phương thức render() dùng để mô tả giao diện, còn các side effect được xử lý qua useEffect. Các lựa chọn A, B, C đều sai vì chúng đề cập đến commit() như một phương thức có thật trong React.

---

### Câu 10

How can you avoid contradictions in state with this code?
```javascript
const [isOpen, setIsOpen] = useState(false);
const [buttonText, setButtonText] = useState(isOpen ? "se" : "Open");
function toggle() {
  setIsOpen(!isOpen);
  setButtonText(isOpen ? "Open" : "se");
}
```

- A. The code above is fine as it is.
- **B. Remove buttonText from state and calculate it dynamically in the render method based on isOpen.** ✅
- C. Keep both isOpen and buttonText in state but update them separately.
- D. Use useEffect to sync buttonText with isOpen.

> ✅ **Đáp án đúng:** **B** (Remove buttonText from state and calculate it dynamically in the render method based on isOpen.)
>
> 💡 **Giải thích:** Cập nhật buttonText trong hàm toggle dựa trên giá trị isOpen trước khi cập nhật sẽ gây ra lỗi logic. Nên tính buttonText trực tiếp từ isOpen trong render để đảm bảo đồng bộ.

---

### Câu 11

```javascript
import React, { useState } from 'react';

function Dish({ name }) {
  return <li>{name}</li>;
}

function Kitchen() {
  const [orders, setOrders] = useState([]);

  // Triggering a render (delivering the guest's order to the kitchen)
  const addOrder = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  // Rendering the component (preparing the order in the kitchen)
  const renderOrders = () => {
    return orders.map((order, index) => <Dish key={index} name={order} />);
  };

  // Committing to the DOM (placing the order on the table)
  return (
    <div>
      <h2>Orders:</h2>
      <ul>{renderOrders()}</ul>
    </div>
  );
}

function Waiter() {
  const handleOrder = () => {
    // Triggering a render (delivering the guest's order to the kitchen)
    kitchenRef.current.addOrder('Pizza');
  };

  // A reference to the Kitchen component
  const kitchenRef = React.createRef();

  // Rendering the Waiter component
  return (
    <div>
      <h1>Welcome to the Restaurant!</h1>
      <button onClick={handleOrder}>Place Order</button>
      <Kitchen ref={kitchenRef} />
    </div>
  );
}

export default Waiter;
```

Which process in React corresponds to "send order to kitchen"?

What React lifecycle phases and patterns are demonstrated in the code above when managing restaurant orders and triggering renders?

- **A. Triggering, rendering, and committing in React component lifecycle** ✅
- B. Direct Redux store middleware dispatching
- C. React Router data loading and route parameter handling
- D. Server-Side Rendering with Next.js getServerSideProps

> ✅ **Đáp án đúng:** **A** (Triggering, rendering, and committing in React component lifecycle)
>
> 💡 **Giải thích:** Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này.

---

### Câu 12

javascript
// Rendering the component (preparing the order in the kitchen)
const renderOrders = () => {
  return orders.map((order, index) => <Dish key={index} name={order} />);
};

// Committing to the DOM (placing the order on the table)
return (
  <div>
    <h2>Orders:</h2>
    <ul>{renderOrders()}</ul>
  </div>
);
};

function Waiter() {
  const handleOrder = () => {
    // Triggering a render (delivering the guest's order to the kitchen)
    kitchenRef.current.addOrder('Pizza');
  };

  // A reference to the Kitchen component
  const kitchenRef = React.createRef();

  // Rendering the Waiter component
  return (
    <div>
      <h1>Welcome to the Restaurant!</h1>
      <button onClick={handleOrder}>Place Order</button>
      <Kitchen ref={kitchenRef} />
    </div>
  );
}

export default Waiter;
```

Which process in React corresponds to "send order to kitchen"?

- **A. Triggering a render** ✅
- B. Rendering the component
- C. Committing to the DOM
- D. Placing the order on the table

> ✅ **Đáp án đúng:** **A** (Triggering a render)
>
> 💡 **Giải thích:** Trong ví dụ, 'send order to kitchen' tương ứng với việc gọi hàm `kitchenRef.current.addOrder('Pizza')` — hành động này kích hoạt lại quá trình render (tức là 'triggering a render'), giống như gửi đơn hàng vào bếp để chuẩn bị.

---

### Câu 13

Answer
A
B
C
D

(Choose 1 answer)

How do you create a dynamic route in Next.js?

- A. By using useRouter() and manually specifying the route.
- **B. By creating a file with square brackets in the pages directory, e.g., [id].js.** ✅
- C. By defining a route in the next.config.js file.
- D. By using React Router's Route component.

> ✅ **Đáp án đúng:** **B** (By creating a file with square brackets in the pages directory, e.g., [id].js.)
>
> 💡 **Giải thích:** Trong Next.js, route động được tạo bằng cách đặt tên file trong thư mục pages với dấu ngoặc vuông, ví dụ [id].js — đây là cách chuẩn của framework, không dùng React Router hay config.

---

### Câu 14

How do you declare multiple routes in React Router?

- A. By nesting `<Route>` components inside each other
- B. By using the `<Routes>` component instead of `<Route>`
- C. By using the path prop with multiple values in a single `<Route>` component
- **D. By using an array of Route components inside the Routes component.** ✅

> ✅ **Đáp án đúng:** **D** (By using an array of Route components inside the Routes component.)
>
> 💡 **Giải thích:** In React Router v6, multiple routes are declared by placing multiple <Route> components inside a <Routes> component. Each <Route> defines a path and its corresponding element. Nesting routes is for layout or nested UI, not for declaring multiple top-level routes. Option D correctly describes the standard practice.

---

### Câu 15

□ A
□ B
□ C
□ D

How do you create a new Next.js project?

- **A. Use the create-next-app command-line tool.** ✅
- B. Install the Next.js package globally with npm.
- C. Clone the Next.js starter template from GitHub.
- D. Use the npm init command and manually configure the project.

> ✅ **Đáp án đúng:** **A** (Use the create-next-app command-line tool.)
>
> 💡 **Giải thích:** Cách chính thức và nhanh nhất để tạo dự án Next.js là dùng lệnh `npx create-next-app`, được cung cấp bởi chính Next.js để khởi tạo cấu trúc dự án chuẩn.

---

### Câu 16



- A. Reducers can only be used with React class components, not functional components.
- B. Reducers are responsible for dispatching actions.
- C. Reducers should have side effects such as API calls or database interactions.
- **D. Reducers must be pure functions with no side effects.** ✅

> ✅ **Đáp án đúng:** **D** (Reducers must be pure functions with no side effects.)
>
> 💡 **Giải thích:** Reducers trong React/Redux phải là hàm thuần túy (pure functions), không có side effects như gọi API hay tương tác với database, để đảm bảo tính dự đoán và dễ kiểm thử.

---

### Câu 17

How can you create a new Git repository?

- **A. By running "git init" in the project directory** ✅
- B. By adding a remote repository URL
- C. By cloning an existing repository
- D. By committing changes using "git commit -m"

> ✅ **Đáp án đúng:** **A** (By running "git init" in the project directory)
>
> 💡 **Giải thích:** Lệnh "git init" khởi tạo một kho lưu trữ Git mới trong thư mục hiện tại, tạo thư mục .git để theo dõi phiên bản. Các lựa chọn khác: cloning tạo repo từ repo có sẵn, commit chỉ lưu thay đổi, add remote chỉ liên kết với repo từ xa — không tạo repo mới.

---

### Câu 18

Answer (Choose 1
answer)
A
B
C
D

Which command is used to install the required dependencies for a React project?

- **A. npm install** ✅
- B. git LOne
- C. create-react-app
- D. npm start

> ✅ **Đáp án đúng:** **A** (npm install)
>
> 💡 **Giải thích:** Lệnh 'npm install' dùng để cài đặt tất cả các dependency được liệt kê trong package.json của dự án React. 'create-react-app' dùng để khởi tạo dự án mới, 'npm start' để chạy server, 'git LOne' không tồn tại.

---

### Câu 19

Select the code snippet that correctly defines a Class Component in React.

- **A. class MyComponent extends React.Component {
      render() {
          return <div>Hello, World!</div>;
      }
  }** ✅
- B. function MyComponent() {
      return <div>Hello, World!</div>;
  }
- C. const MyComponent = () => {
      return <div>Hello, World!</div>;
  };
- D. const MyComponent = React.createClass({
      render() {
          return <div>Hello, World!</div>;
      }
  });

> ✅ **Đáp án đúng:** **A** (class MyComponent extends React.Component {     render() {         return <div>Hello, World!</div>;     } })
>
> 💡 **Giải thích:** Trong React, Class Component được định nghĩa bằng cách kế thừa từ React.Component và phải có phương thức render(). Đáp án A đúng chuẩn cú pháp. Các đáp án B, C là Function Component, D dùng React.createClass (đã lỗi thời).

---

### Câu 20

What are PropTypes in React?

- A. They are used for creating component classes.
- **B. They are used for defining the types of component props.** ✅
- C. They are used for handling events in React.
- D. They are used for manipulating the component's state.

> ✅ **Đáp án đúng:** **B** (They are used for defining the types of component props.)
>
> 💡 **Giải thích:** PropTypes trong React dùng để xác định kiểu dữ liệu của props, giúp phát hiện lỗi sớm khi truyền prop sai kiểu. Không liên quan đến tạo class, xử lý sự kiện hay state.

---

### Câu 21

Which HTTP status code indicates a successful response from a server?

- **A. 200 OK** ✅
- B. 404 Not Found
- C. 500 Internal Server Error
- D. 302 Found

> ✅ **Đáp án đúng:** **A** (200 OK)
>
> 💡 **Giải thích:** HTTP status code 200 OK là mã phản hồi thành công tiêu chuẩn, cho biết yêu cầu đã được xử lý thành công. Các mã khác: 404 là không tìm thấy tài nguyên, 500 là lỗi máy chủ, 302 là chuyển hướng tạm thời.

---

### Câu 22

Compare the use of Redux and Flux for state management. Which statement is true?

- A. Redux uses multiple stores, while Flux uses a single store.
- **B. Flux uses multiple stores, while Redux uses a single store.** ✅
- C. Both Redux and Flux use multiple stores.
- D. Both Redux and Flux use a single store.

> ✅ **Đáp án đúng:** **B** (Flux uses multiple stores, while Redux uses a single store.)
>
> 💡 **Giải thích:** Flux architecture allows multiple stores per component; Redux enforces a single global store for predictable state management. This is a core distinction.

---

### Câu 23

Which component is typically used in conjunction with React.lazy to handle the loading state?

- A. <ErrorBoundary>
- **B. <Suspense>** ✅
- C. <LoadingComponent>
- D. <Provider>

> ✅ **Đáp án đúng:** **B** (<Suspense>)
>
> 💡 **Giải thích:** React.lazy() is used to load components dynamically. <Suspense> is used to wrap lazy-loaded components and display a fallback UI (e.g., loading spinner) while they are being loaded.

---

### Câu 24

Answer
(Choose 1
answer)

A
B
C
D

Can you provide an example of a custom property validator in React that checks if a prop is a positive number?

- A. value: PropTypes.positiveNumber
- **B. value: function(props, propName, componentName)** ✅
- C. value: PropTypes.number && value > 0
- D. value: PropTypes.number && value >= 0

> ✅ **Đáp án đúng:** **B** (value: function(props, propName, componentName))
>
> 💡 **Giải thích:** Trong React, validator tùy chỉnh dùng hàm: function(props, propName, componentName) để kiểm tra prop. Các lựa chọn khác không hợp lệ: PropTypes không có 'positiveNumber', và không thể dùng logic && trực tiếp trong PropTypes.

---

### Câu 25

How can you use a fragment in JSX?

- A. By wrapping the JSX elements with `<div>` tags
- **B. By using the shorthand syntax `<>...</>` or `<React.Fragment>...</React.Fragment>`** ✅
- C. By creating a separate component for each element
- D. By using the fragment() function

> ✅ **Đáp án đúng:** **B** (By using the shorthand syntax `<>...</>` or `<React.Fragment>...</React.Fragment>`)
>
> 💡 **Giải thích:** Trong JSX, fragment cho phép nhóm nhiều phần tử mà không cần wrapper div, dùng cú pháp <>...</> hoặc <React.Fragment>...</React.Fragment> để tránh thêm node DOM không cần thiết.

---

### Câu 26

What does ES6 stand for?

- A. Extensible Stylesheet Language 6
- B. Enhanced Scripting Language 6
- **C. ECMAScript 6** ✅
- D. Efficient Syntax Language 6

> ✅ **Đáp án đúng:** **C** (ECMAScript 6)
>
> 💡 **Giải thích:** ES6 là viết tắt của ECMAScript 6, phiên bản tiêu chuẩn của ngôn ngữ JavaScript được phát hành năm 2015, mang lại nhiều tính năng mới như arrow function, let/const, class, v.v.

---

### Câu 27

What is React-Bootstrap?

- **A. It combines the flexibility and power of the Bootstrap framework with the dynamic nature of React** ✅
- B. It is a programming language used for back-end development.
- C. It is a database management system for React applications.
- D. It is a version control system for React projects.

> ✅ **Đáp án đúng:** **A** (It combines the flexibility and power of the Bootstrap framework with the dynamic nature of React)
>
> 💡 **Giải thích:** React-Bootstrap là thư viện UI cho React, cung cấp các thành phần giao diện đã được thiết kế sẵn theo phong cách Bootstrap, giúp phát triển giao diện nhanh và nhất quán. Không phải ngôn ngữ, hệ quản trị CSDL hay hệ thống kiểm soát phiên bản.

---

### Câu 28

Answer
(Choose 1
answer)

A
B
C
D

Back
Next

What is the first step in migrating from useState to useReducer with this code?
const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
}

- A. Replace setCount with dispatch in the existing code.
- B. Move all state update logic into a reducer function.
- **C. Define the reducer function and use dispatch to replace setCount.** ✅
- D. Import useReducer without changing any code.

> ✅ **Đáp án đúng:** **C** (Define the reducer function and use dispatch to replace setCount.)
>
> 💡 **Giải thích:** To migrate from useState to useReducer, first define a reducer function that handles state transitions, then replace setCount with dispatch. Option C correctly sequences these steps. A and B are incomplete; D ignores necessary logic changes.

---

### Câu 29

Which class is used to create a button in Bootstrap 5?

- **A. .btn** ✅
- B. .button
- C. .btn-primary
- D. .btn-default

> ✅ **Đáp án đúng:** **A** (.btn)
>
> 💡 **Giải thích:** Trong Bootstrap 5, lớp .btn là lớp cơ bản để tạo nút. Các lớp như .btn-primary, .btn-default là lớp mở rộng để định dạng màu sắc, không phải lớp cơ bản để tạo nút.

---

### Câu 30

What does the catch method do in a promise chain?

- A. It handles the resolved value
- **B. It handles errors** ✅
- C. It pauses the execution
- D. It converts the promise to a synchronous function

> ✅ **Đáp án đúng:** **B** (It handles errors)
>
> 💡 **Giải thích:** Trong chuỗi promise, .catch() dùng để bắt và xử lý lỗi (rejected promise). Nó không xử lý giá trị resolve (A), không tạm dừng (C), và không chuyển promise thành hàm đồng bộ (D).

---

### Câu 31

In Redux, how do you update the state immutably?

- A. By directly modifying the state object
- B. By using the setState() method
- C. By using the splice() method
- **D. By creating a new copy of the state object** ✅

> ✅ **Đáp án đúng:** **D** (By creating a new copy of the state object)
>
> 💡 **Giải thích:** Redux yêu cầu cập nhật state một cách bất biến (immutable). Không được sửa trực tiếp state, mà phải tạo bản sao mới với thay đổi — thường dùng spread operator hoặc immer.

---

### Câu 32

Answer
(Choose 1
answer)
A
B
C
D

In React, what is the role of Suspense?

- A. To handle errors in asynchronous rendering
- **B. To control the rendering of lazy components** ✅
- C. To manage state in functional components
- D. To handle network requests and API calls

> ✅ **Đáp án đúng:** **B** (To control the rendering of lazy components)
>
> 💡 **Giải thích:** Suspense trong React dùng để hiển thị fallback (như loading spinner) khi các component được lazy load chưa sẵn sàng. Nó không xử lý lỗi, quản lý state hay gọi API trực tiếp.

---

### Câu 33

Answer
(Choose 1
answer)
A
B
C
D

Assess the impact of using too many lazy components in a React application. Which statement is true?

- A. It will improve the performance of the application
- B. It will reduce the number of HTTP requests
- **C. It may lead to several HTTP requests being made simultaneously** ✅
- D. It will ensure that all components are loaded upfront

> ✅ **Đáp án đúng:** **C** (It may lead to several HTTP requests being made simultaneously)
>
> 💡 **Giải thích:** Lazy loading trong React tải component khi cần, nhưng nếu dùng quá nhiều, có thể gây ra nhiều request HTTP đồng thời khi người dùng tương tác nhanh, làm giảm hiệu suất và tăng tải server.

---

### Câu 34

Which code snippet demonstrates how to declare a basic route in React Router?

- **A. `<Route path="/about" component={About} />`** ✅
- B. `<Link to="/about">About</Link>`
- C. `import { BrowserRouter as Router, Route } from "react-router-dom";`
- D. `import { Link, Route } from "react-router-dom";`

> ✅ **Đáp án đúng:** **A** (`<Route path="/about" component={About} />`)
>
> 💡 **Giải thích:** In React Router (v5), the <Route> component is used to define a route mapping a path to a component. Option A correctly declares a basic route. Option B is for navigation, not route declaration. Options C and D are import statements, not route declarations.

---

### Câu 35

What is the role of HTTP response codes in client-server communication?

- **A. To indicate the status of the HTTP request** ✅
- B. To manage state within a component
- C. To handle server-side logic
- D. To manage routing in a React application

> ✅ **Đáp án đúng:** **A** (To indicate the status of the HTTP request)
>
> 💡 **Giải thích:** HTTP response codes (e.g., 200 OK, 404 Not Found) inform the client whether the request succeeded, failed, or requires further action. They are part of the HTTP protocol’s status reporting mechanism, not for state management, routing, or server logic.

---

### Câu 36

What is the purpose of package.json in a Node.js project?

- **A. It defines the project's dependencies and scripts** ✅
- B. It contains the source code of the project
- C. It configures the Node.js environment
- D. It manages the project's build process

> ✅ **Đáp án đúng:** **A** (It defines the project's dependencies and scripts)
>
> 💡 **Giải thích:** Tệp package.json trong Node.js dùng để khai báo thông tin dự án, các dependency (thư viện phụ thuộc) và các script (lệnh chạy như start, test...). Đây là tệp cấu hình cốt lõi của dự án Node.js.

---

### Câu 37

Answer (Choose 1
answer)
A
B
C
D

How do you create a responsive grid layout using Bootstrap?

- A. By using the `<div class="grid">` element.
- B. By applying the `.responsive-grid` class to the container element.
- **C. By using the `.row` and `.col-*-*` classes to create rows and columns.** ✅
- D. By manually specifying the width of each element using CSS.

> ✅ **Đáp án đúng:** **C** (By using the `.row` and `.col-*-*` classes to create rows and columns.)
>
> 💡 **Giải thích:** Bootstrap dùng hệ thống grid với `.row` chứa các `.col-*-*` để tạo layout responsive. Không dùng `<div class="grid">` (A), không có class `.responsive-grid` (B), không nên dùng CSS thủ công (D).

---

### Câu 38

[Using Bootstrap] How does the for attribute in the `<label>` element work, and why is it important in forms?
(`<label for="exampleFormControlInput1" class="form-label">Email address</label>`)

- A. It styles the label based on form control types
- **B. It links the label to the form control via the control's id, improving accessibility** ✅
- C. It is used for adding inline form validation
- D. It triggers JavaScript events when the form is submitted

> ✅ **Đáp án đúng:** **B** (It links the label to the form control via the control's id, improving accessibility)
>
> 💡 **Giải thích:** Thuộc tính 'for' trong thẻ <label> liên kết nhãn với điều khiển form thông qua id của điều khiển, giúp người dùng sử dụng màn hình đọc (screen reader) dễ dàng hơn — tăng khả năng truy cập (accessibility).

---

### Câu 39

What is the purpose of React Hooks?

- A. Hooks are functions that are part of the React library.
- **B. React didn't have a simple way to share reusable functionality between components.** ✅
- C. Solutions such as higher-order components and render props.
- D. Using classes to be unnecessarily confusing and verbose.

> ✅ **Đáp án đúng:** **B** (React didn't have a simple way to share reusable functionality between components.)
>
> 💡 **Giải thích:** Mục đích chính của React Hooks là giải quyết vấn đề chia sẻ logic có thể tái sử dụng giữa các component mà không cần dùng class hay HOCs, giúp code ngắn gọn và dễ bảo trì hơn.

---

### Câu 40

What is the correct way to declare PropTypes for a component in React?

- **A. Component.propTypes = { ... }** ✅
- B. Component.typeCheck = { ... }
- C. Component.props = { ... }
- D. Component.checkProps = { ... }

> ✅ **Đáp án đúng:** **A** (Component.propTypes = { ... })
>
> 💡 **Giải thích:** Trong React (trước React 15.5), PropTypes được khai báo bằng cách gán đối tượng vào Component.propTypes. Các lựa chọn khác không tồn tại trong API React.

---

### Câu 41

Which React-Bootstrap component is used to display a popup dialog with customizable content?

- **A. Modal** ✅
- B. Checkbox
- C. Button
- D. Card

> ✅ **Đáp án đúng:** **A** (Modal)
>
> 💡 **Giải thích:** Trong React-Bootstrap, component `Modal` được dùng để hiển thị hộp thoại popup với nội dung tùy chỉnh. Các component khác như Checkbox, Button, Card không có chức năng này.

---

### Câu 42

What is the command to start json-server and specify the JSON file to be served?

- A. npm start
- B. json-server start
- **C. npx json-server --watch data.json** ✅
- D. node server.js

> ✅ **Đáp án đúng:** **C** (npx json-server --watch data.json)
>
> 💡 **Giải thích:** Lệnh đúng để khởi động json-server và theo dõi file JSON là 'npx json-server --watch data.json'. Đây là cú pháp chuẩn được tài liệu chính thức của json-server khuyến nghị.

---

### Câu 43

What is the purpose of the componentDidMount method in React?

- **A. It is called after the component's render method has been executed.** ✅
- B. It is called before the component's render method is executed.
- C. It is called when the component is about to be unmounted from the DOM.
- D. It is called when the component is about to be updated and re-rendered.

> ✅ **Đáp án đúng:** **A** (It is called after the component's render method has been executed.)
>
> 💡 **Giải thích:** componentDidMount is a React lifecycle method called after the component is rendered to the DOM, making it ideal for side effects like API calls. It’s not called before render (B), before unmount (C), or before update (D).

---

### Câu 44

How can you access the state and dispatch from Context in a child component?

- A. `const [state, dispatch] = useContext(CountContext);`
- B. `const { state, dispatch } = CountContext;`
- **C. `const { state, dispatch } = useContext(CountContext);`** ✅
- D. `const state = CountContext.state;`

> ✅ **Đáp án đúng:** **C** (`const { state, dispatch } = useContext(CountContext);`)
>
> 💡 **Giải thích:** Trong React, để truy cập state và dispatch từ Context trong component con, ta dùng useContext và destructuring object trả về. Câu A sai vì không dùng array destructuring cho Context. Câu B sai vì không gọi useContext. Câu D sai vì không thể truy cập trực tiếp qua tên Context.

---

### Câu 45

What is event pooling in React?

- **A. The process of reusing event objects for performance optimization.** ✅
- B. The process of creating multiple event objects for each event.
- C. The process of cleaning up event objects after they are used.
- D. The process of handling events in a pool of event handlers.

> ✅ **Đáp án đúng:** **A** (The process of reusing event objects for performance optimization.)
>
> 💡 **Giải thích:** Event pooling trong React là kỹ thuật tái sử dụng đối tượng sự kiện để giảm chi phí tạo đối tượng mới, từ đó tối ưu hiệu suất — đặc biệt quan trọng trong các ứng dụng lớn.

---

### Câu 46

Which of the following best explains the purpose of the tailwind.config.js file?

- A. To configure server-side rendering
- **B. To define custom utility classes and paths to template files** ✅
- C. To manage JavaScript dependencies
- D. To set up routing for the application

> ✅ **Đáp án đúng:** **B** (To define custom utility classes and paths to template files)
>
> 💡 **Giải thích:** Tệp tailwind.config.js dùng để cấu hình Tailwind CSS: định nghĩa lớp tiện ích tùy chỉnh, chỉ định đường dẫn đến các tệp mẫu, và điều chỉnh chủ đề — không liên quan đến SSR, dependency hay routing.

---

### Câu 47

What does REST stand for?

- **A. Representational State Transfer** ✅
- B. Representational State Transmission
- C. Resource State Transfer
- D. Resource State Transmission

> ✅ **Đáp án đúng:** **A** (Representational State Transfer)
>
> 💡 **Giải thích:** REST là viết tắt của Representational State Transfer — mô hình kiến trúc phần mềm phổ biến cho API web, được Roy Fielding định nghĩa năm 2000.

---

### Câu 48

How would you correctly convert the following HTML code to JSX?
<h1>Hedy Lamarr's Todos</h1>
<img
src="https://i.imgur.com/yXOvdOs.jpg"
alt="Hedy Lamarr"
class="photo"
/>
<ul>
<li>Invent new traffic lights
<li>Rehearse a movie scene
<li>Improve the spectrum technology
</ul>

- **A. <>
  <h1>Hedy Lamarr's Todos</h1>
  <img
  src="https://i.imgur.com/yXOvdOs.jpg"
  alt="Hedy Lamarr"
  className="photo"
  />
  <ul>
  <li>Invent new traffic lights</li>
  <li>Rehearse a movie scene</li>
  <li>Improve the spectrum technology</li>
  </ul>
  </>** ✅
- B. <>
  <h1>Hedy Lamarr's Todos</h1>
  <img
  src="https://i.imgur.com/yXOvdOs.jpg"
  alt="Hedy Lamarr"
  class="photo"
  >
  <ul>
  <li>Invent new traffic lights
  <li>Rehearse a movie scene
  <li>Improve the spectrum technology
  </ul>
  </>
- C. <>
  <h1>Hedy Lamarr's Todos</h1>
  <img
  src="https://i.imgur.com/yXOvdOs.jpg"
  alt="Hedy Lamarr"
  class="photo"
  />
  <ul>
  <li>Invent new traffic lights
  <li>Rehearse a movie scene

> ✅ **Đáp án đúng:** **A** (<> <h1>Hedy Lamarr's Todos</h1> <img src="https://i.imgur.com/yXOvdOs.jpg" alt="Hedy Lamarr" className="photo" /> <ul> <li>Invent new traffic lights</li> <li>Rehearse a movie scene</li> <li>Improve the spectrum technology</li> </ul> </>)
>
> 💡 **Giải thích:** JSX yêu cầu thuộc tính class phải đổi thành className, và các thẻ <li> phải đóng đúng cách (có </li>). Đáp án A là duy nhất sửa đúng cả hai lỗi này và giữ cấu trúc hợp lệ.

---

### Câu 49

How would you correctly convert the following HTML code to JSX?
<h1>Hedy Lamarr's Todos</h1>
<img
src="https://i.imgur.com/yXOvOdSs.jpg"
alt="Hedy Lamarr"
class="photo"
/>
<ul>
  <li>Invent new traffic lights</li>
  <li>Rehearse a movie scene</li>
  <li>Improve the spectrum technology</li>
</ul>

- **A. <>
  <h1>Hedy Lamarr's Todos</h1>
  <img
  src="https://i.imgur.com/yXOvOdSs.jpg"
  alt="Hedy Lamarr"
  className="photo"
  />
  <ul>
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve the spectrum technology</li>
  </ul>
  </>** ✅
- B. <>
  <h1>Hedy Lamarr's Todos</h1>
  <img
  src="https://i.imgur.com/yXOvOdSs.jpg"
  alt="Hedy Lamarr"
  class="photo"
  >
  <ul>
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve the spectrum technology</li>
  </ul>
  </>
- C. <>
  <h1>Hedy Lamarr's Todos</h1>
  <img
  src="https://i.imgur.com/yXOvOdSs.jpg"
  alt="Hedy Lamarr"
  class="photo"
  />
  <ul>
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene

> ✅ **Đáp án đúng:** **A** (<> <h1>Hedy Lamarr's Todos</h1> <img src="https://i.imgur.com/yXOvOdSs.jpg" alt="Hedy Lamarr" className="photo" /> <ul>   <li>Invent new traffic lights</li>   <li>Rehearse a movie scene</li>   <li>Improve the spectrum technology</li> </ul> </>)
>
> 💡 **Giải thích:** Trong JSX, thuộc tính 'class' phải đổi thành 'className'. Câu A đúng vì giữ nguyên cấu trúc HTML, chỉ sửa 'class' → 'className', và đóng thẻ <img /> đúng cách. Câu B thiếu '/' đóng thẻ, C bị cắt ngang.

---

### Câu 50

Which of the following correctly passes an object as a prop to a child component?

- A. const user = { name: "Hedy", age: 35 };
  
  function ParentComponent() {
    return <ChildComponent user={user.toString()} />;
  }
- B. const user = { name: "Hedy", age: 35 };
  
  function ParentComponent() {
    return <ChildComponent user="user" />;
  }
- C. const user = { name: "Hedy", age: 35 };
  
  function ParentComponent() {
    return <ChildComponent user={"user"} />;
  }
- **D. const user = { name: "Hedy", age: 35 };
  
  function ParentComponent() {
    return <ChildComponent user={user} />;
  }** ✅

> ✅ **Đáp án đúng:** **D** (const user = { name: "Hedy", age: 35 }; function ParentComponent() {   return <ChildComponent user={user} />; })
>
> 💡 **Giải thích:** Trong React, để truyền object như prop, phải dùng ngoặc nhọn {user} — không dùng string hay toString(). Đây là cách đúng để truyền dữ liệu nguyên bản.

---

### Câu 51

Which of the following correctly passes an object as a prop to a child component?

- A. const user = { name: "Hedy", age: 35 };
  
  function ParentComponent() {
    return <ChildComponent user={user.toString()} />;
  }
- B. const user = { name: "Hedy", age: 35 };
  
  function ParentComponent() {
    return <ChildComponent user="user" />;
  }
- C. const user = { name: "Hedy", age: 35 };
  
  function ParentComponent() {
    return <ChildComponent user="{user}" />;
  }
- **D. const user = { name: "Hedy", age: 35 };
  
  function ParentComponent() {
    return <ChildComponent user={user} />;
  }** ✅

> ✅ **Đáp án đúng:** **D** (const user = { name: "Hedy", age: 35 }; function ParentComponent() {   return <ChildComponent user={user} />; })
>
> 💡 **Giải thích:** Trong React, để truyền một object như prop, phải dùng dấu ngoặc nhọn {user} để truyền trực tiếp object, không dùng chuỗi hay toString(). Cách D là đúng vì nó truyền object user nguyên vẹn vào component con.

---

### Câu 52

What is the difference between controlled and uncontrolled components in React-Bootstrap?

- **A. Controlled components are stateless and rely on external state management, while uncontrolled components manage their own state internally.** ✅
- B. Controlled components have predefined behavior and cannot be customized, while uncontrolled components offer more flexibility.
- C. Controlled components are faster and more efficient than uncontrolled components.
- D. Uncontrolled components are recommended for complex forms, while controlled components are suitable for simple forms.

> ✅ **Đáp án đúng:** **A** (Controlled components are stateless and rely on external state management, while uncontrolled components manage their own state internally.)
>
> 💡 **Giải thích:** Trong React, controlled components có state được quản lý bởi cha (external state), còn uncontrolled components tự quản lý state bên trong (vd: dùng ref). Không liên quan đến tốc độ hay độ phức tạp form.

---

### Câu 53

What is the difference between controlled and uncontrolled components in React-Bootstrap?

- **A. Controlled components are stateless and rely on external state management, while uncontrolled components manage their own state internally.** ✅
- B. Controlled components have predefined behavior and cannot be customized, while uncontrolled components offer more flexibility.
- C. Controlled components are faster and more efficient than uncontrolled components.
- D. Uncontrolled components are recommended for complex forms, while controlled components are suitable for simple forms.

> ✅ **Đáp án đúng:** **A** (Controlled components are stateless and rely on external state management, while uncontrolled components manage their own state internally.)
>
> 💡 **Giải thích:** Controlled components trong React (bao gồm React-Bootstrap) có state được quản lý bởi cha (thường qua useState), trong khi uncontrolled components tự quản lý state bên trong (dùng ref). Đây là khái niệm cốt lõi trong React form handling.

---

### Câu 54

What happens if a component tries to consume a context that has not been provided higher up in the
component tree?

- **A. The component receives a default value specified in the context definition.** ✅
- B. The component throws an error.
- C. The component receives an empty object as the context value.
- D. The component receives null as the context value.

> ✅ **Đáp án đúng:** **A** (The component receives a default value specified in the context definition.)
>
> 💡 **Giải thích:** Trong React, khi một component sử dụng useContext mà không có Provider nào cung cấp giá trị ở trên cây, nó sẽ nhận giá trị mặc định đã được định nghĩa khi tạo Context (React.createContext(defaultValue)). Không ném lỗi, không trả null hay object rỗng nếu có default value.

---

## 2. Đề 06: Kì SU25 — Đề 2 (50 câu)

### Câu 1

Kizspy | Question: 1

(Choose 1 answer)

What is the purpose of the initial state parameter in a Redux reducer function?

- A. To define the structure of the Redux store
- B. To specify the actions that can be dispatched
- C. To handle asynchronous operations
- **D. To define the initial state of the reducer** ✅

> ✅ **Đáp án đúng:** **D** (To define the initial state of the reducer)
>
> 💡 **Giải thích:** Tham số trạng thái ban đầu trong reducer Redux dùng để xác định trạng thái khởi tạo của reducer đó, giúp Redux biết giá trị ban đầu khi store được tạo.

---

### Câu 2

Kizspy | Question: 2

(Choose 1 answer)

Which of the following statements about reducers in Redux is true?

- A. Reducers can only be used with React class components, not functional components.
- B. Reducers are responsible for dispatching actions.
- C. Reducers should have side effects such as API calls or database interactions.
- **D. Reducers must be pure functions with no side effects.** ✅

> ✅ **Đáp án đúng:** **D** (Reducers must be pure functions with no side effects.)
>
> 💡 **Giải thích:** Trong Redux, reducer phải là hàm thuần khiết (pure function) — không có side effect, không gọi API, không thay đổi state trực tiếp — để đảm bảo tính dự đoán và dễ kiểm thử.

---

### Câu 3

Question: 3

(Choose 1 answer)

Evaluate the benefits of using Redux Thunk middleware in a Redux application. Which of the following is NOT a benefit?

- A. Allows for handling asynchronous actions
- B. Simplifies the process of making API calls within action creators
- **C. Ensures that all actions are synchronous** ✅
- D. Enables conditional dispatching of actions

> ✅ **Đáp án đúng:** **C** (Ensures that all actions are synchronous)
>
> 💡 **Giải thích:** Redux Thunk cho phép xử lý hành động bất đồng bộ (asynchronous), nên việc 'đảm bảo tất cả hành động là đồng bộ' là KHÔNG đúng — đây là đáp án sai cần chọn theo yêu cầu câu hỏi.

---

### Câu 4

Question: 4

(Choose 1 answer)

Which of the following statements about Redux selectors is true?

- A. Selectors are responsible for dispatching actions
- B. Selectors are used to modify the Redux store directly
- **C. Selectors are pure functions that derive specific data from the Redux store** ✅
- D. Selectors are only used in React class components

> ✅ **Đáp án đúng:** **C** (Selectors are pure functions that derive specific data from the Redux store)
>
> 💡 **Giải thích:** Redux selectors là hàm thuần túy (pure functions) dùng để trích xuất dữ liệu cụ thể từ store, không thay đổi store hay dispatch action.

---

### Câu 5

Question: 5

(Choose 1 answer)

How can you configure Tailwind CSS in a Next.js project?

- A. By importing a CSS file directly in the component.
- **B. By installing the Tailwind CSS package and creating a configuration file.** ✅
- C. By using a CDN link in the HTML file.
- D. By installing a Tailwind CSS plugin for Next.js.

> ✅ **Đáp án đúng:** **B** (By installing the Tailwind CSS package and creating a configuration file.)
>
> 💡 **Giải thích:** Trong dự án Next.js, Tailwind CSS được cấu hình bằng cách cài đặt gói tailwindcss và các phụ thuộc liên quan, sau đó tạo file tailwind.config.js để tùy chỉnh. Không dùng CDN hay plugin riêng biệt.

---

### Câu 6

Kizspy | Question: 6

(Choose 1 answer)

What are the key features of Next.js?

- **A. Server-side rendering, Static Site Generation, Image Optimization, Built-in Routing.** ✅
- B. Database integration, code debugging, and form validation.
- C. CSS styling, version control, and error handling.
- D. Package management, command-line interface, and testing framework.

> ✅ **Đáp án đúng:** **A** (Server-side rendering, Static Site Generation, Image Optimization, Built-in Routing.)
>
> 💡 **Giải thích:** Next.js là framework React nổi bật với các tính năng: SSR (Server-Side Rendering), SSG (Static Site Generation), tối ưu hình ảnh và hệ thống routing tích hợp. Các lựa chọn khác đề cập đến chức năng không phải đặc trưng của Next.js.

---

### Câu 7

Kizspy | Question: 7

(Choose 1 answer)

Which method is used to update the state in a class component?

- **A. setState** ✅
- B. useState
- C. updateState
- D. changeState

> ✅ **Đáp án đúng:** **A** (setState)
>
> 💡 **Giải thích:** Trong React, để cập nhật state trong component lớp (class component), ta dùng phương thức setState(). useState() dùng cho functional component. updateState và changeState không tồn tại trong React.

---

### Câu 8

Which method is commonly used to transform an array of data into a list of components in React?

- A. const items = ["Apple", "Banana", "Cherry"];
  const listItems = items.filter(item => <li>{item}</li>);
- **B. const items = ["Apple", "Banana", "Cherry"];
  const listItems = items.map(item => <li>{item}</li>);** ✅
- C. const items = ["Apple", "Banana", "Cherry"];
  const listItems = items.forEach(item => <li>{item}</li>);
- D. const items = ["Apple", "Banana", "Cherry"];
  const listItems = items.reduce(item => <li>{item}</li>);

> ✅ **Đáp án đúng:** **B** (const items = ["Apple", "Banana", "Cherry"]; const listItems = items.map(item => <li>{item}</li>);)
>
> 💡 **Giải thích:** Trong React, phương thức .map() được dùng để biến đổi mỗi phần tử trong mảng thành một phần tử JSX (component). .filter() lọc phần tử, .forEach() không trả về mảng mới, .reduce() dùng để tích lũy giá trị — không phù hợp để render danh sách.

---

### Câu 9

Question: 9

(Choose 1 answer)

How would you combine `filter()` and `map()` to display only fruits with names longer than 5 characters and transform them into uppercase?

- A. const items = ["Apple", "Banana", "Cherry", "Avocado"];
  
  return (
    <ul>
      {
        items.filter(item => item.length > 5).map(item => <li>{item}</li>)
      }
    </ul>
  );
- **B. const items = ["Apple", "Banana", "Cherry", "Avocado"];
  
  return (
    <ul>
      {
        items.filter(item => item.length > 5)
        .map(item => <li key={item}>{item.toUpperCase()}</li>)
      }
    </ul>
  );** ✅
- C. const items = ["Apple", "Banana", "Cherry", "Avocado"];
  
  return (
    <ul>
      {
        items.map(item => <li key={item}>{item}</li>).filter(item => item.length > 5)
      }
    </ul>
  );
- D. const items = ["Apple", "Banana", "Cherry", "Avocado"];
  
  return (
    <ul>
      {
        items.map(item => item.toUpperCase()).filter(item => item.length > 5)
      }
    </ul>
  );

> ✅ **Đáp án đúng:** **B** (const items = ["Apple", "Banana", "Cherry", "Avocado"]; return (   <ul>     {       items.filter(item => item.length > 5)       .map(item => <li key={item}>{item.toUpperCase()}</li>)     }   </ul> );)
>
> 💡 **Giải thích:** Đúng vì: (1) filter() trước để lọc các fruit có tên dài hơn 5 ký tự, (2) map() sau để chuyển thành chữ hoa và render <li> với key hợp lệ. Option A thiếu toUpperCase(), C và D đảo thứ tự hoặc thiếu key và uppercase.

---

### Câu 10

Kizspy | Question: 10

(Choose 1 answer)

How do you define a Type validator in PropTypes for a prop called "age" that should be a number?

- A. age: PropTypes.string
- **B. age: PropTypes.number** ✅
- C. age: PropTypes.bool
- D. age: PropTypes.object

> ✅ **Đáp án đúng:** **B** (age: PropTypes.number)
>
> 💡 **Giải thích:** Trong PropTypes, để xác định prop 'age' là kiểu số, ta dùng PropTypes.number. Các lựa chọn khác là kiểu string, bool, object — không phù hợp với yêu cầu.

---

### Câu 11

Kizspy | Question: 11

(Choose 1 answer)

What happens if a prop fails the validation defined by a simple property validator?

- **A. An error will be thrown during runtime.** ✅
- B. The prop will be automatically converted to the expected type.
- C. The component will continue to function normally.
- D. The validation will be bypassed, and the prop will be accepted.

> ✅ **Đáp án đúng:** **A** (An error will be thrown during runtime.)
>
> 💡 **Giải thích:** Khi prop không vượt qua validation trong React/Vue, framework thường ném lỗi runtime để cảnh báo nhà phát triển — giúp phát hiện sớm lỗi dữ liệu đầu vào, đảm bảo tính đúng đắn của component.

---

### Câu 12

Kizspy | Question: 12

(Choose 1 answer)

What is the purpose of PropTypes?

- **A. To ensure type safety in React components.** ✅
- B. To improve performance in React applications.
- C. To handle asynchronous operations in React.
- D. To enable code reusability in React components.

> ✅ **Đáp án đúng:** **A** (To ensure type safety in React components.)
>
> 💡 **Giải thích:** PropTypes trong React dùng để kiểm tra kiểu dữ liệu của props được truyền vào component, giúp phát hiện lỗi sớm và đảm bảo tính an toàn kiểu dữ liệu.

---

### Câu 13

Kizspy | Question: 13

(Choose 1 answer)

How do you create navigation links in React Router?

- A. Using the `<Switch>` component
- **B. Using the `<Link>` component** ✅
- C. Using the `<Route>` component
- D. Using the `<Navigate>` component

> ✅ **Đáp án đúng:** **B** (Using the `<Link>` component)
>
> 💡 **Giải thích:** Trong React Router, để tạo liên kết điều hướng, ta dùng component <Link> thay vì thẻ <a> thông thường. Component này ngăn trình duyệt tải lại trang và cho phép điều hướng client-side.

---

### Câu 14

Question: 14

(Choose 1 answer)

Which code snippet demonstrates how to handle a route parameter in React Router?

- **A. `<Route path="/users/:id" component={UserDetail} />`** ✅
- B. `<Link to="/users">Users</Link>`
- C. import { BrowserRouter as Router, Route } from "react-router-dom";
- D. import { Link, Route } from "react-router-dom";

> ✅ **Đáp án đúng:** **A** (`<Route path="/users/:id" component={UserDetail} />`)
>
> 💡 **Giải thích:** Trong React Router, để xử lý tham số route (ví dụ: :id), ta dùng cú pháp <Route path="/users/:id" component={UserDetail} />. Các lựa chọn khác không liên quan đến việc xử lý tham số route.

---

### Câu 15

Kizspy | Question: 15

(Choose 1 answer)

Create a React component that uses the Suspense component to display a fallback while loading a lazily loaded component. Which code snippet is correct?

- **A. import React, { lazy, Suspense } from 'react';
  const MyComponent = lazy(() => import('./MyComponent'));
  function App() { return ( <Suspense fallback={<div>Loading...</div>}> <MyComponent /> </Suspense> ); }
  export default App;** ✅
- B. import React, { Suspense } from 'react';
  const MyComponent = import('./MyComponent');
  function App() { return ( <Suspense fallback={<div>Loading...</div>}> <MyComponent /> </Suspense> ); }
  export default App;
- C. import React, { lazy } from 'react';
  const MyComponent = lazy('./MyComponent');
  function App() { return ( <div fallback={<div>Loading...</div>}> <MyComponent /> </div> ); }
  export default App;
- D. import React from 'react';
  const MyComponent = React.lazy(() => import('./MyComponent'));
  function App() { return ( <React.Suspense> <MyComponent /> </React.Suspense> ); }
  export default App;

> ✅ **Đáp án đúng:** **A** (import React, { lazy, Suspense } from 'react'; const MyComponent = lazy(() => import('./MyComponent')); function App() { return ( <Suspense fallback={<div>Loading...</div>}> <MyComponent /> </Suspense> ); } export default App;)
>
> 💡 **Giải thích:** Correct React lazy loading: import lazy and Suspense, use lazy() with dynamic import, wrap component in <Suspense> with fallback. Option A follows React docs exactly. Others miss lazy(), wrong syntax, or omit fallback.

---

### Câu 16

Kizspy | Question: 16

(Choose 1 answer)

What is the primary architectural style used in designing web services that follow REST principles?

- A. SOAP (Simple Object Access Protocol)
- B. RPC (Remote Procedure Call)
- C. MVC (Model-View-Controller)
- **D. RESTful (Representational State Transfer)** ✅

> ✅ **Đáp án đúng:** **D** (RESTful (Representational State Transfer))
>
> 💡 **Giải thích:** Kiến trúc chính được sử dụng trong web services theo nguyên tắc REST là RESTful, tập trung vào tài nguyên và trạng thái đại diện.

---

### Câu 17

Kizspy | Question: 17

(Choose 1 answer)

What does the HTTP response code 404 indicate?

- A. OK
- B. Created
- **C. Not Found** ✅
- D. Internal Server Error

> ✅ **Đáp án đúng:** **C** (Not Found)
>
> 💡 **Giải thích:** Mã HTTP 404 là mã lỗi phổ biến nhất, báo hiệu tài nguyên yêu cầu không tồn tại trên máy chủ – tức là 'Not Found'.

---

### Câu 18

Question: 18

(Choose 1 answer)

What is the purpose of json-server in the context of setting up a server?

- A. To handle user input and interactions.
- B. To display the website content.
- **C. To provide a static web server for serving JSON data.** ✅
- D. To generate dynamic server responses.

> ✅ **Đáp án đúng:** **C** (To provide a static web server for serving JSON data.)
>
> 💡 **Giải thích:** json-server là công cụ tạo server REST giả lập từ file JSON, dùng để mô phỏng API trong phát triển frontend. Nó không xử lý tương tác người dùng hay tạo phản hồi động.

---

### Câu 19

Question: 19

(Choose 1 answer)

```javascript
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const port = 3000;

server.use(router);

server.listen(port, () => {
  console.log(`JSON server is running on port ${port}`);
});
```

What is the above code used for?

- **A. Create a dynamic server to serve JSON data.** ✅
- B. Create a dynamic web application using JSON data.
- C. Create a JSON file based on data from the server.
- D. Configure the development environment for the project using JSON.

> ✅ **Đáp án đúng:** **A** (Create a dynamic server to serve JSON data.)
>
> 💡 **Giải thích:** Mã JavaScript này sử dụng thư viện json-server để khởi tạo một server HTTP đơn giản, phục vụ dữ liệu từ file data.json. Nó không tạo ứng dụng web động hay cấu hình môi trường, mà chỉ serve JSON.

---

### Câu 20

Question: 20

(Choose 1 answer)

What are Higher-Order Components in React?

- **A. Advanced components.** ✅
- B. Components written in JavaScript.
- C. Components with multiple props.
- D. Components with multiple states.

> ✅ **Đáp án đúng:** **A** (Advanced components.)
>
> 💡 **Giải thích:** Higher-Order Components (HOC) trong React là các hàm nhận vào một component và trả về một component mới với chức năng được mở rộng — bản chất là component nâng cao, không phải chỉ là component có nhiều props hay state.

---

### Câu 21

Question: 21

(Choose 1 answer)

Select the code snippet that correctly defines a Higher-Order Component in React using an arrow function with a named function

- A. function withLogger(WrappedComponent) {
    return class extends React.Component {
      // HOC implementation
    };
  }
- **B. const withLogger = (WrappedComponent) => {
    return class extends React.Component {
      // HOC implementation
    };
  };** ✅
- C. const withLogger = (WrappedComponent) => {
    return function HOC() {
      // HOC implementation
    };
  };
- D. function withLogger(WrappedComponent) {
    return function HOC() {
      // HOC implementation
    };
  }

> ✅ **Đáp án đúng:** **B** (const withLogger = (WrappedComponent) => {   return class extends React.Component {     // HOC implementation   }; };)
>
> 💡 **Giải thích:** HOC trong React dùng arrow function để trả về một class component. Câu B đúng cú pháp và là cách phổ biến để định nghĩa HOC với arrow function.

---

### Câu 22

Kizspy | Question: 22

(Choose 1 answer)

Which methods are part of the Lifecycle in Class Components?

- **A. componentDidMount, componentDidUpdate, componentWillUnmount.** ✅
- B. render, setState, forceUpdate.
- C. constructor, render, componentWillUpdate.
- D. componentWillReceiveProps, shouldComponentUpdate, componentDidCatch.

> ✅ **Đáp án đúng:** **A** (componentDidMount, componentDidUpdate, componentWillUnmount.)
>
> 💡 **Giải thích:** Trong React Class Components, các phương thức lifecycle bao gồm componentDidMount (gọi sau khi render lần đầu), componentDidUpdate (gọi sau khi cập nhật), và componentWillUnmount (gọi trước khi unmount). Các lựa chọn khác chứa phương thức không phải lifecycle hoặc không đầy đủ.

---

### Câu 23

Kizspy | Question: 23

(Choose 1 answer)

Which React hook is used to manage state in functional components?

- A. useEffect
- B. useContext
- **C. useState** ✅
- D. useReducer

> ✅ **Đáp án đúng:** **C** (useState)
>
> 💡 **Giải thích:** useState là hook trong React dùng để quản lý state trong functional component. useEffect dùng để xử lý side effect, useContext để truy cập context, useReducer để quản lý state phức tạp hơn với reducer. Câu hỏi yêu cầu chọn hook quản lý state đơn giản — useState là đáp án đúng.

---

### Câu 24

Kizspy | Question: 24

(Choose 1 answer)

Which method can help ensure that updates in a function depend on the previous state in React?

- A. const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
- B. const [count, setCount] = useState(0);
  function increment() {
    setCount(count => count + 1);
  }
- **C. const [count, setCount] = useState(0);
  function increment() {
    setCount(prevCount => prevCount + 1);
  }** ✅
- D. const [count, setCount] = useState(0);
  function increment() {
    setCount(count - 1);
  }

> ✅ **Đáp án đúng:** **C** (const [count, setCount] = useState(0); function increment() {   setCount(prevCount => prevCount + 1); })
>
> 💡 **Giải thích:** Trong React, để đảm bảo cập nhật dựa trên trạng thái trước đó, nên dùng hàm callback với tham số prevCount. Cách này tránh lỗi khi nhiều lần gọi setCount trong cùng một chu kỳ render. Câu B cũng đúng về mặt logic, nhưng C rõ ràng hơn và là cách chuẩn được khuyến nghị.

---

### Câu 25

Kizspy | Question: 25

(Choose 1 answer)

What are the differences between useState and useReducer Hooks in React?

- **A. useState is used for managing simple state, while useReducer is used for complex state and state transitions.** ✅
- B. useState is a built-in Hook, while useReducer is a custom Hook.
- C. useState is used for class components, while useReducer is used for functional components.
- D. useState is for local component state, while useReducer is for global application state.

> ✅ **Đáp án đúng:** **A** (useState is used for managing simple state, while useReducer is used for complex state and state transitions.)
>
> 💡 **Giải thích:** useState phù hợp cho state đơn giản, useReducer dùng cho state phức tạp với nhiều action và logic chuyển trạng thái. Cả hai đều là built-in Hook, dùng cho functional component.

---

### Câu 26

Kizspy | Question: 26

(Choose 1 answer)

How would you create a custom Hook in React?

- **A. By defining a function that uses other built-in Hooks.** ✅
- B. By extending the React.Component class.
- C. By wrapping a class component with a functional component.
- D. By using the createCustomHook() function.

> ✅ **Đáp án đúng:** **A** (By defining a function that uses other built-in Hooks.)
>
> 💡 **Giải thích:** Custom Hook trong React là hàm bắt đầu bằng 'use', có thể gọi các Hook khác bên trong. Không cần kế thừa React.Component (B), không cần bao bọc component (C), và không có hàm createCustomHook() (D).

---

### Câu 27

Kizspy | Question: 27

(Choose 1 answer)

How can you safely remove an unnecessary dependency from an Effect?

- A. Remove all dependencies from the array.
- **B. Use an empty dependency array `[]` to ensure the Effect only runs once.** ✅
- C. Keep all dependencies and accept performance issues.
- D. Replace useEffect with useLayoutEffect.

> ✅ **Đáp án đúng:** **B** (Use an empty dependency array `[]` to ensure the Effect only runs once.)
>
> 💡 **Giải thích:** Trong React, để loại bỏ phụ thuộc không cần thiết, bạn có thể dùng mảng phụ thuộc rỗng `[]` để Effect chỉ chạy một lần khi component mount. Việc xóa hết phụ thuộc hoặc giữ tất cả đều sai vì có thể gây lỗi hoặc hiệu năng kém.

---

### Câu 28

Question: 28

(Choose 1 answer)

How can you access Chrome DevTools?

- **A. By pressing F12 or right-clicking and selecting "Inspect"** ✅
- B. By installing a Chrome extension
- C. By typing "chrome://devtools" in the address bar
- D. By opening the Chrome menu and selecting "DevTools"

> ✅ **Đáp án đúng:** **A** (By pressing F12 or right-clicking and selecting "Inspect")
>
> 💡 **Giải thích:** Cách phổ biến nhất để mở Chrome DevTools là nhấn F12 hoặc chuột phải → Inspect. Các cách khác không chính xác hoặc không phổ biến.

---

### Câu 29

Kizspy | Question: 29

(Choose 1 answer)

What are the key features of React?

- A. Two-way data binding
- **B. Virtual DOM** ✅
- C. SQL database integration
- D. Automatic styling

> ✅ **Đáp án đúng:** **B** (Virtual DOM)
>
> 💡 **Giải thích:** React nổi bật với Virtual DOM — một bản sao ảo của DOM thực, giúp tối ưu hiệu suất khi cập nhật giao diện. React không dùng two-way binding (Angular), không tích hợp SQL hay tự động styling.

---

### Câu 30

Question: 30

(Choose 1 answer)

How can you configure Git with your name and email address?

- **A. By running "git config --global user.name 'Your Name'" and "git config --global user.email 'Your Email'"** ✅
- B. By creating a .gitignore file
- C. By committing changes using "git commit -m"
- D. By pushing changes to a remote repository

> ✅ **Đáp án đúng:** **A** (By running "git config --global user.name 'Your Name'" and "git config --global user.email 'Your Email'")
>
> 💡 **Giải thích:** Để cấu hình Git với tên và email, người dùng dùng lệnh git config --global với các tham số user.name và user.email. Đây là bước thiết lập cơ bản trước khi commit.

---

### Câu 31

Question: 31

(Choose 1 answer)

Which method is used to perform enhanced array manipulation in ES6?

- **A. `map()`** ✅
- B. `forEach()`
- C. `reduce()`
- D. `filter()`

> ✅ **Đáp án đúng:** **A** (`map()`)
>
> 💡 **Giải thích:** ES6 introduced enhanced array methods like map(), filter(), reduce(), and forEach(). Among these, map() is specifically designed for transforming arrays by applying a function to each element, making it the most representative of enhanced manipulation.

---

### Câu 32

Kizspy | Question: 32

(Choose 1 answer)

How can you conditionally render content in JSX?

- A. By using the if statement
- B. By using the for loop
- **C. By using the ternary operator `{condition ? trueContent : falseContent}`** ✅
- D. By using the switch statement

> ✅ **Đáp án đúng:** **C** (By using the ternary operator `{condition ? trueContent : falseContent}`)
>
> 💡 **Giải thích:** Trong JSX, không thể dùng if/for trực tiếp trong return, nên dùng toán tử ba ngôi để render có điều kiện. Đây là cách phổ biến và được React khuyến nghị.

---

### Câu 33

Which feature of ES6 is used to iterate over the elements of an array?

- A. Spread syntax
- B. Destructuring assignment
- C. Arrow functions
- **D. for...of loop** ✅

> ✅ **Đáp án đúng:** **D** (for...of loop)
>
> 💡 **Giải thích:** Trong ES6, vòng lặp 'for...of' được dùng để lặp qua các phần tử của mảng (và các đối tượng iterable khác). Các lựa chọn khác như spread syntax, destructuring, arrow function không dùng để lặp qua phần tử mảng.

---

### Câu 34

Kizspy | Question: 34

(Choose 1 answer)

How does the Grid component in React-Bootstrap help in creating a responsive layout?

- **A. The Grid component allows you to define a flexible grid system with rows and columns that automatically adjusts based on the screen size.** ✅
- B. The Grid component provides pre-built responsive layouts that you can directly use in your application.
- C. The Grid component automatically resizes and repositions the elements based on the available space.
- D. The Grid component helps in aligning the elements vertically and horizontally on the page.

> ✅ **Đáp án đúng:** **A** (The Grid component allows you to define a flexible grid system with rows and columns that automatically adjusts based on the screen size.)
>
> 💡 **Giải thích:** Grid trong React-Bootstrap cung cấp hệ thống lưới linh hoạt với hàng và cột, tự động điều chỉnh kích thước theo kích cỡ màn hình — đây là nền tảng để xây dựng giao diện responsive, không phải chỉ căn chỉnh hay dùng layout có sẵn.

---

### Câu 35

Kizspy | Question: 35

(Choose 1 answer)

Which React-Bootstrap components are used to create navigation menus?

- **A. Navbars, Navs, Tabs** ✅
- B. Alert, Card
- C. Button, Checkbox
- D. Modal, Listbox

> ✅ **Đáp án đúng:** **A** (Navbars, Navs, Tabs)
>
> 💡 **Giải thích:** React-Bootstrap cung cấp các component như Navbars, Navs, Tabs để xây dựng menu điều hướng. Các component như Alert, Card, Button, Modal không dùng để tạo menu điều hướng.

---

### Câu 36

Kizspy | Question: 36

(Choose 1 answer)

```
<Container>
  <Row>
    <Col sm={6} md={4}>
      {/* Placeholder content */}
    </Col>
    <Col sm={6} md={8}>
      {/* Placeholder content */}
    </Col>
  </Row>
</Container>
```
How many columns will the code above display on a mobile screen?

- A. 1
- **B. 2** ✅
- C. 3
- D. 4

> ✅ **Đáp án đúng:** **B** (2)
>
> 💡 **Giải thích:** Trên màn hình di động (sm), mỗi Col có sm={6} → tổng 6+6=12 → hiển thị 2 cột. md chỉ áp dụng trên màn hình lớn hơn.

---

### Câu 37

How can you pass parameters to an event handler in React?

- A. Using the `bind()` method.
- **B. Using arrow functions.** ✅
- C. Using the `addEventListener()` method.
- D. Using the `this` keyword.

> ✅ **Đáp án đúng:** **B** (Using arrow functions.)
>
> 💡 **Giải thích:** Trong React, bạn có thể truyền tham số vào trình xử lý sự kiện bằng cách sử dụng hàm mũi tên (arrow function) để bao bọc hàm xử lý, giúp truyền tham số linh hoạt mà không cần bind hay this.

---

### Câu 38

Question: 38

(Choose 1 answer)

Create a React component that uses inline event handlers to log a message when a button is clicked. Which code snippet is correct?

- **A. class MyButton extends React.Component {
    render() {
      return (
        <button onClick={(e) => console.log('clicked', e)}>
          Click me
        </button>
      );
    }
  }** ✅
- B. class MyButton extends React.Component {
    render() {
      return (
        <button onClick={this.onClick}>
          Click me
        </button>
      );
    }
  }
- C. class MyButton extends React.Component {
    render() {
      return (
        <button onClick={this.onClick.bind(this)}>
          Click me
        </button>
      );
    }
  }
- D. class MyButton extends React.Component {
    render() {
      return (
        <button onClick={() => this.onClick()}>
          Click me
        </button>
      );
    }
  }

> ✅ **Đáp án đúng:** **A** (class MyButton extends React.Component {   render() {     return (       <button onClick={(e) => console.log('clicked', e)}>         Click me       </button>     );   } })
>
> 💡 **Giải thích:** Cách đúng để dùng inline event handler trong React là truyền hàm arrow trực tiếp vào onClick. Các lựa chọn B, C, D đều dùng phương thức class, không phải inline handler. Câu A là ví dụ chuẩn về inline handler.

---

### Câu 39

Kizspy | Question: 39

(Choose 1 answer)

Analyze the benefits of using synthetic events in React. Which of the following is NOT a benefit?

- A. Provides a consistent event interface across different browsers
- B. Contains information necessary for event propagation
- **C. Reduces the need for garbage collection** ✅
- D. Normalizes browser inconsistencies

> ✅ **Đáp án đúng:** **C** (Reduces the need for garbage collection)
>
> 💡 **Giải thích:** Synthetic events trong React giúp chuẩn hóa sự kiện giữa các trình duyệt, hỗ trợ lan truyền sự kiện và loại bỏ khác biệt trình duyệt — nhưng KHÔNG liên quan đến việc giảm thu gom rác.

---

### Câu 40

Question: 40

(Choose 1 answer)

Which of the following is a utility-first CSS framework that is often used with Next.js?

- A. Bootstrap
- B. Material-UI
- **C. Tailwind CSS** ✅
- D. Bulma

> ✅ **Đáp án đúng:** **C** (Tailwind CSS)
>
> 💡 **Giải thích:** Tailwind CSS là framework CSS theo kiểu utility-first, thường được dùng với Next.js để xây dựng giao diện linh hoạt và nhanh chóng. Bootstrap, Material-UI, Bulma không phải là utility-first.

---

### Câu 41

Kizspy | Question: 41

(Choose 1 answer)

What is Tailwind CSS?

- A. A JavaScript framework for building single-page applications.
- B. A programming language used for backend development.
- **C. A utility-first CSS framework for building responsive web interfaces.** ✅
- D. A database management system for storing CSS styles.

> ✅ **Đáp án đúng:** **C** (A utility-first CSS framework for building responsive web interfaces.)
>
> 💡 **Giải thích:** Tailwind CSS is a utility-first framework that provides low-level classes to build designs directly in HTML, enabling rapid, responsive UI development without writing custom CSS.

---

### Câu 42

Kizspy | Question: 42

(Choose 1 answer)

Which of the following is a feature of Next.js?

- A. A CSS framework for styling web applications.
- **B. A server-side rendering framework for React.** ✅
- C. A state management library for React applications.
- D. A testing framework for JavaScript applications.

> ✅ **Đáp án đúng:** **B** (A server-side rendering framework for React.)
>
> 💡 **Giải thích:** Next.js là một framework cho React, nổi bật với khả năng server-side rendering (SSR), giúp cải thiện SEO và hiệu suất tải trang. Nó không phải là thư viện quản lý trạng thái, framework CSS hay framework test.

---

### Câu 43

Question: 43

(Choose 1 answer)

What is the purpose of the `next/link` module in Next.js?

- A. It is used for handling form submissions.
- **B. It provides client-side routing capabilities.** ✅
- C. It is responsible for server-side rendering.
- D. It enables serverless function deployment.

> ✅ **Đáp án đúng:** **B** (It provides client-side routing capabilities.)
>
> 💡 **Giải thích:** Module `next/link` trong Next.js dùng để tạo liên kết giữa các trang với khả năng điều hướng phía client (client-side routing), giúp tránh tải lại toàn bộ trang, tăng hiệu suất và trải nghiệm người dùng.

---

### Câu 44

Question: 44

(Choose 1 answer)

How would you combine fluid and pixel widths behaviors in a grid layout using Bootstrap5?

- A. Use `.container-fluid` for the entire layout
- B. Combine `.container` with `.col-fluid`
- C. Use a fixed-width class with a media query
- **D. Use `.container-md` to apply a responsive container at the md breakpoint** ✅

> ✅ **Đáp án đúng:** **D** (Use `.container-md` to apply a responsive container at the md breakpoint)
>
> 💡 **Giải thích:** Trong Bootstrap 5, `.container-md` tạo container có chiều rộng cố định ở breakpoint md trở lên, và fluid (đầy màn hình) ở dưới md — kết hợp cả hai hành vi. Các lựa chọn khác không chính xác hoặc không tồn tại.

---

### Câu 45

Kizspy | Question: 45

(Choose 1 answer)

How does the Bootstrap grid system help in designing responsive websites?

- A. By providing pre-designed website templates.
- B. By automatically adjusting the font sizes based on the screen size.
- **C. By allowing the layout to adapt to different screen sizes using a 12-column responsive grid system.** ✅
- D. By optimizing the website for search engines.

> ✅ **Đáp án đúng:** **C** (By allowing the layout to adapt to different screen sizes using a 12-column responsive grid system.)
>
> 💡 **Giải thích:** Bootstrap grid system chia màn hình thành 12 cột linh hoạt, tự động điều chỉnh kích thước và vị trí các phần tử khi thay đổi kích thước màn hình, giúp thiết kế responsive hiệu quả.

---

### Câu 46

Kizspy | Question: 46

(Choose 1 answer)

What would happen if you didn't include the class="form-control" in your `<input>` element?

- A. The input would not be submitted with the form
- B. The input would fail client-side validation
- **C. The input field would revert to the browser's default styles** ✅
- D. The input field would become non-responsive

> ✅ **Đáp án đúng:** **C** (The input field would revert to the browser's default styles)
>
> 💡 **Giải thích:** Class 'form-control' là class của Bootstrap để định dạng input. Nếu không có, input sẽ dùng style mặc định của trình duyệt, không ảnh hưởng đến chức năng gửi form hay validation.

---

### Câu 47

Kizspy | Question: 47

(Choose 1 answer)

How can you define a route with multiple parameters, such as userId and postId?

- A. `<Route path="/user/userId/post/postId" component={UserPost} />`
- B. `<Route path="/user/:userId/:postId" component={UserPost} />`
- **C. `<Route path="/user/:userId/post/:postId" component={UserPost} />`** ✅
- D. `<Route path="/user?userId/post?postId" component={UserPost} />`

> ✅ **Đáp án đúng:** **C** (`<Route path="/user/:userId/post/:postId" component={UserPost} />`)
>
> 💡 **Giải thích:** Trong React Router, để định nghĩa route có nhiều tham số, dùng dấu : trước tên tham số. Cấu trúc '/user/:userId/post/:postId' là chuẩn xác để truyền cả userId và postId vào component UserPost.

---

### Câu 48

Kizspy | Question: 48

(Choose 1 answer)

What does the `fallback` prop in `Suspense` represent?

- **A. The component to display while the lazy component is loading** ✅
- B. The component to display when an error occurs during loading
- C. The component to display when the lazy component is rendered
- D. The component to display when `Suspense` is not supported

> ✅ **Đáp án đúng:** **A** (The component to display while the lazy component is loading)
>
> 💡 **Giải thích:** Trong React, prop `fallback` của `Suspense` dùng để hiển thị UI tạm thời trong khi component lazy đang được tải. Đây là hành vi chuẩn, không liên quan đến lỗi hay trình duyệt không hỗ trợ.

---

### Câu 49

Question: 49

(Choose 1 answer)

What is the correct way to wrap a lazy component with Suspense in React?

- A. `<Suspense loading={<Loading />}> <MyComponent /> </Suspense>`
- **B. `<Suspense fallback={<Loading />}> <MyComponent /> </Suspense>`** ✅
- C. `<Suspense wait={<Loading />}> <MyComponent /> </Suspense>`
- D. `<Suspense fallback={<Loading />} loading={<MyComponent />} />`

> ✅ **Đáp án đúng:** **B** (`<Suspense fallback={<Loading />}> <MyComponent /> </Suspense>`)
>
> 💡 **Giải thích:** Trong React, để bao bọc component lazy với Suspense, ta dùng thuộc tính `fallback` để chỉ định UI hiển thị khi component đang tải. Cú pháp đúng là `<Suspense fallback={...}>`. Các tùy chọn khác như `loading`, `wait` không tồn tại.

---

### Câu 50

Question: 50

(Choose 1 answer)

How do you define a dynamic route parameter in React Router?

- A. `<Route path="/user/id" component={UserProfile} />`
- **B. `<Route path="/user/:id" component={UserProfile} />`** ✅
- C. `<Route path="/user?=id" component={UserProfile} />`
- D. `<Route path="/user={id}" component={UserProfile} />`

> ✅ **Đáp án đúng:** **B** (`<Route path="/user/:id" component={UserProfile} />`)
>
> 💡 **Giải thích:** Trong React Router, tham số động được định nghĩa bằng dấu hai chấm (:) trước tên biến, ví dụ "/user/:id". Các cú pháp khác như "id", "?=id", hoặc "={id}" không hợp lệ trong React Router.

---

## 3. Đề 12: Kì FA25 — Đề Thi Chính Thức (50 câu)

### Câu 1

How can route parameters be defined in React Router?

- A. ```
  By using the params prop in the <Route> component
  ```
- B. By accessing them directly from the URL
- **C. ```
  By using the path prop with placeholders in the <Route> component
  ```** ✅
- D. By using the match object passed to the component

> ✅ **Đáp án đúng:** **C** (By using the path prop with placeholders in the <Route> component)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Trong React Router, tham số động của route (route parameters) được khai báo ngay trong thuộc tính `path` của `<Route>` bằng dấu hai chấm làm placeholder, ví dụ: `<Route path="/users/:userId" element={<User />} />`.

---

### Câu 2

Which prop is used to provide a unique identifier for elements in a list rendered by a component in React 18?

- **A. key** ✅
- B. id
- C. index
- D. ref

> ✅ **Đáp án đúng:** **A** (key)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Trong React, prop `key` cung cấp định danh duy nhất cho từng phần tử trong danh sách khi render bằng `.map()`, giúp thuật toán Reconciliation nhận biết phần tử nào thay đổi, thêm mới hay bị xóa.

---

### Câu 3

How would you use the useEffect Hook to fetch data from an API in a React component?

- A. useEffect(fetchData, []);
- **B. useEffect(() => fetchData(), []);** ✅
- C. useEffect(() => fetchData(), [fetchData]);
- D. useEffect(() => fetchData());

> ✅ **Đáp án đúng:** **B** (useEffect(() => fetchData(), []);)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Cách chuẩn để gọi hàm lấy dữ liệu 1 lần khi component mount là bọc lời gọi bên trong arrow function của `useEffect(() => { fetchData(); }, []);` với dependency array rỗng `[]`.

---

### Câu 4

What is the purpose of a router in web development?

- A. To handle database operations
- B. To manage user authentication
- **C. To handle navigation between different pages** ✅
- D. To style the user interface

> ✅ **Đáp án đúng:** **C** (To handle navigation between different pages)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Mục đích của Router trong phát triển web là quản lý việc điều hướng (navigation) giữa các trang/view khác nhau tương ứng với đường dẫn URL trên trình duyệt.

---

### Câu 5

Which HTTP method is typically used to retrieve data from a server?

- **A. GET** ✅
- B. POST
- C. PUT
- D. DELETE

> ✅ **Đáp án đúng:** **A** (GET)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Phương thức HTTP `GET` được sử dụng để truy xuất (lấy) dữ liệu từ server. `POST` để tạo mới, `PUT` để cập nhật toàn bộ, `DELETE` để xóa.

---

### Câu 6

Evaluate the differences between useMemo and useCallback hooks. Which statement is true?

- A. useMemo is used to memoize functions, while useCallback is used to memoize values
- **B. useMemo is used to memoize values, while useCallback is used to memoize functions** ✅
- C. Both useMemo and useCallback are used to memoize values
- D. Both useMemo and useCallback are used to memoize functions

> ✅ **Đáp án đúng:** **B** (useMemo is used to memoize values, while useCallback is used to memoize functions)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - `useMemo` thực thi hàm và ghi nhớ **giá trị trả về** (memoize values), còn `useCallback` ghi nhớ chính **tham chiếu hàm** (memoize functions) để tránh tạo lại hàm mới qua các lần render.

---

### Câu 7

What is the advantage of event pooling in React?

- **A. It reduces memory usage by reusing event objects.** ✅
- B. It improves event handling performance by creating new event objects for each event.
- C. It simplifies event handling by providing a pool of event handlers.
- D. It allows for better management of event contexts.

> ✅ **Đáp án đúng:** **A** (It reduces memory usage by reusing event objects.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Event pooling (trong các phiên bản React cũ trước 17) giúp giảm tiêu thụ bộ nhớ bằng cách tái sử dụng lại các đối tượng `SyntheticEvent` thay vì cấp phát mới liên tục cho mỗi sự kiện.

---

### Câu 8

Describe the Redux flow process when an action is dispatched.

- **A. Action is dispatched -> Middleware -> Reducer -> Store -> Component.** ✅
- B. Component dispatches action -> Reducer -> Middleware -> Store.
- C. Middleware dispatches action -> Reducer -> Store -> Component.
- D. Reducer dispatches action -> Middleware -> Component -> Store.

> ✅ **Đáp án đúng:** **A** (Action is dispatched -> Middleware -> Reducer -> Store -> Component.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Luồng dữ liệu một chiều chuẩn trong Redux khi dispatch một action: **Action được dispatch → Middleware (như Redux Thunk) → Reducer (tính state mới) → Store (cập nhật state) → Component (re-render UI)**.

---

### Câu 9

Evaluate the benefits of using Redux Thunk middleware in a Redux application. Which of the following is NOT a benefit?

- A. Allows for handling asynchronous actions
- B. Simplifies the process of making API calls within action creators
- **C. Ensures that all actions are synchronous** ✅
- D. Enables conditional dispatching of actions

> ✅ **Đáp án đúng:** **C** (Ensures that all actions are synchronous)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Redux Thunk được sinh ra để hỗ trợ xử lý **bất đồng bộ (asynchronous actions)** như gọi API và dispatch có điều kiện. Do đó phát biểu "đảm bảo mọi action đều đồng bộ" (C) KHÔNG phải là lợi ích của Redux Thunk.

---

### Câu 10

Which class is used to create a button in Bootstrap 5?

- **A. btn** ✅
- B. button
- C. btn-primary
- D. btn-default

> ✅ **Đáp án đúng:** **A** (btn)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Trong Bootstrap 5, class nền tảng bắt buộc để tạo một nút bấm là `.btn` (sau đó kết hợp thêm các class màu sắc như `.btn-primary`, `.btn-danger`).

---

### Câu 11

What protocol is commonly used for client-server communication over the web?

- **A. HTTP** ✅
- B. FTP
- C. SMTP
- D. SSH

> ✅ **Đáp án đúng:** **A** (HTTP)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Giao thức chuẩn phổ biến nhất cho giao tiếp Client–Server trên web là **HTTP** (và bản bảo mật HTTPS). FTP dùng truyền file, SMTP dùng gửi email, SSH dùng điều khiển từ xa.

---

### Câu 12

In React 19, how can you pass additional arguments to an event handler?

- A. By using the event.target property
- B. By using the event.data property
- **C. By using the bind method when binding the event handler** ✅
- D. React 19 does not support passing additional arguments to event handlers

> ✅ **Đáp án đúng:** **C** (By using the bind method when binding the event handler)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Trong React, bạn có thể truyền thêm tham số vào event handler bằng cách dùng phương thức `.bind(this, arg)` (hoặc bọc trong arrow function `() => handleClick(arg)`).

---

### Câu 13

Which of the following is the correct syntax to use useDispatch in a functional component?

- **A. ```
  const MyComponent = () => {
  const dispatch = useDispatch();
  return <div>My Component</div>;
  };
  ```** ✅
- B. ```
  const MyComponent = () => { const dispatch = useDispatch; return <div>My Component</div>; };
  ```
- C. ```
  const MyComponent = () => {
  const dispatch = dispatch();
  return <div>My Component</div>;
  };
  ```
- D. ```
  const MyComponent = () => { const dispatch = useDispatch(); return <div>My Component with dispatch</div>; };
  ```

> ✅ **Đáp án đúng:** **A** (const MyComponent = () => { const dispatch = useDispatch(); return <div>My Component</div>; };)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Để dùng hook `useDispatch` của `react-redux` trong functional component, ta gọi trực tiếp `const dispatch = useDispatch();` ở cấp cao nhất của component (phải có dấu gọi hàm `()`).

---

### Câu 14

How can you import functions or variables from an ES6 module?

- **A. By using the import keyword** ✅
- B. By using the require function
- C. By using the export keyword
- D. By using the include directive

> ✅ **Đáp án đúng:** **A** (By using the import keyword)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Trong hệ thống ES6 Modules, từ khóa `import` được dùng để nhập các hàm, biến hoặc component từ module khác (ví dụ `import { sum } from './math'`). `require()` là cú pháp CommonJS cũ.

---

### Câu 15

Compare the use of Redux and Flux for state management. Which statement is true?

- A. Redux uses multiple stores, while Flux uses a single store.
- **B. Flux uses multiple stores, while Redux uses a single store.** ✅
- C. Both Redux and Flux use multiple stores.
- D. Both Redux and Flux use a single store.

> ✅ **Đáp án đúng:** **B** (Flux uses multiple stores, while Redux uses a single store.)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - So sánh kinh điển Flux vs Redux: **Flux** có thể có **nhiều Stores (multiple stores)**, còn **Redux** chỉ có duy nhất **1 Store (single source of truth)** cho toàn ứng dụng.

---

### Câu 16

How can you create a new Git repository?

- **A. By running "git init" in the project directory** ✅
- B. By adding a remote repository URL
- C. By cloning an existing repository
- D. By committing changes using "git commit -m"

> ✅ **Đáp án đúng:** **A** (By running "git init" in the project directory)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Để khởi tạo một Git repository mới ngay trong thư mục dự án hiện tại, ta chạy lệnh `git init`.

---

### Câu 17

What is the correct way to update the state when it depends on the previous state?

- A. setValue(value + 1);
- **B. setValue(prevValue => prevValue + 1);** ✅
- C. setValue(() => value + 1);
- D. setValue(value => value + 1);

> ✅ **Đáp án đúng:** **B** (setValue(prevValue => prevValue + 1);)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Khi cập nhật state phụ thuộc vào giá trị state trước đó, cách chuẩn và an toàn nhất là dùng **functional updater**: `setValue(prevValue => prevValue + 1)` để luôn nhận giá trị mới nhất khi React batching.

---

### Câu 18

Which prop is used to define default values for props in a functional component in React 18?

- **A. defaultProps** ✅
- B. initialProps
- C. props
- D. defaultValue

> ✅ **Đáp án đúng:** **A** (defaultProps)
>
> 💡 **Giải thích:** **Đáp án đúng: A** *(Đã rà soát & sửa chuẩn từ đáp án gốc)*
> 
> - Trong React 18 (trước khi bị loại bỏ ở React 19), thuộc tính `Component.defaultProps = { ... }` được dùng để khai báo giá trị mặc định cho props (bên cạnh ES6 default parameter). Không có thuộc tính nào tên là `initialProps` trong React.

---

### Câu 19

Evaluate the benefits of using the React.lazy API for code splitting in a React application. Which of the following is NOT a benefit?

- A. Reduces the initial load time by splitting code into bundles
- **B. Ensures that all components are loaded upfront** ✅
- C. Provides a better user experience by loading components only when needed
- D. Allows for dynamic imports and lazy loading of components

> ✅ **Đáp án đúng:** **B** (Ensures that all components are loaded upfront)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - `React.lazy()` dùng để tải lười (lazy loading) từng phần khi cần nhằm giảm thời gian tải ban đầu. Do đó "đảm bảo tất cả component đều được tải ngay từ đầu" (B) hoàn toàn trái ngược và KHÔNG phải lợi ích của `React.lazy()`.

---

### Câu 20

What is the role of the BrowserRouter component in React Router?

- A. To define a route in the application
- **B. To wrap the entire application and enable routing using the HTML5 History API** ✅
- C. To handle form submissions
- D. To manage state within a component

> ✅ **Đáp án đúng:** **B** (To wrap the entire application and enable routing using the HTML5 History API)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - `<BrowserRouter>` bọc ngoài ứng dụng React và kích hoạt định tuyến phía client sử dụng **HTML5 History API** (`pushState`, `popstate`), giữ URL trình duyệt đồng bộ với giao diện.

---

### Câu 21

What are the key features of React?

- A. Two-way data binding
- **B. Virtual DOM** ✅
- C. SQL database integration
- D. Automatic styling

> ✅ **Đáp án đúng:** **B** (Virtual DOM)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - **Virtual DOM** là một trong những tính năng cốt lõi nổi bật nhất của React (cùng với Component-based và luồng dữ liệu một chiều — one-way data binding, KHÔNG phải two-way).

---

### Câu 22

Create a React component that uses composition to include a header, main content, and footer. Which code snippet is correct?

- **A. ```
  function App() {
  return (<div><Header /></MainContent></Footer />);
  }
  ```** ✅
- B. ```
  function App() {
  return (<div><Header /></Footer /><MainContent /></div>);
  }
  ```
- C. ```
  function App() {
  return (<div><MainContent /></Header /></Footer /></div>);
  }
  ```
- D. ```
  function App() {
  return (<div><Footer /></Header /><MainContent /></div>);
  }
  ```

> ✅ **Đáp án đúng:** **A** (function App() { return (<div><Header /></MainContent></Footer />); })
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Đề yêu cầu sắp xếp bố cục theo đúng thứ tự: **Header → MainContent → Footer** (Component Composition). Đáp án A là phương án duy nhất giữ đúng thứ tự 3 thành phần này.

---

### Câu 23 *(Chọn 2 đáp án)*

How do you import React Router components in the code (choose 2 options)?

*(Chọn 2 đáp án)*

- **A. import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';** ✅
- B. import { Router, Routes, Route } from 'react-router-dom';
- **C. import { BrowserRouter, Routes, Route } from 'react-router-dom';** ✅
- D. import { Router, Switch, Route } from 'react-router-dom';

> ✅ **Đáp án đúng:** **A** (import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';) ; **C** (import { BrowserRouter, Routes, Route } from 'react-router-dom';)
>
> 💡 **Giải thích:** **Đáp án đúng: A và C** *(Đã rà soát & sửa chuẩn từ đáp án gốc)*
> 
> - Trong React Router v6, hai cách import chuẩn nhất là:
>   - `import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';` (đặt bí danh `Router` cho `BrowserRouter`)
>   - `import { BrowserRouter, Routes, Route } from 'react-router-dom';` (dùng trực tiếp tên `BrowserRouter`).
> - Lưu ý: `<Switch>` ở D đã bị loại bỏ từ v6 và thay bằng `<Routes>`.

---

### Câu 24

Which HTTP status code indicates a successful response from a server?

- **A. 200 OK** ✅
- B. 404 Not Found
- C. 500 Internal Server Error
- D. 302 Found

> ✅ **Đáp án đúng:** **A** (200 OK)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Mã trạng thái HTTP `200 OK` biểu thị yêu cầu đã được máy chủ xử lý thành công. `404` là không tìm thấy, `500` là lỗi server, `302` là chuyển hướng tạm thời.

---

### Câu 25

What is the purpose of the initial state parameter in a Redux reducer function?

- A. To define the structure of the Redux store
- B. To specify the actions that can be dispatched
- C. To handle asynchronous operations
- **D. To define the initial state of the reducer** ✅

> ✅ **Đáp án đúng:** **D** (To define the initial state of the reducer)
>
> 💡 **Giải thích:** **Đáp án đúng: D**
> 
> - Tham số `initialState` trong reducer (`(state = initialState, action) => ...`) dùng để định nghĩa trạng thái khởi đầu mặc định của nhánh state mà reducer đó quản lý.

---

### Câu 26

What are Higher-Order Components in React?

- **A. Advanced components.** ✅
- B. Components written in JavaScript.
- C. Components with multiple props.
- D. Components with multiple states.

> ✅ **Đáp án đúng:** **A** (Advanced components.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Higher-Order Components (HOC) là một kỹ thuật nâng cao trong React dùng để tái sử dụng logic giữa các component (một hàm nhận vào một component và trả về một component mới được nâng cấp).

---

### Câu 27

What is Node.js?

- A. A web browser
- B. A programming language
- **C. A JavaScript runtime** ✅
- D. A CSS framework

> ✅ **Đáp án đúng:** **C** (A JavaScript runtime)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - **Node.js** là môi trường thực thi JavaScript (**JavaScript runtime**) mã nguồn mở xây dựng trên V8 engine của Chrome, cho phép chạy JavaScript bên ngoài trình duyệt (phía server/CLI).

---

### Câu 28

What is the initial state of a promise?

- A. Fulfilled
- B. Rejected
- **C. Pending** ✅
- D. Resolved

> ✅ **Đáp án đúng:** **C** (Pending)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Một Promise trong JavaScript luôn khởi đầu ở trạng thái **Pending** (đang chờ), sau đó mới chuyển sang **Fulfilled** (thành công) hoặc **Rejected** (thất bại).

---

### Câu 29

How do you create a responsive grid layout using Bootstrap?

- A. ```
  By using the <div class="grid"> element.
  ```
- B. By applying the .responsive-grid class to the container element.
- **C. By using the .row and .col-*-* classes to create rows and columns.** ✅
- D. By manually specifying the width of each element using CSS.

> ✅ **Đáp án đúng:** **C** (By using the .row and .col-*-* classes to create rows and columns.)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Để tạo bố cục lưới responsive trong Bootstrap, ta kết hợp `.container` / `.row` và các class cột `.col-{breakpoint}-{size}` (ví dụ `.col-md-6`, `.col-lg-4`).

---

### Câu 30

Evaluate the benefits of using Redux Thunk middleware in a Redux application. Which of the following is NOT a benefit?

- A. Allows for handling asynchronous actions
- B. Simplifies the process of making API calls within action creators
- **C. Ensures that all actions are synchronous** ✅
- D. Enables conditional dispatching of actions

> ✅ **Đáp án đúng:** **C** (Ensures that all actions are synchronous)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Redux Thunk được dùng để xử lý các action **bất đồng bộ** (như gọi API) và dispatch có điều kiện. Do đó "đảm bảo mọi action đều đồng bộ" (C) KHÔNG phải là lợi ích của Redux Thunk.

---

### Câu 31

Which of the following is the correct way to dispatch an action using the useDispatch hook?

- A. const dispatch = useDispatch(); dispatch('ACTION_TYPE');
- B. const dispatch = useDispatch(); dispatch(() => { type: 'ACTION_TYPE' });
- **C. const dispatch = useDispatch(); dispatch({ type: 'ACTION_TYPE' });** ✅
- D. const dispatch = useDispatch(); dispatch({ action: 'ACTION_TYPE' });

> ✅ **Đáp án đúng:** **C** (const dispatch = useDispatch(); dispatch({ type: 'ACTION_TYPE' });)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Trong Redux, action gửi đi qua `dispatch` phải là một plain object có thuộc tính bắt buộc `type`: `const dispatch = useDispatch(); dispatch({ type: 'ACTION_TYPE' });`.

---

### Câu 32

Describe the concept of fragments in JSX. Which of the following best explains their purpose?

- **A. Fragments are used to group multiple elements without adding extra nodes to the DOM.** ✅
- B. Fragments are used to style JSX elements.
- C. Fragments are used to manage state in React components.
- D. Fragments are used to handle asynchronous operations in JSX.

> ✅ **Đáp án đúng:** **A** (Fragments are used to group multiple elements without adding extra nodes to the DOM.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - React Fragments (`<React.Fragment>` hoặc `<>...</>`) cho phép gom nhóm nhiều phần tử JSX con lại với nhau mà không sinh thêm thẻ DOM thừa (như `<div>`) vào cây HTML.

---

### Câu 33

Analyze the differences between Flux and MVC architectures. Which statement is true?

- **A. Flux enforces unidirectional data flow, while MVC allows bidirectional data flow.** ✅
- B. MVC enforces unidirectional data flow, while Flux allows bidirectional data flow.
- C. Both Flux and MVC enforce unidirectional data flow.
- D. Both Flux and MVC allow bidirectional data flow.

> ✅ **Đáp án đúng:** **A** (Flux enforces unidirectional data flow, while MVC allows bidirectional data flow.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Kiến trúc **Flux** áp đặt luồng dữ liệu một chiều (unidirectional data flow: Action → Dispatcher → Store → View), trong khi **MVC** truyền thống cho phép cập nhật hai chiều giữa Model và View.

---

### Câu 34

What advantage does using a reducer function have over directly managing state with useState?

- A. It makes code shorter and less complex for simple state updates.
- **B. It consolidates all state logic in one place, which is beneficial for components with complex state updates.** ✅
- C. It automatically optimizes rendering performance.
- D. It only works with global state, not local component state.

> ✅ **Đáp án đúng:** **B** (It consolidates all state logic in one place, which is beneficial for components with complex state updates.)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Ưu điểm của reducer (`useReducer` / Redux) so với `useState` là gom toàn bộ logic cập nhật state phức tạp vào một hàm duy nhất dễ kiểm soát, dễ test và dễ bảo trì.

---

### Câu 35

Which component is used to create a submit button in React-Bootstrap?

- A. ```
  <Button Submit>
  ```
- B. ```
  <Form Submit>
  ```
- C. ```
  <Form Button>
  ```
- **D. ```
  <Button type="submit">
  ```** ✅

> ✅ **Đáp án đúng:** **D** (<Button type="submit">)
>
> 💡 **Giải thích:** **Đáp án đúng: D**
> 
> - Trong React-Bootstrap, nút gửi form chuẩn là component `<Button type="submit">...</Button>`.

---

### Câu 36

Evaluate the differences between using the Fetch API and Axios for making HTTP requests. Which statement is true?

- A. The Fetch API automatically handles JSON responses, while Axios requires manual parsing
- **B. Axios provides built-in support for request and response interception, while the Fetch API does not** ✅
- C. The Fetch API supports automatic retries for failed requests, while Axios does not
- D. Axios is built into all modern browsers, while the Fetch API requires an additional library

> ✅ **Đáp án đúng:** **B** (Axios provides built-in support for request and response interception, while the Fetch API does not)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - **Axios** hỗ trợ sẵn **request/response interceptors**, tự động parse JSON và tự reject lỗi HTTP 4xx/5xx, trong khi native `fetch()` tích hợp sẵn trình duyệt nhưng không có interceptor dựng sẵn.

---

### Câu 37

What does the fallback prop in Suspense represent?

- **A. The component to display while the lazy component is loading** ✅
- B. The component to display when an error occurs during loading
- C. The component to display when the lazy component is rendered
- D. The component to display when Suspense is not supported

> ✅ **Đáp án đúng:** **A** (The component to display while the lazy component is loading)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Thuộc tính `fallback` của `<Suspense fallback={<Spinner />}>` xác định giao diện tạm thời sẽ hiển thị trong lúc component `React.lazy` đang được tải về qua mạng.

---

### Câu 38

What is the correct way to render a list of items with keys in React?

- **A. const items = ["Apple", "Banana", "Cherry"];
  
  return (
  
  ```
   <ul>
     {items.map((item, index) => (
       <li key={index}>{item}</li>
      ))}
   </ul>
  );
  ```** ✅
- B. const items = ["Apple", "Banana", "Cherry"];
  
  return (
  
  ```
   <ul>
     {items.map((item, index) => (
       <li id={index}>{item}</li>
      ))}
   </ul>
  );
  ```
- C. const items = ["Apple", "Banana", "Cherry"];
  
  return (
  
  ```
   <ul>
     {items.map((item, index) => (
       <li data-key={index}>{item}</li>
      ))}
   </ul>
  );
  ```
- D. const items = ["Apple", "Banana", "Cherry"];
  
  return (
  
  ```
   <ul>
     {items.map((item, index) => (
       <li>{item}</li>
      ))}
   </ul>
  );
  ```

> ✅ **Đáp án đúng:** **A** (const items = ["Apple", "Banana", "Cherry"]; return (  <ul>    {items.map((item, index) => (      <li key={index}>{item}</li>     ))}  </ul> );)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Khi render danh sách bằng `.map()` trong React, mỗi phần tử con phải được truyền prop đặc biệt tên là `key` (`<li key={index}>{item}</li>`), không phải `id` hay `data-key`.

---

### Câu 39

How can you conditionally render content in JSX?

- A. By using the if statement
- B. By using the for loop
- **C. By using the ternary operator (condition ? trueContent : falseContent)** ✅
- D. By using the switch statement

> ✅ **Đáp án đúng:** **C** (By using the ternary operator (condition ? trueContent : falseContent))
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Bên trong dấu `{}` của JSX chỉ chấp nhận **biểu thức (expression)** chứ không chấp nhận câu lệnh (`if`, `for`, `switch`). Do đó ta dùng toán tử 3 ngôi `condition ? trueContent : falseContent` (hoặc `&&`).

---

### Câu 40

What does the catch method do in a promise chain?

- A. It handles the resolved value
- **B. It handles errors** ✅
- C. It pauses the execution
- D. It converts the promise to a synchronous function

> ✅ **Đáp án đúng:** **B** (It handles errors)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Trong chuỗi Promise (`.then().catch()`), phương thức `.catch()` dùng để bắt và xử lý các lỗi (rejection) phát sinh từ Promise hoặc từ các khối `.then()` phía trước.

---

### Câu 41

How can you configure Git with your name and email address?

- **A. By running "git config --global user.name 'Your Name'" and "git config --global user.email 'Your Email'"** ✅
- B. By creating a .gitignore file
- C. By committing changes using "git commit -m"
- D. By pushing changes to a remote repository

> ✅ **Đáp án đúng:** **A** (By running "git config --global user.name 'Your Name'" and "git config --global user.email 'Your Email'")
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Để cấu hình tên và email tác giả commit cho Git trên toàn máy, ta chạy `git config --global user.name "Your Name"` và `git config --global user.email "Your Email"`.

---

### Câu 42

How do you pass multiple props to a child component in React?

- A. ```
  <Child props={{ name: "John", age: 30 }}>
  ```
- **B. ```
  <Child name="John" age={30} />
  ```** ✅
- C. ```
  <Child name="John" age="30" />
  ```
- D. ```
  <Child name="John" age=30 />
  ```

> ✅ **Đáp án đúng:** **B** (<Child name="John" age={30} />)
>
> 💡 **Giải thích:** **Đáp án đúng: B** *(Đã rà soát & sửa chuẩn từ đáp án gốc)*
> 
> - Trong JSX, nhiều props được truyền dưới dạng từng thuộc tính riêng trên thẻ component: chuỗi dùng ngoặc kép (`name="John"`), số/biểu thức JS dùng ngoặc nhọn (`age={30}`) → `<Child name="John" age={30} />`.

---

### Câu 43

Which of the following will navigate to the root path ("/") using the useNavigate hook?

- A. navigate('');
- B. navigate('home');
- **C. navigate('/');** ✅
- D. navigate('root');

> ✅ **Đáp án đúng:** **C** (navigate('/');)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Để điều hướng về đường dẫn gốc của ứng dụng bằng hook `useNavigate()`, ta gọi `navigate('/');`.

---

### Câu 44

How do you wrap a lazy component with Suspense in React?

- A. Using the wrap prop of the Suspense component
- **B. Using the fallback prop of the Suspense component** ✅
- C. Using the lazy prop of the Suspense component
- D. Using the component prop of the Suspense component

> ✅ **Đáp án đúng:** **B** (Using the fallback prop of the Suspense component)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Khi bọc một lazy component bằng `<Suspense>`, ta truyền giao diện chờ thông qua prop `fallback`: `<Suspense fallback={<Loading />}><LazyComp /></Suspense>`.

---

### Câu 45

What is the purpose of arrow functions in ES6?

- **A. To define functions with a shorter syntax** ✅
- B. To create self-executing functions
- C. To declare asynchronous functions
- D. To bind the value of this inside a function

> ✅ **Đáp án đúng:** **A** (To define functions with a shorter syntax)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Arrow functions (`() => {}`) trong ES6 giúp định nghĩa hàm với cú pháp ngắn gọn hơn (đồng thời kế thừa lexical `this` từ scope bao ngoài).

---

### Câu 46

Compare the use of Container and Container fluid in React-Bootstrap. Which statement is accurate?

- A. Container is always 100% wide.
- B. Container fluid is fixed-width at all breakpoints.
- **C. Container fluid is 100% wide at all breakpoints.** ✅
- D. Container is 100% wide at all breakpoints.

> ✅ **Đáp án đúng:** **C** (Container fluid is 100% wide at all breakpoints.)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Trong React-Bootstrap, `<Container fluid>` luôn chiếm **100% chiều rộng** ở mọi breakpoint, trong khi `<Container>` thường có `max-width` cố định theo từng ngưỡng màn hình.

---

### Câu 47

Which correct code for this image below?

> _(Câu này có hình kèm — bản chữ không mang theo hình.)_

- A. ```
  function AnimalCard({item}) {
  let { name, imageUrl, scientificName, size, diet, additional } = item;
  ```
  
  return (
  
  ```
  <div className="col-md-4 col-12 col-sm-4">
  <Card className='bg-warning'>
  <CardImg height={"300px"} src={imageUrl} />
  <CardBody>
  <CardTitle className="text-right"><h2
  className="text-danger">{name}</h2></CardTitle>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Scientific Name: {scientificName}</ListGroupItem>
  <ListGroupItem>{size} kg</ListGroupItem>
  <ListGroupItem>{diet.join(',')}.</ListGroupItem>
  </ListGroup>
  <div class="d-flex justify-content-center align-items-center">
  <button onClick={() => showAdditional(additional)} className='btn
  btn-danger mt-2' >More Info</button>
  </div>
  </CardBody>
  </Card>
  </div>
  );
  }
  ```
- **B. ```
  function AnimalCard({item}) {
  let { name, imageUrl, scientificName, size, diet, additional } = item;
  ```
  
  return (
  
  ```
  <div className="col-md-4 col-12 col-sm-4">
  <Card className='bg-warning'>
  <CardImg height={"300px"} src={imageUrl} />
  <CardBody>
  <CardTitle className="text-center"><h2
  className="text-danger">{name}</h2></CardTitle>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Scientific Name: {scientificName}</ListGroupItem>
  <ListGroupItem>{size} kg</ListGroupItem>
  <ListGroupItem>{diet.join(',')}.</ListGroupItem>
  </ListGroup>
  <div class="d-flex justify-content-center align-items-center">
  <button onClick={() => showAdditional(additional)} className='btn
  btn-danger mt-2' >More Info</button>
  </div>
  </CardBody>
  </Card>
  </div>
  );
  }
  ```** ✅
- C. ```
  function AnimalCard({item}) {
  let { name, imageUrl, scientificName, size, diet, additional } = item;
  ```
  
  return (
  
  ```
  <div className="col-md-4 col-12 col-sm-4">
  <Card className='bg-warning'>
  <CardImg height={"300px"} src={imageUrl} />
  <CardBody>
  <CardTitle className="text-danger"><h2
  className="text-danger">{name}</h2></CardTitle>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Scientific Name: {scientificName}</ListGroupItem>
  <ListGroupItem>{size} kg</ListGroupItem>
  <ListGroupItem>{diet.join(',')}.</ListGroupItem>
  </ListGroup>
  <div class="d-flex justify-content-center align-items-center">
  <button onClick={() => showAdditional(additional)} className='btn
  btn-danger mt-2' >More Info</button>
  </div>
  </CardBody>
  </Card>
  </div>
  );
  }
  ```
- D. ```
  function AnimalCard({item}) {
  let { name, imageUrl, scientificName, size, diet, additional } = item;
  ```
  
  return (
  
  ```
  <div className="col-md-4 col-12 col-sm-4">
  <Card className='bg-warning'>
  <CardImg height={"300px"} src={imageUrl} />
  <CardBody>
  <CardTitle className="text-left"><h2
  className="text-danger">{name}</h2></CardTitle>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Scientific Name: {scientificName}</ListGroupItem>
  <ListGroupItem>{size} kg</ListGroupItem>
  <ListGroupItem>{diet.join(',')}.</ListGroupItem>
  </ListGroup>
  <div class="d-flex justify-content-center align-items-center">
  <button onClick={() => showAdditional(additional)} className='btn
  btn-danger mt-2' >More Info</button>
  </div>
  </CardBody>
  </Card>
  </div>
  );
  }
  ```

> ✅ **Đáp án đúng:** **B** (function AnimalCard({item}) { let { name, imageUrl, scientificName, size, diet, additional } = item; return ( <div className="col-md-4 col-12 col-sm-4"> <Card className='bg-warning'> <CardImg height={"300px"} src={imageUrl} /> <CardBody> <CardTitle className="text-center"><h2 className="text-danger">{name}</h2></CardTitle> <ListGroup className="list-group-flush"> <ListGroupItem>Scientific Name: {scientificName}</ListGroupItem> <ListGroupItem>{size} kg</ListGroupItem> <ListGroupItem>{diet.join(',')}.</ListGroupItem> </ListGroup> <div class="d-flex justify-content-center align-items-center"> <button onClick={() => showAdditional(additional)} className='btn btn-danger mt-2' >More Info</button> </div> </CardBody> </Card> </div> ); })
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - So sánh 4 đáp án chỉ khác nhau đúng class căn lề trên `<CardTitle>`: đáp án B dùng `className="text-center"` để căn giữa tiêu đề tên loài động vật khớp với bố cục thẻ chuẩn.

---

### Câu 48

Which method is used to update the state in a class component?

- **A. setState** ✅
- B. useState
- C. updateState
- D. changeState

> ✅ **Đáp án đúng:** **A** (setState)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Trong React Class Component, phương thức `this.setState()` được dùng để cập nhật state và kích hoạt re-render giao diện (`useState` chỉ dùng cho Functional Component).

---

### Câu 49

What does the render method in a React component do?

- A. It manages state updates
- B. It handle side effects
- **C. It returns the JSX that describes the UI** ✅
- D. It fetches data from an API

> ✅ **Đáp án đúng:** **C** (It returns the JSX that describes the UI)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Phương thức `render()` trong React component có nhiệm vụ trả về mã **JSX** mô tả giao diện người dùng cần hiển thị (phải thuần khiết, không gọi API hay mutate state).

---

### Câu 50

How do you create a tooltip in Bootstrap?

- A. ```
  By using the <tooltip> HTML element
  ```
- B. By applying the .tooltip class to the container element.
- **C. By using the data-bs-toggle="tooltip" attribute along with the title attribute** ✅
- D. By using JavaScript to dynamically create and show tooltip elements.

> ✅ **Đáp án đúng:** **C** (By using the data-bs-toggle="tooltip" attribute along with the title attribute)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Trong Bootstrap 5, để tạo tooltip ta gắn thuộc tính `data-bs-toggle="tooltip"` cùng thuộc tính `title="Nội dung tooltip"` (và khởi tạo bằng JS `new bootstrap.Tooltip(...)`).

---

## 4. Đề 11: Kì SP26 — Đề 1 (50 câu)

### Câu 1

Analyze the differences between Flux and MVC architectures. Which statement is true?

- **A. Flux enforces unidirectional data flow, while MVC allows bidirectional data flow.** ✅
- B. MVC enforces unidirectional data flow, while Flux allows bidirectional data flow.
- C. Both Flux and MVC enforce unidirectional data flow.
- D. Both Flux and MVC allow bidirectional data flow.

> ✅ **Đáp án đúng:** **A** (Flux enforces unidirectional data flow, while MVC allows bidirectional data flow.)
>
> 💡 **Giải thích:** Flux architecture uses a strict unidirectional data flow (Action → Dispatcher → Store → View), whereas MVC allows bidirectional communication between Model and View, which can lead to complexity and side effects.

---

### Câu 2

Which component is typically used in conjunction with React.lazy to handle the loading state?

- A. `<ErrorBoundary>`
- **B. `<Suspense>`** ✅
- C. `<LoadingComponent>`
- D. `<Provider>`

> ✅ **Đáp án đúng:** **B** (`<Suspense>`)
>
> 💡 **Giải thích:** React.lazy is used for code-splitting and must be wrapped in <Suspense> to handle the loading state (via fallback prop). <ErrorBoundary> handles errors, not loading. <LoadingComponent> and <Provider> are not standard React components for this purpose.

---

### Câu 3

What is Redux Thunk used for?

- **A. To manage asynchronous actions in Redux.** ✅
- B. To log every action dispatched to the Redux store.
- C. To split reducers into simpler functions.
- D. To handle side effects in React components.

> ✅ **Đáp án đúng:** **A** (To manage asynchronous actions in Redux.)
>
> 💡 **Giải thích:** Redux Thunk là middleware cho phép bạn viết action creator trả về hàm thay vì object, giúp xử lý các hành động bất đồng bộ như gọi API trước khi dispatch action thực sự.

---

### Câu 4

How do you wrap a lazy-loaded component with a fallback in React?

- A. <Suspense loader={<div>Loading...</div>}>
  <LazyComponent />
  </Suspense>
- **B. <Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
  </Suspense>** ✅
- C. <Await fallback={<div>Loading...</div>}>
  <LazyComponent />
  </Await>
- D. <Loading fallback={<div>Loading...</div>}>
  <LazyComponent />
  </Loading>

> ✅ **Đáp án đúng:** **B** (<Suspense fallback={<div>Loading...</div>}> <LazyComponent /> </Suspense>)
>
> 💡 **Giải thích:** Trong React, để bao bọc component lazy-loaded với fallback, dùng <Suspense> với thuộc tính fallback (không phải loader). C và D là thẻ không tồn tại.

---

### Câu 5

How would you handle errors in a fetch request to ensure that the error is caught and logged to the console?

- **A. fetch(url).then((response)=>{ return response.json(); }).catch(error => console.log(error))** ✅
- B. fetch(url).then(response => response.catch(error => console.log(error)))
- C. fetch(url).catch(error => {{ console.log(error) }})
- D. fetch(url).then(response => { throw new Error() }).catch(error => console.log(error))

> ✅ **Đáp án đúng:** **A** (fetch(url).then((response)=>{ return response.json(); }).catch(error => console.log(error)))
>
> 💡 **Giải thích:** Cách đúng để bắt lỗi trong fetch là dùng .catch() sau chuỗi promise. Đáp án A xử lý response rồi bắt lỗi nếu có. Các đáp án khác sai cú pháp hoặc không bắt lỗi đúng cách.

---

### Câu 6

What is one of the primary benefits of using Promises in JavaScript for asynchronous operations?

- A. It allows direct modification of the DOM.
- B. It makes synchronous code asynchronous.
- **C. It helps solve the "callback hell" problem by allowing chains of asynchronous operations.** ✅
- D. It ensures data is always instantaneously available.

> ✅ **Đáp án đúng:** **C** (It helps solve the "callback hell" problem by allowing chains of asynchronous operations.)
>
> 💡 **Giải thích:** Promises giúp xử lý các thao tác bất đồng bộ theo chuỗi (chaining) thay vì lồng nhau (callback hell), làm mã dễ đọc và dễ bảo trì hơn. Không trực tiếp sửa DOM hay đảm bảo dữ liệu tức thì.

---

### Câu 7

What are the three possible states of a Promise as described in the sources?

- A. Initial, Running, Completed
- B. Starting, Paused, Finished
- **C. Pending, Fulfilled, Rejected** ✅
- D. Waiting, Processing, Error Answer

> ✅ **Đáp án đúng:** **C** (Pending, Fulfilled, Rejected)
>
> 💡 **Giải thích:** Promise trong JavaScript có 3 trạng thái: Pending (đang chờ), Fulfilled (hoàn thành thành công), Rejected (bị từ chối). Đây là định nghĩa chuẩn theo tài liệu MDN và ES6.

---

### Câu 8

After making a successful fetch request, how would you retrieve the JSON data from the response object?

- A. response.data()
- **B. response.json()** ✅
- C. response.jsonText()
- D. response.body.json()

> ✅ **Đáp án đúng:** **B** (response.json())
>
> 💡 **Giải thích:** Trong JavaScript, sau khi fetch thành công, dùng response.json() để parse dữ liệu JSON từ phản hồi. Các phương thức như data(), jsonText(), hay body.json() không tồn tại trong API fetch chuẩn.

---

### Câu 9

Which React concept is used to pass data from a parent component to a child component?

- A. State
- **B. Props** ✅
- C. Context
- D. Ref

> ✅ **Đáp án đúng:** **B** (Props)
>
> 💡 **Giải thích:** Trong React, Props (properties) là cơ chế chính để truyền dữ liệu từ component cha xuống component con. State quản lý dữ liệu nội bộ, Context dùng cho truyền dữ liệu toàn cục, Ref dùng để tham chiếu DOM.

---

### Câu 10

What is the main difference between props and state?

- A. Props are mutable, while state is immutable.
- B. State is used for passing data between components, while props are used to manage component behavior.
- **C. Props do not change after the initial render, while state can change over time.** ✅
- D. State is used for rendering UI, while props are used for functionality.

> ✅ **Đáp án đúng:** **C** (Props do not change after the initial render, while state can change over time.)
>
> 💡 **Giải thích:** Props được truyền từ component cha và không thay đổi trong component con; state là dữ liệu nội bộ có thể thay đổi theo thời gian để phản ánh trạng thái component. Đây là sự khác biệt cốt lõi trong React.

---

### Câu 11

When should the `useReducer()` Hook be used instead of `useState()`?

- A. When components require simple, independent state values.
- B. When performing initialization and cleanup actions
- **C. When there is complex state logic, several sub-values, or when the upcoming state depends on the previous state** ✅
- D. When sharing data across a component hierarchy without prop

> ✅ **Đáp án đúng:** **C** (When there is complex state logic, several sub-values, or when the upcoming state depends on the previous state)
>
> 💡 **Giải thích:** useReducer() phù hợp khi trạng thái phức tạp, có nhiều giá trị con hoặc trạng thái mới phụ thuộc vào trạng thái trước đó. useState() chỉ dùng cho trạng thái đơn giản, độc lập.

---

### Câu 12

Which method would you use to update the state of a component in React?

- **A. setState** ✅
- B. getState
- C. updateState
- D. modifyState

> ✅ **Đáp án đúng:** **A** (setState)
>
> 💡 **Giải thích:** In React class components, setState() is the standard method to update component state. Functional components use useState hook, but setState remains correct for class-based context.

---

### Câu 13 *(Chọn 2 đáp án)*

Select the benefits of using React.memo and useMemo in React applications. (Choose 2 correct answers)

- **A. Prevent unnecessary component re-renders** ✅
- B. Automatically synchronize component state with global state
- **C. Guarantee object references don't change during re-rendering** ✅
- D. Simplify the process of context management

> ✅ **Đáp án đúng:** **A** (Prevent unnecessary component re-renders) ; **C** (Guarantee object references don't change during re-rendering)
>
> 💡 **Giải thích:** React.memo ngăn re-render không cần thiết cho component khi props không thay đổi. useMemo đảm bảo giá trị được memoize (lưu lại) và tham chiếu không đổi giữa các lần render, giúp tối ưu hiệu suất. Không liên quan đến global state hay context management.

---

### Câu 14

How do you define a route that matches /users/123 and passes the 123 as a parameter to the component?

- A. `<Route path="/users?id" element={<User />} />`
- **B. `<Route path="/users/:id" element={<User />} />`** ✅
- C. `<Route path="/users/{id}" element={<User />} />`
- D. `<Route path="/users/#id" element={<User />} />`

> ✅ **Đáp án đúng:** **B** (`<Route path="/users/:id" element={<User />} />`)
>
> 💡 **Giải thích:** Trong React Router, để truyền tham số (ví dụ: 123 trong /users/123) vào component, dùng cú pháp ':id' trong path. Cú pháp này cho phép truy cập tham số qua useParams(). Các cú pháp khác như ?id, {id}, #id không đúng trong ngữ cảnh này.

---

### Câu 15

When declaring routes in React Router, what are Routes and Route components used for?

- A. Routes is for styling, and Route is for defining event handlers.
- B. Routes is for managing state, and Route is for rendering components.
- **C. Routes is used to wrap Route components and define the application's routes, while Route is used to define an individual route.** ✅
- D. Routes is for client-side logic, and Route is for server-side logic

> ✅ **Đáp án đúng:** **C** (Routes is used to wrap Route components and define the application's routes, while Route is used to define an individual route.)
>
> 💡 **Giải thích:** Trong React Router, Routes là container bao bọc các Route, giúp quản lý và render route phù hợp; Route định nghĩa từng route cụ thể với path và component tương ứng.

---

### Câu 16

Which component is used to define a route in React Router?

- **A. `<Route>`** ✅
- B. `<Router>`
- C. `<Link>`
- D. `<Navigation>`

> ✅ **Đáp án đúng:** **A** (`<Route>`)
>
> 💡 **Giải thích:** Trong React Router, thành phần <Route> được dùng để định nghĩa một route — ánh xạ một URL cụ thể tới một component. Các thành phần khác như <Router> là container, <Link> để điều hướng, còn <Navigation> không tồn tại trong React Router chuẩn.

---

### Câu 17

What is the purpose of json-server in client-server communication?

- **A. To set up a simple static web server that serves data to clients.** ✅
- B. To encrypt data during transmission between client and server.
- C. To manage client authentication and session data.
- D. To provide a full-featured backend for the React application.

> ✅ **Đáp án đúng:** **A** (To set up a simple static web server that serves data to clients.)
>
> 💡 **Giải thích:** json-server là công cụ tạo server REST giả lập từ file JSON, dùng để phục vụ dữ liệu cho client trong quá trình phát triển — không mã hóa (B), không quản lý xác thực (C), không phải backend đầy đủ (D).

---

### Câu 18

Which of the following is the correct syntax to use useDispatch in a functional component?

- **A. const MyComponent = () => {
  const dispatch = useDispatch();
  return <div>My Component</div>;
  };** ✅
- B. const MyComponent = () => { const dispatch = useDispatch; return <div>My Component</div>; };
- C. const MyComponent = () => {
  const dispatch = dispatch();
  return <div>My Component</div>;
  };
- D. const MyComponent = () => { const dispatch = useDispatch(); return <div>My Component with {dispatch}</div>; };

> ✅ **Đáp án đúng:** **A** (const MyComponent = () => { const dispatch = useDispatch(); return <div>My Component</div>; };)
>
> 💡 **Giải thích:** useDispatch là hook của Redux Toolkit, phải được gọi như một hàm (useDispatch()) để trả về hàm dispatch. Câu A đúng cú pháp. Câu B thiếu dấu ngoặc, C gọi sai hàm, D dùng dispatch như biến văn bản — đều sai.

---

### Câu 19

Which of the following is a valid JSON object?

- **A. {
  "name": "John Doe",
  "age": 30,
  "city": "New York"
  }** ✅
- B. {
  'name': 'John Doe',
  'age': "30",
  'city': 'New York'
  }
- C. {
  name: "John Doe",
  age: 30,
  city: "New York"
  }
- D. {
  "name" = "John Doe",
  "age" = 30,
  "city" = "New York"
  }

> ✅ **Đáp án đúng:** **A** ({ "name": "John Doe", "age": 30, "city": "New York" })
>
> 💡 **Giải thích:** JSON hợp lệ yêu cầu key phải là chuỗi trong dấu nháy kép, giá trị có thể là chuỗi, số, boolean... Đáp án A đúng chuẩn. B sai vì dùng nháy đơn (không hợp lệ trong JSON chuẩn). C sai vì key không có dấu nháy. D sai vì dùng dấu = thay cho :.

---

### Câu 20

What is the primary architectural style used in designing web services that follow REST principles?

- A. SOAP (Simple Object Access Protocol)
- B. RPC (Remote Procedure Call)
- C. MVC (Model-View-Controller)
- **D. RESTful (Representational State Transfer)** ✅

> ✅ **Đáp án đúng:** **D** (RESTful (Representational State Transfer))
>
> 💡 **Giải thích:** Kiến trúc chính được dùng trong thiết kế web service theo nguyên tắc REST là RESTful. SOAP và RPC là giao thức/kiến trúc khác, MVC là mô hình thiết kế ứng dụng, không phải kiến trúc web service.

---

### Câu 21

Create a React component that uses composition to include a header, main content, and footer. Which code snippet is correct?

- **A. function App() {
  return (<div><Header /><MainContent /><Footer /></div>);
  }** ✅
- B. function App() {
  return (<div><Header /><Footer /><MainContent /></div>);
  }
- C. function App() {
  return (<div><MainContent /><Header /><Footer /></div>);
  }
- D. function App() {
  return (<div><Footer /><Header /><MainContent /></div>);
  }

> ✅ **Đáp án đúng:** **A** (function App() { return (<div><Header /><MainContent /><Footer /></div>); })
>
> 💡 **Giải thích:** Trong React, composition thường sắp xếp các component theo cấu trúc logic: Header ở trên, MainContent ở giữa, Footer ở dưới. Câu A đúng về cấu trúc và thứ tự. Các lựa chọn khác sắp xếp sai vị trí, không phù hợp với bố cục giao diện chuẩn.

---

### Câu 22

Create a React component that displays a list of items passed as props. Which approach would you use?

- **A. Use a functional component with the map method** ✅
- B. Use a class component with componentDidMount
- C. Use a higher-order component
- D. Use a lifecycle method to fetch data

> ✅ **Đáp án đúng:** **A** (Use a functional component with the map method)
>
> 💡 **Giải thích:** Trong React, để hiển thị danh sách các phần tử từ props, cách phổ biến và hiện đại nhất là dùng functional component kết hợp với phương thức map() để lặp qua mảng và trả về các phần tử JSX tương ứng. Đây là cách tối ưu, dễ đọc và tuân thủ React Hooks.

---

### Câu 23

How can you avoid contradictions in state with this code?
```
const [isOpen, setIsOpen] = useState(false);
const [buttonText, setButtonText] = useState(isOpen ? "se" : "Open");
function toggle() {
  setIsOpen(!isOpen);
  setButtonText(isOpen ? "Open" : "se");
}
```

- A. The code above is fine as it is.
- **B. Remove buttonText from state and calculate it dynamically in the render method based on isOpen.** ✅
- C. Keep both isOpen and buttonText in state but update them separately.
- D. Use useEffect to sync buttonText with isOpen.

> ✅ **Đáp án đúng:** **B** (Remove buttonText from state and calculate it dynamically in the render method based on isOpen.)
>
> 💡 **Giải thích:** Trong React, khi buttonText phụ thuộc hoàn toàn vào isOpen, việc lưu trữ nó trong state là dư thừa và dễ gây mâu thuẫn. Nên tính buttonText trực tiếp trong render: buttonText = isOpen ? "Open" : "se" để đảm bảo đồng bộ và tránh lỗi logic.

---

### Câu 24

What is the main advantage of using Hooks in React?

- **A. Hooks allow React to maintain internal state without classes** ✅
- B. Hooks simplify sharing functionality between components
- C. Hooks remove the need for functional components
- D. Hooks only support stateful components

> ✅ **Đáp án đúng:** **A** (Hooks allow React to maintain internal state without classes)
>
> 💡 **Giải thích:** Hooks cho phép component chức năng trong React quản lý state và side effect mà không cần dùng class, giúp code đơn giản và dễ bảo trì hơn.

---

### Câu 25

What does the default case in the reducer function do?

- A. Resets the state
- B. Handles unknown actions
- C. Throws an error for unknown actions
- **D. Returns the current state** ✅

> ✅ **Đáp án đúng:** **D** (Returns the current state)
>
> 💡 **Giải thích:** Trong hàm reducer của Redux, case mặc định (default) thường trả về state hiện tại để đảm bảo rằng khi action không khớp với bất kỳ case nào, state sẽ không bị thay đổi — đây là hành vi an toàn và bắt buộc để tránh lỗi.

---

### Câu 26

What is the purpose of package.json in a Node.js project?

- **A. It defines the project's dependencies and scripts** ✅
- B. It contains the source code of the project
- C. It configures the Node.js environment
- D. It manages the project's build process

> ✅ **Đáp án đúng:** **A** (It defines the project's dependencies and scripts)
>
> 💡 **Giải thích:** package.json trong Node.js dùng để khai báo phụ thuộc (dependencies), script chạy, thông tin dự án... Không chứa mã nguồn hay cấu hình môi trường.

---

### Câu 27

What is the main purpose of React in modern web development, and what type of applications does it best support?

- A. It is mainly designed for handling backend logic and database management
- **B. React helps build interactive user interfaces, especially for SPAs.** ✅
- C. React primarily functions as a server-side rendering engine for web applications.
- D. It is mainly a mobile development framework and not suitable for web applications.

> ✅ **Đáp án đúng:** **B** (React helps build interactive user interfaces, especially for SPAs.)
>
> 💡 **Giải thích:** React là thư viện JavaScript dùng để xây dựng giao diện người dùng tương tác, đặc biệt phù hợp với ứng dụng một trang (SPA). Nó không xử lý backend, server-side rendering hay phát triển di động (mặc dù React Native có thể dùng cho mobile).

---

### Câu 28

Which of the following is NOT a feature of React?

- A. Component-Based
- B. Virtual DOM
- C. Large Community
- **D. Server-Side Rendering** ✅

> ✅ **Đáp án đúng:** **D** (Server-Side Rendering)
>
> 💡 **Giải thích:** React là thư viện UI client-side, không hỗ trợ SSR mặc định. SSR cần thư viện bổ sung như Next.js. Các đặc điểm còn lại: Component-Based, Virtual DOM, Large Community đều đúng.

---

### Câu 29

How can you conditionally render content in JSX?

- A. By using the if statement
- B. By using the for loop
- **C. By using the ternary operator `{condition ? trueContent : falseContent}`** ✅
- D. By using the switch statement

> ✅ **Đáp án đúng:** **C** (By using the ternary operator `{condition ? trueContent : falseContent}`)
>
> 💡 **Giải thích:** Trong JSX, không thể dùng if/for/switch trực tiếp trong return. Ternary operator là cách phổ biến và hợp lệ để render có điều kiện. Ví dụ: `{isLoggedIn ? <User /> : <Login />}`.

---

### Câu 30

Which method is used to perform enhanced array manipulation in ES6?

- **A. map()** ✅
- B. forEach()
- C. reduce()
- D. filter()

> ✅ **Đáp án đúng:** **A** (map())
>
> 💡 **Giải thích:** Trong ES6, map() là phương thức được dùng để thực hiện thao tác nâng cao trên mảng — tạo mảng mới bằng cách áp dụng hàm lên từng phần tử. Các phương thức khác như forEach(), reduce(), filter() cũng hữu ích nhưng map() đặc biệt nổi bật trong xử lý mảng theo kiểu hàm bậc cao.

---

### Câu 31

In JSX, which of the following is correct?

- **A. You must always wrap JSX in a single root element** ✅
- B. You can use multiple root elements without any wrapping
- C. JSX tags can be self-closing only for non-void elements
- D. JSX does not support attributes like className

> ✅ **Đáp án đúng:** **A** (You must always wrap JSX in a single root element)
>
> 💡 **Giải thích:** JSX yêu cầu phải có một root element duy nhất. Nếu muốn render nhiều element, phải bao bọc chúng trong một thẻ (ví dụ: <div> hoặc React.Fragment). Các lựa chọn khác sai về cú pháp hoặc quy tắc JSX.

---

### Câu 32

How can you install React-Bootstrap in your ReactJS project?

- **A. By using npm or yarn to install the package.** ✅
- B. By downloading the React-Bootstrap files from a website.
- C. By copying and pasting the React-Bootstrap code into your project.
- D. By using a CDN link to include React-Bootstrap in your HTML file.

> ✅ **Đáp án đúng:** **A** (By using npm or yarn to install the package.)
>
> 💡 **Giải thích:** Cách chuẩn để cài React-Bootstrap là dùng npm install react-bootstrap bootstrap hoặc yarn add react-bootstrap bootstrap — đảm bảo quản lý phiên bản và phụ thuộc.

---

### Câu 33

How do you use the Grid system in React-Bootstrap

- A. <Row>
  <Container>
  <Col xs={6}>2 of 3 (wider)</Col>
  </Container>
  </Row>
- B. <Row>
  <Container>
  <Column>1 of 3</Column></Container>
  </Row>
- **C. <Container>
  <Row>
  <Col xs={6}>2 of 3 (wider)</Col>
  </Row>
  </Container>** ✅
- D. <Container>
  <Column>
  <Row xs={6}>2 of 3 (wider)</Row>
  </Column>
  </Container>

> ✅ **Đáp án đúng:** **C** (<Container> <Row> <Col xs={6}>2 of 3 (wider)</Col> </Row> </Container>)
>
> 💡 **Giải thích:** Trong React-Bootstrap, hệ thống Grid sử dụng cấu trúc <Container> → <Row> → <Col>. <Col> là thành phần chứa nội dung, <Row> nhóm các cột, <Container> bao bọc toàn bộ. Cấu trúc A, B, D sai thứ tự hoặc dùng tag không tồn tại (Column, Row xs={6}).

---

### Câu 34

What is the purpose of the 'fluid' prop in React-Bootstrap's Container component?

- **A. It makes the container take up the entire width of the viewport.** ✅
- B. It enables the container to display text.
- C. It changes the container's background color.
- D. It makes the container fixed width.

> ✅ **Đáp án đúng:** **A** (It makes the container take up the entire width of the viewport.)
>
> 💡 **Giải thích:** Thuộc tính 'fluid' trong React-Bootstrap Container khiến container mở rộng toàn bộ chiều rộng của viewport (100% width), thay vì có chiều rộng cố định như container mặc định. Không liên quan đến màu nền, hiển thị văn bản hay chiều rộng cố định.

---

### Câu 35

Assess the impact of using inline event handlers in React components. Which statement is true?

- A. Inline event handlers improve performance by reducing the number of function calls
- **B. Inline event handlers can lead to performance issues due to the creation of new functions on each render** ✅
- C. Inline event handlers are the only way to handle events in React
- D. Inline event handlers are more secure than named event handlers

> ✅ **Đáp án đúng:** **B** (Inline event handlers can lead to performance issues due to the creation of new functions on each render)
>
> 💡 **Giải thích:** Inline event handlers trong React tạo ra hàm mới mỗi lần render, gây lãng phí bộ nhớ và làm chậm hiệu năng. Nên dùng useCallback hoặc định nghĩa hàm ngoài để tránh vấn đề này.

---

### Câu 36

Analyze the benefits of using synthetic events in React. Which of the following is NOT a benefit?

- A. Provides a consistent event interface across different browsers
- B. Contains information necessary for event propagation
- **C. Reduces the need for garbage collection** ✅
- D. Normalizes browser inconsistencies

> ✅ **Đáp án đúng:** **C** (Reduces the need for garbage collection)
>
> 💡 **Giải thích:** Synthetic events trong React giúp chuẩn hóa sự kiện giữa các trình duyệt (A, D), và chứa thông tin cho việc lan truyền sự kiện (B). Tuy nhiên, chúng KHÔNG giảm nhu cầu thu gom rác — đây là chức năng của engine JavaScript, không liên quan đến synthetic events.

---

### Câu 37

What does the render method in a React component do?

- A. It manages state updates
- B. It handles side effects
- **C. It returns the JSX that describes the UI** ✅
- D. It fetches data from an API

> ✅ **Đáp án đúng:** **C** (It returns the JSX that describes the UI)
>
> 💡 **Giải thích:** Phương thức render() trong React component có nhiệm vụ trả về JSX mô tả giao diện người dùng. Nó không quản lý state, xử lý side effect hay fetch data.

---

### Câu 38

What is a key differentiating characteristic of Tailwind CSS compared to traditional CSS frameworks like Bootstrap, as described in the sources?

- A. It provides a comprehensive set of pre-built components for rapid development
- B. It enforces strict design patterns to maintain visual consistency.
- **C. It offers a huge list of utility CSS classes, providing more freedom for custom designs** ✅
- D. It relies heavily on JavaScript for styling and layout management.

> ✅ **Đáp án đúng:** **C** (It offers a huge list of utility CSS classes, providing more freedom for custom designs)
>
> 💡 **Giải thích:** Tailwind CSS khác biệt với Bootstrap ở chỗ nó cung cấp hàng loạt lớp utility CSS thay vì component sẵn có, giúp người dùng linh hoạt thiết kế theo ý muốn thay vì bị giới hạn bởi mẫu có sẵn.

---

### Câu 39

Next.js is primarily used for:

- A. Styling static websites
- **B. Creating server-rendered or statically generated React applications** ✅
- C. Managing back-end databases
- D. Handling real-time communication

> ✅ **Đáp án đúng:** **B** (Creating server-rendered or statically generated React applications)
>
> 💡 **Giải thích:** Next.js là framework React cho phép tạo ứng dụng được render ở server (SSR) hoặc sinh tĩnh (SSG), tối ưu SEO và hiệu suất.

---

### Câu 40

In Next.js, what mechanism primarily determines the routes in an application?

- A. Explicit configuration in a central `routes.json` file.
- **B. File-system routing, where routes are determined by the structure of files** ✅
- C. Dynamic route declarations using React Router
- D. Server-side API endpoints only

> ✅ **Đáp án đúng:** **B** (File-system routing, where routes are determined by the structure of files)
>
> 💡 **Giải thích:** Next.js sử dụng cơ chế định tuyến dựa trên hệ thống tệp: mỗi file trong thư mục `app` hoặc `pages` tương ứng với một route, không cần cấu hình thủ công.

---

### Câu 41

How does Next.js's server-side rendering capability primarily benefit web applications?

- A. By offloading all rendering tasks to the client's browser
- B. By eliminating the need for any server infrastructure
- **C. By resulting in faster initial page load times and better search engine optimization (SEO)** ✅
- D. By simplifying complex client-side state management.

> ✅ **Đáp án đúng:** **C** (By resulting in faster initial page load times and better search engine optimization (SEO))
>
> 💡 **Giải thích:** Server-side rendering (SSR) trong Next.js giúp render trang trên server trước khi gửi về client, dẫn đến thời gian tải trang đầu tiên nhanh hơn và nội dung dễ được index bởi công cụ tìm kiếm → cải thiện SEO.

---

### Câu 42

If you wanted to customize the size of the form controls, what would you do in Bootstrap5?

- A. Set width in inline CSS
- B. Use the rows and cols attributes for all form elements
- **C. Use the size variants of the .form-control class, like .form-control-sm or .form-control-lg** ✅
- D. Apply custom JavaScript functions

> ✅ **Đáp án đúng:** **C** (Use the size variants of the .form-control class, like .form-control-sm or .form-control-lg)
>
> 💡 **Giải thích:** Trong Bootstrap 5, để tùy chỉnh kích thước form control, bạn dùng các class như .form-control-sm (nhỏ) hoặc .form-control-lg (lớn). Đây là cách chuẩn, không cần CSS inline hay JS.

---

### Câu 43

How do you create a responsive grid layout using Bootstrap?

- A. By using the `<div class="grid">` element.
- B. By applying the `.responsive-grid` class to the container element.
- **C. By using the `.row` and `.col-*-*` classes to create rows and columns.** ✅
- D. By manually specifying the width of each element using CSS.

> ✅ **Đáp án đúng:** **C** (By using the `.row` and `.col-*-*` classes to create rows and columns.)
>
> 💡 **Giải thích:** Bootstrap sử dụng hệ thống lưới (grid) dựa trên class .row để tạo hàng và .col-*-* để tạo cột, giúp bố cục linh hoạt và phản ứng với kích thước màn hình.

---

### Câu 44

Which of the following components can be used to create a slideshow in Bootstrap?

- A. `.popover`
- B. `.modal`
- **C. `.carousel`** ✅
- D. `.nav-pills`

> ✅ **Đáp án đúng:** **C** (`.carousel`)
>
> 💡 **Giải thích:** Trong Bootstrap, thành phần .carousel được dùng để tạo slideshow (trình chiếu hình ảnh hoặc nội dung). Các lựa chọn khác như .popover, .modal, .nav-pills không có chức năng này.

---

### Câu 45

What does the `useNavigate` hook return?

- A. An object with navigation methods.
- **B. A navigate function that can be used to navigate to a new location.** ✅
- C. A boolean indicating navigation status.
- D. A string representing the current route.

> ✅ **Đáp án đúng:** **B** (A navigate function that can be used to navigate to a new location.)
>
> 💡 **Giải thích:** Hook `useNavigate` trong React Router trả về một hàm `navigate` để chuyển hướng đến vị trí mới, không phải đối tượng, boolean hay chuỗi route hiện tại.

---

### Câu 46

How do you define a dynamic route parameter in React Router?

- A. `<Route path="/user/id" component={UserProfile} />`
- **B. `<Route path="/user/:id" component={UserProfile} />`** ✅
- C. `<Route path="/user?:id" component={UserProfile} />`
- D. `<Route path="/user={id}" component={UserProfile} />`

> ✅ **Đáp án đúng:** **B** (`<Route path="/user/:id" component={UserProfile} />`)
>
> 💡 **Giải thích:** Trong React Router, tham số động được định nghĩa bằng cách đặt dấu hai chấm trước tên biến (ví dụ: :id). Cú pháp này cho phép truyền giá trị động vào component, ví dụ: /user/123 → id = 123.

---

### Câu 47

What does the `fallback` prop in Suspense represent?

- **A. The component to display while the lazy component is loading** ✅
- B. The component to display when an error occurs during loading
- C. The component to display when the lazy component is rendered
- D. The component to display when Suspense is not supported

> ✅ **Đáp án đúng:** **A** (The component to display while the lazy component is loading)
>
> 💡 **Giải thích:** Trong React, prop `fallback` của Suspense dùng để hiển thị UI tạm thời trong khi component lazy đang tải. Không dùng cho lỗi, render xong hay không hỗ trợ. Do đó, A là đáp án đúng.

---

### Câu 48

What is the main purpose of code splitting in a React application?

- A. To make the code easier to read
- B. To bundle all components into a single large file
- **C. To reduce the initial load time by loading parts of the app only when needed** ✅
- D. To split CSS and JavaScript into separate files

> ✅ **Đáp án đúng:** **C** (To reduce the initial load time by loading parts of the app only when needed)
>
> 💡 **Giải thích:** Code splitting trong React giúp chia nhỏ bundle, chỉ tải các phần code cần thiết khi người dùng truy cập — giảm thời gian tải ban đầu, cải thiện hiệu suất và trải nghiệm người dùng.

---

### Câu 49

In a React function component, how do you access a prop named "name" that is passed from a parent component?

- A. `this.props.name`
- **B. `props.name`** ✅
- C. `useState.name`
- D. `getProps().name`

> ✅ **Đáp án đúng:** **B** (`props.name`)
>
> 💡 **Giải thích:** Trong React function component, props được truyền vào như một tham số và truy cập qua `props.name`. `this.props.name` chỉ dùng trong class component, các lựa chọn còn lại không hợp lệ.

---

### Câu 50 *(Chọn 2 đáp án)*

Which of the following are valid ways to initialize and manage state in a functional React component? (Choose 2 correct answers)

- **A. Using the `useState` hook.** ✅
- **B. Using the `useReducer` hook.** ✅
- C. Using a `Provider` component.
- D. Using the `useRef` hook.

> ✅ **Đáp án đúng:** **A** (Using the `useState` hook.) ; **B** (Using the `useReducer` hook.)
>
> 💡 **Giải thích:** Trong React functional component, useState và useReducer là hai hook chính để khởi tạo và quản lý state. useRef dùng để tham chiếu DOM, không quản lý state. Provider dùng trong context, không phải cách trực tiếp quản lý state.

---

## 5. Đề 14: Kì SP26 — Đề 1 [Bản B] (50 câu)

### Câu 1

Analyze the differences between Flux and MVC architectures. Which statement is true?

- **A. Flux enforces unidirectional data flow, while MVC allows bidirectional data flow.** ✅
- B. MVC enforces unidirectional data flow, while Flux allows bidirectional data flow.
- C. Both Flux and MVC enforce unidirectional data flow.
- D. Both Flux and MVC allow bidirectional data flow.

> ✅ **Đáp án đúng:** **A** (Flux enforces unidirectional data flow, while MVC allows bidirectional data flow.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Kiến trúc **Flux** áp đặt luồng dữ liệu một chiều (unidirectional data flow: Action → Dispatcher → Store → View), trong khi **MVC** truyền thống cho phép cập nhật hai chiều (bidirectional data flow) giữa Model và View.

---

### Câu 2

Which component is typically used in conjunction with React lazy to handle the loading state?

- A. ```
  <ErrorBoundary>
  ```
- **B. ```
  <Suspense>
  ```** ✅
- C. ```
  <LoadingComponent>
  ```
- D. ```
  <Provider>
  ```

> ✅ **Đáp án đúng:** **B** (<Suspense>)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - `React.lazy()` luôn đi cặp với `<Suspense fallback={...}>` để hiển thị giao diện chờ (loading state) trong lúc file chunk của component đang được tải về.

---

### Câu 3

What is Redux Thunk used for?

- **A. To manage asynchronous actions in Redux.** ✅
- B. To log every action dispatched to the Redux store.
- C. To split reducers into simpler functions.
- D. To handle side effects in React components.

> ✅ **Đáp án đúng:** **A** (To manage asynchronous actions in Redux.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - **Redux Thunk** là middleware dùng để xử lý các **action bất đồng bộ** (asynchronous actions) như gọi API, bằng cách cho phép action creator trả về một function thay vì plain object.

---

### Câu 4

How do you wrap a lazy-loaded component with a fallback in React?

- A. ```
  <Suspense loader={<div>Loading...</div>}>
  <LazyComponent />
  </Suspense>
  ```
- **B. ```
  <Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
  </Suspense>
  ```** ✅
- C. ```
  <Await fallback={<div>Loading...</div>}>
  <LazyComponent />
  </Await>
  ```
- D. ```
  <Loading fallback={<div>Loading...</div>}>
  <LazyComponent />
  </Loading>
  ```

> ✅ **Đáp án đúng:** **B** (<Suspense fallback={<div>Loading...</div>}> <LazyComponent /> </Suspense>)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Cú pháp chuẩn để bọc một lazy-loaded component trong React là dùng `<Suspense fallback={<div>Loading...</div>}><LazyComponent /></Suspense>` (prop tên là `fallback`, không phải `loader`).

---

### Câu 5

How would you handle errors in a fetch request to ensure that the error is caught and logged to the console?

- **A. fetch(url).then((response) => { return response.json(); }).catch(error => console.log(error))** ✅
- B. fetch(url).then(response => response.catch(error => console.log(error)))
- C. fetch(url).catch(error => { console.log(error) })
- D. fetch(url).then(response => { throw new Error() }).catch(error => console.log(error))

> ✅ **Đáp án đúng:** **A** (fetch(url).then((response) => { return response.json(); }).catch(error => console.log(error)))
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Chuỗi Promise chuẩn khi gọi `fetch(url)` là `.then((response) => response.json()).catch(error => console.log(error))` để vừa parse dữ liệu JSON vừa bắt và log lỗi mạng/parse ở cuối chuỗi.

---

### Câu 6

What is one of the primary benefits of using Promises in JavaScript for asynchronous operations?

- A. It allows direct modification of the DOM
- B. It makes synchronous code asynchronous.
- **C. It helps solve the "callback hell" problem by allowing chains of asynchronous operations.** ✅
- D. It ensures data is always instantaneously available.

> ✅ **Đáp án đúng:** **C** (It helps solve the "callback hell" problem by allowing chains of asynchronous operations.)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Lợi ích cốt lõi của **Promises** là giải quyết vấn đề **"callback hell"** (callback lồng nhau rối rắm) bằng cách cho phép nối chuỗi bất đồng bộ rõ ràng qua `.then()` và xử lý lỗi tập trung bằng `.catch()`.

---

### Câu 7

What are the three possible states of a Promise as described in the sources?

- A. Initial, Running, Completed
- B. Starting, Paused, Finished
- **C. Pending, Fulfilled, Rejected** ✅
- D. Waiting, Processing, Error

> ✅ **Đáp án đúng:** **C** (Pending, Fulfilled, Rejected)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Một Promise trong JavaScript luôn có đúng 3 trạng thái: **Pending** (đang chờ), **Fulfilled** (hoàn thành thành công), và **Rejected** (thất bại).

---

### Câu 8

After making a successful fetch request, how would you retrieve the JSON data from the response object?

- A. response.data()
- **B. response.json()** ✅
- C. response.jsonText()
- D. response.body.json()

> ✅ **Đáp án đúng:** **B** (response.json())
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Đối tượng `Response` trả về từ `fetch()` cung cấp phương thức `response.json()` (trả về một Promise) để đọc và phân tích body thành JavaScript object.

---

### Câu 9

Which React concept is used to pass data from a parent component to a child component?

- A. State
- **B. Props** ✅
- C. Context
- D. Ref

> ✅ **Đáp án đúng:** **B** (Props)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - **Props** (properties) là cơ chế chuẩn trong React để truyền dữ liệu từ component cha xuống component con theo luồng dữ liệu một chiều.

---

### Câu 10

What is the main difference between props and state?

- A. Props are mutable, while state is immutable.
- B. State is used for passing data between components, while props are used to manage component behavior.
- **C. Props do not change after the initial render, while state can change over time.** ✅
- D. State is used for rendering UI, while props are used for functionality.

> ✅ **Đáp án đúng:** **C** (Props do not change after the initial render, while state can change over time.)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - **Props** là bất biến (read-only) đối với component nhận nó, còn **State** là dữ liệu nội bộ của component có thể thay đổi theo thời gian (qua `useState` / `setState`) và kích hoạt re-render UI.

---

### Câu 11

When should the useReducer() Hook be used instead of useState()?

- A. When components require simple, independent state values.
- B. When performing initialization and cleanup actions
- **C. When there is complex state logic, several sub-values, or when the upcoming state depends on the previous state** ✅
- D. When sharing data across a component hierarchy without prop

> ✅ **Đáp án đúng:** **C** (When there is complex state logic, several sub-values, or when the upcoming state depends on the previous state)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - `useReducer()` nên được chọn thay cho `useState()` khi logic state phức tạp, có nhiều giá trị con liên kết nhau hoặc state tiếp theo phụ thuộc vào state trước đó theo nhiều loại action.

---

### Câu 12

Which method would you use to update the state of a component in React?

- **A. setState** ✅
- B. getState
- C. updateState
- D. modifyState

> ✅ **Đáp án đúng:** **A** (setState)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Trong React Class Component, phương thức `setState` được dùng để cập nhật state và báo cho React re-render lại giao diện.

---

### Câu 13 *(Chọn 2 đáp án)*

Select the benefits of using React.memo and useMemo in React applications. (Choose 2 correct answers)

*(Chọn 2 đáp án)*

- **A. Prevent unnecessary component re-renders** ✅
- B. Automatically synchronize component state with global state
- **C. Guarantee object references don't change during re-rendering** ✅
- D. Simplify the process of context management

> ✅ **Đáp án đúng:** **A** (Prevent unnecessary component re-renders) ; **C** (Guarantee object references don't change during re-rendering)
>
> 💡 **Giải thích:** **Đáp án đúng: A và C** *(Câu chọn 2 đáp án)*
> 
> - `React.memo` giúp **ngăn component con re-render không cần thiết** khi props không đổi (A), còn `useMemo` giúp ghi nhớ giá trị/object tính toán để **giữ nguyên tham chiếu object giữa các lần render** (C).

---

### Câu 14

How do you define a route that matches /users/123 and passes the 123 as a parameter to the component?

- A. ```
  <Route path="/users?id" element={<User />}>
  ```
- **B. ```
  <Route path="/users/:id" element={<User />}>
  ```** ✅
- C. ```
  <Route path="/users/{id}" element={<User />}>
  ```
- D. ```
  <Route path="/users/#id" element={<User />}>
  ```

> ✅ **Đáp án đúng:** **B** (<Route path="/users/:id" element={<User />}>)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Trong React Router v6, dynamic parameter được khai báo bằng dấu hai chấm `:` trước tên tham số: `<Route path="/users/:id" element={<User />} />`.

---

### Câu 15

When declaring routes in React Router, what are Routes and Route components used for?

- A. Routes is for styling, and Route is for defining event handlers.
- B. Routes is for managing state, and Route is for rendering components.
- **C. Routes is used to wrap Route components and define the application's routes, while Route is used to define an individual route.** ✅
- D. Routes is for client-side logic, and Route is for server-side logic.

> ✅ **Đáp án đúng:** **C** (Routes is used to wrap Route components and define the application's routes, while Route is used to define an individual route.)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - `<Routes>` là container bọc ngoài các thẻ `<Route>` để đối chiếu URL hiện tại và chọn route khớp nhất, còn mỗi `<Route>` định nghĩa một đường dẫn cụ thể (`path`) cùng component hiển thị (`element`).

---

### Câu 16

Which component is used to define a route in React Router?

- **A. ```
  <Route>
  ```** ✅
- B. ```
  <Router>
  ```
- C. ```
  <Link>
  ```
- D. ```
  <Navigation>
  ```

> ✅ **Đáp án đúng:** **A** (<Route>)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Component `<Route>` được dùng để khai báo một tuyến đường cụ thể trong React Router (ví dụ `<Route path="/about" element={<About />} />`).

---

### Câu 17

What is the purpose of json-server in client-server communication?

- **A. To set up a simple static web server that serves data to clients.** ✅
- B. To encrypt data during transmission between client and server.
- C. To manage client authentication and session data.
- D. To provide a full-featured backend for the React application.

> ✅ **Đáp án đúng:** **A** (To set up a simple static web server that serves data to clients.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - `json-server` cho phép dựng nhanh một mock REST API server đơn giản từ một file JSON tĩnh (`db.json`) để phục vụ dữ liệu cho phía client trong quá trình học tập và phát triển.

---

### Câu 18

Which of the following is the correct syntax to use useDispatch in a functional component?

- **A. ```
  const MyComponent = () => {
    const dispatch = useDispatch();
    return <div>My Component</div>;
  }
  ```** ✅
- B. ```
  const MyComponent = () => { const dispatch = useDispatch; return <div>My Component</div>; }
  ```
- C. ```
  const MyComponent = () => {
    const dispatch = dispatch();
    return <div>My Component</div>;
  }
  ```
- D. ```
  const MyComponent = () => { const dispatch = useDispatch(); return <div>My Component with dispatch</div>; }
  ```

> ✅ **Đáp án đúng:** **A** (const MyComponent = () => {   const dispatch = useDispatch();   return <div>My Component</div>; })
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Cú pháp chuẩn để lấy hàm `dispatch` trong functional component là gọi hook `const dispatch = useDispatch();` (có dấu ngoặc tròn `()`).

---

### Câu 19

Which of the following is a valid JSON object?

- **A. ```
  {
    "name": "John Doe",
    "age": 30,
    "city": "New York"
  }
  ```** ✅
- B. ```
  {
    "name": "John Doe",
    "age": "30",
    "city": "New York"
  }
  ```
- C. ```
  {
    name: "John Doe",
    age: 30,
    city: "New York"
  }
  ```
- D. ```
  {
    "name" = "John Doe",
    "age" = 30,
    "city" = "New York"
  }
  ```

> ✅ **Đáp án đúng:** **A** ({   "name": "John Doe",   "age": 30,   "city": "New York" })
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - JSON chuẩn (RFC 8259) yêu cầu mọi key và chuỗi đều dùng dấu ngoặc kép `"`, ngăn cách key-value bằng dấu `:`, và số nguyên (`30`) không cần bọc ngoặc kép (đáp án A chuẩn xác nhất cho số tuổi `30`).

---

### Câu 20

What is the primary architectural style used in designing web services that follow REST principles?

- A. SOAP (Simple Object Access Protocol)
- B. RPC (Remote Procedure Call)
- C. MVC (Model-View-Controller)
- **D. RESTful (Representational State Transfer)** ✅

> ✅ **Đáp án đúng:** **D** (RESTful (Representational State Transfer))
>
> 💡 **Giải thích:** **Đáp án đúng: D**
> 
> - Kiến trúc thiết kế web service tuân theo các nguyên lý REST (sử dụng tài nguyên qua URI và các HTTP methods chuẩn GET/POST/PUT/DELETE) được gọi là **RESTful (Representational State Transfer)**.

---

### Câu 21

Create a React component that uses composition to include a header, main content, and footer. Which code snippet is correct?

- **A. ```
  function App() {
    return (<div><Header /><MainContent /><Footer /></div>);
  }
  ```** ✅
- B. ```
  function App() {
    return (<div><Header /><MainContent /></div>);
  }
  ```
- C. ```
  function App() {
    return (<div><MainContent /><Header /><Footer /></div>);
  }
  ```
- D. ```
  function App() {
    return (<div><Footer /><MainContent /></div>);
  }
  ```

> ✅ **Đáp án đúng:** **A** (function App() {   return (<div><Header /><MainContent /><Footer /></div>); })
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Đáp án A kết hợp đủ 3 thành phần theo đúng thứ tự yêu cầu: `<Header /><MainContent /><Footer />` nằm gọn trong một thẻ gốc `<div>`.

---

### Câu 22

Create a React component that displays a list of items passed as props. Which approach would you use?

- **A. Use a functional component with the map method** ✅
- B. Use a class component with componentDidMount
- C. Use a higher-order component
- D. Use a lifecycle method to fetch data

> ✅ **Đáp án đúng:** **A** (Use a functional component with the map method)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Cách chuẩn và hiện đại nhất để hiển thị một danh sách truyền qua props trong React là dùng **functional component** kết hợp phương thức **`Array.prototype.map()`** (kèm prop `key`).

---

### Câu 23

How can you avoid contradictions in state with this code?

```
const [isOpen, setIsOpen] = useState(false);
const [buttonText, setButtonText] = useState(isOpen ? "Close" : "Open");
function toggle() {
  setIsOpen(!isOpen);
  setButtonText(isOpen ? "Open" : "Close");
}
```

- A. The code above is fine as it is.
- **B. Remove buttonText from state and calculate it dynamically in the render method based on isOpen.** ✅
- C. Keep both isOpen and buttonText in state but update them separately.
- D. Use useEffect to sync buttonText with isOpen.

> ✅ **Đáp án đúng:** **B** (Remove buttonText from state and calculate it dynamically in the render method based on isOpen.)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - `buttonText` hoàn toàn có thể suy ra trực tiếp từ `isOpen` (`isOpen ? "Close" : "Open"`). Lưu giá trị suy dẫn (derived state) vào một `useState` riêng rất dễ gây lệch pha (contradiction). Cách tốt nhất là **xóa `buttonText` khỏi state và tính trực tiếp lúc render**.

---

### Câu 24

What is the main advantage of using Hooks in React?

- **A. Hooks allow React to maintain internal state without classes** ✅
- B. Hooks simplify sharing functionality between components
- C. Hooks remove the need for functional components
- D. Hooks only support stateful components

> ✅ **Đáp án đúng:** **A** (Hooks allow React to maintain internal state without classes)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Lợi ích nền tảng nhất của **React Hooks** (từ React 16.8) là cho phép **functional components** quản lý state nội bộ (`useState`, `useReducer`) và vòng đời (`useEffect`) mà không cần viết Class Component.

---

### Câu 25

What does the default case in the reducer function do?

- A. Resets the state
- B. Handles unknown actions
- C. Throws an error for unknown actions
- **D. Returns the current state** ✅

> ✅ **Đáp án đúng:** **D** (Returns the current state)
>
> 💡 **Giải thích:** **Đáp án đúng: D**
> 
> - Nhánh `default` trong reducer (`default: return state;`) có nhiệm vụ **trả về nguyên state hiện tại** khi action được dispatch không khớp với bất kỳ `case` nào của reducer đó.

---

### Câu 26

What is the purpose of package.json in a Node.js project?

- **A. It defines the project's dependencies and scripts** ✅
- B. It contains the source code of the project
- C. It configures the Node.js environment
- D. It manages the project's build process

> ✅ **Đáp án đúng:** **A** (It defines the project's dependencies and scripts)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - `package.json` là file cấu hình trung tâm của dự án Node.js, khai báo danh sách thư viện phụ thuộc (`dependencies`, `devDependencies`), metadata và các lệnh `scripts` (`dev`, `build`, `test`).

---

### Câu 27

What is the main purpose of React in modern web development, and what type of applications does it best support?

- A. It is mainly designed for handling backend logic and database management
- **B. React helps build interactive user interfaces, especially for SPAs.** ✅
- C. React primarily functions as a server-side rendering engine for web applications.
- D. It is mainly a mobile development framework and not suitable for web applications.

> ✅ **Đáp án đúng:** **B** (React helps build interactive user interfaces, especially for SPAs.)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - React là thư viện JavaScript giúp xây dựng giao diện người dùng tương tác (interactive UIs), đặc biệt tỏa sáng với các ứng dụng trang đơn **SPA (Single Page Applications)**.

---

### Câu 28

Which of the following is NOT a feature of React?

- A. Component-Based
- B. Virtual DOM
- C. Large Community
- **D. Server-Side Rendering** ✅

> ✅ **Đáp án đúng:** **D** (Server-Side Rendering)
>
> 💡 **Giải thích:** **Đáp án đúng: D**
> 
> - React thuần tập trung vào Component-Based UI, Virtual DOM và có cộng đồng cực lớn; **Server-Side Rendering (SSR)** tích hợp sẵn là tính năng đặc trưng của framework như **Next.js**, không phải tính năng mặc định cốt lõi của React SPA thuần.

---

### Câu 29

How can you conditionally render content in JSX?

- A. By using the if statement
- B. By using the for loop
- **C. By using the ternary operator (condition ? trueContent : falseContent)** ✅
- D. By using the switch statement

> ✅ **Đáp án đúng:** **C** (By using the ternary operator (condition ? trueContent : falseContent))
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Trong JSX ta dùng **toán tử 3 ngôi (`condition ? trueContent : falseContent`)** hoặc toán tử logic `&&` để render có điều kiện vì `{}` chỉ chấp nhận biểu thức, không nhận câu lệnh `if`/`switch`/`for`.

---

### Câu 30

Which method is used to perform enhanced array manipulation in ES6?

- **A. map()** ✅
- B. forEach()
- C. reduce()
- D. filter()

> ✅ **Đáp án đúng:** **A** (map())
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - `map()` là phương thức biến đổi mảng phổ biến nhất trong ES6/React, tạo ra một mảng mới đã biến đổi từng phần tử mà không làm thay đổi mảng gốc.

---

### Câu 31

In JSX, which of the following is correct?

- **A. You must always wrap JSX in a single root element** ✅
- B. You can use multiple root elements without any wrapping
- C. JSX tags can be self-closing only for non-void elements
- D. JSX does not support attributes like className

> ✅ **Đáp án đúng:** **A** (You must always wrap JSX in a single root element)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Mỗi biểu thức JSX trả về từ một component bắt buộc phải được bọc trong **một phần tử gốc duy nhất** (một thẻ cha như `<div>` hoặc Fragment `<>...</>`).

---

### Câu 32

How can you install React-Bootstrap in your ReactJS project?

- **A. By using npm or yarn to install the package.** ✅
- B. By downloading the React-Bootstrap files from a website.
- C. By copying and pasting the React-Bootstrap code into your project.
- D. By using a CDN link to include React-Bootstrap in your HTML file.

> ✅ **Đáp án đúng:** **A** (By using npm or yarn to install the package.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Cách cài đặt chuẩn cho React-Bootstrap trong dự án React là dùng trình quản lý gói `npm` hoặc `yarn`: `npm install react-bootstrap bootstrap`.

---

### Câu 33

How do you use the Grid system in React-Bootstrap?

- A. ```
  <Row>
  <Container>
    <Col xs={6}>2 of 3 (wider)</Col>
  </Container>
  </Row>
  ```
- B. ```
  <Row>
  <Container>
    <Column>1 of 3</Column>
  </Container>
  </Row>
  ```
- **C. ```
  <Container>
  <Row>
    <Col xs={6}>2 of 3 (wider)</Col>
  </Row>
  </Container>
  ```** ✅
- D. ```
  <Container>
  <Column>
    <Row xs={6}>2 of 3 (wider)</Row>
  </Column>
  </Container>
  ```

> ✅ **Đáp án đúng:** **C** (<Container> <Row>   <Col xs={6}>2 of 3 (wider)</Col> </Row> </Container>)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Cấu trúc Grid chuẩn 3 tầng của React-Bootstrap từ ngoài vào trong là **`<Container>` → `<Row>` → `<Col>`** (đáp án C).

---

### Câu 34

What is the purpose of the 'fluid' prop in React-Bootstrap's Container component?

- **A. It makes the container take up the entire width of the viewport.** ✅
- B. It enables the container to display text.
- C. It changes the container's background color.
- D. It makes the container fixed width.

> ✅ **Đáp án đúng:** **A** (It makes the container take up the entire width of the viewport.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Prop `fluid` trên `<Container fluid>` giúp container mở rộng chiếm trọn **100% chiều rộng viewport** ở mọi kích thước màn hình.

---

### Câu 35

Assess the impact of using inline event handlers in React components. Which statement is true?

- A. Inline event handlers improve performance by reducing the number of function calls
- **B. Inline event handlers can lead to performance issues due to the creation of new functions on each render** ✅
- C. Inline event handlers are the only way to handle events in React
- D. Inline event handlers are more secure than named event handlers

> ✅ **Đáp án đúng:** **B** (Inline event handlers can lead to performance issues due to the creation of new functions on each render)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Viết inline event handler (`onClick={() => doSomething()}`) tạo ra một tham chiếu hàm mới sau mỗi lần render, có thể gây giảm hiệu năng hoặc khiến component con bọc `React.memo` bị re-render không cần thiết.

---

### Câu 36

Analyze the benefits of using synthetic events in React. Which of the following is NOT a benefit?

- A. Provides a consistent event interface across different browsers
- B. Contains information necessary for event propagation
- **C. Reduces the need for garbage collection** ✅
- D. Normalizes browser inconsistencies

> ✅ **Đáp án đúng:** **C** (Reduces the need for garbage collection)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - `SyntheticEvent` giúp chuẩn hóa API sự kiện trên mọi trình duyệt (A, D) và cung cấp thông tin xử lý lan truyền sự kiện (B). Từ React 17 trở đi React đã bỏ event pooling nên "giảm nhu cầu garbage collection" (C) KHÔNG phải lợi ích chính của SyntheticEvent.

---

### Câu 37

What does the render method in a React component do?

- A. It manages state updates
- B. It handles side effects
- **C. It returns the JSX that describes the UI** ✅
- D. It fetches data from an API

> ✅ **Đáp án đúng:** **C** (It returns the JSX that describes the UI)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Phương thức `render()` trong React component trả về cấu trúc **JSX** mô tả giao diện người dùng sẽ được hiển thị.

---

### Câu 38

What is a key differentiating characteristic of Tailwind CSS compared to traditional CSS frameworks like Bootstrap, as described in the sources?

- A. It provides a comprehensive set of pre-built components for rapid development
- B. It enforces strict design patterns to maintain visual consistency.
- **C. It offers a huge list of utility CSS classes, providing more freedom for custom designs.** ✅
- D. It relies heavily on JavaScript for styling and layout management.

> ✅ **Đáp án đúng:** **C** (It offers a huge list of utility CSS classes, providing more freedom for custom designs.)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Điểm khác biệt cốt lõi của **Tailwind CSS** so với Bootstrap là triết lý **utility-first**: cung cấp hàng loạt class CSS tiện ích nhỏ gọn giúp lập trình viên tự do sáng tạo thiết kế riêng mà không bị rập khuôn theo component dựng sẵn.

---

### Câu 39

Next.js is primarily used for:

- A. Styling static websites
- **B. Creating server-rendered or statically generated React applications** ✅
- C. Managing back-end databases
- D. Handling real-time communication

> ✅ **Đáp án đúng:** **B** (Creating server-rendered or statically generated React applications)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - **Next.js** chủ yếu được dùng để xây dựng các ứng dụng React có hỗ trợ **Server-Side Rendering (SSR)** và **Static Site Generation (SSG)**.

---

### Câu 40

In Next.js, what mechanism primarily determines the routes in an application?

- A. Explicit configuration in a central routes.json file.
- **B. File-system routing, where routes are determined by the structure of files.** ✅
- C. Dynamic route declarations using React Router.
- D. Server-side API endpoints only.

> ✅ **Đáp án đúng:** **B** (File-system routing, where routes are determined by the structure of files.)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Next.js sử dụng cơ chế **File-system routing**: cấu trúc thư mục và tên file trong `app/` (App Router) hoặc `pages/` (Pages Router) tự động quyết định đường dẫn URL của ứng dụng.

---

### Câu 41

How does Next.js's server-side rendering capability primarily benefit web applications?

- A. By offloading all rendering tasks to the client's browser
- B. By eliminating the need for any server infrastructure
- **C. By resulting in faster initial page load times and better search engine optimization (SEO)** ✅
- D. By simplifying complex client-side state management.

> ✅ **Đáp án đúng:** **C** (By resulting in faster initial page load times and better search engine optimization (SEO))
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Server-Side Rendering (SSR) trong Next.js gửi sẵn HTML đã render từ server về trình duyệt, giúp **tải trang lần đầu nhanh hơn** và tối ưu **SEO** vượt trội so với CSR thuần.

---

### Câu 42

If you wanted to customize the size of the form controls, what would you do in Bootstrap 5?

- A. Set width in inline CSS
- B. Use the rows and cols attributes for all form elements
- **C. Use the size variants of the .form-control class, like .form-control-sm or .form-control-lg** ✅
- D. Apply custom JavaScript functions

> ✅ **Đáp án đúng:** **C** (Use the size variants of the .form-control class, like .form-control-sm or .form-control-lg)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Trong Bootstrap 5, để đổi kích thước các ô nhập liệu form, ta dùng các class biến thể của `.form-control` là **`.form-control-sm`** (nhỏ) hoặc **`.form-control-lg`** (lớn).

---

### Câu 43

How do you create a responsive grid layout using Bootstrap?

- A. ```
  By using the <div class="grid"> element.
  ```
- B. By applying the .responsive-grid class to the container element.
- **C. By using the .row and .col-*-* classes to create rows and columns.** ✅
- D. By manually specifying the width of each element using CSS.

> ✅ **Đáp án đúng:** **C** (By using the .row and .col-*-* classes to create rows and columns.)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Hệ thống lưới responsive của Bootstrap được tạo bằng cách kết hợp `.row` và các class cột `.col-{breakpoint}-{size}` (ví dụ `.col-md-6`).

---

### Câu 44

Which of the following components can be used to create a slideshow in Bootstrap?

- A. popover
- B. modal
- **C. carousel** ✅
- D. nav-pills

> ✅ **Đáp án đúng:** **C** (carousel)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Component **`carousel`** (`.carousel`) trong Bootstrap được dùng để tạo slideshow trình chiếu ảnh/nội dung xoay vòng.

---

### Câu 45

What does the useNavigate hook return?

- A. An object with navigation methods.
- **B. A navigate function that can be used to navigate to a new location** ✅
- C. A boolean indicating navigation status
- D. A string representing the current route.

> ✅ **Đáp án đúng:** **B** (A navigate function that can be used to navigate to a new location)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Hook `useNavigate()` của React Router v6 trả về một **hàm `navigate`** dùng để chuyển trang bằng code (ví dụ `navigate('/home')` hoặc `navigate(-1)`).

---

### Câu 46

How do you define a dynamic route parameter in React Router?

- A. ```
  <Route path="/user/id" component={UserProfile} />
  ```
- **B. ```
  <Route path="/user/:id" component={UserProfile} />
  ```** ✅
- C. ```
  <Route path="/user?id" component={UserProfile} />
  ```
- D. ```
  <Route path="/user/{id}" component={UserProfile} />
  ```

> ✅ **Đáp án đúng:** **B** (<Route path="/user/:id" component={UserProfile} />)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Tham số động (dynamic route parameter) trong React Router được định nghĩa bằng dấu hai chấm `:` trước tên tham số: `path="/user/:id"`.

---

### Câu 47

What does the fallback prop in Suspense represent?

- **A. The component to display while the lazy component is loading** ✅
- B. The component to display when an error occurs during loading
- C. The component to display when the lazy component is rendered
- D. The component to display when Suspense is not supported

> ✅ **Đáp án đúng:** **A** (The component to display while the lazy component is loading)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Prop `fallback` của `<Suspense>` đại diện cho component/giao diện tạm thời sẽ hiển thị trong lúc lazy component đang được tải về.

---

### Câu 48

What is the main purpose of code splitting in a React application?

- A. To make the code easier to read
- B. To bundle all components into a single large file
- **C. To reduce the initial load time by loading parts of the app only when needed** ✅
- D. To split CSS and JavaScript into separate files

> ✅ **Đáp án đúng:** **C** (To reduce the initial load time by loading parts of the app only when needed)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Mục đích chính của **Code Splitting** là **giảm thời gian tải ban đầu** (initial load time) bằng cách chỉ tải những phần mã nguồn người dùng thực sự cần đến.

---

### Câu 49

In a React function component, how do you access a prop named "name" that is passed from a parent component?

- A. this.props.name
- **B. props.name** ✅
- C. useState.name
- D. getProps().name

> ✅ **Đáp án đúng:** **B** (props.name)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Trong functional component, props được truyền vào làm tham số đầu tiên của hàm nên ta truy cập qua **`props.name`** (hoặc destructuring `{ name }`), KHÔNG dùng `this.props.name`.

---

### Câu 50 *(Chọn 2 đáp án)*

Which of the following are valid ways to initialize and manage state in a functional React component? (Choose 2 correct answers)

*(Chọn 2 đáp án)*

- **A. Using the useState hook.** ✅
- **B. Using the useReducer hook.** ✅
- C. Using a Provider component.
- D. Using the useRef hook.

> ✅ **Đáp án đúng:** **A** (Using the useState hook.) ; **B** (Using the useReducer hook.)
>
> 💡 **Giải thích:** **Đáp án đúng: A và B** *(Câu chọn 2 đáp án)*
> 
> - Hai hook chuẩn dùng để khởi tạo và quản lý state (kích hoạt re-render khi đổi) trong functional component là **`useState`** (A) và **`useReducer`** (B). (`useRef` không kích hoạt re-render, còn `Provider` chỉ phân phối Context).

---

## 6. Đề 01: Kì SP26 — Đề 2 (50 câu)

### Câu 1

Which of the following is a common use case for using Redux in a React application?

- **A. Managing authentication and user sessions** ✅
- B. Styling and layout of React components
- C. Handling form validation and input tracking
- D. Implementing server-side rendering in React

> ✅ **Đáp án đúng:** **A** (Managing authentication and user sessions)
>
> 💡 **Giải thích:** Redux được dùng để quản lý state toàn cục trong React, đặc biệt hữu ích cho các trường hợp như xác thực người dùng và phiên làm việc, nơi cần chia sẻ dữ liệu giữa nhiều component.

---

### Câu 2

Which hook is typically used alongside useSelector to modify the Redux state?

- A. useState
- B. useEffect
- **C. useDispatch** ✅
- D. useContext

> ✅ **Đáp án đúng:** **C** (useDispatch)
>
> 💡 **Giải thích:** Trong Redux với React, useSelector dùng để lấy state, còn useDispatch dùng để gửi action (dispatch) nhằm thay đổi state. useState, useEffect, useContext không liên quan trực tiếp đến Redux state modification.

---

### Câu 3

What is the purpose of the Redux middleware in React applications?

- **A. To handle asynchronous actions and side effects** ✅
- B. To define the structure of the Redux store
- C. To connect React components to the Redux store
- D. To manage component hierarchy

> ✅ **Đáp án đúng:** **A** (To handle asynchronous actions and side effects)
>
> 💡 **Giải thích:** Redux middleware (như Redux Thunk, Saga) cho phép xử lý hành động bất đồng bộ (API calls, timers...) và side effects trước khi chúng đến reducer, giúp giữ reducer thuần túy và dự đoán được.

---

### Câu 4

What is the core principle of Redux?

- **A. Single source of truth and unidirectional data flow.** ✅
- B. Multiple sources of truth for each component.
- C. State is mutable and can be directly modified.
- D. State is only updated using the useState hook.

> ✅ **Đáp án đúng:** **A** (Single source of truth and unidirectional data flow.)
>
> 💡 **Giải thích:** Redux dựa trên nguyên tắc duy nhất là có một store duy nhất (single source of truth) và dữ liệu chỉ chảy theo một chiều (unidirectional data flow) để đảm bảo tính dự đoán và dễ debug.

---

### Câu 5

What is the advantage of using Axios over fetch?

- **A. Axios has better support for handling requests and responses.** ✅
- B. Axios requires less boilerplate code.
- C. Axios is faster than fetch for all types of HTTP requests.
- D. Axios does not support promises.

> ✅ **Đáp án đúng:** **A** (Axios has better support for handling requests and responses.)
>
> 💡 **Giải thích:** Axios cung cấp tính năng xử lý request/response tốt hơn như tự động parse JSON, interceptors, cancel request, và hỗ trợ cả browser và Node.js. Fetch không có sẵn những tính năng này.

---

### Câu 6

What is the main purpose of the `await` keyword within an `async` function?

- A. To return a new `Promise` object.
- B. To immediately execute the next line of code without waiting.
- **C. To pause the execution of the async function until the Promise it's waiting for is resolved or rejected.** ✅
- D. To define a synchronous block of code

> ✅ **Đáp án đúng:** **C** (To pause the execution of the async function until the Promise it's waiting for is resolved or rejected.)
>
> 💡 **Giải thích:** Từ khóa 'await' dừng thực thi hàm async cho đến khi Promise được giải quyết (resolve hoặc reject), giúp viết code bất đồng bộ giống đồng bộ, dễ đọc hơn.

---

### Câu 7

Why would a React developer choose to use "Axios"?

- A. To render React components faster
- B. To manage component state globally
- **C. To make HTTP requests to APIs** ✅
- D. To build reusable hooks

> ✅ **Đáp án đúng:** **C** (To make HTTP requests to APIs)
>
> 💡 **Giải thích:** Axios is a popular JavaScript library for making HTTP requests from the browser or Node.js. It is not for rendering, state management, or hooks — those are handled by React core or libraries like Redux or custom hooks.

---

### Câu 8

Which method is most commonly used in a React app to fetch data from a server?

- A. WebSockets
- B. useState()
- **C. fetch() or axios inside useEffect()** ✅
- D. console.log() inside render()

> ✅ **Đáp án đúng:** **C** (fetch() or axios inside useEffect())
>
> 💡 **Giải thích:** Trong React, cách phổ biến nhất để lấy dữ liệu từ server là dùng fetch() hoặc thư viện axios bên trong useEffect() để đảm bảo gọi API sau khi component mount và tránh gọi lặp không cần thiết.

---

### Câu 9

Which of the following is used to pass a function from a parent component to a child component?

- **A. Passing a function as a prop to the child component.** ✅
- B. Using useState hook in the child component.
- C. Using useContext in both parent and child components.
- D. Directly accessing the child component's state.

> ✅ **Đáp án đúng:** **A** (Passing a function as a prop to the child component.)
>
> 💡 **Giải thích:** Trong React, để truyền hàm từ component cha sang con, cách chuẩn là truyền hàm qua props. Các lựa chọn khác như useState, useContext hoặc truy cập trực tiếp state con đều không đúng mục đích này.

---

### Câu 10

What happens when you use the xs prop on a Col component in React-Bootstrap?

- A. The column will only have its width defined on extra-large screens.
- B. The column will only have its width defined on extra-small screens, and larger sizes will ignore it
- **C. The column will have its width defined on extra-small screens and will apply to larger sizes if no specific breakpoint is defined.** ✅
- D. The xs prop does not exist in React-Bootstrap

> ✅ **Đáp án đúng:** **C** (The column will have its width defined on extra-small screens and will apply to larger sizes if no specific breakpoint is defined.)
>
> 💡 **Giải thích:** In React-Bootstrap, the 'xs' prop sets the column width for extra-small screens and acts as the default for larger screens unless overridden by sm, md, lg, or xl props.

---

### Câu 11

How can you ensure that a prop is passed as an array with at least one element?

- A. By using `PropTypes.array.isRequired`
- **B. By creating a custom PropType validator** ✅
- C. By using `PropTypes.arrayOf()`
- D. By using `PropTypes.objectOf()`

> ✅ **Đáp án đúng:** **B** (By creating a custom PropType validator)
>
> 💡 **Giải thích:** PropTypes.array.isRequired only ensures the prop is an array and required, but doesn’t enforce minimum length. A custom validator is needed to check for at least one element.

---

### Câu 12

What is the primary purpose of a router in a web application?

- A. To manage state within a component
- **B. To respond to a URL based on a set of route handler declarations** ✅
- C. To handle server-side logic
- D. To manage routing in a React application

> ✅ **Đáp án đúng:** **B** (To respond to a URL based on a set of route handler declarations)
>
> 💡 **Giải thích:** Router trong ứng dụng web có nhiệm vụ ánh xạ URL đến các handler tương ứng để xử lý yêu cầu. Đây là chức năng cốt lõi, không phải quản lý state (A), logic server-side (C) hay chỉ riêng React (D). Đáp án B.

---

### Câu 13

How do you declare a route in React Router?

- A. Using `<Link path="/" element={<Home>} />`
- **B. Using `<Route path="/" element={<Home>} />`** ✅
- C. Using `<Routes path="/" element={<Home>} />`
- D. Using `<context path="/"></context><suspense></home>`

> ✅ **Đáp án đúng:** **B** (Using `<Route path="/" element={<Home>} />`)
>
> 💡 **Giải thích:** Trong React Router v6, route được khai báo bằng component <Route> với thuộc tính path và element. Các lựa chọn khác sai cú pháp hoặc dùng component không tồn tại.

---

### Câu 14

What is the difference between the HTTP response codes 401 and 403?

- **A. 401 the request is missing valid authentication credentials, while 403 the server refuses to authorize.** ✅
- B. 401 the server encountered an internal error, while 403 means the requested resource was not found.
- C. 401 the request was successful, while 403 means the request was not modified.
- D. 401 and 403 are interchangeable and have the same meaning.

> ✅ **Đáp án đúng:** **A** (401 the request is missing valid authentication credentials, while 403 the server refuses to authorize.)
>
> 💡 **Giải thích:** HTTP 401 Unauthorized: yêu cầu thiếu thông tin xác thực hợp lệ. HTTP 403 Forbidden: máy chủ hiểu yêu cầu nhưng từ chối thực hiện do không có quyền truy cập. Hai mã này không giống nhau và không thể thay thế lẫn nhau.

---

### Câu 15

```javascript
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const port = 3000;

server.use(router);

server.listen(port, () => {
  console.log(`JSON server is running on port ${port}`);
});
```

What is the above code used for?

- **A. Create a dynamic server to serve JSON data.** ✅
- B. Create a dynamic web application using JSON data.
- C. Create a JSON file based on data from the server.
- D. Configure the development environment for the project using JSON.

> ✅ **Đáp án đúng:** **A** (Create a dynamic server to serve JSON data.)
>
> 💡 **Giải thích:** Mã này dùng json-server để khởi tạo server HTTP lắng nghe trên cổng 3000, phục vụ dữ liệu từ file data.json. Đây là server REST giả lập, dùng để mock API, không phải tạo ứng dụng web hay cấu hình môi trường.

---

### Câu 16

How do you dispatch an action when a button is clicked?

- **A. const handleClick = () => {
      dispatch({ type: 'BUTTON_CLICKED' });
  };
  <button onClick={handleClick}>Click me</button>;** ✅
- B. const handleClick = () => {
      dispatch({ type: 'BUTTON_CLICKED' });
  };
  <button onClick={() => handleClick()}>Click me</button>;
- C. const handleClick = () => { dispatch({ type: 'BUTTON_CLICKED' }); }; <button onClick={handleClick()}>Click me</button>;
- D. const handleClick = () => {
      dispatch({ action: 'BUTTON_CLICKED' });
  };
  <button onClick={handleClick}>Click me</button>;

> ✅ **Đáp án đúng:** **A** (const handleClick = () => {     dispatch({ type: 'BUTTON_CLICKED' }); }; <button onClick={handleClick}>Click me</button>;)
>
> 💡 **Giải thích:** Trong React, để dispatch action khi click, ta định nghĩa hàm handleClick và truyền hàm đó vào onClick (không gọi hàm trực tiếp). Câu A đúng cú pháp và cách dùng. Câu C gọi hàm ngay khi render → sai. Câu D dùng 'action' thay vì 'type' → sai.

---

### Câu 17

Which of the following is the correct way to use useSelector to access a value from the Redux store?

- A. `const value = useSelector((store) => store.value);`
- **B. `const value = useSelector((state) => state.value);`** ✅
- C. `const value = useSelector((context) => context.value);`
- D. `const value = useSelector((redux) => redux.value);`

> ✅ **Đáp án đúng:** **B** (`const value = useSelector((state) => state.value);`)
>
> 💡 **Giải thích:** In Redux, useSelector hook receives the state as its parameter, not store, context, or redux. The correct syntax is (state) => state.value to access a value from the store.

---

### Câu 18

What is the typical file extension for a React component?

- A. .html
- B. .css
- **C. .js or .jsx** ✅
- D. .php

> ✅ **Đáp án đúng:** **C** (.js or .jsx)
>
> 💡 **Giải thích:** React component thường được viết trong file có phần mở rộng .js hoặc .jsx. .jsx cho phép viết mã JSX (JavaScript XML) trong JavaScript, trong khi .js là định dạng chuẩn. Các phần mở rộng khác như .html, .css, .php không dùng cho component React.

---

### Câu 19 *(Chọn 2 đáp án)*

What is the purpose of React.Fragment or shorthand <> </> in React?(Select all that apply)

- **A. Fragments allow you to group multiple elements without adding an extra node to the DOM.** ✅
- B. Fragments allow you to provide CSS styling to multiple elements.
- C. Fragments allow you to handle state management in React.
- **D. Fragments are particularly useful for avoiding unnecessary `<div>` elements, which can clutter your markup.** ✅

> ✅ **Đáp án đúng:** **A** (Fragments allow you to group multiple elements without adding an extra node to the DOM.) ; **D** (Fragments are particularly useful for avoiding unnecessary `<div>` elements, which can clutter your markup.)
>
> 💡 **Giải thích:** React.Fragment (hoặc <> </>) giúp nhóm nhiều phần tử JSX mà không thêm node DOM thừa, giúp mã sạch hơn và tránh làm rối markup. Không liên quan đến styling hay quản lý state.

---

### Câu 20

How can the `useEffect` hook be optimized for cleanup actions?

- **A. By passing an empty array as the second argument** ✅
- B. By using a class-based component
- C. By calling it after every render
- D. By manually removing event listeners

> ✅ **Đáp án đúng:** **A** (By passing an empty array as the second argument)
>
> 💡 **Giải thích:** Passing an empty dependency array to useEffect ensures it runs only once (on mount), and any cleanup function returned will run on unmount — ideal for cleanup like removing event listeners.

---

### Câu 21

How would you use the useContext Hook to access a shared theme in a React component?

- **A. const theme = useContext(ThemeContext);** ✅
- B. const { theme } = useContext(ThemeContext);
- C. const { theme } = useContext(ThemeContext.Provider);
- D. const theme = useContext(ThemeContext.Provider);

> ✅ **Đáp án đúng:** **A** (const theme = useContext(ThemeContext);)
>
> 💡 **Giải thích:** useContext Hook nhận đối tượng Context (không phải Provider) và trả về giá trị hiện tại của Context. Nếu Context cung cấp một object (ví dụ { theme: 'dark' }), bạn có thể destructuring sau khi gọi useContext, nhưng cú pháp đúng là useContext(ThemeContext), không phải useContext(ThemeContext.Provider). Provider chỉ dùng để cung cấp giá trị, không dùng để consume.

---

### Câu 22

Which of the following could cause an Effect to run too frequently?

- A. Including all state variables in the dependency array.
- B. Not using a dependency array.
- **C. Including a variable like data that changes often in the dependency array.** ✅
- D. Omitting the dependency array altogether.

> ✅ **Đáp án đúng:** **C** (Including a variable like data that changes often in the dependency array.)
>
> 💡 **Giải thích:** Nếu dependency array chứa biến thay đổi liên tục (ví dụ: data), useEffect sẽ chạy lại mỗi khi biến đó thay đổi → gây chạy quá thường xuyên.

---

### Câu 23

Which of the following is NOT considered a popular front-end framework?

- A. React
- B. Angular
- **C. Django** ✅
- D. Vue.js

> ✅ **Đáp án đúng:** **C** (Django)
>
> 💡 **Giải thích:** Django là một framework backend (server-side) viết bằng Python, không phải front-end. Các lựa chọn còn lại: React, Angular, Vue.js đều là framework front-end phổ biến dùng để xây dựng giao diện người dùng. Do đó, Django là đáp án đúng cho câu hỏi 'không phải front-end framework'.

---

### Câu 24

What is one major benefit of using front-end frameworks like React or Vue.js?

- A. They eliminate the need for HTML
- **B. They allow for faster development by providing pre-built components** ✅
- C. They only work on mobile applications
- D. They focus solely on server-side development

> ✅ **Đáp án đúng:** **B** (They allow for faster development by providing pre-built components)
>
> 💡 **Giải thích:** React/Vue.js speed up development via reusable components and state management. They don’t eliminate HTML, aren’t mobile-only, and focus on client-side, not server-side.

---

### Câu 25

How can you access Chrome DevTools?

- **A. By pressing F12 or right-clicking and selecting "Inspect"** ✅
- B. By installing a Chrome extension
- C. By typing "chrome://devtools" in the address bar
- D. By opening the Chrome menu and selecting "DevTools"

> ✅ **Đáp án đúng:** **A** (By pressing F12 or right-clicking and selecting "Inspect")
>
> 💡 **Giải thích:** Chrome DevTools có thể truy cập nhanh bằng phím F12 hoặc chuột phải → Inspect. Các cách khác không chính xác hoặc không phổ biến.

---

### Câu 26

How would you render a user's name dynamically inside an `<h2>` tag in JSX?

- A. `<h2> <p>{userName}</p> </h2>`
- **B. `<h2> {userName} </h2>`** ✅
- C. `<h2> "userName" </h2>`
- D. `<h2>{userName: "John"}</h2>`

> ✅ **Đáp án đúng:** **B** (`<h2> {userName} </h2>`)
>
> 💡 **Giải thích:** In JSX, to render a dynamic value like userName inside an h2 tag, you use curly braces {userName} directly within the tag. Other options are syntactically incorrect or static.

---

### Câu 27

The purpose of JSX is to:

- **A. Make JavaScript code more readable by embedding HTML in JavaScript** ✅
- B. Make JavaScript run faster
- C. Encrypt HTML elements
- D. Handle server-side logic

> ✅ **Đáp án đúng:** **A** (Make JavaScript code more readable by embedding HTML in JavaScript)
>
> 💡 **Giải thích:** JSX cho phép nhúng HTML vào JavaScript, giúp code React dễ đọc và bảo trì hơn. Không làm JS chạy nhanh hơn, không mã hóa HTML hay xử lý logic server-side.

---

### Câu 28 *(Chọn 3 đáp án)*

What does ES6 introduce that is essential for React applications? (Select all that apply)

- **A. Arrow functions** ✅
- **B. Destructuring assignment** ✅
- C. JSX syntax
- **D. Template Literals** ✅

> ✅ **Đáp án đúng:** **A** (Arrow functions) ; **B** (Destructuring assignment) ; **D** (Template Literals)
>
> 💡 **Giải thích:** ES6 introduced arrow functions (A), destructuring (B), and template literals (D) — all widely used in React for concise syntax, state handling, and dynamic strings. JSX (C) is not part of ES6; it’s a React-specific syntax extension transpiled by Babel.

---

### Câu 29 *(Chọn 2 đáp án)*

How do you import and use a Button component from React-Bootstrap 5?(Select all that apply)

- **A. import React from 'react';
  import Button from 'react-bootstrap/Button';
  
  function Demo() {
    return (
      <Button variant="primary">
    );
  }
  
  export default Demo;** ✅
- B. import React from 'react';
  import Button from 'react-bootstrap/Button';
  
  function Demo() {
    return (
      <button variant="primary"> Primary Button</button>
    );
  }
  
  export default Demo;
- **C. import React from 'react';
  import Button from 'react-bootstrap/Button';
  
  function Demo() {
    return (
      <Button variant="primary">Primary Button</Button>
    );
  }
  
  export default Demo;** ✅
- D. import React from 'react';
  import Button from 'react-bootstrap/Button';
  
  function Demo() {
    return (
      <button variant="primary"/>
    );
  }
  
  export default Demo;

> ✅ **Đáp án đúng:** **A** (import React from 'react'; import Button from 'react-bootstrap/Button'; function Demo() {   return (     <Button variant="primary">   ); } export default Demo;) ; **C** (import React from 'react'; import Button from 'react-bootstrap/Button'; function Demo() {   return (     <Button variant="primary">Primary Button</Button>   ); } export default Demo;)
>
> 💡 **Giải thích:** A đúng vì cú pháp import và sử dụng <Button variant="primary"> là chuẩn React-Bootstrap. C đúng vì có đóng thẻ và có nội dung 'Primary Button'. B và D sai vì dùng thẻ <button> thay vì component <Button> của React-Bootstrap, không áp dụng được prop variant như vậy.

---

### Câu 30

What is the main purpose of React-Bootstrap?

- A. To build React components using jQuery
- B. To use Bootstrap styles with inline CSS only
- **C. To provide Bootstrap-styled components built entirely with React** ✅
- D. To convert Bootstrap HTML into Angular components

> ✅ **Đáp án đúng:** **C** (To provide Bootstrap-styled components built entirely with React)
>
> 💡 **Giải thích:** React-Bootstrap là thư viện cung cấp các thành phần giao diện người dùng (UI components) được thiết kế theo phong cách Bootstrap, nhưng được xây dựng hoàn toàn bằng React, không phụ thuộc vào jQuery hay JavaScript gốc của Bootstrap.

---

### Câu 31

Create a responsive grid layout using React-Bootstrap with three columns that stack vertically on small screens. Which classes would you apply?

- A. <Container>
       <Row>
         <Col>1 of 3</Col>
         <Col>2 of 3</Col>
         <Col>3 of 3</Col>
       </Row>
     </Container>
- B. <Container>
       <Row>
         <Col sm={4}>1 of 3</Col>
         <Col sm={4}>2 of 3</Col>
         <Col sm={4}>3 of 3</Col>
       </Row>
     </Container>
- C. <Container>
       <Row>
         <Col md={12}>1 of 4</Col>
         <Col md={12}>2 of 4</Col>
         <Col md={12}>3 of 4</Col>
       </Row>
     </Container>
- **D. <Container>
       <Row>
         <Col sm={12} md={4}>1 of 4</Col>
         <Col sm={12} md={4}>2 of 4</Col>
         <Col sm={12} md={4}>3 of 4</Col>
       </Row>
     </Container>** ✅

> ✅ **Đáp án đúng:** **D** (<Container>      <Row>        <Col sm={12} md={4}>1 of 4</Col>        <Col sm={12} md={4}>2 of 4</Col>        <Col sm={12} md={4}>3 of 4</Col>      </Row>    </Container>)
>
> 💡 **Giải thích:** Để tạo grid 3 cột xếp dọc trên màn hình nhỏ (sm), cần dùng sm={12} (chiếm toàn bộ width trên small screen), và md={4} để chia 3 cột bằng nhau trên màn hình medium trở lên. Đáp án D là chính xác nhất.

---

### Câu 32

Which of the following is the first step in React's render cycle?

- **A. Triggering a render when state or props change.** ✅
- B. Re-rendering the component.
- C. Committing the changes to the DOM.
- D. Calculating the minimal necessary updates for the DOM.

> ✅ **Đáp án đúng:** **A** (Triggering a render when state or props change.)
>
> 💡 **Giải thích:** Bước đầu tiên trong chu kỳ render của React là kích hoạt render khi state hoặc props thay đổi. Sau đó React mới tính toán sự khác biệt (reconciliation), xác định cập nhật tối thiểu, và cuối cùng commit vào DOM. Đáp án A là bước khởi đầu.

---

### Câu 33 *(Chọn 2 đáp án)*

How can you pass parameters to an event handler in React? (Select all that apply)

- **A. Using the bind() method.** ✅
- **B. Using arrow functions.** ✅
- C. Using the addEventListener() method.
- D. Using the this keyword.

> ✅ **Đáp án đúng:** **A** (Using the bind() method.) ; **B** (Using arrow functions.)
>
> 💡 **Giải thích:** In React, you can pass parameters via bind() (A) or arrow functions (B). addEventListener() (C) is vanilla JS, not React’s event system. this keyword (D) alone doesn’t pass parameters.

---

### Câu 34

What is the primary purpose of Next.js?

- **A. To enable server-side rendering and generate static websites.** ✅
- B. To manage state in React applications.
- C. To provide a UI component library.
- D. To create database schemas.

> ✅ **Đáp án đúng:** **A** (To enable server-side rendering and generate static websites.)
>
> 💡 **Giải thích:** Next.js là framework React cho phép render phía server (SSR) và tạo trang tĩnh (SSG), tối ưu hiệu suất và SEO. Các lựa chọn khác mô tả chức năng của Redux, Material UI hay ORM.

---

### Câu 35

What is the main advantage of Tailwind CSS compared to Bootstrap?

- **A. It provides more flexibility to create custom designs and components.** ✅
- B. It is easier to use and has fewer customization options.
- C. It has predefined components for quick styling.
- D. It offers faster page loading times.

> ✅ **Đáp án đúng:** **A** (It provides more flexibility to create custom designs and components.)
>
> 💡 **Giải thích:** Tailwind CSS là utility-first, cho phép tùy chỉnh cao và linh hoạt hơn Bootstrap — vốn dựa trên component sẵn có. Điều này giúp thiết kế độc đáo mà không bị giới hạn bởi framework.

---

### Câu 36

What command is used to create a new Next.js project?

- A. npx create-react-app
- B. npm install next
- **C. npx create-next-app** ✅
- D. git clone next.js

> ✅ **Đáp án đúng:** **C** (npx create-next-app)
>
> 💡 **Giải thích:** Next.js official documentation recommends 'npx create-next-app' to scaffold a new project. 'create-react-app' is for React, not Next.js.

---

### Câu 37

What is a core feature of Next.js that enhances SEO?

- A. Real-time data fetching.
- B. Client-side routing.
- C. Automatic code splitting.
- **D. Server-side rendering.** ✅

> ✅ **Đáp án đúng:** **D** (Server-side rendering.)
>
> 💡 **Giải thích:** Next.js hỗ trợ Server-Side Rendering (SSR), giúp render trang trên server trước khi gửi về client, từ đó cải thiện SEO vì công cụ tìm kiếm có thể crawl nội dung đầy đủ ngay từ đầu.

---

### Câu 38

Which Bootstrap class is commonly used to create a responsive navigation bar?

- A. .navbar-static
- B. .nav-horizontal
- **C. .navbar** ✅
- D. .navigation-block

> ✅ **Đáp án đúng:** **C** (.navbar)
>
> 💡 **Giải thích:** Trong Bootstrap, lớp .navbar được sử dụng phổ biến để tạo thanh điều hướng phản ứng (responsive navigation bar). Các lớp như .navbar-static hay .nav-horizontal không tồn tại hoặc không phải là chuẩn chính thức.

---

### Câu 39

Which class is used to create a form input with a validation state in Bootstrap 5?

- **A. `.form-control`** ✅
- B. `.input-group`
- C. `.form-check`
- D. `.form-validation`

> ✅ **Đáp án đúng:** **A** (`.form-control`)
>
> 💡 **Giải thích:** Trong Bootstrap 5, lớp .form-control được dùng để tạo input form và có thể kết hợp với các lớp trạng thái xác thực như .is-valid hoặc .is-invalid để hiển thị trạng thái xác thực. Các lớp khác như .input-group, .form-check không dùng cho xác thực trạng thái input.

---

### Câu 40

Which Bootstrap class provides a fluid container that adapts to all breakpoints?

- **A. `.container-fluid`** ✅
- B. `.container`
- C. `.container-lg`
- D. `.container-xs`

> ✅ **Đáp án đúng:** **A** (`.container-fluid`)
>
> 💡 **Giải thích:** Trong Bootstrap, `.container-fluid` tạo container chiếm toàn bộ chiều rộng màn hình, thích ứng với mọi breakpoint. Các lớp khác như `.container` có kích thước cố định theo breakpoint.

---

### Câu 41

Why should you avoid using too many lazy components in your application?

- **A. Because it results in multiple HTTP requests, slowing down the application.** ✅
- B. Because it decreases the performance by loading everything upfront.
- C. Because it makes the code difficult to debug.
- D. Because it affects the layout and styling of components.

> ✅ **Đáp án đúng:** **A** (Because it results in multiple HTTP requests, slowing down the application.)
>
> 💡 **Giải thích:** Lazy loading chia nhỏ bundle thành nhiều chunk, mỗi lần tải component sẽ tạo HTTP request riêng, có thể làm chậm ứng dụng nếu dùng quá nhiều.

---

### Câu 42

Analyze the differences between Flux and MVC architectures. Which statement is true?

- **A. Flux enforces unidirectional data flow, while MVC allows bidirectional data flow.** ✅
- B. MVC enforces unidirectional data flow, while Flux allows bidirectional data flow.
- C. Both Flux and MVC enforce unidirectional data flow.
- D. Both Flux and MVC allow bidirectional data flow.

> ✅ **Đáp án đúng:** **A** (Flux enforces unidirectional data flow, while MVC allows bidirectional data flow.)
>
> 💡 **Giải thích:** Flux architecture uses a strict unidirectional data flow (Action → Dispatcher → Store → View), whereas MVC allows bidirectional communication between Model and View, which can lead to complexity and side effects.

---

### Câu 43

How would you extract and display multiple parameters, userId and postId, in a component?

- **A. `const { userId, postId } = useParams();`** ✅
- B. `const userId = useParams('userId'); const postId = useParams('postId');`
- C. `const userId = route.params.userId; const postId = route.params.postId;`
- D. `const { userId } = useParams(); const { postId } = useParams();`

> ✅ **Đáp án đúng:** **A** (`const { userId, postId } = useParams();`)
>
> 💡 **Giải thích:** Trong React Router v6, `useParams()` trả về một object chứa các tham số route. Cách đúng để trích xuất nhiều tham số là dùng destructuring: `{ userId, postId }`. Các cách còn lại không đúng cú pháp hoặc không tồn tại.

---

### Câu 44

How would you navigate programmatically to a route with a parameter using useNavigate in React Router?

- A. navigate("/user:id");
- B. navigate("/user?id=123");
- **C. navigate("/user/123");** ✅
- D. navigate({ path: "/user/123" });

> ✅ **Đáp án đúng:** **C** (navigate("/user/123");)
>
> 💡 **Giải thích:** Trong React Router, để điều hướng đến route có tham số, dùng navigate("/user/123") với 123 là giá trị tham số. Cú pháp "/user:id" là định nghĩa route, không phải gọi navigate. Các lựa chọn khác sai cú pháp hoặc dùng query string không phù hợp với route parameter.

---

### Câu 45

Why might this code produce unexpected results?
```javascript
function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
  };
  return <button onClick={handleClick}>{count}</button>;
}
```

- A. Because setCount is called twice, it resets state
- B. Because setCount merges the updates automatically
- **C. Both `setCount(count + 1)` calls use the same snapshot of count** ✅
- D. It's invalid to call setCount twice

> ✅ **Đáp án đúng:** **C** (Both `setCount(count + 1)` calls use the same snapshot of count)
>
> 💡 **Giải thích:** Trong React, mỗi lần gọi `setCount` dùng giá trị `count` tại thời điểm gọi, không phải giá trị mới nhất. Vì vậy, cả hai lần gọi đều dùng `count` cũ → chỉ tăng 1 lần. Đây là hành vi thường gặp khi không dùng updater function.

---

### Câu 46

Find the bug in the following React code:

```
const [items, setItems] = useState([]);
const addItem = () => {
    items.push('new');
    setItems(items);
};
```

- A. `useState` should be `useReducer`
- **B. use `setItems([...items, 'new'])`** ✅
- C. `push` is not a valid method
- D. `setItems` must take a string

> ✅ **Đáp án đúng:** **B** (use `setItems([...items, 'new'])`)
>
> 💡 **Giải thích:** Trong React, không nên mutate state trực tiếp bằng push. Phải tạo mảng mới với spread operator để trigger re-render đúng cách.

---

### Câu 47

In the useEffect hook, how many milliseconds would you wait using setTimeout to perform a side effect after 2 seconds?

- A. 2
- B. 200
- **C. 2000** ✅
- D. 20000

> ✅ **Đáp án đúng:** **C** (2000)
>
> 💡 **Giải thích:** Trong JavaScript, hàm setTimeout sử dụng đơn vị là mili giây (ms). 2 giây = 2000 ms. Do đó, để thực hiện side effect sau 2 giây, cần truyền 2000 vào setTimeout.

---

### Câu 48

Which is the correct way to consume context in a functional component using the "useContext" hook?

- A. const value = MyContext();
- **B. const value = useContext(MyContext);** ✅
- C. const value = this.context(MyContext);
- D. <MyContext.Provider useContext={value} />

> ✅ **Đáp án đúng:** **B** (const value = useContext(MyContext);)
>
> 💡 **Giải thích:** Trong React, cách đúng để tiêu thụ context trong functional component là dùng hook useContext(MyContext). Các cú pháp khác không hợp lệ hoặc sai cú pháp React.

---

### Câu 49

In React Router, how do you define a nested route structure within a parent component?

- A. Utilize the &lt;Switch&gt; component to handle nested routes
- B. Implement a routing table using an array of route objects
- **C. Use the &lt;Route&gt; component with nested &lt;Route&gt; components** ✅
- D. Direct routes using query parameters in URL path names

> ✅ **Đáp án đúng:** **C** (Use the &lt;Route&gt; component with nested &lt;Route&gt; components)
>
> 💡 **Giải thích:** Trong React Router, cấu trúc route lồng nhau được định nghĩa bằng cách đặt các thành phần <Route> bên trong một <Route> cha. Điều này cho phép xử lý các route con trong phạm vi của route cha, thường dùng với <Outlet> để render nội dung con.

---

### Câu 50

Fill in the blank in this Bootstrap CSS code to apply a primary button style using React-Bootstrap:
import { Button } from 'react-bootstrap';
<Button \_\_\_\_\_\_ ="primary">Click me</Button>

- A. color
- **B. variant** ✅
- C. style
- D. theme

> ✅ **Đáp án đúng:** **B** (variant)
>
> 💡 **Giải thích:** Trong React-Bootstrap, thuộc tính `variant` được dùng để chỉ định kiểu nút (primary, secondary, success...). Ví dụ: `<Button variant="primary">Click me</Button>` là cách đúng để áp dụng style nút chính.

---

## 7. Đề 13: Kì SP26 — Đề 2 [Bản B] (50 câu)

### Câu 1

Which of the following is a common use case for using Redux in a React application?

- **A. Managing authentication and user sessions** ✅
- B. Styling and layout of React components
- C. Handling form validation and input tracking
- D. Implementing server-side rendering in React

> ✅ **Đáp án đúng:** **A** (Managing authentication and user sessions)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Redux phù hợp nhất để quản lý **global state** dùng chung trên nhiều trang như trạng thái đăng nhập (authentication), thông tin người dùng (user sessions), hoặc giỏ hàng.

---

### Câu 2

Which of the following is a common use case for using Redux in a React application?

- **A. Managing authentication and user sessions** ✅
- B. Styling and layout of React components
- C. Handling form validation and input tracking
- D. Implementing server-side rendering in React

> ✅ **Đáp án đúng:** **A** (Managing authentication and user sessions)
>
> 💡 **Giải thích:** **Đáp án đúng: A** *(Đã rà soát & sửa đồng nhất với Câu 1)*
> 
> - Redux dùng để quản lý trạng thái toàn cục dùng chung xuyên suốt ứng dụng như **authentication & user sessions**. Validation form cục bộ nên dùng state nội bộ của component (`useState`).

---

### Câu 3

What is the purpose of the Redux middleware in React applications?

- **A. To handle asynchronous actions and side effects** ✅
- B. To define the structure of the Redux store
- C. To connect React components to the Redux store
- D. To manage component hierarchy

> ✅ **Đáp án đúng:** **A** (To handle asynchronous actions and side effects)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Redux middleware (như Redux Thunk, Redux Saga) nằm giữa `dispatch` và `reducer`, có nhiệm vụ xử lý các **hành động bất đồng bộ (async actions)** và các tác vụ phụ (side effects như gọi API, logging).

---

### Câu 4

What is the core principle of Redux?

- **A. Single source of truth and unidirectional data flow.** ✅
- B. Multiple sources of truth for each component.
- C. State is mutable and can be directly modified.
- D. State is only updated using the useState hook.

> ✅ **Đáp án đúng:** **A** (Single source of truth and unidirectional data flow.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Nguyên lý cốt lõi của Redux là **Single Source of Truth** (một Store duy nhất cho toàn ứng dụng) và **Unidirectional Data Flow** (luồng dữ liệu một chiều, state chỉ đọc và cập nhật bất biến qua Pure Reducers).

---

### Câu 5

What is the core principle of Redux?

- **A. Single source of truth and unidirectional data flow.** ✅
- B. Multiple sources of truth for each component.
- C. State is mutable and can be directly modified.
- D. State is only updated using the useState hook.

> ✅ **Đáp án đúng:** **A** (Single source of truth and unidirectional data flow.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Redux xây dựng trên nguyên lý **Single source of truth** (1 Store duy nhất) và **luồng dữ liệu một chiều** (unidirectional data flow), đảm bảo state luôn dễ theo dõi và dự đoán.

---

### Câu 6

What is the main purpose of the await keyword within an async function?

- A. To return a new Promise object.
- B. To immediately execute the next line of code without waiting.
- **C. To pause the execution of the async function until the Promise it's waiting for is resolved or rejected.** ✅
- D. To define a synchronous block of code

> ✅ **Đáp án đúng:** **C** (To pause the execution of the async function until the Promise it's waiting for is resolved or rejected.)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Từ khóa `await` bên trong hàm `async` sẽ tạm dừng việc thực thi hàm đó cho đến khi Promise đứng sau nó hoàn thành (resolved) hoặc thất bại (rejected), rồi trả về kết quả.

---

### Câu 7

Why would a React developer choose to use "Axios"?

- A. To render React components faster
- B. To manage component state globally
- **C. To make HTTP requests to APIs** ✅
- D. To build reusable hooks

> ✅ **Đáp án đúng:** **C** (To make HTTP requests to APIs)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - **Axios** là thư viện HTTP client phổ biến giúp gửi các yêu cầu HTTP (`GET`, `POST`, `PUT`, `DELETE`) tới REST API với tính năng tự động parse JSON và bắt lỗi HTTP tiện lợi.

---

### Câu 8

Which method is most commonly used in a React app to fetch data from a server?

- A. WebSockets
- B. useState()
- **C. fetch() or axios inside useEffect()** ✅
- D. console.log() inside render()

> ✅ **Đáp án đúng:** **C** (fetch() or axios inside useEffect())
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Cách tiêu chuẩn và phổ biến nhất để gọi API lấy dữ liệu trong React là dùng `fetch()` hoặc `axios` bên trong hook `useEffect()`.

---

### Câu 9

Which of the following is used to pass a function from a parent component to a child component?

- **A. Passing a function as a prop to the child component.** ✅
- B. Using useState hook in the child component.
- C. Using useContext in both parent and child components.
- D. Directly accessing the child component's state.

> ✅ **Đáp án đúng:** **A** (Passing a function as a prop to the child component.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Trong React, component cha truyền hàm callback xuống component con thông qua **props** (ví dụ `<Child onClick={handleClick} />`) để con có thể gọi ngược lên cha.

---

### Câu 10

What happens when you use the xs prop on a Col component in React-Bootstrap?

- A. The column will only have its width defined on extra-large screens.
- B. The column will only have its width defined on extra-small screens, and larger sizes will ignore it
- **C. The column will have its width defined on extra-small screens and will apply to larger sizes if no specific breakpoint is defined.** ✅
- D. The xs prop does not exist in React-Bootstrap

> ✅ **Đáp án đúng:** **C** (The column will have its width defined on extra-small screens and will apply to larger sizes if no specific breakpoint is defined.)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Theo triết lý **Mobile-First** của Bootstrap/React-Bootstrap, prop `xs` trên `<Col>` định nghĩa độ rộng từ màn hình siêu nhỏ và **tự động áp dụng cho mọi kích thước lớn hơn** nếu không khai báo thêm breakpoint nào khác (`sm`, `md`, `lg`...).

---

### Câu 11

What happens when you use the xs prop on a Col component in React-Bootstrap?

- A. The column will only have its width defined on extra-large screens.
- B. The column will only have its width defined on extra-small screens, and larger sizes will ignore it
- **C. The column will have its width defined on extra-small screens and will apply to larger sizes if no specific breakpoint is defined.** ✅
- D. The xs prop does not exist in React-Bootstrap

> ✅ **Đáp án đúng:** **C** (The column will have its width defined on extra-small screens and will apply to larger sizes if no specific breakpoint is defined.)
>
> 💡 **Giải thích:** **Đáp án đúng: C** *(Đã rà soát & sửa đồng nhất với Câu 10)*
> 
> - Theo nguyên tắc Mobile-First của React-Bootstrap, prop `xs` áp dụng cho màn hình siêu nhỏ VÀ tự kế thừa lên các màn hình lớn hơn trừ khi bị ghi đè bởi `sm`, `md`, `lg`...

---

### Câu 12

What is the primary purpose of a router in a web application?

- A. To manage state within a component
- **B. To respond to a URL based on a set of route handler declarations** ✅
- C. To handle server-side logic
- D. To manage routing in a React application

> ✅ **Đáp án đúng:** **B** (To respond to a URL based on a set of route handler declarations)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Mục đích cốt lõi của Router trong ứng dụng web là lắng nghe URL và phản hồi bằng route handler/component tương ứng dựa trên danh sách các route đã khai báo.

---

### Câu 13

How do you declare a route in React Router?

- A. ```
  Using <Link path="/" element={<Home/>} />
  ```
- **B. ```
  Using <Route path="/" element={<Home/>} />
  ```** ✅
- C. ```
  Using <Routes path="/" element={<Home/>} />
  ```
- D. ```
  Using <context path="/" ></context>
  ```

> ✅ **Đáp án đúng:** **B** (Using <Route path="/" element={<Home/>} />)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Trong React Router v6, mỗi tuyến đường được khai báo bằng thẻ `<Route path="/" element={<Home />} />` đặt bên trong `<Routes>`.

---

### Câu 14

What is the difference between the HTTP response codes 401 and 403?

- **A. 401 the request is missing valid authentication credentials, while 403 the server refuses to authorize.** ✅
- B. 401 the server encountered an internal error, while 403 means the requested resource was not found.
- C. 401 the request was successful, while 403 means the request was not modified.
- D. 401 and 403 are interchangeable and have the same meaning.

> ✅ **Đáp án đúng:** **A** (401 the request is missing valid authentication credentials, while 403 the server refuses to authorize.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Phân biệt 2 mã lỗi bảo mật kinh điển: **401 Unauthorized** = chưa xác thực / thiếu thông tin đăng nhập hợp lệ; **403 Forbidden** = đã xác thực nhưng server từ chối cấp quyền truy cập tài nguyên này.

---

### Câu 15

```
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const port = 3000;
server.use(router);
server.listen(port, () => {
console.logJSON server is running on port ${port});
});
```

What is the above code used for?

- **A. Create a dynamic server to serve JSON data.** ✅
- B. Create a dynamic web application using JSON data.
- C. Create a JSON file based on data from the server.
- D. Configure the development environment for the project using JSON.

> ✅ **Đáp án đúng:** **A** (Create a dynamic server to serve JSON data.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Đoạn mã khởi tạo một mock REST API server động bằng thư viện `json-server` chạy ở cổng 3000 để phục vụ dữ liệu CRUD từ file `data.json`.

---

### Câu 16

How do you dispatch an action when a button is clicked?

- **A. ```
  const handleClick = () => {
  dispatch({ type: 'BUTTON_CLICKED' });
  };
  <button onClick={handleClick}>Click me</button>;
  ```** ✅
- B. ```
  const handleClick = () => {
  dispatch({ type: 'BUTTON_CLICKED' });
  };
  <button onClick={() => handleClick()}>Click me</button>;
  ```
- C. ```
  const handleClick = () => { dispatch({ type: 'BUTTON_CLICKED' }); }; <button onClick={handleClick}>Click me</button>;
  ```
- D. ```
  const handleClick = () => {
  dispatch({ action: 'BUTTON_CLICKED' });
  };
  <button onClick={handleClick}>Click me</button>;
  ```

> ✅ **Đáp án đúng:** **A** (const handleClick = () => { dispatch({ type: 'BUTTON_CLICKED' }); }; <button onClick={handleClick}>Click me</button>;)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Định nghĩa hàm `handleClick` gọi `dispatch({ type: 'BUTTON_CLICKED' })` rồi truyền tham chiếu hàm vào `<button onClick={handleClick}>` là cách chuẩn, gọn và tránh tạo hàm inline mới mỗi lần render (đáp án D sai vì dùng key `action` thay vì `type`).

---

### Câu 17

Which of the following is the correct way to use useSelector to access a value from the Redux store?

- A. const value = useSelector((store) => store.value);
- **B. const value = useSelector((state) => state.value);** ✅
- C. const value = useSelector((context) => context.value);
- D. const value = useSelector((redux) => redux.value);

> ✅ **Đáp án đúng:** **B** (const value = useSelector((state) => state.value);)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Hook `useSelector` nhận vào một selector function có tham số là toàn bộ Redux `state`: `const value = useSelector((state) => state.value);`.

---

### Câu 18

What is the typical file extension for a React component?

- A. html
- B. css
- **C. js or .jsx** ✅
- D. php

> ✅ **Đáp án đúng:** **C** (js or .jsx)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Các file chứa React component thường có đuôi `.js` hoặc `.jsx` (hoặc `.ts`/`.tsx` khi dùng TypeScript).

---

### Câu 19 *(Chọn 2 đáp án)*

What is the purpose of React. Fragment or shorthand <> </> in React? (Select all that apply)

- **A. Fragments allow you to group multiple elements without adding an extra node to the DOM.** ✅
- B. Fragments allow you to provide CSS styling to multiple elements.
- C. Fragments allow you to handle state management in React.
- **D. ```
  Fragments are particularly useful for avoiding unnecessary <div> elements, which can clutter your markup.
  ```** ✅

> ✅ **Đáp án đúng:** **A** (Fragments allow you to group multiple elements without adding an extra node to the DOM.) ; **D** (Fragments are particularly useful for avoiding unnecessary <div> elements, which can clutter your markup.)
>
> 💡 **Giải thích:** **Đáp án đúng: A và D** *(Câu chọn nhiều đáp án)*
> 
> - `React.Fragment` (hoặc `<>...</>`) giúp gom nhiều phần tử con mà **không thêm node thừa vào DOM** (A), đặc biệt hữu ích để **tránh các thẻ `<div>` thừa** làm rối cấu trúc HTML (D).

---

### Câu 20

How can the useEffect hook be optimized for cleanup actions?

- **A. By passing an empty array as the second argument** ✅
- B. By using a class-based component
- C. By calling it after every render
- D. By manually removing event listeners

> ✅ **Đáp án đúng:** **A** (By passing an empty array as the second argument)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Khi truyền dependency array rỗng `[]` làm tham số thứ hai cho `useEffect`, effect chỉ thiết lập 1 lần lúc mount và hàm cleanup chỉ chạy 1 lần duy nhất lúc component unmount — tránh thiết lập/dọn dẹp lặp lại sau mỗi lần render.

---

### Câu 21

How would you use the useContext Hook to access a shared theme in a React component?

- **A. const theme = useContext(ThemeContext);** ✅
- B. const { theme } = useContext(ThemeContext);
- C. const { theme } = useContext(ThemeContext.Provider);
- D. const theme = useContext(ThemeContext.Provider);

> ✅ **Đáp án đúng:** **A** (const theme = useContext(ThemeContext);)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Cú pháp chuẩn của `useContext` là truyền trực tiếp đối tượng Context (KHÔNG truyền `.Provider`): `const theme = useContext(ThemeContext);`.

---

### Câu 22

Which of the following could cause an Effect to run too frequently?

- A. Including all state variables in the dependency array.
- B. Not using a dependency array.
- **C. Including a variable like data that changes often in the dependency array.** ✅
- D. Omitting the dependency array altogether.

> ✅ **Đáp án đúng:** **C** (Including a variable like data that changes often in the dependency array.)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Đưa một biến thay đổi liên tục (như object/array tạo mới mỗi render hoặc biến `data` đổi thường xuyên) vào dependency array sẽ khiến `useEffect` kích hoạt chạy lại quá nhiều lần không cần thiết.

---

### Câu 23

Which of the following is NOT considered a popular front-end framework?

- A. React
- B. Angular
- **C. Django** ✅
- D. Vue.js

> ✅ **Đáp án đúng:** **C** (Django)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - **Django** là một **back-end web framework** viết bằng Python, không phải front-end framework (React, Angular, Vue.js mới là các công nghệ Front-End).

---

### Câu 24

What is one major benefit of using front-end frameworks like React or Vue.js?

- A. They eliminate the need for HTML
- **B. They allow for faster development by providing pre-built components** ✅
- C. They only work on mobile applications
- D. They focus solely on server-side development

> ✅ **Đáp án đúng:** **B** (They allow for faster development by providing pre-built components)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Một lợi ích lớn của các thư viện/framework front-end như React hoặc Vue.js là tăng tốc độ phát triển nhờ kiến trúc component tái sử dụng và hệ sinh thái component dựng sẵn phong phú.

---

### Câu 25

How can you access Chrome DevTools?

- **A. By pressing F12 or right-clicking and selecting "Inspect"** ✅
- B. By installing a Chrome extension
- C. By typing "chrome://devtools" in the address bar
- D. By opening the Chrome menu and selecting "DevTools"

> ✅ **Đáp án đúng:** **A** (By pressing F12 or right-clicking and selecting "Inspect")
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Cách nhanh và phổ biến nhất để mở Chrome DevTools là nhấn phím **`F12`** (hoặc `Ctrl+Shift+I`) hoặc click chuột phải vào trang web và chọn **"Inspect"**.

---

### Câu 26

```
How would you render a user's name dynamically inside an <h2> tag in JSX?
```

- A. ```
  <h2><p>{userName}</p></h2>
  ```
- **B. ```
  <h2>{userName}</h2>
  ```** ✅
- C. ```
  <h2>"userName"</h2>
  ```
- D. ```
  <h2>{userName: "John"}</h2>
  ```

> ✅ **Đáp án đúng:** **B** (<h2>{userName}</h2>)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Để hiển thị giá trị của biến JavaScript `userName` bên trong thẻ `<h2>` của JSX, ta bọc biến trong cặp ngoặc nhọn đơn: `<h2>{userName}</h2>`.

---

### Câu 27

The purpose of JSX is to:

- **A. Make JavaScript code more readable by embedding HTML in JavaScript** ✅
- B. Make JavaScript run faster
- C. Encrypt HTML elements
- D. Handle server-side logic

> ✅ **Đáp án đúng:** **A** (Make JavaScript code more readable by embedding HTML in JavaScript)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - JSX (JavaScript XML) cho phép viết cấu trúc giao diện giống HTML ngay bên trong mã JavaScript, giúp code trực quan và dễ đọc hơn nhiều so với việc viết tay `React.createElement(...)`.

---

### Câu 28 *(Chọn 3 đáp án)*

What does ES6 introduce that is essential for React applications? (Select all that apply)

- **A. Arrow functions** ✅
- **B. Destructuring assignment** ✅
- C. JSX syntax
- **D. Template Literals** ✅

> ✅ **Đáp án đúng:** **A** (Arrow functions) ; **B** (Destructuring assignment) ; **D** (Template Literals)
>
> 💡 **Giải thích:** **Đáp án đúng: A, B và D** *(Câu chọn nhiều đáp án)*
> 
> - ES6 (ECMAScript 2015) giới thiệu **Arrow functions** (A), **Destructuring assignment** (B), và **Template Literals** (D). Lưu ý: **JSX** (C) là phần mở rộng cú pháp của React, KHÔNG phải tính năng của ES6!

---

### Câu 29

What is the main purpose of React-Bootstrap?

- A. To build React components using jQuery
- B. To use Bootstrap styles with inline CSS only
- **C. To provide Bootstrap-styled components built entirely with React** ✅
- D. To convert Bootstrap HTML into Angular components

> ✅ **Đáp án đúng:** **C** (To provide Bootstrap-styled components built entirely with React)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Mục đích chính của **React-Bootstrap** là cung cấp bộ component mang giao diện Bootstrap nhưng được viết lại hoàn toàn bằng React (quản lý bằng props/state, không cần jQuery).

---

### Câu 30

How do you import and use a Button component from React-Bootstrap 5? (Select all that apply)

- A. ```
  import React from 'react';
  import Button from 'react-bootstrap/Button';
  function Demo() {
  ```
  
  return (
  
  ```
  <Button variant="primary">
  );
  }
  export default Demo;
  ```
- B. ```
  import React from 'react';
  import Button from 'react-bootstrap/Button';
  function Demo() {
  ```
  
  return (
  
  ```
  <button variant="primary"> Primary Button</button>
  );
  }
  export default Demo;
  ```
- **C. ```
  import React from 'react';
  import Button from 'react-bootstrap/Button';
  function Demo() {
  ```
  
  return (
  
  ```
  <Button variant="primary">Primary Button</Button>
  );
  }
  export default Demo;
  ```** ✅
- D. ```
  import React from 'react';
  import Button from 'react-bootstrap/Button';
  function Demo() {
  ```
  
  return (
  
  ```
  <button variant="primary"/>
  );
  }
  export default Demo;
  ```

> ✅ **Đáp án đúng:** **C** (import React from 'react'; import Button from 'react-bootstrap/Button'; function Demo() { return ( <Button variant="primary">Primary Button</Button> ); } export default Demo;)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Component React phải viết hoa chữ cái đầu `<Button variant="primary">Primary Button</Button>` và có thẻ đóng đầy đủ. Đáp án A thiếu thẻ đóng, B và D viết thường `<button>` nên là thẻ HTML thuần chứ không phải component `Button` đã import.

---

### Câu 31

Create a responsive grid layout using React-Bootstrap with three columns that stack vertically on small screens. Which classes would you apply?

- A. ```
  <Container>
  <Row>
  <Col>1 of 3</Col>
  <Col>2 of 3</Col>
  <Col>3 of 3</Col>
  </Row>
  </Container>
  ```
- **B. ```
  <Container>
  <Row>
  <Col sm={4}>1 of 3</Col>
  <Col sm={4}>2 of 3</Col>
  <Col sm={4}>3 of 3</Col>
  </Row>
  </Container>
  ```** ✅
- C. ```
  <Container>
  <Row>
  <Col md={12}>1 of 4</Col>
  <Col md={12}>2 of 4</Col>
  <Col md={12}>3 of 4</Col>
  </Row>
  </Container>
  ```
- D. ```
  <Container>
  <Row>
  <Col sm={12} md={4}>1 of 4</Col>
  <Col sm={12} md={4}>2 of 4</Col>
  <Col sm={12} md={4}>3 of 4</Col>
  </Row>
  </Container>
  ```

> ✅ **Đáp án đúng:** **B** (<Container> <Row> <Col sm={4}>1 of 3</Col> <Col sm={4}>2 of 3</Col> <Col sm={4}>3 of 3</Col> </Row> </Container>)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Với `<Col sm={4}>` (3 cột, mỗi cột 4/12 = 12 cột), từ màn hình `sm` trở lên 3 cột nằm ngang cạnh nhau, còn ở màn hình nhỏ hơn `sm` chúng tự động xếp chồng dọc (`stack vertically`).

---

### Câu 32

What is the primary purpose of Next.js?

- **A. To enable server-side rendering and generate static websites.** ✅
- B. To manage state in React applications.
- C. To provide a UI component library.
- D. To create database schemas.

> ✅ **Đáp án đúng:** **A** (To enable server-side rendering and generate static websites.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Mục đích chính của **Next.js** (React framework) là hỗ trợ **Server-Side Rendering (SSR)** và **Static Site Generation (SSG)** giúp tối ưu hiệu năng và SEO.

---

### Câu 33

Which of the following is the first step in React's render cycle?

- **A. Triggering a render when state or props change.** ✅
- B. Re-rendering the component.
- C. Committing the changes to the DOM.
- D. Calculating the minimal necessary updates for the DOM.

> ✅ **Đáp án đúng:** **A** (Triggering a render when state or props change.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Chu trình render của React gồm 3 bước: **(1) Trigger** (kích hoạt render khi mount hoặc state/props thay đổi) → **(2) Render** (gọi hàm component) → **(3) Commit** (cập nhật lên DOM thật).

---

### Câu 34 *(Chọn 2 đáp án)*

How can you pass parameters to an event handler in React? (Select all that apply)

- **A. Using the bind() method.** ✅
- **B. Using arrow functions.** ✅
- C. Using the addEventListener() method.
- D. Using the this keyword.

> ✅ **Đáp án đúng:** **A** (Using the bind() method.) ; **B** (Using arrow functions.)
>
> 💡 **Giải thích:** **Đáp án đúng: A và B** *(Câu chọn nhiều đáp án)*
> 
> - Trong React, hai cách chuẩn để truyền thêm tham số vào event handler là dùng phương thức **`bind()`** (A) hoặc bọc trong **arrow function** `onClick={() => handle(id)}` (B).

---

### Câu 35

What is the primary purpose of Next.js?

- **A. To enable server-side rendering and generate static websites.** ✅
- B. To manage state in React applications.
- C. To provide a UI component library.
- D. To create database schemas.

> ✅ **Đáp án đúng:** **A** (To enable server-side rendering and generate static websites.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Next.js là framework phát triển trên nền React nhằm cung cấp sẵn **Server-Side Rendering (SSR)**, **Static Site Generation (SSG)** và file-system routing.

---

### Câu 36

What command is used to create a new Next.js project?

- A. npm create-react-app
- B. npm install next
- **C. npm create-next-app** ✅
- D. git clone next.js

> ✅ **Đáp án đúng:** **C** (npm create-next-app)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Lệnh tạo dự án Next.js mới là `npx create-next-app` / `npm create-next-app` (tương ứng đáp án C trong 4 lựa chọn).

---

### Câu 37

What is a core feature of Next.js that enhances SEO?

- A. Real-time data fetching.
- B. Client-side routing.
- C. Automatic code splitting.
- **D. Server-side rendering.** ✅

> ✅ **Đáp án đúng:** **D** (Server-side rendering.)
>
> 💡 **Giải thích:** **Đáp án đúng: D**
> 
> - **Server-Side Rendering (SSR)** giúp máy chủ trả về nội dung HTML hoàn chỉnh ngay từ đầu để các công cụ tìm kiếm (Googlebot) dễ dàng đọc và lập chỉ mục, cải thiện mạnh **SEO**.

---

### Câu 38

Which Bootstrap class is commonly used to create a responsive navigation bar?

- A. navbar-static
- B. nav-horizontal
- **C. navbar** ✅
- D. navigation-block

> ✅ **Đáp án đúng:** **C** (navbar)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Trong Bootstrap, class `.navbar` là class chuẩn để xây dựng thanh điều hướng responsive (thường kết hợp với `.navbar-expand-lg`).

---

### Câu 39

Which class is used to create a form input with a validation state in Bootstrap 5?

- **A. form-control** ✅
- B. input-group
- C. form-check
- D. form-validation

> ✅ **Đáp án đúng:** **A** (form-control)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Trong Bootstrap 5, các ô nhập liệu form dùng class `.form-control` (sau đó kết hợp `.is-valid` / `.is-invalid` để hiển thị trạng thái validation).

---

### Câu 40

Which Bootstrap class provides a fluid container that adapts to all breakpoints?

- **A. container-fluid** ✅
- B. container
- C. container-lg
- D. container-xs

> ✅ **Đáp án đúng:** **A** (container-fluid)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Class `.container-fluid` tạo khung chứa luôn có chiều rộng 100% tràn viền thích ứng trên mọi breakpoint.

---

### Câu 41

Why should you avoid using too many lazy components in your application?

- **A. Because it results in multiple HTTP requests, slowing down the application.** ✅
- B. Because it decreases the performance by loading everything upfront.
- C. Because it makes the code difficult to debug.
- D. Because it affects the layout and styling of components.

> ✅ **Đáp án đúng:** **A** (Because it results in multiple HTTP requests, slowing down the application.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Chia nhỏ quá vụn thành quá nhiều lazy components nhỏ lẻ sẽ khiến trình duyệt phải gửi hàng loạt **HTTP requests** riêng biệt để tải từng chunk nhỏ, gây tăng độ trễ và làm chậm ứng dụng.

---

### Câu 42

Analyze the differences between Flux and MVC architectures. Which statement is true?

- **A. Flux enforces unidirectional data flow, while MVC allows bidirectional data flow.** ✅
- B. MVC enforces unidirectional data flow, while Flux allows bidirectional data flow.
- C. Both Flux and MVC enforce unidirectional data flow.
- D. Both Flux and MVC allow bidirectional data flow.

> ✅ **Đáp án đúng:** **A** (Flux enforces unidirectional data flow, while MVC allows bidirectional data flow.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - **Flux** ép buộc luồng dữ liệu một chiều (unidirectional data flow), còn **MVC** truyền thống cho phép cập nhật hai chiều (bidirectional data flow) giữa Model và View.

---

### Câu 43

How would you extract and display multiple parameters, userId and postId, in a component?

- **A. const { userId, postId } = useParams();** ✅
- B. const userId = useParams('userId'); const postId = useParams('postId');
- C. const userId = route.params.userId; const postId = route.params.postId;
- D. const { userId } = useParams(); const { postId } = useParams();

> ✅ **Đáp án đúng:** **A** (const { userId, postId } = useParams();)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Hook `useParams()` của React Router v6 trả về một object chứa tất cả các route parameters, nên ta trích xuất nhiều tham số cùng lúc bằng destructuring: `const { userId, postId } = useParams();`.

---

### Câu 44

How would you navigate programmatically to a route with a parameter using useNavigate in React Router?

- A. navigate("/user:id");
- B. navigate("/user?id=123");
- **C. navigate("/user/123");** ✅
- D. navigate({ path: "/user/123" });

> ✅ **Đáp án đúng:** **C** (navigate("/user/123");)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Khi điều hướng bằng code tới một dynamic route như `/user/:id`, ta truyền trực tiếp chuỗi đường dẫn đã điền giá trị thật vào `navigate`: `navigate("/user/123");`.

---

### Câu 45

Why might this code produce unexpected results?

```
function Counter() {
const [count, setCount] = useState(0);
const handleClick = () => {
setCount(count + 1);
setCount(count + 1);
};
return <button onClick={handleClick}>count</button>;
}
```

- A. Because setCount is called twice, it resets state
- B. Because setCount merges the updates automatically
- **C. Both setCount(count + 1) calls use the same snapshot of count** ✅
- D. It's invalid to call setCount twice

> ✅ **Đáp án đúng:** **C** (Both setCount(count + 1) calls use the same snapshot of count)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Cả hai lời gọi `setCount(count + 1)` trong cùng 1 event handler đều đọc **cùng một snapshot giá trị `count`** của lần render hiện tại (ví dụ `0`), nên sau khi click `count` chỉ tăng lên `1` thay vì `2`. Muốn tăng 2 phải dùng `setCount(c => c + 1)`.

---

### Câu 46

Find the bug in the following React code:

```
const [items, setItems] = useState([]);
const addItem = () => {
items.push('new');
setItems(items);
};
```

- A. useState should be useReducer
- **B. use setItems([...items, 'new'])** ✅
- C. push is not a valid method
- D. setItems must take a string

> ✅ **Đáp án đúng:** **B** (use setItems([...items, 'new']))
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - `items.push('new')` đột biến (mutate) trực tiếp mảng cũ và `setItems(items)` truyền lại cùng tham chiếu cũ nên React không phát hiện thay đổi để re-render. Phải tạo mảng mới bất biến: `setItems([...items, 'new'])`.

---

### Câu 47

In the useEffect hook, how many milliseconds would you wait using setTimeout to perform a side effect after 2 seconds?

- A. 2
- B. 200
- **C. 2000** ✅
- D. 20000

> ✅ **Đáp án đúng:** **C** (2000)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Hàm `setTimeout(fn, delay)` tính thời gian bằng **mili-giây (ms)**. Vì `1 giây = 1000 ms`, nên `2 giây = 2000 ms`.

---

### Câu 48

Which is the correct way to consume context in a functional component using the "useContext" hook?

- A. const value = MyContext();
- **B. const value = useContext(MyContext);** ✅
- C. const value = this.context(MyContext);
- D. ```
  <MyContext.Provider useContext={value} />
  ```

> ✅ **Đáp án đúng:** **B** (const value = useContext(MyContext);)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Cách chuẩn để tiêu thụ Context trong functional component là gọi hook `useContext` và truyền đối tượng Context vào: `const value = useContext(MyContext);`.

---

### Câu 49

In React Router, how do you define a nested route structure within a parent component?

- A. ```
  Utilize the <Switch> component to handle nested routes
  ```
- B. Implement a routing table using an array of route objects
- **C. ```
  Use the <Route> component with nested <Route> components
  ```** ✅
- D. Direct routes using query parameters in URL path names

> ✅ **Đáp án đúng:** **C** (Use the <Route> component with nested <Route> components)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Trong React Router v6, Nested Routes được khai báo bằng cách đặt các thẻ `<Route>` con lồng bên trong thẻ `<Route>` cha (và dùng `<Outlet />` trong component cha để hiển thị route con).

---

### Câu 50

Fill in the blank in this Bootstrap CSS code to apply a primary button style using React-Bootstrap:

```
import { Button } from 'react-bootstrap';
<Button _____="primary">Click me</Button>
```

- A. color
- **B. variant** ✅
- C. style
- D. theme

> ✅ **Đáp án đúng:** **B** (variant)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Trong React-Bootstrap, thuộc tính dùng để chọn kiểu màu nút bấm (`primary`, `secondary`, `success`, `danger`...) là **`variant`**: `<Button variant="primary">Click me</Button>`.

---

## 8. Đề 15: Kì SP26 — Đề 3 (50 câu)

### Câu 1

Which of the following is a common use case for using Redux in a React application?

- **A. Managing authentication and user sessions** ✅
- B. Styling and layout of React components
- C. Handling form validation and input tracking
- D. Implementing server-side rendering in React

> ✅ **Đáp án đúng:** **A** (Managing authentication and user sessions)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Một trường hợp sử dụng kinh điển của **Redux** là quản lý global state dùng chung xuyên suốt ứng dụng như **trạng thái xác thực (authentication) và phiên người dùng (user sessions)**.

---

### Câu 2

Which hook is typically used alongside useSelector to modify the Redux state?

- A. useState
- B. useEffect
- **C. useDispatch** ✅
- D. useContext

> ✅ **Đáp án đúng:** **C** (useDispatch)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Trong `react-redux`, `useSelector` dùng để **đọc** dữ liệu từ Redux store, còn **`useDispatch`** đi cặp với nó để gửi action **cập nhật** Redux state.

---

### Câu 3

What is the purpose of the Redux middleware in React applications?

- **A. To handle asynchronous actions and side effects** ✅
- B. To define the structure of the Redux store
- C. To connect React components to the Redux store
- D. To manage component hierarchy

> ✅ **Đáp án đúng:** **A** (To handle asynchronous actions and side effects)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Redux middleware (như Redux Thunk) dùng để chặn và xử lý các **action bất đồng bộ (async actions)** và các tác vụ phụ (side effects như gọi API, logging) trước khi tới reducer.

---

### Câu 4

What is the core principle of Redux?

- **A. Single source of truth and unidirectional data flow.** ✅
- B. Multiple sources of truth for each component.
- C. State is mutable and can be directly modified.
- D. State is only updated using the useState hook.

> ✅ **Đáp án đúng:** **A** (Single source of truth and unidirectional data flow.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Nguyên lý nền tảng của Redux là **Single source of truth** (1 Store duy nhất) và **Unidirectional data flow** (luồng dữ liệu một chiều, state bất biến cập nhật qua Pure Reducers).

---

### Câu 5

What is the advantage of using Axios over fetch?

- **A. Axios has better support for handling requests and responses.** ✅
- B. Axios requires less boilerplate code.
- C. Axios is faster than fetch for all types of HTTP requests.
- D. Axios does not support promises.

> ✅ **Đáp án đúng:** **A** (Axios has better support for handling requests and responses.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Ưu điểm nổi bật của **Axios** so với `fetch()` là hỗ trợ xử lý request/response tốt hơn (tự động parse JSON, tự động reject lỗi HTTP 4xx/5xx, hỗ trợ interceptors và timeout sẵn).

---

### Câu 6

What is the main purpose of the await keyword within an async function?

- A. To return a new Promise object.
- B. To immediately execute the next line of code without waiting.
- **C. To pause the execution of the async function until the Promise it's waiting for is resolved or rejected.** ✅
- D. To define a synchronous block of code

> ✅ **Đáp án đúng:** **C** (To pause the execution of the async function until the Promise it's waiting for is resolved or rejected.)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Từ khóa `await` bên trong hàm `async` tạm dừng thực thi hàm cho đến khi Promise đi sau nó được giải quyết (resolved) hoặc bị từ chối (rejected).

---

### Câu 7

Why would a React developer choose to use "Axios"?

- A. To render React components faster
- B. To manage component state globally
- **C. To make HTTP requests to APIs** ✅
- D. To build reusable hooks

> ✅ **Đáp án đúng:** **C** (To make HTTP requests to APIs)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Lập trình viên React chọn **Axios** để gửi các yêu cầu HTTP (`GET`, `POST`, `PUT`, `DELETE`) giao tiếp với REST API.

---

### Câu 8

Which method is most commonly used in a React app to fetch data from a server?

- A. WebSockets
- B. useState()
- **C. fetch() or axios inside useEffect()** ✅
- D. console.log() inside render()

> ✅ **Đáp án đúng:** **C** (fetch() or axios inside useEffect())
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Cách phổ biến và đúng chuẩn nhất để gọi API lấy dữ liệu từ server trong React là sử dụng **`fetch()` hoặc `axios` bên trong `useEffect()`**.

---

### Câu 9

Which of the following is used to pass a function from a parent component to a child component?

- **A. Passing a function as a prop to the child component.** ✅
- B. Using useState hook in the child component.
- C. Using useContext in both parent and child components.
- D. Directly accessing the child component's state.

> ✅ **Đáp án đúng:** **A** (Passing a function as a prop to the child component.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Để truyền một hàm từ component cha xuống component con trong React, ta truyền hàm đó dưới dạng một **prop** (ví dụ `<Child onSave={handleSave} />`).

---

### Câu 10

What happens when you use the xs prop on a Col component in React-Bootstrap?

- A. The column will only have its width defined on extra-large screens.
- B. The column will only have its width defined on extra-small screens, and larger sizes will ignore it
- **C. The column will have its width defined on extra-small screens and will apply to larger sizes if no specific breakpoint is defined.** ✅
- D. The xs prop does not exist in React-Bootstrap

> ✅ **Đáp án đúng:** **C** (The column will have its width defined on extra-small screens and will apply to larger sizes if no specific breakpoint is defined.)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Theo nguyên lý Mobile-First của React-Bootstrap, prop `xs` trên `<Col>` định nghĩa độ rộng từ màn hình siêu nhỏ và **tự động áp dụng cho các màn hình lớn hơn** nếu không khai báo thêm breakpoint khác.

---

### Câu 11

How can you ensure that a prop is passed as an array with at least one element?

- A. By using PropTypes.array.isRequired
- **B. By creating a custom PropType validator** ✅
- C. By using PropTypes.arrayOf()
- D. By using PropTypes.objectOf()

> ✅ **Đáp án đúng:** **B** (By creating a custom PropType validator)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - `PropTypes.array.isRequired` chỉ kiểm tra prop có phải là mảng (mảng rỗng `[]` vẫn hợp lệ!). Để kiểm tra mảng phải có **ít nhất 1 phần tử (`props[propName].length >= 1`)**, bắt buộc phải viết một **custom PropType validator**.

---

### Câu 12

What is the primary purpose of a router in a web application?

- A. To manage state within a component
- **B. To respond to a URL based on a set of route handler declarations** ✅
- C. To handle server-side logic
- D. To manage routing in a React application

> ✅ **Đáp án đúng:** **B** (To respond to a URL based on a set of route handler declarations)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Mục đích cốt lõi của Router trong ứng dụng web là phân tích URL và phản hồi bằng route handler/component tương ứng theo bảng khai báo route.

---

### Câu 13

How do you declare a route in React Router?

- A. ```
  Using <Link path="/" element={<Home/>} />
  ```
- **B. ```
  Using <Route path="/" element={<Home/>} />
  ```** ✅
- C. ```
  Using <Routes path="/" element={<Home/>} />
  ```
- D. ```
  Using <context path="/" ></context>
  ```

> ✅ **Đáp án đúng:** **B** (Using <Route path="/" element={<Home/>} />)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Trong React Router v6, mỗi route được khai báo bằng component `<Route path="/" element={<Home />} />`.

---

### Câu 14

What is the difference between the HTTP response codes 401 and 403?

- **A. 401 the request is missing valid authentication credentials, while 403 the server refuses to authorize.** ✅
- B. 401 the server encountered an internal error, while 403 means the requested resource was not found.
- C. 401 the request was successful, while 403 means the request was not modified.
- D. 401 and 403 are interchangeable and have the same meaning.

> ✅ **Đáp án đúng:** **A** (401 the request is missing valid authentication credentials, while 403 the server refuses to authorize.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - **401 Unauthorized**: thiếu thông tin xác thực hợp lệ (chưa đăng nhập / token hết hạn). **403 Forbidden**: đã xác thực nhưng máy chủ từ chối cấp quyền truy cập.

---

### Câu 15

```
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const port = 3000;
server.use(router);
server.listen(port, () => {
    console.log(`JSON server is running on port ${port}`);
});
```

What is the above code used for?

- **A. Create a dynamic server to serve JSON data.** ✅
- B. Create a dynamic web application using JSON data.
- C. Create a JSON file based on data from the server.
- D. Configure the development environment for the project using JSON.

> ✅ **Đáp án đúng:** **A** (Create a dynamic server to serve JSON data.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Đoạn mã dùng thư viện `json-server` để tạo một REST API server động chạy trên cổng 3000 phục vụ dữ liệu JSON từ file `data.json`.

---

### Câu 16

How do you dispatch an action when a button is clicked?

- **A. ```
  const handleClick = () => {
      dispatch({ type: 'BUTTON_CLICKED' });
  };
  <button onClick={handleClick}>Click me</button>;
  ```** ✅
- B. ```
  const handleClick = () => {
      dispatch({ type: 'BUTTON_CLICKED' });
  };
  <button onClick={() => handleClick()}>Click me</button>;
  ```
- C. ```
  const handleClick = () => { dispatch({ type: 'BUTTON_CLICKED' }); }; <button onClick={handleClick}>Click me</button>;
  ```
- D. ```
  const handleClick = () => {
      dispatch({ action: 'BUTTON_CLICKED' });
  };
  <button onClick={handleClick}>Click me</button>;
  ```

> ✅ **Đáp án đúng:** **A** (const handleClick = () => {     dispatch({ type: 'BUTTON_CLICKED' }); }; <button onClick={handleClick}>Click me</button>;)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Định nghĩa `handleClick` gọi `dispatch({ type: 'BUTTON_CLICKED' })` và truyền tham chiếu `onClick={handleClick}` là cú pháp chuẩn nhất (đáp án D sai vì dùng `{ action: ... }` thay vì `{ type: ... }`).

---

### Câu 17

Which of the following is the correct way to use useSelector to access a value from the Redux store?

- A. const value = useSelector((store) => store.value);
- **B. const value = useSelector((state) => state.value);** ✅
- C. const value = useSelector((context) => context.value);
- D. const value = useSelector((redux) => redux.value);

> ✅ **Đáp án đúng:** **B** (const value = useSelector((state) => state.value);)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Hook `useSelector` nhận vào hàm selector có tham số là `state` của Redux store: `const value = useSelector((state) => state.value);`.

---

### Câu 18

What is the typical file extension for a React component?

- A. html
- B. css
- **C. js or .jsx** ✅
- D. php

> ✅ **Đáp án đúng:** **C** (js or .jsx)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - File chứa React component thường có phần mở rộng là `.js` hoặc `.jsx` (hoặc `.ts`/`.tsx` với TypeScript).

---

### Câu 19 *(Chọn 2 đáp án)*

What is the purpose of React. Fragment or shorthand <> </> in React? (Select all that apply)

*(Chọn 2 đáp án)*

- **A. Fragments allow you to group multiple elements without adding an extra node to the DOM.** ✅
- B. Fragments allow you to provide CSS styling to multiple elements.
- C. Fragments allow you to handle state management in React.
- **D. ```
  Fragments are particularly useful for avoiding unnecessary <div> elements, which can clutter your markup.
  ```** ✅

> ✅ **Đáp án đúng:** **A** (Fragments allow you to group multiple elements without adding an extra node to the DOM.) ; **D** (Fragments are particularly useful for avoiding unnecessary <div> elements, which can clutter your markup.)
>
> 💡 **Giải thích:** **Đáp án đúng: A và D** *(Câu chọn 2 đáp án)*
> 
> - `React.Fragment` (`<>...</>`) giúp gom nhiều phần tử con mà **không thêm node thừa vào DOM** (A) và **tránh tạo các thẻ `<div>` không cần thiết** làm rối markup (D).

---

### Câu 20

How can the useEffect hook be optimized for cleanup actions?

- **A. By passing an empty array as the second argument** ✅
- B. By using a class-based component
- C. By calling it after every render
- D. By manually removing event listeners

> ✅ **Đáp án đúng:** **A** (By passing an empty array as the second argument)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Truyền mảng dependency rỗng `[]` làm đối số thứ hai cho `useEffect` giúp effect chỉ chạy 1 lần lúc mount và hàm cleanup chỉ dọn dẹp đúng 1 lần khi component unmount.

---

### Câu 21

How would you use the useContext Hook to access a shared theme in a React component?

- **A. const theme = useContext(ThemeContext);** ✅
- B. const { theme } = useContext(ThemeContext);
- C. const { theme } = useContext(ThemeContext.Provider);
- D. const theme = useContext(ThemeContext.Provider);

> ✅ **Đáp án đúng:** **A** (const theme = useContext(ThemeContext);)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Cú pháp chuẩn của `useContext` là truyền đối tượng Context trực tiếp (không truyền `.Provider`): `const theme = useContext(ThemeContext);`.

---

### Câu 22

Which of the following could cause an Effect to run too frequently?

- A. Including all state variables in the dependency array.
- B. Not using a dependency array.
- **C. Including a variable like data that changes often in the dependency array.** ✅
- D. Omitting the dependency array altogether.

> ✅ **Đáp án đúng:** **C** (Including a variable like data that changes often in the dependency array.)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Đưa một biến thay đổi liên tục (như `data` đổi sau mỗi lần render) vào dependency array sẽ khiến `useEffect` chạy lại quá thường xuyên.

---

### Câu 23

Which of the following is NOT considered a popular front-end framework?

- A. React
- B. Angular
- **C. Django** ✅
- D. Vue.js

> ✅ **Đáp án đúng:** **C** (Django)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - **Django** là back-end web framework viết bằng Python, KHÔNG phải front-end framework (React, Angular, Vue.js mới là front-end).

---

### Câu 24

What is one major benefit of using front-end frameworks like React or Vue.js?

- A. They eliminate the need for HTML
- **B. They allow for faster development by providing pre-built components** ✅
- C. They only work on mobile applications
- D. They focus solely on server-side development

> ✅ **Đáp án đúng:** **B** (They allow for faster development by providing pre-built components)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Front-end frameworks/libraries như React hay Vue.js giúp phát triển nhanh hơn đáng kể nhờ kiến trúc component tái sử dụng và hệ sinh thái component dựng sẵn.

---

### Câu 25

How can you access Chrome DevTools?

- **A. By pressing F12 or right-clicking and selecting "Inspect"** ✅
- B. By installing a Chrome extension
- C. By typing "chrome://devtools" in the address bar
- D. By opening the Chrome menu and selecting "DevTools"

> ✅ **Đáp án đúng:** **A** (By pressing F12 or right-clicking and selecting "Inspect")
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Mở Chrome DevTools nhanh nhất bằng phím **`F12`** (hoặc click chuột phải trên trang web → chọn **"Inspect"**).

---

### Câu 26

```
How would you render a user's name dynamically inside an <h2> tag in JSX?
```

- A. ```
  <h2><p>{userName}</p></h2>
  ```
- **B. ```
  <h2>{userName}</h2>
  ```** ✅
- C. ```
  <h2>"userName"</h2>
  ```
- D. ```
  <h2>{userName: "John"}</h2>
  ```

> ✅ **Đáp án đúng:** **B** (<h2>{userName}</h2>)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Để render biến `userName` động trong thẻ `<h2>` của JSX, ta bọc biến trong ngoặc nhọn đơn: `<h2>{userName}</h2>`.

---

### Câu 27

The purpose of JSX is to:

- **A. Make JavaScript code more readable by embedding HTML in JavaScript** ✅
- B. Make JavaScript run faster
- C. Encrypt HTML elements
- D. Handle server-side logic

> ✅ **Đáp án đúng:** **A** (Make JavaScript code more readable by embedding HTML in JavaScript)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - JSX giúp mã JavaScript dễ đọc, trực quan hơn bằng cách cho phép viết cú pháp giống HTML ngay trong mã JavaScript.

---

### Câu 28 *(Chọn 3 đáp án)*

What does ES6 introduce that is essential for React applications? (Select all that apply)

*(Chọn 3 đáp án)*

- **A. Arrow functions** ✅
- **B. Destructuring assignment** ✅
- C. JSX syntax
- **D. Template Literals** ✅

> ✅ **Đáp án đúng:** **A** (Arrow functions) ; **B** (Destructuring assignment) ; **D** (Template Literals)
>
> 💡 **Giải thích:** **Đáp án đúng: A, B và D** *(Câu chọn 3 đáp án)*
> 
> - ES6 giới thiệu **Arrow functions** (A), **Destructuring assignment** (B) và **Template Literals** (D). **JSX** (C) là cú pháp của React, không phải tính năng của ES6.

---

### Câu 29

How do you import and use a Button component from React-Bootstrap 5? (Select all that apply)

- A. ```
  import React from 'react';
  import Button from 'react-bootstrap/Button';
  function Demo() {
      return (
      <Button variant="primary">
      );
  }
  export default Demo;
  ```
- B. ```
  import React from 'react';
  import Button from 'react-bootstrap/Button';
  function Demo() {
      return (
      <button variant="primary"> Primary Button</button>
      );
  }
  export default Demo;
  ```
- **C. ```
  import React from 'react';
  import Button from 'react-bootstrap/Button';
  function Demo() {
      return (
      <Button variant="primary">Primary Button</Button>
      );
  }
  export default Demo;
  ```** ✅
- D. ```
  import React from 'react';
  import Button from 'react-bootstrap/Button';
  function Demo() {
      return (
      <button variant="primary"/>
      );
  }
  export default Demo;
  ```

> ✅ **Đáp án đúng:** **C** (import React from 'react'; import Button from 'react-bootstrap/Button'; function Demo() {     return (     <Button variant="primary">Primary Button</Button>     ); } export default Demo;)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Đáp án C sử dụng đúng component `<Button variant="primary">Primary Button</Button>` (viết hoa chữ `B` và có thẻ đóng đầy đủ). A thiếu thẻ đóng, B và D dùng thẻ `<button>` HTML thường.

---

### Câu 30

What is the main purpose of React-Bootstrap?

- A. To build React components using jQuery
- B. To use Bootstrap styles with inline CSS only
- **C. To provide Bootstrap-styled components built entirely with React** ✅
- D. To convert Bootstrap HTML into Angular components

> ✅ **Đáp án đúng:** **C** (To provide Bootstrap-styled components built entirely with React)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - **React-Bootstrap** cung cấp các component mang giao diện Bootstrap được xây dựng lại hoàn toàn bằng React (quản lý bằng props/state, không cần jQuery).

---

### Câu 31

Create a responsive grid layout using React-Bootstrap with three columns that stack vertically on small screens. Which classes would you apply?

- A. ```
  <Container>
     <Row>
      <Col>1 of 3</Col>
      <Col>2 of 3</Col>
      <Col>3 of 3</Col>
     </Row>
  </Container>
  ```
- **B. ```
  <Container>
     <Row>
      <Col sm={4}>1 of 3</Col>
      <Col sm={4}>2 of 3</Col>
      <Col sm={4}>3 of 3</Col>
     </Row>
  </Container>
  ```** ✅
- C. ```
  `<Container>`
     <Row>
      <Col md={12}>1 of 4</Col>
      <Col md={12}>2 of 4</Col>
      <Col md={12}>3 of 4</Col>
     </Row>
  </Container>
  ```
- D. ```
  `<Container>`
     <Row>
      <Col sm={12} md={4}>1 of 4</Col>
      <Col sm={12} md={4}>2 of 4</Col>
      <Col sm={12} md={4}>3 of 4</Col>
     </Row>
  </Container>
  ```

> ✅ **Đáp án đúng:** **B** (<Container>    <Row>     <Col sm={4}>1 of 3</Col>     <Col sm={4}>2 of 3</Col>     <Col sm={4}>3 of 3</Col>    </Row> </Container>)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Dùng `<Col sm={4}>` cho 3 cột (`4 × 3 = 12`): từ màn hình `sm` trở lên 3 cột chia đều trên 1 hàng ngang, còn ở màn hình nhỏ hơn `sm` chúng tự động xếp chồng dọc.

---

### Câu 32

Which of the following is the first step in React's render cycle?

- **A. Triggering a render when state or props change.** ✅
- B. Re-rendering the component.
- C. Committing the changes to the DOM.
- D. Calculating the minimal necessary updates for the DOM.

> ✅ **Đáp án đúng:** **A** (Triggering a render when state or props change.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Bước đầu tiên trong chu trình render của React là **Triggering a render** (khi component mount lần đầu hoặc khi state/props thay đổi), tiếp theo mới đến Render và Commit.

---

### Câu 33 *(Chọn 2 đáp án)*

How can you pass parameters to an event handler in React? (Select all that apply)

*(Chọn 2 đáp án)*

- **A. Using the bind() method.** ✅
- **B. Using arrow functions.** ✅
- C. Using the addEventListener() method.
- D. Using the this keyword.

> ✅ **Đáp án đúng:** **A** (Using the bind() method.) ; **B** (Using arrow functions.)
>
> 💡 **Giải thích:** **Đáp án đúng: A và B** *(Câu chọn 2 đáp án)*
> 
> - Hai cách chuẩn để truyền tham số vào event handler trong React là dùng **`bind()`** (A) hoặc bọc trong **arrow function** `() => handle(arg)` (B).

---

### Câu 34

What is the primary purpose of Next.js?

- **A. To enable server-side rendering and generate static websites.** ✅
- B. To manage state in React applications.
- C. To provide a UI component library.
- D. To create database schemas.

> ✅ **Đáp án đúng:** **A** (To enable server-side rendering and generate static websites.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Mục đích chính của **Next.js** là cung cấp **Server-Side Rendering (SSR)** và **Static Site Generation (SSG)** trên nền React.

---

### Câu 35

What is the main advantage of Tailwind CSS compared to Bootstrap?

- **A. It provides more flexibility to create custom designs and components.** ✅
- B. It is easier to use and has fewer customization options.
- C. It has predefined components for quick styling.
- D. It offers faster page loading times.

> ✅ **Đáp án đúng:** **A** (It provides more flexibility to create custom designs and components.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Lợi thế chính của **Tailwind CSS** so với Bootstrap là tính linh hoạt vượt trội nhờ các utility classes, giúp tự do xây dựng giao diện và component tùy biến cao.

---

### Câu 36

What command is used to create a new Next.js project?

- A. npm create-react-app
- B. npm install next
- **C. npm create-next-app** ✅
- D. git clone next.js

> ✅ **Đáp án đúng:** **C** (npm create-next-app)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Lệnh khởi tạo một dự án Next.js mới là `npx create-next-app` / `npm create-next-app`.

---

### Câu 37

What is a core feature of Next.js that enhances SEO?

- A. Real-time data fetching.
- B. Client-side routing.
- C. Automatic code splitting.
- **D. Server-side rendering.** ✅

> ✅ **Đáp án đúng:** **D** (Server-side rendering.)
>
> 💡 **Giải thích:** **Đáp án đúng: D**
> 
> - **Server-Side Rendering (SSR)** trả về HTML đầy đủ nội dung từ server giúp công cụ tìm kiếm lập chỉ mục dễ dàng, là tính năng cốt lõi nâng cao **SEO** của Next.js.

---

### Câu 38

Which Bootstrap class is commonly used to create a responsive navigation bar?

- A. navbar-static
- B. nav-horizontal
- **C. navbar** ✅
- D. navigation-block

> ✅ **Đáp án đúng:** **C** (navbar)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Trong Bootstrap, class `.navbar` được dùng để tạo thanh điều hướng responsive.

---

### Câu 39

Which class is used to create a form input with a validation state in Bootstrap 5?

- **A. form-control** ✅
- B. input-group
- C. form-check
- D. form-validation

> ✅ **Đáp án đúng:** **A** (form-control)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Trong Bootstrap 5, ô input của form dùng class `.form-control` (và gắn thêm `.is-valid` / `.is-invalid` cho trạng thái kiểm tra hợp lệ).

---

### Câu 40

Which Bootstrap class provides a fluid container that adapts to all breakpoints?

- **A. container-fluid** ✅
- B. container
- C. container-lg
- D. container-xs

> ✅ **Đáp án đúng:** **A** (container-fluid)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Class `.container-fluid` tạo container tràn viền 100% chiều rộng thích ứng ở mọi breakpoint.

---

### Câu 41

Why should you avoid using too many lazy components in your application?

- **A. Because it results in multiple HTTP requests, slowing down the application.** ✅
- B. Because it decreases the performance by loading everything upfront.
- C. Because it makes the code difficult to debug.
- D. Because it affects the layout and styling of components.

> ✅ **Đáp án đúng:** **A** (Because it results in multiple HTTP requests, slowing down the application.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Tạo quá nhiều lazy components nhỏ lẻ sẽ phát sinh rất nhiều **HTTP requests** riêng rẽ để tải từng chunk, làm tăng độ trễ và chậm ứng dụng.

---

### Câu 42

Analyze the differences between Flux and MVC architectures. Which statement is true?

- **A. Flux enforces unidirectional data flow, while MVC allows bidirectional data flow.** ✅
- B. MVC enforces unidirectional data flow, while Flux allows bidirectional data flow.
- C. Both Flux and MVC enforce unidirectional data flow.
- D. Both Flux and MVC allow bidirectional data flow.

> ✅ **Đáp án đúng:** **A** (Flux enforces unidirectional data flow, while MVC allows bidirectional data flow.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - **Flux** ép buộc luồng dữ liệu một chiều (unidirectional), còn **MVC** truyền thống cho phép luồng dữ liệu hai chiều (bidirectional).

---

### Câu 43

How would you extract and display multiple parameters, userId and postId, in a component?

- **A. const { userId, postId } = useParams();** ✅
- B. const userId = useParams('userId'); const postId = useParams('postId');
- C. const userId = route.params.userId; const postId = route.params.postId;
- D. const { userId } = useParams(); const { postId } = useParams();

> ✅ **Đáp án đúng:** **A** (const { userId, postId } = useParams();)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Dùng destructuring trên kết quả của `useParams()` để lấy nhiều route parameters cùng lúc: `const { userId, postId } = useParams();`.

---

### Câu 44

How would you navigate programmatically to a route with a parameter using useNavigate in React Router?

- A. navigate("/user:id");
- B. navigate("/user?id=123");
- **C. navigate("/user/123");** ✅
- D. navigate({ path: "/user/123" });

> ✅ **Đáp án đúng:** **C** (navigate("/user/123");)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Để điều hướng tới route có tham số bằng `useNavigate`, ta truyền chuỗi đường dẫn chứa giá trị thực: `navigate("/user/123");`.

---

### Câu 45

Why might this code produce unexpected results?

```
function Counter() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
        setCount(count + 1);
    };
    return <button onClick={handleClick}>count</button>;
}
```

- A. Because setCount is called twice, it resets state
- B. Because setCount merges the updates automatically
- **C. Both setCount(count + 1) calls use the same snapshot of count** ✅
- D. It's invalid to call setCount twice

> ✅ **Đáp án đúng:** **C** (Both setCount(count + 1) calls use the same snapshot of count)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Cả hai lệnh `setCount(count + 1)` trong cùng 1 handler đều sử dụng **cùng một snapshot giá trị `count`** của lần render hiện tại nên kết quả chỉ tăng thêm 1 thay vì 2 (cần dùng `setCount(c => c + 1)`).

---

### Câu 46

Find the bug in the following React code:

```
const [items, setItems] = useState([]);
const addItem = () => {
    items.push('new');
    setItems(items);
};
```

- A. useState should be useReducer
- **B. use setItems([...items, 'new'])** ✅
- C. push is not a valid method
- D. setItems must take a string

> ✅ **Đáp án đúng:** **B** (use setItems([...items, 'new']))
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - `items.push('new')` đột biến trực tiếp mảng cũ nên React không thấy thay đổi tham chiếu để re-render. Phải tạo mảng mới bất biến bằng spread: `setItems([...items, 'new'])`.

---

### Câu 47

In the useEffect hook, how many milliseconds would you wait using setTimeout to perform a side effect after 2 seconds?

- A. 2
- B. 200
- **C. 2000** ✅
- D. 20000

> ✅ **Đáp án đúng:** **C** (2000)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - `setTimeout` nhận độ trễ tính theo **mili-giây (ms)**, nên `2 giây = 2000 ms`.

---

### Câu 48

Which is the correct way to consume context in a functional component using the "useContext" hook?

- A. const value = MyContext();
- **B. const value = useContext(MyContext);** ✅
- C. const value = this.context(MyContext);
- D. ```
  <MyContext.Provider useContext={value} />
  ```

> ✅ **Đáp án đúng:** **B** (const value = useContext(MyContext);)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Để đọc giá trị Context trong functional component bằng hook `useContext`, viết: `const value = useContext(MyContext);`.

---

### Câu 49

In React Router, how do you define a nested route structure within a parent component?

- A. ```
  Utilize the <Switch> component to handle nested routes
  ```
- B. Implement a routing table using an array of route objects
- **C. ```
  Use the <Route> component with nested <Route> components
  ```** ✅
- D. Direct routes using query parameters in URL path names

> ✅ **Đáp án đúng:** **C** (Use the <Route> component with nested <Route> components)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Trong React Router v6, Nested Routes được khai báo bằng cách đặt các thẻ `<Route>` con lồng bên trong `<Route>` cha (kết hợp `<Outlet />` để render route con).

---

### Câu 50

Fill in the blank in this Bootstrap CSS code to apply a primary button style using React-Bootstrap:

```
import { Button } from 'react-bootstrap';
<Button _____="primary">Click me</Button>
```

- A. color
- **B. variant** ✅
- C. style
- D. theme

> ✅ **Đáp án đúng:** **B** (variant)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Trong React-Bootstrap, thuộc tính quy định kiểu màu nút (`primary`, `success`, `danger`...) là **`variant`**: `<Button variant="primary">Click me</Button>`.

---

## 9. Đề 03: Kì SU26 — Đề Thi Chính Thức (50 câu)

### Câu 1

Which hook is typically used alongside useSelector to modify the Redux state?

- A. useState
- B. useEffect
- **C. useDispatch** ✅
- D. useContext

> ✅ **Đáp án đúng:** **C** (useDispatch)
>
> 💡 **Giải thích:** Trong Redux với React, useSelector dùng để lấy state, còn useDispatch dùng để gửi action (dispatch) nhằm thay đổi state. useState, useEffect, useContext không liên quan trực tiếp đến Redux state modification.

---

### Câu 2

Which command installs json-server globally?

- A. npm add json-server
- B. node install json-server
- C. npm get json-server
- **D. npm install json-server -g** ✅

> ✅ **Đáp án đúng:** **D** (npm install json-server -g)
>
> 💡 **Giải thích:** Lệnh 'npm install json-server -g' cài đặt json-server toàn cục (global) trên hệ thống. Các lựa chọn khác không phải là cú pháp hợp lệ của npm.

---

### Câu 3

What is the main role of a reducer in Redux?

- A. To fetch data from APIs
- B. To dispatch actions to components
- **C. To update the store by returning the new state based on the action received** ✅
- D. To create components dynamically

> ✅ **Đáp án đúng:** **C** (To update the store by returning the new state based on the action received)
>
> 💡 **Giải thích:** Reducer trong Redux nhận action và state hiện tại, sau đó trả về state mới — đây là vai trò cốt lõi để cập nhật store. Không dùng để fetch data hay dispatch action.

---

### Câu 4

What does the 'useSelector' hook do in React-Redux?

- **A. It allows you to read values from the Redux store.** ✅
- B. It allows you to update the Redux store state.
- C. It is used to perform side effects.
- D. It dispatches actions to update the state.

> ✅ **Đáp án đúng:** **A** (It allows you to read values from the Redux store.)
>
> 💡 **Giải thích:** useSelector trong React-Redux dùng để trích xuất (select) dữ liệu từ store Redux. Để cập nhật state, dùng useDispatch. Không dùng cho side effect hay dispatch trực tiếp.

---

### Câu 5

What is the main purpose of the `await` keyword within an `async` function?

- A. To return a new Promise object.
- B. To immediately execute the next line of code without waiting.
- **C. To pause the execution of the async function until the Promise it's waiting for is resolved or rejected.** ✅
- D. To define a synchronous block of code

> ✅ **Đáp án đúng:** **C** (To pause the execution of the async function until the Promise it's waiting for is resolved or rejected.)
>
> 💡 **Giải thích:** Từ khóa `await` trong hàm `async` tạm dừng thực thi hàm cho đến khi Promise được giải quyết (resolve hoặc reject), giúp viết code bất đồng bộ giống đồng bộ, dễ đọc và kiểm soát luồng hơn.

---

### Câu 6

What is the main advantage of using async/await over Promises?

- **A. It allows for a more readable and simpler syntax for handling asynchronous code.** ✅
- B. It uses callbacks instead of promises.
- C. It only works for synchronous operations.
- D. It increases the loading time of web pages.

> ✅ **Đáp án đúng:** **A** (It allows for a more readable and simpler syntax for handling asynchronous code.)
>
> 💡 **Giải thích:** Async/await là cú pháp hiện đại trong JavaScript giúp viết code bất đồng bộ giống như code đồng bộ, dễ đọc và dễ bảo trì hơn so với chuỗi .then() của Promise.

---

### Câu 7

What is async/await in JavaScript?

- **A. It is a JavaScript feature that makes asynchronous code look and behave like synchronous code.** ✅
- B. It is used to send data to a server without blocking the UI.
- C. It is a way to handle callback functions.
- D. It is a method to manage state in React components.

> ✅ **Đáp án đúng:** **A** (It is a JavaScript feature that makes asynchronous code look and behave like synchronous code.)
>
> 💡 **Giải thích:** Async/await là cú pháp trong JavaScript giúp viết code bất đồng bộ trông giống như đồng bộ, dễ đọc và dễ quản lý hơn so với callback hay promise. Nó không gửi dữ liệu hay quản lý state, mà chỉ là cách viết lại logic bất đồng bộ.

---

### Câu 8

What does a JavaScript Promise represent?

- A. A synchronous function that returns HTML
- B. A guarantee that a function will execute twice
- **C. An object representing the eventual completion (or failure) of an asynchronous operation** ✅
- D. A function that blocks the main thread until complete

> ✅ **Đáp án đúng:** **C** (An object representing the eventual completion (or failure) of an asynchronous operation)
>
> 💡 **Giải thích:** Promise trong JavaScript đại diện cho kết quả (thành công hoặc thất bại) của một thao tác bất đồng bộ trong tương lai, không chặn luồng chính. Đáp án đúng là C.

---

### Câu 9

What is the purpose of context in React?

- **A. Context allows data to be passed between components without prop drilling.** ✅
- B. Context is used to fetch data from the server.
- C. Context is used to store the component's state.
- D. Context is used to style components.

> ✅ **Đáp án đúng:** **A** (Context allows data to be passed between components without prop drilling.)
>
> 💡 **Giải thích:** React Context provides a way to pass data through the component tree without having to pass props down manually at every level (prop drilling). It is not primarily for fetching data, storing state (that’s useState/useReducer), or styling. Option A is the correct and standard definition.

---

### Câu 10

In React, what are "props" used for?

- A. To style components with CSS
- B. To pass data from a child component to a parent
- **C. To pass data from a parent component to a child** ✅
- D. To store local state in functional components

> ✅ **Đáp án đúng:** **C** (To pass data from a parent component to a child)
>
> 💡 **Giải thích:** Trong React, props (properties) được dùng để truyền dữ liệu từ component cha xuống component con, giúp tái sử dụng và quản lý dữ liệu một cách linh hoạt.

---

### Câu 11

What is a "context consumer"?

- A. A component that provides data to a context.
- B. A component that only renders static content.
- **C. A component that uses data made available within a context.** ✅
- D. A component that is responsible for updating the DOM directly

> ✅ **Đáp án đúng:** **C** (A component that uses data made available within a context.)
>
> 💡 **Giải thích:** Context consumer là thành phần sử dụng dữ liệu được cung cấp bởi context (ví dụ trong React, component dùng useContext để đọc dữ liệu từ context).

---

### Câu 12 *(Chọn 3 đáp án)*

Which of the following are benefits of using React Hooks in a functional component? Select all that apply.

- **A. Enable functional components to have state** ✅
- B. Automatically optimize performance
- **C. Simplify component logic** ✅
- **D. Promote reusability of logic between components** ✅

> ✅ **Đáp án đúng:** **A** (Enable functional components to have state) ; **C** (Simplify component logic) ; **D** (Promote reusability of logic between components)
>
> 💡 **Giải thích:** React Hooks cho phép component chức năng quản lý state (A), giúp logic rõ ràng và dễ bảo trì (C), và dễ tái sử dụng logic giữa các component (D). Tuy nhiên, Hooks không tự động tối ưu hiệu năng (B) — đó là nhiệm vụ của React.memo, useCallback, v.v.

---

### Câu 13

Evaluate the benefits of using the React.lazy API for code splitting in a React application. Which of the following is NOT a benefit?

- A. Reduces the initial load time by splitting code into bundles
- **B. Ensures that all components are loaded upfront** ✅
- C. Provides a better user experience by loading components only when needed
- D. Allows for dynamic imports and lazy loading of components

> ✅ **Đáp án đúng:** **B** (Ensures that all components are loaded upfront)
>
> 💡 **Giải thích:** React.lazy dùng để lazy load — tức là chỉ tải component khi cần, không phải tải tất cả upfront. Do đó, B là đáp án KHÔNG phải lợi ích. Các lựa chọn còn lại đều đúng: giảm thời gian tải ban đầu, trải nghiệm người dùng tốt hơn, hỗ trợ dynamic import.

---

### Câu 14

How do you declare routes in React Router?

- **A. Using the \<Route\> component** ✅
- B. Using the \<Link\> component
- C. Using the \<Switch\> component
- D. Using the \<Redirect\> component

> ✅ **Đáp án đúng:** **A** (Using the \<Route\> component)
>
> 💡 **Giải thích:** Trong React Router, routes được khai báo bằng component <Route>, xác định đường dẫn URL và component tương ứng sẽ render khi truy cập đường dẫn đó.

---

### Câu 15

What is the syntax for defining a route with a parameter in React Router?

- **A. `<Route path='/users/:id' />`** ✅
- B. `<Route path='/users{?id}' />`
- C. `<Route path='/users[?id]' />`
- D. `<Route param='/users/:id' />`

> ✅ **Đáp án đúng:** **A** (`<Route path='/users/:id' />`)
>
> 💡 **Giải thích:** Trong React Router, cú pháp đúng để định nghĩa route có tham số là sử dụng dấu hai chấm (:) trước tên tham số, ví dụ '/users/:id'. Các lựa chọn khác không phải là cú pháp hợp lệ.

---

### Câu 16

What is the difference between the HTTP response codes 401 and 403?

- **A. 401 the request is missing valid authentication credentials, while 403 the server refuses to authorize.** ✅
- B. 401 the server encountered an internal error, while 403 means the requested resource was not found.
- C. 401 the request was successful, while 403 means the request was not modified.
- D. 401 and 403 are interchangeable and have the same meaning.

> ✅ **Đáp án đúng:** **A** (401 the request is missing valid authentication credentials, while 403 the server refuses to authorize.)
>
> 💡 **Giải thích:** HTTP 401 Unauthorized: yêu cầu thiếu thông tin xác thực hợp lệ. HTTP 403 Forbidden: máy chủ hiểu yêu cầu nhưng từ chối thực hiện do không có quyền truy cập. Hai mã này không giống nhau và không thể thay thế lẫn nhau.

---

### Câu 17

Which of the following is the correct way to dispatch an action using the useDispatch hook?

- A. `const dispatch = useDispatch(); dispatch('ACTION_TYPE');`
- B. `const dispatch = useDispatch(); dispatch(() => { type: 'ACTION_TYPE' });`
- **C. `const dispatch = useDispatch(); dispatch({ type: 'ACTION_TYPE' });`** ✅
- D. `const dispatch = useDispatch(); dispatch({ action: 'ACTION_TYPE' });`

> ✅ **Đáp án đúng:** **C** (`const dispatch = useDispatch(); dispatch({ type: 'ACTION_TYPE' });`)
>
> 💡 **Giải thích:** Trong Redux Toolkit/React-Redux, useDispatch trả về hàm dispatch. Để gửi action, ta gọi dispatch({ type: 'ACTION_TYPE' }) — đúng cú pháp. Các lựa chọn khác sai cú pháp hoặc không hợp lệ.

---

### Câu 18 *(Chọn 3 đáp án)*

Which of the following are essential steps when fetching data from an API in a React application? Select all
that apply

- **A. Using fetch or another method to retrieve data from the API** ✅
- **B. Converting the response data into JSON format** ✅
- C. Rendering the fetched data immediately on page load
- **D. Handling errors that may occur during the data fetching process** ✅

> ✅ **Đáp án đúng:** **A** (Using fetch or another method to retrieve data from the API) ; **B** (Converting the response data into JSON format) ; **D** (Handling errors that may occur during the data fetching process)
>
> 💡 **Giải thích:** Essential steps: A (fetch data), B (parse JSON), D (error handling). C is not essential — data can be rendered after loading, not necessarily immediately.

---

### Câu 19

How do you configure a Redux store using Redux Toolkit?

- A. import { createStore } from 'redux';
  const store = createStore({ reducer: { counter: counterReducer } });
- B. import { createStore } from 'redux';
  const store = createStore({ counter: counterReducer });
- C. import { configureStore } from '@reduxjs/toolkit';
  const store = configureStore({ counter: counterReducer });
- **D. import { configureStore } from '@reduxjs/toolkit';
  const store = configureStore({ reducer: { counter: counterReducer } });** ✅

> ✅ **Đáp án đúng:** **D** (import { configureStore } from '@reduxjs/toolkit'; const store = configureStore({ reducer: { counter: counterReducer } });)
>
> 💡 **Giải thích:** Redux Toolkit dùng configureStore() để tạo store, và yêu cầu truyền vào đối tượng có key 'reducer' chứa các reducer. Cú pháp trong đáp án D là đúng và chuẩn theo tài liệu Redux Toolkit.

---

### Câu 20

What is a Component in React?

- A. It is a single UI element.
- **B. It is a JavaScript function.** ✅
- C. It is an HTML framework.
- D. It is a Python class.

> ✅ **Đáp án đúng:** **B** (It is a JavaScript function.)
>
> 💡 **Giải thích:** Component trong React thường là hàm JavaScript (hoặc class), không phải element UI đơn lẻ, framework HTML hay class Python. React dùng JS/JSX để xây dựng component.

---

### Câu 21

How do you pass a prop named name with the value John to a child component in React?

- A. <Child prop="name" value="John" />
- B. <Child propName="name" propValue="John" />
- **C. <Child name="John" />** ✅
- D. <Child data="John" />

> ✅ **Đáp án đúng:** **C** (<Child name="John" />)
>
> 💡 **Giải thích:** Trong React, prop được truyền trực tiếp qua thuộc tính của component: <Child name="John" />. Các cách khác như dùng 'prop', 'propName', 'data' là sai cú pháp. React không yêu cầu prefix đặc biệt cho prop.

---

### Câu 22

How are Class Components written in React?

- A. function.
- **B. class.** ✅
- C. const.
- D. component.

> ✅ **Đáp án đúng:** **B** (class.)
>
> 💡 **Giải thích:** Trong React, Class Components được định nghĩa bằng từ khóa 'class', kế thừa từ React.Component. Ví dụ: class MyComponent extends React.Component {...}. Các lựa chọn khác như 'function' dùng cho Function Components, 'const' là khai báo biến, 'component' không phải từ khóa hợp lệ để định nghĩa component.

---

### Câu 23

What are the differences between useState and useReducer Hooks in React?

- **A. useState is used for managing simple state, while useReducer is used for complex state and state transitions.** ✅
- B. useState is a built-in Hook, while useReducer is a custom Hook.
- C. useState is used for class components, while useReducer is used for functional components.
- D. useState is for local component state, while useReducer is for global application state.

> ✅ **Đáp án đúng:** **A** (useState is used for managing simple state, while useReducer is used for complex state and state transitions.)
>
> 💡 **Giải thích:** useState phù hợp state đơn giản, useReducer phù hợp state phức tạp với nhiều action và logic chuyển trạng thái. useReducer không phải custom Hook, cả hai đều dùng cho functional component.

---

### Câu 24

What is a typical use case for creating a custom hook in React?

- A. To avoid using state in functional components
- **B. To share reusable logic between components** ✅
- C. To handle side-effects like fetching data
- D. To directly manipulate DOM elements

> ✅ **Đáp án đúng:** **B** (To share reusable logic between components)
>
> 💡 **Giải thích:** Custom hook trong React được thiết kế để tái sử dụng logic giữa các component, giúp tránh lặp code và tăng tính modul. Các lựa chọn khác như xử lý side-effect hay thao tác DOM thường dùng useEffect hay ref, không phải mục đích chính của custom hook.

---

### Câu 25

Which of the following is the correct way to use useContext to access a context value?

- A. const value = MyContext.useContext();
- **B. const value = useContext(MyContext);** ✅
- C. const value = useContextProvider(MyContext);
- D. const value = MyContext.useContextProvider();

> ✅ **Đáp án đúng:** **B** (const value = useContext(MyContext);)
>
> 💡 **Giải thích:** Trong React, useContext là hook dùng để truy cập giá trị từ context. Cú pháp đúng là useContext(MyContext), không phải gọi qua đối tượng context hay dùng tên sai như useContextProvider.

---

### Câu 26

What is the correct command to initialize a Git repository in an existing project directory?

- A. `git start`
- **B. `git init`** ✅
- C. `git new`
- D. `git create`

> ✅ **Đáp án đúng:** **B** (`git init`)
>
> 💡 **Giải thích:** Lệnh `git init` được dùng để khởi tạo một repository Git mới trong thư mục hiện tại. Đây là lệnh chuẩn và duy nhất đúng trong các lựa chọn.

---

### Câu 27

What is the main purpose of a front-end web UI framework?

- A. To handle back-end data storage
- **B. To provide ready-to-use UI components for building web interfaces** ✅
- C. To manage the database
- D. To create server-side logic

> ✅ **Đáp án đúng:** **B** (To provide ready-to-use UI components for building web interfaces)
>
> 💡 **Giải thích:** Framework UI front-end (như Bootstrap, React, Vue) cung cấp các thành phần giao diện sẵn có giúp phát triển giao diện web nhanh và nhất quán.

---

### Câu 28

Which of the following is NOT considered a popular front-end framework?

- A. React
- B. Angular
- **C. Django** ✅
- D. Vue.js

> ✅ **Đáp án đúng:** **C** (Django)
>
> 💡 **Giải thích:** Django là một framework backend (server-side) viết bằng Python, không phải front-end. Các lựa chọn còn lại: React, Angular, Vue.js đều là framework front-end phổ biến dùng để xây dựng giao diện người dùng. Do đó, Django là đáp án đúng cho câu hỏi 'không phải front-end framework'.

---

### Câu 29

Understand the role of the render method in JSX. Which of the following best explains its use?

- A. The render method is used to compile JSX into JavaScript.
- **B. The render method is used to convert JSX into HTML and render it to the DOM.** ✅
- C. The render method is used to manage state in React components.
- D. The render method is used to handle routing in React applications.

> ✅ **Đáp án đúng:** **B** (The render method is used to convert JSX into HTML and render it to the DOM.)
>
> 💡 **Giải thích:** Trong React, phương thức render() chuyển đổi JSX thành HTML thực tế và đưa nó vào DOM để hiển thị giao diện người dùng. Đây là bước thiết yếu trong vòng đời của component React.

---

### Câu 30

What is JSX?

- A. A JavaScript library for building user interfaces
- **B. A syntax extension for JavaScript that allows you to write HTML-like code** ✅
- C. A React component that renders HTML elements
- D. A JavaScript framework for building web applications

> ✅ **Đáp án đúng:** **B** (A syntax extension for JavaScript that allows you to write HTML-like code)
>
> 💡 **Giải thích:** JSX là phần mở rộng cú pháp của JavaScript, cho phép viết mã giống HTML trong React. Nó không phải thư viện, framework, hay component — mà là cú pháp được React sử dụng để mô tả giao diện người dùng.

---

### Câu 31

Fill in the blank in this ES6 code to correctly use destructuring assignment for extracting 'name' and 'age' from
an object:
const person = { name: 'John', age: 30 };
const { _____ } = person;
console.log(name, age);

- **A. name, age** ✅
- B. prop: name, prop: age
- C. key: name, value: age
- D. extract: name, extract: age

> ✅ **Đáp án đúng:** **A** (name, age)
>
> 💡 **Giải thích:** Destructuring assignment trong ES6: const { name, age } = person; để trích xuất trực tiếp các thuộc tính name và age từ object person.

---

### Câu 32

Which component would you use to display grouped content such as a title, body text, and an image in React-Bootstrap?

- A. <Container>
- B. <Form>
- **C. <Card>** ✅
- D. <Alert>

> ✅ **Đáp án đúng:** **C** (<Card>)
>
> 💡 **Giải thích:** Trong React-Bootstrap, component <Card> được thiết kế để hiển thị nội dung nhóm như tiêu đề, văn bản và hình ảnh trong một khối có kiểu dáng nhất quán. Các component khác như <Container>, <Form>, <Alert> không phù hợp cho mục đích này.

---

### Câu 33

Why use React-Bootstrap?

- **A. It easier to manage the state as updates are made using React's state.** ✅
- B. It is faster and more efficient than other UI libraries.
- C. It is compatible with all browsers and devices.
- D. It is developed by Facebook and has a large community support.

> ✅ **Đáp án đúng:** **A** (It easier to manage the state as updates are made using React's state.)
>
> 💡 **Giải thích:** React-Bootstrap integrates Bootstrap’s UI components with React’s component model, allowing state management via React’s state and props. This is its primary advantage over plain Bootstrap. Other options are misleading: React-Bootstrap isn’t inherently faster (B), not uniquely compatible (C), and not developed by Facebook (D — that’s React itself).

---

### Câu 34

How do you import and use a Button component from React-Bootstrap 5?

- A. import React from 'react';
  import Button from 'react-bootstrap/Button';
  
  function Demo() {
    return (
      <Button variant="primary">
    );
  }
  
  export default Demo;
- B. import React from 'react';
  import Button from 'react-bootstrap/Button';
  
  function Demo() {
    return (
      <button variant="primary"> Primary Button</button>
    );
  }
  
  export default Demo;
- **C. import React from 'react';
  import Button from 'react-bootstrap/Button';
  
  function Demo() {
    return (
      <Button variant="primary">Primary Button</Button>
    );
  }
  
  export default Demo;** ✅
- D. import React from 'react';
  import Button from 'react-bootstrap/Button';
  
  function Demo() {
    return (
      <button variant="primary"/>
    );
  }
  
  export default Demo;

> ✅ **Đáp án đúng:** **C** (import React from 'react'; import Button from 'react-bootstrap/Button'; function Demo() {   return (     <Button variant="primary">Primary Button</Button>   ); } export default Demo;)
>
> 💡 **Giải thích:** Cú pháp đúng: import Button từ 'react-bootstrap/Button', dùng thẻ <Button> với thuộc tính variant và nội dung giữa thẻ. Đáp án A thiếu nội dung, B dùng thẻ <button> thay vì <Button>, D thiếu nội dung và đóng thẻ sai.

---

### Câu 35

How does state behave when it is set in a React component, as described by "State as a snapshot"?

- A. It immediately changes the state variable you already have.
- B. It only changes the state after the component unmounts
- **C. Setting it does not change the state variable you already have, but instead triggers a re-render** ✅
- D. It directly modifies the DOM without triggering a re-render

> ✅ **Đáp án đúng:** **C** (Setting it does not change the state variable you already have, but instead triggers a re-render)
>
> 💡 **Giải thích:** In React, state is a snapshot — setting state doesn’t mutate the current variable but queues a re-render with the new value. It doesn’t modify DOM directly or wait for unmount.

---

### Câu 36

According to the "Render and Commit" process, what are the three steps involved in displaying a component on screen?

- A. Initializing state, updating props, and re-rendering.
- **B. Triggering a render, rendering the component, and committing to the DOM.** ✅
- C. Creating JSX, adding styles, and responding to events
- D. Defining a component, mounting, and unmounting.

> ✅ **Đáp án đúng:** **B** (Triggering a render, rendering the component, and committing to the DOM.)
>
> 💡 **Giải thích:** Quy trình "Render and Commit" trong React gồm 3 bước: (1) Kích hoạt render (trigger render), (2) Render component (tạo virtual DOM), (3) Commit vào DOM thật. Đây là mô tả chuẩn trong tài liệu React.

---

### Câu 37 *(Chọn 2 đáp án)*

How can you pass parameters to an event handler in React? (Select all that apply)

- **A. Using the `bind()` method.** ✅
- **B. Using arrow functions.** ✅
- C. Using the `addEventListener()` method.
- D. Using the `this` keyword.

> ✅ **Đáp án đúng:** **A** (Using the `bind()` method.) ; **B** (Using arrow functions.)
>
> 💡 **Giải thích:** Trong React, có thể truyền tham số cho event handler bằng: (A) bind() để bind this và tham số; (B) arrow function để bao bọc hàm và truyền tham số. C sai vì addEventListener không dùng trong JSX React. D sai vì this không phải cách truyền tham số.

---

### Câu 38

What is the purpose of Accordions in Bootstrap's JavaScript components?

- A. To display static text content
- B. To provide a complex form validation mechanism
- **C. To extend the Collapse plugin for toggling visibility of content sections** ✅
- D. To manage application-wide routing

> ✅ **Đáp án đúng:** **C** (To extend the Collapse plugin for toggling visibility of content sections)
>
> 💡 **Giải thích:** Accordion trong Bootstrap là thành phần JavaScript mở rộng từ Collapse, cho phép mở/đóng các phần nội dung theo nhóm, thường dùng để tổ chức thông tin dạng FAQ hoặc tab. Không dùng để hiển thị văn bản tĩnh, validate form hay quản lý route.

---

### Câu 39

What would happen if you didn't include the class="form-control" in your \<input\> element?

- A. The input would not be submitted with the form
- B. The input would fail client-side validation
- **C. The input field would revert to the browser's default styles** ✅
- D. The input field would become non-responsive

> ✅ **Đáp án đúng:** **C** (The input field would revert to the browser's default styles)
>
> 💡 **Giải thích:** Trong Bootstrap, class 'form-control' được dùng để định dạng các trường nhập liệu (input) theo phong cách Bootstrap. Nếu không có class này, trường nhập liệu sẽ không được áp dụng CSS của Bootstrap và sẽ quay về kiểu mặc định của trình duyệt. Không ảnh hưởng đến chức năng gửi form hay validation.

---

### Câu 40

How do you create a modal in Bootstrap?

- A. By using the `<modal>` HTML element.
- B. By applying the `.modal` class to the container element.
- **C. By using the `.modal` class along with the `data-bs-toggle="modal"` attribute.** ✅
- D. By using JavaScript to dynamically create and show modal elements.

> ✅ **Đáp án đúng:** **C** (By using the `.modal` class along with the `data-bs-toggle="modal"` attribute.)
>
> 💡 **Giải thích:** Trong Bootstrap 5, modal được tạo bằng cách dùng class .modal và thuộc tính data-bs-toggle="modal" để kích hoạt. Không dùng thẻ <modal> hay chỉ class .modal đơn lẻ. JavaScript là cách thay thế, không phải cách tiêu chuẩn.

---

### Câu 41

How do you wrap a lazy component with Suspense in React?

- A. Using the wrap prop of the Suspense component
- **B. Using the fallback prop of the Suspense component** ✅
- C. Using the lazy prop of the Suspense component
- D. Using the component prop of the Suspense component

> ✅ **Đáp án đúng:** **B** (Using the fallback prop of the Suspense component)
>
> 💡 **Giải thích:** Trong React, để bao bọc một component lazy bằng Suspense, ta dùng thuộc tính `fallback` để hiển thị nội dung chờ khi component đang được tải. Ví dụ: <Suspense fallback={<div>Loading...</div>}>.

---

### Câu 42

Which two recent additions to React allow the complete integration of code splitting into applications?

- A. `useState()` and `useEffect()`
- B. `React.memo()` and `useCallback()`
- **C. `lazy()` API and `Suspense` components** ✅
- D. `ReactDOM.createRoot()` and `BrowserRouter`.

> ✅ **Đáp án đúng:** **C** (`lazy()` API and `Suspense` components)
>
> 💡 **Giải thích:** React hỗ trợ chia nhỏ mã (code splitting) thông qua `React.lazy()` để tải component theo yêu cầu và `Suspense` để xử lý trạng thái chờ tải. Các hook như `useState`, `useEffect`, `useCallback`, `memo` không liên quan trực tiếp đến code splitting.

---

### Câu 43

What is the main benefit of creating reusable components in React?

- A. To make code easier to debug
- **B. To allow reusing the same code across multiple components** ✅
- C. To increase the performance of the app
- D. To handle state management in a centralized manner

> ✅ **Đáp án đúng:** **B** (To allow reusing the same code across multiple components)
>
> 💡 **Giải thích:** Lợi ích chính của việc tạo component có thể tái sử dụng trong React là cho phép tái sử dụng mã nguồn giữa nhiều component khác nhau, giúp giảm lặp code, tăng khả năng bảo trì và nhất quán giao diện. Các lựa chọn khác như debug, hiệu năng hay quản lý state không phải mục tiêu chính của tính năng này.

---

### Câu 44

What is the primary benefit of using React's lazy() API for code splitting?

- A. It reduces the overall bundle size of an application by removing unused code.
- B. It enhances the user experience by providing a visual fallback while components are being loaded.
- C. It simplifies the process of fetching data from an API.
- **D. It improves initial load performance by deferring non-critical component loading.** ✅

> ✅ **Đáp án đúng:** **D** (It improves initial load performance by deferring non-critical component loading.)
>
> 💡 **Giải thích:** React.lazy() cho phép chia nhỏ mã (code splitting) và chỉ tải component khi cần, giúp cải thiện hiệu suất tải ban đầu. Không giảm kích thước tổng thể (A), không phải để hiển thị fallback (B), và không liên quan đến fetch API (C).

---

### Câu 45

Find the bug in the following React code:

```
const [items, setItems] = useState([]);
const addItem = () => {
    items.push('new');
    setItems(items);
};
```

- A. useState should be useReducer
- **B. use setItems([...items, 'new'])** ✅
- C. push is not a valid method
- D. setItems must take a string

> ✅ **Đáp án đúng:** **B** (use setItems([...items, 'new']))
>
> 💡 **Giải thích:** Trong React, không nên mutate state trực tiếp bằng push. Thay vào đó, phải tạo mảng mới với spread operator để React nhận biết sự thay đổi và re-render. setItems([...items, 'new']) là cách đúng.

---

### Câu 46

In Next.js, what mechanism primarily determines the routes in an application?

- A. Explicit configuration in a central routes.json file.
- **B. File-system routing, where routes are determined by the structure of files** ✅
- C. Dynamic route declarations using React Router
- D. Server-side API endpoints only

> ✅ **Đáp án đúng:** **B** (File-system routing, where routes are determined by the structure of files)
>
> 💡 **Giải thích:** Next.js sử dụng cơ chế định tuyến dựa trên hệ thống tệp: mỗi tệp trong thư mục app/ hoặc pages/ tương ứng với một route cụ thể.

---

### Câu 47

Why would a React developer choose to use "Axios"?

- A. To render React components faster
- B. To manage component state globally
- **C. To make HTTP requests to APIs** ✅
- D. To build reusable hooks

> ✅ **Đáp án đúng:** **C** (To make HTTP requests to APIs)
>
> 💡 **Giải thích:** Axios is a popular JavaScript library for making HTTP requests from the browser or Node.js. It is not for rendering, state management, or hooks — those are handled by React core or libraries like Redux or custom hooks.

---

### Câu 48

Analyze the use of JavaScript expressions in JSX. What is valid syntax?

- A. $2+2$
- B. $[2+2]$
- **C. $\{2+2\}$** ✅
- D. $(2+2)$

> ✅ **Đáp án đúng:** **C** ($\{2+2\}$)
>
> 💡 **Giải thích:** Trong JSX, biểu thức JavaScript được bao trong dấu ngoặc nhọn { }, ví dụ: {2+2} → hiển thị 4. Các cú pháp khác như $...$, [...] hoặc (...) không hợp lệ trong JSX.

---

### Câu 49 *(Chọn 2 đáp án)*

Select the benefits of using React.memo and useMemo in React applications. (Choose 2 correct answers)

- **A. Prevent unnecessary component re-renders** ✅
- B. Automatically synchronize component state with global state
- **C. Guarantee object references don't change during re-rendering** ✅
- D. Simplify the process of context management

> ✅ **Đáp án đúng:** **A** (Prevent unnecessary component re-renders) ; **C** (Guarantee object references don't change during re-rendering)
>
> 💡 **Giải thích:** React.memo ngăn re-render không cần thiết cho component khi props không thay đổi. useMemo đảm bảo giá trị được memoize (lưu lại) và tham chiếu không đổi giữa các lần render, giúp tối ưu hiệu suất. Không liên quan đến global state hay context management.

---

### Câu 50

What does the "await" keyword do when used inside an "async" function?

- A. It immediately executes the next function
- **B. It pauses the execution until the Promise resolves or rejects** ✅
- C. It logs the result to the console
- D. It converts a string into a Promise

> ✅ **Đáp án đúng:** **B** (It pauses the execution until the Promise resolves or rejects)
>
> 💡 **Giải thích:** Từ khóa 'await' trong hàm async tạm dừng thực thi cho đến khi Promise hoàn thành (resolve hoặc reject), sau đó tiếp tục với kết quả trả về.

---

## 10. Đề Thi FE Kì Fall 2026 (FA26 — Đề Chính Thức 163998)

### Câu 1

Explain the difference between using async/await and traditional Promises (.then and .catch) for handling asynchronous operations in JavaScript.

- **A. async/await makes async code more readable, while Promises use a callback-based approach.** ✅
- B. async/await is used for synchronous operations, while Promises are used for asynchronous operations.
- C. async/await can only be used with the window.fetch API, while Promises can be used with any asynchronous function.
- D. async/await is a newer feature that completely replaces Promises in modern JavaScript.

> ✅ **Đáp án đúng:** **A** (async/await makes async code more readable, while Promises use a callback-based approach.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - `async/await` (ra mắt trong ES2017) là "syntactic sugar" được xây dựng trên nền tảng Promise, giúp mã bất đồng bộ có cú pháp tuần tự và dễ đọc giống như code đồng bộ thông thường.
> - Truyền thống dùng Promise đòi hỏi chuỗi callback thông qua các hàm `.then()` và `.catch()`, dễ dẫn đến hiện tượng Promise chaining phức tạp khi lồng nhau nhiều tầng.
> - Lưu ý: `async/await` không thay thế Promise mà bản chất một hàm `async` luôn trả về một Promise.

---

### Câu 2

Which method is most commonly used in a React app to fetch data from a server?

- A. WebSockets
- B. useState()
- **C. fetch() or axios inside useEffect()** ✅
- D. console.log() inside render()

> ✅ **Đáp án đúng:** **C** (fetch() or axios inside useEffect())
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Trong React, việc lấy dữ liệu từ server (HTTP API) là một tác vụ phụ (side-effect). Cách tiếp cận chuẩn và phổ biến nhất là sử dụng API trình duyệt `fetch()` hoặc thư viện `axios` bên trong hook `useEffect()` với dependency array rỗng `[]` (để gọi một lần khi component mount).

---

### Câu 3

```javascript
fetch("http://localhost:5000/items/999")
  .then((res) => {
    console.log(res.ok); // false
    console.log(res.status); // 404
    return res.json();
  })
  .catch((err) => console.error(err));
```

The server returns a 404 for this request. What best describes fetch's behavior here?

- A. The .then() callback is skipped entirely, and .catch() runs immediately with a 404 error
- **B. fetch only rejects on network failures; it does not reject on HTTP error status codes like 404, so .then() still runs with res.ok == false.** ✅
- C. fetch throws a NetworkError before the .then() block ever runs.
- D. The response is automatically retried up to 3 times before failing.

> ✅ **Đáp án đúng:** **B** (fetch only rejects on network failures; it does not reject on HTTP error status codes like 404, so .then() still runs with res.ok == false.)
>
> 💡 **Giải thích:** **Đáp án đúng: B** (Bẫy kinh điển về fetch API!)
> 
> - API `fetch()` của JavaScript KHÔNG tự động reject khi nhận mã lỗi HTTP (như 404 Not Found hay 500 Internal Server Error). Promise chỉ reject khi gặp lỗi mạng (network failure) hoặc request bị browser block (CORS).
> - Do đó, với mã 404, `.then()` vẫn thực thi bình thường với `res.ok === false` và `res.status === 404`.

---

### Câu 4

How would you handle errors in a fetch request to ensure that the error is caught and logged to the console?

- **A. fetch(url).then((response)=>{ return response.json(); }).catch(error => console.log(error))** ✅
- B. fetch(url).then(response => response.catch(error => console.log(error)))
- C. fetch(url).catch(error => {{ console.log(error) }})
- D. fetch(url).then(response => { throw new Error() }).catch(error => console.log(error))

> ✅ **Đáp án đúng:** **A** (fetch(url).then((response)=>{ return response.json(); }).catch(error => console.log(error)))
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Chuỗi Promise chuẩn của `fetch()` là:
>   `fetch(url).then(response => response.json()).catch(error => console.log(error));`
> - Phương thức `.catch()` ở cuối chuỗi sẽ bắt được bất kỳ lỗi mạng nào hoặc lỗi ném ra trong quá trình parse JSON.

---

### Câu 5

What is the purpose of the initial state parameter in a Redux reducer function?

- A. To define the structure of the Redux store
- B. To specify the actions that can be dispatched
- C. To handle asynchronous operations
- **D. To define the initial state of the reducer** ✅

> ✅ **Đáp án đúng:** **D** (To define the initial state of the reducer)
>
> 💡 **Giải thích:** **Đáp án đúng: D**
> 
> - Trong Redux, reducer nhận dạng `(state = initialState, action)`. Tham số `initialState` cung cấp trạng thái ban đầu mặc định cho nhánh dữ liệu mà reducer đó quản lý khi Redux store lần đầu khởi tạo.

---

### Câu 6

Which component is typically used in conjunction with React.lazy to handle the loading state?

- A. <ErrorBoundary>
- **B. <Suspense>** ✅
- C. <LoadingComponent>
- D. <Provider>

> ✅ **Đáp án đúng:** **B** (<Suspense>)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - `React.lazy()` cho phép import động (code-splitting) một component. Nó bắt buộc phải được bọc trong component `<Suspense fallback={<LoadingSpinner />}>` để React biết cần hiển thị giao diện fallback nào trong lúc component đang được tải về.

---

### Câu 7

What does Redux Thunk middleware allow?

- A. It allows reducers to directly call APIs and mutate state with side effects.
- B. It allows components to bypass the store and directly mutate global state.
- **C. It allows an action creator to return a function, so async logic can run before dispatching a real action.** ✅
- D. It allows Bootstrap to automatically create the Redux store.

> ✅ **Đáp án đúng:** **C** (It allows an action creator to return a function, so async logic can run before dispatching a real action.)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Mặc định Redux chỉ cho phép action creators trả về một plain object `{ type, payload }`. Redux Thunk là middleware cho phép action creator trả về một hàm nhận tham số `(dispatch, getState)`, nhờ đó có thể thực hiện logic bất đồng bộ (gọi API) trước khi dispatch action thật.

---

### Câu 8

What is the primary purpose of Redux Thunk in a React-Redux application?

- A. To connect React components directly to the Redux store without the need for action creators or reducers.
- B. To provide a way to store and manage the application's state on the server-side, separate from the client-side state.
- **C. To enable creating action creators that return functions (for asynchronous operations like API calls) instead of plain action objects.** ✅
- D. To automatically generate the code for action creators and reducers based on the application's data structure.

> ✅ **Đáp án đúng:** **C** (To enable creating action creators that return functions (for asynchronous operations like API calls) instead of plain action objects.)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Mục đích chính của Redux Thunk là cho phép viết các action creator trả về function (thường được gọi là thunk) thay vì object, nhằm giải quyết bài toán xử lý bất đồng bộ (như fetch API) trong luồng dữ liệu một chiều của Redux.

---

### Câu 9

What happens if a component tries to consume a context that has not been provided higher up in the component tree?

- **A. The component receives a default value specified in the context definition.** ✅
- B. The component throws an error.
- C. The component receives an empty object as the context value.
- D. The component receives null as the context value.

> ✅ **Đáp án đúng:** **A** (The component receives a default value specified in the context definition.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Khi tạo context bằng `const MyContext = createContext(defaultValue)`, nếu component gọi `useContext(MyContext)` mà không nằm bên trong bất kỳ `<MyContext.Provider>` nào ở cấp trên thì nó sẽ nhận được `defaultValue` được định nghĩa khi tạo context.

---

### Câu 10

```javascript
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount() {
    // TODO: Increase the count state by 1
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

In the code above, how can we increase the value of the count state by 1 when the user clicks the "Increment" button?

- **A. Call the method this.setState({ count: this.state.count + 1 }) inside the incrementCount method.** ✅
- B. Assign a new value to count using the assignment operator (=) inside the incrementCount method.
- C. Call the method this.state.count += 1 inside the incrementCount method.
- D. Use this.setState(count + 1) inside the incrementCount method.

> ✅ **Đáp án đúng:** **A** (Call the method this.setState({ count: this.state.count + 1 }) inside the incrementCount method.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Trong React Class Component, state không bao giờ được gán trực tiếp (`this.state.count += 1`). Để kích hoạt re-render UI, phải gọi `this.setState({ count: this.state.count + 1 })` hoặc dùng callback `this.setState(prev => ({ count: prev.count + 1 }))`.

---

### Câu 11

What is a prop in React used for?

- A. It defines the internal state of a component.
- B. It specifies the visual appearance of a component.
- **C. It enables communication and data transfer between components.** ✅
- D. It handles user interactions and events.

> ✅ **Đáp án đúng:** **C** (It enables communication and data transfer between components.)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Props (viết tắt của properties) là cơ chế giao tiếp giữa các component trong React, cho phép component cha truyền dữ liệu và hàm xử lý sự kiện xuống component con theo luồng dữ liệu một chiều (unidirectional data flow).

---

### Câu 12

What is the purpose of package.json in a Node.js project?

- **A. It defines the project's dependencies and scripts** ✅
- B. It contains the source code of the project
- C. It configures the Node.js environment
- D. It manages the project's build process

> ✅ **Đáp án đúng:** **A** (It defines the project's dependencies and scripts)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - `package.json` là file manifest của một dự án Node.js/JavaScript, chứa thông tin metadata, danh sách thư viện phụ thuộc (`dependencies`, `devDependencies`) và các script lệnh thực thi (`scripts`).

---

### Câu 13

Execute the following Git command sequence. What is the final state of the repository?

```bash
git init
git add .
git commit -m "Initial commit"
git branch new-feature
git checkout new-feature
git add new-file.js
git commit -m "Add new file"
git checkout main
git merge new-feature
```

- A. The repository has a new branch called new-feature with new-file.js added.
- **B. The main branch has new-file.js added.** ✅
- C. The new-feature branch is merged into main without new-file.js.
- D. The repository remains unchanged.

> ✅ **Đáp án đúng:** **B** (The main branch has new-file.js added.)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Sau khi switch về nhánh `main` (`git checkout main`) và chạy `git merge new-feature`, Git sẽ gộp toàn bộ các commit trên nhánh `new-feature` vào `main`. Vì thế nhánh `main` lúc này đã có file `new-file.js`.

---

### Câu 14

What is React?

- A. A JavaScript library created by Google for building user interfaces.
- **B. A tool for building user interfaces developed by Facebook.** ✅
- C. A framework for building backend systems.
- D. A JavaScript library developed by Microsoft for building user interfaces.

> ✅ **Đáp án đúng:** **B** (A tool for building user interfaces developed by Facebook.)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - React là thư viện JavaScript mã nguồn mở phục vụ xây dựng giao diện người dùng (UI), được phát triển và duy trì bởi Facebook (nay là Meta).

---

### Câu 15

What command would you typically run to start json-server on the default port using a "db.json" file?

- A. json-server run db.json
- B. npm start db.json
- **C. json-server --watch db.json** ✅
- D. node server.js db.json

> ✅ **Đáp án đúng:** **C** (json-server --watch db.json)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Câu lệnh chuẩn để khởi chạy `json-server` theo dõi file dữ liệu `db.json` là `json-server --watch db.json`. Mặc định server sẽ chạy trên cổng 3000.

---

### Câu 16

Which of the following is a valid JSON object?

- **A. {
    "name": "John Doe",
    "age": 30,
    "city": "New York"
  }** ✅
- B. {
    'name': 'John Doe',
    'age': "30",
    'city': 'New York'
  }
- C. {
    name: "John Doe",
    age: 30,
    city: "New York"
  }
- D. {
    "name" = "John Doe",
    "age" = 30,
    "city" = "New York"
  }

> ✅ **Đáp án đúng:** **A** ({   "name": "John Doe",   "age": 30,   "city": "New York" })
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Chuẩn JSON (RFC 8259) quy định key và string value bắt buộc phải dùng dấu ngoặc kép (`"`). Không được dùng dấu nháy đơn (`'`) hoặc bỏ dấu ngoặc ở key như trong JavaScript object literal.

---

### Câu 17

What is the purpose of a server in a client-server architecture?

- A. To handle user input and interactions.
- B. To display the website content.
- **C. To provide data and resources to clients.** ✅
- D. To style the user interface.

> ✅ **Đáp án đúng:** **C** (To provide data and resources to clients.)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Trong mô hình Client-Server, máy chủ (server) chịu trách nhiệm lưu trữ, xử lý logic và cung cấp dữ liệu, tài nguyên cho các máy khách (clients) khi có yêu cầu (requests).

---

### Câu 18

Which HTTP method is typically used in a fetch request to retrieve data from a server?

- A. POST
- **B. GET** ✅
- C. PUT
- D. DELETE

> ✅ **Đáp án đúng:** **B** (GET)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Phương thức HTTP `GET` được dùng để lấy (truy xuất) dữ liệu từ máy chủ. Đây cũng là phương thức mặc định của hàm `fetch()` nếu không chỉ định thuộc tính `method`.

---

### Câu 19

Evaluate the differences between useMemo and useCallback hooks. Which statement is true?

- A. useMemo is used to memoize functions, while useCallback is used to memoize values
- **B. useMemo is used to memoize values, while useCallback is used to memoize functions** ✅
- C. Both useMemo and useCallback are used to memoize values
- D. Both useMemo and useCallback are used to memoize functions

> ✅ **Đáp án đúng:** **B** (useMemo is used to memoize values, while useCallback is used to memoize functions)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - `useMemo` thực thi hàm và ghi nhớ giá trị trả về của hàm đó: `useMemo(() => computeValue(a, b), [a, b])`.
> - `useCallback` ghi nhớ chính định nghĩa hàm (function reference) để không tạo hàm mới qua các lần render: `useCallback(fn, deps)` tương đương với `useMemo(() => fn, deps)`.

---

### Câu 20

How do you access a Context value in a functional component?

- A. const theme = ThemeContext.value;
- B. const theme = ThemeContext.use();
- **C. const theme = useContext(ThemeContext);** ✅
- D. const theme = ThemeContext.Consumer();

> ✅ **Đáp án đúng:** **C** (const theme = useContext(ThemeContext);)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Trong React Functional Component, cú pháp chuẩn để sử dụng context là gọi hook `useContext` và truyền context object vào: `const value = useContext(ThemeContext);`.

---

### Câu 21

Which built-in hook is used to perform side effects (like data fetching or subscriptions) after a component renders?

- A. useMemo
- B. useCallback
- C. useReducer
- **D. useEffect** ✅

> ✅ **Đáp án đúng:** **D** (useEffect)
>
> 💡 **Giải thích:** **Đáp án đúng: D**
> 
> - Hook `useEffect` phục vụ cho việc thực thi các side-effects (gọi API lấy dữ liệu, lắng nghe sự kiện trình duyệt, thao tác DOM trực tiếp) sau khi component đã render.

---

### Câu 22

What is the primary purpose of a React component?

- A. To manage HTTP requests
- B. To style the UI
- **C. To break the user interface into reusable pieces** ✅
- D. To handle backend authentication

> ✅ **Đáp án đúng:** **C** (To break the user interface into reusable pieces)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Mục đích cốt lõi của React component là chia nhỏ giao diện người dùng thành các phần độc lập, khép kín và có thể tái sử dụng (reusable pieces).

---

### Câu 23

Which of the following is the correct way to define a React function component?

- **A. function Welcome() {
    return <h1>Hello, World!</h1>;
  }** ✅
- B. class Welcome extends React.Component {
    render() {
      return <h1>Hello, World!</h1>;
    }
  }
- C. function Welcome = <h1>Hello</h1>;
- D. component Welcome {
    return "Hello";
  }

> ✅ **Đáp án đúng:** **A** (function Welcome() {   return <h1>Hello, World!</h1>; })
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Định nghĩa chuẩn của React Function Component là một JavaScript function thông thường nhận props và trả về JSX. Đáp án B là Class Component.

---

### Câu 24

How do you access props in a functional component in React?

- **A. const Child = (props) => { return <div>{props.name}</div>; };** ✅
- B. const Child = () => { return <div>{this.props.name}</div>; };
- C. const Child = (prop) => { return <div>{prop.name}</div>; };
- D. const Child = () => { return <div>{props.name}</div>; };

> ✅ **Đáp án đúng:** **A** (const Child = (props) => { return <div>{props.name}</div>; };)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Trong Functional Component, đối số đầu tiên của hàm chính là `props`. Ta truy xuất qua `props.name` (hoặc destructuring `{ name }`). Functional component không sử dụng `this.props`.

---

### Câu 25

How can you define optional route parameters in React Router?

- A. By defining a route with multiple child routes.
- B. By including query parameters in the URL.
- **C. By using React Router's path syntax with an optional parameter.** ✅
- D. By using a regular expression in the route path.

> ✅ **Đáp án đúng:** **C** (By using React Router's path syntax with an optional parameter.)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Trong React Router (v6.5+), bạn sử dụng cú pháp path syntax với dấu chấm hỏi `?` ở cuối tên param (ví dụ: `path="/user/:id?"`) để biểu thị rằng tham số `id` là tùy chọn (optional).

---

### Câu 26

What is the role of the BrowserRouter component in React Router?

- A. To define a route in the application
- **B. To wrap the entire application and enable routing using the HTML5 History API** ✅
- C. To handle form submissions
- D. To manage state within a component

> ✅ **Đáp án đúng:** **B** (To wrap the entire application and enable routing using the HTML5 History API)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - `<BrowserRouter>` bao bọc ứng dụng React và kích hoạt tính năng định tuyến điều hướng dựa trên HTML5 History API (`pushState`, `replaceState`, `popstate`), giữ cho URL trên trình duyệt đồng bộ với UI.

---

### Câu 27

What is the primary purpose of a router in a web application?

- A. To manage state within a component
- **B. To respond to a URL based on a set of route handler declarations** ✅
- C. To handle server-side logic
- D. To manage routing in a React application

> ✅ **Đáp án đúng:** **B** (To respond to a URL based on a set of route handler declarations)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Mục đích khái quát của Router trong ứng dụng web là phân tích URL yêu cầu và kích hoạt handler/component tương ứng theo danh sách cấu hình tuyến đường đã khai báo.

---

### Câu 28

Which file is typically used to customize Tailwind's theme (colors, spacing, fonts, breakpoints)?

- A. package.json
- B. postcss.config.js
- C. index.css
- **D. tailwind.config.js** ✅

> ✅ **Đáp án đúng:** **D** (tailwind.config.js)
>
> 💡 **Giải thích:** **Đáp án đúng: D**
> 
> - File `tailwind.config.js` chứa thuộc tính `theme` và `theme.extend`, là nơi cấu hình bảng màu sắc (colors), khoảng cách (spacing), font chữ (fontFamily) và breakpoints của Tailwind CSS.

---

### Câu 29

What command is used to create a new Next.js project?

- A. npx create-react-app
- B. npm install next
- **C. npx create-next-app** ✅
- D. git clone next.js

> ✅ **Đáp án đúng:** **C** (npx create-next-app)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Câu lệnh chính thức do Next.js cung cấp để khởi tạo một ứng dụng Next.js mới là `npx create-next-app` (hoặc `npx create-next-app@latest`).

---

### Câu 30

In the Next.js App Router, what is the purpose of a layout.js file?

- A. To style individual pages
- **B. To define a shared UI layout (like a header/sidebar) that wraps child pages/routes** ✅
- C. To configure the database
- D. To define API endpoints

> ✅ **Đáp án đúng:** **B** (To define a shared UI layout (like a header/sidebar) that wraps child pages/routes)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Trong Next.js App Router (thư mục `app/`), `layout.js` định nghĩa bố cục giao diện dùng chung (như Navbar, Sidebar) bao bọc xung quanh các trang con. Layout giữ nguyên state và không re-render khi điều hướng giữa các trang con cùng cấp.

---

### Câu 31

In a React component, which Tailwind class combination would center content both horizontally and vertically using Flexbox?

- A. text-center align-middle
- B. grid place-self-center
- **C. flex items-center justify-center** ✅
- D. flex flex-col

> ✅ **Đáp án đúng:** **C** (flex items-center justify-center)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Trong Tailwind CSS, `flex` kích hoạt flexbox container, `justify-center` căn giữa nội dung theo trục chính (ngang) và `items-center` căn giữa nội dung theo trục phụ (dọc).

---

### Câu 32

```jsx
<Container>
  <Row>
    <Col sm={6} md={4}>
      {/* Placeholder content */}
    </Col>
    <Col sm={6} md={8}>
      {/* Placeholder content */}
    </Col>
  </Row>
</Container>
```

The code above creates a grid layout with how many columns?

- A. 1
- **B. 2** ✅
- C. 3
- D. 4

> ✅ **Đáp án đúng:** **B** (2)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Thẻ `<Row>` trực tiếp chứa 2 component `<Col>`, do đó layout tạo ra gồm 2 cột. Trên màn hình máy tính (`md`), cột 1 chiếm 4/12 và cột 2 chiếm 8/12 độ rộng hàng.

---

### Câu 33

One of the main characteristics of React-Bootstrap is "Component-Based". What does this imply?

- A. React-Bootstrap only provides components for CSS styling
- **B. It enables developers to create modular and reusable UI elements as React components.** ✅
- C. It requires custom JavaScript to be written for each component.
- D. Components can only be used once in the application

> ✅ **Đáp án đúng:** **B** (It enables developers to create modular and reusable UI elements as React components.)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Đặc tính "Component-Based" của React-Bootstrap nghĩa là các phần tử giao diện Bootstrap được xây dựng lại thành các React component độc lập, mô-đun hóa và có thể tái sử dụng dễ dàng.

---

### Câu 34

Which of the following is the correct way to handle a button click event in React?

- **A. <button onClick={handleClick}>Click Me</button>** ✅
- B. <button handleClick={click}>Click Me</button>
- C. <button onClick="handleClick()">Click Me</button>
- D. <button onClick={() => handleClick()}>Click Me</button>

> ✅ **Đáp án đúng:** **A** (<button onClick={handleClick}>Click Me</button>)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Trong React, cách tiêu chuẩn nhất là truyền trực tiếp tham chiếu hàm vào prop sự kiện: `<button onClick={handleClick}>Click Me</button>`. Chú ý thuộc tính viết theo camelCase (`onClick`) và không có dấu gọi hàm `()`.

---

### Câu 35

How would you handle an event in React using an arrow function?

- A. <button onClick={this.handleClick()}>Click Me</button>
- **B. <button onClick={() => this.handleClick()}>Click Me</button>** ✅
- C. <button onClick={this.handleClick}>Click Me</button>
- D. <button onClick={this.handleClick}>Click Me</button>

> ✅ **Đáp án đúng:** **B** (<button onClick={() => this.handleClick()}>Click Me</button>)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Khi sử dụng arrow function trong prop `onClick`, cú pháp chính xác là truyền một anonymous arrow function bọc lấy lời gọi hàm: `<button onClick={() => this.handleClick()}>Click Me</button>`.

---

### Câu 36

Assess the impact of using inline event handlers in React components. Which statement is true?

- A. Inline event handlers improve performance by reducing the number of function calls
- **B. Inline event handlers can lead to performance issues due to the creation of new functions on each render** ✅
- C. Inline event handlers are the only way to handle events in React
- D. Inline event handlers are more secure than named event handlers

> ✅ **Đáp án đúng:** **B** (Inline event handlers can lead to performance issues due to the creation of new functions on each render)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Khi viết inline handler (như `onClick={() => doSomething()}`), JavaScript sẽ tạo ra một hàm mới trên mỗi lần render. Điều này có thể khiến component con nhận prop bị re-render thừa và gây tốn bộ nhớ/giảm hiệu năng nếu render nhiều lần.

---

### Câu 37

```javascript
const obj = {
  name: 'Alice',
  greet: () => {
    console.log(this.name);
  }
};

obj.greet();
```

What will be the output of the following code?

- A. Alice
- **B. undefined** ✅
- C. this
- D. this.name

> ✅ **Đáp án đúng:** **B** (undefined)
>
> 💡 **Giải thích:** **Đáp án đúng: B** (Bẫy kinh điển về Arrow Function và từ khóa this!)
> 
> - Arrow function không có ngữ cảnh `this` riêng mà nó kế thừa `this` từ lexical scope bao quanh nó (ở đây là global scope / module scope). `this` không trỏ vào `obj`, do đó `this.name` là `undefined`.

---

### Câu 38

To embed a JavaScript expression in JSX, which syntax is used?

- A. {{}}
- **B. {}** ✅
- C. <% %>
- D. $()

> ✅ **Đáp án đúng:** **B** ({})
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Trong cú pháp JSX của React, một cặp ngoặc nhọn `{}` duy nhất được sử dụng để nhúng biểu thức JavaScript vào bên trong mã HTML.

---

### Câu 39

Describe the concept of fragments in JSX. Which of the following best explains their purpose?

- **A. Fragments are used to group multiple elements without adding extra nodes to the DOM.** ✅
- B. Fragments are used to style JSX elements.
- C. Fragments are used to manage state in React components.
- D. Fragments are used to handle asynchronous operations in JSX.

> ✅ **Đáp án đúng:** **A** (Fragments are used to group multiple elements without adding extra nodes to the DOM.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - React Fragments (`<React.Fragment>` hoặc `<>...</>`) cho phép nhóm danh sách nhiều phần tử con lại mà không cần tạo thêm các node thẻ bọc thừa (như `<div>`) vào DOM.

---

### Câu 40

Which hook should you use if you want to navigate and perform a side-effect after navigation?

- **A. useEffect** ✅
- B. useNavigate
- C. useState
- D. useRef

> ✅ **Đáp án đúng:** **A** (useEffect)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Khi cần thực hiện một side-effect (ví dụ: ghi log analytics, scroll trang, fetch dữ liệu) phát sinh sau khi điều hướng xảy ra hoặc theo dõi sự thay đổi của route, ta sử dụng hook `useEffect`.

---

### Câu 41

What is the main purpose of code splitting in a React application?

- A. To make the code easier to read
- B. To bundle all components into a single large file
- **C. To reduce the initial load time by loading parts of the app only when needed** ✅
- D. To split CSS and JavaScript into separate files

> ✅ **Đáp án đúng:** **C** (To reduce the initial load time by loading parts of the app only when needed)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Mục tiêu chính của Code Splitting (chia tách mã nguồn) là giảm thời gian tải ban đầu (initial load time) bằng cách chia nhỏ bundle và chỉ tải các đoạn code khi người dùng thực sự cần đến.

---

### Câu 42

Which of the following is the correct way to navigate to the "/home" route using the useNavigate hook?

- A. const navigate = useRoute(); navigate('/home');
- B. const navigate = useHistory(); navigate('/home');
- **C. const navigate = useNavigate(); navigate('/home');** ✅
- D. const navigate = useNavigation(); navigate('/home');

> ✅ **Đáp án đúng:** **C** (const navigate = useNavigate(); navigate('/home');)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Trong React Router v6+, hook `useNavigate` được sử dụng để điều hướng: khai báo `const navigate = useNavigate();` và gọi `navigate('/home');`.

---

### Câu 43

What does the useNavigate hook return?

- A. An object with navigation methods.
- **B. A navigate function that can be used to navigate to a new location** ✅
- C. A boolean indicating navigation status
- D. A string representing the current route.

> ✅ **Đáp án đúng:** **B** (A navigate function that can be used to navigate to a new location)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Hook `useNavigate()` trả về một hàm điều hướng (navigate function) có thể dùng để chuyển đến một vị trí route mới hoặc quay lui/tiến trong history stack.

---

### Câu 44

In ReactJS with Bootstrap, select the JSX code snippet to create a button with a blue background and white text color.

- A. import React from 'react';
  import { Button } from 'react-bootstrap';
  
  const MyButton = () => {
    return (
      <Button variant="primary" className="btn-primary">
        My Button
      </Button>
    );
  };
  
  export default MyButton;
- **B. import React from 'react';
  import { Button } from 'react-bootstrap';
  
  const MyButton = () => {
    return (
      <Button variant="primary" className="bg-primary text-white">
        My Button
      </Button>
    );
  };
  
  export default MyButton;** ✅
- C. import React from 'react';
  import { Button } from 'react-bootstrap';
  
  const MyButton = () => {
    return (
      <Button variant="primary" className="btn btn-primary">
        My Button
      </Button>
    );
  };
  
  export default MyButton;
- D. import React from 'react';
  import { Button } from 'react-bootstrap';
  
  const MyButton = () => {
    return (
      <Button variant="primary" className="bg-primary">
        My Button
      </Button>
    );
  };
  
  export default MyButton;

> ✅ **Đáp án đúng:** **B** (import React from 'react'; import { Button } from 'react-bootstrap'; const MyButton = () => {   return (     <Button variant="primary" className="bg-primary text-white">       My Button     </Button>   ); }; export default MyButton;)
>
> 💡 **Giải thích:** **Đáp án đúng: B**
> 
> - Đề bài yêu cầu tạo button có "blue background and white text color". Trong Bootstrap utility classes, `bg-primary` tạo màu nền xanh và `text-white` tạo màu chữ trắng. Đoạn mã B khớp chính xác với hai thuộc tính trực quan này.

---

### Câu 45

Which of the following components can be used to create a slideshow in Bootstrap?

- A. .popover
- B. .modal
- **C. .carousel** ✅
- D. .nav-pills

> ✅ **Đáp án đúng:** **C** (.carousel)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Trong Bootstrap và React-Bootstrap, `.carousel` (hoặc thẻ `<Carousel>`) là component dùng để tạo slideshow trình chiếu ảnh/nội dung xoay vòng.

---

### Câu 46

How would you combine fluid and pixel widths behaviors in a grid layout using Bootstrap5?

- A. Use .container-fluid for the entire layout
- B. Combine .container with .col-fluid
- C. Use a fixed-width class with a media query
- **D. Use .container-md to apply a responsive container at the md breakpoint** ✅

> ✅ **Đáp án đúng:** **D** (Use .container-md to apply a responsive container at the md breakpoint)
>
> 💡 **Giải thích:** **Đáp án đúng: D**
> 
> - Trong Bootstrap 5, responsive container như `.container-md` có độ rộng tràn viền 100% (fluid) cho đến breakpoint `md` (768px), sau đó nó sẽ có fixed max-width (pixel widths), kết hợp hoàn hảo cả hai hành vi.

---

### Câu 47

In a controlled <input> element, which two props are typically used together to keep it in sync with React state?

- A. defaultValue and ref
- B. checked and disabled
- **C. value and onChange** ✅
- D. placeholder and id

> ✅ **Đáp án đúng:** **C** (value and onChange)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Controlled Component trong React được đồng bộ với state thông qua 2 prop cốt lõi: `value` (hiển thị giá trị từ state) và `onChange` (bắt sự kiện thay đổi để cập nhật lại state).

---

### Câu 48

What is the main advantage of using React-Bootstrap components instead of copying raw Bootstrap HTML?

- **A. They allow UI to be organized in React style, with props and clearer component composition.** ✅
- B. They remove the need to understand React components.
- C. They automatically write all business logic for the application.
- D. They completely replace JavaScript.

> ✅ **Đáp án đúng:** **A** (They allow UI to be organized in React style, with props and clearer component composition.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Sử dụng React-Bootstrap cho phép xây dựng UI đúng theo phong cách React với props, quản lý state và cấu trúc component rõ ràng mà không phải chèn mã HTML thuần và thư viện jQuery ngoài.

---

### Câu 49

In the Next.js Pages Router, how is a route typically created for the path /about?

- A. By registering the route manually in a routes.config.js file
- B. By calling Router.add('/about')
- **C. By creating a file named about.js (or about.tsx) inside the pages directory** ✅
- D. By wrapping a component in a <Route path='/about'> element

> ✅ **Đáp án đúng:** **C** (By creating a file named about.js (or about.tsx) inside the pages directory)
>
> 💡 **Giải thích:** **Đáp án đúng: C**
> 
> - Trong Pages Router của Next.js (file-system routing), việc tạo file `pages/about.js` (hoặc `pages/about.tsx`) sẽ tự động ánh xạ và tạo ra route `/about`.

---

### Câu 50

When should you consider writing a custom Hook?

- **A. When multiple components share similar logic, such as tracking online status, handling forms, or fetching data, and you want to reuse that logic.** ✅
- B. When you want to completely replace JSX with CSS.
- C. When the component has no reusable logic at all.
- D. When you want to permanently store data in a database without a backend.

> ✅ **Đáp án đúng:** **A** (When multiple components share similar logic, such as tracking online status, handling forms, or fetching data, and you want to reuse that logic.)
>
> 💡 **Giải thích:** **Đáp án đúng: A**
> 
> - Custom Hook là giải pháp lý tưởng trong React để trừu xuất và tái sử dụng logic chứa state (stateful logic) như theo dõi trạng thái mạng, quản lý form, hoặc fetch dữ liệu qua nhiều component.

---
