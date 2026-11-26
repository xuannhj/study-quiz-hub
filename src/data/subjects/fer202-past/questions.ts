import type { Question } from '../../../types/study';

export const fer202PastQuestions: Question[] = [
  {
    "id": "fer202-d01-q01",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a common use case for using Redux in a React application?",
    "options": [
      {
        "id": "A",
        "text": "Managing authentication and user sessions"
      },
      {
        "id": "B",
        "text": "Styling and layout of React components"
      },
      {
        "id": "C",
        "text": "Handling form validation and input tracking"
      },
      {
        "id": "D",
        "text": "Implementing server-side rendering in React"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Redux được dùng để quản lý state toàn cục trong React, đặc biệt hữu ích cho các trường hợp như xác thực người dùng và phiên làm việc, nơi cần chia sẻ dữ liệu giữa nhiều component."
  },
  {
    "id": "fer202-d01-q02",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which hook is typically used alongside useSelector to modify the Redux state?",
    "options": [
      {
        "id": "A",
        "text": "useState"
      },
      {
        "id": "B",
        "text": "useEffect"
      },
      {
        "id": "C",
        "text": "useDispatch"
      },
      {
        "id": "D",
        "text": "useContext"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong Redux với React, useSelector dùng để lấy state, còn useDispatch dùng để gửi action (dispatch) nhằm thay đổi state. useState, useEffect, useContext không liên quan trực tiếp đến Redux state modification."
  },
  {
    "id": "fer202-d01-q03",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of the Redux middleware in React applications?",
    "options": [
      {
        "id": "A",
        "text": "To handle asynchronous actions and side effects"
      },
      {
        "id": "B",
        "text": "To define the structure of the Redux store"
      },
      {
        "id": "C",
        "text": "To connect React components to the Redux store"
      },
      {
        "id": "D",
        "text": "To manage component hierarchy"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Redux middleware (như Redux Thunk, Saga) cho phép xử lý hành động bất đồng bộ (API calls, timers...) và side effects trước khi chúng đến reducer, giúp giữ reducer thuần túy và dự đoán được."
  },
  {
    "id": "fer202-d01-q04",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the core principle of Redux?",
    "options": [
      {
        "id": "A",
        "text": "Single source of truth and unidirectional data flow."
      },
      {
        "id": "B",
        "text": "Multiple sources of truth for each component."
      },
      {
        "id": "C",
        "text": "State is mutable and can be directly modified."
      },
      {
        "id": "D",
        "text": "State is only updated using the useState hook."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Redux dựa trên nguyên tắc duy nhất là có một store duy nhất (single source of truth) và dữ liệu chỉ chảy theo một chiều (unidirectional data flow) để đảm bảo tính dự đoán và dễ debug."
  },
  {
    "id": "fer202-d01-q05",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the advantage of using Axios over fetch?",
    "options": [
      {
        "id": "A",
        "text": "Axios has better support for handling requests and responses."
      },
      {
        "id": "B",
        "text": "Axios requires less boilerplate code."
      },
      {
        "id": "C",
        "text": "Axios is faster than fetch for all types of HTTP requests."
      },
      {
        "id": "D",
        "text": "Axios does not support promises."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Axios cung cấp tính năng xử lý request/response tốt hơn như tự động parse JSON, interceptors, cancel request, và hỗ trợ cả browser và Node.js. Fetch không có sẵn những tính năng này."
  },
  {
    "id": "fer202-d01-q06",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the main purpose of the `await` keyword within an `async` function?",
    "options": [
      {
        "id": "A",
        "text": "To return a new `Promise` object."
      },
      {
        "id": "B",
        "text": "To immediately execute the next line of code without waiting."
      },
      {
        "id": "C",
        "text": "To pause the execution of the async function until the Promise it's waiting for is resolved or rejected."
      },
      {
        "id": "D",
        "text": "To define a synchronous block of code"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Từ khóa 'await' dừng thực thi hàm async cho đến khi Promise được giải quyết (resolve hoặc reject), giúp viết code bất đồng bộ giống đồng bộ, dễ đọc hơn."
  },
  {
    "id": "fer202-d01-q07",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Why would a React developer choose to use \"Axios\"?",
    "options": [
      {
        "id": "A",
        "text": "To render React components faster"
      },
      {
        "id": "B",
        "text": "To manage component state globally"
      },
      {
        "id": "C",
        "text": "To make HTTP requests to APIs"
      },
      {
        "id": "D",
        "text": "To build reusable hooks"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Axios is a popular JavaScript library for making HTTP requests from the browser or Node.js. It is not for rendering, state management, or hooks — those are handled by React core or libraries like Redux or custom hooks."
  },
  {
    "id": "fer202-d01-q08",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which method is most commonly used in a React app to fetch data from a server?",
    "options": [
      {
        "id": "A",
        "text": "WebSockets"
      },
      {
        "id": "B",
        "text": "useState()"
      },
      {
        "id": "C",
        "text": "fetch() or axios inside useEffect()"
      },
      {
        "id": "D",
        "text": "console.log() inside render()"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong React, cách phổ biến nhất để lấy dữ liệu từ server là dùng fetch() hoặc thư viện axios bên trong useEffect() để đảm bảo gọi API sau khi component mount và tránh gọi lặp không cần thiết."
  },
  {
    "id": "fer202-d01-q09",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Which of the following is used to pass a function from a parent component to a child component?",
    "options": [
      {
        "id": "A",
        "text": "Passing a function as a prop to the child component."
      },
      {
        "id": "B",
        "text": "Using useState hook in the child component."
      },
      {
        "id": "C",
        "text": "Using useContext in both parent and child components."
      },
      {
        "id": "D",
        "text": "Directly accessing the child component's state."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, để truyền hàm từ component cha sang con, cách chuẩn là truyền hàm qua props. Các lựa chọn khác như useState, useContext hoặc truy cập trực tiếp state con đều không đúng mục đích này."
  },
  {
    "id": "fer202-d01-q10",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What happens when you use the xs prop on a Col component in React-Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "The column will only have its width defined on extra-large screens."
      },
      {
        "id": "B",
        "text": "The column will only have its width defined on extra-small screens, and larger sizes will ignore it"
      },
      {
        "id": "C",
        "text": "The column will have its width defined on extra-small screens and will apply to larger sizes if no specific breakpoint is defined."
      },
      {
        "id": "D",
        "text": "The xs prop does not exist in React-Bootstrap"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "In React-Bootstrap, the 'xs' prop sets the column width for extra-small screens and acts as the default for larger screens unless overridden by sm, md, lg, or xl props."
  },
  {
    "id": "fer202-d01-q11",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you ensure that a prop is passed as an array with at least one element?",
    "options": [
      {
        "id": "A",
        "text": "By using `PropTypes.array.isRequired`"
      },
      {
        "id": "B",
        "text": "By creating a custom PropType validator"
      },
      {
        "id": "C",
        "text": "By using `PropTypes.arrayOf()`"
      },
      {
        "id": "D",
        "text": "By using `PropTypes.objectOf()`"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "PropTypes.array.isRequired only ensures the prop is an array and required, but doesn’t enforce minimum length. A custom validator is needed to check for at least one element."
  },
  {
    "id": "fer202-d01-q12",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the primary purpose of a router in a web application?",
    "options": [
      {
        "id": "A",
        "text": "To manage state within a component"
      },
      {
        "id": "B",
        "text": "To respond to a URL based on a set of route handler declarations"
      },
      {
        "id": "C",
        "text": "To handle server-side logic"
      },
      {
        "id": "D",
        "text": "To manage routing in a React application"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Router trong ứng dụng web có nhiệm vụ ánh xạ URL đến các handler tương ứng để xử lý yêu cầu. Đây là chức năng cốt lõi, không phải quản lý state (A), logic server-side (C) hay chỉ riêng React (D). Đáp án B."
  },
  {
    "id": "fer202-d01-q13",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you declare a route in React Router?",
    "options": [
      {
        "id": "A",
        "text": "Using `<Link path=\"/\" element={<Home>} />`"
      },
      {
        "id": "B",
        "text": "Using `<Route path=\"/\" element={<Home>} />`"
      },
      {
        "id": "C",
        "text": "Using `<Routes path=\"/\" element={<Home>} />`"
      },
      {
        "id": "D",
        "text": "Using `<context path=\"/\"></context><suspense></home>`"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React Router v6, route được khai báo bằng component <Route> với thuộc tính path và element. Các lựa chọn khác sai cú pháp hoặc dùng component không tồn tại."
  },
  {
    "id": "fer202-d01-q14",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the difference between the HTTP response codes 401 and 403?",
    "options": [
      {
        "id": "A",
        "text": "401 the request is missing valid authentication credentials, while 403 the server refuses to authorize."
      },
      {
        "id": "B",
        "text": "401 the server encountered an internal error, while 403 means the requested resource was not found."
      },
      {
        "id": "C",
        "text": "401 the request was successful, while 403 means the request was not modified."
      },
      {
        "id": "D",
        "text": "401 and 403 are interchangeable and have the same meaning."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HTTP 401 Unauthorized: yêu cầu thiếu thông tin xác thực hợp lệ. HTTP 403 Forbidden: máy chủ hiểu yêu cầu nhưng từ chối thực hiện do không có quyền truy cập. Hai mã này không giống nhau và không thể thay thế lẫn nhau."
  },
  {
    "id": "fer202-d01-q15",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "```javascript\nconst jsonServer = require('json-server');\nconst server = jsonServer.create();\nconst router = jsonServer.router('data.json');\nconst port = 3000;\n\nserver.use(router);\n\nserver.listen(port, () => {\n  console.log(`JSON server is running on port ${port}`);\n});\n```\n\nWhat is the above code used for?",
    "options": [
      {
        "id": "A",
        "text": "Create a dynamic server to serve JSON data."
      },
      {
        "id": "B",
        "text": "Create a dynamic web application using JSON data."
      },
      {
        "id": "C",
        "text": "Create a JSON file based on data from the server."
      },
      {
        "id": "D",
        "text": "Configure the development environment for the project using JSON."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Mã này dùng json-server để khởi tạo server HTTP lắng nghe trên cổng 3000, phục vụ dữ liệu từ file data.json. Đây là server REST giả lập, dùng để mock API, không phải tạo ứng dụng web hay cấu hình môi trường."
  },
  {
    "id": "fer202-d01-q16",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you dispatch an action when a button is clicked?",
    "options": [
      {
        "id": "A",
        "text": "const handleClick = () => {\n    dispatch({ type: 'BUTTON_CLICKED' });\n};\n<button onClick={handleClick}>Click me</button>;"
      },
      {
        "id": "B",
        "text": "const handleClick = () => {\n    dispatch({ type: 'BUTTON_CLICKED' });\n};\n<button onClick={() => handleClick()}>Click me</button>;"
      },
      {
        "id": "C",
        "text": "const handleClick = () => { dispatch({ type: 'BUTTON_CLICKED' }); }; <button onClick={handleClick()}>Click me</button>;"
      },
      {
        "id": "D",
        "text": "const handleClick = () => {\n    dispatch({ action: 'BUTTON_CLICKED' });\n};\n<button onClick={handleClick}>Click me</button>;"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, để dispatch action khi click, ta định nghĩa hàm handleClick và truyền hàm đó vào onClick (không gọi hàm trực tiếp). Câu A đúng cú pháp và cách dùng. Câu C gọi hàm ngay khi render → sai. Câu D dùng 'action' thay vì 'type' → sai."
  },
  {
    "id": "fer202-d01-q17",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is the correct way to use useSelector to access a value from the Redux store?",
    "options": [
      {
        "id": "A",
        "text": "`const value = useSelector((store) => store.value);`"
      },
      {
        "id": "B",
        "text": "`const value = useSelector((state) => state.value);`"
      },
      {
        "id": "C",
        "text": "`const value = useSelector((context) => context.value);`"
      },
      {
        "id": "D",
        "text": "`const value = useSelector((redux) => redux.value);`"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "In Redux, useSelector hook receives the state as its parameter, not store, context, or redux. The correct syntax is (state) => state.value to access a value from the store."
  },
  {
    "id": "fer202-d01-q18",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the typical file extension for a React component?",
    "options": [
      {
        "id": "A",
        "text": ".html"
      },
      {
        "id": "B",
        "text": ".css"
      },
      {
        "id": "C",
        "text": ".js or .jsx"
      },
      {
        "id": "D",
        "text": ".php"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "React component thường được viết trong file có phần mở rộng .js hoặc .jsx. .jsx cho phép viết mã JSX (JavaScript XML) trong JavaScript, trong khi .js là định dạng chuẩn. Các phần mở rộng khác như .html, .css, .php không dùng cho component React."
  },
  {
    "id": "fer202-d01-q19",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "multiple",
    "prompt": "What is the purpose of React.Fragment or shorthand <> </> in React?(Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Fragments allow you to group multiple elements without adding an extra node to the DOM."
      },
      {
        "id": "B",
        "text": "Fragments allow you to provide CSS styling to multiple elements."
      },
      {
        "id": "C",
        "text": "Fragments allow you to handle state management in React."
      },
      {
        "id": "D",
        "text": "Fragments are particularly useful for avoiding unnecessary `<div>` elements, which can clutter your markup."
      }
    ],
    "correctOptionIds": [
      "A",
      "D"
    ],
    "explanation": "React.Fragment (hoặc <> </>) giúp nhóm nhiều phần tử JSX mà không thêm node DOM thừa, giúp mã sạch hơn và tránh làm rối markup. Không liên quan đến styling hay quản lý state."
  },
  {
    "id": "fer202-d01-q20",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can the `useEffect` hook be optimized for cleanup actions?",
    "options": [
      {
        "id": "A",
        "text": "By passing an empty array as the second argument"
      },
      {
        "id": "B",
        "text": "By using a class-based component"
      },
      {
        "id": "C",
        "text": "By calling it after every render"
      },
      {
        "id": "D",
        "text": "By manually removing event listeners"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Passing an empty dependency array to useEffect ensures it runs only once (on mount), and any cleanup function returned will run on unmount — ideal for cleanup like removing event listeners."
  },
  {
    "id": "fer202-d01-q21",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "How would you use the useContext Hook to access a shared theme in a React component?",
    "options": [
      {
        "id": "A",
        "text": "const theme = useContext(ThemeContext);"
      },
      {
        "id": "B",
        "text": "const { theme } = useContext(ThemeContext);"
      },
      {
        "id": "C",
        "text": "const { theme } = useContext(ThemeContext.Provider);"
      },
      {
        "id": "D",
        "text": "const theme = useContext(ThemeContext.Provider);"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "useContext Hook nhận đối tượng Context (không phải Provider) và trả về giá trị hiện tại của Context. Nếu Context cung cấp một object (ví dụ { theme: 'dark' }), bạn có thể destructuring sau khi gọi useContext, nhưng cú pháp đúng là useContext(ThemeContext), không phải useContext(ThemeContext.Provider). Provider chỉ dùng để cung cấp giá trị, không dùng để consume."
  },
  {
    "id": "fer202-d01-q22",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which of the following could cause an Effect to run too frequently?",
    "options": [
      {
        "id": "A",
        "text": "Including all state variables in the dependency array."
      },
      {
        "id": "B",
        "text": "Not using a dependency array."
      },
      {
        "id": "C",
        "text": "Including a variable like data that changes often in the dependency array."
      },
      {
        "id": "D",
        "text": "Omitting the dependency array altogether."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Nếu dependency array chứa biến thay đổi liên tục (ví dụ: data), useEffect sẽ chạy lại mỗi khi biến đó thay đổi → gây chạy quá thường xuyên."
  },
  {
    "id": "fer202-d01-q23",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which of the following is NOT considered a popular front-end framework?",
    "options": [
      {
        "id": "A",
        "text": "React"
      },
      {
        "id": "B",
        "text": "Angular"
      },
      {
        "id": "C",
        "text": "Django"
      },
      {
        "id": "D",
        "text": "Vue.js"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Django là một framework backend (server-side) viết bằng Python, không phải front-end. Các lựa chọn còn lại: React, Angular, Vue.js đều là framework front-end phổ biến dùng để xây dựng giao diện người dùng. Do đó, Django là đáp án đúng cho câu hỏi 'không phải front-end framework'."
  },
  {
    "id": "fer202-d01-q24",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is one major benefit of using front-end frameworks like React or Vue.js?",
    "options": [
      {
        "id": "A",
        "text": "They eliminate the need for HTML"
      },
      {
        "id": "B",
        "text": "They allow for faster development by providing pre-built components"
      },
      {
        "id": "C",
        "text": "They only work on mobile applications"
      },
      {
        "id": "D",
        "text": "They focus solely on server-side development"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "React/Vue.js speed up development via reusable components and state management. They don’t eliminate HTML, aren’t mobile-only, and focus on client-side, not server-side."
  },
  {
    "id": "fer202-d01-q25",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you access Chrome DevTools?",
    "options": [
      {
        "id": "A",
        "text": "By pressing F12 or right-clicking and selecting \"Inspect\""
      },
      {
        "id": "B",
        "text": "By installing a Chrome extension"
      },
      {
        "id": "C",
        "text": "By typing \"chrome://devtools\" in the address bar"
      },
      {
        "id": "D",
        "text": "By opening the Chrome menu and selecting \"DevTools\""
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Chrome DevTools có thể truy cập nhanh bằng phím F12 hoặc chuột phải → Inspect. Các cách khác không chính xác hoặc không phổ biến."
  },
  {
    "id": "fer202-d01-q26",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "How would you render a user's name dynamically inside an `<h2>` tag in JSX?",
    "options": [
      {
        "id": "A",
        "text": "`<h2> <p>{userName}</p> </h2>`"
      },
      {
        "id": "B",
        "text": "`<h2> {userName} </h2>`"
      },
      {
        "id": "C",
        "text": "`<h2> \"userName\" </h2>`"
      },
      {
        "id": "D",
        "text": "`<h2>{userName: \"John\"}</h2>`"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "In JSX, to render a dynamic value like userName inside an h2 tag, you use curly braces {userName} directly within the tag. Other options are syntactically incorrect or static."
  },
  {
    "id": "fer202-d01-q27",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "The purpose of JSX is to:",
    "options": [
      {
        "id": "A",
        "text": "Make JavaScript code more readable by embedding HTML in JavaScript"
      },
      {
        "id": "B",
        "text": "Make JavaScript run faster"
      },
      {
        "id": "C",
        "text": "Encrypt HTML elements"
      },
      {
        "id": "D",
        "text": "Handle server-side logic"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "JSX cho phép nhúng HTML vào JavaScript, giúp code React dễ đọc và bảo trì hơn. Không làm JS chạy nhanh hơn, không mã hóa HTML hay xử lý logic server-side."
  },
  {
    "id": "fer202-d01-q28",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "What does ES6 introduce that is essential for React applications? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Arrow functions"
      },
      {
        "id": "B",
        "text": "Destructuring assignment"
      },
      {
        "id": "C",
        "text": "JSX syntax"
      },
      {
        "id": "D",
        "text": "Template Literals"
      }
    ],
    "correctOptionIds": [
      "A",
      "B",
      "D"
    ],
    "explanation": "ES6 introduced arrow functions (A), destructuring (B), and template literals (D) — all widely used in React for concise syntax, state handling, and dynamic strings. JSX (C) is not part of ES6; it’s a React-specific syntax extension transpiled by Babel."
  },
  {
    "id": "fer202-d01-q29",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "multiple",
    "prompt": "How do you import and use a Button component from React-Bootstrap 5?(Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "import React from 'react';\nimport Button from 'react-bootstrap/Button';\n\nfunction Demo() {\n  return (\n    <Button variant=\"primary\">\n  );\n}\n\nexport default Demo;"
      },
      {
        "id": "B",
        "text": "import React from 'react';\nimport Button from 'react-bootstrap/Button';\n\nfunction Demo() {\n  return (\n    <button variant=\"primary\"> Primary Button</button>\n  );\n}\n\nexport default Demo;"
      },
      {
        "id": "C",
        "text": "import React from 'react';\nimport Button from 'react-bootstrap/Button';\n\nfunction Demo() {\n  return (\n    <Button variant=\"primary\">Primary Button</Button>\n  );\n}\n\nexport default Demo;"
      },
      {
        "id": "D",
        "text": "import React from 'react';\nimport Button from 'react-bootstrap/Button';\n\nfunction Demo() {\n  return (\n    <button variant=\"primary\"/>\n  );\n}\n\nexport default Demo;"
      }
    ],
    "correctOptionIds": [
      "A",
      "C"
    ],
    "explanation": "A đúng vì cú pháp import và sử dụng <Button variant=\"primary\"> là chuẩn React-Bootstrap. C đúng vì có đóng thẻ và có nội dung 'Primary Button'. B và D sai vì dùng thẻ <button> thay vì component <Button> của React-Bootstrap, không áp dụng được prop variant như vậy."
  },
  {
    "id": "fer202-d01-q30",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the main purpose of React-Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "To build React components using jQuery"
      },
      {
        "id": "B",
        "text": "To use Bootstrap styles with inline CSS only"
      },
      {
        "id": "C",
        "text": "To provide Bootstrap-styled components built entirely with React"
      },
      {
        "id": "D",
        "text": "To convert Bootstrap HTML into Angular components"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "React-Bootstrap là thư viện cung cấp các thành phần giao diện người dùng (UI components) được thiết kế theo phong cách Bootstrap, nhưng được xây dựng hoàn toàn bằng React, không phụ thuộc vào jQuery hay JavaScript gốc của Bootstrap."
  },
  {
    "id": "fer202-d01-q31",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Create a responsive grid layout using React-Bootstrap with three columns that stack vertically on small screens. Which classes would you apply?",
    "options": [
      {
        "id": "A",
        "text": "<Container>\n     <Row>\n       <Col>1 of 3</Col>\n       <Col>2 of 3</Col>\n       <Col>3 of 3</Col>\n     </Row>\n   </Container>"
      },
      {
        "id": "B",
        "text": "<Container>\n     <Row>\n       <Col sm={4}>1 of 3</Col>\n       <Col sm={4}>2 of 3</Col>\n       <Col sm={4}>3 of 3</Col>\n     </Row>\n   </Container>"
      },
      {
        "id": "C",
        "text": "<Container>\n     <Row>\n       <Col md={12}>1 of 4</Col>\n       <Col md={12}>2 of 4</Col>\n       <Col md={12}>3 of 4</Col>\n     </Row>\n   </Container>"
      },
      {
        "id": "D",
        "text": "<Container>\n     <Row>\n       <Col sm={12} md={4}>1 of 4</Col>\n       <Col sm={12} md={4}>2 of 4</Col>\n       <Col sm={12} md={4}>3 of 4</Col>\n     </Row>\n   </Container>"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Để tạo grid 3 cột xếp dọc trên màn hình nhỏ (sm), cần dùng sm={12} (chiếm toàn bộ width trên small screen), và md={4} để chia 3 cột bằng nhau trên màn hình medium trở lên. Đáp án D là chính xác nhất."
  },
  {
    "id": "fer202-d01-q32",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which of the following is the first step in React's render cycle?",
    "options": [
      {
        "id": "A",
        "text": "Triggering a render when state or props change."
      },
      {
        "id": "B",
        "text": "Re-rendering the component."
      },
      {
        "id": "C",
        "text": "Committing the changes to the DOM."
      },
      {
        "id": "D",
        "text": "Calculating the minimal necessary updates for the DOM."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Bước đầu tiên trong chu kỳ render của React là kích hoạt render khi state hoặc props thay đổi. Sau đó React mới tính toán sự khác biệt (reconciliation), xác định cập nhật tối thiểu, và cuối cùng commit vào DOM. Đáp án A là bước khởi đầu."
  },
  {
    "id": "fer202-d01-q33",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "How can you pass parameters to an event handler in React? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Using the bind() method."
      },
      {
        "id": "B",
        "text": "Using arrow functions."
      },
      {
        "id": "C",
        "text": "Using the addEventListener() method."
      },
      {
        "id": "D",
        "text": "Using the this keyword."
      }
    ],
    "correctOptionIds": [
      "A",
      "B"
    ],
    "explanation": "In React, you can pass parameters via bind() (A) or arrow functions (B). addEventListener() (C) is vanilla JS, not React’s event system. this keyword (D) alone doesn’t pass parameters."
  },
  {
    "id": "fer202-d01-q34",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the primary purpose of Next.js?",
    "options": [
      {
        "id": "A",
        "text": "To enable server-side rendering and generate static websites."
      },
      {
        "id": "B",
        "text": "To manage state in React applications."
      },
      {
        "id": "C",
        "text": "To provide a UI component library."
      },
      {
        "id": "D",
        "text": "To create database schemas."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Next.js là framework React cho phép render phía server (SSR) và tạo trang tĩnh (SSG), tối ưu hiệu suất và SEO. Các lựa chọn khác mô tả chức năng của Redux, Material UI hay ORM."
  },
  {
    "id": "fer202-d01-q35",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the main advantage of Tailwind CSS compared to Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "It provides more flexibility to create custom designs and components."
      },
      {
        "id": "B",
        "text": "It is easier to use and has fewer customization options."
      },
      {
        "id": "C",
        "text": "It has predefined components for quick styling."
      },
      {
        "id": "D",
        "text": "It offers faster page loading times."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Tailwind CSS là utility-first, cho phép tùy chỉnh cao và linh hoạt hơn Bootstrap — vốn dựa trên component sẵn có. Điều này giúp thiết kế độc đáo mà không bị giới hạn bởi framework."
  },
  {
    "id": "fer202-d01-q36",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What command is used to create a new Next.js project?",
    "options": [
      {
        "id": "A",
        "text": "npx create-react-app"
      },
      {
        "id": "B",
        "text": "npm install next"
      },
      {
        "id": "C",
        "text": "npx create-next-app"
      },
      {
        "id": "D",
        "text": "git clone next.js"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Next.js official documentation recommends 'npx create-next-app' to scaffold a new project. 'create-react-app' is for React, not Next.js."
  },
  {
    "id": "fer202-d01-q37",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is a core feature of Next.js that enhances SEO?",
    "options": [
      {
        "id": "A",
        "text": "Real-time data fetching."
      },
      {
        "id": "B",
        "text": "Client-side routing."
      },
      {
        "id": "C",
        "text": "Automatic code splitting."
      },
      {
        "id": "D",
        "text": "Server-side rendering."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Next.js hỗ trợ Server-Side Rendering (SSR), giúp render trang trên server trước khi gửi về client, từ đó cải thiện SEO vì công cụ tìm kiếm có thể crawl nội dung đầy đủ ngay từ đầu."
  },
  {
    "id": "fer202-d01-q38",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which Bootstrap class is commonly used to create a responsive navigation bar?",
    "options": [
      {
        "id": "A",
        "text": ".navbar-static"
      },
      {
        "id": "B",
        "text": ".nav-horizontal"
      },
      {
        "id": "C",
        "text": ".navbar"
      },
      {
        "id": "D",
        "text": ".navigation-block"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong Bootstrap, lớp .navbar được sử dụng phổ biến để tạo thanh điều hướng phản ứng (responsive navigation bar). Các lớp như .navbar-static hay .nav-horizontal không tồn tại hoặc không phải là chuẩn chính thức."
  },
  {
    "id": "fer202-d01-q39",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which class is used to create a form input with a validation state in Bootstrap 5?",
    "options": [
      {
        "id": "A",
        "text": "`.form-control`"
      },
      {
        "id": "B",
        "text": "`.input-group`"
      },
      {
        "id": "C",
        "text": "`.form-check`"
      },
      {
        "id": "D",
        "text": "`.form-validation`"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong Bootstrap 5, lớp .form-control được dùng để tạo input form và có thể kết hợp với các lớp trạng thái xác thực như .is-valid hoặc .is-invalid để hiển thị trạng thái xác thực. Các lớp khác như .input-group, .form-check không dùng cho xác thực trạng thái input."
  },
  {
    "id": "fer202-d01-q40",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which Bootstrap class provides a fluid container that adapts to all breakpoints?",
    "options": [
      {
        "id": "A",
        "text": "`.container-fluid`"
      },
      {
        "id": "B",
        "text": "`.container`"
      },
      {
        "id": "C",
        "text": "`.container-lg`"
      },
      {
        "id": "D",
        "text": "`.container-xs`"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong Bootstrap, `.container-fluid` tạo container chiếm toàn bộ chiều rộng màn hình, thích ứng với mọi breakpoint. Các lớp khác như `.container` có kích thước cố định theo breakpoint."
  },
  {
    "id": "fer202-d01-q41",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Why should you avoid using too many lazy components in your application?",
    "options": [
      {
        "id": "A",
        "text": "Because it results in multiple HTTP requests, slowing down the application."
      },
      {
        "id": "B",
        "text": "Because it decreases the performance by loading everything upfront."
      },
      {
        "id": "C",
        "text": "Because it makes the code difficult to debug."
      },
      {
        "id": "D",
        "text": "Because it affects the layout and styling of components."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Lazy loading chia nhỏ bundle thành nhiều chunk, mỗi lần tải component sẽ tạo HTTP request riêng, có thể làm chậm ứng dụng nếu dùng quá nhiều."
  },
  {
    "id": "fer202-d01-q42",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Analyze the differences between Flux and MVC architectures. Which statement is true?",
    "options": [
      {
        "id": "A",
        "text": "Flux enforces unidirectional data flow, while MVC allows bidirectional data flow."
      },
      {
        "id": "B",
        "text": "MVC enforces unidirectional data flow, while Flux allows bidirectional data flow."
      },
      {
        "id": "C",
        "text": "Both Flux and MVC enforce unidirectional data flow."
      },
      {
        "id": "D",
        "text": "Both Flux and MVC allow bidirectional data flow."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Flux architecture uses a strict unidirectional data flow (Action → Dispatcher → Store → View), whereas MVC allows bidirectional communication between Model and View, which can lead to complexity and side effects."
  },
  {
    "id": "fer202-d01-q43",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "How would you extract and display multiple parameters, userId and postId, in a component?",
    "options": [
      {
        "id": "A",
        "text": "`const { userId, postId } = useParams();`"
      },
      {
        "id": "B",
        "text": "`const userId = useParams('userId'); const postId = useParams('postId');`"
      },
      {
        "id": "C",
        "text": "`const userId = route.params.userId; const postId = route.params.postId;`"
      },
      {
        "id": "D",
        "text": "`const { userId } = useParams(); const { postId } = useParams();`"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React Router v6, `useParams()` trả về một object chứa các tham số route. Cách đúng để trích xuất nhiều tham số là dùng destructuring: `{ userId, postId }`. Các cách còn lại không đúng cú pháp hoặc không tồn tại."
  },
  {
    "id": "fer202-d01-q44",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "How would you navigate programmatically to a route with a parameter using useNavigate in React Router?",
    "options": [
      {
        "id": "A",
        "text": "navigate(\"/user:id\");"
      },
      {
        "id": "B",
        "text": "navigate(\"/user?id=123\");"
      },
      {
        "id": "C",
        "text": "navigate(\"/user/123\");"
      },
      {
        "id": "D",
        "text": "navigate({ path: \"/user/123\" });"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong React Router, để điều hướng đến route có tham số, dùng navigate(\"/user/123\") với 123 là giá trị tham số. Cú pháp \"/user:id\" là định nghĩa route, không phải gọi navigate. Các lựa chọn khác sai cú pháp hoặc dùng query string không phù hợp với route parameter."
  },
  {
    "id": "fer202-d01-q45",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Why might this code produce unexpected results?\n```javascript\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  const handleClick = () => {\n    setCount(count + 1);\n    setCount(count + 1);\n  };\n  return <button onClick={handleClick}>{count}</button>;\n}\n```",
    "options": [
      {
        "id": "A",
        "text": "Because setCount is called twice, it resets state"
      },
      {
        "id": "B",
        "text": "Because setCount merges the updates automatically"
      },
      {
        "id": "C",
        "text": "Both `setCount(count + 1)` calls use the same snapshot of count"
      },
      {
        "id": "D",
        "text": "It's invalid to call setCount twice"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong React, mỗi lần gọi `setCount` dùng giá trị `count` tại thời điểm gọi, không phải giá trị mới nhất. Vì vậy, cả hai lần gọi đều dùng `count` cũ → chỉ tăng 1 lần. Đây là hành vi thường gặp khi không dùng updater function."
  },
  {
    "id": "fer202-d01-q46",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Find the bug in the following React code:\n\n```\nconst [items, setItems] = useState([]);\nconst addItem = () => {\n    items.push('new');\n    setItems(items);\n};\n```",
    "options": [
      {
        "id": "A",
        "text": "`useState` should be `useReducer`"
      },
      {
        "id": "B",
        "text": "use `setItems([...items, 'new'])`"
      },
      {
        "id": "C",
        "text": "`push` is not a valid method"
      },
      {
        "id": "D",
        "text": "`setItems` must take a string"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, không nên mutate state trực tiếp bằng push. Phải tạo mảng mới với spread operator để trigger re-render đúng cách."
  },
  {
    "id": "fer202-d01-q47",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "In the useEffect hook, how many milliseconds would you wait using setTimeout to perform a side effect after 2 seconds?",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "200"
      },
      {
        "id": "C",
        "text": "2000"
      },
      {
        "id": "D",
        "text": "20000"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong JavaScript, hàm setTimeout sử dụng đơn vị là mili giây (ms). 2 giây = 2000 ms. Do đó, để thực hiện side effect sau 2 giây, cần truyền 2000 vào setTimeout."
  },
  {
    "id": "fer202-d01-q48",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which is the correct way to consume context in a functional component using the \"useContext\" hook?",
    "options": [
      {
        "id": "A",
        "text": "const value = MyContext();"
      },
      {
        "id": "B",
        "text": "const value = useContext(MyContext);"
      },
      {
        "id": "C",
        "text": "const value = this.context(MyContext);"
      },
      {
        "id": "D",
        "text": "<MyContext.Provider useContext={value} />"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, cách đúng để tiêu thụ context trong functional component là dùng hook useContext(MyContext). Các cú pháp khác không hợp lệ hoặc sai cú pháp React."
  },
  {
    "id": "fer202-d01-q49",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "In React Router, how do you define a nested route structure within a parent component?",
    "options": [
      {
        "id": "A",
        "text": "Utilize the &lt;Switch&gt; component to handle nested routes"
      },
      {
        "id": "B",
        "text": "Implement a routing table using an array of route objects"
      },
      {
        "id": "C",
        "text": "Use the &lt;Route&gt; component with nested &lt;Route&gt; components"
      },
      {
        "id": "D",
        "text": "Direct routes using query parameters in URL path names"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong React Router, cấu trúc route lồng nhau được định nghĩa bằng cách đặt các thành phần <Route> bên trong một <Route> cha. Điều này cho phép xử lý các route con trong phạm vi của route cha, thường dùng với <Outlet> để render nội dung con."
  },
  {
    "id": "fer202-d01-q50",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Fill in the blank in this Bootstrap CSS code to apply a primary button style using React-Bootstrap:\nimport { Button } from 'react-bootstrap';\n<Button \\_\\_\\_\\_\\_\\_ =\"primary\">Click me</Button>",
    "options": [
      {
        "id": "A",
        "text": "color"
      },
      {
        "id": "B",
        "text": "variant"
      },
      {
        "id": "C",
        "text": "style"
      },
      {
        "id": "D",
        "text": "theme"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React-Bootstrap, thuộc tính `variant` được dùng để chỉ định kiểu nút (primary, secondary, success...). Ví dụ: `<Button variant=\"primary\">Click me</Button>` là cách đúng để áp dụng style nút chính."
  },
  {
    "id": "fer202-d02-q01",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of the action parameter in a Redux reducer function?",
    "options": [
      {
        "id": "A",
        "text": "To define the structure of the Redux store"
      },
      {
        "id": "B",
        "text": "To specify the initial state of the reducer"
      },
      {
        "id": "C",
        "text": "To handle asynchronous operations"
      },
      {
        "id": "D",
        "text": "To describe the action being dispatched to the reducer"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Trong Redux, hàm reducer nhận hai tham số: state hiện tại và action. Tham số action mô tả hành động đang được gửi đến reducer (bao gồm type và payload). Nó dùng để quyết định cách cập nhật state. Các lựa chọn khác sai vì: A (cấu trúc store), B (trạng thái ban đầu), C (xử lý bất đồng bộ) không phải vai trò của action parameter."
  },
  {
    "id": "fer202-d02-q02",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which of the following statements about Redux selectors is true?",
    "options": [
      {
        "id": "A",
        "text": "Selectors are responsible for dispatching actions"
      },
      {
        "id": "B",
        "text": "Selectors are used to modify the Redux store directly"
      },
      {
        "id": "C",
        "text": "Selectors are pure functions that derive specific data from the Redux store"
      },
      {
        "id": "D",
        "text": "Selectors are only used in React class components"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Redux selectors là các hàm thuần túy (pure functions) dùng để trích xuất dữ liệu cụ thể từ store, không thay đổi store hay dispatch action. Các lựa chọn khác mô tả sai chức năng của selector."
  },
  {
    "id": "fer202-d02-q03",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which of the following statements about reducers in Redux is true?",
    "options": [
      {
        "id": "A",
        "text": "Reducers can only be used with React class components, not functional components."
      },
      {
        "id": "B",
        "text": "Reducers are responsible for dispatching actions."
      },
      {
        "id": "C",
        "text": "Reducers should have side effects such as API calls or database interactions."
      },
      {
        "id": "D",
        "text": "Reducers must be pure functions with no side effects."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Reducers trong Redux phải là hàm thuần (pure functions) — không có side effect, không gọi API hay thay đổi state ngoài. Chúng nhận state và action, trả về state mới."
  },
  {
    "id": "fer202-d02-q04",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Describe the Redux flow process when an action is dispatched.",
    "options": [
      {
        "id": "A",
        "text": "Action is dispatched -> Middleware -> Reducer -> Store -> Component."
      },
      {
        "id": "B",
        "text": "Component dispatches action -> Reducer -> Middleware -> Store."
      },
      {
        "id": "C",
        "text": "Middleware dispatches action -> Reducer -> Store -> Component."
      },
      {
        "id": "D",
        "text": "Reducer dispatches action -> Middleware -> Component -> Store."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong Redux, luồng xử lý khi action được gửi: Action → Middleware (xử lý side effect) → Reducer (cập nhật state) → Store (lưu state) → Component (render lại giao diện). Đây là luồng chuẩn."
  },
  {
    "id": "fer202-d02-q05",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you configure Tailwind CSS in a Next.js project?",
    "options": [
      {
        "id": "A",
        "text": "By importing a CSS file directly in the component."
      },
      {
        "id": "B",
        "text": "By installing the Tailwind CSS package and creating a configuration file."
      },
      {
        "id": "C",
        "text": "By using a CDN link in the HTML file."
      },
      {
        "id": "D",
        "text": "By installing a Tailwind CSS plugin for Next.js."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Để cấu hình Tailwind CSS trong Next.js, bạn cần cài đặt gói tailwindcss, postcss, autoprefixer, sau đó tạo file tailwind.config.js và postcss.config.js, rồi import @tailwind directives trong file CSS. Đây là cách chuẩn được tài liệu chính thức hướng dẫn."
  },
  {
    "id": "fer202-d02-q06",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you create a new Next.js project?",
    "options": [
      {
        "id": "A",
        "text": "Use the create-next-app command-line tool."
      },
      {
        "id": "B",
        "text": "Install the Next.js package globally with npm."
      },
      {
        "id": "C",
        "text": "Clone the Next.js starter template from GitHub."
      },
      {
        "id": "D",
        "text": "Use the npm init command and manually configure the project."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Next.js officially recommends using `create-next-app` to scaffold new projects with zero config. Other options are manual or outdated methods."
  },
  {
    "id": "fer202-d02-q07",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What are the key features of Next.js?",
    "options": [
      {
        "id": "A",
        "text": "Server-side rendering, Static Site Generation, Image Optimization, Built-in Routing."
      },
      {
        "id": "B",
        "text": "Database integration, code debugging, and form validation."
      },
      {
        "id": "C",
        "text": "CSS styling, version control, and error handling."
      },
      {
        "id": "D",
        "text": "Package management, command-line interface, and testing framework."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Next.js là framework React nổi bật với các tính năng: render phía server (SSR), tạo trang tĩnh (SSG), tối ưu hình ảnh và hệ thống định tuyến tích hợp. Các lựa chọn khác không phải đặc trưng chính của Next.js."
  },
  {
    "id": "fer202-d02-q08",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "```javascript\nimport React, { Component } from 'react';\n\nclass Counter extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      count: 0\n    };\n  }\n\n  incrementCount() {\n    // TODO: Increase the count state by 1\n  }\n\n  render() {\n    return (\n      <div>\n        <p>Count: {this.state.count}</p>\n        <button onClick={this.incrementCount}>Increment</button>\n      </div>\n    );\n  }\n}\n\nexport default Counter;\n```\n\nIn the code above, how can we increase the value of the count state by 1 when the user clicks the \"Increment\" button?",
    "options": [
      {
        "id": "A",
        "text": "Call the method `this.setState({ count: this.state.count + 1 })` inside the incrementCount method."
      },
      {
        "id": "B",
        "text": "Assign a new value to count using the assignment operator (`=`) inside the incrementCount method."
      },
      {
        "id": "C",
        "text": "Call the method `this.state.count += 1` inside the incrementCount method."
      },
      {
        "id": "D",
        "text": "Use `this.setState(count + 1)` inside the incrementCount method."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, để cập nhật state, phải dùng `this.setState()` với đối tượng chứa giá trị mới. Gán trực tiếp (`=`) hoặc dùng `this.state.count += 1` không thay đổi state và không kích hoạt re-render. `this.setState(count + 1)` sai cú pháp vì không truyền object."
  },
  {
    "id": "fer202-d02-q09",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is a prop in React used for?",
    "options": [
      {
        "id": "A",
        "text": "It defines the internal state of a component."
      },
      {
        "id": "B",
        "text": "It specifies the visual appearance of a component."
      },
      {
        "id": "C",
        "text": "It enables communication and data transfer between components."
      },
      {
        "id": "D",
        "text": "It handles user interactions and events."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "In React, props (short for properties) are used to pass data and event handlers from parent to child components, enabling component communication and reusability. They are read-only and do not manage internal state (that’s state’s role)."
  },
  {
    "id": "fer202-d02-q10",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which React concept is used to pass data from a parent component to a child component?",
    "options": [
      {
        "id": "A",
        "text": "State"
      },
      {
        "id": "B",
        "text": "Props"
      },
      {
        "id": "C",
        "text": "Context"
      },
      {
        "id": "D",
        "text": "Ref"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, props (properties) là cơ chế chính để truyền dữ liệu từ component cha xuống component con. State dùng để quản lý dữ liệu nội bộ, Context dùng cho dữ liệu toàn cục."
  },
  {
    "id": "fer202-d02-q11",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you declare PropTypes for a prop that is an array of integers?",
    "options": [
      {
        "id": "A",
        "text": "prop: PropTypes.arrayOf(PropTypes.number)"
      },
      {
        "id": "B",
        "text": "prop: PropTypes.arrayOf(PropTypes.integer)"
      },
      {
        "id": "C",
        "text": "prop: PropTypes.array(PropTypes.number)"
      },
      {
        "id": "D",
        "text": "prop: PropTypes.array(PropTypes.integer)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, PropTypes.arrayOf(PropTypes.number) là cách đúng để khai báo prop là mảng các số (bao gồm cả integer). Không có PropTypes.integer trong thư viện chuẩn."
  },
  {
    "id": "fer202-d02-q12",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "2\n\n(Choose 1 answer)\n\nWhat is the purpose of PropTypes?",
    "options": [
      {
        "id": "A",
        "text": "To ensure type safety in React components."
      },
      {
        "id": "B",
        "text": "To improve performance in React applications."
      },
      {
        "id": "C",
        "text": "To handle asynchronous operations in React."
      },
      {
        "id": "D",
        "text": "To enable code reusability in React components."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "PropTypes dùng để kiểm tra kiểu dữ liệu của props trong React, giúp phát hiện lỗi sớm và đảm bảo tính an toàn kiểu. Không liên quan đến hiệu năng, xử lý bất đồng bộ hay tái sử dụng mã."
  },
  {
    "id": "fer202-d02-q13",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Write a custom property validator in React for a prop called \"email\" that should be a valid email address.\n(Choose 1 answer)",
    "options": [
      {
        "id": "A",
        "text": "email: PropTypes.string"
      },
      {
        "id": "B",
        "text": "email: PropTypes.email"
      },
      {
        "id": "C",
        "text": "email: PropTypes.string.isRequired"
      },
      {
        "id": "D",
        "text": "email: function(props, propName, componentName)"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Để tạo validator tùy chỉnh trong React, bạn phải định nghĩa một hàm nhận 3 tham số: props, propName, componentName, và trả về lỗi nếu không hợp lệ. PropTypes.email không tồn tại."
  },
  {
    "id": "fer202-d02-q14",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "4\n\n(Choose 1 answer)\n\nWhat is the purpose of a router in web development?",
    "options": [
      {
        "id": "A",
        "text": "To handle database operations"
      },
      {
        "id": "B",
        "text": "To manage user authentication"
      },
      {
        "id": "C",
        "text": "To handle navigation between different pages"
      },
      {
        "id": "D",
        "text": "To style the user interface"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Router trong phát triển web dùng để định tuyến (route) yêu cầu người dùng đến các trang hoặc component phù hợp, điều hướng giữa các URL và view. Không liên quan đến DB, xác thực hay styling."
  },
  {
    "id": "fer202-d02-q15",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "5\n\n(Choose 1 answer)\n\nHow do you create navigation links in React Router?",
    "options": [
      {
        "id": "A",
        "text": "Using the `<NavLink>` component"
      },
      {
        "id": "B",
        "text": "Using the `<Link>` component"
      },
      {
        "id": "C",
        "text": "Using the `<Route>` component"
      },
      {
        "id": "D",
        "text": "Using the `<Switch>` component"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React Router, `<Link>` là thành phần chính để tạo liên kết điều hướng. `<NavLink>` là phiên bản mở rộng có thêm styling khi active, nhưng `<Link>` là cơ bản và đúng nhất cho câu hỏi này."
  },
  {
    "id": "fer202-d02-q16",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "6\n\n(Choose 1 answer)\n\nHow do you define a dynamic route parameter in React Router?",
    "options": [
      {
        "id": "A",
        "text": "`<Route path=\"/users/:userId\" component={UserDetail} />`"
      },
      {
        "id": "B",
        "text": "`<Route path=\"/users\" component={UserDetail} />`"
      },
      {
        "id": "C",
        "text": "`<Route path=\"/users/{userId}\" component={UserDetail} />`"
      },
      {
        "id": "D",
        "text": "`<Route path=\"/users?userId=:userId\" component={UserDetail} />`"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React Router, tham số route động được định nghĩa bằng dấu hai chấm (:) trước tên tham số, ví dụ: /users/:userId. Các lựa chọn khác không đúng cú pháp hoặc không phải cách định nghĩa tham số động."
  },
  {
    "id": "fer202-d02-q17",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "7\n\n(Choose 1 answer)\n\n```javascript\nconst jsonServer = require('json-server');\nconst server = jsonServer.create();\nconst router = jsonServer.router('data.json');\nconst port = 3000;\n\nserver.use(router);\n\nserver.listen(port, () => {\n  console.log(`JSON server is running on port ${port}`);\n});\n```\n\nWhat is the above code used for?",
    "options": [
      {
        "id": "A",
        "text": "Create a dynamic server to serve JSON data."
      },
      {
        "id": "B",
        "text": "Create a dynamic web application using JSON data."
      },
      {
        "id": "C",
        "text": "Create a JSON file based on data from the server."
      },
      {
        "id": "D",
        "text": "Configure the development environment for the project using JSON."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Đoạn mã dùng json-server để khởi tạo server HTTP, đọc dữ liệu từ file data.json và phục vụ API RESTful. Nó không tạo ứng dụng web (B), không tạo file JSON (C), không cấu hình môi trường (D)."
  },
  {
    "id": "fer202-d02-q18",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "8\n\n(Choose 1 answer)\n\nWhat protocol is commonly used for client-server communication over the web?",
    "options": [
      {
        "id": "A",
        "text": "HTTP"
      },
      {
        "id": "B",
        "text": "FTP"
      },
      {
        "id": "C",
        "text": "SMTP"
      },
      {
        "id": "D",
        "text": "SSH"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HTTP (Hypertext Transfer Protocol) là giao thức phổ biến nhất dùng để truyền dữ liệu giữa client và server trên web. FTP dùng cho truyền file, SMTP cho email, SSH cho kết nối an toàn."
  },
  {
    "id": "fer202-d02-q19",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "9\n\n(Choose 1 answer)\n\nWhat is the purpose of a server in a client-server architecture?",
    "options": [
      {
        "id": "A",
        "text": "To handle user input and interactions."
      },
      {
        "id": "B",
        "text": "To display the website content."
      },
      {
        "id": "C",
        "text": "To provide data and resources to clients."
      },
      {
        "id": "D",
        "text": "To style the user interface."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong kiến trúc client-server, server có nhiệm vụ cung cấp dữ liệu và tài nguyên cho client khi được yêu cầu. Client mới là nơi xử lý đầu vào người dùng, hiển thị nội dung và giao diện — không phải server."
  },
  {
    "id": "fer202-d02-q20",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which package can be used to set up a simple JSON-based server in Node.js?",
    "options": [
      {
        "id": "A",
        "text": "express"
      },
      {
        "id": "B",
        "text": "json-server"
      },
      {
        "id": "C",
        "text": "axios"
      },
      {
        "id": "D",
        "text": "nodemon"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "json-server là package Node.js cho phép tạo server RESTful đơn giản từ file JSON. Express là framework web tổng quát, axios là HTTP client, nodemon là công cụ tự khởi động lại server khi code thay đổi."
  },
  {
    "id": "fer202-d02-q21",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Select the code snippet that correctly defines a Higher-Order Component in React using an arrow function\nwith a named function",
    "options": [
      {
        "id": "A",
        "text": "function withLogger(WrappedComponent) {\n  return class extends React.Component {\n    // HOC implementation\n  };\n}"
      },
      {
        "id": "B",
        "text": "const withLogger = (WrappedComponent) => {\n  return class extends React.Component {\n    // HOC implementation\n  };\n};"
      },
      {
        "id": "C",
        "text": "const withLogger = (WrappedComponent) => {\n  return function HOC() {\n    // HOC implementation\n  };\n};"
      },
      {
        "id": "D",
        "text": "function withLogger(WrappedComponent) {\n  return function HOC() {\n    // HOC implementation\n  }\n}"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Đây là cách đúng để định nghĩa HOC bằng arrow function với named function (trả về class component). Lựa chọn A dùng function declaration, C và D trả về function, không phải class component đúng chuẩn."
  },
  {
    "id": "fer202-d02-q22",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Select the code snippet that correctly defines a Class Component in React.",
    "options": [
      {
        "id": "A",
        "text": "class MyComponent extends React.Component {\n  render() {\n    return <div>Hello, World!</div>;\n  }\n}"
      },
      {
        "id": "B",
        "text": "function MyComponent() {\n  return <div>Hello, World!</div>;\n}"
      },
      {
        "id": "C",
        "text": "const MyComponent = () => {\n  return <div>Hello, World!</div>;\n};"
      },
      {
        "id": "D",
        "text": "const MyComponent = React.createClass({\n  render() {\n    return <div>Hello, World!</div>;\n  }\n});"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Class Component trong React được định nghĩa bằng cách kế thừa từ React.Component và có phương thức render(). Các lựa chọn B, C là Function Component, D là cách cũ (React.createClass) — không còn dùng trong React hiện đại."
  },
  {
    "id": "fer202-d02-q23",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How would you use the useState Hook to manage a counter in a React component?",
    "options": [
      {
        "id": "A",
        "text": "const [count, setCount] = useState(0);"
      },
      {
        "id": "B",
        "text": "const count = useState(0);"
      },
      {
        "id": "C",
        "text": "const count = useState(0)[0];"
      },
      {
        "id": "D",
        "text": "const [count, setCount] = useState();"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "useState Hook trong React trả về mảng gồm state và hàm cập nhật. Cú pháp đúng là destructuring: [state, setState] = useState(initialValue). Đây là cách chuẩn để quản lý counter."
  },
  {
    "id": "fer202-d02-q24",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What are the differences between useState and useReducer Hooks in React?",
    "options": [
      {
        "id": "A",
        "text": "useState is used for managing simple state, while useReducer is used for complex state and state transitions."
      },
      {
        "id": "B",
        "text": "useState is a built-in Hook, while useReducer is a custom Hook."
      },
      {
        "id": "C",
        "text": "useState is used for class components, while useReducer is used for functional components."
      },
      {
        "id": "D",
        "text": "useState is for local component state, while useReducer is for global application state."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "useState phù hợp cho trạng thái đơn giản, độc lập. useReducer phù hợp cho trạng thái phức tạp, có nhiều hành động và logic chuyển trạng thái (như Redux). Cả hai đều là Hook tích hợp sẵn, dùng cho functional component, và có thể dùng cho cả local/global state."
  },
  {
    "id": "fer202-d02-q25",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you optimize performance when using Hooks in React?",
    "options": [
      {
        "id": "A",
        "text": "By using the `useMemo` and `useCallback` Hooks."
      },
      {
        "id": "B",
        "text": "By avoiding unnecessary re-renders with the `memo` Hook."
      },
      {
        "id": "C",
        "text": "By using the `useLayoutEffect` Hook instead of `useEffect`."
      },
      {
        "id": "D",
        "text": "By using the `useDebugValue` Hook for debugging purposes."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "useMemo và useCallback giúp tránh tính toán lại và tạo lại hàm không cần thiết, giảm re-render, tối ưu hiệu năng React."
  },
  {
    "id": "fer202-d02-q26",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you configure Git with your name and email address?",
    "options": [
      {
        "id": "A",
        "text": "By running \"git config --global user.name 'Your Name'\" and \"git config --global user.email 'Your Email'\""
      },
      {
        "id": "B",
        "text": "By creating a .gitignore file"
      },
      {
        "id": "C",
        "text": "By committing changes using \"git commit -m\""
      },
      {
        "id": "D",
        "text": "By pushing changes to a remote repository"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Để cấu hình tên và email trong Git, người dùng dùng lệnh git config --global user.name và user.email. Đây là bước bắt buộc để Git ghi nhận tác giả của các commit. Các lựa chọn khác không liên quan đến cấu hình thông tin người dùng."
  },
  {
    "id": "fer202-d02-q27",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What are the key features of React?",
    "options": [
      {
        "id": "A",
        "text": "Two-way data binding"
      },
      {
        "id": "B",
        "text": "Virtual DOM"
      },
      {
        "id": "C",
        "text": "SQL database integration"
      },
      {
        "id": "D",
        "text": "Automatic styling"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "React sử dụng Virtual DOM để tối ưu hiệu suất render giao diện. Khi có thay đổi, React so sánh Virtual DOM với DOM thật và chỉ cập nhật phần thay đổi, thay vì render lại toàn bộ. Đây là đặc điểm nổi bật của React, không phải two-way binding (Angular), SQL integration hay automatic styling."
  },
  {
    "id": "fer202-d02-q28",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is React?",
    "options": [
      {
        "id": "A",
        "text": "A programming language"
      },
      {
        "id": "B",
        "text": "A JavaScript library for building user interfaces"
      },
      {
        "id": "C",
        "text": "A database management system"
      },
      {
        "id": "D",
        "text": "A web browser"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "React là một thư viện JavaScript do Facebook (nay là Meta) phát triển, dùng để xây dựng giao diện người dùng (UI), đặc biệt là các thành phần (components) có thể tái sử dụng."
  },
  {
    "id": "fer202-d02-q29",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you use a fragment in JSX?",
    "options": [
      {
        "id": "A",
        "text": "By wrapping the JSX elements with `<div>` tags"
      },
      {
        "id": "B",
        "text": "By using the shorthand syntax `<>...</>` or `<React.Fragment>...</React.Fragment>`"
      },
      {
        "id": "C",
        "text": "By creating a separate component for each element"
      },
      {
        "id": "D",
        "text": "By using the `fragment()` function"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "In JSX, fragments allow grouping elements without adding extra DOM nodes. The shorthand <>...</> or full <React.Fragment>...</React.Fragment> syntax is standard. <div> adds a node, and fragment() is not a function."
  },
  {
    "id": "fer202-d02-q30",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "30\n\n(Choose 1 answer)\n\nWhich feature of ES6 is used to iterate over the elements of an array?",
    "options": [
      {
        "id": "A",
        "text": "Spread syntax"
      },
      {
        "id": "B",
        "text": "Destructuring assignment"
      },
      {
        "id": "C",
        "text": "Arrow functions"
      },
      {
        "id": "D",
        "text": "for...of loop"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "for...of là cú pháp ES6 dùng để lặp qua các phần tử của mảng (và các đối tượng iterable khác). Spread syntax (A) dùng để trải mảng, destructuring (B) dùng để gán giá trị, arrow function (C) là hàm mũi tên — không dùng để lặp."
  },
  {
    "id": "fer202-d02-q31",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "How can you import functions or variables from an ES6 module?",
    "options": [
      {
        "id": "A",
        "text": "By using the import keyword"
      },
      {
        "id": "B",
        "text": "By using the require function"
      },
      {
        "id": "C",
        "text": "By using the export keyword"
      },
      {
        "id": "D",
        "text": "By using the include directive"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong ES6, để import hàm hoặc biến từ một module, ta dùng từ khóa 'import'. 'require' là cách của CommonJS, 'export' dùng để xuất, còn 'include' không tồn tại trong ES6 module."
  },
  {
    "id": "fer202-d02-q32",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Why use React-Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "It easier to manage the state as updates are made using React's state."
      },
      {
        "id": "B",
        "text": "It is faster and more efficient than other UI libraries."
      },
      {
        "id": "C",
        "text": "It is compatible with all browsers and devices."
      },
      {
        "id": "D",
        "text": "It is developed by Facebook and has a large community support."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "React-Bootstrap tích hợp tốt với React, cho phép quản lý state và lifecycle dễ dàng hơn so với Bootstrap thuần. Các lựa chọn khác không chính xác: không phải do Facebook phát triển, không nhanh hơn mọi thư viện, và không phải lý do chính để dùng."
  },
  {
    "id": "fer202-d02-q33",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "<Container>\n  <Row>\n    <Col sm={6} md={4}>\n      {/* Placeholder content */}\n    </Col>\n    <Col sm={6} md={8}>\n      {/* Placeholder content */}\n    </Col>\n  </Row>\n</Container>\n\nHow many columns will the code above display on a mobile screen?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trên màn hình di động (sm), mã sử dụng sm={6} cho cột đầu tiên và sm={6} cho cột thứ hai, tổng cộng 12 đơn vị (6+6), tương đương 2 cột. Bootstrap sẽ hiển thị 2 cột trên thiết bị nhỏ."
  },
  {
    "id": "fer202-d02-q34",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you install React-Bootstrap in your ReactJS project?",
    "options": [
      {
        "id": "A",
        "text": "By using npm or yarn to install the package."
      },
      {
        "id": "B",
        "text": "By downloading the React-Bootstrap files from a website."
      },
      {
        "id": "C",
        "text": "By copying and pasting the React-Bootstrap code into your project."
      },
      {
        "id": "D",
        "text": "By using a CDN link to include React-Bootstrap in your HTML file."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "React-Bootstrap được cài đặt chính thức qua npm hoặc yarn — cách chuẩn trong ReactJS. Các cách khác như CDN hay copy-paste không đảm bảo quản lý phiên bản và phụ thuộc."
  },
  {
    "id": "fer202-d02-q35",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is event pooling in React?",
    "options": [
      {
        "id": "A",
        "text": "The process of reusing event objects for performance optimization."
      },
      {
        "id": "B",
        "text": "The process of creating multiple event objects for each event."
      },
      {
        "id": "C",
        "text": "The process of cleaning up event objects after they are used."
      },
      {
        "id": "D",
        "text": "The process of handling events in a pool of event handlers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Event pooling trong React là kỹ thuật tái sử dụng đối tượng sự kiện để giảm thiểu việc tạo đối tượng mới, từ đó tối ưu hiệu suất — đặc biệt quan trọng trong các ứng dụng lớn với nhiều sự kiện."
  },
  {
    "id": "fer202-d02-q36",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the advantage of event pooling in React?",
    "options": [
      {
        "id": "A",
        "text": "It reduces memory usage by reusing event objects."
      },
      {
        "id": "B",
        "text": "It improves event handling performance by creating new event objects for each event."
      },
      {
        "id": "C",
        "text": "It simplifies event handling by providing a pool of event handlers."
      },
      {
        "id": "D",
        "text": "It allows for better management of event contexts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Event pooling trong React tái sử dụng các đối tượng sự kiện thay vì tạo mới mỗi lần, giúp giảm tiêu thụ bộ nhớ và tăng hiệu suất. Đây là cơ chế tối ưu hóa của React để tránh việc tạo và hủy đối tượng sự kiện liên tục."
  },
  {
    "id": "fer202-d02-q37",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "```javascript\nimport React, { useState } from 'react';\n\nfunction Dish({ name }) {\n  return <li>{name}</li>;\n}\n\nfunction Kitchen() {\n  const [orders, setOrders] = useState([]);\n\n  // Triggering a render (delivering the guest's order to the kitchen)\n  const addOrder = (order) => {\n    setOrders((prevOrders) => [...prevOrders, order]);\n  };\n\n  // Rendering the component (preparing the order in the kitchen)\n  const renderOrders = () => {\n    return orders.map((order, index) => <Dish key={index} name={order} />);\n  };\n\n  // Committing to the DOM (placing the order on the table)\n  return (\n    <div>\n      <h2>Orders:</h2>\n      <ul>{renderOrders()}</ul>\n    </div>\n  );\n}\n\nfunction Waiter() {\n  const handleOrder = () => {\n    // Triggering a render (delivering the guest's order to the kitchen)\n    kitchenRef.current.addOrder('Pizza');\n  };\n\n  // A reference to the Kitchen component\n  const kitchenRef = React.createRef();\n\n  // Rendering the Waiter component\n  return (\n    <div>\n      <h1>Welcome to the Restaurant!</h1>\n      <button onClick={handleOrder}>Place Order</button>\n      <Kitchen ref={kitchenRef} />\n    </div>\n  );\n}\n```\n\nWhat React lifecycle phases and patterns are demonstrated in the code above when managing restaurant orders and triggering renders?",
    "options": [
      {
        "id": "A",
        "text": "Triggering, rendering, and committing in React component lifecycle"
      },
      {
        "id": "B",
        "text": "Direct Redux store middleware dispatching"
      },
      {
        "id": "C",
        "text": "React Router data loading and route parameter handling"
      },
      {
        "id": "D",
        "text": "Server-Side Rendering with Next.js getServerSideProps"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này."
  },
  {
    "id": "fer202-d02-q38",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the main concept behind Tailwind CSS?",
    "options": [
      {
        "id": "A",
        "text": "Component-based architecture."
      },
      {
        "id": "B",
        "text": "Object-oriented programming."
      },
      {
        "id": "C",
        "text": "Utility classes."
      },
      {
        "id": "D",
        "text": "Modular CSS."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Tailwind CSS dựa trên khái niệm utility-first, cung cấp các lớp CSS nhỏ, đơn nhiệm vụ (utility classes) để xây dựng giao diện mà không cần viết CSS tùy chỉnh."
  },
  {
    "id": "fer202-d02-q39",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which of the following is a feature of Next.js?",
    "options": [
      {
        "id": "A",
        "text": "A CSS framework for styling web applications."
      },
      {
        "id": "B",
        "text": "A server-side rendering framework for React."
      },
      {
        "id": "C",
        "text": "A state management library for React applications."
      },
      {
        "id": "D",
        "text": "A testing framework for JavaScript applications."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Next.js là framework React hỗ trợ server-side rendering (SSR), giúp cải thiện SEO và hiệu suất tải trang. Không phải framework CSS, state management hay testing."
  },
  {
    "id": "fer202-d02-q40",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a utility-first CSS framework that is often used with Next.js?",
    "options": [
      {
        "id": "A",
        "text": "Bootstrap"
      },
      {
        "id": "B",
        "text": "Material-UI"
      },
      {
        "id": "C",
        "text": "Tailwind CSS"
      },
      {
        "id": "D",
        "text": "Bulma"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Tailwind CSS là framework CSS theo hướng 'utility-first', thường được dùng với Next.js để xây dựng giao diện linh hoạt và nhanh chóng. Bootstrap và Bulma là component-based, Material-UI là cho React, không phải utility-first."
  },
  {
    "id": "fer202-d02-q41",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you create a modal in Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "By using the `<modal>` HTML element."
      },
      {
        "id": "B",
        "text": "By applying the `.modal` class to the container element."
      },
      {
        "id": "C",
        "text": "By using the `.modal` class along with the `data-bs-toggle=\"modal\"` attribute."
      },
      {
        "id": "D",
        "text": "By using JavaScript to dynamically create and show modal elements."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong Bootstrap 5, modal được tạo bằng cách sử dụng class `.modal` và thuộc tính `data-bs-toggle=\"modal\"` để kích hoạt. Không dùng thẻ `<modal>` hay chỉ class `.modal` đơn lẻ."
  },
  {
    "id": "fer202-d02-q42",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "In Bootstrap, select the HTML/CSS code snippet to create a navbar with a dropdown menu containing\nsub-items.",
    "options": [
      {
        "id": "A",
        "text": "<nav class=\"navbar\">\n  <ul class=\"nav\">\n    <li class=\"nav-item\">Item 1</li>\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\naria-expanded=\"false\">Dropdown</a>\n      <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\" href=\"#\">Sub-item 1</a>\n        <a class=\"dropdown-item\" href=\"#\">Sub-item 2</a>\n      </div>\n    </li>\n  </ul>\n</nav>"
      },
      {
        "id": "B",
        "text": "<nav class=\"navbar\">\n  <ul class=\"nav\">\n    <li class=\"nav-item\">Item 1</li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">Dropdown</a>\n      <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\" href=\"#\">Sub-item 1</a>\n        <a class=\"dropdown-item\" href=\"#\">Sub-item 2</a>\n      </div>\n    </li>\n  </ul>\n</nav>"
      },
      {
        "id": "C",
        "text": "<nav class=\"navbar\">\n  <ul class=\"nav\">\n    <li class=\"nav-item\">Item 1</li>\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link\" href=\"#\">Dropdown</a>\n      <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\" href=\"#\">Sub-item 1</a>\n        <a class=\"dropdown-item\" href=\"#\">Sub-item 2</a>\n      </div>\n    </li>\n  </ul>\n</nav>"
      },
      {
        "id": "D",
        "text": "<nav class=\"navbar\">\n  <ul class=\"nav\">\n    <li class=\"nav-item\">Item 1</li>"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong Bootstrap 4/5, để tạo dropdown trong navbar, cần có class 'dropdown' trên <li>, và thuộc tính 'data-toggle=\"dropdown\"' trên <a>. Chỉ có đáp án A có đầy đủ cấu trúc này. Các đáp án khác thiếu class hoặc thuộc tính cần thiết."
  },
  {
    "id": "fer202-d02-q43",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you create a tooltip in Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "By using the `<tooltip>` HTML element."
      },
      {
        "id": "B",
        "text": "By applying the `.tooltip` class to the container element."
      },
      {
        "id": "C",
        "text": "By using the `data-bs-toggle=\"tooltip\"` attribute along with the `title` attribute"
      },
      {
        "id": "D",
        "text": "By using JavaScript to dynamically create and show tooltip elements."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "In Bootstrap 5, tooltips are initialized via data attributes: data-bs-toggle=\"tooltip\" and title=\"Tooltip text\". JavaScript initialization is optional but not required for basic use. Option C is the standard declarative method."
  },
  {
    "id": "fer202-d02-q44",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the correct way to wrap a lazy component with Suspense in React?",
    "options": [
      {
        "id": "A",
        "text": "`<Suspense loading={<Loading />}> <MyComponent /></Suspense>`"
      },
      {
        "id": "B",
        "text": "`<Suspense fallback={<Loading />}> <MyComponent /></Suspense>`"
      },
      {
        "id": "C",
        "text": "`<Suspense wait={<Loading />}> <MyComponent /></Suspense>`"
      },
      {
        "id": "D",
        "text": "`<Suspense fallback={<Loading />} loading={<MyComponent />} />`"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, để bao bọc component lazy bằng Suspense, ta dùng thuộc tính 'fallback' để hiển thị UI khi đang tải. Cú pháp đúng là <Suspense fallback={...}>. Các lựa chọn khác dùng 'loading' hoặc 'wait' là sai cú pháp."
  },
  {
    "id": "fer202-d02-q45",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "15\n\n(Choose 1 answer)\n\nWhat is the purpose of Code Splitting in web development?",
    "options": [
      {
        "id": "A",
        "text": "To combine multiple code files into a single bundle"
      },
      {
        "id": "B",
        "text": "To improve web performance by loading only necessary code"
      },
      {
        "id": "C",
        "text": "To obfuscate code for security purposes"
      },
      {
        "id": "D",
        "text": "To enhance cross-browser compatibility"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Code Splitting chia code thành các chunk nhỏ, chỉ tải khi cần → giảm thời gian tải ban đầu, cải thiện hiệu suất. Không phải để gộp (A), che giấu (C) hay tương thích trình duyệt (D). Đáp án B đúng."
  },
  {
    "id": "fer202-d02-q46",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "16\n\n(Choose 1 answer)\n\nIn React, what is the role of Suspense?",
    "options": [
      {
        "id": "A",
        "text": "To handle errors in asynchronous rendering"
      },
      {
        "id": "B",
        "text": "To control the rendering of lazy components"
      },
      {
        "id": "C",
        "text": "To manage state in functional components"
      },
      {
        "id": "D",
        "text": "To handle network requests and API calls"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Suspense trong React dùng để hiển thị fallback (như loading spinner) khi đang chờ các component được lazy load (import động) tải xong. Nó không xử lý lỗi hay quản lý state."
  },
  {
    "id": "fer202-d02-q47",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which of the following best describes Lazy Components?",
    "options": [
      {
        "id": "A",
        "text": "Components that are slow to render"
      },
      {
        "id": "B",
        "text": "Components that are loaded asynchronously"
      },
      {
        "id": "C",
        "text": "Components that are reusable across multiple projects"
      },
      {
        "id": "D",
        "text": "Components that are optimized for mobile devices"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Lazy Components là các thành phần được tải khi cần (asynchronously), giúp giảm thời gian tải ban đầu và tối ưu hiệu suất ứng dụng, đặc biệt trong React/Vue."
  },
  {
    "id": "fer202-d02-q48",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you set up Git for version control?",
    "options": [
      {
        "id": "A",
        "text": "By running \"npm install git\""
      },
      {
        "id": "B",
        "text": "By downloading Git from the official website"
      },
      {
        "id": "C",
        "text": "By using a Git GUI client"
      },
      {
        "id": "D",
        "text": "By configuring Git settings in Visual Studio Code"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Cách chuẩn để thiết lập Git là tải về từ trang web chính thức (git-scm.com), sau đó cấu hình toàn cục hoặc cục bộ."
  },
  {
    "id": "fer202-d02-q49",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of the `next/link` module in Next.js?",
    "options": [
      {
        "id": "A",
        "text": "It is used for handling form submissions."
      },
      {
        "id": "B",
        "text": "It provides client-side routing capabilities."
      },
      {
        "id": "C",
        "text": "It is responsible for server-side rendering."
      },
      {
        "id": "D",
        "text": "It enables serverless function deployment."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "`next/link` trong Next.js dùng để điều hướng giữa các trang mà không cần tải lại toàn bộ trang — tức là client-side routing. Nó không xử lý form, SSR hay serverless function."
  },
  {
    "id": "fer202-d02-q50",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of package.json in a Node.js project?",
    "options": [
      {
        "id": "A",
        "text": "It defines the project's dependencies and scripts"
      },
      {
        "id": "B",
        "text": "It contains the source code of the project"
      },
      {
        "id": "C",
        "text": "It configures the Node.js environment"
      },
      {
        "id": "D",
        "text": "It manages the project's build process"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "package.json trong Node.js dùng để khai báo thông tin dự án, các dependency cần cài đặt và các script chạy (ví dụ: start, test). Đây là tệp cấu hình chính, không chứa mã nguồn hay quản lý build trực tiếp."
  },
  {
    "id": "fer202-d03-q01",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which hook is typically used alongside useSelector to modify the Redux state?",
    "options": [
      {
        "id": "A",
        "text": "useState"
      },
      {
        "id": "B",
        "text": "useEffect"
      },
      {
        "id": "C",
        "text": "useDispatch"
      },
      {
        "id": "D",
        "text": "useContext"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong Redux với React, useSelector dùng để lấy state, còn useDispatch dùng để gửi action (dispatch) nhằm thay đổi state. useState, useEffect, useContext không liên quan trực tiếp đến Redux state modification."
  },
  {
    "id": "fer202-d03-q02",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which command installs json-server globally?",
    "options": [
      {
        "id": "A",
        "text": "npm add json-server"
      },
      {
        "id": "B",
        "text": "node install json-server"
      },
      {
        "id": "C",
        "text": "npm get json-server"
      },
      {
        "id": "D",
        "text": "npm install json-server -g"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Lệnh 'npm install json-server -g' cài đặt json-server toàn cục (global) trên hệ thống. Các lựa chọn khác không phải là cú pháp hợp lệ của npm."
  },
  {
    "id": "fer202-d03-q03",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the main role of a reducer in Redux?",
    "options": [
      {
        "id": "A",
        "text": "To fetch data from APIs"
      },
      {
        "id": "B",
        "text": "To dispatch actions to components"
      },
      {
        "id": "C",
        "text": "To update the store by returning the new state based on the action received"
      },
      {
        "id": "D",
        "text": "To create components dynamically"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Reducer trong Redux nhận action và state hiện tại, sau đó trả về state mới — đây là vai trò cốt lõi để cập nhật store. Không dùng để fetch data hay dispatch action."
  },
  {
    "id": "fer202-d03-q04",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What does the 'useSelector' hook do in React-Redux?",
    "options": [
      {
        "id": "A",
        "text": "It allows you to read values from the Redux store."
      },
      {
        "id": "B",
        "text": "It allows you to update the Redux store state."
      },
      {
        "id": "C",
        "text": "It is used to perform side effects."
      },
      {
        "id": "D",
        "text": "It dispatches actions to update the state."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "useSelector trong React-Redux dùng để trích xuất (select) dữ liệu từ store Redux. Để cập nhật state, dùng useDispatch. Không dùng cho side effect hay dispatch trực tiếp."
  },
  {
    "id": "fer202-d03-q05",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the main purpose of the `await` keyword within an `async` function?",
    "options": [
      {
        "id": "A",
        "text": "To return a new Promise object."
      },
      {
        "id": "B",
        "text": "To immediately execute the next line of code without waiting."
      },
      {
        "id": "C",
        "text": "To pause the execution of the async function until the Promise it's waiting for is resolved or rejected."
      },
      {
        "id": "D",
        "text": "To define a synchronous block of code"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Từ khóa `await` trong hàm `async` tạm dừng thực thi hàm cho đến khi Promise được giải quyết (resolve hoặc reject), giúp viết code bất đồng bộ giống đồng bộ, dễ đọc và kiểm soát luồng hơn."
  },
  {
    "id": "fer202-d03-q06",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the main advantage of using async/await over Promises?",
    "options": [
      {
        "id": "A",
        "text": "It allows for a more readable and simpler syntax for handling asynchronous code."
      },
      {
        "id": "B",
        "text": "It uses callbacks instead of promises."
      },
      {
        "id": "C",
        "text": "It only works for synchronous operations."
      },
      {
        "id": "D",
        "text": "It increases the loading time of web pages."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Async/await là cú pháp hiện đại trong JavaScript giúp viết code bất đồng bộ giống như code đồng bộ, dễ đọc và dễ bảo trì hơn so với chuỗi .then() của Promise."
  },
  {
    "id": "fer202-d03-q07",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is async/await in JavaScript?",
    "options": [
      {
        "id": "A",
        "text": "It is a JavaScript feature that makes asynchronous code look and behave like synchronous code."
      },
      {
        "id": "B",
        "text": "It is used to send data to a server without blocking the UI."
      },
      {
        "id": "C",
        "text": "It is a way to handle callback functions."
      },
      {
        "id": "D",
        "text": "It is a method to manage state in React components."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Async/await là cú pháp trong JavaScript giúp viết code bất đồng bộ trông giống như đồng bộ, dễ đọc và dễ quản lý hơn so với callback hay promise. Nó không gửi dữ liệu hay quản lý state, mà chỉ là cách viết lại logic bất đồng bộ."
  },
  {
    "id": "fer202-d03-q08",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What does a JavaScript Promise represent?",
    "options": [
      {
        "id": "A",
        "text": "A synchronous function that returns HTML"
      },
      {
        "id": "B",
        "text": "A guarantee that a function will execute twice"
      },
      {
        "id": "C",
        "text": "An object representing the eventual completion (or failure) of an asynchronous operation"
      },
      {
        "id": "D",
        "text": "A function that blocks the main thread until complete"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Promise trong JavaScript đại diện cho kết quả (thành công hoặc thất bại) của một thao tác bất đồng bộ trong tương lai, không chặn luồng chính. Đáp án đúng là C."
  },
  {
    "id": "fer202-d03-q09",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of context in React?",
    "options": [
      {
        "id": "A",
        "text": "Context allows data to be passed between components without prop drilling."
      },
      {
        "id": "B",
        "text": "Context is used to fetch data from the server."
      },
      {
        "id": "C",
        "text": "Context is used to store the component's state."
      },
      {
        "id": "D",
        "text": "Context is used to style components."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "React Context provides a way to pass data through the component tree without having to pass props down manually at every level (prop drilling). It is not primarily for fetching data, storing state (that’s useState/useReducer), or styling. Option A is the correct and standard definition."
  },
  {
    "id": "fer202-d03-q10",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "In React, what are \"props\" used for?",
    "options": [
      {
        "id": "A",
        "text": "To style components with CSS"
      },
      {
        "id": "B",
        "text": "To pass data from a child component to a parent"
      },
      {
        "id": "C",
        "text": "To pass data from a parent component to a child"
      },
      {
        "id": "D",
        "text": "To store local state in functional components"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong React, props (properties) được dùng để truyền dữ liệu từ component cha xuống component con, giúp tái sử dụng và quản lý dữ liệu một cách linh hoạt."
  },
  {
    "id": "fer202-d03-q11",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is a \"context consumer\"?",
    "options": [
      {
        "id": "A",
        "text": "A component that provides data to a context."
      },
      {
        "id": "B",
        "text": "A component that only renders static content."
      },
      {
        "id": "C",
        "text": "A component that uses data made available within a context."
      },
      {
        "id": "D",
        "text": "A component that is responsible for updating the DOM directly"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Context consumer là thành phần sử dụng dữ liệu được cung cấp bởi context (ví dụ trong React, component dùng useContext để đọc dữ liệu từ context)."
  },
  {
    "id": "fer202-d03-q12",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "Which of the following are benefits of using React Hooks in a functional component? Select all that apply.",
    "options": [
      {
        "id": "A",
        "text": "Enable functional components to have state"
      },
      {
        "id": "B",
        "text": "Automatically optimize performance"
      },
      {
        "id": "C",
        "text": "Simplify component logic"
      },
      {
        "id": "D",
        "text": "Promote reusability of logic between components"
      }
    ],
    "correctOptionIds": [
      "A",
      "C",
      "D"
    ],
    "explanation": "React Hooks cho phép component chức năng quản lý state (A), giúp logic rõ ràng và dễ bảo trì (C), và dễ tái sử dụng logic giữa các component (D). Tuy nhiên, Hooks không tự động tối ưu hiệu năng (B) — đó là nhiệm vụ của React.memo, useCallback, v.v."
  },
  {
    "id": "fer202-d03-q13",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Evaluate the benefits of using the React.lazy API for code splitting in a React application. Which of the following is NOT a benefit?",
    "options": [
      {
        "id": "A",
        "text": "Reduces the initial load time by splitting code into bundles"
      },
      {
        "id": "B",
        "text": "Ensures that all components are loaded upfront"
      },
      {
        "id": "C",
        "text": "Provides a better user experience by loading components only when needed"
      },
      {
        "id": "D",
        "text": "Allows for dynamic imports and lazy loading of components"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "React.lazy dùng để lazy load — tức là chỉ tải component khi cần, không phải tải tất cả upfront. Do đó, B là đáp án KHÔNG phải lợi ích. Các lựa chọn còn lại đều đúng: giảm thời gian tải ban đầu, trải nghiệm người dùng tốt hơn, hỗ trợ dynamic import."
  },
  {
    "id": "fer202-d03-q14",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you declare routes in React Router?",
    "options": [
      {
        "id": "A",
        "text": "Using the \\<Route\\> component"
      },
      {
        "id": "B",
        "text": "Using the \\<Link\\> component"
      },
      {
        "id": "C",
        "text": "Using the \\<Switch\\> component"
      },
      {
        "id": "D",
        "text": "Using the \\<Redirect\\> component"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React Router, routes được khai báo bằng component <Route>, xác định đường dẫn URL và component tương ứng sẽ render khi truy cập đường dẫn đó."
  },
  {
    "id": "fer202-d03-q15",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the syntax for defining a route with a parameter in React Router?",
    "options": [
      {
        "id": "A",
        "text": "`<Route path='/users/:id' />`"
      },
      {
        "id": "B",
        "text": "`<Route path='/users{?id}' />`"
      },
      {
        "id": "C",
        "text": "`<Route path='/users[?id]' />`"
      },
      {
        "id": "D",
        "text": "`<Route param='/users/:id' />`"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React Router, cú pháp đúng để định nghĩa route có tham số là sử dụng dấu hai chấm (:) trước tên tham số, ví dụ '/users/:id'. Các lựa chọn khác không phải là cú pháp hợp lệ."
  },
  {
    "id": "fer202-d03-q16",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the difference between the HTTP response codes 401 and 403?",
    "options": [
      {
        "id": "A",
        "text": "401 the request is missing valid authentication credentials, while 403 the server refuses to authorize."
      },
      {
        "id": "B",
        "text": "401 the server encountered an internal error, while 403 means the requested resource was not found."
      },
      {
        "id": "C",
        "text": "401 the request was successful, while 403 means the request was not modified."
      },
      {
        "id": "D",
        "text": "401 and 403 are interchangeable and have the same meaning."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HTTP 401 Unauthorized: yêu cầu thiếu thông tin xác thực hợp lệ. HTTP 403 Forbidden: máy chủ hiểu yêu cầu nhưng từ chối thực hiện do không có quyền truy cập. Hai mã này không giống nhau và không thể thay thế lẫn nhau."
  },
  {
    "id": "fer202-d03-q17",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is the correct way to dispatch an action using the useDispatch hook?",
    "options": [
      {
        "id": "A",
        "text": "`const dispatch = useDispatch(); dispatch('ACTION_TYPE');`"
      },
      {
        "id": "B",
        "text": "`const dispatch = useDispatch(); dispatch(() => { type: 'ACTION_TYPE' });`"
      },
      {
        "id": "C",
        "text": "`const dispatch = useDispatch(); dispatch({ type: 'ACTION_TYPE' });`"
      },
      {
        "id": "D",
        "text": "`const dispatch = useDispatch(); dispatch({ action: 'ACTION_TYPE' });`"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong Redux Toolkit/React-Redux, useDispatch trả về hàm dispatch. Để gửi action, ta gọi dispatch({ type: 'ACTION_TYPE' }) — đúng cú pháp. Các lựa chọn khác sai cú pháp hoặc không hợp lệ."
  },
  {
    "id": "fer202-d03-q18",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "Which of the following are essential steps when fetching data from an API in a React application? Select all\nthat apply",
    "options": [
      {
        "id": "A",
        "text": "Using fetch or another method to retrieve data from the API"
      },
      {
        "id": "B",
        "text": "Converting the response data into JSON format"
      },
      {
        "id": "C",
        "text": "Rendering the fetched data immediately on page load"
      },
      {
        "id": "D",
        "text": "Handling errors that may occur during the data fetching process"
      }
    ],
    "correctOptionIds": [
      "A",
      "B",
      "D"
    ],
    "explanation": "Essential steps: A (fetch data), B (parse JSON), D (error handling). C is not essential — data can be rendered after loading, not necessarily immediately."
  },
  {
    "id": "fer202-d03-q19",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you configure a Redux store using Redux Toolkit?",
    "options": [
      {
        "id": "A",
        "text": "import { createStore } from 'redux';\nconst store = createStore({ reducer: { counter: counterReducer } });"
      },
      {
        "id": "B",
        "text": "import { createStore } from 'redux';\nconst store = createStore({ counter: counterReducer });"
      },
      {
        "id": "C",
        "text": "import { configureStore } from '@reduxjs/toolkit';\nconst store = configureStore({ counter: counterReducer });"
      },
      {
        "id": "D",
        "text": "import { configureStore } from '@reduxjs/toolkit';\nconst store = configureStore({ reducer: { counter: counterReducer } });"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Redux Toolkit dùng configureStore() để tạo store, và yêu cầu truyền vào đối tượng có key 'reducer' chứa các reducer. Cú pháp trong đáp án D là đúng và chuẩn theo tài liệu Redux Toolkit."
  },
  {
    "id": "fer202-d03-q20",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is a Component in React?",
    "options": [
      {
        "id": "A",
        "text": "It is a single UI element."
      },
      {
        "id": "B",
        "text": "It is a JavaScript function."
      },
      {
        "id": "C",
        "text": "It is an HTML framework."
      },
      {
        "id": "D",
        "text": "It is a Python class."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Component trong React thường là hàm JavaScript (hoặc class), không phải element UI đơn lẻ, framework HTML hay class Python. React dùng JS/JSX để xây dựng component."
  },
  {
    "id": "fer202-d03-q21",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "How do you pass a prop named name with the value John to a child component in React?",
    "options": [
      {
        "id": "A",
        "text": "<Child prop=\"name\" value=\"John\" />"
      },
      {
        "id": "B",
        "text": "<Child propName=\"name\" propValue=\"John\" />"
      },
      {
        "id": "C",
        "text": "<Child name=\"John\" />"
      },
      {
        "id": "D",
        "text": "<Child data=\"John\" />"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong React, prop được truyền trực tiếp qua thuộc tính của component: <Child name=\"John\" />. Các cách khác như dùng 'prop', 'propName', 'data' là sai cú pháp. React không yêu cầu prefix đặc biệt cho prop."
  },
  {
    "id": "fer202-d03-q22",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How are Class Components written in React?",
    "options": [
      {
        "id": "A",
        "text": "function."
      },
      {
        "id": "B",
        "text": "class."
      },
      {
        "id": "C",
        "text": "const."
      },
      {
        "id": "D",
        "text": "component."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, Class Components được định nghĩa bằng từ khóa 'class', kế thừa từ React.Component. Ví dụ: class MyComponent extends React.Component {...}. Các lựa chọn khác như 'function' dùng cho Function Components, 'const' là khai báo biến, 'component' không phải từ khóa hợp lệ để định nghĩa component."
  },
  {
    "id": "fer202-d03-q23",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What are the differences between useState and useReducer Hooks in React?",
    "options": [
      {
        "id": "A",
        "text": "useState is used for managing simple state, while useReducer is used for complex state and state transitions."
      },
      {
        "id": "B",
        "text": "useState is a built-in Hook, while useReducer is a custom Hook."
      },
      {
        "id": "C",
        "text": "useState is used for class components, while useReducer is used for functional components."
      },
      {
        "id": "D",
        "text": "useState is for local component state, while useReducer is for global application state."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "useState phù hợp state đơn giản, useReducer phù hợp state phức tạp với nhiều action và logic chuyển trạng thái. useReducer không phải custom Hook, cả hai đều dùng cho functional component."
  },
  {
    "id": "fer202-d03-q24",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is a typical use case for creating a custom hook in React?",
    "options": [
      {
        "id": "A",
        "text": "To avoid using state in functional components"
      },
      {
        "id": "B",
        "text": "To share reusable logic between components"
      },
      {
        "id": "C",
        "text": "To handle side-effects like fetching data"
      },
      {
        "id": "D",
        "text": "To directly manipulate DOM elements"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Custom hook trong React được thiết kế để tái sử dụng logic giữa các component, giúp tránh lặp code và tăng tính modul. Các lựa chọn khác như xử lý side-effect hay thao tác DOM thường dùng useEffect hay ref, không phải mục đích chính của custom hook."
  },
  {
    "id": "fer202-d03-q25",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is the correct way to use useContext to access a context value?",
    "options": [
      {
        "id": "A",
        "text": "const value = MyContext.useContext();"
      },
      {
        "id": "B",
        "text": "const value = useContext(MyContext);"
      },
      {
        "id": "C",
        "text": "const value = useContextProvider(MyContext);"
      },
      {
        "id": "D",
        "text": "const value = MyContext.useContextProvider();"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, useContext là hook dùng để truy cập giá trị từ context. Cú pháp đúng là useContext(MyContext), không phải gọi qua đối tượng context hay dùng tên sai như useContextProvider."
  },
  {
    "id": "fer202-d03-q26",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the correct command to initialize a Git repository in an existing project directory?",
    "options": [
      {
        "id": "A",
        "text": "`git start`"
      },
      {
        "id": "B",
        "text": "`git init`"
      },
      {
        "id": "C",
        "text": "`git new`"
      },
      {
        "id": "D",
        "text": "`git create`"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Lệnh `git init` được dùng để khởi tạo một repository Git mới trong thư mục hiện tại. Đây là lệnh chuẩn và duy nhất đúng trong các lựa chọn."
  },
  {
    "id": "fer202-d03-q27",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the main purpose of a front-end web UI framework?",
    "options": [
      {
        "id": "A",
        "text": "To handle back-end data storage"
      },
      {
        "id": "B",
        "text": "To provide ready-to-use UI components for building web interfaces"
      },
      {
        "id": "C",
        "text": "To manage the database"
      },
      {
        "id": "D",
        "text": "To create server-side logic"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Framework UI front-end (như Bootstrap, React, Vue) cung cấp các thành phần giao diện sẵn có giúp phát triển giao diện web nhanh và nhất quán."
  },
  {
    "id": "fer202-d03-q28",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which of the following is NOT considered a popular front-end framework?",
    "options": [
      {
        "id": "A",
        "text": "React"
      },
      {
        "id": "B",
        "text": "Angular"
      },
      {
        "id": "C",
        "text": "Django"
      },
      {
        "id": "D",
        "text": "Vue.js"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Django là một framework backend (server-side) viết bằng Python, không phải front-end. Các lựa chọn còn lại: React, Angular, Vue.js đều là framework front-end phổ biến dùng để xây dựng giao diện người dùng. Do đó, Django là đáp án đúng cho câu hỏi 'không phải front-end framework'."
  },
  {
    "id": "fer202-d03-q29",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Understand the role of the render method in JSX. Which of the following best explains its use?",
    "options": [
      {
        "id": "A",
        "text": "The render method is used to compile JSX into JavaScript."
      },
      {
        "id": "B",
        "text": "The render method is used to convert JSX into HTML and render it to the DOM."
      },
      {
        "id": "C",
        "text": "The render method is used to manage state in React components."
      },
      {
        "id": "D",
        "text": "The render method is used to handle routing in React applications."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, phương thức render() chuyển đổi JSX thành HTML thực tế và đưa nó vào DOM để hiển thị giao diện người dùng. Đây là bước thiết yếu trong vòng đời của component React."
  },
  {
    "id": "fer202-d03-q30",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is JSX?",
    "options": [
      {
        "id": "A",
        "text": "A JavaScript library for building user interfaces"
      },
      {
        "id": "B",
        "text": "A syntax extension for JavaScript that allows you to write HTML-like code"
      },
      {
        "id": "C",
        "text": "A React component that renders HTML elements"
      },
      {
        "id": "D",
        "text": "A JavaScript framework for building web applications"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "JSX là phần mở rộng cú pháp của JavaScript, cho phép viết mã giống HTML trong React. Nó không phải thư viện, framework, hay component — mà là cú pháp được React sử dụng để mô tả giao diện người dùng."
  },
  {
    "id": "fer202-d03-q31",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Fill in the blank in this ES6 code to correctly use destructuring assignment for extracting 'name' and 'age' from\nan object:\nconst person = { name: 'John', age: 30 };\nconst { _____ } = person;\nconsole.log(name, age);",
    "options": [
      {
        "id": "A",
        "text": "name, age"
      },
      {
        "id": "B",
        "text": "prop: name, prop: age"
      },
      {
        "id": "C",
        "text": "key: name, value: age"
      },
      {
        "id": "D",
        "text": "extract: name, extract: age"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Destructuring assignment trong ES6: const { name, age } = person; để trích xuất trực tiếp các thuộc tính name và age từ object person."
  },
  {
    "id": "fer202-d03-q32",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which component would you use to display grouped content such as a title, body text, and an image in React-Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "<Container>"
      },
      {
        "id": "B",
        "text": "<Form>"
      },
      {
        "id": "C",
        "text": "<Card>"
      },
      {
        "id": "D",
        "text": "<Alert>"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong React-Bootstrap, component <Card> được thiết kế để hiển thị nội dung nhóm như tiêu đề, văn bản và hình ảnh trong một khối có kiểu dáng nhất quán. Các component khác như <Container>, <Form>, <Alert> không phù hợp cho mục đích này."
  },
  {
    "id": "fer202-d03-q33",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Why use React-Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "It easier to manage the state as updates are made using React's state."
      },
      {
        "id": "B",
        "text": "It is faster and more efficient than other UI libraries."
      },
      {
        "id": "C",
        "text": "It is compatible with all browsers and devices."
      },
      {
        "id": "D",
        "text": "It is developed by Facebook and has a large community support."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "React-Bootstrap integrates Bootstrap’s UI components with React’s component model, allowing state management via React’s state and props. This is its primary advantage over plain Bootstrap. Other options are misleading: React-Bootstrap isn’t inherently faster (B), not uniquely compatible (C), and not developed by Facebook (D — that’s React itself)."
  },
  {
    "id": "fer202-d03-q34",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "How do you import and use a Button component from React-Bootstrap 5?",
    "options": [
      {
        "id": "A",
        "text": "import React from 'react';\nimport Button from 'react-bootstrap/Button';\n\nfunction Demo() {\n  return (\n    <Button variant=\"primary\">\n  );\n}\n\nexport default Demo;"
      },
      {
        "id": "B",
        "text": "import React from 'react';\nimport Button from 'react-bootstrap/Button';\n\nfunction Demo() {\n  return (\n    <button variant=\"primary\"> Primary Button</button>\n  );\n}\n\nexport default Demo;"
      },
      {
        "id": "C",
        "text": "import React from 'react';\nimport Button from 'react-bootstrap/Button';\n\nfunction Demo() {\n  return (\n    <Button variant=\"primary\">Primary Button</Button>\n  );\n}\n\nexport default Demo;"
      },
      {
        "id": "D",
        "text": "import React from 'react';\nimport Button from 'react-bootstrap/Button';\n\nfunction Demo() {\n  return (\n    <button variant=\"primary\"/>\n  );\n}\n\nexport default Demo;"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Cú pháp đúng: import Button từ 'react-bootstrap/Button', dùng thẻ <Button> với thuộc tính variant và nội dung giữa thẻ. Đáp án A thiếu nội dung, B dùng thẻ <button> thay vì <Button>, D thiếu nội dung và đóng thẻ sai."
  },
  {
    "id": "fer202-d03-q35",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "How does state behave when it is set in a React component, as described by \"State as a snapshot\"?",
    "options": [
      {
        "id": "A",
        "text": "It immediately changes the state variable you already have."
      },
      {
        "id": "B",
        "text": "It only changes the state after the component unmounts"
      },
      {
        "id": "C",
        "text": "Setting it does not change the state variable you already have, but instead triggers a re-render"
      },
      {
        "id": "D",
        "text": "It directly modifies the DOM without triggering a re-render"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "In React, state is a snapshot — setting state doesn’t mutate the current variable but queues a re-render with the new value. It doesn’t modify DOM directly or wait for unmount."
  },
  {
    "id": "fer202-d03-q36",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "According to the \"Render and Commit\" process, what are the three steps involved in displaying a component on screen?",
    "options": [
      {
        "id": "A",
        "text": "Initializing state, updating props, and re-rendering."
      },
      {
        "id": "B",
        "text": "Triggering a render, rendering the component, and committing to the DOM."
      },
      {
        "id": "C",
        "text": "Creating JSX, adding styles, and responding to events"
      },
      {
        "id": "D",
        "text": "Defining a component, mounting, and unmounting."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Quy trình \"Render and Commit\" trong React gồm 3 bước: (1) Kích hoạt render (trigger render), (2) Render component (tạo virtual DOM), (3) Commit vào DOM thật. Đây là mô tả chuẩn trong tài liệu React."
  },
  {
    "id": "fer202-d03-q37",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "How can you pass parameters to an event handler in React? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Using the `bind()` method."
      },
      {
        "id": "B",
        "text": "Using arrow functions."
      },
      {
        "id": "C",
        "text": "Using the `addEventListener()` method."
      },
      {
        "id": "D",
        "text": "Using the `this` keyword."
      }
    ],
    "correctOptionIds": [
      "A",
      "B"
    ],
    "explanation": "Trong React, có thể truyền tham số cho event handler bằng: (A) bind() để bind this và tham số; (B) arrow function để bao bọc hàm và truyền tham số. C sai vì addEventListener không dùng trong JSX React. D sai vì this không phải cách truyền tham số."
  },
  {
    "id": "fer202-d03-q38",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of Accordions in Bootstrap's JavaScript components?",
    "options": [
      {
        "id": "A",
        "text": "To display static text content"
      },
      {
        "id": "B",
        "text": "To provide a complex form validation mechanism"
      },
      {
        "id": "C",
        "text": "To extend the Collapse plugin for toggling visibility of content sections"
      },
      {
        "id": "D",
        "text": "To manage application-wide routing"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Accordion trong Bootstrap là thành phần JavaScript mở rộng từ Collapse, cho phép mở/đóng các phần nội dung theo nhóm, thường dùng để tổ chức thông tin dạng FAQ hoặc tab. Không dùng để hiển thị văn bản tĩnh, validate form hay quản lý route."
  },
  {
    "id": "fer202-d03-q39",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "What would happen if you didn't include the class=\"form-control\" in your \\<input\\> element?",
    "options": [
      {
        "id": "A",
        "text": "The input would not be submitted with the form"
      },
      {
        "id": "B",
        "text": "The input would fail client-side validation"
      },
      {
        "id": "C",
        "text": "The input field would revert to the browser's default styles"
      },
      {
        "id": "D",
        "text": "The input field would become non-responsive"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong Bootstrap, class 'form-control' được dùng để định dạng các trường nhập liệu (input) theo phong cách Bootstrap. Nếu không có class này, trường nhập liệu sẽ không được áp dụng CSS của Bootstrap và sẽ quay về kiểu mặc định của trình duyệt. Không ảnh hưởng đến chức năng gửi form hay validation."
  },
  {
    "id": "fer202-d03-q40",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you create a modal in Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "By using the `<modal>` HTML element."
      },
      {
        "id": "B",
        "text": "By applying the `.modal` class to the container element."
      },
      {
        "id": "C",
        "text": "By using the `.modal` class along with the `data-bs-toggle=\"modal\"` attribute."
      },
      {
        "id": "D",
        "text": "By using JavaScript to dynamically create and show modal elements."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong Bootstrap 5, modal được tạo bằng cách dùng class .modal và thuộc tính data-bs-toggle=\"modal\" để kích hoạt. Không dùng thẻ <modal> hay chỉ class .modal đơn lẻ. JavaScript là cách thay thế, không phải cách tiêu chuẩn."
  },
  {
    "id": "fer202-d03-q41",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you wrap a lazy component with Suspense in React?",
    "options": [
      {
        "id": "A",
        "text": "Using the wrap prop of the Suspense component"
      },
      {
        "id": "B",
        "text": "Using the fallback prop of the Suspense component"
      },
      {
        "id": "C",
        "text": "Using the lazy prop of the Suspense component"
      },
      {
        "id": "D",
        "text": "Using the component prop of the Suspense component"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, để bao bọc một component lazy bằng Suspense, ta dùng thuộc tính `fallback` để hiển thị nội dung chờ khi component đang được tải. Ví dụ: <Suspense fallback={<div>Loading...</div>}>."
  },
  {
    "id": "fer202-d03-q42",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which two recent additions to React allow the complete integration of code splitting into applications?",
    "options": [
      {
        "id": "A",
        "text": "`useState()` and `useEffect()`"
      },
      {
        "id": "B",
        "text": "`React.memo()` and `useCallback()`"
      },
      {
        "id": "C",
        "text": "`lazy()` API and `Suspense` components"
      },
      {
        "id": "D",
        "text": "`ReactDOM.createRoot()` and `BrowserRouter`."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "React hỗ trợ chia nhỏ mã (code splitting) thông qua `React.lazy()` để tải component theo yêu cầu và `Suspense` để xử lý trạng thái chờ tải. Các hook như `useState`, `useEffect`, `useCallback`, `memo` không liên quan trực tiếp đến code splitting."
  },
  {
    "id": "fer202-d03-q43",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the main benefit of creating reusable components in React?",
    "options": [
      {
        "id": "A",
        "text": "To make code easier to debug"
      },
      {
        "id": "B",
        "text": "To allow reusing the same code across multiple components"
      },
      {
        "id": "C",
        "text": "To increase the performance of the app"
      },
      {
        "id": "D",
        "text": "To handle state management in a centralized manner"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Lợi ích chính của việc tạo component có thể tái sử dụng trong React là cho phép tái sử dụng mã nguồn giữa nhiều component khác nhau, giúp giảm lặp code, tăng khả năng bảo trì và nhất quán giao diện. Các lựa chọn khác như debug, hiệu năng hay quản lý state không phải mục tiêu chính của tính năng này."
  },
  {
    "id": "fer202-d03-q44",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the primary benefit of using React's lazy() API for code splitting?",
    "options": [
      {
        "id": "A",
        "text": "It reduces the overall bundle size of an application by removing unused code."
      },
      {
        "id": "B",
        "text": "It enhances the user experience by providing a visual fallback while components are being loaded."
      },
      {
        "id": "C",
        "text": "It simplifies the process of fetching data from an API."
      },
      {
        "id": "D",
        "text": "It improves initial load performance by deferring non-critical component loading."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "React.lazy() cho phép chia nhỏ mã (code splitting) và chỉ tải component khi cần, giúp cải thiện hiệu suất tải ban đầu. Không giảm kích thước tổng thể (A), không phải để hiển thị fallback (B), và không liên quan đến fetch API (C)."
  },
  {
    "id": "fer202-d03-q45",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Find the bug in the following React code:\n\n```\nconst [items, setItems] = useState([]);\nconst addItem = () => {\n    items.push('new');\n    setItems(items);\n};\n```",
    "options": [
      {
        "id": "A",
        "text": "useState should be useReducer"
      },
      {
        "id": "B",
        "text": "use setItems([...items, 'new'])"
      },
      {
        "id": "C",
        "text": "push is not a valid method"
      },
      {
        "id": "D",
        "text": "setItems must take a string"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, không nên mutate state trực tiếp bằng push. Thay vào đó, phải tạo mảng mới với spread operator để React nhận biết sự thay đổi và re-render. setItems([...items, 'new']) là cách đúng."
  },
  {
    "id": "fer202-d03-q46",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "In Next.js, what mechanism primarily determines the routes in an application?",
    "options": [
      {
        "id": "A",
        "text": "Explicit configuration in a central routes.json file."
      },
      {
        "id": "B",
        "text": "File-system routing, where routes are determined by the structure of files"
      },
      {
        "id": "C",
        "text": "Dynamic route declarations using React Router"
      },
      {
        "id": "D",
        "text": "Server-side API endpoints only"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Next.js sử dụng cơ chế định tuyến dựa trên hệ thống tệp: mỗi tệp trong thư mục app/ hoặc pages/ tương ứng với một route cụ thể."
  },
  {
    "id": "fer202-d03-q47",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Why would a React developer choose to use \"Axios\"?",
    "options": [
      {
        "id": "A",
        "text": "To render React components faster"
      },
      {
        "id": "B",
        "text": "To manage component state globally"
      },
      {
        "id": "C",
        "text": "To make HTTP requests to APIs"
      },
      {
        "id": "D",
        "text": "To build reusable hooks"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Axios is a popular JavaScript library for making HTTP requests from the browser or Node.js. It is not for rendering, state management, or hooks — those are handled by React core or libraries like Redux or custom hooks."
  },
  {
    "id": "fer202-d03-q48",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Analyze the use of JavaScript expressions in JSX. What is valid syntax?",
    "options": [
      {
        "id": "A",
        "text": "$2+2$"
      },
      {
        "id": "B",
        "text": "$[2+2]$"
      },
      {
        "id": "C",
        "text": "$\\{2+2\\}$"
      },
      {
        "id": "D",
        "text": "$(2+2)$"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong JSX, biểu thức JavaScript được bao trong dấu ngoặc nhọn { }, ví dụ: {2+2} → hiển thị 4. Các cú pháp khác như $...$, [...] hoặc (...) không hợp lệ trong JSX."
  },
  {
    "id": "fer202-d03-q49",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "Select the benefits of using React.memo and useMemo in React applications. (Choose 2 correct answers)",
    "options": [
      {
        "id": "A",
        "text": "Prevent unnecessary component re-renders"
      },
      {
        "id": "B",
        "text": "Automatically synchronize component state with global state"
      },
      {
        "id": "C",
        "text": "Guarantee object references don't change during re-rendering"
      },
      {
        "id": "D",
        "text": "Simplify the process of context management"
      }
    ],
    "correctOptionIds": [
      "A",
      "C"
    ],
    "explanation": "React.memo ngăn re-render không cần thiết cho component khi props không thay đổi. useMemo đảm bảo giá trị được memoize (lưu lại) và tham chiếu không đổi giữa các lần render, giúp tối ưu hiệu suất. Không liên quan đến global state hay context management."
  },
  {
    "id": "fer202-d03-q50",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What does the \"await\" keyword do when used inside an \"async\" function?",
    "options": [
      {
        "id": "A",
        "text": "It immediately executes the next function"
      },
      {
        "id": "B",
        "text": "It pauses the execution until the Promise resolves or rejects"
      },
      {
        "id": "C",
        "text": "It logs the result to the console"
      },
      {
        "id": "D",
        "text": "It converts a string into a Promise"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Từ khóa 'await' trong hàm async tạm dừng thực thi cho đến khi Promise hoàn thành (resolve hoặc reject), sau đó tiếp tục với kết quả trả về."
  },
  {
    "id": "fer202-d04-q01",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is React?",
    "options": [
      {
        "id": "A",
        "text": "A programming language"
      },
      {
        "id": "B",
        "text": "A web browser"
      },
      {
        "id": "C",
        "text": "A database management system"
      },
      {
        "id": "D",
        "text": "A JavaScript library for building user interfaces"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "React là một thư viện JavaScript do Facebook (nay là Meta) phát triển, dùng để xây dựng giao diện người dùng (UI), đặc biệt là các ứng dụng web một trang (SPA). Không phải ngôn ngữ lập trình, trình duyệt hay hệ quản trị cơ sở dữ liệu."
  },
  {
    "id": "fer202-d04-q02",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "<br>\n```javascript\nimport React, { Component } from 'react';\n\nclass Counter extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      count: 0\n    };\n  }\n\n  incrementCount() {\n    // TODO: Increase the count state by 1\n  }\n\n  render() {\n    return (\n      <div>\n        <p>Count: {this.state.count}</p>\n        <button onClick={this.incrementCount}>Increment</button>\n      </div>\n    );\n  }\n}\n\nexport default Counter;\n```\n\nIn the code above, how can we increase the value of the count state by 1 when the user clicks the \"Increment\" button?",
    "options": [
      {
        "id": "A",
        "text": "Call the method `this.setState({ count: this.state.count + 1 })` inside the incrementCount method."
      },
      {
        "id": "B",
        "text": "Call the method `this.state.count += 1` inside the incrementCount method."
      },
      {
        "id": "C",
        "text": "Use `this.setState(count + 1)` inside the incrementCount method."
      },
      {
        "id": "D",
        "text": "Assign a new value to count using the assignment operator (=) inside the incrementCount method."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "In React, state must be updated using `this.setState()` to trigger re-render. Direct assignment (B, D) or incorrect syntax (C) won’t work. A is the correct and idiomatic way."
  },
  {
    "id": "fer202-d04-q03",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you configure Tailwind CSS in a Next.js project?",
    "options": [
      {
        "id": "A",
        "text": "By using a CDN link in the HTML file."
      },
      {
        "id": "B",
        "text": "By installing the Tailwind CSS package and creating a configuration file."
      },
      {
        "id": "C",
        "text": "By importing a CSS file directly in the component."
      },
      {
        "id": "D",
        "text": "By installing a Tailwind CSS plugin for Next.js."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong Next.js, để cấu hình Tailwind CSS, bạn cần cài đặt gói tailwindcss và các phụ thuộc liên quan (postcss, autoprefixer), sau đó tạo tệp tailwind.config.js và postcss.config.js. Cách dùng CDN hoặc import trực tiếp CSS không phải là cách cấu hình chính thức cho Tailwind trong Next.js."
  },
  {
    "id": "fer202-d04-q04",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which HTTP method is typically used to retrieve data from a server?",
    "options": [
      {
        "id": "A",
        "text": "POST"
      },
      {
        "id": "B",
        "text": "DELETE"
      },
      {
        "id": "C",
        "text": "PUT"
      },
      {
        "id": "D",
        "text": "GET"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "HTTP GET dùng để lấy dữ liệu từ server. POST dùng để gửi dữ liệu, PUT để cập nhật, DELETE để xóa. Đây là chuẩn RESTful API cơ bản."
  },
  {
    "id": "fer202-d04-q05",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of arrow functions in ES6?",
    "options": [
      {
        "id": "A",
        "text": "To bind the value of this inside a function"
      },
      {
        "id": "B",
        "text": "To create self-executing functions"
      },
      {
        "id": "C",
        "text": "To declare asynchronous functions"
      },
      {
        "id": "D",
        "text": "To define functions with a shorter syntax"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Arrow function trong ES6 giúp viết hàm ngắn gọn hơn, không có từ khóa function, và tự động bind this. Không dùng để tạo hàm tự thực thi hay khai báo hàm bất đồng bộ."
  },
  {
    "id": "fer202-d04-q06",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of the next/link module in Next.js?",
    "options": [
      {
        "id": "A",
        "text": "It provides client-side routing capabilities."
      },
      {
        "id": "B",
        "text": "It is responsible for server-side rendering."
      },
      {
        "id": "C",
        "text": "It enables serverless function deployment."
      },
      {
        "id": "D",
        "text": "It is used for handling form submissions."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "The next/link module in Next.js enables client-side navigation between pages without full page reloads, improving performance and user experience. It’s the standard way to create internal links in Next.js applications."
  },
  {
    "id": "fer202-d04-q07",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "",
    "options": [
      {
        "id": "A",
        "text": "To manage state in functional components"
      },
      {
        "id": "B",
        "text": "To control the rendering of lazy components"
      },
      {
        "id": "C",
        "text": "To handle network requests and API calls"
      },
      {
        "id": "D",
        "text": "To handle errors in asynchronous rendering"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Hook trong React (ví dụ: useState, useEffect) được dùng để quản lý state và side effect trong functional components, thay thế cho class components. Các lựa chọn khác không phải mục đích chính của hook."
  },
  {
    "id": "fer202-d04-q08",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "",
    "options": [
      {
        "id": "A",
        "text": "What is the purpose of a container component in React?"
      },
      {
        "id": "B",
        "text": "To provide a visual representation of data"
      },
      {
        "id": "C",
        "text": "To handle UI rendering and user interactions"
      },
      {
        "id": "D",
        "text": "To encapsulate reusable UI components\n\nD. To fetch the data and passing to child component"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Trong React, component container (hay smart component) có nhiệm vụ quản lý state, gọi API để lấy dữ liệu và truyền dữ liệu đó xuống các component con (presentational component) để render UI. Đây là cách tách biệt logic và giao diện theo mô hình container/presentational."
  },
  {
    "id": "fer202-d04-q09",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "<br>\nimport { Button, Checkbox, Listbox } from 'react-bootstrap';\n<br>\n<div>\n<br>\n<Button variant=\"primary\">Primary Button</Button>\n<br>\n<Checkbox label=\"Check me\" />\n<br>\n<Listbox options={['Option 1', 'Option 2', 'Option 3']} />\n<br>\n</div>\n<br>\nWhat components does the code above display?\n<br><br>",
    "options": [
      {
        "id": "A",
        "text": "Grid, Button, ListBox\n<br><br>"
      },
      {
        "id": "B",
        "text": "Button, Radiobox, Listbox\n<br><br>"
      },
      {
        "id": "C",
        "text": "Checkbox, Listbox, Button\n<br><br>"
      },
      {
        "id": "D",
        "text": "Button, Checkbox, Tabs"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Code import và sử dụng đúng 3 component: Button, Checkbox, Listbox. Không có Grid, Radiobox hay Tabs. Do đó, đáp án C là chính xác nhất, liệt kê đúng các component được hiển thị."
  },
  {
    "id": "fer202-d04-q10",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "import { Button, Checkbox, Listbox } from 'react-bootstrap';\n// ...\n<div>\n  <Button variant=\"primary\">Primary Button</Button>\n  <Checkbox label=\"Check me\" />\n  <Listbox options={['Option 1', 'Option 2', 'Option 3']} />\n</div>\nWhat components does the code above display?",
    "options": [
      {
        "id": "A",
        "text": "Grid, Button, ListBox"
      },
      {
        "id": "B",
        "text": "Button, Radiobox, Listbox"
      },
      {
        "id": "C",
        "text": "Checkbox, Listbox, Button"
      },
      {
        "id": "D",
        "text": "Button, Checkbox, Tabs"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "The code imports and renders Button, Checkbox, and Listbox components. The order in the JSX doesn’t change the components displayed. So C correctly lists all three components shown."
  },
  {
    "id": "fer202-d04-q11",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "",
    "options": [
      {
        "id": "A",
        "text": "When you want to use Redux DevTools to track the state."
      },
      {
        "id": "B",
        "text": "When you want to connect the Redux store to a React component."
      },
      {
        "id": "C",
        "text": "When you want to split a reducer into smaller reducers."
      },
      {
        "id": "D",
        "text": "When you want to manage actions in the Redux application."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "The question implies a context of React-Redux. The correct answer is connecting the Redux store to a React component — typically done via `connect()` or `useSelector/useDispatch`. Other options describe Redux architecture but not the direct purpose of connecting components."
  },
  {
    "id": "fer202-d04-q12",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the correct way to declare PropTypes for a component in React?",
    "options": [
      {
        "id": "A",
        "text": "Component.props = { ... }"
      },
      {
        "id": "B",
        "text": "Component.typeCheck = { ... }"
      },
      {
        "id": "C",
        "text": "Component.propTypes = { ... }"
      },
      {
        "id": "D",
        "text": "Component.checkProps = { ... }"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong React, PropTypes được khai báo qua thuộc tính static 'propTypes' của component. Cú pháp đúng là Component.propTypes = { ... }, dùng để kiểm tra kiểu props truyền vào."
  },
  {
    "id": "fer202-d04-q13",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "In React 18, how can you pass additional arguments to an event handler?",
    "options": [
      {
        "id": "A",
        "text": "By using the `event.data` property"
      },
      {
        "id": "B",
        "text": "By using the `bind` method when binding the event handler"
      },
      {
        "id": "C",
        "text": "By using the `event.target` property"
      },
      {
        "id": "D",
        "text": "React 18 does not support passing additional arguments to event handlers"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này."
  },
  {
    "id": "fer202-d04-q14",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you declare routes in React Router?",
    "options": [
      {
        "id": "A",
        "text": "Using the `<Redirect>` component"
      },
      {
        "id": "B",
        "text": "Using the `<Switch>` component"
      },
      {
        "id": "C",
        "text": "Using the `<Link>` component"
      },
      {
        "id": "D",
        "text": "Using the `<Route>` component"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Trong React Router, routes được khai báo bằng component <Route> để ánh xạ URL với component tương ứng. <Switch> dùng để chọn route duy nhất, <Link> để điều hướng, <Redirect> để chuyển hướng."
  },
  {
    "id": "fer202-d04-q15",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you conditionally render content in JSX?",
    "options": [
      {
        "id": "A",
        "text": "By using the if statement"
      },
      {
        "id": "B",
        "text": "By using the switch statement"
      },
      {
        "id": "C",
        "text": "By using the for loop"
      },
      {
        "id": "D",
        "text": "By using the temary operator `{condition ? trueContent : falseContent}`"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Trong JSX, không dùng if/switch/for trực tiếp trong return. Ternary operator là cách phổ biến để render điều kiện: {condition ? <A /> : <B />}."
  },
  {
    "id": "fer202-d04-q16",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[illegible] are 50 questions, and your progress of answering is\n\nAnswer (Choose 1 answer)",
    "options": [
      {
        "id": "A",
        "text": "`<Suspense fallback={<Loading />} loading={<MyComponent />} />`"
      },
      {
        "id": "B",
        "text": "`<Suspense loading={<Loading />}> <MyComponent /></Suspense>`"
      },
      {
        "id": "C",
        "text": "`<Suspense wait={<Loading />}> <MyComponent /></Suspense>`"
      },
      {
        "id": "D",
        "text": "`<Suspense fallback={<Loading />}> <MyComponent /></Suspense>`"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Trong React, thành phần <Suspense> sử dụng thuộc tính 'fallback' để hiển thị UI khi thành phần con đang tải. Cú pháp đúng là <Suspense fallback={...}>. Các tùy chọn khác như 'loading' hay 'wait' không tồn tại trong API chính thức của React."
  },
  {
    "id": "fer202-d04-q17",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you include Tailwind CSS in a project?",
    "options": [
      {
        "id": "A",
        "text": "Link the Tailwind CSS stylesheet in the HTML file."
      },
      {
        "id": "B",
        "text": "Use the @import rule in a CSS file to import Tailwind CSS."
      },
      {
        "id": "C",
        "text": "Import the Tailwind CSS file in the JavaScript code."
      },
      {
        "id": "D",
        "text": "Add Tailwind CSS as a dependency in the package.json file."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Tailwind CSS được tích hợp vào dự án thông qua npm/yarn bằng cách thêm vào package.json, sau đó import trong file CSS hoặc JS. Cách này cho phép sử dụng các tính năng như JIT, purge, và tùy chỉnh. Các cách khác như link stylesheet hay @import không phải phương pháp chính thức hoặc hiệu quả nhất."
  },
  {
    "id": "fer202-d04-q18",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is Tailwind CSS?",
    "options": [
      {
        "id": "A",
        "text": "A utility-first CSS framework for building responsive web interfaces."
      },
      {
        "id": "B",
        "text": "A JavaScript framework for building single-page applications."
      },
      {
        "id": "C",
        "text": "A programming language used for backend development."
      },
      {
        "id": "D",
        "text": "A database management system for storing CSS styles."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Tailwind CSS is a utility-first framework that allows developers to build responsive UIs by applying pre-defined classes directly in HTML. It is not a JS framework, programming language, or database system."
  },
  {
    "id": "fer202-d04-q19",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What does ES6 stand for?",
    "options": [
      {
        "id": "A",
        "text": "Efficient Syntax Language 6"
      },
      {
        "id": "B",
        "text": "ECMAScript 6"
      },
      {
        "id": "C",
        "text": "Enhanced Scripting Language 6"
      },
      {
        "id": "D",
        "text": "Extensible Stylesheet Language 6"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "ES6 là viết tắt của ECMAScript 6, phiên bản tiêu chuẩn của ngôn ngữ JavaScript được phát hành năm 2015, mang lại nhiều tính năng mới như arrow function, let/const, class, module, v.v."
  },
  {
    "id": "fer202-d04-q20",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "",
    "options": [
      {
        "id": "A",
        "text": "How do you create navigation links in React Router?"
      },
      {
        "id": "B",
        "text": "Using the `<Link>` component"
      },
      {
        "id": "C",
        "text": "Using the `<Route>` component"
      },
      {
        "id": "D",
        "text": "Using the `<NavLink>` component\n\nD. Using the `<Switch>` component"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này."
  },
  {
    "id": "fer202-d04-q21",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Select the code snippet that correctly defines a component with state in React.",
    "options": [
      {
        "id": "A",
        "text": "`const MyComponent = React.createClass({`\n`getInitialState() {`\n`return { count: 0 };`\n`},`\n\n`render() {`\n`return <div>{this.state.count}</div>;`\n`}`\n`});`"
      },
      {
        "id": "B",
        "text": "`function MyComponent() {`\n`const [count, setCount] = React.useState(0);`\n\n`return <div>{count}</div>;`\n`}`"
      },
      {
        "id": "C",
        "text": "`class MyComponent extends React.Component {`\n`constructor(props) {`\n`super(props);`\n`this.state = { count: 0 };`\n`}`\n\n`render() {`\n`return <div>{this.state.count}</div>;`\n`}`\n`}`"
      },
      {
        "id": "D",
        "text": "`const MyComponent = () => {`\n`const [count, setCount] = React.useState(0);`\n\n`return <div>{count}</div>;`\n`};`"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Câu B đúng vì sử dụng React Hook useState — cách hiện đại và phổ biến để quản lý state trong functional component. Câu A lỗi vì React.createClass đã bị loại bỏ. Câu C đúng về mặt cú pháp class component nhưng không phải lựa chọn tối ưu nhất hiện nay. Câu D cũng đúng về mặt kỹ thuật nhưng không được chọn vì B là ví dụ chuẩn mực hơn trong ngữ cảnh câu hỏi."
  },
  {
    "id": "fer202-d04-q22",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What are PropTypes in React?",
    "options": [
      {
        "id": "A",
        "text": "They are used for manipulating the component's state."
      },
      {
        "id": "B",
        "text": "They are used for creating component classes."
      },
      {
        "id": "C",
        "text": "They are used for defining the types of component props."
      },
      {
        "id": "D",
        "text": "They are used for handling events in React."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "PropTypes in React are used to validate the types of props passed to components, helping catch bugs during development. Not for state, classes, or events."
  },
  {
    "id": "fer202-d04-q23",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a common use case for using Redux in a React application?",
    "options": [
      {
        "id": "A",
        "text": "Managing authentication and user sessions"
      },
      {
        "id": "B",
        "text": "Handling form validation and input tracking"
      },
      {
        "id": "C",
        "text": "Implementing server-side rendering in React"
      },
      {
        "id": "D",
        "text": "Styling and layout of React components"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Redux thường dùng để quản lý state toàn cục trong React, đặc biệt là authentication, user sessions, giỏ hàng... Không dùng cho form validation (thường dùng local state), SSR hay styling."
  },
  {
    "id": "fer202-d04-q24",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the command to start json-server and specify the JSON file to be served?",
    "options": [
      {
        "id": "A",
        "text": "json-server start"
      },
      {
        "id": "B",
        "text": "node server.js"
      },
      {
        "id": "C",
        "text": "npm start"
      },
      {
        "id": "D",
        "text": "npx json-server --watch data.json"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "The correct command to start json-server and serve a specific JSON file is 'npx json-server --watch data.json'. This watches the file for changes and serves REST API endpoints."
  },
  {
    "id": "fer202-d04-q25",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which class is used to create a form input with a validation state in Bootstrap 5?",
    "options": [
      {
        "id": "A",
        "text": "`.input-group`"
      },
      {
        "id": "B",
        "text": "`.form-check`"
      },
      {
        "id": "C",
        "text": "`.form-control`"
      },
      {
        "id": "D",
        "text": "`.form-validation`"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong Bootstrap 5, lớp .form-control được dùng để tạo các trường nhập liệu (input) có thể tích hợp trạng thái xác thực (validation) như .is-valid hoặc .is-invalid. Các lớp khác không phục vụ mục đích này."
  },
  {
    "id": "fer202-d04-q26",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "",
    "options": [
      {
        "id": "A",
        "text": "B"
      },
      {
        "id": "C",
        "text": "D\n\n```\nimport React, { useState } from 'react';\n\nfunction Dish({ name }) {\n  return <li>{name}</li>;\n}\n\nfunction Kitchen() {\n  const [orders, setOrders] = useState([]);\n\n  // Triggering a render (delivering the guest's order to the kitchen)\n  const addOrder = (order) => {\n    setOrders((prevOrders) => [...prevOrders, order]);\n  };\n\n  // Rendering the component (preparing the order in the kitchen)\n  const renderOrders = () => {\n    return orders.map((order, index) => <Dish key={index} name={order} />);\n  };\n\n  // Committing to the DOM (placing the order on the table)\n  return (\n    <div>\n      <h2>Orders:</h2>\n      <ul>{renderOrders()}</ul>\n    </div>\n  );\n}\n\nfunction Waiter() {\n  const handleOrder = () => {\n    // Triggering a render (delivering the guest's order to the kitchen)\n    kitchenRef.current.addOrder('Pizza');\n  };\n\n  // A reference to the Kitchen component\n  const kitchenRef = React.createRef();\n\n  // Rendering the Waiter component\n  return (\n    <div>\n      <h1>Welcome to the Restaurant!</h1>\n      <button onClick={handleOrder}>Place Order</button>\n      <Kitchen ref={kitchenRef} />\n    </div>\n  );\n}\n```"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này."
  },
  {
    "id": "fer202-d04-q27",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What happens if a prop fails the validation defined by a simple property validator?",
    "options": [
      {
        "id": "A",
        "text": "The prop will be automatically converted to the expected type."
      },
      {
        "id": "B",
        "text": "An error will be thrown during runtime."
      },
      {
        "id": "C",
        "text": "The component will continue to function normally."
      },
      {
        "id": "D",
        "text": "The validation will be bypassed, and the prop will be accepted."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Khi prop không vượt qua validation trong React (hoặc framework tương tự), hệ thống sẽ ném lỗi runtime để cảnh báo nhà phát triển. Không tự động chuyển kiểu (A), không bỏ qua (D), và không tiếp tục bình thường (C) vì validation nhằm đảm bảo tính đúng đắn."
  },
  {
    "id": "fer202-d04-q28",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Select the code snippet that correctly defines a Class Component in React.",
    "options": [
      {
        "id": "A",
        "text": "class MyComponent extends React.Component {\n  render() {\n    return <div>Hello, World!</div>;\n  }\n}"
      },
      {
        "id": "B",
        "text": "function MyComponent() {\n  return <div>Hello, World!</div>;\n}"
      },
      {
        "id": "C",
        "text": "const MyComponent = () => {\n  return <div>Hello, World!</div>;\n};"
      },
      {
        "id": "D",
        "text": "const MyComponent = React.createClass({\n  render() {\n    return <div>Hello, World!</div>;\n  }\n});"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Class Component trong React phải kế thừa từ React.Component và có phương thức render(). Các lựa chọn B, C là Function Component, D dùng API cũ không còn phổ biến."
  },
  {
    "id": "fer202-d04-q29",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a utility-first CSS framework that is often used with Next.js?",
    "options": [
      {
        "id": "A",
        "text": "Bulma"
      },
      {
        "id": "B",
        "text": "Bootstrap"
      },
      {
        "id": "C",
        "text": "Tailwind CSS"
      },
      {
        "id": "D",
        "text": "Material-UI"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Tailwind CSS là framework CSS theo kiểu utility-first, được thiết kế để tích hợp tốt với các framework hiện đại như Next.js. Nó cung cấp các lớp CSS nhỏ, có thể kết hợp linh hoạt thay vì các component sẵn có như Bootstrap hay Bulma."
  },
  {
    "id": "fer202-d04-q30",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which React Hook is used to handle side effects in functional components?",
    "options": [
      {
        "id": "A",
        "text": "useReducer"
      },
      {
        "id": "B",
        "text": "useEffect"
      },
      {
        "id": "C",
        "text": "useContext"
      },
      {
        "id": "D",
        "text": "useState"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "useEffect là React Hook dùng để xử lý các side effect trong component chức năng, như gọi API, đăng ký sự kiện, hoặc thay đổi DOM. Các hook khác như useState, useContext, useReducer không dùng để xử lý side effect."
  },
  {
    "id": "fer202-d04-q31",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of the Redux middleware in React applications?",
    "options": [
      {
        "id": "A",
        "text": "To define the structure of the Redux store"
      },
      {
        "id": "B",
        "text": "To handle asynchronous actions and side effects"
      },
      {
        "id": "C",
        "text": "To connect React components to the Redux store"
      },
      {
        "id": "D",
        "text": "To manage component hierarchy"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Redux middleware cho phép xử lý các hành động bất đồng bộ (như gọi API) và các side effect (tác động phụ) trước khi chúng đến reducer, ví dụ: redux-thunk, redux-saga."
  },
  {
    "id": "fer202-d04-q32",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which command is used to install the required dependencies for a React project?",
    "options": [
      {
        "id": "A",
        "text": "git lOne"
      },
      {
        "id": "B",
        "text": "npm install"
      },
      {
        "id": "C",
        "text": "npm start"
      },
      {
        "id": "D",
        "text": "create-react-app"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Lệnh 'npm install' được dùng để cài đặt các dependency cần thiết cho dự án React (hoặc bất kỳ dự án Node.js nào). Các lựa chọn khác không đúng: 'git lOne' không tồn tại, 'npm start' dùng để chạy dự án, 'create-react-app' dùng để khởi tạo dự án mới."
  },
  {
    "id": "fer202-d04-q33",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of the action parameter in a Redux reducer function?",
    "options": [
      {
        "id": "A",
        "text": "To handle asynchronous operations"
      },
      {
        "id": "B",
        "text": "To describe the action being dispatched to the reducer"
      },
      {
        "id": "C",
        "text": "To specify the initial state of the reducer"
      },
      {
        "id": "D",
        "text": "To define the structure of the Redux store"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong Redux, tham số 'action' trong reducer dùng để mô tả hành động được gửi đến reducer, bao gồm type và payload, giúp reducer quyết định cách cập nhật state."
  },
  {
    "id": "fer202-d04-q34",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which of the following is a feature of Next.js?",
    "options": [
      {
        "id": "A",
        "text": "A CSS framework for styling web applications."
      },
      {
        "id": "B",
        "text": "A testing framework for JavaScript applications."
      },
      {
        "id": "C",
        "text": "A server-side rendering framework for React."
      },
      {
        "id": "D",
        "text": "A state management library for React applications."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Next.js là framework React hỗ trợ server-side rendering (SSR), giúp cải thiện SEO và hiệu suất tải trang. Nó không phải là framework CSS, testing hay state management."
  },
  {
    "id": "fer202-d04-q35",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you define a lazy component in React?",
    "options": [
      {
        "id": "A",
        "text": "Using the createLazyComponent method from the React package"
      },
      {
        "id": "B",
        "text": "Importing the component with the lazy keyword"
      },
      {
        "id": "C",
        "text": "Wrapping the component in the LazyComponent higher-order component"
      },
      {
        "id": "D",
        "text": "Using the lazy function from the React library"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Trong React, dùng `React.lazy(() => import('./MyComponent'))` để định nghĩa component lazy. Không có `createLazyComponent` hay `LazyComponent HOC`. Từ khóa `lazy` không dùng trực tiếp để import."
  },
  {
    "id": "fer202-d04-q36",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "",
    "options": [
      {
        "id": "A",
        "text": "Using the lazy prop of the Suspense component"
      },
      {
        "id": "B",
        "text": "Using the wrap prop of the Suspense component"
      },
      {
        "id": "C",
        "text": "Using the fallback prop of the Suspense component"
      },
      {
        "id": "D",
        "text": "Using the component prop of the Suspense component"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong React, Suspense sử dụng prop `fallback` để hiển thị nội dung khi component đang tải. Không có prop `lazy`, `wrap`, hay `component` cho mục đích này."
  },
  {
    "id": "fer202-d04-q37",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "In Bootstrap, select the HTML/CSS code snippet to create a navbar with a dropdown menu containing sub-items.",
    "options": [
      {
        "id": "A",
        "text": "`<nav class=\"navbar\">`\n`<ul class=\"nav\">`\n  `<li class=\"nav-item\">Item 1</li>`\n  `<li class=\"nav-item dropdown\">`\n    `<a class=\"nav-link dropdown-toggle\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>`\n    `<div class=\"dropdown-menu\">`\n      `<a class=\"dropdown-item\" href=\"#\">Sub-item 1</a>`\n      `<a class=\"dropdown-item\" href=\"#\">Sub-item 2</a>`\n    `</div>`\n  `</li>`\n`</ul>`\n`</nav>`"
      },
      {
        "id": "B",
        "text": "`<nav class=\"navbar\">`\n`<ul class=\"nav\">`\n  `<li class=\"nav-item\">Item 1</li>`\n  `<li class=\"nav-item\">`\n    `<a class=\"nav-link\" href=\"#\">Dropdown</a>`\n    `<div class=\"dropdown-menu\">`\n      `<a class=\"dropdown-item\" href=\"#\">Sub-item 1</a>`\n      `<a class=\"dropdown-item\" href=\"#\">Sub-item 2</a>`\n    `</div>`\n  `</li>`\n`</ul>`\n`</nav>`"
      },
      {
        "id": "C",
        "text": "`<nav class=\"navbar\">`\n`<ul class=\"nav\">`\n  `<li class=\"nav-item\">Item 1</li>`\n  `<li class=\"nav-item dropdown\">`\n    `<a class=\"nav-link dropdown-toggle\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>`\n    `<div class=\"dropdown-content\">`\n      `<a class=\"dropdown-item\" href=\"#\">Sub-item 1</a>`\n      `<a class=\"dropdown-item\" href=\"#\">Sub-item 2</a>`\n    `</div>`\n  `</li>`\n`</ul>`\n`</nav>`"
      },
      {
        "id": "D",
        "text": "`<nav class=\"navbar\">`\n`<ul class=\"nav\">`\n  `<li class=\"nav-item\">Item 1</li>`\n  `<li class=\"nav-item dropdown\">`\n    `<a class=\"nav-link\" href=\"#\">Dropdown</a>`"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Bootstrap 4+ requires the dropdown menu to be wrapped in a div with class=\"dropdown-menu\", and the toggle link must have data-toggle=\"dropdown\" and aria attributes. Option A correctly implements this. Option B lacks dropdown class, C uses wrong class \"dropdown-content\", D lacks menu structure."
  },
  {
    "id": "fer202-d04-q38",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "",
    "options": [
      {
        "id": "A",
        "text": "What is the purpose of a router in web development?"
      },
      {
        "id": "B",
        "text": "To handle database operations"
      },
      {
        "id": "C",
        "text": "To style the user interface"
      },
      {
        "id": "D",
        "text": "To handle navigation between different pages\n\nD. To manage user authentication"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này."
  },
  {
    "id": "fer202-d04-q39",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is Node.js?",
    "options": [
      {
        "id": "A",
        "text": "A CSS framework"
      },
      {
        "id": "B",
        "text": "A programming language"
      },
      {
        "id": "C",
        "text": "A JavaScript runtime"
      },
      {
        "id": "D",
        "text": "A web browser"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Node.js là môi trường thực thi JavaScript bên ngoài trình duyệt, cho phép chạy JavaScript trên máy chủ, dùng nền tảng V8 của Google. Nó không phải ngôn ngữ, framework CSS hay trình duyệt."
  },
  {
    "id": "fer202-d04-q40",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is a Component in React?",
    "options": [
      {
        "id": "A",
        "text": "It is a JavaScript function."
      },
      {
        "id": "B",
        "text": "It is an HTML framework."
      },
      {
        "id": "C",
        "text": "It is a Python class."
      },
      {
        "id": "D",
        "text": "It is a single UI element."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Trong React, Component là một phần tử giao diện người dùng (UI element) có thể tái sử dụng, có thể là hàm hoặc lớp JavaScript, nhưng định nghĩa chính xác nhất ở đây là 'single UI element'."
  },
  {
    "id": "fer202-d04-q41",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What are the key features of Next.js?",
    "options": [
      {
        "id": "A",
        "text": "Database integration, code debugging, and form validation."
      },
      {
        "id": "B",
        "text": "CSS styling, version control, and error handling."
      },
      {
        "id": "C",
        "text": "Server-side rendering, Static Site Generation, Image Optimization, Built-in Routing."
      },
      {
        "id": "D",
        "text": "Package management, command-line interface, and testing framework."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Next.js là framework React nổi bật với các tính năng cốt lõi: SSR, SSG, tối ưu hình ảnh, và routing tích hợp. Các lựa chọn khác liệt kê các công cụ phổ biến nhưng không phải đặc trưng riêng của Next.js."
  },
  {
    "id": "fer202-d04-q42",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "☐ A How do you create a new Next.js project?\n\n☐ B",
    "options": [
      {
        "id": "A",
        "text": "Use the create-next-app command-line tool.\n☐ C"
      },
      {
        "id": "B",
        "text": "Install the Next.js package globally with npm.\n☐ D"
      },
      {
        "id": "C",
        "text": "LOne the Next.js starter template from GitHub."
      },
      {
        "id": "D",
        "text": "Use the npm init command and manually configure the project."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này."
  },
  {
    "id": "fer202-d04-q43",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "☐ A How can you create a new React application using Create React App?\n\n☐ B",
    "options": [
      {
        "id": "A",
        "text": "By Loning a Git repository\n\n☐ C"
      },
      {
        "id": "B",
        "text": "By using an online code editor\n\n☐ D"
      },
      {
        "id": "C",
        "text": "By running \"npm create-react-app my-app\""
      },
      {
        "id": "D",
        "text": "By downloading a ZIP file from the official website"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này."
  },
  {
    "id": "fer202-d04-q44",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "In ReactJS with Bootstrap, select the JSX code snippet to create a button with a blue background and white text color.",
    "options": [
      {
        "id": "A",
        "text": "import React from 'react';\nimport { Button } from 'react-bootstrap';\n\nconst MyButton = () => {\n  return (\n    <Button variant=\"primary\" className=\"btn-primary\">\n      My Button\n    </Button>\n  );\n};\n\nexport default MyButton;"
      },
      {
        "id": "B",
        "text": "import React from 'react';\nimport { Button } from 'react-bootstrap';\n\nconst MyButton = () => {\n  return (\n    <Button variant=\"primary\" className=\"btn btn-primary\">\n      My Button\n    </Button>\n  );\n};\n\nexport default MyButton;"
      },
      {
        "id": "C",
        "text": "import React from 'react';\nimport { Button } from 'react-bootstrap';\n\nconst MyButton = () => {\n  return (\n    <Button variant=\"primary\" className=\"bg-primary text-white\">\n      My Button\n    </Button>\n  );\n};\n\nexport default MyButton;"
      },
      {
        "id": "D",
        "text": "import React from 'react';\nimport { Button } from 'react-bootstrap';\n\nconst MyButton = () => {\n  return (\n[illegible]"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong ReactJS với Bootstrap, để tạo nút có nền xanh và chữ trắng, dùng className=\"bg-primary text-white\" là chính xác nhất. Option C đúng vì nó không lặp class không cần thiết như 'btn btn-primary' (B) hay dùng class không chuẩn (A). D bị cắt nên không hợp lệ."
  },
  {
    "id": "fer202-d04-q45",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you install React-Bootstrap in your ReactJS project?",
    "options": [
      {
        "id": "A",
        "text": "By using npm or yarn to install the package."
      },
      {
        "id": "B",
        "text": "By copying and pasting the React-Bootstrap code into your project."
      },
      {
        "id": "C",
        "text": "By using a CDN link to include React-Bootstrap in your HTML file."
      },
      {
        "id": "D",
        "text": "By downloading the React-Bootstrap files from a website."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "React-Bootstrap được cài đặt chính thức qua npm hoặc yarn — hai package manager phổ biến trong ReactJS. Các phương pháp khác như CDN hay copy-paste không đảm bảo quản lý phiên bản và phụ thuộc."
  },
  {
    "id": "fer202-d04-q46",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of a server in a client-server architecture?",
    "options": [
      {
        "id": "A",
        "text": "To display the website content."
      },
      {
        "id": "B",
        "text": "To provide data and resources to clients."
      },
      {
        "id": "C",
        "text": "To style the user interface."
      },
      {
        "id": "D",
        "text": "To handle user input and interactions."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong kiến trúc client-server, server có nhiệm vụ lưu trữ, xử lý và cung cấp dữ liệu/tài nguyên cho các client khi được yêu cầu. Các lựa chọn khác là chức năng của client hoặc trình duyệt."
  },
  {
    "id": "fer202-d04-q47",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which HTTP status code indicates a successful response from a server?",
    "options": [
      {
        "id": "A",
        "text": "302 Found"
      },
      {
        "id": "B",
        "text": "200 OK"
      },
      {
        "id": "C",
        "text": "404 Not Found"
      },
      {
        "id": "D",
        "text": "500 Internal Server Error"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Mã trạng thái HTTP 200 OK cho biết yêu cầu đã được xử lý thành công. Các mã khác: 302 là chuyển hướng, 404 là không tìm thấy, 500 là lỗi máy chủ — đều không phải là phản hồi thành công."
  },
  {
    "id": "fer202-d04-q48",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "import React, { Component } from 'react';\n\nclass Form extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      name: '',\n      email: ''\n    };\n  }\n\n  handleInputChange(event) {\n    // TODO: Update the corresponding state property based on user input\n  }\n\n  render() {\n    return (\n      <form>\n        <label>\n          Name:\n          <input\n            type=\"text\"\n            value={this.state.name}\n            onChange={this.handleInputChange}\n          />\n        </label>\n        <label>\n          Email:\n          <input\n            type=\"email\"\n            value={this.state.email}\n            onChange={this.handleInputChange}\n          />\n        </label>\n      </form>\n    );\n  }\n}\n\nexport default Form;\n\nIn the code above, how can we update the value of the name or email state based on the user input in the respective input fields?",
    "options": [
      {
        "id": "A",
        "text": "Assign a new value to name or email using the assignment operator (=) inside the handleInputChange method."
      },
      {
        "id": "B",
        "text": "Call the method this.setState({ name: event.target.value }) or this.setState({ email: event.target.value }) inside the handleInputChange method."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, để cập nhật state khi người dùng nhập liệu, phải dùng this.setState() để đảm bảo React biết state đã thay đổi và re-render component. Gán trực tiếp bằng = không hợp lệ."
  },
  {
    "id": "fer202-d04-q49",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[illegible] are 50 questions, and your progress of answering is\n\nAnswer | (Choose 1 answer)\n--- | ---\n☐ A | Why use React-Bootstrap?\n☐ B |",
    "options": [
      {
        "id": "A",
        "text": "It is developed by Facebook and has a large community support.\n☐ C |"
      },
      {
        "id": "B",
        "text": "It easier to manage the state as updates are made using React's state\n☐ D |"
      },
      {
        "id": "C",
        "text": "It is compatible with all browsers and devices.\n |"
      },
      {
        "id": "D",
        "text": "It is faster and more efficient than other UI libraries."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này."
  },
  {
    "id": "fer202-d04-q50",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How would you create a custom Hook in React?",
    "options": [
      {
        "id": "A",
        "text": "By wrapping a class component with a functional component."
      },
      {
        "id": "B",
        "text": "By using the createCustomHook() function."
      },
      {
        "id": "C",
        "text": "By extending the React.Component class."
      },
      {
        "id": "D",
        "text": "By defining a function that uses other built-in Hooks."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Custom Hook trong React là một hàm bình thường bắt đầu bằng 'use' và sử dụng các Hook có sẵn (như useState, useEffect...). Không cần extend class hay dùng hàm đặc biệt. Đáp án D đúng với cách tạo custom Hook theo tài liệu chính thức của React."
  },
  {
    "id": "fer202-d05-q01",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which of the following best describes a reducer in Redux?",
    "options": [
      {
        "id": "A",
        "text": "A function that triggers actions in response to user interactions"
      },
      {
        "id": "B",
        "text": "A component that manages the application's state"
      },
      {
        "id": "C",
        "text": "A function that specifies how the application's state changes in response to actions"
      },
      {
        "id": "D",
        "text": "A middleware that handles asynchronous operations in Redux"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Reducer trong Redux là hàm thuần (pure function) nhận state hiện tại và action, trả về state mới. Nó không trigger action hay xử lý async — đó là vai trò của action creator và middleware."
  },
  {
    "id": "fer202-d05-q02",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Describe the Redux flow process when an action is dispatched.",
    "options": [
      {
        "id": "A",
        "text": "Action is dispatched -> Middleware -> Reducer -> Store -> Component."
      },
      {
        "id": "B",
        "text": "Component dispatches action -> Reducer -> Middleware -> Store."
      },
      {
        "id": "C",
        "text": "Middleware dispatches action -> Reducer -> Store -> Component."
      },
      {
        "id": "D",
        "text": "Reducer dispatches action -> Middleware -> Component -> Store.\""
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "In Redux, the flow is: Action dispatched → Middleware (optional) → Reducer updates state → Store holds new state → Component re-renders. Option A correctly represents this sequence."
  },
  {
    "id": "fer202-d05-q03",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a common use case for using Redux in a React application?",
    "options": [
      {
        "id": "A",
        "text": "Managing authentication and user sessions"
      },
      {
        "id": "B",
        "text": "Styling and layout of React components"
      },
      {
        "id": "C",
        "text": "Handling form validation and input tracking"
      },
      {
        "id": "D",
        "text": "Implementing server-side rendering in React"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Redux thường được dùng để quản lý state toàn cục trong React, bao gồm trạng thái đăng nhập, phiên người dùng — phù hợp với 'Managing authentication and user sessions'. Các lựa chọn khác như styling hay form validation thường dùng state local hoặc thư viện khác."
  },
  {
    "id": "fer202-d05-q04",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of the Redux middleware in React applications?",
    "options": [
      {
        "id": "A",
        "text": "To handle asynchronous actions and side effects"
      },
      {
        "id": "B",
        "text": "To define the structure of the Redux store"
      },
      {
        "id": "C",
        "text": "To connect React components to the Redux store"
      },
      {
        "id": "D",
        "text": "To manage component hierarchy"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Redux middleware (như Redux Thunk, Saga) dùng để xử lý các hành động bất đồng bộ và side effects (gọi API, log, v.v.). Không dùng để định nghĩa store hay kết nối component — đó là vai trò của store và connect."
  },
  {
    "id": "fer202-d05-q05",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you configure Tailwind CSS in a Next.js project?",
    "options": [
      {
        "id": "A",
        "text": "By importing a CSS file directly in the component."
      },
      {
        "id": "B",
        "text": "By installing the Tailwind CSS package and creating a configuration file."
      },
      {
        "id": "C",
        "text": "By using a CDN link in the HTML file."
      },
      {
        "id": "D",
        "text": "By installing a Tailwind CSS plugin for Next.js."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Để cấu hình Tailwind CSS trong Next.js, bạn cần cài đặt gói tailwindcss, postcss, autoprefixer, sau đó tạo file tailwind.config.js và postcss.config.js, rồi import @tailwind directives trong file CSS. Đây là cách chuẩn được tài liệu chính thức hướng dẫn."
  },
  {
    "id": "fer202-d05-q06",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of the `next/link` module in Next.js?",
    "options": [
      {
        "id": "A",
        "text": "It is used for handling form submissions."
      },
      {
        "id": "B",
        "text": "It provides client-side routing capabilities."
      },
      {
        "id": "C",
        "text": "It is responsible for server-side rendering."
      },
      {
        "id": "D",
        "text": "It enables serverless function deployment."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "`next/link` trong Next.js dùng để điều hướng giữa các trang mà không cần tải lại toàn bộ trang — tức là client-side routing. Nó không xử lý form, SSR hay serverless function."
  },
  {
    "id": "fer202-d05-q07",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "```javascript\nimport React, { Component } from 'react';\n\nclass Counter extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      count: 0\n    };\n  }\n\n  incrementCount() {\n    // TODO: Increase the count state by 1\n  }\n\n  render() {\n    return (\n      <div>\n        <p>Count: {this.state.count}</p>\n        <button onClick={this.incrementCount}>Increment</button>\n      </div>\n    );\n  }\n}\n\nexport default Counter;\n```\n\nIn the code above, how can we increase the value of the count state by 1 when the user clicks the \"Increment\" button?",
    "options": [
      {
        "id": "A",
        "text": "Call the method `this.setState({ count: this.state.count + 1 })` inside the incrementCount method."
      },
      {
        "id": "B",
        "text": "Assign a new value to count using the assignment operator (`=`) inside the incrementCount method."
      },
      {
        "id": "C",
        "text": "Call the method `this.state.count += 1` inside the incrementCount method."
      },
      {
        "id": "D",
        "text": "Use `this.setState(count + 1)` inside the incrementCount method."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, để cập nhật state, phải dùng `this.setState()` với đối tượng chứa giá trị mới. Gán trực tiếp (`=`) hoặc dùng `this.state.count += 1` không thay đổi state và không kích hoạt re-render. `this.setState(count + 1)` sai cú pháp vì không truyền object."
  },
  {
    "id": "fer202-d05-q08",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is a prop in React used for?",
    "options": [
      {
        "id": "A",
        "text": "It defines the internal state of a component."
      },
      {
        "id": "B",
        "text": "It specifies the visual appearance of a component."
      },
      {
        "id": "C",
        "text": "It enables communication and data transfer between components."
      },
      {
        "id": "D",
        "text": "It handles user interactions and events."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "In React, props (short for properties) are used to pass data and event handlers from parent to child components, enabling component communication and reusability. They are read-only and do not manage internal state (that’s state’s role)."
  },
  {
    "id": "fer202-d05-q09",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "```\nimport React, { Component } from 'react';\n\nclass Form extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      name: '',\n      email: ''\n    };\n  }\n\n  handleInputChange(event) {\n    // TODO: Update the corresponding state property based on user input\n  }\n\n  render() {\n    return (\n      <form>\n        <label>\n          Name:\n          <input\n            type=\"text\"\n            value={this.state.name}\n            onChange={this.handleInputChange}\n          />\n        </label>\n        <label>\n          Email:\n          <input\n            type=\"email\"\n            value={this.state.email}\n            onChange={this.handleInputChange}\n          />\n        </label>\n      </form>\n    );\n  }\n}\n\nexport default Form;\n```\nIn the code above, how can we update the value of the name or email state based on the user input in the\nrespective input fields?\n\nA. Call the method this.setState({ name: event.target.value }) or this.setState({ email: event.target.value })\ninside the handleInputChange method.",
    "options": [
      {
        "id": "A",
        "text": "Call this.setState({ [event.target.name]: event.target.value }) inside handleInputChange"
      },
      {
        "id": "B",
        "text": "Directly mutate this.state.name = event.target.value without setState"
      },
      {
        "id": "C",
        "text": "Call this.forceUpdate() after direct assignment"
      },
      {
        "id": "D",
        "text": "Reassign this.state directly inside render()"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này."
  },
  {
    "id": "fer202-d05-q10",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you declare PropTypes for a prop that is an array of integers?",
    "options": [
      {
        "id": "A",
        "text": "prop: PropTypes.arrayOf(PropTypes.number)"
      },
      {
        "id": "B",
        "text": "prop: PropTypes.arrayOf(PropTypes.integer)"
      },
      {
        "id": "C",
        "text": "prop: PropTypes.array(PropTypes.number)"
      },
      {
        "id": "D",
        "text": "prop: PropTypes.array(PropTypes.integer)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, PropTypes.arrayOf(PropTypes.number) là cách đúng để khai báo prop là mảng các số (bao gồm cả integer). Không có PropTypes.integer trong thư viện chuẩn."
  },
  {
    "id": "fer202-d05-q11",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Write a custom property validator in React for a prop called \"email\" that should be a valid email address.",
    "options": [
      {
        "id": "A",
        "text": "email: PropTypes.string"
      },
      {
        "id": "B",
        "text": "email: PropTypes.email"
      },
      {
        "id": "C",
        "text": "email: PropTypes.string.isRequired"
      },
      {
        "id": "D",
        "text": "email: function(props, propName, componentName)"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Custom validator in React PropTypes is a function that returns error if invalid. PropTypes.email doesn’t exist; string/isRequired don’t validate format. Option D is correct for custom email validation."
  },
  {
    "id": "fer202-d05-q12",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What happens if a prop fails the validation defined by a simple property validator?",
    "options": [
      {
        "id": "A",
        "text": "An error will be thrown during runtime."
      },
      {
        "id": "B",
        "text": "The prop will be automatically converted to the expected type."
      },
      {
        "id": "C",
        "text": "The component will continue to function normally."
      },
      {
        "id": "D",
        "text": "The validation will be bypassed, and the prop will be accepted."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Khi prop không vượt qua validation trong React (hoặc các framework tương tự), hệ thống sẽ ném lỗi runtime để cảnh báo nhà phát triển, giúp phát hiện sớm lỗi dữ liệu đầu vào không hợp lệ."
  },
  {
    "id": "fer202-d05-q13",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "3\n\n(Choose 1 answer)\n\nWhat is the purpose of the exact prop in a Route component?",
    "options": [
      {
        "id": "A",
        "text": "It specifies the component to render for a specific route"
      },
      {
        "id": "B",
        "text": "It ensures that the route matches the URL exactly, without partial matching"
      },
      {
        "id": "C",
        "text": "It defines a redirect to another route"
      },
      {
        "id": "D",
        "text": "It enables code splitting for the route component"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React Router, thuộc tính `exact` đảm bảo route chỉ khớp khi URL trùng chính xác, tránh việc route con khớp nhầm với route cha. Ví dụ: `/about` không khớp với `/about/me` nếu có `exact`."
  },
  {
    "id": "fer202-d05-q14",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "4\n\n(Choose 1 answer)\n\nHow do you declare routes in React Router?",
    "options": [
      {
        "id": "A",
        "text": "Using the `<Route>` component"
      },
      {
        "id": "B",
        "text": "Using the `<Link>` component"
      },
      {
        "id": "C",
        "text": "Using the `<Switch>` component"
      },
      {
        "id": "D",
        "text": "Using the `<Redirect>` component"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React Router, routes được khai báo bằng component <Route>, dùng để ánh xạ URL với component tương ứng. Các component khác như <Link>, <Switch>, <Redirect> hỗ trợ điều hướng hoặc xử lý logic, nhưng không dùng để khai báo route chính."
  },
  {
    "id": "fer202-d05-q15",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "5\n\n(Choose 1 answer)\n\nWhich code snippet demonstrates how to handle a route parameter in React Router?",
    "options": [
      {
        "id": "A",
        "text": "`<Route path=\"/users/:id\" component={UserDetail} />`"
      },
      {
        "id": "B",
        "text": "`<Link to=\"/users\">Users</Link>`"
      },
      {
        "id": "C",
        "text": "`import { BrowserRouter as Router, Route } from \"react-router-dom\";`"
      },
      {
        "id": "D",
        "text": "`import { Link, Route } from \"react-router-dom\";`"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React Router, route parameter được định nghĩa bằng dấu : (vd: :id) trong path. Khi truy cập /users/123, giá trị 123 sẽ được truyền vào component UserDetail qua props.match.params.id. Các lựa chọn khác chỉ import hoặc link tĩnh, không xử lý tham số route."
  },
  {
    "id": "fer202-d05-q16",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "6\n\n(Choose 1 answer)\n\nWhat protocol is commonly used for client-server communication over the web?",
    "options": [
      {
        "id": "A",
        "text": "HTTP"
      },
      {
        "id": "B",
        "text": "FTP"
      },
      {
        "id": "C",
        "text": "SMTP"
      },
      {
        "id": "D",
        "text": "SSH"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HTTP (Hypertext Transfer Protocol) là giao thức tiêu chuẩn dùng để truyền tải dữ liệu giữa client và server trên web. FTP dùng cho truyền tệp, SMTP cho email, SSH cho kết nối an toàn từ xa."
  },
  {
    "id": "fer202-d05-q17",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "7\n\n(Choose 1 answer)\n\nWhat does REST stand for in the context of web services?",
    "options": [
      {
        "id": "A",
        "text": "Representational State Transfer"
      },
      {
        "id": "B",
        "text": "Remote Execution and State Transfer"
      },
      {
        "id": "C",
        "text": "Resourceful Endpoint and Service Tools"
      },
      {
        "id": "D",
        "text": "Responsive Event-driven Server Technologies"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "REST stands for Representational State Transfer — an architectural style for web services using HTTP methods and stateless communication. Other options are incorrect acronyms."
  },
  {
    "id": "fer202-d05-q18",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which package can be used to set up a simple JSON-based server in Node.js?",
    "options": [
      {
        "id": "A",
        "text": "express"
      },
      {
        "id": "B",
        "text": "json-server"
      },
      {
        "id": "C",
        "text": "axios"
      },
      {
        "id": "D",
        "text": "nodemon"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "json-server là package Node.js cho phép tạo server RESTful đơn giản từ file JSON chỉ trong vài dòng lệnh. Express là framework web tổng quát, axios là HTTP client, nodemon là công cụ giám sát thay đổi file — không phù hợp để tạo server JSON nhanh."
  },
  {
    "id": "fer202-d05-q19",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "9\n\n(Choose 1 answer)\n\nWhat is the purpose of json-server in the context of setting up a server?",
    "options": [
      {
        "id": "A",
        "text": "To handle user input and interactions."
      },
      {
        "id": "B",
        "text": "To display the website content."
      },
      {
        "id": "C",
        "text": "To provide a static web server for serving JSON data."
      },
      {
        "id": "D",
        "text": "To generate dynamic server responses."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "json-server là công cụ tạo server REST giả lập từ file JSON, dùng để phục vụ dữ liệu JSON tĩnh trong phát triển và test, không xử lý logic động hay giao diện người dùng."
  },
  {
    "id": "fer202-d05-q20",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "multiple",
    "prompt": "Select the code snippet that correctly defines a Functional Component in React.",
    "options": [
      {
        "id": "A",
        "text": "class MyComponent extends React.Component {\n    render() {\n        return <div>Hello, World!</div>;\n    }\n}"
      },
      {
        "id": "B",
        "text": "function MyComponent() {\n    return <div>Hello, World!</div>;\n}"
      },
      {
        "id": "C",
        "text": "const MyComponent = () => {\n    return <div>Hello, World!</div>;\n};"
      },
      {
        "id": "D",
        "text": "const MyComponent = React.createClass({\n    render() {\n        return <div>Hello, World!</div>;\n    }\n});"
      }
    ],
    "correctOptionIds": [
      "B",
      "C"
    ],
    "explanation": "Functional Component trong React có thể được định nghĩa bằng hàm truyền thống (B) hoặc arrow function (C). A là class component, D là cách cũ không còn dùng trong React hiện đại."
  },
  {
    "id": "fer202-d05-q21",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How are Class Components written in React?",
    "options": [
      {
        "id": "A",
        "text": "function."
      },
      {
        "id": "B",
        "text": "class."
      },
      {
        "id": "C",
        "text": "const."
      },
      {
        "id": "D",
        "text": "component."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, Class Components được định nghĩa bằng từ khóa 'class', kế thừa từ React.Component, và có thể sử dụng state và lifecycle methods. Ví dụ: class MyComponent extends React.Component { ... }"
  },
  {
    "id": "fer202-d05-q22",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is a Component in React?",
    "options": [
      {
        "id": "A",
        "text": "It is a single UI element."
      },
      {
        "id": "B",
        "text": "It is a JavaScript function."
      },
      {
        "id": "C",
        "text": "It is an HTML framework."
      },
      {
        "id": "D",
        "text": "It is a Python class."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "In React, a Component is a reusable UI building block — it can be a function or class, but its core purpose is to represent a single UI element or group of elements, not a framework or language."
  },
  {
    "id": "fer202-d05-q23",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How would you use the useState Hook to manage a counter in a React component?",
    "options": [
      {
        "id": "A",
        "text": "`const [count, setCount] = useState(0);`"
      },
      {
        "id": "B",
        "text": "`const count = useState(0);`"
      },
      {
        "id": "C",
        "text": "`const count = useState(0)[0];`"
      },
      {
        "id": "D",
        "text": "`const [count, setCount] = useState();`"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "useState Hook trong React trả về một mảng gồm 2 phần tử: giá trị hiện tại và hàm cập nhật. Cú pháp đúng là destructuring mảng: [state, setState] = useState(initialValue). Đáp án A đúng vì khởi tạo counter = 0 và có hàm setCount để cập nhật."
  },
  {
    "id": "fer202-d05-q24",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you optimize performance when using Hooks in React?",
    "options": [
      {
        "id": "A",
        "text": "By using the `useMemo` and `useCallback` Hooks."
      },
      {
        "id": "B",
        "text": "By avoiding unnecessary re-renders with the `memo` Hook."
      },
      {
        "id": "C",
        "text": "By using the `useLayoutEffect` Hook instead of `useEffect`."
      },
      {
        "id": "D",
        "text": "By using the `useDebugValue` Hook for debugging purposes."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "useMemo và useCallback giúp tránh tính toán lại và tạo lại hàm không cần thiết, giảm re-render, tối ưu hiệu năng React."
  },
  {
    "id": "fer202-d05-q25",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "How would you use the useContext Hook to access a shared theme in a React component?",
    "options": [
      {
        "id": "A",
        "text": "const theme = useContext(ThemeContext);"
      },
      {
        "id": "B",
        "text": "const { theme } = useContext(ThemeContext);"
      },
      {
        "id": "C",
        "text": "const { theme } = useContext(ThemeContext.Provider);"
      },
      {
        "id": "D",
        "text": "const theme = useContext(ThemeContext.Provider);"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "useContext nhận đối tượng Context (không phải Provider) và trả về giá trị hiện tại của context. Nếu context chứa object, có thể destructuring, nhưng ở đây chỉ cần lấy giá trị theme trực tiếp."
  },
  {
    "id": "fer202-d05-q26",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "6\n\n(Choose 1 answer)\n\nHow can you configure Git with your name and email address?",
    "options": [
      {
        "id": "A",
        "text": "By running \"git config --global user.name 'Your Name'\" and \"git config --global user.email 'Your Email'\""
      },
      {
        "id": "B",
        "text": "By creating a .gitignore file"
      },
      {
        "id": "C",
        "text": "By committing changes using \"git commit -m\""
      },
      {
        "id": "D",
        "text": "By pushing changes to a remote repository"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Để cấu hình Git với tên và email, người dùng phải chạy lệnh git config --global user.name và user.email. Đây là cách chuẩn để thiết lập thông tin người dùng toàn cục trong Git. Các lựa chọn khác liên quan đến .gitignore, commit hoặc push — không liên quan đến cấu hình thông tin cá nhân."
  },
  {
    "id": "fer202-d05-q27",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you create a new React application using Create React App?",
    "options": [
      {
        "id": "A",
        "text": "By running \"npm create-react-app my-app\""
      },
      {
        "id": "B",
        "text": "By downloading a ZIP file from the official website"
      },
      {
        "id": "C",
        "text": "By using an online code editor"
      },
      {
        "id": "D",
        "text": "By LOning a Git repository"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Create React App is installed via npm with command: 'npx create-react-app my-app'. Other options are incorrect or outdated. 'LOning' is typo for 'cloning'."
  },
  {
    "id": "fer202-d05-q28",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you access Chrome DevTools?",
    "options": [
      {
        "id": "A",
        "text": "By pressing F12 or right-clicking and selecting \"Inspect\""
      },
      {
        "id": "B",
        "text": "By installing a Chrome extension"
      },
      {
        "id": "C",
        "text": "By typing \"chrome://devtools\" in the address bar"
      },
      {
        "id": "D",
        "text": "By opening the Chrome menu and selecting \"DevTools\""
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Cách phổ biến nhất để truy cập Chrome DevTools là nhấn F12 hoặc chuột phải → Inspect. Các cách khác như chrome://devtools hoặc menu Chrome cũng có thể dùng, nhưng A là cách nhanh và phổ biến nhất."
  },
  {
    "id": "fer202-d05-q29",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which method is used to perform enhanced array manipulation in ES6?",
    "options": [
      {
        "id": "A",
        "text": "map()"
      },
      {
        "id": "B",
        "text": "forEach()"
      },
      {
        "id": "C",
        "text": "reduce()"
      },
      {
        "id": "D",
        "text": "filter()"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong ES6, phương thức map() được dùng để thực hiện thao tác nâng cao trên mảng, tạo mảng mới bằng cách áp dụng hàm lên từng phần tử — phù hợp với yêu cầu 'enhanced array manipulation'."
  },
  {
    "id": "fer202-d05-q30",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of the className attribute in JSX?",
    "options": [
      {
        "id": "A",
        "text": "To define a CSS class for the JSX element"
      },
      {
        "id": "B",
        "text": "To specify the component's class name"
      },
      {
        "id": "C",
        "text": "To define a unique identifier for the element"
      },
      {
        "id": "D",
        "text": "To add inline styles to the element"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong JSX, thuộc tính className được dùng để gán class CSS cho phần tử, thay vì dùng \"class\" như trong HTML vì \"class\" là từ khóa trong JavaScript. Không dùng để định danh duy nhất hay thêm style inline."
  },
  {
    "id": "fer202-d05-q31",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you conditionally render content in JSX?",
    "options": [
      {
        "id": "A",
        "text": "By using the if statement"
      },
      {
        "id": "B",
        "text": "By using the for loop"
      },
      {
        "id": "C",
        "text": "By using the ternary operator `{condition ? trueContent : falseContent}`"
      },
      {
        "id": "D",
        "text": "By using the switch statement"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "In JSX, you cannot use regular JavaScript if/for/switch statements directly in markup. The ternary operator is the standard way to conditionally render content. You can also use logical &&, but ternary is most explicit and widely used for true/false rendering."
  },
  {
    "id": "fer202-d05-q32",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "```\n<Container>\n  <Row>\n    <Col sm={6} md={4}>\n      {/* Placeholder content */}\n    </Col>\n    <Col sm={6} md={8}>\n      {/* Placeholder content */}\n    </Col>\n  </Row>\n</Container>\n```\nHow many columns will the code above display on a mobile screen?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trên màn hình di động (sm), mỗi Col có sm={6}, tức là chiếm 6/12 cột → 2 cột sẽ hiển thị cạnh nhau. Do đó, tổng cộng 2 cột được hiển thị."
  },
  {
    "id": "fer202-d05-q33",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "How does the Grid component in React-Bootstrap help in creating a responsive layout?",
    "options": [
      {
        "id": "A",
        "text": "The Grid component allows you to define a flexible grid system with rows and columns that automatically adjusts based on the screen size."
      },
      {
        "id": "B",
        "text": "The Grid component provides pre-built responsive layouts that you can directly use in your application."
      },
      {
        "id": "C",
        "text": "The Grid component automatically resizes and repositions the elements based on the available space."
      },
      {
        "id": "D",
        "text": "The Grid component helps in aligning the elements vertically and horizontally on the page."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Grid trong React-Bootstrap cung cấp hệ thống lưới linh hoạt với rows và columns, tự động điều chỉnh kích thước theo màn hình — đây là nền tảng của layout responsive. Các lựa chọn khác mô tả sai: B (không phải layout sẵn), C (không tự động resize element), D (không chỉ để căn chỉnh)."
  },
  {
    "id": "fer202-d05-q34",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which React-Bootstrap components are used to create navigation menus?",
    "options": [
      {
        "id": "A",
        "text": "Navbars, Navs, Tabs"
      },
      {
        "id": "B",
        "text": "Alert, Card"
      },
      {
        "id": "C",
        "text": "Button, Checkbox"
      },
      {
        "id": "D",
        "text": "Modal, Listbox"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "React-Bootstrap cung cấp các component như Navbars, Navs, Tabs để tạo menu điều hướng. Các component như Alert, Card, Button, Modal không dùng để tạo menu điều hướng chính."
  },
  {
    "id": "fer202-d05-q35",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "multiple",
    "prompt": "How can you pass parameters to an event handler in React?",
    "options": [
      {
        "id": "A",
        "text": "Using the `bind()` method."
      },
      {
        "id": "B",
        "text": "Using arrow functions."
      },
      {
        "id": "C",
        "text": "Using the `addEventListener()` method."
      },
      {
        "id": "D",
        "text": "Using the `this` keyword."
      }
    ],
    "correctOptionIds": [
      "A",
      "B"
    ],
    "explanation": "In React, you can pass parameters to event handlers using arrow functions (e.g., onClick={() => handleClick(param)}) or the bind() method (e.g., onClick={this.handleClick.bind(this, param)}). addEventListener is not used in JSX, and 'this' alone doesn’t pass parameters."
  },
  {
    "id": "fer202-d05-q36",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the advantage of event pooling in React?",
    "options": [
      {
        "id": "A",
        "text": "It reduces memory usage by reusing event objects."
      },
      {
        "id": "B",
        "text": "It improves event handling performance by creating new event objects for each event."
      },
      {
        "id": "C",
        "text": "It simplifies event handling by providing a pool of event handlers."
      },
      {
        "id": "D",
        "text": "It allows for better management of event contexts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Event pooling trong React tái sử dụng các đối tượng sự kiện thay vì tạo mới mỗi lần, giúp giảm tiêu thụ bộ nhớ và tăng hiệu suất. Đây là cơ chế tối ưu hóa của React để tránh việc tạo và hủy đối tượng sự kiện liên tục."
  },
  {
    "id": "fer202-d05-q37",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "```javascript\nimport React, { useState } from 'react';\n\nfunction Dish({ name }) {\n  return <li>{name}</li>;\n}\n\nfunction Kitchen() {\n  const [orders, setOrders] = useState([]);\n\n  // Triggering a render (delivering the guest's order to the kitchen)\n  const addOrder = (order) => {\n    setOrders((prevOrders) => [...prevOrders, order]);\n  };\n\n  // Rendering the component (preparing the order in the kitchen)\n  const renderOrders = () => {\n    return orders.map((order, index) => <Dish key={index} name={order} />);\n  };\n\n  // Committing to the DOM (placing the order on the table)\n  return (\n    <div>\n      <h2>Orders:</h2>\n      <ul>{renderOrders()}</ul>\n    </div>\n  );\n}\n\nfunction Waiter() {\n  const handleOrder = () => {\n    // Triggering a render (delivering the guest's order to the kitchen)\n    kitchenRef.current.addOrder('Pizza');\n  };\n\n  // A reference to the Kitchen component\n  const kitchenRef = React.createRef();\n\n  // Rendering the Waiter component\n  return (\n    <div>\n      <h1>Welcome to the Restaurant!</h1>\n      <button onClick={handleOrder}>Place Order</button>\n      <Kitchen ref={kitchenRef} />\n    </div>\n  );\n}\n```\n\nWhat React lifecycle phases and patterns are demonstrated in the code above when managing restaurant orders and triggering renders?",
    "options": [
      {
        "id": "A",
        "text": "Triggering, rendering, and committing in React component lifecycle"
      },
      {
        "id": "B",
        "text": "Direct Redux store middleware dispatching"
      },
      {
        "id": "C",
        "text": "React Router data loading and route parameter handling"
      },
      {
        "id": "D",
        "text": "Server-Side Rendering with Next.js getServerSideProps"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này."
  },
  {
    "id": "fer202-d05-q38",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What are the key features of Next.js?",
    "options": [
      {
        "id": "A",
        "text": "Server-side rendering, Static Site Generation, Image Optimization, Built-in Routing."
      },
      {
        "id": "B",
        "text": "Database integration, code debugging, and form validation."
      },
      {
        "id": "C",
        "text": "CSS styling, version control, and error handling."
      },
      {
        "id": "D",
        "text": "Package management, command-line interface, and testing framework."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Next.js là framework React nổi bật với các tính năng: render phía server (SSR), tạo trang tĩnh (SSG), tối ưu hình ảnh và hệ thống định tuyến tích hợp. Các lựa chọn khác không phải đặc trưng chính của Next.js."
  },
  {
    "id": "fer202-d05-q39",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you install Tailwind CSS in a project?",
    "options": [
      {
        "id": "A",
        "text": "Use the `npm install tailwind-css` command."
      },
      {
        "id": "B",
        "text": "Include the Tailwind CSS CDN in the HTML file."
      },
      {
        "id": "C",
        "text": "Install Tailwind CSS globally with npm."
      },
      {
        "id": "D",
        "text": "Use the `npx tailwindcss init` command."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Cách chính xác để cài đặt Tailwind CSS là chạy lệnh `npx tailwindcss init` để tạo file cấu hình, sau đó cài đặt package bằng `npm install -D tailwindcss postcss autoprefixer`. Lệnh `npm install tailwind-css` là sai vì tên package đúng là `tailwindcss` (không có dấu gạch ngang). CDN (B) chỉ dùng cho thử nghiệm, không phải cài đặt chính thức."
  },
  {
    "id": "fer202-d05-q40",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which of the following is a feature of Next.js?",
    "options": [
      {
        "id": "A",
        "text": "A CSS framework for styling web applications."
      },
      {
        "id": "B",
        "text": "A server-side rendering framework for React."
      },
      {
        "id": "C",
        "text": "A state management library for React applications."
      },
      {
        "id": "D",
        "text": "A testing framework for JavaScript applications."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Next.js là framework React hỗ trợ server-side rendering (SSR), giúp cải thiện SEO và hiệu suất tải trang. Không phải framework CSS, state management hay testing."
  },
  {
    "id": "fer202-d05-q41",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you include Tailwind CSS in a project?",
    "options": [
      {
        "id": "A",
        "text": "Link the Tailwind CSS stylesheet in the HTML file."
      },
      {
        "id": "B",
        "text": "Import the Tailwind CSS file in the JavaScript code."
      },
      {
        "id": "C",
        "text": "Use the @import rule in a CSS file to import Tailwind CSS."
      },
      {
        "id": "D",
        "text": "Add Tailwind CSS as a dependency in the package.json file."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Cách chính thống để tích hợp Tailwind CSS là cài đặt qua npm/yarn (thêm vào package.json), sau đó cấu hình và build CSS. Các cách khác như link trực tiếp hoặc @import không phải phương pháp chuẩn hiện đại."
  },
  {
    "id": "fer202-d05-q42",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "In Bootstrap, select the HTML/CSS code snippet to create a navbar with a dropdown menu containing\nsub-items.",
    "options": [
      {
        "id": "A",
        "text": "<nav class=\"navbar\">\n  <ul class=\"nav\">\n    <li class=\"nav-item\">Item 1</li>\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\naria-expanded=\"false\">Dropdown</a>\n      <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\" href=\"#\">Sub-item 1</a>\n        <a class=\"dropdown-item\" href=\"#\">Sub-item 2</a>\n      </div>\n    </li>\n  </ul>\n</nav>"
      },
      {
        "id": "B",
        "text": "<nav class=\"navbar\">\n  <ul class=\"nav\">\n    <li class=\"nav-item\">Item 1</li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">Dropdown</a>\n      <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\" href=\"#\">Sub-item 1</a>\n        <a class=\"dropdown-item\" href=\"#\">Sub-item 2</a>\n      </div>\n    </li>\n  </ul>\n</nav>"
      },
      {
        "id": "C",
        "text": "<nav class=\"navbar\">\n  <ul class=\"nav\">\n    <li class=\"nav-item\">Item 1</li>\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link\" href=\"#\">Dropdown</a>\n      <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\" href=\"#\">Sub-item 1</a>\n        <a class=\"dropdown-item\" href=\"#\">Sub-item 2</a>\n      </div>\n    </li>\n  </ul>\n</nav>"
      },
      {
        "id": "D",
        "text": "<nav class=\"navbar\">\n  <ul class=\"nav\">\n    <li class=\"nav-item\">Item 1</li>"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong Bootstrap 4/5, để tạo dropdown trong navbar, cần có class 'dropdown' trên <li>, và thuộc tính 'data-toggle=\"dropdown\"' trên <a>. Chỉ có đáp án A có đầy đủ cấu trúc này. Các đáp án khác thiếu class hoặc thuộc tính cần thiết."
  },
  {
    "id": "fer202-d05-q43",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How does the Bootstrap grid system help in designing responsive websites?",
    "options": [
      {
        "id": "A",
        "text": "By providing pre-designed website templates."
      },
      {
        "id": "B",
        "text": "By automatically adjusting the font sizes based on the screen size."
      },
      {
        "id": "C",
        "text": "By allowing the layout to adapt to different screen sizes using a 12-column responsive grid system."
      },
      {
        "id": "D",
        "text": "By optimizing the website for search engines."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Bootstrap’s grid system uses a 12-column layout that flexibly resizes based on screen width, enabling responsive design. It doesn’t auto-adjust fonts (B), provide templates (A), or optimize SEO (D)."
  },
  {
    "id": "fer202-d05-q44",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you create a modal in Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "By using the `<modal>` HTML element."
      },
      {
        "id": "B",
        "text": "By applying the `.modal` class to the container element."
      },
      {
        "id": "C",
        "text": "By using the `.modal` class along with the `data-bs-toggle=\"modal\"` attribute."
      },
      {
        "id": "D",
        "text": "By using JavaScript to dynamically create and show modal elements."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong Bootstrap 5, modal được tạo bằng cách sử dụng class `.modal` và thuộc tính `data-bs-toggle=\"modal\"` để kích hoạt. Không dùng thẻ `<modal>` hay chỉ class `.modal` đơn lẻ."
  },
  {
    "id": "fer202-d05-q45",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you wrap a lazy component with Suspense in React?",
    "options": [
      {
        "id": "A",
        "text": "Using the wrap prop of the Suspense component"
      },
      {
        "id": "B",
        "text": "Using the fallback prop of the Suspense component"
      },
      {
        "id": "C",
        "text": "Using the lazy prop of the Suspense component"
      },
      {
        "id": "D",
        "text": "Using the component prop of the Suspense component"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, để bao bọc một component lazy bằng Suspense, ta dùng thuộc tính `fallback` để hiển thị nội dung chờ trong khi component đang được tải. Ví dụ: <Suspense fallback={<div>Loading...</div>}> <LazyComponent /> </Suspense>. Đáp án B đúng."
  },
  {
    "id": "fer202-d05-q46",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the benefit of using Code Splitting and lazy components for web performance?",
    "options": [
      {
        "id": "A",
        "text": "Enhanced security"
      },
      {
        "id": "B",
        "text": "Handle load-time User Experience (UX)"
      },
      {
        "id": "C",
        "text": "Smaller bundle sizes"
      },
      {
        "id": "D",
        "text": "Handle CORS"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Code Splitting và lazy loading giúp chia nhỏ bundle JavaScript, chỉ tải khi cần, giảm kích thước ban đầu, từ đó cải thiện tốc độ tải trang và hiệu suất web."
  },
  {
    "id": "fer202-d05-q47",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "17\n\n(Choose 1 answer)\n\nHow can you define a lazy component in React?",
    "options": [
      {
        "id": "A",
        "text": "Using the `lazy` function from the React library"
      },
      {
        "id": "B",
        "text": "Wrapping the component in the `LazyComponent` higher-order component"
      },
      {
        "id": "C",
        "text": "Importing the component with the `lazy` keyword"
      },
      {
        "id": "D",
        "text": "Using the `createLazyComponent` method from the React package"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, component lazy được định nghĩa bằng hàm `React.lazy()`, kết hợp với `Suspense` để tải component theo yêu cầu. Đây là cách chuẩn được tài liệu React khuyến nghị."
  },
  {
    "id": "fer202-d05-q48",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What does the `fallback` prop in `Suspense` represent?",
    "options": [
      {
        "id": "A",
        "text": "The component to display while the lazy component is loading"
      },
      {
        "id": "B",
        "text": "The component to display when an error occurs during loading"
      },
      {
        "id": "C",
        "text": "The component to display when the lazy component is rendered"
      },
      {
        "id": "D",
        "text": "The component to display when `Suspense` is not supported"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, `fallback` prop của `Suspense` dùng để hiển thị UI tạm thời trong khi component được lazy load đang tải. Không phải để xử lý lỗi (đó là `ErrorBoundary`) hay hiển thị khi đã render xong."
  },
  {
    "id": "fer202-d05-q49",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "19\n\n(Choose 1 answer)\n\nHow can you access Chrome DevTools?",
    "options": [
      {
        "id": "A",
        "text": "By pressing F12 or right-clicking and selecting \"Inspect\""
      },
      {
        "id": "B",
        "text": "By installing a Chrome extension"
      },
      {
        "id": "C",
        "text": "By typing \"chrome://devtools\" in the address bar"
      },
      {
        "id": "D",
        "text": "By opening the Chrome menu and selecting \"DevTools\""
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Cách nhanh nhất và phổ biến nhất để mở Chrome DevTools là nhấn F12 hoặc chuột phải → Inspect. Các cách khác có thể hoạt động nhưng không phải là tiêu chuẩn chính."
  },
  {
    "id": "fer202-d05-q50",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of async/await in JavaScript?",
    "options": [
      {
        "id": "A",
        "text": "To define asynchronous functions."
      },
      {
        "id": "B",
        "text": "To handle errors in synchronous code."
      },
      {
        "id": "C",
        "text": "To perform mathematical calculations."
      },
      {
        "id": "D",
        "text": "To manipulate the DOM."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Async/await là cú pháp trong JavaScript giúp viết code bất đồng bộ giống như đồng bộ, giúp dễ đọc và quản lý hơn. async dùng để khai báo hàm bất đồng bộ, await dùng để chờ kết quả của promise bên trong hàm đó."
  },
  {
    "id": "fer202-d06-q01",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 1\n\n(Choose 1 answer)\n\nWhat is the purpose of the initial state parameter in a Redux reducer function?",
    "options": [
      {
        "id": "A",
        "text": "To define the structure of the Redux store"
      },
      {
        "id": "B",
        "text": "To specify the actions that can be dispatched"
      },
      {
        "id": "C",
        "text": "To handle asynchronous operations"
      },
      {
        "id": "D",
        "text": "To define the initial state of the reducer"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Tham số trạng thái ban đầu trong reducer Redux dùng để xác định trạng thái khởi tạo của reducer đó, giúp Redux biết giá trị ban đầu khi store được tạo."
  },
  {
    "id": "fer202-d06-q02",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 2\n\n(Choose 1 answer)\n\nWhich of the following statements about reducers in Redux is true?",
    "options": [
      {
        "id": "A",
        "text": "Reducers can only be used with React class components, not functional components."
      },
      {
        "id": "B",
        "text": "Reducers are responsible for dispatching actions."
      },
      {
        "id": "C",
        "text": "Reducers should have side effects such as API calls or database interactions."
      },
      {
        "id": "D",
        "text": "Reducers must be pure functions with no side effects."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Trong Redux, reducer phải là hàm thuần khiết (pure function) — không có side effect, không gọi API, không thay đổi state trực tiếp — để đảm bảo tính dự đoán và dễ kiểm thử."
  },
  {
    "id": "fer202-d06-q03",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Question: 3\n\n(Choose 1 answer)\n\nEvaluate the benefits of using Redux Thunk middleware in a Redux application. Which of the following is NOT a benefit?",
    "options": [
      {
        "id": "A",
        "text": "Allows for handling asynchronous actions"
      },
      {
        "id": "B",
        "text": "Simplifies the process of making API calls within action creators"
      },
      {
        "id": "C",
        "text": "Ensures that all actions are synchronous"
      },
      {
        "id": "D",
        "text": "Enables conditional dispatching of actions"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Redux Thunk cho phép xử lý hành động bất đồng bộ (asynchronous), nên việc 'đảm bảo tất cả hành động là đồng bộ' là KHÔNG đúng — đây là đáp án sai cần chọn theo yêu cầu câu hỏi."
  },
  {
    "id": "fer202-d06-q04",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Question: 4\n\n(Choose 1 answer)\n\nWhich of the following statements about Redux selectors is true?",
    "options": [
      {
        "id": "A",
        "text": "Selectors are responsible for dispatching actions"
      },
      {
        "id": "B",
        "text": "Selectors are used to modify the Redux store directly"
      },
      {
        "id": "C",
        "text": "Selectors are pure functions that derive specific data from the Redux store"
      },
      {
        "id": "D",
        "text": "Selectors are only used in React class components"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Redux selectors là hàm thuần túy (pure functions) dùng để trích xuất dữ liệu cụ thể từ store, không thay đổi store hay dispatch action."
  },
  {
    "id": "fer202-d06-q05",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Question: 5\n\n(Choose 1 answer)\n\nHow can you configure Tailwind CSS in a Next.js project?",
    "options": [
      {
        "id": "A",
        "text": "By importing a CSS file directly in the component."
      },
      {
        "id": "B",
        "text": "By installing the Tailwind CSS package and creating a configuration file."
      },
      {
        "id": "C",
        "text": "By using a CDN link in the HTML file."
      },
      {
        "id": "D",
        "text": "By installing a Tailwind CSS plugin for Next.js."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong dự án Next.js, Tailwind CSS được cấu hình bằng cách cài đặt gói tailwindcss và các phụ thuộc liên quan, sau đó tạo file tailwind.config.js để tùy chỉnh. Không dùng CDN hay plugin riêng biệt."
  },
  {
    "id": "fer202-d06-q06",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Kizspy | Question: 6\n\n(Choose 1 answer)\n\nWhat are the key features of Next.js?",
    "options": [
      {
        "id": "A",
        "text": "Server-side rendering, Static Site Generation, Image Optimization, Built-in Routing."
      },
      {
        "id": "B",
        "text": "Database integration, code debugging, and form validation."
      },
      {
        "id": "C",
        "text": "CSS styling, version control, and error handling."
      },
      {
        "id": "D",
        "text": "Package management, command-line interface, and testing framework."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Next.js là framework React nổi bật với các tính năng: SSR (Server-Side Rendering), SSG (Static Site Generation), tối ưu hình ảnh và hệ thống routing tích hợp. Các lựa chọn khác đề cập đến chức năng không phải đặc trưng của Next.js."
  },
  {
    "id": "fer202-d06-q07",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 7\n\n(Choose 1 answer)\n\nWhich method is used to update the state in a class component?",
    "options": [
      {
        "id": "A",
        "text": "setState"
      },
      {
        "id": "B",
        "text": "useState"
      },
      {
        "id": "C",
        "text": "updateState"
      },
      {
        "id": "D",
        "text": "changeState"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, để cập nhật state trong component lớp (class component), ta dùng phương thức setState(). useState() dùng cho functional component. updateState và changeState không tồn tại trong React."
  },
  {
    "id": "fer202-d06-q08",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which method is commonly used to transform an array of data into a list of components in React?",
    "options": [
      {
        "id": "A",
        "text": "const items = [\"Apple\", \"Banana\", \"Cherry\"];\nconst listItems = items.filter(item => <li>{item}</li>);"
      },
      {
        "id": "B",
        "text": "const items = [\"Apple\", \"Banana\", \"Cherry\"];\nconst listItems = items.map(item => <li>{item}</li>);"
      },
      {
        "id": "C",
        "text": "const items = [\"Apple\", \"Banana\", \"Cherry\"];\nconst listItems = items.forEach(item => <li>{item}</li>);"
      },
      {
        "id": "D",
        "text": "const items = [\"Apple\", \"Banana\", \"Cherry\"];\nconst listItems = items.reduce(item => <li>{item}</li>);"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, phương thức .map() được dùng để biến đổi mỗi phần tử trong mảng thành một phần tử JSX (component). .filter() lọc phần tử, .forEach() không trả về mảng mới, .reduce() dùng để tích lũy giá trị — không phù hợp để render danh sách."
  },
  {
    "id": "fer202-d06-q09",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Question: 9\n\n(Choose 1 answer)\n\nHow would you combine `filter()` and `map()` to display only fruits with names longer than 5 characters and transform them into uppercase?",
    "options": [
      {
        "id": "A",
        "text": "const items = [\"Apple\", \"Banana\", \"Cherry\", \"Avocado\"];\n\nreturn (\n  <ul>\n    {\n      items.filter(item => item.length > 5).map(item => <li>{item}</li>)\n    }\n  </ul>\n);"
      },
      {
        "id": "B",
        "text": "const items = [\"Apple\", \"Banana\", \"Cherry\", \"Avocado\"];\n\nreturn (\n  <ul>\n    {\n      items.filter(item => item.length > 5)\n      .map(item => <li key={item}>{item.toUpperCase()}</li>)\n    }\n  </ul>\n);"
      },
      {
        "id": "C",
        "text": "const items = [\"Apple\", \"Banana\", \"Cherry\", \"Avocado\"];\n\nreturn (\n  <ul>\n    {\n      items.map(item => <li key={item}>{item}</li>).filter(item => item.length > 5)\n    }\n  </ul>\n);"
      },
      {
        "id": "D",
        "text": "const items = [\"Apple\", \"Banana\", \"Cherry\", \"Avocado\"];\n\nreturn (\n  <ul>\n    {\n      items.map(item => item.toUpperCase()).filter(item => item.length > 5)\n    }\n  </ul>\n);"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Đúng vì: (1) filter() trước để lọc các fruit có tên dài hơn 5 ký tự, (2) map() sau để chuyển thành chữ hoa và render <li> với key hợp lệ. Option A thiếu toUpperCase(), C và D đảo thứ tự hoặc thiếu key và uppercase."
  },
  {
    "id": "fer202-d06-q10",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 10\n\n(Choose 1 answer)\n\nHow do you define a Type validator in PropTypes for a prop called \"age\" that should be a number?",
    "options": [
      {
        "id": "A",
        "text": "age: PropTypes.string"
      },
      {
        "id": "B",
        "text": "age: PropTypes.number"
      },
      {
        "id": "C",
        "text": "age: PropTypes.bool"
      },
      {
        "id": "D",
        "text": "age: PropTypes.object"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong PropTypes, để xác định prop 'age' là kiểu số, ta dùng PropTypes.number. Các lựa chọn khác là kiểu string, bool, object — không phù hợp với yêu cầu."
  },
  {
    "id": "fer202-d06-q11",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 11\n\n(Choose 1 answer)\n\nWhat happens if a prop fails the validation defined by a simple property validator?",
    "options": [
      {
        "id": "A",
        "text": "An error will be thrown during runtime."
      },
      {
        "id": "B",
        "text": "The prop will be automatically converted to the expected type."
      },
      {
        "id": "C",
        "text": "The component will continue to function normally."
      },
      {
        "id": "D",
        "text": "The validation will be bypassed, and the prop will be accepted."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Khi prop không vượt qua validation trong React/Vue, framework thường ném lỗi runtime để cảnh báo nhà phát triển — giúp phát hiện sớm lỗi dữ liệu đầu vào, đảm bảo tính đúng đắn của component."
  },
  {
    "id": "fer202-d06-q12",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Kizspy | Question: 12\n\n(Choose 1 answer)\n\nWhat is the purpose of PropTypes?",
    "options": [
      {
        "id": "A",
        "text": "To ensure type safety in React components."
      },
      {
        "id": "B",
        "text": "To improve performance in React applications."
      },
      {
        "id": "C",
        "text": "To handle asynchronous operations in React."
      },
      {
        "id": "D",
        "text": "To enable code reusability in React components."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "PropTypes trong React dùng để kiểm tra kiểu dữ liệu của props được truyền vào component, giúp phát hiện lỗi sớm và đảm bảo tính an toàn kiểu dữ liệu."
  },
  {
    "id": "fer202-d06-q13",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 13\n\n(Choose 1 answer)\n\nHow do you create navigation links in React Router?",
    "options": [
      {
        "id": "A",
        "text": "Using the `<Switch>` component"
      },
      {
        "id": "B",
        "text": "Using the `<Link>` component"
      },
      {
        "id": "C",
        "text": "Using the `<Route>` component"
      },
      {
        "id": "D",
        "text": "Using the `<Navigate>` component"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React Router, để tạo liên kết điều hướng, ta dùng component <Link> thay vì thẻ <a> thông thường. Component này ngăn trình duyệt tải lại trang và cho phép điều hướng client-side."
  },
  {
    "id": "fer202-d06-q14",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Question: 14\n\n(Choose 1 answer)\n\nWhich code snippet demonstrates how to handle a route parameter in React Router?",
    "options": [
      {
        "id": "A",
        "text": "`<Route path=\"/users/:id\" component={UserDetail} />`"
      },
      {
        "id": "B",
        "text": "`<Link to=\"/users\">Users</Link>`"
      },
      {
        "id": "C",
        "text": "import { BrowserRouter as Router, Route } from \"react-router-dom\";"
      },
      {
        "id": "D",
        "text": "import { Link, Route } from \"react-router-dom\";"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React Router, để xử lý tham số route (ví dụ: :id), ta dùng cú pháp <Route path=\"/users/:id\" component={UserDetail} />. Các lựa chọn khác không liên quan đến việc xử lý tham số route."
  },
  {
    "id": "fer202-d06-q15",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 15\n\n(Choose 1 answer)\n\nCreate a React component that uses the Suspense component to display a fallback while loading a lazily loaded component. Which code snippet is correct?",
    "options": [
      {
        "id": "A",
        "text": "import React, { lazy, Suspense } from 'react';\nconst MyComponent = lazy(() => import('./MyComponent'));\nfunction App() { return ( <Suspense fallback={<div>Loading...</div>}> <MyComponent /> </Suspense> ); }\nexport default App;"
      },
      {
        "id": "B",
        "text": "import React, { Suspense } from 'react';\nconst MyComponent = import('./MyComponent');\nfunction App() { return ( <Suspense fallback={<div>Loading...</div>}> <MyComponent /> </Suspense> ); }\nexport default App;"
      },
      {
        "id": "C",
        "text": "import React, { lazy } from 'react';\nconst MyComponent = lazy('./MyComponent');\nfunction App() { return ( <div fallback={<div>Loading...</div>}> <MyComponent /> </div> ); }\nexport default App;"
      },
      {
        "id": "D",
        "text": "import React from 'react';\nconst MyComponent = React.lazy(() => import('./MyComponent'));\nfunction App() { return ( <React.Suspense> <MyComponent /> </React.Suspense> ); }\nexport default App;"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Correct React lazy loading: import lazy and Suspense, use lazy() with dynamic import, wrap component in <Suspense> with fallback. Option A follows React docs exactly. Others miss lazy(), wrong syntax, or omit fallback."
  },
  {
    "id": "fer202-d06-q16",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 16\n\n(Choose 1 answer)\n\nWhat is the primary architectural style used in designing web services that follow REST principles?",
    "options": [
      {
        "id": "A",
        "text": "SOAP (Simple Object Access Protocol)"
      },
      {
        "id": "B",
        "text": "RPC (Remote Procedure Call)"
      },
      {
        "id": "C",
        "text": "MVC (Model-View-Controller)"
      },
      {
        "id": "D",
        "text": "RESTful (Representational State Transfer)"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Kiến trúc chính được sử dụng trong web services theo nguyên tắc REST là RESTful, tập trung vào tài nguyên và trạng thái đại diện."
  },
  {
    "id": "fer202-d06-q17",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 17\n\n(Choose 1 answer)\n\nWhat does the HTTP response code 404 indicate?",
    "options": [
      {
        "id": "A",
        "text": "OK"
      },
      {
        "id": "B",
        "text": "Created"
      },
      {
        "id": "C",
        "text": "Not Found"
      },
      {
        "id": "D",
        "text": "Internal Server Error"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Mã HTTP 404 là mã lỗi phổ biến nhất, báo hiệu tài nguyên yêu cầu không tồn tại trên máy chủ – tức là 'Not Found'."
  },
  {
    "id": "fer202-d06-q18",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Question: 18\n\n(Choose 1 answer)\n\nWhat is the purpose of json-server in the context of setting up a server?",
    "options": [
      {
        "id": "A",
        "text": "To handle user input and interactions."
      },
      {
        "id": "B",
        "text": "To display the website content."
      },
      {
        "id": "C",
        "text": "To provide a static web server for serving JSON data."
      },
      {
        "id": "D",
        "text": "To generate dynamic server responses."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "json-server là công cụ tạo server REST giả lập từ file JSON, dùng để mô phỏng API trong phát triển frontend. Nó không xử lý tương tác người dùng hay tạo phản hồi động."
  },
  {
    "id": "fer202-d06-q19",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Question: 19\n\n(Choose 1 answer)\n\n```javascript\nconst jsonServer = require('json-server');\nconst server = jsonServer.create();\nconst router = jsonServer.router('data.json');\nconst port = 3000;\n\nserver.use(router);\n\nserver.listen(port, () => {\n  console.log(`JSON server is running on port ${port}`);\n});\n```\n\nWhat is the above code used for?",
    "options": [
      {
        "id": "A",
        "text": "Create a dynamic server to serve JSON data."
      },
      {
        "id": "B",
        "text": "Create a dynamic web application using JSON data."
      },
      {
        "id": "C",
        "text": "Create a JSON file based on data from the server."
      },
      {
        "id": "D",
        "text": "Configure the development environment for the project using JSON."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Mã JavaScript này sử dụng thư viện json-server để khởi tạo một server HTTP đơn giản, phục vụ dữ liệu từ file data.json. Nó không tạo ứng dụng web động hay cấu hình môi trường, mà chỉ serve JSON."
  },
  {
    "id": "fer202-d06-q20",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Question: 20\n\n(Choose 1 answer)\n\nWhat are Higher-Order Components in React?",
    "options": [
      {
        "id": "A",
        "text": "Advanced components."
      },
      {
        "id": "B",
        "text": "Components written in JavaScript."
      },
      {
        "id": "C",
        "text": "Components with multiple props."
      },
      {
        "id": "D",
        "text": "Components with multiple states."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Higher-Order Components (HOC) trong React là các hàm nhận vào một component và trả về một component mới với chức năng được mở rộng — bản chất là component nâng cao, không phải chỉ là component có nhiều props hay state."
  },
  {
    "id": "fer202-d06-q21",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Question: 21\n\n(Choose 1 answer)\n\nSelect the code snippet that correctly defines a Higher-Order Component in React using an arrow function with a named function",
    "options": [
      {
        "id": "A",
        "text": "function withLogger(WrappedComponent) {\n  return class extends React.Component {\n    // HOC implementation\n  };\n}"
      },
      {
        "id": "B",
        "text": "const withLogger = (WrappedComponent) => {\n  return class extends React.Component {\n    // HOC implementation\n  };\n};"
      },
      {
        "id": "C",
        "text": "const withLogger = (WrappedComponent) => {\n  return function HOC() {\n    // HOC implementation\n  };\n};"
      },
      {
        "id": "D",
        "text": "function withLogger(WrappedComponent) {\n  return function HOC() {\n    // HOC implementation\n  };\n}"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HOC trong React dùng arrow function để trả về một class component. Câu B đúng cú pháp và là cách phổ biến để định nghĩa HOC với arrow function."
  },
  {
    "id": "fer202-d06-q22",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 22\n\n(Choose 1 answer)\n\nWhich methods are part of the Lifecycle in Class Components?",
    "options": [
      {
        "id": "A",
        "text": "componentDidMount, componentDidUpdate, componentWillUnmount."
      },
      {
        "id": "B",
        "text": "render, setState, forceUpdate."
      },
      {
        "id": "C",
        "text": "constructor, render, componentWillUpdate."
      },
      {
        "id": "D",
        "text": "componentWillReceiveProps, shouldComponentUpdate, componentDidCatch."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React Class Components, các phương thức lifecycle bao gồm componentDidMount (gọi sau khi render lần đầu), componentDidUpdate (gọi sau khi cập nhật), và componentWillUnmount (gọi trước khi unmount). Các lựa chọn khác chứa phương thức không phải lifecycle hoặc không đầy đủ."
  },
  {
    "id": "fer202-d06-q23",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 23\n\n(Choose 1 answer)\n\nWhich React hook is used to manage state in functional components?",
    "options": [
      {
        "id": "A",
        "text": "useEffect"
      },
      {
        "id": "B",
        "text": "useContext"
      },
      {
        "id": "C",
        "text": "useState"
      },
      {
        "id": "D",
        "text": "useReducer"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "useState là hook trong React dùng để quản lý state trong functional component. useEffect dùng để xử lý side effect, useContext để truy cập context, useReducer để quản lý state phức tạp hơn với reducer. Câu hỏi yêu cầu chọn hook quản lý state đơn giản — useState là đáp án đúng."
  },
  {
    "id": "fer202-d06-q24",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Kizspy | Question: 24\n\n(Choose 1 answer)\n\nWhich method can help ensure that updates in a function depend on the previous state in React?",
    "options": [
      {
        "id": "A",
        "text": "const [count, setCount] = useState(0);\nfunction increment() {\n  setCount(count + 1);\n}"
      },
      {
        "id": "B",
        "text": "const [count, setCount] = useState(0);\nfunction increment() {\n  setCount(count => count + 1);\n}"
      },
      {
        "id": "C",
        "text": "const [count, setCount] = useState(0);\nfunction increment() {\n  setCount(prevCount => prevCount + 1);\n}"
      },
      {
        "id": "D",
        "text": "const [count, setCount] = useState(0);\nfunction increment() {\n  setCount(count - 1);\n}"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong React, để đảm bảo cập nhật dựa trên trạng thái trước đó, nên dùng hàm callback với tham số prevCount. Cách này tránh lỗi khi nhiều lần gọi setCount trong cùng một chu kỳ render. Câu B cũng đúng về mặt logic, nhưng C rõ ràng hơn và là cách chuẩn được khuyến nghị."
  },
  {
    "id": "fer202-d06-q25",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 25\n\n(Choose 1 answer)\n\nWhat are the differences between useState and useReducer Hooks in React?",
    "options": [
      {
        "id": "A",
        "text": "useState is used for managing simple state, while useReducer is used for complex state and state transitions."
      },
      {
        "id": "B",
        "text": "useState is a built-in Hook, while useReducer is a custom Hook."
      },
      {
        "id": "C",
        "text": "useState is used for class components, while useReducer is used for functional components."
      },
      {
        "id": "D",
        "text": "useState is for local component state, while useReducer is for global application state."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "useState phù hợp cho state đơn giản, useReducer dùng cho state phức tạp với nhiều action và logic chuyển trạng thái. Cả hai đều là built-in Hook, dùng cho functional component."
  },
  {
    "id": "fer202-d06-q26",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 26\n\n(Choose 1 answer)\n\nHow would you create a custom Hook in React?",
    "options": [
      {
        "id": "A",
        "text": "By defining a function that uses other built-in Hooks."
      },
      {
        "id": "B",
        "text": "By extending the React.Component class."
      },
      {
        "id": "C",
        "text": "By wrapping a class component with a functional component."
      },
      {
        "id": "D",
        "text": "By using the createCustomHook() function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Custom Hook trong React là hàm bắt đầu bằng 'use', có thể gọi các Hook khác bên trong. Không cần kế thừa React.Component (B), không cần bao bọc component (C), và không có hàm createCustomHook() (D)."
  },
  {
    "id": "fer202-d06-q27",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 27\n\n(Choose 1 answer)\n\nHow can you safely remove an unnecessary dependency from an Effect?",
    "options": [
      {
        "id": "A",
        "text": "Remove all dependencies from the array."
      },
      {
        "id": "B",
        "text": "Use an empty dependency array `[]` to ensure the Effect only runs once."
      },
      {
        "id": "C",
        "text": "Keep all dependencies and accept performance issues."
      },
      {
        "id": "D",
        "text": "Replace useEffect with useLayoutEffect."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, để loại bỏ phụ thuộc không cần thiết, bạn có thể dùng mảng phụ thuộc rỗng `[]` để Effect chỉ chạy một lần khi component mount. Việc xóa hết phụ thuộc hoặc giữ tất cả đều sai vì có thể gây lỗi hoặc hiệu năng kém."
  },
  {
    "id": "fer202-d06-q28",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Question: 28\n\n(Choose 1 answer)\n\nHow can you access Chrome DevTools?",
    "options": [
      {
        "id": "A",
        "text": "By pressing F12 or right-clicking and selecting \"Inspect\""
      },
      {
        "id": "B",
        "text": "By installing a Chrome extension"
      },
      {
        "id": "C",
        "text": "By typing \"chrome://devtools\" in the address bar"
      },
      {
        "id": "D",
        "text": "By opening the Chrome menu and selecting \"DevTools\""
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Cách phổ biến nhất để mở Chrome DevTools là nhấn F12 hoặc chuột phải → Inspect. Các cách khác không chính xác hoặc không phổ biến."
  },
  {
    "id": "fer202-d06-q29",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Kizspy | Question: 29\n\n(Choose 1 answer)\n\nWhat are the key features of React?",
    "options": [
      {
        "id": "A",
        "text": "Two-way data binding"
      },
      {
        "id": "B",
        "text": "Virtual DOM"
      },
      {
        "id": "C",
        "text": "SQL database integration"
      },
      {
        "id": "D",
        "text": "Automatic styling"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "React nổi bật với Virtual DOM — một bản sao ảo của DOM thực, giúp tối ưu hiệu suất khi cập nhật giao diện. React không dùng two-way binding (Angular), không tích hợp SQL hay tự động styling."
  },
  {
    "id": "fer202-d06-q30",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Question: 30\n\n(Choose 1 answer)\n\nHow can you configure Git with your name and email address?",
    "options": [
      {
        "id": "A",
        "text": "By running \"git config --global user.name 'Your Name'\" and \"git config --global user.email 'Your Email'\""
      },
      {
        "id": "B",
        "text": "By creating a .gitignore file"
      },
      {
        "id": "C",
        "text": "By committing changes using \"git commit -m\""
      },
      {
        "id": "D",
        "text": "By pushing changes to a remote repository"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Để cấu hình Git với tên và email, người dùng dùng lệnh git config --global với các tham số user.name và user.email. Đây là bước thiết lập cơ bản trước khi commit."
  },
  {
    "id": "fer202-d06-q31",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Question: 31\n\n(Choose 1 answer)\n\nWhich method is used to perform enhanced array manipulation in ES6?",
    "options": [
      {
        "id": "A",
        "text": "`map()`"
      },
      {
        "id": "B",
        "text": "`forEach()`"
      },
      {
        "id": "C",
        "text": "`reduce()`"
      },
      {
        "id": "D",
        "text": "`filter()`"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "ES6 introduced enhanced array methods like map(), filter(), reduce(), and forEach(). Among these, map() is specifically designed for transforming arrays by applying a function to each element, making it the most representative of enhanced manipulation."
  },
  {
    "id": "fer202-d06-q32",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 32\n\n(Choose 1 answer)\n\nHow can you conditionally render content in JSX?",
    "options": [
      {
        "id": "A",
        "text": "By using the if statement"
      },
      {
        "id": "B",
        "text": "By using the for loop"
      },
      {
        "id": "C",
        "text": "By using the ternary operator `{condition ? trueContent : falseContent}`"
      },
      {
        "id": "D",
        "text": "By using the switch statement"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong JSX, không thể dùng if/for trực tiếp trong return, nên dùng toán tử ba ngôi để render có điều kiện. Đây là cách phổ biến và được React khuyến nghị."
  },
  {
    "id": "fer202-d06-q33",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which feature of ES6 is used to iterate over the elements of an array?",
    "options": [
      {
        "id": "A",
        "text": "Spread syntax"
      },
      {
        "id": "B",
        "text": "Destructuring assignment"
      },
      {
        "id": "C",
        "text": "Arrow functions"
      },
      {
        "id": "D",
        "text": "for...of loop"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Trong ES6, vòng lặp 'for...of' được dùng để lặp qua các phần tử của mảng (và các đối tượng iterable khác). Các lựa chọn khác như spread syntax, destructuring, arrow function không dùng để lặp qua phần tử mảng."
  },
  {
    "id": "fer202-d06-q34",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 34\n\n(Choose 1 answer)\n\nHow does the Grid component in React-Bootstrap help in creating a responsive layout?",
    "options": [
      {
        "id": "A",
        "text": "The Grid component allows you to define a flexible grid system with rows and columns that automatically adjusts based on the screen size."
      },
      {
        "id": "B",
        "text": "The Grid component provides pre-built responsive layouts that you can directly use in your application."
      },
      {
        "id": "C",
        "text": "The Grid component automatically resizes and repositions the elements based on the available space."
      },
      {
        "id": "D",
        "text": "The Grid component helps in aligning the elements vertically and horizontally on the page."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Grid trong React-Bootstrap cung cấp hệ thống lưới linh hoạt với hàng và cột, tự động điều chỉnh kích thước theo kích cỡ màn hình — đây là nền tảng để xây dựng giao diện responsive, không phải chỉ căn chỉnh hay dùng layout có sẵn."
  },
  {
    "id": "fer202-d06-q35",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 35\n\n(Choose 1 answer)\n\nWhich React-Bootstrap components are used to create navigation menus?",
    "options": [
      {
        "id": "A",
        "text": "Navbars, Navs, Tabs"
      },
      {
        "id": "B",
        "text": "Alert, Card"
      },
      {
        "id": "C",
        "text": "Button, Checkbox"
      },
      {
        "id": "D",
        "text": "Modal, Listbox"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "React-Bootstrap cung cấp các component như Navbars, Navs, Tabs để xây dựng menu điều hướng. Các component như Alert, Card, Button, Modal không dùng để tạo menu điều hướng."
  },
  {
    "id": "fer202-d06-q36",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Kizspy | Question: 36\n\n(Choose 1 answer)\n\n```\n<Container>\n  <Row>\n    <Col sm={6} md={4}>\n      {/* Placeholder content */}\n    </Col>\n    <Col sm={6} md={8}>\n      {/* Placeholder content */}\n    </Col>\n  </Row>\n</Container>\n```\nHow many columns will the code above display on a mobile screen?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trên màn hình di động (sm), mỗi Col có sm={6} → tổng 6+6=12 → hiển thị 2 cột. md chỉ áp dụng trên màn hình lớn hơn."
  },
  {
    "id": "fer202-d06-q37",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you pass parameters to an event handler in React?",
    "options": [
      {
        "id": "A",
        "text": "Using the `bind()` method."
      },
      {
        "id": "B",
        "text": "Using arrow functions."
      },
      {
        "id": "C",
        "text": "Using the `addEventListener()` method."
      },
      {
        "id": "D",
        "text": "Using the `this` keyword."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, bạn có thể truyền tham số vào trình xử lý sự kiện bằng cách sử dụng hàm mũi tên (arrow function) để bao bọc hàm xử lý, giúp truyền tham số linh hoạt mà không cần bind hay this."
  },
  {
    "id": "fer202-d06-q38",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Question: 38\n\n(Choose 1 answer)\n\nCreate a React component that uses inline event handlers to log a message when a button is clicked. Which code snippet is correct?",
    "options": [
      {
        "id": "A",
        "text": "class MyButton extends React.Component {\n  render() {\n    return (\n      <button onClick={(e) => console.log('clicked', e)}>\n        Click me\n      </button>\n    );\n  }\n}"
      },
      {
        "id": "B",
        "text": "class MyButton extends React.Component {\n  render() {\n    return (\n      <button onClick={this.onClick}>\n        Click me\n      </button>\n    );\n  }\n}"
      },
      {
        "id": "C",
        "text": "class MyButton extends React.Component {\n  render() {\n    return (\n      <button onClick={this.onClick.bind(this)}>\n        Click me\n      </button>\n    );\n  }\n}"
      },
      {
        "id": "D",
        "text": "class MyButton extends React.Component {\n  render() {\n    return (\n      <button onClick={() => this.onClick()}>\n        Click me\n      </button>\n    );\n  }\n}"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Cách đúng để dùng inline event handler trong React là truyền hàm arrow trực tiếp vào onClick. Các lựa chọn B, C, D đều dùng phương thức class, không phải inline handler. Câu A là ví dụ chuẩn về inline handler."
  },
  {
    "id": "fer202-d06-q39",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 39\n\n(Choose 1 answer)\n\nAnalyze the benefits of using synthetic events in React. Which of the following is NOT a benefit?",
    "options": [
      {
        "id": "A",
        "text": "Provides a consistent event interface across different browsers"
      },
      {
        "id": "B",
        "text": "Contains information necessary for event propagation"
      },
      {
        "id": "C",
        "text": "Reduces the need for garbage collection"
      },
      {
        "id": "D",
        "text": "Normalizes browser inconsistencies"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Synthetic events trong React giúp chuẩn hóa sự kiện giữa các trình duyệt, hỗ trợ lan truyền sự kiện và loại bỏ khác biệt trình duyệt — nhưng KHÔNG liên quan đến việc giảm thu gom rác."
  },
  {
    "id": "fer202-d06-q40",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Question: 40\n\n(Choose 1 answer)\n\nWhich of the following is a utility-first CSS framework that is often used with Next.js?",
    "options": [
      {
        "id": "A",
        "text": "Bootstrap"
      },
      {
        "id": "B",
        "text": "Material-UI"
      },
      {
        "id": "C",
        "text": "Tailwind CSS"
      },
      {
        "id": "D",
        "text": "Bulma"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Tailwind CSS là framework CSS theo kiểu utility-first, thường được dùng với Next.js để xây dựng giao diện linh hoạt và nhanh chóng. Bootstrap, Material-UI, Bulma không phải là utility-first."
  },
  {
    "id": "fer202-d06-q41",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Kizspy | Question: 41\n\n(Choose 1 answer)\n\nWhat is Tailwind CSS?",
    "options": [
      {
        "id": "A",
        "text": "A JavaScript framework for building single-page applications."
      },
      {
        "id": "B",
        "text": "A programming language used for backend development."
      },
      {
        "id": "C",
        "text": "A utility-first CSS framework for building responsive web interfaces."
      },
      {
        "id": "D",
        "text": "A database management system for storing CSS styles."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Tailwind CSS is a utility-first framework that provides low-level classes to build designs directly in HTML, enabling rapid, responsive UI development without writing custom CSS."
  },
  {
    "id": "fer202-d06-q42",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 42\n\n(Choose 1 answer)\n\nWhich of the following is a feature of Next.js?",
    "options": [
      {
        "id": "A",
        "text": "A CSS framework for styling web applications."
      },
      {
        "id": "B",
        "text": "A server-side rendering framework for React."
      },
      {
        "id": "C",
        "text": "A state management library for React applications."
      },
      {
        "id": "D",
        "text": "A testing framework for JavaScript applications."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Next.js là một framework cho React, nổi bật với khả năng server-side rendering (SSR), giúp cải thiện SEO và hiệu suất tải trang. Nó không phải là thư viện quản lý trạng thái, framework CSS hay framework test."
  },
  {
    "id": "fer202-d06-q43",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Question: 43\n\n(Choose 1 answer)\n\nWhat is the purpose of the `next/link` module in Next.js?",
    "options": [
      {
        "id": "A",
        "text": "It is used for handling form submissions."
      },
      {
        "id": "B",
        "text": "It provides client-side routing capabilities."
      },
      {
        "id": "C",
        "text": "It is responsible for server-side rendering."
      },
      {
        "id": "D",
        "text": "It enables serverless function deployment."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Module `next/link` trong Next.js dùng để tạo liên kết giữa các trang với khả năng điều hướng phía client (client-side routing), giúp tránh tải lại toàn bộ trang, tăng hiệu suất và trải nghiệm người dùng."
  },
  {
    "id": "fer202-d06-q44",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Question: 44\n\n(Choose 1 answer)\n\nHow would you combine fluid and pixel widths behaviors in a grid layout using Bootstrap5?",
    "options": [
      {
        "id": "A",
        "text": "Use `.container-fluid` for the entire layout"
      },
      {
        "id": "B",
        "text": "Combine `.container` with `.col-fluid`"
      },
      {
        "id": "C",
        "text": "Use a fixed-width class with a media query"
      },
      {
        "id": "D",
        "text": "Use `.container-md` to apply a responsive container at the md breakpoint"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Trong Bootstrap 5, `.container-md` tạo container có chiều rộng cố định ở breakpoint md trở lên, và fluid (đầy màn hình) ở dưới md — kết hợp cả hai hành vi. Các lựa chọn khác không chính xác hoặc không tồn tại."
  },
  {
    "id": "fer202-d06-q45",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 45\n\n(Choose 1 answer)\n\nHow does the Bootstrap grid system help in designing responsive websites?",
    "options": [
      {
        "id": "A",
        "text": "By providing pre-designed website templates."
      },
      {
        "id": "B",
        "text": "By automatically adjusting the font sizes based on the screen size."
      },
      {
        "id": "C",
        "text": "By allowing the layout to adapt to different screen sizes using a 12-column responsive grid system."
      },
      {
        "id": "D",
        "text": "By optimizing the website for search engines."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Bootstrap grid system chia màn hình thành 12 cột linh hoạt, tự động điều chỉnh kích thước và vị trí các phần tử khi thay đổi kích thước màn hình, giúp thiết kế responsive hiệu quả."
  },
  {
    "id": "fer202-d06-q46",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Kizspy | Question: 46\n\n(Choose 1 answer)\n\nWhat would happen if you didn't include the class=\"form-control\" in your `<input>` element?",
    "options": [
      {
        "id": "A",
        "text": "The input would not be submitted with the form"
      },
      {
        "id": "B",
        "text": "The input would fail client-side validation"
      },
      {
        "id": "C",
        "text": "The input field would revert to the browser's default styles"
      },
      {
        "id": "D",
        "text": "The input field would become non-responsive"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Class 'form-control' là class của Bootstrap để định dạng input. Nếu không có, input sẽ dùng style mặc định của trình duyệt, không ảnh hưởng đến chức năng gửi form hay validation."
  },
  {
    "id": "fer202-d06-q47",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 47\n\n(Choose 1 answer)\n\nHow can you define a route with multiple parameters, such as userId and postId?",
    "options": [
      {
        "id": "A",
        "text": "`<Route path=\"/user/userId/post/postId\" component={UserPost} />`"
      },
      {
        "id": "B",
        "text": "`<Route path=\"/user/:userId/:postId\" component={UserPost} />`"
      },
      {
        "id": "C",
        "text": "`<Route path=\"/user/:userId/post/:postId\" component={UserPost} />`"
      },
      {
        "id": "D",
        "text": "`<Route path=\"/user?userId/post?postId\" component={UserPost} />`"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong React Router, để định nghĩa route có nhiều tham số, dùng dấu : trước tên tham số. Cấu trúc '/user/:userId/post/:postId' là chuẩn xác để truyền cả userId và postId vào component UserPost."
  },
  {
    "id": "fer202-d06-q48",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kizspy | Question: 48\n\n(Choose 1 answer)\n\nWhat does the `fallback` prop in `Suspense` represent?",
    "options": [
      {
        "id": "A",
        "text": "The component to display while the lazy component is loading"
      },
      {
        "id": "B",
        "text": "The component to display when an error occurs during loading"
      },
      {
        "id": "C",
        "text": "The component to display when the lazy component is rendered"
      },
      {
        "id": "D",
        "text": "The component to display when `Suspense` is not supported"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, prop `fallback` của `Suspense` dùng để hiển thị UI tạm thời trong khi component lazy đang được tải. Đây là hành vi chuẩn, không liên quan đến lỗi hay trình duyệt không hỗ trợ."
  },
  {
    "id": "fer202-d06-q49",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Question: 49\n\n(Choose 1 answer)\n\nWhat is the correct way to wrap a lazy component with Suspense in React?",
    "options": [
      {
        "id": "A",
        "text": "`<Suspense loading={<Loading />}> <MyComponent /> </Suspense>`"
      },
      {
        "id": "B",
        "text": "`<Suspense fallback={<Loading />}> <MyComponent /> </Suspense>`"
      },
      {
        "id": "C",
        "text": "`<Suspense wait={<Loading />}> <MyComponent /> </Suspense>`"
      },
      {
        "id": "D",
        "text": "`<Suspense fallback={<Loading />} loading={<MyComponent />} />`"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, để bao bọc component lazy với Suspense, ta dùng thuộc tính `fallback` để chỉ định UI hiển thị khi component đang tải. Cú pháp đúng là `<Suspense fallback={...}>`. Các tùy chọn khác như `loading`, `wait` không tồn tại."
  },
  {
    "id": "fer202-d06-q50",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Question: 50\n\n(Choose 1 answer)\n\nHow do you define a dynamic route parameter in React Router?",
    "options": [
      {
        "id": "A",
        "text": "`<Route path=\"/user/id\" component={UserProfile} />`"
      },
      {
        "id": "B",
        "text": "`<Route path=\"/user/:id\" component={UserProfile} />`"
      },
      {
        "id": "C",
        "text": "`<Route path=\"/user?=id\" component={UserProfile} />`"
      },
      {
        "id": "D",
        "text": "`<Route path=\"/user={id}\" component={UserProfile} />`"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React Router, tham số động được định nghĩa bằng dấu hai chấm (:) trước tên biến, ví dụ \"/user/:id\". Các cú pháp khác như \"id\", \"?=id\", hoặc \"={id}\" không hợp lệ trong React Router."
  },
  {
    "id": "fer202-d07-q01",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "49/50 - CAP",
    "options": [
      {
        "id": "A",
        "text": "How do you install Tailwind CSS in a project?"
      },
      {
        "id": "B",
        "text": "Include the Tailwind CSS CDN in the HTML file."
      },
      {
        "id": "C",
        "text": "Use the `npm install tailwind-css` command."
      },
      {
        "id": "D",
        "text": "Install Tailwind CSS globally with npm.\nD. Use the `npx tailwindcss init` command."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Cách chính xác để cài đặt Tailwind CSS trong dự án là chạy lệnh `npx tailwindcss init` để tạo file cấu hình, sau đó cài đặt package qua npm/yarn. Lựa chọn A (CDN) không phải là cách cài đặt chính thức cho dự án có cấu hình. Lựa chọn B sai tên package. Lựa chọn C không đúng vì Tailwind không nên cài global."
  },
  {
    "id": "fer202-d07-q02",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "",
    "options": [
      {
        "id": "A",
        "text": "How do you install Tailwind CSS in a project?"
      },
      {
        "id": "B",
        "text": "Use the npx tailwindcss init command."
      },
      {
        "id": "C",
        "text": "Include the Tailwind CSS CDN in the HTML file."
      },
      {
        "id": "D",
        "text": "Install Tailwind CSS globally with npm."
      },
      {
        "id": "D",
        "text": "Use the npm install tailwind-css command."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Cách chính thức để cài đặt Tailwind CSS trong dự án là chạy lệnh `npx tailwindcss init` để tạo file cấu hình, sau đó cấu hình PostCSS và thêm các lớp Tailwind vào CSS. Các lựa chọn khác không chính xác hoặc không đầy đủ."
  },
  {
    "id": "fer202-d07-q03",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Answer | (Choose 1 answer)\n--- | ---\n☐ A | What is the purpose of Code Splitting in web development?\n☐ B |",
    "options": [
      {
        "id": "A",
        "text": "To obfuscate code for security purposes\n☐ C |"
      },
      {
        "id": "B",
        "text": "To enhance cross-browser compatibility\n☐ D |"
      },
      {
        "id": "C",
        "text": "To combine multiple code files into a single bundle\n|"
      },
      {
        "id": "D",
        "text": "To improve web performance by loading only necessary code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này."
  },
  {
    "id": "fer202-d07-q04",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which of the following statements about Redux selectors is true?",
    "options": [
      {
        "id": "A",
        "text": "Selectors are responsible for dispatching actions"
      },
      {
        "id": "B",
        "text": "Selectors are used to modify the Redux store directly"
      },
      {
        "id": "C",
        "text": "Selectors are only used in React class components"
      },
      {
        "id": "D",
        "text": "Selectors are pure functions that derive specific data from the Redux store"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Redux selectors là hàm thuần (pure functions) dùng để trích xuất dữ liệu từ store, không thay đổi store hay dispatch action. Chúng có thể dùng trong cả functional và class components."
  },
  {
    "id": "fer202-d07-q05",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "3/50 - CAP\n\nSelect the code snippet that correctly defines a Functional Component in React.",
    "options": [
      {
        "id": "A",
        "text": "function MyComponent() {\n  return <div>Hello, World!</div>;\n}"
      },
      {
        "id": "B",
        "text": "const MyComponent = () => {\n  return <div>Hello, World!</div>;\n};"
      },
      {
        "id": "C",
        "text": "class MyComponent extends React.Component {\n  render() {\n    return <div>Hello, World!</div>;\n  }\n}"
      },
      {
        "id": "D",
        "text": "const MyComponent = React.createClass({\n  render() {\n    return <div>Hello, World!</div>;\n  }\n});"
      }
    ],
    "correctOptionIds": [
      "A",
      "B"
    ],
    "explanation": "A và B đều là cách định nghĩa Functional Component hợp lệ trong React. A dùng function declaration, B dùng arrow function. C là Class Component, D dùng React.createClass (đã lỗi thời). Câu hỏi yêu cầu chọn 2 đáp án đúng."
  },
  {
    "id": "fer202-d07-q06",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you create a new Git repository?",
    "options": [
      {
        "id": "A",
        "text": "By Loning an existing repository"
      },
      {
        "id": "B",
        "text": "By committing changes using \"git commit -m\""
      },
      {
        "id": "C",
        "text": "By running \"git init\" in the project directory"
      },
      {
        "id": "D",
        "text": "By adding a remote repository URL"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Lệnh \"git init\" khởi tạo một kho lưu trữ Git mới trong thư mục hiện tại. Các lựa chọn khác: A là sao chép repo có sẵn, B là lưu thay đổi, D là thêm remote — không tạo repo mới."
  },
  {
    "id": "fer202-d07-q07",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "5/50 - CAP\n\nHow can you import functions or variables from an ES6 module?",
    "options": [
      {
        "id": "A",
        "text": "By using the export keyword"
      },
      {
        "id": "B",
        "text": "By using the require function"
      },
      {
        "id": "C",
        "text": "By using the import keyword"
      },
      {
        "id": "D",
        "text": "By using the include directive"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong ES6, để nhập hàm hoặc biến từ một module, ta dùng từ khóa 'import'. 'export' dùng để xuất, 'require' là của CommonJS, còn 'include' không tồn tại trong ES6."
  },
  {
    "id": "fer202-d07-q08",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Answer | (Choose 1 answer)\n--- | ---\n A | What is the benefit of using Code Splitting and lazy components for web performance?\n B |",
    "options": [
      {
        "id": "A",
        "text": "Enhanced security\n C |"
      },
      {
        "id": "B",
        "text": "Handle load-time User Experience (UX)\n D |"
      },
      {
        "id": "C",
        "text": "Handle CORS\n|"
      },
      {
        "id": "D",
        "text": "Smaller bundle sizes"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này."
  },
  {
    "id": "fer202-d07-q09",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "A What is Tailwind CSS?\nB\nC\nD",
    "options": [
      {
        "id": "A",
        "text": "A database management system for storing CSS styles."
      },
      {
        "id": "B",
        "text": "A utility-first CSS framework for building responsive web interfaces."
      },
      {
        "id": "C",
        "text": "A JavaScript framework for building single-page applications."
      },
      {
        "id": "D",
        "text": "A programming language used for backend development."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Tailwind CSS là framework CSS theo kiểu 'utility-first', giúp xây dựng giao diện web đáp ứng (responsive) bằng cách áp dụng các class nhỏ, có sẵn. Không phải hệ quản trị CSDL, framework JS hay ngôn ngữ lập trình backend."
  },
  {
    "id": "fer202-d07-q10",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the main concept behind Tailwind CSS?",
    "options": [
      {
        "id": "A",
        "text": "Utility classes."
      },
      {
        "id": "B",
        "text": "Object-oriented programming."
      },
      {
        "id": "C",
        "text": "Modular CSS."
      },
      {
        "id": "D",
        "text": "Component-based architecture."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Tailwind CSS dựa trên hệ thống lớp tiện ích (utility classes) để xây dựng giao diện trực tiếp trong HTML, thay vì viết CSS tùy chỉnh. Không dựa trên OOP, module hay component architecture."
  },
  {
    "id": "fer202-d07-q11",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "9/50 - CAP",
    "options": [
      {
        "id": "A",
        "text": "How would you use the useState Hook to manage a counter in a React component?"
      },
      {
        "id": "B",
        "text": "`const [count, setCount] = useState(0);`"
      },
      {
        "id": "C",
        "text": "`const count = useState(0)[0];`"
      },
      {
        "id": "D",
        "text": "`const count = useState(0);`\nD. `const [count, setCount] = useState();`"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Cú pháp đúng để dùng useState trong React là destructuring array: [state, setState] = useState(initialValue). Đáp án A là chuẩn nhất. Các đáp án khác sai cú pháp hoặc không khai báo giá trị khởi tạo hợp lệ."
  },
  {
    "id": "fer202-d07-q12",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the primary architectural style used in designing web services that follow REST principles?",
    "options": [
      {
        "id": "A",
        "text": "MVC (Model-View-Controller)"
      },
      {
        "id": "B",
        "text": "SOAP (Simple Object Access Protocol)"
      },
      {
        "id": "C",
        "text": "RESTful (Representational State Transfer)"
      },
      {
        "id": "D",
        "text": "RPC (Remote Procedure Call)"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "REST là kiến trúc chính để thiết kế web service theo nguyên tắc REST. MVC là mô hình giao diện, SOAP là giao thức, RPC là kiểu gọi hàm từ xa — không phải kiến trúc REST."
  },
  {
    "id": "fer202-d07-q13",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "A\nHow do you create tabs in Bootstrap?\nB",
    "options": [
      {
        "id": "A",
        "text": "By using the `<tab>` HTML element.\nC"
      },
      {
        "id": "B",
        "text": "By using the `.nav` and `.nav-item` classes along with the `data-bs-toggle=\"tab\"` attribute.\nD"
      },
      {
        "id": "C",
        "text": "By using JavaScript to dynamically create and manipulate tab elements."
      },
      {
        "id": "D",
        "text": "By applying the `.tab` class to the container element."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Bootstrap tabs are created using .nav, .nav-item, and data-bs-toggle=\"tab\". Option B is correct. <tab> doesn’t exist (A), JavaScript is optional (C), and .tab class alone doesn’t create tabs (D)."
  },
  {
    "id": "fer202-d07-q14",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "12/50 - CAP\n\n A\nCan PropTypes be used for both functional and class components?\n\n B",
    "options": [
      {
        "id": "A",
        "text": "Yes, but the syntax for defining PropTypes is different for each type of component.\n\n C"
      },
      {
        "id": "B",
        "text": "Yes, PropTypes can be used in both types of components.\n\n D"
      },
      {
        "id": "C",
        "text": "No, PropTypes can only be used in functional components."
      },
      {
        "id": "D",
        "text": "No, PropTypes can only be used in class components."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "PropTypes can be used with both functional and class components in React. The syntax is the same — you assign PropTypes to the component’s .propTypes property. Option B correctly states this without unnecessary complexity."
  },
  {
    "id": "fer202-d07-q15",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which React concept is used to pass data from a parent component to a child component?",
    "options": [
      {
        "id": "A",
        "text": "Props"
      },
      {
        "id": "B",
        "text": "Context"
      },
      {
        "id": "C",
        "text": "State"
      },
      {
        "id": "D",
        "text": "Ref"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, Props là cơ chế chính để truyền dữ liệu từ component cha xuống component con. State dùng để quản lý dữ liệu nội bộ, Context dùng để chia sẻ dữ liệu toàn cục, Ref dùng để tham chiếu DOM. Câu hỏi rõ ràng hỏi về truyền dữ liệu từ cha sang con → Props là đúng."
  },
  {
    "id": "fer202-d07-q16",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "",
    "options": [
      {
        "id": "A",
        "text": "How does the Grid component in React-Bootstrap help in creating a responsive layout?"
      },
      {
        "id": "B",
        "text": "The Grid component provides pre-built responsive layouts that you can directly use in your application."
      },
      {
        "id": "C",
        "text": "The Grid component helps in aligning the elements vertically and horizontally on the page."
      },
      {
        "id": "D",
        "text": "The Grid component allows you to define a flexible grid system with rows and columns that automatically adjusts based on the screen size.\n\nD. The Grid component automatically resizes and repositions the elements based on the available space."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "React-Bootstrap’s Grid component implements a responsive 12-column grid system that adapts layout based on viewport size using breakpoints — not just alignment or direct pre-built layouts."
  },
  {
    "id": "fer202-d07-q17",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "15/50-CAP\n\nWhich of the following best describes a reducer in Redux?",
    "options": [
      {
        "id": "A",
        "text": "A function that triggers actions in response to user interactions"
      },
      {
        "id": "B",
        "text": "A middleware that handles asynchronous operations in Redux"
      },
      {
        "id": "C",
        "text": "A function that specifies how the application's state changes in response to actions"
      },
      {
        "id": "D",
        "text": "A component that manages the application's state"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Reducer trong Redux là hàm thuần (pure function) nhận state hiện tại và action, trả về state mới. Nó không trigger action (A), không phải middleware (B), và không phải component (D)."
  },
  {
    "id": "fer202-d07-q18",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Select the code snippet that correctly defines a Higher-Order Component in React using an arrow function with a named function",
    "options": [
      {
        "id": "A",
        "text": "function withLogger(WrappedComponent) {\n  return class extends React.Component {\n    // HOC implementation\n  };\n}"
      },
      {
        "id": "B",
        "text": "const withLogger = (WrappedComponent) => {\n  return class extends React.Component {\n    // HOC implementation\n  };\n}"
      },
      {
        "id": "C",
        "text": "function withLogger(WrappedComponent) {\n  return function HOC() {\n    // HOC implementation\n  };\n}"
      },
      {
        "id": "D",
        "text": "const withLogger = (WrappedComponent) => {\n  return function HOC() {\n    // HOC implementation\n  };\n}"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "HOC trong React dùng arrow function phải trả về một class component kế thừa React.Component. Đáp án B đúng cú pháp và yêu cầu đề bài."
  },
  {
    "id": "fer202-d07-q19",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is event pooling in React?",
    "options": [
      {
        "id": "A",
        "text": "The process of creating multiple event objects for each event."
      },
      {
        "id": "B",
        "text": "The process of handling events in a pool of event handlers."
      },
      {
        "id": "C",
        "text": "The process of reusing event objects for performance optimization."
      },
      {
        "id": "D",
        "text": "The process of cleaning up event objects after they are used."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Event pooling trong React là kỹ thuật tái sử dụng đối tượng sự kiện để giảm chi phí tạo đối tượng mới, từ đó tối ưu hiệu suất — đặc biệt quan trọng trong ứng dụng có nhiều sự kiện. Không phải là tạo nhiều event hay dọn dẹp sau dùng."
  },
  {
    "id": "fer202-d07-q20",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "18/50 - CAP\nCan you define multiple Type and Value validators for a single prop in PropTypes?",
    "options": [
      {
        "id": "A",
        "text": "No, you can only define one validator for a prop."
      },
      {
        "id": "B",
        "text": "No, Type and Value validators cannot be used together."
      },
      {
        "id": "C",
        "text": "Yes, you can define multiple validators for a prop."
      },
      {
        "id": "D",
        "text": "Yes, but it's not recommended for code readability."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong PropTypes của React, bạn có thể định nghĩa nhiều validator cho cùng một prop, ví dụ kết hợp kiểu dữ liệu và giá trị cụ thể. Điều này giúp kiểm tra linh hoạt và chặt chẽ hơn, không vi phạm quy tắc hay gây lỗi."
  },
  {
    "id": "fer202-d07-q21",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "A\nB\nC\nD\n\n```\n<Container>\n  <Row>\n    <Col sm={6} md={4}>\n      {/* Placeholder content */}\n    </Col>\n    <Col sm={6} md={8}>\n      {/* Placeholder content */}\n    </Col>\n  </Row>\n</Container>\n```\nHow many columns will the code above display on a mobile screen?",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Trên màn hình di động (sm), mã có 2 cột: sm={6} cho mỗi cột → tổng cộng 12/6 = 2 cột. md={4} và md={8} chỉ áp dụng cho màn hình lớn hơn."
  },
  {
    "id": "fer202-d07-q22",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you declare multiple routes in React Router?",
    "options": [
      {
        "id": "A",
        "text": "By nesting `<Route>` components inside each other"
      },
      {
        "id": "B",
        "text": "By using the `path` prop with multiple values in a single `<Route>` component"
      },
      {
        "id": "C",
        "text": "By using the `<Routes>` component instead of `<Route>`"
      },
      {
        "id": "D",
        "text": "By using an array of Route components inside the Routes component."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Trong React Router v6, để khai báo nhiều route, ta sử dụng component <Routes> chứa nhiều component <Route> bên trong. Mỗi <Route> định nghĩa một đường dẫn và component tương ứng. Cách này giúp React Router chọn route phù hợp nhất để render."
  },
  {
    "id": "fer202-d07-q23",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "21/50 - CAP",
    "options": [
      {
        "id": "A",
        "text": "What is the purpose of the className attribute in JSX?"
      },
      {
        "id": "B",
        "text": "To define a unique identifier for the element"
      },
      {
        "id": "C",
        "text": "To specify the component's class name"
      },
      {
        "id": "D",
        "text": "To add inline styles to the element\nD. To define a CSS class for the JSX element"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Trong JSX, thuộc tính `className` được dùng để gán class CSS cho phần tử, tương đương với `class` trong HTML. Không dùng để định danh duy nhất (id) hay style inline."
  },
  {
    "id": "fer202-d07-q24",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "22/50 - CAP",
    "options": [
      {
        "id": "A",
        "text": "How would you use the useEffect Hook to fetch data from an API in a React component?"
      },
      {
        "id": "B",
        "text": "useEffect(fetchData, []);"
      },
      {
        "id": "C",
        "text": "useEffect(() => fetchData(), [fetchData]);"
      },
      {
        "id": "D",
        "text": "useEffect(() => fetchData());\nD. useEffect(() => fetchData(), []);"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Trong React, để fetch dữ liệu từ API khi component mount, ta dùng useEffect với dependency array rỗng []. Cú pháp đúng là useEffect(() => fetchData(), []), đảm bảo chỉ chạy một lần sau khi render đầu tiên. Các lựa chọn khác thiếu callback hoặc dependency không hợp lý."
  },
  {
    "id": "fer202-d07-q25",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How are Class Components written in React?",
    "options": [
      {
        "id": "A",
        "text": "class."
      },
      {
        "id": "B",
        "text": "component."
      },
      {
        "id": "C",
        "text": "function."
      },
      {
        "id": "D",
        "text": "const."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Class components in React are defined using ES6 class syntax extending React.Component. Example: class MyComponent extends React.Component { ... }. Option A is the correct syntactic keyword."
  },
  {
    "id": "fer202-d07-q26",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A Which prop is used to define default values for props in a functional component in React 18?\nB\nC A. initialProps\nD B. props",
    "options": [
      {
        "id": "C",
        "text": "defaultProps"
      },
      {
        "id": "D",
        "text": "defaultValue"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong React 18, prop 'defaultProps' được dùng để định nghĩa giá trị mặc định cho props trong functional component. Các lựa chọn khác như 'initialProps', 'props', 'defaultValue' không đúng ngữ cảnh này."
  },
  {
    "id": "fer202-d07-q27",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "",
    "options": [
      {
        "id": "A",
        "text": "How can you set up Git for version control?"
      },
      {
        "id": "A",
        "text": "By using a Git GUI client"
      },
      {
        "id": "B",
        "text": "By running \"npm install git\""
      },
      {
        "id": "C",
        "text": "By configuring Git settings in Visual Studio Code"
      },
      {
        "id": "D",
        "text": "By downloading Git from the official website"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này."
  },
  {
    "id": "fer202-d07-q28",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "multiple",
    "prompt": "How can you pass parameters to an event handler in React?",
    "options": [
      {
        "id": "A",
        "text": "Using the bind() method."
      },
      {
        "id": "B",
        "text": "Using arrow functions."
      },
      {
        "id": "C",
        "text": "Using the addEventListener() method."
      },
      {
        "id": "D",
        "text": "Using the this keyword."
      }
    ],
    "correctOptionIds": [
      "A",
      "B"
    ],
    "explanation": "Trong React, bạn có thể truyền tham số cho event handler bằng: (1) bind() để bind this và tham số; (2) arrow function để bao bọc hàm và truyền tham số. addEventListener() không dùng trong React JSX, và this keyword không phải cách truyền tham số."
  },
  {
    "id": "fer202-d07-q29",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which of the following statements about reducers in Redux is true?",
    "options": [
      {
        "id": "A",
        "text": "Reducers are responsible for dispatching actions."
      },
      {
        "id": "B",
        "text": "Reducers must be pure functions with no side effects."
      },
      {
        "id": "C",
        "text": "Reducers can only be used with React class components, not functional components."
      },
      {
        "id": "D",
        "text": "Reducers should have side effects such as API calls or database interactions."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "In Redux, reducers must be pure functions — they take the current state and an action, and return a new state without side effects like API calls or mutations."
  },
  {
    "id": "fer202-d07-q30",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Answer | (Choose 1 answer)\n---|---\n A | What does the fallback prop in Suspense represent?\n B |",
    "options": [
      {
        "id": "A",
        "text": "The component to display when the lazy component is rendered\n C |"
      },
      {
        "id": "B",
        "text": "The component to display when an error occurs during loading\n D |"
      },
      {
        "id": "C",
        "text": "The component to display while the lazy component is loading\n|"
      },
      {
        "id": "D",
        "text": "The component to display when Suspense is not supported"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này."
  },
  {
    "id": "fer202-d07-q31",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How does the Bootstrap grid system help in designing responsive websites?",
    "options": [
      {
        "id": "A",
        "text": "By allowing the layout to adapt to different screen sizes using a 12-column responsive grid system."
      },
      {
        "id": "B",
        "text": "By optimizing the website for search engines."
      },
      {
        "id": "C",
        "text": "By providing pre-designed website templates."
      },
      {
        "id": "D",
        "text": "By automatically adjusting the font sizes based on the screen size."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Bootstrap grid system chia màn hình thành 12 cột, cho phép bố cục tự động điều chỉnh theo kích thước màn hình, đảm bảo giao diện hiển thị tốt trên mọi thiết bị."
  },
  {
    "id": "fer202-d07-q32",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "A\nHow can you configure Tailwind CSS in a Next.js project?\nB\nC\nD",
    "options": [
      {
        "id": "A",
        "text": "By using a CDN link in the HTML file."
      },
      {
        "id": "B",
        "text": "By installing a Tailwind CSS plugin for Next.js."
      },
      {
        "id": "C",
        "text": "By installing the Tailwind CSS package and creating a configuration file."
      },
      {
        "id": "D",
        "text": "By importing a CSS file directly in the component."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "In a Next.js project, Tailwind CSS is configured by installing the Tailwind CSS package via npm/yarn, creating a tailwind.config.js file, and including Tailwind directives in a global CSS file. CDN or direct CSS import are not standard for Next.js."
  },
  {
    "id": "fer202-d07-q33",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you define a dynamic route parameter in React Router?",
    "options": [
      {
        "id": "A",
        "text": "`<Route path=\"/users?userId=:userId\" component={UserDetail} />`"
      },
      {
        "id": "B",
        "text": "`<Route path=\"/users\" component={UserDetail} />`"
      },
      {
        "id": "C",
        "text": "`<Route path=\"/users/{userId}\" component={UserDetail} />`"
      },
      {
        "id": "D",
        "text": "`<Route path=\"/users/:userId\" component={UserDetail} />`"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Trong React Router, tham số động được định nghĩa bằng cách đặt dấu hai chấm trước tên biến (ví dụ: :userId) trong path. Cú pháp này cho phép truyền tham số vào component. Các lựa chọn khác sai cú pháp hoặc không hỗ trợ tham số động."
  },
  {
    "id": "fer202-d07-q34",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What does REST stand for in the context of web services?",
    "options": [
      {
        "id": "A",
        "text": "Responsive Event-driven Server Technologies"
      },
      {
        "id": "B",
        "text": "Remote Execution and State Transfer"
      },
      {
        "id": "C",
        "text": "Resourceful Endpoint and Service Tools"
      },
      {
        "id": "D",
        "text": "Representational State Transfer"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "REST là viết tắt của Representational State Transfer — kiến trúc dùng để thiết kế dịch vụ web, dựa trên giao thức HTTP và trạng thái tài nguyên."
  },
  {
    "id": "fer202-d07-q35",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "33/50 - CAP\n\nHow can route parameters be defined in React Router?",
    "options": [
      {
        "id": "A",
        "text": "By using the path prop with placeholders in the <Route> component"
      },
      {
        "id": "B",
        "text": "By using the params prop in the <Route> component"
      },
      {
        "id": "C",
        "text": "By accessing them directly from the URL"
      },
      {
        "id": "D",
        "text": "By using the match object passed to the component"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React Router, tham số tuyến đường (route parameters) được định nghĩa bằng cách sử dụng prop `path` với các placeholder như `:id` trong thành phần `<Route>`. Ví dụ: `<Route path=\"/user/:id\" />`."
  },
  {
    "id": "fer202-d07-q36",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "34/50 - CAP\n\nWhat are the key features of React?",
    "options": [
      {
        "id": "A",
        "text": "Two-way data binding"
      },
      {
        "id": "B",
        "text": "SQL database integration"
      },
      {
        "id": "C",
        "text": "Automatic styling"
      },
      {
        "id": "D",
        "text": "Virtual DOM"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "React nổi bật với Virtual DOM — một bản sao ảo của DOM thực, giúp tối ưu hiệu suất khi cập nhật giao diện. React không có two-way binding (Angular), không tích hợp SQL hay tự động styling."
  },
  {
    "id": "fer202-d07-q37",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "A\n\nB\n\nC\n\nD\n\n```javascript\nconst jsonServer = require('json-server');\nconst server = jsonServer.create();\nconst router = jsonServer.router('data.json');\nconst port = 3000;\n\nserver.use(router);\n\nserver.listen(port, () => {\n  console.log(`JSON server is running on port ${port}`);\n});\n```\nWhat is the above code used for?",
    "options": [
      {
        "id": "A",
        "text": "Create a dynamic web application using JSON data."
      },
      {
        "id": "B",
        "text": "Create a dynamic server to serve JSON data."
      },
      {
        "id": "C",
        "text": "Configure the development environment for the project using JSON."
      },
      {
        "id": "D",
        "text": "Create a JSON file based on data from the server."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Đoạn mã JavaScript dùng thư viện json-server để khởi tạo một server HTTP lắng nghe trên cổng 3000, phục vụ dữ liệu từ file 'data.json'. Đây là server giả lập REST API, không phải tạo ứng dụng web động hay file JSON."
  },
  {
    "id": "fer202-d07-q38",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "36/50 - CAP\n\nWhat are the key features of Next.js?",
    "options": [
      {
        "id": "A",
        "text": "Database integration, code debugging, and form validation."
      },
      {
        "id": "B",
        "text": "CSS styling, version control, and error handling."
      },
      {
        "id": "C",
        "text": "Package management, command-line interface, and testing framework."
      },
      {
        "id": "D",
        "text": "Server-side rendering, Static Site Generation, Image Optimization, Built-in Routing."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Next.js nổi bật với SSR, SSG, tối ưu hình ảnh và định tuyến tích hợp. Các lựa chọn khác đề cập đến công cụ hoặc tính năng không phải đặc trưng cốt lõi của Next.js."
  },
  {
    "id": "fer202-d07-q39",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which class is used to create a collapsible accordion component in Bootstrap 5?",
    "options": [
      {
        "id": "A",
        "text": "`.collapsible`"
      },
      {
        "id": "B",
        "text": "`.accordion`"
      },
      {
        "id": "C",
        "text": "`.collapse`"
      },
      {
        "id": "D",
        "text": "`.collapse-accordion`"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong Bootstrap 5, lớp `.accordion` được dùng để tạo thành phần accordion có thể gập lại. Các lớp khác như `.collapse` chỉ dùng để ẩn/hiện nội dung, không tạo cấu trúc accordion hoàn chỉnh."
  },
  {
    "id": "fer202-d07-q40",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "38/50 - CAP\nA\nDescribe the Redux flow process when an action is dispatched.",
    "options": [
      {
        "id": "A",
        "text": "Action is dispatched $\\rightarrow$ Middleware $\\rightarrow$ Reducer $\\rightarrow$ Store $\\rightarrow$ Component."
      },
      {
        "id": "B",
        "text": "Middleware dispatches action $\\rightarrow$ Reducer $\\rightarrow$ Store $\\rightarrow$ Component."
      },
      {
        "id": "C",
        "text": "Component dispatches action $\\rightarrow$ Reducer $\\rightarrow$ Middleware $\\rightarrow$ Store."
      },
      {
        "id": "D",
        "text": "Reducer dispatches action $\\rightarrow$ Middleware $\\rightarrow$ Component $\\rightarrow$ Store.\""
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong Redux, luồng xử lý bắt đầu khi action được dispatch, sau đó đi qua middleware (nếu có), rồi đến reducer để tính toán state mới, cập nhật vào store, và cuối cùng component được cập nhật thông qua subscription."
  },
  {
    "id": "fer202-d07-q41",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of the next/link module in Next.js?",
    "options": [
      {
        "id": "A",
        "text": "It provides client-side routing capabilities."
      },
      {
        "id": "B",
        "text": "It enables serverless function deployment."
      },
      {
        "id": "C",
        "text": "It is used for handling form submissions."
      },
      {
        "id": "D",
        "text": "It is responsible for server-side rendering."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Module next/link trong Next.js dùng để điều hướng giữa các trang mà không cần tải lại toàn bộ trang — tức là client-side routing. Các lựa chọn khác không đúng chức năng của module này."
  },
  {
    "id": "fer202-d07-q42",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Answer | (Choose 1 answer)\n--- | ---\n A | How does using Suspense with lazy components enhance user experience?\n B |",
    "options": [
      {
        "id": "A",
        "text": "It improves the responsiveness and perceived performance of the application\n C |"
      },
      {
        "id": "B",
        "text": "It eliminates the need for error handling in asynchronous rendering\n D |"
      },
      {
        "id": "C",
        "text": "It displays a loading indicator while the lazy component is being loaded<br>D. It prevents the user from interacting with the page until all components are loaded"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này."
  },
  {
    "id": "fer202-d07-q43",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "import React, { useState } from 'react';\n\nfunction Dish({ name }) {\n  return <li>{name}</li>;\n}\n\nfunction Kitchen() {\n  const [orders, setOrders] = useState([]);\n\n  // Triggering a render (delivering the guest's order to the kitchen)\n  const addOrder = (order) => {\n    setOrders((prevOrders) => [...prevOrders, order]);\n  };\n\n  // Rendering the component (preparing the order in the kitchen)\n  const renderOrders = () => {\n    return orders.map((order, index) => <Dish key={index} name={order} />);\n  };\n\n  // Committing to the DOM (placing the order on the table)\n  return (\n    <div>\n      <h2>Orders:</h2>\n      <ul>{renderOrders()}</ul>\n    </div>\n  );\n}\n\nfunction Waiter() {\n  const handleOrder = () => => {\n    // Triggering a render (delivering the guest's order to the kitchen)\n    kitchenRef.current.addOrder('Pizza')\n\nWhat React lifecycle phases and patterns are demonstrated in the code above when managing restaurant orders and triggering renders?",
    "options": [
      {
        "id": "A",
        "text": "Triggering, rendering, and committing in React component lifecycle"
      },
      {
        "id": "B",
        "text": "Direct Redux store middleware dispatching"
      },
      {
        "id": "C",
        "text": "React Router data loading and route parameter handling"
      },
      {
        "id": "D",
        "text": "Server-Side Rendering with Next.js getServerSideProps"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này."
  },
  {
    "id": "fer202-d07-q44",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a utility-first CSS framework that is often used with Next.js?",
    "options": [
      {
        "id": "A",
        "text": "Material-UI"
      },
      {
        "id": "B",
        "text": "Bootstrap"
      },
      {
        "id": "C",
        "text": "Bulma"
      },
      {
        "id": "D",
        "text": "Tailwind CSS"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Tailwind CSS là framework CSS theo kiểu utility-first, thường được dùng với Next.js để xây dựng giao diện linh hoạt và nhanh chóng. Các lựa chọn khác như Bootstrap, Material-UI, Bulma là component-based hoặc không phải utility-first."
  },
  {
    "id": "fer202-d07-q45",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Answer | (Choose 1 answer)\n--- | ---\n A | What is React-Bootstrap?\n B |",
    "options": [
      {
        "id": "A",
        "text": "It combines the flexibility and power of the Bootstrap framework with the dynamic nature of React.\n C |"
      },
      {
        "id": "B",
        "text": "It is a version control system for React projects.\n D |"
      },
      {
        "id": "C",
        "text": "It is a programming language used for back-end development.\n|"
      },
      {
        "id": "D",
        "text": "It is a database management system for React applications."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này."
  },
  {
    "id": "fer202-d07-q46",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you declare a constant variable in ES6?",
    "options": [
      {
        "id": "A",
        "text": "By using the final keyword"
      },
      {
        "id": "B",
        "text": "By using the let keyword"
      },
      {
        "id": "C",
        "text": "By using the const keyword"
      },
      {
        "id": "D",
        "text": "By using the var keyword"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong ES6, từ khóa 'const' dùng để khai báo biến hằng số — không thể gán lại giá trị sau khi khai báo. 'let' là biến cục bộ, 'var' là biến toàn cục, và 'final' không tồn tại trong JavaScript."
  },
  {
    "id": "fer202-d07-q47",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Can you provide an example of a custom property validator in React that checks if a prop is a positive number?",
    "options": [
      {
        "id": "A",
        "text": "value: PropTypes.number && value >= 0"
      },
      {
        "id": "B",
        "text": "value: function(props, propName, componentName)"
      },
      {
        "id": "C",
        "text": "value: PropTypes.number && value > 0"
      },
      {
        "id": "D",
        "text": "value: PropTypes.positiveNumber"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, để tạo custom validator cho prop, ta dùng hàm callback với signature: function(props, propName, componentName). Các lựa chọn A, C là cú pháp sai, D không tồn tại trong PropTypes. Đây là cách chính xác để kiểm tra prop là số dương."
  },
  {
    "id": "fer202-d07-q48",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of json-server in the context of setting up a server?",
    "options": [
      {
        "id": "A",
        "text": "To handle user input and interactions."
      },
      {
        "id": "B",
        "text": "To provide a static web server for serving JSON data."
      },
      {
        "id": "C",
        "text": "To display the website content."
      },
      {
        "id": "D",
        "text": "To generate dynamic server responses."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "json-server là công cụ tạo server REST giả lập từ file JSON, dùng để phục vụ dữ liệu JSON tĩnh trong quá trình phát triển frontend, không xử lý logic động hay tương tác người dùng."
  },
  {
    "id": "fer202-d07-q49",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Answer | (Choose 1 answer)\n--- | ---\n A | What is a prop in React used for?\n B |",
    "options": [
      {
        "id": "A",
        "text": "It enables communication and data transfer between components.\n C |"
      },
      {
        "id": "B",
        "text": "It defines the internal state of a component.\n D |"
      },
      {
        "id": "C",
        "text": "It handles user interactions and events.<br>D. It specifies the visual appearance of a component."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này."
  },
  {
    "id": "fer202-d07-q50",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Answer | (Choose 1 answer)\n--- | ---\n A | How can you optimize performance when using Hooks in React?\n B |",
    "options": [
      {
        "id": "A",
        "text": "By avoiding unnecessary re-renders with the memo Hook.\n C |"
      },
      {
        "id": "B",
        "text": "By using the useLayoutEffect Hook instead of useEffect.\n D |"
      },
      {
        "id": "C",
        "text": "By using the useDebugValue Hook for debugging purposes.\n|"
      },
      {
        "id": "D",
        "text": "By using the useMemo and useCallback Hooks."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này."
  },
  {
    "id": "fer202-d08-q01",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "A\n\nB\n\nC\n\nD\n\nHow can you import functions or variables from an ES6 module?",
    "options": [
      {
        "id": "A",
        "text": "By using the import keyword"
      },
      {
        "id": "B",
        "text": "By using the require function"
      },
      {
        "id": "C",
        "text": "By using the export keyword"
      },
      {
        "id": "D",
        "text": "By using the include directive"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong ES6, để import hàm hoặc biến từ module, dùng từ khóa 'import'. 'require' là của CommonJS, 'export' dùng để xuất, 'include' không tồn tại trong ES6."
  },
  {
    "id": "fer202-d08-q02",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which action dispatch would correctly increment the count in the reducer setup?",
    "options": [
      {
        "id": "A",
        "text": "dispatch({ type: 'add' });"
      },
      {
        "id": "B",
        "text": "dispatch({ action: 'increment' });"
      },
      {
        "id": "C",
        "text": "dispatch({ type: 'increment' });"
      },
      {
        "id": "D",
        "text": "dispatch({ command: 'increment' });"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong Redux/React, action phải có thuộc tính 'type' để reducer nhận biết. 'increment' là tên hành động phổ biến. Các lựa chọn khác dùng 'action' hoặc 'command' — không chuẩn — nên sai."
  },
  {
    "id": "fer202-d08-q03",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Evaluate the differences between using the Fetch API and Axios for making HTTP requests. Which statement is true?",
    "options": [
      {
        "id": "A",
        "text": "The Fetch API automatically handles JSON responses, while Axios requires manual parsing"
      },
      {
        "id": "B",
        "text": "Axios provides built-in support for request and response interception, while the Fetch API does not"
      },
      {
        "id": "C",
        "text": "The Fetch API supports automatic retries for failed requests, while Axios does not"
      },
      {
        "id": "D",
        "text": "Axios is built into all modern browsers, while the Fetch API requires an additional library"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Axios hỗ trợ sẵn cơ chế interceptors để xử lý request/response trước khi gửi hoặc nhận, trong khi Fetch API không có tính năng này, phải tự viết logic."
  },
  {
    "id": "fer202-d08-q04",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "How would you extract and display multiple parameters, userId and postId, in a component?",
    "options": [
      {
        "id": "A",
        "text": "`const { userId, postId } = useParams();`"
      },
      {
        "id": "B",
        "text": "`const userId = useParams('userId'); const postId = useParams('postId');`"
      },
      {
        "id": "C",
        "text": "`const userId = route.params.userId; const postId = route.params.postId;`"
      },
      {
        "id": "D",
        "text": "`const { userId } = useParams(); const { postId } = useParams();`"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React Router v6, `useParams()` trả về một object chứa các tham số route. Cách đúng để trích xuất nhiều tham số là dùng destructuring: `const { userId, postId } = useParams();`."
  },
  {
    "id": "fer202-d08-q05",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the primary purpose of the tailwind.config.js file in a Tailwind CSS project?",
    "options": [
      {
        "id": "A",
        "text": "To define custom utility classes for HTML elements."
      },
      {
        "id": "B",
        "text": "To configure and customize the default Tailwind CSS settings."
      },
      {
        "id": "C",
        "text": "To handle CSS minification for production."
      },
      {
        "id": "D",
        "text": "To install third-party plugins automatically."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Tệp tailwind.config.js dùng để tùy chỉnh cài đặt mặc định của Tailwind CSS như màu sắc, khoảng cách, font, v.v. — không dùng để tạo class hay minify CSS."
  },
  {
    "id": "fer202-d08-q06",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What does the npx create-next-app command do?",
    "options": [
      {
        "id": "A",
        "text": "It creates a new React application"
      },
      {
        "id": "B",
        "text": "It creates a new Next.js application"
      },
      {
        "id": "C",
        "text": "It installs Tailwind CSS"
      },
      {
        "id": "D",
        "text": "It creates a new package.json in NextJS"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Lệnh npx create-next-app là công cụ chính thức của Next.js để khởi tạo một dự án Next.js mới, bao gồm cấu trúc thư mục, các dependency cần thiết và cấu hình cơ bản."
  },
  {
    "id": "fer202-d08-q07",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Analyze the differences between Flux and MVC architectures. Which statement is true?",
    "options": [
      {
        "id": "A",
        "text": "Flux enforces unidirectional data flow, while MVC allows bidirectional data flow."
      },
      {
        "id": "B",
        "text": "MVC enforces unidirectional data flow, while Flux allows bidirectional data flow."
      },
      {
        "id": "C",
        "text": "Both Flux and MVC enforce unidirectional data flow."
      },
      {
        "id": "D",
        "text": "Both Flux and MVC allow bidirectional data flow."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Flux architecture strictly follows unidirectional data flow (Action → Dispatcher → Store → View), whereas MVC allows bidirectional communication between Model, View, and Controller, which can lead to complex dependencies."
  },
  {
    "id": "fer202-d08-q08",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the initial state of a promise?",
    "options": [
      {
        "id": "A",
        "text": "Fulfilled"
      },
      {
        "id": "B",
        "text": "Rejected"
      },
      {
        "id": "C",
        "text": "Pending"
      },
      {
        "id": "D",
        "text": "Resolved"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Khi một Promise được tạo, trạng thái ban đầu luôn là 'pending', cho đến khi nó được resolve (fulfilled) hoặc reject."
  },
  {
    "id": "fer202-d08-q09",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Answer (Choose 1\nanswer)\nA\nB\nC\nD\n\nWhat is the difference between the render() method and the commit() method in React?",
    "options": [
      {
        "id": "A",
        "text": "The render() method defines the component's structure, while the commit() method handles side effects."
      },
      {
        "id": "B",
        "text": "The render() method handles events, while the commit() method defines the component's structure."
      },
      {
        "id": "C",
        "text": "The render() method is called before the component is mounted, while the commit() method is called after the component is mounted."
      },
      {
        "id": "D",
        "text": "There is no commit() method in React."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Trong React, không tồn tại phương thức commit() như một phần của API chính thức. Phương thức render() dùng để mô tả giao diện, còn các side effect được xử lý qua useEffect. Các lựa chọn A, B, C đều sai vì chúng đề cập đến commit() như một phương thức có thật trong React."
  },
  {
    "id": "fer202-d08-q10",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "How can you avoid contradictions in state with this code?\n```javascript\nconst [isOpen, setIsOpen] = useState(false);\nconst [buttonText, setButtonText] = useState(isOpen ? \"se\" : \"Open\");\nfunction toggle() {\n  setIsOpen(!isOpen);\n  setButtonText(isOpen ? \"Open\" : \"se\");\n}\n```",
    "options": [
      {
        "id": "A",
        "text": "The code above is fine as it is."
      },
      {
        "id": "B",
        "text": "Remove buttonText from state and calculate it dynamically in the render method based on isOpen."
      },
      {
        "id": "C",
        "text": "Keep both isOpen and buttonText in state but update them separately."
      },
      {
        "id": "D",
        "text": "Use useEffect to sync buttonText with isOpen."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Cập nhật buttonText trong hàm toggle dựa trên giá trị isOpen trước khi cập nhật sẽ gây ra lỗi logic. Nên tính buttonText trực tiếp từ isOpen trong render để đảm bảo đồng bộ."
  },
  {
    "id": "fer202-d08-q11",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "```javascript\nimport React, { useState } from 'react';\n\nfunction Dish({ name }) {\n  return <li>{name}</li>;\n}\n\nfunction Kitchen() {\n  const [orders, setOrders] = useState([]);\n\n  // Triggering a render (delivering the guest's order to the kitchen)\n  const addOrder = (order) => {\n    setOrders((prevOrders) => [...prevOrders, order]);\n  };\n\n  // Rendering the component (preparing the order in the kitchen)\n  const renderOrders = () => {\n    return orders.map((order, index) => <Dish key={index} name={order} />);\n  };\n\n  // Committing to the DOM (placing the order on the table)\n  return (\n    <div>\n      <h2>Orders:</h2>\n      <ul>{renderOrders()}</ul>\n    </div>\n  );\n}\n\nfunction Waiter() {\n  const handleOrder = () => {\n    // Triggering a render (delivering the guest's order to the kitchen)\n    kitchenRef.current.addOrder('Pizza');\n  };\n\n  // A reference to the Kitchen component\n  const kitchenRef = React.createRef();\n\n  // Rendering the Waiter component\n  return (\n    <div>\n      <h1>Welcome to the Restaurant!</h1>\n      <button onClick={handleOrder}>Place Order</button>\n      <Kitchen ref={kitchenRef} />\n    </div>\n  );\n}\n\nexport default Waiter;\n```\n\nWhich process in React corresponds to \"send order to kitchen\"?\n\nWhat React lifecycle phases and patterns are demonstrated in the code above when managing restaurant orders and triggering renders?",
    "options": [
      {
        "id": "A",
        "text": "Triggering, rendering, and committing in React component lifecycle"
      },
      {
        "id": "B",
        "text": "Direct Redux store middleware dispatching"
      },
      {
        "id": "C",
        "text": "React Router data loading and route parameter handling"
      },
      {
        "id": "D",
        "text": "Server-Side Rendering with Next.js getServerSideProps"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này."
  },
  {
    "id": "fer202-d08-q12",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "javascript\n// Rendering the component (preparing the order in the kitchen)\nconst renderOrders = () => {\n  return orders.map((order, index) => <Dish key={index} name={order} />);\n};\n\n// Committing to the DOM (placing the order on the table)\nreturn (\n  <div>\n    <h2>Orders:</h2>\n    <ul>{renderOrders()}</ul>\n  </div>\n);\n};\n\nfunction Waiter() {\n  const handleOrder = () => {\n    // Triggering a render (delivering the guest's order to the kitchen)\n    kitchenRef.current.addOrder('Pizza');\n  };\n\n  // A reference to the Kitchen component\n  const kitchenRef = React.createRef();\n\n  // Rendering the Waiter component\n  return (\n    <div>\n      <h1>Welcome to the Restaurant!</h1>\n      <button onClick={handleOrder}>Place Order</button>\n      <Kitchen ref={kitchenRef} />\n    </div>\n  );\n}\n\nexport default Waiter;\n```\n\nWhich process in React corresponds to \"send order to kitchen\"?",
    "options": [
      {
        "id": "A",
        "text": "Triggering a render"
      },
      {
        "id": "B",
        "text": "Rendering the component"
      },
      {
        "id": "C",
        "text": "Committing to the DOM"
      },
      {
        "id": "D",
        "text": "Placing the order on the table"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong ví dụ, 'send order to kitchen' tương ứng với việc gọi hàm `kitchenRef.current.addOrder('Pizza')` — hành động này kích hoạt lại quá trình render (tức là 'triggering a render'), giống như gửi đơn hàng vào bếp để chuẩn bị."
  },
  {
    "id": "fer202-d08-q13",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Answer\nA\nB\nC\nD\n\n(Choose 1 answer)\n\nHow do you create a dynamic route in Next.js?",
    "options": [
      {
        "id": "A",
        "text": "By using useRouter() and manually specifying the route."
      },
      {
        "id": "B",
        "text": "By creating a file with square brackets in the pages directory, e.g., [id].js."
      },
      {
        "id": "C",
        "text": "By defining a route in the next.config.js file."
      },
      {
        "id": "D",
        "text": "By using React Router's Route component."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong Next.js, route động được tạo bằng cách đặt tên file trong thư mục pages với dấu ngoặc vuông, ví dụ [id].js — đây là cách chuẩn của framework, không dùng React Router hay config."
  },
  {
    "id": "fer202-d08-q14",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you declare multiple routes in React Router?",
    "options": [
      {
        "id": "A",
        "text": "By nesting `<Route>` components inside each other"
      },
      {
        "id": "B",
        "text": "By using the `<Routes>` component instead of `<Route>`"
      },
      {
        "id": "C",
        "text": "By using the path prop with multiple values in a single `<Route>` component"
      },
      {
        "id": "D",
        "text": "By using an array of Route components inside the Routes component."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "In React Router v6, multiple routes are declared by placing multiple <Route> components inside a <Routes> component. Each <Route> defines a path and its corresponding element. Nesting routes is for layout or nested UI, not for declaring multiple top-level routes. Option D correctly describes the standard practice."
  },
  {
    "id": "fer202-d08-q15",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "□ A\n□ B\n□ C\n□ D\n\nHow do you create a new Next.js project?",
    "options": [
      {
        "id": "A",
        "text": "Use the create-next-app command-line tool."
      },
      {
        "id": "B",
        "text": "Install the Next.js package globally with npm."
      },
      {
        "id": "C",
        "text": "Clone the Next.js starter template from GitHub."
      },
      {
        "id": "D",
        "text": "Use the npm init command and manually configure the project."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Cách chính thức và nhanh nhất để tạo dự án Next.js là dùng lệnh `npx create-next-app`, được cung cấp bởi chính Next.js để khởi tạo cấu trúc dự án chuẩn."
  },
  {
    "id": "fer202-d08-q16",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "",
    "options": [
      {
        "id": "A",
        "text": "Reducers can only be used with React class components, not functional components."
      },
      {
        "id": "B",
        "text": "Reducers are responsible for dispatching actions."
      },
      {
        "id": "C",
        "text": "Reducers should have side effects such as API calls or database interactions."
      },
      {
        "id": "D",
        "text": "Reducers must be pure functions with no side effects."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Reducers trong React/Redux phải là hàm thuần túy (pure functions), không có side effects như gọi API hay tương tác với database, để đảm bảo tính dự đoán và dễ kiểm thử."
  },
  {
    "id": "fer202-d08-q17",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you create a new Git repository?",
    "options": [
      {
        "id": "A",
        "text": "By running \"git init\" in the project directory"
      },
      {
        "id": "B",
        "text": "By adding a remote repository URL"
      },
      {
        "id": "C",
        "text": "By cloning an existing repository"
      },
      {
        "id": "D",
        "text": "By committing changes using \"git commit -m\""
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Lệnh \"git init\" khởi tạo một kho lưu trữ Git mới trong thư mục hiện tại, tạo thư mục .git để theo dõi phiên bản. Các lựa chọn khác: cloning tạo repo từ repo có sẵn, commit chỉ lưu thay đổi, add remote chỉ liên kết với repo từ xa — không tạo repo mới."
  },
  {
    "id": "fer202-d08-q18",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Answer (Choose 1\nanswer)\nA\nB\nC\nD\n\nWhich command is used to install the required dependencies for a React project?",
    "options": [
      {
        "id": "A",
        "text": "npm install"
      },
      {
        "id": "B",
        "text": "git LOne"
      },
      {
        "id": "C",
        "text": "create-react-app"
      },
      {
        "id": "D",
        "text": "npm start"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Lệnh 'npm install' dùng để cài đặt tất cả các dependency được liệt kê trong package.json của dự án React. 'create-react-app' dùng để khởi tạo dự án mới, 'npm start' để chạy server, 'git LOne' không tồn tại."
  },
  {
    "id": "fer202-d08-q19",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Select the code snippet that correctly defines a Class Component in React.",
    "options": [
      {
        "id": "A",
        "text": "class MyComponent extends React.Component {\n    render() {\n        return <div>Hello, World!</div>;\n    }\n}"
      },
      {
        "id": "B",
        "text": "function MyComponent() {\n    return <div>Hello, World!</div>;\n}"
      },
      {
        "id": "C",
        "text": "const MyComponent = () => {\n    return <div>Hello, World!</div>;\n};"
      },
      {
        "id": "D",
        "text": "const MyComponent = React.createClass({\n    render() {\n        return <div>Hello, World!</div>;\n    }\n});"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, Class Component được định nghĩa bằng cách kế thừa từ React.Component và phải có phương thức render(). Đáp án A đúng chuẩn cú pháp. Các đáp án B, C là Function Component, D dùng React.createClass (đã lỗi thời)."
  },
  {
    "id": "fer202-d08-q20",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What are PropTypes in React?",
    "options": [
      {
        "id": "A",
        "text": "They are used for creating component classes."
      },
      {
        "id": "B",
        "text": "They are used for defining the types of component props."
      },
      {
        "id": "C",
        "text": "They are used for handling events in React."
      },
      {
        "id": "D",
        "text": "They are used for manipulating the component's state."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "PropTypes trong React dùng để xác định kiểu dữ liệu của props, giúp phát hiện lỗi sớm khi truyền prop sai kiểu. Không liên quan đến tạo class, xử lý sự kiện hay state."
  },
  {
    "id": "fer202-d08-q21",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which HTTP status code indicates a successful response from a server?",
    "options": [
      {
        "id": "A",
        "text": "200 OK"
      },
      {
        "id": "B",
        "text": "404 Not Found"
      },
      {
        "id": "C",
        "text": "500 Internal Server Error"
      },
      {
        "id": "D",
        "text": "302 Found"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HTTP status code 200 OK là mã phản hồi thành công tiêu chuẩn, cho biết yêu cầu đã được xử lý thành công. Các mã khác: 404 là không tìm thấy tài nguyên, 500 là lỗi máy chủ, 302 là chuyển hướng tạm thời."
  },
  {
    "id": "fer202-d08-q22",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Compare the use of Redux and Flux for state management. Which statement is true?",
    "options": [
      {
        "id": "A",
        "text": "Redux uses multiple stores, while Flux uses a single store."
      },
      {
        "id": "B",
        "text": "Flux uses multiple stores, while Redux uses a single store."
      },
      {
        "id": "C",
        "text": "Both Redux and Flux use multiple stores."
      },
      {
        "id": "D",
        "text": "Both Redux and Flux use a single store."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Flux architecture allows multiple stores per component; Redux enforces a single global store for predictable state management. This is a core distinction."
  },
  {
    "id": "fer202-d08-q23",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which component is typically used in conjunction with React.lazy to handle the loading state?",
    "options": [
      {
        "id": "A",
        "text": "<ErrorBoundary>"
      },
      {
        "id": "B",
        "text": "<Suspense>"
      },
      {
        "id": "C",
        "text": "<LoadingComponent>"
      },
      {
        "id": "D",
        "text": "<Provider>"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "React.lazy() is used to load components dynamically. <Suspense> is used to wrap lazy-loaded components and display a fallback UI (e.g., loading spinner) while they are being loaded."
  },
  {
    "id": "fer202-d08-q24",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Answer\n(Choose 1\nanswer)\n\nA\nB\nC\nD\n\nCan you provide an example of a custom property validator in React that checks if a prop is a positive number?",
    "options": [
      {
        "id": "A",
        "text": "value: PropTypes.positiveNumber"
      },
      {
        "id": "B",
        "text": "value: function(props, propName, componentName)"
      },
      {
        "id": "C",
        "text": "value: PropTypes.number && value > 0"
      },
      {
        "id": "D",
        "text": "value: PropTypes.number && value >= 0"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, validator tùy chỉnh dùng hàm: function(props, propName, componentName) để kiểm tra prop. Các lựa chọn khác không hợp lệ: PropTypes không có 'positiveNumber', và không thể dùng logic && trực tiếp trong PropTypes."
  },
  {
    "id": "fer202-d08-q25",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you use a fragment in JSX?",
    "options": [
      {
        "id": "A",
        "text": "By wrapping the JSX elements with `<div>` tags"
      },
      {
        "id": "B",
        "text": "By using the shorthand syntax `<>...</>` or `<React.Fragment>...</React.Fragment>`"
      },
      {
        "id": "C",
        "text": "By creating a separate component for each element"
      },
      {
        "id": "D",
        "text": "By using the fragment() function"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong JSX, fragment cho phép nhóm nhiều phần tử mà không cần wrapper div, dùng cú pháp <>...</> hoặc <React.Fragment>...</React.Fragment> để tránh thêm node DOM không cần thiết."
  },
  {
    "id": "fer202-d08-q26",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What does ES6 stand for?",
    "options": [
      {
        "id": "A",
        "text": "Extensible Stylesheet Language 6"
      },
      {
        "id": "B",
        "text": "Enhanced Scripting Language 6"
      },
      {
        "id": "C",
        "text": "ECMAScript 6"
      },
      {
        "id": "D",
        "text": "Efficient Syntax Language 6"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "ES6 là viết tắt của ECMAScript 6, phiên bản tiêu chuẩn của ngôn ngữ JavaScript được phát hành năm 2015, mang lại nhiều tính năng mới như arrow function, let/const, class, v.v."
  },
  {
    "id": "fer202-d08-q27",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is React-Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "It combines the flexibility and power of the Bootstrap framework with the dynamic nature of React"
      },
      {
        "id": "B",
        "text": "It is a programming language used for back-end development."
      },
      {
        "id": "C",
        "text": "It is a database management system for React applications."
      },
      {
        "id": "D",
        "text": "It is a version control system for React projects."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "React-Bootstrap là thư viện UI cho React, cung cấp các thành phần giao diện đã được thiết kế sẵn theo phong cách Bootstrap, giúp phát triển giao diện nhanh và nhất quán. Không phải ngôn ngữ, hệ quản trị CSDL hay hệ thống kiểm soát phiên bản."
  },
  {
    "id": "fer202-d08-q28",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Answer\n(Choose 1\nanswer)\n\nA\nB\nC\nD\n\nBack\nNext\n\nWhat is the first step in migrating from useState to useReducer with this code?\nconst [count, setCount] = useState(0);\n\nfunction increment() {\n  setCount(count + 1);\n}",
    "options": [
      {
        "id": "A",
        "text": "Replace setCount with dispatch in the existing code."
      },
      {
        "id": "B",
        "text": "Move all state update logic into a reducer function."
      },
      {
        "id": "C",
        "text": "Define the reducer function and use dispatch to replace setCount."
      },
      {
        "id": "D",
        "text": "Import useReducer without changing any code."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "To migrate from useState to useReducer, first define a reducer function that handles state transitions, then replace setCount with dispatch. Option C correctly sequences these steps. A and B are incomplete; D ignores necessary logic changes."
  },
  {
    "id": "fer202-d08-q29",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which class is used to create a button in Bootstrap 5?",
    "options": [
      {
        "id": "A",
        "text": ".btn"
      },
      {
        "id": "B",
        "text": ".button"
      },
      {
        "id": "C",
        "text": ".btn-primary"
      },
      {
        "id": "D",
        "text": ".btn-default"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong Bootstrap 5, lớp .btn là lớp cơ bản để tạo nút. Các lớp như .btn-primary, .btn-default là lớp mở rộng để định dạng màu sắc, không phải lớp cơ bản để tạo nút."
  },
  {
    "id": "fer202-d08-q30",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What does the catch method do in a promise chain?",
    "options": [
      {
        "id": "A",
        "text": "It handles the resolved value"
      },
      {
        "id": "B",
        "text": "It handles errors"
      },
      {
        "id": "C",
        "text": "It pauses the execution"
      },
      {
        "id": "D",
        "text": "It converts the promise to a synchronous function"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong chuỗi promise, .catch() dùng để bắt và xử lý lỗi (rejected promise). Nó không xử lý giá trị resolve (A), không tạm dừng (C), và không chuyển promise thành hàm đồng bộ (D)."
  },
  {
    "id": "fer202-d08-q31",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "In Redux, how do you update the state immutably?",
    "options": [
      {
        "id": "A",
        "text": "By directly modifying the state object"
      },
      {
        "id": "B",
        "text": "By using the setState() method"
      },
      {
        "id": "C",
        "text": "By using the splice() method"
      },
      {
        "id": "D",
        "text": "By creating a new copy of the state object"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Redux yêu cầu cập nhật state một cách bất biến (immutable). Không được sửa trực tiếp state, mà phải tạo bản sao mới với thay đổi — thường dùng spread operator hoặc immer."
  },
  {
    "id": "fer202-d08-q32",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Answer\n(Choose 1\nanswer)\nA\nB\nC\nD\n\nIn React, what is the role of Suspense?",
    "options": [
      {
        "id": "A",
        "text": "To handle errors in asynchronous rendering"
      },
      {
        "id": "B",
        "text": "To control the rendering of lazy components"
      },
      {
        "id": "C",
        "text": "To manage state in functional components"
      },
      {
        "id": "D",
        "text": "To handle network requests and API calls"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Suspense trong React dùng để hiển thị fallback (như loading spinner) khi các component được lazy load chưa sẵn sàng. Nó không xử lý lỗi, quản lý state hay gọi API trực tiếp."
  },
  {
    "id": "fer202-d08-q33",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Answer\n(Choose 1\nanswer)\nA\nB\nC\nD\n\nAssess the impact of using too many lazy components in a React application. Which statement is true?",
    "options": [
      {
        "id": "A",
        "text": "It will improve the performance of the application"
      },
      {
        "id": "B",
        "text": "It will reduce the number of HTTP requests"
      },
      {
        "id": "C",
        "text": "It may lead to several HTTP requests being made simultaneously"
      },
      {
        "id": "D",
        "text": "It will ensure that all components are loaded upfront"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Lazy loading trong React tải component khi cần, nhưng nếu dùng quá nhiều, có thể gây ra nhiều request HTTP đồng thời khi người dùng tương tác nhanh, làm giảm hiệu suất và tăng tải server."
  },
  {
    "id": "fer202-d08-q34",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which code snippet demonstrates how to declare a basic route in React Router?",
    "options": [
      {
        "id": "A",
        "text": "`<Route path=\"/about\" component={About} />`"
      },
      {
        "id": "B",
        "text": "`<Link to=\"/about\">About</Link>`"
      },
      {
        "id": "C",
        "text": "`import { BrowserRouter as Router, Route } from \"react-router-dom\";`"
      },
      {
        "id": "D",
        "text": "`import { Link, Route } from \"react-router-dom\";`"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "In React Router (v5), the <Route> component is used to define a route mapping a path to a component. Option A correctly declares a basic route. Option B is for navigation, not route declaration. Options C and D are import statements, not route declarations."
  },
  {
    "id": "fer202-d08-q35",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the role of HTTP response codes in client-server communication?",
    "options": [
      {
        "id": "A",
        "text": "To indicate the status of the HTTP request"
      },
      {
        "id": "B",
        "text": "To manage state within a component"
      },
      {
        "id": "C",
        "text": "To handle server-side logic"
      },
      {
        "id": "D",
        "text": "To manage routing in a React application"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HTTP response codes (e.g., 200 OK, 404 Not Found) inform the client whether the request succeeded, failed, or requires further action. They are part of the HTTP protocol’s status reporting mechanism, not for state management, routing, or server logic."
  },
  {
    "id": "fer202-d08-q36",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of package.json in a Node.js project?",
    "options": [
      {
        "id": "A",
        "text": "It defines the project's dependencies and scripts"
      },
      {
        "id": "B",
        "text": "It contains the source code of the project"
      },
      {
        "id": "C",
        "text": "It configures the Node.js environment"
      },
      {
        "id": "D",
        "text": "It manages the project's build process"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Tệp package.json trong Node.js dùng để khai báo thông tin dự án, các dependency (thư viện phụ thuộc) và các script (lệnh chạy như start, test...). Đây là tệp cấu hình cốt lõi của dự án Node.js."
  },
  {
    "id": "fer202-d08-q37",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Answer (Choose 1\nanswer)\nA\nB\nC\nD\n\nHow do you create a responsive grid layout using Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "By using the `<div class=\"grid\">` element."
      },
      {
        "id": "B",
        "text": "By applying the `.responsive-grid` class to the container element."
      },
      {
        "id": "C",
        "text": "By using the `.row` and `.col-*-*` classes to create rows and columns."
      },
      {
        "id": "D",
        "text": "By manually specifying the width of each element using CSS."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Bootstrap dùng hệ thống grid với `.row` chứa các `.col-*-*` để tạo layout responsive. Không dùng `<div class=\"grid\">` (A), không có class `.responsive-grid` (B), không nên dùng CSS thủ công (D)."
  },
  {
    "id": "fer202-d08-q38",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Using Bootstrap] How does the for attribute in the `<label>` element work, and why is it important in forms?\n(`<label for=\"exampleFormControlInput1\" class=\"form-label\">Email address</label>`)",
    "options": [
      {
        "id": "A",
        "text": "It styles the label based on form control types"
      },
      {
        "id": "B",
        "text": "It links the label to the form control via the control's id, improving accessibility"
      },
      {
        "id": "C",
        "text": "It is used for adding inline form validation"
      },
      {
        "id": "D",
        "text": "It triggers JavaScript events when the form is submitted"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Thuộc tính 'for' trong thẻ <label> liên kết nhãn với điều khiển form thông qua id của điều khiển, giúp người dùng sử dụng màn hình đọc (screen reader) dễ dàng hơn — tăng khả năng truy cập (accessibility)."
  },
  {
    "id": "fer202-d08-q39",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of React Hooks?",
    "options": [
      {
        "id": "A",
        "text": "Hooks are functions that are part of the React library."
      },
      {
        "id": "B",
        "text": "React didn't have a simple way to share reusable functionality between components."
      },
      {
        "id": "C",
        "text": "Solutions such as higher-order components and render props."
      },
      {
        "id": "D",
        "text": "Using classes to be unnecessarily confusing and verbose."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Mục đích chính của React Hooks là giải quyết vấn đề chia sẻ logic có thể tái sử dụng giữa các component mà không cần dùng class hay HOCs, giúp code ngắn gọn và dễ bảo trì hơn."
  },
  {
    "id": "fer202-d08-q40",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the correct way to declare PropTypes for a component in React?",
    "options": [
      {
        "id": "A",
        "text": "Component.propTypes = { ... }"
      },
      {
        "id": "B",
        "text": "Component.typeCheck = { ... }"
      },
      {
        "id": "C",
        "text": "Component.props = { ... }"
      },
      {
        "id": "D",
        "text": "Component.checkProps = { ... }"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React (trước React 15.5), PropTypes được khai báo bằng cách gán đối tượng vào Component.propTypes. Các lựa chọn khác không tồn tại trong API React."
  },
  {
    "id": "fer202-d08-q41",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which React-Bootstrap component is used to display a popup dialog with customizable content?",
    "options": [
      {
        "id": "A",
        "text": "Modal"
      },
      {
        "id": "B",
        "text": "Checkbox"
      },
      {
        "id": "C",
        "text": "Button"
      },
      {
        "id": "D",
        "text": "Card"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React-Bootstrap, component `Modal` được dùng để hiển thị hộp thoại popup với nội dung tùy chỉnh. Các component khác như Checkbox, Button, Card không có chức năng này."
  },
  {
    "id": "fer202-d08-q42",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the command to start json-server and specify the JSON file to be served?",
    "options": [
      {
        "id": "A",
        "text": "npm start"
      },
      {
        "id": "B",
        "text": "json-server start"
      },
      {
        "id": "C",
        "text": "npx json-server --watch data.json"
      },
      {
        "id": "D",
        "text": "node server.js"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Lệnh đúng để khởi động json-server và theo dõi file JSON là 'npx json-server --watch data.json'. Đây là cú pháp chuẩn được tài liệu chính thức của json-server khuyến nghị."
  },
  {
    "id": "fer202-d08-q43",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of the componentDidMount method in React?",
    "options": [
      {
        "id": "A",
        "text": "It is called after the component's render method has been executed."
      },
      {
        "id": "B",
        "text": "It is called before the component's render method is executed."
      },
      {
        "id": "C",
        "text": "It is called when the component is about to be unmounted from the DOM."
      },
      {
        "id": "D",
        "text": "It is called when the component is about to be updated and re-rendered."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "componentDidMount is a React lifecycle method called after the component is rendered to the DOM, making it ideal for side effects like API calls. It’s not called before render (B), before unmount (C), or before update (D)."
  },
  {
    "id": "fer202-d08-q44",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you access the state and dispatch from Context in a child component?",
    "options": [
      {
        "id": "A",
        "text": "`const [state, dispatch] = useContext(CountContext);`"
      },
      {
        "id": "B",
        "text": "`const { state, dispatch } = CountContext;`"
      },
      {
        "id": "C",
        "text": "`const { state, dispatch } = useContext(CountContext);`"
      },
      {
        "id": "D",
        "text": "`const state = CountContext.state;`"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong React, để truy cập state và dispatch từ Context trong component con, ta dùng useContext và destructuring object trả về. Câu A sai vì không dùng array destructuring cho Context. Câu B sai vì không gọi useContext. Câu D sai vì không thể truy cập trực tiếp qua tên Context."
  },
  {
    "id": "fer202-d08-q45",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is event pooling in React?",
    "options": [
      {
        "id": "A",
        "text": "The process of reusing event objects for performance optimization."
      },
      {
        "id": "B",
        "text": "The process of creating multiple event objects for each event."
      },
      {
        "id": "C",
        "text": "The process of cleaning up event objects after they are used."
      },
      {
        "id": "D",
        "text": "The process of handling events in a pool of event handlers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Event pooling trong React là kỹ thuật tái sử dụng đối tượng sự kiện để giảm chi phí tạo đối tượng mới, từ đó tối ưu hiệu suất — đặc biệt quan trọng trong các ứng dụng lớn."
  },
  {
    "id": "fer202-d08-q46",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which of the following best explains the purpose of the tailwind.config.js file?",
    "options": [
      {
        "id": "A",
        "text": "To configure server-side rendering"
      },
      {
        "id": "B",
        "text": "To define custom utility classes and paths to template files"
      },
      {
        "id": "C",
        "text": "To manage JavaScript dependencies"
      },
      {
        "id": "D",
        "text": "To set up routing for the application"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Tệp tailwind.config.js dùng để cấu hình Tailwind CSS: định nghĩa lớp tiện ích tùy chỉnh, chỉ định đường dẫn đến các tệp mẫu, và điều chỉnh chủ đề — không liên quan đến SSR, dependency hay routing."
  },
  {
    "id": "fer202-d08-q47",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What does REST stand for?",
    "options": [
      {
        "id": "A",
        "text": "Representational State Transfer"
      },
      {
        "id": "B",
        "text": "Representational State Transmission"
      },
      {
        "id": "C",
        "text": "Resource State Transfer"
      },
      {
        "id": "D",
        "text": "Resource State Transmission"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "REST là viết tắt của Representational State Transfer — mô hình kiến trúc phần mềm phổ biến cho API web, được Roy Fielding định nghĩa năm 2000."
  },
  {
    "id": "fer202-d08-q48",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "How would you correctly convert the following HTML code to JSX?\n<h1>Hedy Lamarr's Todos</h1>\n<img\nsrc=\"https://i.imgur.com/yXOvdOs.jpg\"\nalt=\"Hedy Lamarr\"\nclass=\"photo\"\n/>\n<ul>\n<li>Invent new traffic lights\n<li>Rehearse a movie scene\n<li>Improve the spectrum technology\n</ul>",
    "options": [
      {
        "id": "A",
        "text": "<>\n<h1>Hedy Lamarr's Todos</h1>\n<img\nsrc=\"https://i.imgur.com/yXOvdOs.jpg\"\nalt=\"Hedy Lamarr\"\nclassName=\"photo\"\n/>\n<ul>\n<li>Invent new traffic lights</li>\n<li>Rehearse a movie scene</li>\n<li>Improve the spectrum technology</li>\n</ul>\n</>"
      },
      {
        "id": "B",
        "text": "<>\n<h1>Hedy Lamarr's Todos</h1>\n<img\nsrc=\"https://i.imgur.com/yXOvdOs.jpg\"\nalt=\"Hedy Lamarr\"\nclass=\"photo\"\n>\n<ul>\n<li>Invent new traffic lights\n<li>Rehearse a movie scene\n<li>Improve the spectrum technology\n</ul>\n</>"
      },
      {
        "id": "C",
        "text": "<>\n<h1>Hedy Lamarr's Todos</h1>\n<img\nsrc=\"https://i.imgur.com/yXOvdOs.jpg\"\nalt=\"Hedy Lamarr\"\nclass=\"photo\"\n/>\n<ul>\n<li>Invent new traffic lights\n<li>Rehearse a movie scene"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "JSX yêu cầu thuộc tính class phải đổi thành className, và các thẻ <li> phải đóng đúng cách (có </li>). Đáp án A là duy nhất sửa đúng cả hai lỗi này và giữ cấu trúc hợp lệ."
  },
  {
    "id": "fer202-d08-q49",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "How would you correctly convert the following HTML code to JSX?\n<h1>Hedy Lamarr's Todos</h1>\n<img\nsrc=\"https://i.imgur.com/yXOvOdSs.jpg\"\nalt=\"Hedy Lamarr\"\nclass=\"photo\"\n/>\n<ul>\n  <li>Invent new traffic lights</li>\n  <li>Rehearse a movie scene</li>\n  <li>Improve the spectrum technology</li>\n</ul>",
    "options": [
      {
        "id": "A",
        "text": "<>\n<h1>Hedy Lamarr's Todos</h1>\n<img\nsrc=\"https://i.imgur.com/yXOvOdSs.jpg\"\nalt=\"Hedy Lamarr\"\nclassName=\"photo\"\n/>\n<ul>\n  <li>Invent new traffic lights</li>\n  <li>Rehearse a movie scene</li>\n  <li>Improve the spectrum technology</li>\n</ul>\n</>"
      },
      {
        "id": "B",
        "text": "<>\n<h1>Hedy Lamarr's Todos</h1>\n<img\nsrc=\"https://i.imgur.com/yXOvOdSs.jpg\"\nalt=\"Hedy Lamarr\"\nclass=\"photo\"\n>\n<ul>\n  <li>Invent new traffic lights</li>\n  <li>Rehearse a movie scene</li>\n  <li>Improve the spectrum technology</li>\n</ul>\n</>"
      },
      {
        "id": "C",
        "text": "<>\n<h1>Hedy Lamarr's Todos</h1>\n<img\nsrc=\"https://i.imgur.com/yXOvOdSs.jpg\"\nalt=\"Hedy Lamarr\"\nclass=\"photo\"\n/>\n<ul>\n  <li>Invent new traffic lights</li>\n  <li>Rehearse a movie scene"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong JSX, thuộc tính 'class' phải đổi thành 'className'. Câu A đúng vì giữ nguyên cấu trúc HTML, chỉ sửa 'class' → 'className', và đóng thẻ <img /> đúng cách. Câu B thiếu '/' đóng thẻ, C bị cắt ngang."
  },
  {
    "id": "fer202-d08-q50",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following correctly passes an object as a prop to a child component?",
    "options": [
      {
        "id": "A",
        "text": "const user = { name: \"Hedy\", age: 35 };\n\nfunction ParentComponent() {\n  return <ChildComponent user={user.toString()} />;\n}"
      },
      {
        "id": "B",
        "text": "const user = { name: \"Hedy\", age: 35 };\n\nfunction ParentComponent() {\n  return <ChildComponent user=\"user\" />;\n}"
      },
      {
        "id": "C",
        "text": "const user = { name: \"Hedy\", age: 35 };\n\nfunction ParentComponent() {\n  return <ChildComponent user={\"user\"} />;\n}"
      },
      {
        "id": "D",
        "text": "const user = { name: \"Hedy\", age: 35 };\n\nfunction ParentComponent() {\n  return <ChildComponent user={user} />;\n}"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Trong React, để truyền object như prop, phải dùng ngoặc nhọn {user} — không dùng string hay toString(). Đây là cách đúng để truyền dữ liệu nguyên bản."
  },
  {
    "id": "fer202-d08-q51",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following correctly passes an object as a prop to a child component?",
    "options": [
      {
        "id": "A",
        "text": "const user = { name: \"Hedy\", age: 35 };\n\nfunction ParentComponent() {\n  return <ChildComponent user={user.toString()} />;\n}"
      },
      {
        "id": "B",
        "text": "const user = { name: \"Hedy\", age: 35 };\n\nfunction ParentComponent() {\n  return <ChildComponent user=\"user\" />;\n}"
      },
      {
        "id": "C",
        "text": "const user = { name: \"Hedy\", age: 35 };\n\nfunction ParentComponent() {\n  return <ChildComponent user=\"{user}\" />;\n}"
      },
      {
        "id": "D",
        "text": "const user = { name: \"Hedy\", age: 35 };\n\nfunction ParentComponent() {\n  return <ChildComponent user={user} />;\n}"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Trong React, để truyền một object như prop, phải dùng dấu ngoặc nhọn {user} để truyền trực tiếp object, không dùng chuỗi hay toString(). Cách D là đúng vì nó truyền object user nguyên vẹn vào component con."
  },
  {
    "id": "fer202-d08-q52",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the difference between controlled and uncontrolled components in React-Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "Controlled components are stateless and rely on external state management, while uncontrolled components manage their own state internally."
      },
      {
        "id": "B",
        "text": "Controlled components have predefined behavior and cannot be customized, while uncontrolled components offer more flexibility."
      },
      {
        "id": "C",
        "text": "Controlled components are faster and more efficient than uncontrolled components."
      },
      {
        "id": "D",
        "text": "Uncontrolled components are recommended for complex forms, while controlled components are suitable for simple forms."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, controlled components có state được quản lý bởi cha (external state), còn uncontrolled components tự quản lý state bên trong (vd: dùng ref). Không liên quan đến tốc độ hay độ phức tạp form."
  },
  {
    "id": "fer202-d08-q53",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the difference between controlled and uncontrolled components in React-Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "Controlled components are stateless and rely on external state management, while uncontrolled components manage their own state internally."
      },
      {
        "id": "B",
        "text": "Controlled components have predefined behavior and cannot be customized, while uncontrolled components offer more flexibility."
      },
      {
        "id": "C",
        "text": "Controlled components are faster and more efficient than uncontrolled components."
      },
      {
        "id": "D",
        "text": "Uncontrolled components are recommended for complex forms, while controlled components are suitable for simple forms."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Controlled components trong React (bao gồm React-Bootstrap) có state được quản lý bởi cha (thường qua useState), trong khi uncontrolled components tự quản lý state bên trong (dùng ref). Đây là khái niệm cốt lõi trong React form handling."
  },
  {
    "id": "fer202-d08-q54",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What happens if a component tries to consume a context that has not been provided higher up in the\ncomponent tree?",
    "options": [
      {
        "id": "A",
        "text": "The component receives a default value specified in the context definition."
      },
      {
        "id": "B",
        "text": "The component throws an error."
      },
      {
        "id": "C",
        "text": "The component receives an empty object as the context value."
      },
      {
        "id": "D",
        "text": "The component receives null as the context value."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, khi một component sử dụng useContext mà không có Provider nào cung cấp giá trị ở trên cây, nó sẽ nhận giá trị mặc định đã được định nghĩa khi tạo Context (React.createContext(defaultValue)). Không ném lỗi, không trả null hay object rỗng nếu có default value."
  },
  {
    "id": "fer202-d09-q01",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which of the following statements about Redux selectors is true?",
    "options": [
      {
        "id": "A",
        "text": "Selectors are responsible for dispatching actions"
      },
      {
        "id": "B",
        "text": "Selectors are used to modify the Redux store directly"
      },
      {
        "id": "C",
        "text": "Selectors are pure functions that derive specific data from the Redux store"
      },
      {
        "id": "D",
        "text": "Selectors are only used in React class components"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Redux selectors are pure functions used to extract and compute derived data from the store state. They do not dispatch actions (A), modify store directly (B), and are not limited to class components (D) — they work with functional components too via hooks."
  },
  {
    "id": "fer202-d09-q02",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "In Redux, when should you use `combineReducers`?",
    "options": [
      {
        "id": "A",
        "text": "When you want to connect the Redux store to a React component."
      },
      {
        "id": "B",
        "text": "When you want to manage actions in the Redux application."
      },
      {
        "id": "C",
        "text": "When you want to split a reducer into smaller reducers."
      },
      {
        "id": "D",
        "text": "When you want to use Redux DevTools to track the state."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "combineReducers in Redux is used to combine multiple reducers into a single root reducer, enabling modular state management. It’s not for connecting components (A), managing actions (B), or DevTools (D)."
  },
  {
    "id": "fer202-d09-q03",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of the initial state parameter in a Redux reducer function?",
    "options": [
      {
        "id": "A",
        "text": "To define the structure of the Redux store"
      },
      {
        "id": "B",
        "text": "To specify the actions that can be dispatched"
      },
      {
        "id": "C",
        "text": "To handle asynchronous operations"
      },
      {
        "id": "D",
        "text": "To define the initial state of the reducer"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "In Redux, the reducer function’s initial state parameter sets the default state when the reducer is first called (e.g., with undefined state). It does not define store structure (A), specify actions (B), or handle async (C)."
  },
  {
    "id": "fer202-d09-q04",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What are the key features of Next.js?",
    "options": [
      {
        "id": "A",
        "text": "Server-side rendering, Static Site Generation, Image Optimization, Built-in Routing."
      },
      {
        "id": "B",
        "text": "Database integration, code debugging, and form validation."
      },
      {
        "id": "C",
        "text": "CSS styling, version control, and error handling."
      },
      {
        "id": "D",
        "text": "Package management, command-line interface, and testing framework."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Next.js là framework React nổi bật với các tính năng: render phía server (SSR), tạo trang tĩnh (SSG), tối ưu hình ảnh và hệ thống định tuyến tích hợp. Các lựa chọn khác không phải đặc trưng chính của Next.js."
  },
  {
    "id": "fer202-d09-q05",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of the next/link module in Next.js?",
    "options": [
      {
        "id": "A",
        "text": "It is used for handling form submissions."
      },
      {
        "id": "B",
        "text": "It provides client-side routing capabilities."
      },
      {
        "id": "C",
        "text": "It is responsible for server-side rendering."
      },
      {
        "id": "D",
        "text": "It enables serverless function deployment."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Module next/link trong Next.js dùng để điều hướng giữa các trang mà không cần tải lại toàn bộ trang — tức là client-side routing. Không dùng cho form, SSR hay serverless function."
  },
  {
    "id": "fer202-d09-q06",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is Tailwind CSS?",
    "options": [
      {
        "id": "A",
        "text": "A JavaScript framework for building single-page applications."
      },
      {
        "id": "B",
        "text": "A programming language used for backend development."
      },
      {
        "id": "C",
        "text": "A utility-first CSS framework for building responsive web interfaces."
      },
      {
        "id": "D",
        "text": "A database management system for storing CSS styles."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Tailwind CSS là một framework CSS theo kiểu 'utility-first', giúp xây dựng giao diện web đáp ứng (responsive) nhanh chóng bằng cách áp dụng các class nhỏ, có sẵn cho từng thuộc tính CSS."
  },
  {
    "id": "fer202-d09-q07",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What happens if a component tries to consume a context that has not been provided higher up in the component tree?",
    "options": [
      {
        "id": "A",
        "text": "The component receives a default value specified in the context definition."
      },
      {
        "id": "B",
        "text": "The component throws an error."
      },
      {
        "id": "C",
        "text": "The component receives an empty object as the context value."
      },
      {
        "id": "D",
        "text": "The component receives null as the context value."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, khi một component sử dụng useContext để tiêu thụ context mà không có provider nào ở trên cây component, nó sẽ nhận giá trị mặc định đã được định nghĩa khi tạo context (React.createContext(defaultValue)). Không ném lỗi, không trả về null hay object rỗng nếu có default value."
  },
  {
    "id": "fer202-d09-q08",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "```javascript\nimport React from 'react';\n\nconst Greeting = ({ name }) => {\n  return <h1>Hello, {name}!</h1>;\n};\n\nexport default Greeting;\n```\n\nWhat type of component is represented by the code above?",
    "options": [
      {
        "id": "A",
        "text": "Class component"
      },
      {
        "id": "B",
        "text": "Functional component"
      },
      {
        "id": "C",
        "text": "Container component"
      },
      {
        "id": "D",
        "text": "Higher-order component"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "The code uses a JavaScript arrow function that returns JSX, which is the syntax for a React functional component. Class components use 'class' and 'render()', and higher-order components wrap other components — neither applies here."
  },
  {
    "id": "fer202-d09-q09",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "```javascript\nimport React, { Component } from 'react';\n\nclass Counter extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      count: 0\n    };\n  }\n\n  incrementCount() {\n    // TODO: Increase the count state by 1\n  }\n\n  render() {\n    return (\n      <div>\n        <p>Count: {this.state.count}</p>\n        <button onClick={this.incrementCount}>Increment</button>\n      </div>\n    );\n  }\n}\n\nexport default Counter;\n```\n\nIn the code above, how can we increase the value of the count state by 1 when the user clicks the \"Increment\" button?",
    "options": [
      {
        "id": "A",
        "text": "Call the method `this.setState({ count: this.state.count + 1 })` inside the `incrementCount` method."
      },
      {
        "id": "B",
        "text": "Assign a new value to `count` using the assignment operator (`=`) inside the `incrementCount` method."
      },
      {
        "id": "C",
        "text": "Call the method `this.state.count += 1` inside the `incrementCount` method."
      },
      {
        "id": "D",
        "text": "Use `this.setState(count + 1)` inside the `incrementCount` method."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, để cập nhật state, phải dùng `this.setState()`. Câu A đúng vì nó cập nhật state đúng cách. Câu B, C sai vì không dùng setState. Câu D sai cú pháp — phải truyền object, không phải giá trị đơn."
  },
  {
    "id": "fer202-d09-q10",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What are PropTypes in React?",
    "options": [
      {
        "id": "A",
        "text": "They are used for creating component classes."
      },
      {
        "id": "B",
        "text": "They are used for defining the types of component props."
      },
      {
        "id": "C",
        "text": "They are used for handling events in React."
      },
      {
        "id": "D",
        "text": "They are used for manipulating the component's state."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "PropTypes trong React dùng để xác định kiểu dữ liệu của props, giúp phát hiện lỗi sớm khi truyền prop sai kiểu. Không liên quan đến tạo class, xử lý sự kiện hay state."
  },
  {
    "id": "fer202-d09-q11",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Can you define multiple Type and Value validators for a single prop in PropTypes?",
    "options": [
      {
        "id": "A",
        "text": "Yes, you can define multiple validators for a prop."
      },
      {
        "id": "B",
        "text": "No, you can only define one validator for a prop."
      },
      {
        "id": "C",
        "text": "Yes, but it's not recommended for code readability."
      },
      {
        "id": "D",
        "text": "No, Type and Value validators cannot be used together."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "In React PropTypes, you can chain multiple validators (e.g., PropTypes.string.isRequired) or use PropTypes.oneOfType([...]) to define multiple type or value constraints for a single prop. This is standard practice for flexible validation."
  },
  {
    "id": "fer202-d09-q12",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "2\n\n(Choose 1 answer)\n\nCan PropTypes be used for both functional and class components?",
    "options": [
      {
        "id": "A",
        "text": "Yes, PropTypes can be used in both types of components."
      },
      {
        "id": "B",
        "text": "No, PropTypes can only be used in functional components."
      },
      {
        "id": "C",
        "text": "No, PropTypes can only be used in class components."
      },
      {
        "id": "D",
        "text": "Yes, but the syntax for defining PropTypes is different for each type of component."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "PropTypes is a type-checking mechanism in React that works with both functional and class components. The syntax is the same: Component.propTypes = {...}. No difference in usage between component types."
  },
  {
    "id": "fer202-d09-q13",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "3\n\n(Choose 1 answer)\n\nCan you provide an example of a custom property validator in React that checks if a prop is a positive number?",
    "options": [
      {
        "id": "A",
        "text": "value: PropTypes.positiveNumber"
      },
      {
        "id": "B",
        "text": "value: function(props, propName, componentName)"
      },
      {
        "id": "C",
        "text": "value: PropTypes.number && value > 0"
      },
      {
        "id": "D",
        "text": "value: PropTypes.number && value >= 0"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, để tạo validator tùy chỉnh (custom prop validator), ta dùng hàm với 3 tham số: props, propName, componentName, và trả về lỗi nếu không hợp lệ. Các lựa chọn khác không phải cú pháp hợp lệ."
  },
  {
    "id": "fer202-d09-q14",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "4\n\n(Choose 1 answer)\n\nWhich code snippet demonstrates how to handle a route parameter in React Router?",
    "options": [
      {
        "id": "A",
        "text": "`<Route path=\"/users/:id\" component={UserDetail} />`"
      },
      {
        "id": "B",
        "text": "`<Link to=\"/users\">Users</Link>`"
      },
      {
        "id": "C",
        "text": "`import { BrowserRouter as Router, Route } from \"react-router-dom\";`"
      },
      {
        "id": "D",
        "text": "`import { Link, Route } from \"react-router-dom\";`"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React Router, route parameter được định nghĩa bằng cách dùng dấu hai chấm (:) trước tên biến, ví dụ :id. Khi route khớp, giá trị sẽ được truyền vào component qua props.match.params.id. Đáp án A là cách đúng để khai báo route có tham số."
  },
  {
    "id": "fer202-d09-q15",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "5\n\n(Choose 1 answer)\n\nWhat is the purpose of the exact prop in a Route component?",
    "options": [
      {
        "id": "A",
        "text": "It specifies the component to render for a specific route"
      },
      {
        "id": "B",
        "text": "It ensures that the route matches the URL exactly, without partial matching"
      },
      {
        "id": "C",
        "text": "It defines a redirect to another route"
      },
      {
        "id": "D",
        "text": "It enables code splitting for the route component"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React Router, prop 'exact' đảm bảo route chỉ khớp khi URL trùng chính xác, tránh khớp một phần (ví dụ: '/about' không khớp với '/about/us'). Đây là hành vi quan trọng để kiểm soát luồng điều hướng chính xác."
  },
  {
    "id": "fer202-d09-q16",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "6\n\n(Choose 1 answer)\n\nHow do you define a dynamic route parameter in React Router?",
    "options": [
      {
        "id": "A",
        "text": "`<Route path=\"/users/:userId\" component={UserDetail} />`"
      },
      {
        "id": "B",
        "text": "`<Route path=\"/users\" component={UserDetail} />`"
      },
      {
        "id": "C",
        "text": "`<Route path=\"/users/{userId}\" component={UserDetail} />`"
      },
      {
        "id": "D",
        "text": "`<Route path=\"/users?userId=:userId\" component={UserDetail} />`"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React Router, tham số route động được định nghĩa bằng dấu hai chấm (:) trước tên tham số, ví dụ: /users/:userId. Các lựa chọn khác không đúng cú pháp hoặc không phải cách định nghĩa tham số động."
  },
  {
    "id": "fer202-d09-q17",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "7\n\n(Choose 1 answer)\n\nHow can route parameters be defined in React Router?",
    "options": [
      {
        "id": "A",
        "text": "By using the params prop in the <Route> component"
      },
      {
        "id": "B",
        "text": "By accessing them directly from the URL"
      },
      {
        "id": "C",
        "text": "By using the path prop with placeholders in the <Route> component"
      },
      {
        "id": "D",
        "text": "By using the match object passed to the component"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong React Router, tham số route được định nghĩa bằng cách sử dụng placeholder (ví dụ: ':id') trong thuộc tính 'path' của <Route>. Ví dụ: <Route path='/user/:id' component={User} />. Các cách khác không đúng hoặc không đầy đủ."
  },
  {
    "id": "fer202-d09-q18",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "8\n\n(Choose 1 answer)\n\nWhat protocol is commonly used for client-server communication over the web?",
    "options": [
      {
        "id": "A",
        "text": "HTTP"
      },
      {
        "id": "B",
        "text": "FTP"
      },
      {
        "id": "C",
        "text": "SMTP"
      },
      {
        "id": "D",
        "text": "SSH"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "HTTP (Hypertext Transfer Protocol) là giao thức phổ biến nhất dùng để truyền dữ liệu giữa client và server trên web. FTP dùng cho truyền file, SMTP cho email, SSH cho kết nối an toàn."
  },
  {
    "id": "fer202-d09-q19",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "9\n\n(Choose 1 answer)\n\nWhat is the purpose of json-server in the context of setting up a server?",
    "options": [
      {
        "id": "A",
        "text": "To handle user input and interactions."
      },
      {
        "id": "B",
        "text": "To display the website content."
      },
      {
        "id": "C",
        "text": "To provide a static web server for serving JSON data."
      },
      {
        "id": "D",
        "text": "To generate dynamic server responses."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "json-server là công cụ tạo server REST giả lập từ file JSON, dùng để phục vụ dữ liệu JSON tĩnh trong phát triển và test, không xử lý logic động hay giao diện người dùng."
  },
  {
    "id": "fer202-d09-q20",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of a server in a client-server architecture?",
    "options": [
      {
        "id": "A",
        "text": "To handle user input and interactions."
      },
      {
        "id": "B",
        "text": "To display the website content."
      },
      {
        "id": "C",
        "text": "To provide data and resources to clients."
      },
      {
        "id": "D",
        "text": "To style the user interface."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong kiến trúc client-server, server chịu trách nhiệm lưu trữ, xử lý và cung cấp dữ liệu/tài nguyên cho client khi được yêu cầu. Client xử lý giao diện và tương tác người dùng."
  },
  {
    "id": "fer202-d09-q21",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How are Functional Components written in React?",
    "options": [
      {
        "id": "A",
        "text": "function."
      },
      {
        "id": "B",
        "text": "class."
      },
      {
        "id": "C",
        "text": "const."
      },
      {
        "id": "D",
        "text": "component."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, Functional Components được viết dưới dạng hàm (function). Từ React 16.8 trở đi, với sự ra đời của Hooks, functional components có thể sử dụng state và lifecycle như class components. Các lựa chọn khác không chính xác: class dùng cho class components, const chỉ là từ khóa khai báo, component không phải cú pháp viết component."
  },
  {
    "id": "fer202-d09-q22",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "multiple",
    "prompt": "Select the code snippet that correctly defines a Functional Component in React.",
    "options": [
      {
        "id": "A",
        "text": "class MyComponent extends React.Component {\n  render() {\n    return <div>Hello, World!</div>;\n  }\n}"
      },
      {
        "id": "B",
        "text": "function MyComponent() {\n  return <div>Hello, World!</div>;\n}"
      },
      {
        "id": "C",
        "text": "const MyComponent = () => {\n  return <div>Hello, World!</div>;\n};"
      },
      {
        "id": "D",
        "text": "const MyComponent = React.createClass({\n  render() {\n    return <div>Hello, World!</div>;\n  }\n});"
      }
    ],
    "correctOptionIds": [
      "B",
      "C"
    ],
    "explanation": "Functional Component trong React có thể được định nghĩa bằng hàm truyền thống (B) hoặc arrow function (C). A là class component, D là cách cũ không còn dùng trong React hiện đại."
  },
  {
    "id": "fer202-d09-q23",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of the componentDidMount method in React?",
    "options": [
      {
        "id": "A",
        "text": "It is called after the component's render method has been executed."
      },
      {
        "id": "B",
        "text": "It is called before the component's render method is executed."
      },
      {
        "id": "C",
        "text": "It is called when the component is about to be unmounted from the DOM."
      },
      {
        "id": "D",
        "text": "It is called when the component is about to be updated and re-rendered."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "componentDidMount() in React is invoked immediately after the component is mounted (inserted into the DOM). This is the right place to perform side effects like API calls or subscriptions, because the DOM is ready. It runs after render(), not before or during unmount/update."
  },
  {
    "id": "fer202-d09-q24",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[illegible] 4\n\n(Choose 1 answer)\n\nWhich React Hook is used to handle side effects in functional components?",
    "options": [
      {
        "id": "A",
        "text": "useState"
      },
      {
        "id": "B",
        "text": "useEffect"
      },
      {
        "id": "C",
        "text": "useContext"
      },
      {
        "id": "D",
        "text": "useReducer"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "useEffect là React Hook dùng để xử lý side effects (như gọi API, subscribe, cleanup) trong functional component. Các hook khác như useState, useContext, useReducer không dùng cho side effects."
  },
  {
    "id": "fer202-d09-q25",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "```javascript\nimport React, { useState } from 'react';\n\nfunction App() {\n  const [showMessage, setShowMessage] = useState(false);\n\n  const toggleMessage = () => {\n    setShowMessage(!showMessage);\n  };\n\n  return (\n    <div>\n      <button onClick={toggleMessage}>Toggle Message</button>\n      {showMessage && <p>This is a message!</p>}\n    </div>\n  );\n}\n\nexport default App;\n```\nWhat happens when the \"Toggle Message\" button is clicked?",
    "options": [
      {
        "id": "A",
        "text": "The message is displayed."
      },
      {
        "id": "B",
        "text": "The message is hidden."
      },
      {
        "id": "C",
        "text": "The state of the component is updated."
      },
      {
        "id": "D",
        "text": "The component is re-rendered."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Khi nhấn nút, hàm toggleMessage gọi setShowMessage(!showMessage), làm thay đổi state. React sẽ tự động re-render (D), nhưng hành động trực tiếp là cập nhật state (C). Câu hỏi hỏi \"what happens\" — hành động chính là cập nhật state."
  },
  {
    "id": "fer202-d09-q26",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "26\n\n(Choose 1 answer)\n\nHow can you optimize performance when using Hooks in React?",
    "options": [
      {
        "id": "A",
        "text": "By using the `useMemo` and `useCallback` Hooks."
      },
      {
        "id": "B",
        "text": "By avoiding unnecessary re-renders with the `memo` Hook."
      },
      {
        "id": "C",
        "text": "By using the `useLayoutEffect` Hook instead of `useEffect`."
      },
      {
        "id": "D",
        "text": "By using the `useDebugValue` Hook for debugging purposes."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "useMemo và useCallback giúp tránh tính toán lại không cần thiết và ngăn re-render không cần thiết, từ đó tối ưu hiệu năng. Các lựa chọn khác không chính xác: memo là HOC, useLayoutEffect không tối ưu hiệu năng, useDebugValue chỉ để debug."
  },
  {
    "id": "fer202-d09-q27",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "How would you use the useContext Hook to access a shared theme in a React component?",
    "options": [
      {
        "id": "A",
        "text": "const theme = useContext(ThemeContext);"
      },
      {
        "id": "B",
        "text": "const { theme } = useContext(ThemeContext);"
      },
      {
        "id": "C",
        "text": "const { theme } = useContext(ThemeContext.Provider);"
      },
      {
        "id": "D",
        "text": "const theme = useContext(ThemeContext.Provider);"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "useContext nhận đối tượng Context (không phải Provider) và trả về giá trị hiện tại của context. Nếu context chứa object, có thể destructuring, nhưng ở đây chỉ cần lấy giá trị theme trực tiếp."
  },
  {
    "id": "fer202-d09-q28",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you set up Git for version control?",
    "options": [
      {
        "id": "A",
        "text": "By running \"npm install git\""
      },
      {
        "id": "B",
        "text": "By downloading Git from the official website"
      },
      {
        "id": "C",
        "text": "By using a Git GUI client"
      },
      {
        "id": "D",
        "text": "By configuring Git settings in Visual Studio Code"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Cách chuẩn để thiết lập Git là tải về từ trang web chính thức (git-scm.com), sau đó cấu hình toàn cục hoặc cục bộ."
  },
  {
    "id": "fer202-d09-q29",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of package.json in a Node.js project?",
    "options": [
      {
        "id": "A",
        "text": "It defines the project's dependencies and scripts"
      },
      {
        "id": "B",
        "text": "It contains the source code of the project"
      },
      {
        "id": "C",
        "text": "It configures the Node.js environment"
      },
      {
        "id": "D",
        "text": "It manages the project's build process"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "package.json trong Node.js dùng để khai báo thông tin dự án, các dependency cần cài đặt và các script chạy (ví dụ: start, test). Đây là tệp cấu hình chính, không chứa mã nguồn hay quản lý build trực tiếp."
  },
  {
    "id": "fer202-d09-q30",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which command is used to install the required dependencies for a React project?",
    "options": [
      {
        "id": "A",
        "text": "npm install"
      },
      {
        "id": "B",
        "text": "git LOne"
      },
      {
        "id": "C",
        "text": "create-react-app"
      },
      {
        "id": "D",
        "text": "npm start"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Lệnh 'npm install' dùng để cài đặt các dependency cần thiết cho dự án React (và Node.js nói chung). 'create-react-app' dùng để khởi tạo dự án mới, 'npm start' để chạy server, 'git LOne' không tồn tại."
  },
  {
    "id": "fer202-d09-q31",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which method is used to perform enhanced array manipulation in ES6?",
    "options": [
      {
        "id": "A",
        "text": "map()"
      },
      {
        "id": "B",
        "text": "forEach()"
      },
      {
        "id": "C",
        "text": "reduce()"
      },
      {
        "id": "D",
        "text": "filter()"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong ES6, phương thức map() được dùng để thực hiện thao tác nâng cao trên mảng, tạo mảng mới bằng cách áp dụng hàm lên từng phần tử — phù hợp với yêu cầu 'enhanced array manipulation'."
  },
  {
    "id": "fer202-d09-q32",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you render JSX in a React component?",
    "options": [
      {
        "id": "A",
        "text": "By using the renderJSX() function"
      },
      {
        "id": "B",
        "text": "By passing the JSX as a string to the ReactDOM.render() function"
      },
      {
        "id": "C",
        "text": "By enLosing the JSX in curly braces {} within the component's render() method"
      },
      {
        "id": "D",
        "text": "By using the React.render() function"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "In React, JSX is rendered by returning it directly from the render() method (in class components) or from the function body (in functional components). Curly braces {} are used to embed expressions, not to wrap JSX itself. However, among the given options, C is the closest correct answer — though technically, JSX is returned directly, not enclosed in braces. The other options are incorrect syntax."
  },
  {
    "id": "fer202-d09-q33",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you conditionally render content in JSX?",
    "options": [
      {
        "id": "A",
        "text": "By using the if statement"
      },
      {
        "id": "B",
        "text": "By using the for loop"
      },
      {
        "id": "C",
        "text": "By using the ternary operator `{condition ? trueContent : falseContent}`"
      },
      {
        "id": "D",
        "text": "By using the switch statement"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "In JSX, you cannot use regular JavaScript if/for/switch statements directly in markup. The ternary operator is the standard way to conditionally render content. You can also use logical &&, but ternary is most explicit and widely used for true/false rendering."
  },
  {
    "id": "fer202-d09-q34",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "How can you import functions or variables from an ES6 module?",
    "options": [
      {
        "id": "A",
        "text": "By using the import keyword"
      },
      {
        "id": "B",
        "text": "By using the require function"
      },
      {
        "id": "C",
        "text": "By using the export keyword"
      },
      {
        "id": "D",
        "text": "By using the include directive"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong ES6, để import hàm hoặc biến từ một module, ta dùng từ khóa 'import'. 'require' là cách của CommonJS, 'export' dùng để xuất, còn 'include' không tồn tại trong ES6 module."
  },
  {
    "id": "fer202-d09-q35",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which React-Bootstrap component is used to display a popup dialog with customizable content?",
    "options": [
      {
        "id": "A",
        "text": "Modal"
      },
      {
        "id": "B",
        "text": "Checkbox"
      },
      {
        "id": "C",
        "text": "Button"
      },
      {
        "id": "D",
        "text": "Card"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React-Bootstrap, component 'Modal' được dùng để hiển thị hộp thoại popup với nội dung tùy chỉnh. Các component khác như Checkbox, Button, Card không có chức năng này."
  },
  {
    "id": "fer202-d09-q36",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which React-Bootstrap components are used to create navigation menus?",
    "options": [
      {
        "id": "A",
        "text": "Navbars, Navs, Tabs"
      },
      {
        "id": "B",
        "text": "Alert, Card"
      },
      {
        "id": "C",
        "text": "Button, Checkbox"
      },
      {
        "id": "D",
        "text": "Modal, Listbox"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "React-Bootstrap cung cấp các component như Navbars, Navs, Tabs để tạo menu điều hướng. Các component như Alert, Card, Button, Modal không dùng để tạo menu điều hướng chính."
  },
  {
    "id": "fer202-d09-q37",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you install React-Bootstrap in your ReactJS project?",
    "options": [
      {
        "id": "A",
        "text": "By using npm or yarn to install the package."
      },
      {
        "id": "B",
        "text": "By downloading the React-Bootstrap files from a website."
      },
      {
        "id": "C",
        "text": "By copying and pasting the React-Bootstrap code into your project."
      },
      {
        "id": "D",
        "text": "By using a CDN link to include React-Bootstrap in your HTML file."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "React-Bootstrap được cài đặt chính thức qua npm hoặc yarn — cách chuẩn trong ReactJS. Các cách khác như CDN hay copy-paste không đảm bảo quản lý phiên bản và phụ thuộc."
  },
  {
    "id": "fer202-d09-q38",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "```\n<Container>\n  <Row>\n    <Col sm={6} md={4}>\n      {/* Placeholder content */}\n    </Col>\n    <Col sm={6} md={8}>\n      {/* Placeholder content */}\n    </Col>\n  </Row>\n</Container>\n```\n\nThe code above creates a grid layout with how many columns?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Mã sử dụng Bootstrap Grid với 2 thẻ <Col> trong cùng một <Row>, nên tạo ra 2 cột. Dù có thuộc tính sm/md khác nhau, chúng vẫn nằm trong cùng một hàng và là 2 cột riêng biệt."
  },
  {
    "id": "fer202-d09-q39",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the advantage of event pooling in React?",
    "options": [
      {
        "id": "A",
        "text": "It reduces memory usage by reusing event objects."
      },
      {
        "id": "B",
        "text": "It improves event handling performance by creating new event objects for each event."
      },
      {
        "id": "C",
        "text": "It simplifies event handling by providing a pool of event handlers."
      },
      {
        "id": "D",
        "text": "It allows for better management of event contexts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Event pooling trong React tái sử dụng các đối tượng sự kiện thay vì tạo mới mỗi lần, giúp giảm tiêu thụ bộ nhớ và tăng hiệu suất. Đây là cơ chế tối ưu hóa của React để tránh việc tạo và hủy đối tượng sự kiện liên tục."
  },
  {
    "id": "fer202-d09-q40",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "In React 18, how can you pass additional arguments to an event handler?",
    "options": [
      {
        "id": "A",
        "text": "By using the `event.target` property"
      },
      {
        "id": "B",
        "text": "By using the `event.data` property"
      },
      {
        "id": "C",
        "text": "By using the `bind` method when binding the event handler"
      },
      {
        "id": "D",
        "text": "React 18 does not support passing additional arguments to event handlers"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong React 18, để truyền tham số bổ sung vào hàm xử lý sự kiện, bạn có thể dùng .bind(this, arg1, arg2) khi gắn sự kiện. Ví dụ: onClick={this.handleClick.bind(this, 'extraArg')}. Các phương án khác không đúng về mặt kỹ thuật."
  },
  {
    "id": "fer202-d09-q41",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is event pooling in React?",
    "options": [
      {
        "id": "A",
        "text": "The process of reusing event objects for performance optimization."
      },
      {
        "id": "B",
        "text": "The process of creating multiple event objects for each event."
      },
      {
        "id": "C",
        "text": "The process of cleaning up event objects after they are used."
      },
      {
        "id": "D",
        "text": "The process of handling events in a pool of event handlers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Event pooling trong React là kỹ thuật tái sử dụng đối tượng sự kiện để giảm thiểu việc tạo đối tượng mới, từ đó tối ưu hiệu suất — đặc biệt quan trọng trong các ứng dụng lớn với nhiều sự kiện."
  },
  {
    "id": "fer202-d09-q42",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What are the key features of Next.js?",
    "options": [
      {
        "id": "A",
        "text": "Server-side rendering, Static Site Generation, Image Optimization, Built-in Routing."
      },
      {
        "id": "B",
        "text": "Database integration, code debugging, and form validation."
      },
      {
        "id": "C",
        "text": "CSS styling, version control, and error handling."
      },
      {
        "id": "D",
        "text": "Package management, command-line interface, and testing framework."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Next.js là framework React nổi bật với các tính năng như SSR, SSG, tối ưu hình ảnh và routing tích hợp — không tập trung vào database, styling hay CLI như các lựa chọn khác."
  },
  {
    "id": "fer202-d09-q43",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you configure Tailwind CSS in a Next.js project?",
    "options": [
      {
        "id": "A",
        "text": "By importing a CSS file directly in the component."
      },
      {
        "id": "B",
        "text": "By installing the Tailwind CSS package and creating a configuration file."
      },
      {
        "id": "C",
        "text": "By using a CDN link in the HTML file."
      },
      {
        "id": "D",
        "text": "By installing a Tailwind CSS plugin for Next.js."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Để cấu hình Tailwind CSS trong Next.js, bạn cần cài đặt gói tailwindcss, postcss, autoprefixer, sau đó tạo file tailwind.config.js và postcss.config.js, rồi import @tailwind directives trong file CSS. Đây là cách chuẩn được tài liệu chính thức hướng dẫn."
  },
  {
    "id": "fer202-d09-q44",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you include Tailwind CSS in a project?",
    "options": [
      {
        "id": "A",
        "text": "Link the Tailwind CSS stylesheet in the HTML file."
      },
      {
        "id": "B",
        "text": "Import the Tailwind CSS file in the JavaScript code."
      },
      {
        "id": "C",
        "text": "Use the @import rule in a CSS file to import Tailwind CSS."
      },
      {
        "id": "D",
        "text": "Add Tailwind CSS as a dependency in the package.json file."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Cách chính thống để tích hợp Tailwind CSS là cài đặt qua npm/yarn (thêm vào package.json), sau đó cấu hình và build CSS. Các cách khác như link trực tiếp hoặc @import không phải phương pháp chuẩn hiện đại."
  },
  {
    "id": "fer202-d09-q45",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you create a modal in Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "By using the `<modal>` HTML element."
      },
      {
        "id": "B",
        "text": "By applying the `.modal` class to the container element."
      },
      {
        "id": "C",
        "text": "By using the `.modal` class along with the `data-bs-toggle=\"modal\"` attribute."
      },
      {
        "id": "D",
        "text": "By using JavaScript to dynamically create and show modal elements."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong Bootstrap 5, modal được tạo bằng cách sử dụng class `.modal` và thuộc tính `data-bs-toggle=\"modal\"` để kích hoạt. Không dùng thẻ `<modal>` hay chỉ class `.modal` đơn lẻ."
  },
  {
    "id": "fer202-d09-q46",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which class is used to create a form input with a validation state in Bootstrap 5?",
    "options": [
      {
        "id": "A",
        "text": "`.form-control`"
      },
      {
        "id": "B",
        "text": "`.input-group`"
      },
      {
        "id": "C",
        "text": "`.form-check`"
      },
      {
        "id": "D",
        "text": "`.form-validation`"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong Bootstrap 5, lớp .form-control dùng để tạo input form và có thể kết hợp với các lớp trạng thái xác thực như .is-valid, .is-invalid để hiển thị trạng thái xác thực. Các lớp khác không dùng cho mục đích này."
  },
  {
    "id": "fer202-d09-q47",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which class is used to create a collapsible accordion component in Bootstrap 5?",
    "options": [
      {
        "id": "A",
        "text": "`.collapse`"
      },
      {
        "id": "B",
        "text": "`.accordion`"
      },
      {
        "id": "C",
        "text": "`.collapsible`"
      },
      {
        "id": "D",
        "text": "`.collapse-accordion`"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "In Bootstrap 5, the `.accordion` class is used to create a collapsible accordion component. The `.collapse` class is for general collapsible content, not specifically for accordions. Other options like `.collapsible` or `.collapse-accordion` are not valid Bootstrap 5 classes."
  },
  {
    "id": "fer202-d09-q48",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you define a lazy component in React?",
    "options": [
      {
        "id": "A",
        "text": "Using the lazy function from the React library"
      },
      {
        "id": "B",
        "text": "Wrapping the component in the LazyComponent higher-order component"
      },
      {
        "id": "C",
        "text": "Importing the component with the lazy keyword"
      },
      {
        "id": "D",
        "text": "Using the createLazyComponent method from the React package"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, component lazy được định nghĩa bằng hàm `React.lazy()`, dùng để import component một cách động (dynamic import). Các lựa chọn khác không tồn tại hoặc sai cú pháp."
  },
  {
    "id": "fer202-d09-q49",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "multiple",
    "prompt": "How do you define a lazy component in React?",
    "options": [
      {
        "id": "A",
        "text": "const MyComponent = React.lazy(() => import('./MyComponent'));"
      },
      {
        "id": "B",
        "text": "const MyComponent = lazy(() => import('./MyComponent'));"
      },
      {
        "id": "C",
        "text": "const MyComponent = import('./MyComponent').lazy();"
      },
      {
        "id": "D",
        "text": "const MyComponent = React.importLazy('./MyComponent');"
      }
    ],
    "correctOptionIds": [
      "A",
      "B"
    ],
    "explanation": "Trong React, lazy component được định nghĩa bằng React.lazy hoặc import lazy (nếu đã import lazy từ React). Cả A và B đều đúng, tùy vào cách import. C và D sai cú pháp."
  },
  {
    "id": "fer202-d09-q50",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-su24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How does using Suspense with lazy components enhance user experience?",
    "options": [
      {
        "id": "A",
        "text": "It prevents the user from interacting with the page until all components are loaded"
      },
      {
        "id": "B",
        "text": "It displays a loading indicator while the lazy component is being loaded"
      },
      {
        "id": "C",
        "text": "It improves the responsiveness and perceived performance of the application"
      },
      {
        "id": "D",
        "text": "It eliminates the need for error handling in asynchronous rendering"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Suspense + lazy loading giúp ứng dụng React hiển thị UI nhanh hơn bằng cách tải component khi cần, đồng thời hiển thị placeholder (loading) — cải thiện trải nghiệm người dùng, không chặn tương tác."
  },
  {
    "id": "fer202-d10-q01",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "In Redux, how do you update the state immutably?",
    "options": [
      {
        "id": "A",
        "text": "By directly modifying the state object"
      },
      {
        "id": "B",
        "text": "By using the setState() method"
      },
      {
        "id": "C",
        "text": "By using the splice() method"
      },
      {
        "id": "D",
        "text": "By creating a new copy of the state object"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Trong Redux, state phải được cập nhật một cách bất biến (immutable). Điều này nghĩa là không được sửa trực tiếp state, mà phải tạo một bản sao mới với các thay đổi cần thiết."
  },
  {
    "id": "fer202-d10-q02",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "In Redux, when should you use `combineReducers`?",
    "options": [
      {
        "id": "A",
        "text": "When you want to connect the Redux store to a React component."
      },
      {
        "id": "B",
        "text": "When you want to manage actions in the Redux application."
      },
      {
        "id": "C",
        "text": "When you want to split a reducer into smaller reducers."
      },
      {
        "id": "D",
        "text": "When you want to use Redux DevTools to track the state."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "combineReducers in Redux is used to combine multiple reducers into a single root reducer, enabling modular state management. It’s not for connecting components (A), managing actions (B), or DevTools (D)."
  },
  {
    "id": "fer202-d10-q03",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Describe the Redux flow process when an action is dispatched.",
    "options": [
      {
        "id": "A",
        "text": "Action is dispatched -> Middleware -> Reducer -> Store -> Component."
      },
      {
        "id": "B",
        "text": "Component dispatches action -> Reducer -> Middleware -> Store."
      },
      {
        "id": "C",
        "text": "Middleware dispatches action -> Reducer -> Store -> Component."
      },
      {
        "id": "D",
        "text": "Reducer dispatches action -> Middleware -> Component -> Store.\""
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "In Redux, the flow is: Action dispatched → Middleware (optional) → Reducer updates state → Store holds new state → Component re-renders. Option A correctly represents this sequence."
  },
  {
    "id": "fer202-d10-q04",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of the initial state parameter in a Redux reducer function?",
    "options": [
      {
        "id": "A",
        "text": "To define the structure of the Redux store"
      },
      {
        "id": "B",
        "text": "To specify the actions that can be dispatched"
      },
      {
        "id": "C",
        "text": "To handle asynchronous operations"
      },
      {
        "id": "D",
        "text": "To define the initial state of the reducer"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "In Redux, the reducer function’s initial state parameter sets the default state when the reducer is first called (e.g., with undefined state). It does not define store structure (A), specify actions (B), or handle async (C)."
  },
  {
    "id": "fer202-d10-q05",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is Tailwind CSS?",
    "options": [
      {
        "id": "A",
        "text": "A JavaScript framework for building single-page applications."
      },
      {
        "id": "B",
        "text": "A programming language used for backend development."
      },
      {
        "id": "C",
        "text": "A utility-first CSS framework for building responsive web interfaces."
      },
      {
        "id": "D",
        "text": "A database management system for storing CSS styles."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Tailwind CSS là một framework CSS theo kiểu 'utility-first', giúp xây dựng giao diện web đáp ứng (responsive) nhanh chóng bằng cách áp dụng các class nhỏ, có sẵn cho từng thuộc tính CSS."
  },
  {
    "id": "fer202-d10-q06",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you create a new Next.js project?",
    "options": [
      {
        "id": "A",
        "text": "Use the create-next-app command-line tool."
      },
      {
        "id": "B",
        "text": "Install the Next.js package globally with npm."
      },
      {
        "id": "C",
        "text": "LOne the Next.js starter template from GitHub."
      },
      {
        "id": "D",
        "text": "Use the npm init command and manually configure the project."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "The official and recommended way to create a new Next.js project is using the create-next-app CLI tool (npx create-next-app). Installing globally (B) is not standard. Cloning from GitHub (C) is possible but not the primary method. Manual npm init (D) requires extensive configuration and is not recommended for beginners."
  },
  {
    "id": "fer202-d10-q07",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you configure Tailwind CSS in a Next.js project?",
    "options": [
      {
        "id": "A",
        "text": "By importing a CSS file directly in the component."
      },
      {
        "id": "B",
        "text": "By installing the Tailwind CSS package and creating a configuration file."
      },
      {
        "id": "C",
        "text": "By using a CDN link in the HTML file."
      },
      {
        "id": "D",
        "text": "By installing a Tailwind CSS plugin for Next.js."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Để cấu hình Tailwind CSS trong Next.js, bạn cần cài đặt gói tailwindcss, postcss, autoprefixer, sau đó tạo file tailwind.config.js và postcss.config.js, rồi import @tailwind directives trong file CSS. Đây là cách chuẩn được tài liệu chính thức hướng dẫn."
  },
  {
    "id": "fer202-d10-q08",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the main concept behind Tailwind CSS?",
    "options": [
      {
        "id": "A",
        "text": "Component-based architecture."
      },
      {
        "id": "B",
        "text": "Object-oriented programming."
      },
      {
        "id": "C",
        "text": "Utility classes."
      },
      {
        "id": "D",
        "text": "Modular CSS."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Tailwind CSS dựa trên khái niệm utility-first, cung cấp các lớp CSS nhỏ, đơn nhiệm vụ (utility classes) để xây dựng giao diện mà không cần viết CSS tùy chỉnh."
  },
  {
    "id": "fer202-d10-q09",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of React Hooks?",
    "options": [
      {
        "id": "A",
        "text": "Hooks are functions that are part of the React library."
      },
      {
        "id": "B",
        "text": "React didn't have a simple way to share reusable functionality between components."
      },
      {
        "id": "C",
        "text": "Solutions such as higher-order components and render props."
      },
      {
        "id": "D",
        "text": "Using classes to be unnecessarily confusing and verbose."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "React Hooks được giới thiệu để giải quyết vấn đề thiếu cách đơn giản chia sẻ logic có thể tái sử dụng giữa các component, thay thế cho HOC và render props. Các lựa chọn khác mô tả đặc điểm hoặc giải pháp thay thế, không phải mục đích chính của Hooks."
  },
  {
    "id": "fer202-d10-q10",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is a prop in React used for?",
    "options": [
      {
        "id": "A",
        "text": "It defines the internal state of a component."
      },
      {
        "id": "B",
        "text": "It specifies the visual appearance of a component."
      },
      {
        "id": "C",
        "text": "It enables communication and data transfer between components."
      },
      {
        "id": "D",
        "text": "It handles user interactions and events."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "In React, props (short for properties) are used to pass data and event handlers from parent to child components, enabling component communication and reusability. They are read-only and do not manage internal state (that’s state’s role)."
  },
  {
    "id": "fer202-d10-q11",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of a container component in React?",
    "options": [
      {
        "id": "A",
        "text": "To handle UI rendering and user interactions"
      },
      {
        "id": "B",
        "text": "To fetch the data and passing to child component"
      },
      {
        "id": "C",
        "text": "To provide a visual representation of data"
      },
      {
        "id": "D",
        "text": "To encapsulate reusable UI components"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, container component (còn gọi là smart component) có trách nhiệm lấy dữ liệu (fetch data) và truyền xuống các component con (presentational components) để render UI. Đây là nguyên tắc tách biệt logic và giao diện."
  },
  {
    "id": "fer202-d10-q12",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What happens if a prop fails the validation defined by a simple property validator?",
    "options": [
      {
        "id": "A",
        "text": "An error will be thrown during runtime."
      },
      {
        "id": "B",
        "text": "The prop will be automatically converted to the expected type."
      },
      {
        "id": "C",
        "text": "The component will continue to function normally."
      },
      {
        "id": "D",
        "text": "The validation will be bypassed, and the prop will be accepted."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Khi prop không vượt qua validation trong React (hoặc các framework tương tự), hệ thống sẽ ném lỗi runtime để cảnh báo nhà phát triển, giúp phát hiện sớm lỗi dữ liệu đầu vào không hợp lệ."
  },
  {
    "id": "fer202-d10-q13",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "3\n\n(Choose 1 answer)\n\nCan you provide an example of a custom property validator in React that checks if a prop is a positive number?",
    "options": [
      {
        "id": "A",
        "text": "value: PropTypes.positiveNumber"
      },
      {
        "id": "B",
        "text": "value: function(props, propName, componentName)"
      },
      {
        "id": "C",
        "text": "value: PropTypes.number && value > 0"
      },
      {
        "id": "D",
        "text": "value: PropTypes.number && value >= 0"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, để tạo validator tùy chỉnh (custom prop validator), ta dùng hàm với 3 tham số: props, propName, componentName, và trả về lỗi nếu không hợp lệ. Các lựa chọn khác không phải cú pháp hợp lệ."
  },
  {
    "id": "fer202-d10-q14",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Write a custom property validator in React for a prop called \"email\" that should be a valid email address.",
    "options": [
      {
        "id": "A",
        "text": "email: PropTypes.string"
      },
      {
        "id": "B",
        "text": "email: PropTypes.email"
      },
      {
        "id": "C",
        "text": "email: PropTypes.string.isRequired"
      },
      {
        "id": "D",
        "text": "email: function(props, propName, componentName)"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Custom validator in React PropTypes is a function that returns error if invalid. PropTypes.email doesn’t exist; string/isRequired don’t validate format. Option D is correct for custom email validation."
  },
  {
    "id": "fer202-d10-q15",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "5\n\n(Choose 1 answer)\n\nHow do you declare routes in React Router?",
    "options": [
      {
        "id": "A",
        "text": "Using the `<Route>` component"
      },
      {
        "id": "B",
        "text": "Using the `<Link>` component"
      },
      {
        "id": "C",
        "text": "Using the `<Switch>` component"
      },
      {
        "id": "D",
        "text": "Using the `<Redirect>` component"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React Router, routes được khai báo bằng component <Route>, với thuộc tính path và component để ánh xạ URL đến component tương ứng. Các component khác như <Link>, <Switch>, <Redirect> hỗ trợ điều hướng nhưng không dùng để khai báo route."
  },
  {
    "id": "fer202-d10-q16",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "6\n\n(Choose 1 answer)\n\nWhat is the purpose of a router in web development?",
    "options": [
      {
        "id": "A",
        "text": "To handle database operations"
      },
      {
        "id": "B",
        "text": "To manage user authentication"
      },
      {
        "id": "C",
        "text": "To handle navigation between different pages"
      },
      {
        "id": "D",
        "text": "To style the user interface"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Router trong phát triển web (đặc biệt SPA) có nhiệm vụ định tuyến URL đến các component/trang tương ứng, điều hướng người dùng giữa các view mà không cần tải lại trang. Không liên quan đến DB, xác thực hay styling."
  },
  {
    "id": "fer202-d10-q17",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "7\n\n(Choose 1 answer)\n\nWhat is the purpose of the `exact` prop in a `Route` component?",
    "options": [
      {
        "id": "A",
        "text": "It specifies the component to render for a specific route"
      },
      {
        "id": "B",
        "text": "It ensures that the route matches the URL exactly, without partial matching"
      },
      {
        "id": "C",
        "text": "It defines a redirect to another route"
      },
      {
        "id": "D",
        "text": "It enables code splitting for the route component"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Thuộc tính `exact` trong React Router đảm bảo route chỉ khớp khi URL trùng chính xác, tránh trường hợp route con khớp sai. Ví dụ: `/about` không khớp với `/about-us` nếu có `exact`."
  },
  {
    "id": "fer202-d10-q18",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which package can be used to set up a simple JSON-based server in Node.js?",
    "options": [
      {
        "id": "A",
        "text": "express"
      },
      {
        "id": "B",
        "text": "json-server"
      },
      {
        "id": "C",
        "text": "axios"
      },
      {
        "id": "D",
        "text": "nodemon"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "json-server là package Node.js cho phép tạo server RESTful đơn giản từ file JSON. Express là framework web tổng quát, axios là HTTP client, nodemon là công cụ tự khởi động lại server khi code thay đổi."
  },
  {
    "id": "fer202-d10-q19",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "9\n\n(Choose 1 answer)\n\nWhat is the command to start json-server and specify the JSON file to be served?",
    "options": [
      {
        "id": "A",
        "text": "npm start"
      },
      {
        "id": "B",
        "text": "json-server start"
      },
      {
        "id": "C",
        "text": "npx json-server --watch data.json"
      },
      {
        "id": "D",
        "text": "node server.js"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "json-server is run via npx (no install needed) with --watch to monitor the JSON file. npm start and node server.js are generic, json-server start is invalid."
  },
  {
    "id": "fer202-d10-q20",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the primary architectural style used in designing web services that follow REST principles?",
    "options": [
      {
        "id": "A",
        "text": "SOAP (Simple Object Access Protocol)"
      },
      {
        "id": "B",
        "text": "RPC (Remote Procedure Call)"
      },
      {
        "id": "C",
        "text": "MVC (Model-View-Controller)"
      },
      {
        "id": "D",
        "text": "RESTful (Representational State Transfer)"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "RESTful là phong cách kiến trúc chính được sử dụng để thiết kế web services tuân theo nguyên tắc REST, tập trung vào tài nguyên và trạng thái biểu diễn."
  },
  {
    "id": "fer202-d10-q21",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "```javascript\nconst jsonServer = require('json-server');\nconst server = jsonServer.create();\nconst router = jsonServer.router('data.json');\nconst port = 3000;\n\nserver.use(router);\n\nserver.listen(port, () => {\n    console.log(`JSON server is running on port ${port}`);\n});\n```\n\nWhat is the above code used for?",
    "options": [
      {
        "id": "A",
        "text": "Create a dynamic server to serve JSON data."
      },
      {
        "id": "B",
        "text": "Create a dynamic web application using JSON data."
      },
      {
        "id": "C",
        "text": "Create a JSON file based on data from the server."
      },
      {
        "id": "D",
        "text": "Configure the development environment for the project using JSON."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Đoạn code dùng json-server để khởi tạo một server RESTful đơn giản, phục vụ dữ liệu từ file data.json. Đây là công cụ phổ biến để mock API trong phát triển web."
  },
  {
    "id": "fer202-d10-q22",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of the componentDidMount method in React?",
    "options": [
      {
        "id": "A",
        "text": "It is called after the component's render method has been executed."
      },
      {
        "id": "B",
        "text": "It is called before the component's render method is executed."
      },
      {
        "id": "C",
        "text": "It is called when the component is about to be unmounted from the DOM."
      },
      {
        "id": "D",
        "text": "It is called when the component is about to be updated and re-rendered."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "componentDidMount() in React is invoked immediately after the component is mounted (inserted into the DOM). This is the right place to perform side effects like API calls or subscriptions, because the DOM is ready. It runs after render(), not before or during unmount/update."
  },
  {
    "id": "fer202-d10-q23",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How are Class Components written in React?",
    "options": [
      {
        "id": "A",
        "text": "function."
      },
      {
        "id": "B",
        "text": "class."
      },
      {
        "id": "C",
        "text": "const."
      },
      {
        "id": "D",
        "text": "component."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, Class Components được định nghĩa bằng từ khóa 'class', kế thừa từ React.Component, và có thể sử dụng state và lifecycle methods. Ví dụ: class MyComponent extends React.Component { ... }"
  },
  {
    "id": "fer202-d10-q24",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is a Component in React?",
    "options": [
      {
        "id": "A",
        "text": "It is a single UI element."
      },
      {
        "id": "B",
        "text": "It is a JavaScript function."
      },
      {
        "id": "C",
        "text": "It is an HTML framework."
      },
      {
        "id": "D",
        "text": "It is a Python class."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "In React, a Component is a reusable UI building block — it can be a function or class, but its core purpose is to represent a single UI element or group of elements, not a framework or language."
  },
  {
    "id": "fer202-d10-q25",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "```javascript\nimport React, { useState } from 'react';\n\nfunction App() {\n  const [showMessage, setShowMessage] = useState(false);\n\n  const toggleMessage = () => {\n    setShowMessage(!showMessage);\n  };\n\n  return (\n    <div>\n      <button onClick={toggleMessage}>Toggle Message</button>\n      {showMessage && <p>This is a message!</p>}\n    </div>\n  );\n}\n\nexport default App;\n```\n\nWhat happens when the \"Toggle Message\" button is clicked?",
    "options": [
      {
        "id": "A",
        "text": "The message is displayed."
      },
      {
        "id": "B",
        "text": "The message is hidden."
      },
      {
        "id": "C",
        "text": "The state of the component is updated."
      },
      {
        "id": "D",
        "text": "The component is re-rendered."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Khi nhấn nút, hàm toggleMessage gọi setShowMessage(!showMessage), làm thay đổi state. React sẽ tự động re-render (D), nhưng hành động trực tiếp là cập nhật state (C). Câu hỏi hỏi \"what happens\" — hành động chính là cập nhật state."
  },
  {
    "id": "fer202-d10-q26",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you optimize performance when using Hooks in React?",
    "options": [
      {
        "id": "A",
        "text": "By using the `useMemo` and `useCallback` Hooks."
      },
      {
        "id": "B",
        "text": "By avoiding unnecessary re-renders with the `memo` Hook."
      },
      {
        "id": "C",
        "text": "By using the `useLayoutEffect` Hook instead of `useEffect`."
      },
      {
        "id": "D",
        "text": "By using the `useDebugValue` Hook for debugging purposes."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "useMemo và useCallback giúp tránh tính toán lại và tạo lại hàm không cần thiết, giảm re-render, tối ưu hiệu năng React."
  },
  {
    "id": "fer202-d10-q27",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "How can you perform initialization and cleanup actions using the `useEffect` Hook?",
    "options": [
      {
        "id": "A",
        "text": "By returning a cleanup function from the `useEffect` callback."
      },
      {
        "id": "B",
        "text": "By passing an empty dependency array as the second parameter `useEffect`."
      },
      {
        "id": "C",
        "text": "By wrapping the `useEffect` callback in a try-catch block."
      },
      {
        "id": "D",
        "text": "By using the `useCleanUpEffect` Hook instead of `useEffect`."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, useEffect cho phép trả về một hàm cleanup để dọn dẹp side effect (ví dụ: hủy đăng ký sự kiện, xóa timeout) khi component unmount hoặc trước khi chạy lại effect. Đây là cách chuẩn để quản lý cleanup."
  },
  {
    "id": "fer202-d10-q28",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is Node.js?",
    "options": [
      {
        "id": "A",
        "text": "A web browser"
      },
      {
        "id": "B",
        "text": "A programming language"
      },
      {
        "id": "C",
        "text": "A JavaScript runtime"
      },
      {
        "id": "D",
        "text": "A CSS framework"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Node.js là môi trường thực thi JavaScript bên ngoài trình duyệt, cho phép chạy JavaScript trên máy chủ. Nó không phải ngôn ngữ lập trình, trình duyệt hay framework CSS."
  },
  {
    "id": "fer202-d10-q29",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you create a new React application using Create React App?",
    "options": [
      {
        "id": "A",
        "text": "By running \"npm create-react-app my-app\""
      },
      {
        "id": "B",
        "text": "By downloading a ZIP file from the official website"
      },
      {
        "id": "C",
        "text": "By using an online code editor"
      },
      {
        "id": "D",
        "text": "By LOning a Git repository"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Create React App is installed via npm with command: 'npx create-react-app my-app'. Other options are incorrect or outdated. 'LOning' is typo for 'cloning'."
  },
  {
    "id": "fer202-d10-q30",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is React?",
    "options": [
      {
        "id": "A",
        "text": "A programming language"
      },
      {
        "id": "B",
        "text": "A JavaScript library for building user interfaces"
      },
      {
        "id": "C",
        "text": "A database management system"
      },
      {
        "id": "D",
        "text": "A web browser"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "React là một thư viện JavaScript do Facebook (nay là Meta) phát triển, dùng để xây dựng giao diện người dùng (UI), đặc biệt là các thành phần (components) có thể tái sử dụng."
  },
  {
    "id": "fer202-d10-q31",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of the className attribute in JSX?",
    "options": [
      {
        "id": "A",
        "text": "To define a CSS class for the JSX element"
      },
      {
        "id": "B",
        "text": "To specify the component's class name"
      },
      {
        "id": "C",
        "text": "To define a unique identifier for the element"
      },
      {
        "id": "D",
        "text": "To add inline styles to the element"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong JSX, thuộc tính className được dùng để gán class CSS cho phần tử, thay vì dùng \"class\" như trong HTML vì \"class\" là từ khóa trong JavaScript. Không dùng để định danh duy nhất hay thêm style inline."
  },
  {
    "id": "fer202-d10-q32",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which method is used to perform enhanced array manipulation in ES6?",
    "options": [
      {
        "id": "A",
        "text": "map()"
      },
      {
        "id": "B",
        "text": "forEach()"
      },
      {
        "id": "C",
        "text": "reduce()"
      },
      {
        "id": "D",
        "text": "filter()"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong ES6, phương thức map() được dùng để thực hiện thao tác nâng cao trên mảng, tạo mảng mới bằng cách áp dụng hàm lên từng phần tử — phù hợp với yêu cầu 'enhanced array manipulation'."
  },
  {
    "id": "fer202-d10-q33",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you render JSX in a React component?",
    "options": [
      {
        "id": "A",
        "text": "By using the `renderJSX()` function"
      },
      {
        "id": "B",
        "text": "By passing the JSX as a string to the `ReactDOM.render()` function"
      },
      {
        "id": "C",
        "text": "By enclosing the JSX in curly braces `{}` within the component's `render()` method"
      },
      {
        "id": "D",
        "text": "By using the `React.render()` function"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong React, JSX được render bằng cách đặt nó trong dấu ngoặc nhọn `{}` bên trong phương thức `render()` của component. Đây là cách chuẩn để trả về giao diện trong React class component (trước khi có hooks). Các lựa chọn khác không đúng về cú pháp hoặc API."
  },
  {
    "id": "fer202-d10-q34",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "34\n\n(Choose 1 answer)\n\nHow does the Grid component in React-Bootstrap help in creating a responsive layout?",
    "options": [
      {
        "id": "A",
        "text": "The Grid component allows you to define a flexible grid system with rows and columns that automatically adjusts based on the screen size."
      },
      {
        "id": "B",
        "text": "The Grid component provides pre-built responsive layouts that you can directly use in your application."
      },
      {
        "id": "C",
        "text": "The Grid component automatically resizes and repositions the elements based on the available space."
      },
      {
        "id": "D",
        "text": "The Grid component helps in aligning the elements vertically and horizontally on the page."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Grid trong React-Bootstrap cung cấp hệ thống lưới linh hoạt với rows và columns, tự động điều chỉnh theo kích thước màn hình — đúng với mô tả đáp án A. Các đáp án khác không chính xác: B (không phải layout sẵn), C (không tự resize element), D (không chỉ để căn chỉnh)."
  },
  {
    "id": "fer202-d10-q35",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which React-Bootstrap component is used to display a popup dialog with customizable content?",
    "options": [
      {
        "id": "A",
        "text": "Modal"
      },
      {
        "id": "B",
        "text": "Checkbox"
      },
      {
        "id": "C",
        "text": "Button"
      },
      {
        "id": "D",
        "text": "Card"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React-Bootstrap, component 'Modal' được dùng để hiển thị hộp thoại popup với nội dung tùy chỉnh. Các component khác như Checkbox, Button, Card không có chức năng này."
  },
  {
    "id": "fer202-d10-q36",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is React-Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "It combines the flexibility and power of the Bootstrap framework with the dynamic nature of React."
      },
      {
        "id": "B",
        "text": "It is a programming language used for back-end development."
      },
      {
        "id": "C",
        "text": "It is a database management system for React applications."
      },
      {
        "id": "D",
        "text": "It is a version control system for React projects."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "React-Bootstrap is a library that provides Bootstrap components as React components, allowing developers to use Bootstrap’s UI elements within React applications seamlessly."
  },
  {
    "id": "fer202-d10-q37",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "In React 18, how can you pass additional arguments to an event handler?",
    "options": [
      {
        "id": "A",
        "text": "By using the event.target property"
      },
      {
        "id": "B",
        "text": "By using the event.data property"
      },
      {
        "id": "C",
        "text": "By using the bind method when binding the event handler"
      },
      {
        "id": "D",
        "text": "React 18 does not support passing additional arguments to event handlers"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "In React 18, you can pass extra arguments to event handlers using .bind(this, arg1, arg2) or arrow functions. bind is a standard and explicit way to bind context and args."
  },
  {
    "id": "fer202-d10-q38",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is event pooling in React?",
    "options": [
      {
        "id": "A",
        "text": "The process of reusing event objects for performance optimization."
      },
      {
        "id": "B",
        "text": "The process of creating multiple event objects for each event."
      },
      {
        "id": "C",
        "text": "The process of cleaning up event objects after they are used."
      },
      {
        "id": "D",
        "text": "The process of handling events in a pool of event handlers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Event pooling trong React là kỹ thuật tái sử dụng đối tượng sự kiện để giảm thiểu việc tạo đối tượng mới, từ đó tối ưu hiệu suất — đặc biệt quan trọng trong các ứng dụng lớn với nhiều sự kiện."
  },
  {
    "id": "fer202-d10-q39",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "```javascript\nimport React, { useState } from 'react';\n\nfunction Dish({ name }) {\n  return <li>{name}</li>;\n}\n\nfunction Kitchen() {\n  const [orders, setOrders] = useState([]);\n\n  // Triggering a render (delivering the guest's order to the kitchen)\n  const addOrder = (order) => {\n    setOrders((prevOrders) => [...prevOrders, order]);\n  };\n\n  // Rendering the component (preparing the order in the kitchen)\n  const renderOrders = () => {\n    return orders.map((order, index) => <Dish key={index} name={order} />);\n  };\n\n  // Committing to the DOM (placing the order on the table)\n  return (\n    <div>\n      <h2>Orders:</h2>\n      <ul>{renderOrders()}</ul>\n    </div>\n  );\n}\n\nfunction Waiter() {\n  const handleOrder = () => {\n    // Triggering a render (delivering the guest's order to the kitchen)\n    kitchenRef.current.addOrder('Pizza');\n  };\n\n  // A reference to the Kitchen component\n  const kitchenRef = React.createRef();\n\n  // Rendering the Waiter component\n  return (\n    <div>\n      <h1>Welcome to the Restaurant!</h1>\n      <button onClick={handleOrder}>Place Order</button>\n      <Kitchen ref={kitchenRef} />\n    </div>\n  );\n}\n```\n\nWhat React lifecycle phases and patterns are demonstrated in the code above when managing restaurant orders and triggering renders?",
    "options": [
      {
        "id": "A",
        "text": "Triggering, rendering, and committing in React component lifecycle"
      },
      {
        "id": "B",
        "text": "Direct Redux store middleware dispatching"
      },
      {
        "id": "C",
        "text": "React Router data loading and route parameter handling"
      },
      {
        "id": "D",
        "text": "Server-Side Rendering with Next.js getServerSideProps"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Xem kiến thức tổng quan môn FER202 để củng cố lý thuyết này."
  },
  {
    "id": "fer202-d10-q40",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the main concept behind Tailwind CSS?",
    "options": [
      {
        "id": "A",
        "text": "Component-based architecture."
      },
      {
        "id": "B",
        "text": "Object-oriented programming."
      },
      {
        "id": "C",
        "text": "Utility classes."
      },
      {
        "id": "D",
        "text": "Modular CSS."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Tailwind CSS dựa trên khái niệm 'utility classes' — các lớp CSS nhỏ, đơn nhiệm vụ (ví dụ: 'text-red-500', 'p-4') để xây dựng giao diện nhanh chóng mà không cần viết CSS tùy chỉnh."
  },
  {
    "id": "fer202-d10-q41",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you install Tailwind CSS in a project?",
    "options": [
      {
        "id": "A",
        "text": "Use the npm install tailwindcss command."
      },
      {
        "id": "B",
        "text": "Include the Tailwind CSS CDN in the HTML file."
      },
      {
        "id": "C",
        "text": "Install Tailwind CSS globally with npm."
      },
      {
        "id": "D",
        "text": "Use the npx tailwindcss init command."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Cách cài đặt Tailwind CSS chuẩn là dùng lệnh 'npm install tailwindcss' để thêm vào dự án. Lệnh 'npx tailwindcss init' chỉ tạo file cấu hình, không cài đặt thư viện."
  },
  {
    "id": "fer202-d10-q42",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What are the key features of Next.js?",
    "options": [
      {
        "id": "A",
        "text": "Server-side rendering, Static Site Generation, Image Optimization, Built-in Routing."
      },
      {
        "id": "B",
        "text": "Database integration, code debugging, and form validation."
      },
      {
        "id": "C",
        "text": "CSS styling, version control, and error handling."
      },
      {
        "id": "D",
        "text": "Package management, command-line interface, and testing framework."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Next.js là framework React nổi bật với các tính năng: render phía server (SSR), tạo trang tĩnh (SSG), tối ưu hình ảnh và hệ thống định tuyến tích hợp. Các lựa chọn khác không phải đặc trưng chính của Next.js."
  },
  {
    "id": "fer202-d10-q43",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "multiple",
    "prompt": "How do you include Tailwind CSS in a project?",
    "options": [
      {
        "id": "A",
        "text": "Link the Tailwind CSS stylesheet in the HTML file."
      },
      {
        "id": "B",
        "text": "Import the Tailwind CSS file in the JavaScript code."
      },
      {
        "id": "C",
        "text": "Use the @import rule in a CSS file to import Tailwind CSS."
      },
      {
        "id": "D",
        "text": "Add Tailwind CSS as a dependency in the package.json file."
      }
    ],
    "correctOptionIds": [
      "A",
      "D"
    ],
    "explanation": "Tailwind CSS thường được tích hợp bằng cách cài đặt qua npm/yarn (thêm vào package.json) và sau đó import hoặc sử dụng thông qua CDN (link stylesheet trong HTML). Không dùng @import trong CSS hay import trong JS để tích hợp Tailwind."
  },
  {
    "id": "fer202-d10-q44",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you create a tooltip in Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "By using the `<tooltip>` HTML element."
      },
      {
        "id": "B",
        "text": "By applying the `.tooltip` class to the container element."
      },
      {
        "id": "C",
        "text": "By using the `data-bs-toggle=\"tooltip\"` attribute along with the `title` attribute"
      },
      {
        "id": "D",
        "text": "By using JavaScript to dynamically create and show tooltip elements."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "In Bootstrap 5, tooltips are initialized via data attributes: data-bs-toggle=\"tooltip\" and title=\"Tooltip text\". JavaScript initialization is optional but not required for basic use. Option C is the standard declarative method."
  },
  {
    "id": "fer202-d10-q45",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "In ReactJS with Bootstrap, select the JSX code snippet to create a button with a blue background and white\ntext color.",
    "options": [
      {
        "id": "A",
        "text": "import React from 'react';\nimport { Button } from 'react-bootstrap';\n\nconst MyButton = () => {\nreturn (\n  <Button variant=\"primary\" className=\"btn-primary\">\n    My Button\n  </Button>\n);\n};\n\nexport default MyButton;"
      },
      {
        "id": "B",
        "text": "import React from 'react';\nimport { Button } from 'react-bootstrap';\n\nconst MyButton = () => {\nreturn (\n  <Button variant=\"primary\" className=\"bg-primary text-white\">\n    My Button\n  </Button>\n);\n};\n\nexport default MyButton;"
      },
      {
        "id": "C",
        "text": "import React from 'react';\nimport { Button } from 'react-bootstrap';\n\nconst MyButton = () => {\nreturn (\n  <Button variant=\"primary\" className=\"btn btn-primary\">\n    My Button\n  </Button>\n);\n};\n\nexport default MyButton;"
      },
      {
        "id": "D",
        "text": "import React from 'react';\nimport { Button } from 'react-bootstrap';\n\nconst MyButton = () => {"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React Bootstrap, để có nút nền xanh và chữ trắng, dùng 'variant=\"primary\"' kết hợp với 'className=\"bg-primary text-white\"' là chính xác. Các lựa chọn khác dùng class không hợp lệ hoặc thiếu."
  },
  {
    "id": "fer202-d10-q46",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which class is used to create a collapsible accordion component in Bootstrap 5?",
    "options": [
      {
        "id": "A",
        "text": "`.collapse`"
      },
      {
        "id": "B",
        "text": "`.accordion`"
      },
      {
        "id": "C",
        "text": "`.collapsible`"
      },
      {
        "id": "D",
        "text": "`.collapse-accordion`"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong Bootstrap 5, để tạo thành phần accordion (có thể gập lại), bạn sử dụng class `.accordion` cho container cha, và `.accordion-item`, `.accordion-header`, `.accordion-button`, `.accordion-collapse` cho các phần con. Class `.collapse` chỉ dùng cho thành phần gập lại đơn lẻ, không phải accordion."
  },
  {
    "id": "fer202-d10-q47",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the benefit of using Code Splitting and lazy components for web performance?",
    "options": [
      {
        "id": "A",
        "text": "Enhanced security"
      },
      {
        "id": "B",
        "text": "Handle load-time User Experience (UX)"
      },
      {
        "id": "C",
        "text": "Smaller bundle sizes"
      },
      {
        "id": "D",
        "text": "Handle CORS"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Code Splitting và lazy loading giúp chia nhỏ bundle JavaScript, chỉ tải khi cần, giảm kích thước ban đầu, từ đó cải thiện tốc độ tải trang và hiệu suất web."
  },
  {
    "id": "fer202-d10-q48",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "In React, what is the role of Suspense?",
    "options": [
      {
        "id": "A",
        "text": "To handle errors in asynchronous rendering"
      },
      {
        "id": "B",
        "text": "To control the rendering of lazy components"
      },
      {
        "id": "C",
        "text": "To manage state in functional components"
      },
      {
        "id": "D",
        "text": "To handle network requests and API calls"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Suspense trong React dùng để hiển thị fallback UI (như loading spinner) khi các component được lazy-load chưa sẵn sàng. Nó không xử lý lỗi hay quản lý state, mà chỉ điều khiển luồng render cho component lazy."
  },
  {
    "id": "fer202-d10-q49",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "19\n\n(Choose 1 answer)\n\nHow does using Suspense with lazy components enhance user experience?",
    "options": [
      {
        "id": "A",
        "text": "It prevents the user from interacting with the page until all components are loaded"
      },
      {
        "id": "B",
        "text": "It displays a loading indicator while the lazy component is being loaded"
      },
      {
        "id": "C",
        "text": "It improves the responsiveness and perceived performance of the application"
      },
      {
        "id": "D",
        "text": "It eliminates the need for error handling in asynchronous rendering"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Suspense with lazy components allows React to show a fallback UI (like a spinner) while loading components asynchronously, improving UX by preventing blank screens or broken interactions during load."
  },
  {
    "id": "fer202-d10-q50",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa24",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you define a lazy component in React?",
    "options": [
      {
        "id": "A",
        "text": "`const MyComponent = React.lazy(() => import('./MyComponent'));`"
      },
      {
        "id": "B",
        "text": "`const MyComponent = lazy(() => import('./MyComponent'));`"
      },
      {
        "id": "C",
        "text": "`const MyComponent = import('./MyComponent').lazy();`"
      },
      {
        "id": "D",
        "text": "`const MyComponent = React.importLazy('./MyComponent');`"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Cú pháp đúng để định nghĩa component lazy trong React là dùng React.lazy() với hàm import trả về Promise. Các lựa chọn khác sai cú pháp hoặc không tồn tại."
  },
  {
    "id": "fer202-d11-q01",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Analyze the differences between Flux and MVC architectures. Which statement is true?",
    "options": [
      {
        "id": "A",
        "text": "Flux enforces unidirectional data flow, while MVC allows bidirectional data flow."
      },
      {
        "id": "B",
        "text": "MVC enforces unidirectional data flow, while Flux allows bidirectional data flow."
      },
      {
        "id": "C",
        "text": "Both Flux and MVC enforce unidirectional data flow."
      },
      {
        "id": "D",
        "text": "Both Flux and MVC allow bidirectional data flow."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Flux architecture uses a strict unidirectional data flow (Action → Dispatcher → Store → View), whereas MVC allows bidirectional communication between Model and View, which can lead to complexity and side effects."
  },
  {
    "id": "fer202-d11-q02",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which component is typically used in conjunction with React.lazy to handle the loading state?",
    "options": [
      {
        "id": "A",
        "text": "`<ErrorBoundary>`"
      },
      {
        "id": "B",
        "text": "`<Suspense>`"
      },
      {
        "id": "C",
        "text": "`<LoadingComponent>`"
      },
      {
        "id": "D",
        "text": "`<Provider>`"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "React.lazy is used for code-splitting and must be wrapped in <Suspense> to handle the loading state (via fallback prop). <ErrorBoundary> handles errors, not loading. <LoadingComponent> and <Provider> are not standard React components for this purpose."
  },
  {
    "id": "fer202-d11-q03",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is Redux Thunk used for?",
    "options": [
      {
        "id": "A",
        "text": "To manage asynchronous actions in Redux."
      },
      {
        "id": "B",
        "text": "To log every action dispatched to the Redux store."
      },
      {
        "id": "C",
        "text": "To split reducers into simpler functions."
      },
      {
        "id": "D",
        "text": "To handle side effects in React components."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Redux Thunk là middleware cho phép bạn viết action creator trả về hàm thay vì object, giúp xử lý các hành động bất đồng bộ như gọi API trước khi dispatch action thực sự."
  },
  {
    "id": "fer202-d11-q04",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you wrap a lazy-loaded component with a fallback in React?",
    "options": [
      {
        "id": "A",
        "text": "<Suspense loader={<div>Loading...</div>}>\n<LazyComponent />\n</Suspense>"
      },
      {
        "id": "B",
        "text": "<Suspense fallback={<div>Loading...</div>}>\n<LazyComponent />\n</Suspense>"
      },
      {
        "id": "C",
        "text": "<Await fallback={<div>Loading...</div>}>\n<LazyComponent />\n</Await>"
      },
      {
        "id": "D",
        "text": "<Loading fallback={<div>Loading...</div>}>\n<LazyComponent />\n</Loading>"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, để bao bọc component lazy-loaded với fallback, dùng <Suspense> với thuộc tính fallback (không phải loader). C và D là thẻ không tồn tại."
  },
  {
    "id": "fer202-d11-q05",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "How would you handle errors in a fetch request to ensure that the error is caught and logged to the console?",
    "options": [
      {
        "id": "A",
        "text": "fetch(url).then((response)=>{ return response.json(); }).catch(error => console.log(error))"
      },
      {
        "id": "B",
        "text": "fetch(url).then(response => response.catch(error => console.log(error)))"
      },
      {
        "id": "C",
        "text": "fetch(url).catch(error => {{ console.log(error) }})"
      },
      {
        "id": "D",
        "text": "fetch(url).then(response => { throw new Error() }).catch(error => console.log(error))"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Cách đúng để bắt lỗi trong fetch là dùng .catch() sau chuỗi promise. Đáp án A xử lý response rồi bắt lỗi nếu có. Các đáp án khác sai cú pháp hoặc không bắt lỗi đúng cách."
  },
  {
    "id": "fer202-d11-q06",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is one of the primary benefits of using Promises in JavaScript for asynchronous operations?",
    "options": [
      {
        "id": "A",
        "text": "It allows direct modification of the DOM."
      },
      {
        "id": "B",
        "text": "It makes synchronous code asynchronous."
      },
      {
        "id": "C",
        "text": "It helps solve the \"callback hell\" problem by allowing chains of asynchronous operations."
      },
      {
        "id": "D",
        "text": "It ensures data is always instantaneously available."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Promises giúp xử lý các thao tác bất đồng bộ theo chuỗi (chaining) thay vì lồng nhau (callback hell), làm mã dễ đọc và dễ bảo trì hơn. Không trực tiếp sửa DOM hay đảm bảo dữ liệu tức thì."
  },
  {
    "id": "fer202-d11-q07",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What are the three possible states of a Promise as described in the sources?",
    "options": [
      {
        "id": "A",
        "text": "Initial, Running, Completed"
      },
      {
        "id": "B",
        "text": "Starting, Paused, Finished"
      },
      {
        "id": "C",
        "text": "Pending, Fulfilled, Rejected"
      },
      {
        "id": "D",
        "text": "Waiting, Processing, Error Answer"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Promise trong JavaScript có 3 trạng thái: Pending (đang chờ), Fulfilled (hoàn thành thành công), Rejected (bị từ chối). Đây là định nghĩa chuẩn theo tài liệu MDN và ES6."
  },
  {
    "id": "fer202-d11-q08",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "After making a successful fetch request, how would you retrieve the JSON data from the response object?",
    "options": [
      {
        "id": "A",
        "text": "response.data()"
      },
      {
        "id": "B",
        "text": "response.json()"
      },
      {
        "id": "C",
        "text": "response.jsonText()"
      },
      {
        "id": "D",
        "text": "response.body.json()"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong JavaScript, sau khi fetch thành công, dùng response.json() để parse dữ liệu JSON từ phản hồi. Các phương thức như data(), jsonText(), hay body.json() không tồn tại trong API fetch chuẩn."
  },
  {
    "id": "fer202-d11-q09",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which React concept is used to pass data from a parent component to a child component?",
    "options": [
      {
        "id": "A",
        "text": "State"
      },
      {
        "id": "B",
        "text": "Props"
      },
      {
        "id": "C",
        "text": "Context"
      },
      {
        "id": "D",
        "text": "Ref"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, Props (properties) là cơ chế chính để truyền dữ liệu từ component cha xuống component con. State quản lý dữ liệu nội bộ, Context dùng cho truyền dữ liệu toàn cục, Ref dùng để tham chiếu DOM."
  },
  {
    "id": "fer202-d11-q10",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the main difference between props and state?",
    "options": [
      {
        "id": "A",
        "text": "Props are mutable, while state is immutable."
      },
      {
        "id": "B",
        "text": "State is used for passing data between components, while props are used to manage component behavior."
      },
      {
        "id": "C",
        "text": "Props do not change after the initial render, while state can change over time."
      },
      {
        "id": "D",
        "text": "State is used for rendering UI, while props are used for functionality."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Props được truyền từ component cha và không thay đổi trong component con; state là dữ liệu nội bộ có thể thay đổi theo thời gian để phản ánh trạng thái component. Đây là sự khác biệt cốt lõi trong React."
  },
  {
    "id": "fer202-d11-q11",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "When should the `useReducer()` Hook be used instead of `useState()`?",
    "options": [
      {
        "id": "A",
        "text": "When components require simple, independent state values."
      },
      {
        "id": "B",
        "text": "When performing initialization and cleanup actions"
      },
      {
        "id": "C",
        "text": "When there is complex state logic, several sub-values, or when the upcoming state depends on the previous state"
      },
      {
        "id": "D",
        "text": "When sharing data across a component hierarchy without prop"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "useReducer() phù hợp khi trạng thái phức tạp, có nhiều giá trị con hoặc trạng thái mới phụ thuộc vào trạng thái trước đó. useState() chỉ dùng cho trạng thái đơn giản, độc lập."
  },
  {
    "id": "fer202-d11-q12",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which method would you use to update the state of a component in React?",
    "options": [
      {
        "id": "A",
        "text": "setState"
      },
      {
        "id": "B",
        "text": "getState"
      },
      {
        "id": "C",
        "text": "updateState"
      },
      {
        "id": "D",
        "text": "modifyState"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "In React class components, setState() is the standard method to update component state. Functional components use useState hook, but setState remains correct for class-based context."
  },
  {
    "id": "fer202-d11-q13",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "Select the benefits of using React.memo and useMemo in React applications. (Choose 2 correct answers)",
    "options": [
      {
        "id": "A",
        "text": "Prevent unnecessary component re-renders"
      },
      {
        "id": "B",
        "text": "Automatically synchronize component state with global state"
      },
      {
        "id": "C",
        "text": "Guarantee object references don't change during re-rendering"
      },
      {
        "id": "D",
        "text": "Simplify the process of context management"
      }
    ],
    "correctOptionIds": [
      "A",
      "C"
    ],
    "explanation": "React.memo ngăn re-render không cần thiết cho component khi props không thay đổi. useMemo đảm bảo giá trị được memoize (lưu lại) và tham chiếu không đổi giữa các lần render, giúp tối ưu hiệu suất. Không liên quan đến global state hay context management."
  },
  {
    "id": "fer202-d11-q14",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "How do you define a route that matches /users/123 and passes the 123 as a parameter to the component?",
    "options": [
      {
        "id": "A",
        "text": "`<Route path=\"/users?id\" element={<User />} />`"
      },
      {
        "id": "B",
        "text": "`<Route path=\"/users/:id\" element={<User />} />`"
      },
      {
        "id": "C",
        "text": "`<Route path=\"/users/{id}\" element={<User />} />`"
      },
      {
        "id": "D",
        "text": "`<Route path=\"/users/#id\" element={<User />} />`"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React Router, để truyền tham số (ví dụ: 123 trong /users/123) vào component, dùng cú pháp ':id' trong path. Cú pháp này cho phép truy cập tham số qua useParams(). Các cú pháp khác như ?id, {id}, #id không đúng trong ngữ cảnh này."
  },
  {
    "id": "fer202-d11-q15",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "When declaring routes in React Router, what are Routes and Route components used for?",
    "options": [
      {
        "id": "A",
        "text": "Routes is for styling, and Route is for defining event handlers."
      },
      {
        "id": "B",
        "text": "Routes is for managing state, and Route is for rendering components."
      },
      {
        "id": "C",
        "text": "Routes is used to wrap Route components and define the application's routes, while Route is used to define an individual route."
      },
      {
        "id": "D",
        "text": "Routes is for client-side logic, and Route is for server-side logic"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong React Router, Routes là container bao bọc các Route, giúp quản lý và render route phù hợp; Route định nghĩa từng route cụ thể với path và component tương ứng."
  },
  {
    "id": "fer202-d11-q16",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which component is used to define a route in React Router?",
    "options": [
      {
        "id": "A",
        "text": "`<Route>`"
      },
      {
        "id": "B",
        "text": "`<Router>`"
      },
      {
        "id": "C",
        "text": "`<Link>`"
      },
      {
        "id": "D",
        "text": "`<Navigation>`"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React Router, thành phần <Route> được dùng để định nghĩa một route — ánh xạ một URL cụ thể tới một component. Các thành phần khác như <Router> là container, <Link> để điều hướng, còn <Navigation> không tồn tại trong React Router chuẩn."
  },
  {
    "id": "fer202-d11-q17",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of json-server in client-server communication?",
    "options": [
      {
        "id": "A",
        "text": "To set up a simple static web server that serves data to clients."
      },
      {
        "id": "B",
        "text": "To encrypt data during transmission between client and server."
      },
      {
        "id": "C",
        "text": "To manage client authentication and session data."
      },
      {
        "id": "D",
        "text": "To provide a full-featured backend for the React application."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "json-server là công cụ tạo server REST giả lập từ file JSON, dùng để phục vụ dữ liệu cho client trong quá trình phát triển — không mã hóa (B), không quản lý xác thực (C), không phải backend đầy đủ (D)."
  },
  {
    "id": "fer202-d11-q18",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is the correct syntax to use useDispatch in a functional component?",
    "options": [
      {
        "id": "A",
        "text": "const MyComponent = () => {\nconst dispatch = useDispatch();\nreturn <div>My Component</div>;\n};"
      },
      {
        "id": "B",
        "text": "const MyComponent = () => { const dispatch = useDispatch; return <div>My Component</div>; };"
      },
      {
        "id": "C",
        "text": "const MyComponent = () => {\nconst dispatch = dispatch();\nreturn <div>My Component</div>;\n};"
      },
      {
        "id": "D",
        "text": "const MyComponent = () => { const dispatch = useDispatch(); return <div>My Component with {dispatch}</div>; };"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "useDispatch là hook của Redux Toolkit, phải được gọi như một hàm (useDispatch()) để trả về hàm dispatch. Câu A đúng cú pháp. Câu B thiếu dấu ngoặc, C gọi sai hàm, D dùng dispatch như biến văn bản — đều sai."
  },
  {
    "id": "fer202-d11-q19",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which of the following is a valid JSON object?",
    "options": [
      {
        "id": "A",
        "text": "{\n\"name\": \"John Doe\",\n\"age\": 30,\n\"city\": \"New York\"\n}"
      },
      {
        "id": "B",
        "text": "{\n'name': 'John Doe',\n'age': \"30\",\n'city': 'New York'\n}"
      },
      {
        "id": "C",
        "text": "{\nname: \"John Doe\",\nage: 30,\ncity: \"New York\"\n}"
      },
      {
        "id": "D",
        "text": "{\n\"name\" = \"John Doe\",\n\"age\" = 30,\n\"city\" = \"New York\"\n}"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "JSON hợp lệ yêu cầu key phải là chuỗi trong dấu nháy kép, giá trị có thể là chuỗi, số, boolean... Đáp án A đúng chuẩn. B sai vì dùng nháy đơn (không hợp lệ trong JSON chuẩn). C sai vì key không có dấu nháy. D sai vì dùng dấu = thay cho :."
  },
  {
    "id": "fer202-d11-q20",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the primary architectural style used in designing web services that follow REST principles?",
    "options": [
      {
        "id": "A",
        "text": "SOAP (Simple Object Access Protocol)"
      },
      {
        "id": "B",
        "text": "RPC (Remote Procedure Call)"
      },
      {
        "id": "C",
        "text": "MVC (Model-View-Controller)"
      },
      {
        "id": "D",
        "text": "RESTful (Representational State Transfer)"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Kiến trúc chính được dùng trong thiết kế web service theo nguyên tắc REST là RESTful. SOAP và RPC là giao thức/kiến trúc khác, MVC là mô hình thiết kế ứng dụng, không phải kiến trúc web service."
  },
  {
    "id": "fer202-d11-q21",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Create a React component that uses composition to include a header, main content, and footer. Which code snippet is correct?",
    "options": [
      {
        "id": "A",
        "text": "function App() {\nreturn (<div><Header /><MainContent /><Footer /></div>);\n}"
      },
      {
        "id": "B",
        "text": "function App() {\nreturn (<div><Header /><Footer /><MainContent /></div>);\n}"
      },
      {
        "id": "C",
        "text": "function App() {\nreturn (<div><MainContent /><Header /><Footer /></div>);\n}"
      },
      {
        "id": "D",
        "text": "function App() {\nreturn (<div><Footer /><Header /><MainContent /></div>);\n}"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, composition thường sắp xếp các component theo cấu trúc logic: Header ở trên, MainContent ở giữa, Footer ở dưới. Câu A đúng về cấu trúc và thứ tự. Các lựa chọn khác sắp xếp sai vị trí, không phù hợp với bố cục giao diện chuẩn."
  },
  {
    "id": "fer202-d11-q22",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Create a React component that displays a list of items passed as props. Which approach would you use?",
    "options": [
      {
        "id": "A",
        "text": "Use a functional component with the map method"
      },
      {
        "id": "B",
        "text": "Use a class component with componentDidMount"
      },
      {
        "id": "C",
        "text": "Use a higher-order component"
      },
      {
        "id": "D",
        "text": "Use a lifecycle method to fetch data"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, để hiển thị danh sách các phần tử từ props, cách phổ biến và hiện đại nhất là dùng functional component kết hợp với phương thức map() để lặp qua mảng và trả về các phần tử JSX tương ứng. Đây là cách tối ưu, dễ đọc và tuân thủ React Hooks."
  },
  {
    "id": "fer202-d11-q23",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "How can you avoid contradictions in state with this code?\n```\nconst [isOpen, setIsOpen] = useState(false);\nconst [buttonText, setButtonText] = useState(isOpen ? \"se\" : \"Open\");\nfunction toggle() {\n  setIsOpen(!isOpen);\n  setButtonText(isOpen ? \"Open\" : \"se\");\n}\n```",
    "options": [
      {
        "id": "A",
        "text": "The code above is fine as it is."
      },
      {
        "id": "B",
        "text": "Remove buttonText from state and calculate it dynamically in the render method based on isOpen."
      },
      {
        "id": "C",
        "text": "Keep both isOpen and buttonText in state but update them separately."
      },
      {
        "id": "D",
        "text": "Use useEffect to sync buttonText with isOpen."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React, khi buttonText phụ thuộc hoàn toàn vào isOpen, việc lưu trữ nó trong state là dư thừa và dễ gây mâu thuẫn. Nên tính buttonText trực tiếp trong render: buttonText = isOpen ? \"Open\" : \"se\" để đảm bảo đồng bộ và tránh lỗi logic."
  },
  {
    "id": "fer202-d11-q24",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the main advantage of using Hooks in React?",
    "options": [
      {
        "id": "A",
        "text": "Hooks allow React to maintain internal state without classes"
      },
      {
        "id": "B",
        "text": "Hooks simplify sharing functionality between components"
      },
      {
        "id": "C",
        "text": "Hooks remove the need for functional components"
      },
      {
        "id": "D",
        "text": "Hooks only support stateful components"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Hooks cho phép component chức năng trong React quản lý state và side effect mà không cần dùng class, giúp code đơn giản và dễ bảo trì hơn."
  },
  {
    "id": "fer202-d11-q25",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "What does the default case in the reducer function do?",
    "options": [
      {
        "id": "A",
        "text": "Resets the state"
      },
      {
        "id": "B",
        "text": "Handles unknown actions"
      },
      {
        "id": "C",
        "text": "Throws an error for unknown actions"
      },
      {
        "id": "D",
        "text": "Returns the current state"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "Trong hàm reducer của Redux, case mặc định (default) thường trả về state hiện tại để đảm bảo rằng khi action không khớp với bất kỳ case nào, state sẽ không bị thay đổi — đây là hành vi an toàn và bắt buộc để tránh lỗi."
  },
  {
    "id": "fer202-d11-q26",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the purpose of package.json in a Node.js project?",
    "options": [
      {
        "id": "A",
        "text": "It defines the project's dependencies and scripts"
      },
      {
        "id": "B",
        "text": "It contains the source code of the project"
      },
      {
        "id": "C",
        "text": "It configures the Node.js environment"
      },
      {
        "id": "D",
        "text": "It manages the project's build process"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "package.json trong Node.js dùng để khai báo phụ thuộc (dependencies), script chạy, thông tin dự án... Không chứa mã nguồn hay cấu hình môi trường."
  },
  {
    "id": "fer202-d11-q27",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the main purpose of React in modern web development, and what type of applications does it best support?",
    "options": [
      {
        "id": "A",
        "text": "It is mainly designed for handling backend logic and database management"
      },
      {
        "id": "B",
        "text": "React helps build interactive user interfaces, especially for SPAs."
      },
      {
        "id": "C",
        "text": "React primarily functions as a server-side rendering engine for web applications."
      },
      {
        "id": "D",
        "text": "It is mainly a mobile development framework and not suitable for web applications."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "React là thư viện JavaScript dùng để xây dựng giao diện người dùng tương tác, đặc biệt phù hợp với ứng dụng một trang (SPA). Nó không xử lý backend, server-side rendering hay phát triển di động (mặc dù React Native có thể dùng cho mobile)."
  },
  {
    "id": "fer202-d11-q28",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which of the following is NOT a feature of React?",
    "options": [
      {
        "id": "A",
        "text": "Component-Based"
      },
      {
        "id": "B",
        "text": "Virtual DOM"
      },
      {
        "id": "C",
        "text": "Large Community"
      },
      {
        "id": "D",
        "text": "Server-Side Rendering"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "React là thư viện UI client-side, không hỗ trợ SSR mặc định. SSR cần thư viện bổ sung như Next.js. Các đặc điểm còn lại: Component-Based, Virtual DOM, Large Community đều đúng."
  },
  {
    "id": "fer202-d11-q29",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you conditionally render content in JSX?",
    "options": [
      {
        "id": "A",
        "text": "By using the if statement"
      },
      {
        "id": "B",
        "text": "By using the for loop"
      },
      {
        "id": "C",
        "text": "By using the ternary operator `{condition ? trueContent : falseContent}`"
      },
      {
        "id": "D",
        "text": "By using the switch statement"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong JSX, không thể dùng if/for/switch trực tiếp trong return. Ternary operator là cách phổ biến và hợp lệ để render có điều kiện. Ví dụ: `{isLoggedIn ? <User /> : <Login />}`."
  },
  {
    "id": "fer202-d11-q30",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which method is used to perform enhanced array manipulation in ES6?",
    "options": [
      {
        "id": "A",
        "text": "map()"
      },
      {
        "id": "B",
        "text": "forEach()"
      },
      {
        "id": "C",
        "text": "reduce()"
      },
      {
        "id": "D",
        "text": "filter()"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong ES6, map() là phương thức được dùng để thực hiện thao tác nâng cao trên mảng — tạo mảng mới bằng cách áp dụng hàm lên từng phần tử. Các phương thức khác như forEach(), reduce(), filter() cũng hữu ích nhưng map() đặc biệt nổi bật trong xử lý mảng theo kiểu hàm bậc cao."
  },
  {
    "id": "fer202-d11-q31",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "In JSX, which of the following is correct?",
    "options": [
      {
        "id": "A",
        "text": "You must always wrap JSX in a single root element"
      },
      {
        "id": "B",
        "text": "You can use multiple root elements without any wrapping"
      },
      {
        "id": "C",
        "text": "JSX tags can be self-closing only for non-void elements"
      },
      {
        "id": "D",
        "text": "JSX does not support attributes like className"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "JSX yêu cầu phải có một root element duy nhất. Nếu muốn render nhiều element, phải bao bọc chúng trong một thẻ (ví dụ: <div> hoặc React.Fragment). Các lựa chọn khác sai về cú pháp hoặc quy tắc JSX."
  },
  {
    "id": "fer202-d11-q32",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How can you install React-Bootstrap in your ReactJS project?",
    "options": [
      {
        "id": "A",
        "text": "By using npm or yarn to install the package."
      },
      {
        "id": "B",
        "text": "By downloading the React-Bootstrap files from a website."
      },
      {
        "id": "C",
        "text": "By copying and pasting the React-Bootstrap code into your project."
      },
      {
        "id": "D",
        "text": "By using a CDN link to include React-Bootstrap in your HTML file."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Cách chuẩn để cài React-Bootstrap là dùng npm install react-bootstrap bootstrap hoặc yarn add react-bootstrap bootstrap — đảm bảo quản lý phiên bản và phụ thuộc."
  },
  {
    "id": "fer202-d11-q33",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you use the Grid system in React-Bootstrap",
    "options": [
      {
        "id": "A",
        "text": "<Row>\n<Container>\n<Col xs={6}>2 of 3 (wider)</Col>\n</Container>\n</Row>"
      },
      {
        "id": "B",
        "text": "<Row>\n<Container>\n<Column>1 of 3</Column></Container>\n</Row>"
      },
      {
        "id": "C",
        "text": "<Container>\n<Row>\n<Col xs={6}>2 of 3 (wider)</Col>\n</Row>\n</Container>"
      },
      {
        "id": "D",
        "text": "<Container>\n<Column>\n<Row xs={6}>2 of 3 (wider)</Row>\n</Column>\n</Container>"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong React-Bootstrap, hệ thống Grid sử dụng cấu trúc <Container> → <Row> → <Col>. <Col> là thành phần chứa nội dung, <Row> nhóm các cột, <Container> bao bọc toàn bộ. Cấu trúc A, B, D sai thứ tự hoặc dùng tag không tồn tại (Column, Row xs={6})."
  },
  {
    "id": "fer202-d11-q34",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the purpose of the 'fluid' prop in React-Bootstrap's Container component?",
    "options": [
      {
        "id": "A",
        "text": "It makes the container take up the entire width of the viewport."
      },
      {
        "id": "B",
        "text": "It enables the container to display text."
      },
      {
        "id": "C",
        "text": "It changes the container's background color."
      },
      {
        "id": "D",
        "text": "It makes the container fixed width."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Thuộc tính 'fluid' trong React-Bootstrap Container khiến container mở rộng toàn bộ chiều rộng của viewport (100% width), thay vì có chiều rộng cố định như container mặc định. Không liên quan đến màu nền, hiển thị văn bản hay chiều rộng cố định."
  },
  {
    "id": "fer202-d11-q35",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Assess the impact of using inline event handlers in React components. Which statement is true?",
    "options": [
      {
        "id": "A",
        "text": "Inline event handlers improve performance by reducing the number of function calls"
      },
      {
        "id": "B",
        "text": "Inline event handlers can lead to performance issues due to the creation of new functions on each render"
      },
      {
        "id": "C",
        "text": "Inline event handlers are the only way to handle events in React"
      },
      {
        "id": "D",
        "text": "Inline event handlers are more secure than named event handlers"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Inline event handlers trong React tạo ra hàm mới mỗi lần render, gây lãng phí bộ nhớ và làm chậm hiệu năng. Nên dùng useCallback hoặc định nghĩa hàm ngoài để tránh vấn đề này."
  },
  {
    "id": "fer202-d11-q36",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Analyze the benefits of using synthetic events in React. Which of the following is NOT a benefit?",
    "options": [
      {
        "id": "A",
        "text": "Provides a consistent event interface across different browsers"
      },
      {
        "id": "B",
        "text": "Contains information necessary for event propagation"
      },
      {
        "id": "C",
        "text": "Reduces the need for garbage collection"
      },
      {
        "id": "D",
        "text": "Normalizes browser inconsistencies"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Synthetic events trong React giúp chuẩn hóa sự kiện giữa các trình duyệt (A, D), và chứa thông tin cho việc lan truyền sự kiện (B). Tuy nhiên, chúng KHÔNG giảm nhu cầu thu gom rác — đây là chức năng của engine JavaScript, không liên quan đến synthetic events."
  },
  {
    "id": "fer202-d11-q37",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What does the render method in a React component do?",
    "options": [
      {
        "id": "A",
        "text": "It manages state updates"
      },
      {
        "id": "B",
        "text": "It handles side effects"
      },
      {
        "id": "C",
        "text": "It returns the JSX that describes the UI"
      },
      {
        "id": "D",
        "text": "It fetches data from an API"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Phương thức render() trong React component có nhiệm vụ trả về JSX mô tả giao diện người dùng. Nó không quản lý state, xử lý side effect hay fetch data."
  },
  {
    "id": "fer202-d11-q38",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is a key differentiating characteristic of Tailwind CSS compared to traditional CSS frameworks like Bootstrap, as described in the sources?",
    "options": [
      {
        "id": "A",
        "text": "It provides a comprehensive set of pre-built components for rapid development"
      },
      {
        "id": "B",
        "text": "It enforces strict design patterns to maintain visual consistency."
      },
      {
        "id": "C",
        "text": "It offers a huge list of utility CSS classes, providing more freedom for custom designs"
      },
      {
        "id": "D",
        "text": "It relies heavily on JavaScript for styling and layout management."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Tailwind CSS khác biệt với Bootstrap ở chỗ nó cung cấp hàng loạt lớp utility CSS thay vì component sẵn có, giúp người dùng linh hoạt thiết kế theo ý muốn thay vì bị giới hạn bởi mẫu có sẵn."
  },
  {
    "id": "fer202-d11-q39",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Next.js is primarily used for:",
    "options": [
      {
        "id": "A",
        "text": "Styling static websites"
      },
      {
        "id": "B",
        "text": "Creating server-rendered or statically generated React applications"
      },
      {
        "id": "C",
        "text": "Managing back-end databases"
      },
      {
        "id": "D",
        "text": "Handling real-time communication"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Next.js là framework React cho phép tạo ứng dụng được render ở server (SSR) hoặc sinh tĩnh (SSG), tối ưu SEO và hiệu suất."
  },
  {
    "id": "fer202-d11-q40",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "In Next.js, what mechanism primarily determines the routes in an application?",
    "options": [
      {
        "id": "A",
        "text": "Explicit configuration in a central `routes.json` file."
      },
      {
        "id": "B",
        "text": "File-system routing, where routes are determined by the structure of files"
      },
      {
        "id": "C",
        "text": "Dynamic route declarations using React Router"
      },
      {
        "id": "D",
        "text": "Server-side API endpoints only"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Next.js sử dụng cơ chế định tuyến dựa trên hệ thống tệp: mỗi file trong thư mục `app` hoặc `pages` tương ứng với một route, không cần cấu hình thủ công."
  },
  {
    "id": "fer202-d11-q41",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "How does Next.js's server-side rendering capability primarily benefit web applications?",
    "options": [
      {
        "id": "A",
        "text": "By offloading all rendering tasks to the client's browser"
      },
      {
        "id": "B",
        "text": "By eliminating the need for any server infrastructure"
      },
      {
        "id": "C",
        "text": "By resulting in faster initial page load times and better search engine optimization (SEO)"
      },
      {
        "id": "D",
        "text": "By simplifying complex client-side state management."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Server-side rendering (SSR) trong Next.js giúp render trang trên server trước khi gửi về client, dẫn đến thời gian tải trang đầu tiên nhanh hơn và nội dung dễ được index bởi công cụ tìm kiếm → cải thiện SEO."
  },
  {
    "id": "fer202-d11-q42",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "If you wanted to customize the size of the form controls, what would you do in Bootstrap5?",
    "options": [
      {
        "id": "A",
        "text": "Set width in inline CSS"
      },
      {
        "id": "B",
        "text": "Use the rows and cols attributes for all form elements"
      },
      {
        "id": "C",
        "text": "Use the size variants of the .form-control class, like .form-control-sm or .form-control-lg"
      },
      {
        "id": "D",
        "text": "Apply custom JavaScript functions"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong Bootstrap 5, để tùy chỉnh kích thước form control, bạn dùng các class như .form-control-sm (nhỏ) hoặc .form-control-lg (lớn). Đây là cách chuẩn, không cần CSS inline hay JS."
  },
  {
    "id": "fer202-d11-q43",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you create a responsive grid layout using Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "By using the `<div class=\"grid\">` element."
      },
      {
        "id": "B",
        "text": "By applying the `.responsive-grid` class to the container element."
      },
      {
        "id": "C",
        "text": "By using the `.row` and `.col-*-*` classes to create rows and columns."
      },
      {
        "id": "D",
        "text": "By manually specifying the width of each element using CSS."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Bootstrap sử dụng hệ thống lưới (grid) dựa trên class .row để tạo hàng và .col-*-* để tạo cột, giúp bố cục linh hoạt và phản ứng với kích thước màn hình."
  },
  {
    "id": "fer202-d11-q44",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following components can be used to create a slideshow in Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "`.popover`"
      },
      {
        "id": "B",
        "text": "`.modal`"
      },
      {
        "id": "C",
        "text": "`.carousel`"
      },
      {
        "id": "D",
        "text": "`.nav-pills`"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Trong Bootstrap, thành phần .carousel được dùng để tạo slideshow (trình chiếu hình ảnh hoặc nội dung). Các lựa chọn khác như .popover, .modal, .nav-pills không có chức năng này."
  },
  {
    "id": "fer202-d11-q45",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What does the `useNavigate` hook return?",
    "options": [
      {
        "id": "A",
        "text": "An object with navigation methods."
      },
      {
        "id": "B",
        "text": "A navigate function that can be used to navigate to a new location."
      },
      {
        "id": "C",
        "text": "A boolean indicating navigation status."
      },
      {
        "id": "D",
        "text": "A string representing the current route."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Hook `useNavigate` trong React Router trả về một hàm `navigate` để chuyển hướng đến vị trí mới, không phải đối tượng, boolean hay chuỗi route hiện tại."
  },
  {
    "id": "fer202-d11-q46",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "How do you define a dynamic route parameter in React Router?",
    "options": [
      {
        "id": "A",
        "text": "`<Route path=\"/user/id\" component={UserProfile} />`"
      },
      {
        "id": "B",
        "text": "`<Route path=\"/user/:id\" component={UserProfile} />`"
      },
      {
        "id": "C",
        "text": "`<Route path=\"/user?:id\" component={UserProfile} />`"
      },
      {
        "id": "D",
        "text": "`<Route path=\"/user={id}\" component={UserProfile} />`"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React Router, tham số động được định nghĩa bằng cách đặt dấu hai chấm trước tên biến (ví dụ: :id). Cú pháp này cho phép truyền giá trị động vào component, ví dụ: /user/123 → id = 123."
  },
  {
    "id": "fer202-d11-q47",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What does the `fallback` prop in Suspense represent?",
    "options": [
      {
        "id": "A",
        "text": "The component to display while the lazy component is loading"
      },
      {
        "id": "B",
        "text": "The component to display when an error occurs during loading"
      },
      {
        "id": "C",
        "text": "The component to display when the lazy component is rendered"
      },
      {
        "id": "D",
        "text": "The component to display when Suspense is not supported"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "Trong React, prop `fallback` của Suspense dùng để hiển thị UI tạm thời trong khi component lazy đang tải. Không dùng cho lỗi, render xong hay không hỗ trợ. Do đó, A là đáp án đúng."
  },
  {
    "id": "fer202-d11-q48",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What is the main purpose of code splitting in a React application?",
    "options": [
      {
        "id": "A",
        "text": "To make the code easier to read"
      },
      {
        "id": "B",
        "text": "To bundle all components into a single large file"
      },
      {
        "id": "C",
        "text": "To reduce the initial load time by loading parts of the app only when needed"
      },
      {
        "id": "D",
        "text": "To split CSS and JavaScript into separate files"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "Code splitting trong React giúp chia nhỏ bundle, chỉ tải các phần code cần thiết khi người dùng truy cập — giảm thời gian tải ban đầu, cải thiện hiệu suất và trải nghiệm người dùng."
  },
  {
    "id": "fer202-d11-q49",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "In a React function component, how do you access a prop named \"name\" that is passed from a parent component?",
    "options": [
      {
        "id": "A",
        "text": "`this.props.name`"
      },
      {
        "id": "B",
        "text": "`props.name`"
      },
      {
        "id": "C",
        "text": "`useState.name`"
      },
      {
        "id": "D",
        "text": "`getProps().name`"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "Trong React function component, props được truyền vào như một tham số và truy cập qua `props.name`. `this.props.name` chỉ dùng trong class component, các lựa chọn còn lại không hợp lệ."
  },
  {
    "id": "fer202-d11-q50",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "Which of the following are valid ways to initialize and manage state in a functional React component? (Choose 2 correct answers)",
    "options": [
      {
        "id": "A",
        "text": "Using the `useState` hook."
      },
      {
        "id": "B",
        "text": "Using the `useReducer` hook."
      },
      {
        "id": "C",
        "text": "Using a `Provider` component."
      },
      {
        "id": "D",
        "text": "Using the `useRef` hook."
      }
    ],
    "correctOptionIds": [
      "A",
      "B"
    ],
    "explanation": "Trong React functional component, useState và useReducer là hai hook chính để khởi tạo và quản lý state. useRef dùng để tham chiếu DOM, không quản lý state. Provider dùng trong context, không phải cách trực tiếp quản lý state."
  },
  {
    "id": "fer202-d12-q01",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "# FER202_FA25_FE_883910\n\n> Môn: **FER202** — Phát triển web Front-End với React · Kỳ: FA25 · Loại: FE · 50 câu\n\n### Trang 1/50\n\n**Câu 1.** How can route parameters be defined in React Router?",
    "options": [
      {
        "id": "A",
        "text": "```\nBy using the params prop in the <Route> component\n```"
      },
      {
        "id": "B",
        "text": "By accessing them directly from the URL"
      },
      {
        "id": "C",
        "text": "```\nBy using the path prop with placeholders in the <Route> component\n```"
      },
      {
        "id": "D",
        "text": "By using the match object passed to the component"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trong React Router, tham số động của route (route parameters) được khai báo ngay trong thuộc tính `path` của `<Route>` bằng dấu hai chấm làm placeholder, ví dụ: `<Route path=\"/users/:userId\" element={<User />} />`."
  },
  {
    "id": "fer202-d12-q02",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 2/50\n\n**Câu 2.** Which prop is used to provide a unique identifier for elements in a list rendered by a component in React 18?",
    "options": [
      {
        "id": "A",
        "text": "key"
      },
      {
        "id": "B",
        "text": "id"
      },
      {
        "id": "C",
        "text": "index"
      },
      {
        "id": "D",
        "text": "ref"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong React, prop `key` cung cấp định danh duy nhất cho từng phần tử trong danh sách khi render bằng `.map()`, giúp thuật toán Reconciliation nhận biết phần tử nào thay đổi, thêm mới hay bị xóa."
  },
  {
    "id": "fer202-d12-q03",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 3/50\n\n**Câu 3.** How would you use the useEffect Hook to fetch data from an API in a React component?",
    "options": [
      {
        "id": "A",
        "text": "useEffect(fetchData, []);"
      },
      {
        "id": "B",
        "text": "useEffect(() => fetchData(), []);"
      },
      {
        "id": "C",
        "text": "useEffect(() => fetchData(), [fetchData]);"
      },
      {
        "id": "D",
        "text": "useEffect(() => fetchData());"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Cách chuẩn để gọi hàm lấy dữ liệu 1 lần khi component mount là bọc lời gọi bên trong arrow function của `useEffect(() => { fetchData(); }, []);` với dependency array rỗng `[]`."
  },
  {
    "id": "fer202-d12-q04",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 4/50\n\n**Câu 4.** What is the purpose of a router in web development?",
    "options": [
      {
        "id": "A",
        "text": "To handle database operations"
      },
      {
        "id": "B",
        "text": "To manage user authentication"
      },
      {
        "id": "C",
        "text": "To handle navigation between different pages"
      },
      {
        "id": "D",
        "text": "To style the user interface"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Mục đích của Router trong phát triển web là quản lý việc điều hướng (navigation) giữa các trang/view khác nhau tương ứng với đường dẫn URL trên trình duyệt."
  },
  {
    "id": "fer202-d12-q05",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 5/50\n\n**Câu 5.** Which HTTP method is typically used to retrieve data from a server?",
    "options": [
      {
        "id": "A",
        "text": "GET"
      },
      {
        "id": "B",
        "text": "POST"
      },
      {
        "id": "C",
        "text": "PUT"
      },
      {
        "id": "D",
        "text": "DELETE"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Phương thức HTTP `GET` được sử dụng để truy xuất (lấy) dữ liệu từ server. `POST` để tạo mới, `PUT` để cập nhật toàn bộ, `DELETE` để xóa."
  },
  {
    "id": "fer202-d12-q06",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 6/50\n\n**Câu 6.** Evaluate the differences between useMemo and useCallback hooks. Which statement is true?",
    "options": [
      {
        "id": "A",
        "text": "useMemo is used to memoize functions, while useCallback is used to memoize values"
      },
      {
        "id": "B",
        "text": "useMemo is used to memoize values, while useCallback is used to memoize functions"
      },
      {
        "id": "C",
        "text": "Both useMemo and useCallback are used to memoize values"
      },
      {
        "id": "D",
        "text": "Both useMemo and useCallback are used to memoize functions"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- `useMemo` thực thi hàm và ghi nhớ **giá trị trả về** (memoize values), còn `useCallback` ghi nhớ chính **tham chiếu hàm** (memoize functions) để tránh tạo lại hàm mới qua các lần render."
  },
  {
    "id": "fer202-d12-q07",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 7/50\n\n**Câu 7.** What is the advantage of event pooling in React?",
    "options": [
      {
        "id": "A",
        "text": "It reduces memory usage by reusing event objects."
      },
      {
        "id": "B",
        "text": "It improves event handling performance by creating new event objects for each event."
      },
      {
        "id": "C",
        "text": "It simplifies event handling by providing a pool of event handlers."
      },
      {
        "id": "D",
        "text": "It allows for better management of event contexts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Event pooling (trong các phiên bản React cũ trước 17) giúp giảm tiêu thụ bộ nhớ bằng cách tái sử dụng lại các đối tượng `SyntheticEvent` thay vì cấp phát mới liên tục cho mỗi sự kiện."
  },
  {
    "id": "fer202-d12-q08",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 8/50\n\n**Câu 8.** Describe the Redux flow process when an action is dispatched.",
    "options": [
      {
        "id": "A",
        "text": "Action is dispatched -> Middleware -> Reducer -> Store -> Component."
      },
      {
        "id": "B",
        "text": "Component dispatches action -> Reducer -> Middleware -> Store."
      },
      {
        "id": "C",
        "text": "Middleware dispatches action -> Reducer -> Store -> Component."
      },
      {
        "id": "D",
        "text": "Reducer dispatches action -> Middleware -> Component -> Store."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Luồng dữ liệu một chiều chuẩn trong Redux khi dispatch một action: **Action được dispatch → Middleware (như Redux Thunk) → Reducer (tính state mới) → Store (cập nhật state) → Component (re-render UI)**."
  },
  {
    "id": "fer202-d12-q09",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 9/50\n\n**Câu 9.** Evaluate the benefits of using Redux Thunk middleware in a Redux application. Which of the following is NOT a benefit?",
    "options": [
      {
        "id": "A",
        "text": "Allows for handling asynchronous actions"
      },
      {
        "id": "B",
        "text": "Simplifies the process of making API calls within action creators"
      },
      {
        "id": "C",
        "text": "Ensures that all actions are synchronous"
      },
      {
        "id": "D",
        "text": "Enables conditional dispatching of actions"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Redux Thunk được sinh ra để hỗ trợ xử lý **bất đồng bộ (asynchronous actions)** như gọi API và dispatch có điều kiện. Do đó phát biểu \"đảm bảo mọi action đều đồng bộ\" (C) KHÔNG phải là lợi ích của Redux Thunk."
  },
  {
    "id": "fer202-d12-q10",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 10/50\n\n**Câu 10.** Which class is used to create a button in Bootstrap 5?",
    "options": [
      {
        "id": "A",
        "text": "btn"
      },
      {
        "id": "B",
        "text": "button"
      },
      {
        "id": "C",
        "text": "btn-primary"
      },
      {
        "id": "D",
        "text": "btn-default"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Bootstrap 5, class nền tảng bắt buộc để tạo một nút bấm là `.btn` (sau đó kết hợp thêm các class màu sắc như `.btn-primary`, `.btn-danger`)."
  },
  {
    "id": "fer202-d12-q11",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 11/50\n\n**Câu 11.** What protocol is commonly used for client-server communication over the web?",
    "options": [
      {
        "id": "A",
        "text": "HTTP"
      },
      {
        "id": "B",
        "text": "FTP"
      },
      {
        "id": "C",
        "text": "SMTP"
      },
      {
        "id": "D",
        "text": "SSH"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Giao thức chuẩn phổ biến nhất cho giao tiếp Client–Server trên web là **HTTP** (và bản bảo mật HTTPS). FTP dùng truyền file, SMTP dùng gửi email, SSH dùng điều khiển từ xa."
  },
  {
    "id": "fer202-d12-q12",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 12/50\n\n**Câu 12.** In React 19, how can you pass additional arguments to an event handler?",
    "options": [
      {
        "id": "A",
        "text": "By using the event.target property"
      },
      {
        "id": "B",
        "text": "By using the event.data property"
      },
      {
        "id": "C",
        "text": "By using the bind method when binding the event handler"
      },
      {
        "id": "D",
        "text": "React 19 does not support passing additional arguments to event handlers"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trong React, bạn có thể truyền thêm tham số vào event handler bằng cách dùng phương thức `.bind(this, arg)` (hoặc bọc trong arrow function `() => handleClick(arg)`)."
  },
  {
    "id": "fer202-d12-q13",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 13/50\n\n**Câu 13.** Which of the following is the correct syntax to use useDispatch in a functional component?",
    "options": [
      {
        "id": "A",
        "text": "```\nconst MyComponent = () => {\nconst dispatch = useDispatch();\nreturn <div>My Component</div>;\n};\n```"
      },
      {
        "id": "B",
        "text": "```\nconst MyComponent = () => { const dispatch = useDispatch; return <div>My Component</div>; };\n```"
      },
      {
        "id": "C",
        "text": "```\nconst MyComponent = () => {\nconst dispatch = dispatch();\nreturn <div>My Component</div>;\n};\n```"
      },
      {
        "id": "D",
        "text": "```\nconst MyComponent = () => { const dispatch = useDispatch(); return <div>My Component with dispatch</div>; };\n```"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Để dùng hook `useDispatch` của `react-redux` trong functional component, ta gọi trực tiếp `const dispatch = useDispatch();` ở cấp cao nhất của component (phải có dấu gọi hàm `()`)."
  },
  {
    "id": "fer202-d12-q14",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "### Trang 14/50\n\n**Câu 14.** How can you import functions or variables from an ES6 module?",
    "options": [
      {
        "id": "A",
        "text": "By using the import keyword"
      },
      {
        "id": "B",
        "text": "By using the require function"
      },
      {
        "id": "C",
        "text": "By using the export keyword"
      },
      {
        "id": "D",
        "text": "By using the include directive"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong hệ thống ES6 Modules, từ khóa `import` được dùng để nhập các hàm, biến hoặc component từ module khác (ví dụ `import { sum } from './math'`). `require()` là cú pháp CommonJS cũ."
  },
  {
    "id": "fer202-d12-q15",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 15/50\n\n**Câu 15.** Compare the use of Redux and Flux for state management. Which statement is true?",
    "options": [
      {
        "id": "A",
        "text": "Redux uses multiple stores, while Flux uses a single store."
      },
      {
        "id": "B",
        "text": "Flux uses multiple stores, while Redux uses a single store."
      },
      {
        "id": "C",
        "text": "Both Redux and Flux use multiple stores."
      },
      {
        "id": "D",
        "text": "Both Redux and Flux use a single store."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- So sánh kinh điển Flux vs Redux: **Flux** có thể có **nhiều Stores (multiple stores)**, còn **Redux** chỉ có duy nhất **1 Store (single source of truth)** cho toàn ứng dụng."
  },
  {
    "id": "fer202-d12-q16",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 16/50\n\n**Câu 16.** How can you create a new Git repository?",
    "options": [
      {
        "id": "A",
        "text": "By running \"git init\" in the project directory"
      },
      {
        "id": "B",
        "text": "By adding a remote repository URL"
      },
      {
        "id": "C",
        "text": "By cloning an existing repository"
      },
      {
        "id": "D",
        "text": "By committing changes using \"git commit -m\""
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Để khởi tạo một Git repository mới ngay trong thư mục dự án hiện tại, ta chạy lệnh `git init`."
  },
  {
    "id": "fer202-d12-q17",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 17/50\n\n**Câu 17.** What is the correct way to update the state when it depends on the previous state?",
    "options": [
      {
        "id": "A",
        "text": "setValue(value + 1);"
      },
      {
        "id": "B",
        "text": "setValue(prevValue => prevValue + 1);"
      },
      {
        "id": "C",
        "text": "setValue(() => value + 1);"
      },
      {
        "id": "D",
        "text": "setValue(value => value + 1);"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Khi cập nhật state phụ thuộc vào giá trị state trước đó, cách chuẩn và an toàn nhất là dùng **functional updater**: `setValue(prevValue => prevValue + 1)` để luôn nhận giá trị mới nhất khi React batching."
  },
  {
    "id": "fer202-d12-q18",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 18/50\n\n**Câu 18.** Which prop is used to define default values for props in a functional component in React 18?",
    "options": [
      {
        "id": "A",
        "text": "defaultProps"
      },
      {
        "id": "B",
        "text": "initialProps"
      },
      {
        "id": "C",
        "text": "props"
      },
      {
        "id": "D",
        "text": "defaultValue"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** *(Đã rà soát & sửa chuẩn từ đáp án gốc)*\n\n- Trong React 18 (trước khi bị loại bỏ ở React 19), thuộc tính `Component.defaultProps = { ... }` được dùng để khai báo giá trị mặc định cho props (bên cạnh ES6 default parameter). Không có thuộc tính nào tên là `initialProps` trong React."
  },
  {
    "id": "fer202-d12-q19",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 19/50\n\n**Câu 19.** Evaluate the benefits of using the React.lazy API for code splitting in a React application. Which of the following is NOT a benefit?",
    "options": [
      {
        "id": "A",
        "text": "Reduces the initial load time by splitting code into bundles"
      },
      {
        "id": "B",
        "text": "Ensures that all components are loaded upfront"
      },
      {
        "id": "C",
        "text": "Provides a better user experience by loading components only when needed"
      },
      {
        "id": "D",
        "text": "Allows for dynamic imports and lazy loading of components"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- `React.lazy()` dùng để tải lười (lazy loading) từng phần khi cần nhằm giảm thời gian tải ban đầu. Do đó \"đảm bảo tất cả component đều được tải ngay từ đầu\" (B) hoàn toàn trái ngược và KHÔNG phải lợi ích của `React.lazy()`."
  },
  {
    "id": "fer202-d12-q20",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 20/50\n\n**Câu 20.** What is the role of the BrowserRouter component in React Router?",
    "options": [
      {
        "id": "A",
        "text": "To define a route in the application"
      },
      {
        "id": "B",
        "text": "To wrap the entire application and enable routing using the HTML5 History API"
      },
      {
        "id": "C",
        "text": "To handle form submissions"
      },
      {
        "id": "D",
        "text": "To manage state within a component"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- `<BrowserRouter>` bọc ngoài ứng dụng React và kích hoạt định tuyến phía client sử dụng **HTML5 History API** (`pushState`, `popstate`), giữ URL trình duyệt đồng bộ với giao diện."
  },
  {
    "id": "fer202-d12-q21",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 21/50\n\n**Câu 21.** What are the key features of React?",
    "options": [
      {
        "id": "A",
        "text": "Two-way data binding"
      },
      {
        "id": "B",
        "text": "Virtual DOM"
      },
      {
        "id": "C",
        "text": "SQL database integration"
      },
      {
        "id": "D",
        "text": "Automatic styling"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- **Virtual DOM** là một trong những tính năng cốt lõi nổi bật nhất của React (cùng với Component-based và luồng dữ liệu một chiều — one-way data binding, KHÔNG phải two-way)."
  },
  {
    "id": "fer202-d12-q22",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 22/50\n\n**Câu 22.** Create a React component that uses composition to include a header, main content, and footer. Which code snippet is correct?",
    "options": [
      {
        "id": "A",
        "text": "```\nfunction App() {\nreturn (<div><Header /></MainContent></Footer />);\n}\n```"
      },
      {
        "id": "B",
        "text": "```\nfunction App() {\nreturn (<div><Header /></Footer /><MainContent /></div>);\n}\n```"
      },
      {
        "id": "C",
        "text": "```\nfunction App() {\nreturn (<div><MainContent /></Header /></Footer /></div>);\n}\n```"
      },
      {
        "id": "D",
        "text": "```\nfunction App() {\nreturn (<div><Footer /></Header /><MainContent /></div>);\n}\n```"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Đề yêu cầu sắp xếp bố cục theo đúng thứ tự: **Header → MainContent → Footer** (Component Composition). Đáp án A là phương án duy nhất giữ đúng thứ tự 3 thành phần này."
  },
  {
    "id": "fer202-d12-q23",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "multiple",
    "prompt": "### Trang 23/50\n\n**Câu 23.** How do you import React Router components in the code (choose 2 options)?\n\n*(Chọn 2 đáp án)*",
    "options": [
      {
        "id": "A",
        "text": "import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';"
      },
      {
        "id": "B",
        "text": "import { Router, Routes, Route } from 'react-router-dom';"
      },
      {
        "id": "C",
        "text": "import { BrowserRouter, Routes, Route } from 'react-router-dom';"
      },
      {
        "id": "D",
        "text": "import { Router, Switch, Route } from 'react-router-dom';"
      }
    ],
    "correctOptionIds": [
      "A",
      "C"
    ],
    "explanation": "**Đáp án đúng: A và C** *(Đã rà soát & sửa chuẩn từ đáp án gốc)*\n\n- Trong React Router v6, hai cách import chuẩn nhất là:\n  - `import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';` (đặt bí danh `Router` cho `BrowserRouter`)\n  - `import { BrowserRouter, Routes, Route } from 'react-router-dom';` (dùng trực tiếp tên `BrowserRouter`).\n- Lưu ý: `<Switch>` ở D đã bị loại bỏ từ v6 và thay bằng `<Routes>`."
  },
  {
    "id": "fer202-d12-q24",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 24/50\n\n**Câu 24.** Which HTTP status code indicates a successful response from a server?",
    "options": [
      {
        "id": "A",
        "text": "200 OK"
      },
      {
        "id": "B",
        "text": "404 Not Found"
      },
      {
        "id": "C",
        "text": "500 Internal Server Error"
      },
      {
        "id": "D",
        "text": "302 Found"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã trạng thái HTTP `200 OK` biểu thị yêu cầu đã được máy chủ xử lý thành công. `404` là không tìm thấy, `500` là lỗi server, `302` là chuyển hướng tạm thời."
  },
  {
    "id": "fer202-d12-q25",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 25/50\n\n**Câu 25.** What is the purpose of the initial state parameter in a Redux reducer function?",
    "options": [
      {
        "id": "A",
        "text": "To define the structure of the Redux store"
      },
      {
        "id": "B",
        "text": "To specify the actions that can be dispatched"
      },
      {
        "id": "C",
        "text": "To handle asynchronous operations"
      },
      {
        "id": "D",
        "text": "To define the initial state of the reducer"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Tham số `initialState` trong reducer (`(state = initialState, action) => ...`) dùng để định nghĩa trạng thái khởi đầu mặc định của nhánh state mà reducer đó quản lý."
  },
  {
    "id": "fer202-d12-q26",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 26/50\n\n**Câu 26.** What are Higher-Order Components in React?",
    "options": [
      {
        "id": "A",
        "text": "Advanced components."
      },
      {
        "id": "B",
        "text": "Components written in JavaScript."
      },
      {
        "id": "C",
        "text": "Components with multiple props."
      },
      {
        "id": "D",
        "text": "Components with multiple states."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Higher-Order Components (HOC) là một kỹ thuật nâng cao trong React dùng để tái sử dụng logic giữa các component (một hàm nhận vào một component và trả về một component mới được nâng cấp)."
  },
  {
    "id": "fer202-d12-q27",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 27/50\n\n**Câu 27.** What is Node.js?",
    "options": [
      {
        "id": "A",
        "text": "A web browser"
      },
      {
        "id": "B",
        "text": "A programming language"
      },
      {
        "id": "C",
        "text": "A JavaScript runtime"
      },
      {
        "id": "D",
        "text": "A CSS framework"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- **Node.js** là môi trường thực thi JavaScript (**JavaScript runtime**) mã nguồn mở xây dựng trên V8 engine của Chrome, cho phép chạy JavaScript bên ngoài trình duyệt (phía server/CLI)."
  },
  {
    "id": "fer202-d12-q28",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 28/50\n\n**Câu 28.** What is the initial state of a promise?",
    "options": [
      {
        "id": "A",
        "text": "Fulfilled"
      },
      {
        "id": "B",
        "text": "Rejected"
      },
      {
        "id": "C",
        "text": "Pending"
      },
      {
        "id": "D",
        "text": "Resolved"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Một Promise trong JavaScript luôn khởi đầu ở trạng thái **Pending** (đang chờ), sau đó mới chuyển sang **Fulfilled** (thành công) hoặc **Rejected** (thất bại)."
  },
  {
    "id": "fer202-d12-q29",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 29/50\n\n**Câu 29.** How do you create a responsive grid layout using Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "```\nBy using the <div class=\"grid\"> element.\n```"
      },
      {
        "id": "B",
        "text": "By applying the .responsive-grid class to the container element."
      },
      {
        "id": "C",
        "text": "By using the .row and .col-*-* classes to create rows and columns."
      },
      {
        "id": "D",
        "text": "By manually specifying the width of each element using CSS."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Để tạo bố cục lưới responsive trong Bootstrap, ta kết hợp `.container` / `.row` và các class cột `.col-{breakpoint}-{size}` (ví dụ `.col-md-6`, `.col-lg-4`)."
  },
  {
    "id": "fer202-d12-q30",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 30/50\n\n**Câu 30.** Evaluate the benefits of using Redux Thunk middleware in a Redux application. Which of the following is NOT a benefit?",
    "options": [
      {
        "id": "A",
        "text": "Allows for handling asynchronous actions"
      },
      {
        "id": "B",
        "text": "Simplifies the process of making API calls within action creators"
      },
      {
        "id": "C",
        "text": "Ensures that all actions are synchronous"
      },
      {
        "id": "D",
        "text": "Enables conditional dispatching of actions"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Redux Thunk được dùng để xử lý các action **bất đồng bộ** (như gọi API) và dispatch có điều kiện. Do đó \"đảm bảo mọi action đều đồng bộ\" (C) KHÔNG phải là lợi ích của Redux Thunk."
  },
  {
    "id": "fer202-d12-q31",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 31/50\n\n**Câu 31.** Which of the following is the correct way to dispatch an action using the useDispatch hook?",
    "options": [
      {
        "id": "A",
        "text": "const dispatch = useDispatch(); dispatch('ACTION_TYPE');"
      },
      {
        "id": "B",
        "text": "const dispatch = useDispatch(); dispatch(() => { type: 'ACTION_TYPE' });"
      },
      {
        "id": "C",
        "text": "const dispatch = useDispatch(); dispatch({ type: 'ACTION_TYPE' });"
      },
      {
        "id": "D",
        "text": "const dispatch = useDispatch(); dispatch({ action: 'ACTION_TYPE' });"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trong Redux, action gửi đi qua `dispatch` phải là một plain object có thuộc tính bắt buộc `type`: `const dispatch = useDispatch(); dispatch({ type: 'ACTION_TYPE' });`."
  },
  {
    "id": "fer202-d12-q32",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 32/50\n\n**Câu 32.** Describe the concept of fragments in JSX. Which of the following best explains their purpose?",
    "options": [
      {
        "id": "A",
        "text": "Fragments are used to group multiple elements without adding extra nodes to the DOM."
      },
      {
        "id": "B",
        "text": "Fragments are used to style JSX elements."
      },
      {
        "id": "C",
        "text": "Fragments are used to manage state in React components."
      },
      {
        "id": "D",
        "text": "Fragments are used to handle asynchronous operations in JSX."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- React Fragments (`<React.Fragment>` hoặc `<>...</>`) cho phép gom nhóm nhiều phần tử JSX con lại với nhau mà không sinh thêm thẻ DOM thừa (như `<div>`) vào cây HTML."
  },
  {
    "id": "fer202-d12-q33",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 33/50\n\n**Câu 33.** Analyze the differences between Flux and MVC architectures. Which statement is true?",
    "options": [
      {
        "id": "A",
        "text": "Flux enforces unidirectional data flow, while MVC allows bidirectional data flow."
      },
      {
        "id": "B",
        "text": "MVC enforces unidirectional data flow, while Flux allows bidirectional data flow."
      },
      {
        "id": "C",
        "text": "Both Flux and MVC enforce unidirectional data flow."
      },
      {
        "id": "D",
        "text": "Both Flux and MVC allow bidirectional data flow."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Kiến trúc **Flux** áp đặt luồng dữ liệu một chiều (unidirectional data flow: Action → Dispatcher → Store → View), trong khi **MVC** truyền thống cho phép cập nhật hai chiều giữa Model và View."
  },
  {
    "id": "fer202-d12-q34",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "### Trang 34/50\n\n**Câu 34.** What advantage does using a reducer function have over directly managing state with useState?",
    "options": [
      {
        "id": "A",
        "text": "It makes code shorter and less complex for simple state updates."
      },
      {
        "id": "B",
        "text": "It consolidates all state logic in one place, which is beneficial for components with complex state updates."
      },
      {
        "id": "C",
        "text": "It automatically optimizes rendering performance."
      },
      {
        "id": "D",
        "text": "It only works with global state, not local component state."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Ưu điểm của reducer (`useReducer` / Redux) so với `useState` là gom toàn bộ logic cập nhật state phức tạp vào một hàm duy nhất dễ kiểm soát, dễ test và dễ bảo trì."
  },
  {
    "id": "fer202-d12-q35",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 35/50\n\n**Câu 35.** Which component is used to create a submit button in React-Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "```\n<Button Submit>\n```"
      },
      {
        "id": "B",
        "text": "```\n<Form Submit>\n```"
      },
      {
        "id": "C",
        "text": "```\n<Form Button>\n```"
      },
      {
        "id": "D",
        "text": "```\n<Button type=\"submit\">\n```"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Trong React-Bootstrap, nút gửi form chuẩn là component `<Button type=\"submit\">...</Button>`."
  },
  {
    "id": "fer202-d12-q36",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 36/50\n\n**Câu 36.** Evaluate the differences between using the Fetch API and Axios for making HTTP requests. Which statement is true?",
    "options": [
      {
        "id": "A",
        "text": "The Fetch API automatically handles JSON responses, while Axios requires manual parsing"
      },
      {
        "id": "B",
        "text": "Axios provides built-in support for request and response interception, while the Fetch API does not"
      },
      {
        "id": "C",
        "text": "The Fetch API supports automatic retries for failed requests, while Axios does not"
      },
      {
        "id": "D",
        "text": "Axios is built into all modern browsers, while the Fetch API requires an additional library"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- **Axios** hỗ trợ sẵn **request/response interceptors**, tự động parse JSON và tự reject lỗi HTTP 4xx/5xx, trong khi native `fetch()` tích hợp sẵn trình duyệt nhưng không có interceptor dựng sẵn."
  },
  {
    "id": "fer202-d12-q37",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 37/50\n\n**Câu 37.** What does the fallback prop in Suspense represent?",
    "options": [
      {
        "id": "A",
        "text": "The component to display while the lazy component is loading"
      },
      {
        "id": "B",
        "text": "The component to display when an error occurs during loading"
      },
      {
        "id": "C",
        "text": "The component to display when the lazy component is rendered"
      },
      {
        "id": "D",
        "text": "The component to display when Suspense is not supported"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Thuộc tính `fallback` của `<Suspense fallback={<Spinner />}>` xác định giao diện tạm thời sẽ hiển thị trong lúc component `React.lazy` đang được tải về qua mạng."
  },
  {
    "id": "fer202-d12-q38",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 38/50\n\n**Câu 38.** What is the correct way to render a list of items with keys in React?",
    "options": [
      {
        "id": "A",
        "text": "const items = [\"Apple\", \"Banana\", \"Cherry\"];\n\nreturn (\n\n```\n <ul>\n   {items.map((item, index) => (\n     <li key={index}>{item}</li>\n    ))}\n </ul>\n);\n```"
      },
      {
        "id": "B",
        "text": "const items = [\"Apple\", \"Banana\", \"Cherry\"];\n\nreturn (\n\n```\n <ul>\n   {items.map((item, index) => (\n     <li id={index}>{item}</li>\n    ))}\n </ul>\n);\n```"
      },
      {
        "id": "C",
        "text": "const items = [\"Apple\", \"Banana\", \"Cherry\"];\n\nreturn (\n\n```\n <ul>\n   {items.map((item, index) => (\n     <li data-key={index}>{item}</li>\n    ))}\n </ul>\n);\n```"
      },
      {
        "id": "D",
        "text": "const items = [\"Apple\", \"Banana\", \"Cherry\"];\n\nreturn (\n\n```\n <ul>\n   {items.map((item, index) => (\n     <li>{item}</li>\n    ))}\n </ul>\n);\n```"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi render danh sách bằng `.map()` trong React, mỗi phần tử con phải được truyền prop đặc biệt tên là `key` (`<li key={index}>{item}</li>`), không phải `id` hay `data-key`."
  },
  {
    "id": "fer202-d12-q39",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 39/50\n\n**Câu 39.** How can you conditionally render content in JSX?",
    "options": [
      {
        "id": "A",
        "text": "By using the if statement"
      },
      {
        "id": "B",
        "text": "By using the for loop"
      },
      {
        "id": "C",
        "text": "By using the ternary operator (condition ? trueContent : falseContent)"
      },
      {
        "id": "D",
        "text": "By using the switch statement"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Bên trong dấu `{}` của JSX chỉ chấp nhận **biểu thức (expression)** chứ không chấp nhận câu lệnh (`if`, `for`, `switch`). Do đó ta dùng toán tử 3 ngôi `condition ? trueContent : falseContent` (hoặc `&&`)."
  },
  {
    "id": "fer202-d12-q40",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 40/50\n\n**Câu 40.** What does the catch method do in a promise chain?",
    "options": [
      {
        "id": "A",
        "text": "It handles the resolved value"
      },
      {
        "id": "B",
        "text": "It handles errors"
      },
      {
        "id": "C",
        "text": "It pauses the execution"
      },
      {
        "id": "D",
        "text": "It converts the promise to a synchronous function"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Trong chuỗi Promise (`.then().catch()`), phương thức `.catch()` dùng để bắt và xử lý các lỗi (rejection) phát sinh từ Promise hoặc từ các khối `.then()` phía trước."
  },
  {
    "id": "fer202-d12-q41",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 41/50\n\n**Câu 41.** How can you configure Git with your name and email address?",
    "options": [
      {
        "id": "A",
        "text": "By running \"git config --global user.name 'Your Name'\" and \"git config --global user.email 'Your Email'\""
      },
      {
        "id": "B",
        "text": "By creating a .gitignore file"
      },
      {
        "id": "C",
        "text": "By committing changes using \"git commit -m\""
      },
      {
        "id": "D",
        "text": "By pushing changes to a remote repository"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Để cấu hình tên và email tác giả commit cho Git trên toàn máy, ta chạy `git config --global user.name \"Your Name\"` và `git config --global user.email \"Your Email\"`."
  },
  {
    "id": "fer202-d12-q42",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 42/50\n\n**Câu 42.** How do you pass multiple props to a child component in React?",
    "options": [
      {
        "id": "A",
        "text": "```\n<Child props={{ name: \"John\", age: 30 }}>\n```"
      },
      {
        "id": "B",
        "text": "```\n<Child name=\"John\" age={30} />\n```"
      },
      {
        "id": "C",
        "text": "```\n<Child name=\"John\" age=\"30\" />\n```"
      },
      {
        "id": "D",
        "text": "```\n<Child name=\"John\" age=30 />\n```"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** *(Đã rà soát & sửa chuẩn từ đáp án gốc)*\n\n- Trong JSX, nhiều props được truyền dưới dạng từng thuộc tính riêng trên thẻ component: chuỗi dùng ngoặc kép (`name=\"John\"`), số/biểu thức JS dùng ngoặc nhọn (`age={30}`) → `<Child name=\"John\" age={30} />`."
  },
  {
    "id": "fer202-d12-q43",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 43/50\n\n**Câu 43.** Which of the following will navigate to the root path (\"/\") using the useNavigate hook?",
    "options": [
      {
        "id": "A",
        "text": "navigate('');"
      },
      {
        "id": "B",
        "text": "navigate('home');"
      },
      {
        "id": "C",
        "text": "navigate('/');"
      },
      {
        "id": "D",
        "text": "navigate('root');"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Để điều hướng về đường dẫn gốc của ứng dụng bằng hook `useNavigate()`, ta gọi `navigate('/');`."
  },
  {
    "id": "fer202-d12-q44",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 44/50\n\n**Câu 44.** How do you wrap a lazy component with Suspense in React?",
    "options": [
      {
        "id": "A",
        "text": "Using the wrap prop of the Suspense component"
      },
      {
        "id": "B",
        "text": "Using the fallback prop of the Suspense component"
      },
      {
        "id": "C",
        "text": "Using the lazy prop of the Suspense component"
      },
      {
        "id": "D",
        "text": "Using the component prop of the Suspense component"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Khi bọc một lazy component bằng `<Suspense>`, ta truyền giao diện chờ thông qua prop `fallback`: `<Suspense fallback={<Loading />}><LazyComp /></Suspense>`."
  },
  {
    "id": "fer202-d12-q45",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 45/50\n\n**Câu 45.** What is the purpose of arrow functions in ES6?",
    "options": [
      {
        "id": "A",
        "text": "To define functions with a shorter syntax"
      },
      {
        "id": "B",
        "text": "To create self-executing functions"
      },
      {
        "id": "C",
        "text": "To declare asynchronous functions"
      },
      {
        "id": "D",
        "text": "To bind the value of this inside a function"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Arrow functions (`() => {}`) trong ES6 giúp định nghĩa hàm với cú pháp ngắn gọn hơn (đồng thời kế thừa lexical `this` từ scope bao ngoài)."
  },
  {
    "id": "fer202-d12-q46",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 46/50\n\n**Câu 46.** Compare the use of Container and Container fluid in React-Bootstrap. Which statement is accurate?",
    "options": [
      {
        "id": "A",
        "text": "Container is always 100% wide."
      },
      {
        "id": "B",
        "text": "Container fluid is fixed-width at all breakpoints."
      },
      {
        "id": "C",
        "text": "Container fluid is 100% wide at all breakpoints."
      },
      {
        "id": "D",
        "text": "Container is 100% wide at all breakpoints."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trong React-Bootstrap, `<Container fluid>` luôn chiếm **100% chiều rộng** ở mọi breakpoint, trong khi `<Container>` thường có `max-width` cố định theo từng ngưỡng màn hình."
  },
  {
    "id": "fer202-d12-q47",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 47/50\n\n**Câu 47.** Which correct code for this image below?\n\n> _(Câu này có hình kèm — bản chữ không mang theo hình.)_",
    "options": [
      {
        "id": "A",
        "text": "```\nfunction AnimalCard({item}) {\nlet { name, imageUrl, scientificName, size, diet, additional } = item;\n```\n\nreturn (\n\n```\n<div className=\"col-md-4 col-12 col-sm-4\">\n<Card className='bg-warning'>\n<CardImg height={\"300px\"} src={imageUrl} />\n<CardBody>\n<CardTitle className=\"text-right\"><h2\nclassName=\"text-danger\">{name}</h2></CardTitle>\n<ListGroup className=\"list-group-flush\">\n<ListGroupItem>Scientific Name: {scientificName}</ListGroupItem>\n<ListGroupItem>{size} kg</ListGroupItem>\n<ListGroupItem>{diet.join(',')}.</ListGroupItem>\n</ListGroup>\n<div class=\"d-flex justify-content-center align-items-center\">\n<button onClick={() => showAdditional(additional)} className='btn\nbtn-danger mt-2' >More Info</button>\n</div>\n</CardBody>\n</Card>\n</div>\n);\n}\n```"
      },
      {
        "id": "B",
        "text": "```\nfunction AnimalCard({item}) {\nlet { name, imageUrl, scientificName, size, diet, additional } = item;\n```\n\nreturn (\n\n```\n<div className=\"col-md-4 col-12 col-sm-4\">\n<Card className='bg-warning'>\n<CardImg height={\"300px\"} src={imageUrl} />\n<CardBody>\n<CardTitle className=\"text-center\"><h2\nclassName=\"text-danger\">{name}</h2></CardTitle>\n<ListGroup className=\"list-group-flush\">\n<ListGroupItem>Scientific Name: {scientificName}</ListGroupItem>\n<ListGroupItem>{size} kg</ListGroupItem>\n<ListGroupItem>{diet.join(',')}.</ListGroupItem>\n</ListGroup>\n<div class=\"d-flex justify-content-center align-items-center\">\n<button onClick={() => showAdditional(additional)} className='btn\nbtn-danger mt-2' >More Info</button>\n</div>\n</CardBody>\n</Card>\n</div>\n);\n}\n```"
      },
      {
        "id": "C",
        "text": "```\nfunction AnimalCard({item}) {\nlet { name, imageUrl, scientificName, size, diet, additional } = item;\n```\n\nreturn (\n\n```\n<div className=\"col-md-4 col-12 col-sm-4\">\n<Card className='bg-warning'>\n<CardImg height={\"300px\"} src={imageUrl} />\n<CardBody>\n<CardTitle className=\"text-danger\"><h2\nclassName=\"text-danger\">{name}</h2></CardTitle>\n<ListGroup className=\"list-group-flush\">\n<ListGroupItem>Scientific Name: {scientificName}</ListGroupItem>\n<ListGroupItem>{size} kg</ListGroupItem>\n<ListGroupItem>{diet.join(',')}.</ListGroupItem>\n</ListGroup>\n<div class=\"d-flex justify-content-center align-items-center\">\n<button onClick={() => showAdditional(additional)} className='btn\nbtn-danger mt-2' >More Info</button>\n</div>\n</CardBody>\n</Card>\n</div>\n);\n}\n```"
      },
      {
        "id": "D",
        "text": "```\nfunction AnimalCard({item}) {\nlet { name, imageUrl, scientificName, size, diet, additional } = item;\n```\n\nreturn (\n\n```\n<div className=\"col-md-4 col-12 col-sm-4\">\n<Card className='bg-warning'>\n<CardImg height={\"300px\"} src={imageUrl} />\n<CardBody>\n<CardTitle className=\"text-left\"><h2\nclassName=\"text-danger\">{name}</h2></CardTitle>\n<ListGroup className=\"list-group-flush\">\n<ListGroupItem>Scientific Name: {scientificName}</ListGroupItem>\n<ListGroupItem>{size} kg</ListGroupItem>\n<ListGroupItem>{diet.join(',')}.</ListGroupItem>\n</ListGroup>\n<div class=\"d-flex justify-content-center align-items-center\">\n<button onClick={() => showAdditional(additional)} className='btn\nbtn-danger mt-2' >More Info</button>\n</div>\n</CardBody>\n</Card>\n</div>\n);\n}\n```"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- So sánh 4 đáp án chỉ khác nhau đúng class căn lề trên `<CardTitle>`: đáp án B dùng `className=\"text-center\"` để căn giữa tiêu đề tên loài động vật khớp với bố cục thẻ chuẩn."
  },
  {
    "id": "fer202-d12-q48",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 48/50\n\n**Câu 48.** Which method is used to update the state in a class component?",
    "options": [
      {
        "id": "A",
        "text": "setState"
      },
      {
        "id": "B",
        "text": "useState"
      },
      {
        "id": "C",
        "text": "updateState"
      },
      {
        "id": "D",
        "text": "changeState"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong React Class Component, phương thức `this.setState()` được dùng để cập nhật state và kích hoạt re-render giao diện (`useState` chỉ dùng cho Functional Component)."
  },
  {
    "id": "fer202-d12-q49",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 49/50\n\n**Câu 49.** What does the render method in a React component do?",
    "options": [
      {
        "id": "A",
        "text": "It manages state updates"
      },
      {
        "id": "B",
        "text": "It handle side effects"
      },
      {
        "id": "C",
        "text": "It returns the JSX that describes the UI"
      },
      {
        "id": "D",
        "text": "It fetches data from an API"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Phương thức `render()` trong React component có nhiệm vụ trả về mã **JSX** mô tả giao diện người dùng cần hiển thị (phải thuần khiết, không gọi API hay mutate state)."
  },
  {
    "id": "fer202-d12-q50",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 50/50\n\n**Câu 50.** How do you create a tooltip in Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "```\nBy using the <tooltip> HTML element\n```"
      },
      {
        "id": "B",
        "text": "By applying the .tooltip class to the container element."
      },
      {
        "id": "C",
        "text": "By using the data-bs-toggle=\"tooltip\" attribute along with the title attribute"
      },
      {
        "id": "D",
        "text": "By using JavaScript to dynamically create and show tooltip elements."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trong Bootstrap 5, để tạo tooltip ta gắn thuộc tính `data-bs-toggle=\"tooltip\"` cùng thuộc tính `title=\"Nội dung tooltip\"` (và khởi tạo bằng JS `new bootstrap.Tooltip(...)`)."
  },
  {
    "id": "fer202-d13-q01",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "# FER202_SP26_FE\n\n> Môn: **FER202** — FER202 · Kỳ: SP26 · Loại: FE · 50 câu\n\n### Trang 1/50\n\n**Câu 1.** Which of the following is a common use case for using Redux in a React application?",
    "options": [
      {
        "id": "A",
        "text": "Managing authentication and user sessions"
      },
      {
        "id": "B",
        "text": "Styling and layout of React components"
      },
      {
        "id": "C",
        "text": "Handling form validation and input tracking"
      },
      {
        "id": "D",
        "text": "Implementing server-side rendering in React"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Redux phù hợp nhất để quản lý **global state** dùng chung trên nhiều trang như trạng thái đăng nhập (authentication), thông tin người dùng (user sessions), hoặc giỏ hàng."
  },
  {
    "id": "fer202-d13-q02",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 2/50\n\n**Câu 2.** Which of the following is a common use case for using Redux in a React application?",
    "options": [
      {
        "id": "A",
        "text": "Managing authentication and user sessions"
      },
      {
        "id": "B",
        "text": "Styling and layout of React components"
      },
      {
        "id": "C",
        "text": "Handling form validation and input tracking"
      },
      {
        "id": "D",
        "text": "Implementing server-side rendering in React"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** *(Đã rà soát & sửa đồng nhất với Câu 1)*\n\n- Redux dùng để quản lý trạng thái toàn cục dùng chung xuyên suốt ứng dụng như **authentication & user sessions**. Validation form cục bộ nên dùng state nội bộ của component (`useState`)."
  },
  {
    "id": "fer202-d13-q03",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 3/50\n\n**Câu 3.** What is the purpose of the Redux middleware in React applications?",
    "options": [
      {
        "id": "A",
        "text": "To handle asynchronous actions and side effects"
      },
      {
        "id": "B",
        "text": "To define the structure of the Redux store"
      },
      {
        "id": "C",
        "text": "To connect React components to the Redux store"
      },
      {
        "id": "D",
        "text": "To manage component hierarchy"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Redux middleware (như Redux Thunk, Redux Saga) nằm giữa `dispatch` và `reducer`, có nhiệm vụ xử lý các **hành động bất đồng bộ (async actions)** và các tác vụ phụ (side effects như gọi API, logging)."
  },
  {
    "id": "fer202-d13-q04",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 4/50\n\n**Câu 4.** What is the core principle of Redux?",
    "options": [
      {
        "id": "A",
        "text": "Single source of truth and unidirectional data flow."
      },
      {
        "id": "B",
        "text": "Multiple sources of truth for each component."
      },
      {
        "id": "C",
        "text": "State is mutable and can be directly modified."
      },
      {
        "id": "D",
        "text": "State is only updated using the useState hook."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Nguyên lý cốt lõi của Redux là **Single Source of Truth** (một Store duy nhất cho toàn ứng dụng) và **Unidirectional Data Flow** (luồng dữ liệu một chiều, state chỉ đọc và cập nhật bất biến qua Pure Reducers)."
  },
  {
    "id": "fer202-d13-q05",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 5/50\n\n**Câu 5.** What is the core principle of Redux?",
    "options": [
      {
        "id": "A",
        "text": "Single source of truth and unidirectional data flow."
      },
      {
        "id": "B",
        "text": "Multiple sources of truth for each component."
      },
      {
        "id": "C",
        "text": "State is mutable and can be directly modified."
      },
      {
        "id": "D",
        "text": "State is only updated using the useState hook."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Redux xây dựng trên nguyên lý **Single source of truth** (1 Store duy nhất) và **luồng dữ liệu một chiều** (unidirectional data flow), đảm bảo state luôn dễ theo dõi và dự đoán."
  },
  {
    "id": "fer202-d13-q06",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 6/50\n\n**Câu 6.** What is the main purpose of the await keyword within an async function?",
    "options": [
      {
        "id": "A",
        "text": "To return a new Promise object."
      },
      {
        "id": "B",
        "text": "To immediately execute the next line of code without waiting."
      },
      {
        "id": "C",
        "text": "To pause the execution of the async function until the Promise it's waiting for is resolved or rejected."
      },
      {
        "id": "D",
        "text": "To define a synchronous block of code"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Từ khóa `await` bên trong hàm `async` sẽ tạm dừng việc thực thi hàm đó cho đến khi Promise đứng sau nó hoàn thành (resolved) hoặc thất bại (rejected), rồi trả về kết quả."
  },
  {
    "id": "fer202-d13-q07",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 7/50\n\n**Câu 7.** Why would a React developer choose to use \"Axios\"?",
    "options": [
      {
        "id": "A",
        "text": "To render React components faster"
      },
      {
        "id": "B",
        "text": "To manage component state globally"
      },
      {
        "id": "C",
        "text": "To make HTTP requests to APIs"
      },
      {
        "id": "D",
        "text": "To build reusable hooks"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- **Axios** là thư viện HTTP client phổ biến giúp gửi các yêu cầu HTTP (`GET`, `POST`, `PUT`, `DELETE`) tới REST API với tính năng tự động parse JSON và bắt lỗi HTTP tiện lợi."
  },
  {
    "id": "fer202-d13-q08",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 8/50\n\n**Câu 8.** Which method is most commonly used in a React app to fetch data from a server?",
    "options": [
      {
        "id": "A",
        "text": "WebSockets"
      },
      {
        "id": "B",
        "text": "useState()"
      },
      {
        "id": "C",
        "text": "fetch() or axios inside useEffect()"
      },
      {
        "id": "D",
        "text": "console.log() inside render()"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Cách tiêu chuẩn và phổ biến nhất để gọi API lấy dữ liệu trong React là dùng `fetch()` hoặc `axios` bên trong hook `useEffect()`."
  },
  {
    "id": "fer202-d13-q09",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "### Trang 9/50\n\n**Câu 9.** Which of the following is used to pass a function from a parent component to a child component?",
    "options": [
      {
        "id": "A",
        "text": "Passing a function as a prop to the child component."
      },
      {
        "id": "B",
        "text": "Using useState hook in the child component."
      },
      {
        "id": "C",
        "text": "Using useContext in both parent and child components."
      },
      {
        "id": "D",
        "text": "Directly accessing the child component's state."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong React, component cha truyền hàm callback xuống component con thông qua **props** (ví dụ `<Child onClick={handleClick} />`) để con có thể gọi ngược lên cha."
  },
  {
    "id": "fer202-d13-q10",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 10/50\n\n**Câu 10.** What happens when you use the xs prop on a Col component in React-Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "The column will only have its width defined on extra-large screens."
      },
      {
        "id": "B",
        "text": "The column will only have its width defined on extra-small screens, and larger sizes will ignore it"
      },
      {
        "id": "C",
        "text": "The column will have its width defined on extra-small screens and will apply to larger sizes if no specific breakpoint is defined."
      },
      {
        "id": "D",
        "text": "The xs prop does not exist in React-Bootstrap"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Theo triết lý **Mobile-First** của Bootstrap/React-Bootstrap, prop `xs` trên `<Col>` định nghĩa độ rộng từ màn hình siêu nhỏ và **tự động áp dụng cho mọi kích thước lớn hơn** nếu không khai báo thêm breakpoint nào khác (`sm`, `md`, `lg`...)."
  },
  {
    "id": "fer202-d13-q11",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 11/50\n\n**Câu 11.** What happens when you use the xs prop on a Col component in React-Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "The column will only have its width defined on extra-large screens."
      },
      {
        "id": "B",
        "text": "The column will only have its width defined on extra-small screens, and larger sizes will ignore it"
      },
      {
        "id": "C",
        "text": "The column will have its width defined on extra-small screens and will apply to larger sizes if no specific breakpoint is defined."
      },
      {
        "id": "D",
        "text": "The xs prop does not exist in React-Bootstrap"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C** *(Đã rà soát & sửa đồng nhất với Câu 10)*\n\n- Theo nguyên tắc Mobile-First của React-Bootstrap, prop `xs` áp dụng cho màn hình siêu nhỏ VÀ tự kế thừa lên các màn hình lớn hơn trừ khi bị ghi đè bởi `sm`, `md`, `lg`..."
  },
  {
    "id": "fer202-d13-q12",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 12/50\n\n**Câu 12.** What is the primary purpose of a router in a web application?",
    "options": [
      {
        "id": "A",
        "text": "To manage state within a component"
      },
      {
        "id": "B",
        "text": "To respond to a URL based on a set of route handler declarations"
      },
      {
        "id": "C",
        "text": "To handle server-side logic"
      },
      {
        "id": "D",
        "text": "To manage routing in a React application"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Mục đích cốt lõi của Router trong ứng dụng web là lắng nghe URL và phản hồi bằng route handler/component tương ứng dựa trên danh sách các route đã khai báo."
  },
  {
    "id": "fer202-d13-q13",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 13/50\n\n**Câu 13.** How do you declare a route in React Router?",
    "options": [
      {
        "id": "A",
        "text": "```\nUsing <Link path=\"/\" element={<Home/>} />\n```"
      },
      {
        "id": "B",
        "text": "```\nUsing <Route path=\"/\" element={<Home/>} />\n```"
      },
      {
        "id": "C",
        "text": "```\nUsing <Routes path=\"/\" element={<Home/>} />\n```"
      },
      {
        "id": "D",
        "text": "```\nUsing <context path=\"/\" ></context>\n```"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Trong React Router v6, mỗi tuyến đường được khai báo bằng thẻ `<Route path=\"/\" element={<Home />} />` đặt bên trong `<Routes>`."
  },
  {
    "id": "fer202-d13-q14",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 14/50\n\n**Câu 14.** What is the difference between the HTTP response codes 401 and 403?",
    "options": [
      {
        "id": "A",
        "text": "401 the request is missing valid authentication credentials, while 403 the server refuses to authorize."
      },
      {
        "id": "B",
        "text": "401 the server encountered an internal error, while 403 means the requested resource was not found."
      },
      {
        "id": "C",
        "text": "401 the request was successful, while 403 means the request was not modified."
      },
      {
        "id": "D",
        "text": "401 and 403 are interchangeable and have the same meaning."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Phân biệt 2 mã lỗi bảo mật kinh điển: **401 Unauthorized** = chưa xác thực / thiếu thông tin đăng nhập hợp lệ; **403 Forbidden** = đã xác thực nhưng server từ chối cấp quyền truy cập tài nguyên này."
  },
  {
    "id": "fer202-d13-q15",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "### Trang 15/50\n\n**Câu 15.**\n\n```\nconst jsonServer = require('json-server');\nconst server = jsonServer.create();\nconst router = jsonServer.router('data.json');\nconst port = 3000;\nserver.use(router);\nserver.listen(port, () => {\nconsole.logJSON server is running on port ${port});\n});\n```\n\nWhat is the above code used for?",
    "options": [
      {
        "id": "A",
        "text": "Create a dynamic server to serve JSON data."
      },
      {
        "id": "B",
        "text": "Create a dynamic web application using JSON data."
      },
      {
        "id": "C",
        "text": "Create a JSON file based on data from the server."
      },
      {
        "id": "D",
        "text": "Configure the development environment for the project using JSON."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Đoạn mã khởi tạo một mock REST API server động bằng thư viện `json-server` chạy ở cổng 3000 để phục vụ dữ liệu CRUD từ file `data.json`."
  },
  {
    "id": "fer202-d13-q16",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 16/50\n\n**Câu 16.** How do you dispatch an action when a button is clicked?",
    "options": [
      {
        "id": "A",
        "text": "```\nconst handleClick = () => {\ndispatch({ type: 'BUTTON_CLICKED' });\n};\n<button onClick={handleClick}>Click me</button>;\n```"
      },
      {
        "id": "B",
        "text": "```\nconst handleClick = () => {\ndispatch({ type: 'BUTTON_CLICKED' });\n};\n<button onClick={() => handleClick()}>Click me</button>;\n```"
      },
      {
        "id": "C",
        "text": "```\nconst handleClick = () => { dispatch({ type: 'BUTTON_CLICKED' }); }; <button onClick={handleClick}>Click me</button>;\n```"
      },
      {
        "id": "D",
        "text": "```\nconst handleClick = () => {\ndispatch({ action: 'BUTTON_CLICKED' });\n};\n<button onClick={handleClick}>Click me</button>;\n```"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Định nghĩa hàm `handleClick` gọi `dispatch({ type: 'BUTTON_CLICKED' })` rồi truyền tham chiếu hàm vào `<button onClick={handleClick}>` là cách chuẩn, gọn và tránh tạo hàm inline mới mỗi lần render (đáp án D sai vì dùng key `action` thay vì `type`)."
  },
  {
    "id": "fer202-d13-q17",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 17/50\n\n**Câu 17.** Which of the following is the correct way to use useSelector to access a value from the Redux store?",
    "options": [
      {
        "id": "A",
        "text": "const value = useSelector((store) => store.value);"
      },
      {
        "id": "B",
        "text": "const value = useSelector((state) => state.value);"
      },
      {
        "id": "C",
        "text": "const value = useSelector((context) => context.value);"
      },
      {
        "id": "D",
        "text": "const value = useSelector((redux) => redux.value);"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Hook `useSelector` nhận vào một selector function có tham số là toàn bộ Redux `state`: `const value = useSelector((state) => state.value);`."
  },
  {
    "id": "fer202-d13-q18",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 18/50\n\n**Câu 18.** What is the typical file extension for a React component?",
    "options": [
      {
        "id": "A",
        "text": "html"
      },
      {
        "id": "B",
        "text": "css"
      },
      {
        "id": "C",
        "text": "js or .jsx"
      },
      {
        "id": "D",
        "text": "php"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Các file chứa React component thường có đuôi `.js` hoặc `.jsx` (hoặc `.ts`/`.tsx` khi dùng TypeScript)."
  },
  {
    "id": "fer202-d13-q19",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "multiple",
    "prompt": "### Trang 19/50\n\n**Câu 19.** What is the purpose of React. Fragment or shorthand <> </> in React? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Fragments allow you to group multiple elements without adding an extra node to the DOM."
      },
      {
        "id": "B",
        "text": "Fragments allow you to provide CSS styling to multiple elements."
      },
      {
        "id": "C",
        "text": "Fragments allow you to handle state management in React."
      },
      {
        "id": "D",
        "text": "```\nFragments are particularly useful for avoiding unnecessary <div> elements, which can clutter your markup.\n```"
      }
    ],
    "correctOptionIds": [
      "A",
      "D"
    ],
    "explanation": "**Đáp án đúng: A và D** *(Câu chọn nhiều đáp án)*\n\n- `React.Fragment` (hoặc `<>...</>`) giúp gom nhiều phần tử con mà **không thêm node thừa vào DOM** (A), đặc biệt hữu ích để **tránh các thẻ `<div>` thừa** làm rối cấu trúc HTML (D)."
  },
  {
    "id": "fer202-d13-q20",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 20/50\n\n**Câu 20.** How can the useEffect hook be optimized for cleanup actions?",
    "options": [
      {
        "id": "A",
        "text": "By passing an empty array as the second argument"
      },
      {
        "id": "B",
        "text": "By using a class-based component"
      },
      {
        "id": "C",
        "text": "By calling it after every render"
      },
      {
        "id": "D",
        "text": "By manually removing event listeners"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi truyền dependency array rỗng `[]` làm tham số thứ hai cho `useEffect`, effect chỉ thiết lập 1 lần lúc mount và hàm cleanup chỉ chạy 1 lần duy nhất lúc component unmount — tránh thiết lập/dọn dẹp lặp lại sau mỗi lần render."
  },
  {
    "id": "fer202-d13-q21",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 21/50\n\n**Câu 21.** How would you use the useContext Hook to access a shared theme in a React component?",
    "options": [
      {
        "id": "A",
        "text": "const theme = useContext(ThemeContext);"
      },
      {
        "id": "B",
        "text": "const { theme } = useContext(ThemeContext);"
      },
      {
        "id": "C",
        "text": "const { theme } = useContext(ThemeContext.Provider);"
      },
      {
        "id": "D",
        "text": "const theme = useContext(ThemeContext.Provider);"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Cú pháp chuẩn của `useContext` là truyền trực tiếp đối tượng Context (KHÔNG truyền `.Provider`): `const theme = useContext(ThemeContext);`."
  },
  {
    "id": "fer202-d13-q22",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 22/50\n\n**Câu 22.** Which of the following could cause an Effect to run too frequently?",
    "options": [
      {
        "id": "A",
        "text": "Including all state variables in the dependency array."
      },
      {
        "id": "B",
        "text": "Not using a dependency array."
      },
      {
        "id": "C",
        "text": "Including a variable like data that changes often in the dependency array."
      },
      {
        "id": "D",
        "text": "Omitting the dependency array altogether."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Đưa một biến thay đổi liên tục (như object/array tạo mới mỗi render hoặc biến `data` đổi thường xuyên) vào dependency array sẽ khiến `useEffect` kích hoạt chạy lại quá nhiều lần không cần thiết."
  },
  {
    "id": "fer202-d13-q23",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 23/50\n\n**Câu 23.** Which of the following is NOT considered a popular front-end framework?",
    "options": [
      {
        "id": "A",
        "text": "React"
      },
      {
        "id": "B",
        "text": "Angular"
      },
      {
        "id": "C",
        "text": "Django"
      },
      {
        "id": "D",
        "text": "Vue.js"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- **Django** là một **back-end web framework** viết bằng Python, không phải front-end framework (React, Angular, Vue.js mới là các công nghệ Front-End)."
  },
  {
    "id": "fer202-d13-q24",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 24/50\n\n**Câu 24.** What is one major benefit of using front-end frameworks like React or Vue.js?",
    "options": [
      {
        "id": "A",
        "text": "They eliminate the need for HTML"
      },
      {
        "id": "B",
        "text": "They allow for faster development by providing pre-built components"
      },
      {
        "id": "C",
        "text": "They only work on mobile applications"
      },
      {
        "id": "D",
        "text": "They focus solely on server-side development"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Một lợi ích lớn của các thư viện/framework front-end như React hoặc Vue.js là tăng tốc độ phát triển nhờ kiến trúc component tái sử dụng và hệ sinh thái component dựng sẵn phong phú."
  },
  {
    "id": "fer202-d13-q25",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 25/50\n\n**Câu 25.** How can you access Chrome DevTools?",
    "options": [
      {
        "id": "A",
        "text": "By pressing F12 or right-clicking and selecting \"Inspect\""
      },
      {
        "id": "B",
        "text": "By installing a Chrome extension"
      },
      {
        "id": "C",
        "text": "By typing \"chrome://devtools\" in the address bar"
      },
      {
        "id": "D",
        "text": "By opening the Chrome menu and selecting \"DevTools\""
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Cách nhanh và phổ biến nhất để mở Chrome DevTools là nhấn phím **`F12`** (hoặc `Ctrl+Shift+I`) hoặc click chuột phải vào trang web và chọn **\"Inspect\"**."
  },
  {
    "id": "fer202-d13-q26",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "### Trang 26/50\n\n**Câu 26.**\n\n```\nHow would you render a user's name dynamically inside an <h2> tag in JSX?\n```",
    "options": [
      {
        "id": "A",
        "text": "```\n<h2><p>{userName}</p></h2>\n```"
      },
      {
        "id": "B",
        "text": "```\n<h2>{userName}</h2>\n```"
      },
      {
        "id": "C",
        "text": "```\n<h2>\"userName\"</h2>\n```"
      },
      {
        "id": "D",
        "text": "```\n<h2>{userName: \"John\"}</h2>\n```"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Để hiển thị giá trị của biến JavaScript `userName` bên trong thẻ `<h2>` của JSX, ta bọc biến trong cặp ngoặc nhọn đơn: `<h2>{userName}</h2>`."
  },
  {
    "id": "fer202-d13-q27",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 27/50\n\n**Câu 27.** The purpose of JSX is to:",
    "options": [
      {
        "id": "A",
        "text": "Make JavaScript code more readable by embedding HTML in JavaScript"
      },
      {
        "id": "B",
        "text": "Make JavaScript run faster"
      },
      {
        "id": "C",
        "text": "Encrypt HTML elements"
      },
      {
        "id": "D",
        "text": "Handle server-side logic"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- JSX (JavaScript XML) cho phép viết cấu trúc giao diện giống HTML ngay bên trong mã JavaScript, giúp code trực quan và dễ đọc hơn nhiều so với việc viết tay `React.createElement(...)`."
  },
  {
    "id": "fer202-d13-q28",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "### Trang 28/50\n\n**Câu 28.** What does ES6 introduce that is essential for React applications? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Arrow functions"
      },
      {
        "id": "B",
        "text": "Destructuring assignment"
      },
      {
        "id": "C",
        "text": "JSX syntax"
      },
      {
        "id": "D",
        "text": "Template Literals"
      }
    ],
    "correctOptionIds": [
      "A",
      "B",
      "D"
    ],
    "explanation": "**Đáp án đúng: A, B và D** *(Câu chọn nhiều đáp án)*\n\n- ES6 (ECMAScript 2015) giới thiệu **Arrow functions** (A), **Destructuring assignment** (B), và **Template Literals** (D). Lưu ý: **JSX** (C) là phần mở rộng cú pháp của React, KHÔNG phải tính năng của ES6!"
  },
  {
    "id": "fer202-d13-q29",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 29/50\n\n**Câu 29.** What is the main purpose of React-Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "To build React components using jQuery"
      },
      {
        "id": "B",
        "text": "To use Bootstrap styles with inline CSS only"
      },
      {
        "id": "C",
        "text": "To provide Bootstrap-styled components built entirely with React"
      },
      {
        "id": "D",
        "text": "To convert Bootstrap HTML into Angular components"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Mục đích chính của **React-Bootstrap** là cung cấp bộ component mang giao diện Bootstrap nhưng được viết lại hoàn toàn bằng React (quản lý bằng props/state, không cần jQuery)."
  },
  {
    "id": "fer202-d13-q30",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "### Trang 30/50\n\n**Câu 30.** How do you import and use a Button component from React-Bootstrap 5? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "```\nimport React from 'react';\nimport Button from 'react-bootstrap/Button';\nfunction Demo() {\n```\n\nreturn (\n\n```\n<Button variant=\"primary\">\n);\n}\nexport default Demo;\n```"
      },
      {
        "id": "B",
        "text": "```\nimport React from 'react';\nimport Button from 'react-bootstrap/Button';\nfunction Demo() {\n```\n\nreturn (\n\n```\n<button variant=\"primary\"> Primary Button</button>\n);\n}\nexport default Demo;\n```"
      },
      {
        "id": "C",
        "text": "```\nimport React from 'react';\nimport Button from 'react-bootstrap/Button';\nfunction Demo() {\n```\n\nreturn (\n\n```\n<Button variant=\"primary\">Primary Button</Button>\n);\n}\nexport default Demo;\n```"
      },
      {
        "id": "D",
        "text": "```\nimport React from 'react';\nimport Button from 'react-bootstrap/Button';\nfunction Demo() {\n```\n\nreturn (\n\n```\n<button variant=\"primary\"/>\n);\n}\nexport default Demo;\n```"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Component React phải viết hoa chữ cái đầu `<Button variant=\"primary\">Primary Button</Button>` và có thẻ đóng đầy đủ. Đáp án A thiếu thẻ đóng, B và D viết thường `<button>` nên là thẻ HTML thuần chứ không phải component `Button` đã import."
  },
  {
    "id": "fer202-d13-q31",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 31/50\n\n**Câu 31.** Create a responsive grid layout using React-Bootstrap with three columns that stack vertically on small screens. Which classes would you apply?",
    "options": [
      {
        "id": "A",
        "text": "```\n<Container>\n<Row>\n<Col>1 of 3</Col>\n<Col>2 of 3</Col>\n<Col>3 of 3</Col>\n</Row>\n</Container>\n```"
      },
      {
        "id": "B",
        "text": "```\n<Container>\n<Row>\n<Col sm={4}>1 of 3</Col>\n<Col sm={4}>2 of 3</Col>\n<Col sm={4}>3 of 3</Col>\n</Row>\n</Container>\n```"
      },
      {
        "id": "C",
        "text": "```\n<Container>\n<Row>\n<Col md={12}>1 of 4</Col>\n<Col md={12}>2 of 4</Col>\n<Col md={12}>3 of 4</Col>\n</Row>\n</Container>\n```"
      },
      {
        "id": "D",
        "text": "```\n<Container>\n<Row>\n<Col sm={12} md={4}>1 of 4</Col>\n<Col sm={12} md={4}>2 of 4</Col>\n<Col sm={12} md={4}>3 of 4</Col>\n</Row>\n</Container>\n```"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Với `<Col sm={4}>` (3 cột, mỗi cột 4/12 = 12 cột), từ màn hình `sm` trở lên 3 cột nằm ngang cạnh nhau, còn ở màn hình nhỏ hơn `sm` chúng tự động xếp chồng dọc (`stack vertically`)."
  },
  {
    "id": "fer202-d13-q32",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 32/50\n\n**Câu 32.** What is the primary purpose of Next.js?",
    "options": [
      {
        "id": "A",
        "text": "To enable server-side rendering and generate static websites."
      },
      {
        "id": "B",
        "text": "To manage state in React applications."
      },
      {
        "id": "C",
        "text": "To provide a UI component library."
      },
      {
        "id": "D",
        "text": "To create database schemas."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mục đích chính của **Next.js** (React framework) là hỗ trợ **Server-Side Rendering (SSR)** và **Static Site Generation (SSG)** giúp tối ưu hiệu năng và SEO."
  },
  {
    "id": "fer202-d13-q33",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 33/50\n\n**Câu 33.** Which of the following is the first step in React's render cycle?",
    "options": [
      {
        "id": "A",
        "text": "Triggering a render when state or props change."
      },
      {
        "id": "B",
        "text": "Re-rendering the component."
      },
      {
        "id": "C",
        "text": "Committing the changes to the DOM."
      },
      {
        "id": "D",
        "text": "Calculating the minimal necessary updates for the DOM."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Chu trình render của React gồm 3 bước: **(1) Trigger** (kích hoạt render khi mount hoặc state/props thay đổi) → **(2) Render** (gọi hàm component) → **(3) Commit** (cập nhật lên DOM thật)."
  },
  {
    "id": "fer202-d13-q34",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "### Trang 34/50\n\n**Câu 34.** How can you pass parameters to an event handler in React? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Using the bind() method."
      },
      {
        "id": "B",
        "text": "Using arrow functions."
      },
      {
        "id": "C",
        "text": "Using the addEventListener() method."
      },
      {
        "id": "D",
        "text": "Using the this keyword."
      }
    ],
    "correctOptionIds": [
      "A",
      "B"
    ],
    "explanation": "**Đáp án đúng: A và B** *(Câu chọn nhiều đáp án)*\n\n- Trong React, hai cách chuẩn để truyền thêm tham số vào event handler là dùng phương thức **`bind()`** (A) hoặc bọc trong **arrow function** `onClick={() => handle(id)}` (B)."
  },
  {
    "id": "fer202-d13-q35",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 35/50\n\n**Câu 35.** What is the primary purpose of Next.js?",
    "options": [
      {
        "id": "A",
        "text": "To enable server-side rendering and generate static websites."
      },
      {
        "id": "B",
        "text": "To manage state in React applications."
      },
      {
        "id": "C",
        "text": "To provide a UI component library."
      },
      {
        "id": "D",
        "text": "To create database schemas."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Next.js là framework phát triển trên nền React nhằm cung cấp sẵn **Server-Side Rendering (SSR)**, **Static Site Generation (SSG)** và file-system routing."
  },
  {
    "id": "fer202-d13-q36",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 36/50\n\n**Câu 36.** What command is used to create a new Next.js project?",
    "options": [
      {
        "id": "A",
        "text": "npm create-react-app"
      },
      {
        "id": "B",
        "text": "npm install next"
      },
      {
        "id": "C",
        "text": "npm create-next-app"
      },
      {
        "id": "D",
        "text": "git clone next.js"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Lệnh tạo dự án Next.js mới là `npx create-next-app` / `npm create-next-app` (tương ứng đáp án C trong 4 lựa chọn)."
  },
  {
    "id": "fer202-d13-q37",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 37/50\n\n**Câu 37.** What is a core feature of Next.js that enhances SEO?",
    "options": [
      {
        "id": "A",
        "text": "Real-time data fetching."
      },
      {
        "id": "B",
        "text": "Client-side routing."
      },
      {
        "id": "C",
        "text": "Automatic code splitting."
      },
      {
        "id": "D",
        "text": "Server-side rendering."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- **Server-Side Rendering (SSR)** giúp máy chủ trả về nội dung HTML hoàn chỉnh ngay từ đầu để các công cụ tìm kiếm (Googlebot) dễ dàng đọc và lập chỉ mục, cải thiện mạnh **SEO**."
  },
  {
    "id": "fer202-d13-q38",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 38/50\n\n**Câu 38.** Which Bootstrap class is commonly used to create a responsive navigation bar?",
    "options": [
      {
        "id": "A",
        "text": "navbar-static"
      },
      {
        "id": "B",
        "text": "nav-horizontal"
      },
      {
        "id": "C",
        "text": "navbar"
      },
      {
        "id": "D",
        "text": "navigation-block"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trong Bootstrap, class `.navbar` là class chuẩn để xây dựng thanh điều hướng responsive (thường kết hợp với `.navbar-expand-lg`)."
  },
  {
    "id": "fer202-d13-q39",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 39/50\n\n**Câu 39.** Which class is used to create a form input with a validation state in Bootstrap 5?",
    "options": [
      {
        "id": "A",
        "text": "form-control"
      },
      {
        "id": "B",
        "text": "input-group"
      },
      {
        "id": "C",
        "text": "form-check"
      },
      {
        "id": "D",
        "text": "form-validation"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Bootstrap 5, các ô nhập liệu form dùng class `.form-control` (sau đó kết hợp `.is-valid` / `.is-invalid` để hiển thị trạng thái validation)."
  },
  {
    "id": "fer202-d13-q40",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 40/50\n\n**Câu 40.** Which Bootstrap class provides a fluid container that adapts to all breakpoints?",
    "options": [
      {
        "id": "A",
        "text": "container-fluid"
      },
      {
        "id": "B",
        "text": "container"
      },
      {
        "id": "C",
        "text": "container-lg"
      },
      {
        "id": "D",
        "text": "container-xs"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Class `.container-fluid` tạo khung chứa luôn có chiều rộng 100% tràn viền thích ứng trên mọi breakpoint."
  },
  {
    "id": "fer202-d13-q41",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 41/50\n\n**Câu 41.** Why should you avoid using too many lazy components in your application?",
    "options": [
      {
        "id": "A",
        "text": "Because it results in multiple HTTP requests, slowing down the application."
      },
      {
        "id": "B",
        "text": "Because it decreases the performance by loading everything upfront."
      },
      {
        "id": "C",
        "text": "Because it makes the code difficult to debug."
      },
      {
        "id": "D",
        "text": "Because it affects the layout and styling of components."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Chia nhỏ quá vụn thành quá nhiều lazy components nhỏ lẻ sẽ khiến trình duyệt phải gửi hàng loạt **HTTP requests** riêng biệt để tải từng chunk nhỏ, gây tăng độ trễ và làm chậm ứng dụng."
  },
  {
    "id": "fer202-d13-q42",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 42/50\n\n**Câu 42.** Analyze the differences between Flux and MVC architectures. Which statement is true?",
    "options": [
      {
        "id": "A",
        "text": "Flux enforces unidirectional data flow, while MVC allows bidirectional data flow."
      },
      {
        "id": "B",
        "text": "MVC enforces unidirectional data flow, while Flux allows bidirectional data flow."
      },
      {
        "id": "C",
        "text": "Both Flux and MVC enforce unidirectional data flow."
      },
      {
        "id": "D",
        "text": "Both Flux and MVC allow bidirectional data flow."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Flux** ép buộc luồng dữ liệu một chiều (unidirectional data flow), còn **MVC** truyền thống cho phép cập nhật hai chiều (bidirectional data flow) giữa Model và View."
  },
  {
    "id": "fer202-d13-q43",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 43/50\n\n**Câu 43.** How would you extract and display multiple parameters, userId and postId, in a component?",
    "options": [
      {
        "id": "A",
        "text": "const { userId, postId } = useParams();"
      },
      {
        "id": "B",
        "text": "const userId = useParams('userId'); const postId = useParams('postId');"
      },
      {
        "id": "C",
        "text": "const userId = route.params.userId; const postId = route.params.postId;"
      },
      {
        "id": "D",
        "text": "const { userId } = useParams(); const { postId } = useParams();"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Hook `useParams()` của React Router v6 trả về một object chứa tất cả các route parameters, nên ta trích xuất nhiều tham số cùng lúc bằng destructuring: `const { userId, postId } = useParams();`."
  },
  {
    "id": "fer202-d13-q44",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 44/50\n\n**Câu 44.** How would you navigate programmatically to a route with a parameter using useNavigate in React Router?",
    "options": [
      {
        "id": "A",
        "text": "navigate(\"/user:id\");"
      },
      {
        "id": "B",
        "text": "navigate(\"/user?id=123\");"
      },
      {
        "id": "C",
        "text": "navigate(\"/user/123\");"
      },
      {
        "id": "D",
        "text": "navigate({ path: \"/user/123\" });"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Khi điều hướng bằng code tới một dynamic route như `/user/:id`, ta truyền trực tiếp chuỗi đường dẫn đã điền giá trị thật vào `navigate`: `navigate(\"/user/123\");`."
  },
  {
    "id": "fer202-d13-q45",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "### Trang 45/50\n\n**Câu 45.**\n\nWhy might this code produce unexpected results?\n\n```\nfunction Counter() {\nconst [count, setCount] = useState(0);\nconst handleClick = () => {\nsetCount(count + 1);\nsetCount(count + 1);\n};\nreturn <button onClick={handleClick}>count</button>;\n}\n```",
    "options": [
      {
        "id": "A",
        "text": "Because setCount is called twice, it resets state"
      },
      {
        "id": "B",
        "text": "Because setCount merges the updates automatically"
      },
      {
        "id": "C",
        "text": "Both setCount(count + 1) calls use the same snapshot of count"
      },
      {
        "id": "D",
        "text": "It's invalid to call setCount twice"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Cả hai lời gọi `setCount(count + 1)` trong cùng 1 event handler đều đọc **cùng một snapshot giá trị `count`** của lần render hiện tại (ví dụ `0`), nên sau khi click `count` chỉ tăng lên `1` thay vì `2`. Muốn tăng 2 phải dùng `setCount(c => c + 1)`."
  },
  {
    "id": "fer202-d13-q46",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "### Trang 46/50\n\n**Câu 46.**\n\nFind the bug in the following React code:\n\n```\nconst [items, setItems] = useState([]);\nconst addItem = () => {\nitems.push('new');\nsetItems(items);\n};\n```",
    "options": [
      {
        "id": "A",
        "text": "useState should be useReducer"
      },
      {
        "id": "B",
        "text": "use setItems([...items, 'new'])"
      },
      {
        "id": "C",
        "text": "push is not a valid method"
      },
      {
        "id": "D",
        "text": "setItems must take a string"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- `items.push('new')` đột biến (mutate) trực tiếp mảng cũ và `setItems(items)` truyền lại cùng tham chiếu cũ nên React không phát hiện thay đổi để re-render. Phải tạo mảng mới bất biến: `setItems([...items, 'new'])`."
  },
  {
    "id": "fer202-d13-q47",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 47/50\n\n**Câu 47.** In the useEffect hook, how many milliseconds would you wait using setTimeout to perform a side effect after 2 seconds?",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "200"
      },
      {
        "id": "C",
        "text": "2000"
      },
      {
        "id": "D",
        "text": "20000"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Hàm `setTimeout(fn, delay)` tính thời gian bằng **mili-giây (ms)**. Vì `1 giây = 1000 ms`, nên `2 giây = 2000 ms`."
  },
  {
    "id": "fer202-d13-q48",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 48/50\n\n**Câu 48.** Which is the correct way to consume context in a functional component using the \"useContext\" hook?",
    "options": [
      {
        "id": "A",
        "text": "const value = MyContext();"
      },
      {
        "id": "B",
        "text": "const value = useContext(MyContext);"
      },
      {
        "id": "C",
        "text": "const value = this.context(MyContext);"
      },
      {
        "id": "D",
        "text": "```\n<MyContext.Provider useContext={value} />\n```"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Cách chuẩn để tiêu thụ Context trong functional component là gọi hook `useContext` và truyền đối tượng Context vào: `const value = useContext(MyContext);`."
  },
  {
    "id": "fer202-d13-q49",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 49/50\n\n**Câu 49.** In React Router, how do you define a nested route structure within a parent component?",
    "options": [
      {
        "id": "A",
        "text": "```\nUtilize the <Switch> component to handle nested routes\n```"
      },
      {
        "id": "B",
        "text": "Implement a routing table using an array of route objects"
      },
      {
        "id": "C",
        "text": "```\nUse the <Route> component with nested <Route> components\n```"
      },
      {
        "id": "D",
        "text": "Direct routes using query parameters in URL path names"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trong React Router v6, Nested Routes được khai báo bằng cách đặt các thẻ `<Route>` con lồng bên trong thẻ `<Route>` cha (và dùng `<Outlet />` trong component cha để hiển thị route con)."
  },
  {
    "id": "fer202-d13-q50",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "### Trang 50/50\n\n**Câu 50.**\n\nFill in the blank in this Bootstrap CSS code to apply a primary button style using React-Bootstrap:\n\n```\nimport { Button } from 'react-bootstrap';\n<Button _____=\"primary\">Click me</Button>\n```",
    "options": [
      {
        "id": "A",
        "text": "color"
      },
      {
        "id": "B",
        "text": "variant"
      },
      {
        "id": "C",
        "text": "style"
      },
      {
        "id": "D",
        "text": "theme"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Trong React-Bootstrap, thuộc tính dùng để chọn kiểu màu nút bấm (`primary`, `secondary`, `success`, `danger`...) là **`variant`**: `<Button variant=\"primary\">Click me</Button>`."
  },
  {
    "id": "fer202-d14-q01",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "# FER202_SP26_B5_FE_878005\n\n> Môn: **FER202** — Phát triển web Front-End với React · Kỳ: SP26 · Loại: FE · 50 câu\n\n### Trang 1/50\n\n**Câu 1.** Analyze the differences between Flux and MVC architectures. Which statement is true?",
    "options": [
      {
        "id": "A",
        "text": "Flux enforces unidirectional data flow, while MVC allows bidirectional data flow."
      },
      {
        "id": "B",
        "text": "MVC enforces unidirectional data flow, while Flux allows bidirectional data flow."
      },
      {
        "id": "C",
        "text": "Both Flux and MVC enforce unidirectional data flow."
      },
      {
        "id": "D",
        "text": "Both Flux and MVC allow bidirectional data flow."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Kiến trúc **Flux** áp đặt luồng dữ liệu một chiều (unidirectional data flow: Action → Dispatcher → Store → View), trong khi **MVC** truyền thống cho phép cập nhật hai chiều (bidirectional data flow) giữa Model và View."
  },
  {
    "id": "fer202-d14-q02",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 2/50\n\n**Câu 2.** Which component is typically used in conjunction with React lazy to handle the loading state?",
    "options": [
      {
        "id": "A",
        "text": "```\n<ErrorBoundary>\n```"
      },
      {
        "id": "B",
        "text": "```\n<Suspense>\n```"
      },
      {
        "id": "C",
        "text": "```\n<LoadingComponent>\n```"
      },
      {
        "id": "D",
        "text": "```\n<Provider>\n```"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- `React.lazy()` luôn đi cặp với `<Suspense fallback={...}>` để hiển thị giao diện chờ (loading state) trong lúc file chunk của component đang được tải về."
  },
  {
    "id": "fer202-d14-q03",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 3/50\n\n**Câu 3.** What is Redux Thunk used for?",
    "options": [
      {
        "id": "A",
        "text": "To manage asynchronous actions in Redux."
      },
      {
        "id": "B",
        "text": "To log every action dispatched to the Redux store."
      },
      {
        "id": "C",
        "text": "To split reducers into simpler functions."
      },
      {
        "id": "D",
        "text": "To handle side effects in React components."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Redux Thunk** là middleware dùng để xử lý các **action bất đồng bộ** (asynchronous actions) như gọi API, bằng cách cho phép action creator trả về một function thay vì plain object."
  },
  {
    "id": "fer202-d14-q04",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 4/50\n\n**Câu 4.** How do you wrap a lazy-loaded component with a fallback in React?",
    "options": [
      {
        "id": "A",
        "text": "```\n<Suspense loader={<div>Loading...</div>}>\n<LazyComponent />\n</Suspense>\n```"
      },
      {
        "id": "B",
        "text": "```\n<Suspense fallback={<div>Loading...</div>}>\n<LazyComponent />\n</Suspense>\n```"
      },
      {
        "id": "C",
        "text": "```\n<Await fallback={<div>Loading...</div>}>\n<LazyComponent />\n</Await>\n```"
      },
      {
        "id": "D",
        "text": "```\n<Loading fallback={<div>Loading...</div>}>\n<LazyComponent />\n</Loading>\n```"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Cú pháp chuẩn để bọc một lazy-loaded component trong React là dùng `<Suspense fallback={<div>Loading...</div>}><LazyComponent /></Suspense>` (prop tên là `fallback`, không phải `loader`)."
  },
  {
    "id": "fer202-d14-q05",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 5/50\n\n**Câu 5.** How would you handle errors in a fetch request to ensure that the error is caught and logged to the console?",
    "options": [
      {
        "id": "A",
        "text": "fetch(url).then((response) => { return response.json(); }).catch(error => console.log(error))"
      },
      {
        "id": "B",
        "text": "fetch(url).then(response => response.catch(error => console.log(error)))"
      },
      {
        "id": "C",
        "text": "fetch(url).catch(error => { console.log(error) })"
      },
      {
        "id": "D",
        "text": "fetch(url).then(response => { throw new Error() }).catch(error => console.log(error))"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Chuỗi Promise chuẩn khi gọi `fetch(url)` là `.then((response) => response.json()).catch(error => console.log(error))` để vừa parse dữ liệu JSON vừa bắt và log lỗi mạng/parse ở cuối chuỗi."
  },
  {
    "id": "fer202-d14-q06",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 6/50\n\n**Câu 6.** What is one of the primary benefits of using Promises in JavaScript for asynchronous operations?",
    "options": [
      {
        "id": "A",
        "text": "It allows direct modification of the DOM"
      },
      {
        "id": "B",
        "text": "It makes synchronous code asynchronous."
      },
      {
        "id": "C",
        "text": "It helps solve the \"callback hell\" problem by allowing chains of asynchronous operations."
      },
      {
        "id": "D",
        "text": "It ensures data is always instantaneously available."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Lợi ích cốt lõi của **Promises** là giải quyết vấn đề **\"callback hell\"** (callback lồng nhau rối rắm) bằng cách cho phép nối chuỗi bất đồng bộ rõ ràng qua `.then()` và xử lý lỗi tập trung bằng `.catch()`."
  },
  {
    "id": "fer202-d14-q07",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 7/50\n\n**Câu 7.** What are the three possible states of a Promise as described in the sources?",
    "options": [
      {
        "id": "A",
        "text": "Initial, Running, Completed"
      },
      {
        "id": "B",
        "text": "Starting, Paused, Finished"
      },
      {
        "id": "C",
        "text": "Pending, Fulfilled, Rejected"
      },
      {
        "id": "D",
        "text": "Waiting, Processing, Error"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Một Promise trong JavaScript luôn có đúng 3 trạng thái: **Pending** (đang chờ), **Fulfilled** (hoàn thành thành công), và **Rejected** (thất bại)."
  },
  {
    "id": "fer202-d14-q08",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 8/50\n\n**Câu 8.** After making a successful fetch request, how would you retrieve the JSON data from the response object?",
    "options": [
      {
        "id": "A",
        "text": "response.data()"
      },
      {
        "id": "B",
        "text": "response.json()"
      },
      {
        "id": "C",
        "text": "response.jsonText()"
      },
      {
        "id": "D",
        "text": "response.body.json()"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Đối tượng `Response` trả về từ `fetch()` cung cấp phương thức `response.json()` (trả về một Promise) để đọc và phân tích body thành JavaScript object."
  },
  {
    "id": "fer202-d14-q09",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 9/50\n\n**Câu 9.** Which React concept is used to pass data from a parent component to a child component?",
    "options": [
      {
        "id": "A",
        "text": "State"
      },
      {
        "id": "B",
        "text": "Props"
      },
      {
        "id": "C",
        "text": "Context"
      },
      {
        "id": "D",
        "text": "Ref"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- **Props** (properties) là cơ chế chuẩn trong React để truyền dữ liệu từ component cha xuống component con theo luồng dữ liệu một chiều."
  },
  {
    "id": "fer202-d14-q10",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 10/50\n\n**Câu 10.** What is the main difference between props and state?",
    "options": [
      {
        "id": "A",
        "text": "Props are mutable, while state is immutable."
      },
      {
        "id": "B",
        "text": "State is used for passing data between components, while props are used to manage component behavior."
      },
      {
        "id": "C",
        "text": "Props do not change after the initial render, while state can change over time."
      },
      {
        "id": "D",
        "text": "State is used for rendering UI, while props are used for functionality."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- **Props** là bất biến (read-only) đối với component nhận nó, còn **State** là dữ liệu nội bộ của component có thể thay đổi theo thời gian (qua `useState` / `setState`) và kích hoạt re-render UI."
  },
  {
    "id": "fer202-d14-q11",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 11/50\n\n**Câu 11.** When should the useReducer() Hook be used instead of useState()?",
    "options": [
      {
        "id": "A",
        "text": "When components require simple, independent state values."
      },
      {
        "id": "B",
        "text": "When performing initialization and cleanup actions"
      },
      {
        "id": "C",
        "text": "When there is complex state logic, several sub-values, or when the upcoming state depends on the previous state"
      },
      {
        "id": "D",
        "text": "When sharing data across a component hierarchy without prop"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- `useReducer()` nên được chọn thay cho `useState()` khi logic state phức tạp, có nhiều giá trị con liên kết nhau hoặc state tiếp theo phụ thuộc vào state trước đó theo nhiều loại action."
  },
  {
    "id": "fer202-d14-q12",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 12/50\n\n**Câu 12.** Which method would you use to update the state of a component in React?",
    "options": [
      {
        "id": "A",
        "text": "setState"
      },
      {
        "id": "B",
        "text": "getState"
      },
      {
        "id": "C",
        "text": "updateState"
      },
      {
        "id": "D",
        "text": "modifyState"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong React Class Component, phương thức `setState` được dùng để cập nhật state và báo cho React re-render lại giao diện."
  },
  {
    "id": "fer202-d14-q13",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "### Trang 13/50\n\n**Câu 13.** Select the benefits of using React.memo and useMemo in React applications. (Choose 2 correct answers)\n\n*(Chọn 2 đáp án)*",
    "options": [
      {
        "id": "A",
        "text": "Prevent unnecessary component re-renders"
      },
      {
        "id": "B",
        "text": "Automatically synchronize component state with global state"
      },
      {
        "id": "C",
        "text": "Guarantee object references don't change during re-rendering"
      },
      {
        "id": "D",
        "text": "Simplify the process of context management"
      }
    ],
    "correctOptionIds": [
      "A",
      "C"
    ],
    "explanation": "**Đáp án đúng: A và C** *(Câu chọn 2 đáp án)*\n\n- `React.memo` giúp **ngăn component con re-render không cần thiết** khi props không đổi (A), còn `useMemo` giúp ghi nhớ giá trị/object tính toán để **giữ nguyên tham chiếu object giữa các lần render** (C)."
  },
  {
    "id": "fer202-d14-q14",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 14/50\n\n**Câu 14.** How do you define a route that matches /users/123 and passes the 123 as a parameter to the component?",
    "options": [
      {
        "id": "A",
        "text": "```\n<Route path=\"/users?id\" element={<User />}>\n```"
      },
      {
        "id": "B",
        "text": "```\n<Route path=\"/users/:id\" element={<User />}>\n```"
      },
      {
        "id": "C",
        "text": "```\n<Route path=\"/users/{id}\" element={<User />}>\n```"
      },
      {
        "id": "D",
        "text": "```\n<Route path=\"/users/#id\" element={<User />}>\n```"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Trong React Router v6, dynamic parameter được khai báo bằng dấu hai chấm `:` trước tên tham số: `<Route path=\"/users/:id\" element={<User />} />`."
  },
  {
    "id": "fer202-d14-q15",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 15/50\n\n**Câu 15.** When declaring routes in React Router, what are Routes and Route components used for?",
    "options": [
      {
        "id": "A",
        "text": "Routes is for styling, and Route is for defining event handlers."
      },
      {
        "id": "B",
        "text": "Routes is for managing state, and Route is for rendering components."
      },
      {
        "id": "C",
        "text": "Routes is used to wrap Route components and define the application's routes, while Route is used to define an individual route."
      },
      {
        "id": "D",
        "text": "Routes is for client-side logic, and Route is for server-side logic."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- `<Routes>` là container bọc ngoài các thẻ `<Route>` để đối chiếu URL hiện tại và chọn route khớp nhất, còn mỗi `<Route>` định nghĩa một đường dẫn cụ thể (`path`) cùng component hiển thị (`element`)."
  },
  {
    "id": "fer202-d14-q16",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 16/50\n\n**Câu 16.** Which component is used to define a route in React Router?",
    "options": [
      {
        "id": "A",
        "text": "```\n<Route>\n```"
      },
      {
        "id": "B",
        "text": "```\n<Router>\n```"
      },
      {
        "id": "C",
        "text": "```\n<Link>\n```"
      },
      {
        "id": "D",
        "text": "```\n<Navigation>\n```"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Component `<Route>` được dùng để khai báo một tuyến đường cụ thể trong React Router (ví dụ `<Route path=\"/about\" element={<About />} />`)."
  },
  {
    "id": "fer202-d14-q17",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 17/50\n\n**Câu 17.** What is the purpose of json-server in client-server communication?",
    "options": [
      {
        "id": "A",
        "text": "To set up a simple static web server that serves data to clients."
      },
      {
        "id": "B",
        "text": "To encrypt data during transmission between client and server."
      },
      {
        "id": "C",
        "text": "To manage client authentication and session data."
      },
      {
        "id": "D",
        "text": "To provide a full-featured backend for the React application."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- `json-server` cho phép dựng nhanh một mock REST API server đơn giản từ một file JSON tĩnh (`db.json`) để phục vụ dữ liệu cho phía client trong quá trình học tập và phát triển."
  },
  {
    "id": "fer202-d14-q18",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 18/50\n\n**Câu 18.** Which of the following is the correct syntax to use useDispatch in a functional component?",
    "options": [
      {
        "id": "A",
        "text": "```\nconst MyComponent = () => {\n  const dispatch = useDispatch();\n  return <div>My Component</div>;\n}\n```"
      },
      {
        "id": "B",
        "text": "```\nconst MyComponent = () => { const dispatch = useDispatch; return <div>My Component</div>; }\n```"
      },
      {
        "id": "C",
        "text": "```\nconst MyComponent = () => {\n  const dispatch = dispatch();\n  return <div>My Component</div>;\n}\n```"
      },
      {
        "id": "D",
        "text": "```\nconst MyComponent = () => { const dispatch = useDispatch(); return <div>My Component with dispatch</div>; }\n```"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Cú pháp chuẩn để lấy hàm `dispatch` trong functional component là gọi hook `const dispatch = useDispatch();` (có dấu ngoặc tròn `()`)."
  },
  {
    "id": "fer202-d14-q19",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 19/50\n\n**Câu 19.** Which of the following is a valid JSON object?",
    "options": [
      {
        "id": "A",
        "text": "```\n{\n  \"name\": \"John Doe\",\n  \"age\": 30,\n  \"city\": \"New York\"\n}\n```"
      },
      {
        "id": "B",
        "text": "```\n{\n  \"name\": \"John Doe\",\n  \"age\": \"30\",\n  \"city\": \"New York\"\n}\n```"
      },
      {
        "id": "C",
        "text": "```\n{\n  name: \"John Doe\",\n  age: 30,\n  city: \"New York\"\n}\n```"
      },
      {
        "id": "D",
        "text": "```\n{\n  \"name\" = \"John Doe\",\n  \"age\" = 30,\n  \"city\" = \"New York\"\n}\n```"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- JSON chuẩn (RFC 8259) yêu cầu mọi key và chuỗi đều dùng dấu ngoặc kép `\"`, ngăn cách key-value bằng dấu `:`, và số nguyên (`30`) không cần bọc ngoặc kép (đáp án A chuẩn xác nhất cho số tuổi `30`)."
  },
  {
    "id": "fer202-d14-q20",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 20/50\n\n**Câu 20.** What is the primary architectural style used in designing web services that follow REST principles?",
    "options": [
      {
        "id": "A",
        "text": "SOAP (Simple Object Access Protocol)"
      },
      {
        "id": "B",
        "text": "RPC (Remote Procedure Call)"
      },
      {
        "id": "C",
        "text": "MVC (Model-View-Controller)"
      },
      {
        "id": "D",
        "text": "RESTful (Representational State Transfer)"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Kiến trúc thiết kế web service tuân theo các nguyên lý REST (sử dụng tài nguyên qua URI và các HTTP methods chuẩn GET/POST/PUT/DELETE) được gọi là **RESTful (Representational State Transfer)**."
  },
  {
    "id": "fer202-d14-q21",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 21/50\n\n**Câu 21.** Create a React component that uses composition to include a header, main content, and footer. Which code snippet is correct?",
    "options": [
      {
        "id": "A",
        "text": "```\nfunction App() {\n  return (<div><Header /><MainContent /><Footer /></div>);\n}\n```"
      },
      {
        "id": "B",
        "text": "```\nfunction App() {\n  return (<div><Header /><MainContent /></div>);\n}\n```"
      },
      {
        "id": "C",
        "text": "```\nfunction App() {\n  return (<div><MainContent /><Header /><Footer /></div>);\n}\n```"
      },
      {
        "id": "D",
        "text": "```\nfunction App() {\n  return (<div><Footer /><MainContent /></div>);\n}\n```"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Đáp án A kết hợp đủ 3 thành phần theo đúng thứ tự yêu cầu: `<Header /><MainContent /><Footer />` nằm gọn trong một thẻ gốc `<div>`."
  },
  {
    "id": "fer202-d14-q22",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 22/50\n\n**Câu 22.** Create a React component that displays a list of items passed as props. Which approach would you use?",
    "options": [
      {
        "id": "A",
        "text": "Use a functional component with the map method"
      },
      {
        "id": "B",
        "text": "Use a class component with componentDidMount"
      },
      {
        "id": "C",
        "text": "Use a higher-order component"
      },
      {
        "id": "D",
        "text": "Use a lifecycle method to fetch data"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Cách chuẩn và hiện đại nhất để hiển thị một danh sách truyền qua props trong React là dùng **functional component** kết hợp phương thức **`Array.prototype.map()`** (kèm prop `key`)."
  },
  {
    "id": "fer202-d14-q23",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "### Trang 23/50\n\n**Câu 23.**\n\nHow can you avoid contradictions in state with this code?\n\n```\nconst [isOpen, setIsOpen] = useState(false);\nconst [buttonText, setButtonText] = useState(isOpen ? \"Close\" : \"Open\");\nfunction toggle() {\n  setIsOpen(!isOpen);\n  setButtonText(isOpen ? \"Open\" : \"Close\");\n}\n```",
    "options": [
      {
        "id": "A",
        "text": "The code above is fine as it is."
      },
      {
        "id": "B",
        "text": "Remove buttonText from state and calculate it dynamically in the render method based on isOpen."
      },
      {
        "id": "C",
        "text": "Keep both isOpen and buttonText in state but update them separately."
      },
      {
        "id": "D",
        "text": "Use useEffect to sync buttonText with isOpen."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- `buttonText` hoàn toàn có thể suy ra trực tiếp từ `isOpen` (`isOpen ? \"Close\" : \"Open\"`). Lưu giá trị suy dẫn (derived state) vào một `useState` riêng rất dễ gây lệch pha (contradiction). Cách tốt nhất là **xóa `buttonText` khỏi state và tính trực tiếp lúc render**."
  },
  {
    "id": "fer202-d14-q24",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 24/50\n\n**Câu 24.** What is the main advantage of using Hooks in React?",
    "options": [
      {
        "id": "A",
        "text": "Hooks allow React to maintain internal state without classes"
      },
      {
        "id": "B",
        "text": "Hooks simplify sharing functionality between components"
      },
      {
        "id": "C",
        "text": "Hooks remove the need for functional components"
      },
      {
        "id": "D",
        "text": "Hooks only support stateful components"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Lợi ích nền tảng nhất của **React Hooks** (từ React 16.8) là cho phép **functional components** quản lý state nội bộ (`useState`, `useReducer`) và vòng đời (`useEffect`) mà không cần viết Class Component."
  },
  {
    "id": "fer202-d14-q25",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "### Trang 25/50\n\n**Câu 25.** What does the default case in the reducer function do?",
    "options": [
      {
        "id": "A",
        "text": "Resets the state"
      },
      {
        "id": "B",
        "text": "Handles unknown actions"
      },
      {
        "id": "C",
        "text": "Throws an error for unknown actions"
      },
      {
        "id": "D",
        "text": "Returns the current state"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Nhánh `default` trong reducer (`default: return state;`) có nhiệm vụ **trả về nguyên state hiện tại** khi action được dispatch không khớp với bất kỳ `case` nào của reducer đó."
  },
  {
    "id": "fer202-d14-q26",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 26/50\n\n**Câu 26.** What is the purpose of package.json in a Node.js project?",
    "options": [
      {
        "id": "A",
        "text": "It defines the project's dependencies and scripts"
      },
      {
        "id": "B",
        "text": "It contains the source code of the project"
      },
      {
        "id": "C",
        "text": "It configures the Node.js environment"
      },
      {
        "id": "D",
        "text": "It manages the project's build process"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- `package.json` là file cấu hình trung tâm của dự án Node.js, khai báo danh sách thư viện phụ thuộc (`dependencies`, `devDependencies`), metadata và các lệnh `scripts` (`dev`, `build`, `test`)."
  },
  {
    "id": "fer202-d14-q27",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 27/50\n\n**Câu 27.** What is the main purpose of React in modern web development, and what type of applications does it best support?",
    "options": [
      {
        "id": "A",
        "text": "It is mainly designed for handling backend logic and database management"
      },
      {
        "id": "B",
        "text": "React helps build interactive user interfaces, especially for SPAs."
      },
      {
        "id": "C",
        "text": "React primarily functions as a server-side rendering engine for web applications."
      },
      {
        "id": "D",
        "text": "It is mainly a mobile development framework and not suitable for web applications."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- React là thư viện JavaScript giúp xây dựng giao diện người dùng tương tác (interactive UIs), đặc biệt tỏa sáng với các ứng dụng trang đơn **SPA (Single Page Applications)**."
  },
  {
    "id": "fer202-d14-q28",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 28/50\n\n**Câu 28.** Which of the following is NOT a feature of React?",
    "options": [
      {
        "id": "A",
        "text": "Component-Based"
      },
      {
        "id": "B",
        "text": "Virtual DOM"
      },
      {
        "id": "C",
        "text": "Large Community"
      },
      {
        "id": "D",
        "text": "Server-Side Rendering"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- React thuần tập trung vào Component-Based UI, Virtual DOM và có cộng đồng cực lớn; **Server-Side Rendering (SSR)** tích hợp sẵn là tính năng đặc trưng của framework như **Next.js**, không phải tính năng mặc định cốt lõi của React SPA thuần."
  },
  {
    "id": "fer202-d14-q29",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 29/50\n\n**Câu 29.** How can you conditionally render content in JSX?",
    "options": [
      {
        "id": "A",
        "text": "By using the if statement"
      },
      {
        "id": "B",
        "text": "By using the for loop"
      },
      {
        "id": "C",
        "text": "By using the ternary operator (condition ? trueContent : falseContent)"
      },
      {
        "id": "D",
        "text": "By using the switch statement"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trong JSX ta dùng **toán tử 3 ngôi (`condition ? trueContent : falseContent`)** hoặc toán tử logic `&&` để render có điều kiện vì `{}` chỉ chấp nhận biểu thức, không nhận câu lệnh `if`/`switch`/`for`."
  },
  {
    "id": "fer202-d14-q30",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 30/50\n\n**Câu 30.** Which method is used to perform enhanced array manipulation in ES6?",
    "options": [
      {
        "id": "A",
        "text": "map()"
      },
      {
        "id": "B",
        "text": "forEach()"
      },
      {
        "id": "C",
        "text": "reduce()"
      },
      {
        "id": "D",
        "text": "filter()"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- `map()` là phương thức biến đổi mảng phổ biến nhất trong ES6/React, tạo ra một mảng mới đã biến đổi từng phần tử mà không làm thay đổi mảng gốc."
  },
  {
    "id": "fer202-d14-q31",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 31/50\n\n**Câu 31.** In JSX, which of the following is correct?",
    "options": [
      {
        "id": "A",
        "text": "You must always wrap JSX in a single root element"
      },
      {
        "id": "B",
        "text": "You can use multiple root elements without any wrapping"
      },
      {
        "id": "C",
        "text": "JSX tags can be self-closing only for non-void elements"
      },
      {
        "id": "D",
        "text": "JSX does not support attributes like className"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mỗi biểu thức JSX trả về từ một component bắt buộc phải được bọc trong **một phần tử gốc duy nhất** (một thẻ cha như `<div>` hoặc Fragment `<>...</>`)."
  },
  {
    "id": "fer202-d14-q32",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 32/50\n\n**Câu 32.** How can you install React-Bootstrap in your ReactJS project?",
    "options": [
      {
        "id": "A",
        "text": "By using npm or yarn to install the package."
      },
      {
        "id": "B",
        "text": "By downloading the React-Bootstrap files from a website."
      },
      {
        "id": "C",
        "text": "By copying and pasting the React-Bootstrap code into your project."
      },
      {
        "id": "D",
        "text": "By using a CDN link to include React-Bootstrap in your HTML file."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Cách cài đặt chuẩn cho React-Bootstrap trong dự án React là dùng trình quản lý gói `npm` hoặc `yarn`: `npm install react-bootstrap bootstrap`."
  },
  {
    "id": "fer202-d14-q33",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 33/50\n\n**Câu 33.** How do you use the Grid system in React-Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "```\n<Row>\n<Container>\n  <Col xs={6}>2 of 3 (wider)</Col>\n</Container>\n</Row>\n```"
      },
      {
        "id": "B",
        "text": "```\n<Row>\n<Container>\n  <Column>1 of 3</Column>\n</Container>\n</Row>\n```"
      },
      {
        "id": "C",
        "text": "```\n<Container>\n<Row>\n  <Col xs={6}>2 of 3 (wider)</Col>\n</Row>\n</Container>\n```"
      },
      {
        "id": "D",
        "text": "```\n<Container>\n<Column>\n  <Row xs={6}>2 of 3 (wider)</Row>\n</Column>\n</Container>\n```"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Cấu trúc Grid chuẩn 3 tầng của React-Bootstrap từ ngoài vào trong là **`<Container>` → `<Row>` → `<Col>`** (đáp án C)."
  },
  {
    "id": "fer202-d14-q34",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 34/50\n\n**Câu 34.** What is the purpose of the 'fluid' prop in React-Bootstrap's Container component?",
    "options": [
      {
        "id": "A",
        "text": "It makes the container take up the entire width of the viewport."
      },
      {
        "id": "B",
        "text": "It enables the container to display text."
      },
      {
        "id": "C",
        "text": "It changes the container's background color."
      },
      {
        "id": "D",
        "text": "It makes the container fixed width."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Prop `fluid` trên `<Container fluid>` giúp container mở rộng chiếm trọn **100% chiều rộng viewport** ở mọi kích thước màn hình."
  },
  {
    "id": "fer202-d14-q35",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 35/50\n\n**Câu 35.** Assess the impact of using inline event handlers in React components. Which statement is true?",
    "options": [
      {
        "id": "A",
        "text": "Inline event handlers improve performance by reducing the number of function calls"
      },
      {
        "id": "B",
        "text": "Inline event handlers can lead to performance issues due to the creation of new functions on each render"
      },
      {
        "id": "C",
        "text": "Inline event handlers are the only way to handle events in React"
      },
      {
        "id": "D",
        "text": "Inline event handlers are more secure than named event handlers"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Viết inline event handler (`onClick={() => doSomething()}`) tạo ra một tham chiếu hàm mới sau mỗi lần render, có thể gây giảm hiệu năng hoặc khiến component con bọc `React.memo` bị re-render không cần thiết."
  },
  {
    "id": "fer202-d14-q36",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 36/50\n\n**Câu 36.** Analyze the benefits of using synthetic events in React. Which of the following is NOT a benefit?",
    "options": [
      {
        "id": "A",
        "text": "Provides a consistent event interface across different browsers"
      },
      {
        "id": "B",
        "text": "Contains information necessary for event propagation"
      },
      {
        "id": "C",
        "text": "Reduces the need for garbage collection"
      },
      {
        "id": "D",
        "text": "Normalizes browser inconsistencies"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- `SyntheticEvent` giúp chuẩn hóa API sự kiện trên mọi trình duyệt (A, D) và cung cấp thông tin xử lý lan truyền sự kiện (B). Từ React 17 trở đi React đã bỏ event pooling nên \"giảm nhu cầu garbage collection\" (C) KHÔNG phải lợi ích chính của SyntheticEvent."
  },
  {
    "id": "fer202-d14-q37",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 37/50\n\n**Câu 37.** What does the render method in a React component do?",
    "options": [
      {
        "id": "A",
        "text": "It manages state updates"
      },
      {
        "id": "B",
        "text": "It handles side effects"
      },
      {
        "id": "C",
        "text": "It returns the JSX that describes the UI"
      },
      {
        "id": "D",
        "text": "It fetches data from an API"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Phương thức `render()` trong React component trả về cấu trúc **JSX** mô tả giao diện người dùng sẽ được hiển thị."
  },
  {
    "id": "fer202-d14-q38",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 38/50\n\n**Câu 38.** What is a key differentiating characteristic of Tailwind CSS compared to traditional CSS frameworks like Bootstrap, as described in the sources?",
    "options": [
      {
        "id": "A",
        "text": "It provides a comprehensive set of pre-built components for rapid development"
      },
      {
        "id": "B",
        "text": "It enforces strict design patterns to maintain visual consistency."
      },
      {
        "id": "C",
        "text": "It offers a huge list of utility CSS classes, providing more freedom for custom designs."
      },
      {
        "id": "D",
        "text": "It relies heavily on JavaScript for styling and layout management."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Điểm khác biệt cốt lõi của **Tailwind CSS** so với Bootstrap là triết lý **utility-first**: cung cấp hàng loạt class CSS tiện ích nhỏ gọn giúp lập trình viên tự do sáng tạo thiết kế riêng mà không bị rập khuôn theo component dựng sẵn."
  },
  {
    "id": "fer202-d14-q39",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 39/50\n\n**Câu 39.** Next.js is primarily used for:",
    "options": [
      {
        "id": "A",
        "text": "Styling static websites"
      },
      {
        "id": "B",
        "text": "Creating server-rendered or statically generated React applications"
      },
      {
        "id": "C",
        "text": "Managing back-end databases"
      },
      {
        "id": "D",
        "text": "Handling real-time communication"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- **Next.js** chủ yếu được dùng để xây dựng các ứng dụng React có hỗ trợ **Server-Side Rendering (SSR)** và **Static Site Generation (SSG)**."
  },
  {
    "id": "fer202-d14-q40",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 40/50\n\n**Câu 40.** In Next.js, what mechanism primarily determines the routes in an application?",
    "options": [
      {
        "id": "A",
        "text": "Explicit configuration in a central routes.json file."
      },
      {
        "id": "B",
        "text": "File-system routing, where routes are determined by the structure of files."
      },
      {
        "id": "C",
        "text": "Dynamic route declarations using React Router."
      },
      {
        "id": "D",
        "text": "Server-side API endpoints only."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Next.js sử dụng cơ chế **File-system routing**: cấu trúc thư mục và tên file trong `app/` (App Router) hoặc `pages/` (Pages Router) tự động quyết định đường dẫn URL của ứng dụng."
  },
  {
    "id": "fer202-d14-q41",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 41/50\n\n**Câu 41.** How does Next.js's server-side rendering capability primarily benefit web applications?",
    "options": [
      {
        "id": "A",
        "text": "By offloading all rendering tasks to the client's browser"
      },
      {
        "id": "B",
        "text": "By eliminating the need for any server infrastructure"
      },
      {
        "id": "C",
        "text": "By resulting in faster initial page load times and better search engine optimization (SEO)"
      },
      {
        "id": "D",
        "text": "By simplifying complex client-side state management."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Server-Side Rendering (SSR) trong Next.js gửi sẵn HTML đã render từ server về trình duyệt, giúp **tải trang lần đầu nhanh hơn** và tối ưu **SEO** vượt trội so với CSR thuần."
  },
  {
    "id": "fer202-d14-q42",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 42/50\n\n**Câu 42.** If you wanted to customize the size of the form controls, what would you do in Bootstrap 5?",
    "options": [
      {
        "id": "A",
        "text": "Set width in inline CSS"
      },
      {
        "id": "B",
        "text": "Use the rows and cols attributes for all form elements"
      },
      {
        "id": "C",
        "text": "Use the size variants of the .form-control class, like .form-control-sm or .form-control-lg"
      },
      {
        "id": "D",
        "text": "Apply custom JavaScript functions"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trong Bootstrap 5, để đổi kích thước các ô nhập liệu form, ta dùng các class biến thể của `.form-control` là **`.form-control-sm`** (nhỏ) hoặc **`.form-control-lg`** (lớn)."
  },
  {
    "id": "fer202-d14-q43",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 43/50\n\n**Câu 43.** How do you create a responsive grid layout using Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "```\nBy using the <div class=\"grid\"> element.\n```"
      },
      {
        "id": "B",
        "text": "By applying the .responsive-grid class to the container element."
      },
      {
        "id": "C",
        "text": "By using the .row and .col-*-* classes to create rows and columns."
      },
      {
        "id": "D",
        "text": "By manually specifying the width of each element using CSS."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Hệ thống lưới responsive của Bootstrap được tạo bằng cách kết hợp `.row` và các class cột `.col-{breakpoint}-{size}` (ví dụ `.col-md-6`)."
  },
  {
    "id": "fer202-d14-q44",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 44/50\n\n**Câu 44.** Which of the following components can be used to create a slideshow in Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "popover"
      },
      {
        "id": "B",
        "text": "modal"
      },
      {
        "id": "C",
        "text": "carousel"
      },
      {
        "id": "D",
        "text": "nav-pills"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Component **`carousel`** (`.carousel`) trong Bootstrap được dùng để tạo slideshow trình chiếu ảnh/nội dung xoay vòng."
  },
  {
    "id": "fer202-d14-q45",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 45/50\n\n**Câu 45.** What does the useNavigate hook return?",
    "options": [
      {
        "id": "A",
        "text": "An object with navigation methods."
      },
      {
        "id": "B",
        "text": "A navigate function that can be used to navigate to a new location"
      },
      {
        "id": "C",
        "text": "A boolean indicating navigation status"
      },
      {
        "id": "D",
        "text": "A string representing the current route."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Hook `useNavigate()` của React Router v6 trả về một **hàm `navigate`** dùng để chuyển trang bằng code (ví dụ `navigate('/home')` hoặc `navigate(-1)`)."
  },
  {
    "id": "fer202-d14-q46",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 46/50\n\n**Câu 46.** How do you define a dynamic route parameter in React Router?",
    "options": [
      {
        "id": "A",
        "text": "```\n<Route path=\"/user/id\" component={UserProfile} />\n```"
      },
      {
        "id": "B",
        "text": "```\n<Route path=\"/user/:id\" component={UserProfile} />\n```"
      },
      {
        "id": "C",
        "text": "```\n<Route path=\"/user?id\" component={UserProfile} />\n```"
      },
      {
        "id": "D",
        "text": "```\n<Route path=\"/user/{id}\" component={UserProfile} />\n```"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Tham số động (dynamic route parameter) trong React Router được định nghĩa bằng dấu hai chấm `:` trước tên tham số: `path=\"/user/:id\"`."
  },
  {
    "id": "fer202-d14-q47",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 47/50\n\n**Câu 47.** What does the fallback prop in Suspense represent?",
    "options": [
      {
        "id": "A",
        "text": "The component to display while the lazy component is loading"
      },
      {
        "id": "B",
        "text": "The component to display when an error occurs during loading"
      },
      {
        "id": "C",
        "text": "The component to display when the lazy component is rendered"
      },
      {
        "id": "D",
        "text": "The component to display when Suspense is not supported"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Prop `fallback` của `<Suspense>` đại diện cho component/giao diện tạm thời sẽ hiển thị trong lúc lazy component đang được tải về."
  },
  {
    "id": "fer202-d14-q48",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 48/50\n\n**Câu 48.** What is the main purpose of code splitting in a React application?",
    "options": [
      {
        "id": "A",
        "text": "To make the code easier to read"
      },
      {
        "id": "B",
        "text": "To bundle all components into a single large file"
      },
      {
        "id": "C",
        "text": "To reduce the initial load time by loading parts of the app only when needed"
      },
      {
        "id": "D",
        "text": "To split CSS and JavaScript into separate files"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Mục đích chính của **Code Splitting** là **giảm thời gian tải ban đầu** (initial load time) bằng cách chỉ tải những phần mã nguồn người dùng thực sự cần đến."
  },
  {
    "id": "fer202-d14-q49",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "### Trang 49/50\n\n**Câu 49.** In a React function component, how do you access a prop named \"name\" that is passed from a parent component?",
    "options": [
      {
        "id": "A",
        "text": "this.props.name"
      },
      {
        "id": "B",
        "text": "props.name"
      },
      {
        "id": "C",
        "text": "useState.name"
      },
      {
        "id": "D",
        "text": "getProps().name"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Trong functional component, props được truyền vào làm tham số đầu tiên của hàm nên ta truy cập qua **`props.name`** (hoặc destructuring `{ name }`), KHÔNG dùng `this.props.name`."
  },
  {
    "id": "fer202-d14-q50",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "### Trang 50/50\n\n**Câu 50.** Which of the following are valid ways to initialize and manage state in a functional React component? (Choose 2 correct answers)\n\n*(Chọn 2 đáp án)*",
    "options": [
      {
        "id": "A",
        "text": "Using the useState hook."
      },
      {
        "id": "B",
        "text": "Using the useReducer hook."
      },
      {
        "id": "C",
        "text": "Using a Provider component."
      },
      {
        "id": "D",
        "text": "Using the useRef hook."
      }
    ],
    "correctOptionIds": [
      "A",
      "B"
    ],
    "explanation": "**Đáp án đúng: A và B** *(Câu chọn 2 đáp án)*\n\n- Hai hook chuẩn dùng để khởi tạo và quản lý state (kích hoạt re-render khi đổi) trong functional component là **`useState`** (A) và **`useReducer`** (B). (`useRef` không kích hoạt re-render, còn `Provider` chỉ phân phối Context)."
  },
  {
    "id": "fer202-d15-q01",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "# FER202_SP26_FE_783901\n\n> Môn: **FER202** — Phát triển web Front-End với React · Kỳ: SP26 · Loại: FE · 50 câu\n\n### Trang 1/50\n\n**Câu 1.** Which of the following is a common use case for using Redux in a React application?",
    "options": [
      {
        "id": "A",
        "text": "Managing authentication and user sessions"
      },
      {
        "id": "B",
        "text": "Styling and layout of React components"
      },
      {
        "id": "C",
        "text": "Handling form validation and input tracking"
      },
      {
        "id": "D",
        "text": "Implementing server-side rendering in React"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Một trường hợp sử dụng kinh điển của **Redux** là quản lý global state dùng chung xuyên suốt ứng dụng như **trạng thái xác thực (authentication) và phiên người dùng (user sessions)**."
  },
  {
    "id": "fer202-d15-q02",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 2/50\n\n**Câu 2.** Which hook is typically used alongside useSelector to modify the Redux state?",
    "options": [
      {
        "id": "A",
        "text": "useState"
      },
      {
        "id": "B",
        "text": "useEffect"
      },
      {
        "id": "C",
        "text": "useDispatch"
      },
      {
        "id": "D",
        "text": "useContext"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trong `react-redux`, `useSelector` dùng để **đọc** dữ liệu từ Redux store, còn **`useDispatch`** đi cặp với nó để gửi action **cập nhật** Redux state."
  },
  {
    "id": "fer202-d15-q03",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 3/50\n\n**Câu 3.** What is the purpose of the Redux middleware in React applications?",
    "options": [
      {
        "id": "A",
        "text": "To handle asynchronous actions and side effects"
      },
      {
        "id": "B",
        "text": "To define the structure of the Redux store"
      },
      {
        "id": "C",
        "text": "To connect React components to the Redux store"
      },
      {
        "id": "D",
        "text": "To manage component hierarchy"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Redux middleware (như Redux Thunk) dùng để chặn và xử lý các **action bất đồng bộ (async actions)** và các tác vụ phụ (side effects như gọi API, logging) trước khi tới reducer."
  },
  {
    "id": "fer202-d15-q04",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 4/50\n\n**Câu 4.** What is the core principle of Redux?",
    "options": [
      {
        "id": "A",
        "text": "Single source of truth and unidirectional data flow."
      },
      {
        "id": "B",
        "text": "Multiple sources of truth for each component."
      },
      {
        "id": "C",
        "text": "State is mutable and can be directly modified."
      },
      {
        "id": "D",
        "text": "State is only updated using the useState hook."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Nguyên lý nền tảng của Redux là **Single source of truth** (1 Store duy nhất) và **Unidirectional data flow** (luồng dữ liệu một chiều, state bất biến cập nhật qua Pure Reducers)."
  },
  {
    "id": "fer202-d15-q05",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 5/50\n\n**Câu 5.** What is the advantage of using Axios over fetch?",
    "options": [
      {
        "id": "A",
        "text": "Axios has better support for handling requests and responses."
      },
      {
        "id": "B",
        "text": "Axios requires less boilerplate code."
      },
      {
        "id": "C",
        "text": "Axios is faster than fetch for all types of HTTP requests."
      },
      {
        "id": "D",
        "text": "Axios does not support promises."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ưu điểm nổi bật của **Axios** so với `fetch()` là hỗ trợ xử lý request/response tốt hơn (tự động parse JSON, tự động reject lỗi HTTP 4xx/5xx, hỗ trợ interceptors và timeout sẵn)."
  },
  {
    "id": "fer202-d15-q06",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 6/50\n\n**Câu 6.** What is the main purpose of the await keyword within an async function?",
    "options": [
      {
        "id": "A",
        "text": "To return a new Promise object."
      },
      {
        "id": "B",
        "text": "To immediately execute the next line of code without waiting."
      },
      {
        "id": "C",
        "text": "To pause the execution of the async function until the Promise it's waiting for is resolved or rejected."
      },
      {
        "id": "D",
        "text": "To define a synchronous block of code"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Từ khóa `await` bên trong hàm `async` tạm dừng thực thi hàm cho đến khi Promise đi sau nó được giải quyết (resolved) hoặc bị từ chối (rejected)."
  },
  {
    "id": "fer202-d15-q07",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 7/50\n\n**Câu 7.** Why would a React developer choose to use \"Axios\"?",
    "options": [
      {
        "id": "A",
        "text": "To render React components faster"
      },
      {
        "id": "B",
        "text": "To manage component state globally"
      },
      {
        "id": "C",
        "text": "To make HTTP requests to APIs"
      },
      {
        "id": "D",
        "text": "To build reusable hooks"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Lập trình viên React chọn **Axios** để gửi các yêu cầu HTTP (`GET`, `POST`, `PUT`, `DELETE`) giao tiếp với REST API."
  },
  {
    "id": "fer202-d15-q08",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 8/50\n\n**Câu 8.** Which method is most commonly used in a React app to fetch data from a server?",
    "options": [
      {
        "id": "A",
        "text": "WebSockets"
      },
      {
        "id": "B",
        "text": "useState()"
      },
      {
        "id": "C",
        "text": "fetch() or axios inside useEffect()"
      },
      {
        "id": "D",
        "text": "console.log() inside render()"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Cách phổ biến và đúng chuẩn nhất để gọi API lấy dữ liệu từ server trong React là sử dụng **`fetch()` hoặc `axios` bên trong `useEffect()`**."
  },
  {
    "id": "fer202-d15-q09",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "### Trang 9/50\n\n**Câu 9.** Which of the following is used to pass a function from a parent component to a child component?",
    "options": [
      {
        "id": "A",
        "text": "Passing a function as a prop to the child component."
      },
      {
        "id": "B",
        "text": "Using useState hook in the child component."
      },
      {
        "id": "C",
        "text": "Using useContext in both parent and child components."
      },
      {
        "id": "D",
        "text": "Directly accessing the child component's state."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Để truyền một hàm từ component cha xuống component con trong React, ta truyền hàm đó dưới dạng một **prop** (ví dụ `<Child onSave={handleSave} />`)."
  },
  {
    "id": "fer202-d15-q10",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 10/50\n\n**Câu 10.** What happens when you use the xs prop on a Col component in React-Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "The column will only have its width defined on extra-large screens."
      },
      {
        "id": "B",
        "text": "The column will only have its width defined on extra-small screens, and larger sizes will ignore it"
      },
      {
        "id": "C",
        "text": "The column will have its width defined on extra-small screens and will apply to larger sizes if no specific breakpoint is defined."
      },
      {
        "id": "D",
        "text": "The xs prop does not exist in React-Bootstrap"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Theo nguyên lý Mobile-First của React-Bootstrap, prop `xs` trên `<Col>` định nghĩa độ rộng từ màn hình siêu nhỏ và **tự động áp dụng cho các màn hình lớn hơn** nếu không khai báo thêm breakpoint khác."
  },
  {
    "id": "fer202-d15-q11",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 11/50\n\n**Câu 11.** How can you ensure that a prop is passed as an array with at least one element?",
    "options": [
      {
        "id": "A",
        "text": "By using PropTypes.array.isRequired"
      },
      {
        "id": "B",
        "text": "By creating a custom PropType validator"
      },
      {
        "id": "C",
        "text": "By using PropTypes.arrayOf()"
      },
      {
        "id": "D",
        "text": "By using PropTypes.objectOf()"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- `PropTypes.array.isRequired` chỉ kiểm tra prop có phải là mảng (mảng rỗng `[]` vẫn hợp lệ!). Để kiểm tra mảng phải có **ít nhất 1 phần tử (`props[propName].length >= 1`)**, bắt buộc phải viết một **custom PropType validator**."
  },
  {
    "id": "fer202-d15-q12",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 12/50\n\n**Câu 12.** What is the primary purpose of a router in a web application?",
    "options": [
      {
        "id": "A",
        "text": "To manage state within a component"
      },
      {
        "id": "B",
        "text": "To respond to a URL based on a set of route handler declarations"
      },
      {
        "id": "C",
        "text": "To handle server-side logic"
      },
      {
        "id": "D",
        "text": "To manage routing in a React application"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Mục đích cốt lõi của Router trong ứng dụng web là phân tích URL và phản hồi bằng route handler/component tương ứng theo bảng khai báo route."
  },
  {
    "id": "fer202-d15-q13",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 13/50\n\n**Câu 13.** How do you declare a route in React Router?",
    "options": [
      {
        "id": "A",
        "text": "```\nUsing <Link path=\"/\" element={<Home/>} />\n```"
      },
      {
        "id": "B",
        "text": "```\nUsing <Route path=\"/\" element={<Home/>} />\n```"
      },
      {
        "id": "C",
        "text": "```\nUsing <Routes path=\"/\" element={<Home/>} />\n```"
      },
      {
        "id": "D",
        "text": "```\nUsing <context path=\"/\" ></context>\n```"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Trong React Router v6, mỗi route được khai báo bằng component `<Route path=\"/\" element={<Home />} />`."
  },
  {
    "id": "fer202-d15-q14",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 14/50\n\n**Câu 14.** What is the difference between the HTTP response codes 401 and 403?",
    "options": [
      {
        "id": "A",
        "text": "401 the request is missing valid authentication credentials, while 403 the server refuses to authorize."
      },
      {
        "id": "B",
        "text": "401 the server encountered an internal error, while 403 means the requested resource was not found."
      },
      {
        "id": "C",
        "text": "401 the request was successful, while 403 means the request was not modified."
      },
      {
        "id": "D",
        "text": "401 and 403 are interchangeable and have the same meaning."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **401 Unauthorized**: thiếu thông tin xác thực hợp lệ (chưa đăng nhập / token hết hạn). **403 Forbidden**: đã xác thực nhưng máy chủ từ chối cấp quyền truy cập."
  },
  {
    "id": "fer202-d15-q15",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "### Trang 15/50\n\n**Câu 15.**\n\n```\nconst jsonServer = require('json-server');\nconst server = jsonServer.create();\nconst router = jsonServer.router('data.json');\nconst port = 3000;\nserver.use(router);\nserver.listen(port, () => {\n    console.log(`JSON server is running on port ${port}`);\n});\n```\n\nWhat is the above code used for?",
    "options": [
      {
        "id": "A",
        "text": "Create a dynamic server to serve JSON data."
      },
      {
        "id": "B",
        "text": "Create a dynamic web application using JSON data."
      },
      {
        "id": "C",
        "text": "Create a JSON file based on data from the server."
      },
      {
        "id": "D",
        "text": "Configure the development environment for the project using JSON."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Đoạn mã dùng thư viện `json-server` để tạo một REST API server động chạy trên cổng 3000 phục vụ dữ liệu JSON từ file `data.json`."
  },
  {
    "id": "fer202-d15-q16",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 16/50\n\n**Câu 16.** How do you dispatch an action when a button is clicked?",
    "options": [
      {
        "id": "A",
        "text": "```\nconst handleClick = () => {\n    dispatch({ type: 'BUTTON_CLICKED' });\n};\n<button onClick={handleClick}>Click me</button>;\n```"
      },
      {
        "id": "B",
        "text": "```\nconst handleClick = () => {\n    dispatch({ type: 'BUTTON_CLICKED' });\n};\n<button onClick={() => handleClick()}>Click me</button>;\n```"
      },
      {
        "id": "C",
        "text": "```\nconst handleClick = () => { dispatch({ type: 'BUTTON_CLICKED' }); }; <button onClick={handleClick}>Click me</button>;\n```"
      },
      {
        "id": "D",
        "text": "```\nconst handleClick = () => {\n    dispatch({ action: 'BUTTON_CLICKED' });\n};\n<button onClick={handleClick}>Click me</button>;\n```"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Định nghĩa `handleClick` gọi `dispatch({ type: 'BUTTON_CLICKED' })` và truyền tham chiếu `onClick={handleClick}` là cú pháp chuẩn nhất (đáp án D sai vì dùng `{ action: ... }` thay vì `{ type: ... }`)."
  },
  {
    "id": "fer202-d15-q17",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 17/50\n\n**Câu 17.** Which of the following is the correct way to use useSelector to access a value from the Redux store?",
    "options": [
      {
        "id": "A",
        "text": "const value = useSelector((store) => store.value);"
      },
      {
        "id": "B",
        "text": "const value = useSelector((state) => state.value);"
      },
      {
        "id": "C",
        "text": "const value = useSelector((context) => context.value);"
      },
      {
        "id": "D",
        "text": "const value = useSelector((redux) => redux.value);"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Hook `useSelector` nhận vào hàm selector có tham số là `state` của Redux store: `const value = useSelector((state) => state.value);`."
  },
  {
    "id": "fer202-d15-q18",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 18/50\n\n**Câu 18.** What is the typical file extension for a React component?",
    "options": [
      {
        "id": "A",
        "text": "html"
      },
      {
        "id": "B",
        "text": "css"
      },
      {
        "id": "C",
        "text": "js or .jsx"
      },
      {
        "id": "D",
        "text": "php"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- File chứa React component thường có phần mở rộng là `.js` hoặc `.jsx` (hoặc `.ts`/`.tsx` với TypeScript)."
  },
  {
    "id": "fer202-d15-q19",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "multiple",
    "prompt": "### Trang 19/50\n\n**Câu 19.** What is the purpose of React. Fragment or shorthand <> </> in React? (Select all that apply)\n\n*(Chọn 2 đáp án)*",
    "options": [
      {
        "id": "A",
        "text": "Fragments allow you to group multiple elements without adding an extra node to the DOM."
      },
      {
        "id": "B",
        "text": "Fragments allow you to provide CSS styling to multiple elements."
      },
      {
        "id": "C",
        "text": "Fragments allow you to handle state management in React."
      },
      {
        "id": "D",
        "text": "```\nFragments are particularly useful for avoiding unnecessary <div> elements, which can clutter your markup.\n```"
      }
    ],
    "correctOptionIds": [
      "A",
      "D"
    ],
    "explanation": "**Đáp án đúng: A và D** *(Câu chọn 2 đáp án)*\n\n- `React.Fragment` (`<>...</>`) giúp gom nhiều phần tử con mà **không thêm node thừa vào DOM** (A) và **tránh tạo các thẻ `<div>` không cần thiết** làm rối markup (D)."
  },
  {
    "id": "fer202-d15-q20",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 20/50\n\n**Câu 20.** How can the useEffect hook be optimized for cleanup actions?",
    "options": [
      {
        "id": "A",
        "text": "By passing an empty array as the second argument"
      },
      {
        "id": "B",
        "text": "By using a class-based component"
      },
      {
        "id": "C",
        "text": "By calling it after every render"
      },
      {
        "id": "D",
        "text": "By manually removing event listeners"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Truyền mảng dependency rỗng `[]` làm đối số thứ hai cho `useEffect` giúp effect chỉ chạy 1 lần lúc mount và hàm cleanup chỉ dọn dẹp đúng 1 lần khi component unmount."
  },
  {
    "id": "fer202-d15-q21",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 21/50\n\n**Câu 21.** How would you use the useContext Hook to access a shared theme in a React component?",
    "options": [
      {
        "id": "A",
        "text": "const theme = useContext(ThemeContext);"
      },
      {
        "id": "B",
        "text": "const { theme } = useContext(ThemeContext);"
      },
      {
        "id": "C",
        "text": "const { theme } = useContext(ThemeContext.Provider);"
      },
      {
        "id": "D",
        "text": "const theme = useContext(ThemeContext.Provider);"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Cú pháp chuẩn của `useContext` là truyền đối tượng Context trực tiếp (không truyền `.Provider`): `const theme = useContext(ThemeContext);`."
  },
  {
    "id": "fer202-d15-q22",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 22/50\n\n**Câu 22.** Which of the following could cause an Effect to run too frequently?",
    "options": [
      {
        "id": "A",
        "text": "Including all state variables in the dependency array."
      },
      {
        "id": "B",
        "text": "Not using a dependency array."
      },
      {
        "id": "C",
        "text": "Including a variable like data that changes often in the dependency array."
      },
      {
        "id": "D",
        "text": "Omitting the dependency array altogether."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Đưa một biến thay đổi liên tục (như `data` đổi sau mỗi lần render) vào dependency array sẽ khiến `useEffect` chạy lại quá thường xuyên."
  },
  {
    "id": "fer202-d15-q23",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 23/50\n\n**Câu 23.** Which of the following is NOT considered a popular front-end framework?",
    "options": [
      {
        "id": "A",
        "text": "React"
      },
      {
        "id": "B",
        "text": "Angular"
      },
      {
        "id": "C",
        "text": "Django"
      },
      {
        "id": "D",
        "text": "Vue.js"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- **Django** là back-end web framework viết bằng Python, KHÔNG phải front-end framework (React, Angular, Vue.js mới là front-end)."
  },
  {
    "id": "fer202-d15-q24",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 24/50\n\n**Câu 24.** What is one major benefit of using front-end frameworks like React or Vue.js?",
    "options": [
      {
        "id": "A",
        "text": "They eliminate the need for HTML"
      },
      {
        "id": "B",
        "text": "They allow for faster development by providing pre-built components"
      },
      {
        "id": "C",
        "text": "They only work on mobile applications"
      },
      {
        "id": "D",
        "text": "They focus solely on server-side development"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Front-end frameworks/libraries như React hay Vue.js giúp phát triển nhanh hơn đáng kể nhờ kiến trúc component tái sử dụng và hệ sinh thái component dựng sẵn."
  },
  {
    "id": "fer202-d15-q25",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 25/50\n\n**Câu 25.** How can you access Chrome DevTools?",
    "options": [
      {
        "id": "A",
        "text": "By pressing F12 or right-clicking and selecting \"Inspect\""
      },
      {
        "id": "B",
        "text": "By installing a Chrome extension"
      },
      {
        "id": "C",
        "text": "By typing \"chrome://devtools\" in the address bar"
      },
      {
        "id": "D",
        "text": "By opening the Chrome menu and selecting \"DevTools\""
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mở Chrome DevTools nhanh nhất bằng phím **`F12`** (hoặc click chuột phải trên trang web → chọn **\"Inspect\"**)."
  },
  {
    "id": "fer202-d15-q26",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "### Trang 26/50\n\n**Câu 26.**\n\n```\nHow would you render a user's name dynamically inside an <h2> tag in JSX?\n```",
    "options": [
      {
        "id": "A",
        "text": "```\n<h2><p>{userName}</p></h2>\n```"
      },
      {
        "id": "B",
        "text": "```\n<h2>{userName}</h2>\n```"
      },
      {
        "id": "C",
        "text": "```\n<h2>\"userName\"</h2>\n```"
      },
      {
        "id": "D",
        "text": "```\n<h2>{userName: \"John\"}</h2>\n```"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Để render biến `userName` động trong thẻ `<h2>` của JSX, ta bọc biến trong ngoặc nhọn đơn: `<h2>{userName}</h2>`."
  },
  {
    "id": "fer202-d15-q27",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 27/50\n\n**Câu 27.** The purpose of JSX is to:",
    "options": [
      {
        "id": "A",
        "text": "Make JavaScript code more readable by embedding HTML in JavaScript"
      },
      {
        "id": "B",
        "text": "Make JavaScript run faster"
      },
      {
        "id": "C",
        "text": "Encrypt HTML elements"
      },
      {
        "id": "D",
        "text": "Handle server-side logic"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- JSX giúp mã JavaScript dễ đọc, trực quan hơn bằng cách cho phép viết cú pháp giống HTML ngay trong mã JavaScript."
  },
  {
    "id": "fer202-d15-q28",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "### Trang 28/50\n\n**Câu 28.** What does ES6 introduce that is essential for React applications? (Select all that apply)\n\n*(Chọn 3 đáp án)*",
    "options": [
      {
        "id": "A",
        "text": "Arrow functions"
      },
      {
        "id": "B",
        "text": "Destructuring assignment"
      },
      {
        "id": "C",
        "text": "JSX syntax"
      },
      {
        "id": "D",
        "text": "Template Literals"
      }
    ],
    "correctOptionIds": [
      "A",
      "B",
      "D"
    ],
    "explanation": "**Đáp án đúng: A, B và D** *(Câu chọn 3 đáp án)*\n\n- ES6 giới thiệu **Arrow functions** (A), **Destructuring assignment** (B) và **Template Literals** (D). **JSX** (C) là cú pháp của React, không phải tính năng của ES6."
  },
  {
    "id": "fer202-d15-q29",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "### Trang 29/50\n\n**Câu 29.** How do you import and use a Button component from React-Bootstrap 5? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "```\nimport React from 'react';\nimport Button from 'react-bootstrap/Button';\nfunction Demo() {\n    return (\n    <Button variant=\"primary\">\n    );\n}\nexport default Demo;\n```"
      },
      {
        "id": "B",
        "text": "```\nimport React from 'react';\nimport Button from 'react-bootstrap/Button';\nfunction Demo() {\n    return (\n    <button variant=\"primary\"> Primary Button</button>\n    );\n}\nexport default Demo;\n```"
      },
      {
        "id": "C",
        "text": "```\nimport React from 'react';\nimport Button from 'react-bootstrap/Button';\nfunction Demo() {\n    return (\n    <Button variant=\"primary\">Primary Button</Button>\n    );\n}\nexport default Demo;\n```"
      },
      {
        "id": "D",
        "text": "```\nimport React from 'react';\nimport Button from 'react-bootstrap/Button';\nfunction Demo() {\n    return (\n    <button variant=\"primary\"/>\n    );\n}\nexport default Demo;\n```"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Đáp án C sử dụng đúng component `<Button variant=\"primary\">Primary Button</Button>` (viết hoa chữ `B` và có thẻ đóng đầy đủ). A thiếu thẻ đóng, B và D dùng thẻ `<button>` HTML thường."
  },
  {
    "id": "fer202-d15-q30",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 30/50\n\n**Câu 30.** What is the main purpose of React-Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "To build React components using jQuery"
      },
      {
        "id": "B",
        "text": "To use Bootstrap styles with inline CSS only"
      },
      {
        "id": "C",
        "text": "To provide Bootstrap-styled components built entirely with React"
      },
      {
        "id": "D",
        "text": "To convert Bootstrap HTML into Angular components"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- **React-Bootstrap** cung cấp các component mang giao diện Bootstrap được xây dựng lại hoàn toàn bằng React (quản lý bằng props/state, không cần jQuery)."
  },
  {
    "id": "fer202-d15-q31",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 31/50\n\n**Câu 31.** Create a responsive grid layout using React-Bootstrap with three columns that stack vertically on small screens. Which classes would you apply?",
    "options": [
      {
        "id": "A",
        "text": "```\n<Container>\n   <Row>\n    <Col>1 of 3</Col>\n    <Col>2 of 3</Col>\n    <Col>3 of 3</Col>\n   </Row>\n</Container>\n```"
      },
      {
        "id": "B",
        "text": "```\n<Container>\n   <Row>\n    <Col sm={4}>1 of 3</Col>\n    <Col sm={4}>2 of 3</Col>\n    <Col sm={4}>3 of 3</Col>\n   </Row>\n</Container>\n```"
      },
      {
        "id": "C",
        "text": "```\n`<Container>`\n   <Row>\n    <Col md={12}>1 of 4</Col>\n    <Col md={12}>2 of 4</Col>\n    <Col md={12}>3 of 4</Col>\n   </Row>\n</Container>\n```"
      },
      {
        "id": "D",
        "text": "```\n`<Container>`\n   <Row>\n    <Col sm={12} md={4}>1 of 4</Col>\n    <Col sm={12} md={4}>2 of 4</Col>\n    <Col sm={12} md={4}>3 of 4</Col>\n   </Row>\n</Container>\n```"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Dùng `<Col sm={4}>` cho 3 cột (`4 × 3 = 12`): từ màn hình `sm` trở lên 3 cột chia đều trên 1 hàng ngang, còn ở màn hình nhỏ hơn `sm` chúng tự động xếp chồng dọc."
  },
  {
    "id": "fer202-d15-q32",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 32/50\n\n**Câu 32.** Which of the following is the first step in React's render cycle?",
    "options": [
      {
        "id": "A",
        "text": "Triggering a render when state or props change."
      },
      {
        "id": "B",
        "text": "Re-rendering the component."
      },
      {
        "id": "C",
        "text": "Committing the changes to the DOM."
      },
      {
        "id": "D",
        "text": "Calculating the minimal necessary updates for the DOM."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Bước đầu tiên trong chu trình render của React là **Triggering a render** (khi component mount lần đầu hoặc khi state/props thay đổi), tiếp theo mới đến Render và Commit."
  },
  {
    "id": "fer202-d15-q33",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "### Trang 33/50\n\n**Câu 33.** How can you pass parameters to an event handler in React? (Select all that apply)\n\n*(Chọn 2 đáp án)*",
    "options": [
      {
        "id": "A",
        "text": "Using the bind() method."
      },
      {
        "id": "B",
        "text": "Using arrow functions."
      },
      {
        "id": "C",
        "text": "Using the addEventListener() method."
      },
      {
        "id": "D",
        "text": "Using the this keyword."
      }
    ],
    "correctOptionIds": [
      "A",
      "B"
    ],
    "explanation": "**Đáp án đúng: A và B** *(Câu chọn 2 đáp án)*\n\n- Hai cách chuẩn để truyền tham số vào event handler trong React là dùng **`bind()`** (A) hoặc bọc trong **arrow function** `() => handle(arg)` (B)."
  },
  {
    "id": "fer202-d15-q34",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "### Trang 34/50\n\n**Câu 34.** What is the primary purpose of Next.js?",
    "options": [
      {
        "id": "A",
        "text": "To enable server-side rendering and generate static websites."
      },
      {
        "id": "B",
        "text": "To manage state in React applications."
      },
      {
        "id": "C",
        "text": "To provide a UI component library."
      },
      {
        "id": "D",
        "text": "To create database schemas."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mục đích chính của **Next.js** là cung cấp **Server-Side Rendering (SSR)** và **Static Site Generation (SSG)** trên nền React."
  },
  {
    "id": "fer202-d15-q35",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 35/50\n\n**Câu 35.** What is the main advantage of Tailwind CSS compared to Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "It provides more flexibility to create custom designs and components."
      },
      {
        "id": "B",
        "text": "It is easier to use and has fewer customization options."
      },
      {
        "id": "C",
        "text": "It has predefined components for quick styling."
      },
      {
        "id": "D",
        "text": "It offers faster page loading times."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Lợi thế chính của **Tailwind CSS** so với Bootstrap là tính linh hoạt vượt trội nhờ các utility classes, giúp tự do xây dựng giao diện và component tùy biến cao."
  },
  {
    "id": "fer202-d15-q36",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 36/50\n\n**Câu 36.** What command is used to create a new Next.js project?",
    "options": [
      {
        "id": "A",
        "text": "npm create-react-app"
      },
      {
        "id": "B",
        "text": "npm install next"
      },
      {
        "id": "C",
        "text": "npm create-next-app"
      },
      {
        "id": "D",
        "text": "git clone next.js"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Lệnh khởi tạo một dự án Next.js mới là `npx create-next-app` / `npm create-next-app`."
  },
  {
    "id": "fer202-d15-q37",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 37/50\n\n**Câu 37.** What is a core feature of Next.js that enhances SEO?",
    "options": [
      {
        "id": "A",
        "text": "Real-time data fetching."
      },
      {
        "id": "B",
        "text": "Client-side routing."
      },
      {
        "id": "C",
        "text": "Automatic code splitting."
      },
      {
        "id": "D",
        "text": "Server-side rendering."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- **Server-Side Rendering (SSR)** trả về HTML đầy đủ nội dung từ server giúp công cụ tìm kiếm lập chỉ mục dễ dàng, là tính năng cốt lõi nâng cao **SEO** của Next.js."
  },
  {
    "id": "fer202-d15-q38",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 38/50\n\n**Câu 38.** Which Bootstrap class is commonly used to create a responsive navigation bar?",
    "options": [
      {
        "id": "A",
        "text": "navbar-static"
      },
      {
        "id": "B",
        "text": "nav-horizontal"
      },
      {
        "id": "C",
        "text": "navbar"
      },
      {
        "id": "D",
        "text": "navigation-block"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trong Bootstrap, class `.navbar` được dùng để tạo thanh điều hướng responsive."
  },
  {
    "id": "fer202-d15-q39",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 39/50\n\n**Câu 39.** Which class is used to create a form input with a validation state in Bootstrap 5?",
    "options": [
      {
        "id": "A",
        "text": "form-control"
      },
      {
        "id": "B",
        "text": "input-group"
      },
      {
        "id": "C",
        "text": "form-check"
      },
      {
        "id": "D",
        "text": "form-validation"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Bootstrap 5, ô input của form dùng class `.form-control` (và gắn thêm `.is-valid` / `.is-invalid` cho trạng thái kiểm tra hợp lệ)."
  },
  {
    "id": "fer202-d15-q40",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 40/50\n\n**Câu 40.** Which Bootstrap class provides a fluid container that adapts to all breakpoints?",
    "options": [
      {
        "id": "A",
        "text": "container-fluid"
      },
      {
        "id": "B",
        "text": "container"
      },
      {
        "id": "C",
        "text": "container-lg"
      },
      {
        "id": "D",
        "text": "container-xs"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Class `.container-fluid` tạo container tràn viền 100% chiều rộng thích ứng ở mọi breakpoint."
  },
  {
    "id": "fer202-d15-q41",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 41/50\n\n**Câu 41.** Why should you avoid using too many lazy components in your application?",
    "options": [
      {
        "id": "A",
        "text": "Because it results in multiple HTTP requests, slowing down the application."
      },
      {
        "id": "B",
        "text": "Because it decreases the performance by loading everything upfront."
      },
      {
        "id": "C",
        "text": "Because it makes the code difficult to debug."
      },
      {
        "id": "D",
        "text": "Because it affects the layout and styling of components."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tạo quá nhiều lazy components nhỏ lẻ sẽ phát sinh rất nhiều **HTTP requests** riêng rẽ để tải từng chunk, làm tăng độ trễ và chậm ứng dụng."
  },
  {
    "id": "fer202-d15-q42",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 42/50\n\n**Câu 42.** Analyze the differences between Flux and MVC architectures. Which statement is true?",
    "options": [
      {
        "id": "A",
        "text": "Flux enforces unidirectional data flow, while MVC allows bidirectional data flow."
      },
      {
        "id": "B",
        "text": "MVC enforces unidirectional data flow, while Flux allows bidirectional data flow."
      },
      {
        "id": "C",
        "text": "Both Flux and MVC enforce unidirectional data flow."
      },
      {
        "id": "D",
        "text": "Both Flux and MVC allow bidirectional data flow."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Flux** ép buộc luồng dữ liệu một chiều (unidirectional), còn **MVC** truyền thống cho phép luồng dữ liệu hai chiều (bidirectional)."
  },
  {
    "id": "fer202-d15-q43",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 43/50\n\n**Câu 43.** How would you extract and display multiple parameters, userId and postId, in a component?",
    "options": [
      {
        "id": "A",
        "text": "const { userId, postId } = useParams();"
      },
      {
        "id": "B",
        "text": "const userId = useParams('userId'); const postId = useParams('postId');"
      },
      {
        "id": "C",
        "text": "const userId = route.params.userId; const postId = route.params.postId;"
      },
      {
        "id": "D",
        "text": "const { userId } = useParams(); const { postId } = useParams();"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Dùng destructuring trên kết quả của `useParams()` để lấy nhiều route parameters cùng lúc: `const { userId, postId } = useParams();`."
  },
  {
    "id": "fer202-d15-q44",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 44/50\n\n**Câu 44.** How would you navigate programmatically to a route with a parameter using useNavigate in React Router?",
    "options": [
      {
        "id": "A",
        "text": "navigate(\"/user:id\");"
      },
      {
        "id": "B",
        "text": "navigate(\"/user?id=123\");"
      },
      {
        "id": "C",
        "text": "navigate(\"/user/123\");"
      },
      {
        "id": "D",
        "text": "navigate({ path: \"/user/123\" });"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Để điều hướng tới route có tham số bằng `useNavigate`, ta truyền chuỗi đường dẫn chứa giá trị thực: `navigate(\"/user/123\");`."
  },
  {
    "id": "fer202-d15-q45",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "### Trang 45/50\n\n**Câu 45.**\n\nWhy might this code produce unexpected results?\n\n```\nfunction Counter() {\n    const [count, setCount] = useState(0);\n    const handleClick = () => {\n        setCount(count + 1);\n        setCount(count + 1);\n    };\n    return <button onClick={handleClick}>count</button>;\n}\n```",
    "options": [
      {
        "id": "A",
        "text": "Because setCount is called twice, it resets state"
      },
      {
        "id": "B",
        "text": "Because setCount merges the updates automatically"
      },
      {
        "id": "C",
        "text": "Both setCount(count + 1) calls use the same snapshot of count"
      },
      {
        "id": "D",
        "text": "It's invalid to call setCount twice"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Cả hai lệnh `setCount(count + 1)` trong cùng 1 handler đều sử dụng **cùng một snapshot giá trị `count`** của lần render hiện tại nên kết quả chỉ tăng thêm 1 thay vì 2 (cần dùng `setCount(c => c + 1)`)."
  },
  {
    "id": "fer202-d15-q46",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "### Trang 46/50\n\n**Câu 46.**\n\nFind the bug in the following React code:\n\n```\nconst [items, setItems] = useState([]);\nconst addItem = () => {\n    items.push('new');\n    setItems(items);\n};\n```",
    "options": [
      {
        "id": "A",
        "text": "useState should be useReducer"
      },
      {
        "id": "B",
        "text": "use setItems([...items, 'new'])"
      },
      {
        "id": "C",
        "text": "push is not a valid method"
      },
      {
        "id": "D",
        "text": "setItems must take a string"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- `items.push('new')` đột biến trực tiếp mảng cũ nên React không thấy thay đổi tham chiếu để re-render. Phải tạo mảng mới bất biến bằng spread: `setItems([...items, 'new'])`."
  },
  {
    "id": "fer202-d15-q47",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 47/50\n\n**Câu 47.** In the useEffect hook, how many milliseconds would you wait using setTimeout to perform a side effect after 2 seconds?",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "200"
      },
      {
        "id": "C",
        "text": "2000"
      },
      {
        "id": "D",
        "text": "20000"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- `setTimeout` nhận độ trễ tính theo **mili-giây (ms)**, nên `2 giây = 2000 ms`."
  },
  {
    "id": "fer202-d15-q48",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 48/50\n\n**Câu 48.** Which is the correct way to consume context in a functional component using the \"useContext\" hook?",
    "options": [
      {
        "id": "A",
        "text": "const value = MyContext();"
      },
      {
        "id": "B",
        "text": "const value = useContext(MyContext);"
      },
      {
        "id": "C",
        "text": "const value = this.context(MyContext);"
      },
      {
        "id": "D",
        "text": "```\n<MyContext.Provider useContext={value} />\n```"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Để đọc giá trị Context trong functional component bằng hook `useContext`, viết: `const value = useContext(MyContext);`."
  },
  {
    "id": "fer202-d15-q49",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "### Trang 49/50\n\n**Câu 49.** In React Router, how do you define a nested route structure within a parent component?",
    "options": [
      {
        "id": "A",
        "text": "```\nUtilize the <Switch> component to handle nested routes\n```"
      },
      {
        "id": "B",
        "text": "Implement a routing table using an array of route objects"
      },
      {
        "id": "C",
        "text": "```\nUse the <Route> component with nested <Route> components\n```"
      },
      {
        "id": "D",
        "text": "Direct routes using query parameters in URL path names"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trong React Router v6, Nested Routes được khai báo bằng cách đặt các thẻ `<Route>` con lồng bên trong `<Route>` cha (kết hợp `<Outlet />` để render route con)."
  },
  {
    "id": "fer202-d15-q50",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "### Trang 50/50\n\n**Câu 50.**\n\nFill in the blank in this Bootstrap CSS code to apply a primary button style using React-Bootstrap:\n\n```\nimport { Button } from 'react-bootstrap';\n<Button _____=\"primary\">Click me</Button>\n```",
    "options": [
      {
        "id": "A",
        "text": "color"
      },
      {
        "id": "B",
        "text": "variant"
      },
      {
        "id": "C",
        "text": "style"
      },
      {
        "id": "D",
        "text": "theme"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Trong React-Bootstrap, thuộc tính quy định kiểu màu nút (`primary`, `success`, `danger`...) là **`variant`**: `<Button variant=\"primary\">Click me</Button>`."
  },
  {
    "id": "fer202-d16-q01",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q01.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 1",
    "prompt": "Explain the difference between using async/await and traditional Promises (.then and .catch) for handling asynchronous operations in JavaScript.",
    "options": [
      {
        "id": "A",
        "text": "async/await makes async code more readable, while Promises use a callback-based approach."
      },
      {
        "id": "B",
        "text": "async/await is used for synchronous operations, while Promises are used for asynchronous operations."
      },
      {
        "id": "C",
        "text": "async/await can only be used with the window.fetch API, while Promises can be used with any asynchronous function."
      },
      {
        "id": "D",
        "text": "async/await is a newer feature that completely replaces Promises in modern JavaScript."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- `async/await` (ra mắt trong ES2017) là \"syntactic sugar\" được xây dựng trên nền tảng Promise, giúp mã bất đồng bộ có cú pháp tuần tự và dễ đọc giống như code đồng bộ thông thường.\n- Truyền thống dùng Promise đòi hỏi chuỗi callback thông qua các hàm `.then()` và `.catch()`, dễ dẫn đến hiện tượng Promise chaining phức tạp khi lồng nhau nhiều tầng.\n- Lưu ý: `async/await` không thay thế Promise mà bản chất một hàm `async` luôn trả về một Promise."
  },
  {
    "id": "fer202-d16-q02",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q02.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 2",
    "prompt": "Which method is most commonly used in a React app to fetch data from a server?",
    "options": [
      {
        "id": "A",
        "text": "WebSockets"
      },
      {
        "id": "B",
        "text": "useState()"
      },
      {
        "id": "C",
        "text": "fetch() or axios inside useEffect()"
      },
      {
        "id": "D",
        "text": "console.log() inside render()"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trong React, việc lấy dữ liệu từ server (HTTP API) là một tác vụ phụ (side-effect). Cách tiếp cận chuẩn và phổ biến nhất là sử dụng API trình duyệt `fetch()` hoặc thư viện `axios` bên trong hook `useEffect()` với dependency array rỗng `[]` (để gọi một lần khi component mount)."
  },
  {
    "id": "fer202-d16-q03",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q03.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 3",
    "prompt": "```javascript\nfetch(\"http://localhost:5000/items/999\")\n  .then((res) => {\n    console.log(res.ok); // false\n    console.log(res.status); // 404\n    return res.json();\n  })\n  .catch((err) => console.error(err));\n```\n\nThe server returns a 404 for this request. What best describes fetch's behavior here?",
    "options": [
      {
        "id": "A",
        "text": "The .then() callback is skipped entirely, and .catch() runs immediately with a 404 error"
      },
      {
        "id": "B",
        "text": "fetch only rejects on network failures; it does not reject on HTTP error status codes like 404, so .then() still runs with res.ok == false."
      },
      {
        "id": "C",
        "text": "fetch throws a NetworkError before the .then() block ever runs."
      },
      {
        "id": "D",
        "text": "The response is automatically retried up to 3 times before failing."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** (Bẫy kinh điển về fetch API!)\n\n- API `fetch()` của JavaScript KHÔNG tự động reject khi nhận mã lỗi HTTP (như 404 Not Found hay 500 Internal Server Error). Promise chỉ reject khi gặp lỗi mạng (network failure) hoặc request bị browser block (CORS).\n- Do đó, với mã 404, `.then()` vẫn thực thi bình thường với `res.ok === false` và `res.status === 404`."
  },
  {
    "id": "fer202-d16-q04",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q04.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 4",
    "prompt": "How would you handle errors in a fetch request to ensure that the error is caught and logged to the console?",
    "options": [
      {
        "id": "A",
        "text": "fetch(url).then((response)=>{ return response.json(); }).catch(error => console.log(error))"
      },
      {
        "id": "B",
        "text": "fetch(url).then(response => response.catch(error => console.log(error)))"
      },
      {
        "id": "C",
        "text": "fetch(url).catch(error => {{ console.log(error) }})"
      },
      {
        "id": "D",
        "text": "fetch(url).then(response => { throw new Error() }).catch(error => console.log(error))"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Chuỗi Promise chuẩn của `fetch()` là:\n  `fetch(url).then(response => response.json()).catch(error => console.log(error));`\n- Phương thức `.catch()` ở cuối chuỗi sẽ bắt được bất kỳ lỗi mạng nào hoặc lỗi ném ra trong quá trình parse JSON."
  },
  {
    "id": "fer202-d16-q05",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q05.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 5",
    "prompt": "What is the purpose of the initial state parameter in a Redux reducer function?",
    "options": [
      {
        "id": "A",
        "text": "To define the structure of the Redux store"
      },
      {
        "id": "B",
        "text": "To specify the actions that can be dispatched"
      },
      {
        "id": "C",
        "text": "To handle asynchronous operations"
      },
      {
        "id": "D",
        "text": "To define the initial state of the reducer"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Trong Redux, reducer nhận dạng `(state = initialState, action)`. Tham số `initialState` cung cấp trạng thái ban đầu mặc định cho nhánh dữ liệu mà reducer đó quản lý khi Redux store lần đầu khởi tạo."
  },
  {
    "id": "fer202-d16-q06",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q06.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 6",
    "prompt": "Which component is typically used in conjunction with React.lazy to handle the loading state?",
    "options": [
      {
        "id": "A",
        "text": "<ErrorBoundary>"
      },
      {
        "id": "B",
        "text": "<Suspense>"
      },
      {
        "id": "C",
        "text": "<LoadingComponent>"
      },
      {
        "id": "D",
        "text": "<Provider>"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- `React.lazy()` cho phép import động (code-splitting) một component. Nó bắt buộc phải được bọc trong component `<Suspense fallback={<LoadingSpinner />}>` để React biết cần hiển thị giao diện fallback nào trong lúc component đang được tải về."
  },
  {
    "id": "fer202-d16-q07",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q07.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 7",
    "prompt": "What does Redux Thunk middleware allow?",
    "options": [
      {
        "id": "A",
        "text": "It allows reducers to directly call APIs and mutate state with side effects."
      },
      {
        "id": "B",
        "text": "It allows components to bypass the store and directly mutate global state."
      },
      {
        "id": "C",
        "text": "It allows an action creator to return a function, so async logic can run before dispatching a real action."
      },
      {
        "id": "D",
        "text": "It allows Bootstrap to automatically create the Redux store."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Mặc định Redux chỉ cho phép action creators trả về một plain object `{ type, payload }`. Redux Thunk là middleware cho phép action creator trả về một hàm nhận tham số `(dispatch, getState)`, nhờ đó có thể thực hiện logic bất đồng bộ (gọi API) trước khi dispatch action thật."
  },
  {
    "id": "fer202-d16-q08",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q08.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 8",
    "prompt": "What is the primary purpose of Redux Thunk in a React-Redux application?",
    "options": [
      {
        "id": "A",
        "text": "To connect React components directly to the Redux store without the need for action creators or reducers."
      },
      {
        "id": "B",
        "text": "To provide a way to store and manage the application's state on the server-side, separate from the client-side state."
      },
      {
        "id": "C",
        "text": "To enable creating action creators that return functions (for asynchronous operations like API calls) instead of plain action objects."
      },
      {
        "id": "D",
        "text": "To automatically generate the code for action creators and reducers based on the application's data structure."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Mục đích chính của Redux Thunk là cho phép viết các action creator trả về function (thường được gọi là thunk) thay vì object, nhằm giải quyết bài toán xử lý bất đồng bộ (như fetch API) trong luồng dữ liệu một chiều của Redux."
  },
  {
    "id": "fer202-d16-q09",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q09.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 9",
    "prompt": "What happens if a component tries to consume a context that has not been provided higher up in the component tree?",
    "options": [
      {
        "id": "A",
        "text": "The component receives a default value specified in the context definition."
      },
      {
        "id": "B",
        "text": "The component throws an error."
      },
      {
        "id": "C",
        "text": "The component receives an empty object as the context value."
      },
      {
        "id": "D",
        "text": "The component receives null as the context value."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi tạo context bằng `const MyContext = createContext(defaultValue)`, nếu component gọi `useContext(MyContext)` mà không nằm bên trong bất kỳ `<MyContext.Provider>` nào ở cấp trên thì nó sẽ nhận được `defaultValue` được định nghĩa khi tạo context."
  },
  {
    "id": "fer202-d16-q10",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q10.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 10",
    "prompt": "```javascript\nimport React, { Component } from 'react';\n\nclass Counter extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      count: 0\n    };\n  }\n\n  incrementCount() {\n    // TODO: Increase the count state by 1\n  }\n\n  render() {\n    return (\n      <div>\n        <p>Count: {this.state.count}</p>\n        <button onClick={this.incrementCount}>Increment</button>\n      </div>\n    );\n  }\n}\n\nexport default Counter;\n```\n\nIn the code above, how can we increase the value of the count state by 1 when the user clicks the \"Increment\" button?",
    "options": [
      {
        "id": "A",
        "text": "Call the method this.setState({ count: this.state.count + 1 }) inside the incrementCount method."
      },
      {
        "id": "B",
        "text": "Assign a new value to count using the assignment operator (=) inside the incrementCount method."
      },
      {
        "id": "C",
        "text": "Call the method this.state.count += 1 inside the incrementCount method."
      },
      {
        "id": "D",
        "text": "Use this.setState(count + 1) inside the incrementCount method."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong React Class Component, state không bao giờ được gán trực tiếp (`this.state.count += 1`). Để kích hoạt re-render UI, phải gọi `this.setState({ count: this.state.count + 1 })` hoặc dùng callback `this.setState(prev => ({ count: prev.count + 1 }))`."
  },
  {
    "id": "fer202-d16-q11",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q11.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 11",
    "prompt": "What is a prop in React used for?",
    "options": [
      {
        "id": "A",
        "text": "It defines the internal state of a component."
      },
      {
        "id": "B",
        "text": "It specifies the visual appearance of a component."
      },
      {
        "id": "C",
        "text": "It enables communication and data transfer between components."
      },
      {
        "id": "D",
        "text": "It handles user interactions and events."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Props (viết tắt của properties) là cơ chế giao tiếp giữa các component trong React, cho phép component cha truyền dữ liệu và hàm xử lý sự kiện xuống component con theo luồng dữ liệu một chiều (unidirectional data flow)."
  },
  {
    "id": "fer202-d16-q12",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q12.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 12",
    "prompt": "What is the purpose of package.json in a Node.js project?",
    "options": [
      {
        "id": "A",
        "text": "It defines the project's dependencies and scripts"
      },
      {
        "id": "B",
        "text": "It contains the source code of the project"
      },
      {
        "id": "C",
        "text": "It configures the Node.js environment"
      },
      {
        "id": "D",
        "text": "It manages the project's build process"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- `package.json` là file manifest của một dự án Node.js/JavaScript, chứa thông tin metadata, danh sách thư viện phụ thuộc (`dependencies`, `devDependencies`) và các script lệnh thực thi (`scripts`)."
  },
  {
    "id": "fer202-d16-q13",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q13.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 13",
    "prompt": "Execute the following Git command sequence. What is the final state of the repository?\n\n```bash\ngit init\ngit add .\ngit commit -m \"Initial commit\"\ngit branch new-feature\ngit checkout new-feature\ngit add new-file.js\ngit commit -m \"Add new file\"\ngit checkout main\ngit merge new-feature\n```",
    "options": [
      {
        "id": "A",
        "text": "The repository has a new branch called new-feature with new-file.js added."
      },
      {
        "id": "B",
        "text": "The main branch has new-file.js added."
      },
      {
        "id": "C",
        "text": "The new-feature branch is merged into main without new-file.js."
      },
      {
        "id": "D",
        "text": "The repository remains unchanged."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Sau khi switch về nhánh `main` (`git checkout main`) và chạy `git merge new-feature`, Git sẽ gộp toàn bộ các commit trên nhánh `new-feature` vào `main`. Vì thế nhánh `main` lúc này đã có file `new-file.js`."
  },
  {
    "id": "fer202-d16-q14",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q14.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 14",
    "prompt": "What is React?",
    "options": [
      {
        "id": "A",
        "text": "A JavaScript library created by Google for building user interfaces."
      },
      {
        "id": "B",
        "text": "A tool for building user interfaces developed by Facebook."
      },
      {
        "id": "C",
        "text": "A framework for building backend systems."
      },
      {
        "id": "D",
        "text": "A JavaScript library developed by Microsoft for building user interfaces."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- React là thư viện JavaScript mã nguồn mở phục vụ xây dựng giao diện người dùng (UI), được phát triển và duy trì bởi Facebook (nay là Meta)."
  },
  {
    "id": "fer202-d16-q15",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q15.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 15",
    "prompt": "What command would you typically run to start json-server on the default port using a \"db.json\" file?",
    "options": [
      {
        "id": "A",
        "text": "json-server run db.json"
      },
      {
        "id": "B",
        "text": "npm start db.json"
      },
      {
        "id": "C",
        "text": "json-server --watch db.json"
      },
      {
        "id": "D",
        "text": "node server.js db.json"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Câu lệnh chuẩn để khởi chạy `json-server` theo dõi file dữ liệu `db.json` là `json-server --watch db.json`. Mặc định server sẽ chạy trên cổng 3000."
  },
  {
    "id": "fer202-d16-q16",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q16.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 16",
    "prompt": "Which of the following is a valid JSON object?",
    "options": [
      {
        "id": "A",
        "text": "{\n  \"name\": \"John Doe\",\n  \"age\": 30,\n  \"city\": \"New York\"\n}"
      },
      {
        "id": "B",
        "text": "{\n  'name': 'John Doe',\n  'age': \"30\",\n  'city': 'New York'\n}"
      },
      {
        "id": "C",
        "text": "{\n  name: \"John Doe\",\n  age: 30,\n  city: \"New York\"\n}"
      },
      {
        "id": "D",
        "text": "{\n  \"name\" = \"John Doe\",\n  \"age\" = 30,\n  \"city\" = \"New York\"\n}"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Chuẩn JSON (RFC 8259) quy định key và string value bắt buộc phải dùng dấu ngoặc kép (`\"`). Không được dùng dấu nháy đơn (`'`) hoặc bỏ dấu ngoặc ở key như trong JavaScript object literal."
  },
  {
    "id": "fer202-d16-q17",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q17.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 17",
    "prompt": "What is the purpose of a server in a client-server architecture?",
    "options": [
      {
        "id": "A",
        "text": "To handle user input and interactions."
      },
      {
        "id": "B",
        "text": "To display the website content."
      },
      {
        "id": "C",
        "text": "To provide data and resources to clients."
      },
      {
        "id": "D",
        "text": "To style the user interface."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trong mô hình Client-Server, máy chủ (server) chịu trách nhiệm lưu trữ, xử lý logic và cung cấp dữ liệu, tài nguyên cho các máy khách (clients) khi có yêu cầu (requests)."
  },
  {
    "id": "fer202-d16-q18",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q18.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 18",
    "prompt": "Which HTTP method is typically used in a fetch request to retrieve data from a server?",
    "options": [
      {
        "id": "A",
        "text": "POST"
      },
      {
        "id": "B",
        "text": "GET"
      },
      {
        "id": "C",
        "text": "PUT"
      },
      {
        "id": "D",
        "text": "DELETE"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Phương thức HTTP `GET` được dùng để lấy (truy xuất) dữ liệu từ máy chủ. Đây cũng là phương thức mặc định của hàm `fetch()` nếu không chỉ định thuộc tính `method`."
  },
  {
    "id": "fer202-d16-q19",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q19.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 19",
    "prompt": "Evaluate the differences between useMemo and useCallback hooks. Which statement is true?",
    "options": [
      {
        "id": "A",
        "text": "useMemo is used to memoize functions, while useCallback is used to memoize values"
      },
      {
        "id": "B",
        "text": "useMemo is used to memoize values, while useCallback is used to memoize functions"
      },
      {
        "id": "C",
        "text": "Both useMemo and useCallback are used to memoize values"
      },
      {
        "id": "D",
        "text": "Both useMemo and useCallback are used to memoize functions"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- `useMemo` thực thi hàm và ghi nhớ giá trị trả về của hàm đó: `useMemo(() => computeValue(a, b), [a, b])`.\n- `useCallback` ghi nhớ chính định nghĩa hàm (function reference) để không tạo hàm mới qua các lần render: `useCallback(fn, deps)` tương đương với `useMemo(() => fn, deps)`."
  },
  {
    "id": "fer202-d16-q20",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q20.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 20",
    "prompt": "How do you access a Context value in a functional component?",
    "options": [
      {
        "id": "A",
        "text": "const theme = ThemeContext.value;"
      },
      {
        "id": "B",
        "text": "const theme = ThemeContext.use();"
      },
      {
        "id": "C",
        "text": "const theme = useContext(ThemeContext);"
      },
      {
        "id": "D",
        "text": "const theme = ThemeContext.Consumer();"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trong React Functional Component, cú pháp chuẩn để sử dụng context là gọi hook `useContext` và truyền context object vào: `const value = useContext(ThemeContext);`."
  },
  {
    "id": "fer202-d16-q21",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q21.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 21",
    "prompt": "Which built-in hook is used to perform side effects (like data fetching or subscriptions) after a component renders?",
    "options": [
      {
        "id": "A",
        "text": "useMemo"
      },
      {
        "id": "B",
        "text": "useCallback"
      },
      {
        "id": "C",
        "text": "useReducer"
      },
      {
        "id": "D",
        "text": "useEffect"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Hook `useEffect` phục vụ cho việc thực thi các side-effects (gọi API lấy dữ liệu, lắng nghe sự kiện trình duyệt, thao tác DOM trực tiếp) sau khi component đã render."
  },
  {
    "id": "fer202-d16-q22",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q22.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 22",
    "prompt": "What is the primary purpose of a React component?",
    "options": [
      {
        "id": "A",
        "text": "To manage HTTP requests"
      },
      {
        "id": "B",
        "text": "To style the UI"
      },
      {
        "id": "C",
        "text": "To break the user interface into reusable pieces"
      },
      {
        "id": "D",
        "text": "To handle backend authentication"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Mục đích cốt lõi của React component là chia nhỏ giao diện người dùng thành các phần độc lập, khép kín và có thể tái sử dụng (reusable pieces)."
  },
  {
    "id": "fer202-d16-q23",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q23.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 23",
    "prompt": "Which of the following is the correct way to define a React function component?",
    "options": [
      {
        "id": "A",
        "text": "function Welcome() {\n  return <h1>Hello, World!</h1>;\n}"
      },
      {
        "id": "B",
        "text": "class Welcome extends React.Component {\n  render() {\n    return <h1>Hello, World!</h1>;\n  }\n}"
      },
      {
        "id": "C",
        "text": "function Welcome = <h1>Hello</h1>;"
      },
      {
        "id": "D",
        "text": "component Welcome {\n  return \"Hello\";\n}"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Định nghĩa chuẩn của React Function Component là một JavaScript function thông thường nhận props và trả về JSX. Đáp án B là Class Component."
  },
  {
    "id": "fer202-d16-q24",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q24.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 24",
    "prompt": "How do you access props in a functional component in React?",
    "options": [
      {
        "id": "A",
        "text": "const Child = (props) => { return <div>{props.name}</div>; };"
      },
      {
        "id": "B",
        "text": "const Child = () => { return <div>{this.props.name}</div>; };"
      },
      {
        "id": "C",
        "text": "const Child = (prop) => { return <div>{prop.name}</div>; };"
      },
      {
        "id": "D",
        "text": "const Child = () => { return <div>{props.name}</div>; };"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Functional Component, đối số đầu tiên của hàm chính là `props`. Ta truy xuất qua `props.name` (hoặc destructuring `{ name }`). Functional component không sử dụng `this.props`."
  },
  {
    "id": "fer202-d16-q25",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q25.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 25",
    "prompt": "How can you define optional route parameters in React Router?",
    "options": [
      {
        "id": "A",
        "text": "By defining a route with multiple child routes."
      },
      {
        "id": "B",
        "text": "By including query parameters in the URL."
      },
      {
        "id": "C",
        "text": "By using React Router's path syntax with an optional parameter."
      },
      {
        "id": "D",
        "text": "By using a regular expression in the route path."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trong React Router (v6.5+), bạn sử dụng cú pháp path syntax với dấu chấm hỏi `?` ở cuối tên param (ví dụ: `path=\"/user/:id?\"`) để biểu thị rằng tham số `id` là tùy chọn (optional)."
  },
  {
    "id": "fer202-d16-q26",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q26.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 26",
    "prompt": "What is the role of the BrowserRouter component in React Router?",
    "options": [
      {
        "id": "A",
        "text": "To define a route in the application"
      },
      {
        "id": "B",
        "text": "To wrap the entire application and enable routing using the HTML5 History API"
      },
      {
        "id": "C",
        "text": "To handle form submissions"
      },
      {
        "id": "D",
        "text": "To manage state within a component"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- `<BrowserRouter>` bao bọc ứng dụng React và kích hoạt tính năng định tuyến điều hướng dựa trên HTML5 History API (`pushState`, `replaceState`, `popstate`), giữ cho URL trên trình duyệt đồng bộ với UI."
  },
  {
    "id": "fer202-d16-q27",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q27.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 27",
    "prompt": "What is the primary purpose of a router in a web application?",
    "options": [
      {
        "id": "A",
        "text": "To manage state within a component"
      },
      {
        "id": "B",
        "text": "To respond to a URL based on a set of route handler declarations"
      },
      {
        "id": "C",
        "text": "To handle server-side logic"
      },
      {
        "id": "D",
        "text": "To manage routing in a React application"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Mục đích khái quát của Router trong ứng dụng web là phân tích URL yêu cầu và kích hoạt handler/component tương ứng theo danh sách cấu hình tuyến đường đã khai báo."
  },
  {
    "id": "fer202-d16-q28",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q28.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 28",
    "prompt": "Which file is typically used to customize Tailwind's theme (colors, spacing, fonts, breakpoints)?",
    "options": [
      {
        "id": "A",
        "text": "package.json"
      },
      {
        "id": "B",
        "text": "postcss.config.js"
      },
      {
        "id": "C",
        "text": "index.css"
      },
      {
        "id": "D",
        "text": "tailwind.config.js"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- File `tailwind.config.js` chứa thuộc tính `theme` và `theme.extend`, là nơi cấu hình bảng màu sắc (colors), khoảng cách (spacing), font chữ (fontFamily) và breakpoints của Tailwind CSS."
  },
  {
    "id": "fer202-d16-q29",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q29.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 29",
    "prompt": "What command is used to create a new Next.js project?",
    "options": [
      {
        "id": "A",
        "text": "npx create-react-app"
      },
      {
        "id": "B",
        "text": "npm install next"
      },
      {
        "id": "C",
        "text": "npx create-next-app"
      },
      {
        "id": "D",
        "text": "git clone next.js"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Câu lệnh chính thức do Next.js cung cấp để khởi tạo một ứng dụng Next.js mới là `npx create-next-app` (hoặc `npx create-next-app@latest`)."
  },
  {
    "id": "fer202-d16-q30",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q30.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 30",
    "prompt": "In the Next.js App Router, what is the purpose of a layout.js file?",
    "options": [
      {
        "id": "A",
        "text": "To style individual pages"
      },
      {
        "id": "B",
        "text": "To define a shared UI layout (like a header/sidebar) that wraps child pages/routes"
      },
      {
        "id": "C",
        "text": "To configure the database"
      },
      {
        "id": "D",
        "text": "To define API endpoints"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Trong Next.js App Router (thư mục `app/`), `layout.js` định nghĩa bố cục giao diện dùng chung (như Navbar, Sidebar) bao bọc xung quanh các trang con. Layout giữ nguyên state và không re-render khi điều hướng giữa các trang con cùng cấp."
  },
  {
    "id": "fer202-d16-q31",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q31.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 31",
    "prompt": "In a React component, which Tailwind class combination would center content both horizontally and vertically using Flexbox?",
    "options": [
      {
        "id": "A",
        "text": "text-center align-middle"
      },
      {
        "id": "B",
        "text": "grid place-self-center"
      },
      {
        "id": "C",
        "text": "flex items-center justify-center"
      },
      {
        "id": "D",
        "text": "flex flex-col"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trong Tailwind CSS, `flex` kích hoạt flexbox container, `justify-center` căn giữa nội dung theo trục chính (ngang) và `items-center` căn giữa nội dung theo trục phụ (dọc)."
  },
  {
    "id": "fer202-d16-q32",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q32.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 32",
    "prompt": "```jsx\n<Container>\n  <Row>\n    <Col sm={6} md={4}>\n      {/* Placeholder content */}\n    </Col>\n    <Col sm={6} md={8}>\n      {/* Placeholder content */}\n    </Col>\n  </Row>\n</Container>\n```\n\nThe code above creates a grid layout with how many columns?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Thẻ `<Row>` trực tiếp chứa 2 component `<Col>`, do đó layout tạo ra gồm 2 cột. Trên màn hình máy tính (`md`), cột 1 chiếm 4/12 và cột 2 chiếm 8/12 độ rộng hàng."
  },
  {
    "id": "fer202-d16-q33",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q33.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 33",
    "prompt": "One of the main characteristics of React-Bootstrap is \"Component-Based\". What does this imply?",
    "options": [
      {
        "id": "A",
        "text": "React-Bootstrap only provides components for CSS styling"
      },
      {
        "id": "B",
        "text": "It enables developers to create modular and reusable UI elements as React components."
      },
      {
        "id": "C",
        "text": "It requires custom JavaScript to be written for each component."
      },
      {
        "id": "D",
        "text": "Components can only be used once in the application"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Đặc tính \"Component-Based\" của React-Bootstrap nghĩa là các phần tử giao diện Bootstrap được xây dựng lại thành các React component độc lập, mô-đun hóa và có thể tái sử dụng dễ dàng."
  },
  {
    "id": "fer202-d16-q34",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q34.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 34",
    "prompt": "Which of the following is the correct way to handle a button click event in React?",
    "options": [
      {
        "id": "A",
        "text": "<button onClick={handleClick}>Click Me</button>"
      },
      {
        "id": "B",
        "text": "<button handleClick={click}>Click Me</button>"
      },
      {
        "id": "C",
        "text": "<button onClick=\"handleClick()\">Click Me</button>"
      },
      {
        "id": "D",
        "text": "<button onClick={() => handleClick()}>Click Me</button>"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong React, cách tiêu chuẩn nhất là truyền trực tiếp tham chiếu hàm vào prop sự kiện: `<button onClick={handleClick}>Click Me</button>`. Chú ý thuộc tính viết theo camelCase (`onClick`) và không có dấu gọi hàm `()`."
  },
  {
    "id": "fer202-d16-q35",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q35.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 35",
    "prompt": "How would you handle an event in React using an arrow function?",
    "options": [
      {
        "id": "A",
        "text": "<button onClick={this.handleClick()}>Click Me</button>"
      },
      {
        "id": "B",
        "text": "<button onClick={() => this.handleClick()}>Click Me</button>"
      },
      {
        "id": "C",
        "text": "<button onClick={this.handleClick}>Click Me</button>"
      },
      {
        "id": "D",
        "text": "<button onClick={this.handleClick}>Click Me</button>"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Khi sử dụng arrow function trong prop `onClick`, cú pháp chính xác là truyền một anonymous arrow function bọc lấy lời gọi hàm: `<button onClick={() => this.handleClick()}>Click Me</button>`."
  },
  {
    "id": "fer202-d16-q36",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q36.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 36",
    "prompt": "Assess the impact of using inline event handlers in React components. Which statement is true?",
    "options": [
      {
        "id": "A",
        "text": "Inline event handlers improve performance by reducing the number of function calls"
      },
      {
        "id": "B",
        "text": "Inline event handlers can lead to performance issues due to the creation of new functions on each render"
      },
      {
        "id": "C",
        "text": "Inline event handlers are the only way to handle events in React"
      },
      {
        "id": "D",
        "text": "Inline event handlers are more secure than named event handlers"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Khi viết inline handler (như `onClick={() => doSomething()}`), JavaScript sẽ tạo ra một hàm mới trên mỗi lần render. Điều này có thể khiến component con nhận prop bị re-render thừa và gây tốn bộ nhớ/giảm hiệu năng nếu render nhiều lần."
  },
  {
    "id": "fer202-d16-q37",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q37.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 37",
    "prompt": "```javascript\nconst obj = {\n  name: 'Alice',\n  greet: () => {\n    console.log(this.name);\n  }\n};\n\nobj.greet();\n```\n\nWhat will be the output of the following code?",
    "options": [
      {
        "id": "A",
        "text": "Alice"
      },
      {
        "id": "B",
        "text": "undefined"
      },
      {
        "id": "C",
        "text": "this"
      },
      {
        "id": "D",
        "text": "this.name"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** (Bẫy kinh điển về Arrow Function và từ khóa this!)\n\n- Arrow function không có ngữ cảnh `this` riêng mà nó kế thừa `this` từ lexical scope bao quanh nó (ở đây là global scope / module scope). `this` không trỏ vào `obj`, do đó `this.name` là `undefined`."
  },
  {
    "id": "fer202-d16-q38",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q38.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 38",
    "prompt": "To embed a JavaScript expression in JSX, which syntax is used?",
    "options": [
      {
        "id": "A",
        "text": "{{}}"
      },
      {
        "id": "B",
        "text": "{}"
      },
      {
        "id": "C",
        "text": "<% %>"
      },
      {
        "id": "D",
        "text": "$()"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Trong cú pháp JSX của React, một cặp ngoặc nhọn `{}` duy nhất được sử dụng để nhúng biểu thức JavaScript vào bên trong mã HTML."
  },
  {
    "id": "fer202-d16-q39",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q39.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 39",
    "prompt": "Describe the concept of fragments in JSX. Which of the following best explains their purpose?",
    "options": [
      {
        "id": "A",
        "text": "Fragments are used to group multiple elements without adding extra nodes to the DOM."
      },
      {
        "id": "B",
        "text": "Fragments are used to style JSX elements."
      },
      {
        "id": "C",
        "text": "Fragments are used to manage state in React components."
      },
      {
        "id": "D",
        "text": "Fragments are used to handle asynchronous operations in JSX."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- React Fragments (`<React.Fragment>` hoặc `<>...</>`) cho phép nhóm danh sách nhiều phần tử con lại mà không cần tạo thêm các node thẻ bọc thừa (như `<div>`) vào DOM."
  },
  {
    "id": "fer202-d16-q40",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q40.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 40",
    "prompt": "Which hook should you use if you want to navigate and perform a side-effect after navigation?",
    "options": [
      {
        "id": "A",
        "text": "useEffect"
      },
      {
        "id": "B",
        "text": "useNavigate"
      },
      {
        "id": "C",
        "text": "useState"
      },
      {
        "id": "D",
        "text": "useRef"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi cần thực hiện một side-effect (ví dụ: ghi log analytics, scroll trang, fetch dữ liệu) phát sinh sau khi điều hướng xảy ra hoặc theo dõi sự thay đổi của route, ta sử dụng hook `useEffect`."
  },
  {
    "id": "fer202-d16-q41",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q41.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 41",
    "prompt": "What is the main purpose of code splitting in a React application?",
    "options": [
      {
        "id": "A",
        "text": "To make the code easier to read"
      },
      {
        "id": "B",
        "text": "To bundle all components into a single large file"
      },
      {
        "id": "C",
        "text": "To reduce the initial load time by loading parts of the app only when needed"
      },
      {
        "id": "D",
        "text": "To split CSS and JavaScript into separate files"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Mục tiêu chính của Code Splitting (chia tách mã nguồn) là giảm thời gian tải ban đầu (initial load time) bằng cách chia nhỏ bundle và chỉ tải các đoạn code khi người dùng thực sự cần đến."
  },
  {
    "id": "fer202-d16-q42",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q42.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 42",
    "prompt": "Which of the following is the correct way to navigate to the \"/home\" route using the useNavigate hook?",
    "options": [
      {
        "id": "A",
        "text": "const navigate = useRoute(); navigate('/home');"
      },
      {
        "id": "B",
        "text": "const navigate = useHistory(); navigate('/home');"
      },
      {
        "id": "C",
        "text": "const navigate = useNavigate(); navigate('/home');"
      },
      {
        "id": "D",
        "text": "const navigate = useNavigation(); navigate('/home');"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trong React Router v6+, hook `useNavigate` được sử dụng để điều hướng: khai báo `const navigate = useNavigate();` và gọi `navigate('/home');`."
  },
  {
    "id": "fer202-d16-q43",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q43.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 43",
    "prompt": "What does the useNavigate hook return?",
    "options": [
      {
        "id": "A",
        "text": "An object with navigation methods."
      },
      {
        "id": "B",
        "text": "A navigate function that can be used to navigate to a new location"
      },
      {
        "id": "C",
        "text": "A boolean indicating navigation status"
      },
      {
        "id": "D",
        "text": "A string representing the current route."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Hook `useNavigate()` trả về một hàm điều hướng (navigate function) có thể dùng để chuyển đến một vị trí route mới hoặc quay lui/tiến trong history stack."
  },
  {
    "id": "fer202-d16-q44",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q44.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 44",
    "prompt": "In ReactJS with Bootstrap, select the JSX code snippet to create a button with a blue background and white text color.",
    "options": [
      {
        "id": "A",
        "text": "import React from 'react';\nimport { Button } from 'react-bootstrap';\n\nconst MyButton = () => {\n  return (\n    <Button variant=\"primary\" className=\"btn-primary\">\n      My Button\n    </Button>\n  );\n};\n\nexport default MyButton;"
      },
      {
        "id": "B",
        "text": "import React from 'react';\nimport { Button } from 'react-bootstrap';\n\nconst MyButton = () => {\n  return (\n    <Button variant=\"primary\" className=\"bg-primary text-white\">\n      My Button\n    </Button>\n  );\n};\n\nexport default MyButton;"
      },
      {
        "id": "C",
        "text": "import React from 'react';\nimport { Button } from 'react-bootstrap';\n\nconst MyButton = () => {\n  return (\n    <Button variant=\"primary\" className=\"btn btn-primary\">\n      My Button\n    </Button>\n  );\n};\n\nexport default MyButton;"
      },
      {
        "id": "D",
        "text": "import React from 'react';\nimport { Button } from 'react-bootstrap';\n\nconst MyButton = () => {\n  return (\n    <Button variant=\"primary\" className=\"bg-primary\">\n      My Button\n    </Button>\n  );\n};\n\nexport default MyButton;"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Đề bài yêu cầu tạo button có \"blue background and white text color\". Trong Bootstrap utility classes, `bg-primary` tạo màu nền xanh và `text-white` tạo màu chữ trắng. Đoạn mã B khớp chính xác với hai thuộc tính trực quan này."
  },
  {
    "id": "fer202-d16-q45",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q45.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 45",
    "prompt": "Which of the following components can be used to create a slideshow in Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": ".popover"
      },
      {
        "id": "B",
        "text": ".modal"
      },
      {
        "id": "C",
        "text": ".carousel"
      },
      {
        "id": "D",
        "text": ".nav-pills"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trong Bootstrap và React-Bootstrap, `.carousel` (hoặc thẻ `<Carousel>`) là component dùng để tạo slideshow trình chiếu ảnh/nội dung xoay vòng."
  },
  {
    "id": "fer202-d16-q46",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q46.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 46",
    "prompt": "How would you combine fluid and pixel widths behaviors in a grid layout using Bootstrap5?",
    "options": [
      {
        "id": "A",
        "text": "Use .container-fluid for the entire layout"
      },
      {
        "id": "B",
        "text": "Combine .container with .col-fluid"
      },
      {
        "id": "C",
        "text": "Use a fixed-width class with a media query"
      },
      {
        "id": "D",
        "text": "Use .container-md to apply a responsive container at the md breakpoint"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Trong Bootstrap 5, responsive container như `.container-md` có độ rộng tràn viền 100% (fluid) cho đến breakpoint `md` (768px), sau đó nó sẽ có fixed max-width (pixel widths), kết hợp hoàn hảo cả hai hành vi."
  },
  {
    "id": "fer202-d16-q47",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q47.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 47",
    "prompt": "In a controlled <input> element, which two props are typically used together to keep it in sync with React state?",
    "options": [
      {
        "id": "A",
        "text": "defaultValue and ref"
      },
      {
        "id": "B",
        "text": "checked and disabled"
      },
      {
        "id": "C",
        "text": "value and onChange"
      },
      {
        "id": "D",
        "text": "placeholder and id"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Controlled Component trong React được đồng bộ với state thông qua 2 prop cốt lõi: `value` (hiển thị giá trị từ state) và `onChange` (bắt sự kiện thay đổi để cập nhật lại state)."
  },
  {
    "id": "fer202-d16-q48",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q48.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 48",
    "prompt": "What is the main advantage of using React-Bootstrap components instead of copying raw Bootstrap HTML?",
    "options": [
      {
        "id": "A",
        "text": "They allow UI to be organized in React style, with props and clearer component composition."
      },
      {
        "id": "B",
        "text": "They remove the need to understand React components."
      },
      {
        "id": "C",
        "text": "They automatically write all business logic for the application."
      },
      {
        "id": "D",
        "text": "They completely replace JavaScript."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Sử dụng React-Bootstrap cho phép xây dựng UI đúng theo phong cách React với props, quản lý state và cấu trúc component rõ ràng mà không phải chèn mã HTML thuần và thư viện jQuery ngoài."
  },
  {
    "id": "fer202-d16-q49",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q49.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 49",
    "prompt": "In the Next.js Pages Router, how is a route typically created for the path /about?",
    "options": [
      {
        "id": "A",
        "text": "By registering the route manually in a routes.config.js file"
      },
      {
        "id": "B",
        "text": "By calling Router.add('/about')"
      },
      {
        "id": "C",
        "text": "By creating a file named about.js (or about.tsx) inside the pages directory"
      },
      {
        "id": "D",
        "text": "By wrapping a component in a <Route path='/about'> element"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trong Pages Router của Next.js (file-system routing), việc tạo file `pages/about.js` (hoặc `pages/about.tsx`) sẽ tự động ánh xạ và tạo ra route `/about`."
  },
  {
    "id": "fer202-d16-q50",
    "subjectId": "fer202-past",
    "chapterId": "fer-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "imageUrl": "/images/fer202-fa26/q50.webp",
    "imageCaption": "FER202_FA26_FE_163998 - Câu 50",
    "prompt": "When should you consider writing a custom Hook?",
    "options": [
      {
        "id": "A",
        "text": "When multiple components share similar logic, such as tracking online status, handling forms, or fetching data, and you want to reuse that logic."
      },
      {
        "id": "B",
        "text": "When you want to completely replace JSX with CSS."
      },
      {
        "id": "C",
        "text": "When the component has no reusable logic at all."
      },
      {
        "id": "D",
        "text": "When you want to permanently store data in a database without a backend."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Custom Hook là giải pháp lý tưởng trong React để trừu xuất và tái sử dụng logic chứa state (stateful logic) như theo dõi trạng thái mạng, quản lý form, hoặc fetch dữ liệu qua nhiều component."
  }
];
