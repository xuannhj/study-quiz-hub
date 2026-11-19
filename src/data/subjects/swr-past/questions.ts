import type { Question } from '../../../types/study';

export const swrPastQuestions: Question[] = [
  {
    "id": "swr-exam-01-q01",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute).",
    "imageUrl": "/images/swr-fe/fa26/q01.webp",
    "imageCaption": "Đề 01 — Câu 1 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q02",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình.",
    "imageUrl": "/images/swr-fe/fa26/q02.webp",
    "imageCaption": "Đề 01 — Câu 2 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q03",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết.",
    "imageUrl": "/images/swr-fe/fa26/q03.webp",
    "imageCaption": "Đề 01 — Câu 3 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q04",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm.",
    "imageUrl": "/images/swr-fe/fa26/q04.webp",
    "imageCaption": "Đề 01 — Câu 4 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q05",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email).",
    "imageUrl": "/images/swr-fe/fa26/q05.webp",
    "imageCaption": "Đề 01 — Câu 5 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q06",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng.",
    "imageUrl": "/images/swr-fe/fa26/q06.webp",
    "imageCaption": "Đề 01 — Câu 6 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q07",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA).",
    "imageUrl": "/images/swr-fe/fa26/q07.webp",
    "imageCaption": "Đề 01 — Câu 7 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q08",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất.",
    "imageUrl": "/images/swr-fe/fa26/q08.webp",
    "imageCaption": "Đề 01 — Câu 8 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q09",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó.",
    "imageUrl": "/images/swr-fe/fa26/q09.webp",
    "imageCaption": "Đề 01 — Câu 9 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q10",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point.",
    "imageUrl": "/images/swr-fe/fa26/q10.webp",
    "imageCaption": "Đề 01 — Câu 10 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q11",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!",
    "imageUrl": "/images/swr-fe/fa26/q11.webp",
    "imageCaption": "Đề 01 — Câu 11 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q12",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows).",
    "imageUrl": "/images/swr-fe/fa26/q12.webp",
    "imageCaption": "Đề 01 — Câu 12 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q13",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó).",
    "imageUrl": "/images/swr-fe/fa26/q13.webp",
    "imageCaption": "Đề 01 — Câu 13 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q14",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ.",
    "imageUrl": "/images/swr-fe/fa26/q14.webp",
    "imageCaption": "Đề 01 — Câu 14 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q15",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống).",
    "imageUrl": "/images/swr-fe/fa26/q15.webp",
    "imageCaption": "Đề 01 — Câu 15 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q16",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi).",
    "imageUrl": "/images/swr-fe/fa26/q16.webp",
    "imageCaption": "Đề 01 — Câu 16 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q17",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật).",
    "imageUrl": "/images/swr-fe/fa26/q17.webp",
    "imageCaption": "Đề 01 — Câu 17 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q18",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này).",
    "imageUrl": "/images/swr-fe/fa26/q18.webp",
    "imageCaption": "Đề 01 — Câu 18 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q19",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không.",
    "imageUrl": "/images/swr-fe/fa26/q19.webp",
    "imageCaption": "Đề 01 — Câu 19 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q20",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability).",
    "imageUrl": "/images/swr-fe/fa26/q20.webp",
    "imageCaption": "Đề 01 — Câu 20 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q21",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 01 - Câu 21] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí.",
    "imageUrl": "/images/swr-fe/fa26/q21.webp",
    "imageCaption": "Đề 01 — Câu 21 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q22",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 22] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer).",
    "imageUrl": "/images/swr-fe/fa26/q22.webp",
    "imageCaption": "Đề 01 — Câu 22 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q23",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 23] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm.",
    "imageUrl": "/images/swr-fe/fa26/q23.webp",
    "imageCaption": "Đề 01 — Câu 23 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q24",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 01 - Câu 24] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư.",
    "imageUrl": "/images/swr-fe/fa26/q24.webp",
    "imageCaption": "Đề 01 — Câu 24 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q25",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 25] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình.",
    "imageUrl": "/images/swr-fe/fa26/q25.webp",
    "imageCaption": "Đề 01 — Câu 25 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q26",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 26] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất.",
    "imageUrl": "/images/swr-fe/fa26/q26.webp",
    "imageCaption": "Đề 01 — Câu 26 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q27",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 27] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu.",
    "imageUrl": "/images/swr-fe/fa26/q27.webp",
    "imageCaption": "Đề 01 — Câu 27 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q28",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 01 - Câu 28] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển.",
    "imageUrl": "/images/swr-fe/fa26/q28.webp",
    "imageCaption": "Đề 01 — Câu 28 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q29",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 29] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa.",
    "imageUrl": "/images/swr-fe/fa26/q29.webp",
    "imageCaption": "Đề 01 — Câu 29 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q30",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 30] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể.",
    "imageUrl": "/images/swr-fe/fa26/q30.webp",
    "imageCaption": "Đề 01 — Câu 30 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q31",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 31] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute).",
    "imageUrl": "/images/swr-fe/fa26/q31.webp",
    "imageCaption": "Đề 01 — Câu 31 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q32",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 01 - Câu 32] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình.",
    "imageUrl": "/images/swr-fe/fa26/q32.webp",
    "imageCaption": "Đề 01 — Câu 32 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q33",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 01 - Câu 33] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết.",
    "imageUrl": "/images/swr-fe/fa26/q33.webp",
    "imageCaption": "Đề 01 — Câu 33 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q34",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 01 - Câu 34] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm.",
    "imageUrl": "/images/swr-fe/fa26/q34.webp",
    "imageCaption": "Đề 01 — Câu 34 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q35",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 35] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email).",
    "imageUrl": "/images/swr-fe/fa26/q35.webp",
    "imageCaption": "Đề 01 — Câu 35 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q36",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 36] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng.",
    "imageUrl": "/images/swr-fe/fa26/q36.webp",
    "imageCaption": "Đề 01 — Câu 36 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q37",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 37] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA).",
    "imageUrl": "/images/swr-fe/fa26/q37.webp",
    "imageCaption": "Đề 01 — Câu 37 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q38",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 01 - Câu 38] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất.",
    "imageUrl": "/images/swr-fe/fa26/q38.webp",
    "imageCaption": "Đề 01 — Câu 38 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q39",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 39] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó.",
    "imageUrl": "/images/swr-fe/fa26/q39.webp",
    "imageCaption": "Đề 01 — Câu 39 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q40",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 01 - Câu 40] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point.",
    "imageUrl": "/images/swr-fe/fa26/q40.webp",
    "imageCaption": "Đề 01 — Câu 40 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q41",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 01 - Câu 41] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!",
    "imageUrl": "/images/swr-fe/fa26/q41.webp",
    "imageCaption": "Đề 01 — Câu 41 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q42",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 42] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows).",
    "imageUrl": "/images/swr-fe/fa26/q42.webp",
    "imageCaption": "Đề 01 — Câu 42 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q43",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 01 - Câu 43] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó).",
    "imageUrl": "/images/swr-fe/fa26/q43.webp",
    "imageCaption": "Đề 01 — Câu 43 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q44",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 44] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ.",
    "imageUrl": "/images/swr-fe/fa26/q44.webp",
    "imageCaption": "Đề 01 — Câu 44 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q45",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 45] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống).",
    "imageUrl": "/images/swr-fe/fa26/q45.webp",
    "imageCaption": "Đề 01 — Câu 45 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q46",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 46] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi).",
    "imageUrl": "/images/swr-fe/fa26/q46.webp",
    "imageCaption": "Đề 01 — Câu 46 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q47",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 47] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật).",
    "imageUrl": "/images/swr-fe/fa26/q47.webp",
    "imageCaption": "Đề 01 — Câu 47 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q48",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 01 - Câu 48] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này).",
    "imageUrl": "/images/swr-fe/fa26/q48.webp",
    "imageCaption": "Đề 01 — Câu 48 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q49",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 49] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không.",
    "imageUrl": "/images/swr-fe/fa26/q49.webp",
    "imageCaption": "Đề 01 — Câu 49 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q50",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 50] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability).",
    "imageUrl": "/images/swr-fe/fa26/q50.webp",
    "imageCaption": "Đề 01 — Câu 50 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q51",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 01 - Câu 51] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí.",
    "imageUrl": "/images/swr-fe/fa26/q51.webp",
    "imageCaption": "Đề 01 — Câu 51 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q52",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 52] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer).",
    "imageUrl": "/images/swr-fe/fa26/q52.webp",
    "imageCaption": "Đề 01 — Câu 52 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q53",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 53] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm.",
    "imageUrl": "/images/swr-fe/fa26/q53.webp",
    "imageCaption": "Đề 01 — Câu 53 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q54",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 01 - Câu 54] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư.",
    "imageUrl": "/images/swr-fe/fa26/q54.webp",
    "imageCaption": "Đề 01 — Câu 54 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q55",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 55] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình.",
    "imageUrl": "/images/swr-fe/fa26/q55.webp",
    "imageCaption": "Đề 01 — Câu 55 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q56",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 56] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất.",
    "imageUrl": "/images/swr-fe/fa26/q56.webp",
    "imageCaption": "Đề 01 — Câu 56 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q57",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 57] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu.",
    "imageUrl": "/images/swr-fe/fa26/q57.webp",
    "imageCaption": "Đề 01 — Câu 57 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q58",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 01 - Câu 58] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển.",
    "imageUrl": "/images/swr-fe/fa26/q58.webp",
    "imageCaption": "Đề 01 — Câu 58 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q59",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 59] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa.",
    "imageUrl": "/images/swr-fe/fa26/q59.webp",
    "imageCaption": "Đề 01 — Câu 59 (Đề gốc)"
  },
  {
    "id": "swr-exam-01-q60",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 01 - Câu 60] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể.",
    "imageUrl": "/images/swr-fe/fa26/q60.webp",
    "imageCaption": "Đề 01 — Câu 60 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q01",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 02 - Câu 1] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm.",
    "imageUrl": "/images/swr-fe/su26-b5/q01.webp",
    "imageCaption": "Đề 02 — Câu 1 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q02",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 2] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email).",
    "imageUrl": "/images/swr-fe/su26-b5/q02.webp",
    "imageCaption": "Đề 02 — Câu 2 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q03",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 3] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng.",
    "imageUrl": "/images/swr-fe/su26-b5/q03.webp",
    "imageCaption": "Đề 02 — Câu 3 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q04",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 4] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA).",
    "imageUrl": "/images/swr-fe/su26-b5/q04.webp",
    "imageCaption": "Đề 02 — Câu 4 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q05",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 02 - Câu 5] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất.",
    "imageUrl": "/images/swr-fe/su26-b5/q05.webp",
    "imageCaption": "Đề 02 — Câu 5 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q06",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 6] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó.",
    "imageUrl": "/images/swr-fe/su26-b5/q06.webp",
    "imageCaption": "Đề 02 — Câu 6 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q07",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 02 - Câu 7] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point.",
    "imageUrl": "/images/swr-fe/su26-b5/q07.webp",
    "imageCaption": "Đề 02 — Câu 7 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q08",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 02 - Câu 8] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!",
    "imageUrl": "/images/swr-fe/su26-b5/q08.webp",
    "imageCaption": "Đề 02 — Câu 8 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q09",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 9] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows).",
    "imageUrl": "/images/swr-fe/su26-b5/q09.webp",
    "imageCaption": "Đề 02 — Câu 9 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q10",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 02 - Câu 10] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó).",
    "imageUrl": "/images/swr-fe/su26-b5/q10.webp",
    "imageCaption": "Đề 02 — Câu 10 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q11",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 11] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ.",
    "imageUrl": "/images/swr-fe/su26-b5/q11.webp",
    "imageCaption": "Đề 02 — Câu 11 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q12",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 12] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống).",
    "imageUrl": "/images/swr-fe/su26-b5/q12.webp",
    "imageCaption": "Đề 02 — Câu 12 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q13",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 13] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi).",
    "imageUrl": "/images/swr-fe/su26-b5/q13.webp",
    "imageCaption": "Đề 02 — Câu 13 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q14",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 14] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật).",
    "imageUrl": "/images/swr-fe/su26-b5/q14.webp",
    "imageCaption": "Đề 02 — Câu 14 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q15",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 02 - Câu 15] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này).",
    "imageUrl": "/images/swr-fe/su26-b5/q15.webp",
    "imageCaption": "Đề 02 — Câu 15 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q16",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 16] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không.",
    "imageUrl": "/images/swr-fe/su26-b5/q16.webp",
    "imageCaption": "Đề 02 — Câu 16 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q17",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 17] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability).",
    "imageUrl": "/images/swr-fe/su26-b5/q17.webp",
    "imageCaption": "Đề 02 — Câu 17 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q18",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 02 - Câu 18] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí.",
    "imageUrl": "/images/swr-fe/su26-b5/q18.webp",
    "imageCaption": "Đề 02 — Câu 18 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q19",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 19] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer).",
    "imageUrl": "/images/swr-fe/su26-b5/q19.webp",
    "imageCaption": "Đề 02 — Câu 19 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q20",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 20] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm.",
    "imageUrl": "/images/swr-fe/su26-b5/q20.webp",
    "imageCaption": "Đề 02 — Câu 20 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q21",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 02 - Câu 21] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư.",
    "imageUrl": "/images/swr-fe/su26-b5/q21.webp",
    "imageCaption": "Đề 02 — Câu 21 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q22",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 22] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình.",
    "imageUrl": "/images/swr-fe/su26-b5/q22.webp",
    "imageCaption": "Đề 02 — Câu 22 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q23",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 23] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất.",
    "imageUrl": "/images/swr-fe/su26-b5/q23.webp",
    "imageCaption": "Đề 02 — Câu 23 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q24",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 24] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu.",
    "imageUrl": "/images/swr-fe/su26-b5/q24.webp",
    "imageCaption": "Đề 02 — Câu 24 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q25",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 02 - Câu 25] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển.",
    "imageUrl": "/images/swr-fe/su26-b5/q25.webp",
    "imageCaption": "Đề 02 — Câu 25 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q26",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 26] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa.",
    "imageUrl": "/images/swr-fe/su26-b5/q26.webp",
    "imageCaption": "Đề 02 — Câu 26 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q27",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 27] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể.",
    "imageUrl": "/images/swr-fe/su26-b5/q27.webp",
    "imageCaption": "Đề 02 — Câu 27 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q28",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 28] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute).",
    "imageUrl": "/images/swr-fe/su26-b5/q28.webp",
    "imageCaption": "Đề 02 — Câu 28 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q29",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 02 - Câu 29] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình.",
    "imageUrl": "/images/swr-fe/su26-b5/q29.webp",
    "imageCaption": "Đề 02 — Câu 29 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q30",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 02 - Câu 30] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết.",
    "imageUrl": "/images/swr-fe/su26-b5/q30.webp",
    "imageCaption": "Đề 02 — Câu 30 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q31",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 02 - Câu 31] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm.",
    "imageUrl": "/images/swr-fe/su26-b5/q31.webp",
    "imageCaption": "Đề 02 — Câu 31 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q32",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 32] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email).",
    "imageUrl": "/images/swr-fe/su26-b5/q32.webp",
    "imageCaption": "Đề 02 — Câu 32 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q33",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 33] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng.",
    "imageUrl": "/images/swr-fe/su26-b5/q33.webp",
    "imageCaption": "Đề 02 — Câu 33 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q34",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 34] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA).",
    "imageUrl": "/images/swr-fe/su26-b5/q34.webp",
    "imageCaption": "Đề 02 — Câu 34 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q35",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 02 - Câu 35] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất.",
    "imageUrl": "/images/swr-fe/su26-b5/q35.webp",
    "imageCaption": "Đề 02 — Câu 35 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q36",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 36] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó.",
    "imageUrl": "/images/swr-fe/su26-b5/q36.webp",
    "imageCaption": "Đề 02 — Câu 36 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q37",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 02 - Câu 37] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point.",
    "imageUrl": "/images/swr-fe/su26-b5/q37.webp",
    "imageCaption": "Đề 02 — Câu 37 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q38",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 02 - Câu 38] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!",
    "imageUrl": "/images/swr-fe/su26-b5/q38.webp",
    "imageCaption": "Đề 02 — Câu 38 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q39",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 39] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows).",
    "imageUrl": "/images/swr-fe/su26-b5/q39.webp",
    "imageCaption": "Đề 02 — Câu 39 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q40",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 02 - Câu 40] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó).",
    "imageUrl": "/images/swr-fe/su26-b5/q40.webp",
    "imageCaption": "Đề 02 — Câu 40 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q41",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 41] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ.",
    "imageUrl": "/images/swr-fe/su26-b5/q41.webp",
    "imageCaption": "Đề 02 — Câu 41 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q42",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 42] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống).",
    "imageUrl": "/images/swr-fe/su26-b5/q42.webp",
    "imageCaption": "Đề 02 — Câu 42 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q43",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 43] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi).",
    "imageUrl": "/images/swr-fe/su26-b5/q43.webp",
    "imageCaption": "Đề 02 — Câu 43 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q44",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 44] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật).",
    "imageUrl": "/images/swr-fe/su26-b5/q44.webp",
    "imageCaption": "Đề 02 — Câu 44 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q45",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 02 - Câu 45] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này).",
    "imageUrl": "/images/swr-fe/su26-b5/q45.webp",
    "imageCaption": "Đề 02 — Câu 45 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q46",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 46] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không.",
    "imageUrl": "/images/swr-fe/su26-b5/q46.webp",
    "imageCaption": "Đề 02 — Câu 46 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q47",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 47] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability).",
    "imageUrl": "/images/swr-fe/su26-b5/q47.webp",
    "imageCaption": "Đề 02 — Câu 47 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q48",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 02 - Câu 48] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí.",
    "imageUrl": "/images/swr-fe/su26-b5/q48.webp",
    "imageCaption": "Đề 02 — Câu 48 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q49",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 49] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer).",
    "imageUrl": "/images/swr-fe/su26-b5/q49.webp",
    "imageCaption": "Đề 02 — Câu 49 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q50",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 50] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm.",
    "imageUrl": "/images/swr-fe/su26-b5/q50.webp",
    "imageCaption": "Đề 02 — Câu 50 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q51",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 02 - Câu 51] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư.",
    "imageUrl": "/images/swr-fe/su26-b5/q51.webp",
    "imageCaption": "Đề 02 — Câu 51 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q52",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 52] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình.",
    "imageUrl": "/images/swr-fe/su26-b5/q52.webp",
    "imageCaption": "Đề 02 — Câu 52 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q53",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 53] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất.",
    "imageUrl": "/images/swr-fe/su26-b5/q53.webp",
    "imageCaption": "Đề 02 — Câu 53 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q54",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 54] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu.",
    "imageUrl": "/images/swr-fe/su26-b5/q54.webp",
    "imageCaption": "Đề 02 — Câu 54 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q55",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 02 - Câu 55] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển.",
    "imageUrl": "/images/swr-fe/su26-b5/q55.webp",
    "imageCaption": "Đề 02 — Câu 55 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q56",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 56] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa.",
    "imageUrl": "/images/swr-fe/su26-b5/q56.webp",
    "imageCaption": "Đề 02 — Câu 56 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q57",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 57] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể.",
    "imageUrl": "/images/swr-fe/su26-b5/q57.webp",
    "imageCaption": "Đề 02 — Câu 57 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q58",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 02 - Câu 58] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute).",
    "imageUrl": "/images/swr-fe/su26-b5/q58.webp",
    "imageCaption": "Đề 02 — Câu 58 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q59",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 02 - Câu 59] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình.",
    "imageUrl": "/images/swr-fe/su26-b5/q59.webp",
    "imageCaption": "Đề 02 — Câu 59 (Đề gốc)"
  },
  {
    "id": "swr-exam-02-q60",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 02 - Câu 60] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết.",
    "imageUrl": "/images/swr-fe/su26-b5/q60.webp",
    "imageCaption": "Đề 02 — Câu 60 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q01",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 03 - Câu 1] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất.",
    "imageUrl": "/images/swr-fe/su26-re/q01.webp",
    "imageCaption": "Đề 03 — Câu 1 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q02",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 2] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó.",
    "imageUrl": "/images/swr-fe/su26-re/q02.webp",
    "imageCaption": "Đề 03 — Câu 2 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q03",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 03 - Câu 3] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point.",
    "imageUrl": "/images/swr-fe/su26-re/q03.webp",
    "imageCaption": "Đề 03 — Câu 3 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q04",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 03 - Câu 4] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!",
    "imageUrl": "/images/swr-fe/su26-re/q04.webp",
    "imageCaption": "Đề 03 — Câu 4 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q05",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 5] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows).",
    "imageUrl": "/images/swr-fe/su26-re/q05.webp",
    "imageCaption": "Đề 03 — Câu 5 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q06",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 03 - Câu 6] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó).",
    "imageUrl": "/images/swr-fe/su26-re/q06.webp",
    "imageCaption": "Đề 03 — Câu 6 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q07",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 7] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ.",
    "imageUrl": "/images/swr-fe/su26-re/q07.webp",
    "imageCaption": "Đề 03 — Câu 7 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q08",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 8] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống).",
    "imageUrl": "/images/swr-fe/su26-re/q08.webp",
    "imageCaption": "Đề 03 — Câu 8 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q09",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 9] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi).",
    "imageUrl": "/images/swr-fe/su26-re/q09.webp",
    "imageCaption": "Đề 03 — Câu 9 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q10",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 10] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật).",
    "imageUrl": "/images/swr-fe/su26-re/q10.webp",
    "imageCaption": "Đề 03 — Câu 10 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q11",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 03 - Câu 11] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này).",
    "imageUrl": "/images/swr-fe/su26-re/q11.webp",
    "imageCaption": "Đề 03 — Câu 11 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q12",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 12] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không.",
    "imageUrl": "/images/swr-fe/su26-re/q12.webp",
    "imageCaption": "Đề 03 — Câu 12 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q13",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 13] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability).",
    "imageUrl": "/images/swr-fe/su26-re/q13.webp",
    "imageCaption": "Đề 03 — Câu 13 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q14",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 03 - Câu 14] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí.",
    "imageUrl": "/images/swr-fe/su26-re/q14.webp",
    "imageCaption": "Đề 03 — Câu 14 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q15",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 15] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer).",
    "imageUrl": "/images/swr-fe/su26-re/q15.webp",
    "imageCaption": "Đề 03 — Câu 15 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q16",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 16] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm.",
    "imageUrl": "/images/swr-fe/su26-re/q16.webp",
    "imageCaption": "Đề 03 — Câu 16 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q17",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 03 - Câu 17] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư.",
    "imageUrl": "/images/swr-fe/su26-re/q17.webp",
    "imageCaption": "Đề 03 — Câu 17 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q18",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 18] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình.",
    "imageUrl": "/images/swr-fe/su26-re/q18.webp",
    "imageCaption": "Đề 03 — Câu 18 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q19",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 19] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất.",
    "imageUrl": "/images/swr-fe/su26-re/q19.webp",
    "imageCaption": "Đề 03 — Câu 19 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q20",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 20] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu.",
    "imageUrl": "/images/swr-fe/su26-re/q20.webp",
    "imageCaption": "Đề 03 — Câu 20 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q21",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 03 - Câu 21] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển.",
    "imageUrl": "/images/swr-fe/su26-re/q21.webp",
    "imageCaption": "Đề 03 — Câu 21 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q22",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 22] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa.",
    "imageUrl": "/images/swr-fe/su26-re/q22.webp",
    "imageCaption": "Đề 03 — Câu 22 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q23",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 23] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể.",
    "imageUrl": "/images/swr-fe/su26-re/q23.webp",
    "imageCaption": "Đề 03 — Câu 23 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q24",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 24] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute).",
    "imageUrl": "/images/swr-fe/su26-re/q24.webp",
    "imageCaption": "Đề 03 — Câu 24 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q25",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 03 - Câu 25] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình.",
    "imageUrl": "/images/swr-fe/su26-re/q25.webp",
    "imageCaption": "Đề 03 — Câu 25 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q26",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 03 - Câu 26] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết.",
    "imageUrl": "/images/swr-fe/su26-re/q26.webp",
    "imageCaption": "Đề 03 — Câu 26 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q27",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 03 - Câu 27] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm.",
    "imageUrl": "/images/swr-fe/su26-re/q27.webp",
    "imageCaption": "Đề 03 — Câu 27 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q28",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 28] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email).",
    "imageUrl": "/images/swr-fe/su26-re/q28.webp",
    "imageCaption": "Đề 03 — Câu 28 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q29",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 29] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng.",
    "imageUrl": "/images/swr-fe/su26-re/q29.webp",
    "imageCaption": "Đề 03 — Câu 29 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q30",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 30] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA).",
    "imageUrl": "/images/swr-fe/su26-re/q30.webp",
    "imageCaption": "Đề 03 — Câu 30 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q31",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 03 - Câu 31] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất.",
    "imageUrl": "/images/swr-fe/su26-re/q31.webp",
    "imageCaption": "Đề 03 — Câu 31 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q32",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 32] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó.",
    "imageUrl": "/images/swr-fe/su26-re/q32.webp",
    "imageCaption": "Đề 03 — Câu 32 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q33",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 03 - Câu 33] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point.",
    "imageUrl": "/images/swr-fe/su26-re/q33.webp",
    "imageCaption": "Đề 03 — Câu 33 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q34",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 03 - Câu 34] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!",
    "imageUrl": "/images/swr-fe/su26-re/q34.webp",
    "imageCaption": "Đề 03 — Câu 34 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q35",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 35] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows).",
    "imageUrl": "/images/swr-fe/su26-re/q35.webp",
    "imageCaption": "Đề 03 — Câu 35 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q36",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 03 - Câu 36] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó).",
    "imageUrl": "/images/swr-fe/su26-re/q36.webp",
    "imageCaption": "Đề 03 — Câu 36 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q37",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 37] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ.",
    "imageUrl": "/images/swr-fe/su26-re/q37.webp",
    "imageCaption": "Đề 03 — Câu 37 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q38",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 38] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống).",
    "imageUrl": "/images/swr-fe/su26-re/q38.webp",
    "imageCaption": "Đề 03 — Câu 38 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q39",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 39] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi).",
    "imageUrl": "/images/swr-fe/su26-re/q39.webp",
    "imageCaption": "Đề 03 — Câu 39 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q40",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 40] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật).",
    "imageUrl": "/images/swr-fe/su26-re/q40.webp",
    "imageCaption": "Đề 03 — Câu 40 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q41",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 03 - Câu 41] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này).",
    "imageUrl": "/images/swr-fe/su26-re/q41.webp",
    "imageCaption": "Đề 03 — Câu 41 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q42",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 42] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không.",
    "imageUrl": "/images/swr-fe/su26-re/q42.webp",
    "imageCaption": "Đề 03 — Câu 42 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q43",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 43] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability).",
    "imageUrl": "/images/swr-fe/su26-re/q43.webp",
    "imageCaption": "Đề 03 — Câu 43 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q44",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 03 - Câu 44] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí.",
    "imageUrl": "/images/swr-fe/su26-re/q44.webp",
    "imageCaption": "Đề 03 — Câu 44 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q45",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 45] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer).",
    "imageUrl": "/images/swr-fe/su26-re/q45.webp",
    "imageCaption": "Đề 03 — Câu 45 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q46",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 46] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm.",
    "imageUrl": "/images/swr-fe/su26-re/q46.webp",
    "imageCaption": "Đề 03 — Câu 46 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q47",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 03 - Câu 47] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư.",
    "imageUrl": "/images/swr-fe/su26-re/q47.webp",
    "imageCaption": "Đề 03 — Câu 47 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q48",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 48] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình.",
    "imageUrl": "/images/swr-fe/su26-re/q48.webp",
    "imageCaption": "Đề 03 — Câu 48 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q49",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 49] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất.",
    "imageUrl": "/images/swr-fe/su26-re/q49.webp",
    "imageCaption": "Đề 03 — Câu 49 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q50",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 50] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu.",
    "imageUrl": "/images/swr-fe/su26-re/q50.webp",
    "imageCaption": "Đề 03 — Câu 50 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q51",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 03 - Câu 51] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển.",
    "imageUrl": "/images/swr-fe/su26-re/q51.webp",
    "imageCaption": "Đề 03 — Câu 51 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q52",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 52] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa.",
    "imageUrl": "/images/swr-fe/su26-re/q52.webp",
    "imageCaption": "Đề 03 — Câu 52 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q53",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 53] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể.",
    "imageUrl": "/images/swr-fe/su26-re/q53.webp",
    "imageCaption": "Đề 03 — Câu 53 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q54",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 54] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute).",
    "imageUrl": "/images/swr-fe/su26-re/q54.webp",
    "imageCaption": "Đề 03 — Câu 54 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q55",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 03 - Câu 55] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình.",
    "imageUrl": "/images/swr-fe/su26-re/q55.webp",
    "imageCaption": "Đề 03 — Câu 55 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q56",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 03 - Câu 56] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết.",
    "imageUrl": "/images/swr-fe/su26-re/q56.webp",
    "imageCaption": "Đề 03 — Câu 56 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q57",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 03 - Câu 57] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm.",
    "imageUrl": "/images/swr-fe/su26-re/q57.webp",
    "imageCaption": "Đề 03 — Câu 57 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q58",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 58] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email).",
    "imageUrl": "/images/swr-fe/su26-re/q58.webp",
    "imageCaption": "Đề 03 — Câu 58 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q59",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 59] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng.",
    "imageUrl": "/images/swr-fe/su26-re/q59.webp",
    "imageCaption": "Đề 03 — Câu 59 (Đề gốc)"
  },
  {
    "id": "swr-exam-03-q60",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 03 - Câu 60] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA).",
    "imageUrl": "/images/swr-fe/su26-re/q60.webp",
    "imageCaption": "Đề 03 — Câu 60 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q01",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 1] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows).",
    "imageUrl": "/images/swr-fe/su26/q01.webp",
    "imageCaption": "Đề 04 — Câu 1 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q02",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 04 - Câu 2] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó).",
    "imageUrl": "/images/swr-fe/su26/q02.webp",
    "imageCaption": "Đề 04 — Câu 2 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q03",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 3] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ.",
    "imageUrl": "/images/swr-fe/su26/q03.webp",
    "imageCaption": "Đề 04 — Câu 3 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q04",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 4] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống).",
    "imageUrl": "/images/swr-fe/su26/q04.webp",
    "imageCaption": "Đề 04 — Câu 4 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q05",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 5] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi).",
    "imageUrl": "/images/swr-fe/su26/q05.webp",
    "imageCaption": "Đề 04 — Câu 5 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q06",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 6] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật).",
    "imageUrl": "/images/swr-fe/su26/q06.webp",
    "imageCaption": "Đề 04 — Câu 6 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q07",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 04 - Câu 7] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này).",
    "imageUrl": "/images/swr-fe/su26/q07.webp",
    "imageCaption": "Đề 04 — Câu 7 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q08",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 8] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không.",
    "imageUrl": "/images/swr-fe/su26/q08.webp",
    "imageCaption": "Đề 04 — Câu 8 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q09",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 9] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability).",
    "imageUrl": "/images/swr-fe/su26/q09.webp",
    "imageCaption": "Đề 04 — Câu 9 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q10",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 04 - Câu 10] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí.",
    "imageUrl": "/images/swr-fe/su26/q10.webp",
    "imageCaption": "Đề 04 — Câu 10 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q11",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 11] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer).",
    "imageUrl": "/images/swr-fe/su26/q11.webp",
    "imageCaption": "Đề 04 — Câu 11 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q12",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 12] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm.",
    "imageUrl": "/images/swr-fe/su26/q12.webp",
    "imageCaption": "Đề 04 — Câu 12 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q13",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 04 - Câu 13] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư.",
    "imageUrl": "/images/swr-fe/su26/q13.webp",
    "imageCaption": "Đề 04 — Câu 13 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q14",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 14] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình.",
    "imageUrl": "/images/swr-fe/su26/q14.webp",
    "imageCaption": "Đề 04 — Câu 14 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q15",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 15] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất.",
    "imageUrl": "/images/swr-fe/su26/q15.webp",
    "imageCaption": "Đề 04 — Câu 15 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q16",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 16] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu.",
    "imageUrl": "/images/swr-fe/su26/q16.webp",
    "imageCaption": "Đề 04 — Câu 16 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q17",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 04 - Câu 17] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển.",
    "imageUrl": "/images/swr-fe/su26/q17.webp",
    "imageCaption": "Đề 04 — Câu 17 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q18",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 18] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa.",
    "imageUrl": "/images/swr-fe/su26/q18.webp",
    "imageCaption": "Đề 04 — Câu 18 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q19",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 19] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể.",
    "imageUrl": "/images/swr-fe/su26/q19.webp",
    "imageCaption": "Đề 04 — Câu 19 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q20",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 20] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute).",
    "imageUrl": "/images/swr-fe/su26/q20.webp",
    "imageCaption": "Đề 04 — Câu 20 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q21",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 04 - Câu 21] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình.",
    "imageUrl": "/images/swr-fe/su26/q21.webp",
    "imageCaption": "Đề 04 — Câu 21 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q22",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 04 - Câu 22] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết.",
    "imageUrl": "/images/swr-fe/su26/q22.webp",
    "imageCaption": "Đề 04 — Câu 22 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q23",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 04 - Câu 23] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm.",
    "imageUrl": "/images/swr-fe/su26/q23.webp",
    "imageCaption": "Đề 04 — Câu 23 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q24",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 24] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email).",
    "imageUrl": "/images/swr-fe/su26/q24.webp",
    "imageCaption": "Đề 04 — Câu 24 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q25",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 25] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng.",
    "imageUrl": "/images/swr-fe/su26/q25.webp",
    "imageCaption": "Đề 04 — Câu 25 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q26",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 26] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA).",
    "imageUrl": "/images/swr-fe/su26/q26.webp",
    "imageCaption": "Đề 04 — Câu 26 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q27",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 04 - Câu 27] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất.",
    "imageUrl": "/images/swr-fe/su26/q27.webp",
    "imageCaption": "Đề 04 — Câu 27 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q28",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 28] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó.",
    "imageUrl": "/images/swr-fe/su26/q28.webp",
    "imageCaption": "Đề 04 — Câu 28 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q29",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 04 - Câu 29] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point.",
    "imageUrl": "/images/swr-fe/su26/q29.webp",
    "imageCaption": "Đề 04 — Câu 29 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q30",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 04 - Câu 30] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!",
    "imageUrl": "/images/swr-fe/su26/q30.webp",
    "imageCaption": "Đề 04 — Câu 30 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q31",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 31] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows).",
    "imageUrl": "/images/swr-fe/su26/q31.webp",
    "imageCaption": "Đề 04 — Câu 31 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q32",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 04 - Câu 32] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó).",
    "imageUrl": "/images/swr-fe/su26/q32.webp",
    "imageCaption": "Đề 04 — Câu 32 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q33",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 33] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ.",
    "imageUrl": "/images/swr-fe/su26/q33.webp",
    "imageCaption": "Đề 04 — Câu 33 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q34",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 34] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống).",
    "imageUrl": "/images/swr-fe/su26/q34.webp",
    "imageCaption": "Đề 04 — Câu 34 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q35",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 35] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi).",
    "imageUrl": "/images/swr-fe/su26/q35.webp",
    "imageCaption": "Đề 04 — Câu 35 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q36",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 36] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật).",
    "imageUrl": "/images/swr-fe/su26/q36.webp",
    "imageCaption": "Đề 04 — Câu 36 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q37",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 04 - Câu 37] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này).",
    "imageUrl": "/images/swr-fe/su26/q37.webp",
    "imageCaption": "Đề 04 — Câu 37 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q38",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 38] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không.",
    "imageUrl": "/images/swr-fe/su26/q38.webp",
    "imageCaption": "Đề 04 — Câu 38 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q39",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 39] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability).",
    "imageUrl": "/images/swr-fe/su26/q39.webp",
    "imageCaption": "Đề 04 — Câu 39 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q40",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 04 - Câu 40] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí.",
    "imageUrl": "/images/swr-fe/su26/q40.webp",
    "imageCaption": "Đề 04 — Câu 40 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q41",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 41] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer).",
    "imageUrl": "/images/swr-fe/su26/q41.webp",
    "imageCaption": "Đề 04 — Câu 41 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q42",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 42] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm.",
    "imageUrl": "/images/swr-fe/su26/q42.webp",
    "imageCaption": "Đề 04 — Câu 42 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q43",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 04 - Câu 43] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư.",
    "imageUrl": "/images/swr-fe/su26/q43.webp",
    "imageCaption": "Đề 04 — Câu 43 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q44",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 44] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình.",
    "imageUrl": "/images/swr-fe/su26/q44.webp",
    "imageCaption": "Đề 04 — Câu 44 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q45",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 45] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất.",
    "imageUrl": "/images/swr-fe/su26/q45.webp",
    "imageCaption": "Đề 04 — Câu 45 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q46",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 46] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu.",
    "imageUrl": "/images/swr-fe/su26/q46.webp",
    "imageCaption": "Đề 04 — Câu 46 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q47",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 04 - Câu 47] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển.",
    "imageUrl": "/images/swr-fe/su26/q47.webp",
    "imageCaption": "Đề 04 — Câu 47 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q48",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 48] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa.",
    "imageUrl": "/images/swr-fe/su26/q48.webp",
    "imageCaption": "Đề 04 — Câu 48 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q49",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 49] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể.",
    "imageUrl": "/images/swr-fe/su26/q49.webp",
    "imageCaption": "Đề 04 — Câu 49 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q50",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 50] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute).",
    "imageUrl": "/images/swr-fe/su26/q50.webp",
    "imageCaption": "Đề 04 — Câu 50 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q51",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 04 - Câu 51] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình.",
    "imageUrl": "/images/swr-fe/su26/q51.webp",
    "imageCaption": "Đề 04 — Câu 51 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q52",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 04 - Câu 52] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết.",
    "imageUrl": "/images/swr-fe/su26/q52.webp",
    "imageCaption": "Đề 04 — Câu 52 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q53",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 04 - Câu 53] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm.",
    "imageUrl": "/images/swr-fe/su26/q53.webp",
    "imageCaption": "Đề 04 — Câu 53 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q54",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 54] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email).",
    "imageUrl": "/images/swr-fe/su26/q54.webp",
    "imageCaption": "Đề 04 — Câu 54 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q55",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 55] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng.",
    "imageUrl": "/images/swr-fe/su26/q55.webp",
    "imageCaption": "Đề 04 — Câu 55 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q56",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 56] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA).",
    "imageUrl": "/images/swr-fe/su26/q56.webp",
    "imageCaption": "Đề 04 — Câu 56 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q57",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 04 - Câu 57] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất.",
    "imageUrl": "/images/swr-fe/su26/q57.webp",
    "imageCaption": "Đề 04 — Câu 57 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q58",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 04 - Câu 58] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó.",
    "imageUrl": "/images/swr-fe/su26/q58.webp",
    "imageCaption": "Đề 04 — Câu 58 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q59",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 04 - Câu 59] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point.",
    "imageUrl": "/images/swr-fe/su26/q59.webp",
    "imageCaption": "Đề 04 — Câu 59 (Đề gốc)"
  },
  {
    "id": "swr-exam-04-q60",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 04 - Câu 60] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!",
    "imageUrl": "/images/swr-fe/su26/q60.webp",
    "imageCaption": "Đề 04 — Câu 60 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q01",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 1] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q01.webp",
    "imageCaption": "Đề 05 — Câu 1 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q02",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 2] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q02.webp",
    "imageCaption": "Đề 05 — Câu 2 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q03",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 05 - Câu 3] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q03.webp",
    "imageCaption": "Đề 05 — Câu 3 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q04",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 4] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q04.webp",
    "imageCaption": "Đề 05 — Câu 4 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q05",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 5] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q05.webp",
    "imageCaption": "Đề 05 — Câu 5 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q06",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 05 - Câu 6] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q06.webp",
    "imageCaption": "Đề 05 — Câu 6 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q07",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 7] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q07.webp",
    "imageCaption": "Đề 05 — Câu 7 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q08",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 8] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q08.webp",
    "imageCaption": "Đề 05 — Câu 8 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q09",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 05 - Câu 9] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q09.webp",
    "imageCaption": "Đề 05 — Câu 9 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q10",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 10] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q10.webp",
    "imageCaption": "Đề 05 — Câu 10 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q11",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 11] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q11.webp",
    "imageCaption": "Đề 05 — Câu 11 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q12",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 12] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q12.webp",
    "imageCaption": "Đề 05 — Câu 12 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q13",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 05 - Câu 13] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q13.webp",
    "imageCaption": "Đề 05 — Câu 13 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q14",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 14] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q14.webp",
    "imageCaption": "Đề 05 — Câu 14 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q15",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 15] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q15.webp",
    "imageCaption": "Đề 05 — Câu 15 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q16",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 16] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q16.webp",
    "imageCaption": "Đề 05 — Câu 16 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q17",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 05 - Câu 17] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q17.webp",
    "imageCaption": "Đề 05 — Câu 17 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q18",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 05 - Câu 18] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q18.webp",
    "imageCaption": "Đề 05 — Câu 18 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q19",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 05 - Câu 19] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q19.webp",
    "imageCaption": "Đề 05 — Câu 19 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q20",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 20] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q20.webp",
    "imageCaption": "Đề 05 — Câu 20 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q21",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 21] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q21.webp",
    "imageCaption": "Đề 05 — Câu 21 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q22",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 22] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q22.webp",
    "imageCaption": "Đề 05 — Câu 22 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q23",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 05 - Câu 23] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q23.webp",
    "imageCaption": "Đề 05 — Câu 23 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q24",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 24] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q24.webp",
    "imageCaption": "Đề 05 — Câu 24 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q25",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 05 - Câu 25] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q25.webp",
    "imageCaption": "Đề 05 — Câu 25 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q26",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 05 - Câu 26] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q26.webp",
    "imageCaption": "Đề 05 — Câu 26 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q27",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 27] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q27.webp",
    "imageCaption": "Đề 05 — Câu 27 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q28",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 05 - Câu 28] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q28.webp",
    "imageCaption": "Đề 05 — Câu 28 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q29",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 29] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q29.webp",
    "imageCaption": "Đề 05 — Câu 29 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q30",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 30] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q30.webp",
    "imageCaption": "Đề 05 — Câu 30 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q31",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 31] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q31.webp",
    "imageCaption": "Đề 05 — Câu 31 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q32",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 32] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q32.webp",
    "imageCaption": "Đề 05 — Câu 32 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q33",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 05 - Câu 33] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q33.webp",
    "imageCaption": "Đề 05 — Câu 33 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q34",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 34] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q34.webp",
    "imageCaption": "Đề 05 — Câu 34 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q35",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 35] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q35.webp",
    "imageCaption": "Đề 05 — Câu 35 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q36",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 05 - Câu 36] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q36.webp",
    "imageCaption": "Đề 05 — Câu 36 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q37",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 37] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q37.webp",
    "imageCaption": "Đề 05 — Câu 37 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q38",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 38] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q38.webp",
    "imageCaption": "Đề 05 — Câu 38 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q39",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 05 - Câu 39] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q39.webp",
    "imageCaption": "Đề 05 — Câu 39 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q40",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 40] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q40.webp",
    "imageCaption": "Đề 05 — Câu 40 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q41",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 41] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q41.webp",
    "imageCaption": "Đề 05 — Câu 41 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q42",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 42] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q42.webp",
    "imageCaption": "Đề 05 — Câu 42 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q43",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 05 - Câu 43] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q43.webp",
    "imageCaption": "Đề 05 — Câu 43 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q44",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 44] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q44.webp",
    "imageCaption": "Đề 05 — Câu 44 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q45",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 45] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q45.webp",
    "imageCaption": "Đề 05 — Câu 45 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q46",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 46] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q46.webp",
    "imageCaption": "Đề 05 — Câu 46 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q47",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 05 - Câu 47] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q47.webp",
    "imageCaption": "Đề 05 — Câu 47 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q48",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 05 - Câu 48] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q48.webp",
    "imageCaption": "Đề 05 — Câu 48 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q49",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 05 - Câu 49] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q49.webp",
    "imageCaption": "Đề 05 — Câu 49 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q50",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 50] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q50.webp",
    "imageCaption": "Đề 05 — Câu 50 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q51",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 51] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q51.webp",
    "imageCaption": "Đề 05 — Câu 51 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q52",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 52] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q52.webp",
    "imageCaption": "Đề 05 — Câu 52 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q53",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 05 - Câu 53] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q53.webp",
    "imageCaption": "Đề 05 — Câu 53 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q54",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 54] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q54.webp",
    "imageCaption": "Đề 05 — Câu 54 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q55",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 05 - Câu 55] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q55.webp",
    "imageCaption": "Đề 05 — Câu 55 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q56",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 05 - Câu 56] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q56.webp",
    "imageCaption": "Đề 05 — Câu 56 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q57",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 57] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q57.webp",
    "imageCaption": "Đề 05 — Câu 57 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q58",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 05 - Câu 58] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q58.webp",
    "imageCaption": "Đề 05 — Câu 58 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q59",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 59] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ.",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q59.webp",
    "imageCaption": "Đề 05 — Câu 59 (Đề gốc)"
  },
  {
    "id": "swr-exam-05-q60",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 05 - Câu 60] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống).",
    "imageUrl": "/images/swr-fe/sp26-b5-re/q60.webp",
    "imageCaption": "Đề 05 — Câu 60 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q01",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 1] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability).",
    "imageUrl": "/images/swr-fe/sp26-re/q01.webp",
    "imageCaption": "Đề 06 — Câu 1 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q02",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 06 - Câu 2] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí.",
    "imageUrl": "/images/swr-fe/sp26-re/q02.webp",
    "imageCaption": "Đề 06 — Câu 2 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q03",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 3] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer).",
    "imageUrl": "/images/swr-fe/sp26-re/q03.webp",
    "imageCaption": "Đề 06 — Câu 3 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q04",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 4] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm.",
    "imageUrl": "/images/swr-fe/sp26-re/q04.webp",
    "imageCaption": "Đề 06 — Câu 4 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q05",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 06 - Câu 5] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư.",
    "imageUrl": "/images/swr-fe/sp26-re/q05.webp",
    "imageCaption": "Đề 06 — Câu 5 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q06",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 6] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình.",
    "imageUrl": "/images/swr-fe/sp26-re/q06.webp",
    "imageCaption": "Đề 06 — Câu 6 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q07",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 7] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất.",
    "imageUrl": "/images/swr-fe/sp26-re/q07.webp",
    "imageCaption": "Đề 06 — Câu 7 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q08",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 8] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu.",
    "imageUrl": "/images/swr-fe/sp26-re/q08.webp",
    "imageCaption": "Đề 06 — Câu 8 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q09",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 06 - Câu 9] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển.",
    "imageUrl": "/images/swr-fe/sp26-re/q09.webp",
    "imageCaption": "Đề 06 — Câu 9 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q10",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 10] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa.",
    "imageUrl": "/images/swr-fe/sp26-re/q10.webp",
    "imageCaption": "Đề 06 — Câu 10 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q11",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 11] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể.",
    "imageUrl": "/images/swr-fe/sp26-re/q11.webp",
    "imageCaption": "Đề 06 — Câu 11 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q12",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 12] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute).",
    "imageUrl": "/images/swr-fe/sp26-re/q12.webp",
    "imageCaption": "Đề 06 — Câu 12 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q13",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 06 - Câu 13] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình.",
    "imageUrl": "/images/swr-fe/sp26-re/q13.webp",
    "imageCaption": "Đề 06 — Câu 13 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q14",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 06 - Câu 14] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết.",
    "imageUrl": "/images/swr-fe/sp26-re/q14.webp",
    "imageCaption": "Đề 06 — Câu 14 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q15",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 06 - Câu 15] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm.",
    "imageUrl": "/images/swr-fe/sp26-re/q15.webp",
    "imageCaption": "Đề 06 — Câu 15 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q16",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 16] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email).",
    "imageUrl": "/images/swr-fe/sp26-re/q16.webp",
    "imageCaption": "Đề 06 — Câu 16 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q17",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 17] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng.",
    "imageUrl": "/images/swr-fe/sp26-re/q17.webp",
    "imageCaption": "Đề 06 — Câu 17 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q18",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 18] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA).",
    "imageUrl": "/images/swr-fe/sp26-re/q18.webp",
    "imageCaption": "Đề 06 — Câu 18 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q19",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 06 - Câu 19] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất.",
    "imageUrl": "/images/swr-fe/sp26-re/q19.webp",
    "imageCaption": "Đề 06 — Câu 19 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q20",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 20] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó.",
    "imageUrl": "/images/swr-fe/sp26-re/q20.webp",
    "imageCaption": "Đề 06 — Câu 20 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q21",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 06 - Câu 21] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point.",
    "imageUrl": "/images/swr-fe/sp26-re/q21.webp",
    "imageCaption": "Đề 06 — Câu 21 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q22",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 06 - Câu 22] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!",
    "imageUrl": "/images/swr-fe/sp26-re/q22.webp",
    "imageCaption": "Đề 06 — Câu 22 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q23",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 23] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows).",
    "imageUrl": "/images/swr-fe/sp26-re/q23.webp",
    "imageCaption": "Đề 06 — Câu 23 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q24",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 06 - Câu 24] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó).",
    "imageUrl": "/images/swr-fe/sp26-re/q24.webp",
    "imageCaption": "Đề 06 — Câu 24 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q25",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 25] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ.",
    "imageUrl": "/images/swr-fe/sp26-re/q25.webp",
    "imageCaption": "Đề 06 — Câu 25 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q26",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 26] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống).",
    "imageUrl": "/images/swr-fe/sp26-re/q26.webp",
    "imageCaption": "Đề 06 — Câu 26 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q27",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 27] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi).",
    "imageUrl": "/images/swr-fe/sp26-re/q27.webp",
    "imageCaption": "Đề 06 — Câu 27 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q28",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 28] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật).",
    "imageUrl": "/images/swr-fe/sp26-re/q28.webp",
    "imageCaption": "Đề 06 — Câu 28 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q29",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 06 - Câu 29] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này).",
    "imageUrl": "/images/swr-fe/sp26-re/q29.webp",
    "imageCaption": "Đề 06 — Câu 29 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q30",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 30] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không.",
    "imageUrl": "/images/swr-fe/sp26-re/q30.webp",
    "imageCaption": "Đề 06 — Câu 30 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q31",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 31] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability).",
    "imageUrl": "/images/swr-fe/sp26-re/q31.webp",
    "imageCaption": "Đề 06 — Câu 31 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q32",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 06 - Câu 32] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí.",
    "imageUrl": "/images/swr-fe/sp26-re/q32.webp",
    "imageCaption": "Đề 06 — Câu 32 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q33",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 33] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer).",
    "imageUrl": "/images/swr-fe/sp26-re/q33.webp",
    "imageCaption": "Đề 06 — Câu 33 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q34",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 34] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm.",
    "imageUrl": "/images/swr-fe/sp26-re/q34.webp",
    "imageCaption": "Đề 06 — Câu 34 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q35",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 06 - Câu 35] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư.",
    "imageUrl": "/images/swr-fe/sp26-re/q35.webp",
    "imageCaption": "Đề 06 — Câu 35 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q36",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 36] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình.",
    "imageUrl": "/images/swr-fe/sp26-re/q36.webp",
    "imageCaption": "Đề 06 — Câu 36 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q37",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 37] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất.",
    "imageUrl": "/images/swr-fe/sp26-re/q37.webp",
    "imageCaption": "Đề 06 — Câu 37 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q38",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 38] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu.",
    "imageUrl": "/images/swr-fe/sp26-re/q38.webp",
    "imageCaption": "Đề 06 — Câu 38 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q39",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 06 - Câu 39] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển.",
    "imageUrl": "/images/swr-fe/sp26-re/q39.webp",
    "imageCaption": "Đề 06 — Câu 39 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q40",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 40] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa.",
    "imageUrl": "/images/swr-fe/sp26-re/q40.webp",
    "imageCaption": "Đề 06 — Câu 40 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q41",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 41] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể.",
    "imageUrl": "/images/swr-fe/sp26-re/q41.webp",
    "imageCaption": "Đề 06 — Câu 41 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q42",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 42] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute).",
    "imageUrl": "/images/swr-fe/sp26-re/q42.webp",
    "imageCaption": "Đề 06 — Câu 42 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q43",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 06 - Câu 43] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình.",
    "imageUrl": "/images/swr-fe/sp26-re/q43.webp",
    "imageCaption": "Đề 06 — Câu 43 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q44",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 06 - Câu 44] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết.",
    "imageUrl": "/images/swr-fe/sp26-re/q44.webp",
    "imageCaption": "Đề 06 — Câu 44 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q45",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 06 - Câu 45] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm.",
    "imageUrl": "/images/swr-fe/sp26-re/q45.webp",
    "imageCaption": "Đề 06 — Câu 45 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q46",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 46] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email).",
    "imageUrl": "/images/swr-fe/sp26-re/q46.webp",
    "imageCaption": "Đề 06 — Câu 46 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q47",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 47] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng.",
    "imageUrl": "/images/swr-fe/sp26-re/q47.webp",
    "imageCaption": "Đề 06 — Câu 47 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q48",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 48] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA).",
    "imageUrl": "/images/swr-fe/sp26-re/q48.webp",
    "imageCaption": "Đề 06 — Câu 48 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q49",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 06 - Câu 49] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất.",
    "imageUrl": "/images/swr-fe/sp26-re/q49.webp",
    "imageCaption": "Đề 06 — Câu 49 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q50",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 50] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó.",
    "imageUrl": "/images/swr-fe/sp26-re/q50.webp",
    "imageCaption": "Đề 06 — Câu 50 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q51",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 06 - Câu 51] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point.",
    "imageUrl": "/images/swr-fe/sp26-re/q51.webp",
    "imageCaption": "Đề 06 — Câu 51 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q52",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 06 - Câu 52] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!",
    "imageUrl": "/images/swr-fe/sp26-re/q52.webp",
    "imageCaption": "Đề 06 — Câu 52 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q53",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 53] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows).",
    "imageUrl": "/images/swr-fe/sp26-re/q53.webp",
    "imageCaption": "Đề 06 — Câu 53 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q54",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 06 - Câu 54] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó).",
    "imageUrl": "/images/swr-fe/sp26-re/q54.webp",
    "imageCaption": "Đề 06 — Câu 54 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q55",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 55] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ.",
    "imageUrl": "/images/swr-fe/sp26-re/q55.webp",
    "imageCaption": "Đề 06 — Câu 55 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q56",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 56] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống).",
    "imageUrl": "/images/swr-fe/sp26-re/q56.webp",
    "imageCaption": "Đề 06 — Câu 56 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q57",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 57] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi).",
    "imageUrl": "/images/swr-fe/sp26-re/q57.webp",
    "imageCaption": "Đề 06 — Câu 57 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q58",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 58] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật).",
    "imageUrl": "/images/swr-fe/sp26-re/q58.webp",
    "imageCaption": "Đề 06 — Câu 58 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q59",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 06 - Câu 59] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này).",
    "imageUrl": "/images/swr-fe/sp26-re/q59.webp",
    "imageCaption": "Đề 06 — Câu 59 (Đề gốc)"
  },
  {
    "id": "swr-exam-06-q60",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 06 - Câu 60] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không.",
    "imageUrl": "/images/swr-fe/sp26-re/q60.webp",
    "imageCaption": "Đề 06 — Câu 60 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q01",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 07 - Câu 1] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư.",
    "imageUrl": "/images/swr-fe/sp26/q01.webp",
    "imageCaption": "Đề 07 — Câu 1 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q02",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 2] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình.",
    "imageUrl": "/images/swr-fe/sp26/q02.webp",
    "imageCaption": "Đề 07 — Câu 2 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q03",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 3] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất.",
    "imageUrl": "/images/swr-fe/sp26/q03.webp",
    "imageCaption": "Đề 07 — Câu 3 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q04",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 4] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu.",
    "imageUrl": "/images/swr-fe/sp26/q04.webp",
    "imageCaption": "Đề 07 — Câu 4 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q05",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 07 - Câu 5] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển.",
    "imageUrl": "/images/swr-fe/sp26/q05.webp",
    "imageCaption": "Đề 07 — Câu 5 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q06",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 6] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa.",
    "imageUrl": "/images/swr-fe/sp26/q06.webp",
    "imageCaption": "Đề 07 — Câu 6 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q07",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 7] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể.",
    "imageUrl": "/images/swr-fe/sp26/q07.webp",
    "imageCaption": "Đề 07 — Câu 7 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q08",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 8] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute).",
    "imageUrl": "/images/swr-fe/sp26/q08.webp",
    "imageCaption": "Đề 07 — Câu 8 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q09",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 07 - Câu 9] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình.",
    "imageUrl": "/images/swr-fe/sp26/q09.webp",
    "imageCaption": "Đề 07 — Câu 9 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q10",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 07 - Câu 10] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết.",
    "imageUrl": "/images/swr-fe/sp26/q10.webp",
    "imageCaption": "Đề 07 — Câu 10 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q11",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 07 - Câu 11] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm.",
    "imageUrl": "/images/swr-fe/sp26/q11.webp",
    "imageCaption": "Đề 07 — Câu 11 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q12",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 12] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email).",
    "imageUrl": "/images/swr-fe/sp26/q12.webp",
    "imageCaption": "Đề 07 — Câu 12 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q13",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 13] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng.",
    "imageUrl": "/images/swr-fe/sp26/q13.webp",
    "imageCaption": "Đề 07 — Câu 13 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q14",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 14] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA).",
    "imageUrl": "/images/swr-fe/sp26/q14.webp",
    "imageCaption": "Đề 07 — Câu 14 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q15",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 07 - Câu 15] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất.",
    "imageUrl": "/images/swr-fe/sp26/q15.webp",
    "imageCaption": "Đề 07 — Câu 15 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q16",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 16] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó.",
    "imageUrl": "/images/swr-fe/sp26/q16.webp",
    "imageCaption": "Đề 07 — Câu 16 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q17",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 07 - Câu 17] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point.",
    "imageUrl": "/images/swr-fe/sp26/q17.webp",
    "imageCaption": "Đề 07 — Câu 17 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q18",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 07 - Câu 18] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!",
    "imageUrl": "/images/swr-fe/sp26/q18.webp",
    "imageCaption": "Đề 07 — Câu 18 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q19",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 19] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows).",
    "imageUrl": "/images/swr-fe/sp26/q19.webp",
    "imageCaption": "Đề 07 — Câu 19 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q20",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 07 - Câu 20] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó).",
    "imageUrl": "/images/swr-fe/sp26/q20.webp",
    "imageCaption": "Đề 07 — Câu 20 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q21",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 21] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ.",
    "imageUrl": "/images/swr-fe/sp26/q21.webp",
    "imageCaption": "Đề 07 — Câu 21 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q22",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 22] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống).",
    "imageUrl": "/images/swr-fe/sp26/q22.webp",
    "imageCaption": "Đề 07 — Câu 22 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q23",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 23] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi).",
    "imageUrl": "/images/swr-fe/sp26/q23.webp",
    "imageCaption": "Đề 07 — Câu 23 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q24",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 24] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật).",
    "imageUrl": "/images/swr-fe/sp26/q24.webp",
    "imageCaption": "Đề 07 — Câu 24 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q25",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 07 - Câu 25] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này).",
    "imageUrl": "/images/swr-fe/sp26/q25.webp",
    "imageCaption": "Đề 07 — Câu 25 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q26",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 26] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không.",
    "imageUrl": "/images/swr-fe/sp26/q26.webp",
    "imageCaption": "Đề 07 — Câu 26 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q27",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 27] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability).",
    "imageUrl": "/images/swr-fe/sp26/q27.webp",
    "imageCaption": "Đề 07 — Câu 27 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q28",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 07 - Câu 28] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí.",
    "imageUrl": "/images/swr-fe/sp26/q28.webp",
    "imageCaption": "Đề 07 — Câu 28 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q29",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 29] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer).",
    "imageUrl": "/images/swr-fe/sp26/q29.webp",
    "imageCaption": "Đề 07 — Câu 29 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q30",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 30] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm.",
    "imageUrl": "/images/swr-fe/sp26/q30.webp",
    "imageCaption": "Đề 07 — Câu 30 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q31",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 07 - Câu 31] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư.",
    "imageUrl": "/images/swr-fe/sp26/q31.webp",
    "imageCaption": "Đề 07 — Câu 31 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q32",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 32] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình.",
    "imageUrl": "/images/swr-fe/sp26/q32.webp",
    "imageCaption": "Đề 07 — Câu 32 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q33",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 33] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất.",
    "imageUrl": "/images/swr-fe/sp26/q33.webp",
    "imageCaption": "Đề 07 — Câu 33 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q34",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 34] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu.",
    "imageUrl": "/images/swr-fe/sp26/q34.webp",
    "imageCaption": "Đề 07 — Câu 34 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q35",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 07 - Câu 35] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển.",
    "imageUrl": "/images/swr-fe/sp26/q35.webp",
    "imageCaption": "Đề 07 — Câu 35 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q36",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 36] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa.",
    "imageUrl": "/images/swr-fe/sp26/q36.webp",
    "imageCaption": "Đề 07 — Câu 36 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q37",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 37] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể.",
    "imageUrl": "/images/swr-fe/sp26/q37.webp",
    "imageCaption": "Đề 07 — Câu 37 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q38",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 38] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute).",
    "imageUrl": "/images/swr-fe/sp26/q38.webp",
    "imageCaption": "Đề 07 — Câu 38 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q39",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 07 - Câu 39] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình.",
    "imageUrl": "/images/swr-fe/sp26/q39.webp",
    "imageCaption": "Đề 07 — Câu 39 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q40",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 07 - Câu 40] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết.",
    "imageUrl": "/images/swr-fe/sp26/q40.webp",
    "imageCaption": "Đề 07 — Câu 40 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q41",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 07 - Câu 41] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm.",
    "imageUrl": "/images/swr-fe/sp26/q41.webp",
    "imageCaption": "Đề 07 — Câu 41 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q42",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 42] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email).",
    "imageUrl": "/images/swr-fe/sp26/q42.webp",
    "imageCaption": "Đề 07 — Câu 42 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q43",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 43] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng.",
    "imageUrl": "/images/swr-fe/sp26/q43.webp",
    "imageCaption": "Đề 07 — Câu 43 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q44",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 44] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA).",
    "imageUrl": "/images/swr-fe/sp26/q44.webp",
    "imageCaption": "Đề 07 — Câu 44 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q45",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 07 - Câu 45] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất.",
    "imageUrl": "/images/swr-fe/sp26/q45.webp",
    "imageCaption": "Đề 07 — Câu 45 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q46",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 46] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó.",
    "imageUrl": "/images/swr-fe/sp26/q46.webp",
    "imageCaption": "Đề 07 — Câu 46 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q47",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 07 - Câu 47] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point.",
    "imageUrl": "/images/swr-fe/sp26/q47.webp",
    "imageCaption": "Đề 07 — Câu 47 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q48",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 07 - Câu 48] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!",
    "imageUrl": "/images/swr-fe/sp26/q48.webp",
    "imageCaption": "Đề 07 — Câu 48 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q49",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 49] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows).",
    "imageUrl": "/images/swr-fe/sp26/q49.webp",
    "imageCaption": "Đề 07 — Câu 49 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q50",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 07 - Câu 50] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó).",
    "imageUrl": "/images/swr-fe/sp26/q50.webp",
    "imageCaption": "Đề 07 — Câu 50 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q51",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 51] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ.",
    "imageUrl": "/images/swr-fe/sp26/q51.webp",
    "imageCaption": "Đề 07 — Câu 51 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q52",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 52] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống).",
    "imageUrl": "/images/swr-fe/sp26/q52.webp",
    "imageCaption": "Đề 07 — Câu 52 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q53",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 53] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi).",
    "imageUrl": "/images/swr-fe/sp26/q53.webp",
    "imageCaption": "Đề 07 — Câu 53 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q54",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 54] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật).",
    "imageUrl": "/images/swr-fe/sp26/q54.webp",
    "imageCaption": "Đề 07 — Câu 54 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q55",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 07 - Câu 55] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này).",
    "imageUrl": "/images/swr-fe/sp26/q55.webp",
    "imageCaption": "Đề 07 — Câu 55 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q56",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 56] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không.",
    "imageUrl": "/images/swr-fe/sp26/q56.webp",
    "imageCaption": "Đề 07 — Câu 56 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q57",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 57] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability).",
    "imageUrl": "/images/swr-fe/sp26/q57.webp",
    "imageCaption": "Đề 07 — Câu 57 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q58",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 07 - Câu 58] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí.",
    "imageUrl": "/images/swr-fe/sp26/q58.webp",
    "imageCaption": "Đề 07 — Câu 58 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q59",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 59] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer).",
    "imageUrl": "/images/swr-fe/sp26/q59.webp",
    "imageCaption": "Đề 07 — Câu 59 (Đề gốc)"
  },
  {
    "id": "swr-exam-07-q60",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 07 - Câu 60] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm.",
    "imageUrl": "/images/swr-fe/sp26/q60.webp",
    "imageCaption": "Đề 07 — Câu 60 (Đề gốc)"
  },
  {
    "id": "swr-exam-08-q01",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 08 - Câu 1] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển."
  },
  {
    "id": "swr-exam-08-q02",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 2] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa."
  },
  {
    "id": "swr-exam-08-q03",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 3] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể."
  },
  {
    "id": "swr-exam-08-q04",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 4] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute)."
  },
  {
    "id": "swr-exam-08-q05",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 08 - Câu 5] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình."
  },
  {
    "id": "swr-exam-08-q06",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 08 - Câu 6] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết."
  },
  {
    "id": "swr-exam-08-q07",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 08 - Câu 7] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm."
  },
  {
    "id": "swr-exam-08-q08",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 8] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email)."
  },
  {
    "id": "swr-exam-08-q09",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 9] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng."
  },
  {
    "id": "swr-exam-08-q10",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 10] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA)."
  },
  {
    "id": "swr-exam-08-q11",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 08 - Câu 11] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất."
  },
  {
    "id": "swr-exam-08-q12",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 12] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó."
  },
  {
    "id": "swr-exam-08-q13",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 08 - Câu 13] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point."
  },
  {
    "id": "swr-exam-08-q14",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 08 - Câu 14] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!"
  },
  {
    "id": "swr-exam-08-q15",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 15] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows)."
  },
  {
    "id": "swr-exam-08-q16",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 08 - Câu 16] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó)."
  },
  {
    "id": "swr-exam-08-q17",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 17] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ."
  },
  {
    "id": "swr-exam-08-q18",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 18] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống)."
  },
  {
    "id": "swr-exam-08-q19",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 19] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi)."
  },
  {
    "id": "swr-exam-08-q20",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 20] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật)."
  },
  {
    "id": "swr-exam-08-q21",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 08 - Câu 21] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này)."
  },
  {
    "id": "swr-exam-08-q22",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 22] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không."
  },
  {
    "id": "swr-exam-08-q23",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 23] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability)."
  },
  {
    "id": "swr-exam-08-q24",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 08 - Câu 24] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí."
  },
  {
    "id": "swr-exam-08-q25",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 25] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer)."
  },
  {
    "id": "swr-exam-08-q26",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 26] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm."
  },
  {
    "id": "swr-exam-08-q27",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 08 - Câu 27] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư."
  },
  {
    "id": "swr-exam-08-q28",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 28] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình."
  },
  {
    "id": "swr-exam-08-q29",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 29] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất."
  },
  {
    "id": "swr-exam-08-q30",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 30] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu."
  },
  {
    "id": "swr-exam-08-q31",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 08 - Câu 31] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển."
  },
  {
    "id": "swr-exam-08-q32",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 32] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa."
  },
  {
    "id": "swr-exam-08-q33",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 33] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể."
  },
  {
    "id": "swr-exam-08-q34",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 34] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute)."
  },
  {
    "id": "swr-exam-08-q35",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 08 - Câu 35] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình."
  },
  {
    "id": "swr-exam-08-q36",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 08 - Câu 36] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết."
  },
  {
    "id": "swr-exam-08-q37",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 08 - Câu 37] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm."
  },
  {
    "id": "swr-exam-08-q38",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 38] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email)."
  },
  {
    "id": "swr-exam-08-q39",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 39] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng."
  },
  {
    "id": "swr-exam-08-q40",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 40] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA)."
  },
  {
    "id": "swr-exam-08-q41",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 08 - Câu 41] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất."
  },
  {
    "id": "swr-exam-08-q42",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 42] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó."
  },
  {
    "id": "swr-exam-08-q43",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 08 - Câu 43] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point."
  },
  {
    "id": "swr-exam-08-q44",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 08 - Câu 44] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!"
  },
  {
    "id": "swr-exam-08-q45",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 45] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows)."
  },
  {
    "id": "swr-exam-08-q46",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 08 - Câu 46] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó)."
  },
  {
    "id": "swr-exam-08-q47",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 47] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ."
  },
  {
    "id": "swr-exam-08-q48",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 48] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống)."
  },
  {
    "id": "swr-exam-08-q49",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 49] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi)."
  },
  {
    "id": "swr-exam-08-q50",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 08 - Câu 50] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật)."
  },
  {
    "id": "swr-exam-09-q01",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 09 - Câu 1] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết."
  },
  {
    "id": "swr-exam-09-q02",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 09 - Câu 2] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm."
  },
  {
    "id": "swr-exam-09-q03",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 3] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email)."
  },
  {
    "id": "swr-exam-09-q04",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 4] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng."
  },
  {
    "id": "swr-exam-09-q05",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 5] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA)."
  },
  {
    "id": "swr-exam-09-q06",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 09 - Câu 6] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất."
  },
  {
    "id": "swr-exam-09-q07",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 7] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó."
  },
  {
    "id": "swr-exam-09-q08",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 09 - Câu 8] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point."
  },
  {
    "id": "swr-exam-09-q09",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 09 - Câu 9] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!"
  },
  {
    "id": "swr-exam-09-q10",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 10] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows)."
  },
  {
    "id": "swr-exam-09-q11",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 09 - Câu 11] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó)."
  },
  {
    "id": "swr-exam-09-q12",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 12] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ."
  },
  {
    "id": "swr-exam-09-q13",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 13] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống)."
  },
  {
    "id": "swr-exam-09-q14",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 14] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi)."
  },
  {
    "id": "swr-exam-09-q15",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 15] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật)."
  },
  {
    "id": "swr-exam-09-q16",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 09 - Câu 16] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này)."
  },
  {
    "id": "swr-exam-09-q17",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 17] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không."
  },
  {
    "id": "swr-exam-09-q18",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 18] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability)."
  },
  {
    "id": "swr-exam-09-q19",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 09 - Câu 19] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí."
  },
  {
    "id": "swr-exam-09-q20",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 20] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer)."
  },
  {
    "id": "swr-exam-09-q21",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 21] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm."
  },
  {
    "id": "swr-exam-09-q22",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 09 - Câu 22] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư."
  },
  {
    "id": "swr-exam-09-q23",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 23] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình."
  },
  {
    "id": "swr-exam-09-q24",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 24] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất."
  },
  {
    "id": "swr-exam-09-q25",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 25] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu."
  },
  {
    "id": "swr-exam-09-q26",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 09 - Câu 26] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển."
  },
  {
    "id": "swr-exam-09-q27",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 27] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa."
  },
  {
    "id": "swr-exam-09-q28",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 28] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể."
  },
  {
    "id": "swr-exam-09-q29",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 29] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute)."
  },
  {
    "id": "swr-exam-09-q30",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 09 - Câu 30] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình."
  },
  {
    "id": "swr-exam-09-q31",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 09 - Câu 31] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết."
  },
  {
    "id": "swr-exam-09-q32",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 09 - Câu 32] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm."
  },
  {
    "id": "swr-exam-09-q33",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 33] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email)."
  },
  {
    "id": "swr-exam-09-q34",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 34] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng."
  },
  {
    "id": "swr-exam-09-q35",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 35] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA)."
  },
  {
    "id": "swr-exam-09-q36",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 09 - Câu 36] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất."
  },
  {
    "id": "swr-exam-09-q37",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 37] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó."
  },
  {
    "id": "swr-exam-09-q38",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 09 - Câu 38] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point."
  },
  {
    "id": "swr-exam-09-q39",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 09 - Câu 39] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!"
  },
  {
    "id": "swr-exam-09-q40",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 40] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows)."
  },
  {
    "id": "swr-exam-09-q41",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 09 - Câu 41] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó)."
  },
  {
    "id": "swr-exam-09-q42",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 42] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ."
  },
  {
    "id": "swr-exam-09-q43",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 43] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống)."
  },
  {
    "id": "swr-exam-09-q44",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 44] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi)."
  },
  {
    "id": "swr-exam-09-q45",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 45] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật)."
  },
  {
    "id": "swr-exam-09-q46",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 09 - Câu 46] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này)."
  },
  {
    "id": "swr-exam-09-q47",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 47] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không."
  },
  {
    "id": "swr-exam-09-q48",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 48] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability)."
  },
  {
    "id": "swr-exam-09-q49",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 09 - Câu 49] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí."
  },
  {
    "id": "swr-exam-09-q50",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 50] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer)."
  },
  {
    "id": "swr-exam-09-q51",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 51] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm."
  },
  {
    "id": "swr-exam-09-q52",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 09 - Câu 52] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư."
  },
  {
    "id": "swr-exam-09-q53",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 53] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình."
  },
  {
    "id": "swr-exam-09-q54",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 54] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất."
  },
  {
    "id": "swr-exam-09-q55",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 55] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu."
  },
  {
    "id": "swr-exam-09-q56",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 09 - Câu 56] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển."
  },
  {
    "id": "swr-exam-09-q57",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 57] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa."
  },
  {
    "id": "swr-exam-09-q58",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 58] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể."
  },
  {
    "id": "swr-exam-09-q59",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 09 - Câu 59] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute)."
  },
  {
    "id": "swr-exam-09-q60",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 09 - Câu 60] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình."
  },
  {
    "id": "swr-exam-10-q01",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 1] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA)."
  },
  {
    "id": "swr-exam-10-q02",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 10 - Câu 2] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất."
  },
  {
    "id": "swr-exam-10-q03",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 3] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó."
  },
  {
    "id": "swr-exam-10-q04",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 10 - Câu 4] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point."
  },
  {
    "id": "swr-exam-10-q05",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 10 - Câu 5] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!"
  },
  {
    "id": "swr-exam-10-q06",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 6] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows)."
  },
  {
    "id": "swr-exam-10-q07",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 10 - Câu 7] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó)."
  },
  {
    "id": "swr-exam-10-q08",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 8] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ."
  },
  {
    "id": "swr-exam-10-q09",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 9] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống)."
  },
  {
    "id": "swr-exam-10-q10",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 10] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi)."
  },
  {
    "id": "swr-exam-10-q11",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 11] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật)."
  },
  {
    "id": "swr-exam-10-q12",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 10 - Câu 12] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này)."
  },
  {
    "id": "swr-exam-10-q13",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 13] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không."
  },
  {
    "id": "swr-exam-10-q14",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 14] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability)."
  },
  {
    "id": "swr-exam-10-q15",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 10 - Câu 15] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí."
  },
  {
    "id": "swr-exam-10-q16",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 16] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer)."
  },
  {
    "id": "swr-exam-10-q17",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 17] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm."
  },
  {
    "id": "swr-exam-10-q18",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 10 - Câu 18] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư."
  },
  {
    "id": "swr-exam-10-q19",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 19] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình."
  },
  {
    "id": "swr-exam-10-q20",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 20] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất."
  },
  {
    "id": "swr-exam-10-q21",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 21] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu."
  },
  {
    "id": "swr-exam-10-q22",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 10 - Câu 22] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển."
  },
  {
    "id": "swr-exam-10-q23",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 23] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa."
  },
  {
    "id": "swr-exam-10-q24",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 24] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể."
  },
  {
    "id": "swr-exam-10-q25",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 25] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute)."
  },
  {
    "id": "swr-exam-10-q26",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 10 - Câu 26] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình."
  },
  {
    "id": "swr-exam-10-q27",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 10 - Câu 27] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết."
  },
  {
    "id": "swr-exam-10-q28",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 10 - Câu 28] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm."
  },
  {
    "id": "swr-exam-10-q29",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 29] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email)."
  },
  {
    "id": "swr-exam-10-q30",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 30] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng."
  },
  {
    "id": "swr-exam-10-q31",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 31] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA)."
  },
  {
    "id": "swr-exam-10-q32",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 10 - Câu 32] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất."
  },
  {
    "id": "swr-exam-10-q33",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 33] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó."
  },
  {
    "id": "swr-exam-10-q34",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 10 - Câu 34] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point."
  },
  {
    "id": "swr-exam-10-q35",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 10 - Câu 35] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!"
  },
  {
    "id": "swr-exam-10-q36",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 36] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows)."
  },
  {
    "id": "swr-exam-10-q37",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 10 - Câu 37] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó)."
  },
  {
    "id": "swr-exam-10-q38",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 38] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ."
  },
  {
    "id": "swr-exam-10-q39",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 39] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống)."
  },
  {
    "id": "swr-exam-10-q40",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 40] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi)."
  },
  {
    "id": "swr-exam-10-q41",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 41] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật)."
  },
  {
    "id": "swr-exam-10-q42",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 10 - Câu 42] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này)."
  },
  {
    "id": "swr-exam-10-q43",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 43] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không."
  },
  {
    "id": "swr-exam-10-q44",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 44] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability)."
  },
  {
    "id": "swr-exam-10-q45",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 10 - Câu 45] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí."
  },
  {
    "id": "swr-exam-10-q46",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 46] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer)."
  },
  {
    "id": "swr-exam-10-q47",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 47] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm."
  },
  {
    "id": "swr-exam-10-q48",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 10 - Câu 48] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư."
  },
  {
    "id": "swr-exam-10-q49",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 49] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình."
  },
  {
    "id": "swr-exam-10-q50",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 10 - Câu 50] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất."
  },
  {
    "id": "swr-exam-11-q01",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 11 - Câu 1] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!"
  },
  {
    "id": "swr-exam-11-q02",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 2] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows)."
  },
  {
    "id": "swr-exam-11-q03",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 11 - Câu 3] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó)."
  },
  {
    "id": "swr-exam-11-q04",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 4] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ."
  },
  {
    "id": "swr-exam-11-q05",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 5] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống)."
  },
  {
    "id": "swr-exam-11-q06",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 6] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi)."
  },
  {
    "id": "swr-exam-11-q07",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 7] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật)."
  },
  {
    "id": "swr-exam-11-q08",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 11 - Câu 8] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này)."
  },
  {
    "id": "swr-exam-11-q09",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 9] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không."
  },
  {
    "id": "swr-exam-11-q10",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 10] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability)."
  },
  {
    "id": "swr-exam-11-q11",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 11 - Câu 11] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí."
  },
  {
    "id": "swr-exam-11-q12",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 12] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer)."
  },
  {
    "id": "swr-exam-11-q13",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 13] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm."
  },
  {
    "id": "swr-exam-11-q14",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 11 - Câu 14] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư."
  },
  {
    "id": "swr-exam-11-q15",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 15] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình."
  },
  {
    "id": "swr-exam-11-q16",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 16] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất."
  },
  {
    "id": "swr-exam-11-q17",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 17] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu."
  },
  {
    "id": "swr-exam-11-q18",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 11 - Câu 18] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển."
  },
  {
    "id": "swr-exam-11-q19",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 19] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa."
  },
  {
    "id": "swr-exam-11-q20",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 20] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể."
  },
  {
    "id": "swr-exam-11-q21",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 21] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute)."
  },
  {
    "id": "swr-exam-11-q22",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 11 - Câu 22] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình."
  },
  {
    "id": "swr-exam-11-q23",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 11 - Câu 23] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết."
  },
  {
    "id": "swr-exam-11-q24",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 11 - Câu 24] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm."
  },
  {
    "id": "swr-exam-11-q25",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 25] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email)."
  },
  {
    "id": "swr-exam-11-q26",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 26] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng."
  },
  {
    "id": "swr-exam-11-q27",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 27] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA)."
  },
  {
    "id": "swr-exam-11-q28",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 11 - Câu 28] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất."
  },
  {
    "id": "swr-exam-11-q29",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 29] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó."
  },
  {
    "id": "swr-exam-11-q30",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 11 - Câu 30] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point."
  },
  {
    "id": "swr-exam-11-q31",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 11 - Câu 31] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!"
  },
  {
    "id": "swr-exam-11-q32",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 32] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows)."
  },
  {
    "id": "swr-exam-11-q33",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 11 - Câu 33] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó)."
  },
  {
    "id": "swr-exam-11-q34",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 34] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ."
  },
  {
    "id": "swr-exam-11-q35",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 35] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống)."
  },
  {
    "id": "swr-exam-11-q36",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 36] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi)."
  },
  {
    "id": "swr-exam-11-q37",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 37] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật)."
  },
  {
    "id": "swr-exam-11-q38",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 11 - Câu 38] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này)."
  },
  {
    "id": "swr-exam-11-q39",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 39] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không."
  },
  {
    "id": "swr-exam-11-q40",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 40] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability)."
  },
  {
    "id": "swr-exam-11-q41",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 11 - Câu 41] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí."
  },
  {
    "id": "swr-exam-11-q42",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 42] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer)."
  },
  {
    "id": "swr-exam-11-q43",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 43] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm."
  },
  {
    "id": "swr-exam-11-q44",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 11 - Câu 44] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư."
  },
  {
    "id": "swr-exam-11-q45",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 45] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình."
  },
  {
    "id": "swr-exam-11-q46",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 46] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất."
  },
  {
    "id": "swr-exam-11-q47",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 47] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu."
  },
  {
    "id": "swr-exam-11-q48",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 11 - Câu 48] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển."
  },
  {
    "id": "swr-exam-11-q49",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 49] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa."
  },
  {
    "id": "swr-exam-11-q50",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 11 - Câu 50] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể."
  },
  {
    "id": "swr-exam-12-q01",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 1] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống)."
  },
  {
    "id": "swr-exam-12-q02",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 2] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi)."
  },
  {
    "id": "swr-exam-12-q03",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 3] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật)."
  },
  {
    "id": "swr-exam-12-q04",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 12 - Câu 4] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này)."
  },
  {
    "id": "swr-exam-12-q05",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 5] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không."
  },
  {
    "id": "swr-exam-12-q06",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 6] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability)."
  },
  {
    "id": "swr-exam-12-q07",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 12 - Câu 7] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí."
  },
  {
    "id": "swr-exam-12-q08",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 8] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer)."
  },
  {
    "id": "swr-exam-12-q09",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 9] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm."
  },
  {
    "id": "swr-exam-12-q10",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 12 - Câu 10] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư."
  },
  {
    "id": "swr-exam-12-q11",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 11] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình."
  },
  {
    "id": "swr-exam-12-q12",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 12] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất."
  },
  {
    "id": "swr-exam-12-q13",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 13] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu."
  },
  {
    "id": "swr-exam-12-q14",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 12 - Câu 14] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển."
  },
  {
    "id": "swr-exam-12-q15",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 15] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa."
  },
  {
    "id": "swr-exam-12-q16",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 16] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể."
  },
  {
    "id": "swr-exam-12-q17",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 17] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute)."
  },
  {
    "id": "swr-exam-12-q18",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 12 - Câu 18] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình."
  },
  {
    "id": "swr-exam-12-q19",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 12 - Câu 19] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết."
  },
  {
    "id": "swr-exam-12-q20",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 12 - Câu 20] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm."
  },
  {
    "id": "swr-exam-12-q21",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 21] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email)."
  },
  {
    "id": "swr-exam-12-q22",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 22] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng."
  },
  {
    "id": "swr-exam-12-q23",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 23] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA)."
  },
  {
    "id": "swr-exam-12-q24",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 12 - Câu 24] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất."
  },
  {
    "id": "swr-exam-12-q25",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 25] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó."
  },
  {
    "id": "swr-exam-12-q26",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 12 - Câu 26] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point."
  },
  {
    "id": "swr-exam-12-q27",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 12 - Câu 27] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!"
  },
  {
    "id": "swr-exam-12-q28",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 28] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows)."
  },
  {
    "id": "swr-exam-12-q29",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 12 - Câu 29] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó)."
  },
  {
    "id": "swr-exam-12-q30",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 30] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ."
  },
  {
    "id": "swr-exam-12-q31",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 31] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống)."
  },
  {
    "id": "swr-exam-12-q32",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 32] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi)."
  },
  {
    "id": "swr-exam-12-q33",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 33] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật)."
  },
  {
    "id": "swr-exam-12-q34",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 12 - Câu 34] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này)."
  },
  {
    "id": "swr-exam-12-q35",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 35] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không."
  },
  {
    "id": "swr-exam-12-q36",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 36] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability)."
  },
  {
    "id": "swr-exam-12-q37",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 12 - Câu 37] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí."
  },
  {
    "id": "swr-exam-12-q38",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 38] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer)."
  },
  {
    "id": "swr-exam-12-q39",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 39] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm."
  },
  {
    "id": "swr-exam-12-q40",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 12 - Câu 40] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư."
  },
  {
    "id": "swr-exam-12-q41",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 41] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình."
  },
  {
    "id": "swr-exam-12-q42",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 42] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất."
  },
  {
    "id": "swr-exam-12-q43",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 43] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu."
  },
  {
    "id": "swr-exam-12-q44",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 12 - Câu 44] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển."
  },
  {
    "id": "swr-exam-12-q45",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 45] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa."
  },
  {
    "id": "swr-exam-12-q46",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 46] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể."
  },
  {
    "id": "swr-exam-12-q47",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 12 - Câu 47] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute)."
  },
  {
    "id": "swr-exam-12-q48",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 12 - Câu 48] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình."
  },
  {
    "id": "swr-exam-12-q49",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 12 - Câu 49] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết."
  },
  {
    "id": "swr-exam-12-q50",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 12 - Câu 50] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm."
  },
  {
    "id": "swr-exam-13-q01",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 1] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không."
  },
  {
    "id": "swr-exam-13-q02",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 2] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability)."
  },
  {
    "id": "swr-exam-13-q03",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 13 - Câu 3] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí."
  },
  {
    "id": "swr-exam-13-q04",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 4] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer)."
  },
  {
    "id": "swr-exam-13-q05",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 5] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm."
  },
  {
    "id": "swr-exam-13-q06",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 13 - Câu 6] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư."
  },
  {
    "id": "swr-exam-13-q07",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 7] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình."
  },
  {
    "id": "swr-exam-13-q08",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 8] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất."
  },
  {
    "id": "swr-exam-13-q09",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 9] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu."
  },
  {
    "id": "swr-exam-13-q10",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 13 - Câu 10] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển."
  },
  {
    "id": "swr-exam-13-q11",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 11] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa."
  },
  {
    "id": "swr-exam-13-q12",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 12] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể."
  },
  {
    "id": "swr-exam-13-q13",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 13] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute)."
  },
  {
    "id": "swr-exam-13-q14",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 13 - Câu 14] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình."
  },
  {
    "id": "swr-exam-13-q15",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 13 - Câu 15] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết."
  },
  {
    "id": "swr-exam-13-q16",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 13 - Câu 16] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm."
  },
  {
    "id": "swr-exam-13-q17",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 17] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email)."
  },
  {
    "id": "swr-exam-13-q18",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 18] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng."
  },
  {
    "id": "swr-exam-13-q19",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 19] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA)."
  },
  {
    "id": "swr-exam-13-q20",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 13 - Câu 20] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất."
  },
  {
    "id": "swr-exam-13-q21",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 21] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó."
  },
  {
    "id": "swr-exam-13-q22",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 13 - Câu 22] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point."
  },
  {
    "id": "swr-exam-13-q23",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 13 - Câu 23] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!"
  },
  {
    "id": "swr-exam-13-q24",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 24] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows)."
  },
  {
    "id": "swr-exam-13-q25",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 13 - Câu 25] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó)."
  },
  {
    "id": "swr-exam-13-q26",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 26] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ."
  },
  {
    "id": "swr-exam-13-q27",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 27] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống)."
  },
  {
    "id": "swr-exam-13-q28",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 28] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi)."
  },
  {
    "id": "swr-exam-13-q29",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 29] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật)."
  },
  {
    "id": "swr-exam-13-q30",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 13 - Câu 30] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này)."
  },
  {
    "id": "swr-exam-13-q31",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 31] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không."
  },
  {
    "id": "swr-exam-13-q32",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 32] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability)."
  },
  {
    "id": "swr-exam-13-q33",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 13 - Câu 33] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí."
  },
  {
    "id": "swr-exam-13-q34",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 34] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer)."
  },
  {
    "id": "swr-exam-13-q35",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 35] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm."
  },
  {
    "id": "swr-exam-13-q36",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 13 - Câu 36] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư."
  },
  {
    "id": "swr-exam-13-q37",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 37] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình."
  },
  {
    "id": "swr-exam-13-q38",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 38] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất."
  },
  {
    "id": "swr-exam-13-q39",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 39] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu."
  },
  {
    "id": "swr-exam-13-q40",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 13 - Câu 40] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển."
  },
  {
    "id": "swr-exam-13-q41",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 41] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa."
  },
  {
    "id": "swr-exam-13-q42",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 42] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể."
  },
  {
    "id": "swr-exam-13-q43",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 43] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute)."
  },
  {
    "id": "swr-exam-13-q44",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 13 - Câu 44] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình."
  },
  {
    "id": "swr-exam-13-q45",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 13 - Câu 45] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết."
  },
  {
    "id": "swr-exam-13-q46",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 13 - Câu 46] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm."
  },
  {
    "id": "swr-exam-13-q47",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 47] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email)."
  },
  {
    "id": "swr-exam-13-q48",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 48] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng."
  },
  {
    "id": "swr-exam-13-q49",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 13 - Câu 49] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA)."
  },
  {
    "id": "swr-exam-13-q50",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 13 - Câu 50] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất."
  },
  {
    "id": "swr-exam-14-q01",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 1] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm."
  },
  {
    "id": "swr-exam-14-q02",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 14 - Câu 2] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư."
  },
  {
    "id": "swr-exam-14-q03",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 3] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình."
  },
  {
    "id": "swr-exam-14-q04",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 4] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất."
  },
  {
    "id": "swr-exam-14-q05",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 5] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu."
  },
  {
    "id": "swr-exam-14-q06",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 14 - Câu 6] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển."
  },
  {
    "id": "swr-exam-14-q07",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 7] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa."
  },
  {
    "id": "swr-exam-14-q08",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 8] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể."
  },
  {
    "id": "swr-exam-14-q09",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 9] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute)."
  },
  {
    "id": "swr-exam-14-q10",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 14 - Câu 10] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình."
  },
  {
    "id": "swr-exam-14-q11",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 14 - Câu 11] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết."
  },
  {
    "id": "swr-exam-14-q12",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 14 - Câu 12] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm."
  },
  {
    "id": "swr-exam-14-q13",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 13] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email)."
  },
  {
    "id": "swr-exam-14-q14",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 14] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng."
  },
  {
    "id": "swr-exam-14-q15",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 15] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA)."
  },
  {
    "id": "swr-exam-14-q16",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 14 - Câu 16] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất."
  },
  {
    "id": "swr-exam-14-q17",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 17] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó."
  },
  {
    "id": "swr-exam-14-q18",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 14 - Câu 18] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point."
  },
  {
    "id": "swr-exam-14-q19",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 14 - Câu 19] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!"
  },
  {
    "id": "swr-exam-14-q20",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 20] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows)."
  },
  {
    "id": "swr-exam-14-q21",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 14 - Câu 21] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó)."
  },
  {
    "id": "swr-exam-14-q22",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 22] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ."
  },
  {
    "id": "swr-exam-14-q23",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 23] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống)."
  },
  {
    "id": "swr-exam-14-q24",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 24] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi)."
  },
  {
    "id": "swr-exam-14-q25",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 25] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật)."
  },
  {
    "id": "swr-exam-14-q26",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 14 - Câu 26] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này)."
  },
  {
    "id": "swr-exam-14-q27",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 27] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không."
  },
  {
    "id": "swr-exam-14-q28",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 28] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability)."
  },
  {
    "id": "swr-exam-14-q29",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 14 - Câu 29] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí."
  },
  {
    "id": "swr-exam-14-q30",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 30] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer)."
  },
  {
    "id": "swr-exam-14-q31",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 31] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm."
  },
  {
    "id": "swr-exam-14-q32",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 14 - Câu 32] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư."
  },
  {
    "id": "swr-exam-14-q33",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 33] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình."
  },
  {
    "id": "swr-exam-14-q34",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 34] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất."
  },
  {
    "id": "swr-exam-14-q35",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 35] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu."
  },
  {
    "id": "swr-exam-14-q36",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 14 - Câu 36] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển."
  },
  {
    "id": "swr-exam-14-q37",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 37] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa."
  },
  {
    "id": "swr-exam-14-q38",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 38] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể."
  },
  {
    "id": "swr-exam-14-q39",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 39] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute)."
  },
  {
    "id": "swr-exam-14-q40",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 14 - Câu 40] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình."
  },
  {
    "id": "swr-exam-14-q41",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 14 - Câu 41] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết."
  },
  {
    "id": "swr-exam-14-q42",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 14 - Câu 42] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm."
  },
  {
    "id": "swr-exam-14-q43",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 43] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email)."
  },
  {
    "id": "swr-exam-14-q44",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 44] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng."
  },
  {
    "id": "swr-exam-14-q45",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 45] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA)."
  },
  {
    "id": "swr-exam-14-q46",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 14 - Câu 46] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất."
  },
  {
    "id": "swr-exam-14-q47",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 47] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó."
  },
  {
    "id": "swr-exam-14-q48",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 14 - Câu 48] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point."
  },
  {
    "id": "swr-exam-14-q49",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 14 - Câu 49] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!"
  },
  {
    "id": "swr-exam-14-q50",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 50] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows)."
  },
  {
    "id": "swr-exam-14-q51",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 14 - Câu 51] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó)."
  },
  {
    "id": "swr-exam-14-q52",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 52] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ."
  },
  {
    "id": "swr-exam-14-q53",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 53] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống)."
  },
  {
    "id": "swr-exam-14-q54",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 54] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi)."
  },
  {
    "id": "swr-exam-14-q55",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 55] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật)."
  },
  {
    "id": "swr-exam-14-q56",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 14 - Câu 56] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này)."
  },
  {
    "id": "swr-exam-14-q57",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 57] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không."
  },
  {
    "id": "swr-exam-14-q58",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 58] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability)."
  },
  {
    "id": "swr-exam-14-q59",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 14 - Câu 59] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí."
  },
  {
    "id": "swr-exam-14-q60",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 14 - Câu 60] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer)."
  },
  {
    "id": "swr-exam-15-q01",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 1] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu."
  },
  {
    "id": "swr-exam-15-q02",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 15 - Câu 2] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển."
  },
  {
    "id": "swr-exam-15-q03",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 3] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa."
  },
  {
    "id": "swr-exam-15-q04",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 4] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể."
  },
  {
    "id": "swr-exam-15-q05",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 5] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute)."
  },
  {
    "id": "swr-exam-15-q06",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 15 - Câu 6] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình."
  },
  {
    "id": "swr-exam-15-q07",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 15 - Câu 7] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết."
  },
  {
    "id": "swr-exam-15-q08",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 15 - Câu 8] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm."
  },
  {
    "id": "swr-exam-15-q09",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 9] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email)."
  },
  {
    "id": "swr-exam-15-q10",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 10] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng."
  },
  {
    "id": "swr-exam-15-q11",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 11] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA)."
  },
  {
    "id": "swr-exam-15-q12",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 15 - Câu 12] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất."
  },
  {
    "id": "swr-exam-15-q13",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 13] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó."
  },
  {
    "id": "swr-exam-15-q14",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 15 - Câu 14] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point."
  },
  {
    "id": "swr-exam-15-q15",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 15 - Câu 15] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!"
  },
  {
    "id": "swr-exam-15-q16",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 16] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows)."
  },
  {
    "id": "swr-exam-15-q17",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 15 - Câu 17] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó)."
  },
  {
    "id": "swr-exam-15-q18",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 18] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ."
  },
  {
    "id": "swr-exam-15-q19",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 19] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống)."
  },
  {
    "id": "swr-exam-15-q20",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 20] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi)."
  },
  {
    "id": "swr-exam-15-q21",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 21] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật)."
  },
  {
    "id": "swr-exam-15-q22",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 15 - Câu 22] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này)."
  },
  {
    "id": "swr-exam-15-q23",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 23] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không."
  },
  {
    "id": "swr-exam-15-q24",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 24] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability)."
  },
  {
    "id": "swr-exam-15-q25",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 15 - Câu 25] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí."
  },
  {
    "id": "swr-exam-15-q26",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 26] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer)."
  },
  {
    "id": "swr-exam-15-q27",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 27] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm."
  },
  {
    "id": "swr-exam-15-q28",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 15 - Câu 28] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư."
  },
  {
    "id": "swr-exam-15-q29",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 29] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình."
  },
  {
    "id": "swr-exam-15-q30",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 30] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất."
  },
  {
    "id": "swr-exam-15-q31",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 31] What is Equivalence Partitioning in test case derivation from requirements?",
    "options": [
      {
        "id": "A",
        "text": "Dividing the input data domain into valid and invalid partitions where all values in a partition are treated equivalently by the system."
      },
      {
        "id": "B",
        "text": "Assigning equal developer story points to each requirement."
      },
      {
        "id": "C",
        "text": "Splitting the database into identical mirrored read replicas."
      },
      {
        "id": "D",
        "text": "Balancing network traffic equally across web servers."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Equivalence Partitioning (Phân lớp tương đương)** chia tập dữ liệu đầu vào thành các lớp tương đương hợp lệ và không hợp lệ, giúp giảm số lượng test case cần chạy mà vẫn bảo đảm độ bao phủ yêu cầu."
  },
  {
    "id": "swr-exam-15-q32",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 15 - Câu 32] Which of the following is considered a 'Constraint' rather than a functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The application must be developed using Java 17 and deployed on Apache Tomcat 10."
      },
      {
        "id": "B",
        "text": "The application must allow users to reset their forgotten passwords via email."
      },
      {
        "id": "C",
        "text": "The application must calculate shipping fees based on package weight and postal code."
      },
      {
        "id": "D",
        "text": "The application must export account statements into Excel format."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Việc ép buộc dùng ngôn ngữ Java 17 hay máy chủ Apache Tomcat là một **Ràng buộc công nghệ (Implementation Constraint)**, hạn chế sự lựa chọn thiết kế của nhóm phát triển."
  },
  {
    "id": "swr-exam-15-q33",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 33] In data modeling for requirements analysis, what does a CRUD Matrix represent?",
    "options": [
      {
        "id": "A",
        "text": "A matrix mapping system processes or use cases to data entities, identifying where each entity is Created, Read, Updated, or Deleted."
      },
      {
        "id": "B",
        "text": "A report of all crashed database queries during load testing."
      },
      {
        "id": "C",
        "text": "A security audit log of invalid login attempts."
      },
      {
        "id": "D",
        "text": "A timeline of project milestone releases."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **CRUD Matrix** ánh xạ giữa Use Cases / Processes với Data Entities (Create, Read, Update, Delete) để phát hiện thực thể bị thiếu chức năng tạo hoặc không bao giờ được đọc/xóa."
  },
  {
    "id": "swr-exam-15-q34",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 34] What does a Dialog Map model in user interface requirements analysis?",
    "options": [
      {
        "id": "A",
        "text": "A state-transition diagram showing screens, dialog boxes, and the navigation pathways triggered by user actions between them."
      },
      {
        "id": "B",
        "text": "A transcript of chat messages between customer support and clients."
      },
      {
        "id": "C",
        "text": "A network topology diagram of server routers and firewalls."
      },
      {
        "id": "D",
        "text": "A speech-to-text algorithm for voice assistant processing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Dialog Map** là sơ đồ kiến trúc điều hướng giao diện (UI navigation model), thể hiện các màn hình và mũi tên chuyển đổi giữa các màn hình khi người dùng thực hiện một hành động cụ thể."
  },
  {
    "id": "swr-exam-15-q35",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 35] Which of the following best defines a Functional Requirement according to Karl Wiegers?",
    "options": [
      {
        "id": "A",
        "text": "Statements of services the system should provide, how the system should react to particular inputs, and how the system should behave in particular situations."
      },
      {
        "id": "B",
        "text": "A high-level business objective of the organization that sponsors the project."
      },
      {
        "id": "C",
        "text": "A constraint on the development tools, programming language, or platform."
      },
      {
        "id": "D",
        "text": "A characteristic or quality attribute that describes how well the system performs a function."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yêu cầu chức năng (Functional Requirement) mô tả những gì hệ thống PHẢI LÀM (hành vi, chức năng, phản ứng trước các input và điều kiện cụ thể).\n- B là Business Requirement (yêu cầu nghiệp vụ cấp cao).\n- C là Ràng buộc thiết kế/triển khai (Constraint).\n- D là Yêu cầu phi chức năng/Thuộc tính chất lượng (Non-functional Requirement / Quality Attribute)."
  },
  {
    "id": "swr-exam-15-q36",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 15 - Câu 36] What are the three levels of software requirements defined in Karl Wiegers' requirements engineering framework?",
    "options": [
      {
        "id": "A",
        "text": "Business Requirements, User Requirements, and Functional Requirements"
      },
      {
        "id": "B",
        "text": "System Requirements, Hardware Requirements, and Software Requirements"
      },
      {
        "id": "C",
        "text": "Initial Requirements, Intermediate Requirements, and Final Requirements"
      },
      {
        "id": "D",
        "text": "Architectural Requirements, Component Requirements, and Unit Requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khung chuẩn của Karl Wiegers gồm 3 tầng yêu cầu:\n  1. **Business Requirements**: Mục tiêu kinh doanh, Vision & Scope của doanh nghiệp.\n  2. **User Requirements**: Mục tiêu và nhiệm vụ của người dùng (Use cases, User stories, Scenarios).\n  3. **Functional Requirements**: Mô tả chi tiết chức năng phần mềm trong SRS để developer lập trình."
  },
  {
    "id": "swr-exam-15-q37",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 15 - Câu 37] Which document primarily defines the Vision and Scope of a software project, establishing boundaries and business objectives?",
    "options": [
      {
        "id": "A",
        "text": "Vision and Scope Document (or Project Charter)"
      },
      {
        "id": "B",
        "text": "Software Requirements Specification (SRS)"
      },
      {
        "id": "C",
        "text": "Software Architecture Document (SAD)"
      },
      {
        "id": "D",
        "text": "Detailed Test Plan Document"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tài liệu **Vision and Scope** (hoặc Project Charter) thiết lập ranh giới kinh doanh, mục tiêu chiến lược và các tiêu chí thành công của dự án trước khi đi sâu vào tài liệu SRS chi tiết."
  },
  {
    "id": "swr-exam-15-q38",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 15 - Câu 38] According to the IEEE 830 standard, which of the following is NOT a characteristic of a well-written software requirement?",
    "options": [
      {
        "id": "A",
        "text": "Ambiguous"
      },
      {
        "id": "B",
        "text": "Verifiable (Testable)"
      },
      {
        "id": "C",
        "text": "Complete"
      },
      {
        "id": "D",
        "text": "Consistent"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn IEEE 830 / ISO 29148 yêu cầu yêu cầu phải **Unambiguous** (không mơ hồ, chỉ có một cách hiểu duy nhất). 'Ambiguous' (mơ hồ) là khuyết tật lớn nhất của yêu cầu phần mềm."
  },
  {
    "id": "swr-exam-15-q39",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 39] Which of the following is an example of a Non-Functional Requirement (Quality Attribute)?",
    "options": [
      {
        "id": "A",
        "text": "The system shall encrypt all sensitive customer data at rest using AES-256."
      },
      {
        "id": "B",
        "text": "The system shall allow users to search products by category and price range."
      },
      {
        "id": "C",
        "text": "The system shall generate a monthly PDF sales report on the 1st of every month."
      },
      {
        "id": "D",
        "text": "The system shall send an email confirmation after an order is paid."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Mã hóa dữ liệu bằng AES-256 là thuộc tính chất lượng về **Bảo mật (Security - Non-functional)**.\n- B, C, D đều là Functional Requirements (mô tả chức năng tìm kiếm, xuất báo cáo, gửi email)."
  },
  {
    "id": "swr-exam-15-q40",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 40] Which elicitation technique involves bringing together key stakeholders for an intensive, focused session facilitated by a neutral moderator?",
    "options": [
      {
        "id": "A",
        "text": "Facilitated Workshop (JAD / Requirements Workshop)"
      },
      {
        "id": "B",
        "text": "Unstructured passive observation"
      },
      {
        "id": "C",
        "text": "Online survey with closed questions"
      },
      {
        "id": "D",
        "text": "Reverse engineering from legacy code"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Requirements Workshop (JAD - Joint Application Development)** là kỹ thuật hiệu quả nhất để thu thập yêu cầu từ nhiều bên liên quan (cross-functional stakeholders), được điều phối bởi một Facilitator chuyên nghiệp để đạt được đồng thuận nhanh chóng."
  },
  {
    "id": "swr-exam-15-q41",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 41] What is the role of a 'Project Champion' in Karl Wiegers' requirements engineering process?",
    "options": [
      {
        "id": "A",
        "text": "A designated representative of a specific user class who serves as the primary liaison to the business analyst."
      },
      {
        "id": "B",
        "text": "The project sponsor who funds the software development."
      },
      {
        "id": "C",
        "text": "The lead software architect responsible for system database design."
      },
      {
        "id": "D",
        "text": "The quality assurance manager signing off on bug reports."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Project Champion** là đại diện nòng cốt của một nhóm người dùng (user class), trực tiếp cung cấp nhu cầu, trả lời thắc mắc, phân xử xung đột yêu cầu và nghiệm thu tài liệu phân tích cùng Business Analyst (BA)."
  },
  {
    "id": "swr-exam-15-q42",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 15 - Câu 42] Which technique is most effective when trying to elicit requirements from geographically dispersed stakeholders?",
    "options": [
      {
        "id": "A",
        "text": "Surveys and questionnaires distributed electronically"
      },
      {
        "id": "B",
        "text": "In-person shadow observation"
      },
      {
        "id": "C",
        "text": "On-site brown bag lunches"
      },
      {
        "id": "D",
        "text": "Physical whiteboard brainstorming"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi các bên liên quan phân tán địa lý (geographically dispersed), khảo sát và bảng câu hỏi trực tuyến là phương pháp thu thập dữ liệu diện rộng chi phí thấp và đồng bộ nhất."
  },
  {
    "id": "swr-exam-15-q43",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 43] What is a 'Persona' in requirements elicitation and user experience design?",
    "options": [
      {
        "id": "A",
        "text": "A fictitious, archetypal character representing a specific user class with typical goals, behaviors, and pain points."
      },
      {
        "id": "B",
        "text": "An actual named customer who signs the project contract."
      },
      {
        "id": "C",
        "text": "A legal disclaimer identifying user liabilities."
      },
      {
        "id": "D",
        "text": "A software agent or bot simulating user requests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Persona** là chân dung người dùng đại diện giả định nhưng dựa trên nghiên cứu thực tế, giúp nhóm phát triển thấu cảm và hiểu rõ hành vi, mục tiêu của nhóm người dùng đó."
  },
  {
    "id": "swr-exam-15-q44",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 15 - Câu 44] In a Use Case Diagram, what is the meaning of an <<include>> relationship between Use Case A and Use Case B?",
    "options": [
      {
        "id": "A",
        "text": "Use Case A ALWAYS unconditionally executes the behavior defined in Use Case B."
      },
      {
        "id": "B",
        "text": "Use Case B optionally extends Use Case A under specific runtime conditions."
      },
      {
        "id": "C",
        "text": "Use Case A inherits the attributes and behavior of Use Case B."
      },
      {
        "id": "D",
        "text": "Use Case B can only be executed by an Administrator actor."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quan hệ `<<include>>` thể hiện sự tái sử dụng bắt buộc: Use Case gốc (Base Use Case) luôn luôn kích hoạt và thực thi Base -> Included Use Case.\n- `<<extend>>` mới là quan hệ tùy chọn có điều kiện (optional/conditional) với Extension Point."
  },
  {
    "id": "swr-exam-15-q45",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 15 - Câu 45] In a Use Case Diagram, how is an <<extend>> relationship drawn between an extending use case and a base use case?",
    "options": [
      {
        "id": "A",
        "text": "A dashed arrow pointing from the extending use case to the base use case"
      },
      {
        "id": "B",
        "text": "A dashed arrow pointing from the base use case to the extending use case"
      },
      {
        "id": "C",
        "text": "A solid arrow with a hollow triangle pointing to the base use case"
      },
      {
        "id": "D",
        "text": "A bidirectional solid line without arrowheads"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Quy tắc chuẩn UML: Mũi tên của quan hệ `<<extend>>` luôn **hướng từ Extending Use Case VỀ Base Use Case** (Extending ---> Base). Đây là bẫy kinh điển trong bài thi FE!"
  },
  {
    "id": "swr-exam-15-q46",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 46] Which visual analysis model is best suited to show the interaction between the system being designed and external entities (people, organizations, other systems)?",
    "options": [
      {
        "id": "A",
        "text": "Context Diagram (DFD Level 0)"
      },
      {
        "id": "B",
        "text": "Class Diagram"
      },
      {
        "id": "C",
        "text": "Sequence Diagram"
      },
      {
        "id": "D",
        "text": "Database Entity Relationship Diagram (ERD)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Context Diagram** (Data Flow Diagram cấp 0) mô hình hóa toàn bộ hệ thống dưới dạng một tiến trình duy nhất (process hình tròn/chữ nhật bo tròn) và kết nối với các **External Entities** thông qua các luồng dữ liệu (Data Flows)."
  },
  {
    "id": "swr-exam-15-q47",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 15 - Câu 47] In a Context Diagram, what elements are strictly prohibited from appearing?",
    "options": [
      {
        "id": "A",
        "text": "Data stores (databases) and direct data flows between two external entities"
      },
      {
        "id": "B",
        "text": "External entities (terminators)"
      },
      {
        "id": "C",
        "text": "Data flows directed into the central system process"
      },
      {
        "id": "D",
        "text": "The central process representing the entire software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Trong Context Diagram:\n  1. KHÔNG được có kho dữ liệu (Data Stores / Data Bases).\n  2. KHÔNG được có mũi tên nối trực tiếp giữa 2 External Entities (vì hệ thống đang xét không quản lý giao tiếp ngoài đó)."
  },
  {
    "id": "swr-exam-15-q48",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 48] Which visual model organizes activities into horizontal or vertical columns corresponding to the roles or departments responsible for performing them?",
    "options": [
      {
        "id": "A",
        "text": "Swimlane Flowchart (Activity Diagram with Partitions)"
      },
      {
        "id": "B",
        "text": "State Machine Diagram"
      },
      {
        "id": "C",
        "text": "Entity Relationship Diagram"
      },
      {
        "id": "D",
        "text": "Use Case Diagram"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Swimlane Flowchart / Diagram** phân chia quy trình thành các làn (lanes) đại diện cho từng Actor hoặc Hệ thống, giúp chỉ rõ ai chịu trách nhiệm thực hiện từng bước trong quy trình nghiệp vụ."
  },
  {
    "id": "swr-exam-15-q49",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 49] In a Use Case Specification, what does the 'Precondition' define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system and environment that must be true BEFORE the use case can be initiated."
      },
      {
        "id": "B",
        "text": "The state of the system AFTER the use case has successfully executed."
      },
      {
        "id": "C",
        "text": "The list of alternative steps taken when an error occurs."
      },
      {
        "id": "D",
        "text": "The security privileges required by the database server."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Precondition** (Điều kiện tiên quyết) là trạng thái hệ thống PHẢI ĐÚNG TRƯỚC KHI Use Case có thể bắt đầu (ví dụ: Người dùng đã đăng nhập thành công vào hệ thống)."
  },
  {
    "id": "swr-exam-15-q50",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 50] In a Use Case Specification, what does the 'Postcondition' (Guarantee) define?",
    "options": [
      {
        "id": "A",
        "text": "The state of the system that must be true after the use case successfully completes its flow."
      },
      {
        "id": "B",
        "text": "The initial user inputs before submitting a form."
      },
      {
        "id": "C",
        "text": "The time required to compile the software application."
      },
      {
        "id": "D",
        "text": "The hardware prerequisites for installing the database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Postcondition** (Điều kiện sau / Kết quả đảm bảo) mô tả trạng thái mà hệ thống phải đạt được ngay sau khi Use Case thực thi hoàn tất (ví dụ: Đơn hàng đã được lưu với trạng thái 'Đã thanh toán', email xác nhận đã gửi)."
  },
  {
    "id": "swr-exam-15-q51",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 51] Which of the following is an example of a Business Rule of type 'Constraint'?",
    "options": [
      {
        "id": "A",
        "text": "A customer must be at least 18 years old to open an online brokerage account."
      },
      {
        "id": "B",
        "text": "Discount equals 10% when total purchase exceeds $100."
      },
      {
        "id": "C",
        "text": "If order status is 'Delivered', send a feedback request after 3 days."
      },
      {
        "id": "D",
        "text": "The system displays product prices in Vietnamese Dong."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ràng buộc (Constraint) là quy tắc bắt buộc giới hạn hành vi hoặc điều kiện của tổ chức/luật pháp (ví dụ: tuổi tối thiểu để mở tài khoản).\n- B là Computation (tính toán).\n- C là Action Enabler (kích hoạt hành động).\n- D là Fact (sự thật)."
  },
  {
    "id": "swr-exam-15-q52",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 15 - Câu 52] What does the MoSCoW prioritization technique stand for?",
    "options": [
      {
        "id": "A",
        "text": "Must have, Should have, Could have, Won't have (this time)"
      },
      {
        "id": "B",
        "text": "Maximum, Optimal, Standard, Custom, Optional, Warning"
      },
      {
        "id": "C",
        "text": "Mandatory, Secondary, Core, Operational, Workflow"
      },
      {
        "id": "D",
        "text": "Modern, Scalable, Compliant, Optimized, Web-ready"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **MoSCoW** là kỹ thuật phân bổ độ ưu tiên phổ biến trong Agile & RE: Must have (bắt buộc), Should have (nên có), Could have (có thể có nếu kịp), Won't have (chưa làm trong đợt phát hành này)."
  },
  {
    "id": "swr-exam-15-q53",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 53] What is the difference between Verification and Validation in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "Verification asks 'Are we building the product right?', while Validation asks 'Are we building the right product?'"
      },
      {
        "id": "B",
        "text": "Verification is done by customers, while Validation is done by developers."
      },
      {
        "id": "C",
        "text": "Verification checks system performance, while Validation checks system security."
      },
      {
        "id": "D",
        "text": "Verification occurs only after deployment, while Validation occurs during coding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Verification** (\"Are we building the product right?\"): Kiểm tra sản phẩm có thỏa mãn tài liệu đặc tả và tiêu chuẩn kỹ thuật không.\n- **Validation** (\"Are we building the right product?\"): Kiểm tra sản phẩm có thực sự giải quyết đúng vấn đề và nhu cầu của khách hàng/người dùng cuối không."
  },
  {
    "id": "swr-exam-15-q54",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 54] What is a Requirements Traceability Matrix (RTM) primarily used for?",
    "options": [
      {
        "id": "A",
        "text": "Tracing requirements forward to design/code/test cases and backward to business needs and stakeholder requests."
      },
      {
        "id": "B",
        "text": "Tracking developer hours and project payroll expenses."
      },
      {
        "id": "C",
        "text": "Calculating CPU and memory utilization metrics."
      },
      {
        "id": "D",
        "text": "Storing database schema migration scripts."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Traceability Matrix (RTM)** bảo đảm mọi yêu cầu nghiệp vụ đều được hiện thực hóa trong code và test case (Forward Traceability), đồng thời không có tính năng nào bị 'dư thừa' không bắt nguồn từ yêu cầu khách hàng (Backward Traceability)."
  },
  {
    "id": "swr-exam-15-q55",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "[Đề 15 - Câu 55] Which of the following terms describes the tendency for the project scope to continually expand beyond its original boundaries?",
    "options": [
      {
        "id": "A",
        "text": "Scope Creep"
      },
      {
        "id": "B",
        "text": "Scope Reduction"
      },
      {
        "id": "C",
        "text": "Baseline Drift"
      },
      {
        "id": "D",
        "text": "Refactoring"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Scope Creep** (phình phạm vi) là hiện tượng các yêu cầu mới liên tục được bổ sung vào dự án mà không có sự kiểm soát, thỏa thuận về thời gian hay chi phí."
  },
  {
    "id": "swr-exam-15-q56",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 56] What is the primary responsibility of a Change Control Board (CCB) in a software project?",
    "options": [
      {
        "id": "A",
        "text": "Reviewing proposed requirement changes, assessing their impact, and deciding whether to accept, reject, or defer them."
      },
      {
        "id": "B",
        "text": "Writing unit tests and integration tests for software modules."
      },
      {
        "id": "C",
        "text": "Deploying containerized code to cloud production servers."
      },
      {
        "id": "D",
        "text": "Designing user interface icons and visual branding."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Hội đồng Kiểm soát Thay đổi (CCB - Change Control Board)** đánh giá tác động kỹ thuật và kinh doanh của các yêu cầu thay đổi (CR) và ra quyết định phê duyệt (Approve), từ chối (Reject), hoặc hoãn (Defer)."
  },
  {
    "id": "swr-exam-15-q57",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 57] What is the main objective of creating a Throwaway Prototype in requirements engineering?",
    "options": [
      {
        "id": "A",
        "text": "To clarify ambiguous requirements and explore user interface concepts, then discard the code."
      },
      {
        "id": "B",
        "text": "To serve as the final foundation for the production release."
      },
      {
        "id": "C",
        "text": "To conduct automated stress and load testing on backend databases."
      },
      {
        "id": "D",
        "text": "To train end users on the live enterprise database."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Throwaway Prototype** (mẫu thử dùng một lần) được dựng nhanh nhằm làm rõ các yêu cầu chưa chắc chắn và chốt giao diện với khách hàng, sau đó bị loại bỏ hoàn toàn chứ không phát triển thành mã nguồn sản phẩm."
  },
  {
    "id": "swr-exam-15-q58",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "[Đề 15 - Câu 58] Which of the following statements represents an 'Ambiguous Requirement'?",
    "options": [
      {
        "id": "A",
        "text": "The web page shall load quickly and display user-friendly error messages."
      },
      {
        "id": "B",
        "text": "The system shall respond to 95% of search queries within 500 milliseconds under a load of 1,000 concurrent users."
      },
      {
        "id": "C",
        "text": "Passwords must contain at least 8 characters, including one uppercase letter and one numeric digit."
      },
      {
        "id": "D",
        "text": "The database backup shall occur automatically every Sunday at 02:00 UTC."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Các từ như \"quickly\" (nhanh chóng) và \"user-friendly\" (thân thiện) là từ ngữ cảm tính, không đo lường được (unmeasurable/untestable), dẫn đến hiểu lầm giữa khách hàng và kỹ sư."
  },
  {
    "id": "swr-exam-15-q59",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 59] In requirements validation, what is a 'Formal Inspection' (Fagan Inspection)?",
    "options": [
      {
        "id": "A",
        "text": "A rigorous, peer-review process with well-defined roles, checklist-driven defect detection, and documented metrics."
      },
      {
        "id": "B",
        "text": "An informal casual chat over coffee between two developers."
      },
      {
        "id": "C",
        "text": "Running automated unit tests in a Continuous Integration pipeline."
      },
      {
        "id": "D",
        "text": "A live demonstration of the final software product to executive sponsors."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Formal Inspection** (Fagan Inspection) là phương pháp review tài liệu đặc tả chặt chẽ nhất với các vai trò phân định rõ ràng (Moderator, Author, Reader, Recorder, Inspector) cùng checklist chuẩn để phát hiện khuyết tật trước khi lập trình."
  },
  {
    "id": "swr-exam-15-q60",
    "subjectId": "swr-past",
    "chapterId": "swr-ch-mock",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "[Đề 15 - Câu 60] Which testing technique derives test cases from boundary conditions of input domains identified in functional requirements?",
    "options": [
      {
        "id": "A",
        "text": "Boundary Value Analysis (BVA)"
      },
      {
        "id": "B",
        "text": "Exploratory testing"
      },
      {
        "id": "C",
        "text": "Random monkey testing"
      },
      {
        "id": "D",
        "text": "Static code analysis"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- **Boundary Value Analysis (BVA)** là kỹ thuật phân tích giá trị biên (ví dụ: min, min-1, min+1, max, max-1, max+1), đây là nơi các lỗi phần mềm thường tập trung xuất hiện nhiều nhất."
  }
];
