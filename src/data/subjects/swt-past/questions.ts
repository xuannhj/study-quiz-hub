import type { Question } from "../../../types/study";

export const swtPastQuestions: Question[] = [
  {
    "id": "swt-past-exam-01-q01",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "One of the following is not a part of white box testing as per BS7925-II standards:",
    "options": [
      {
        "id": "A",
        "text": "Random testing"
      },
      {
        "id": "B",
        "text": "Data Flow testing"
      },
      {
        "id": "C",
        "text": "Statement testing"
      },
      {
        "id": "D",
        "text": "Syntax testing"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Theo chuẩn kiểm thử thành phần BS 7925-2, các kỹ thuật kiểm thử hộp trắng (white-box / structure-based) bao gồm Statement testing, Branch/Decision testing, Data Flow testing... Random testing (kiểm thử ngẫu nhiên) không phải là kỹ thuật kiểm thử hộp trắng.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_01.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 1 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q02",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Designing the test environment set-up and identifying any required infrastructure and tools are a part of which phase?",
    "options": [
      {
        "id": "A",
        "text": "Test Implementation and execution"
      },
      {
        "id": "B",
        "text": "Test Analysis and Design"
      },
      {
        "id": "C",
        "text": "Evaluating the Exit Criteria and reporting"
      },
      {
        "id": "D",
        "text": "Test Closure Activities"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Theo ISTQB Foundation Level, việc thiết kế cài đặt môi trường kiểm thử (test environment set-up) và xác định hạ tầng, công cụ cần thiết là một hoạt động chính trong giai đoạn Test Analysis and Design (Phân tích và thiết kế kiểm thử).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_02.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 2 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q03",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Methodologies adopted while performing Maintenance Testing:",
    "options": [
      {
        "id": "A",
        "text": "Breadth Test and Depth Test"
      },
      {
        "id": "B",
        "text": "Re-testing"
      },
      {
        "id": "C",
        "text": "Confirmation Testing"
      },
      {
        "id": "D",
        "text": "Sanity Testing"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Khi thực hiện kiểm thử bảo trì (Maintenance Testing), phương pháp thường được áp dụng là Breadth Test (kiểm thử theo bề rộng toàn bộ chức năng ở mức tổng quan) và Depth Test (kiểm thử chuyên sâu vào các khu vực bị ảnh hưởng bởi thay đổi).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_03.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 3 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q04",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "System Integration testing should be done after:",
    "options": [
      {
        "id": "A",
        "text": "Integration testing"
      },
      {
        "id": "B",
        "text": "System testing"
      },
      {
        "id": "C",
        "text": "Unit testing"
      },
      {
        "id": "D",
        "text": "Component integration testing"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Kiểm thử tích hợp hệ thống (System Integration Testing) kiểm tra sự tương tác giữa hệ thống vừa xây dựng với các hệ thống bên ngoài khác, do đó được thực hiện sau khi hoàn thành kiểm thử hệ thống (System Testing).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_04.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 4 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q05",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Drivers are also known as:\ni. Spade\nii. Test harness\niii. Scaffolding",
    "options": [
      {
        "id": "A",
        "text": "i, ii are true and iii is false"
      },
      {
        "id": "B",
        "text": "i, iii are true and ii is false"
      },
      {
        "id": "C",
        "text": "ii, iii are true and i is false"
      },
      {
        "id": "D",
        "text": "All of i, ii and iii are true"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Trong kiểm thử thành phần và tích hợp (bottom-up), Drivers còn được gọi là Test harness hoặc Scaffolding (các thành phần hỗ trợ gọi và điều khiển module đang kiểm thử), không gọi là Spade.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_05.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 5 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q06",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is not a major task of Exit criteria?",
    "options": [
      {
        "id": "A",
        "text": "Checking test logs against the exit criteria specified in test planning."
      },
      {
        "id": "B",
        "text": "Logging the outcome of test execution."
      },
      {
        "id": "C",
        "text": "Assessing if more tests are needed"
      },
      {
        "id": "D",
        "text": "Writing a test summary report for stakeholders."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Ghi nhận kết quả thực thi kiểm thử (Logging the outcome of test execution) thuộc giai đoạn Test Implementation and Execution, không phải giai đoạn Evaluating Exit Criteria and Reporting.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_06.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 6 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q07",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following defines the expected results of a test?",
    "options": [
      {
        "id": "A",
        "text": "Test case specification."
      },
      {
        "id": "B",
        "text": "Test design specification."
      },
      {
        "id": "C",
        "text": "Test procedure specification."
      },
      {
        "id": "D",
        "text": "Test results."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Theo chuẩn IEEE 829 và ISTQB, Test case specification (Đặc tả ca kiểm thử) định nghĩa tập giá trị đầu vào, điều kiện tiên quyết, kết quả mong đợi (expected results) và điều kiện hậu kiểm cho một bài kiểm thử.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_07.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 7 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q08",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "When a defect is detected and fixed then the software should be retested to confirm that the original defect has been successfully removed. This is called",
    "options": [
      {
        "id": "A",
        "text": "Regression testing"
      },
      {
        "id": "B",
        "text": "Maintenance testing"
      },
      {
        "id": "C",
        "text": "Confirmation testing"
      },
      {
        "id": "D",
        "text": "None of the above"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Kiểm thử lại để xác nhận rằng lỗi ban đầu đã được sửa thành công gọi là Confirmation testing (kiểm thử xác nhận / re-testing), khác với Regression testing dùng để kiểm tra các tác dụng phụ không mong muốn.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_08.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 8 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q09",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What information need not be included in a test incident report:",
    "options": [
      {
        "id": "A",
        "text": "How to fix the fault"
      },
      {
        "id": "B",
        "text": "How to reproduce the fault"
      },
      {
        "id": "C",
        "text": "Test environment details"
      },
      {
        "id": "D",
        "text": "Severity, priority"
      },
      {
        "id": "E",
        "text": "The actual and expected outcomes"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Báo cáo sự cố kiểm thử (Test incident report) cần ghi rõ cách tái hiện lỗi, môi trường, mức độ nghiêm trọng/ưu tiên và kết quả thực tế so với mong đợi; việc xác định cách sửa lỗi (How to fix the fault) thuộc trách nhiệm của lập trình viên, không bắt buộc trong báo cáo lỗi.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_09.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 9 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q10",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The later in the development life cycle a fault is discovered, the more expensive it is to fix. Why?",
    "options": [
      {
        "id": "A",
        "text": "The documentation is poor, so it takes longer to find out what the software is doing."
      },
      {
        "id": "B",
        "text": "Wages are rising"
      },
      {
        "id": "C",
        "text": "The fault has been built into more documentation, code, tests, etc."
      },
      {
        "id": "D",
        "text": "None of the others"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Càng phát hiện lỗi muộn trong vòng đời phát triển, lỗi đó đã lan truyền và được xây dựng vào nhiều tài liệu đặc tả, thiết kế, mã nguồn và ca kiểm thử hơn, nên chi phí sửa chữa và kiểm thử lại tăng lên rất nhiều.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_10.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 10 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q11",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A Test Plan Outline contains which of the following:\ni. Test Items\nii. Test Scripts\niii. Test Deliverables\niv. Responsibilities",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii are true and iv is false"
      },
      {
        "id": "B",
        "text": "i, iii, iv are true and ii is false"
      },
      {
        "id": "C",
        "text": "ii, iii are true and i and iv are false"
      },
      {
        "id": "D",
        "text": "i, ii are false and iii, iv are true"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Theo chuẩn IEEE 829, cấu trúc của Test Plan bao gồm Test Items (i), Test Deliverables (iii) và Responsibilities (iv), còn Test Scripts (ii) là sản phẩm tạo ra ở giai đoạn triển khai kiểm thử chứ không nằm trong Test Plan Outline.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_11.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 11 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q12",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Quality Assurance is the process by which product quality is compared with the application standards and the action taken when nonconformance is detected.",
    "options": [
      {
        "id": "A",
        "text": "True"
      },
      {
        "id": "B",
        "text": "False"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Phát biểu trên mô tả Quality Control (kiểm soát chất lượng - tập trung vào sản phẩm), không phải Quality Assurance (đảm bảo chất lượng - tập trung vào tuân thủ quy trình để ngăn ngừa lỗi).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_12.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 12 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q13",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The inputs for developing a test plan are taken from",
    "options": [
      {
        "id": "A",
        "text": "Project plan"
      },
      {
        "id": "B",
        "text": "Business plan"
      },
      {
        "id": "C",
        "text": "Support plan"
      },
      {
        "id": "D",
        "text": "None of the others"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Đầu vào chính để xây dựng kế hoạch kiểm thử (Test Plan) được lấy từ kế hoạch dự án (Project Plan) nhằm đồng bộ phạm vi, lịch trình, nguồn lực và các mốc bàn giao.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_13.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 13 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q14",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a type of non-functional testing?",
    "options": [
      {
        "id": "A",
        "text": "Usability testing."
      },
      {
        "id": "B",
        "text": "Statement Coverage."
      },
      {
        "id": "C",
        "text": "Dataflow testing."
      },
      {
        "id": "D",
        "text": "Cause-effect graphing"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Usability testing (kiểm thử tính khả dụng) là một loại kiểm thử phi chức năng (non-functional testing). Các đáp án còn lại là kỹ thuật thiết kế kiểm thử hộp trắng (B, C) và hộp đen chức năng (D).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_14.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 14 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q15",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Measurement dysfunction is a problem because:",
    "options": [
      {
        "id": "A",
        "text": "Even though the numbers you look at appear better, to achieve these numbers, people are doing other aspects of their work much less well."
      },
      {
        "id": "B",
        "text": "We don't know how to measure a variable (our measurement is dysfunctional) and so we don't know how to interpret the result."
      },
      {
        "id": "C",
        "text": "You are measuring the wrong thing and thus reaching the wrong conclusions."
      },
      {
        "id": "D",
        "text": "All of the others"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Measurement dysfunction (rối loạn đo lường) xảy ra khi con người tối ưu hóa các chỉ số bị đo đạc để con số trông đẹp hơn, nhưng lại đánh đổi bằng việc làm kém đi các khía cạnh quan trọng khác của công việc.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_15.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 15 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q16",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Some tools are geared more for developer use. For the 5 tools listed, which statement BEST details those for developers?\ni) Performance testing tools.\nii) Coverage measurement tools.\niii) Test comparators.\niv) Dynamic analysis tools.\nv) Incident management tools.",
    "options": [
      {
        "id": "A",
        "text": "i, iii, and iv are more for developers"
      },
      {
        "id": "B",
        "text": "ii and iv are more for developers."
      },
      {
        "id": "C",
        "text": "ii, iii, and iv are more for developers."
      },
      {
        "id": "D",
        "text": "ii and iii are more for developers"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Theo phân loại công cụ kiểm thử của ISTQB, công cụ đo độ bao phủ mã (Coverage measurement tools - ii) và công cụ phân tích động (Dynamic analysis tools - iv) chủ yếu hướng đến lập trình viên (developer).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_16.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 16 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q17",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which activity in the fundamental test process creates test suites for efficient test execution?",
    "options": [
      {
        "id": "A",
        "text": "Implementation and execution."
      },
      {
        "id": "B",
        "text": "Planning and control."
      },
      {
        "id": "C",
        "text": "Analysis and design."
      },
      {
        "id": "D",
        "text": "Test closure."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Trong quy trình kiểm thử cơ bản (Fundamental Test Process) của ISTQB, việc gom các thủ tục kiểm thử thành bộ kiểm thử (test suites) để thực thi hiệu quả thuộc giai đoạn Test Implementation and Execution.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_17.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 17 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q18",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What determines the level of risk?",
    "options": [
      {
        "id": "A",
        "text": "The cost of dealing with an adverse event if it occurs."
      },
      {
        "id": "B",
        "text": "The probability that an adverse event will occur."
      },
      {
        "id": "C",
        "text": "The amount of testing planned before release of a system."
      },
      {
        "id": "D",
        "text": "The likelihood of an adverse event and the impact of the event."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Mức độ rủi ro (level of risk) được xác định bởi hai yếu tố: xác suất xảy ra sự cố bất lợi (likelihood) và mức độ tác động/thiệt hại khi sự cố đó xảy ra (impact).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_18.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 18 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q19",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Pick the best definition of quality",
    "options": [
      {
        "id": "A",
        "text": "Quality is job one"
      },
      {
        "id": "B",
        "text": "Zero defects"
      },
      {
        "id": "C",
        "text": "Conformance to requirements"
      },
      {
        "id": "D",
        "text": "Work as designed"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Định nghĩa chuẩn và tốt nhất về chất lượng phần mềm (theo Philip Crosby và ISTQB) là sự phù hợp với các yêu cầu đã đặt ra (Conformance to requirements).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_19.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 19 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q20",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is not a characteristic for Testability?",
    "options": [
      {
        "id": "A",
        "text": "Operability"
      },
      {
        "id": "B",
        "text": "Observability"
      },
      {
        "id": "C",
        "text": "Simplicity"
      },
      {
        "id": "D",
        "text": "Robustness"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Các đặc tính của khả năng kiểm thử (Testability) bao gồm Operability, Observability, Controllability, Decomposability, Simplicity, Stability và Understandability. Robustness (độ bền vững) không nằm trong nhóm đặc tính này.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_20.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 20 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q21",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "With which of the following categories is a test comparator tool USUALLY associated?",
    "options": [
      {
        "id": "A",
        "text": "Tool support for performance and monitoring."
      },
      {
        "id": "B",
        "text": "Tool support for static testing."
      },
      {
        "id": "C",
        "text": "Tool support for test execution and logging."
      },
      {
        "id": "D",
        "text": "Tool support for the management of testing and tests."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Công cụ so sánh kiểm thử (Test comparator) dùng để so sánh kết quả thực tế với kết quả mong đợi, thuộc nhóm công cụ hỗ trợ thực thi và ghi log kiểm thử (Tool support for test execution and logging).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_21.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 21 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q22",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Capture and replay facilities are least likely to be used to",
    "options": [
      {
        "id": "A",
        "text": "Performance testing"
      },
      {
        "id": "B",
        "text": "Recovery testing"
      },
      {
        "id": "C",
        "text": "GUI testing"
      },
      {
        "id": "D",
        "text": "User requirements."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Công cụ Capture and Replay ghi lại và phát lại các thao tác người dùng (thường dùng cho GUI, hồi quy, hiệu năng...), do đó ít có khả năng nhất được dùng cho yêu cầu người dùng (User requirements).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_22.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 22 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q23",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A typical commercial test execution tool would be able to perform all of the following, EXCEPT:",
    "options": [
      {
        "id": "A",
        "text": "Generating expected outputs"
      },
      {
        "id": "B",
        "text": "Replaying inputs according to a programmed script"
      },
      {
        "id": "C",
        "text": "Comparison of expected outcomes with actual outcomes"
      },
      {
        "id": "D",
        "text": "Recording test inputs"
      },
      {
        "id": "E",
        "text": "Reading test values from a data file"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Công cụ thực thi kiểm thử thương mại có thể ghi lại đầu vào, phát lại script, đọc dữ liệu từ file và so sánh kết quả, nhưng không thể tự suy ra hay sinh ra kết quả mong đợi (Generating expected outputs) — điều này cần con người (test oracle) xác định.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_23.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 23 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q24",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Unreachable code would best be found using:",
    "options": [
      {
        "id": "A",
        "text": "Code reviews"
      },
      {
        "id": "B",
        "text": "Code inspections"
      },
      {
        "id": "C",
        "text": "A coverage tool"
      },
      {
        "id": "D",
        "text": "A test management tool"
      },
      {
        "id": "E",
        "text": "A static analysis tool"
      }
    ],
    "correctOptionIds": [
      "E"
    ],
    "explanation": "**Đáp án đúng: E**. Mã không thể chạm tới (unreachable / dead code) được phát hiện hiệu quả và tự động nhất bằng công cụ phân tích tĩnh (Static analysis tool) thông qua phân tích luồng điều khiển mà không cần chạy chương trình.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_24.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 24 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q25",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The principal attributes of tools and automation are (choose one answer)",
    "options": [
      {
        "id": "A",
        "text": "(1) Speed & efficiency"
      },
      {
        "id": "B",
        "text": "(2) Accuracy & precision"
      },
      {
        "id": "C",
        "text": "Both of (1) and (2)"
      },
      {
        "id": "D",
        "text": "None of (1) nor (2)"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Hai thuộc tính cốt lõi của công cụ và tự động hóa kiểm thử là tốc độ & hiệu suất (Speed & efficiency) cùng độ chính xác & độ chuẩn xác (Accuracy & precision).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_25.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 25 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q26",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following tools would be involved in the automation of regression test?",
    "options": [
      {
        "id": "A",
        "text": "Data tester"
      },
      {
        "id": "B",
        "text": "Boundary tester"
      },
      {
        "id": "C",
        "text": "Capture/Playback"
      },
      {
        "id": "D",
        "text": "Output comparator."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Công cụ Capture/Playback (ghi lại và phát lại) được sử dụng phổ biến để tự động hóa các ca kiểm thử hồi quy (regression testing) cần chạy lặp lại nhiều lần.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_26.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 26 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q27",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following activities should be performed during the selection and implementation of a testing tool?\ni) Investigate the organisation's test process.\nii) Conduct a proof of concept.\niii) Implement the selected tool on a project behind schedule to save time.\niv) Identify coaching and mentoring requirements for the use of the selected tool.",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii."
      },
      {
        "id": "B",
        "text": "ii, iii, iv."
      },
      {
        "id": "C",
        "text": "i, iii, iv."
      },
      {
        "id": "D",
        "text": "i, ii, iv."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Khi chọn và triển khai công cụ kiểm thử cần khảo sát quy trình của tổ chức (i), thực hiện thử nghiệm chứng minh tính khả thi / PoC (ii) và xác định nhu cầu đào tạo/hướng dẫn (iv). Không bao giờ áp dụng công cụ mới vào dự án đang chậm tiến độ (iii) vì đường cong học tập sẽ làm dự án chậm thêm.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_27.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 27 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q28",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Defects discovered by static analysis tools include:\ni. Variables that are never used.\nii. Security vulnerabilities.\niii. Programming Standard Violations.\niv. Uncalled functions and procedures.",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv is correct"
      },
      {
        "id": "B",
        "text": "iii is correct; i, ii, iv are incorrect."
      },
      {
        "id": "C",
        "text": "i, ii, iii and iv are incorrect"
      },
      {
        "id": "D",
        "text": "iv, ii is correct"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Công cụ phân tích tĩnh (static analysis tools) có thể phát hiện tất cả các lỗi trên: biến không sử dụng (i), lỗ hổng bảo mật (ii), vi phạm chuẩn lập trình (iii) và hàm/thủ tục không bao giờ được gọi (iv).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_28.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 28 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q29",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Find the mismatch",
    "options": [
      {
        "id": "A",
        "text": "Test data preparation tools - Manipulate Databases"
      },
      {
        "id": "B",
        "text": "Test design tools - Generate test inputs"
      },
      {
        "id": "C",
        "text": "Requirement management tools - Enables individual tests to be traceable"
      },
      {
        "id": "D",
        "text": "Configuration management tools - Check for consistency"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Công cụ quản lý cấu hình (Configuration management tools) dùng để quản lý phiên bản, thay đổi và baseline của sản phẩm phần mềm/tài liệu kiểm thử, không dùng để kiểm tra tính nhất quán của mã nguồn (đó là chức năng của công cụ phân tích tĩnh).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_29.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 29 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q30",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following benefits are MOST likely to be achieved by using test tools?\ni) Easy to access information about tests and testing.\nii) Reduced maintenance of testware.\niii) Easy and cheap to implement.\niv) Greater consistency of tests.",
    "options": [
      {
        "id": "A",
        "text": "ii and iv"
      },
      {
        "id": "B",
        "text": "ii and iii"
      },
      {
        "id": "C",
        "text": "i and iv"
      },
      {
        "id": "D",
        "text": "i and iii"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Lợi ích của công cụ kiểm thử gồm dễ truy cập thông tin về kiểm thử (i) và tăng tính nhất quán, khả năng lặp lại của các bài kiểm thử (iv). Ngược lại, công cụ thường đòi hỏi chi phí triển khai ban đầu và nỗ lực bảo trì testware cao hơn (ii, iii sai).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_30.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 30 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q31",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Find the correct flow of the phases of a formal review",
    "options": [
      {
        "id": "A",
        "text": "Planning, Review meeting, Rework, Kick off"
      },
      {
        "id": "B",
        "text": "Planning, Individual preparation, Kick off, Rework"
      },
      {
        "id": "C",
        "text": "Planning, Review meeting, Rework, Follow up"
      },
      {
        "id": "D",
        "text": "Planning, Individual preparation, Follow up, Kick off"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Trình tự đúng của quy trình review chính thức (formal review) theo ISTQB là: Planning -> Kick-off -> Individual preparation -> Review meeting -> Rework -> Follow-up. Do đó chuỗi con đúng thứ tự là Planning, Review meeting, Rework, Follow up.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_31.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 31 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q32",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Inspections can find all of the following defects or issues, EXCEPT:",
    "options": [
      {
        "id": "A",
        "text": "Variables not defined in the code"
      },
      {
        "id": "B",
        "text": "Spelling and grammar faults in the documents"
      },
      {
        "id": "C",
        "text": "Requirements that have been omitted from the design documents"
      },
      {
        "id": "D",
        "text": "How much of the code has been covered"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Inspection là kỹ thuật kiểm thử tĩnh (không chạy chương trình), nên không thể xác định được mức độ bao phủ mã nguồn (code coverage) — vốn chỉ đo được khi thực thi kiểm thử động.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_32.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 32 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q33",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a Key Characteristics of WalkThrough?",
    "options": [
      {
        "id": "A",
        "text": "Scenario, Dry Run, Peer Group"
      },
      {
        "id": "B",
        "text": "Pre Meeting Preparations"
      },
      {
        "id": "C",
        "text": "Formal Follow Up Process"
      },
      {
        "id": "D",
        "text": "Includes Metrics"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Theo ISTQB, đặc trưng chính của Walkthrough là do tác giả chủ trì và thường sử dụng kịch bản (Scenario), chạy thử trên giấy (Dry Run) với nhóm đồng nghiệp (Peer Group). Các đặc điểm B, C, D thuộc về Inspection.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_33.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 33 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q34",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which type of review is a formal assessment of a work product conducted by one or more qualified independent reviewers to detect defects?",
    "options": [
      {
        "id": "A",
        "text": "Inspection"
      },
      {
        "id": "B",
        "text": "Walkthrough"
      },
      {
        "id": "C",
        "text": "Review"
      },
      {
        "id": "D",
        "text": "Non Conformance"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Inspection là hình thức review chính thức (formal) nhất, được dẫn dắt bởi moderator và thực hiện bởi các reviewer độc lập có chuyên môn nhằm phát hiện lỗi trong sản phẩm công việc.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_34.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 34 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q35",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a static test?",
    "options": [
      {
        "id": "A",
        "text": "Code inspection"
      },
      {
        "id": "B",
        "text": "Coverage analysis"
      },
      {
        "id": "C",
        "text": "Usability assessment"
      },
      {
        "id": "D",
        "text": "Installation test"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Code inspection (thanh tra mã nguồn) là kiểm thử tĩnh vì không cần thực thi phần mềm. Coverage analysis, Usability assessment và Installation test đều là kiểm thử động.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_35.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 35 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q36",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which expression best matches the following characteristics or review processes:\n1. Led by author\n2. Undocumented\n3. No management participation\n4. Led by a trained moderator or leader\n5. Uses entry exit criteria\ns) Inspection\nt) Peer review\nu) Informal review\nv) Walkthrough",
    "options": [
      {
        "id": "A",
        "text": "s = 4, t = 3, u = 2 and 5, v = 1"
      },
      {
        "id": "B",
        "text": "s = 4 and 5, t = 3, u = 2, v = 1"
      },
      {
        "id": "C",
        "text": "s = 1 and 5, t = 3, u = 2, v = 4"
      },
      {
        "id": "D",
        "text": "s = 5, t = 4, u = 3, v = 1 and 2"
      },
      {
        "id": "E",
        "text": "s = 4 and 5, t = 1, u = 2, v = 3"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Inspection (s) do moderator được đào tạo dẫn dắt và dùng tiêu chí vào/ra (4 và 5); Peer/Technical review (t) không có sự tham gia của quản lý (3); Informal review (u) thường không có tài liệu ghi chép (2); Walkthrough (v) do tác giả dẫn dắt (1).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_36.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 36 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q37",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following BEST describes the difference between an inspection and a walkthrough?",
    "options": [
      {
        "id": "A",
        "text": "Both inspections and walkthroughs are led by the author."
      },
      {
        "id": "B",
        "text": "An inspection is led by a moderator and a walkthrough is led by the author."
      },
      {
        "id": "C",
        "text": "Both inspections and walkthroughs are led by a trained moderator."
      },
      {
        "id": "D",
        "text": "A walkthrough is led by the author. The author is not present during inspections."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Điểm khác biệt chính giữa Inspection và Walkthrough là Inspection được điều phối bởi một Moderator (người điều phối được đào tạo), còn Walkthrough do chính Author (tác giả tài liệu/mã nguồn) dẫn dắt.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_37.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 37 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q38",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A person who documents all the issues, problems and open points that were identified during a formal review",
    "options": [
      {
        "id": "A",
        "text": "Moderator"
      },
      {
        "id": "B",
        "text": "Scribe"
      },
      {
        "id": "C",
        "text": "Author"
      },
      {
        "id": "D",
        "text": "Manager"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Trong quy trình formal review, Scribe (thư ký / recorder) là người chịu trách nhiệm ghi chép lại toàn bộ các lỗi, vấn đề và điểm mở được phát hiện trong buổi review.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_38.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 38 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q39",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The Phases of formal review process is mentioned below arrange them in the correct order.\ni) Planning\nii) Review Meeting\niii) Rework\niv) Individual Preparations\nv) Kick Off\nvi) Follow Up",
    "options": [
      {
        "id": "A",
        "text": "i,ii,iii,iv,v,vi"
      },
      {
        "id": "B",
        "text": "vi,i,ii,iii,iv,v"
      },
      {
        "id": "C",
        "text": "i,v,iv,ii,iii,vi"
      },
      {
        "id": "D",
        "text": "i,ii,iii,v,iv,vi"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. 6 giai đoạn chuẩn của quy trình formal review theo ISTQB lần lượt là: Planning (i) -> Kick Off (v) -> Individual Preparations (iv) -> Review Meeting (ii) -> Rework (iii) -> Follow Up (vi).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_39.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 39 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q40",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "People who don't participate in technical reviews",
    "options": [
      {
        "id": "A",
        "text": "Analysts"
      },
      {
        "id": "B",
        "text": "Management"
      },
      {
        "id": "C",
        "text": "Developers"
      },
      {
        "id": "D",
        "text": "Testers"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Theo ISTQB, Technical review là quá trình rà soát kỹ thuật giữa các đồng nghiệp và chuyên gia kỹ thuật (developers, testers, analysts), và đặc trưng là không có sự tham gia của cấp quản lý (Management).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_40.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 40 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q41",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Equivalence testing divides the input domain into classes of data from which test cases can be derived to reduce the total number of test cases that must be developed",
    "options": [
      {
        "id": "A",
        "text": "True"
      },
      {
        "id": "B",
        "text": "False"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Đúng. Kỹ thuật phân vùng tương đương (Equivalence Partitioning) chia miền đầu vào thành các lớp dữ liệu tương đương để chọn đại diện, giúp giảm tổng số ca kiểm thử cần thiết kế mà vẫn đảm bảo độ bao phủ.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_41.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 41 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q42",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Cyclomatic Complexity method comes under which testing method",
    "options": [
      {
        "id": "A",
        "text": "White box"
      },
      {
        "id": "B",
        "text": "Black box"
      },
      {
        "id": "C",
        "text": "Green box"
      },
      {
        "id": "D",
        "text": "Yellow box"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Độ phức tạp Cyclomatic (Cyclomatic Complexity) dựa trên đồ thị luồng điều khiển của mã nguồn để xác định số đường đi độc lập, do đó thuộc phương pháp kiểm thử hộp trắng (White box).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_42.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 42 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q43",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Match the following terms and statements.\n1. Decision Table Testing\n2. Decision Testing\n3. State Transition Testing\n4. Exploratory Testing\n\nW. Testing carried out in time-boxes to achieve specific test objectives, possibly to complement structured testing.\nX. A test technique which may be used to verify different system responses depending on current conditions or previous history.\nY. A test technique which combines combinations of inputs that might not otherwise have been exercised during testing.\nZ. A form of control flow testing based on decision outcomes.",
    "options": [
      {
        "id": "A",
        "text": "1Y, 2Z, 3X, 4W."
      },
      {
        "id": "B",
        "text": "1X, 2W, 3Z, 4Y."
      },
      {
        "id": "C",
        "text": "1Z, 2X, 3W, 4Y."
      },
      {
        "id": "D",
        "text": "1Z, 2Y, 3X, 4W."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Decision Table Testing (1) kết hợp các tổ hợp đầu vào (Y); Decision Testing (2) là kiểm thử luồng điều khiển dựa trên kết quả nhánh quyết định (Z); State Transition Testing (3) kiểm tra phản hồi hệ thống phụ thuộc điều kiện hiện tại hoặc lịch sử trước đó (X); Exploratory Testing (4) thực hiện theo time-box để bổ trợ cho kiểm thử có cấu trúc (W).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_43.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 43 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q44",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Cyclomatic complexity is used to calculate",
    "options": [
      {
        "id": "A",
        "text": "Number of independent paths in the basis set of a program"
      },
      {
        "id": "B",
        "text": "Number of binary decisions + 1"
      },
      {
        "id": "C",
        "text": "Number bound for the number of tests that must be conducted to ensure that all statements have been executed at least once"
      },
      {
        "id": "D",
        "text": "Number of branches and decisions"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Độ phức tạp Cyclomatic (Cyclomatic complexity) được dùng để tính số lượng đường đi độc lập tuyến tính trong tập cơ sở (basis set) của một chương trình.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_44.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 44 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q45",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "We can achieve complete statement coverage but still miss bugs because (choose one answer):",
    "options": [
      {
        "id": "A",
        "text": "The failure occurs only if you reach a statement taking the TRUE branch of an IF statement, and you got to the statement with a test that passed through the FALSE branch."
      },
      {
        "id": "B",
        "text": "The failure depends on the program's inability to handle specific data values, rather than on the program's flow of control."
      },
      {
        "id": "C",
        "text": "We are not required to test code that customers are unlikely to execute."
      },
      {
        "id": "D",
        "text": "All of the others"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Đạt 100% statement coverage vẫn có thể bỏ sót lỗi vì chưa bao phủ hết các nhánh rẽ điều kiện (A) và không phát hiện được các lỗi phụ thuộc vào giá trị dữ liệu cụ thể (B). Trong bộ đề thi gốc (vốn đáp án D là Both A and B, được chuyển thành All of the others), đáp án chuẩn là D.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_45.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 45 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q46",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is an equivalence partition (also known as an equivalence class)?",
    "options": [
      {
        "id": "A",
        "text": "A set of test cases for testing classes of objects"
      },
      {
        "id": "B",
        "text": "An input or output range of values such that only one value in the range becomes a test case"
      },
      {
        "id": "C",
        "text": "An input or output range of values such that each value in the range becomes a test case"
      },
      {
        "id": "D",
        "text": "An input or output range of values such that every tenth value in the range becomes a test case."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Phân vùng tương đương (Equivalence partition) là một miền giá trị đầu vào hoặc đầu ra mà mọi giá trị trong đó được xử lý tương đương nhau, nên chỉ cần chọn một giá trị đại diện trong miền để tạo ca kiểm thử.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_46.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 46 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q47",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "In case of Large Systems",
    "options": [
      {
        "id": "A",
        "text": "Only few tests should be run"
      },
      {
        "id": "B",
        "text": "Testing should be on the basis of Risk"
      },
      {
        "id": "C",
        "text": "Only Good Test Cases should be executed."
      },
      {
        "id": "D",
        "text": "Test Cases written by good test engineers should be executed."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Với các hệ thống lớn không thể kiểm thử vét cạn, việc lập kế hoạch và ưu tiên kiểm thử phải dựa trên phân tích rủi ro (Risk-based testing).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_47.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 47 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q48",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Consider the following:\nPick up and read the newspaper\nLook at what is on television\nIf there is a program that you are interested in watching then\n    Switch the television on and watch the program\nOtherwise\n    Continue reading the newspaper\n    If there is a crossword in the newspaper then\n        try and complete the crossword",
    "options": [
      {
        "id": "A",
        "text": "SC = 1 and DC = 1"
      },
      {
        "id": "B",
        "text": "SC = 1 and DC = 2"
      },
      {
        "id": "C",
        "text": "SC = 1 and DC = 3"
      },
      {
        "id": "D",
        "text": "SC = 2 and DC = 2"
      },
      {
        "id": "E",
        "text": "SC = 2 and DC = 3"
      }
    ],
    "correctOptionIds": [
      "E"
    ],
    "explanation": "**Đáp án đúng: E**. Câu lệnh `If` thứ hai nằm trong nhánh `Otherwise` (tiếp tục đọc báo). Để đạt 100% Statement Coverage (SC) cần tối thiểu 2 test case (1: xem TV; 2: không xem TV & có ô chữ). Để đạt 100% Decision Coverage (DC) cần thêm test case thứ 3 (không xem TV & không có ô chữ), nên SC = 2 và DC = 3.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_48.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 48 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q49",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The Switch is switched off once the temperature falls below 18 and then it is turned on when the temperature is more than 21. Identify the Equivalence values which belong to the same class.",
    "options": [
      {
        "id": "A",
        "text": "12, 16, 22"
      },
      {
        "id": "B",
        "text": "24, 27, 17"
      },
      {
        "id": "C",
        "text": "22, 23, 24"
      },
      {
        "id": "D",
        "text": "14, 15, 19"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Hệ thống có 3 phân vùng tương đương: nhỏ hơn 18 (tắt), từ 18 đến 21 (giữ nguyên trạng thái) và lớn hơn 21 (bật). Chỉ có bộ giá trị `22, 23, 24` cùng thuộc một lớp tương đương (`> 21`).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_49.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 49 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q50",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is TRUE?",
    "options": [
      {
        "id": "A",
        "text": "Confirmation testing is testing fixes to a set of defects and Regression testing is testing to establish whether any defects have been introduced as a result of changes."
      },
      {
        "id": "B",
        "text": "Confirmation testing is testing to establish whether any defects have been introduced as a result of changes and Regression testing is testing fixes to a set of defects."
      },
      {
        "id": "C",
        "text": "Confirmation testing and Regression testing are both testing to establish whether any defects have been introduced as a result of changes."
      },
      {
        "id": "D",
        "text": "Confirmation testing and Regression testing are both testing fixes to a set of defects."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Confirmation testing (kiểm thử xác nhận) kiểm tra lại bản sửa lỗi để chắc chắn lỗi đã được khắc phục, còn Regression testing (kiểm thử hồi quy) kiểm tra xem các thay đổi có làm phát sinh lỗi mới ở các phần không thay đổi hay không.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_50.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 50 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q51",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Faults found by users are due to:",
    "options": [
      {
        "id": "A",
        "text": "Insufficient time for testing"
      },
      {
        "id": "B",
        "text": "Poor software and poor testing"
      },
      {
        "id": "C",
        "text": "Bad luck"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Lỗi bị người dùng phát hiện sau khi phát hành xuất phát từ cả hai nguyên nhân: phần mềm có khiếm khuyết (poor software) và quá trình kiểm thử chưa phát hiện được lỗi đó (poor testing).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_51.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 51 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q52",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The structure of an incident report is covered in the Standard for Software Test Documentation IEEE 829 and is called as:",
    "options": [
      {
        "id": "A",
        "text": "Anomaly Report"
      },
      {
        "id": "B",
        "text": "Defect Report"
      },
      {
        "id": "C",
        "text": "Test Defect Report"
      },
      {
        "id": "D",
        "text": "Test Incident Report"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Theo chuẩn tài liệu kiểm thử phần mềm IEEE 829, báo cáo sự cố kiểm thử có tên chính thức là Test Incident Report.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_52.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 52 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q53",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A reliable system will be one that:",
    "options": [
      {
        "id": "A",
        "text": "Is unlikely to be completed on schedule"
      },
      {
        "id": "B",
        "text": "Is unlikely to cause a failure"
      },
      {
        "id": "C",
        "text": "Is likely to be fault-free"
      },
      {
        "id": "D",
        "text": "Is likely to be liked by the users"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Một hệ thống có độ tin cậy cao (reliable system) là hệ thống có xác suất gây ra sự cố/thất bại (failure) rất thấp trong điều kiện vận hành xác định.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_53.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 53 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q54",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Testing does not help to _____",
    "options": [
      {
        "id": "A",
        "text": "Find faults"
      },
      {
        "id": "B",
        "text": "Assure quality"
      },
      {
        "id": "C",
        "text": "Check user friendliness."
      },
      {
        "id": "D",
        "text": "Improve software accuracy"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Bản thân hoạt động kiểm thử chỉ giúp phát hiện lỗi, đánh giá chất lượng và tính thân thiện người dùng chứ không trực tiếp cải thiện độ chính xác của phần mềm (việc sửa lỗi và cải tiến thiết kế/mã nguồn mới làm tăng độ chính xác).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_54.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 54 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q55",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A field failure occurs when multiple users access a system. Which of the following is true?",
    "options": [
      {
        "id": "A",
        "text": "This is an acceptable risk of a multi-user system."
      },
      {
        "id": "B",
        "text": "Insufficient functional testing has been performed"
      },
      {
        "id": "C",
        "text": "This indicates an important non-functional requirement was not specified and tested."
      },
      {
        "id": "D",
        "text": "It is not possible to test against such events prior to release."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Sự cố xảy ra khi nhiều người dùng truy cập đồng thời là vấn đề về hiệu năng/tải (load/concurrency) — dấu hiệu cho thấy một yêu cầu phi chức năng (non-functional requirement) quan trọng đã không được đặc tả và kiểm thử.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_55.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 55 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q56",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "CAST stands for",
    "options": [
      {
        "id": "A",
        "text": "Computer Aided Software Testing"
      },
      {
        "id": "B",
        "text": "Computer Aided Software Tools"
      },
      {
        "id": "C",
        "text": "Computer Analysis Software Techniques"
      },
      {
        "id": "D",
        "text": "None of the others"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. CAST là viết tắt của Computer Aided Software Testing (kiểm thử phần mềm có sự hỗ trợ của máy tính/công cụ).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_56.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 56 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q57",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Drivers are tools used to control and operate the software being tested",
    "options": [
      {
        "id": "A",
        "text": "True"
      },
      {
        "id": "B",
        "text": "False"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Đúng. Drivers là các thành phần/công cụ giả lập module gọi cấp trên, dùng để điều khiển và vận hành thành phần phần mềm đang được kiểm thử (đặc biệt trong kiểm thử đơn vị và tích hợp bottom-up).",
    "imageUrl": "/images/swt-fe/fa26-fe/q_57.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 57 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q58",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "When to stop Testing?",
    "options": [
      {
        "id": "A",
        "text": "Stop when scheduled time for testing expires"
      },
      {
        "id": "B",
        "text": "Stop if 75% of the pre-defined number of errors is detected."
      },
      {
        "id": "C",
        "text": "Stop when all the test cases execute with detecting few errors."
      },
      {
        "id": "D",
        "text": "None of the others"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Quyết định dừng kiểm thử phải dựa trên các tiêu chí thoát (exit criteria) đã định nghĩa trước như mức độ bao phủ, rủi ro còn lại, tỷ lệ lỗi và ngân sách, chứ không dừng tùy tiện theo các mốc ở A, B hay C.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_58.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 58 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q59",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following will be the best definition for Testing",
    "options": [
      {
        "id": "A",
        "text": "The goal / purpose of testing is to demonstrate that the program works."
      },
      {
        "id": "B",
        "text": "The purpose of testing is to demonstrate that the program is defect free."
      },
      {
        "id": "C",
        "text": "The purpose of testing is to demonstrate that the program does what it is supposed to do"
      },
      {
        "id": "D",
        "text": "Testing is executing Software for the purpose of finding defects."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Theo định nghĩa kinh điển của Glenford Myers trong kiểm thử phần mềm, kiểm thử là quá trình thực thi phần mềm với mục đích tìm ra lỗi (defects), chứ không phải để chứng minh phần mềm không có lỗi.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_59.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 59 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-01-q60",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-fa26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The goal of a software tester is to find bugs, find them as early as possible and make sure they get fixed",
    "options": [
      {
        "id": "A",
        "text": "True"
      },
      {
        "id": "B",
        "text": "False"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Đúng. Mục tiêu của kiểm thử viên phần mềm là tìm ra lỗi, tìm chúng càng sớm càng tốt trong vòng đời phát triển và theo dõi đảm bảo chúng được khắc phục.",
    "imageUrl": "/images/swt-fe/fa26-fe/q_60.webp",
    "imageCaption": "Đề 01: Kì Fall  — Câu 60 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q01",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is NOT a type of non-functional test?",
    "options": [
      {
        "id": "A",
        "text": "State-Transition"
      },
      {
        "id": "B",
        "text": "Usability"
      },
      {
        "id": "C",
        "text": "Performance"
      },
      {
        "id": "D",
        "text": "Security"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Usability, Performance và Security đều là các loại kiểm thử phi chức năng (non-functional testing). State-Transition là một kỹ thuật thiết kế kiểm thử hộp đen (kiểm thử chức năng).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_01.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 1 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q02",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Repeated testing of an already tested program, after modification, to discover any defects introduced or uncovered as a result of the changes in the software being tested or in another related or unrelated software component:",
    "options": [
      {
        "id": "A",
        "text": "Re Testing"
      },
      {
        "id": "B",
        "text": "Confirmation Testing"
      },
      {
        "id": "C",
        "text": "Regression Testing"
      },
      {
        "id": "D",
        "text": "Negative Testing"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Đây là định nghĩa chuẩn của ISTQB về Kiểm thử hồi quy (Regression Testing): kiểm thử lại chương trình đã kiểm thử sau khi có thay đổi để phát hiện lỗi mới phát sinh hoặc bị lộ ra ở phần mềm hoặc các thành phần khác.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_02.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 2 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q03",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which rule should not be followed for reviews?",
    "options": [
      {
        "id": "A",
        "text": "Defects and issues are identified and corrected"
      },
      {
        "id": "B",
        "text": "The product is reviewed not the producer"
      },
      {
        "id": "C",
        "text": "All members of the reviewing team are responsible for the result of the review"
      },
      {
        "id": "D",
        "text": "Each review has a clear predefined objective"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Trong buổi họp review, mục tiêu là phát hiện và ghi nhận lỗi (identify and log), KHÔNG sửa lỗi ngay trong buổi họp. Việc sửa lỗi sẽ do tác giả (Author) thực hiện sau đó ở giai đoạn Rework.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_03.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 3 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q04",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Test managers should not:",
    "options": [
      {
        "id": "A",
        "text": "Report on deviations from the project plan"
      },
      {
        "id": "B",
        "text": "Sign the system off for release"
      },
      {
        "id": "C",
        "text": "Re-allocate resources to meet original plans"
      },
      {
        "id": "D",
        "text": "Raise incidents on faults that they have found"
      },
      {
        "id": "E",
        "text": "Provide information for risk analysis and quality improvement"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Test Manager cung cấp thông tin về chất lượng và rủi ro, nhưng không phải là người ký duyệt phát hành hệ thống (Sign the system off for release); quyết định phát hành thuộc về quản lý dự án/nghiệp vụ hoặc khách hàng.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_04.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 4 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q05",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a MAJOR task of test implementation and execution?",
    "options": [
      {
        "id": "A",
        "text": "Measuring and analyzing results."
      },
      {
        "id": "B",
        "text": "Reporting discrepancies as incidents."
      },
      {
        "id": "C",
        "text": "Identifying test conditions or test requirements."
      },
      {
        "id": "D",
        "text": "Assessing if more tests are needed"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Báo cáo sự sai lệch giữa kết quả thực tế và kết quả mong đợi dưới dạng sự cố/lỗi (Reporting discrepancies as incidents) là nhiệm vụ chính của giai đoạn Test Implementation and Execution. (C thuộc Analysis & Design; A và D thuộc Evaluating Exit Criteria / Control).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_05.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 5 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q06",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which type of tool stores requirement statements, checks for consistency, allows requirements to be prioritized, and enables individual tests to be traceable to requirements, functions, and features?",
    "options": [
      {
        "id": "A",
        "text": "Incident management tools"
      },
      {
        "id": "B",
        "text": "Requirements management tools"
      },
      {
        "id": "C",
        "text": "Configuration management tools"
      },
      {
        "id": "D",
        "text": "None of the others"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Requirements management tools (công cụ quản lý yêu cầu) hỗ trợ lưu trữ, kiểm tra tính nhất quán, đánh độ ưu tiên yêu cầu và thiết lập ma trận truy xuất (traceability) giữa yêu cầu và ca kiểm thử.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_06.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 6 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q07",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Faults found by users are due to:",
    "options": [
      {
        "id": "A",
        "text": "Insufficient time for testing"
      },
      {
        "id": "B",
        "text": "Poor software and poor testing"
      },
      {
        "id": "C",
        "text": "Bad luck"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Lỗi lọt ra ngoài đến tay người dùng cuối là hệ quả của cả chất lượng phát triển phần mềm kém (gây ra lỗi) và quá trình kiểm thử chưa hiệu quả (không phát hiện được lỗi trước khi phát hành).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_07.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 7 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q08",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The selection of a test approach should consider the context:\ni. Risk of failure of the project, hazards to the product and risks of product failure to humans\nii. Skills and experience of the people in the proposed technique, tools and methods\niii. The objective of the testing endeavor and the mission of the testing team.\niv. The size of the testing team",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv are true"
      },
      {
        "id": "B",
        "text": "i, ii, iii are true and iv is false."
      },
      {
        "id": "C",
        "text": "ii, iii, iv are true and i is false."
      },
      {
        "id": "D",
        "text": "i, iv are true and ii, iii are false."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Theo ISTQB, việc lựa chọn chiến lược/cách tiếp cận kiểm thử dựa trên rủi ro (i), kỹ năng và kinh nghiệm của nhân sự (ii), và mục tiêu kiểm thử (iii). Quy mô nhóm kiểm thử (iv) không phải yếu tố cốt lõi quyết định cách tiếp cận kiểm thử.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_08.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 8 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q09",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Cyclomatic complexity is used to calculate:",
    "options": [
      {
        "id": "A",
        "text": "Number of independent paths in the basis set of a program"
      },
      {
        "id": "B",
        "text": "Number of binary decisions + 1"
      },
      {
        "id": "C",
        "text": "Number bound for the number of tests that must be conducted to ensure that all statements have been executed at least once"
      },
      {
        "id": "D",
        "text": "Number of branches and decisions"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Độ phức tạp Cyclomatic (Cyclomatic complexity) được dùng để tính số lượng đường dẫn độc lập tuyến tính (independent paths) trong tập cơ sở (basis set) của một chương trình. Phương án B là công thức tính chứ không phải mục đích sử dụng.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_09.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 9 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q10",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is not an incremental integration testing approach?",
    "options": [
      {
        "id": "A",
        "text": "Top down"
      },
      {
        "id": "B",
        "text": "Big-bang"
      },
      {
        "id": "C",
        "text": "Bottom up"
      },
      {
        "id": "D",
        "text": "Functional incrementation."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Big-bang integration là cách tiếp cận phi gia tăng (non-incremental), ghép tất cả các mô-đun lại cùng một lúc rồi mới kiểm thử. Top-down, Bottom-up và Functional incrementation đều là các cách tiếp cận gia tăng (incremental).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_10.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 10 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q11",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which is the non-functional testing?",
    "options": [
      {
        "id": "A",
        "text": "Performance testing"
      },
      {
        "id": "B",
        "text": "Unit testing"
      },
      {
        "id": "C",
        "text": "Regression testing"
      },
      {
        "id": "D",
        "text": "Sanity testing"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Kiểm thử hiệu năng (Performance testing) là một loại kiểm thử phi chức năng nhằm đánh giá tốc độ, khả năng chịu tải và độ ổn định của hệ thống.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_11.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 11 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q12",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Peer Reviews are also called as:",
    "options": [
      {
        "id": "A",
        "text": "Inspection"
      },
      {
        "id": "B",
        "text": "Walkthrough"
      },
      {
        "id": "C",
        "text": "Technical Review"
      },
      {
        "id": "D",
        "text": "Formal Review"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Theo giáo trình ISTQB Foundation Level, Technical Review (đánh giá kỹ thuật) còn được gọi là Peer Review (đánh giá ngang hàng giữa các đồng nghiệp có chuyên môn).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_12.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 12 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q13",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Capture and replay facilities are least likely to be used to:",
    "options": [
      {
        "id": "A",
        "text": "Performance testing"
      },
      {
        "id": "B",
        "text": "Recovery testing"
      },
      {
        "id": "C",
        "text": "GUI testing"
      },
      {
        "id": "D",
        "text": "User requirements."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Công cụ Capture and Replay phục vụ ghi và phát lại thao tác thực thi kiểm thử (GUI, hiệu năng, phục hồi), ít liên quan nhất đến yêu cầu người dùng (User requirements).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_13.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 13 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q14",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Defects discovered by static analysis tools include:\ni. Variables that are never used.\nii. Security vulnerabilities.\niii. Programming Standard Violations.\niv. Uncalled functions and procedures.",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv is correct"
      },
      {
        "id": "B",
        "text": "iii is correct, i, ii, iv are incorrect."
      },
      {
        "id": "C",
        "text": "i, ii, iii and iv are incorrect"
      },
      {
        "id": "D",
        "text": "iv, ii is correct"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Công cụ phân tích tĩnh (Static analysis tools) có thể tự động phát hiện cả 4 loại lỗi trên: biến không sử dụng (i), lỗ hổng bảo mật (ii), vi phạm chuẩn lập trình (iii) và các hàm/thủ tục không bao giờ được gọi (iv).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_14.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 14 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q15",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which activity in the fundamental test process creates test suites for efficient test execution?",
    "options": [
      {
        "id": "A",
        "text": "Implementation and execution."
      },
      {
        "id": "B",
        "text": "Planning and control."
      },
      {
        "id": "C",
        "text": "Analysis and design."
      },
      {
        "id": "D",
        "text": "Test closure."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Trong quy trình kiểm thử cơ bản của ISTQB, việc gom nhóm các ca kiểm thử thành các bộ kiểm thử (test suites) để tối ưu hóa việc thực thi là nhiệm vụ của giai đoạn Test Implementation and Execution.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_15.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 15 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q16",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "Which TWO of the following statements about static analysis are correct?",
    "options": [
      {
        "id": "A",
        "text": "Compiling code is not a form of static analysis"
      },
      {
        "id": "B",
        "text": "Static analysis need not be performed before imperative code is executed"
      },
      {
        "id": "C",
        "text": "Static analysis can find faults that are hard to find with dynamic testing."
      },
      {
        "id": "D",
        "text": "Extensive statistical analysis will not be needed if white-box testing is to be performed"
      }
    ],
    "correctOptionIds": [
      "B",
      "C"
    ],
    "explanation": "**Đáp án đúng: B, C**. Phân tích tĩnh giúp tìm ra những lỗi khó phát hiện qua kiểm thử động (C) và không bắt buộc phải thực hiện trước khi chạy mã lệnh (B). Phương án A sai vì trình biên dịch là một hình thức phân tích tĩnh; D sai vì kiểm thử hộp trắng không thay thế phân tích tĩnh.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_16.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 16 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q17",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Given the following code, which is true:\nIF A > B THEN\n  C = A - B\nELSE\n  C = A + B\nENDIF\nRead D\nIF C = D Then\n  Print \"Error\"\nENDIF",
    "options": [
      {
        "id": "A",
        "text": "1 test for statement coverage, 3 for branch coverage"
      },
      {
        "id": "B",
        "text": "2 tests for statement coverage, 2 for branch coverage"
      },
      {
        "id": "C",
        "text": "2 tests for statement coverage, 3 for branch coverage"
      },
      {
        "id": "D",
        "text": "3 tests for statement coverage, 3 for branch coverage"
      },
      {
        "id": "E",
        "text": "3 tests for statement coverage, 2 for branch coverage"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Cần 2 test case để đạt 100% statement coverage (1 test cho nhánh `A > B` kết hợp `C = D`, và 1 test cho nhánh `A <= B`). Cũng chính 2 test case này (cho `C = D` True ở test 1 và False ở test 2) đã đi qua đủ cả 4 nhánh (True/False của 2 lệnh IF), nên chỉ cần 2 test cho 100% branch coverage.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_17.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 17 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q18",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "People who don't participate in technical reviews:",
    "options": [
      {
        "id": "A",
        "text": "Analysts"
      },
      {
        "id": "B",
        "text": "Management"
      },
      {
        "id": "C",
        "text": "Developers"
      },
      {
        "id": "D",
        "text": "Testers"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Technical Review là buổi rà soát kỹ thuật giữa các đồng nghiệp chuyên môn (Analysts, Developers, Testers) và thường không có sự tham gia của Management để tránh áp lực đánh giá cá nhân.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_18.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 18 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q19",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Increasing the quality of the software, by better development methods, will affect the time needed for testing (the test phases) by:",
    "options": [
      {
        "id": "A",
        "text": "Reducing test time"
      },
      {
        "id": "B",
        "text": "No change"
      },
      {
        "id": "C",
        "text": "Increasing test time"
      },
      {
        "id": "D",
        "text": "Can't say"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Khi chất lượng phần mềm cao hơn nhờ quy trình phát triển tốt, số lượng lỗi phát sinh sẽ ít đi, giúp giảm thời gian ghi nhận lỗi, chờ sửa lỗi, kiểm thử xác nhận (re-test) và kiểm thử hồi quy, từ đó rút ngắn thời gian kiểm thử.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_19.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 19 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q20",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The place to start if you want a (new) test tool is:",
    "options": [
      {
        "id": "A",
        "text": "Attend a tool exhibition"
      },
      {
        "id": "B",
        "text": "Invite a vendor to give a demo"
      },
      {
        "id": "C",
        "text": "Analyze your needs and requirements"
      },
      {
        "id": "D",
        "text": "Find out what your budget would be for the tool"
      },
      {
        "id": "E",
        "text": "Search the internet"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Bước đầu tiên khi lựa chọn một công cụ kiểm thử mới là phân tích nhu cầu, quy trình hiện tại và các yêu cầu cụ thể của tổ chức (Analyze your needs and requirements) trước khi tìm kiếm hay mời nhà cung cấp demo.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_20.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 20 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q21",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "From a Testing perspective, what are the MAIN purposes of Configuration Management?\ni) Identifying the version of software under test.\nii) Controlling the version of testware items.\niii) Developing new testware items.\niv) Tracking changes to testware items.\nv) Analysing the need for new testware items.",
    "options": [
      {
        "id": "A",
        "text": "ii, iv and v."
      },
      {
        "id": "B",
        "text": "ii, iii and iv."
      },
      {
        "id": "C",
        "text": "i, ii and iv."
      },
      {
        "id": "D",
        "text": "i, iii and v."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Mục đích chính của Quản lý cấu hình trong kiểm thử là xác định phiên bản phần mềm đang kiểm thử (i), kiểm soát phiên bản của các tài liệu/testware (ii) và theo dõi mọi thay đổi đối với testware (iv).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_21.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 21 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q22",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following activities should be performed during the selection and implementation of a testing tool?\ni) Investigate the organisation's test process.\nii) Conduct a proof of concept.\niii) Implement the selected tool on a project behind schedule to save time.\niv) Identify coaching and mentoring requirements for the use of the selected tool.",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii."
      },
      {
        "id": "B",
        "text": "ii, iii, iv."
      },
      {
        "id": "C",
        "text": "i, iii, iv."
      },
      {
        "id": "D",
        "text": "i, ii, iv."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Khi lựa chọn và triển khai công cụ kiểm thử, cần khảo sát quy trình hiện tại (i), thực hiện đánh giá thử nghiệm/Proof of Concept (ii) và xác định nhu cầu đào tạo/hướng dẫn (iv). Ý (iii) sai vì tuyệt đối không nên thử nghiệm công cụ mới trên một dự án đang trễ tiến độ.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_22.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 22 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q23",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is not a phase of the Fundamental Test Process?",
    "options": [
      {
        "id": "A",
        "text": "Test Planning and Control"
      },
      {
        "id": "B",
        "text": "Test Implementation and Execution"
      },
      {
        "id": "C",
        "text": "Requirement Analysis"
      },
      {
        "id": "D",
        "text": "Evaluating Exit criteria and reporting"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Quy trình kiểm thử cơ bản (Fundamental Test Process) gồm 5 giai đoạn: Planning & Control, Analysis & Design, Implementation & Execution, Evaluating Exit Criteria & Reporting, và Test Closure. Requirement Analysis thuộc quy trình phát triển phần mềm.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_23.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 23 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q24",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The provision and management of a controlled library containing all the configuration items is called as:",
    "options": [
      {
        "id": "A",
        "text": "Configuration Control"
      },
      {
        "id": "B",
        "text": "Status Accounting"
      },
      {
        "id": "C",
        "text": "Configuration Identification"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Configuration Control (Kiểm soát cấu hình) là việc cung cấp và quản lý thư viện có kiểm soát chứa toàn bộ các mục cấu hình (configuration items).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_24.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 24 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q25",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the important criterion in deciding what testing technique to use?",
    "options": [
      {
        "id": "A",
        "text": "How well you know a particular technique"
      },
      {
        "id": "B",
        "text": "The objective of the test"
      },
      {
        "id": "C",
        "text": "How appropriate the technique is for testing the application"
      },
      {
        "id": "D",
        "text": "Whether there is a tool to support the technique"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Theo tiêu chuẩn ISTQB, tiêu chí quan trọng nhất để quyết định kỹ thuật kiểm thử cần áp dụng là mục tiêu của việc kiểm thử (The objective of the test), từ đó mới chọn kỹ thuật phù hợp để đạt được mục tiêu đó.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_25.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 25 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q26",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Match the following:\n1. Test estimation\n2. Test control\n3. Test monitoring\n\na. Measures of tracking process\nb. Effort required to perform activities\nc. Reallocation of resources",
    "options": [
      {
        "id": "A",
        "text": "1-b, 2-c, 3-a"
      },
      {
        "id": "B",
        "text": "1-b, 2-a, 3-c"
      },
      {
        "id": "C",
        "text": "1-c, 2-a, 3-b"
      },
      {
        "id": "D",
        "text": "1-a, 2-b, 3-c"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Test estimation ước lượng công sức thực hiện (1-b); Test control điều chỉnh kế hoạch như phân bổ lại nguồn lực (2-c); Test monitoring đo lường để theo dõi tiến trình (3-a).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_26.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 26 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q27",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What type of tools are to be used for Regression Testing?",
    "options": [
      {
        "id": "A",
        "text": "(1) Performance"
      },
      {
        "id": "B",
        "text": "(2) Record/Playback"
      },
      {
        "id": "C",
        "text": "Both of (1) and (2)"
      },
      {
        "id": "D",
        "text": "None of (1) nor (2)"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Công cụ Record/Playback giúp ghi lại và chạy lại tự động các kịch bản kiểm thử đã có, là loại công cụ điển hình dùng cho kiểm thử hồi quy (Regression Testing).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_27.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 27 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q28",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which expression best matches the following characteristics or review processes:\n1. Led by author\n2. Undocumented\n3. No management participation\n4. Led by a trained moderator or leader\n5. Uses entry exit criteria\n\ns) Inspection\nt) Peer review\nu) Informal review\nv) Walkthrough",
    "options": [
      {
        "id": "A",
        "text": "s = 4, t = 3, u = 2 and 5, v = 1"
      },
      {
        "id": "B",
        "text": "s = 4 and 5, t = 3, u = 2, v = 1"
      },
      {
        "id": "C",
        "text": "s = 1 and 5, t = 3, u = 2, v = 4"
      },
      {
        "id": "D",
        "text": "s = 5, t = 4, u = 3, v = 1 and 2"
      },
      {
        "id": "E",
        "text": "s = 4 and 5, t = 1, u = 2, v = 3"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Inspection (s) do moderator được đào tạo dẫn dắt và dùng tiêu chí đầu vào/đầu ra (4, 5); Peer/Technical review (t) không có quản lý tham gia (3); Informal review (u) không ghi chép tài liệu chính thức (2); Walkthrough (v) do tác giả dẫn dắt (1).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_28.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 28 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q29",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Who are the persons involved in a Formal Review?\ni) Manager\nii) Moderator\niii) Scribe / Recorder\niv) Assistant Manager",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv are true"
      },
      {
        "id": "B",
        "text": "i, ii, iii are true and iv is false."
      },
      {
        "id": "C",
        "text": "ii, iii, iv are true and i is false."
      },
      {
        "id": "D",
        "text": "i, iv are true and ii, iii are false."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Các vai trò tham gia Formal Review gồm Manager, Moderator, Author, Reviewers và Scribe/Recorder; không có vai trò Assistant Manager.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_29.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 29 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q30",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "There are several risks of managing your project's schedule with a statistical reliability model. These include:",
    "options": [
      {
        "id": "A",
        "text": "Testers spend more energy early in the product trying to find bugs than preparing to do the rest of the project's work more efficiently"
      },
      {
        "id": "B",
        "text": "Managers might not realize that the testing effort is ineffective, late in the project, because they expect a low rate of bug finding, so the low rate achieved doesn't alarm them."
      },
      {
        "id": "C",
        "text": "It can increase the end-of-project pressure on testers to not find bugs, or to not report bugs."
      },
      {
        "id": "D",
        "text": "All of the others"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Quản lý tiến độ dự án dựa vào mô hình độ tin cậy thống kê (dựa trên tốc độ tìm lỗi) có thể gây ra cả 3 rủi ro nêu trên: tester dồn sức tìm lỗi sớm thay vì chuẩn bị bài bản (A), quản lý chủ quan khi tỷ lệ lỗi giảm cuối dự án (B) và tạo áp lực không báo lỗi ở giai đoạn cuối (C).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_30.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 30 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q31",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What type of testing is done to supplement the rigorous testing?",
    "options": [
      {
        "id": "A",
        "text": "Regression testing"
      },
      {
        "id": "B",
        "text": "Integration testing."
      },
      {
        "id": "C",
        "text": "Error Guessing"
      },
      {
        "id": "D",
        "text": "System testing."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Error Guessing (đoán lỗi) là kỹ thuật dựa trên kinh nghiệm, thường được áp dụng bổ sung cho các kỹ thuật kiểm thử có hệ thống/nghiêm ngặt (rigorous/systematic testing) để tìm thêm các lỗi bất thường.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_31.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 31 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q32",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Verification involves which of the following:\ni. Helps to check the Quality of the built product\nii. Helps to check that we have built the right product.\niii. Helps in developing the product\niv. Monitoring tool wastage and obsoleteness.",
    "options": [
      {
        "id": "A",
        "text": "Options i, ii, iii, iv are true."
      },
      {
        "id": "B",
        "text": "i is true and ii, iii, iv are false"
      },
      {
        "id": "C",
        "text": "i, ii, iii are true and iv is false"
      },
      {
        "id": "D",
        "text": "ii is true and i, iii, iv are false."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Verification (xác minh) tập trung trả lời câu hỏi 'Chúng ta có xây dựng sản phẩm đúng cách không?' tức là kiểm tra chất lượng sản phẩm so với đặc tả (i đúng). Trong khi đó, ý (ii) 'xây dựng đúng sản phẩm cần thiết' là định nghĩa của Validation; (iii) và (iv) không phải mục tiêu của Verification.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_32.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 32 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q33",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is least important in test management?",
    "options": [
      {
        "id": "A",
        "text": "Estimating test duration."
      },
      {
        "id": "B",
        "text": "Incident Management"
      },
      {
        "id": "C",
        "text": "Configuration Management."
      },
      {
        "id": "D",
        "text": "De-bugging."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Debugging là hoạt động tìm nguyên nhân gốc và sửa mã nguồn của lập trình viên, ít liên quan nhất đến công tác quản lý kiểm thử (Test Management).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_33.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 33 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q34",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Statement Coverage will not check for the following:",
    "options": [
      {
        "id": "A",
        "text": "Missing Statements"
      },
      {
        "id": "B",
        "text": "Unused Branches"
      },
      {
        "id": "C",
        "text": "Dead Code"
      },
      {
        "id": "D",
        "text": "Unused Statement"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Statement Coverage là kỹ thuật hộp trắng chỉ đo lường các câu lệnh hiện có trong mã nguồn, do đó hoàn toàn không thể phát hiện các câu lệnh bị thiếu (Missing Statements) do lập trình viên bỏ sót yêu cầu.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_34.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 34 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q35",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which tool will be used to test/flag memory leaks and unassigned pointers?",
    "options": [
      {
        "id": "A",
        "text": "Dynamic analysis tool"
      },
      {
        "id": "B",
        "text": "Static Analysis tool."
      },
      {
        "id": "C",
        "text": "Maintenance tool."
      },
      {
        "id": "D",
        "text": "Configuration tool."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Công cụ phân tích động (Dynamic analysis tool) theo dõi phần mềm trong khi đang chạy (runtime) để phát hiện các lỗi như rò rỉ bộ nhớ (memory leaks) và con trỏ chưa được gán (unassigned pointers).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_35.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 35 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q36",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The testing technique that requires devising test cases to demonstrate that each program function is operational is called:",
    "options": [
      {
        "id": "A",
        "text": "Black-box testing"
      },
      {
        "id": "B",
        "text": "Glass-box testing"
      },
      {
        "id": "C",
        "text": "Grey-box testing"
      },
      {
        "id": "D",
        "text": "White-box testing"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Kiểm thử hộp đen (Black-box / functional testing) thiết kế các ca kiểm thử dựa trên đặc tả để chứng minh từng chức năng của chương trình hoạt động đúng như mong đợi mà không cần biết cấu trúc mã nguồn.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_36.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 36 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q37",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Amount of testing performed will not depend on:",
    "options": [
      {
        "id": "A",
        "text": "Risks involved"
      },
      {
        "id": "B",
        "text": "Contractual requirements"
      },
      {
        "id": "C",
        "text": "Legal requirements"
      },
      {
        "id": "D",
        "text": "Test data."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Khối lượng kiểm thử cần thực hiện phụ thuộc vào mức độ rủi ro (A), yêu cầu hợp đồng (B) và yêu cầu pháp lý/quy chuẩn (C), không phụ thuộc vào dữ liệu kiểm thử (Test data).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_37.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 37 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q38",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Success Factors for a review include:\ni. Each Review does not have a predefined objective\nii. Defects found are welcomed and expressed objectively\niii. Management supports a good review process.\niv. There is an emphasis on learning and process improvement.",
    "options": [
      {
        "id": "A",
        "text": "ii, iii, iv are correct and i is incorrect"
      },
      {
        "id": "B",
        "text": "iii, i, iv is correct and ii is incorrect"
      },
      {
        "id": "C",
        "text": "i, iii, iv, ii is incorrect"
      },
      {
        "id": "D",
        "text": "ii is correct"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Các yếu tố thành công của review gồm: lỗi được đón nhận và diễn đạt khách quan (ii), sự ủng hộ từ quản lý (iii), và chú trọng học hỏi, cải tiến quy trình (iv). Ý (i) sai vì mỗi buổi review phải có mục tiêu xác định rõ ràng từ trước.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_38.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 38 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q39",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Match every stage of the Software Development Life cycle with the Testing Life cycle:\ni. Hi-level design\nii. Code\niii. Low-level design\niv. Business requirements\n\na. Unit tests\nb. Acceptance tests\nc. System tests\nd. Integration tests",
    "options": [
      {
        "id": "A",
        "text": "i-d, ii-a, iii-c, iv-b"
      },
      {
        "id": "B",
        "text": "i-c, ii-d, iii-a, iv-b"
      },
      {
        "id": "C",
        "text": "i-b, ii-a, iii-d, iv-c"
      },
      {
        "id": "D",
        "text": "i-c, ii-a, iii-d, iv-b"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Theo mô hình chữ V (V-model): Thiết kế mức cao (i) tương ứng System tests (c); Mã nguồn/Code (ii) tương ứng Unit tests (a); Thiết kế mức thấp (iii) tương ứng Integration tests (d); Yêu cầu nghiệp vụ (iv) tương ứng Acceptance tests (b).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_39.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 39 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q40",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The person who leads the review of the document(s), planning the review, running the meeting and follow-up after the meeting:",
    "options": [
      {
        "id": "A",
        "text": "Reviewer"
      },
      {
        "id": "B",
        "text": "Author"
      },
      {
        "id": "C",
        "text": "Moderator"
      },
      {
        "id": "D",
        "text": "Auditor"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Moderator (người điều phối) chịu trách nhiệm dẫn dắt buổi review tài liệu, lập kế hoạch review, điều hành cuộc họp và theo dõi (follow-up) sau cuộc họp.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_40.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 40 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q41",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "The later in the development life cycle a fault is discovered, the more expensive it is to fix. Why?",
    "options": [
      {
        "id": "A",
        "text": "The documentation is poor, so it takes longer to find out what the software is doing."
      },
      {
        "id": "B",
        "text": "Wages are rising"
      },
      {
        "id": "C",
        "text": "The fault has been built into more documentation, code, tests, etc."
      },
      {
        "id": "D",
        "text": "None of the others"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Lỗi phát hiện càng muộn càng tốn kém chi phí sửa chữa vì lỗi đó đã lan sang nhiều thành phần khác như tài liệu thiết kế, mã nguồn, ca kiểm thử... buộc phải chỉnh sửa và kiểm thử lại hàng loạt.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_41.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 41 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q42",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "\"How much testing is enough?\"",
    "options": [
      {
        "id": "A",
        "text": "This question is impossible to answer"
      },
      {
        "id": "B",
        "text": "This question is easy to answer"
      },
      {
        "id": "C",
        "text": "The answer depends on the risk for your industry, contract and special requirements"
      },
      {
        "id": "D",
        "text": "This answer depends on the maturity of your developers"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Theo nguyên lý kiểm thử của ISTQB, mức độ kiểm thử bao nhiêu là đủ phụ thuộc vào rủi ro của ngành/sản phẩm, các điều khoản hợp đồng và các yêu cầu đặc thù (như pháp lý, an toàn).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_42.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 42 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q43",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following tools would you use to detect a memory leak?",
    "options": [
      {
        "id": "A",
        "text": "State analysis"
      },
      {
        "id": "B",
        "text": "Coverage analysis"
      },
      {
        "id": "C",
        "text": "Dynamic analysis"
      },
      {
        "id": "D",
        "text": "Memory analysis"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Công cụ phân tích động (Dynamic analysis) được sử dụng để phát hiện rò rỉ bộ nhớ (memory leak), lỗi cấp phát bộ nhớ và con trỏ chưa khởi tạo trong quá trình chạy chương trình.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_43.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 43 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q44",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The principal attributes of tools and automation are:",
    "options": [
      {
        "id": "A",
        "text": "(1) Speed & efficiency"
      },
      {
        "id": "B",
        "text": "(2) Accuracy & precision"
      },
      {
        "id": "C",
        "text": "Both of (1) and (2)"
      },
      {
        "id": "D",
        "text": "None of (1) nor (2)"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Hai thuộc tính cốt lõi của công cụ kiểm thử và tự động hóa là tốc độ & hiệu quả (Speed & efficiency) và độ chính xác & nhất quán (Accuracy & precision).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_44.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 44 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q45",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A wholesaler sells printer cartridges. The minimum order quantity is 5. There is a 20% discount for orders of 100 or more printer cartridges. You have been asked to prepare test cases using various values for the number of printer cartridges ordered. Which of the following groups contain three test inputs that would be generated using Boundary Value Analysis?",
    "options": [
      {
        "id": "A",
        "text": "5, 6, 20"
      },
      {
        "id": "B",
        "text": "4, 5, 80"
      },
      {
        "id": "C",
        "text": "4, 5, 99"
      },
      {
        "id": "D",
        "text": "1, 20, 100"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Các giá trị biên (2-value BVA) của bài toán là `4, 5` (quanh ngưỡng tối thiểu 5) và `99, 100` (quanh ngưỡng chiết khấu 100). Chỉ có nhóm `4, 5, 99` gồm cả 3 giá trị đều là giá trị biên.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_45.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 45 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q46",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is not a static testing technique?",
    "options": [
      {
        "id": "A",
        "text": "Error guessing"
      },
      {
        "id": "B",
        "text": "Walkthrough"
      },
      {
        "id": "C",
        "text": "Data flow analysis"
      },
      {
        "id": "D",
        "text": "Inspections"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Error guessing là kỹ thuật kiểm thử động dựa trên kinh nghiệm (experience-based dynamic testing). Walkthrough, Inspections và Data flow analysis đều là các kỹ thuật kiểm thử tĩnh.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_46.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 46 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q47",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a type of non-functional testing?",
    "options": [
      {
        "id": "A",
        "text": "Usability testing."
      },
      {
        "id": "B",
        "text": "Statement Coverage."
      },
      {
        "id": "C",
        "text": "Dataflow testing."
      },
      {
        "id": "D",
        "text": "Cause-effect graphing"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Kiểm thử tính khả dụng (Usability testing) là kiểm thử phi chức năng nhằm đánh giá mức độ dễ học, dễ sử dụng của phần mềm. Statement Coverage, Dataflow là hộp trắng; Cause-effect graphing là kỹ thuật hộp đen chức năng.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_47.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 47 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q48",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A Test Plan Outline contains which of the following:\ni. Test Items\nii. Test Scripts\niii. Test Deliverables\niv. Responsibilities",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii are true and iv is false"
      },
      {
        "id": "B",
        "text": "i, iii, iv are true and ii is false"
      },
      {
        "id": "C",
        "text": "ii, iii are true and i and iv are false"
      },
      {
        "id": "D",
        "text": "i, ii are false and iii, iv are true"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Theo chuẩn IEEE 829, đề cương Kế hoạch kiểm thử (Test Plan) bao gồm Test Items (i), Test Deliverables (iii) và Responsibilities (iv). Test Scripts (ii) là sản phẩm được tạo ra ở giai đoạn thiết kế/triển khai, không nằm trong Test Plan.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_48.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 48 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q49",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Validation involves which of the following:\ni. Helps to check the Quality of the Built Product\nii. Helps to check that we have built the right product.\niii. Helps in developing the product\niv. Monitoring tool wastage and obsoleteness.",
    "options": [
      {
        "id": "A",
        "text": "Options i, ii, iii, iv are true"
      },
      {
        "id": "B",
        "text": "ii is true and i, iii, iv are false"
      },
      {
        "id": "C",
        "text": "i, ii, iii are true and iv is false"
      },
      {
        "id": "D",
        "text": "iii is true and i, ii, iv are false."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Validation (thẩm định) trả lời câu hỏi 'Chúng ta có xây dựng đúng sản phẩm người dùng cần không?' (ii đúng). Ý (i) thuộc về Verification; (iii) và (iv) không phải nhiệm vụ của Validation.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_49.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 49 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q50",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Consider the following state transition diagram of a switch. Which of the following represents an invalid state transition? (Pic 4_276)",
    "options": [
      {
        "id": "A",
        "text": "FAULT to ON"
      },
      {
        "id": "B",
        "text": "ON to OFF"
      },
      {
        "id": "C",
        "text": "OFF to ON"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Trong sơ đồ chuyển trạng thái, các mũi tên hợp lệ là `OFF → ON`, `ON → OFF`, `ON → FAULT` và `FAULT → FAULT`. Không có đường chuyển từ `FAULT` sang `ON`, nên `FAULT to ON` không hợp lệ.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_50.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 50 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q51",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A piece of software has been given _______ what tests in the following will you perform?\n1) Test the areas most critical to business processes\n2) Test the areas where faults will be maximum\n3) Test the easiest functionalities",
    "options": [
      {
        "id": "A",
        "text": "1&2 are true and 3 is false"
      },
      {
        "id": "B",
        "text": "1, 2&3 are true."
      },
      {
        "id": "C",
        "text": "1 is true, 2&3 are false."
      },
      {
        "id": "D",
        "text": "1&2 are false, 3 is true"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Khi kiểm thử dựa trên rủi ro (risk-based testing), ta ưu tiên kiểm thử các khu vực quan trọng nhất với quy trình nghiệp vụ (1) và các khu vực có khả năng chứa nhiều lỗi nhất (2), thay vì ưu tiên các chức năng dễ nhất (3).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_51.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 51 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q52",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The Switch is switched off once the temperature falls below 18 and then it is turned on when the temperature is more than 21. Identify the Equivalence values which belong to the same class.",
    "options": [
      {
        "id": "A",
        "text": "12, 16, 22"
      },
      {
        "id": "B",
        "text": "24, 27, 17"
      },
      {
        "id": "C",
        "text": "22, 23, 24"
      },
      {
        "id": "D",
        "text": "14, 15, 19"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Ba phân vùng tương đương của nhiệt độ là `< 18`, `18..21` và `> 21`. Nhóm `22, 23, 24` có tất cả các giá trị đều lớn hơn 21 nên cùng thuộc một lớp tương đương.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_52.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 52 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q53",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of these are objectives for software testing?",
    "options": [
      {
        "id": "A",
        "text": "Determine the productivity of programmers"
      },
      {
        "id": "B",
        "text": "Eliminate the need for future program maintenance"
      },
      {
        "id": "C",
        "text": "Eliminate every error prior to release"
      },
      {
        "id": "D",
        "text": "Uncover software errors"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Mục tiêu cốt lõi của kiểm thử phần mềm là phát hiện lỗi (Uncover software errors/defects). Kiểm thử không thể loại bỏ 100% mọi lỗi trước khi phát hành (C) và không dùng để đánh giá năng suất lập trình viên (A).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_53.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 53 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q54",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which is not a testing objective?",
    "options": [
      {
        "id": "A",
        "text": "Finding defects"
      },
      {
        "id": "B",
        "text": "Gaining confidence about the level of quality and providing information"
      },
      {
        "id": "C",
        "text": "Preventing defects."
      },
      {
        "id": "D",
        "text": "Debugging defects"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Các mục tiêu của kiểm thử gồm tìm lỗi (A), tạo sự tin tưởng về mức chất lượng và cung cấp thông tin (B), và ngăn ngừa lỗi (C). Gỡ lỗi (Debugging defects) là hoạt động phát triển, không phải mục tiêu của kiểm thử.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_54.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 54 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q55",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following statements is true?",
    "options": [
      {
        "id": "A",
        "text": "Faults in program specifications are the most expensive to fix"
      },
      {
        "id": "B",
        "text": "Faults in code are the most expensive to fix."
      },
      {
        "id": "C",
        "text": "Faults in requirements are the most expensive to fix"
      },
      {
        "id": "D",
        "text": "Faults in designs are the most expensive to fix."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Lỗi trong giai đoạn đặc tả yêu cầu (requirements) là tốn kém nhất để sửa chữa vì chúng nằm ở đầu vòng đời phát triển và sẽ lan truyền sang thiết kế, mã nguồn cũng như toàn bộ hệ thống kiểm thử.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_55.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 55 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q56",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following benefits are MOST likely to be achieved by using test tools?\ni) Easy to access information about tests and testing.\nii) Reduced maintenance of testware.\niii) Easy and cheap to implement.\niv) Greater consistency of tests.",
    "options": [
      {
        "id": "A",
        "text": "ii and iv"
      },
      {
        "id": "B",
        "text": "ii and iii"
      },
      {
        "id": "C",
        "text": "i and iv"
      },
      {
        "id": "D",
        "text": "i and iii"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Sử dụng công cụ kiểm thử mang lại lợi ích rõ rệt nhất là dễ truy xuất thông tin kiểm thử (i) và nâng cao tính nhất quán khi thực thi (iv), trong khi chi phí triển khai và bảo trì testware thường khá cao (ii, iii sai).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_56.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 56 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q57",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is the component test standard?",
    "options": [
      {
        "id": "A",
        "text": "IEEE 829"
      },
      {
        "id": "B",
        "text": "IEEE 610"
      },
      {
        "id": "C",
        "text": "BS7925-1"
      },
      {
        "id": "D",
        "text": "BS7925-2"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. BS 7925-2 là tiêu chuẩn về kiểm thử thành phần phần mềm (Software Component Testing). IEEE 829 là chuẩn tài liệu kiểm thử, IEEE 610 là từ điển thuật ngữ kỹ thuật phần mềm, còn BS 7925-1 là bảng thuật ngữ kiểm thử.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_57.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 57 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q58",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The phases of the formal review process are mentioned below. Arrange them in the correct order:\ni) Planning\nii) Review Meeting\niii) Rework\niv) Individual Preparations\nv) Kick Off\nvi) Follow up",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv, v, vi"
      },
      {
        "id": "B",
        "text": "vi, i, ii, iii, iv, v"
      },
      {
        "id": "C",
        "text": "i, v, iv, ii, iii, vi"
      },
      {
        "id": "D",
        "text": "i, ii, iii, v, iv, vi"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Thứ tự đúng của 6 bước Formal Review theo ISTQB là: Planning (i) → Kick-off (v) → Individual Preparations (iv) → Review Meeting (ii) → Rework (iii) → Follow-up (vi).",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_58.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 58 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q59",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following techniques is NOT a black box technique?",
    "options": [
      {
        "id": "A",
        "text": "State transition testing"
      },
      {
        "id": "B",
        "text": "LCSAJ (Linear Code Sequence and Jump)"
      },
      {
        "id": "C",
        "text": "Syntax testing"
      },
      {
        "id": "D",
        "text": "Boundary value analysis"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. LCSAJ (Linear Code Sequence and Jump) là một kỹ thuật kiểm thử hộp trắng (structure-based) dựa trên cấu trúc mã nguồn. State transition, Syntax testing và Boundary value analysis đều là kỹ thuật hộp đen.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_59.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 59 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-02-q60",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The purpose of exit criteria is:",
    "options": [
      {
        "id": "A",
        "text": "Define when to stop testing"
      },
      {
        "id": "B",
        "text": "End of test level"
      },
      {
        "id": "C",
        "text": "When a set of tests has achieved a specific precondition"
      },
      {
        "id": "D",
        "text": "All of the others"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Mục đích chính của tiêu chí đầu ra (Exit criteria) là xác định rõ điều kiện khi nào một mức kiểm thử hoặc hoạt động kiểm thử được coi là hoàn thành và có thể dừng kiểm thử.",
    "imageUrl": "/images/swt-fe/su26-b5-fe/q_60.webp",
    "imageCaption": "Đề 02: Kì Summe — Câu 60 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q01",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A piece of software has been given ______ what tests in the following will you perform?\n1) Test the areas most critical to business processes\n2) Test the areas where faults will be maximum\n3) Test the easiest functionalities",
    "options": [
      {
        "id": "A",
        "text": "1&2 are true and 3 is false"
      },
      {
        "id": "B",
        "text": "1,2&3 are true."
      },
      {
        "id": "C",
        "text": "1 is true, 2&3 are false."
      },
      {
        "id": "D",
        "text": "1&2 are false, 3 is true"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Theo nguyên tắc kiểm thử dựa trên rủi ro và phân cụm lỗi (defect clustering), ta cần ưu tiên kiểm thử các khu vực quan trọng nhất với nghiệp vụ (1) và các khu vực có khả năng chứa nhiều lỗi nhất (2), thay vì ưu tiên các chức năng dễ nhất (3 sai).",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_01.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 1 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q02",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the difference between testing software developed by contractor outside your country, versus testing software developed by a contractor within your country?",
    "options": [
      {
        "id": "A",
        "text": "Does not meet people needs"
      },
      {
        "id": "B",
        "text": "Cultural difference"
      },
      {
        "id": "C",
        "text": "Loss of control over reallocation of resources"
      },
      {
        "id": "D",
        "text": "Relinquishments of control"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Điểm khác biệt đặc trưng nhất khi kiểm thử phần mềm phát triển bởi nhà thầu nước ngoài (offshore) so với nhà thầu trong nước là sự khác biệt về văn hóa (Cultural difference), bên cạnh ngôn ngữ và múi giờ.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_02.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 2 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q03",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "PDCA is known as:",
    "options": [
      {
        "id": "A",
        "text": "Plan, Do, Check, Act"
      },
      {
        "id": "B",
        "text": "Plan, Do, Correct, Act"
      },
      {
        "id": "C",
        "text": "Plan, Debug, Check, Act"
      },
      {
        "id": "D",
        "text": "Plan, Do, Check, Accept"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — PDCA là viết tắt của chu trình cải tiến chất lượng Deming: Plan (Lập kế hoạch) – Do (Thực hiện) – Check (Kiểm tra) – Act (Hành động/Cải tiến).",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_03.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 3 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q04",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "When should you stop testing?",
    "options": [
      {
        "id": "A",
        "text": "When time for testing has run out"
      },
      {
        "id": "B",
        "text": "When all planned tests have been run"
      },
      {
        "id": "C",
        "text": "When the test completion criteria have been met"
      },
      {
        "id": "D",
        "text": "When no faults have been found by the tests run"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C** — Theo ISTQB, thời điểm dừng kiểm thử nên được quyết định khi các tiêu chí hoàn thành/đầu ra (test completion / exit criteria) đã được định nghĩa trước trong kế hoạch kiểm thử đều đạt được.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_04.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 4 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q05",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the purpose of exit criteria?",
    "options": [
      {
        "id": "A",
        "text": "To define when a test level is complete."
      },
      {
        "id": "B",
        "text": "To determine when a test has completed"
      },
      {
        "id": "C",
        "text": "To identify when a software system should be retired."
      },
      {
        "id": "D",
        "text": "To determine whether a test has passed."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Tiêu chí đầu ra (Exit criteria) xác định các điều kiện cần thỏa mãn để công nhận một cấp độ kiểm thử (test level) hoặc một tập hoạt động kiểm thử đã hoàn tất.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_05.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 5 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q06",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "\"How much testing is enough?\"",
    "options": [
      {
        "id": "A",
        "text": "This question is impossible to answer"
      },
      {
        "id": "B",
        "text": "This question is easy to answer"
      },
      {
        "id": "C",
        "text": "The answer depends on the risk for your industry, contract and special requirements"
      },
      {
        "id": "D",
        "text": "This answer depends on the maturity of your developers"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C** — Câu trả lời cho việc kiểm thử bao nhiêu là đủ phụ thuộc vào mức độ rủi ro (kỹ thuật, kinh doanh, ngành nghề), các ràng buộc hợp đồng, ngân sách và yêu cầu đặc thù của dự án.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_06.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 6 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q07",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the purpose of test completion criteria in a test plan?",
    "options": [
      {
        "id": "A",
        "text": "To know when a specific test has finished its execution"
      },
      {
        "id": "B",
        "text": "To ensure that the test case specification is complete"
      },
      {
        "id": "C",
        "text": "To set the criteria used in generating test inputs"
      },
      {
        "id": "D",
        "text": "To know when test planning is complete"
      },
      {
        "id": "E",
        "text": "To plan when to stop testing"
      }
    ],
    "correctOptionIds": [
      "E"
    ],
    "explanation": "**Đáp án đúng: E**\nTest completion criteria (hay exit criteria) trong kế hoạch kiểm thử được xác định nhằm lập kế hoạch và quyết định khi nào có thể dừng hoạt động kiểm thử.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_07.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 7 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q08",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A reliable system will be one that:",
    "options": [
      {
        "id": "A",
        "text": "Is unlikely to be completed on schedule"
      },
      {
        "id": "B",
        "text": "Is unlikely to cause a failure"
      },
      {
        "id": "C",
        "text": "Is likely to be fault-free"
      },
      {
        "id": "D",
        "text": "Is likely to be liked by the users"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Một hệ thống có độ tin cậy cao (reliable system) là hệ thống có xác suất gây ra sự cố/thất bại (failure) rất thấp trong điều kiện vận hành xác định.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_08.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 8 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q09",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which type of testing focuses on evaluating quality attributes such as security, performance, reliability, and usability in an Internet banking system?",
    "options": [
      {
        "id": "A",
        "text": "System integration"
      },
      {
        "id": "B",
        "text": "Functional testing"
      },
      {
        "id": "C",
        "text": "Non-functional testing."
      },
      {
        "id": "D",
        "text": "Requirements testing"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C** — Các thuộc tính chất lượng như bảo mật (security), hiệu năng (performance), độ tin cậy (reliability) và tính khả dụng (usability) thuộc phạm vi của kiểm thử phi chức năng (Non-functional testing).",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_09.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 9 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q10",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "When a defect is detected and fixed then the software should be retested to confirm that the original defect has been successfully removed. This is called",
    "options": [
      {
        "id": "A",
        "text": "Regression testing"
      },
      {
        "id": "B",
        "text": "Maintenance testing"
      },
      {
        "id": "C",
        "text": "Confirmation testing"
      },
      {
        "id": "D",
        "text": "None of the above"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Kiểm thử lại để xác nhận rằng lỗi ban đầu đã được sửa thành công gọi là Confirmation testing (kiểm thử xác nhận / re-testing), khác với Regression testing dùng để kiểm tra các tác dụng phụ không mong muốn.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_10.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 10 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q11",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which type of testing involves testing the entire system to verify that all functional, information, structural, and quality requirements have been met, and uses a predetermined set of tests to demonstrate to management that the system meets specifications?",
    "options": [
      {
        "id": "A",
        "text": "Validation Testing"
      },
      {
        "id": "B",
        "text": "Integration Testing"
      },
      {
        "id": "C",
        "text": "User Acceptance Testing"
      },
      {
        "id": "D",
        "text": "System Testing"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D** — Kiểm thử hệ thống (System Testing) kiểm tra toàn bộ hệ thống đã tích hợp hoàn chỉnh nhằm xác minh hệ thống đáp ứng đầy đủ các yêu cầu chức năng, cấu trúc, thông tin và chất lượng theo đặc tả.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_11.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 11 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q12",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The later in the development life cycle a fault is discovered, the more expensive it is to fix. Why?",
    "options": [
      {
        "id": "A",
        "text": "The documentation is poor, so it takes longer to find out what the software is doing."
      },
      {
        "id": "B",
        "text": "Wages are rising"
      },
      {
        "id": "C",
        "text": "The fault has been built into more documentation, code, tests, etc"
      },
      {
        "id": "D",
        "text": "None of the others"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C** — Lỗi được phát hiện càng muộn trong vòng đời phát triển thì càng tốn kém để sửa vì nó đã lan truyền và ăn sâu vào nhiều tài liệu thiết kế, mã nguồn và test case hơn, buộc phải sửa lại hàng loạt.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_12.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 12 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q13",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Validation involves which of the following:\ni. Helps to check the quality of the built product\nii. Helps to check that we have built the right product\niii. Helps in developing the product\niv. Monitoring tool wastage and obsoleteness",
    "options": [
      {
        "id": "A",
        "text": "Options i, ii, iii, iv are true"
      },
      {
        "id": "B",
        "text": "ii is true and i, iii, iv are false"
      },
      {
        "id": "C",
        "text": "i, ii, iii are true and iv is false"
      },
      {
        "id": "D",
        "text": "iii is true and i, ii, iv are false."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nValidation (thẩm định) trả lời câu hỏi \"Chúng ta có đang xây dựng đúng sản phẩm mà người dùng cần không?\" (ii). Còn kiểm tra chất lượng sản phẩm so với đặc tả (i) thuộc về Verification.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_13.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 13 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q14",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following statements about component testing is not true?",
    "options": [
      {
        "id": "A",
        "text": "Component testing should be performed by development"
      },
      {
        "id": "B",
        "text": "Component testing is also known as isolation or module testing"
      },
      {
        "id": "C",
        "text": "Component testing should have completion criteria planned"
      },
      {
        "id": "D",
        "text": "Component testing does not involve regression testing"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D** — Phát biểu D là sai vì kiểm thử hồi quy (regression testing) có thể và cần được thực hiện ở tất cả các cấp độ kiểm thử, bao gồm cả component/unit testing mỗi khi mã nguồn thay đổi.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_14.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 14 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q15",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Failure is:",
    "options": [
      {
        "id": "A",
        "text": "Incorrect program behaviour due to a fault in the program"
      },
      {
        "id": "B",
        "text": "Bug found before product Release"
      },
      {
        "id": "C",
        "text": "Bug found after product Release"
      },
      {
        "id": "D",
        "text": "Bug found during Design phase"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Failure (sự cố) là hành vi sai lệch của chương trình khi thực thi do một lỗi/khiếm khuyết (fault/defect) tồn tại trong chương trình gây ra.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_15.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 15 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q16",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the integration approach that begins with the lowest-level (leaf) modules and progresses upward?",
    "options": [
      {
        "id": "A",
        "text": "Top-down integration"
      },
      {
        "id": "B",
        "text": "Bottom-up integration"
      },
      {
        "id": "C",
        "text": "None of the others"
      },
      {
        "id": "D",
        "text": "Module integration"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Tích hợp từ dưới lên (Bottom-up integration) bắt đầu từ các mô-đun mức thấp nhất (mô-đun lá) và tích hợp dần lên các mô-đun mức cao hơn, thường sử dụng các test driver.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_16.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 16 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q17",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a part of Test Closure Activities?\ni. Checking which planned deliverables have been delivered\nii. Defect report analysis.\niii. Finalizing and archiving testware.\niv. Analyzing lessons",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iv are true and iii is false"
      },
      {
        "id": "B",
        "text": "i, ii, iii are true and iv is false"
      },
      {
        "id": "C",
        "text": "i, iii, iv are true and ii is false"
      },
      {
        "id": "D",
        "text": "All of them are true"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C** — Theo ISTQB, hoạt động đóng kiểm thử (Test Closure Activities) gồm kiểm tra các sản phẩm bàn giao theo kế hoạch (i), hoàn thiện và lưu trữ testware (iii), và phân tích bài học kinh nghiệm (iv). Phân tích báo cáo lỗi (ii) diễn ra trong giai đoạn thực thi và giám sát, không phải hoạt động đóng kiểm thử.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_17.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 17 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q18",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which is not a project risk?",
    "options": [
      {
        "id": "A",
        "text": "Supplier issues"
      },
      {
        "id": "B",
        "text": "Organization factors"
      },
      {
        "id": "C",
        "text": "Technical issues"
      },
      {
        "id": "D",
        "text": "Error-prone software delivered"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D** — Theo ISTQB, vấn đề nhà cung cấp (A), yếu tố tổ chức (B) và vấn đề kỹ thuật (C) đều là rủi ro dự án (project risks), còn phần mềm bàn giao chứa nhiều lỗi (Error-prone software delivered — D) là rủi ro sản phẩm (product risk).",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_18.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 18 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q19",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A Project risk includes which of the following?",
    "options": [
      {
        "id": "A",
        "text": "Organizational Factors"
      },
      {
        "id": "B",
        "text": "Poor Software characteristics"
      },
      {
        "id": "C",
        "text": "Error prone software delivered."
      },
      {
        "id": "D",
        "text": "Software that does not perform its intended functions"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Rủi ro dự án (Project risk) liên quan đến khả năng đạt mục tiêu của dự án như yếu tố tổ chức, nhân sự, nhà cung cấp hay tiến độ. Các phương án B, C, D đều là rủi ro sản phẩm (Product risk) liên quan trực tiếp đến chất lượng phần mềm.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_19.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 19 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q20",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Who are the persons involved in a Formal Review?\ni) Manager\nii) Moderator\niii) Scribe / Recorder\niv) Assistant Manager",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv are true"
      },
      {
        "id": "B",
        "text": "i, ii, iii are true and iv is false."
      },
      {
        "id": "C",
        "text": "ii, iii, iv are true and i is false."
      },
      {
        "id": "D",
        "text": "i, iv are true and ii, iii are false."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Theo ISTQB, các vai trò trong Formal Review bao gồm Manager, Moderator, Author, Reviewers và Scribe/Recorder. Không có vai trò Assistant Manager trong quy trình Formal Review chuẩn.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_20.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 20 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q21",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The phases of the formal review process are mentioned below. Arrange them in the correct order:\ni) Planning\nii) Review Meeting\niii) Rework\niv) Individual Preparations\nv) Kick Off\nvi) Follow Up",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv, v, vi"
      },
      {
        "id": "B",
        "text": "vi, i, ii, iii, iv, v"
      },
      {
        "id": "C",
        "text": "i, v, iv, ii, iii, vi"
      },
      {
        "id": "D",
        "text": "i, ii, iii, v, iv, vi"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Trình tự 6 bước chuẩn của quy trình Formal Review theo ISTQB là: Planning (i) → Kick-off (v) → Individual Preparation (iv) → Review Meeting (ii) → Rework (iii) → Follow-up (vi).",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_21.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 21 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q22",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the main purpose of Informal review",
    "options": [
      {
        "id": "A",
        "text": "Inexpensive way to get some benefit"
      },
      {
        "id": "B",
        "text": "Find defects"
      },
      {
        "id": "C",
        "text": "Learning, gaining understanding, effect finding"
      },
      {
        "id": "D",
        "text": "Discuss, make decisions, solve technical problems"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Theo ISTQB, mục đích chính của Informal review (như buddy check, pair review) là một cách ít tốn kém để thu được một số lợi ích nhanh chóng (Inexpensive way to get some benefit).",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_22.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 22 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q23",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "Which TWO of the following statements about static analysis are correct?",
    "options": [
      {
        "id": "A",
        "text": "Compiling code is not a form of static analysis"
      },
      {
        "id": "B",
        "text": "Static analysis need not be performed before imperative code is executed"
      },
      {
        "id": "C",
        "text": "Static analysis can find faults that are hard to find with dynamic testing."
      },
      {
        "id": "D",
        "text": "Extensive statistical analysis will not be needed if white-box testing is to be performed."
      }
    ],
    "correctOptionIds": [
      "B",
      "C"
    ],
    "explanation": "**Đáp án đúng: B, C**. Phân tích tĩnh (static analysis) có thể phát hiện sớm các lỗi khó tìm bằng kiểm thử động như biến chưa sử dụng hoặc lỗi cú pháp/luồng dữ liệu (C), và không bắt buộc phải chạy trước khi thực thi mã nguồn (B). Phương án A sai vì trình biên dịch chính là một dạng công cụ phân tích tĩnh; D sai vì kiểm thử hộp trắng không thay thế được phân tích tĩnh.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_23.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 23 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q24",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Success factors for a review include:\ni. Each review does not have a predefined objective\nii. Defects found are welcomed and expressed objectively\niii. Management supports a good review process\niv. There is an emphasis on learning and process improvement",
    "options": [
      {
        "id": "A",
        "text": "ii, iii, iv are correct and i is incorrect"
      },
      {
        "id": "B",
        "text": "iii, i, iv are correct and ii is incorrect"
      },
      {
        "id": "C",
        "text": "i, iii, iv, ii are incorrect"
      },
      {
        "id": "D",
        "text": "ii is correct"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nMỗi buổi review thành công đều phải có mục tiêu xác định trước, do đó phát biểu (i) sai. Các yếu tố (ii), (iii), (iv) đều là yếu tố thành công của review theo ISTQB.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_24.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 24 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q25",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What can static analysis NOT find?",
    "options": [
      {
        "id": "A",
        "text": "The use of a variable before it has been defined"
      },
      {
        "id": "B",
        "text": "Unreachable (\"dead\") code"
      },
      {
        "id": "C",
        "text": "Memory leaks"
      },
      {
        "id": "D",
        "text": "Array bound violations"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nRò rỉ bộ nhớ (memory leaks) là lỗi xảy ra trong quá trình cấp phát/giải phóng bộ nhớ lúc chạy chương trình, thường cần công cụ phân tích động (dynamic analysis) để phát hiện chứ không phải phân tích tĩnh.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_25.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 25 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q26",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "In a review meeting a moderator is a person who:",
    "options": [
      {
        "id": "A",
        "text": "Takes minutes of the meeting"
      },
      {
        "id": "B",
        "text": "Mediates between people"
      },
      {
        "id": "C",
        "text": "Takes telephone calls"
      },
      {
        "id": "D",
        "text": "Writes the documents to be reviewed"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Moderator (người điều phối) chịu trách nhiệm dẫn dắt buổi review và dung hòa các ý kiến giữa các thành viên tham gia. Việc ghi biên bản là của Scribe (A) và viết tài liệu là của Author (D).",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_26.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 26 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q27",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is true about Formal Review or Inspection:\ni) Led by Trained Moderator (not the author).\nii) No Pre Meeting Preparations.\niii) Formal Follow up process.\niv) Main Objective is to find defects.",
    "options": [
      {
        "id": "A",
        "text": "ii is true and i, iii, iv are false"
      },
      {
        "id": "B",
        "text": "i, iii, iv are true and ii is false"
      },
      {
        "id": "C",
        "text": "i, iii, iv are false and ii is true"
      },
      {
        "id": "D",
        "text": "iii is true and i, ii, iv are false"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Inspection là loại review trang trọng nhất, được dẫn dắt bởi Moderator đã qua đào tạo (i), có quy trình Follow-up chính thức (iii) và mục tiêu chính là tìm lỗi (iv). Ý (ii) sai vì Inspection bắt buộc phải có bước chuẩn bị cá nhân trước cuộc họp.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_27.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 27 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q28",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Who is responsible for documenting all the issues, problems and open points that were identified during the review meeting?",
    "options": [
      {
        "id": "A",
        "text": "Moderator"
      },
      {
        "id": "B",
        "text": "Scribe"
      },
      {
        "id": "C",
        "text": "Reviewers"
      },
      {
        "id": "D",
        "text": "Author"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Scribe (hay Recorder - thư ký) có trách nhiệm ghi chép lại toàn bộ các lỗi, vấn đề và điểm mở được phát hiện trong buổi họp review.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_28.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 28 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q29",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "In which type of software development project is the internal implementation (source code and system structure) typically unavailable to testers?",
    "options": [
      {
        "id": "A",
        "text": "Traditional system development"
      },
      {
        "id": "B",
        "text": "Iterative development"
      },
      {
        "id": "C",
        "text": "System maintenance"
      },
      {
        "id": "D",
        "text": "Purchased/contracted software"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Với phần mềm mua sẵn hoặc thuê ngoài (Purchased/contracted software, COTS), mã nguồn và cấu trúc bên trong thường không được cung cấp cho đội kiểm thử, nên chủ yếu áp dụng kiểm thử hộp đen.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_29.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 29 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q30",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "One of the fields on a form contains a text box, which accepts alphabets in lower or upper case. Identify the invalid Equivalence class value.",
    "options": [
      {
        "id": "A",
        "text": "CLASS"
      },
      {
        "id": "B",
        "text": "cLASS"
      },
      {
        "id": "C",
        "text": "CLass"
      },
      {
        "id": "D",
        "text": "CLa01ss"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Ô nhập liệu chỉ chấp nhận các ký tự chữ cái (hoa hoặc thường). Giá trị `CLa01ss` chứa chữ số `01` nên thuộc lớp tương đương không hợp lệ (invalid equivalence class).",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_30.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 30 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q31",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Boundary value testing:",
    "options": [
      {
        "id": "A",
        "text": "Is the same as equivalence partitioning tests"
      },
      {
        "id": "B",
        "text": "Test boundary conditions on, below and above the edges of input and output equivalence classes"
      },
      {
        "id": "C",
        "text": "Tests combinations of input circumstances"
      },
      {
        "id": "D",
        "text": "Is used in white box testing strategy"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Phân tích giá trị biên (Boundary Value Analysis) là kỹ thuật hộp đen tập trung kiểm thử các giá trị ngay tại biên, ngay dưới biên và ngay trên biên của các lớp tương đương đầu vào và đầu ra.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_31.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 31 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q32",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Consider the following state transition diagram of a switch. Which of the following represents an invalid state transition? (Pic 4_276)",
    "options": [
      {
        "id": "A",
        "text": "OFF to ON"
      },
      {
        "id": "B",
        "text": "ON to OFF"
      },
      {
        "id": "C",
        "text": "FAULT to ON"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Theo sơ đồ chuyển trạng thái, công tắc chỉ có các chuyển đổi hợp lệ: `OFF → ON`, `ON → OFF`, `ON → FAULT` và `FAULT → FAULT`. Không có mũi tên chuyển từ `FAULT` sang `ON`, nên `FAULT to ON` là chuyển trạng thái không hợp lệ.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_32.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 32 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q33",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The Switch is switched off once the temperature falls below 18 and then it is turned on when the temperature is more than 21. Identify the Equivalence values which belong to the same class.",
    "options": [
      {
        "id": "A",
        "text": "12, 16, 22"
      },
      {
        "id": "B",
        "text": "24, 27, 17"
      },
      {
        "id": "C",
        "text": "22, 23, 24"
      },
      {
        "id": "D",
        "text": "14, 15, 19"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Các lớp tương đương của nhiệt độ là: `< 18` (tắt), `18–21` (giữ nguyên trạng thái) và `> 21` (bật). Chỉ có bộ giá trị `22, 23, 24` cùng thuộc một lớp tương đương (`> 21`).",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_33.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 33 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q34",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "How many test cases are necessary to cover all the possible sequences of statements (paths) for the following program fragment? Assume that the two conditions are independent of each other:\nif (Condition 1) then\n  statement 1\nelse\n  statement 2\n\nif (Condition 2) then\n  statement 3",
    "options": [
      {
        "id": "A",
        "text": "2 Test Cases"
      },
      {
        "id": "B",
        "text": "3 Test Cases"
      },
      {
        "id": "C",
        "text": "4 Test Cases"
      },
      {
        "id": "D",
        "text": "Not achievable"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Có 2 câu lệnh rẽ nhánh độc lập nối tiếp nhau, mỗi nhánh có 2 khả năng (True/False). Do đó tổng số đường dẫn thực thi có thể có là `2 × 2 = 4` test cases.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_34.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 34 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q35",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Incorrect form of Logic coverage is:",
    "options": [
      {
        "id": "A",
        "text": "Statement Coverage"
      },
      {
        "id": "B",
        "text": "Pole Coverage"
      },
      {
        "id": "C",
        "text": "Condition Coverage"
      },
      {
        "id": "D",
        "text": "Path Coverage"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Statement Coverage, Condition Coverage và Path Coverage đều là các mức độ bao phủ mã nguồn/logic tiêu chuẩn trong kiểm thử hộp trắng. Không tồn tại khái niệm `Pole Coverage`.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_35.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 35 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q36",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The technique that can be used to achieve input and output coverage is:",
    "options": [
      {
        "id": "A",
        "text": "Boundary value analysis"
      },
      {
        "id": "B",
        "text": "Equivalence partitioning"
      },
      {
        "id": "C",
        "text": "Decision table testing"
      },
      {
        "id": "D",
        "text": "State transition testing"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Theo giáo trình ISTQB Foundation Level (mục 4.3.1), phân vùng tương đương (Equivalence partitioning) có thể áp dụng cho cả dữ liệu đầu vào và đầu ra để đạt được độ bao phủ input và output.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_36.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 36 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q37",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "_______ includes both Black box and White Box Testing features.",
    "options": [
      {
        "id": "A",
        "text": "(i) Gray Box Testing"
      },
      {
        "id": "B",
        "text": "(ii) Hybrid Testing"
      },
      {
        "id": "C",
        "text": "Both of (i) and (ii)"
      },
      {
        "id": "D",
        "text": "None of (i) nor (ii)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Kiểm thử hộp xám (Gray Box Testing) là kỹ thuật kết hợp giữa kiểm thử hộp đen (kiểm tra chức năng từ bên ngoài) và kiểm thử hộp trắng (dựa trên hiểu biết một phần về cấu trúc bên trong).",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_37.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 37 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q38",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Match the following terms and statements:\n1. Decision Table Testing\n2. Decision Testing\n3. State Transition Testing\n4. Exploratory Testing\n\nW. Testing carried out with time-boxes to achieve specific test objectives, possibly to complement structured testing.\nX. A test technique which may be used to verify different system responses depending on current conditions or previous history.\nY. A test technique which combines combinations of inputs that might not otherwise have been exercised during testing.\nZ. A form of control flow testing based on decision outcomes.",
    "options": [
      {
        "id": "A",
        "text": "1Y, 2Z, 3X, 4W."
      },
      {
        "id": "B",
        "text": "1X, 2W, 3Z, 4Y."
      },
      {
        "id": "C",
        "text": "1Z, 2X, 3W, 4Y."
      },
      {
        "id": "D",
        "text": "1Z, 2Y, 3X, 4W."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Decision Table Testing kết hợp các tổ hợp đầu vào (1-Y); Decision Testing là kiểm thử luồng điều khiển dựa trên kết quả quyết định (2-Z); State Transition Testing kiểm tra phản hồi theo trạng thái hiện tại/lịch sử trước đó (3-X); Exploratory Testing thực hiện theo khung thời gian để bổ trợ cho kiểm thử có cấu trúc (4-W).",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_38.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 38 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q39",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "When should configuration management procedures be implemented?",
    "options": [
      {
        "id": "A",
        "text": "During test planning"
      },
      {
        "id": "B",
        "text": "During test analysis."
      },
      {
        "id": "C",
        "text": "During test execution."
      },
      {
        "id": "D",
        "text": "When evaluating exit criteria"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Theo ISTQB, các thủ tục quản lý cấu hình (Configuration management procedures) cần được xác định và triển khai ngay trong giai đoạn lập kế hoạch kiểm thử (Test planning) để kiểm soát phiên bản của mọi sản phẩm kiểm thử.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_39.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 39 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q40",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "One key reason why developers have difficulty testing their own work is:",
    "options": [
      {
        "id": "A",
        "text": "Lack of technical documentation"
      },
      {
        "id": "B",
        "text": "Lack of test tools on the market for developers"
      },
      {
        "id": "C",
        "text": "Lack of training"
      },
      {
        "id": "D",
        "text": "Lack of objectivity"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Lập trình viên thường khó phát hiện lỗi trong chính mã nguồn của mình do thiếu tính khách quan (confirmation bias / lack of objectivity), vì họ có xu hướng kiểm tra để chứng minh code chạy đúng theo giả định của mình.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_40.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 40 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q41",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Which activities form part of test planning?\ni) Developing test cases.\nii) Defining the overall approach to testing.\niii) Assigning resources.\niv) Building the test environment.\nv) Writing test conditions.",
    "options": [
      {
        "id": "A",
        "text": "i, ii & iv are true, iii & v are false."
      },
      {
        "id": "B",
        "text": "ii & iii are true, i, iv & v are false."
      },
      {
        "id": "C",
        "text": "iv & v are true, i, ii & iii are false."
      },
      {
        "id": "D",
        "text": "i, ii & iii are true, iv & v are false."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Lập kế hoạch kiểm thử (Test Planning) bao gồm xác định cách tiếp cận kiểm thử tổng thể (ii) và phân bổ nguồn lực (iii). Các hoạt động (i), (v) thuộc Analysis & Design, còn (iv) thuộc Implementation & Execution.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_41.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 41 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q42",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is least important in test management?",
    "options": [
      {
        "id": "A",
        "text": "Estimating test duration."
      },
      {
        "id": "B",
        "text": "Incident Management"
      },
      {
        "id": "C",
        "text": "Configuration Management."
      },
      {
        "id": "D",
        "text": "De-bugging."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Quản lý kiểm thử (Test Management) bao gồm ước lượng thời gian, quản lý sự cố (Incident Management) và quản lý cấu hình (Configuration Management). Gỡ lỗi (Debugging) là hoạt động của lập trình viên, không thuộc phạm vi quản lý kiểm thử.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_42.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 42 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q43",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Match the following:\n1. Test estimation\n2. Test control\n3. Test monitoring\n\na. Measures of tracking process\nb. Effort required to perform activities\nc. Reallocation of resources",
    "options": [
      {
        "id": "A",
        "text": "1-b, 2-c, 3-a"
      },
      {
        "id": "B",
        "text": "1-b, 2-a, 3-c"
      },
      {
        "id": "C",
        "text": "1-c, 2-a, 3-b"
      },
      {
        "id": "D",
        "text": "1-a, 2-b, 3-c"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Test estimation ước lượng công sức cần thiết (1-b); Test control thực hiện hành động điều chỉnh như phân bổ lại nguồn lực (2-c); Test monitoring đo lường và theo dõi tiến độ kiểm thử (3-a).",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_43.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 43 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q44",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Testware (test cases, test dataset):",
    "options": [
      {
        "id": "A",
        "text": "Needs configuration management just like requirements, design and code"
      },
      {
        "id": "B",
        "text": "Should be newly constructed for each new version of the software"
      },
      {
        "id": "C",
        "text": "Is needed only until the software is released into production or use"
      },
      {
        "id": "D",
        "text": "Does not need to be documented and commented, as it does not form part of the released software system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Testware (test cases, dữ liệu kiểm thử, kịch bản kiểm thử...) cần được quản lý cấu hình chặt chẽ tương tự như tài liệu yêu cầu, thiết kế và mã nguồn để đảm bảo khả năng truy xuất và tái sử dụng.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_44.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 44 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q45",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A Function/Test Matrix is primarily classified as which type of project document?",
    "options": [
      {
        "id": "A",
        "text": "Interim Test report"
      },
      {
        "id": "B",
        "text": "Final test report"
      },
      {
        "id": "C",
        "text": "Project status report"
      },
      {
        "id": "D",
        "text": "Management report"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Ma trận Chức năng/Kiểm thử (Function/Test Matrix) dùng để theo dõi mức độ bao phủ các chức năng trong quá trình kiểm thử đang diễn ra, nên được phân loại là báo cáo kiểm thử tạm thời (Interim Test report).",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_45.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 45 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q46",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is NOT part of configuration management?",
    "options": [
      {
        "id": "A",
        "text": "Status accounting of configuration items"
      },
      {
        "id": "B",
        "text": "Auditing conformance to ISO9001"
      },
      {
        "id": "C",
        "text": "Identification of test versions"
      },
      {
        "id": "D",
        "text": "Record of changes to documentation over time"
      },
      {
        "id": "E",
        "text": "Controlled library access"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Đánh giá sự tuân thủ tiêu chuẩn ISO 9001 thuộc về hoạt động Đảm bảo chất lượng (Quality Assurance - QA), không phải chức năng của Quản lý cấu hình (Configuration Management).",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_46.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 46 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q47",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Quality Assurance is the process by which product quality is compared with the application standards and the action taken when nonconformance is detected.",
    "options": [
      {
        "id": "A",
        "text": "True"
      },
      {
        "id": "B",
        "text": "False"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Phát biểu trên mô tả Quality Control (kiểm soát chất lượng - tập trung vào sản phẩm), không phải Quality Assurance (đảm bảo chất lượng - tập trung vào tuân thủ quy trình để ngăn ngừa lỗi).",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_47.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 47 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q48",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What type of tools are to be used for Regression Testing?",
    "options": [
      {
        "id": "A",
        "text": "(1) Performance"
      },
      {
        "id": "B",
        "text": "(2) Record/Playback"
      },
      {
        "id": "C",
        "text": "Both of (1) and (2)"
      },
      {
        "id": "D",
        "text": "None of (1) nor (2)"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Công cụ Record/Playback (Capture/Replay) ghi lại thao tác kiểm thử và phát lại tự động nhiều lần, rất phù hợp cho kiểm thử hồi quy (Regression Testing). Công cụ Performance dùng để kiểm thử hiệu năng.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_48.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 48 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q49",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Capture and replay facilities are least likely to be used to:",
    "options": [
      {
        "id": "A",
        "text": "Performance testing"
      },
      {
        "id": "B",
        "text": "Recovery testing"
      },
      {
        "id": "C",
        "text": "GUI testing"
      },
      {
        "id": "D",
        "text": "User requirements."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Công cụ Capture and Replay dùng để ghi lại và phát lại các tương tác kiểm thử (GUI, hồi quy, hiệu năng, phục hồi), ít có khả năng nhất được dùng để xác định hoặc kiểm tra tài liệu yêu cầu người dùng (User requirements).",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_49.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 49 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q50",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A tool that supports traceability, recording of incidents or scheduling of tests is called:",
    "options": [
      {
        "id": "A",
        "text": "A dynamic analysis tool"
      },
      {
        "id": "B",
        "text": "A test execution tool"
      },
      {
        "id": "C",
        "text": "A debugging tool"
      },
      {
        "id": "D",
        "text": "A test management tool"
      },
      {
        "id": "E",
        "text": "A configuration management tool"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Công cụ quản lý kiểm thử (Test management tool) hỗ trợ lập lịch kiểm thử, ghi nhận sự cố/lỗi và liên kết truy xuất (traceability) giữa yêu cầu, test case và defect.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_50.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 50 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q51",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The provision and management of a controlled library containing all the configuration items is called as:",
    "options": [
      {
        "id": "A",
        "text": "Configuration Control"
      },
      {
        "id": "B",
        "text": "Status Accounting"
      },
      {
        "id": "C",
        "text": "Configuration Identification"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Configuration Control (Kiểm soát cấu hình) là hoạt động cung cấp và quản lý thư viện có kiểm soát chứa tất cả các mục cấu hình (configuration items) cũng như kiểm soát mọi thay đổi đối với chúng.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_51.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 51 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q52",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A typical commercial test execution tool would be able to perform all of the following, EXCEPT:",
    "options": [
      {
        "id": "A",
        "text": "Generating expected outputs"
      },
      {
        "id": "B",
        "text": "Replaying inputs according to a programmed script"
      },
      {
        "id": "C",
        "text": "Comparison of expected outcomes with actual outcomes"
      },
      {
        "id": "D",
        "text": "Recording test inputs"
      },
      {
        "id": "E",
        "text": "Reading test values from a data file"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Công cụ thực thi kiểm thử thương mại có thể ghi lại đầu vào, phát lại script, đọc dữ liệu từ file và so sánh kết quả, nhưng không thể tự suy ra hay sinh ra kết quả mong đợi (Generating expected outputs) — điều này cần con người (test oracle) xác định.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_52.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 52 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q53",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is NOT a characteristic of User Acceptance Testing?",
    "options": [
      {
        "id": "A",
        "text": "Use of automated test execution tools"
      },
      {
        "id": "B",
        "text": "Testing performed by users."
      },
      {
        "id": "C",
        "text": "Testing against acceptance test criteria"
      },
      {
        "id": "D",
        "text": "Integration of system with user documentation."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Kiểm thử chấp nhận người dùng (UAT) được thực hiện bởi người dùng cuối dựa trên tiêu chí chấp nhận và quy trình/tài liệu sử dụng thực tế; việc sử dụng công cụ thực thi tự động không phải là đặc trưng của UAT.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_53.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 53 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q54",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The principal attributes of tools and automation are (choose one answer)",
    "options": [
      {
        "id": "A",
        "text": "(1) Speed & efficiency"
      },
      {
        "id": "B",
        "text": "(2) Accuracy & precision"
      },
      {
        "id": "C",
        "text": "Both of (1) and (2)"
      },
      {
        "id": "D",
        "text": "None of (1) nor (2)"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Hai thuộc tính cốt lõi của công cụ và tự động hóa kiểm thử là tốc độ & hiệu suất (Speed & efficiency) cùng độ chính xác & độ chuẩn xác (Accuracy & precision).",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_54.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 54 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q55",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following tools would be involved in the automation of regression test?",
    "options": [
      {
        "id": "A",
        "text": "Data tester"
      },
      {
        "id": "B",
        "text": "Boundary tester"
      },
      {
        "id": "C",
        "text": "Capture/Playback"
      },
      {
        "id": "D",
        "text": "Output comparator."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Công cụ Capture/Playback (ghi và phát lại) được sử dụng phổ biến để tự động hóa việc chạy lại các ca kiểm thử trong kiểm thử hồi quy (Regression Testing).",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_55.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 55 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q56",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which type of tool stores requirement statements, checks for consistency, allows requirements to be prioritized, and enables individual tests to be traceable to requirements, functions, and features?",
    "options": [
      {
        "id": "A",
        "text": "Incident management tools"
      },
      {
        "id": "B",
        "text": "Requirements management tools"
      },
      {
        "id": "C",
        "text": "Configuration management tools"
      },
      {
        "id": "D",
        "text": "None of the others"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Công cụ quản lý yêu cầu (Requirements management tools) lưu trữ các phát biểu yêu cầu, kiểm tra tính nhất quán, cho phép sắp xếp độ ưu tiên và hỗ trợ truy xuất ngược giữa yêu cầu với các ca kiểm thử.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_56.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 56 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q57",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following benefits are MOST likely to be achieved by using test tools?\ni) Easy to access information about tests and testing.\nii) Reduced maintenance of testware.\niii) Easy and cheap to implement.\niv) Greater consistency of tests.",
    "options": [
      {
        "id": "A",
        "text": "ii and iv"
      },
      {
        "id": "B",
        "text": "ii and iii"
      },
      {
        "id": "C",
        "text": "i and iv"
      },
      {
        "id": "D",
        "text": "i and iii"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Lợi ích thực tế của công cụ kiểm thử là dễ dàng truy cập thông tin/báo cáo về kiểm thử (i) và tăng tính nhất quán, lặp lại chính xác của các bài kiểm thử (iv). Ngược lại, công cụ thường làm tăng chi phí triển khai ban đầu và công sức bảo trì testware (nên ii và iii sai).",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_57.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 57 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q58",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "People who don't participate in technical reviews:",
    "options": [
      {
        "id": "A",
        "text": "Analysts"
      },
      {
        "id": "B",
        "text": "Management"
      },
      {
        "id": "C",
        "text": "Developers"
      },
      {
        "id": "D",
        "text": "Testers"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Theo ISTQB, Technical Review là buổi đánh giá ngang hàng (peer review) tập trung vào khía cạnh kỹ thuật giữa các chuyên gia (analysts, developers, testers) và thường không có sự tham gia của cấp quản lý (Management).",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_58.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 58 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q59",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is the task of a Test Lead / Leader?\ni. Interaction with the Test Tool Vendor to identify best ways to leverage test tool on the project.\nii. Write Test Summary Reports based on the information gathered during testing.\niii. Decide what should be automated, to what degree and how.\niv. Create the Test Specifications.",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii is true and iv is false"
      },
      {
        "id": "B",
        "text": "ii, iii, iv is true and i is false"
      },
      {
        "id": "C",
        "text": "i is true and ii, iii, iv are false"
      },
      {
        "id": "D",
        "text": "iii and iv is correct and i and ii are incorrect"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Nhiệm vụ của Test Leader/Manager gồm làm việc với nhà cung cấp công cụ (i), viết báo cáo tổng kết kiểm thử (ii) và quyết định chiến lược tự động hóa (iii). Việc tạo Test Specifications (iv) là nhiệm vụ của Tester.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_59.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 59 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-03-q60",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-b5-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "When do you stop testing?",
    "options": [
      {
        "id": "A",
        "text": "When the specified number of faults are found"
      },
      {
        "id": "B",
        "text": "When the test completion criteria are met."
      },
      {
        "id": "C",
        "text": "When all high and medium priority tests are complete."
      },
      {
        "id": "D",
        "text": "When all statements have been executed"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Quá trình kiểm thử kết thúc khi các tiêu chí hoàn thành/đầu ra kiểm thử (test completion / exit criteria) đã định nghĩa trước trong kế hoạch kiểm thử được đáp ứng.",
    "imageUrl": "/images/swt-fe/su26-b5-fe-re/q_60.webp",
    "imageCaption": "Đề 03: Kì Summe — Câu 60 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q01",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Against which of the following would incidents normally NOT be raised?",
    "options": [
      {
        "id": "A",
        "text": "Requirements"
      },
      {
        "id": "B",
        "text": "Documentation"
      },
      {
        "id": "C",
        "text": "Test cases"
      },
      {
        "id": "D",
        "text": "Improvements suggested by users"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Báo cáo sự cố (Incident report) có thể được tạo cho lỗi phát hiện trong yêu cầu, tài liệu, mã nguồn hay ca kiểm thử, nhưng không dùng cho các đề xuất cải tiến từ người dùng (Improvements suggested by users — đây là Change/Enhancement Request).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_01.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 1 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q02",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Exclusive use of white box testing in a test-phase will:",
    "options": [
      {
        "id": "A",
        "text": "Ensure the test item is adequately tested"
      },
      {
        "id": "B",
        "text": "Make the need for black-box testing redundant."
      },
      {
        "id": "C",
        "text": "Run the risk that the requirements are not satisfied"
      },
      {
        "id": "D",
        "text": "Suffices for the unit testing phase"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Nếu chỉ sử dụng kiểm thử hộp trắng, ta chỉ kiểm tra những gì đã được viết trong mã nguồn mà không đối chiếu với đặc tả, do đó có nguy cơ bỏ sót các yêu cầu chưa được hiện thực hóa.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_02.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 2 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q03",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The principal attributes of tools and automation are:",
    "options": [
      {
        "id": "A",
        "text": "(1) Speed & efficiency"
      },
      {
        "id": "B",
        "text": "(2) Accuracy & precision"
      },
      {
        "id": "C",
        "text": "Both of (1) and (2)"
      },
      {
        "id": "D",
        "text": "None of (1) nor (2)"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Các thuộc tính chính của công cụ và tự động hóa kiểm thử bao gồm cả tốc độ & hiệu quả (Speed & efficiency) lẫn độ chính xác & độ tin cậy cao (Accuracy & precision).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_03.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 3 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q04",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Match every stage of the Software Development Life Cycle with the Testing Life Cycle:\ni. Hi-level design\nii. Code\niii. Low-level design\niv. Business requirements\n\na. Unit tests\nb. Acceptance tests\nc. System tests\nd. Integration tests",
    "options": [
      {
        "id": "A",
        "text": "i-d, ii-a, iii-c, iv-b"
      },
      {
        "id": "B",
        "text": "i-c, ii-d, iii-a, iv-b"
      },
      {
        "id": "C",
        "text": "i-b, ii-a, iii-d, iv-c"
      },
      {
        "id": "D",
        "text": "i-c, ii-a, iii-d, iv-b"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Theo mô hình chữ V (V-Model): Business requirements tương ứng với Acceptance tests (iv-b), Hi-level design tương ứng với System tests (i-c), Low-level design tương ứng với Integration tests (iii-d), và Code tương ứng với Unit tests (ii-a).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_04.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 4 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q05",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What type of tools are used for Regression Testing?",
    "options": [
      {
        "id": "A",
        "text": "(1) Performance"
      },
      {
        "id": "B",
        "text": "(2) Record/Playback"
      },
      {
        "id": "C",
        "text": "Both of (1) and (2)"
      },
      {
        "id": "D",
        "text": "None of (1) nor (2)"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Công cụ Record/Playback (Capture/Playback) ghi lại và phát lại kịch bản kiểm thử tự động, rất phù hợp cho Regression Testing. Công cụ Performance dùng để kiểm thử hiệu năng, không phải mục tiêu chính của kiểm thử hồi quy.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_05.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 5 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q06",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The later in the development life cycle a fault is discovered, the more expensive it is to fix. Why?",
    "options": [
      {
        "id": "A",
        "text": "The documentation is poor, so it takes longer to find out what the software is doing."
      },
      {
        "id": "B",
        "text": "Wages are rising"
      },
      {
        "id": "C",
        "text": "The fault has been built into more documentation, code, tests, etc."
      },
      {
        "id": "D",
        "text": "None of the others"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Lỗi càng được phát hiện muộn trong vòng đời phát triển thì nó càng lan rộng và bám sâu vào nhiều tài liệu, thiết kế, mã nguồn và ca kiểm thử hơn, nên chi phí sửa chữa và kiểm thử lại càng cao.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_06.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 6 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q07",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is the component test standard?",
    "options": [
      {
        "id": "A",
        "text": "IEEE 829"
      },
      {
        "id": "B",
        "text": "IEEE 610"
      },
      {
        "id": "C",
        "text": "BS7925-1"
      },
      {
        "id": "D",
        "text": "BS7925-2"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. BS 7925-2 là tiêu chuẩn về kiểm thử thành phần (Software Component Testing). Trong khi đó, BS 7925-1 là bảng thuật ngữ kiểm thử, IEEE 829 là chuẩn tài liệu kiểm thử và IEEE 610 là từ điển thuật ngữ kỹ thuật phần mềm.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_07.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 7 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q08",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which test may not mimic real world situations?",
    "options": [
      {
        "id": "A",
        "text": "(i) Functional testing"
      },
      {
        "id": "B",
        "text": "(ii) Structural Testing"
      },
      {
        "id": "C",
        "text": "Both of (i) and (ii)"
      },
      {
        "id": "D",
        "text": "None of (i) nor (ii)"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Structural testing (kiểm thử hộp trắng) tập trung vào cấu trúc bên trong của mã nguồn (câu lệnh, nhánh, luồng điều khiển) nên có thể không mô phỏng đúng các tình huống sử dụng thực tế như Functional testing.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_08.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 8 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q09",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of these are objectives for software testing?",
    "options": [
      {
        "id": "A",
        "text": "Determine the productivity of programmers"
      },
      {
        "id": "B",
        "text": "Eliminate the need for future program maintenance"
      },
      {
        "id": "C",
        "text": "Eliminate every error prior to release"
      },
      {
        "id": "D",
        "text": "Uncover software errors"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Mục tiêu cốt lõi của kiểm thử phần mềm là phát hiện lỗi (uncover software errors/defects). Kiểm thử không thể loại bỏ mọi lỗi trước khi phát hành và không nhằm đánh giá năng suất lập trình viên.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_09.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 9 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q10",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Defects discovered by static analysis tools include:\ni. Variables that are never used.\nii. Security vulnerabilities.\niii. Programming Standard Violations\niv. Uncalled functions and procedures",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv is correct"
      },
      {
        "id": "B",
        "text": "iii is correct, i, ii, iv are incorrect."
      },
      {
        "id": "C",
        "text": "i, ii, iii and iv are incorrect"
      },
      {
        "id": "D",
        "text": "iv, ii is correct"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Công cụ phân tích tĩnh (static analysis tools) có thể phát hiện cả bốn loại lỗi: biến không sử dụng, lỗ hổng bảo mật, vi phạm chuẩn lập trình và các hàm/thủ tục không bao giờ được gọi (dead code).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_10.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 10 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q11",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following benefits are MOST likely to be achieved by using test tools?\ni) Easy to access information about tests and testing.\nii) Reduced maintenance of testware.\niii) Easy and cheap to implement.\niv) Greater consistency of tests.",
    "options": [
      {
        "id": "A",
        "text": "ii and iv"
      },
      {
        "id": "B",
        "text": "ii and iii"
      },
      {
        "id": "C",
        "text": "i and iv"
      },
      {
        "id": "D",
        "text": "i and iii"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Sử dụng công cụ kiểm thử giúp dễ dàng truy cập thông tin về kiểm thử (i) và tăng tính nhất quán, khả năng lặp lại của các ca kiểm thử (iv). Việc triển khai công cụ không hề rẻ hay đơn giản và thường làm tăng nỗ lực bảo trì testware.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_11.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 11 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q12",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What determines the level of risk?",
    "options": [
      {
        "id": "A",
        "text": "The cost of dealing with an adverse event if it occurs."
      },
      {
        "id": "B",
        "text": "The probability that an adverse event will occur."
      },
      {
        "id": "C",
        "text": "The amount of testing planned before release of a system."
      },
      {
        "id": "D",
        "text": "The likelihood of an adverse event and the impact of the event."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Theo ISTQB, mức độ rủi ro (level of risk) được xác định bởi hai yếu tố: xác suất xảy ra sự cố (likelihood) và mức độ tác động/thiệt hại khi sự cố đó xảy ra (impact).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_12.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 12 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q13",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is NOT a type of non-functional test?",
    "options": [
      {
        "id": "A",
        "text": "State-Transition"
      },
      {
        "id": "B",
        "text": "Usability"
      },
      {
        "id": "C",
        "text": "Performance"
      },
      {
        "id": "D",
        "text": "Security"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. State-Transition là kỹ thuật thiết kế kiểm thử hộp đen (chức năng), không phải loại kiểm thử phi chức năng. Usability, Performance và Security đều là các loại kiểm thử phi chức năng.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_13.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 13 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q14",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The person who leads the review of the document(s), planning the review, running the meeting and follow-up after the meeting is:",
    "options": [
      {
        "id": "A",
        "text": "Reviewer"
      },
      {
        "id": "B",
        "text": "Author"
      },
      {
        "id": "C",
        "text": "Moderator"
      },
      {
        "id": "D",
        "text": "Auditor"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Moderator (người điều phối) chịu trách nhiệm dẫn dắt quá trình review tài liệu, lập kế hoạch review, điều hành buổi họp và theo dõi sau buổi họp.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_14.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 14 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q15",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Reviews, static analysis and dynamic testing have the same objective:",
    "options": [
      {
        "id": "A",
        "text": "(i) Identifying defects."
      },
      {
        "id": "B",
        "text": "(ii) Fixing defects"
      },
      {
        "id": "C",
        "text": "(i) and (ii)"
      },
      {
        "id": "D",
        "text": "None of (i) nor (ii)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Theo giáo trình ISTQB, review, phân tích tĩnh và kiểm thử động có cùng mục tiêu là phát hiện lỗi (identifying defects). Việc sửa lỗi (fixing defects) thuộc hoạt động gỡ lỗi (debugging) của lập trình viên.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_15.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 15 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q16",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "PDCA is known as:",
    "options": [
      {
        "id": "A",
        "text": "Plan, Do, Check, Act"
      },
      {
        "id": "B",
        "text": "Plan, Do, Correct, Act"
      },
      {
        "id": "C",
        "text": "Plan, Debug, Check, Act"
      },
      {
        "id": "D",
        "text": "Plan, Do, Check, Accept"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. PDCA (chu trình Deming) là viết tắt của Plan (Lập kế hoạch) - Do (Thực hiện) - Check (Kiểm tra) - Act (Hành động/Cải tiến).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_16.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 16 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q17",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "id": "A",
        "text": "Faults in program specifications are the most expensive to fix"
      },
      {
        "id": "B",
        "text": "Faults in code are the most expensive to fix."
      },
      {
        "id": "C",
        "text": "Faults in requirements are the most expensive to fix"
      },
      {
        "id": "D",
        "text": "Faults in designs are the most expensive to fix."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Lỗi trong giai đoạn yêu cầu (requirements) xuất hiện sớm nhất nên nếu không được phát hiện kịp thời sẽ kéo theo sai sót ở toàn bộ thiết kế, mã nguồn và kiểm thử, do đó tốn kém chi phí sửa chữa nhất.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_17.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 17 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q18",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "When should you stop testing?",
    "options": [
      {
        "id": "A",
        "text": "When time for testing has run out"
      },
      {
        "id": "B",
        "text": "When all planned tests have been run"
      },
      {
        "id": "C",
        "text": "When the test completion criteria have been met"
      },
      {
        "id": "D",
        "text": "When no faults have been found by the tests run"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Việc kiểm thử nên dừng lại khi các tiêu chí hoàn thành kiểm thử (test completion / exit criteria) đã được thỏa mãn theo kế hoạch đã định.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_18.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 18 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q19",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Where may functional testing be performed?",
    "options": [
      {
        "id": "A",
        "text": "At system and acceptance testing levels only."
      },
      {
        "id": "B",
        "text": "At all test levels."
      },
      {
        "id": "C",
        "text": "At all levels above integration testing."
      },
      {
        "id": "D",
        "text": "At the acceptance testing level only."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Kiểm thử chức năng (functional testing) có thể được thực hiện ở tất cả các cấp độ kiểm thử (Component, Integration, System và Acceptance testing).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_19.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 19 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q20",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following activities should be performed during the selection and implementation of a testing tool?\ni) Investigate the organisation's test process.\nii) Conduct a proof of concept.\niii) Implement the selected tool on a project behind schedule to save time.\niv) Identify coaching and mentoring requirements for the use of the selected tool.",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii."
      },
      {
        "id": "B",
        "text": "ii, iii, iv."
      },
      {
        "id": "C",
        "text": "i, iii, iv."
      },
      {
        "id": "D",
        "text": "i, ii, iv."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Khi lựa chọn và triển khai công cụ kiểm thử, cần khảo sát quy trình kiểm thử hiện tại (i), chạy thử nghiệm chứng minh khái niệm (ii) và xác định nhu cầu đào tạo/hướng dẫn (iv). Không bao giờ triển khai công cụ mới trên dự án đang trễ tiến độ (iii sai).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_20.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 20 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q21",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "With thorough testing it is possible to remove all defects from a program prior to delivery to the customer.",
    "options": [
      {
        "id": "A",
        "text": "True"
      },
      {
        "id": "B",
        "text": "False"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Theo nguyên lý kiểm thử của ISTQB, kiểm thử vét cạn là bất khả thi và kiểm thử chỉ có thể chứng minh sự tồn tại của lỗi chứ không thể đảm bảo loại bỏ 100% lỗi trước khi bàn giao.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_21.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 21 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q22",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Defect Management process does not include:",
    "options": [
      {
        "id": "A",
        "text": "Defect prevention"
      },
      {
        "id": "B",
        "text": "Deliverable base-lining"
      },
      {
        "id": "C",
        "text": "Management reporting"
      },
      {
        "id": "D",
        "text": "None of the others"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Quy trình quản lý lỗi (Defect Management Process) bao gồm đầy đủ các hoạt động: phòng ngừa lỗi (Defect prevention), thiết lập đường cơ sở sản phẩm bàn giao (Deliverable base-lining), phát hiện/xử lý lỗi, cải tiến quy trình và báo cáo quản lý (Management reporting). Do đó không có mục nào bị loại trừ.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_22.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 22 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q23",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of these can be successfully tested using Loop Testing methodology?",
    "options": [
      {
        "id": "A",
        "text": "Simple Loops"
      },
      {
        "id": "B",
        "text": "Nested Loops"
      },
      {
        "id": "C",
        "text": "Concatenated Loops"
      },
      {
        "id": "D",
        "text": "All of the others"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Phương pháp kiểm thử vòng lặp (Loop Testing) áp dụng hiệu quả cho cả vòng lặp đơn (Simple Loops), vòng lặp lồng nhau (Nested Loops) và vòng lặp nối tiếp (Concatenated Loops).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_23.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 23 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q24",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "Which TWO of the following statements about static analysis are correct?",
    "options": [
      {
        "id": "A",
        "text": "Compiling code is not a form of static analysis"
      },
      {
        "id": "B",
        "text": "Static analysis need not be performed before imperative code is executed"
      },
      {
        "id": "C",
        "text": "Static analysis can find faults that are hard to find with dynamic testing."
      },
      {
        "id": "D",
        "text": "Extensive statistical analysis will not be needed if white-box testing is to be performed."
      }
    ],
    "correctOptionIds": [
      "B",
      "C"
    ],
    "explanation": "**Đáp án đúng: B, C**. Phân tích tĩnh có thể phát hiện những lỗi khó tìm bằng kiểm thử động (C) và không bắt buộc phải chạy trước khi thực thi mã nguồn (B). A sai vì biên dịch mã là một dạng phân tích tĩnh; D sai vì kiểm thử hộp trắng không thay thế được phân tích tĩnh.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_24.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 24 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q25",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which type of testing focuses on evaluating quality attributes such as security, performance, reliability, and usability in an Internet banking system?",
    "options": [
      {
        "id": "A",
        "text": "System integration"
      },
      {
        "id": "B",
        "text": "Functional testing"
      },
      {
        "id": "C",
        "text": "Non-functional testing."
      },
      {
        "id": "D",
        "text": "Requirements testing"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Các thuộc tính chất lượng như bảo mật (security), hiệu năng (performance), độ tin cậy (reliability) và tính khả dụng (usability) đều thuộc phạm vi kiểm thử phi chức năng (Non-functional testing).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_25.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 25 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q26",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The purpose of exit criteria is:",
    "options": [
      {
        "id": "A",
        "text": "Define when to stop testing"
      },
      {
        "id": "B",
        "text": "End of test level"
      },
      {
        "id": "C",
        "text": "When a set of tests has achieved a specific pre condition"
      },
      {
        "id": "D",
        "text": "All of the others"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Mục đích của tiêu chí kết thúc (exit criteria) là xác định rõ khi nào có thể dừng kiểm thử. B chỉ là một thời điểm, còn C nhắc đến điều kiện tiên quyết (pre-condition) thuộc entry criteria.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_26.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 26 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q27",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Match the following:\n1. Test estimation\n2. Test control\n3. Test monitoring\n\na. Measures of tracking process\nb. Effort required to perform activities\nc. Reallocation of resources",
    "options": [
      {
        "id": "A",
        "text": "1-b, 2-c, 3-a"
      },
      {
        "id": "B",
        "text": "1-b, 2-a, 3-c"
      },
      {
        "id": "C",
        "text": "1-c, 2-a, 3-b"
      },
      {
        "id": "D",
        "text": "1-a, 2-b, 3-c"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Test estimation ước lượng công sức thực hiện (1-b), Test control đưa ra hành động điều chỉnh như tái phân bổ nguồn lực (2-c), và Test monitoring đo lường, theo dõi tiến độ (3-a).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_27.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 27 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q28",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which tool will be used to test and flag memory leaks and unassigned pointers?",
    "options": [
      {
        "id": "A",
        "text": "Dynamic analysis tool"
      },
      {
        "id": "B",
        "text": "Static Analysis tool."
      },
      {
        "id": "C",
        "text": "Maintenance tool"
      },
      {
        "id": "D",
        "text": "Configuration tool"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Theo ISTQB, công cụ phân tích động (Dynamic analysis tool) phát hiện các lỗi chỉ xuất hiện khi chương trình đang chạy như rò rỉ bộ nhớ (memory leaks) và con trỏ chưa được gán (unassigned pointers).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_28.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 28 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q29",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The place to start if you want a (new) test tool is:",
    "options": [
      {
        "id": "A",
        "text": "Attend a tool exhibition"
      },
      {
        "id": "B",
        "text": "Invite a vendor to give a demo"
      },
      {
        "id": "C",
        "text": "Analyze your needs and requirements"
      },
      {
        "id": "D",
        "text": "Find out what your budget would be for the tool"
      },
      {
        "id": "E",
        "text": "Search the internet"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Bước đầu tiên khi muốn áp dụng công cụ kiểm thử mới là phân tích nhu cầu và yêu cầu của tổ chức/dự án trước khi tìm hiểu nhà cung cấp hay xem demo.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_29.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 29 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q30",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Increasing the quality of the software, by better development methods, will affect the time needed for testing (the test phases) by:",
    "options": [
      {
        "id": "A",
        "text": "Reducing test time"
      },
      {
        "id": "B",
        "text": "No change"
      },
      {
        "id": "C",
        "text": "Increasing test time"
      },
      {
        "id": "D",
        "text": "Can't say"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Khi chất lượng phần mềm tăng lên nhờ phương pháp phát triển tốt hơn, số lượng lỗi giảm đi, giúp giảm thời gian báo lỗi, kiểm thử lại (re-testing) và kiểm thử hồi quy, từ đó giảm thời gian kiểm thử.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_30.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 30 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q31",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is not a quality characteristic listed in ISO 9126 Standard?",
    "options": [
      {
        "id": "A",
        "text": "Functionality"
      },
      {
        "id": "B",
        "text": "Usability"
      },
      {
        "id": "C",
        "text": "Supportability"
      },
      {
        "id": "D",
        "text": "Maintainability"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. ISO 9126 gồm 6 đặc tính chất lượng: Functionality, Reliability, Usability, Efficiency, Maintainability và Portability. Supportability không nằm trong danh sách này.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_31.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 31 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q32",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is not included in Test Plan?",
    "options": [
      {
        "id": "A",
        "text": "Features to be tested"
      },
      {
        "id": "B",
        "text": "Environmental needs"
      },
      {
        "id": "C",
        "text": "Suspension criteria."
      },
      {
        "id": "D",
        "text": "Expected results"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Theo chuẩn IEEE 829, Test Plan bao gồm các tính năng cần kiểm thử, yêu cầu môi trường và tiêu chí tạm dừng. Kết quả mong đợi (Expected results) nằm trong Test Case Specification, không nằm trong Test Plan.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_32.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 32 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q33",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "One of the fields on a form contains a text box which accepts alphanumeric values. Identify the Valid Equivalence class:",
    "options": [
      {
        "id": "A",
        "text": "BOOK"
      },
      {
        "id": "B",
        "text": "Book"
      },
      {
        "id": "C",
        "text": "B0001k"
      },
      {
        "id": "D",
        "text": "book"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Giá trị alphanumeric (chữ và số) cần đại diện cho cả ký tự chữ cái và chữ số; trong các lựa chọn, chỉ có `B0001k` chứa cả chữ và số.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_33.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 33 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q34",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following BEST describes the difference between an inspection and a walkthrough?",
    "options": [
      {
        "id": "A",
        "text": "Both inspections and walkthroughs are led by the author"
      },
      {
        "id": "B",
        "text": "An inspection is led by a moderator and a walkthrough is led by the author."
      },
      {
        "id": "C",
        "text": "Both inspections and walkthroughs are led by a trained moderator."
      },
      {
        "id": "D",
        "text": "A walkthrough is led by the author. The author is not present during inspections."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Điểm khác biệt cốt lõi là Inspection được dẫn dắt bởi một Moderator được đào tạo, còn Walkthrough được dẫn dắt bởi chính tác giả tài liệu (Author).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_34.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 34 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q35",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Handover of Testware is a part of which Phase?",
    "options": [
      {
        "id": "A",
        "text": "Test Analysis and Design"
      },
      {
        "id": "B",
        "text": "Test Planning and control"
      },
      {
        "id": "C",
        "text": "Test Closure Activities"
      },
      {
        "id": "D",
        "text": "Evaluating exit criteria and reporting"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Việc bàn giao testware (tài liệu, kịch bản, môi trường kiểm thử) cho nhóm bảo trì hoặc lưu trữ là một hoạt động trong giai đoạn Test Closure Activities.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_35.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 35 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q36",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which expression best matches the following characteristics or review processes:\n1. Led by author\n2. Undocumented\n3. No management participation\n4. Led by a trained moderator or leader\n5. Uses entry exit criteria\n\ns) Inspection\nt) Peer review\nu) Informal review\nv) Walkthrough",
    "options": [
      {
        "id": "A",
        "text": "s = 4, t = 3, u = 2 and 5, v = 1"
      },
      {
        "id": "B",
        "text": "s = 4 and 5, t = 3, u = 2, v = 1"
      },
      {
        "id": "C",
        "text": "s = 1 and 5, t = 3, u = 2, v = 4"
      },
      {
        "id": "D",
        "text": "s = 5, t = 4, u = 3, v = 1 and 2"
      },
      {
        "id": "E",
        "text": "s = 4 and 5, t = 1, u = 2, v = 3"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Inspection (s) do moderator được đào tạo dẫn dắt (4) và có tiêu chí đầu vào/đầu ra (5); Peer/Technical review (t) không có sự tham gia của quản lý (3); Informal review (u) không cần lập tài liệu (2); Walkthrough (v) do tác giả dẫn dắt (1).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_36.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 36 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q37",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Testing wherein we subject the target of the test to varying workloads to measure and evaluate the performance behaviors and ability of the target and of the test to continue to function properly under these different workloads is:",
    "options": [
      {
        "id": "A",
        "text": "Load Testing"
      },
      {
        "id": "B",
        "text": "Integration Testing"
      },
      {
        "id": "C",
        "text": "System Testing"
      },
      {
        "id": "D",
        "text": "Usability Testing"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Load Testing (kiểm thử tải) đo lường và đánh giá hành vi hiệu năng cũng như khả năng hoạt động ổn định của hệ thống dưới các mức tải công việc khác nhau.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_37.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 37 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q38",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Cost of the reviews will not include:",
    "options": [
      {
        "id": "A",
        "text": "Review process itself"
      },
      {
        "id": "B",
        "text": "Metrics analysis"
      },
      {
        "id": "C",
        "text": "Tool support"
      },
      {
        "id": "D",
        "text": "Process improvement"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Chi phí thực hiện review bao gồm bản thân quy trình review, phân tích chỉ số đo lường (metrics analysis) và công cụ hỗ trợ (tool support). Process improvement (cải tiến quy trình) là lợi ích/kết quả thu được chứ không phải chi phí trực tiếp của review.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_38.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 38 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q39",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is not a static testing technique?",
    "options": [
      {
        "id": "A",
        "text": "Error guessing"
      },
      {
        "id": "B",
        "text": "Walkthrough"
      },
      {
        "id": "C",
        "text": "Data flow analysis"
      },
      {
        "id": "D",
        "text": "Inspections"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Error guessing là kỹ thuật thiết kế kiểm thử động dựa trên kinh nghiệm (experience-based). Walkthrough, Data flow analysis và Inspections đều thuộc kiểm thử tĩnh.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_39.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 39 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q40",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The Planning phase of a formal review includes which of the following?",
    "options": [
      {
        "id": "A",
        "text": "Explaining the objectives"
      },
      {
        "id": "B",
        "text": "Selecting the personnel, allocating roles"
      },
      {
        "id": "C",
        "text": "Follow up"
      },
      {
        "id": "D",
        "text": "Individual Meeting preparations"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Giai đoạn Planning của formal review bao gồm xác định tiêu chí, lựa chọn nhân sự và phân bổ vai trò (selecting personnel, allocating roles). Giải thích mục tiêu thuộc Kick-off.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_40.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 40 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q41",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Code Coverage is used as a measure of what?",
    "options": [
      {
        "id": "A",
        "text": "Defects"
      },
      {
        "id": "B",
        "text": "Trends analysis"
      },
      {
        "id": "C",
        "text": "Test Effectiveness"
      },
      {
        "id": "D",
        "text": "Time Spent Testing"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Độ bao phủ mã nguồn (Code Coverage) đo mức độ mã nguồn đã được thực thi bởi bộ ca kiểm thử, qua đó đánh giá hiệu quả kiểm thử (Test Effectiveness).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_41.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 41 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q42",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which is not one of the testing objectives?",
    "options": [
      {
        "id": "A",
        "text": "Finding defects"
      },
      {
        "id": "B",
        "text": "Gaining confidence about the level of quality and providing information"
      },
      {
        "id": "C",
        "text": "Preventing defects."
      },
      {
        "id": "D",
        "text": "Debugging defects"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Debugging defects (gỡ lỗi và sửa lỗi) là hoạt động của lập trình viên, không phải mục tiêu của kiểm thử phần mềm.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_42.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 42 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q43",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following tools would be involved in the automation of regression test?",
    "options": [
      {
        "id": "A",
        "text": "Data tester"
      },
      {
        "id": "B",
        "text": "Boundary tester"
      },
      {
        "id": "C",
        "text": "Capture/Playback"
      },
      {
        "id": "D",
        "text": "Output comparator."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Công cụ Capture/Playback (Test execution tool) được sử dụng phổ biến để tự động hóa việc chạy lại các bài kiểm thử hồi quy (regression testing).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_43.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 43 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q44",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "_____ includes both Black box and White Box Testing features:",
    "options": [
      {
        "id": "A",
        "text": "(i) Gray Box Testing"
      },
      {
        "id": "B",
        "text": "(ii) Hybrid Testing"
      },
      {
        "id": "C",
        "text": "Both of (i) and (ii)"
      },
      {
        "id": "D",
        "text": "None of (i) nor (ii)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Gray Box Testing (kiểm thử hộp xám) kết hợp đặc điểm của cả kiểm thử hộp đen (dựa trên đặc tả bên ngoài) và kiểm thử hộp trắng (hiểu biết một phần cấu trúc bên trong).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_44.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 44 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q45",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Who are the persons involved in a Formal Review?\ni) Manager\nii) Moderator\niii) Scribe / Recorder\niv) Assistant Manager",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv are true"
      },
      {
        "id": "B",
        "text": "i, ii, iii are true and iv is false."
      },
      {
        "id": "C",
        "text": "ii, iii, iv are true and i is false."
      },
      {
        "id": "D",
        "text": "i, iv are true and ii, iii are false."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Các vai trò chuẩn trong một Formal Review theo ISTQB gồm Manager, Moderator, Author, Reviewers và Scribe/Recorder; không có vai trò Assistant Manager (iv sai).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_45.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 45 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q46",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following has the highest level of independence in which test cases are:",
    "options": [
      {
        "id": "A",
        "text": "Designed by persons who write the software under test"
      },
      {
        "id": "B",
        "text": "Designed by a person from a different section"
      },
      {
        "id": "C",
        "text": "Designed by a person from a different organization"
      },
      {
        "id": "D",
        "text": "Designed by another person"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Mức độ độc lập cao nhất trong kiểm thử là khi ca kiểm thử được thiết kế bởi người thuộc một tổ chức bên ngoài (different organization / outsourcing).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_46.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 46 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q47",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Success Factors for a review include:\ni. Each Review does not have a predefined objective\nii. Defects found are welcomed and expressed objectively\niii. Management supports a good review process.\niv. There is an emphasis on learning and process improvement.",
    "options": [
      {
        "id": "A",
        "text": "ii, iii, iv are correct and i is incorrect"
      },
      {
        "id": "B",
        "text": "iii, i, iv is correct and ii is incorrect"
      },
      {
        "id": "C",
        "text": "i, iii, iv, ii is incorrect"
      },
      {
        "id": "D",
        "text": "ii is correct"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Các yếu tố thành công của review gồm đón nhận lỗi một cách khách quan (ii), có sự ủng hộ của quản lý (iii) và chú trọng học hỏi, cải tiến quy trình (iv). Phát biểu (i) sai vì mỗi buổi review phải có mục tiêu xác định trước.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_47.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 47 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q48",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "In a review meeting a moderator is a person who:",
    "options": [
      {
        "id": "A",
        "text": "Takes minutes of the meeting"
      },
      {
        "id": "B",
        "text": "Mediates between people"
      },
      {
        "id": "C",
        "text": "Takes telephone calls"
      },
      {
        "id": "D",
        "text": "Writes the documents to be reviewed"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Trong buổi họp review, Moderator đóng vai trò điều phối, hòa giải và giữ cân bằng giữa các quan điểm khác nhau (mediates between people). Ghi biên bản là việc của Scribe, viết tài liệu là của Author.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_48.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 48 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q49",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a Key Characteristic of WalkThrough?",
    "options": [
      {
        "id": "A",
        "text": "Scenario, Dry Run, Peer Group"
      },
      {
        "id": "B",
        "text": "Pre Meeting Preparations"
      },
      {
        "id": "C",
        "text": "Formal Follow Up Process"
      },
      {
        "id": "D",
        "text": "Includes Metrics"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Theo ISTQB, đặc trưng chính của Walkthrough là chạy thử kịch bản (Scenario), chạy nháp (Dry Run) và có sự tham gia của nhóm đồng nghiệp (Peer Group). Các phương án B, C, D là đặc trưng của Inspection.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_49.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 49 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q50",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "One of the following is not a part of white box testing as per BS7925-II standards:",
    "options": [
      {
        "id": "A",
        "text": "Random testing"
      },
      {
        "id": "B",
        "text": "Data Flow testing"
      },
      {
        "id": "C",
        "text": "Statement testing"
      },
      {
        "id": "D",
        "text": "Syntax testing"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Theo chuẩn BS 7925-2, Data Flow testing và Statement testing là các kỹ thuật kiểm thử hộp trắng, còn Random testing là kỹ thuật sinh dữ liệu ngẫu nhiên (không phải kỹ thuật cấu trúc hộp trắng).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_50.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 50 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q51",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A typical commercial test execution tool would be able to perform all of the following, EXCEPT:",
    "options": [
      {
        "id": "A",
        "text": "Generating expected outputs"
      },
      {
        "id": "B",
        "text": "Replaying inputs according to a programmed script"
      },
      {
        "id": "C",
        "text": "Comparison of expected outcomes with actual outcomes"
      },
      {
        "id": "D",
        "text": "Recording test inputs"
      },
      {
        "id": "E",
        "text": "Reading test values from a data file"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Công cụ thực thi kiểm thử thương mại có thể ghi/phát lại đầu vào, đọc dữ liệu từ tệp và so sánh kết quả thực tế với kết quả mong đợi, nhưng không thể tự sinh ra kết quả mong đợi (expected outputs).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_51.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 51 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q52",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "An incident logging system:",
    "options": [
      {
        "id": "A",
        "text": "Only records defects"
      },
      {
        "id": "B",
        "text": "Is of limited value"
      },
      {
        "id": "C",
        "text": "Is a valuable source of project information during testing if it contains all incidents"
      },
      {
        "id": "D",
        "text": "Should be used only by the test team."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Hệ thống ghi nhận sự cố (incident logging system) là nguồn thông tin dự án rất giá trị trong quá trình kiểm thử nếu ghi lại đầy đủ mọi sự cố (không chỉ riêng lỗi phần mềm) và được chia sẻ cho các bên liên quan.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_52.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 52 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q53",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Measurement dysfunction is a problem because:",
    "options": [
      {
        "id": "A",
        "text": "Even though the numbers you look at appear better, to achieve these numbers, people are doing other aspects of their work much less well."
      },
      {
        "id": "B",
        "text": "We don't know how to measure a variable (our measurement is dysfunctional) and so we don't know how to interpret the result."
      },
      {
        "id": "C",
        "text": "You are measuring the wrong thing and thus reaching the wrong conclusions."
      },
      {
        "id": "D",
        "text": "All of the others"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Measurement dysfunction (rối loạn đo lường) xảy ra khi nhân sự cố gắng tối ưu hóa các con số báo cáo để trông đẹp hơn nhưng lại làm giảm chất lượng ở những khía cạnh quan trọng khác của công việc.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_53.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 53 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q54",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is the standard for the Software product quality?",
    "options": [
      {
        "id": "A",
        "text": "ISO 9126"
      },
      {
        "id": "B",
        "text": "IEEE 829"
      },
      {
        "id": "C",
        "text": "ISO 1012"
      },
      {
        "id": "D",
        "text": "ISO 1028"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. ISO 9126 (sau này phát triển thành ISO/IEC 25010) là tiêu chuẩn quốc tế định nghĩa mô hình chất lượng sản phẩm phần mềm.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_54.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 54 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q55",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Boundary value testing:",
    "options": [
      {
        "id": "A",
        "text": "Is the same as equivalence partitioning tests"
      },
      {
        "id": "B",
        "text": "Test boundary conditions on, below and above the edges of input and output equivalence classes"
      },
      {
        "id": "C",
        "text": "Tests combinations of input circumstances"
      },
      {
        "id": "D",
        "text": "Is used in white box testing strategy"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Kiểm thử giá trị biên (Boundary value testing/analysis) tập trung kiểm thử các điều kiện tại biên, ngay dưới biên và ngay trên biên của các lớp tương đương đầu vào và đầu ra.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_55.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 55 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q56",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Component Testing is also called as:\ni) Unit Testing\nii) Program Testing\niii) Module Testing\niv) System Component Testing.",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii are true and iv is false"
      },
      {
        "id": "B",
        "text": "i, ii, iii, iv are false"
      },
      {
        "id": "C",
        "text": "i, ii, iv are true and iii is false"
      },
      {
        "id": "D",
        "text": "All of them are true"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Theo ISTQB, Component Testing còn được gọi là Unit Testing, Module Testing hoặc Program Testing (i, ii, iii đúng; iv không phải tên gọi chuẩn).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_56.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 56 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q57",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Software quality is not relevant to:",
    "options": [
      {
        "id": "A",
        "text": "Correctness"
      },
      {
        "id": "B",
        "text": "Usability"
      },
      {
        "id": "C",
        "text": "Viability"
      },
      {
        "id": "D",
        "text": "Reusability"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Correctness (tính đúng đắn), Usability (tính khả dụng) và Reusability (tính tái sử dụng) đều là thuộc tính chất lượng phần mềm, còn Viability (tính khả thi thương mại/tồn tại) không thuộc chất lượng phần mềm.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_57.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 57 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q58",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Who is responsible for documenting all the issues, problems and open points that were identified during the review meeting?",
    "options": [
      {
        "id": "A",
        "text": "Moderator"
      },
      {
        "id": "B",
        "text": "Scribe"
      },
      {
        "id": "C",
        "text": "Reviewers"
      },
      {
        "id": "D",
        "text": "Author"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Scribe (thư ký/người ghi chép) chịu trách nhiệm ghi lại toàn bộ vấn đề, lỗi và các điểm mở được phát hiện trong buổi họp review.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_58.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 58 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q59",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "When a new testing tool is purchased, it should be used first by:",
    "options": [
      {
        "id": "A",
        "text": "A small team to establish the best way to use the tool"
      },
      {
        "id": "B",
        "text": "Everyone who may eventually have some use for the tool"
      },
      {
        "id": "C",
        "text": "The independent testing team"
      },
      {
        "id": "D",
        "text": "The vendor contractor to write the initial scripts"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Khi mới mua công cụ kiểm thử, nên triển khai thí điểm (pilot project) với một nhóm nhỏ trước để đánh giá và thiết lập cách sử dụng hiệu quả nhất trước khi nhân rộng.",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_59.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 59 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-04-q60",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The phases of a formal review process are mentioned below. Arrange them in the correct order:\ni) Planning\nii) Review Meeting\niii) Rework\niv) Individual Preparations\nv) Kick Off\nvi) Follow Up",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv, v, vi"
      },
      {
        "id": "B",
        "text": "vi, i, ii, iii, iv, v"
      },
      {
        "id": "C",
        "text": "i, v, iv, ii, iii, vi"
      },
      {
        "id": "D",
        "text": "i, ii, iii, v, iv, vi"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Trình tự 6 bước chuẩn của Formal Review theo ISTQB là: Planning (i) → Kick-off (v) → Individual Preparation (iv) → Review Meeting (ii) → Rework (iii) → Follow-up (vi).",
    "imageUrl": "/images/swt-fe/su26-fe-re/q_60.webp",
    "imageCaption": "Đề 04: Kì Summe — Câu 60 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q01",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is the component test standard?",
    "options": [
      {
        "id": "A",
        "text": "IEEE 829"
      },
      {
        "id": "B",
        "text": "IEEE 610"
      },
      {
        "id": "C",
        "text": "BS7925-1"
      },
      {
        "id": "D",
        "text": "BS7925-2"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. BS 7925-2 là tiêu chuẩn về kiểm thử thành phần (Software Component Testing), còn BS 7925-1 là bảng thuật ngữ kiểm thử phần mềm.",
    "imageUrl": "/images/swt-fe/su26-fe/q_01.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 1 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q02",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which is not a testing principle?",
    "options": [
      {
        "id": "A",
        "text": "Early testing"
      },
      {
        "id": "B",
        "text": "Defect clustering"
      },
      {
        "id": "C",
        "text": "Pesticide paradox"
      },
      {
        "id": "D",
        "text": "Exhaustive testing"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Trong 7 nguyên lý kiểm thử của ISTQB, nguyên lý đúng là \"Exhaustive testing is impossible\" (Kiểm thử vét cạn là bất khả thi), không phải \"Exhaustive testing\".",
    "imageUrl": "/images/swt-fe/su26-fe/q_02.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 2 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q03",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the important criterion in deciding what testing technique to use?",
    "options": [
      {
        "id": "A",
        "text": "How well you know a particular technique"
      },
      {
        "id": "B",
        "text": "The objective of the test"
      },
      {
        "id": "C",
        "text": "How appropriate the technique is for testing the application"
      },
      {
        "id": "D",
        "text": "Whether there is a tool to support the technique"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Tiêu chí quan trọng nhất để quyết định chọn kỹ thuật kiểm thử nào là mục tiêu của việc kiểm thử (the objective of the test).",
    "imageUrl": "/images/swt-fe/su26-fe/q_03.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 3 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q04",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Testing does not help to:",
    "options": [
      {
        "id": "A",
        "text": "Find faults"
      },
      {
        "id": "B",
        "text": "Assure quality"
      },
      {
        "id": "C",
        "text": "Check user friendliness."
      },
      {
        "id": "D",
        "text": "Improve software accuracy"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Kiểm thử giúp phát hiện lỗi, đánh giá/đảm bảo chất lượng và kiểm tra tính thân thiện người dùng, nhưng bản thân hoạt động kiểm thử không trực tiếp cải thiện độ chính xác của phần mềm (việc sửa lỗi của lập trình viên mới làm điều đó).",
    "imageUrl": "/images/swt-fe/su26-fe/q_04.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 4 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q05",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Bug life cycle:",
    "options": [
      {
        "id": "A",
        "text": "Open, Assigned, Fixed, Closed"
      },
      {
        "id": "B",
        "text": "Open, Fixed, Assigned, Closed"
      },
      {
        "id": "C",
        "text": "Assigned, Open, Closed, Fixed"
      },
      {
        "id": "D",
        "text": "Assigned, Open, Fixed, Closed"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nVòng đời chuẩn của một lỗi (Bug life cycle) diễn ra theo trình tự: Open (mở lỗi) → Assigned (giao cho lập trình viên) → Fixed (đã sửa) → Closed (kiểm thử lại đạt và đóng lỗi).",
    "imageUrl": "/images/swt-fe/su26-fe/q_05.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 5 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q06",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Contract and regulation testing is a part of:",
    "options": [
      {
        "id": "A",
        "text": "System testing"
      },
      {
        "id": "B",
        "text": "Acceptance testing"
      },
      {
        "id": "C",
        "text": "Integration testing"
      },
      {
        "id": "D",
        "text": "Smoke testing"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Theo ISTQB, kiểm thử hợp đồng và quy định (Contract and regulation acceptance testing) là một dạng của Acceptance testing (kiểm thử chấp nhận).",
    "imageUrl": "/images/swt-fe/su26-fe/q_06.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 6 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q07",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "When to stop Testing?",
    "options": [
      {
        "id": "A",
        "text": "Stop when scheduled time for testing expires"
      },
      {
        "id": "B",
        "text": "Stop if 75% of the pre-defined number of errors is detected."
      },
      {
        "id": "C",
        "text": "Stop when all the test cases execute with detecting few errors."
      },
      {
        "id": "D",
        "text": "None of the others"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Quyết định dừng kiểm thử phải dựa trên các tiêu chí thoát (exit criteria) đã định nghĩa trước như mức độ bao phủ, rủi ro còn lại, tỷ lệ lỗi và ngân sách, chứ không dừng tùy tiện theo các mốc ở A, B hay C.",
    "imageUrl": "/images/swt-fe/su26-fe/q_07.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 7 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q08",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Increasing the quality of the software, by better development methods, will affect the time needed for testing (the test phases) by:",
    "options": [
      {
        "id": "A",
        "text": "Reducing test time"
      },
      {
        "id": "B",
        "text": "No change"
      },
      {
        "id": "C",
        "text": "Increasing test time"
      },
      {
        "id": "D",
        "text": "Can't say"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Cải thiện chất lượng phần mềm nhờ quy trình phát triển tốt hơn giúp giảm số lỗi phát sinh, từ đó giảm thời gian xử lý lỗi, kiểm thử lại và kiểm thử hồi quy.",
    "imageUrl": "/images/swt-fe/su26-fe/q_08.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 8 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q09",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which is not true — The black box tester:",
    "options": [
      {
        "id": "A",
        "text": "Should be able to understand a functional specification or requirements document"
      },
      {
        "id": "B",
        "text": "Should be able to understand the source code."
      },
      {
        "id": "C",
        "text": "Is highly motivated to find faults"
      },
      {
        "id": "D",
        "text": "Is creative to find the system's weaknesses"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Kiểm thử hộp đen (black-box testing) dựa trên đặc tả chức năng và yêu cầu đầu vào/đầu ra, không yêu cầu kiểm thử viên phải đọc hay hiểu mã nguồn bên trong (source code).",
    "imageUrl": "/images/swt-fe/su26-fe/q_09.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 9 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q10",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "To test a function, the programmer has to write a _____, which calls the function and passes it the test data.",
    "options": [
      {
        "id": "A",
        "text": "Stub"
      },
      {
        "id": "B",
        "text": "Driver"
      },
      {
        "id": "C",
        "text": "Proxy"
      },
      {
        "id": "D",
        "text": "None of the others"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Driver là thành phần gọi hàm/mô-đun đang được kiểm thử và truyền dữ liệu đầu vào cho nó. Ngược lại, Stub là thành phần giả được gọi bởi hàm đang kiểm thử.",
    "imageUrl": "/images/swt-fe/su26-fe/q_10.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 10 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q11",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which type of testing involves testing the entire system to verify that all functional, information, structural, and quality requirements have been met, and uses a predetermined set of tests to demonstrate to management that the system meets specifications?",
    "options": [
      {
        "id": "A",
        "text": "Validation Testing"
      },
      {
        "id": "B",
        "text": "Integration Testing"
      },
      {
        "id": "C",
        "text": "User Acceptance Testing"
      },
      {
        "id": "D",
        "text": "System Testing"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D** — Kiểm thử hệ thống (System Testing) kiểm tra toàn bộ hệ thống đã tích hợp hoàn chỉnh nhằm xác minh hệ thống đáp ứng đầy đủ các yêu cầu chức năng, cấu trúc, thông tin và chất lượng theo đặc tả.",
    "imageUrl": "/images/swt-fe/su26-fe/q_11.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 11 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q12",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "When a defect is detected and fixed then the software should be retested to confirm that the original defect has been successfully removed. This is called",
    "options": [
      {
        "id": "A",
        "text": "Regression testing"
      },
      {
        "id": "B",
        "text": "Maintenance testing"
      },
      {
        "id": "C",
        "text": "Confirmation testing"
      },
      {
        "id": "D",
        "text": "None of the above"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Kiểm thử lại để xác nhận rằng lỗi ban đầu đã được sửa thành công gọi là Confirmation testing (kiểm thử xác nhận / re-testing), khác với Regression testing dùng để kiểm tra các tác dụng phụ không mong muốn.",
    "imageUrl": "/images/swt-fe/su26-fe/q_12.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 12 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q13",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Reporting Discrepancies as incidents is a part of which phase?",
    "options": [
      {
        "id": "A",
        "text": "Test Analysis and Design"
      },
      {
        "id": "B",
        "text": "Test Implementation and execution"
      },
      {
        "id": "C",
        "text": "Test Closure Activities"
      },
      {
        "id": "D",
        "text": "Evaluating exit criteria and reporting"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Ghi nhận và báo cáo các sai lệch dưới dạng sự cố (reporting discrepancies as incidents) là hoạt động thuộc giai đoạn Test Implementation and Execution.",
    "imageUrl": "/images/swt-fe/su26-fe/q_13.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 13 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q14",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is the task of a Tester?\ni) Interaction with the Test Tool Vendor to identify best ways to leverage test tool on the project.\nii) Prepare and acquire Test Data.\niii) Implement Tests on all test levels, execute and log the tests.\niv) Create the Test Specifications.",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii is true and iv is false"
      },
      {
        "id": "B",
        "text": "ii, iii, iv is true and i is false"
      },
      {
        "id": "C",
        "text": "i is true and ii, iii, iv are false"
      },
      {
        "id": "D",
        "text": "iii and iv is correct and i and ii are incorrect"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Nhiệm vụ của Tester bao gồm chuẩn bị dữ liệu kiểm thử (ii), triển khai/thực thi/ghi log kiểm thử (iii) và tạo đặc tả kiểm thử (iv). Làm việc với nhà cung cấp công cụ (i) thường là trách nhiệm của Test Leader/Manager.",
    "imageUrl": "/images/swt-fe/su26-fe/q_14.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 14 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q15",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Methodologies adopted while performing Maintenance Testing:",
    "options": [
      {
        "id": "A",
        "text": "Breadth Test and Depth Test"
      },
      {
        "id": "B",
        "text": "Re-testing"
      },
      {
        "id": "C",
        "text": "Confirmation Testing"
      },
      {
        "id": "D",
        "text": "Sanity Testing"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Khi thực hiện kiểm thử bảo trì (Maintenance Testing), phương pháp thường được áp dụng là Breadth Test (kiểm thử theo bề rộng toàn bộ chức năng ở mức tổng quan) và Depth Test (kiểm thử chuyên sâu vào các khu vực bị ảnh hưởng bởi thay đổi).",
    "imageUrl": "/images/swt-fe/su26-fe/q_15.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 15 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q16",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is MOST important in the selection of a test approach?",
    "options": [
      {
        "id": "A",
        "text": "Availability of tools to support the proposed techniques"
      },
      {
        "id": "B",
        "text": "The budget allowed for training in proposed techniques."
      },
      {
        "id": "C",
        "text": "Available skills and experience in the proposed techniques"
      },
      {
        "id": "D",
        "text": "The willingness of the test team to learn new techniques."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Khi lựa chọn chiến lược/cách tiếp cận kiểm thử (test approach), yếu tố quan trọng nhất là kỹ năng và kinh nghiệm hiện có của đội ngũ đối với các kỹ thuật được đề xuất (Available skills and experience).",
    "imageUrl": "/images/swt-fe/su26-fe/q_16.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 16 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q17",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Independent Verification & Validation is:",
    "options": [
      {
        "id": "A",
        "text": "Done by the Developer"
      },
      {
        "id": "B",
        "text": "Done by the Test Engineers"
      },
      {
        "id": "C",
        "text": "Done by Management"
      },
      {
        "id": "D",
        "text": "Done by an Entity Outside the Project's sphere of influence"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\nIndependent Verification & Validation (IV&V) là hoạt động xác minh và thẩm định độc lập, được thực hiện bởi một đơn vị/tổ chức hoàn toàn bên ngoài phạm vi ảnh hưởng của dự án nhằm đảm bảo tính khách quan cao nhất.",
    "imageUrl": "/images/swt-fe/su26-fe/q_17.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 17 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q18",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Drivers are also known as:\ni. Spade\nii. Test harness\niii. Scaffolding",
    "options": [
      {
        "id": "A",
        "text": "i, ii are true and iii is false"
      },
      {
        "id": "B",
        "text": "i, iii are true and ii is false"
      },
      {
        "id": "C",
        "text": "ii, iii are true and i is false"
      },
      {
        "id": "D",
        "text": "All of i, ii and iii are true"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Drivers còn được gọi là Test harness (ii) hoặc Scaffolding (iii) trong kiểm thử đơn vị và tích hợp; Spade (i) không phải tên gọi của Driver.",
    "imageUrl": "/images/swt-fe/su26-fe/q_18.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 18 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q19",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which type of review is a formal assessment of a work product conducted by one or more qualified independent reviewers to detect defects?",
    "options": [
      {
        "id": "A",
        "text": "Inspection"
      },
      {
        "id": "B",
        "text": "Walkthrough"
      },
      {
        "id": "C",
        "text": "Review"
      },
      {
        "id": "D",
        "text": "Non Conformance"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Inspection là hình thức review chính thức nhất, được thực hiện bởi các reviewer độc lập có chuyên môn theo quy trình chặt chẽ nhằm phát hiện lỗi trong sản phẩm công việc.",
    "imageUrl": "/images/swt-fe/su26-fe/q_19.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 19 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q20",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Reviewing the test basis is a part of which phase?",
    "options": [
      {
        "id": "A",
        "text": "Test Analysis and Design"
      },
      {
        "id": "B",
        "text": "Test Implementation and execution"
      },
      {
        "id": "C",
        "text": "Test Closure Activities"
      },
      {
        "id": "D",
        "text": "Evaluating exit criteria and reporting"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Xem xét cơ sở kiểm thử (reviewing the test basis như tài liệu yêu cầu, thiết kế) là hoạt động đầu tiên trong giai đoạn Test Analysis and Design.",
    "imageUrl": "/images/swt-fe/su26-fe/q_20.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 20 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q21",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "Which TWO of the following statements about static analysis are correct?",
    "options": [
      {
        "id": "A",
        "text": "Compiling code is not a form of static analysis"
      },
      {
        "id": "B",
        "text": "Static analysis need not be performed before imperative code is executed"
      },
      {
        "id": "C",
        "text": "Static analysis can find faults that are hard to find with dynamic testing."
      },
      {
        "id": "D",
        "text": "Extensive statistical analysis will not be needed if white-box testing is to be performed"
      }
    ],
    "correctOptionIds": [
      "B",
      "C"
    ],
    "explanation": "**Đáp án đúng: B, C**. Phân tích tĩnh giúp tìm ra các lỗi khó phát hiện bằng kiểm thử động (C) và không bắt buộc phải thực hiện trước khi chạy mã nguồn (B). A sai vì biên dịch là một dạng phân tích tĩnh; D sai vì kiểm thử hộp trắng không thay thế phân tích tĩnh.",
    "imageUrl": "/images/swt-fe/su26-fe/q_21.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 21 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q22",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Inspections can find all of the following defects or issues, EXCEPT:",
    "options": [
      {
        "id": "A",
        "text": "Variables not defined in the code"
      },
      {
        "id": "B",
        "text": "Spelling and grammar faults in the documents"
      },
      {
        "id": "C",
        "text": "Requirements that have been omitted from the design documents"
      },
      {
        "id": "D",
        "text": "How much of the code has been covered"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Inspection là kỹ thuật kiểm thử tĩnh (không chạy chương trình), nên không thể xác định được mức độ bao phủ mã nguồn (code coverage) — vốn chỉ đo được khi thực thi kiểm thử động.",
    "imageUrl": "/images/swt-fe/su26-fe/q_22.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 22 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q23",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Success factors for a review include:\ni. Each review does not have a predefined objective\nii. Defects found are welcomed and expressed objectively\niii. Management supports a good review process\niv. There is an emphasis on learning and process improvement",
    "options": [
      {
        "id": "A",
        "text": "ii, iii, iv are correct and i is incorrect"
      },
      {
        "id": "B",
        "text": "iii, i, iv are correct and ii is incorrect"
      },
      {
        "id": "C",
        "text": "i, iii, iv, ii are incorrect"
      },
      {
        "id": "D",
        "text": "ii is correct"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nMỗi buổi review thành công đều phải có mục tiêu xác định trước, do đó phát biểu (i) sai. Các yếu tố (ii), (iii), (iv) đều là yếu tố thành công của review theo ISTQB.",
    "imageUrl": "/images/swt-fe/su26-fe/q_23.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 23 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q24",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a Key Characteristics of WalkThrough?",
    "options": [
      {
        "id": "A",
        "text": "Scenario, Dry Run, Peer Group"
      },
      {
        "id": "B",
        "text": "Pre Meeting Preparations"
      },
      {
        "id": "C",
        "text": "Formal Follow Up Process"
      },
      {
        "id": "D",
        "text": "Includes Metrics"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Theo ISTQB, đặc trưng chính của Walkthrough là do tác giả chủ trì và thường sử dụng kịch bản (Scenario), chạy thử trên giấy (Dry Run) với nhóm đồng nghiệp (Peer Group). Các đặc điểm B, C, D thuộc về Inspection.",
    "imageUrl": "/images/swt-fe/su26-fe/q_24.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 24 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q25",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is true about Formal Review or Inspection:\ni) Led by Trained Moderator (not the author).\nii) No Pre Meeting Preparations.\niii) Formal Follow up process.\niv) Main Objective is to find defects.",
    "options": [
      {
        "id": "A",
        "text": "ii is true and i, iii, iv are false"
      },
      {
        "id": "B",
        "text": "i, iii, iv are true and ii is false"
      },
      {
        "id": "C",
        "text": "i, iii, iv are false and ii is true"
      },
      {
        "id": "D",
        "text": "iii is true and i, ii, iv are false"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Inspection do Moderator được đào tạo dẫn dắt (i), có quy trình theo dõi chính thức (iii) và mục tiêu chính là tìm lỗi (iv). Ý (ii) sai vì Inspection bắt buộc phải có bước chuẩn bị cá nhân trước buổi họp.",
    "imageUrl": "/images/swt-fe/su26-fe/q_25.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 25 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q26",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following activities is included in the kick-off phase of a formal review?",
    "options": [
      {
        "id": "A",
        "text": "Explaining the objective"
      },
      {
        "id": "B",
        "text": "Fixing defects found typically done by author"
      },
      {
        "id": "C",
        "text": "Follow up"
      },
      {
        "id": "D",
        "text": "Individual Meeting preparations"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Trong giai đoạn Kick-off của formal review, Moderator phân phát tài liệu và giải thích mục tiêu, quy trình cũng như tài liệu cần review cho các thành viên.",
    "imageUrl": "/images/swt-fe/su26-fe/q_26.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 26 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q27",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which expression best matches the following characteristics or review processes:\n1. Led by author\n2. Undocumented\n3. No management participation\n4. Led by a trained moderator or leader\n5. Uses entry exit criteria\n\ns) Inspection\nt) Peer review\nu) Informal review\nv) Walkthrough",
    "options": [
      {
        "id": "A",
        "text": "s = 4, t = 3, u = 2 and 5, v = 1"
      },
      {
        "id": "B",
        "text": "s = 4 and 5, t = 3, u = 2, v = 1"
      },
      {
        "id": "C",
        "text": "s = 1 and 5, t = 3, u = 2, v = 4"
      },
      {
        "id": "D",
        "text": "s = 5, t = 4, u = 3, v = 1 and 2"
      },
      {
        "id": "E",
        "text": "s = 4 and 5, t = 1, u = 2, v = 3"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Inspection (s) do moderator được đào tạo dẫn dắt (4) và dùng tiêu chí đầu vào/ra (5); Peer review (t) không có sự tham gia của quản lý (3); Informal review (u) không lập tài liệu (2); Walkthrough (v) do tác giả dẫn dắt (1).",
    "imageUrl": "/images/swt-fe/su26-fe/q_27.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 27 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q28",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following would you NOT usually find on a software incident report?",
    "options": [
      {
        "id": "A",
        "text": "The name and/or organisational position of the person raising the problem."
      },
      {
        "id": "B",
        "text": "Version of the Software Under Test"
      },
      {
        "id": "C",
        "text": "Suggestions as to how to fix the problem."
      },
      {
        "id": "D",
        "text": "Actual and expected results."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Báo cáo sự cố phần mềm (incident report) ghi nhận thông tin người báo lỗi, phiên bản phần mềm và kết quả thực tế/mong đợi, nhưng thường không bao gồm đề xuất cách sửa mã nguồn.",
    "imageUrl": "/images/swt-fe/su26-fe/q_28.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 28 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q29",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "For which of the following would a static analysis tool be MOST useful?",
    "options": [
      {
        "id": "A",
        "text": "Supporting reviews."
      },
      {
        "id": "B",
        "text": "Validating models of the software."
      },
      {
        "id": "C",
        "text": "Testing code executed in a special test harness."
      },
      {
        "id": "D",
        "text": "Enforcement of coding standards"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Một trong những ứng dụng hữu ích và phổ biến nhất của công cụ phân tích tĩnh (static analysis tool) là tự động kiểm tra và thực thi các quy chuẩn lập trình (coding standards).",
    "imageUrl": "/images/swt-fe/su26-fe/q_29.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 29 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q30",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the KEY difference between preventative and reactive approaches to testing?",
    "options": [
      {
        "id": "A",
        "text": "Preventative tests and reactive tests are designed as early as possible."
      },
      {
        "id": "B",
        "text": "Preventative tests are designed early; reactive tests are designed after the software has been produced"
      },
      {
        "id": "C",
        "text": "Preventative testing is always analytical; reactive testing is always heuristic."
      },
      {
        "id": "D",
        "text": "Preventative tests are designed after the software has been produced; reactive tests are designed early in response to review comments."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Cách tiếp cận phòng ngừa (preventative) thiết kế kiểm thử càng sớm càng tốt để ngăn ngừa lỗi, trong khi cách tiếp cận phản ứng (reactive) thiết kế và thực hiện kiểm thử sau khi phần mềm đã được tạo ra.",
    "imageUrl": "/images/swt-fe/su26-fe/q_30.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 30 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q31",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "_____ technique can be used to achieve input and output coverage.",
    "options": [
      {
        "id": "A",
        "text": "Boundary value analysis"
      },
      {
        "id": "B",
        "text": "Equivalence partitioning"
      },
      {
        "id": "C",
        "text": "Decision table testing"
      },
      {
        "id": "D",
        "text": "State transition testing"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Theo giáo trình ISTQB, kỹ thuật phân vùng tương đương (Equivalence partitioning) có thể áp dụng cho cả dữ liệu đầu vào và đầu ra nhằm đạt độ bao phủ input và output.",
    "imageUrl": "/images/swt-fe/su26-fe/q_31.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 31 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q32",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A program validates a numeric field as follows:\nValues less than 10 are rejected, values between 10 and 21 are accepted, values greater than or equal to 22 are rejected. Which of the following input values cover all of the equivalence partitions?",
    "options": [
      {
        "id": "A",
        "text": "10, 11, 21"
      },
      {
        "id": "B",
        "text": "3, 20, 21"
      },
      {
        "id": "C",
        "text": "3, 10, 22"
      },
      {
        "id": "D",
        "text": "10, 21, 22"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Có 3 vùng tương đương: không hợp lệ (< 10), hợp lệ (10 đến 21) và không hợp lệ (≥ 22). Bộ giá trị `3, 10, 22` bao phủ đầy đủ cả 3 vùng tương đương này.",
    "imageUrl": "/images/swt-fe/su26-fe/q_32.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 32 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q33",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is NOT part of system testing?",
    "options": [
      {
        "id": "A",
        "text": "Business process-based testing"
      },
      {
        "id": "B",
        "text": "Performance, load and stress testing"
      },
      {
        "id": "C",
        "text": "Requirements-based testing"
      },
      {
        "id": "D",
        "text": "Usability testing"
      },
      {
        "id": "E",
        "text": "Top-down integration testing"
      }
    ],
    "correctOptionIds": [
      "E"
    ],
    "explanation": "**Đáp án đúng: E**. Top-down integration testing là chiến lược thuộc kiểm thử tích hợp (Integration testing), không thuộc kiểm thử hệ thống (System testing).",
    "imageUrl": "/images/swt-fe/su26-fe/q_33.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 33 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q34",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A program with high cyclomatic complexity is most likely to be:",
    "options": [
      {
        "id": "A",
        "text": "Large"
      },
      {
        "id": "B",
        "text": "Small"
      },
      {
        "id": "C",
        "text": "Difficult to write"
      },
      {
        "id": "D",
        "text": "Difficult to test"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Độ phức tạp Cyclomatic cao đồng nghĩa với việc chương trình có nhiều nhánh rẽ và đường đi độc lập, khiến việc thiết kế và bao phủ kiểm thử trở nên khó khăn (difficult to test).",
    "imageUrl": "/images/swt-fe/su26-fe/q_34.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 34 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q35",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Use cases can be performed to test:",
    "options": [
      {
        "id": "A",
        "text": "Performance testing"
      },
      {
        "id": "B",
        "text": "Unit testing"
      },
      {
        "id": "C",
        "text": "Business scenarios"
      },
      {
        "id": "D",
        "text": "Static testing"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Use case mô tả tương tác giữa người dùng và hệ thống theo luồng nghiệp vụ, nên rất phù hợp để thiết kế kiểm thử cho các kịch bản nghiệp vụ (business scenarios).",
    "imageUrl": "/images/swt-fe/su26-fe/q_35.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 35 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q36",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following statements regarding static testing is false?",
    "options": [
      {
        "id": "A",
        "text": "Static testing requires the running of tests through the code"
      },
      {
        "id": "B",
        "text": "Static testing includes desk checking"
      },
      {
        "id": "C",
        "text": "Static testing includes techniques such as reviews and inspections"
      },
      {
        "id": "D",
        "text": "Static testing can give measurements such as cyclomatic complexity"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Kiểm thử tĩnh (static testing) kiểm tra tài liệu và mã nguồn mà KHÔNG cần chạy chương trình. Việc chạy kiểm thử trên mã nguồn thuộc kiểm thử động (dynamic testing).",
    "imageUrl": "/images/swt-fe/su26-fe/q_36.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 36 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q37",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Match the following:\n1. Test estimation\n2. Test control\n3. Test monitoring\n\na. Measures of tracking process\nb. Effort required to perform activities\nc. Reallocation of resources",
    "options": [
      {
        "id": "A",
        "text": "1-b, 2-c, 3-a"
      },
      {
        "id": "B",
        "text": "1-b, 2-a, 3-c"
      },
      {
        "id": "C",
        "text": "1-c, 2-a, 3-b"
      },
      {
        "id": "D",
        "text": "1-a, 2-b, 3-c"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Test estimation ước lượng công sức (1-b), Test control thực hiện hành động điều chỉnh như tái phân bổ nguồn lực (2-c), và Test monitoring đo lường tiến độ (3-a).",
    "imageUrl": "/images/swt-fe/su26-fe/q_37.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 37 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q38",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a step-by-step method followed to ensure that standards are met?",
    "options": [
      {
        "id": "A",
        "text": "SDLC"
      },
      {
        "id": "B",
        "text": "Project Plan"
      },
      {
        "id": "C",
        "text": "Policy"
      },
      {
        "id": "D",
        "text": "Procedure"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Procedure (quy trình/thủ tục) là hướng dẫn từng bước cụ thể cần tuân thủ để đảm bảo các tiêu chuẩn và chính sách được đáp ứng.",
    "imageUrl": "/images/swt-fe/su26-fe/q_38.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 38 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q39",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A project that is in the implementation phase is six weeks behind schedule. The delivery date for the product is four months away. The project is not allowed to slip the delivery date or compromise on the quality standards established for this product. Which of the following actions would bring this project back on schedule?",
    "options": [
      {
        "id": "A",
        "text": "Eliminate some of the requirements that have not yet been implemented."
      },
      {
        "id": "B",
        "text": "Add more engineers to the project to make up for lost work."
      },
      {
        "id": "C",
        "text": "Ask the current developers to work overtime until the lost work is recovered."
      },
      {
        "id": "D",
        "text": "Hire more software quality assurance personnel."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Khi ngày bàn giao và tiêu chuẩn chất lượng đều cố định, cách khả thi duy nhất để đưa dự án về đúng tiến độ là cắt giảm phạm vi bằng cách loại bỏ một số yêu cầu chưa triển khai (thêm người sẽ vướng định luật Brooks, làm thêm giờ dễ làm giảm chất lượng).",
    "imageUrl": "/images/swt-fe/su26-fe/q_39.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 39 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q40",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Some tools are geared more for developer use. For the 5 tools listed, which statement BEST details those for developers?\ni) Performance testing tools.\nii) Coverage measurement tools.\niii) Test comparators.\niv) Dynamic analysis tools.\nv) Incident management tools.",
    "options": [
      {
        "id": "A",
        "text": "i, iii, and iv are more for developers"
      },
      {
        "id": "B",
        "text": "ii and iv are more for developers."
      },
      {
        "id": "C",
        "text": "ii, iii, and iv are more for developers."
      },
      {
        "id": "D",
        "text": "ii and iii are more for developers"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Theo phân loại công cụ kiểm thử của ISTQB, công cụ đo độ bao phủ mã (Coverage measurement tools - ii) và công cụ phân tích động (Dynamic analysis tools - iv) chủ yếu hướng đến lập trình viên (developer).",
    "imageUrl": "/images/swt-fe/su26-fe/q_40.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 40 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q41",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "What is the main reason for testing software before releasing it?",
    "options": [
      {
        "id": "A",
        "text": "To show that system will work after release"
      },
      {
        "id": "B",
        "text": "To decide when the software is of sufficient quality to release"
      },
      {
        "id": "C",
        "text": "To find as many bugs as possible before release"
      },
      {
        "id": "D",
        "text": "To give information for a risk based decision about release"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Lý do chính của việc kiểm thử trước khi phát hành là cung cấp thông tin khách quan giúp các bên liên quan đưa ra quyết định phát hành dựa trên rủi ro (risk-based decision).",
    "imageUrl": "/images/swt-fe/su26-fe/q_41.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 41 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q42",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following helps in monitoring the Test Progress:\ni. Percentage of Test Case Execution\nii. Percentage of work done in test environment preparation.\niii. Defect Information e.g. defect density, defects found and fixed\niv. The Size of the testing Team and skills of the engineers",
    "options": [
      {
        "id": "A",
        "text": "iv is correct and i, ii, iii are incorrect"
      },
      {
        "id": "B",
        "text": "i, ii, iii are correct and iv is incorrect"
      },
      {
        "id": "C",
        "text": "i, ii are correct and iii, iv are incorrect"
      },
      {
        "id": "D",
        "text": "i, iv are correct and ii, iii are incorrect"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Các chỉ số theo dõi tiến độ kiểm thử gồm tỷ lệ thực thi ca kiểm thử (i), tiến độ chuẩn bị môi trường kiểm thử (ii) và thông tin về lỗi (iii). Quy mô và kỹ năng đội ngũ (iv) thuộc yếu tố nguồn lực chứ không phải chỉ số tiến độ.",
    "imageUrl": "/images/swt-fe/su26-fe/q_42.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 42 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q43",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Software quality is not relevant to:",
    "options": [
      {
        "id": "A",
        "text": "Correctness"
      },
      {
        "id": "B",
        "text": "Usability"
      },
      {
        "id": "C",
        "text": "Viability"
      },
      {
        "id": "D",
        "text": "Reusability"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Correctness, Usability và Reusability là các đặc tính chất lượng phần mềm, trong khi Viability không phải thuộc tính chất lượng phần mềm.",
    "imageUrl": "/images/swt-fe/su26-fe/q_43.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 43 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q44",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which activities form part of test planning?\ni) Developing test cases.\nii) Defining the overall approach to testing.\niii) Assigning resources.\niv) Building the test environment.\nv) Writing test conditions.",
    "options": [
      {
        "id": "A",
        "text": "i, ii & iv are true, iii & v are false."
      },
      {
        "id": "B",
        "text": "ii & iii are true, i, iv & v are false."
      },
      {
        "id": "C",
        "text": "iv & v are true, i, ii & iii are false."
      },
      {
        "id": "D",
        "text": "i, ii & iii are true, iv & v are false."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Xác định cách tiếp cận kiểm thử tổng thể (ii) và phân bổ nguồn lực (iii) thuộc Test Planning. Thiết kế ca kiểm thử (i) và viết điều kiện kiểm thử (v) thuộc Analysis & Design; dựng môi trường (iv) thuộc Implementation & Execution.",
    "imageUrl": "/images/swt-fe/su26-fe/q_44.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 44 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q45",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What does a programmer need to write in order to test a function, which calls the function under test and passes test data to it?",
    "options": [
      {
        "id": "A",
        "text": "Stub"
      },
      {
        "id": "B",
        "text": "Driver"
      },
      {
        "id": "C",
        "text": "Proxy"
      },
      {
        "id": "D",
        "text": "None of the others"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Driver là đoạn mã được viết để gọi hàm đang kiểm thử và truyền dữ liệu kiểm thử vào hàm đó.",
    "imageUrl": "/images/swt-fe/su26-fe/q_45.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 45 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q46",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "One key reason why developers have difficulty testing their own work is:",
    "options": [
      {
        "id": "A",
        "text": "Lack of technical documentation"
      },
      {
        "id": "B",
        "text": "Lack of test tools on the market for developers"
      },
      {
        "id": "C",
        "text": "Lack of training"
      },
      {
        "id": "D",
        "text": "Lack of Objectivity"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Lập trình viên khó tự kiểm thử hiệu quả mã nguồn của mình vì thiếu tính khách quan (lack of objectivity) và dễ mang các giả định chủ quan giống lúc viết mã.",
    "imageUrl": "/images/swt-fe/su26-fe/q_46.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 46 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q47",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "With which of the following categories is a test comparator tool USUALLY associated?",
    "options": [
      {
        "id": "A",
        "text": "Tool support for performance and monitoring."
      },
      {
        "id": "B",
        "text": "Tool support for static testing."
      },
      {
        "id": "C",
        "text": "Tool support for test execution and logging"
      },
      {
        "id": "D",
        "text": "Tool support for the management of testing and tests."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Theo phân loại công cụ của ISTQB, Test comparator (công cụ so sánh kết quả thực tế và kết quả mong đợi) thuộc nhóm Tool support for test execution and logging.",
    "imageUrl": "/images/swt-fe/su26-fe/q_47.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 47 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q48",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The place to start if you want a (new) test tool is:",
    "options": [
      {
        "id": "A",
        "text": "Attend a tool exhibition"
      },
      {
        "id": "B",
        "text": "Invite a vendor to give a demo"
      },
      {
        "id": "C",
        "text": "Analyze your needs and requirements"
      },
      {
        "id": "D",
        "text": "Find out what your budget would be for the tool"
      },
      {
        "id": "E",
        "text": "Search the internet"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Bước đầu tiên trước khi tìm kiếm hay mua một công cụ kiểm thử mới là phải phân tích rõ nhu cầu và yêu cầu của tổ chức/dự án (Analyze your needs and requirements).",
    "imageUrl": "/images/swt-fe/su26-fe/q_48.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 48 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q49",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Capture and replay facilities are least likely to be used to",
    "options": [
      {
        "id": "A",
        "text": "Performance testing"
      },
      {
        "id": "B",
        "text": "Recovery testing"
      },
      {
        "id": "C",
        "text": "GUI testing"
      },
      {
        "id": "D",
        "text": "User requirements."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Công cụ Capture and Replay ghi lại và phát lại các thao tác người dùng (thường dùng cho GUI, hồi quy, hiệu năng...), do đó ít có khả năng nhất được dùng cho yêu cầu người dùng (User requirements).",
    "imageUrl": "/images/swt-fe/su26-fe/q_49.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 49 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q50",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which tool will be used to test and flag memory leaks and unassigned pointers?",
    "options": [
      {
        "id": "A",
        "text": "Dynamic analysis tool"
      },
      {
        "id": "B",
        "text": "Static Analysis tool."
      },
      {
        "id": "C",
        "text": "Maintenance tool."
      },
      {
        "id": "D",
        "text": "Configuration tool."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Công cụ phân tích động (Dynamic analysis tool) giám sát chương trình khi đang thực thi để phát hiện rò rỉ bộ nhớ (memory leaks) và con trỏ chưa được gán (unassigned pointers).",
    "imageUrl": "/images/swt-fe/su26-fe/q_50.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 50 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q51",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What type of tools are used for Regression Testing?",
    "options": [
      {
        "id": "A",
        "text": "(1) Performance"
      },
      {
        "id": "B",
        "text": "(2) Record/Playback"
      },
      {
        "id": "C",
        "text": "Both of (1) and (2)"
      },
      {
        "id": "D",
        "text": "None of (1) nor (2)"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Công cụ Record/Playback giúp tự động chạy lại các kịch bản kiểm thử đã ghi nhận, là loại công cụ phù hợp cho Regression Testing.",
    "imageUrl": "/images/swt-fe/su26-fe/q_51.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 51 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q52",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following tools would be involved in the automation of regression test?",
    "options": [
      {
        "id": "A",
        "text": "Data tester"
      },
      {
        "id": "B",
        "text": "Boundary tester"
      },
      {
        "id": "C",
        "text": "Capture/Playback"
      },
      {
        "id": "D",
        "text": "Output comparator."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Công cụ Capture/Playback (ghi lại và phát lại) được sử dụng phổ biến để tự động hóa các ca kiểm thử hồi quy (regression testing) cần chạy lặp lại nhiều lần.",
    "imageUrl": "/images/swt-fe/su26-fe/q_52.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 52 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q53",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The Provision and Management of a controlled library containing all the configuration items is called as:",
    "options": [
      {
        "id": "A",
        "text": "Configuration Control"
      },
      {
        "id": "B",
        "text": "Status Accounting"
      },
      {
        "id": "C",
        "text": "Configuration Identification"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Configuration Control (kiểm soát cấu hình) là việc cung cấp và quản lý thư viện có kiểm soát chứa tất cả các hạng mục cấu hình (configuration items) cùng lịch sử thay đổi của chúng.",
    "imageUrl": "/images/swt-fe/su26-fe/q_53.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 53 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q54",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Defects discovered by static analysis tools include:\ni. Variables that are never used.\nii. Security vulnerabilities.\niii. Programming Standard Violations.\niv. Uncalled functions and procedures.",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv is correct"
      },
      {
        "id": "B",
        "text": "iii is correct; i, ii, iv are incorrect."
      },
      {
        "id": "C",
        "text": "i, ii, iii and iv are incorrect"
      },
      {
        "id": "D",
        "text": "iv, ii is correct"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Công cụ phân tích tĩnh (static analysis tools) có thể phát hiện tất cả các lỗi trên: biến không sử dụng (i), lỗ hổng bảo mật (ii), vi phạm chuẩn lập trình (iii) và hàm/thủ tục không bao giờ được gọi (iv).",
    "imageUrl": "/images/swt-fe/su26-fe/q_54.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 54 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q55",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following activities should be performed during the selection and implementation of a testing tool?\ni) Investigate the organisation's test process.\nii) Conduct a proof of concept.\niii) Implement the selected tool on a project behind schedule to save time.\niv) Identify coaching and mentoring requirements for the use of the selected tool.",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii."
      },
      {
        "id": "B",
        "text": "ii, iii, iv."
      },
      {
        "id": "C",
        "text": "i, iii, iv."
      },
      {
        "id": "D",
        "text": "i, ii, iv."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Cần khảo sát quy trình kiểm thử (i), thực hiện proof of concept (ii) và xác định nhu cầu hướng dẫn/đào tạo (iv). Không nên áp dụng công cụ mới cho dự án đang trễ tiến độ (iii sai).",
    "imageUrl": "/images/swt-fe/su26-fe/q_55.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 55 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q56",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "People who don't participate in technical reviews",
    "options": [
      {
        "id": "A",
        "text": "Analysts"
      },
      {
        "id": "B",
        "text": "Management"
      },
      {
        "id": "C",
        "text": "Developers"
      },
      {
        "id": "D",
        "text": "Testers"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Theo ISTQB, Technical review là quá trình rà soát kỹ thuật giữa các đồng nghiệp và chuyên gia kỹ thuật (developers, testers, analysts), và đặc trưng là không có sự tham gia của cấp quản lý (Management).",
    "imageUrl": "/images/swt-fe/su26-fe/q_56.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 56 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q57",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Unreachable code would best be found using:",
    "options": [
      {
        "id": "A",
        "text": "Code reviews"
      },
      {
        "id": "B",
        "text": "Code inspections"
      },
      {
        "id": "C",
        "text": "A coverage tool"
      },
      {
        "id": "D",
        "text": "A test management tool"
      },
      {
        "id": "E",
        "text": "A static analysis tool"
      }
    ],
    "correctOptionIds": [
      "E"
    ],
    "explanation": "**Đáp án đúng: E**. Mã không thể chạm tới (unreachable / dead code) được phát hiện hiệu quả và tự động nhất bằng công cụ phân tích tĩnh (Static analysis tool) thông qua phân tích luồng điều khiển mà không cần chạy chương trình.",
    "imageUrl": "/images/swt-fe/su26-fe/q_57.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 57 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q58",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following statements is not true?",
    "options": [
      {
        "id": "A",
        "text": "Performance testing can be done during unit testing as well as during the testing of whole system"
      },
      {
        "id": "B",
        "text": "The acceptance test does not necessarily include a regression test"
      },
      {
        "id": "C",
        "text": "Verification activities should not involve testers (reviews, inspections etc)"
      },
      {
        "id": "D",
        "text": "Test environments should be as similar to production environments as possible"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Phát biểu C sai vì Tester nên tham gia sớm vào các hoạt động xác minh (verification) như review và inspection để phát hiện lỗi sớm ngay từ giai đoạn yêu cầu và thiết kế.",
    "imageUrl": "/images/swt-fe/su26-fe/q_58.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 58 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q59",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A person who documents all the issues, problems and open points that were identified during a formal review",
    "options": [
      {
        "id": "A",
        "text": "Moderator"
      },
      {
        "id": "B",
        "text": "Scribe"
      },
      {
        "id": "C",
        "text": "Author"
      },
      {
        "id": "D",
        "text": "Manager"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Trong quy trình formal review, Scribe (thư ký / recorder) là người chịu trách nhiệm ghi chép lại toàn bộ các lỗi, vấn đề và điểm mở được phát hiện trong buổi review.",
    "imageUrl": "/images/swt-fe/su26-fe/q_59.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 59 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-05-q60",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "When what is visible to end-users is a deviation from the specific or expected behavior, this is called:",
    "options": [
      {
        "id": "A",
        "text": "An error"
      },
      {
        "id": "B",
        "text": "A fault"
      },
      {
        "id": "C",
        "text": "A failure"
      },
      {
        "id": "D",
        "text": "A defect"
      },
      {
        "id": "E",
        "text": "A mistake"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Theo định nghĩa ISTQB, sự sai lệch so với hành vi mong đợi mà người dùng cuối quan sát thấy khi hệ thống chạy được gọi là Failure (sự cố/thất bại).",
    "imageUrl": "/images/swt-fe/su26-fe/q_60.webp",
    "imageCaption": "Đề 05: Kì Summe — Câu 60 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q01",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Some tools are geared more for developer use. For the 5 tools listed, which statement BEST details those for developers?\ni) Performance testing tools.\nii) Coverage measurement tools.\niii) Test comparators.\niv) Dynamic analysis tools.\nv) Incident management tools.",
    "options": [
      {
        "id": "A",
        "text": "i, iii, and iv are more for developers"
      },
      {
        "id": "B",
        "text": "ii and iv are more for developers."
      },
      {
        "id": "C",
        "text": "ii, iii, and iv are more for developers."
      },
      {
        "id": "D",
        "text": "ii and iii are more for developers"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Theo phân loại công cụ kiểm thử của ISTQB, công cụ đo độ bao phủ mã (Coverage measurement tools - ii) và công cụ phân tích động (Dynamic analysis tools - iv) chủ yếu hướng đến lập trình viên (developer).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_01.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 1 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q02",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Arc testing is known as",
    "options": [
      {
        "id": "A",
        "text": "Branch testing"
      },
      {
        "id": "B",
        "text": "Agile testing"
      },
      {
        "id": "C",
        "text": "Beta testing"
      },
      {
        "id": "D",
        "text": "Ad-hoc testing"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Trong đồ thị luồng điều khiển (control flow graph), mỗi cung (arc/edge) đại diện cho một nhánh rẽ (branch), do đó Arc testing còn được gọi là Branch testing.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_02.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 2 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q03",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "With which of the following categories is a test comparator tool USUALLY associated?",
    "options": [
      {
        "id": "A",
        "text": "Tool support for performance and monitoring."
      },
      {
        "id": "B",
        "text": "Tool support for static testing."
      },
      {
        "id": "C",
        "text": "Tool support for test execution and logging."
      },
      {
        "id": "D",
        "text": "Tool support for the management of testing and tests."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Công cụ so sánh kết quả kiểm thử (Test comparator) thuộc nhóm công cụ hỗ trợ thực thi và ghi log kiểm thử (Tool support for test execution and logging).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_03.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 3 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q04",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "When what is visible to end-users is a deviation from the specific or expected behavior, this is called:",
    "options": [
      {
        "id": "A",
        "text": "An error"
      },
      {
        "id": "B",
        "text": "A fault"
      },
      {
        "id": "C",
        "text": "A failure"
      },
      {
        "id": "D",
        "text": "A defect"
      },
      {
        "id": "E",
        "text": "A mistake"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Khi sự sai lệch so với hành vi mong đợi bộc lộ ra ngoài và người dùng cuối có thể quan sát thấy khi hệ thống chạy, đó được gọi là Failure (thất bại/sự cố).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_04.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 4 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q05",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the expected result for each of the following test cases? (Pic 4_272)\nA. Citibank card member, holding a Silver room\nB. Non Citibank-member, holding a Platinum room\n\nDecision Table:\n- Rule 1: Citibank Card Member = Yes, Type of Room = Silver -> Offer upgrade To Gold Luxury = Yes, Offer upgrade to Silver = N/A\n- Rule 2: Citibank Card Member = Yes, Type of Room = Platinum -> Offer upgrade To Gold Luxury = No, Offer upgrade to Silver = Yes\n- Rule 3: Citibank Card Member = No, Type of Room = Silver -> Offer upgrade To Gold Luxury = No, Offer upgrade to Silver = N/A\n- Rule 4: Citibank Card Member = No, Type of Room = Platinum -> Offer upgrade To Gold Luxury = No, Offer upgrade to Silver = No",
    "options": [
      {
        "id": "A",
        "text": "A - Offer upgrade to Gold, B - Don't offer any upgrade."
      },
      {
        "id": "B",
        "text": "A - Don't offer any upgrade, B - Offer upgrade to Gold."
      },
      {
        "id": "C",
        "text": "A - Don't offer any upgrade, B - Don't offer any upgrade"
      },
      {
        "id": "D",
        "text": "A - Offer upgrade to Silver, B - Offer upgrade to Silver."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Tra bảng quyết định: Test case A (Citibank = Yes, Silver) khớp Rule 1 -> Offer upgrade to Gold Luxury = Yes. Test case B (Citibank = No, Platinum) khớp Rule 4 -> cả hai hành động nâng cấp đều là No (không đề xuất nâng cấp).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_05.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 5 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q06",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The inputs for developing a test plan are taken from",
    "options": [
      {
        "id": "A",
        "text": "Project plan"
      },
      {
        "id": "B",
        "text": "Business plan"
      },
      {
        "id": "C",
        "text": "Support plan"
      },
      {
        "id": "D",
        "text": "None of the others"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Đầu vào chính để xây dựng kế hoạch kiểm thử (Test Plan) được lấy từ kế hoạch dự án (Project Plan) nhằm đồng bộ phạm vi, lịch trình, nguồn lực và các mốc bàn giao.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_06.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 6 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q07",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Exhaustive Testing is",
    "options": [
      {
        "id": "A",
        "text": "Is impractical but possible"
      },
      {
        "id": "B",
        "text": "Is practically possible"
      },
      {
        "id": "C",
        "text": "Is impractical and impossible"
      },
      {
        "id": "D",
        "text": "Is always possible"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Theo nguyên lý kiểm thử thứ 2 của ISTQB, kiểm thử vét cạn (Exhaustive testing - thử mọi tổ hợp đầu vào và tiền điều kiện) là bất khả thi và không thực tế ngoại trừ các trường hợp cực kỳ đơn giản.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_07.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 7 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q08",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The place to start if you want a (new) test tool is:",
    "options": [
      {
        "id": "A",
        "text": "Attend a tool exhibition"
      },
      {
        "id": "B",
        "text": "Invite a vendor to give a demo"
      },
      {
        "id": "C",
        "text": "Analyze your needs and requirements"
      },
      {
        "id": "D",
        "text": "Find out what your budget would be for the tool"
      },
      {
        "id": "E",
        "text": "Search the internet"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Bước đầu tiên trước khi tìm kiếm hay mua một công cụ kiểm thử mới là phải phân tích rõ nhu cầu và yêu cầu của tổ chức/dự án (Analyze your needs and requirements).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_08.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 8 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q09",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Quality Assurance is the process by which product quality is compared with the application standards and the action taken when nonconformance is detected.",
    "options": [
      {
        "id": "A",
        "text": "True"
      },
      {
        "id": "B",
        "text": "False"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Phát biểu trên mô tả Quality Control (kiểm soát chất lượng - tập trung vào sản phẩm), không phải Quality Assurance (đảm bảo chất lượng - tập trung vào tuân thủ quy trình để ngăn ngừa lỗi).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_09.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 9 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q10",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The Phases of formal review process is mentioned below arrange them in the correct order:\ni) Planning\nii) Review Meeting\niii) Rework\niv) Individual Preparations\nv) Kick Off\nvi) Follow Up",
    "options": [
      {
        "id": "A",
        "text": "i,ii,iii,iv,v,vi"
      },
      {
        "id": "B",
        "text": "vi,i,ii,iii,iv,v"
      },
      {
        "id": "C",
        "text": "i,v,iv,ii,iii,vi"
      },
      {
        "id": "D",
        "text": "i,ii,iii,v,iv,vi"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Trình tự đúng của 6 bước formal review theo ISTQB là: Planning (i) -> Kick Off (v) -> Individual Preparations (iv) -> Review Meeting (ii) -> Rework (iii) -> Follow Up (vi).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_10.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 10 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q11",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "An incident logging system",
    "options": [
      {
        "id": "A",
        "text": "Only records defects"
      },
      {
        "id": "B",
        "text": "Is of limited value"
      },
      {
        "id": "C",
        "text": "Is a valuable source of project information during testing if it contains all incidents"
      },
      {
        "id": "D",
        "text": "Should be used only by the test team."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Hệ thống ghi nhận sự cố (Incident logging system) là nguồn thông tin dự án rất giá trị trong quá trình kiểm thử nếu nó lưu trữ đầy đủ mọi sự cố (không chỉ lỗi mà cả yêu cầu thay đổi, sự cố môi trường...).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_11.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 11 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q12",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Given the following code, which is true:\nIF A > B THEN\n    C = A - B\nELSE\n    C = A + B\nENDIF\nRead D\nIF C = D Then\n    Print \"Error\"\nENDIF",
    "options": [
      {
        "id": "A",
        "text": "1 test for statement coverage, 3 for branch coverage"
      },
      {
        "id": "B",
        "text": "2 tests for statement coverage, 2 for branch coverage"
      },
      {
        "id": "C",
        "text": "2 tests for statement coverage, 3 for branch coverage"
      },
      {
        "id": "D",
        "text": "3 tests for statement coverage, 3 for branch coverage"
      },
      {
        "id": "E",
        "text": "3 tests for statement coverage, 2 for branch coverage"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Có 2 cấu trúc `IF` độc lập nối tiếp nhau: Test 1 chọn `A > B` và `C = D` (đi nhánh True của cả 2 IF, thực thi `C = A - B` và `Print \"Error\"`), Test 2 chọn `A <= B` và `C != D` (đi nhánh False của cả 2 IF, thực thi `C = A + B`). Chỉ cần 2 test case là đạt 100% cả Statement Coverage và Branch Coverage.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_12.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 12 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q13",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A common test technique during component test is",
    "options": [
      {
        "id": "A",
        "text": "Statement and branch testing"
      },
      {
        "id": "B",
        "text": "Usability testing"
      },
      {
        "id": "C",
        "text": "Security testing"
      },
      {
        "id": "D",
        "text": "Performance testing"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Ở mức kiểm thử thành phần (Component/Unit testing), các kỹ thuật hộp trắng như kiểm thử câu lệnh và kiểm thử nhánh (Statement and branch testing) là phổ biến nhất.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_13.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 13 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q14",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A standard for software testing terminology is:",
    "options": [
      {
        "id": "A",
        "text": "IEEE 802.11"
      },
      {
        "id": "B",
        "text": "ISO 9001"
      },
      {
        "id": "C",
        "text": "BS 7925-1"
      },
      {
        "id": "D",
        "text": "BS 7925-2"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. BS 7925-1 là chuẩn về từ vựng/thuật ngữ kiểm thử phần mềm (Vocabulary of terms in software testing), còn BS 7925-2 là chuẩn về kiểm thử thành phần phần mềm.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_14.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 14 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q15",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "White Box Techniques are also called as:",
    "options": [
      {
        "id": "A",
        "text": "Structural Testing"
      },
      {
        "id": "B",
        "text": "Design Based Testing"
      },
      {
        "id": "C",
        "text": "Error Guessing Technique"
      },
      {
        "id": "D",
        "text": "Experience Based Technique"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Kỹ thuật kiểm thử hộp trắng (White Box Techniques) còn được gọi là kiểm thử cấu trúc (Structural Testing / Structure-based testing) vì thiết kế test dựa trên cấu trúc bên trong của mã nguồn.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_15.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 15 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q16",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What can static analysis NOT find?",
    "options": [
      {
        "id": "A",
        "text": "The use of a variable before it has been defined"
      },
      {
        "id": "B",
        "text": "Unreachable (\"dead\") code"
      },
      {
        "id": "C",
        "text": "Memory leaks"
      },
      {
        "id": "D",
        "text": "Array bound violations"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Rò rỉ bộ nhớ (Memory leaks) là lỗi cấp phát/giải phóng bộ nhớ trong quá trình thực thi chương trình, nên được phát hiện bằng công cụ phân tích động (Dynamic analysis), không phải phân tích tĩnh (Static analysis).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_16.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 16 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q17",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following benefits are MOST likely to be achieved by using test tools?\ni) Easy to access information about tests and testing.\nii) Reduced maintenance of testware.\niii) Easy and cheap to implement.\niv) Greater consistency of tests.",
    "options": [
      {
        "id": "A",
        "text": "ii and iv"
      },
      {
        "id": "B",
        "text": "ii and iii"
      },
      {
        "id": "C",
        "text": "i and iv"
      },
      {
        "id": "D",
        "text": "i and iii"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Sử dụng công cụ kiểm thử giúp dễ dàng truy cập thông tin về kiểm thử (i) và nâng cao tính nhất quán, khả năng lặp lại của kiểm thử (iv).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_17.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 17 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q18",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is NOT a characteristic of User Acceptance Testing?",
    "options": [
      {
        "id": "A",
        "text": "Use of automated test execution tools"
      },
      {
        "id": "B",
        "text": "Testing performed by users."
      },
      {
        "id": "C",
        "text": "Testing against acceptance test criteria"
      },
      {
        "id": "D",
        "text": "Integration of system with user documentation"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Kiểm thử chấp nhận người dùng (UAT) do người dùng cuối thực hiện dựa trên tiêu chí chấp nhận và tài liệu người dùng để đánh giá sự phù hợp nghiệp vụ, nên việc sử dụng công cụ thực thi tự động không phải là đặc trưng của UAT.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_18.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 18 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q19",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "_____ is a very early build intended for limited distribution to a few key customers and to marketing for demonstration purposes.",
    "options": [
      {
        "id": "A",
        "text": "Alpha release"
      },
      {
        "id": "B",
        "text": "Beta release"
      },
      {
        "id": "C",
        "text": "Test release document"
      },
      {
        "id": "D",
        "text": "Build"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Alpha release là bản dựng rất sớm được phân phối giới hạn cho một số ít khách hàng chủ chốt hoặc bộ phận marketing để trình diễn và thu thập phản hồi ban đầu.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_19.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 19 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q20",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is failure?",
    "options": [
      {
        "id": "A",
        "text": "Deviation from expected result to actual result"
      },
      {
        "id": "B",
        "text": "Defect in the software."
      },
      {
        "id": "C",
        "text": "Error in the program code."
      },
      {
        "id": "D",
        "text": "Fault in the system"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Failure (sự cố/thất bại) là sự sai lệch giữa kết quả thực tế (actual result) so với kết quả mong đợi (expected result) khi hệ thống hoạt động.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_20.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 20 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q21",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What does integration testing in the large involve?",
    "options": [
      {
        "id": "A",
        "text": "Testing the system when combined with other systems."
      },
      {
        "id": "B",
        "text": "Testing a sub-system using stubs and drivers"
      },
      {
        "id": "C",
        "text": "Testing a system with a large number of users"
      },
      {
        "id": "D",
        "text": "Combining components and testing them in one go."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Kiểm thử tích hợp ở quy mô lớn (Integration testing in the large / System integration testing) kiểm tra hệ thống khi kết hợp và giao tiếp với các hệ thống, dịch vụ bên ngoài khác.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_21.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 21 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q22",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which is not the software characteristics",
    "options": [
      {
        "id": "A",
        "text": "Reliability"
      },
      {
        "id": "B",
        "text": "Usability"
      },
      {
        "id": "C",
        "text": "Development cost"
      },
      {
        "id": "D",
        "text": "Maintainability"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Theo chuẩn ISO 9126 / ISO 25010, các đặc tính chất lượng phần mềm gồm Reliability, Usability, Maintainability, Functionality, Efficiency, Portability... Chi phí phát triển (Development cost) là yếu tố dự án, không phải đặc tính phần mềm.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_22.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 22 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q23",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "System testing should investigate",
    "options": [
      {
        "id": "A",
        "text": "Non-functional requirements only not Functional requirements"
      },
      {
        "id": "B",
        "text": "Functional requirements only not non-functional requirements"
      },
      {
        "id": "C",
        "text": "Non-functional requirements and Functional requirements"
      },
      {
        "id": "D",
        "text": "Non-functional requirements or Functional requirements"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Kiểm thử hệ thống (System testing) kiểm tra toàn bộ hệ thống tích hợp trên cả hai khía cạnh: yêu cầu chức năng (Functional requirements) và yêu cầu phi chức năng (Non-functional requirements).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_23.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 23 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q24",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The principal attributes of tools and automation are (choose one answer)",
    "options": [
      {
        "id": "A",
        "text": "(1) Speed & efficiency"
      },
      {
        "id": "B",
        "text": "(2) Accuracy & precision"
      },
      {
        "id": "C",
        "text": "Both of (1) and (2)"
      },
      {
        "id": "D",
        "text": "None of (1) nor (2)"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Hai thuộc tính cốt lõi của công cụ và tự động hóa kiểm thử là tốc độ & hiệu suất (Speed & efficiency) cùng độ chính xác & độ chuẩn xác (Accuracy & precision).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_24.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 24 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q25",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of these can be successfully tested using Loop Testing methodology (choose one answer)?",
    "options": [
      {
        "id": "A",
        "text": "Simple Loops"
      },
      {
        "id": "B",
        "text": "Nested Loops"
      },
      {
        "id": "C",
        "text": "Concatenated Loops"
      },
      {
        "id": "D",
        "text": "All of the others"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Phương pháp kiểm thử vòng lặp (Loop Testing) áp dụng được cho tất cả các loại vòng lặp cấu trúc: vòng lặp đơn (Simple Loops), vòng lặp lồng nhau (Nested Loops) và vòng lặp nối tiếp (Concatenated Loops).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_25.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 25 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q26",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following would you NOT usually find on a software incident report?",
    "options": [
      {
        "id": "A",
        "text": "The name and/or organisational position of the person raising the problem."
      },
      {
        "id": "B",
        "text": "Version of the Software Under Test"
      },
      {
        "id": "C",
        "text": "Suggestions as to how to fix the problem."
      },
      {
        "id": "D",
        "text": "Actual and expected results"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Báo cáo sự cố phần mềm (Software incident report) mô tả khách quan vấn đề, phiên bản phần mềm, người báo cáo và kết quả thực tế/mong đợi; không thường bao gồm đề xuất cách sửa lỗi (vốn thuộc về đội phát triển).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_26.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 26 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q27",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following has highest level of independence in which test cases are:",
    "options": [
      {
        "id": "A",
        "text": "Designed by persons who write the software under test"
      },
      {
        "id": "B",
        "text": "Designed by a person from a different section"
      },
      {
        "id": "C",
        "text": "Designed by a person from a different organization"
      },
      {
        "id": "D",
        "text": "Designed by another person"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Theo thang mức độ độc lập trong kiểm thử của ISTQB, mức độ độc lập cao nhất là khi ca kiểm thử được thiết kế bởi một tổ chức bên ngoài hoàn toàn độc lập (outsource / different organization).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_27.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 27 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q28",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A project that is in the implementation phase is six weeks behind schedule. The delivery date for the product is four months away. The project is not allowed to slip the delivery date or compromise on the quality standards established for his product. Which of the following actions would bring this project back on schedule?",
    "options": [
      {
        "id": "A",
        "text": "Eliminate some of the requirements that have not yet been implemented."
      },
      {
        "id": "B",
        "text": "Add more engineers to the project to make up for lost work."
      },
      {
        "id": "C",
        "text": "Ask the current developers to work overtime until the lost work is recovered."
      },
      {
        "id": "D",
        "text": "Hire more software quality assurance personnel."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Khi thời hạn bàn giao và tiêu chuẩn chất lượng đều cố định không thể đánh đổi, cách duy nhất khả thi để đưa dự án về đúng tiến độ là cắt giảm phạm vi (loại bỏ/dời lại một số yêu cầu chưa triển khai). Thêm người vào dự án đang trễ (Định luật Brooks) hay làm thêm giờ kéo dài đều phản tác dụng hoặc giảm chất lượng.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_28.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 28 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q29",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the difference between testing software developed by contractor outside your country, versus testing software developed by a contractor within your country?",
    "options": [
      {
        "id": "A",
        "text": "Does not meet people needs"
      },
      {
        "id": "B",
        "text": "Cultural difference"
      },
      {
        "id": "C",
        "text": "Loss of control over reallocation of resources"
      },
      {
        "id": "D",
        "text": "Relinquishments of control"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Điểm khác biệt đặc trưng nhất khi kiểm thử phần mềm phát triển bởi nhà thầu nước ngoài (offshore) so với nhà thầu trong nước là sự khác biệt về văn hóa (Cultural difference), bên cạnh ngôn ngữ và múi giờ.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_29.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 29 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q30",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the main purpose of Informal review",
    "options": [
      {
        "id": "A",
        "text": "Inexpensive way to get some benefit"
      },
      {
        "id": "B",
        "text": "Find defects"
      },
      {
        "id": "C",
        "text": "Learning, gaining understanding, effect finding"
      },
      {
        "id": "D",
        "text": "Discuss, make decisions, solve technical problems"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Theo ISTQB, mục đích chính của Informal review (như buddy check, pair review) là một cách ít tốn kém để thu được một số lợi ích nhanh chóng (Inexpensive way to get some benefit).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_30.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 30 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q31",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is true about White and Black Box Testing Technique:",
    "options": [
      {
        "id": "A",
        "text": "Equivalence partitioning, Decision Table and Control flow are White box Testing Techniques"
      },
      {
        "id": "B",
        "text": "Equivalence partitioning, Boundary Value Analysis, Data Flow are Black Box Testing Techniques."
      },
      {
        "id": "C",
        "text": "Equivalence partitioning, State Transition, Use Case Testing are Black Box Testing Techniques."
      },
      {
        "id": "D",
        "text": "Equivalence Partitioning, State Transition, Use Case Testing and Decision Table are White Box Testing Techniques."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Phân vùng tương đương (Equivalence partitioning), chuyển đổi trạng thái (State Transition) và kiểm thử theo ca sử dụng (Use Case Testing) đều là các kỹ thuật kiểm thử hộp đen (Black Box / specification-based). Control flow và Data flow là hộp trắng.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_31.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 31 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q32",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Test managers should not:",
    "options": [
      {
        "id": "A",
        "text": "Report on deviations from the project plan"
      },
      {
        "id": "B",
        "text": "Sign the system off for release"
      },
      {
        "id": "C",
        "text": "Re-allocate resource to meet original plans"
      },
      {
        "id": "D",
        "text": "Rise incidents on faults that they have found"
      },
      {
        "id": "E",
        "text": "Provide information for risk analysis and quality improvement"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Test manager cung cấp thông tin rủi ro, báo cáo tiến độ và quản lý nguồn lực kiểm thử, nhưng không phải người ký duyệt phát hành hệ thống (Sign the system off for release) — quyết định phát hành thuộc về quản lý dự án hoặc chủ sở hữu sản phẩm/nghiệp vụ.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_32.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 32 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q33",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "We use the output of the requirement analysis, the requirement specification as the input for writing:",
    "options": [
      {
        "id": "A",
        "text": "User Acceptance Test Cases"
      },
      {
        "id": "B",
        "text": "Integration Level Test Cases"
      },
      {
        "id": "C",
        "text": "Unit Level Test Cases"
      },
      {
        "id": "D",
        "text": "Program specifications"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Theo mô hình V (V-model), đầu ra của giai đoạn phân tích yêu cầu (Requirement specification) là cơ sở trực tiếp để thiết kế các ca kiểm thử chấp nhận người dùng (User Acceptance Test Cases).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_33.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 33 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q34",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A typical commercial test execution tool would be able to perform all of the following, EXCEPT:",
    "options": [
      {
        "id": "A",
        "text": "Generating expected outputs"
      },
      {
        "id": "B",
        "text": "Replaying inputs according to a programmed script"
      },
      {
        "id": "C",
        "text": "Comparison of expected outcomes with actual outcomes"
      },
      {
        "id": "D",
        "text": "Recording test inputs"
      },
      {
        "id": "E",
        "text": "Reading test values from a data file"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Công cụ thực thi kiểm thử thương mại có thể ghi lại đầu vào, phát lại script, đọc dữ liệu từ file và so sánh kết quả, nhưng không thể tự suy ra hay sinh ra kết quả mong đợi (Generating expected outputs) — điều này cần con người (test oracle) xác định.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_34.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 34 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q35",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is MOST important in the selection of a test approach?",
    "options": [
      {
        "id": "A",
        "text": "Availability of tools to support the proposed techniques"
      },
      {
        "id": "B",
        "text": "The budget allowed for training in proposed techniques."
      },
      {
        "id": "C",
        "text": "Available skills and experience in the proposed techniques"
      },
      {
        "id": "D",
        "text": "The willingness of the test team to learn new techniques."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Khi lựa chọn chiến lược/cách tiếp cận kiểm thử (test approach), yếu tố quan trọng nhất là kỹ năng và kinh nghiệm hiện có của đội ngũ đối với các kỹ thuật được đề xuất (Available skills and experience).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_35.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 35 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q36",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is not a static testing technique?",
    "options": [
      {
        "id": "A",
        "text": "Error guessing"
      },
      {
        "id": "B",
        "text": "Walkthrough"
      },
      {
        "id": "C",
        "text": "Data flow analysis"
      },
      {
        "id": "D",
        "text": "Inspections"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Error guessing (đoán lỗi) là kỹ thuật kiểm thử động dựa trên kinh nghiệm (experience-based). Walkthrough, Inspections và Data flow analysis đều là kỹ thuật kiểm thử tĩnh.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_36.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 36 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q37",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A Project risk includes which of the following",
    "options": [
      {
        "id": "A",
        "text": "Organizational Factors"
      },
      {
        "id": "B",
        "text": "Poor Software characteristics"
      },
      {
        "id": "C",
        "text": "Error Prone software delivered."
      },
      {
        "id": "D",
        "text": "Software that does not perform its intended functions"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Các yếu tố tổ chức (Organizational Factors như thiếu kỹ năng, thiếu nhân sự, vấn đề truyền thông) là rủi ro dự án (Project risk). Các đáp án B, C, D đều là rủi ro sản phẩm (Product risk).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_37.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 37 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q38",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "When a defect is detected and fixed then the software should be retested to confirm that the original defect has been successfully removed. This is called",
    "options": [
      {
        "id": "A",
        "text": "Regression testing"
      },
      {
        "id": "B",
        "text": "Maintenance testing"
      },
      {
        "id": "C",
        "text": "Confirmation testing"
      },
      {
        "id": "D",
        "text": "None of the above"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Kiểm thử lại để xác nhận rằng lỗi ban đầu đã được sửa thành công gọi là Confirmation testing (kiểm thử xác nhận / re-testing), khác với Regression testing dùng để kiểm tra các tác dụng phụ không mong muốn.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_38.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 38 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q39",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The difference between re-testing and regression testing is:",
    "options": [
      {
        "id": "A",
        "text": "Re-testing is running a test again; regression testing looks for unexpected side effects"
      },
      {
        "id": "B",
        "text": "Re-testing looks for unexpected side effects; regression testing is repeating those tests"
      },
      {
        "id": "C",
        "text": "Re-testing is done after faults are fixed; regression testing is done earlier"
      },
      {
        "id": "D",
        "text": "Re-testing uses different environments, regression testing uses the same environment"
      },
      {
        "id": "E",
        "text": "Re-testing is done by developers, regression testing is done by independent testers"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Re-testing (confirmation testing) là chạy lại ca kiểm thử đã thất bại trước đó để xác nhận lỗi đã được sửa; Regression testing là kiểm thử để phát hiện các tác dụng phụ không mong muốn ở những phần không thay đổi.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_39.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 39 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q40",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which is not the project risks",
    "options": [
      {
        "id": "A",
        "text": "Supplier issues"
      },
      {
        "id": "B",
        "text": "Organization factors"
      },
      {
        "id": "C",
        "text": "Technical issues"
      },
      {
        "id": "D",
        "text": "Error-prone software delivered"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Phần mềm bàn giao chứa nhiều lỗi (Error-prone software delivered) là rủi ro sản phẩm (Product risk), không phải rủi ro dự án (Project risk như vấn đề nhà cung cấp, tổ chức hay kỹ thuật).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_40.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 40 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q41",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Which of the following BEST describes the difference between an inspection and a walkthrough?",
    "options": [
      {
        "id": "A",
        "text": "Both inspections and walkthroughs are led by the author"
      },
      {
        "id": "B",
        "text": "An inspection is led by a moderator and a walkthrough is led by the author."
      },
      {
        "id": "C",
        "text": "Both inspections and walkthroughs are led by a trained moderator."
      },
      {
        "id": "D",
        "text": "A walkthrough is led by the author. The author is not present during inspections."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Inspection do một người điều phối (moderator) được đào tạo dẫn dắt, còn Walkthrough do chính tác giả (author) dẫn dắt buổi rà soát.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_41.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 41 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q42",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "For which of the following types of testing would a vendor contractor typically need to write the initial scripts?",
    "options": [
      {
        "id": "A",
        "text": "Measuring response time"
      },
      {
        "id": "B",
        "text": "Measuring transaction rates"
      },
      {
        "id": "C",
        "text": "Recovery testing"
      },
      {
        "id": "D",
        "text": "Simulating many users"
      },
      {
        "id": "E",
        "text": "Generating many transactions"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Khi kiểm thử tải/hiệu năng nhằm mô phỏng đồng thời rất nhiều người dùng (Simulating many users), việc cấu hình và viết các kịch bản tải ban đầu thường phức tạp nên hay cần chuyên gia/nhà thầu của bên cung cấp công cụ hỗ trợ viết script ban đầu.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_42.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 42 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q43",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "When should configuration management procedures be implemented?",
    "options": [
      {
        "id": "A",
        "text": "During test planning"
      },
      {
        "id": "B",
        "text": "During test analysis."
      },
      {
        "id": "C",
        "text": "During test execution."
      },
      {
        "id": "D",
        "text": "When evaluating exit criteria"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Theo ISTQB, các thủ tục quản lý cấu hình (Configuration management procedures) cần được xác định và triển khai ngay trong giai đoạn lập kế hoạch kiểm thử (Test planning) để kiểm soát phiên bản của mọi sản phẩm kiểm thử.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_43.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 43 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q44",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "When a new testing tool is purchased, it should be used first by:",
    "options": [
      {
        "id": "A",
        "text": "A small team to establish the best way to use the tool"
      },
      {
        "id": "B",
        "text": "Everyone who may eventually have some use for the tool"
      },
      {
        "id": "C",
        "text": "The independent testing team"
      },
      {
        "id": "D",
        "text": "The vendor contractor to write the initial scripts"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Khi mua một công cụ kiểm thử mới, nên triển khai thí điểm (pilot project) với một nhóm nhỏ trước để tìm ra cách sử dụng tối ưu, thiết lập chuẩn mực và đánh giá hiệu quả trước khi nhân rộng toàn tổ chức.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_44.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 44 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q45",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The person who leads the review of the document(s), planning the review, running the meeting and follow-up after the meeting:",
    "options": [
      {
        "id": "A",
        "text": "Reviewer"
      },
      {
        "id": "B",
        "text": "Author"
      },
      {
        "id": "C",
        "text": "Moderator"
      },
      {
        "id": "D",
        "text": "Auditor"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nTrong quy trình formal review theo chuẩn ISTQB, Moderator (người điều phối) chịu trách nhiệm dẫn dắt buổi rà soát, lập kế hoạch review, điều hành cuộc họp và theo dõi các hành động sau cuộc họp.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_45.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 45 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q46",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the purpose of test completion criteria in a test plan?",
    "options": [
      {
        "id": "A",
        "text": "To know when a specific test has finished its execution"
      },
      {
        "id": "B",
        "text": "To ensure that the test case specification is complete"
      },
      {
        "id": "C",
        "text": "To set the criteria used in generating test inputs"
      },
      {
        "id": "D",
        "text": "To know when test planning is complete"
      },
      {
        "id": "E",
        "text": "To plan when to stop testing"
      }
    ],
    "correctOptionIds": [
      "E"
    ],
    "explanation": "**Đáp án đúng: E**\nTest completion criteria (hay exit criteria) trong kế hoạch kiểm thử được xác định nhằm lập kế hoạch và quyết định khi nào có thể dừng hoạt động kiểm thử.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_46.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 46 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q47",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Function/Test matrix is a type of:",
    "options": [
      {
        "id": "A",
        "text": "Interim Test report"
      },
      {
        "id": "B",
        "text": "Final test report"
      },
      {
        "id": "C",
        "text": "Project status report"
      },
      {
        "id": "D",
        "text": "Management report"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nFunction/Test matrix (ma trận chức năng – kiểm thử) là một dạng báo cáo kiểm thử tạm thời (Interim Test report) dùng để theo dõi tiến độ kiểm thử theo từng chức năng trong quá trình thực hiện.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_47.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 47 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q48",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Find the mismatch",
    "options": [
      {
        "id": "A",
        "text": "Test data preparation tools - Manipulate Databases"
      },
      {
        "id": "B",
        "text": "Test design tools - Generate test inputs"
      },
      {
        "id": "C",
        "text": "Requirement management tools - Enables individual tests to be traceable"
      },
      {
        "id": "D",
        "text": "Configuration management tools - Check for consistency"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Công cụ quản lý cấu hình (Configuration management tools) dùng để quản lý phiên bản, thay đổi và baseline của sản phẩm phần mềm/tài liệu kiểm thử, không dùng để kiểm tra tính nhất quán của mã nguồn (đó là chức năng của công cụ phân tích tĩnh).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_48.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 48 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q49",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Regression testing should be performed:\nv) Every week\nw) After the software has changed\nx) As often as possible\ny) When the environment has changed\nz) When the project manager says",
    "options": [
      {
        "id": "A",
        "text": "v & w are true, x - z are false"
      },
      {
        "id": "B",
        "text": "w, x & y are true, v & z are false"
      },
      {
        "id": "C",
        "text": "w & y are true, v, x & z are false"
      },
      {
        "id": "D",
        "text": "w is true, v, x, y and z are false"
      },
      {
        "id": "E",
        "text": "All of them are true"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nTheo ISTQB, kiểm thử hồi quy (regression testing) cần được thực hiện khi phần mềm có sự thay đổi (w) hoặc khi môi trường thực thi thay đổi (y), nhằm đảm bảo không có lỗi mới phát sinh ở các phần không thay đổi.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_49.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 49 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q50",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The provision and management of a controlled library containing all the configuration items is called as:",
    "options": [
      {
        "id": "A",
        "text": "Configuration Control"
      },
      {
        "id": "B",
        "text": "Status Accounting"
      },
      {
        "id": "C",
        "text": "Configuration Identification"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nConfiguration Control (kiểm soát cấu hình) là hoạt động cung cấp và quản lý thư viện có kiểm soát chứa tất cả các mục cấu hình (configuration items) cũng như kiểm soát mọi thay đổi đối với chúng.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_50.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 50 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q51",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "In a review meeting a moderator is a person who:",
    "options": [
      {
        "id": "A",
        "text": "Takes minutes of the meeting"
      },
      {
        "id": "B",
        "text": "Mediates people"
      },
      {
        "id": "C",
        "text": "Takes telephone calls"
      },
      {
        "id": "D",
        "text": "Writes the documents to be reviewed"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nTrong cuộc họp review, Moderator (người điều phối) đóng vai trò trung gian điều hòa giữa các thành viên tham gia để buổi rà soát diễn ra khách quan, đúng trọng tâm. Ghi biên bản là việc của Scribe, còn viết tài liệu là việc của Author.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_51.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 51 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q52",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following statements is true of static analysis?",
    "options": [
      {
        "id": "A",
        "text": "Compiling code is not a form of static analysis"
      },
      {
        "id": "B",
        "text": "Static analysis need not be performed before imperative code is executed"
      },
      {
        "id": "C",
        "text": "Static analysis can find faults that are hard to find with dynamic testing"
      },
      {
        "id": "D",
        "text": "Extensive static analysis will not be needed if white-box testing is to be performed."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nPhân tích tĩnh (static analysis) kiểm tra mã nguồn mà không thực thi chương trình, giúp phát hiện sớm các lỗi như mã chết, biến chưa khởi tạo, vi phạm chuẩn lập trình — những lỗi thường khó phát hiện bằng kiểm thử động.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_52.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 52 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q53",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The goal of a software tester is to find bugs, find them as early as possible and make sure they get fixed",
    "options": [
      {
        "id": "A",
        "text": "True"
      },
      {
        "id": "B",
        "text": "False"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Đúng. Mục tiêu của kiểm thử viên phần mềm là tìm ra lỗi, tìm chúng càng sớm càng tốt trong vòng đời phát triển và theo dõi đảm bảo chúng được khắc phục.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_53.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 53 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q54",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "One of the fields on a form contains a text box which accepts numeric values in the range of 18 to 25. Identify the invalid equivalence class:",
    "options": [
      {
        "id": "A",
        "text": "17"
      },
      {
        "id": "B",
        "text": "19"
      },
      {
        "id": "C",
        "text": "24"
      },
      {
        "id": "D",
        "text": "21"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nMiền giá trị hợp lệ là từ 18 đến 25 (19, 21, 24 đều nằm trong phân vùng hợp lệ). Giá trị 17 nhỏ hơn 18 nên thuộc lớp tương đương không hợp lệ (invalid equivalence class).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_54.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 54 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q55",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Pick the best definition of quality",
    "options": [
      {
        "id": "A",
        "text": "Quality is job one"
      },
      {
        "id": "B",
        "text": "Zero defects"
      },
      {
        "id": "C",
        "text": "Conformance to requirements"
      },
      {
        "id": "D",
        "text": "Work as designed"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Định nghĩa chuẩn và tốt nhất về chất lượng phần mềm (theo Philip Crosby và ISTQB) là sự phù hợp với các yêu cầu đã đặt ra (Conformance to requirements).",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_55.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 55 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q56",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Inspections can find all of the following defects or issues, EXCEPT:",
    "options": [
      {
        "id": "A",
        "text": "Variables not defined in the code"
      },
      {
        "id": "B",
        "text": "Spelling and grammar faults in the documents"
      },
      {
        "id": "C",
        "text": "Requirements that have been omitted from the design documents"
      },
      {
        "id": "D",
        "text": "How much of the code has been covered"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Inspection là kỹ thuật kiểm thử tĩnh (không chạy chương trình), nên không thể xác định được mức độ bao phủ mã nguồn (code coverage) — vốn chỉ đo được khi thực thi kiểm thử động.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_56.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 56 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q57",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Success factors for a review include:\ni. Each review does not have a predefined objective\nii. Defects found are welcomed and expressed objectively\niii. Management supports a good review process\niv. There is an emphasis on learning and process improvement",
    "options": [
      {
        "id": "A",
        "text": "ii, iii, iv are correct and i is incorrect"
      },
      {
        "id": "B",
        "text": "iii, i, iv are correct and ii is incorrect"
      },
      {
        "id": "C",
        "text": "i, iii, iv, ii are incorrect"
      },
      {
        "id": "D",
        "text": "ii is correct"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nMỗi buổi review thành công đều phải có mục tiêu xác định trước, do đó phát biểu (i) sai. Các yếu tố (ii), (iii), (iv) đều là yếu tố thành công của review theo ISTQB.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_57.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 57 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q58",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a purpose of the review planning phase?",
    "options": [
      {
        "id": "A",
        "text": "Log defects."
      },
      {
        "id": "B",
        "text": "Explain the documents to the participants"
      },
      {
        "id": "C",
        "text": "Gather metrics."
      },
      {
        "id": "D",
        "text": "Allocate the individual roles"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\nGiai đoạn Planning của formal review bao gồm xác định tiêu chí, lựa chọn nhân sự và phân bổ vai trò (allocate individual roles). Giải thích tài liệu thuộc Kick-off, ghi nhận lỗi thuộc Review meeting, và thu thập metrics thuộc Follow-up.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_58.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 58 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q59",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of these are objectives for software testing?",
    "options": [
      {
        "id": "A",
        "text": "Determine the productivity of programmers"
      },
      {
        "id": "B",
        "text": "Eliminate the need for future program maintenance"
      },
      {
        "id": "C",
        "text": "Eliminate every error prior to release"
      },
      {
        "id": "D",
        "text": "Uncover software errors"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\nMục tiêu cốt lõi của kiểm thử phần mềm là phát hiện lỗi (uncover software errors/defects). Kiểm thử không thể loại bỏ 100% lỗi, không thay thế bảo trì và không dùng để đánh giá năng suất lập trình viên.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_59.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 59 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-06-q60",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-b5",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "To make a test case effective it is most important that:",
    "options": [
      {
        "id": "A",
        "text": "It is easy to execute."
      },
      {
        "id": "B",
        "text": "It is designed to detect faults if present."
      },
      {
        "id": "C",
        "text": "The expected outcome is specified before execution."
      },
      {
        "id": "D",
        "text": "It is unlikely to delay progress."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nMột test case hiệu quả quan trọng nhất là phải được thiết kế sao cho có khả năng phát hiện ra lỗi nếu lỗi đó tồn tại trong phần mềm.",
    "imageUrl": "/images/swt-fe/sp26-b5-fe/q_60.webp",
    "imageCaption": "Đề 06: Kì Sprin — Câu 60 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q01",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is not a type of incremental testing approach?",
    "options": [
      {
        "id": "A",
        "text": "Top down"
      },
      {
        "id": "B",
        "text": "Big-bang"
      },
      {
        "id": "C",
        "text": "Bottom up"
      },
      {
        "id": "D",
        "text": "Functional incrementation."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nBig-bang là chiến lược tích hợp phi tăng dần (non-incremental) khi ghép tất cả các module lại với nhau cùng một lúc rồi mới kiểm thử, khác với Top-down, Bottom-up và Functional incrementation.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_01.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 1 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q02",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "_____ is a very early build intended for limited distribution to a few key customers and to marketing for demonstration purposes.",
    "options": [
      {
        "id": "A",
        "text": "Alpha release"
      },
      {
        "id": "B",
        "text": "Beta release"
      },
      {
        "id": "C",
        "text": "Test release document"
      },
      {
        "id": "D",
        "text": "Build"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Alpha release là bản dựng rất sớm được phân phối giới hạn cho một số ít khách hàng chủ chốt hoặc bộ phận marketing để trình diễn và thu thập phản hồi ban đầu.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_02.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 2 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q03",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the MAIN objective when reviewing a software deliverable?",
    "options": [
      {
        "id": "A",
        "text": "To identify potential application failures by use of a test specification."
      },
      {
        "id": "B",
        "text": "To identify defects in any software work product."
      },
      {
        "id": "C",
        "text": "To identify spelling mistakes in a requirements specification."
      },
      {
        "id": "D",
        "text": "To identify standards inconsistencies in the code"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nMục tiêu chính của việc review (rà soát) là phát hiện lỗi (defects) trong bất kỳ sản phẩm công việc phần mềm nào (tài liệu yêu cầu, thiết kế, mã nguồn, test plan...) càng sớm càng tốt.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_03.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 3 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q04",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Order numbers on a stock control system can range between 10000 and 99999 inclusive. Which of the following inputs might be a result of designing tests for only valid equivalence classes and valid boundaries?",
    "options": [
      {
        "id": "A",
        "text": "1000, 5000, 99999"
      },
      {
        "id": "B",
        "text": "9999, 50000, 100000"
      },
      {
        "id": "C",
        "text": "10000, 50000, 99999"
      },
      {
        "id": "D",
        "text": "10000, 99999"
      },
      {
        "id": "E",
        "text": "9999, 10000, 50000, 99999, 100000"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nHai biên hợp lệ là 10000 và 99999, còn 50000 đại diện cho phân vùng tương đương hợp lệ nằm giữa. Các phương án A, B, E chứa giá trị ngoài biên (không hợp lệ), còn D thiếu giá trị đại diện trong phân vùng.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_04.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 4 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q05",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Find the mismatch:",
    "options": [
      {
        "id": "A",
        "text": "Test data preparation tools - Manipulate databases"
      },
      {
        "id": "B",
        "text": "Test design tools - Generate test inputs"
      },
      {
        "id": "C",
        "text": "Requirement management - Enables individual tests to be traceable"
      },
      {
        "id": "D",
        "text": "Configuration management - Check for consistency"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\nCông cụ quản lý cấu hình (Configuration management) dùng để quản lý phiên bản, baseline và theo dõi thay đổi của phần mềm và testware, không phải để kiểm tra tính nhất quán (đây là chức năng của công cụ quản lý yêu cầu hoặc phân tích tĩnh).",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_05.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 5 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q06",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Find the correct flow of the phases of a formal review",
    "options": [
      {
        "id": "A",
        "text": "Planning, Review meeting, Rework, Kick off"
      },
      {
        "id": "B",
        "text": "Planning, Individual preparation, Kick off, Rework"
      },
      {
        "id": "C",
        "text": "Planning, Review meeting, Rework, Follow up"
      },
      {
        "id": "D",
        "text": "Planning, Individual preparation, Follow up, Kick off"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Trình tự đúng của quy trình review chính thức (formal review) theo ISTQB là: Planning -> Kick-off -> Individual preparation -> Review meeting -> Rework -> Follow-up. Do đó chuỗi con đúng thứ tự là Planning, Review meeting, Rework, Follow up.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_06.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 6 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q07",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following statements about component testing is not true?",
    "options": [
      {
        "id": "A",
        "text": "Component testing should be performed by development"
      },
      {
        "id": "B",
        "text": "Component testing is also known as isolation or module testing"
      },
      {
        "id": "C",
        "text": "Component testing should have completion criteria planned"
      },
      {
        "id": "D",
        "text": "Component testing does not involve regression testing"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\nPhát biểu D sai vì kiểm thử thành phần (component/unit testing) hoàn toàn có thể và thường xuyên bao gồm kiểm thử hồi quy (ví dụ chạy lại bộ unit test tự động sau khi sửa mã).",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_07.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 7 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q08",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is NOT a characteristic of User Acceptance Testing?",
    "options": [
      {
        "id": "A",
        "text": "Use of automated test execution tools"
      },
      {
        "id": "B",
        "text": "Testing performed by users"
      },
      {
        "id": "C",
        "text": "Testing against acceptance test criteria"
      },
      {
        "id": "D",
        "text": "Integration of system with user documentation."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nUser Acceptance Testing (UAT) thường do người dùng cuối hoặc khách hàng thực hiện thủ công dựa trên tiêu chí chấp nhận và tài liệu người dùng để xác nhận hệ thống đáp ứng nhu cầu nghiệp vụ, không đặc trưng bởi việc dùng công cụ chạy test tự động.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_08.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 8 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q09",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Complete statement and branch coverage means:",
    "options": [
      {
        "id": "A",
        "text": "That you have tested every statement in the program."
      },
      {
        "id": "B",
        "text": "That you have tested every statement and every branch in the program"
      },
      {
        "id": "C",
        "text": "That you have tested every IF statement in the program"
      },
      {
        "id": "D",
        "text": "That you have tested every combination of values of IF statements in the program"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nĐộ bao phủ câu lệnh và nhánh 100% (complete statement and branch coverage) có nghĩa là mọi câu lệnh thực thi và mọi nhánh quyết định (True/False) trong chương trình đều đã được kiểm thử ít nhất một lần.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_09.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 9 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q10",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What's the disadvantage of Black Box Testing?",
    "options": [
      {
        "id": "A",
        "text": "Chances of having repetition of tests that are already done by programmer."
      },
      {
        "id": "B",
        "text": "The test inputs need to be from large sample space."
      },
      {
        "id": "C",
        "text": "It is difficult to identify all possible inputs in limited testing time. So writing test cases is slow and difficult."
      },
      {
        "id": "D",
        "text": "All of the others"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\nKiểm thử hộp đen (Black Box Testing) không nhìn vào mã nguồn nên dễ trùng lặp với test của lập trình viên, không gian dữ liệu đầu vào rất lớn và khó xác định hết mọi đầu vào khả dĩ trong thời gian hữu hạn.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_10.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 10 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q11",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Quality Assurance is the process by which product quality is compared with the application standards and the action taken when nonconformance is detected.",
    "options": [
      {
        "id": "A",
        "text": "True"
      },
      {
        "id": "B",
        "text": "False"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nĐịnh nghĩa trên là của Quality Control (QC — kiểm soát chất lượng, tập trung vào sản phẩm), không phải Quality Assurance (QA — đảm bảo chất lượng, tập trung vào quy trình nhằm phòng ngừa lỗi).",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_11.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 11 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q12",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A program validates a numeric field as follows: Values less than 10 are rejected, values between 10 and 21 are accepted, values greater than or equal to 22 are rejected. Which of the following covers the MOST boundary values?",
    "options": [
      {
        "id": "A",
        "text": "9, 10, 11, 22"
      },
      {
        "id": "B",
        "text": "9, 10, 21, 22"
      },
      {
        "id": "C",
        "text": "10, 11, 21, 22"
      },
      {
        "id": "D",
        "text": "10, 11, 20, 21"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nVới phân vùng hợp lệ [10, 21], 4 giá trị biên (2 giá trị biên hợp lệ và 2 giá trị biên không hợp lệ sát kề) là 9, 10, 21 và 22. Phương án B phủ đủ cả 4 giá trị biên này.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_12.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 12 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q13",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a part of Test Closure Activities?\ni. Checking which planned deliverables have been delivered\nii. Defect report analysis\niii. Finalizing and archiving testware\niv. Analyzing lessons learned",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iv are true and iii is false"
      },
      {
        "id": "B",
        "text": "i, ii, iii are true and iv is false"
      },
      {
        "id": "C",
        "text": "i, iii, iv are true and ii is false"
      },
      {
        "id": "D",
        "text": "All of them are true"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nTheo ISTQB, hoạt động đóng kiểm thử (Test Closure) gồm: kiểm tra các sản phẩm bàn giao đã kế hoạch (i), hoàn thiện và lưu trữ testware (iii), phân tích bài học kinh nghiệm (iv). Phân tích báo cáo lỗi (ii) không nằm trong danh sách nhiệm vụ chính của Test Closure.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_13.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 13 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q14",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Bug life cycle:",
    "options": [
      {
        "id": "A",
        "text": "Open, Assigned, Fixed, Closed"
      },
      {
        "id": "B",
        "text": "Open, Fixed, Assigned, Closed"
      },
      {
        "id": "C",
        "text": "Assigned, Open, Closed, Fixed"
      },
      {
        "id": "D",
        "text": "Assigned, Open, Fixed, Closed"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nVòng đời chuẩn của một lỗi (Bug life cycle) diễn ra theo trình tự: Open (mở lỗi) → Assigned (giao cho lập trình viên) → Fixed (đã sửa) → Closed (kiểm thử lại đạt và đóng lỗi).",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_14.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 14 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q15",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following benefits are MOST likely to be achieved by using test tools?\ni) Easy to access information about tests and testing.\nii) Reduced maintenance of testware.\niii) Easy and cheap to implement.\niv) Greater consistency of tests.",
    "options": [
      {
        "id": "A",
        "text": "ii and iv"
      },
      {
        "id": "B",
        "text": "ii and iii"
      },
      {
        "id": "C",
        "text": "i and iv"
      },
      {
        "id": "D",
        "text": "i and iii"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nLợi ích chính của công cụ kiểm thử là dễ truy cập thông tin kiểm thử (i) và tăng tính nhất quán, khả năng lặp lại của các bài test (iv). Công cụ kiểm thử thường tốn chi phí triển khai và làm tăng công bảo trì testware nên (ii) và (iii) sai.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_15.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 15 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q16",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following combinations correctly describes a valid approach to component testing:\ni) Functional testing of the component in isolation.\nii) Structure-based testing of the code without recording incidents.\niii) Automated tests that are run until the component passes.\niv) Functional testing of the interfaces between modules.",
    "options": [
      {
        "id": "A",
        "text": "i and ii."
      },
      {
        "id": "B",
        "text": "i, ii and iii"
      },
      {
        "id": "C",
        "text": "iii"
      },
      {
        "id": "D",
        "text": "ii and iv"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nKiểm thử thành phần (component testing) bao gồm kiểm thử chức năng độc lập (i), kiểm thử cấu trúc mã nguồn mà thường sửa lỗi ngay không cần ghi nhận incident chính thức (ii), và chạy test tự động đến khi đạt (iii). Kiểm thử giao diện giữa các module (iv) thuộc Integration testing.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_16.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 16 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q17",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A test design technique is:",
    "options": [
      {
        "id": "A",
        "text": "A process for selecting test cases"
      },
      {
        "id": "B",
        "text": "A process for determining expected outputs"
      },
      {
        "id": "C",
        "text": "A way to measure the quality of software"
      },
      {
        "id": "D",
        "text": "A way to measure in a test plan what has to be done"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nKỹ thuật thiết kế kiểm thử (test design technique) là một quy trình/phương pháp có hệ thống dùng để xây dựng và lựa chọn các trường hợp kiểm thử (test cases).",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_17.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 17 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q18",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "How many tests are required to achieve 100% branch/decision coverage?\nif width > length\nthen\n  biggest_dimension = width\nelse\n  biggest_dimension = length\nend_if\nThe following has been added to the bottom of the code fragment above:\nprint \"Biggest dimension is \" & biggest_dimension\nprint \"Width: \" & width\nprint \"Length: \" & length",
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
    "explanation": "**Đáp án đúng: B**\nĐoạn mã chỉ có duy nhất một cấu trúc rẽ nhánh `if-else` gồm 2 nhánh (True khi `width > length` và False khi `width <= length`). Ba lệnh `print` thêm vào là tuần tự, không tạo thêm nhánh mới nên chỉ cần 2 test case để đạt 100% branch/decision coverage.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_18.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 18 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q19",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "As part of which test process do you determine the exit criteria?",
    "options": [
      {
        "id": "A",
        "text": "Test planning."
      },
      {
        "id": "B",
        "text": "Evaluating exit criteria and reporting."
      },
      {
        "id": "C",
        "text": "Test closure."
      },
      {
        "id": "D",
        "text": "Test control."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nTiêu chí dừng kiểm thử (exit criteria) được xác định ngay trong giai đoạn lập kế hoạch kiểm thử (Test planning), còn giai đoạn Evaluating exit criteria and reporting chỉ dùng để đánh giá xem đã đạt tiêu chí đó hay chưa.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_19.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 19 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q20",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Match the following:\n1. Test estimation\n2. Test control\n3. Test monitoring\na. Measures of tracking process\nb. Effort required to perform activities\nc. Reallocation of resources",
    "options": [
      {
        "id": "A",
        "text": "1-b, 2-c, 3-a"
      },
      {
        "id": "B",
        "text": "1-b, 2-a, 3-c"
      },
      {
        "id": "C",
        "text": "1-c, 2-a, 3-b"
      },
      {
        "id": "D",
        "text": "1-a, 2-b, 3-c"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nTest estimation (1) ước lượng công sức cần thiết (b); Test control (2) thực hiện hành động điều chỉnh như phân bổ lại nguồn lực (c); Test monitoring (3) đo lường và theo dõi tiến độ kiểm thử (a).",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_20.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 20 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q21",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The place to start if you want a (new) test tool is:",
    "options": [
      {
        "id": "A",
        "text": "Attend a tool exhibition"
      },
      {
        "id": "B",
        "text": "Invite a vendor to give a demo"
      },
      {
        "id": "C",
        "text": "Analyze your needs and requirements"
      },
      {
        "id": "D",
        "text": "Find out what your budget would be for the tool"
      },
      {
        "id": "E",
        "text": "Search the internet"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nBước đầu tiên khi muốn áp dụng một công cụ kiểm thử mới là phân tích rõ nhu cầu và yêu cầu thực tế của tổ chức/dự án (Analyze your needs and requirements) trước khi tìm kiếm hay xem demo từ nhà cung cấp.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_21.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 21 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q22",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A person who documents all the issues, problems and open points that were identified during a formal review:",
    "options": [
      {
        "id": "A",
        "text": "Moderator"
      },
      {
        "id": "B",
        "text": "Scribe"
      },
      {
        "id": "C",
        "text": "Author"
      },
      {
        "id": "D",
        "text": "Manager"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nScribe (thư ký/recorder) là người chịu trách nhiệm ghi chép lại toàn bộ các lỗi, vấn đề và điểm mở được phát hiện trong suốt buổi formal review.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_22.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 22 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q23",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "With which of the following categories is a test comparator tool USUALLY associated?",
    "options": [
      {
        "id": "A",
        "text": "Tool support for performance and monitoring."
      },
      {
        "id": "B",
        "text": "Tool support for static testing"
      },
      {
        "id": "C",
        "text": "Tool support for test execution and logging."
      },
      {
        "id": "D",
        "text": "Tool support for the management of testing and tests."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nTheo phân loại công cụ của ISTQB, công cụ so sánh kết quả kiểm thử (test comparator) thuộc nhóm hỗ trợ thực thi và ghi nhật ký kiểm thử (Tool support for test execution and logging).",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_23.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 23 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q24",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "During the software development process, at what point can the test process start?",
    "options": [
      {
        "id": "A",
        "text": "When the code is complete."
      },
      {
        "id": "B",
        "text": "When the design is complete."
      },
      {
        "id": "C",
        "text": "When the software requirements have been approved."
      },
      {
        "id": "D",
        "text": "When the first code module is ready for unit testing."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nTheo nguyên lý kiểm thử sớm (Early testing), quy trình kiểm thử nên bắt đầu càng sớm càng tốt trong vòng đời phát triển, cụ thể là ngay khi tài liệu yêu cầu phần mềm đã sẵn sàng/được phê duyệt.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_24.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 24 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q25",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the main purpose of Informal review",
    "options": [
      {
        "id": "A",
        "text": "Inexpensive way to get some benefit"
      },
      {
        "id": "B",
        "text": "Find defects"
      },
      {
        "id": "C",
        "text": "Learning, gaining understanding, effect finding"
      },
      {
        "id": "D",
        "text": "Discuss, make decisions, solve technical problems"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Theo ISTQB, mục đích chính của Informal review (như buddy check, pair review) là một cách ít tốn kém để thu được một số lợi ích nhanh chóng (Inexpensive way to get some benefit).",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_25.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 25 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q26",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the main reason for testing software before releasing it?",
    "options": [
      {
        "id": "A",
        "text": "To show that system will work after release"
      },
      {
        "id": "B",
        "text": "To decide when the software is of sufficient quality to release"
      },
      {
        "id": "C",
        "text": "To find as many bugs as possible before release"
      },
      {
        "id": "D",
        "text": "To give information for a risk based decision about release"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\nMục đích chính của việc kiểm thử trước khi phát hành là cung cấp thông tin khách quan về chất lượng và rủi ro để các bên liên quan đưa ra quyết định phát hành dựa trên rủi ro (risk-based decision).",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_26.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 26 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q27",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Success factors for a review include:\ni. Each review does not have a predefined objective\nii. Defects found are welcomed and expressed objectively\niii. Management supports a good review process\niv. There is an emphasis on learning and process improvement",
    "options": [
      {
        "id": "A",
        "text": "ii, iii, iv are correct and i is incorrect"
      },
      {
        "id": "B",
        "text": "iii, i, iv are correct and ii is incorrect"
      },
      {
        "id": "C",
        "text": "i, iii, iv, ii are incorrect"
      },
      {
        "id": "D",
        "text": "ii is correct"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nMỗi buổi review thành công đều phải có mục tiêu xác định trước, do đó phát biểu (i) sai. Các yếu tố (ii), (iii), (iv) đều là yếu tố thành công của review theo ISTQB.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_27.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 27 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q28",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which, in general, is the least required skill of a good tester?",
    "options": [
      {
        "id": "A",
        "text": "Being diplomatic"
      },
      {
        "id": "B",
        "text": "Able to write software"
      },
      {
        "id": "C",
        "text": "Having good attention to detail"
      },
      {
        "id": "D",
        "text": "Able to be relied on"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nNhìn chung, khả năng viết phần mềm (lập trình) là kỹ năng ít bắt buộc nhất đối với một kiểm thử viên giỏi so với sự khéo léo trong giao tiếp, chú ý đến chi tiết và tính đáng tin cậy.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_28.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 28 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q29",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following will be the best definition for Testing:",
    "options": [
      {
        "id": "A",
        "text": "The goal / purpose of testing is to demonstrate that the program works"
      },
      {
        "id": "B",
        "text": "The purpose of testing is to demonstrate that the program is defect free."
      },
      {
        "id": "C",
        "text": "The purpose of testing is to demonstrate that the program does what it is supposed to do"
      },
      {
        "id": "D",
        "text": "Testing is executing software for the purpose of finding defects."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\nTheo định nghĩa kinh điển của Glenford Myers, kiểm thử là quá trình thực thi phần mềm với mục đích tìm ra lỗi (defects), chứ không phải để chứng minh phần mềm hoàn toàn không có lỗi.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_29.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 29 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q30",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "People who don't participate in technical reviews",
    "options": [
      {
        "id": "A",
        "text": "Analysts"
      },
      {
        "id": "B",
        "text": "Management"
      },
      {
        "id": "C",
        "text": "Developers"
      },
      {
        "id": "D",
        "text": "Testers"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**. Theo ISTQB, Technical review là quá trình rà soát kỹ thuật giữa các đồng nghiệp và chuyên gia kỹ thuật (developers, testers, analysts), và đặc trưng là không có sự tham gia của cấp quản lý (Management).",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_30.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 30 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q31",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "With thorough testing it is possible to remove all defects from a program prior to delivery to the customer.",
    "options": [
      {
        "id": "A",
        "text": "True"
      },
      {
        "id": "B",
        "text": "False"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nPhát biểu này sai vì kiểm thử vét cạn là bất khả thi; kiểm thử chỉ có thể chứng minh sự tồn tại của lỗi chứ không bao giờ đảm bảo loại bỏ được 100% lỗi trước khi bàn giao.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_31.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 31 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q32",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The principal attributes of tools and automation are:",
    "options": [
      {
        "id": "A",
        "text": "(1) Speed & efficiency"
      },
      {
        "id": "B",
        "text": "(2) Accuracy & precision"
      },
      {
        "id": "C",
        "text": "Both of (1) and (2)"
      },
      {
        "id": "D",
        "text": "None of (1) nor (2)"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nCác thuộc tính cốt lõi của công cụ và tự động hóa kiểm thử bao gồm cả tốc độ & hiệu suất (Speed & efficiency) lẫn độ chính xác & nhất quán (Accuracy & precision).",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_32.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 32 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q33",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is NOT a black box technique?",
    "options": [
      {
        "id": "A",
        "text": "Equivalence partitioning"
      },
      {
        "id": "B",
        "text": "State transition testing"
      },
      {
        "id": "C",
        "text": "LCSAJ"
      },
      {
        "id": "D",
        "text": "Syntax testing"
      },
      {
        "id": "E",
        "text": "Boundary value analysis"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nLCSAJ (Linear Code Sequence and Jump) là kỹ thuật kiểm thử hộp trắng (dựa trên cấu trúc mã nguồn), trong khi các phương án còn lại đều là kỹ thuật kiểm thử hộp đen.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_33.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 33 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q34",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The phases of formal review process are mentioned below, arrange them in the correct order:\ni) Planning\nii) Review Meeting\niii) Rework\niv) Individual Preparations\nv) Kick Off\nvi) Follow Up",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv, v, vi"
      },
      {
        "id": "B",
        "text": "vi, i, ii, iii, iv, v"
      },
      {
        "id": "C",
        "text": "i, v, iv, ii, iii, vi"
      },
      {
        "id": "D",
        "text": "i, ii, iii, v, iv, vi"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n6 bước chuẩn của quy trình formal review theo ISTQB là: Planning (i) → Kick-off (v) → Individual Preparation (iv) → Review Meeting (ii) → Rework (iii) → Follow-up (vi).",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_34.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 34 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q35",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the purpose of test completion criteria in a test plan?",
    "options": [
      {
        "id": "A",
        "text": "To know when a specific test has finished its execution"
      },
      {
        "id": "B",
        "text": "To ensure that the test case specification is complete"
      },
      {
        "id": "C",
        "text": "To set the criteria used in generating test inputs"
      },
      {
        "id": "D",
        "text": "To know when test planning is complete"
      },
      {
        "id": "E",
        "text": "To plan when to stop testing"
      }
    ],
    "correctOptionIds": [
      "E"
    ],
    "explanation": "**Đáp án đúng: E**\nMục đích của test completion criteria (tiêu chí hoàn thành kiểm thử) trong kế hoạch kiểm thử là xác định trước điều kiện để dừng việc kiểm thử.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_35.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 35 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q36",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A thermometer measures temperature in whole degrees only. If the temperature falls below 18 degrees, the heating is switched off. It is switched on again when the temperature reaches 21 degrees. What are the best values in degrees to cover all equivalence partitions?",
    "options": [
      {
        "id": "A",
        "text": "15, 19 and 25."
      },
      {
        "id": "B",
        "text": "17, 18 and 19."
      },
      {
        "id": "C",
        "text": "18, 20 and 22."
      },
      {
        "id": "D",
        "text": "16, 26 and 32."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nHệ thống có 3 phân vùng tương đương: dưới 18 độ (< 18), từ 18 đến 20 độ (18–20), và từ 21 độ trở lên (>= 21). Bộ giá trị 15, 19 và 25 phủ đầy đủ cả 3 phân vùng này.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_36.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 36 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q37",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Repeated testing of an already tested program, after modification, to discover any defects introduced or uncovered as a result of the changes in the software being tested or in another related or unrelated software component:",
    "options": [
      {
        "id": "A",
        "text": "Re-Testing"
      },
      {
        "id": "B",
        "text": "Confirmation Testing"
      },
      {
        "id": "C",
        "text": "Regression Testing"
      },
      {
        "id": "D",
        "text": "Negative Testing"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nĐây là định nghĩa chuẩn của ISTQB cho kiểm thử hồi quy (Regression Testing): kiểm thử lại chương trình đã kiểm thử sau khi có thay đổi để phát hiện lỗi mới phát sinh hoặc bị che khuất trước đó.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_37.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 37 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q38",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a static test?",
    "options": [
      {
        "id": "A",
        "text": "Code inspection"
      },
      {
        "id": "B",
        "text": "Coverage analysis"
      },
      {
        "id": "C",
        "text": "Usability assessment"
      },
      {
        "id": "D",
        "text": "Installation test"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nCode inspection (kiểm tra mã nguồn) là kiểm thử tĩnh vì không cần chạy chương trình. Các phương án còn lại đều liên quan đến việc thực thi phần mềm (kiểm thử động).",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_38.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 38 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q39",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following has highest level of independence in which test cases are:",
    "options": [
      {
        "id": "A",
        "text": "Designed by persons who write the software under test"
      },
      {
        "id": "B",
        "text": "Designed by a person from a different section"
      },
      {
        "id": "C",
        "text": "Designed by a person from a different organization"
      },
      {
        "id": "D",
        "text": "Designed by another person"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**. Theo thang mức độ độc lập trong kiểm thử của ISTQB, mức độ độc lập cao nhất là khi ca kiểm thử được thiết kế bởi một tổ chức bên ngoài hoàn toàn độc lập (outsource / different organization).",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_39.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 39 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q40",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following could be a reason for a failure?\n1) Testing fault\n2) Software fault\n3) Design fault\n4) Environment fault\n5) Documentation fault",
    "options": [
      {
        "id": "A",
        "text": "2 is a valid reason; 1, 3, 4 & 5 are not"
      },
      {
        "id": "B",
        "text": "1, 2, 3, 4 are valid reasons; 5 is not"
      },
      {
        "id": "C",
        "text": "1, 2, 3 are valid reasons; 4 & 5 are not"
      },
      {
        "id": "D",
        "text": "All of them are valid reasons for failure"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\nMột sự cố (failure) có thể bắt nguồn từ nhiều nguyên nhân khác nhau: lỗi trong mã phần mềm, lỗi thiết kế, lỗi môi trường phần cứng/phần mềm, lỗi trong tài liệu hoặc thậm chí lỗi do chính kịch bản kiểm thử.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_40.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 40 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q41",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "In a review meeting a moderator is a person who:",
    "options": [
      {
        "id": "A",
        "text": "Takes minutes of the meeting"
      },
      {
        "id": "B",
        "text": "Mediates between people"
      },
      {
        "id": "C",
        "text": "Takes telephone calls"
      },
      {
        "id": "D",
        "text": "Writes the documents to be reviewed"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nModerator (người điều phối) điều hành buổi họp review và đóng vai trò hòa giải, trung gian giữa các thành viên (mediates between people) để đảm bảo thảo luận khách quan và hiệu quả.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_41.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 41 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q42",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "For which of the following types of testing would a vendor contractor typically need to write the initial scripts?",
    "options": [
      {
        "id": "A",
        "text": "Measuring response time"
      },
      {
        "id": "B",
        "text": "Measuring transaction rates"
      },
      {
        "id": "C",
        "text": "Recovery testing"
      },
      {
        "id": "D",
        "text": "Simulating many users"
      },
      {
        "id": "E",
        "text": "Generating many transactions"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**. Khi kiểm thử tải/hiệu năng nhằm mô phỏng đồng thời rất nhiều người dùng (Simulating many users), việc cấu hình và viết các kịch bản tải ban đầu thường phức tạp nên hay cần chuyên gia/nhà thầu của bên cung cấp công cụ hỗ trợ viết script ban đầu.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_42.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 42 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q43",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Validation involves which of the following:\ni. Helps to check the quality of the built product\nii. Helps to check that we have built the right product\niii. Helps in developing the product\niv. Monitoring tool wastage and obsoleteness",
    "options": [
      {
        "id": "A",
        "text": "Options i, ii, iii, iv are true"
      },
      {
        "id": "B",
        "text": "ii is true and i, iii, iv are false"
      },
      {
        "id": "C",
        "text": "i, ii, iii are true and iv is false"
      },
      {
        "id": "D",
        "text": "iii is true and i, ii, iv are false."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nValidation (thẩm định) trả lời câu hỏi \"Chúng ta có đang xây dựng đúng sản phẩm mà người dùng cần không?\" (ii). Còn kiểm tra chất lượng sản phẩm so với đặc tả (i) thuộc về Verification.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_43.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 43 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q44",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is not a part of the Test Implementation and Execution phase?",
    "options": [
      {
        "id": "A",
        "text": "Creating test suites from the test cases"
      },
      {
        "id": "B",
        "text": "Executing test cases either manually or by using test execution tools"
      },
      {
        "id": "C",
        "text": "Comparing actual results"
      },
      {
        "id": "D",
        "text": "Designing the Tests"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\nThiết kế các bài kiểm thử (Designing the tests) thuộc giai đoạn Test Analysis and Design, không thuộc giai đoạn Test Implementation and Execution.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_44.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 44 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q45",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Peer Reviews are also called as:",
    "options": [
      {
        "id": "A",
        "text": "Inspection"
      },
      {
        "id": "B",
        "text": "Walkthrough"
      },
      {
        "id": "C",
        "text": "Technical Review"
      },
      {
        "id": "D",
        "text": "Formal Review"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nTheo giáo trình ISTQB, Technical Review (rà soát kỹ thuật) còn được gọi là Peer Review vì được thực hiện bởi các đồng nghiệp và chuyên gia kỹ thuật cùng chuyên môn.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_45.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 45 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q46",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A typical commercial test execution tool would be able to perform all of the following, EXCEPT:",
    "options": [
      {
        "id": "A",
        "text": "Generating expected outputs"
      },
      {
        "id": "B",
        "text": "Replaying inputs according to a programmed script"
      },
      {
        "id": "C",
        "text": "Comparison of expected outcomes with actual outcomes"
      },
      {
        "id": "D",
        "text": "Recording test inputs"
      },
      {
        "id": "E",
        "text": "Reading test values from a data file"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Công cụ thực thi kiểm thử thương mại có thể ghi lại đầu vào, phát lại script, đọc dữ liệu từ file và so sánh kết quả, nhưng không thể tự suy ra hay sinh ra kết quả mong đợi (Generating expected outputs) — điều này cần con người (test oracle) xác định.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_46.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 46 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q47",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Test Implementation and Execution has which of the following major tasks?\ni. Developing and prioritizing test cases, creating test data, writing test procedures and optionally preparing the test harnesses and writing automated test scripts\nii. Creating the test suite from the test cases for efficient test execution\niii. Verifying that the test environment has been set up correctly\niv. Determining the exit criteria",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii are true and iv is false"
      },
      {
        "id": "B",
        "text": "i, iv are true and ii is false"
      },
      {
        "id": "C",
        "text": "i, ii are true and iii, iv are false"
      },
      {
        "id": "D",
        "text": "ii, iii, iv are true and i is false"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nCác nhiệm vụ (i), (ii), (iii) đều thuộc giai đoạn Test Implementation and Execution. Riêng việc xác định tiêu chí dừng (iv - Determining exit criteria) thuộc giai đoạn Test Planning.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_47.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 47 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q48",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Testing activity which is performed to expose defects in the interfaces and in the interaction between integrated components is:",
    "options": [
      {
        "id": "A",
        "text": "System Level Testing"
      },
      {
        "id": "B",
        "text": "Integration Level Testing"
      },
      {
        "id": "C",
        "text": "Unit Level Testing"
      },
      {
        "id": "D",
        "text": "Component Testing"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nKiểm thử tích hợp (Integration Level Testing) tập trung vào việc phát hiện lỗi tại các giao diện (interfaces) và sự tương tác giữa các thành phần hoặc hệ thống sau khi tích hợp.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_48.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 48 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q49",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a step-by-step method followed to ensure that standards are met?",
    "options": [
      {
        "id": "A",
        "text": "SDLC"
      },
      {
        "id": "B",
        "text": "Project Plan"
      },
      {
        "id": "C",
        "text": "Policy"
      },
      {
        "id": "D",
        "text": "Procedure"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\nProcedure (quy trình/thủ tục) là phương pháp mô tả chi tiết từng bước thực hiện nhằm đảm bảo các tiêu chuẩn và chính sách đặt ra được tuân thủ.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_49.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 49 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q50",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A piece of software has been given. What tests in the following will you perform?\n1) Test the areas most critical to business processes\n2) Test the areas where faults will be maximum\n3) Test the easiest functionalities",
    "options": [
      {
        "id": "A",
        "text": "1 & 2 are true and 3 is false"
      },
      {
        "id": "B",
        "text": "1, 2 & 3 are true."
      },
      {
        "id": "C",
        "text": "1 is true, 2 & 3 are false."
      },
      {
        "id": "D",
        "text": "1 & 2 are false, 3 is true"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nTheo kiểm thử dựa trên rủi ro và nguyên lý cụm lỗi (defect clustering), cần ưu tiên kiểm thử các khu vực quan trọng nhất với nghiệp vụ (1) và nơi có khả năng chứa nhiều lỗi nhất (2), chứ không ưu tiên các chức năng dễ nhất (3).",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_50.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 50 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q51",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which is the non-functional testing?",
    "options": [
      {
        "id": "A",
        "text": "Performance testing"
      },
      {
        "id": "B",
        "text": "Unit testing"
      },
      {
        "id": "C",
        "text": "Regression testing"
      },
      {
        "id": "D",
        "text": "Sanity testing"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nKiểm thử hiệu năng (Performance testing) đánh giá tốc độ, khả năng chịu tải và độ ổn định của hệ thống, là một loại kiểm thử phi chức năng (non-functional testing).",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_51.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 51 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q52",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Verification involves which of the following:\ni. Helps to check the quality of the built product\nii. Helps to check that we have built the right product\niii. Helps in developing the product\niv. Monitoring tool wastage and obsoleteness",
    "options": [
      {
        "id": "A",
        "text": "Options i, ii, iii, iv are true"
      },
      {
        "id": "B",
        "text": "i is true and ii, iii, iv are false"
      },
      {
        "id": "C",
        "text": "i, ii, iii are true and iv is false"
      },
      {
        "id": "D",
        "text": "ii is true and i, iii, iv are false."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nVerification (xác minh) tập trung kiểm tra xem sản phẩm có được xây dựng đúng theo đặc tả và chuẩn chất lượng hay không (i), trong khi kiểm tra xem có xây dựng đúng sản phẩm người dùng cần hay không (ii) là Validation.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_52.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 52 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q53",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Testing without a real plan and test cases is called:",
    "options": [
      {
        "id": "A",
        "text": "Gorilla testing"
      },
      {
        "id": "B",
        "text": "Monkey testing"
      },
      {
        "id": "C",
        "text": "Adhoc testing"
      },
      {
        "id": "D",
        "text": "All of the others"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nAd-hoc testing là hình thức kiểm thử phi chính thức, được thực hiện ngẫu hứng không có kế hoạch hay tài liệu test case chuẩn bị trước.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_53.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 53 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q54",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A standard for software testing terminology is:",
    "options": [
      {
        "id": "A",
        "text": "IEEE 802.11"
      },
      {
        "id": "B",
        "text": "ISO 9001"
      },
      {
        "id": "C",
        "text": "BS 7925-1"
      },
      {
        "id": "D",
        "text": "BS 7925-2"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nBS 7925-1 là tiêu chuẩn của Anh về từ vựng/thuật ngữ kiểm thử phần mềm (Vocabulary of terms in software testing). BS 7925-2 là tiêu chuẩn về kiểm thử thành phần, ISO 9001 về quản lý chất lượng và IEEE 802.11 về mạng Wi-Fi.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_54.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 54 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q55",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The provision and management of a controlled library containing all the configuration items is called as:",
    "options": [
      {
        "id": "A",
        "text": "Configuration Control"
      },
      {
        "id": "B",
        "text": "Status Accounting"
      },
      {
        "id": "C",
        "text": "Configuration Identification"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nConfiguration Control (kiểm soát cấu hình) đảm nhiệm việc cung cấp và quản lý thư viện có kiểm soát chứa tất cả các mục cấu hình (configuration items).",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_55.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 55 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q56",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A Test Plan Outline contains which of the following:\ni. Test Items\nii. Test Scripts\niii. Test Deliverables\niv. Responsibilities",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii are true and iv is false"
      },
      {
        "id": "B",
        "text": "i, iii, iv are true and ii is false"
      },
      {
        "id": "C",
        "text": "ii, iii are true and i and iv are false"
      },
      {
        "id": "D",
        "text": "i, ii are false and iii, iv are true"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nTheo chuẩn IEEE 829, khung Test Plan bao gồm Test Items (i), Test Deliverables (iii) và Responsibilities (iv), nhưng không chứa chi tiết Test Scripts (ii).",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_56.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 56 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q57",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "When a new testing tool is purchased, it should be used first by:",
    "options": [
      {
        "id": "A",
        "text": "A small team to establish the best way to use the tool"
      },
      {
        "id": "B",
        "text": "Everyone who may eventually have some use for the tool"
      },
      {
        "id": "C",
        "text": "The independent testing team"
      },
      {
        "id": "D",
        "text": "The vendor contractor to write the initial scripts"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**. Khi mua một công cụ kiểm thử mới, nên triển khai thí điểm (pilot project) với một nhóm nhỏ trước để tìm ra cách sử dụng tối ưu, thiết lập chuẩn mực và đánh giá hiệu quả trước khi nhân rộng toàn tổ chức.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_57.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 57 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q58",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What can static analysis NOT find?",
    "options": [
      {
        "id": "A",
        "text": "The use of a variable before it has been defined"
      },
      {
        "id": "B",
        "text": "Unreachable (\"dead\") code"
      },
      {
        "id": "C",
        "text": "Memory leaks"
      },
      {
        "id": "D",
        "text": "Array bound violations"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nRò rỉ bộ nhớ (memory leaks) là lỗi xảy ra trong quá trình cấp phát/giải phóng bộ nhớ lúc chạy chương trình, thường cần công cụ phân tích động (dynamic analysis) để phát hiện chứ không phải phân tích tĩnh.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_58.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 58 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q59",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the purpose of exit criteria?",
    "options": [
      {
        "id": "A",
        "text": "To define when a test level is complete."
      },
      {
        "id": "B",
        "text": "To determine when a test has completed."
      },
      {
        "id": "C",
        "text": "To identify when a software system should be retired."
      },
      {
        "id": "D",
        "text": "To determine whether a test has passed."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nTiêu chí kết thúc (exit criteria) dùng để định nghĩa các điều kiện cần đạt được nhằm xác định khi nào một mức kiểm thử (test level) hoặc tập hợp kiểm thử được coi là hoàn thành.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_59.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 59 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-07-q60",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26-re",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Expected results are:",
    "options": [
      {
        "id": "A",
        "text": "Only important in system testing"
      },
      {
        "id": "B",
        "text": "Only used in component testing"
      },
      {
        "id": "C",
        "text": "Never specified in advance"
      },
      {
        "id": "D",
        "text": "Most useful when specified in advance"
      },
      {
        "id": "E",
        "text": "Derived from the code"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\nKết quả mong đợi (expected results) hữu ích nhất khi được xác định trước lúc thực thi kiểm thử (dựa trên đặc tả/yêu cầu), giúp tránh thiên kiến xác nhận khi đối chiếu với kết quả thực tế.",
    "imageUrl": "/images/swt-fe/sp26-fe-re/q_60.webp",
    "imageCaption": "Đề 07: Kì Sprin — Câu 60 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q01",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which one does not come under international standard?",
    "options": [
      {
        "id": "A",
        "text": "IEC"
      },
      {
        "id": "B",
        "text": "IEEE"
      },
      {
        "id": "C",
        "text": "ISO"
      },
      {
        "id": "D",
        "text": "All of the others"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nISO và IEC là các tổ chức tiêu chuẩn hóa quốc tế, trong khi IEEE (Institute of Electrical and Electronics Engineers) là hiệp hội nghề nghiệp kỹ thuật có trụ sở tại Hoa Kỳ (tiêu chuẩn quốc gia/ngành).",
    "imageUrl": "/images/swt-fe/sp26-fe/q_01.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 1 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q02",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Testing should be stopped when:",
    "options": [
      {
        "id": "A",
        "text": "(i) All the defined tests have been executed"
      },
      {
        "id": "B",
        "text": "(ii) Time has run out"
      },
      {
        "id": "C",
        "text": "(iii) All faults have been fixed correctly"
      },
      {
        "id": "D",
        "text": "Both (i) and (iii)"
      },
      {
        "id": "E",
        "text": "It depends on the risks for the system being tested"
      }
    ],
    "correctOptionIds": [
      "E"
    ],
    "explanation": "**Đáp án đúng: E**\nQuyết định thời điểm dừng kiểm thử không chỉ phụ thuộc vào việc chạy hết test hay hết thời gian mà phải dựa trên mức độ rủi ro của hệ thống đang được kiểm thử cùng các tiêu chí dừng đã thống nhất.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_02.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 2 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q03",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Defects are recorded for three major purposes. They are:\n1. To correct the defect\n2. To report status of the application\n3. To improve the software development process",
    "options": [
      {
        "id": "A",
        "text": "True"
      },
      {
        "id": "B",
        "text": "False"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nPhát biểu này đúng. Việc ghi nhận báo cáo lỗi nhằm 3 mục đích chính: hỗ trợ lập trình viên sửa lỗi, cung cấp thông tin về trạng thái chất lượng ứng dụng, và rút kinh nghiệm cải tiến quy trình phát triển phần mềm.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_03.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 3 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q04",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is the standard for Software product quality?",
    "options": [
      {
        "id": "A",
        "text": "ISO 9126"
      },
      {
        "id": "B",
        "text": "ISO 829"
      },
      {
        "id": "C",
        "text": "ISO 1012"
      },
      {
        "id": "D",
        "text": "ISO 1028"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nISO 9126 là tiêu chuẩn quốc tế đánh giá chất lượng sản phẩm phần mềm (gồm 6 đặc tính: Functionality, Reliability, Usability, Efficiency, Maintainability, Portability).",
    "imageUrl": "/images/swt-fe/sp26-fe/q_04.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 4 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q05",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Important consequences of the impossibility of complete testing are:",
    "options": [
      {
        "id": "A",
        "text": "We can never be certain that the program is bug free."
      },
      {
        "id": "B",
        "text": "We have no definite stopping point for testing, which makes it easier for some managers to argue for very little testing."
      },
      {
        "id": "C",
        "text": "We have no easy answer for what testing tasks should always be required, because every task takes time that could be spent on other high importance tasks."
      },
      {
        "id": "D",
        "text": "All of the others."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\nVì kiểm thử toàn diện là bất khả thi nên ta không bao giờ chắc chắn phần mềm sạch lỗi, không có điểm dừng tuyệt đối hiển nhiên, và luôn phải đánh đổi nguồn lực thời gian giữa các nhiệm vụ kiểm thử.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_05.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 5 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q06",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A field failure occurs when multiple users access a system. Which of the following is true?",
    "options": [
      {
        "id": "A",
        "text": "This is an acceptable risk of a multi-user system"
      },
      {
        "id": "B",
        "text": "Insufficient functional testing has been performed"
      },
      {
        "id": "C",
        "text": "This indicates an important non-functional requirement was not specified and tested."
      },
      {
        "id": "D",
        "text": "It is not possible to test against such events prior to release."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nLỗi phát sinh khi nhiều người dùng truy cập đồng thời là vấn đề về hiệu năng/tải (load/concurrency), cho thấy một yêu cầu phi chức năng quan trọng đã không được đặc tả và kiểm thử đầy đủ trước khi phát hành.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_06.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 6 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q07",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "PDCA is known as:",
    "options": [
      {
        "id": "A",
        "text": "Plan, Do, Check, Act"
      },
      {
        "id": "B",
        "text": "Plan, Do, Correct, Act"
      },
      {
        "id": "C",
        "text": "Plan, Debug, Check, Act"
      },
      {
        "id": "D",
        "text": "Plan, Do, Check, Accept"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nPDCA (chu trình Deming trong quản lý và cải tiến chất lượng) là viết tắt của Plan (Lập kế hoạch) – Do (Thực hiện) – Check (Kiểm tra) – Act (Hành động điều chỉnh).",
    "imageUrl": "/images/swt-fe/sp26-fe/q_07.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 7 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q08",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following statements is true?",
    "options": [
      {
        "id": "A",
        "text": "Faults in program specifications are the most expensive to fix."
      },
      {
        "id": "B",
        "text": "Faults in code are the most expensive to fix."
      },
      {
        "id": "C",
        "text": "Faults in requirements are the most expensive to fix."
      },
      {
        "id": "D",
        "text": "Faults in designs are the most expensive to fix."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nLỗi phát sinh ở giai đoạn yêu cầu (requirements) nếu không được phát hiện sớm sẽ lan truyền sang thiết kế, mã nguồn và kiểm thử, do đó có chi phí khắc phục đắt đỏ nhất.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_08.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 8 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q09",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The IEEE 829 test plan documentation standard contains all of the following, EXCEPT:",
    "options": [
      {
        "id": "A",
        "text": "Test items"
      },
      {
        "id": "B",
        "text": "Test deliverables"
      },
      {
        "id": "C",
        "text": "Test tasks"
      },
      {
        "id": "D",
        "text": "Test environment"
      },
      {
        "id": "E",
        "text": "Test specification"
      }
    ],
    "correctOptionIds": [
      "E"
    ],
    "explanation": "**Đáp án đúng: E**\nTài liệu Test Plan theo chuẩn IEEE 829 chứa Test items, Test deliverables, Test tasks, Environmental needs... nhưng không chứa Test specification (đây là các tài liệu riêng như Test Design/Case/Procedure Specification).",
    "imageUrl": "/images/swt-fe/sp26-fe/q_09.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 9 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q10",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Regression testing should be performed:\ni. Every week\nii. After the software has changed\niii. As often as possible\niv. When the environment has changed\nv. When the project manager says",
    "options": [
      {
        "id": "A",
        "text": "i & ii are true, iii, iv, v are false"
      },
      {
        "id": "B",
        "text": "ii, iii & iv are true, i & v are false"
      },
      {
        "id": "C",
        "text": "ii & iv are true, i, iii & v are false"
      },
      {
        "id": "D",
        "text": "ii is true, i, iii, iv & v are false"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nTheo chuẩn ISTQB, kiểm thử hồi quy được thực hiện sau khi phần mềm thay đổi (ii) và khi môi trường thay đổi (iv), không phải thực hiện định kỳ hàng tuần hay tùy ý càng nhiều càng tốt.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_10.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 10 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q11",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a MAJOR task of test implementation and execution?",
    "options": [
      {
        "id": "A",
        "text": "Measuring and analyzing results."
      },
      {
        "id": "B",
        "text": "Reporting discrepancies as incidents."
      },
      {
        "id": "C",
        "text": "Identifying test conditions or test requirements."
      },
      {
        "id": "D",
        "text": "Assessing if more tests are needed."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nBáo cáo các sai lệch giữa kết quả thực tế và mong đợi dưới dạng sự cố/lỗi (Reporting discrepancies as incidents) là nhiệm vụ chính của giai đoạn Test Implementation and Execution.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_11.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 11 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q12",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Independent Verification & Validation is:",
    "options": [
      {
        "id": "A",
        "text": "Done by the Developer"
      },
      {
        "id": "B",
        "text": "Done by the Test Engineers"
      },
      {
        "id": "C",
        "text": "Done by Management"
      },
      {
        "id": "D",
        "text": "Done by an Entity Outside the Project's sphere of influence"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\nIndependent Verification & Validation (IV&V) là hoạt động xác minh và thẩm định độc lập, được thực hiện bởi một đơn vị/tổ chức hoàn toàn bên ngoài phạm vi ảnh hưởng của dự án nhằm đảm bảo tính khách quan cao nhất.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_12.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 12 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q13",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The specification which describes steps required to operate the system and exercise test cases in order to implement the associated test design:",
    "options": [
      {
        "id": "A",
        "text": "Test Case Specification"
      },
      {
        "id": "B",
        "text": "Test Design Specification"
      },
      {
        "id": "C",
        "text": "Test Procedure Specification"
      },
      {
        "id": "D",
        "text": "None of the others"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nTest Procedure Specification (đặc tả thủ tục kiểm thử) mô tả trình tự các bước thao tác cụ thể để vận hành hệ thống và thực thi các test case.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_13.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 13 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q14",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is not an integration strategy?",
    "options": [
      {
        "id": "A",
        "text": "Design based"
      },
      {
        "id": "B",
        "text": "Big-bang"
      },
      {
        "id": "C",
        "text": "Bottom-up"
      },
      {
        "id": "D",
        "text": "Top-down"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nBig-bang, Bottom-up và Top-down đều là các chiến lược kiểm thử tích hợp phổ biến; \"Design based\" không phải là một chiến lược tích hợp.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_14.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 14 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q15",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Software testing accounts to what percent of software development costs?",
    "options": [
      {
        "id": "A",
        "text": "10-20"
      },
      {
        "id": "B",
        "text": "40-50"
      },
      {
        "id": "C",
        "text": "70-80"
      },
      {
        "id": "D",
        "text": "5-10"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nTrong kỹ nghệ phần mềm, chi phí cho hoạt động kiểm thử thường chiếm khoảng 40–50% tổng chi phí phát triển phần mềm.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_15.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 15 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q16",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Reviews, static analysis and dynamic testing have the same objective:",
    "options": [
      {
        "id": "A",
        "text": "(i) Identifying defects"
      },
      {
        "id": "B",
        "text": "(ii) Fixing defects"
      },
      {
        "id": "C",
        "text": "(i) and (ii)"
      },
      {
        "id": "D",
        "text": "None of (i) nor (ii)"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nReview, phân tích tĩnh và kiểm thử động đều có chung mục tiêu là phát hiện lỗi (identifying defects). Việc sửa lỗi (fixing defects) thuộc hoạt động gỡ lỗi (debugging) của lập trình viên.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_16.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 16 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q17",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Deciding \"How much testing is enough\" should take into account:\ni. Level of Risk including Technical and Business product and project risk\nii. Project constraints such as time and budget\niii. Size of Testing Team\niv. Size of the Development Team",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii are true and iv is false"
      },
      {
        "id": "B",
        "text": "i, iv are true and ii is false"
      },
      {
        "id": "C",
        "text": "i, ii are true and iii, iv are false"
      },
      {
        "id": "D",
        "text": "ii, iii, iv are true and i is false"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nTheo giáo trình ISTQB Foundation Level (mục 1.1.3), quyết định kiểm thử bao nhiêu là đủ cần dựa trên mức độ rủi ro (kỹ thuật, nghiệp vụ, sản phẩm, dự án — i) và các ràng buộc dự án như thời gian và ngân sách (ii).",
    "imageUrl": "/images/swt-fe/sp26-fe/q_17.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 17 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q18",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "In which order should tests be run?",
    "options": [
      {
        "id": "A",
        "text": "The most important tests first"
      },
      {
        "id": "B",
        "text": "The most difficult tests first (to allow maximum time for fixing)"
      },
      {
        "id": "C",
        "text": "The easiest tests first (to give initial confidence)"
      },
      {
        "id": "D",
        "text": "The order they are thought of"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nCác bài kiểm thử quan trọng nhất (liên quan đến rủi ro cao hoặc chức năng cốt lõi) cần được ưu tiên chạy trước để sớm phát hiện các lỗi nghiêm trọng nhất nếu thời gian kiểm thử bị cắt ngắn.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_18.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 18 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q19",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following defines the expected results of a test?",
    "options": [
      {
        "id": "A",
        "text": "Test case specification."
      },
      {
        "id": "B",
        "text": "Test design specification."
      },
      {
        "id": "C",
        "text": "Test procedure specification."
      },
      {
        "id": "D",
        "text": "Test results."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nTest case specification (đặc tả trường hợp kiểm thử) định nghĩa tập giá trị đầu vào, điều kiện tiên quyết, kết quả mong đợi (expected results) và điều kiện hậu kiểm cho một bài test.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_19.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 19 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q20",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following activities is included in the kick-off phase of a formal review?",
    "options": [
      {
        "id": "A",
        "text": "Explaining the objective"
      },
      {
        "id": "B",
        "text": "Fixing defects found typically done by author"
      },
      {
        "id": "C",
        "text": "Follow up"
      },
      {
        "id": "D",
        "text": "Individual meeting preparations"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nGiai đoạn Kick-off của formal review bao gồm phân phát tài liệu, giải thích mục tiêu (explaining the objective), quy trình và vai trò cho các thành viên tham gia.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_20.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 20 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q21",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Static analysis tools are typically used by:",
    "options": [
      {
        "id": "A",
        "text": "Testers"
      },
      {
        "id": "B",
        "text": "Developers"
      },
      {
        "id": "C",
        "text": "Testers & Developers"
      },
      {
        "id": "D",
        "text": "None of the others"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nTheo ISTQB Foundation Level, công cụ phân tích tĩnh (static analysis tools) thường được các lập trình viên (Developers) sử dụng trực tiếp trên mã nguồn trước và trong giai đoạn kiểm thử thành phần và tích hợp.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_21.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 21 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q22",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which expression best matches the following characteristics of review processes:\n1. Led by author\n2. Undocumented\n3. No management participation\n4. Led by a trained moderator or leader\n5. Uses entry/exit criteria\ns) Inspection\nt) Peer review\nu) Informal review\nv) Walkthrough",
    "options": [
      {
        "id": "A",
        "text": "s = 4, t = 3, u = 2 and 5, v = 1"
      },
      {
        "id": "B",
        "text": "s = 4 and 5, t = 3, u = 2, v = 1"
      },
      {
        "id": "C",
        "text": "s = 1 and 5, t = 3, u = 2, v = 4"
      },
      {
        "id": "D",
        "text": "s = 5, t = 4, u = 3, v = 1 and 2"
      },
      {
        "id": "E",
        "text": "s = 4 and 5, t = 1, u = 2, v = 3"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nInspection (s) do moderator được đào tạo dẫn dắt và có tiêu chí đầu vào/đầu ra (4, 5); Peer/Technical review (t) không có sự tham gia của quản lý (3); Informal review (u) không cần ghi chép tài liệu (2); Walkthrough (v) do tác giả dẫn dắt (1).",
    "imageUrl": "/images/swt-fe/sp26-fe/q_22.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 22 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q23",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Typical defects discovered by static analysis include:",
    "options": [
      {
        "id": "A",
        "text": "Programming standard violations"
      },
      {
        "id": "B",
        "text": "Referring a variable with an undefined value"
      },
      {
        "id": "C",
        "text": "Security vulnerabilities"
      },
      {
        "id": "D",
        "text": "All of the others"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\nPhân tích tĩnh mã nguồn có thể phát hiện tất cả các loại lỗi điển hình trên: vi phạm chuẩn lập trình, tham chiếu biến chưa định nghĩa giá trị và các lỗ hổng bảo mật.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_23.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 23 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q24",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a Key Characteristic of Walkthrough?",
    "options": [
      {
        "id": "A",
        "text": "Scenario, Dry Run, Peer Group"
      },
      {
        "id": "B",
        "text": "Pre-Meeting Preparations"
      },
      {
        "id": "C",
        "text": "Formal Follow Up Process"
      },
      {
        "id": "D",
        "text": "Includes Metrics"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nTheo ISTQB, các đặc trưng chính của Walkthrough gồm việc sử dụng kịch bản (scenario), chạy thử trên giấy (dry run) và nhóm đồng nghiệp (peer group). Chuẩn bị trước bắt buộc, theo dõi chính thức và thu thập metrics là đặc trưng của Inspection.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_24.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 24 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q25",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which type of review is a formal assessment of a work product conducted by one or more qualified independent reviewers to detect defects?",
    "options": [
      {
        "id": "A",
        "text": "Inspection"
      },
      {
        "id": "B",
        "text": "Walkthrough"
      },
      {
        "id": "C",
        "text": "Review"
      },
      {
        "id": "D",
        "text": "Non-conformance"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nInspection là loại rà soát chính thức nhất (formal assessment), được thực hiện bởi các chuyên gia/người rà soát độc lập có năng lực dựa trên checklist và quy tắc nhằm phát hiện lỗi.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_25.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 25 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q26",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is true about Formal Review or Inspection:\ni) Led by Trained Moderator (not the author)\nii) No Pre-Meeting Preparations\niii) Formal Follow-up process\niv) Main Objective is to find defects",
    "options": [
      {
        "id": "A",
        "text": "ii is true and i, iii, iv are false"
      },
      {
        "id": "B",
        "text": "i, iii, iv are true and ii is false"
      },
      {
        "id": "C",
        "text": "i, iii, iv are false and ii is true"
      },
      {
        "id": "D",
        "text": "iii is true and i, ii, iv are false"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nInspection do moderator được đào tạo (không phải tác giả) dẫn dắt (i), có quy trình follow-up chính thức (iii) và mục tiêu chính là tìm lỗi (iv). Inspection bắt buộc có khâu chuẩn bị trước cuộc họp nên (ii) sai.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_26.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 26 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q27",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Reviewing the test basis is a part of which phase?",
    "options": [
      {
        "id": "A",
        "text": "Test Analysis and Design"
      },
      {
        "id": "B",
        "text": "Test Implementation and Execution"
      },
      {
        "id": "C",
        "text": "Test Closure Activities"
      },
      {
        "id": "D",
        "text": "Evaluating exit criteria and reporting"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nRà soát cơ sở kiểm thử (Reviewing the test basis như tài liệu yêu cầu, kiến trúc, thiết kế) là nhiệm vụ đầu tiên của giai đoạn Phân tích và Thiết kế kiểm thử (Test Analysis and Design).",
    "imageUrl": "/images/swt-fe/sp26-fe/q_27.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 27 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q28",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Features of White Box Testing Technique:\ni. We use explicit knowledge of the internal workings of the item being tested to select the test data.\nii. Uses specific knowledge of programming code to examine outputs and assumes that the tester knows the path of logic in a unit or a program.\niii. Checking for the performance of the application.\niv. Also checks for functionality.",
    "options": [
      {
        "id": "A",
        "text": "i, ii are true and iii and iv are false"
      },
      {
        "id": "B",
        "text": "iii is true and i, ii, iv are false"
      },
      {
        "id": "C",
        "text": "ii, iii are true and i, iv are false"
      },
      {
        "id": "D",
        "text": "iii and iv are true and i, ii are false"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nKiểm thử hộp trắng (White-box testing) dựa vào hiểu biết rõ ràng về cấu trúc bên trong và luồng logic mã nguồn để chọn dữ liệu kiểm thử (i, ii). Kiểm thử hiệu năng (iii) và chức năng (iv) thuộc kiểm thử hộp đen/phi chức năng.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_28.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 28 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q29",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following defects are typically easier to find during reviews than during dynamic testing?",
    "options": [
      {
        "id": "A",
        "text": "Deviations from standards."
      },
      {
        "id": "B",
        "text": "Requirement defects."
      },
      {
        "id": "C",
        "text": "Design defects."
      },
      {
        "id": "D",
        "text": "Insufficient maintainability and incorrect interface specifications."
      },
      {
        "id": "E",
        "text": "All of the others."
      }
    ],
    "correctOptionIds": [
      "E"
    ],
    "explanation": "**Đáp án đúng: E**\nTheo ISTQB, các lỗi sai lệch chuẩn, lỗi yêu cầu, lỗi thiết kế, khả năng bảo trì kém và đặc tả giao diện sai đều dễ phát hiện hơn nhiều trong quá trình review so với kiểm thử động.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_29.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 29 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q30",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Consider the following state transition diagram of a switch. Which of the following represents an invalid state transition? (Pic 4_276)",
    "options": [
      {
        "id": "A",
        "text": "OFF to ON"
      },
      {
        "id": "B",
        "text": "ON to OFF"
      },
      {
        "id": "C",
        "text": "FAULT to ON"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nQuan sát sơ đồ chuyển trạng thái, các chuyển đổi hợp lệ là OFF → ON, ON → OFF, ON → FAULT và FAULT → FAULT. Không có mũi tên nào đi từ FAULT về ON nên \"FAULT to ON\" là chuyển trạng thái không hợp lệ.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_30.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 30 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q31",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Coverage measurement:",
    "options": [
      {
        "id": "A",
        "text": "Is nothing to do with testing"
      },
      {
        "id": "B",
        "text": "Is a partial measure of test thoroughness"
      },
      {
        "id": "C",
        "text": "Branch coverage should be mandatory for all software"
      },
      {
        "id": "D",
        "text": "Can only be applied at unit or module testing, not at system testing"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\nĐo lường độ bao phủ (coverage measurement) chỉ là một thước đo một phần về mức độ kỹ lưỡng của kiểm thử (partial measure of test thoroughness), vì đạt 100% coverage vẫn không đảm bảo phần mềm không còn lỗi.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_31.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 31 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q32",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Stochastic testing using statistical information or operational profiles uses the following method:",
    "options": [
      {
        "id": "A",
        "text": "Heuristic testing approach"
      },
      {
        "id": "B",
        "text": "Methodical testing approach"
      },
      {
        "id": "C",
        "text": "Model-based testing approach"
      },
      {
        "id": "D",
        "text": "Process or standard compliant testing approach"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nTheo ISTQB Foundation Level, kiểm thử ngẫu nhiên dựa trên thông tin thống kê hoặc hồ sơ vận hành (operational profiles) thuộc chiến lược kiểm thử dựa trên mô hình (Model-based testing approach).",
    "imageUrl": "/images/swt-fe/sp26-fe/q_32.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 32 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q33",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Structure is unknown for which type of development project?",
    "options": [
      {
        "id": "A",
        "text": "Traditional system development"
      },
      {
        "id": "B",
        "text": "Iterative development"
      },
      {
        "id": "C",
        "text": "System maintenance"
      },
      {
        "id": "D",
        "text": "Purchased/contracted software"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\nĐối với phần mềm mua sẵn hoặc thuê ngoài (Purchased/contracted software / COTS), bên sử dụng thường không có mã nguồn nên cấu trúc bên trong của phần mềm là không biết trước (chủ yếu áp dụng kiểm thử hộp đen).",
    "imageUrl": "/images/swt-fe/sp26-fe/q_33.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 33 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q34",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Use cases can be performed to test:",
    "options": [
      {
        "id": "A",
        "text": "Performance testing"
      },
      {
        "id": "B",
        "text": "Unit testing"
      },
      {
        "id": "C",
        "text": "Business scenarios"
      },
      {
        "id": "D",
        "text": "Static testing"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\nKiểm thử dựa trên Use Case mô tả tương tác thực tế giữa tác nhân (người dùng/hệ thống) và hệ thống, do đó rất phù hợp để kiểm thử các kịch bản nghiệp vụ (business scenarios) trong kiểm thử hệ thống và chấp nhận.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_34.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 34 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q35",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Error guessing is:",
    "options": [
      {
        "id": "A",
        "text": "An appropriate way of deriving system tests."
      },
      {
        "id": "B",
        "text": "Only used if good requirements are not available."
      },
      {
        "id": "C",
        "text": "Only used when good requirements are available."
      },
      {
        "id": "D",
        "text": "The most appropriate way of deriving system tests."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\nĐoán lỗi (Error guessing) là kỹ thuật dựa trên kinh nghiệm của kiểm thử viên để dự đoán các lỗi dễ xảy ra, là một cách phù hợp để bổ sung các test case ở mức hệ thống (và các mức khác), ngay cả khi đã có tài liệu yêu cầu tốt.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_35.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 35 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q36",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a black box design technique?",
    "options": [
      {
        "id": "A",
        "text": "Statement testing"
      },
      {
        "id": "B",
        "text": "Equivalence partitioning"
      },
      {
        "id": "C",
        "text": "Error-guessing"
      },
      {
        "id": "D",
        "text": "Usability testing"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Equivalence partitioning (phân vùng tương đương) là kỹ thuật thiết kế kiểm thử hộp đen (black-box) điển hình theo ISTQB. Statement testing là hộp trắng, Error-guessing là dựa trên kinh nghiệm, còn Usability testing là loại kiểm thử phi chức năng.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_36.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 36 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q37",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Equivalence testing divides the input domain into classes of data from which test cases can be derived to reduce the total number of test cases that must be developed.",
    "options": [
      {
        "id": "A",
        "text": "True"
      },
      {
        "id": "B",
        "text": "False"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Phân vùng tương đương (Equivalence partitioning) chia miền dữ liệu đầu vào thành các lớp tương đương mà hệ thống xử lý giống nhau, từ đó chỉ cần chọn đại diện để giảm tổng số test case cần thiết kế.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_37.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 37 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q38",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is not included in a Test Plan?",
    "options": [
      {
        "id": "A",
        "text": "Features to be tested"
      },
      {
        "id": "B",
        "text": "Environmental needs."
      },
      {
        "id": "C",
        "text": "Suspension criteria."
      },
      {
        "id": "D",
        "text": "Expected results"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D** — Theo chuẩn IEEE 829 / ISTQB, Test Plan bao gồm các mục như Features to be tested, Environmental needs, Suspension criteria, lịch trình và nguồn lực. Expected results (kết quả mong đợi) thuộc về Test Case Specification, không nằm trong Test Plan.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_38.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 38 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q39",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "From a Testing perspective, what are the MAIN purposes of Configuration Management?\ni) Identifying the version of software under test.\nii) Controlling the version of testware items.\niii) Developing new testware items.\niv) Tracking changes to testware items.\nv) Analysing the need for new testware items.",
    "options": [
      {
        "id": "A",
        "text": "ii, iv and v."
      },
      {
        "id": "B",
        "text": "ii, iii and iv."
      },
      {
        "id": "C",
        "text": "i, ii and iv."
      },
      {
        "id": "D",
        "text": "i, iii and v."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C** — Quản lý cấu hình (Configuration Management) trong kiểm thử nhằm định danh phiên bản phần mềm được kiểm thử (i), kiểm soát phiên bản của các testware (ii) và theo dõi mọi thay đổi đối với testware (iv). Việc phát triển hay phân tích nhu cầu testware mới thuộc hoạt động thiết kế kiểm thử.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_39.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 39 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q40",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is the task of a Test Lead / Leader?\ni. Interaction with the Test Tool Vendor to identify best ways to leverage test tool on the project.\nii. Write Test Summary Reports based on the information gathered during testing.\niii. Decide what should be automated, to what degree and how.\niv. Create the Test Specifications.",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii is true and iv is false"
      },
      {
        "id": "B",
        "text": "ii, iii, iv is true and i is false"
      },
      {
        "id": "C",
        "text": "i is true and ii, iii, iv are false"
      },
      {
        "id": "D",
        "text": "iii and iv is correct and i and ii are incorrect"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Theo ISTQB, Test Leader/Test Manager chịu trách nhiệm làm việc với nhà cung cấp công cụ kiểm thử (i), viết báo cáo tổng kết kiểm thử (ii) và quyết định chiến lược tự động hóa (iii). Tạo Test Specifications (iv) là nhiệm vụ của Tester.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_40.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 40 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q41",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Which of the following is not a characteristic for Testability?",
    "options": [
      {
        "id": "A",
        "text": "Operability"
      },
      {
        "id": "B",
        "text": "Observability"
      },
      {
        "id": "C",
        "text": "Simplicity"
      },
      {
        "id": "D",
        "text": "Robustness"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D** — Các đặc trưng kinh điển của tính dễ kiểm thử (Testability) gồm Operability, Observability, Controllability, Decomposability, Simplicity, Stability và Understandability. Robustness (độ bền vững) không nằm trong danh sách các đặc trưng của Testability.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_41.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 41 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q42",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following tools would you use to detect a memory leak?",
    "options": [
      {
        "id": "A",
        "text": "State analysis"
      },
      {
        "id": "B",
        "text": "Coverage analysis"
      },
      {
        "id": "C",
        "text": "Dynamic analysis"
      },
      {
        "id": "D",
        "text": "Memory analysis"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C** — Theo giáo trình ISTQB, công cụ phân tích động (Dynamic analysis tools) được dùng để phát hiện các lỗi chỉ xuất hiện khi chương trình đang chạy như rò rỉ bộ nhớ (memory leaks), con trỏ chưa khởi tạo hoặc phụ thuộc thời gian.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_42.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 42 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q43",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which activity in the fundamental test process creates test suites for efficient test execution?",
    "options": [
      {
        "id": "A",
        "text": "Implementation and execution."
      },
      {
        "id": "B",
        "text": "Planning and control."
      },
      {
        "id": "C",
        "text": "Analysis and design."
      },
      {
        "id": "D",
        "text": "Test closure."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Trong quy trình kiểm thử cơ bản của ISTQB, việc tạo các test suite từ các test procedure để thực thi kiểm thử hiệu quả thuộc giai đoạn Test Implementation and Execution.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_43.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 43 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q44",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Test Cases grouped into manageable (and scheduled) units are called as:",
    "options": [
      {
        "id": "A",
        "text": "Test Harness"
      },
      {
        "id": "B",
        "text": "Test Suite"
      },
      {
        "id": "C",
        "text": "Test Cycle"
      },
      {
        "id": "D",
        "text": "Test Driver"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Test Suite (bộ kiểm thử) là tập hợp các test case hoặc test script được nhóm lại với nhau thành đơn vị dễ quản lý và lên lịch thực thi.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_44.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 44 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q45",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Impact Analysis helps to decide:",
    "options": [
      {
        "id": "A",
        "text": "How much regression testing should be done."
      },
      {
        "id": "B",
        "text": "Exit Criteria"
      },
      {
        "id": "C",
        "text": "How many more test cases need to be written"
      },
      {
        "id": "D",
        "text": "Different Tools to perform Regression Testing"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Phân tích tác động (Impact Analysis) đánh giá mức độ ảnh hưởng của các thay đổi phần mềm lên các phần khác của hệ thống, từ đó giúp quyết định phạm vi và mức độ kiểm thử hồi quy (regression testing) cần thực hiện.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_45.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 45 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q46",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following helps in monitoring the Test Progress?\ni. Percentage of Test Case Execution\nii. Percentage of work done in test environment preparation.\niii. Defect Information e.g. defect density, defects found and fixed.\niv. The size of the testing Team and skills of the engineers.",
    "options": [
      {
        "id": "A",
        "text": "iv is correct and i, ii, iii are incorrect"
      },
      {
        "id": "B",
        "text": "i, ii, iii are correct and iv is incorrect"
      },
      {
        "id": "C",
        "text": "i, ii are correct and iii, iv are incorrect"
      },
      {
        "id": "D",
        "text": "i, iv are correct and ii, iii are incorrect"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Theo ISTQB, các chỉ số giám sát tiến độ kiểm thử (Test Progress Monitoring) gồm tỷ lệ thực thi test case (i), tiến độ chuẩn bị môi trường kiểm thử (ii) và thông tin lỗi như mật độ lỗi, số lỗi tìm thấy và đã sửa (iii). Quy mô và kỹ năng đội ngũ (iv) là thông tin nguồn lực, không phải chỉ số tiến độ.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_46.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 46 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q47",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Capture and replay facilities are least likely to be used to:",
    "options": [
      {
        "id": "A",
        "text": "Performance testing"
      },
      {
        "id": "B",
        "text": "Recovery testing"
      },
      {
        "id": "C",
        "text": "GUI testing"
      },
      {
        "id": "D",
        "text": "User requirements."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D** — Công cụ Capture and Replay (ghi và phát lại) dùng để tự động hóa thực thi kiểm thử (GUI, hồi quy, hiệu năng, phục hồi), nên ít có khả năng nhất được sử dụng cho việc thu thập hay kiểm tra tài liệu yêu cầu người dùng (User requirements).",
    "imageUrl": "/images/swt-fe/sp26-fe/q_47.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 47 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q48",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Defects discovered by static analysis tools include:\ni. Variables that are never used\nii. Security vulnerabilities\niii. Programming Standard Violations\niv. Uncalled functions and procedures",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv is correct"
      },
      {
        "id": "B",
        "text": "iii is correct, i, ii, iv are incorrect"
      },
      {
        "id": "C",
        "text": "i, ii, iii and iv are incorrect"
      },
      {
        "id": "D",
        "text": "iv, ii is correct"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Công cụ phân tích tĩnh (Static analysis tools) có thể tự động phát hiện tất cả các lỗi trên mà không cần chạy mã nguồn: biến không bao giờ dùng (i), lỗ hổng bảo mật (ii), vi phạm chuẩn lập trình (iii) và hàm/thủ tục không được gọi (iv).",
    "imageUrl": "/images/swt-fe/sp26-fe/q_48.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 48 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q49",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following tools would be involved in the automation of regression test?",
    "options": [
      {
        "id": "A",
        "text": "Data tester"
      },
      {
        "id": "B",
        "text": "Boundary tester"
      },
      {
        "id": "C",
        "text": "Capture/Playback"
      },
      {
        "id": "D",
        "text": "Output comparator."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C** — Công cụ Capture/Playback (ghi lại thao tác và phát lại kịch bản) là công cụ phổ biến được dùng để tự động hóa việc chạy lại các bài kiểm thử hồi quy (regression testing).",
    "imageUrl": "/images/swt-fe/sp26-fe/q_49.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 49 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q50",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which type of tool stores requirement statements, checks for consistency, allows requirements to be prioritized, and enables individual tests to be traceable to requirements, functions, and features?",
    "options": [
      {
        "id": "A",
        "text": "Incident management tools"
      },
      {
        "id": "B",
        "text": "Requirements management tools"
      },
      {
        "id": "C",
        "text": "Configuration management tools"
      },
      {
        "id": "D",
        "text": "None of the others"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Công cụ quản lý yêu cầu (Requirements management tools) lưu trữ các phát biểu yêu cầu, kiểm tra tính nhất quán, hỗ trợ sắp xếp độ ưu tiên và truy xuất nguồn gốc (traceability) giữa yêu cầu với các test case.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_50.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 50 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q51",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following activities should be performed during the selection and implementation of a testing tool?\ni) Investigate the organisation's test process.\nii) Conduct a proof of concept.\niii) Implement the selected tool on a project behind schedule to save time.\niv) Identify coaching and mentoring requirements for the use of the selected tool.",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii."
      },
      {
        "id": "B",
        "text": "ii, iii, iv."
      },
      {
        "id": "C",
        "text": "i, iii, iv."
      },
      {
        "id": "D",
        "text": "i, ii, iv."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D** — Khi lựa chọn và triển khai công cụ kiểm thử, cần khảo sát quy trình kiểm thử của tổ chức (i), thực hiện proof of concept (ii) và xác định nhu cầu đào tạo/hướng dẫn (iv). Không bao giờ triển khai thí điểm công cụ mới trên một dự án đang trễ tiến độ (iii sai).",
    "imageUrl": "/images/swt-fe/sp26-fe/q_51.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 51 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q52",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "A tool that supports traceability, recording of incidents or scheduling of tests is called:",
    "options": [
      {
        "id": "A",
        "text": "A dynamic analysis tool"
      },
      {
        "id": "B",
        "text": "A test execution tool"
      },
      {
        "id": "C",
        "text": "A debugging tool"
      },
      {
        "id": "D",
        "text": "A test management tool"
      },
      {
        "id": "E",
        "text": "A configuration management tool"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D** — Công cụ quản lý kiểm thử (Test management tool) hỗ trợ quản lý hoạt động kiểm thử, bao gồm lập lịch kiểm thử, ghi nhận sự cố/lỗi và quản lý truy xuất nguồn gốc (traceability).",
    "imageUrl": "/images/swt-fe/sp26-fe/q_52.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 52 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q53",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What type of tools to be used for Regression Testing?",
    "options": [
      {
        "id": "A",
        "text": "(1) Performance"
      },
      {
        "id": "B",
        "text": "(2) Record/Playback"
      },
      {
        "id": "C",
        "text": "Both of (1) and (2)"
      },
      {
        "id": "D",
        "text": "None of (1) nor (2)"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Công cụ Record/Playback giúp ghi lại các kịch bản kiểm thử và phát lại tự động sau mỗi lần sửa đổi mã nguồn, rất phù hợp cho kiểm thử hồi quy (Regression Testing).",
    "imageUrl": "/images/swt-fe/sp26-fe/q_53.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 53 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q54",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Unreachable code would best be found using:",
    "options": [
      {
        "id": "A",
        "text": "Code reviews"
      },
      {
        "id": "B",
        "text": "Code inspections"
      },
      {
        "id": "C",
        "text": "A coverage tool"
      },
      {
        "id": "D",
        "text": "A test management tool"
      },
      {
        "id": "E",
        "text": "A static analysis tool"
      }
    ],
    "correctOptionIds": [
      "E"
    ],
    "explanation": "**Đáp án đúng: E** — Công cụ phân tích tĩnh (Static analysis tool) phân tích luồng điều khiển (control flow) của mã nguồn mà không cần chạy chương trình, giúp phát hiện chính xác và nhanh nhất các đoạn mã không thể chạm tới (unreachable/dead code).",
    "imageUrl": "/images/swt-fe/sp26-fe/q_54.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 54 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q55",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which tool will be used to test and flag memory leaks and unassigned pointers?",
    "options": [
      {
        "id": "A",
        "text": "Dynamic analysis tool"
      },
      {
        "id": "B",
        "text": "Static Analysis tool."
      },
      {
        "id": "C",
        "text": "Maintenance tool."
      },
      {
        "id": "D",
        "text": "Configuration tool."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Công cụ phân tích động (Dynamic analysis tool) theo dõi phần mềm trong quá trình thực thi để phát hiện các lỗi thời gian chạy như rò rỉ bộ nhớ (memory leaks) và con trỏ chưa được gán (unassigned pointers).",
    "imageUrl": "/images/swt-fe/sp26-fe/q_55.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 55 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q56",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which is not true — The black box tester:",
    "options": [
      {
        "id": "A",
        "text": "Should be able to understand a functional specification or requirements document"
      },
      {
        "id": "B",
        "text": "Should be able to understand the source code."
      },
      {
        "id": "C",
        "text": "Is highly motivated to find faults"
      },
      {
        "id": "D",
        "text": "Is creative to find the system's weaknesses"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Kiểm thử hộp đen (black-box testing) dựa trên đặc tả chức năng và yêu cầu đầu vào/đầu ra, không yêu cầu kiểm thử viên phải đọc hay hiểu mã nguồn bên trong (source code).",
    "imageUrl": "/images/swt-fe/sp26-fe/q_56.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 56 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q57",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which rule should not be followed for reviews?",
    "options": [
      {
        "id": "A",
        "text": "Defects and issues are identified and corrected"
      },
      {
        "id": "B",
        "text": "The product is reviewed, not the producer"
      },
      {
        "id": "C",
        "text": "All members of the reviewing team are responsible for the result of the review"
      },
      {
        "id": "D",
        "text": "Each review has a clear predefined objective"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Trong buổi review, mục tiêu là phát hiện và ghi nhận lỗi (identify and log defects), chứ không trực tiếp sửa lỗi ngay trong buổi họp review; việc sửa lỗi sẽ do tác giả thực hiện sau đó.",
    "imageUrl": "/images/swt-fe/sp26-fe/q_57.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 57 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q58",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Where may functional testing be performed?",
    "options": [
      {
        "id": "A",
        "text": "At system and acceptance testing levels only."
      },
      {
        "id": "B",
        "text": "At all test levels."
      },
      {
        "id": "C",
        "text": "At all levels above integration testing"
      },
      {
        "id": "D",
        "text": "At the acceptance testing level only."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Theo ISTQB, kiểm thử chức năng (functional testing) có thể được thực hiện ở tất cả các cấp độ kiểm thử (Component, Integration, System và Acceptance testing).",
    "imageUrl": "/images/swt-fe/sp26-fe/q_58.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 58 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q59",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Who are the persons involved in a Formal Review?\ni) Manager\nii) Moderator\niii) Scribe / Recorder\niv) Assistant Manager",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv are true"
      },
      {
        "id": "B",
        "text": "i, ii, iii are true and iv is false."
      },
      {
        "id": "C",
        "text": "ii, iii, iv are true and i is false"
      },
      {
        "id": "D",
        "text": "i, iv are true and ii, iii are false."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Các vai trò chính thức trong Formal Review theo ISTQB gồm Manager (i), Moderator (ii), Author, Reviewers và Scribe/Recorder (iii). Không có vai trò Assistant Manager (iv).",
    "imageUrl": "/images/swt-fe/sp26-fe/q_59.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 59 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-08-q60",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-sp26",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a MAJOR task of test planning?",
    "options": [
      {
        "id": "A",
        "text": "Scheduling test analysis and design tasks."
      },
      {
        "id": "B",
        "text": "Initiating corrective actions"
      },
      {
        "id": "C",
        "text": "Monitoring progress and test coverage."
      },
      {
        "id": "D",
        "text": "Measuring and analyzing results."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Lập lịch cho các hoạt động phân tích và thiết kế kiểm thử (Scheduling test analysis and design tasks) là nhiệm vụ chính của lập kế hoạch kiểm thử (Test Planning). Các phương án B, C, D thuộc về giám sát và kiểm soát kiểm thử (Test Monitoring and Control).",
    "imageUrl": "/images/swt-fe/sp26-fe/q_60.webp",
    "imageCaption": "Đề 08: Kì Sprin — Câu 60 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q01",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "When we test or review a product, what are we looking for?",
    "options": [
      {
        "id": "A",
        "text": "We are looking for errors and fixing them."
      },
      {
        "id": "B",
        "text": "We are looking for defects in the product and thus are critical of it."
      },
      {
        "id": "C",
        "text": "We are looking for differences between the system and the requirement."
      },
      {
        "id": "D",
        "text": "We are looking for the mistakes of the requirement."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Theo phần Tâm lý học kiểm thử (Psychology of Testing) trong ISTQB, khi kiểm thử hoặc rà soát một sản phẩm, chúng ta tìm kiếm khiếm khuyết (defects) trong sản phẩm và do đó có góc nhìn phản biện đối với nó.",
    "imageUrl": "/images/swt-fe/su25-fe/q_01.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 1 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q02",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What does the term 'failure' mean in the context of testing?",
    "options": [
      {
        "id": "A",
        "text": "A mistake made by a developer."
      },
      {
        "id": "B",
        "text": "A defect in the software that is found during testing."
      },
      {
        "id": "C",
        "text": "An incorrect behavior of the system in operation."
      },
      {
        "id": "D",
        "text": "A missed requirement during design."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C** — Trong ISTQB, Failure (sự cố/hỏng hóc) là hành vi sai lệch của hệ thống khi vận hành so với kết quả mong đợi. Sai sót của con người là Error (A), còn khiếm khuyết trong mã nguồn là Defect (B).",
    "imageUrl": "/images/swt-fe/su25-fe/q_02.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 2 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q03",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Independent testing - who is a tester? Choose the incorrect sentence:",
    "options": [
      {
        "id": "A",
        "text": "Tests by the person who wrote the item under test."
      },
      {
        "id": "B",
        "text": "Tests by a person from a different organizational group, such as an independent test team."
      },
      {
        "id": "C",
        "text": "Tests by another person within the same team, such as another programmer."
      },
      {
        "id": "D",
        "text": "Tests by the person who wrote the source code."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D** — Trong các mức độ kiểm thử độc lập của ISTQB/FPT, A, B và C là các phát biểu chuẩn theo giáo trình (từ mức độc lập thấp nhất đến nhóm kiểm thử độc lập), còn D là phương án sai/nhiễu không thuộc danh sách mô tả chuẩn.",
    "imageUrl": "/images/swt-fe/su25-fe/q_03.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 3 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q04",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the significance of context in testing according to the principles?",
    "options": [
      {
        "id": "A",
        "text": "It is irrelevant since all testing follows the same standard."
      },
      {
        "id": "B",
        "text": "It is critical as testing approaches should vary based on the specific context."
      },
      {
        "id": "C",
        "text": "It suggests that testing should always follow the same international standards."
      },
      {
        "id": "D",
        "text": "Context is only important in large, complex systems."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Theo nguyên lý 'Testing is context dependent' của ISTQB, bối cảnh rất quan trọng vì cách tiếp cận kiểm thử phải thay đổi linh hoạt theo từng loại phần mềm (ví dụ phần mềm an toàn tính mạng khác với trang thương mại điện tử).",
    "imageUrl": "/images/swt-fe/su25-fe/q_04.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 4 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q05",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Find the explanation of \"Testing shows presence of defects\"",
    "options": [
      {
        "id": "A",
        "text": "Testing can show that defects are present, but cannot prove that there are no defects. Testing reduces the probability of undiscovered defects remaining in the software but, even if no defects are found, it is not a proof of correctness."
      },
      {
        "id": "B",
        "text": "Testing activities should start as early as possible in the software or system development life cycle and should be focused on defined objectives."
      },
      {
        "id": "C",
        "text": "Finding and fixing defects does not help if the system built is unusable and does not fulfill the users' needs and expectations."
      },
      {
        "id": "D",
        "text": "Testing is done differently in different contexts. For example, safety-critical software is tested differently from an e-commerce site."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Nguyên lý 1 của ISTQB khẳng định kiểm thử chỉ có thể chứng minh sự tồn tại của lỗi chứ không thể chứng minh phần mềm hoàn toàn không có lỗi; ngay cả khi không tìm thấy lỗi nào cũng không phải là bằng chứng về tính đúng đắn tuyệt đối.",
    "imageUrl": "/images/swt-fe/su25-fe/q_05.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 5 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q06",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What types of defects are typically found more effectively during static testing than dynamic testing?",
    "options": [
      {
        "id": "A",
        "text": "Performance-related defects"
      },
      {
        "id": "B",
        "text": "Defects in user interface design"
      },
      {
        "id": "C",
        "text": "Missing requirements or design defects"
      },
      {
        "id": "D",
        "text": "Runtime errors and exceptions"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C** — Kiểm thử tĩnh (review tài liệu, phân tích tĩnh) phát hiện rất hiệu quả các lỗi thiếu yêu cầu (missing requirements) hoặc lỗi thiết kế ngay từ sớm trước khi viết code, trong khi hiệu năng và lỗi runtime chỉ thấy khi chạy kiểm thử động.",
    "imageUrl": "/images/swt-fe/su25-fe/q_06.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 6 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q07",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is a key reason that software testing is necessary?",
    "options": [
      {
        "id": "A",
        "text": "To increase software complexity"
      },
      {
        "id": "B",
        "text": "To identify defects in software"
      },
      {
        "id": "C",
        "text": "To reduce software features"
      },
      {
        "id": "D",
        "text": "To speed up software development"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Một trong những lý do cốt lõi khiến kiểm thử phần mềm cần thiết là phát hiện các khiếm khuyết (defects) trong phần mềm trước khi phát hành nhằm giảm thiểu rủi ro và nâng cao chất lượng.",
    "imageUrl": "/images/swt-fe/su25-fe/q_07.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 7 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q08",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "How much testing is enough?",
    "options": [
      {
        "id": "A",
        "text": "Exhaustive testing is possible."
      },
      {
        "id": "B",
        "text": "Testing everything (all combinations of inputs and preconditions)."
      },
      {
        "id": "C",
        "text": "We use risks and priorities to focus testing efforts."
      },
      {
        "id": "D",
        "text": "Full testing."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C** — Vì kiểm thử vét cạn (exhaustive testing) là bất khả thi trong thực tế, ta phải dựa vào đánh giá rủi ro (risks) và độ ưu tiên (priorities) để phân bổ nỗ lực kiểm thử hợp lý.",
    "imageUrl": "/images/swt-fe/su25-fe/q_08.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 8 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q09",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is an effect of poor communication between testers and developers?",
    "options": [
      {
        "id": "A",
        "text": "It enhances the efficiency of the development and testing processes."
      },
      {
        "id": "B",
        "text": "It may lead to misunderstandings and reduced software quality."
      },
      {
        "id": "C",
        "text": "It improves the independence of the testing function."
      },
      {
        "id": "D",
        "text": "It has no effect as long as testing is done independently."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Giao tiếp kém giữa tester và developer dễ gây hiểu nhầm, xung đột, bỏ sót thông tin lỗi và trực tiếp làm giảm chất lượng phần mềm cũng như hiệu quả dự án.",
    "imageUrl": "/images/swt-fe/su25-fe/q_09.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 9 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q10",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "Which of the following strategies can help minimize psychological conflict between testers and developers? (Select all that apply / Choose 3 answers)",
    "options": [
      {
        "id": "A",
        "text": "Fostering mutual respect between roles."
      },
      {
        "id": "B",
        "text": "Ensuring clear objectives for testing."
      },
      {
        "id": "C",
        "text": "Feedback belittles the coder with errors found."
      },
      {
        "id": "D",
        "text": "Encouraging collaboration on defect resolution."
      }
    ],
    "correctOptionIds": [
      "A",
      "B",
      "D"
    ],
    "explanation": "**Đáp án đúng: A, B, D** — Để giảm xung đột tâm lý giữa tester và developer, cần xây dựng sự tôn trọng lẫn nhau (A), làm rõ mục tiêu kiểm thử chung (B) và khuyến khích hợp tác khi xử lý lỗi (D). Phương án C (phản hồi mang tính hạ thấp lập trình viên) làm tăng xung đột.",
    "imageUrl": "/images/swt-fe/su25-fe/q_10.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 10 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q11",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What should integration testing primarily focus on?",
    "options": [
      {
        "id": "A",
        "text": "Testing the database and data processing"
      },
      {
        "id": "B",
        "text": "Ensuring that software modules work together"
      },
      {
        "id": "C",
        "text": "Checking that the system is ready for live deployment"
      },
      {
        "id": "D",
        "text": "Evaluating user satisfaction with the product"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Kiểm thử tích hợp (Integration testing) tập trung chủ yếu vào giao diện và sự tương tác giữa các mô-đun/thành phần để đảm bảo chúng hoạt động phối hợp đúng với nhau.",
    "imageUrl": "/images/swt-fe/su25-fe/q_11.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 11 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q12",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "How does stress testing differ from load testing?",
    "options": [
      {
        "id": "A",
        "text": "Stress testing examines system performance under peak loads, while load testing focuses on typical conditions"
      },
      {
        "id": "B",
        "text": "Stress testing is concerned with usability under stress, while load testing measures performance thresholds"
      },
      {
        "id": "C",
        "text": "Stress testing evaluates system behavior beyond normal operational capacity, while load testing verifies normal usage conditions"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C** — Stress testing kiểm tra hành vi của hệ thống khi vượt quá công suất vận hành bình thường (quá tải/điểm giới hạn), trong khi Load testing đánh giá hệ thống dưới mức tải sử dụng bình thường và dự kiến.",
    "imageUrl": "/images/swt-fe/su25-fe/q_12.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 12 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q13",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the main advantage of using the V-model in software development?",
    "options": [
      {
        "id": "A",
        "text": "It eliminates the need for testing."
      },
      {
        "id": "B",
        "text": "It integrates testing throughout the development phases"
      },
      {
        "id": "C",
        "text": "It is less costly and time-consuming compared to other models."
      },
      {
        "id": "D",
        "text": "It focuses on post-development testing only."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Ưu điểm chính của mô hình chữ V (V-model) là tích hợp kiểm thử xuyên suốt các giai đoạn phát triển, trong đó mỗi giai đoạn phát triển đều có một cấp độ kiểm thử tương ứng được lập kế hoạch từ sớm.",
    "imageUrl": "/images/swt-fe/su25-fe/q_13.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 13 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q14",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the purpose of unit testing in software development?",
    "options": [
      {
        "id": "A",
        "text": "To test the entire system as a whole"
      },
      {
        "id": "B",
        "text": "To test individual units or components in isolation"
      },
      {
        "id": "C",
        "text": "To validate the software against user requirements"
      },
      {
        "id": "D",
        "text": "To perform performance testing"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Kiểm thử đơn vị (Unit/Component testing) nhằm kiểm tra từng đơn vị hoặc thành phần phần mềm riêng lẻ một cách độc lập để phát hiện lỗi sớm trong mã nguồn.",
    "imageUrl": "/images/swt-fe/su25-fe/q_14.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 14 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q15",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is a characteristic of non-functional testing?",
    "options": [
      {
        "id": "A",
        "text": "It is always performed after functional testing."
      },
      {
        "id": "B",
        "text": "It focuses on how well the system performs certain actions."
      },
      {
        "id": "C",
        "text": "It is concerned solely with what the system does"
      },
      {
        "id": "D",
        "text": "It does not include performance testing."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Kiểm thử phi chức năng (Non-functional testing) tập trung vào việc hệ thống hoạt động tốt đến mức nào ('how well' — như hiệu năng, bảo mật, độ tin cậy, tính khả dụng), khác với kiểm thử chức năng tập trung vào hệ thống làm gì ('what').",
    "imageUrl": "/images/swt-fe/su25-fe/q_15.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 15 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q16",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is not a test type?",
    "options": [
      {
        "id": "A",
        "text": "Structural testing"
      },
      {
        "id": "B",
        "text": "Functional testing"
      },
      {
        "id": "C",
        "text": "Non-functional testing"
      },
      {
        "id": "D",
        "text": "Performance testing"
      },
      {
        "id": "E",
        "text": "Change-related testing"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D** — Theo ISTQB, 4 loại kiểm thử (test types) chính là Functional, Non-functional, Structural (White-box) và Change-related testing. Performance testing chỉ là một nhánh con nằm trong Non-functional testing.",
    "imageUrl": "/images/swt-fe/su25-fe/q_16.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 16 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q17",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the role of performance testing in system testing?",
    "options": [
      {
        "id": "A",
        "text": "To verify that the system behaves correctly under load"
      },
      {
        "id": "B",
        "text": "To ensure that the system meets functional requirements"
      },
      {
        "id": "C",
        "text": "To check the accuracy of data processing"
      },
      {
        "id": "D",
        "text": "To confirm that the system is bug-free"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Trong kiểm thử hệ thống (system testing), kiểm thử hiệu năng (performance testing) có vai trò xác minh hệ thống hoạt động ổn định, đáp ứng thời gian phản hồi và thông lượng yêu cầu khi chịu tải.",
    "imageUrl": "/images/swt-fe/su25-fe/q_17.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 17 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q18",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What does the term \"Big-bang model\" imply about the approach to software development?",
    "options": [
      {
        "id": "A",
        "text": "Detailed and extensive planning"
      },
      {
        "id": "B",
        "text": "Integration of all components at once without prior testing"
      },
      {
        "id": "C",
        "text": "Regular testing from the beginning of the project"
      },
      {
        "id": "D",
        "text": "User involvement is mandatory"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Cách tiếp cận Big-bang tích hợp tất cả các thành phần cùng một lúc rồi mới tiến hành kiểm thử tổng thể, ít lập kế hoạch chi tiết và khó cô lập nguyên nhân khi phát sinh lỗi.",
    "imageUrl": "/images/swt-fe/su25-fe/q_18.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 18 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q19",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the typical sequence of testing activities in the Waterfall model?",
    "options": [
      {
        "id": "A",
        "text": "System testing, integration testing, acceptance testing"
      },
      {
        "id": "B",
        "text": "Acceptance testing, system testing, integration testing"
      },
      {
        "id": "C",
        "text": "Integration testing, system testing, acceptance testing"
      },
      {
        "id": "D",
        "text": "Component testing, system testing, integration testing"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C** — Trình tự chuẩn các cấp độ kiểm thử tuần tự từ thấp đến cao là Component testing → Integration testing → System testing → Acceptance testing.",
    "imageUrl": "/images/swt-fe/su25-fe/q_19.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 19 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q20",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "In which testing level would you test for defects in the interfaces and interaction between integrated components?",
    "options": [
      {
        "id": "A",
        "text": "Component testing"
      },
      {
        "id": "B",
        "text": "Integration testing"
      },
      {
        "id": "C",
        "text": "System testing"
      },
      {
        "id": "D",
        "text": "Acceptance testing"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Kiểm thử tích hợp (Integration testing) có mục tiêu chính là phát hiện lỗi trong các giao diện (interfaces) và sự tương tác giữa các thành phần hoặc hệ thống được tích hợp với nhau.",
    "imageUrl": "/images/swt-fe/su25-fe/q_20.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 20 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q21",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is dynamic testing?",
    "options": [
      {
        "id": "A",
        "text": "Software work products are examined manually, or with a set of tools, but not executed."
      },
      {
        "id": "B",
        "text": "Software is executed using a set of input values and its output is then examined and compared to what is expected"
      },
      {
        "id": "C",
        "text": "Testing can start early in the life cycle, early feedback on quality issues can be established."
      },
      {
        "id": "D",
        "text": "Testing can start early validation of user requirements and not just late in the life cycle during acceptance testing."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Kiểm thử động (Dynamic testing) yêu cầu thực thi phần mềm với tập dữ liệu đầu vào, sau đó kiểm tra và so sánh kết quả đầu ra thực tế với kết quả mong đợi. Phương án A là định nghĩa của kiểm thử tĩnh.",
    "imageUrl": "/images/swt-fe/su25-fe/q_21.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 21 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q22",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Why are rules and checklists used during inspections?",
    "options": [
      {
        "id": "A",
        "text": "To reduce the time spent on discussions"
      },
      {
        "id": "B",
        "text": "To ensure consistency and thoroughness in defect identification"
      },
      {
        "id": "C",
        "text": "To allow participants to avoid preparation"
      },
      {
        "id": "D",
        "text": "To document defects for legal compliance"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Quy tắc (rules) và danh sách kiểm tra (checklists) trong Inspection giúp các reviewer rà soát một cách nhất quán, có hệ thống và toàn diện để không bỏ sót các loại lỗi phổ biến.",
    "imageUrl": "/images/swt-fe/su25-fe/q_22.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 22 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q23",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is most likely to be performed by developers?",
    "options": [
      {
        "id": "A",
        "text": "Technical review of a functional specification."
      },
      {
        "id": "B",
        "text": "Walkthrough of a requirements document."
      },
      {
        "id": "C",
        "text": "Informal review of a program specification."
      },
      {
        "id": "D",
        "text": "Static analysis of a software model."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D** — Theo ISTQB, phân tích tĩnh (Static analysis) đối với mã nguồn hoặc mô hình phần mềm (software model) thường do lập trình viên (developers) thực hiện trong quá trình phát triển.",
    "imageUrl": "/images/swt-fe/su25-fe/q_23.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 23 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q24",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is a primary difference between static and dynamic testing techniques?",
    "options": [
      {
        "id": "A",
        "text": "Static testing involves executing the code, while dynamic does not"
      },
      {
        "id": "B",
        "text": "Static testing does not involve executing the code, while dynamic does"
      },
      {
        "id": "C",
        "text": "Static testing is only performed by developers, while dynamic is not"
      },
      {
        "id": "D",
        "text": "Static testing cannot find defects, while dynamic can"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Sự khác biệt cốt lõi giữa hai kỹ thuật là kiểm thử tĩnh (static testing) kiểm tra tài liệu hoặc mã nguồn mà không thực thi chương trình, còn kiểm thử động (dynamic testing) bắt buộc phải chạy mã nguồn.",
    "imageUrl": "/images/swt-fe/su25-fe/q_24.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 24 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q25",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What types of defects are typically found more effectively during static testing than dynamic testing?",
    "options": [
      {
        "id": "A",
        "text": "Performance-related defects"
      },
      {
        "id": "B",
        "text": "Defects in user interface design"
      },
      {
        "id": "C",
        "text": "Runtime errors and exceptions"
      },
      {
        "id": "D",
        "text": "Missing requirements or design defects"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D** — Kiểm thử tĩnh (như review đặc tả yêu cầu và thiết kế) giúp phát hiện sớm và hiệu quả các lỗi thiếu yêu cầu hoặc lỗi thiết kế, trong khi lỗi hiệu năng và lỗi runtime cần kiểm thử động để phát hiện.",
    "imageUrl": "/images/swt-fe/su25-fe/q_25.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 25 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q26",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "How do reviews support software quality assurance?",
    "options": [
      {
        "id": "A",
        "text": "By focusing solely on end-user needs"
      },
      {
        "id": "B",
        "text": "By providing a way to check compliance with standards"
      },
      {
        "id": "C",
        "text": "By testing software functionality through execution"
      },
      {
        "id": "D",
        "text": "By replacing the need for project management"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Hoạt động review hỗ trợ đảm bảo chất lượng phần mềm (QA) bằng cách kiểm tra mức độ tuân thủ quy chuẩn, tiêu chuẩn kỹ thuật và phát hiện sớm khiếm khuyết trên các sản phẩm công việc.",
    "imageUrl": "/images/swt-fe/su25-fe/q_26.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 26 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q27",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "How do technical reviews differ from informal reviews?",
    "options": [
      {
        "id": "A",
        "text": "Technical reviews are less structured and more ad-hoc"
      },
      {
        "id": "B",
        "text": "Technical reviews require the presence of software architects"
      },
      {
        "id": "C",
        "text": "Technical reviews are led by a trained moderator and follow a defined process"
      },
      {
        "id": "D",
        "text": "Informal reviews do not involve developers"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C** — Khác với Informal review mang tính tự phát và không có quy trình chính thức, Technical review được điều phối bởi một moderator đã qua đào tạo và tuân theo quy trình được định nghĩa rõ ràng.",
    "imageUrl": "/images/swt-fe/su25-fe/q_27.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 27 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q28",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following are the main activities of the work product review process?\n1. Planning\n2. Initiate review\n3. Select reviewers\n4. Individual review\n5. Review meeting\n6. Evaluating review findings against exit criteria\n7. Issue communication and analysis\n8. Fixing and reporting",
    "options": [
      {
        "id": "A",
        "text": "1,2,4,7,8"
      },
      {
        "id": "B",
        "text": "2,3,4,5,8"
      },
      {
        "id": "C",
        "text": "1,2,3,5,7"
      },
      {
        "id": "D",
        "text": "1,4,5,6,7"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Theo ISTQB Foundation Syllabus 2018 (Mục 3.2.1), 5 hoạt động chính của quy trình rà soát sản phẩm công việc (work product review process) gồm: (1) Planning, (2) Initiate review, (4) Individual review, (7) Issue communication and analysis, và (8) Fixing and reporting.",
    "imageUrl": "/images/swt-fe/su25-fe/q_28.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 28 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q29",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is a key feature of static analysis tools?",
    "options": [
      {
        "id": "A",
        "text": "Executing the code"
      },
      {
        "id": "B",
        "text": "Checking coding standards"
      },
      {
        "id": "C",
        "text": "Testing system performance"
      },
      {
        "id": "D",
        "text": "Automating user feedback"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Tính năng chính của công cụ phân tích tĩnh (Static analysis tools) là kiểm tra việc tuân thủ chuẩn lập trình (coding standards), tính toán độ phức tạp mã nguồn và tìm lỗi cú pháp/luồng dữ liệu mà không cần chạy code.",
    "imageUrl": "/images/swt-fe/su25-fe/q_29.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 29 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q30",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is static testing?",
    "options": [
      {
        "id": "A",
        "text": "Software work products are examined manually, or with a set of tools, but not executed."
      },
      {
        "id": "B",
        "text": "Software is executed using a set of input values and its output is then examined and compared to what is expected"
      },
      {
        "id": "C",
        "text": "Execution is applied as a technique to detect defects and to determine quality attributes of the code"
      },
      {
        "id": "D",
        "text": "Testing can start after dynamic testing."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Kiểm thử tĩnh (Static testing) là việc kiểm tra các sản phẩm công việc phần mềm (tài liệu, mã nguồn) bằng cách rà soát thủ công (reviews) hoặc dùng công cụ phân tích tĩnh mà không thực thi chương trình.",
    "imageUrl": "/images/swt-fe/su25-fe/q_30.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 30 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q31",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the main purpose of specification-based testing techniques?",
    "options": [
      {
        "id": "A",
        "text": "To evaluate the system's behavior from an external perspective"
      },
      {
        "id": "B",
        "text": "To assess the internal structure of the software"
      },
      {
        "id": "C",
        "text": "To improve the software design"
      },
      {
        "id": "D",
        "text": "To test the software without any formal requirements"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Kỹ thuật kiểm thử dựa trên đặc tả (Specification-based / Black-box testing) nhằm đánh giá hành vi của hệ thống từ góc độ bên ngoài dựa trên tài liệu yêu cầu và đặc tả, không cần biết cấu trúc mã nguồn bên trong.",
    "imageUrl": "/images/swt-fe/su25-fe/q_31.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 31 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q32",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Why is decision coverage important in white-box testing?",
    "options": [
      {
        "id": "A",
        "text": "It measures the software's performance metrics"
      },
      {
        "id": "B",
        "text": "It verifies the compatibility of new code with existing systems"
      },
      {
        "id": "C",
        "text": "It focuses on the user interface aspects of the software"
      },
      {
        "id": "D",
        "text": "It guarantees that all branches in decision points are executed"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D** — Độ phủ quyết định (Decision coverage) trong kiểm thử hộp trắng rất quan trọng vì 100% độ phủ quyết định đảm bảo mọi nhánh (cả đúng và sai) tại các điểm rẽ nhánh trong mã nguồn đều được thực thi ít nhất một lần.",
    "imageUrl": "/images/swt-fe/su25-fe/q_32.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 32 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q33",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which scenario is ideal for using exploratory testing?",
    "options": [
      {
        "id": "A",
        "text": "When there is limited time and no detailed specifications"
      },
      {
        "id": "B",
        "text": "When detailed specifications are available"
      },
      {
        "id": "C",
        "text": "When the software is fully stable"
      },
      {
        "id": "D",
        "text": "When testing under controlled and stable conditions"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Theo ISTQB, kiểm thử thăm dò (Exploratory testing) đặc biệt hữu ích khi tài liệu đặc tả thiếu hoặc không đầy đủ và áp lực thời gian lớn.",
    "imageUrl": "/images/swt-fe/su25-fe/q_33.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 33 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q34",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "For the password field (8-12 alphanumeric characters), which of the following is a valid boundary value?",
    "options": [
      {
        "id": "A",
        "text": "7 characters"
      },
      {
        "id": "B",
        "text": "8 characters"
      },
      {
        "id": "C",
        "text": "13 characters"
      },
      {
        "id": "D",
        "text": "10 characters"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Với miền hợp lệ từ 8 đến 12 ký tự, hai giá trị biên hợp lệ (valid boundary values) là 8 và 12. Các giá trị 7 và 13 là biên không hợp lệ, còn 10 là giá trị nằm giữa phân vùng hợp lệ chứ không phải giá trị biên.",
    "imageUrl": "/images/swt-fe/su25-fe/q_34.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 34 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q35",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which white box technique has the main goal of ensuring that each one of the possible branches from each decision point is executed at least once?",
    "options": [
      {
        "id": "A",
        "text": "Basis path testing coverage"
      },
      {
        "id": "B",
        "text": "Statement coverage testing"
      },
      {
        "id": "C",
        "text": "Branch coverage testing"
      },
      {
        "id": "D",
        "text": "Condition coverage testing"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C** — Branch coverage testing (kiểm thử độ phủ nhánh) có mục tiêu chính là đảm bảo mỗi nhánh có thể đi ra từ từng điểm quyết định được thực thi ít nhất một lần.",
    "imageUrl": "/images/swt-fe/su25-fe/q_35.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 35 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q36",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which type of test design technique is based on the tester's skills, intuition, and experience in testing?",
    "options": [
      {
        "id": "A",
        "text": "Black-box testing"
      },
      {
        "id": "B",
        "text": "White-box testing"
      },
      {
        "id": "C",
        "text": "Experience-based testing"
      },
      {
        "id": "D",
        "text": "Specification-based testing"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C** — Kỹ thuật kiểm thử dựa trên kinh nghiệm (Experience-based testing, như Error guessing, Exploratory testing, Checklist-based testing) dựa trực tiếp vào kỹ năng, trực giác và kinh nghiệm của kiểm thử viên.",
    "imageUrl": "/images/swt-fe/su25-fe/q_36.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 36 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q37",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Given the following pseudo-code, which is true about the minimum number of test cases required for full statement and branch coverage:\nRead A\nRead B\nIF A-B > 50 THEN\n    Print \"Sum A and B\"\n    IF B > 10 THEN\n        Print \"B is greater than 10\"\n    ENDIF\nENDIF",
    "options": [
      {
        "id": "A",
        "text": "1 test case for statement coverage, 2 for branch coverage"
      },
      {
        "id": "B",
        "text": "1 test case for statement coverage, 3 for branch coverage"
      },
      {
        "id": "C",
        "text": "2 test cases for statement coverage, 2 for branch coverage"
      },
      {
        "id": "D",
        "text": "2 test cases for statement coverage, 3 for branch coverage"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Để đạt 100% statement coverage chỉ cần 1 test case thỏa cả hai điều kiện IF (ví dụ A=80, B=20). Để đạt 100% branch coverage cho 2 lệnh IF lồng nhau (không có ELSE), cần tối thiểu 3 test case: (1) IF ngoài True & IF trong True, (2) IF ngoài True & IF trong False, và (3) IF ngoài False.",
    "imageUrl": "/images/swt-fe/su25-fe/q_37.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 37 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q38",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is the main purpose of use case testing?",
    "options": [
      {
        "id": "A",
        "text": "To identify defects in process flows related to typical use of the system."
      },
      {
        "id": "B",
        "text": "To identify defects in the connections between components."
      },
      {
        "id": "C",
        "text": "To identify defects in the system related to extreme scenarios."
      },
      {
        "id": "D",
        "text": "To identify defects in the system related to the use of unapproved programming practices."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Kiểm thử theo ca sử dụng (Use case testing) nhằm phát hiện các lỗi trong các luồng nghiệp vụ/quy trình (process flows) liên quan đến cách người dùng tương tác thực tế với hệ thống.",
    "imageUrl": "/images/swt-fe/su25-fe/q_38.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 38 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q39",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Why is equivalence partitioning particularly effective in test case design?",
    "options": [
      {
        "id": "A",
        "text": "It requires thorough knowledge of the internal structure of the system"
      },
      {
        "id": "B",
        "text": "It divides input data into valid and invalid partitions to simplify testing"
      },
      {
        "id": "C",
        "text": "It focuses solely on the output of the software"
      },
      {
        "id": "D",
        "text": "It is the best method for performance testing"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Phân vùng tương đương chia dữ liệu đầu vào thành các phân vùng hợp lệ và không hợp lệ, giúp đơn giản hóa việc thiết kế và giảm số lượng test case mà vẫn đảm bảo độ bao phủ logic.",
    "imageUrl": "/images/swt-fe/su25-fe/q_39.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 39 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q40",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following statements is true about the bug/defect report?",
    "options": [
      {
        "id": "A",
        "text": "It is a technical document written to describe the symptoms of a bug."
      },
      {
        "id": "B",
        "text": "It is designed to prescribe the scope, approach, resources, and schedule of all testing activities"
      },
      {
        "id": "C",
        "text": "It is a document that delivers a detailed summary of what scenarios will be tested in a software during the software testing life cycle (STLC)"
      },
      {
        "id": "D",
        "text": "It is used to confirm the function of the application when the code is executed."
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Báo cáo lỗi (bug/defect report) là tài liệu kỹ thuật mô tả chi tiết triệu chứng, bước tái hiện, kết quả thực tế và mong đợi của một lỗi để đội phát triển xử lý. Phương án B là Test Plan.",
    "imageUrl": "/images/swt-fe/su25-fe/q_40.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 40 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q41",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "What role is responsible for leading the test effort?",
    "options": [
      {
        "id": "A",
        "text": "Test manager"
      },
      {
        "id": "B",
        "text": "Test designer"
      },
      {
        "id": "C",
        "text": "Test analyst"
      },
      {
        "id": "D",
        "text": "Tester"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Test Manager (Quản lý kiểm thử) là vai trò chịu trách nhiệm tổng thể trong việc lãnh đạo, lập kế hoạch, giám sát và điều phối toàn bộ hoạt động kiểm thử.",
    "imageUrl": "/images/swt-fe/su25-fe/q_41.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 41 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q42",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is NOT a goal of incident management?",
    "options": [
      {
        "id": "A",
        "text": "Fixing all defects regardless of their impact"
      },
      {
        "id": "B",
        "text": "Improving the quality of the software product"
      },
      {
        "id": "C",
        "text": "Reducing the risk of future defects"
      },
      {
        "id": "D",
        "text": "Ensuring stakeholder satisfaction with the product"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Quản lý sự cố/lỗi không nhằm sửa bằng mọi giá tất cả các lỗi bất kể mức độ ảnh hưởng; các lỗi phải được phân loại mức độ nghiêm trọng và ưu tiên (triage) để quyết định sửa, hoãn hay chấp nhận rủi ro.",
    "imageUrl": "/images/swt-fe/su25-fe/q_42.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 42 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q43",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a risk of test automation?",
    "options": [
      {
        "id": "A",
        "text": "Using an automation tool that will not be supported in the future"
      },
      {
        "id": "B",
        "text": "Developing test automation for particularly tedious manual testing areas"
      },
      {
        "id": "C",
        "text": "Using technical testers to implement the automation"
      },
      {
        "id": "D",
        "text": "Developing automated reporting"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Sử dụng một công cụ tự động hóa không còn được nhà cung cấp hỗ trợ trong tương lai là một rủi ro lớn (có thể gây lãng phí công sức đầu tư và không bảo trì được kịch bản kiểm thử). Các phương án B, C, D là thực hành tốt hoặc lợi ích.",
    "imageUrl": "/images/swt-fe/su25-fe/q_43.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 43 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q44",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "How would you structure a test team for a project requiring specialized knowledge in both business processes and technical execution?",
    "options": [
      {
        "id": "A",
        "text": "Assign only developers as testers"
      },
      {
        "id": "B",
        "text": "Use only external consultants"
      },
      {
        "id": "C",
        "text": "Focus on regression testing"
      },
      {
        "id": "D",
        "text": "Combine business experts with technical testers"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D** — Khi dự án đòi hỏi đồng thời kiến thức nghiệp vụ chuyên sâu và kỹ năng thực thi kỹ thuật, cơ cấu đội kiểm thử hiệu quả nhất là kết hợp các chuyên gia nghiệp vụ (business experts) với các kiểm thử viên kỹ thuật (technical testers).",
    "imageUrl": "/images/swt-fe/su25-fe/q_44.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 44 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q45",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following tasks is MOST LIKELY to be performed by the test manager?",
    "options": [
      {
        "id": "A",
        "text": "Write test summary reports based on the information gathered during testing"
      },
      {
        "id": "B",
        "text": "Review tests developed by others"
      },
      {
        "id": "C",
        "text": "Create the detailed test execution schedule"
      },
      {
        "id": "D",
        "text": "Analyze, review, and assess requirements, specifications and models for testability"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Theo bảng phân công nhiệm vụ trong ISTQB, viết báo cáo tổng kết kiểm thử (Test summary reports) là nhiệm vụ điển hình của Test Manager; các phương án B, C, D thường thuộc nhiệm vụ của Tester.",
    "imageUrl": "/images/swt-fe/su25-fe/q_45.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 45 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q46",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "What information is typically included in the summary section of an incident report? (Choose 2 correct answers)",
    "options": [
      {
        "id": "A",
        "text": "Personal opinions of the tester."
      },
      {
        "id": "B",
        "text": "Test progress metrics."
      },
      {
        "id": "C",
        "text": "Incident description and impact."
      },
      {
        "id": "D",
        "text": "Steps to reproduce the issue."
      }
    ],
    "correctOptionIds": [
      "C",
      "D"
    ],
    "explanation": "**Đáp án đúng: C, D** — Báo cáo sự cố/lỗi (incident report) cần cung cấp thông tin khách quan gồm mô tả sự cố cùng mức độ ảnh hưởng (C) và các bước tái hiện lỗi (D), không đưa ý kiến chủ quan cá nhân (A) hay chỉ số tiến độ tổng thể (B).",
    "imageUrl": "/images/swt-fe/su25-fe/q_46.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 46 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q47",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which one of the following test tools is mostly suitable for developers rather than testers?",
    "options": [
      {
        "id": "A",
        "text": "Requirement management tools"
      },
      {
        "id": "B",
        "text": "Configuration management tools"
      },
      {
        "id": "C",
        "text": "Defect management tools"
      },
      {
        "id": "D",
        "text": "Performance testing tools"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Trong 4 nhóm công cụ trên, Configuration management tools (quản lý cấu hình/phiên bản mã nguồn và bản dựng) gắn chặt và được sử dụng chủ yếu bởi lập trình viên hằng ngày, trong khi các công cụ quản lý yêu cầu, quản lý lỗi và kiểm thử hiệu năng phục vụ trực tiếp cho kiểm thử viên.",
    "imageUrl": "/images/swt-fe/su25-fe/q_47.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 47 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q48",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which element is critical in a test estimate?",
    "options": [
      {
        "id": "A",
        "text": "The graphical design of the test documentation"
      },
      {
        "id": "B",
        "text": "The time and resources required to complete testing"
      },
      {
        "id": "C",
        "text": "The color scheme for the test report"
      },
      {
        "id": "D",
        "text": "The number of developers in the team"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Yếu tố cốt lõi của ước lượng kiểm thử (Test estimation) là xác định thời gian, công sức và nguồn lực cần thiết để hoàn thành các hoạt động kiểm thử.",
    "imageUrl": "/images/swt-fe/su25-fe/q_48.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 48 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q49",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which is a key benefit of risk-based testing?",
    "options": [
      {
        "id": "A",
        "text": "It reduces the need for a test plan"
      },
      {
        "id": "B",
        "text": "It ensures all defects are identified and fixed"
      },
      {
        "id": "C",
        "text": "It optimizes test coverage by focusing on high-risk areas"
      },
      {
        "id": "D",
        "text": "It eliminates the need for regression testing"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C** — Lợi ích chính của kiểm thử dựa trên rủi ro (Risk-based testing) là tối ưu hóa độ bao phủ và nguồn lực kiểm thử bằng cách ưu tiên tập trung vào các khu vực có rủi ro cao nhất.",
    "imageUrl": "/images/swt-fe/su25-fe/q_49.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 49 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q50",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is a benefit of effective incident management?",
    "options": [
      {
        "id": "A",
        "text": "Increased software development time"
      },
      {
        "id": "B",
        "text": "Decreased software reliability"
      },
      {
        "id": "C",
        "text": "Improved customer satisfaction"
      },
      {
        "id": "D",
        "text": "Reduced software functionality"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C** — Quản lý sự cố/lỗi hiệu quả giúp theo dõi, xử lý kịp thời các vấn đề và nâng cao chất lượng sản phẩm, từ đó cải thiện sự hài lòng của khách hàng.",
    "imageUrl": "/images/swt-fe/su25-fe/q_50.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 50 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q51",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following statements is CORRECT about decision coverage?",
    "options": [
      {
        "id": "A",
        "text": "Decision coverage is a measure of the percentage of possible paths through the source code exercised by tests"
      },
      {
        "id": "B",
        "text": "Decision coverage is a measure of the percentage of business flows through the component exercised by tests"
      },
      {
        "id": "C",
        "text": "Decision coverage is a measure of the 'if' statements in the code that are exercised with both the true and false outcomes"
      },
      {
        "id": "D",
        "text": "Decision coverage is a measure of the proportion of decision outcomes in the source code exercised by tests"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D** — Theo định nghĩa chuẩn ISTQB, Decision coverage là tỷ lệ các kết quả quyết định (decision outcomes — bao gồm cả if, switch/case, vòng lặp...) trong mã nguồn đã được các test case thực thi.",
    "imageUrl": "/images/swt-fe/su25-fe/q_51.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 51 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q52",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which one of the following is MOST likely to be a benefit of test execution tools?",
    "options": [
      {
        "id": "A",
        "text": "It is easy to create regression tests"
      },
      {
        "id": "B",
        "text": "It is easy to maintain version control of test assets"
      },
      {
        "id": "C",
        "text": "It is easy to design tests for security testing"
      },
      {
        "id": "D",
        "text": "It is easy to run regression tests"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D** — Lợi ích rõ rệt nhất của công cụ thực thi kiểm thử (test execution tools) là giúp chạy lặp đi lặp lại các bài kiểm thử hồi quy (run regression tests) nhanh chóng và dễ dàng, giảm công việc thủ công nhàm chán.",
    "imageUrl": "/images/swt-fe/su25-fe/q_52.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 52 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q53",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is NOT typically a feature of a test management tool?",
    "options": [
      {
        "id": "A",
        "text": "Scheduling tests"
      },
      {
        "id": "B",
        "text": "Generating test data"
      },
      {
        "id": "C",
        "text": "Logging test results"
      },
      {
        "id": "D",
        "text": "Managing testing activities"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Việc sinh dữ liệu kiểm thử (Generating test data) là chức năng của Test data preparation tool, không phải tính năng điển hình của công cụ quản lý kiểm thử (Test management tool).",
    "imageUrl": "/images/swt-fe/su25-fe/q_53.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 53 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q54",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which metric would help monitor the progress of test execution?",
    "options": [
      {
        "id": "A",
        "text": "Number of open defects compared to closed defects."
      },
      {
        "id": "B",
        "text": "Number of passed requirements per code line"
      },
      {
        "id": "C",
        "text": "Project manager's confidence level"
      },
      {
        "id": "D",
        "text": "Test script reusability percentage"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A** — Theo ISTQB, theo dõi số lượng lỗi đang mở so với số lỗi đã đóng (open vs. closed defects) là một chỉ số khách quan quan trọng để giám sát tiến độ thực thi kiểm thử và chất lượng sản phẩm.",
    "imageUrl": "/images/swt-fe/su25-fe/q_54.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 54 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q55",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is a key feature of a test execution tool?",
    "options": [
      {
        "id": "A",
        "text": "Managing requirements traceability"
      },
      {
        "id": "B",
        "text": "Supporting static code analysis"
      },
      {
        "id": "C",
        "text": "Automatically running tests and recording results"
      },
      {
        "id": "D",
        "text": "Managing test incidents"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C** — Tính năng cốt lõi của công cụ thực thi kiểm thử (Test execution tool) là tự động chạy các kịch bản kiểm thử (test scripts) và ghi nhận kết quả thực thi.",
    "imageUrl": "/images/swt-fe/su25-fe/q_55.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 55 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q56",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What type of test tool would you use to ensure coding standards are met?",
    "options": [
      {
        "id": "A",
        "text": "Test design tool"
      },
      {
        "id": "B",
        "text": "Test execution tool"
      },
      {
        "id": "C",
        "text": "Static analysis tool"
      },
      {
        "id": "D",
        "text": "Configuration management tool"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C** — Công cụ phân tích tĩnh (Static analysis tool) được sử dụng để kiểm tra mã nguồn và đảm bảo mã tuân thủ các quy chuẩn lập trình (coding standards).",
    "imageUrl": "/images/swt-fe/su25-fe/q_56.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 56 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q57",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "multiple",
    "prompt": "Which of the following tools would you use for dynamic analysis? (Choose 2 correct answers)",
    "options": [
      {
        "id": "A",
        "text": "Static analysis tools"
      },
      {
        "id": "B",
        "text": "Test management tools"
      },
      {
        "id": "C",
        "text": "Performance testing tools"
      },
      {
        "id": "D",
        "text": "Monitoring tools"
      }
    ],
    "correctOptionIds": [
      "C",
      "D"
    ],
    "explanation": "**Đáp án đúng: C, D** — Phân tích động (Dynamic analysis) đánh giá phần mềm khi đang thực thi, do đó sử dụng các công cụ kiểm thử hiệu năng (Performance testing tools) và công cụ giám sát hệ thống (Monitoring tools) để theo dõi tài nguyên và hành vi thời gian chạy.",
    "imageUrl": "/images/swt-fe/su25-fe/q_57.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 57 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q58",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is a characteristic feature of a test harness?",
    "options": [
      {
        "id": "A",
        "text": "Schedules tests"
      },
      {
        "id": "B",
        "text": "Supplies inputs to the software being tested"
      },
      {
        "id": "C",
        "text": "Manages software incidents"
      },
      {
        "id": "D",
        "text": "Analyzes software performance"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Test harness là môi trường kiểm thử gồm các driver và stub dùng để cung cấp dữ liệu đầu vào cho phần mềm/thành phần cần kiểm thử và ghi nhận/so sánh đầu ra.",
    "imageUrl": "/images/swt-fe/su25-fe/q_58.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 58 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q59",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What is an advantage of using data-driven scripts in test automation?",
    "options": [
      {
        "id": "A",
        "text": "They do not require external data."
      },
      {
        "id": "B",
        "text": "They separate test data from scripts, enhancing flexibility."
      },
      {
        "id": "C",
        "text": "They are simpler to maintain than linear scripts."
      },
      {
        "id": "D",
        "text": "They eliminate the need for scripting knowledge"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Kỹ thuật data-driven testing tách biệt dữ liệu kiểm thử (lưu ở bảng tính, tệp ngoài) khỏi mã kịch bản (test scripts), giúp tăng tính linh hoạt và dễ dàng chạy cùng một kịch bản với nhiều bộ dữ liệu khác nhau.",
    "imageUrl": "/images/swt-fe/su25-fe/q_59.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 59 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-09-q60",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "______ is the process of testing a single unit of code in an isolated manner and can be a method, a class, or a module.",
    "options": [
      {
        "id": "A",
        "text": "Integration Testing"
      },
      {
        "id": "B",
        "text": "Unit Testing"
      },
      {
        "id": "C",
        "text": "Acceptance Testing"
      },
      {
        "id": "D",
        "text": "System Testing"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B** — Unit Testing (kiểm thử đơn vị) là quá trình kiểm thử một đơn vị mã nguồn riêng lẻ như hàm/phương thức, lớp hoặc mô-đun một cách cô lập.",
    "imageUrl": "/images/swt-fe/su25-fe/q_60.webp",
    "imageCaption": "Đề 09: Kì Summe — Câu 60 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-10-q01",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Against which of the following would incidents normally NOT be raised?",
    "options": [
      {
        "id": "A",
        "text": "Requirements"
      },
      {
        "id": "B",
        "text": "Documentation"
      },
      {
        "id": "C",
        "text": "Test cases"
      },
      {
        "id": "D",
        "text": "Improvements suggested by users"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Sự cố (incident) thường được ghi nhận khi có sai sót/bất thường trong yêu cầu (requirements), tài liệu (documentation), ca kiểm thử (test cases) hoặc phần mềm. Tuy nhiên, các đề xuất cải tiến của người dùng (improvements suggested by users) được quản lý dưới dạng Change Requests (CR) chứ không mở Incident report.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
    "imageUrl": "/images/swt-fe/su25-practice-exam/q_01.webp",
    "imageCaption": "Đề 10: Kì Summe — Câu 1 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-10-q02",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Exclusive use of white box testing in a test-phase will:",
    "options": [
      {
        "id": "A",
        "text": "Ensure the test item is adequately tested"
      },
      {
        "id": "B",
        "text": "Make the need for black-box testing redundant."
      },
      {
        "id": "C",
        "text": "Run the risk that the requirements are not satisfied."
      },
      {
        "id": "D",
        "text": "Suffices for the unit testing phase"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Chỉ sử dụng duy nhất kiểm thử hộp trắng (White-box testing) sẽ dẫn đến rủi ro nghiêm trọng là không đáp ứng được yêu cầu của người dùng (Requirements not satisfied), vì hộp trắng chỉ kiểm tra cấu trúc mã nội bộ mà không kiểm tra được các chức năng bị bỏ sót (omissions).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
    "imageUrl": "/images/swt-fe/su25-practice-exam/q_02.webp",
    "imageCaption": "Đề 10: Kì Summe — Câu 2 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-10-q03",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The principal attributes of tools and automation are (choose one answer)",
    "options": [
      {
        "id": "A",
        "text": "(1) Speed & efficiency"
      },
      {
        "id": "B",
        "text": "(2) Accuracy & precision"
      },
      {
        "id": "C",
        "text": "Both of (1) and (2)"
      },
      {
        "id": "D",
        "text": "None of (1) nor (2)"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Hai thuộc tính cốt lõi và giá trị lớn nhất của công cụ và kiểm thử tự động là: 1) Tốc độ & hiệu quả (Speed & efficiency); 2) Độ chính xác & tính lặp lại chuẩn xác (Accuracy & precision).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
    "imageUrl": "/images/swt-fe/su25-practice-exam/q_03.webp",
    "imageCaption": "Đề 10: Kì Summe — Câu 3 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-10-q04",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Match every stage of the software Development Life cycle with the Testing Life cycle: i. Hi-level design ii. Code iii. Low-level design iv. Business requirements a. Unit tests b. Acceptance tests c. System tests d. Integration tests",
    "options": [
      {
        "id": "A",
        "text": "i-d, ii-a, iii-c, iv-b"
      },
      {
        "id": "B",
        "text": "i-c, ii-d, iii-a, iv-b"
      },
      {
        "id": "C",
        "text": "i-b, ii-a, iii-d, iv-c"
      },
      {
        "id": "D",
        "text": "i-c, ii-a, iii-d, iv-b"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khớp các giai đoạn trong V-model:\n- i. High-level design -> d. Integration tests (Kiểm thử tích hợp các module kiến trúc)\n- ii. Code -> a. Unit tests (Kiểm thử đơn vị mã nguồn)\n- iii. Low-level design -> c. System tests hoặc component integration\n- iv. Business requirements -> b. Acceptance tests (Kiểm thử chấp nhận người dùng).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
    "imageUrl": "/images/swt-fe/su25-practice-exam/q_04.webp",
    "imageCaption": "Đề 10: Kì Summe — Câu 4 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-10-q05",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "What type of tools to be used for Regression Testing ?",
    "options": [
      {
        "id": "A",
        "text": "(1) Performance"
      },
      {
        "id": "B",
        "text": "(2) Record/Playback"
      },
      {
        "id": "C",
        "text": "Both of (1) and (2)"
      },
      {
        "id": "D",
        "text": "None of (1) nor (2)"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Công cụ phù hợp nhất cho kiểm thử hồi quy (Regression Testing) là công cụ Record/Playback (ghi và phát lại các kịch bản kiểm thử tự động) để chạy lại nhanh chóng các test case cũ khi có thay đổi code.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
    "imageUrl": "/images/swt-fe/su25-practice-exam/q_05.webp",
    "imageCaption": "Đề 10: Kì Summe — Câu 5 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-10-q06",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "The later in the development life cycle a fault is discovered, the more expensive it is to fix. Why?",
    "options": [
      {
        "id": "A",
        "text": "The documentation is poor, so it takes longer to find out what the software is doing."
      },
      {
        "id": "B",
        "text": "Wages are rising"
      },
      {
        "id": "C",
        "text": "The fault has been built into more documentation, code, tests, etc"
      },
      {
        "id": "D",
        "text": "None of the others"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Lỗi phát hiện càng muộn trong vòng đời phát triển phần mềm (SDLC) thì chi phí sửa càng đắt đỏ vì lỗi đó đã bị lan truyền, nhúng sâu vào nhiều tài liệu thiết kế, mã nguồn, ca kiểm thử và cấu trúc hệ thống khác.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
    "imageUrl": "/images/swt-fe/su25-practice-exam/q_06.webp",
    "imageCaption": "Đề 10: Kì Summe — Câu 6 (Đề gốc)"
  },
  {
    "id": "swt-past-exam-10-q07",
    "subjectId": "swt-past",
    "chapterId": "swt-ch-su25",
    "source": "imported",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Which of the following is the component test standard?",
    "options": [
      {
        "id": "A",
        "text": "IEEE 829"
      },
      {
        "id": "B",
        "text": "IEEE 610"
      },
      {
        "id": "C",
        "text": "BS7925-1"
      },
      {
        "id": "D",
        "text": "BS7925-2"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Tiêu chuẩn quốc tế cho kiểm thử thành phần phần mềm (Component Testing Standard) là BS 7925-2. (BS 7925-1 là bảng thuật ngữ từ điển kiểm thử, IEEE 829 là tiêu chuẩn tài liệu kiểm thử).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
    "imageUrl": "/images/swt-fe/su25-practice-exam/q_07.webp",
    "imageCaption": "Đề 10: Kì Summe — Câu 7 (Đề gốc)"
  }
];
