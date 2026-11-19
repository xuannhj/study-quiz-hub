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
    "prompt": "Which test may not mimic real world situations (choose one answer)",
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
    "explanation": "**Đáp án đúng: B**\n\n- Kiểm thử cấu trúc / hộp trắng (Structural Testing) kiểm tra luồng logic và đường rẽ nhánh mã nguồn bên trong nên không mô phỏng sát hành vi sử dụng thực tế của người dùng ngoài đời thực như kiểm thử chức năng (Functional testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Mục tiêu hàng đầu và bản chất của kiểm thử phần mềm là phát hiện lỗi (Uncover software errors / find defects). Không thể loại bỏ mọi lỗi hay thay thế bảo trì.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Defects discovered by static analysis tools include: i. Variables that are never used. ii. Security vulnerabilities. iii. Programming Standard Violations iv. Uncalled functions and procedures",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv is correct"
      },
      {
        "id": "B",
        "text": "iii ,is correct I,ii,iv are incorrect."
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
    "explanation": "**Đáp án đúng: A**\n\n- Phân tích tĩnh bằng công cụ (Static analysis tools) có thể tự động phát hiện: i) Biến được khai báo nhưng không dùng; ii) Lỗ hổng bảo mật tiềm ẩn; iii) Vi phạm quy chuẩn lập trình; iv) Hàm/thủ tục không bao giờ được gọi (dead code).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following benefits are MOST likely to be achieved by using test tools? i) Easy to access information about tests and testing. ii) Reduced maintenance of testware. iii) Easy and cheap to implement. iv) Greater consistency of tests.",
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
    "explanation": "**Đáp án đúng: C**\n\n- Lợi ích lớn nhất khi sử dụng công cụ kiểm thử: i) Dễ dàng truy xuất thông tin về kết quả kiểm thử; iv) Tăng tính nhất quán và chuẩn mực giữa các lần thực thi test. (Tự động hóa không hề rẻ và thường làm tăng chi phí bảo trì testware).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Mức độ rủi ro (Level of Risk) được xác định bằng tích của hai yếu tố: Khả năng xảy ra rủi ro (Likelihood / Probability) và Mức độ ảnh hưởng nếu rủi ro xảy ra (Impact).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử chuyển trạng thái (State Transition Testing) là một kỹ thuật kiểm thử chức năng hộp đen (Black-box functional technique), KHÔNG PHẢI là kiểm thử phi chức năng (Non-functional testing). Usability, Performance, Security là phi chức năng.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The person who leads the review of the document(s), planning the review, running the meeting and follow-up after the meeting",
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
    "explanation": "**Đáp án đúng: C**\n\n- Điều phối viên (Moderator / Review Leader) là người chủ trì buổi đánh giá chính thức (formal review): lập kế hoạch, điều hành cuộc họp và theo dõi kết quả sau cuộc họp.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Reviews, static analysis and dynamic testing have the same objective",
    "options": [
      {
        "id": "A",
        "text": "(i) Identifying defects."
      },
      {
        "id": "B",
        "text": "(ii) Fixing defects."
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
    "explanation": "**Đáp án đúng: A**\n\n- Cả đánh giá tài liệu (Reviews), phân tích tĩnh (Static analysis) và kiểm thử động (Dynamic testing) đều có chung một mục tiêu cốt lõi là: Xác định và phát hiện lỗi (Identifying defects). Việc sửa lỗi (fixing defects) là trách nhiệm của Developer (Debugging).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "PDCA is known as",
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
    "explanation": "**Đáp án đúng: A**\n\n- Chu trình cải tiến chất lượng PDCA của Deming là viết tắt của: Plan (Lập kế hoạch) -> Do (Thực hiện) -> Check (Kiểm tra đánh giá) -> Act (Hành động cải tiến).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "id": "A",
        "text": "Faults in program specifications are the most expensive to fix"
      },
      {
        "id": "B",
        "text": "Faults in code are the most expensive to fix"
      },
      {
        "id": "C",
        "text": "Faults in requirements are the most expensive to fix"
      },
      {
        "id": "D",
        "text": "Faults in designs are the most expensive to fix"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Lỗi nằm trong tài liệu Yêu cầu (Requirements) là lỗi tốn kém chi phí sửa chữa nhất nếu không được phát hiện sớm, vì yêu cầu là nền móng cho toàn bộ kiến trúc, thiết kế, mã nguồn và ca kiểm thử phía sau.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Thời điểm dừng kiểm thử chuẩn xác nhất là khi các Tiêu chí hoàn thành kiểm thử đã định trước được thỏa mãn (When the test completion criteria / exit criteria have been met).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Where may functional testing be performed?",
    "options": [
      {
        "id": "A",
        "text": "At system and acceptance testing levels only"
      },
      {
        "id": "B",
        "text": "At all test levels"
      },
      {
        "id": "C",
        "text": "At all levels above integration testing"
      },
      {
        "id": "D",
        "text": "At the acceptance testing level only"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Kiểm thử chức năng (Functional testing) có thể và nên được thực hiện ở TẤT CẢ các cấp độ kiểm thử (At all test levels): Unit, Integration, System, và Acceptance testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following activities should be performed during the selection and implementation of a testing tool? i) Investigate the organisation&#039;s test process. ii) Conduct a proof of concept. iii) Implement the selected tool on a project behind schedule to save time. iv) Identify coaching and mentoring requirements for the use of the selected tool.",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii"
      },
      {
        "id": "B",
        "text": "ii, iii, iv"
      },
      {
        "id": "C",
        "text": "i, iii, iv"
      },
      {
        "id": "D",
        "text": "i, ii, iv SWT301 SU26 Final Exam Questions 21 to 25&#8203;"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Các hoạt động chuẩn khi chọn lựa và triển khai công cụ kiểm thử: i) Khảo sát quy trình kiểm thử hiện tại của tổ chức; ii) Tiến hành thử nghiệm PoC (Proof of Concept); iv) Xác định nhu cầu đào tạo và hướng dẫn kèm cặp (coaching/mentoring). Tuyệt đối không áp dụng công cụ mới vào một dự án đang trễ hạn.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: B**\n\n- False. Theo nguyên lý kiểm thử ISTQB số 2: \"Exhaustive testing is impossible\" (Kiểm thử kiệt quệ là bất khả thi), không thể loại bỏ 100% tất cả các lỗi trong phần mềm.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Defect Management process does not include",
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
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Quy trình quản lý lỗi (Defect Management) bao gồm phòng ngừa lỗi, báo cáo quản lý, theo dõi vòng đời của lỗi, nhưng không bao gồm Deliverable base-lining (đây là nhiệm vụ của Quản lý cấu hình - Configuration Management).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Kỹ thuật Loop Testing (Kiểm thử vòng lặp hộp trắng) áp dụng hiệu quả cho: Vòng lặp đơn giản (Simple loops), Vòng lặp lồng nhau (Nested loops), và Vòng lặp nối tiếp (Concatenated loops).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "(Choose 2 answers) Which TWO of the following statements about static analysis are correct?",
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
        "text": "Extensive statistical analysis will not be needed if white- Box testing is to be performed."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Phân tích tĩnh (Static analysis) có thể phát hiện các lỗi mã nguồn tiềm ẩn (lỗ hổng bảo mật, rò rỉ bộ nhớ, biến chưa khởi tạo) mà kiểm thử động rất khó kích hoạt hoặc mất nhiều công sức để phát hiện.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Kiểm thử đánh giá các thuộc tính chất lượng như an toàn bảo mật, hiệu năng tải, độ tin cậy và tính khả dụng của ngân hàng trực tuyến là Kiểm thử phi chức năng (Non-functional testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The purpose of exit criteria is: (choose one answer)",
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
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Mục đích của Exit Criteria (Tiêu chí dừng/kết thúc) là: Xác định khi nào dừng kiểm thử, hoàn thành một cấp độ kiểm thử, hoặc khi tập ca kiểm thử đạt được mức độ bao phủ và chất lượng kỳ vọng.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Match the following: 1. Test estimation 2. Test control 3. Test monitoring a. Measures of tracking process b. Effort required to perform activities c. Reallocation of resources",
    "options": [
      {
        "id": "A",
        "text": "1 -b, 2-c, 3-a"
      },
      {
        "id": "B",
        "text": "1 -b, 2-a, 3-c"
      },
      {
        "id": "C",
        "text": "1 -c, 2-a, 3-b"
      },
      {
        "id": "D",
        "text": "1 -a, 2-b, 3-c"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ghép nối:\n- 1. Test estimation (Ước lượng kiểm thử) -> b. Nỗ lực cần thiết để thực hiện công việc\n- 2. Test control (Kiểm soát kiểm thử) -> c. Tái phân bổ nguồn lực và điều chỉnh kế hoạch\n- 3. Test monitoring (Giám sát kiểm thử) -> a. Đo lường và theo dõi tiến độ thực tế.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which tool will be used to test the flag memory leaks and unassigned pointers",
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
    "explanation": "**Đáp án đúng: A**\n\n- Rò rỉ bộ nhớ (memory leaks) và con trỏ chưa gán/lạc hướng (unassigned/wild pointers) khi chương trình chạy được phát hiện tốt nhất bằng Công cụ phân tích động (Dynamic analysis tool - ví dụ Valgrind, Purify).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Find out what your budget would be for the tool E. Search the internet"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Bước đầu tiên và quan trọng nhất khi muốn mua/áp dụng công cụ kiểm thử mới là Phân tích nhu cầu và yêu cầu thực tế của tổ chức (Analyze your needs and requirements).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Can&#039;t say SWT301 Multiple Choice Exam Questions&#8203;"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Nâng cao chất lượng phần mềm nhờ các phương pháp phát triển tốt hơn (viết code chuẩn, static analysis, unit test kỹ) sẽ làm giảm số lượng bug phát sinh, từ đó giảm thời gian cần thiết cho các đợt kiểm thử (Reducing test time).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Theo tiêu chuẩn ISO 9126, 6 đặc tính chất lượng phần mềm gồm: Functionality, Reliability, Usability, Efficiency, Maintainability, Portability. Supportability không nằm trong ISO 9126 (nó thuộc mô hình FURPS+).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is not included in Test Plan.",
    "options": [
      {
        "id": "A",
        "text": "Features to be tested."
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
        "text": "Expected results."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Kết quả kỳ vọng (Expected results) được đặc tả chi tiết trong từng Test Case / Test Procedure Specification, KHÔNG nằm trong Kế hoạch kiểm thử tổng thể (Test Plan - chỉ định nghĩa scope, features to test, environmental needs, suspension criteria).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "One of the fields on a form contains a text box which accepts alpha numeric values. Identify the Valid Equivalence class",
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
        "text": "Boo01k"
      },
      {
        "id": "D",
        "text": "book"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trường nhập giá trị alpha-numeric (chữ và số kết hợp): \"Boo01k\" chứa cả ký tự chữ và số nên thuộc phân vùng hợp lệ (Valid Equivalence Class).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: B**\n\n- Sự khác biệt cốt lõi: Cuộc kiểm tra chính thức (Inspection) được dẫn dắt bởi một Điều phối viên độc lập (trained Moderator), trong khi Walkthrough do chính Tác giả của tài liệu (Author) chủ trì và trình bày.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Handover of Testware is a part of which Phase",
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
    "explanation": "**Đáp án đúng: C**\n\n- Bàn giao tài liệu kiểm thử và hiện vật (Handover of Testware) là hoạt động then chốt thuộc giai đoạn Đóng kiểm thử (Test Closure Activities).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which expression best matches the following characteristics or review processes: 1. Led by author 2. Undocumented 3. No management participation 4. Led by a trained moderator or leader 5. Uses entry exit criteria s) Inspection t) Peer review u) Informal review v) Walkthrough",
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
        "text": "s = 5, t = 4, u = 3, v = 1 and 2 E. s = 4 and 5, t = 1, u = 2, v = 3"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Khớp các loại Review:\n- s. Inspection: Dẫn dắt bởi trained moderator (4) và sử dụng tiêu chí entry/exit chuẩn (5)\n- t. Peer review: Thường không có sự tham gia của ban quản lý (3)\n- u. Informal review: Không cần ghi chép tài liệu trang trọng (2)\n- v. Walkthrough: Do tác giả chủ trì (1).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Testing wherein we subject the target of the test, to varying workloads to measure and evaluate the performance behaviors and ability of the target and of the test to continue to function properly under these different workloads.",
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử đặt hệ thống dưới các mức tải khác nhau để đo lường hành vi và hiệu năng vận hành là Kiểm thử tải (Load Testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Cost of the reviews will not include.",
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
        "text": "Tool support."
      },
      {
        "id": "D",
        "text": "Process improvement."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Chi phí trực tiếp của hoạt động review bao gồm: thời gian thực hiện quy trình review, phân tích chỉ số, công cụ hỗ trợ. Process improvement (cải tiến quy trình) là lợi ích dài hạn đem lại chứ không tính là chi phí thuần của buổi review.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Đoán lỗi (Error guessing) là một kỹ thuật kiểm thử động dựa trên kinh nghiệm (Experience-based dynamic technique), KHÔNG PHẢI là kỹ thuật kiểm thử tĩnh (Static testing). Walkthrough, Data flow analysis, Inspection đều là kiểm thử tĩnh.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The Planning phase of a formal review includes which of the followings?",
    "options": [
      {
        "id": "A",
        "text": "Explaining the objectives"
      },
      {
        "id": "B",
        "text": "Selecting the personnel, allocating roles."
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
    "explanation": "**Đáp án đúng: B**\n\n- Giai đoạn Lập kế hoạch (Planning) của buổi đánh giá tài liệu chính thức bao gồm: Xác định phạm vi mục tiêu, lựa chọn nhân sự tham gia và phân công vai trò (Author, Moderator, Scribe, Reviewer).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Độ phủ mã nguồn (Code Coverage: Statement coverage, Branch coverage) được sử dụng làm thước đo Hiệu quả kiểm thử (Test Effectiveness) và mức độ kỹ lưỡng của tập ca kiểm thử.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which is not the testing objectives",
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
    "explanation": "**Đáp án đúng: D**\n\n- Debugging (gỡ lỗi - định vị và sửa chữa lỗi mã nguồn) là công việc của lập trình viên, KHÔNG PHẢI là mục tiêu của kiểm thử phần mềm (Testing nhằm tìm lỗi, tạo dựng niềm tin và phòng ngừa lỗi).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Công cụ Record/Playback (Capture/Playback) được sử dụng phổ biến nhất để tự động hóa các ca kiểm thử hồi quy (Regression test).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "_____ includes both Black box and White Box Testing features (choose one answer)",
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
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Kiểm thử kết hợp cả đặc tính hộp đen (dựa trên yêu cầu) và cấu trúc hộp trắng (mã nguồn/cơ sở dữ liệu) được gọi là Gray Box Testing hoặc Hybrid Testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Who are the persons involved in a Formal Review i) Manager ii) Moderator iii) Scribe / Recorder iv) Assistant Manager",
    "options": [
      {
        "id": "A",
        "text": "i,ii,iii,iv are true"
      },
      {
        "id": "B",
        "text": "i,ii,iii are true and iv is false."
      },
      {
        "id": "C",
        "text": "ii,iii,iv are true and i is false."
      },
      {
        "id": "D",
        "text": "i,iv are true and ii, iii are false."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Các vai trò chuẩn trong Formal Review theo ISTQB gồm: i) Manager (quyết định thực hiện); ii) Moderator (chủ trì); iii) Scribe / Recorder (ghi chép biên bản). Assistant Manager không phải là vai trò chuẩn.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Mức độ độc lập cao nhất (Highest level of independence) trong kiểm thử là khi ca kiểm thử được thiết kế bởi người thuộc một tổ chức hoàn toàn độc lập (ví dụ đơn vị kiểm thử bên ngoài / 3rd party testing vendor).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Success Factors for a review include: i. Each Review does not have a predefined objective ii. Defects found are welcomed and expressed objectively iii. Management supports a good review process. iv. There is an emphasis on learning and process improvement.",
    "options": [
      {
        "id": "A",
        "text": "ii,iii,iv are correct and i is incorrect"
      },
      {
        "id": "B",
        "text": "iii , i , iv is correct and ii is incorrect"
      },
      {
        "id": "C",
        "text": "i , iii , iv , ii is in correct"
      },
      {
        "id": "D",
        "text": "ii is correct"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yếu tố thành công của review: ii) Lỗi phát hiện được hoan nghênh và diễn đạt khách quan; iii) Ban quản lý ủng hộ quy trình; iv) Chú trọng học hỏi và cải tiến quy trình. Mệnh đề i sai vì mỗi review BẮT BUỘC phải có mục tiêu xác định trước.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "In a review meeting a moderator is a person who",
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
    "explanation": "**Đáp án đúng: B**\n\n- Trong cuộc họp đánh giá, Moderator là người làm trung gian điều phối giữa mọi người (Mediates between people), đảm bảo cuộc họp diễn ra suôn sẻ, đúng giờ và tập trung vào mục tiêu.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is a Key Characteristics of WalkThrough",
    "options": [
      {
        "id": "A",
        "text": "Scenario , Dry Run , Peer Group"
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
    "explanation": "**Đáp án đúng: A**\n\n- Đặc trưng cốt lõi của Walkthrough: Trình bày kịch bản (Scenario), chạy thử trên giấy (Dry Run), có sự tham gia của nhóm đồng nghiệp bình duyệt (Peer Group).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "One of the following is not a part of white box testing as per BS7925-II standards.",
    "options": [
      {
        "id": "A",
        "text": "Random testing"
      },
      {
        "id": "B",
        "text": "Data Flow testing."
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử ngẫu nhiên (Random testing) là kỹ thuật kiểm thử hộp đen, không thuộc kiểm thử cấu trúc hộp trắng theo tiêu chuẩn BS 7925-2.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Recording test inputs E. Reading test values from a data file"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Công cụ thực thi kiểm thử tự động (Test execution tool) KHÔNG THỂ tự động sáng tạo/sinh ra kết quả kỳ vọng đúng đắn (Generating expected outputs) nếu không có oracle hoặc con người cung cấp.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Hệ thống ghi nhận sự cố (Incident logging system) là nguồn thông tin vô cùng giá trị cho dự án nếu nó ghi nhận đầy đủ mọi sự cố phát sinh trong quá trình kiểm thử.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Measurement dysfunction is a problem because:",
    "options": [
      {
        "id": "A",
        "text": "Even though the numbers you look at appear better, to achieve these numbers, people are doing other aspects of their work much less well."
      },
      {
        "id": "B",
        "text": "We don&#039;t know how to measure a variable (our measurement is dysfunctional) and so we don&#039;t know how to interpret the result."
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
    "explanation": "**Đáp án đúng: A**\n\n- Sự rối loạn đo lường (Measurement dysfunction) xảy ra khi mọi người chỉ cố gắng làm cho các con số chỉ số đẹp lên trên báo cáo nhưng thực tế lại bỏ bê chất lượng các công việc cốt lõi khác.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is the standard for the Software product quality",
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
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn quốc tế định nghĩa mô hình chất lượng sản phẩm phần mềm (Software product quality) là ISO 9126 (sau này được kế thừa và phát triển thành ISO/IEC 25010).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Boundary value testing",
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
    "explanation": "**Đáp án đúng: B**\n\n- Phân tích giá trị biên (Boundary Value Analysis) là kỹ thuật kiểm tra các điều kiện ngay tại biên, ngay dưới biên và ngay trên biên của các phân vùng tương đương (on, below, and above edges).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Component Testing is also called as i) Unit Testing ii) Program Testing iii) Module Testing iv) System Component Testing.",
    "options": [
      {
        "id": "A",
        "text": "i,ii,iii are true and iv is false"
      },
      {
        "id": "B",
        "text": "i,ii,iii,iv are false"
      },
      {
        "id": "C",
        "text": "i,ii,iv are true and iii is false"
      },
      {
        "id": "D",
        "text": "All of them are true"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử thành phần (Component Testing) còn có các tên gọi tương đương là: Unit Testing, Program Testing, Module Testing. Không gọi là System Component Testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Software quality is not relevant to _____",
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
    "explanation": "**Đáp án đúng: C**\n\n- Viability (tính khả thi kinh doanh/kinh tế) là thước đo tài chính/quản lý dự án, không thuộc các thuộc tính chất lượng kỹ thuật của phần mềm theo ISO 9126.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Who is responsible for document all the issues, problems and open point that were identified during the review meeting",
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
    "explanation": "**Đáp án đúng: B**\n\n- Người chịu trách nhiệm ghi chép lại toàn bộ các vấn đề, lỗi và điểm còn mở trong cuộc họp review là Thư ký (Scribe / Recorder).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Khi mua một công cụ kiểm thử mới, nó phải được triển khai thí điểm (Pilot project) trước tiên bởi một nhóm nhỏ để tìm ra cách áp dụng và quy trình tối ưu nhất.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The Phases of formal review process is mentioned below arrange them in the correct order. i) Planning ii) Review Meeting iii) Rework iv) Individual Preparations v) Kick Off vi) Follow Up",
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
    "explanation": "**Đáp án đúng: C**\n\n- Thứ tự chuẩn của quy trình đánh giá chính thức (Formal Review Process): i) Planning (Lập kế hoạch) -> v) Kick-off (Khởi động) -> iv) Individual Preparation (Chuẩn bị cá nhân) -> ii) Review Meeting (Họp đánh giá) -> iii) Rework (Chỉnh sửa) -> vi) Follow-up (Theo dõi kiểm tra lại).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which test may not mimic real world situations (choose one answer)",
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
    "explanation": "**Đáp án đúng: B**\n\n- Kiểm thử cấu trúc / hộp trắng (Structural Testing) kiểm tra luồng logic và đường rẽ nhánh mã nguồn bên trong nên không mô phỏng sát hành vi sử dụng thực tế của người dùng ngoài đời thực như kiểm thử chức năng (Functional testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Mục tiêu hàng đầu và bản chất của kiểm thử phần mềm là phát hiện lỗi (Uncover software errors / find defects). Không thể loại bỏ mọi lỗi hay thay thế bảo trì.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Defects discovered by static analysis tools include: i. Variables that are never used. ii. Security vulnerabilities. iii. Programming Standard Violations iv. Uncalled functions and procedures",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv is correct"
      },
      {
        "id": "B",
        "text": "iii ,is correct I,ii,iv are incorrect."
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
    "explanation": "**Đáp án đúng: A**\n\n- Phân tích tĩnh bằng công cụ (Static analysis tools) có thể tự động phát hiện: i) Biến được khai báo nhưng không dùng; ii) Lỗ hổng bảo mật tiềm ẩn; iii) Vi phạm quy chuẩn lập trình; iv) Hàm/thủ tục không bao giờ được gọi (dead code).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following benefits are MOST likely to be achieved by using test tools? i) Easy to access information about tests and testing. ii) Reduced maintenance of testware. iii) Easy and cheap to implement. iv) Greater consistency of tests.",
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
    "explanation": "**Đáp án đúng: C**\n\n- Lợi ích lớn nhất khi sử dụng công cụ kiểm thử: i) Dễ dàng truy xuất thông tin về kết quả kiểm thử; iv) Tăng tính nhất quán và chuẩn mực giữa các lần thực thi test. (Tự động hóa không hề rẻ và thường làm tăng chi phí bảo trì testware).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Mức độ rủi ro (Level of Risk) được xác định bằng tích của hai yếu tố: Khả năng xảy ra rủi ro (Likelihood / Probability) và Mức độ ảnh hưởng nếu rủi ro xảy ra (Impact).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử chuyển trạng thái (State Transition Testing) là một kỹ thuật kiểm thử chức năng hộp đen (Black-box functional technique), KHÔNG PHẢI là kiểm thử phi chức năng (Non-functional testing). Usability, Performance, Security là phi chức năng.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The person who leads the review of the document(s), planning the review, running the meeting and follow-up after the meeting",
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
    "explanation": "**Đáp án đúng: C**\n\n- Điều phối viên (Moderator / Review Leader) là người chủ trì buổi đánh giá chính thức (formal review): lập kế hoạch, điều hành cuộc họp và theo dõi kết quả sau cuộc họp.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Reviews, static analysis and dynamic testing have the same objective",
    "options": [
      {
        "id": "A",
        "text": "(i) Identifying defects."
      },
      {
        "id": "B",
        "text": "(ii) Fixing defects."
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
    "explanation": "**Đáp án đúng: A**\n\n- Cả đánh giá tài liệu (Reviews), phân tích tĩnh (Static analysis) và kiểm thử động (Dynamic testing) đều có chung một mục tiêu cốt lõi là: Xác định và phát hiện lỗi (Identifying defects). Việc sửa lỗi (fixing defects) là trách nhiệm của Developer (Debugging).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "type": "single",
    "prompt": "PDCA is known as",
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
    "explanation": "**Đáp án đúng: A**\n\n- Chu trình cải tiến chất lượng PDCA của Deming là viết tắt của: Plan (Lập kế hoạch) -> Do (Thực hiện) -> Check (Kiểm tra đánh giá) -> Act (Hành động cải tiến).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "id": "A",
        "text": "Faults in program specifications are the most expensive to fix"
      },
      {
        "id": "B",
        "text": "Faults in code are the most expensive to fix"
      },
      {
        "id": "C",
        "text": "Faults in requirements are the most expensive to fix"
      },
      {
        "id": "D",
        "text": "Faults in designs are the most expensive to fix"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Lỗi nằm trong tài liệu Yêu cầu (Requirements) là lỗi tốn kém chi phí sửa chữa nhất nếu không được phát hiện sớm, vì yêu cầu là nền móng cho toàn bộ kiến trúc, thiết kế, mã nguồn và ca kiểm thử phía sau.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Thời điểm dừng kiểm thử chuẩn xác nhất là khi các Tiêu chí hoàn thành kiểm thử đã định trước được thỏa mãn (When the test completion criteria / exit criteria have been met).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Where may functional testing be performed?",
    "options": [
      {
        "id": "A",
        "text": "At system and acceptance testing levels only"
      },
      {
        "id": "B",
        "text": "At all test levels"
      },
      {
        "id": "C",
        "text": "At all levels above integration testing"
      },
      {
        "id": "D",
        "text": "At the acceptance testing level only"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Kiểm thử chức năng (Functional testing) có thể và nên được thực hiện ở TẤT CẢ các cấp độ kiểm thử (At all test levels): Unit, Integration, System, và Acceptance testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following activities should be performed during the selection and implementation of a testing tool? i) Investigate the organisation&#039;s test process. ii) Conduct a proof of concept. iii) Implement the selected tool on a project behind schedule to save time. iv) Identify coaching and mentoring requirements for the use of the selected tool.",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii"
      },
      {
        "id": "B",
        "text": "ii, iii, iv"
      },
      {
        "id": "C",
        "text": "i, iii, iv"
      },
      {
        "id": "D",
        "text": "i, ii, iv SWT301 SU26 Final Exam Questions 21 to 25&#8203;"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Các hoạt động chuẩn khi chọn lựa và triển khai công cụ kiểm thử: i) Khảo sát quy trình kiểm thử hiện tại của tổ chức; ii) Tiến hành thử nghiệm PoC (Proof of Concept); iv) Xác định nhu cầu đào tạo và hướng dẫn kèm cặp (coaching/mentoring). Tuyệt đối không áp dụng công cụ mới vào một dự án đang trễ hạn.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: B**\n\n- False. Theo nguyên lý kiểm thử ISTQB số 2: \"Exhaustive testing is impossible\" (Kiểm thử kiệt quệ là bất khả thi), không thể loại bỏ 100% tất cả các lỗi trong phần mềm.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Defect Management process does not include",
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
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Quy trình quản lý lỗi (Defect Management) bao gồm phòng ngừa lỗi, báo cáo quản lý, theo dõi vòng đời của lỗi, nhưng không bao gồm Deliverable base-lining (đây là nhiệm vụ của Quản lý cấu hình - Configuration Management).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Kỹ thuật Loop Testing (Kiểm thử vòng lặp hộp trắng) áp dụng hiệu quả cho: Vòng lặp đơn giản (Simple loops), Vòng lặp lồng nhau (Nested loops), và Vòng lặp nối tiếp (Concatenated loops).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "(Choose 2 answers) Which TWO of the following statements about static analysis are correct?",
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
        "text": "Extensive statistical analysis will not be needed if white- Box testing is to be performed."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Phân tích tĩnh (Static analysis) có thể phát hiện các lỗi mã nguồn tiềm ẩn (lỗ hổng bảo mật, rò rỉ bộ nhớ, biến chưa khởi tạo) mà kiểm thử động rất khó kích hoạt hoặc mất nhiều công sức để phát hiện.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Kiểm thử đánh giá các thuộc tính chất lượng như an toàn bảo mật, hiệu năng tải, độ tin cậy và tính khả dụng của ngân hàng trực tuyến là Kiểm thử phi chức năng (Non-functional testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The purpose of exit criteria is: (choose one answer)",
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
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Mục đích của Exit Criteria (Tiêu chí dừng/kết thúc) là: Xác định khi nào dừng kiểm thử, hoàn thành một cấp độ kiểm thử, hoặc khi tập ca kiểm thử đạt được mức độ bao phủ và chất lượng kỳ vọng.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Match the following: 1. Test estimation 2. Test control 3. Test monitoring a. Measures of tracking process b. Effort required to perform activities c. Reallocation of resources",
    "options": [
      {
        "id": "A",
        "text": "1 -b, 2-c, 3-a"
      },
      {
        "id": "B",
        "text": "1 -b, 2-a, 3-c"
      },
      {
        "id": "C",
        "text": "1 -c, 2-a, 3-b"
      },
      {
        "id": "D",
        "text": "1 -a, 2-b, 3-c"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ghép nối:\n- 1. Test estimation (Ước lượng kiểm thử) -> b. Nỗ lực cần thiết để thực hiện công việc\n- 2. Test control (Kiểm soát kiểm thử) -> c. Tái phân bổ nguồn lực và điều chỉnh kế hoạch\n- 3. Test monitoring (Giám sát kiểm thử) -> a. Đo lường và theo dõi tiến độ thực tế.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which tool will be used to test the flag memory leaks and unassigned pointers",
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
    "explanation": "**Đáp án đúng: A**\n\n- Rò rỉ bộ nhớ (memory leaks) và con trỏ chưa gán/lạc hướng (unassigned/wild pointers) khi chương trình chạy được phát hiện tốt nhất bằng Công cụ phân tích động (Dynamic analysis tool - ví dụ Valgrind, Purify).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Find out what your budget would be for the tool E. Search the internet"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Bước đầu tiên và quan trọng nhất khi muốn mua/áp dụng công cụ kiểm thử mới là Phân tích nhu cầu và yêu cầu thực tế của tổ chức (Analyze your needs and requirements).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Can&#039;t say SWT301 Multiple Choice Exam Questions&#8203;"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Nâng cao chất lượng phần mềm nhờ các phương pháp phát triển tốt hơn (viết code chuẩn, static analysis, unit test kỹ) sẽ làm giảm số lượng bug phát sinh, từ đó giảm thời gian cần thiết cho các đợt kiểm thử (Reducing test time).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Theo tiêu chuẩn ISO 9126, 6 đặc tính chất lượng phần mềm gồm: Functionality, Reliability, Usability, Efficiency, Maintainability, Portability. Supportability không nằm trong ISO 9126 (nó thuộc mô hình FURPS+).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is not included in Test Plan.",
    "options": [
      {
        "id": "A",
        "text": "Features to be tested."
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
        "text": "Expected results."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Kết quả kỳ vọng (Expected results) được đặc tả chi tiết trong từng Test Case / Test Procedure Specification, KHÔNG nằm trong Kế hoạch kiểm thử tổng thể (Test Plan - chỉ định nghĩa scope, features to test, environmental needs, suspension criteria).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "One of the fields on a form contains a text box which accepts alpha numeric values. Identify the Valid Equivalence class",
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
        "text": "Boo01k"
      },
      {
        "id": "D",
        "text": "book"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trường nhập giá trị alpha-numeric (chữ và số kết hợp): \"Boo01k\" chứa cả ký tự chữ và số nên thuộc phân vùng hợp lệ (Valid Equivalence Class).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: B**\n\n- Sự khác biệt cốt lõi: Cuộc kiểm tra chính thức (Inspection) được dẫn dắt bởi một Điều phối viên độc lập (trained Moderator), trong khi Walkthrough do chính Tác giả của tài liệu (Author) chủ trì và trình bày.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Handover of Testware is a part of which Phase",
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
    "explanation": "**Đáp án đúng: C**\n\n- Bàn giao tài liệu kiểm thử và hiện vật (Handover of Testware) là hoạt động then chốt thuộc giai đoạn Đóng kiểm thử (Test Closure Activities).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which expression best matches the following characteristics or review processes: 1. Led by author 2. Undocumented 3. No management participation 4. Led by a trained moderator or leader 5. Uses entry exit criteria s) Inspection t) Peer review u) Informal review v) Walkthrough",
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
        "text": "s = 5, t = 4, u = 3, v = 1 and 2 E. s = 4 and 5, t = 1, u = 2, v = 3"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Khớp các loại Review:\n- s. Inspection: Dẫn dắt bởi trained moderator (4) và sử dụng tiêu chí entry/exit chuẩn (5)\n- t. Peer review: Thường không có sự tham gia của ban quản lý (3)\n- u. Informal review: Không cần ghi chép tài liệu trang trọng (2)\n- v. Walkthrough: Do tác giả chủ trì (1).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Testing wherein we subject the target of the test, to varying workloads to measure and evaluate the performance behaviors and ability of the target and of the test to continue to function properly under these different workloads.",
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử đặt hệ thống dưới các mức tải khác nhau để đo lường hành vi và hiệu năng vận hành là Kiểm thử tải (Load Testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Cost of the reviews will not include.",
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
        "text": "Tool support."
      },
      {
        "id": "D",
        "text": "Process improvement."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Chi phí trực tiếp của hoạt động review bao gồm: thời gian thực hiện quy trình review, phân tích chỉ số, công cụ hỗ trợ. Process improvement (cải tiến quy trình) là lợi ích dài hạn đem lại chứ không tính là chi phí thuần của buổi review.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Đoán lỗi (Error guessing) là một kỹ thuật kiểm thử động dựa trên kinh nghiệm (Experience-based dynamic technique), KHÔNG PHẢI là kỹ thuật kiểm thử tĩnh (Static testing). Walkthrough, Data flow analysis, Inspection đều là kiểm thử tĩnh.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The Planning phase of a formal review includes which of the followings?",
    "options": [
      {
        "id": "A",
        "text": "Explaining the objectives"
      },
      {
        "id": "B",
        "text": "Selecting the personnel, allocating roles."
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
    "explanation": "**Đáp án đúng: B**\n\n- Giai đoạn Lập kế hoạch (Planning) của buổi đánh giá tài liệu chính thức bao gồm: Xác định phạm vi mục tiêu, lựa chọn nhân sự tham gia và phân công vai trò (Author, Moderator, Scribe, Reviewer).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Độ phủ mã nguồn (Code Coverage: Statement coverage, Branch coverage) được sử dụng làm thước đo Hiệu quả kiểm thử (Test Effectiveness) và mức độ kỹ lưỡng của tập ca kiểm thử.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which is not the testing objectives",
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
    "explanation": "**Đáp án đúng: D**\n\n- Debugging (gỡ lỗi - định vị và sửa chữa lỗi mã nguồn) là công việc của lập trình viên, KHÔNG PHẢI là mục tiêu của kiểm thử phần mềm (Testing nhằm tìm lỗi, tạo dựng niềm tin và phòng ngừa lỗi).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Công cụ Record/Playback (Capture/Playback) được sử dụng phổ biến nhất để tự động hóa các ca kiểm thử hồi quy (Regression test).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "_____ includes both Black box and White Box Testing features (choose one answer)",
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
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Kiểm thử kết hợp cả đặc tính hộp đen (dựa trên yêu cầu) và cấu trúc hộp trắng (mã nguồn/cơ sở dữ liệu) được gọi là Gray Box Testing hoặc Hybrid Testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Who are the persons involved in a Formal Review i) Manager ii) Moderator iii) Scribe / Recorder iv) Assistant Manager",
    "options": [
      {
        "id": "A",
        "text": "i,ii,iii,iv are true"
      },
      {
        "id": "B",
        "text": "i,ii,iii are true and iv is false."
      },
      {
        "id": "C",
        "text": "ii,iii,iv are true and i is false."
      },
      {
        "id": "D",
        "text": "i,iv are true and ii, iii are false."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Các vai trò chuẩn trong Formal Review theo ISTQB gồm: i) Manager (quyết định thực hiện); ii) Moderator (chủ trì); iii) Scribe / Recorder (ghi chép biên bản). Assistant Manager không phải là vai trò chuẩn.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Mức độ độc lập cao nhất (Highest level of independence) trong kiểm thử là khi ca kiểm thử được thiết kế bởi người thuộc một tổ chức hoàn toàn độc lập (ví dụ đơn vị kiểm thử bên ngoài / 3rd party testing vendor).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Success Factors for a review include: i. Each Review does not have a predefined objective ii. Defects found are welcomed and expressed objectively iii. Management supports a good review process. iv. There is an emphasis on learning and process improvement.",
    "options": [
      {
        "id": "A",
        "text": "ii,iii,iv are correct and i is incorrect"
      },
      {
        "id": "B",
        "text": "iii , i , iv is correct and ii is incorrect"
      },
      {
        "id": "C",
        "text": "i , iii , iv , ii is in correct"
      },
      {
        "id": "D",
        "text": "ii is correct"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yếu tố thành công của review: ii) Lỗi phát hiện được hoan nghênh và diễn đạt khách quan; iii) Ban quản lý ủng hộ quy trình; iv) Chú trọng học hỏi và cải tiến quy trình. Mệnh đề i sai vì mỗi review BẮT BUỘC phải có mục tiêu xác định trước.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "In a review meeting a moderator is a person who",
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
    "explanation": "**Đáp án đúng: B**\n\n- Trong cuộc họp đánh giá, Moderator là người làm trung gian điều phối giữa mọi người (Mediates between people), đảm bảo cuộc họp diễn ra suôn sẻ, đúng giờ và tập trung vào mục tiêu.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is a Key Characteristics of WalkThrough",
    "options": [
      {
        "id": "A",
        "text": "Scenario , Dry Run , Peer Group"
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
    "explanation": "**Đáp án đúng: A**\n\n- Đặc trưng cốt lõi của Walkthrough: Trình bày kịch bản (Scenario), chạy thử trên giấy (Dry Run), có sự tham gia của nhóm đồng nghiệp bình duyệt (Peer Group).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "One of the following is not a part of white box testing as per BS7925-II standards.",
    "options": [
      {
        "id": "A",
        "text": "Random testing"
      },
      {
        "id": "B",
        "text": "Data Flow testing."
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử ngẫu nhiên (Random testing) là kỹ thuật kiểm thử hộp đen, không thuộc kiểm thử cấu trúc hộp trắng theo tiêu chuẩn BS 7925-2.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Recording test inputs E. Reading test values from a data file"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Công cụ thực thi kiểm thử tự động (Test execution tool) KHÔNG THỂ tự động sáng tạo/sinh ra kết quả kỳ vọng đúng đắn (Generating expected outputs) nếu không có oracle hoặc con người cung cấp.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Hệ thống ghi nhận sự cố (Incident logging system) là nguồn thông tin vô cùng giá trị cho dự án nếu nó ghi nhận đầy đủ mọi sự cố phát sinh trong quá trình kiểm thử.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Measurement dysfunction is a problem because:",
    "options": [
      {
        "id": "A",
        "text": "Even though the numbers you look at appear better, to achieve these numbers, people are doing other aspects of their work much less well."
      },
      {
        "id": "B",
        "text": "We don&#039;t know how to measure a variable (our measurement is dysfunctional) and so we don&#039;t know how to interpret the result."
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
    "explanation": "**Đáp án đúng: A**\n\n- Sự rối loạn đo lường (Measurement dysfunction) xảy ra khi mọi người chỉ cố gắng làm cho các con số chỉ số đẹp lên trên báo cáo nhưng thực tế lại bỏ bê chất lượng các công việc cốt lõi khác.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is the standard for the Software product quality",
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
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn quốc tế định nghĩa mô hình chất lượng sản phẩm phần mềm (Software product quality) là ISO 9126 (sau này được kế thừa và phát triển thành ISO/IEC 25010).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Boundary value testing",
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
    "explanation": "**Đáp án đúng: B**\n\n- Phân tích giá trị biên (Boundary Value Analysis) là kỹ thuật kiểm tra các điều kiện ngay tại biên, ngay dưới biên và ngay trên biên của các phân vùng tương đương (on, below, and above edges).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Component Testing is also called as i) Unit Testing ii) Program Testing iii) Module Testing iv) System Component Testing.",
    "options": [
      {
        "id": "A",
        "text": "i,ii,iii are true and iv is false"
      },
      {
        "id": "B",
        "text": "i,ii,iii,iv are false"
      },
      {
        "id": "C",
        "text": "i,ii,iv are true and iii is false"
      },
      {
        "id": "D",
        "text": "All of them are true"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử thành phần (Component Testing) còn có các tên gọi tương đương là: Unit Testing, Program Testing, Module Testing. Không gọi là System Component Testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Software quality is not relevant to _____",
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
    "explanation": "**Đáp án đúng: C**\n\n- Viability (tính khả thi kinh doanh/kinh tế) là thước đo tài chính/quản lý dự án, không thuộc các thuộc tính chất lượng kỹ thuật của phần mềm theo ISO 9126.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Who is responsible for document all the issues, problems and open point that were identified during the review meeting",
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
    "explanation": "**Đáp án đúng: B**\n\n- Người chịu trách nhiệm ghi chép lại toàn bộ các vấn đề, lỗi và điểm còn mở trong cuộc họp review là Thư ký (Scribe / Recorder).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Khi mua một công cụ kiểm thử mới, nó phải được triển khai thí điểm (Pilot project) trước tiên bởi một nhóm nhỏ để tìm ra cách áp dụng và quy trình tối ưu nhất.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The Phases of formal review process is mentioned below arrange them in the correct order. i) Planning ii) Review Meeting iii) Rework iv) Individual Preparations v) Kick Off vi) Follow Up",
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
    "explanation": "**Đáp án đúng: C**\n\n- Thứ tự chuẩn của quy trình đánh giá chính thức (Formal Review Process): i) Planning (Lập kế hoạch) -> v) Kick-off (Khởi động) -> iv) Individual Preparation (Chuẩn bị cá nhân) -> ii) Review Meeting (Họp đánh giá) -> iii) Rework (Chỉnh sửa) -> vi) Follow-up (Theo dõi kiểm tra lại).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which test may not mimic real world situations (choose one answer)",
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
    "explanation": "**Đáp án đúng: B**\n\n- Kiểm thử cấu trúc / hộp trắng (Structural Testing) kiểm tra luồng logic và đường rẽ nhánh mã nguồn bên trong nên không mô phỏng sát hành vi sử dụng thực tế của người dùng ngoài đời thực như kiểm thử chức năng (Functional testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Mục tiêu hàng đầu và bản chất của kiểm thử phần mềm là phát hiện lỗi (Uncover software errors / find defects). Không thể loại bỏ mọi lỗi hay thay thế bảo trì.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Defects discovered by static analysis tools include: i. Variables that are never used. ii. Security vulnerabilities. iii. Programming Standard Violations iv. Uncalled functions and procedures",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv is correct"
      },
      {
        "id": "B",
        "text": "iii ,is correct I,ii,iv are incorrect."
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
    "explanation": "**Đáp án đúng: A**\n\n- Phân tích tĩnh bằng công cụ (Static analysis tools) có thể tự động phát hiện: i) Biến được khai báo nhưng không dùng; ii) Lỗ hổng bảo mật tiềm ẩn; iii) Vi phạm quy chuẩn lập trình; iv) Hàm/thủ tục không bao giờ được gọi (dead code).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following benefits are MOST likely to be achieved by using test tools? i) Easy to access information about tests and testing. ii) Reduced maintenance of testware. iii) Easy and cheap to implement. iv) Greater consistency of tests.",
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
    "explanation": "**Đáp án đúng: C**\n\n- Lợi ích lớn nhất khi sử dụng công cụ kiểm thử: i) Dễ dàng truy xuất thông tin về kết quả kiểm thử; iv) Tăng tính nhất quán và chuẩn mực giữa các lần thực thi test. (Tự động hóa không hề rẻ và thường làm tăng chi phí bảo trì testware).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Mức độ rủi ro (Level of Risk) được xác định bằng tích của hai yếu tố: Khả năng xảy ra rủi ro (Likelihood / Probability) và Mức độ ảnh hưởng nếu rủi ro xảy ra (Impact).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử chuyển trạng thái (State Transition Testing) là một kỹ thuật kiểm thử chức năng hộp đen (Black-box functional technique), KHÔNG PHẢI là kiểm thử phi chức năng (Non-functional testing). Usability, Performance, Security là phi chức năng.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The person who leads the review of the document(s), planning the review, running the meeting and follow-up after the meeting",
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
    "explanation": "**Đáp án đúng: C**\n\n- Điều phối viên (Moderator / Review Leader) là người chủ trì buổi đánh giá chính thức (formal review): lập kế hoạch, điều hành cuộc họp và theo dõi kết quả sau cuộc họp.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Reviews, static analysis and dynamic testing have the same objective",
    "options": [
      {
        "id": "A",
        "text": "(i) Identifying defects."
      },
      {
        "id": "B",
        "text": "(ii) Fixing defects."
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
    "explanation": "**Đáp án đúng: A**\n\n- Cả đánh giá tài liệu (Reviews), phân tích tĩnh (Static analysis) và kiểm thử động (Dynamic testing) đều có chung một mục tiêu cốt lõi là: Xác định và phát hiện lỗi (Identifying defects). Việc sửa lỗi (fixing defects) là trách nhiệm của Developer (Debugging).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "PDCA is known as",
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
    "explanation": "**Đáp án đúng: A**\n\n- Chu trình cải tiến chất lượng PDCA của Deming là viết tắt của: Plan (Lập kế hoạch) -> Do (Thực hiện) -> Check (Kiểm tra đánh giá) -> Act (Hành động cải tiến).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "id": "A",
        "text": "Faults in program specifications are the most expensive to fix"
      },
      {
        "id": "B",
        "text": "Faults in code are the most expensive to fix"
      },
      {
        "id": "C",
        "text": "Faults in requirements are the most expensive to fix"
      },
      {
        "id": "D",
        "text": "Faults in designs are the most expensive to fix"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Lỗi nằm trong tài liệu Yêu cầu (Requirements) là lỗi tốn kém chi phí sửa chữa nhất nếu không được phát hiện sớm, vì yêu cầu là nền móng cho toàn bộ kiến trúc, thiết kế, mã nguồn và ca kiểm thử phía sau.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Thời điểm dừng kiểm thử chuẩn xác nhất là khi các Tiêu chí hoàn thành kiểm thử đã định trước được thỏa mãn (When the test completion criteria / exit criteria have been met).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Where may functional testing be performed?",
    "options": [
      {
        "id": "A",
        "text": "At system and acceptance testing levels only"
      },
      {
        "id": "B",
        "text": "At all test levels"
      },
      {
        "id": "C",
        "text": "At all levels above integration testing"
      },
      {
        "id": "D",
        "text": "At the acceptance testing level only"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Kiểm thử chức năng (Functional testing) có thể và nên được thực hiện ở TẤT CẢ các cấp độ kiểm thử (At all test levels): Unit, Integration, System, và Acceptance testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following activities should be performed during the selection and implementation of a testing tool? i) Investigate the organisation&#039;s test process. ii) Conduct a proof of concept. iii) Implement the selected tool on a project behind schedule to save time. iv) Identify coaching and mentoring requirements for the use of the selected tool.",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii"
      },
      {
        "id": "B",
        "text": "ii, iii, iv"
      },
      {
        "id": "C",
        "text": "i, iii, iv"
      },
      {
        "id": "D",
        "text": "i, ii, iv SWT301 SU26 Final Exam Questions 21 to 25&#8203;"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Các hoạt động chuẩn khi chọn lựa và triển khai công cụ kiểm thử: i) Khảo sát quy trình kiểm thử hiện tại của tổ chức; ii) Tiến hành thử nghiệm PoC (Proof of Concept); iv) Xác định nhu cầu đào tạo và hướng dẫn kèm cặp (coaching/mentoring). Tuyệt đối không áp dụng công cụ mới vào một dự án đang trễ hạn.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: B**\n\n- False. Theo nguyên lý kiểm thử ISTQB số 2: \"Exhaustive testing is impossible\" (Kiểm thử kiệt quệ là bất khả thi), không thể loại bỏ 100% tất cả các lỗi trong phần mềm.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Defect Management process does not include",
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
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Quy trình quản lý lỗi (Defect Management) bao gồm phòng ngừa lỗi, báo cáo quản lý, theo dõi vòng đời của lỗi, nhưng không bao gồm Deliverable base-lining (đây là nhiệm vụ của Quản lý cấu hình - Configuration Management).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Kỹ thuật Loop Testing (Kiểm thử vòng lặp hộp trắng) áp dụng hiệu quả cho: Vòng lặp đơn giản (Simple loops), Vòng lặp lồng nhau (Nested loops), và Vòng lặp nối tiếp (Concatenated loops).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "(Choose 2 answers) Which TWO of the following statements about static analysis are correct?",
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
        "text": "Extensive statistical analysis will not be needed if white- Box testing is to be performed."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Phân tích tĩnh (Static analysis) có thể phát hiện các lỗi mã nguồn tiềm ẩn (lỗ hổng bảo mật, rò rỉ bộ nhớ, biến chưa khởi tạo) mà kiểm thử động rất khó kích hoạt hoặc mất nhiều công sức để phát hiện.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Kiểm thử đánh giá các thuộc tính chất lượng như an toàn bảo mật, hiệu năng tải, độ tin cậy và tính khả dụng của ngân hàng trực tuyến là Kiểm thử phi chức năng (Non-functional testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The purpose of exit criteria is: (choose one answer)",
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
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Mục đích của Exit Criteria (Tiêu chí dừng/kết thúc) là: Xác định khi nào dừng kiểm thử, hoàn thành một cấp độ kiểm thử, hoặc khi tập ca kiểm thử đạt được mức độ bao phủ và chất lượng kỳ vọng.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Match the following: 1. Test estimation 2. Test control 3. Test monitoring a. Measures of tracking process b. Effort required to perform activities c. Reallocation of resources",
    "options": [
      {
        "id": "A",
        "text": "1 -b, 2-c, 3-a"
      },
      {
        "id": "B",
        "text": "1 -b, 2-a, 3-c"
      },
      {
        "id": "C",
        "text": "1 -c, 2-a, 3-b"
      },
      {
        "id": "D",
        "text": "1 -a, 2-b, 3-c"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ghép nối:\n- 1. Test estimation (Ước lượng kiểm thử) -> b. Nỗ lực cần thiết để thực hiện công việc\n- 2. Test control (Kiểm soát kiểm thử) -> c. Tái phân bổ nguồn lực và điều chỉnh kế hoạch\n- 3. Test monitoring (Giám sát kiểm thử) -> a. Đo lường và theo dõi tiến độ thực tế.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which tool will be used to test the flag memory leaks and unassigned pointers",
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
    "explanation": "**Đáp án đúng: A**\n\n- Rò rỉ bộ nhớ (memory leaks) và con trỏ chưa gán/lạc hướng (unassigned/wild pointers) khi chương trình chạy được phát hiện tốt nhất bằng Công cụ phân tích động (Dynamic analysis tool - ví dụ Valgrind, Purify).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Find out what your budget would be for the tool E. Search the internet"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Bước đầu tiên và quan trọng nhất khi muốn mua/áp dụng công cụ kiểm thử mới là Phân tích nhu cầu và yêu cầu thực tế của tổ chức (Analyze your needs and requirements).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Can&#039;t say SWT301 Multiple Choice Exam Questions&#8203;"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Nâng cao chất lượng phần mềm nhờ các phương pháp phát triển tốt hơn (viết code chuẩn, static analysis, unit test kỹ) sẽ làm giảm số lượng bug phát sinh, từ đó giảm thời gian cần thiết cho các đợt kiểm thử (Reducing test time).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Theo tiêu chuẩn ISO 9126, 6 đặc tính chất lượng phần mềm gồm: Functionality, Reliability, Usability, Efficiency, Maintainability, Portability. Supportability không nằm trong ISO 9126 (nó thuộc mô hình FURPS+).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is not included in Test Plan.",
    "options": [
      {
        "id": "A",
        "text": "Features to be tested."
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
        "text": "Expected results."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Kết quả kỳ vọng (Expected results) được đặc tả chi tiết trong từng Test Case / Test Procedure Specification, KHÔNG nằm trong Kế hoạch kiểm thử tổng thể (Test Plan - chỉ định nghĩa scope, features to test, environmental needs, suspension criteria).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "One of the fields on a form contains a text box which accepts alpha numeric values. Identify the Valid Equivalence class",
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
        "text": "Boo01k"
      },
      {
        "id": "D",
        "text": "book"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trường nhập giá trị alpha-numeric (chữ và số kết hợp): \"Boo01k\" chứa cả ký tự chữ và số nên thuộc phân vùng hợp lệ (Valid Equivalence Class).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: B**\n\n- Sự khác biệt cốt lõi: Cuộc kiểm tra chính thức (Inspection) được dẫn dắt bởi một Điều phối viên độc lập (trained Moderator), trong khi Walkthrough do chính Tác giả của tài liệu (Author) chủ trì và trình bày.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Handover of Testware is a part of which Phase",
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
    "explanation": "**Đáp án đúng: C**\n\n- Bàn giao tài liệu kiểm thử và hiện vật (Handover of Testware) là hoạt động then chốt thuộc giai đoạn Đóng kiểm thử (Test Closure Activities).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which expression best matches the following characteristics or review processes: 1. Led by author 2. Undocumented 3. No management participation 4. Led by a trained moderator or leader 5. Uses entry exit criteria s) Inspection t) Peer review u) Informal review v) Walkthrough",
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
        "text": "s = 5, t = 4, u = 3, v = 1 and 2 E. s = 4 and 5, t = 1, u = 2, v = 3"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Khớp các loại Review:\n- s. Inspection: Dẫn dắt bởi trained moderator (4) và sử dụng tiêu chí entry/exit chuẩn (5)\n- t. Peer review: Thường không có sự tham gia của ban quản lý (3)\n- u. Informal review: Không cần ghi chép tài liệu trang trọng (2)\n- v. Walkthrough: Do tác giả chủ trì (1).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Testing wherein we subject the target of the test, to varying workloads to measure and evaluate the performance behaviors and ability of the target and of the test to continue to function properly under these different workloads.",
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử đặt hệ thống dưới các mức tải khác nhau để đo lường hành vi và hiệu năng vận hành là Kiểm thử tải (Load Testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Cost of the reviews will not include.",
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
        "text": "Tool support."
      },
      {
        "id": "D",
        "text": "Process improvement."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Chi phí trực tiếp của hoạt động review bao gồm: thời gian thực hiện quy trình review, phân tích chỉ số, công cụ hỗ trợ. Process improvement (cải tiến quy trình) là lợi ích dài hạn đem lại chứ không tính là chi phí thuần của buổi review.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Đoán lỗi (Error guessing) là một kỹ thuật kiểm thử động dựa trên kinh nghiệm (Experience-based dynamic technique), KHÔNG PHẢI là kỹ thuật kiểm thử tĩnh (Static testing). Walkthrough, Data flow analysis, Inspection đều là kiểm thử tĩnh.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The Planning phase of a formal review includes which of the followings?",
    "options": [
      {
        "id": "A",
        "text": "Explaining the objectives"
      },
      {
        "id": "B",
        "text": "Selecting the personnel, allocating roles."
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
    "explanation": "**Đáp án đúng: B**\n\n- Giai đoạn Lập kế hoạch (Planning) của buổi đánh giá tài liệu chính thức bao gồm: Xác định phạm vi mục tiêu, lựa chọn nhân sự tham gia và phân công vai trò (Author, Moderator, Scribe, Reviewer).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Độ phủ mã nguồn (Code Coverage: Statement coverage, Branch coverage) được sử dụng làm thước đo Hiệu quả kiểm thử (Test Effectiveness) và mức độ kỹ lưỡng của tập ca kiểm thử.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which is not the testing objectives",
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
    "explanation": "**Đáp án đúng: D**\n\n- Debugging (gỡ lỗi - định vị và sửa chữa lỗi mã nguồn) là công việc của lập trình viên, KHÔNG PHẢI là mục tiêu của kiểm thử phần mềm (Testing nhằm tìm lỗi, tạo dựng niềm tin và phòng ngừa lỗi).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Công cụ Record/Playback (Capture/Playback) được sử dụng phổ biến nhất để tự động hóa các ca kiểm thử hồi quy (Regression test).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "_____ includes both Black box and White Box Testing features (choose one answer)",
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
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Kiểm thử kết hợp cả đặc tính hộp đen (dựa trên yêu cầu) và cấu trúc hộp trắng (mã nguồn/cơ sở dữ liệu) được gọi là Gray Box Testing hoặc Hybrid Testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Who are the persons involved in a Formal Review i) Manager ii) Moderator iii) Scribe / Recorder iv) Assistant Manager",
    "options": [
      {
        "id": "A",
        "text": "i,ii,iii,iv are true"
      },
      {
        "id": "B",
        "text": "i,ii,iii are true and iv is false."
      },
      {
        "id": "C",
        "text": "ii,iii,iv are true and i is false."
      },
      {
        "id": "D",
        "text": "i,iv are true and ii, iii are false."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Các vai trò chuẩn trong Formal Review theo ISTQB gồm: i) Manager (quyết định thực hiện); ii) Moderator (chủ trì); iii) Scribe / Recorder (ghi chép biên bản). Assistant Manager không phải là vai trò chuẩn.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Mức độ độc lập cao nhất (Highest level of independence) trong kiểm thử là khi ca kiểm thử được thiết kế bởi người thuộc một tổ chức hoàn toàn độc lập (ví dụ đơn vị kiểm thử bên ngoài / 3rd party testing vendor).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Success Factors for a review include: i. Each Review does not have a predefined objective ii. Defects found are welcomed and expressed objectively iii. Management supports a good review process. iv. There is an emphasis on learning and process improvement.",
    "options": [
      {
        "id": "A",
        "text": "ii,iii,iv are correct and i is incorrect"
      },
      {
        "id": "B",
        "text": "iii , i , iv is correct and ii is incorrect"
      },
      {
        "id": "C",
        "text": "i , iii , iv , ii is in correct"
      },
      {
        "id": "D",
        "text": "ii is correct"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yếu tố thành công của review: ii) Lỗi phát hiện được hoan nghênh và diễn đạt khách quan; iii) Ban quản lý ủng hộ quy trình; iv) Chú trọng học hỏi và cải tiến quy trình. Mệnh đề i sai vì mỗi review BẮT BUỘC phải có mục tiêu xác định trước.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "In a review meeting a moderator is a person who",
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
    "explanation": "**Đáp án đúng: B**\n\n- Trong cuộc họp đánh giá, Moderator là người làm trung gian điều phối giữa mọi người (Mediates between people), đảm bảo cuộc họp diễn ra suôn sẻ, đúng giờ và tập trung vào mục tiêu.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is a Key Characteristics of WalkThrough",
    "options": [
      {
        "id": "A",
        "text": "Scenario , Dry Run , Peer Group"
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
    "explanation": "**Đáp án đúng: A**\n\n- Đặc trưng cốt lõi của Walkthrough: Trình bày kịch bản (Scenario), chạy thử trên giấy (Dry Run), có sự tham gia của nhóm đồng nghiệp bình duyệt (Peer Group).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "One of the following is not a part of white box testing as per BS7925-II standards.",
    "options": [
      {
        "id": "A",
        "text": "Random testing"
      },
      {
        "id": "B",
        "text": "Data Flow testing."
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử ngẫu nhiên (Random testing) là kỹ thuật kiểm thử hộp đen, không thuộc kiểm thử cấu trúc hộp trắng theo tiêu chuẩn BS 7925-2.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Recording test inputs E. Reading test values from a data file"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Công cụ thực thi kiểm thử tự động (Test execution tool) KHÔNG THỂ tự động sáng tạo/sinh ra kết quả kỳ vọng đúng đắn (Generating expected outputs) nếu không có oracle hoặc con người cung cấp.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Hệ thống ghi nhận sự cố (Incident logging system) là nguồn thông tin vô cùng giá trị cho dự án nếu nó ghi nhận đầy đủ mọi sự cố phát sinh trong quá trình kiểm thử.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Measurement dysfunction is a problem because:",
    "options": [
      {
        "id": "A",
        "text": "Even though the numbers you look at appear better, to achieve these numbers, people are doing other aspects of their work much less well."
      },
      {
        "id": "B",
        "text": "We don&#039;t know how to measure a variable (our measurement is dysfunctional) and so we don&#039;t know how to interpret the result."
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
    "explanation": "**Đáp án đúng: A**\n\n- Sự rối loạn đo lường (Measurement dysfunction) xảy ra khi mọi người chỉ cố gắng làm cho các con số chỉ số đẹp lên trên báo cáo nhưng thực tế lại bỏ bê chất lượng các công việc cốt lõi khác.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is the standard for the Software product quality",
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
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn quốc tế định nghĩa mô hình chất lượng sản phẩm phần mềm (Software product quality) là ISO 9126 (sau này được kế thừa và phát triển thành ISO/IEC 25010).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Boundary value testing",
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
    "explanation": "**Đáp án đúng: B**\n\n- Phân tích giá trị biên (Boundary Value Analysis) là kỹ thuật kiểm tra các điều kiện ngay tại biên, ngay dưới biên và ngay trên biên của các phân vùng tương đương (on, below, and above edges).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Component Testing is also called as i) Unit Testing ii) Program Testing iii) Module Testing iv) System Component Testing.",
    "options": [
      {
        "id": "A",
        "text": "i,ii,iii are true and iv is false"
      },
      {
        "id": "B",
        "text": "i,ii,iii,iv are false"
      },
      {
        "id": "C",
        "text": "i,ii,iv are true and iii is false"
      },
      {
        "id": "D",
        "text": "All of them are true"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử thành phần (Component Testing) còn có các tên gọi tương đương là: Unit Testing, Program Testing, Module Testing. Không gọi là System Component Testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Software quality is not relevant to _____",
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
    "explanation": "**Đáp án đúng: C**\n\n- Viability (tính khả thi kinh doanh/kinh tế) là thước đo tài chính/quản lý dự án, không thuộc các thuộc tính chất lượng kỹ thuật của phần mềm theo ISO 9126.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Who is responsible for document all the issues, problems and open point that were identified during the review meeting",
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
    "explanation": "**Đáp án đúng: B**\n\n- Người chịu trách nhiệm ghi chép lại toàn bộ các vấn đề, lỗi và điểm còn mở trong cuộc họp review là Thư ký (Scribe / Recorder).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Khi mua một công cụ kiểm thử mới, nó phải được triển khai thí điểm (Pilot project) trước tiên bởi một nhóm nhỏ để tìm ra cách áp dụng và quy trình tối ưu nhất.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The Phases of formal review process is mentioned below arrange them in the correct order. i) Planning ii) Review Meeting iii) Rework iv) Individual Preparations v) Kick Off vi) Follow Up",
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
    "explanation": "**Đáp án đúng: C**\n\n- Thứ tự chuẩn của quy trình đánh giá chính thức (Formal Review Process): i) Planning (Lập kế hoạch) -> v) Kick-off (Khởi động) -> iv) Individual Preparation (Chuẩn bị cá nhân) -> ii) Review Meeting (Họp đánh giá) -> iii) Rework (Chỉnh sửa) -> vi) Follow-up (Theo dõi kiểm tra lại).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "id": "a",
        "text": "Requirements"
      },
      {
        "id": "b",
        "text": "Documentation"
      },
      {
        "id": "c",
        "text": "Test cases"
      },
      {
        "id": "d",
        "text": "Improvements suggested by users"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Sự cố (incident) thường được ghi nhận khi có sai sót/bất thường trong yêu cầu (requirements), tài liệu (documentation), ca kiểm thử (test cases) hoặc phần mềm. Tuy nhiên, các đề xuất cải tiến của người dùng (improvements suggested by users) được quản lý dưới dạng Change Requests (CR) chứ không mở Incident report.",
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
        "id": "a",
        "text": "Ensure the test item is adequately tested"
      },
      {
        "id": "b",
        "text": "Make the need for black-box testing redundant."
      },
      {
        "id": "c",
        "text": "Run the risk that the requirements are not satisfied."
      },
      {
        "id": "d",
        "text": "Suffices for the unit testing phase"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Chỉ sử dụng duy nhất kiểm thử hộp trắng (White-box testing) sẽ dẫn đến rủi ro nghiêm trọng là không đáp ứng được yêu cầu của người dùng (Requirements not satisfied), vì hộp trắng chỉ kiểm tra cấu trúc mã nội bộ mà không kiểm tra được các chức năng bị bỏ sót (omissions).",
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
    "prompt": "The principal attributes of tools and automation are (choose one answer)",
    "options": [
      {
        "id": "a",
        "text": "(1) Speed & efficiency"
      },
      {
        "id": "b",
        "text": "(2) Accuracy & precision"
      },
      {
        "id": "c",
        "text": "Both of (1) and (2)"
      },
      {
        "id": "d",
        "text": "None of (1) nor (2)"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Hai thuộc tính cốt lõi và giá trị lớn nhất của công cụ và kiểm thử tự động là: 1) Tốc độ & hiệu quả (Speed & efficiency); 2) Độ chính xác & tính lặp lại chuẩn xác (Accuracy & precision).",
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
    "prompt": "Match every stage of the software Development Life cycle with the Testing Life cycle: i. Hi-level design ii. Code iii. Low-level design iv. Business requirements a. Unit tests b. Acceptance tests c. System tests d. Integration tests",
    "options": [
      {
        "id": "a",
        "text": "i-d, ii-a, iii-c, iv-b"
      },
      {
        "id": "b",
        "text": "i-c, ii-d, iii-a, iv-b"
      },
      {
        "id": "c",
        "text": "i-b, ii-a, iii-d, iv-c"
      },
      {
        "id": "d",
        "text": "i-c, ii-a, iii-d, iv-b"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khớp các giai đoạn trong V-model:\n- i. High-level design -> d. Integration tests (Kiểm thử tích hợp các module kiến trúc)\n- ii. Code -> a. Unit tests (Kiểm thử đơn vị mã nguồn)\n- iii. Low-level design -> c. System tests hoặc component integration\n- iv. Business requirements -> b. Acceptance tests (Kiểm thử chấp nhận người dùng).",
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
    "prompt": "What type of tools to be used for Regression Testing ?",
    "options": [
      {
        "id": "a",
        "text": "(1) Performance"
      },
      {
        "id": "b",
        "text": "(2) Record/Playback"
      },
      {
        "id": "c",
        "text": "Both of (1) and (2)"
      },
      {
        "id": "d",
        "text": "None of (1) nor (2) SWT301 Multiple Choice Questions&#8203;"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Công cụ phù hợp nhất cho kiểm thử hồi quy (Regression Testing) là công cụ Record/Playback (ghi và phát lại các kịch bản kiểm thử tự động) để chạy lại nhanh chóng các test case cũ khi có thay đổi code.",
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
        "id": "a",
        "text": "The documentation is poor, so it takes longer to find out what the software is doing."
      },
      {
        "id": "b",
        "text": "Wages are rising"
      },
      {
        "id": "c",
        "text": "The fault has been built into more documentation, code, tests, etc"
      },
      {
        "id": "d",
        "text": "None of the others"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Lỗi phát hiện càng muộn trong vòng đời phát triển phần mềm (SDLC) thì chi phí sửa càng đắt đỏ vì lỗi đó đã bị lan truyền, nhúng sâu vào nhiều tài liệu thiết kế, mã nguồn, ca kiểm thử và cấu trúc hệ thống khác.",
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
        "id": "a",
        "text": "IEEE 829"
      },
      {
        "id": "b",
        "text": "IEEE 610"
      },
      {
        "id": "c",
        "text": "BS7925-1"
      },
      {
        "id": "d",
        "text": "BS7925-2"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Tiêu chuẩn quốc tế cho kiểm thử thành phần phần mềm (Component Testing Standard) là BS 7925-2. (BS 7925-1 là bảng thuật ngữ từ điển kiểm thử, IEEE 829 là tiêu chuẩn tài liệu kiểm thử).",
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
    "prompt": "Which test may not mimic real world situations (choose one answer)",
    "options": [
      {
        "id": "a",
        "text": "(i) Functional testing"
      },
      {
        "id": "b",
        "text": "(ii) Structural Testing"
      },
      {
        "id": "c",
        "text": "Both of (i) and (ii)"
      },
      {
        "id": "d",
        "text": "None of (i) nor (ii)"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Kiểm thử cấu trúc / hộp trắng (Structural Testing) kiểm tra luồng logic và đường rẽ nhánh mã nguồn bên trong nên không mô phỏng sát hành vi sử dụng thực tế của người dùng ngoài đời thực như kiểm thử chức năng (Functional testing).",
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
        "id": "a",
        "text": "Determine the productivity of programmers"
      },
      {
        "id": "b",
        "text": "Eliminate the need for future program maintenance"
      },
      {
        "id": "c",
        "text": "Eliminate every error prior to release"
      },
      {
        "id": "d",
        "text": "Uncover software errors"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Mục tiêu hàng đầu và bản chất của kiểm thử phần mềm là phát hiện lỗi (Uncover software errors / find defects). Không thể loại bỏ mọi lỗi hay thay thế bảo trì.",
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
    "prompt": "Defects discovered by static analysis tools include: i. Variables that are never used. ii. Security vulnerabilities. iii. Programming Standard Violations iv. Uncalled functions and procedures",
    "options": [
      {
        "id": "a",
        "text": "i, ii, iii, iv is correct"
      },
      {
        "id": "b",
        "text": "iii ,is correct I,ii,iv are incorrect."
      },
      {
        "id": "c",
        "text": "i, ii, iii and iv are incorrect"
      },
      {
        "id": "d",
        "text": "iv, ii is correct SWT301 Multiple Choice Questions&#8203;"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Phân tích tĩnh bằng công cụ (Static analysis tools) có thể tự động phát hiện: i) Biến được khai báo nhưng không dùng; ii) Lỗ hổng bảo mật tiềm ẩn; iii) Vi phạm quy chuẩn lập trình; iv) Hàm/thủ tục không bao giờ được gọi (dead code).",
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
    "prompt": "Which of the following benefits are MOST likely to be achieved by using test tools? i) Easy to access information about tests and testing. ii) Reduced maintenance of testware. iii) Easy and cheap to implement. iv) Greater consistency of tests.",
    "options": [
      {
        "id": "a",
        "text": "ii and iv"
      },
      {
        "id": "b",
        "text": "ii and iii"
      },
      {
        "id": "c",
        "text": "i and iv"
      },
      {
        "id": "d",
        "text": "i and iii"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Lợi ích lớn nhất khi sử dụng công cụ kiểm thử: i) Dễ dàng truy xuất thông tin về kết quả kiểm thử; iv) Tăng tính nhất quán và chuẩn mực giữa các lần thực thi test. (Tự động hóa không hề rẻ và thường làm tăng chi phí bảo trì testware).",
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
        "id": "a",
        "text": "The cost of dealing with an adverse event if it occurs."
      },
      {
        "id": "b",
        "text": "The probability that an adverse event will occur."
      },
      {
        "id": "c",
        "text": "The amount of testing planned before release of a system."
      },
      {
        "id": "d",
        "text": "The likelihood of an adverse event and the impact of the event."
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Mức độ rủi ro (Level of Risk) được xác định bằng tích của hai yếu tố: Khả năng xảy ra rủi ro (Likelihood / Probability) và Mức độ ảnh hưởng nếu rủi ro xảy ra (Impact).",
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
        "id": "a",
        "text": "State-Transition"
      },
      {
        "id": "b",
        "text": "Usability"
      },
      {
        "id": "c",
        "text": "Performance"
      },
      {
        "id": "d",
        "text": "Security"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử chuyển trạng thái (State Transition Testing) là một kỹ thuật kiểm thử chức năng hộp đen (Black-box functional technique), KHÔNG PHẢI là kiểm thử phi chức năng (Non-functional testing). Usability, Performance, Security là phi chức năng.",
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
    "prompt": "The person who leads the review of the document(s), planning the review, running the meeting and follow-up after the meeting",
    "options": [
      {
        "id": "a",
        "text": "Reviewer"
      },
      {
        "id": "b",
        "text": "Author"
      },
      {
        "id": "c",
        "text": "Moderator"
      },
      {
        "id": "d",
        "text": "Auditor"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Điều phối viên (Moderator / Review Leader) là người chủ trì buổi đánh giá chính thức (formal review): lập kế hoạch, điều hành cuộc họp và theo dõi kết quả sau cuộc họp.",
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
    "prompt": "Reviews, static analysis and dynamic testing have the same objective",
    "options": [
      {
        "id": "a",
        "text": "(i) Identifying defects."
      },
      {
        "id": "b",
        "text": "(ii) Fixing defects."
      },
      {
        "id": "c",
        "text": "(i) and (ii)"
      },
      {
        "id": "d",
        "text": "None of (i) nor (ii) SWT301 Multiple Choice Questions&#8203;"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Cả đánh giá tài liệu (Reviews), phân tích tĩnh (Static analysis) và kiểm thử động (Dynamic testing) đều có chung một mục tiêu cốt lõi là: Xác định và phát hiện lỗi (Identifying defects). Việc sửa lỗi (fixing defects) là trách nhiệm của Developer (Debugging).",
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
    "prompt": "PDCA is known as",
    "options": [
      {
        "id": "a",
        "text": "Plan, Do, Check, Act"
      },
      {
        "id": "b",
        "text": "Plan, Do, Correct, Act"
      },
      {
        "id": "c",
        "text": "Plan, Debug, Check, Act"
      },
      {
        "id": "d",
        "text": "Plan, Do, Check, Accept"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Chu trình cải tiến chất lượng PDCA của Deming là viết tắt của: Plan (Lập kế hoạch) -> Do (Thực hiện) -> Check (Kiểm tra đánh giá) -> Act (Hành động cải tiến).",
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
        "id": "a",
        "text": "Faults in program specifications are the most expensive to fix"
      },
      {
        "id": "b",
        "text": "Faults in code are the most expensive to fix"
      },
      {
        "id": "c",
        "text": "Faults in requirements are the most expensive to fix"
      },
      {
        "id": "d",
        "text": "Faults in designs are the most expensive to fix"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Lỗi nằm trong tài liệu Yêu cầu (Requirements) là lỗi tốn kém chi phí sửa chữa nhất nếu không được phát hiện sớm, vì yêu cầu là nền móng cho toàn bộ kiến trúc, thiết kế, mã nguồn và ca kiểm thử phía sau.",
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
        "id": "a",
        "text": "When time for testing has run out"
      },
      {
        "id": "b",
        "text": "When all planned tests have been run"
      },
      {
        "id": "c",
        "text": "When the test completion criteria have been met"
      },
      {
        "id": "d",
        "text": "When no faults have been found by the tests run"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Thời điểm dừng kiểm thử chuẩn xác nhất là khi các Tiêu chí hoàn thành kiểm thử đã định trước được thỏa mãn (When the test completion criteria / exit criteria have been met).",
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
        "id": "a",
        "text": "At system and acceptance testing levels only"
      },
      {
        "id": "b",
        "text": "At all test levels"
      },
      {
        "id": "c",
        "text": "At all levels above integration testing"
      },
      {
        "id": "d",
        "text": "At the acceptance testing level only"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Kiểm thử chức năng (Functional testing) có thể và nên được thực hiện ở TẤT CẢ các cấp độ kiểm thử (At all test levels): Unit, Integration, System, và Acceptance testing.",
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
    "prompt": "Which of the following activities should be performed during the selection and implementation of a testing tool? i) Investigate the organisation&#039;s test process. ii) Conduct a proof of concept. iii) Implement the selected tool on a project behind schedule to save time. iv) Identify coaching and mentoring requirements for the use of the selected tool.",
    "options": [
      {
        "id": "a",
        "text": "i, ii, iii"
      },
      {
        "id": "b",
        "text": "ii, iii, iv"
      },
      {
        "id": "c",
        "text": "i, iii, iv"
      },
      {
        "id": "d",
        "text": "i, ii, iv SWT301 SU26 Final Exam Questions 21 to 25&#8203;"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Các hoạt động chuẩn khi chọn lựa và triển khai công cụ kiểm thử: i) Khảo sát quy trình kiểm thử hiện tại của tổ chức; ii) Tiến hành thử nghiệm PoC (Proof of Concept); iv) Xác định nhu cầu đào tạo và hướng dẫn kèm cặp (coaching/mentoring). Tuyệt đối không áp dụng công cụ mới vào một dự án đang trễ hạn.",
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
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- False. Theo nguyên lý kiểm thử ISTQB số 2: \"Exhaustive testing is impossible\" (Kiểm thử kiệt quệ là bất khả thi), không thể loại bỏ 100% tất cả các lỗi trong phần mềm.",
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
    "prompt": "Defect Management process does not include",
    "options": [
      {
        "id": "a",
        "text": "Defect prevention"
      },
      {
        "id": "b",
        "text": "Deliverable base-lining"
      },
      {
        "id": "c",
        "text": "Management reporting"
      },
      {
        "id": "d",
        "text": "None of the others"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Quy trình quản lý lỗi (Defect Management) bao gồm phòng ngừa lỗi, báo cáo quản lý, theo dõi vòng đời của lỗi, nhưng không bao gồm Deliverable base-lining (đây là nhiệm vụ của Quản lý cấu hình - Configuration Management).",
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
    "prompt": "Which of these can be successfully tested using Loop Testing methodology (choose one answer)?",
    "options": [
      {
        "id": "a",
        "text": "Simple Loops"
      },
      {
        "id": "b",
        "text": "Nested Loops"
      },
      {
        "id": "c",
        "text": "Concatenated Loops"
      },
      {
        "id": "d",
        "text": "All of the others"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Kỹ thuật Loop Testing (Kiểm thử vòng lặp hộp trắng) áp dụng hiệu quả cho: Vòng lặp đơn giản (Simple loops), Vòng lặp lồng nhau (Nested loops), và Vòng lặp nối tiếp (Concatenated loops).",
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
    "type": "single",
    "prompt": "(Choose 2 answers) Which TWO of the following statements about static analysis are correct?",
    "options": [
      {
        "id": "a",
        "text": "Compiling code is not a form of static analysis"
      },
      {
        "id": "b",
        "text": "Static analysis need not be performed before imperative code is executed"
      },
      {
        "id": "c",
        "text": "Static analysis can find faults that are hard to find with dynamic testing."
      },
      {
        "id": "d",
        "text": "Extensive statistical analysis will not be needed if white- Box testing is to be performed."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Phân tích tĩnh (Static analysis) có thể phát hiện các lỗi mã nguồn tiềm ẩn (lỗ hổng bảo mật, rò rỉ bộ nhớ, biến chưa khởi tạo) mà kiểm thử động rất khó kích hoạt hoặc mất nhiều công sức để phát hiện.",
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
        "id": "a",
        "text": "System integration"
      },
      {
        "id": "b",
        "text": "Functional testing"
      },
      {
        "id": "c",
        "text": "Non-functional testing."
      },
      {
        "id": "d",
        "text": "Requirements testing SWT301 Multiple Choice Questions&#8203;"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Kiểm thử đánh giá các thuộc tính chất lượng như an toàn bảo mật, hiệu năng tải, độ tin cậy và tính khả dụng của ngân hàng trực tuyến là Kiểm thử phi chức năng (Non-functional testing).",
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
    "prompt": "The purpose of exit criteria is: (choose one answer)",
    "options": [
      {
        "id": "a",
        "text": "Define when to stop testing"
      },
      {
        "id": "b",
        "text": "End of test level"
      },
      {
        "id": "c",
        "text": "When a set of tests has achieved a specific pre condition"
      },
      {
        "id": "d",
        "text": "All of the others"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Mục đích của Exit Criteria (Tiêu chí dừng/kết thúc) là: Xác định khi nào dừng kiểm thử, hoàn thành một cấp độ kiểm thử, hoặc khi tập ca kiểm thử đạt được mức độ bao phủ và chất lượng kỳ vọng.",
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
    "prompt": "Match the following: 1. Test estimation 2. Test control 3. Test monitoring a. Measures of tracking process b. Effort required to perform activities c. Reallocation of resources",
    "options": [
      {
        "id": "a",
        "text": "1 -b, 2-c, 3-a"
      },
      {
        "id": "b",
        "text": "1 -b, 2-a, 3-c"
      },
      {
        "id": "c",
        "text": "1 -c, 2-a, 3-b"
      },
      {
        "id": "d",
        "text": "1 -a, 2-b, 3-c"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ghép nối:\n- 1. Test estimation (Ước lượng kiểm thử) -> b. Nỗ lực cần thiết để thực hiện công việc\n- 2. Test control (Kiểm soát kiểm thử) -> c. Tái phân bổ nguồn lực và điều chỉnh kế hoạch\n- 3. Test monitoring (Giám sát kiểm thử) -> a. Đo lường và theo dõi tiến độ thực tế.",
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
    "prompt": "Which tool will be used to test the flag memory leaks and unassigned pointers",
    "options": [
      {
        "id": "a",
        "text": "Dynamic analysis tool"
      },
      {
        "id": "b",
        "text": "Static Analysis tool."
      },
      {
        "id": "c",
        "text": "Maintenance tool."
      },
      {
        "id": "d",
        "text": "Configuration tool."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Rò rỉ bộ nhớ (memory leaks) và con trỏ chưa gán/lạc hướng (unassigned/wild pointers) khi chương trình chạy được phát hiện tốt nhất bằng Công cụ phân tích động (Dynamic analysis tool - ví dụ Valgrind, Purify).",
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
        "id": "a",
        "text": "Attend a tool exhibition"
      },
      {
        "id": "b",
        "text": "Invite a vendor to give a demo"
      },
      {
        "id": "c",
        "text": "Analyze your needs and requirements"
      },
      {
        "id": "d",
        "text": "Find out what your budget would be for the tool E. Search the internet"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Bước đầu tiên và quan trọng nhất khi muốn mua/áp dụng công cụ kiểm thử mới là Phân tích nhu cầu và yêu cầu thực tế của tổ chức (Analyze your needs and requirements).",
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
        "id": "a",
        "text": "Reducing test time"
      },
      {
        "id": "b",
        "text": "No change"
      },
      {
        "id": "c",
        "text": "Increasing test time"
      },
      {
        "id": "d",
        "text": "Can&#039;t say SWT301 Multiple Choice Exam Questions&#8203;"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Nâng cao chất lượng phần mềm nhờ các phương pháp phát triển tốt hơn (viết code chuẩn, static analysis, unit test kỹ) sẽ làm giảm số lượng bug phát sinh, từ đó giảm thời gian cần thiết cho các đợt kiểm thử (Reducing test time).",
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
        "id": "a",
        "text": "Functionality"
      },
      {
        "id": "b",
        "text": "Usability"
      },
      {
        "id": "c",
        "text": "Supportability"
      },
      {
        "id": "d",
        "text": "Maintainability"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Theo tiêu chuẩn ISO 9126, 6 đặc tính chất lượng phần mềm gồm: Functionality, Reliability, Usability, Efficiency, Maintainability, Portability. Supportability không nằm trong ISO 9126 (nó thuộc mô hình FURPS+).",
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
    "prompt": "Which of the following is not included in Test Plan.",
    "options": [
      {
        "id": "a",
        "text": "Features to be tested."
      },
      {
        "id": "b",
        "text": "Environmental needs."
      },
      {
        "id": "c",
        "text": "Suspension criteria."
      },
      {
        "id": "d",
        "text": "Expected results."
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Kết quả kỳ vọng (Expected results) được đặc tả chi tiết trong từng Test Case / Test Procedure Specification, KHÔNG nằm trong Kế hoạch kiểm thử tổng thể (Test Plan - chỉ định nghĩa scope, features to test, environmental needs, suspension criteria).",
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
    "prompt": "One of the fields on a form contains a text box which accepts alpha numeric values. Identify the Valid Equivalence class",
    "options": [
      {
        "id": "a",
        "text": "BOOK"
      },
      {
        "id": "b",
        "text": "Book"
      },
      {
        "id": "c",
        "text": "Boo01k"
      },
      {
        "id": "d",
        "text": "book"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trường nhập giá trị alpha-numeric (chữ và số kết hợp): \"Boo01k\" chứa cả ký tự chữ và số nên thuộc phân vùng hợp lệ (Valid Equivalence Class).",
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
        "id": "a",
        "text": "Both inspections and walkthroughs are led by the author."
      },
      {
        "id": "b",
        "text": "An inspection is led by a moderator and a walkthrough is led by the author."
      },
      {
        "id": "c",
        "text": "Both inspections and walkthroughs are led by a trained moderator."
      },
      {
        "id": "d",
        "text": "A walkthrough is led by the author. The author is not present during inspections."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Sự khác biệt cốt lõi: Cuộc kiểm tra chính thức (Inspection) được dẫn dắt bởi một Điều phối viên độc lập (trained Moderator), trong khi Walkthrough do chính Tác giả của tài liệu (Author) chủ trì và trình bày.",
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
    "prompt": "Handover of Testware is a part of which Phase",
    "options": [
      {
        "id": "a",
        "text": "Test Analysis and Design"
      },
      {
        "id": "b",
        "text": "Test Planning and control"
      },
      {
        "id": "c",
        "text": "Test Closure Activities"
      },
      {
        "id": "d",
        "text": "Evaluating exit criteria and reporting SWT301 Multiple Choice Questions&#8203;"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Bàn giao tài liệu kiểm thử và hiện vật (Handover of Testware) là hoạt động then chốt thuộc giai đoạn Đóng kiểm thử (Test Closure Activities).",
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
    "prompt": "Which expression best matches the following characteristics or review processes: 1. Led by author 2. Undocumented 3. No management participation 4. Led by a trained moderator or leader 5. Uses entry exit criteria s) Inspection t) Peer review u) Informal review v) Walkthrough",
    "options": [
      {
        "id": "a",
        "text": "s = 4, t = 3, u = 2 and 5, v = 1"
      },
      {
        "id": "b",
        "text": "s = 4 and 5, t = 3, u = 2, v = 1"
      },
      {
        "id": "c",
        "text": "s = 1 and 5, t = 3, u = 2, v = 4"
      },
      {
        "id": "d",
        "text": "s = 5, t = 4, u = 3, v = 1 and 2 E. s = 4 and 5, t = 1, u = 2, v = 3"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Khớp các loại Review:\n- s. Inspection: Dẫn dắt bởi trained moderator (4) và sử dụng tiêu chí entry/exit chuẩn (5)\n- t. Peer review: Thường không có sự tham gia của ban quản lý (3)\n- u. Informal review: Không cần ghi chép tài liệu trang trọng (2)\n- v. Walkthrough: Do tác giả chủ trì (1).",
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
    "prompt": "Testing wherein we subject the target of the test, to varying workloads to measure and evaluate the performance behaviors and ability of the target and of the test to continue to function properly under these different workloads.",
    "options": [
      {
        "id": "a",
        "text": "Load Testing"
      },
      {
        "id": "b",
        "text": "Integration Testing"
      },
      {
        "id": "c",
        "text": "System Testing"
      },
      {
        "id": "d",
        "text": "Usability Testing"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử đặt hệ thống dưới các mức tải khác nhau để đo lường hành vi và hiệu năng vận hành là Kiểm thử tải (Load Testing).",
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
    "prompt": "Cost of the reviews will not include.",
    "options": [
      {
        "id": "a",
        "text": "Review process itself"
      },
      {
        "id": "b",
        "text": "Metrics analysis"
      },
      {
        "id": "c",
        "text": "Tool support."
      },
      {
        "id": "d",
        "text": "Process improvement."
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Chi phí trực tiếp của hoạt động review bao gồm: thời gian thực hiện quy trình review, phân tích chỉ số, công cụ hỗ trợ. Process improvement (cải tiến quy trình) là lợi ích dài hạn đem lại chứ không tính là chi phí thuần của buổi review.",
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
        "id": "a",
        "text": "Error guessing"
      },
      {
        "id": "b",
        "text": "Walkthrough"
      },
      {
        "id": "c",
        "text": "Data flow analysis"
      },
      {
        "id": "d",
        "text": "Inspections"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Đoán lỗi (Error guessing) là một kỹ thuật kiểm thử động dựa trên kinh nghiệm (Experience-based dynamic technique), KHÔNG PHẢI là kỹ thuật kiểm thử tĩnh (Static testing). Walkthrough, Data flow analysis, Inspection đều là kiểm thử tĩnh.",
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
    "prompt": "The Planning phase of a formal review includes which of the followings?",
    "options": [
      {
        "id": "a",
        "text": "Explaining the objectives"
      },
      {
        "id": "b",
        "text": "Selecting the personnel, allocating roles."
      },
      {
        "id": "c",
        "text": "Follow up"
      },
      {
        "id": "d",
        "text": "Individual Meeting preparations SWT301 Multiple Choice Questions&#8203;"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Giai đoạn Lập kế hoạch (Planning) của buổi đánh giá tài liệu chính thức bao gồm: Xác định phạm vi mục tiêu, lựa chọn nhân sự tham gia và phân công vai trò (Author, Moderator, Scribe, Reviewer).",
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
        "id": "a",
        "text": "Defects"
      },
      {
        "id": "b",
        "text": "Trends analysis"
      },
      {
        "id": "c",
        "text": "Test Effectiveness"
      },
      {
        "id": "d",
        "text": "Time Spent Testing"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Độ phủ mã nguồn (Code Coverage: Statement coverage, Branch coverage) được sử dụng làm thước đo Hiệu quả kiểm thử (Test Effectiveness) và mức độ kỹ lưỡng của tập ca kiểm thử.",
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
    "prompt": "Which is not the testing objectives",
    "options": [
      {
        "id": "a",
        "text": "Finding defects"
      },
      {
        "id": "b",
        "text": "Gaining confidence about the level of quality and providing information"
      },
      {
        "id": "c",
        "text": "Preventing defects."
      },
      {
        "id": "d",
        "text": "Debugging defects"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Debugging (gỡ lỗi - định vị và sửa chữa lỗi mã nguồn) là công việc của lập trình viên, KHÔNG PHẢI là mục tiêu của kiểm thử phần mềm (Testing nhằm tìm lỗi, tạo dựng niềm tin và phòng ngừa lỗi).",
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
        "id": "a",
        "text": "Data tester"
      },
      {
        "id": "b",
        "text": "Boundary tester"
      },
      {
        "id": "c",
        "text": "Capture/Playback"
      },
      {
        "id": "d",
        "text": "Output comparator."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Công cụ Record/Playback (Capture/Playback) được sử dụng phổ biến nhất để tự động hóa các ca kiểm thử hồi quy (Regression test).",
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
    "prompt": "_____ includes both Black box and White Box Testing features (choose one answer)",
    "options": [
      {
        "id": "a",
        "text": "(i) Gray Box Testing"
      },
      {
        "id": "b",
        "text": "(ii) Hybrid Testing"
      },
      {
        "id": "c",
        "text": "Both of (i) and (ii)"
      },
      {
        "id": "d",
        "text": "None of (i) nor (ii)"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Kiểm thử kết hợp cả đặc tính hộp đen (dựa trên yêu cầu) và cấu trúc hộp trắng (mã nguồn/cơ sở dữ liệu) được gọi là Gray Box Testing hoặc Hybrid Testing.",
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
    "prompt": "Who are the persons involved in a Formal Review i) Manager ii) Moderator iii) Scribe / Recorder iv) Assistant Manager",
    "options": [
      {
        "id": "a",
        "text": "i,ii,iii,iv are true"
      },
      {
        "id": "b",
        "text": "i,ii,iii are true and iv is false."
      },
      {
        "id": "c",
        "text": "ii,iii,iv are true and i is false."
      },
      {
        "id": "d",
        "text": "i,iv are true and ii, iii are false. SWT301 Multiple Choice Questions&#8203;"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Các vai trò chuẩn trong Formal Review theo ISTQB gồm: i) Manager (quyết định thực hiện); ii) Moderator (chủ trì); iii) Scribe / Recorder (ghi chép biên bản). Assistant Manager không phải là vai trò chuẩn.",
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
    "prompt": "Which of the following has highest level of independence in which test cases are:",
    "options": [
      {
        "id": "a",
        "text": "Designed by persons who write the software under test"
      },
      {
        "id": "b",
        "text": "Designed by a person from a different section"
      },
      {
        "id": "c",
        "text": "Designed by a person from a different organization"
      },
      {
        "id": "d",
        "text": "Designed by another person"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Mức độ độc lập cao nhất (Highest level of independence) trong kiểm thử là khi ca kiểm thử được thiết kế bởi người thuộc một tổ chức hoàn toàn độc lập (ví dụ đơn vị kiểm thử bên ngoài / 3rd party testing vendor).",
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
    "prompt": "Success Factors for a review include: i. Each Review does not have a predefined objective ii. Defects found are welcomed and expressed objectively iii. Management supports a good review process. iv. There is an emphasis on learning and process improvement.",
    "options": [
      {
        "id": "a",
        "text": "ii,iii,iv are correct and i is incorrect"
      },
      {
        "id": "b",
        "text": "iii , i , iv is correct and ii is incorrect"
      },
      {
        "id": "c",
        "text": "i , iii , iv , ii is in correct"
      },
      {
        "id": "d",
        "text": "ii is correct"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yếu tố thành công của review: ii) Lỗi phát hiện được hoan nghênh và diễn đạt khách quan; iii) Ban quản lý ủng hộ quy trình; iv) Chú trọng học hỏi và cải tiến quy trình. Mệnh đề i sai vì mỗi review BẮT BUỘC phải có mục tiêu xác định trước.",
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
    "prompt": "In a review meeting a moderator is a person who",
    "options": [
      {
        "id": "a",
        "text": "Takes minutes of the meeting"
      },
      {
        "id": "b",
        "text": "Mediates between people"
      },
      {
        "id": "c",
        "text": "Takes telephone calls"
      },
      {
        "id": "d",
        "text": "Writes the documents to be reviewed"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Trong cuộc họp đánh giá, Moderator là người làm trung gian điều phối giữa mọi người (Mediates between people), đảm bảo cuộc họp diễn ra suôn sẻ, đúng giờ và tập trung vào mục tiêu.",
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
    "prompt": "Which of the following is a Key Characteristics of WalkThrough",
    "options": [
      {
        "id": "a",
        "text": "Scenario , Dry Run , Peer Group"
      },
      {
        "id": "b",
        "text": "Pre Meeting Preparations"
      },
      {
        "id": "c",
        "text": "Formal Follow Up Process"
      },
      {
        "id": "d",
        "text": "Includes Metrics"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Đặc trưng cốt lõi của Walkthrough: Trình bày kịch bản (Scenario), chạy thử trên giấy (Dry Run), có sự tham gia của nhóm đồng nghiệp bình duyệt (Peer Group).",
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
    "prompt": "One of the following is not a part of white box testing as per BS7925-II standards.",
    "options": [
      {
        "id": "a",
        "text": "Random testing"
      },
      {
        "id": "b",
        "text": "Data Flow testing."
      },
      {
        "id": "c",
        "text": "Statement testing"
      },
      {
        "id": "d",
        "text": "Syntax testing SWT301 Multiple Choice Questions&#8203;"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử ngẫu nhiên (Random testing) là kỹ thuật kiểm thử hộp đen, không thuộc kiểm thử cấu trúc hộp trắng theo tiêu chuẩn BS 7925-2.",
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
        "id": "a",
        "text": "Generating expected outputs"
      },
      {
        "id": "b",
        "text": "Replaying inputs according to a programmed script"
      },
      {
        "id": "c",
        "text": "Comparison of expected outcomes with actual outcomes"
      },
      {
        "id": "d",
        "text": "Recording test inputs E. Reading test values from a data file"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Công cụ thực thi kiểm thử tự động (Test execution tool) KHÔNG THỂ tự động sáng tạo/sinh ra kết quả kỳ vọng đúng đắn (Generating expected outputs) nếu không có oracle hoặc con người cung cấp.",
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
    "prompt": "An incident logging system",
    "options": [
      {
        "id": "a",
        "text": "Only records defects"
      },
      {
        "id": "b",
        "text": "Is of limited value"
      },
      {
        "id": "c",
        "text": "Is a valuable source of project information during testing if it contains all incidents"
      },
      {
        "id": "d",
        "text": "Should be used only by the test team."
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Hệ thống ghi nhận sự cố (Incident logging system) là nguồn thông tin vô cùng giá trị cho dự án nếu nó ghi nhận đầy đủ mọi sự cố phát sinh trong quá trình kiểm thử.",
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
        "id": "a",
        "text": "Even though the numbers you look at appear better, to achieve these numbers, people are doing other aspects of their work much less well."
      },
      {
        "id": "b",
        "text": "We don&#039;t know how to measure a variable (our measurement is dysfunctional) and so we don&#039;t know how to interpret the result."
      },
      {
        "id": "c",
        "text": "You are measuring the wrong thing and thus reaching the wrong conclusions."
      },
      {
        "id": "d",
        "text": "All of the others"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Sự rối loạn đo lường (Measurement dysfunction) xảy ra khi mọi người chỉ cố gắng làm cho các con số chỉ số đẹp lên trên báo cáo nhưng thực tế lại bỏ bê chất lượng các công việc cốt lõi khác.",
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
    "prompt": "Which of the following is the standard for the Software product quality",
    "options": [
      {
        "id": "a",
        "text": "ISO 9126"
      },
      {
        "id": "b",
        "text": "ISO 829"
      },
      {
        "id": "c",
        "text": "ISO 1012"
      },
      {
        "id": "d",
        "text": "ISO 1028"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn quốc tế định nghĩa mô hình chất lượng sản phẩm phần mềm (Software product quality) là ISO 9126 (sau này được kế thừa và phát triển thành ISO/IEC 25010).",
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
    "prompt": "Boundary value testing",
    "options": [
      {
        "id": "a",
        "text": "Is the same as equivalence partitioning tests"
      },
      {
        "id": "b",
        "text": "Test boundary conditions on, below and above the edges of input and output equivalence classes"
      },
      {
        "id": "c",
        "text": "Tests combinations of input circumstances"
      },
      {
        "id": "d",
        "text": "Is used in white box testing strategy SWT301 Multiple Choice Questions&#8203;"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Phân tích giá trị biên (Boundary Value Analysis) là kỹ thuật kiểm tra các điều kiện ngay tại biên, ngay dưới biên và ngay trên biên của các phân vùng tương đương (on, below, and above edges).",
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
    "prompt": "Component Testing is also called as i) Unit Testing ii) Program Testing iii) Module Testing iv) System Component Testing.",
    "options": [
      {
        "id": "a",
        "text": "i,ii,iii are true and iv is false"
      },
      {
        "id": "b",
        "text": "i,ii,iii,iv are false"
      },
      {
        "id": "c",
        "text": "i,ii,iv are true and iii is false"
      },
      {
        "id": "d",
        "text": "All of them are true"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử thành phần (Component Testing) còn có các tên gọi tương đương là: Unit Testing, Program Testing, Module Testing. Không gọi là System Component Testing.",
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
    "prompt": "Software quality is not relevant to _____",
    "options": [
      {
        "id": "a",
        "text": "Correctness"
      },
      {
        "id": "b",
        "text": "Usability"
      },
      {
        "id": "c",
        "text": "Viability"
      },
      {
        "id": "d",
        "text": "Reusability"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Viability (tính khả thi kinh doanh/kinh tế) là thước đo tài chính/quản lý dự án, không thuộc các thuộc tính chất lượng kỹ thuật của phần mềm theo ISO 9126.",
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
    "prompt": "Who is responsible for document all the issues, problems and open point that were identified during the review meeting",
    "options": [
      {
        "id": "a",
        "text": "Moderator"
      },
      {
        "id": "b",
        "text": "Scribe"
      },
      {
        "id": "c",
        "text": "Reviewers"
      },
      {
        "id": "d",
        "text": "Author"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Người chịu trách nhiệm ghi chép lại toàn bộ các vấn đề, lỗi và điểm còn mở trong cuộc họp review là Thư ký (Scribe / Recorder).",
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
        "id": "a",
        "text": "A small team to establish the best way to use the tool"
      },
      {
        "id": "b",
        "text": "Everyone who may eventually have some use for the tool"
      },
      {
        "id": "c",
        "text": "The independent testing team"
      },
      {
        "id": "d",
        "text": "The vendor contractor to write the initial scripts"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Khi mua một công cụ kiểm thử mới, nó phải được triển khai thí điểm (Pilot project) trước tiên bởi một nhóm nhỏ để tìm ra cách áp dụng và quy trình tối ưu nhất.",
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
    "prompt": "The Phases of formal review process is mentioned below arrange them in the correct order. i) Planning ii) Review Meeting iii) Rework iv) Individual Preparations v) Kick Off vi) Follow Up",
    "options": [
      {
        "id": "a",
        "text": "i,ii,iii,iv,v,vi"
      },
      {
        "id": "b",
        "text": "vi,i,ii,iii,iv,v"
      },
      {
        "id": "c",
        "text": "i,v,iv,ii,iii,vi"
      },
      {
        "id": "d",
        "text": "i,ii,iii,v,iv,vi"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Thứ tự chuẩn của quy trình đánh giá chính thức (Formal Review Process): i) Planning (Lập kế hoạch) -> v) Kick-off (Khởi động) -> iv) Individual Preparation (Chuẩn bị cá nhân) -> ii) Review Meeting (Họp đánh giá) -> iii) Rework (Chỉnh sửa) -> vi) Follow-up (Theo dõi kiểm tra lại).",
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
    "prompt": "Which test may not mimic real world situations (choose one answer)",
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
    "explanation": "**Đáp án đúng: B**\n\n- Kiểm thử cấu trúc / hộp trắng (Structural Testing) kiểm tra luồng logic và đường rẽ nhánh mã nguồn bên trong nên không mô phỏng sát hành vi sử dụng thực tế của người dùng ngoài đời thực như kiểm thử chức năng (Functional testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Mục tiêu hàng đầu và bản chất của kiểm thử phần mềm là phát hiện lỗi (Uncover software errors / find defects). Không thể loại bỏ mọi lỗi hay thay thế bảo trì.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Defects discovered by static analysis tools include: i. Variables that are never used. ii. Security vulnerabilities. iii. Programming Standard Violations iv. Uncalled functions and procedures",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv is correct"
      },
      {
        "id": "B",
        "text": "iii ,is correct I,ii,iv are incorrect."
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
    "explanation": "**Đáp án đúng: A**\n\n- Phân tích tĩnh bằng công cụ (Static analysis tools) có thể tự động phát hiện: i) Biến được khai báo nhưng không dùng; ii) Lỗ hổng bảo mật tiềm ẩn; iii) Vi phạm quy chuẩn lập trình; iv) Hàm/thủ tục không bao giờ được gọi (dead code).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following benefits are MOST likely to be achieved by using test tools? i) Easy to access information about tests and testing. ii) Reduced maintenance of testware. iii) Easy and cheap to implement. iv) Greater consistency of tests.",
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
    "explanation": "**Đáp án đúng: C**\n\n- Lợi ích lớn nhất khi sử dụng công cụ kiểm thử: i) Dễ dàng truy xuất thông tin về kết quả kiểm thử; iv) Tăng tính nhất quán và chuẩn mực giữa các lần thực thi test. (Tự động hóa không hề rẻ và thường làm tăng chi phí bảo trì testware).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Mức độ rủi ro (Level of Risk) được xác định bằng tích của hai yếu tố: Khả năng xảy ra rủi ro (Likelihood / Probability) và Mức độ ảnh hưởng nếu rủi ro xảy ra (Impact).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử chuyển trạng thái (State Transition Testing) là một kỹ thuật kiểm thử chức năng hộp đen (Black-box functional technique), KHÔNG PHẢI là kiểm thử phi chức năng (Non-functional testing). Usability, Performance, Security là phi chức năng.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The person who leads the review of the document(s), planning the review, running the meeting and follow-up after the meeting",
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
    "explanation": "**Đáp án đúng: C**\n\n- Điều phối viên (Moderator / Review Leader) là người chủ trì buổi đánh giá chính thức (formal review): lập kế hoạch, điều hành cuộc họp và theo dõi kết quả sau cuộc họp.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Reviews, static analysis and dynamic testing have the same objective",
    "options": [
      {
        "id": "A",
        "text": "(i) Identifying defects."
      },
      {
        "id": "B",
        "text": "(ii) Fixing defects."
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
    "explanation": "**Đáp án đúng: A**\n\n- Cả đánh giá tài liệu (Reviews), phân tích tĩnh (Static analysis) và kiểm thử động (Dynamic testing) đều có chung một mục tiêu cốt lõi là: Xác định và phát hiện lỗi (Identifying defects). Việc sửa lỗi (fixing defects) là trách nhiệm của Developer (Debugging).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "PDCA is known as",
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
    "explanation": "**Đáp án đúng: A**\n\n- Chu trình cải tiến chất lượng PDCA của Deming là viết tắt của: Plan (Lập kế hoạch) -> Do (Thực hiện) -> Check (Kiểm tra đánh giá) -> Act (Hành động cải tiến).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "id": "A",
        "text": "Faults in program specifications are the most expensive to fix"
      },
      {
        "id": "B",
        "text": "Faults in code are the most expensive to fix"
      },
      {
        "id": "C",
        "text": "Faults in requirements are the most expensive to fix"
      },
      {
        "id": "D",
        "text": "Faults in designs are the most expensive to fix"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Lỗi nằm trong tài liệu Yêu cầu (Requirements) là lỗi tốn kém chi phí sửa chữa nhất nếu không được phát hiện sớm, vì yêu cầu là nền móng cho toàn bộ kiến trúc, thiết kế, mã nguồn và ca kiểm thử phía sau.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Thời điểm dừng kiểm thử chuẩn xác nhất là khi các Tiêu chí hoàn thành kiểm thử đã định trước được thỏa mãn (When the test completion criteria / exit criteria have been met).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Where may functional testing be performed?",
    "options": [
      {
        "id": "A",
        "text": "At system and acceptance testing levels only"
      },
      {
        "id": "B",
        "text": "At all test levels"
      },
      {
        "id": "C",
        "text": "At all levels above integration testing"
      },
      {
        "id": "D",
        "text": "At the acceptance testing level only"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Kiểm thử chức năng (Functional testing) có thể và nên được thực hiện ở TẤT CẢ các cấp độ kiểm thử (At all test levels): Unit, Integration, System, và Acceptance testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following activities should be performed during the selection and implementation of a testing tool? i) Investigate the organisation&#039;s test process. ii) Conduct a proof of concept. iii) Implement the selected tool on a project behind schedule to save time. iv) Identify coaching and mentoring requirements for the use of the selected tool.",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii"
      },
      {
        "id": "B",
        "text": "ii, iii, iv"
      },
      {
        "id": "C",
        "text": "i, iii, iv"
      },
      {
        "id": "D",
        "text": "i, ii, iv SWT301 SU26 Final Exam Questions 21 to 25&#8203;"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Các hoạt động chuẩn khi chọn lựa và triển khai công cụ kiểm thử: i) Khảo sát quy trình kiểm thử hiện tại của tổ chức; ii) Tiến hành thử nghiệm PoC (Proof of Concept); iv) Xác định nhu cầu đào tạo và hướng dẫn kèm cặp (coaching/mentoring). Tuyệt đối không áp dụng công cụ mới vào một dự án đang trễ hạn.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: B**\n\n- False. Theo nguyên lý kiểm thử ISTQB số 2: \"Exhaustive testing is impossible\" (Kiểm thử kiệt quệ là bất khả thi), không thể loại bỏ 100% tất cả các lỗi trong phần mềm.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Defect Management process does not include",
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
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Quy trình quản lý lỗi (Defect Management) bao gồm phòng ngừa lỗi, báo cáo quản lý, theo dõi vòng đời của lỗi, nhưng không bao gồm Deliverable base-lining (đây là nhiệm vụ của Quản lý cấu hình - Configuration Management).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Kỹ thuật Loop Testing (Kiểm thử vòng lặp hộp trắng) áp dụng hiệu quả cho: Vòng lặp đơn giản (Simple loops), Vòng lặp lồng nhau (Nested loops), và Vòng lặp nối tiếp (Concatenated loops).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "(Choose 2 answers) Which TWO of the following statements about static analysis are correct?",
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
        "text": "Extensive statistical analysis will not be needed if white- Box testing is to be performed."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Phân tích tĩnh (Static analysis) có thể phát hiện các lỗi mã nguồn tiềm ẩn (lỗ hổng bảo mật, rò rỉ bộ nhớ, biến chưa khởi tạo) mà kiểm thử động rất khó kích hoạt hoặc mất nhiều công sức để phát hiện.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Kiểm thử đánh giá các thuộc tính chất lượng như an toàn bảo mật, hiệu năng tải, độ tin cậy và tính khả dụng của ngân hàng trực tuyến là Kiểm thử phi chức năng (Non-functional testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The purpose of exit criteria is: (choose one answer)",
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
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Mục đích của Exit Criteria (Tiêu chí dừng/kết thúc) là: Xác định khi nào dừng kiểm thử, hoàn thành một cấp độ kiểm thử, hoặc khi tập ca kiểm thử đạt được mức độ bao phủ và chất lượng kỳ vọng.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Match the following: 1. Test estimation 2. Test control 3. Test monitoring a. Measures of tracking process b. Effort required to perform activities c. Reallocation of resources",
    "options": [
      {
        "id": "A",
        "text": "1 -b, 2-c, 3-a"
      },
      {
        "id": "B",
        "text": "1 -b, 2-a, 3-c"
      },
      {
        "id": "C",
        "text": "1 -c, 2-a, 3-b"
      },
      {
        "id": "D",
        "text": "1 -a, 2-b, 3-c"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ghép nối:\n- 1. Test estimation (Ước lượng kiểm thử) -> b. Nỗ lực cần thiết để thực hiện công việc\n- 2. Test control (Kiểm soát kiểm thử) -> c. Tái phân bổ nguồn lực và điều chỉnh kế hoạch\n- 3. Test monitoring (Giám sát kiểm thử) -> a. Đo lường và theo dõi tiến độ thực tế.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which tool will be used to test the flag memory leaks and unassigned pointers",
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
    "explanation": "**Đáp án đúng: A**\n\n- Rò rỉ bộ nhớ (memory leaks) và con trỏ chưa gán/lạc hướng (unassigned/wild pointers) khi chương trình chạy được phát hiện tốt nhất bằng Công cụ phân tích động (Dynamic analysis tool - ví dụ Valgrind, Purify).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Find out what your budget would be for the tool E. Search the internet"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Bước đầu tiên và quan trọng nhất khi muốn mua/áp dụng công cụ kiểm thử mới là Phân tích nhu cầu và yêu cầu thực tế của tổ chức (Analyze your needs and requirements).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Can&#039;t say SWT301 Multiple Choice Exam Questions&#8203;"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Nâng cao chất lượng phần mềm nhờ các phương pháp phát triển tốt hơn (viết code chuẩn, static analysis, unit test kỹ) sẽ làm giảm số lượng bug phát sinh, từ đó giảm thời gian cần thiết cho các đợt kiểm thử (Reducing test time).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Theo tiêu chuẩn ISO 9126, 6 đặc tính chất lượng phần mềm gồm: Functionality, Reliability, Usability, Efficiency, Maintainability, Portability. Supportability không nằm trong ISO 9126 (nó thuộc mô hình FURPS+).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is not included in Test Plan.",
    "options": [
      {
        "id": "A",
        "text": "Features to be tested."
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
        "text": "Expected results."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Kết quả kỳ vọng (Expected results) được đặc tả chi tiết trong từng Test Case / Test Procedure Specification, KHÔNG nằm trong Kế hoạch kiểm thử tổng thể (Test Plan - chỉ định nghĩa scope, features to test, environmental needs, suspension criteria).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "One of the fields on a form contains a text box which accepts alpha numeric values. Identify the Valid Equivalence class",
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
        "text": "Boo01k"
      },
      {
        "id": "D",
        "text": "book"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trường nhập giá trị alpha-numeric (chữ và số kết hợp): \"Boo01k\" chứa cả ký tự chữ và số nên thuộc phân vùng hợp lệ (Valid Equivalence Class).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: B**\n\n- Sự khác biệt cốt lõi: Cuộc kiểm tra chính thức (Inspection) được dẫn dắt bởi một Điều phối viên độc lập (trained Moderator), trong khi Walkthrough do chính Tác giả của tài liệu (Author) chủ trì và trình bày.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Handover of Testware is a part of which Phase",
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
    "explanation": "**Đáp án đúng: C**\n\n- Bàn giao tài liệu kiểm thử và hiện vật (Handover of Testware) là hoạt động then chốt thuộc giai đoạn Đóng kiểm thử (Test Closure Activities).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which expression best matches the following characteristics or review processes: 1. Led by author 2. Undocumented 3. No management participation 4. Led by a trained moderator or leader 5. Uses entry exit criteria s) Inspection t) Peer review u) Informal review v) Walkthrough",
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
        "text": "s = 5, t = 4, u = 3, v = 1 and 2 E. s = 4 and 5, t = 1, u = 2, v = 3"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Khớp các loại Review:\n- s. Inspection: Dẫn dắt bởi trained moderator (4) và sử dụng tiêu chí entry/exit chuẩn (5)\n- t. Peer review: Thường không có sự tham gia của ban quản lý (3)\n- u. Informal review: Không cần ghi chép tài liệu trang trọng (2)\n- v. Walkthrough: Do tác giả chủ trì (1).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Testing wherein we subject the target of the test, to varying workloads to measure and evaluate the performance behaviors and ability of the target and of the test to continue to function properly under these different workloads.",
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử đặt hệ thống dưới các mức tải khác nhau để đo lường hành vi và hiệu năng vận hành là Kiểm thử tải (Load Testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Cost of the reviews will not include.",
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
        "text": "Tool support."
      },
      {
        "id": "D",
        "text": "Process improvement."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Chi phí trực tiếp của hoạt động review bao gồm: thời gian thực hiện quy trình review, phân tích chỉ số, công cụ hỗ trợ. Process improvement (cải tiến quy trình) là lợi ích dài hạn đem lại chứ không tính là chi phí thuần của buổi review.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Đoán lỗi (Error guessing) là một kỹ thuật kiểm thử động dựa trên kinh nghiệm (Experience-based dynamic technique), KHÔNG PHẢI là kỹ thuật kiểm thử tĩnh (Static testing). Walkthrough, Data flow analysis, Inspection đều là kiểm thử tĩnh.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The Planning phase of a formal review includes which of the followings?",
    "options": [
      {
        "id": "A",
        "text": "Explaining the objectives"
      },
      {
        "id": "B",
        "text": "Selecting the personnel, allocating roles."
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
    "explanation": "**Đáp án đúng: B**\n\n- Giai đoạn Lập kế hoạch (Planning) của buổi đánh giá tài liệu chính thức bao gồm: Xác định phạm vi mục tiêu, lựa chọn nhân sự tham gia và phân công vai trò (Author, Moderator, Scribe, Reviewer).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Độ phủ mã nguồn (Code Coverage: Statement coverage, Branch coverage) được sử dụng làm thước đo Hiệu quả kiểm thử (Test Effectiveness) và mức độ kỹ lưỡng của tập ca kiểm thử.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which is not the testing objectives",
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
    "explanation": "**Đáp án đúng: D**\n\n- Debugging (gỡ lỗi - định vị và sửa chữa lỗi mã nguồn) là công việc của lập trình viên, KHÔNG PHẢI là mục tiêu của kiểm thử phần mềm (Testing nhằm tìm lỗi, tạo dựng niềm tin và phòng ngừa lỗi).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Công cụ Record/Playback (Capture/Playback) được sử dụng phổ biến nhất để tự động hóa các ca kiểm thử hồi quy (Regression test).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "_____ includes both Black box and White Box Testing features (choose one answer)",
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
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Kiểm thử kết hợp cả đặc tính hộp đen (dựa trên yêu cầu) và cấu trúc hộp trắng (mã nguồn/cơ sở dữ liệu) được gọi là Gray Box Testing hoặc Hybrid Testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Who are the persons involved in a Formal Review i) Manager ii) Moderator iii) Scribe / Recorder iv) Assistant Manager",
    "options": [
      {
        "id": "A",
        "text": "i,ii,iii,iv are true"
      },
      {
        "id": "B",
        "text": "i,ii,iii are true and iv is false."
      },
      {
        "id": "C",
        "text": "ii,iii,iv are true and i is false."
      },
      {
        "id": "D",
        "text": "i,iv are true and ii, iii are false."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Các vai trò chuẩn trong Formal Review theo ISTQB gồm: i) Manager (quyết định thực hiện); ii) Moderator (chủ trì); iii) Scribe / Recorder (ghi chép biên bản). Assistant Manager không phải là vai trò chuẩn.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Mức độ độc lập cao nhất (Highest level of independence) trong kiểm thử là khi ca kiểm thử được thiết kế bởi người thuộc một tổ chức hoàn toàn độc lập (ví dụ đơn vị kiểm thử bên ngoài / 3rd party testing vendor).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Success Factors for a review include: i. Each Review does not have a predefined objective ii. Defects found are welcomed and expressed objectively iii. Management supports a good review process. iv. There is an emphasis on learning and process improvement.",
    "options": [
      {
        "id": "A",
        "text": "ii,iii,iv are correct and i is incorrect"
      },
      {
        "id": "B",
        "text": "iii , i , iv is correct and ii is incorrect"
      },
      {
        "id": "C",
        "text": "i , iii , iv , ii is in correct"
      },
      {
        "id": "D",
        "text": "ii is correct"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yếu tố thành công của review: ii) Lỗi phát hiện được hoan nghênh và diễn đạt khách quan; iii) Ban quản lý ủng hộ quy trình; iv) Chú trọng học hỏi và cải tiến quy trình. Mệnh đề i sai vì mỗi review BẮT BUỘC phải có mục tiêu xác định trước.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "In a review meeting a moderator is a person who",
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
    "explanation": "**Đáp án đúng: B**\n\n- Trong cuộc họp đánh giá, Moderator là người làm trung gian điều phối giữa mọi người (Mediates between people), đảm bảo cuộc họp diễn ra suôn sẻ, đúng giờ và tập trung vào mục tiêu.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is a Key Characteristics of WalkThrough",
    "options": [
      {
        "id": "A",
        "text": "Scenario , Dry Run , Peer Group"
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
    "explanation": "**Đáp án đúng: A**\n\n- Đặc trưng cốt lõi của Walkthrough: Trình bày kịch bản (Scenario), chạy thử trên giấy (Dry Run), có sự tham gia của nhóm đồng nghiệp bình duyệt (Peer Group).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "One of the following is not a part of white box testing as per BS7925-II standards.",
    "options": [
      {
        "id": "A",
        "text": "Random testing"
      },
      {
        "id": "B",
        "text": "Data Flow testing."
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử ngẫu nhiên (Random testing) là kỹ thuật kiểm thử hộp đen, không thuộc kiểm thử cấu trúc hộp trắng theo tiêu chuẩn BS 7925-2.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Recording test inputs E. Reading test values from a data file"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Công cụ thực thi kiểm thử tự động (Test execution tool) KHÔNG THỂ tự động sáng tạo/sinh ra kết quả kỳ vọng đúng đắn (Generating expected outputs) nếu không có oracle hoặc con người cung cấp.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Hệ thống ghi nhận sự cố (Incident logging system) là nguồn thông tin vô cùng giá trị cho dự án nếu nó ghi nhận đầy đủ mọi sự cố phát sinh trong quá trình kiểm thử.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Measurement dysfunction is a problem because:",
    "options": [
      {
        "id": "A",
        "text": "Even though the numbers you look at appear better, to achieve these numbers, people are doing other aspects of their work much less well."
      },
      {
        "id": "B",
        "text": "We don&#039;t know how to measure a variable (our measurement is dysfunctional) and so we don&#039;t know how to interpret the result."
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
    "explanation": "**Đáp án đúng: A**\n\n- Sự rối loạn đo lường (Measurement dysfunction) xảy ra khi mọi người chỉ cố gắng làm cho các con số chỉ số đẹp lên trên báo cáo nhưng thực tế lại bỏ bê chất lượng các công việc cốt lõi khác.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is the standard for the Software product quality",
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
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn quốc tế định nghĩa mô hình chất lượng sản phẩm phần mềm (Software product quality) là ISO 9126 (sau này được kế thừa và phát triển thành ISO/IEC 25010).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Boundary value testing",
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
    "explanation": "**Đáp án đúng: B**\n\n- Phân tích giá trị biên (Boundary Value Analysis) là kỹ thuật kiểm tra các điều kiện ngay tại biên, ngay dưới biên và ngay trên biên của các phân vùng tương đương (on, below, and above edges).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Component Testing is also called as i) Unit Testing ii) Program Testing iii) Module Testing iv) System Component Testing.",
    "options": [
      {
        "id": "A",
        "text": "i,ii,iii are true and iv is false"
      },
      {
        "id": "B",
        "text": "i,ii,iii,iv are false"
      },
      {
        "id": "C",
        "text": "i,ii,iv are true and iii is false"
      },
      {
        "id": "D",
        "text": "All of them are true"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử thành phần (Component Testing) còn có các tên gọi tương đương là: Unit Testing, Program Testing, Module Testing. Không gọi là System Component Testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Software quality is not relevant to _____",
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
    "explanation": "**Đáp án đúng: C**\n\n- Viability (tính khả thi kinh doanh/kinh tế) là thước đo tài chính/quản lý dự án, không thuộc các thuộc tính chất lượng kỹ thuật của phần mềm theo ISO 9126.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Who is responsible for document all the issues, problems and open point that were identified during the review meeting",
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
    "explanation": "**Đáp án đúng: B**\n\n- Người chịu trách nhiệm ghi chép lại toàn bộ các vấn đề, lỗi và điểm còn mở trong cuộc họp review là Thư ký (Scribe / Recorder).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Khi mua một công cụ kiểm thử mới, nó phải được triển khai thí điểm (Pilot project) trước tiên bởi một nhóm nhỏ để tìm ra cách áp dụng và quy trình tối ưu nhất.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The Phases of formal review process is mentioned below arrange them in the correct order. i) Planning ii) Review Meeting iii) Rework iv) Individual Preparations v) Kick Off vi) Follow Up",
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
    "explanation": "**Đáp án đúng: C**\n\n- Thứ tự chuẩn của quy trình đánh giá chính thức (Formal Review Process): i) Planning (Lập kế hoạch) -> v) Kick-off (Khởi động) -> iv) Individual Preparation (Chuẩn bị cá nhân) -> ii) Review Meeting (Họp đánh giá) -> iii) Rework (Chỉnh sửa) -> vi) Follow-up (Theo dõi kiểm tra lại).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which test may not mimic real world situations (choose one answer)",
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
    "explanation": "**Đáp án đúng: B**\n\n- Kiểm thử cấu trúc / hộp trắng (Structural Testing) kiểm tra luồng logic và đường rẽ nhánh mã nguồn bên trong nên không mô phỏng sát hành vi sử dụng thực tế của người dùng ngoài đời thực như kiểm thử chức năng (Functional testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Mục tiêu hàng đầu và bản chất của kiểm thử phần mềm là phát hiện lỗi (Uncover software errors / find defects). Không thể loại bỏ mọi lỗi hay thay thế bảo trì.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Defects discovered by static analysis tools include: i. Variables that are never used. ii. Security vulnerabilities. iii. Programming Standard Violations iv. Uncalled functions and procedures",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv is correct"
      },
      {
        "id": "B",
        "text": "iii ,is correct I,ii,iv are incorrect."
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
    "explanation": "**Đáp án đúng: A**\n\n- Phân tích tĩnh bằng công cụ (Static analysis tools) có thể tự động phát hiện: i) Biến được khai báo nhưng không dùng; ii) Lỗ hổng bảo mật tiềm ẩn; iii) Vi phạm quy chuẩn lập trình; iv) Hàm/thủ tục không bao giờ được gọi (dead code).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following benefits are MOST likely to be achieved by using test tools? i) Easy to access information about tests and testing. ii) Reduced maintenance of testware. iii) Easy and cheap to implement. iv) Greater consistency of tests.",
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
    "explanation": "**Đáp án đúng: C**\n\n- Lợi ích lớn nhất khi sử dụng công cụ kiểm thử: i) Dễ dàng truy xuất thông tin về kết quả kiểm thử; iv) Tăng tính nhất quán và chuẩn mực giữa các lần thực thi test. (Tự động hóa không hề rẻ và thường làm tăng chi phí bảo trì testware).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Mức độ rủi ro (Level of Risk) được xác định bằng tích của hai yếu tố: Khả năng xảy ra rủi ro (Likelihood / Probability) và Mức độ ảnh hưởng nếu rủi ro xảy ra (Impact).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử chuyển trạng thái (State Transition Testing) là một kỹ thuật kiểm thử chức năng hộp đen (Black-box functional technique), KHÔNG PHẢI là kiểm thử phi chức năng (Non-functional testing). Usability, Performance, Security là phi chức năng.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The person who leads the review of the document(s), planning the review, running the meeting and follow-up after the meeting",
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
    "explanation": "**Đáp án đúng: C**\n\n- Điều phối viên (Moderator / Review Leader) là người chủ trì buổi đánh giá chính thức (formal review): lập kế hoạch, điều hành cuộc họp và theo dõi kết quả sau cuộc họp.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Reviews, static analysis and dynamic testing have the same objective",
    "options": [
      {
        "id": "A",
        "text": "(i) Identifying defects."
      },
      {
        "id": "B",
        "text": "(ii) Fixing defects."
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
    "explanation": "**Đáp án đúng: A**\n\n- Cả đánh giá tài liệu (Reviews), phân tích tĩnh (Static analysis) và kiểm thử động (Dynamic testing) đều có chung một mục tiêu cốt lõi là: Xác định và phát hiện lỗi (Identifying defects). Việc sửa lỗi (fixing defects) là trách nhiệm của Developer (Debugging).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "PDCA is known as",
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
    "explanation": "**Đáp án đúng: A**\n\n- Chu trình cải tiến chất lượng PDCA của Deming là viết tắt của: Plan (Lập kế hoạch) -> Do (Thực hiện) -> Check (Kiểm tra đánh giá) -> Act (Hành động cải tiến).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "id": "A",
        "text": "Faults in program specifications are the most expensive to fix"
      },
      {
        "id": "B",
        "text": "Faults in code are the most expensive to fix"
      },
      {
        "id": "C",
        "text": "Faults in requirements are the most expensive to fix"
      },
      {
        "id": "D",
        "text": "Faults in designs are the most expensive to fix"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Lỗi nằm trong tài liệu Yêu cầu (Requirements) là lỗi tốn kém chi phí sửa chữa nhất nếu không được phát hiện sớm, vì yêu cầu là nền móng cho toàn bộ kiến trúc, thiết kế, mã nguồn và ca kiểm thử phía sau.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Thời điểm dừng kiểm thử chuẩn xác nhất là khi các Tiêu chí hoàn thành kiểm thử đã định trước được thỏa mãn (When the test completion criteria / exit criteria have been met).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Where may functional testing be performed?",
    "options": [
      {
        "id": "A",
        "text": "At system and acceptance testing levels only"
      },
      {
        "id": "B",
        "text": "At all test levels"
      },
      {
        "id": "C",
        "text": "At all levels above integration testing"
      },
      {
        "id": "D",
        "text": "At the acceptance testing level only"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Kiểm thử chức năng (Functional testing) có thể và nên được thực hiện ở TẤT CẢ các cấp độ kiểm thử (At all test levels): Unit, Integration, System, và Acceptance testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following activities should be performed during the selection and implementation of a testing tool? i) Investigate the organisation&#039;s test process. ii) Conduct a proof of concept. iii) Implement the selected tool on a project behind schedule to save time. iv) Identify coaching and mentoring requirements for the use of the selected tool.",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii"
      },
      {
        "id": "B",
        "text": "ii, iii, iv"
      },
      {
        "id": "C",
        "text": "i, iii, iv"
      },
      {
        "id": "D",
        "text": "i, ii, iv SWT301 SU26 Final Exam Questions 21 to 25&#8203;"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Các hoạt động chuẩn khi chọn lựa và triển khai công cụ kiểm thử: i) Khảo sát quy trình kiểm thử hiện tại của tổ chức; ii) Tiến hành thử nghiệm PoC (Proof of Concept); iv) Xác định nhu cầu đào tạo và hướng dẫn kèm cặp (coaching/mentoring). Tuyệt đối không áp dụng công cụ mới vào một dự án đang trễ hạn.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: B**\n\n- False. Theo nguyên lý kiểm thử ISTQB số 2: \"Exhaustive testing is impossible\" (Kiểm thử kiệt quệ là bất khả thi), không thể loại bỏ 100% tất cả các lỗi trong phần mềm.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Defect Management process does not include",
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
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Quy trình quản lý lỗi (Defect Management) bao gồm phòng ngừa lỗi, báo cáo quản lý, theo dõi vòng đời của lỗi, nhưng không bao gồm Deliverable base-lining (đây là nhiệm vụ của Quản lý cấu hình - Configuration Management).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Kỹ thuật Loop Testing (Kiểm thử vòng lặp hộp trắng) áp dụng hiệu quả cho: Vòng lặp đơn giản (Simple loops), Vòng lặp lồng nhau (Nested loops), và Vòng lặp nối tiếp (Concatenated loops).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "(Choose 2 answers) Which TWO of the following statements about static analysis are correct?",
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
        "text": "Extensive statistical analysis will not be needed if white- Box testing is to be performed."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Phân tích tĩnh (Static analysis) có thể phát hiện các lỗi mã nguồn tiềm ẩn (lỗ hổng bảo mật, rò rỉ bộ nhớ, biến chưa khởi tạo) mà kiểm thử động rất khó kích hoạt hoặc mất nhiều công sức để phát hiện.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Kiểm thử đánh giá các thuộc tính chất lượng như an toàn bảo mật, hiệu năng tải, độ tin cậy và tính khả dụng của ngân hàng trực tuyến là Kiểm thử phi chức năng (Non-functional testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The purpose of exit criteria is: (choose one answer)",
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
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Mục đích của Exit Criteria (Tiêu chí dừng/kết thúc) là: Xác định khi nào dừng kiểm thử, hoàn thành một cấp độ kiểm thử, hoặc khi tập ca kiểm thử đạt được mức độ bao phủ và chất lượng kỳ vọng.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Match the following: 1. Test estimation 2. Test control 3. Test monitoring a. Measures of tracking process b. Effort required to perform activities c. Reallocation of resources",
    "options": [
      {
        "id": "A",
        "text": "1 -b, 2-c, 3-a"
      },
      {
        "id": "B",
        "text": "1 -b, 2-a, 3-c"
      },
      {
        "id": "C",
        "text": "1 -c, 2-a, 3-b"
      },
      {
        "id": "D",
        "text": "1 -a, 2-b, 3-c"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ghép nối:\n- 1. Test estimation (Ước lượng kiểm thử) -> b. Nỗ lực cần thiết để thực hiện công việc\n- 2. Test control (Kiểm soát kiểm thử) -> c. Tái phân bổ nguồn lực và điều chỉnh kế hoạch\n- 3. Test monitoring (Giám sát kiểm thử) -> a. Đo lường và theo dõi tiến độ thực tế.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which tool will be used to test the flag memory leaks and unassigned pointers",
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
    "explanation": "**Đáp án đúng: A**\n\n- Rò rỉ bộ nhớ (memory leaks) và con trỏ chưa gán/lạc hướng (unassigned/wild pointers) khi chương trình chạy được phát hiện tốt nhất bằng Công cụ phân tích động (Dynamic analysis tool - ví dụ Valgrind, Purify).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Find out what your budget would be for the tool E. Search the internet"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Bước đầu tiên và quan trọng nhất khi muốn mua/áp dụng công cụ kiểm thử mới là Phân tích nhu cầu và yêu cầu thực tế của tổ chức (Analyze your needs and requirements).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Can&#039;t say SWT301 Multiple Choice Exam Questions&#8203;"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Nâng cao chất lượng phần mềm nhờ các phương pháp phát triển tốt hơn (viết code chuẩn, static analysis, unit test kỹ) sẽ làm giảm số lượng bug phát sinh, từ đó giảm thời gian cần thiết cho các đợt kiểm thử (Reducing test time).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Theo tiêu chuẩn ISO 9126, 6 đặc tính chất lượng phần mềm gồm: Functionality, Reliability, Usability, Efficiency, Maintainability, Portability. Supportability không nằm trong ISO 9126 (nó thuộc mô hình FURPS+).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is not included in Test Plan.",
    "options": [
      {
        "id": "A",
        "text": "Features to be tested."
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
        "text": "Expected results."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Kết quả kỳ vọng (Expected results) được đặc tả chi tiết trong từng Test Case / Test Procedure Specification, KHÔNG nằm trong Kế hoạch kiểm thử tổng thể (Test Plan - chỉ định nghĩa scope, features to test, environmental needs, suspension criteria).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "One of the fields on a form contains a text box which accepts alpha numeric values. Identify the Valid Equivalence class",
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
        "text": "Boo01k"
      },
      {
        "id": "D",
        "text": "book"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trường nhập giá trị alpha-numeric (chữ và số kết hợp): \"Boo01k\" chứa cả ký tự chữ và số nên thuộc phân vùng hợp lệ (Valid Equivalence Class).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: B**\n\n- Sự khác biệt cốt lõi: Cuộc kiểm tra chính thức (Inspection) được dẫn dắt bởi một Điều phối viên độc lập (trained Moderator), trong khi Walkthrough do chính Tác giả của tài liệu (Author) chủ trì và trình bày.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Handover of Testware is a part of which Phase",
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
    "explanation": "**Đáp án đúng: C**\n\n- Bàn giao tài liệu kiểm thử và hiện vật (Handover of Testware) là hoạt động then chốt thuộc giai đoạn Đóng kiểm thử (Test Closure Activities).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which expression best matches the following characteristics or review processes: 1. Led by author 2. Undocumented 3. No management participation 4. Led by a trained moderator or leader 5. Uses entry exit criteria s) Inspection t) Peer review u) Informal review v) Walkthrough",
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
        "text": "s = 5, t = 4, u = 3, v = 1 and 2 E. s = 4 and 5, t = 1, u = 2, v = 3"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Khớp các loại Review:\n- s. Inspection: Dẫn dắt bởi trained moderator (4) và sử dụng tiêu chí entry/exit chuẩn (5)\n- t. Peer review: Thường không có sự tham gia của ban quản lý (3)\n- u. Informal review: Không cần ghi chép tài liệu trang trọng (2)\n- v. Walkthrough: Do tác giả chủ trì (1).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Testing wherein we subject the target of the test, to varying workloads to measure and evaluate the performance behaviors and ability of the target and of the test to continue to function properly under these different workloads.",
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử đặt hệ thống dưới các mức tải khác nhau để đo lường hành vi và hiệu năng vận hành là Kiểm thử tải (Load Testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Cost of the reviews will not include.",
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
        "text": "Tool support."
      },
      {
        "id": "D",
        "text": "Process improvement."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Chi phí trực tiếp của hoạt động review bao gồm: thời gian thực hiện quy trình review, phân tích chỉ số, công cụ hỗ trợ. Process improvement (cải tiến quy trình) là lợi ích dài hạn đem lại chứ không tính là chi phí thuần của buổi review.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Đoán lỗi (Error guessing) là một kỹ thuật kiểm thử động dựa trên kinh nghiệm (Experience-based dynamic technique), KHÔNG PHẢI là kỹ thuật kiểm thử tĩnh (Static testing). Walkthrough, Data flow analysis, Inspection đều là kiểm thử tĩnh.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The Planning phase of a formal review includes which of the followings?",
    "options": [
      {
        "id": "A",
        "text": "Explaining the objectives"
      },
      {
        "id": "B",
        "text": "Selecting the personnel, allocating roles."
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
    "explanation": "**Đáp án đúng: B**\n\n- Giai đoạn Lập kế hoạch (Planning) của buổi đánh giá tài liệu chính thức bao gồm: Xác định phạm vi mục tiêu, lựa chọn nhân sự tham gia và phân công vai trò (Author, Moderator, Scribe, Reviewer).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Độ phủ mã nguồn (Code Coverage: Statement coverage, Branch coverage) được sử dụng làm thước đo Hiệu quả kiểm thử (Test Effectiveness) và mức độ kỹ lưỡng của tập ca kiểm thử.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which is not the testing objectives",
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
    "explanation": "**Đáp án đúng: D**\n\n- Debugging (gỡ lỗi - định vị và sửa chữa lỗi mã nguồn) là công việc của lập trình viên, KHÔNG PHẢI là mục tiêu của kiểm thử phần mềm (Testing nhằm tìm lỗi, tạo dựng niềm tin và phòng ngừa lỗi).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Công cụ Record/Playback (Capture/Playback) được sử dụng phổ biến nhất để tự động hóa các ca kiểm thử hồi quy (Regression test).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "_____ includes both Black box and White Box Testing features (choose one answer)",
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
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Kiểm thử kết hợp cả đặc tính hộp đen (dựa trên yêu cầu) và cấu trúc hộp trắng (mã nguồn/cơ sở dữ liệu) được gọi là Gray Box Testing hoặc Hybrid Testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Who are the persons involved in a Formal Review i) Manager ii) Moderator iii) Scribe / Recorder iv) Assistant Manager",
    "options": [
      {
        "id": "A",
        "text": "i,ii,iii,iv are true"
      },
      {
        "id": "B",
        "text": "i,ii,iii are true and iv is false."
      },
      {
        "id": "C",
        "text": "ii,iii,iv are true and i is false."
      },
      {
        "id": "D",
        "text": "i,iv are true and ii, iii are false."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Các vai trò chuẩn trong Formal Review theo ISTQB gồm: i) Manager (quyết định thực hiện); ii) Moderator (chủ trì); iii) Scribe / Recorder (ghi chép biên bản). Assistant Manager không phải là vai trò chuẩn.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Mức độ độc lập cao nhất (Highest level of independence) trong kiểm thử là khi ca kiểm thử được thiết kế bởi người thuộc một tổ chức hoàn toàn độc lập (ví dụ đơn vị kiểm thử bên ngoài / 3rd party testing vendor).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Success Factors for a review include: i. Each Review does not have a predefined objective ii. Defects found are welcomed and expressed objectively iii. Management supports a good review process. iv. There is an emphasis on learning and process improvement.",
    "options": [
      {
        "id": "A",
        "text": "ii,iii,iv are correct and i is incorrect"
      },
      {
        "id": "B",
        "text": "iii , i , iv is correct and ii is incorrect"
      },
      {
        "id": "C",
        "text": "i , iii , iv , ii is in correct"
      },
      {
        "id": "D",
        "text": "ii is correct"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yếu tố thành công của review: ii) Lỗi phát hiện được hoan nghênh và diễn đạt khách quan; iii) Ban quản lý ủng hộ quy trình; iv) Chú trọng học hỏi và cải tiến quy trình. Mệnh đề i sai vì mỗi review BẮT BUỘC phải có mục tiêu xác định trước.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "In a review meeting a moderator is a person who",
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
    "explanation": "**Đáp án đúng: B**\n\n- Trong cuộc họp đánh giá, Moderator là người làm trung gian điều phối giữa mọi người (Mediates between people), đảm bảo cuộc họp diễn ra suôn sẻ, đúng giờ và tập trung vào mục tiêu.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is a Key Characteristics of WalkThrough",
    "options": [
      {
        "id": "A",
        "text": "Scenario , Dry Run , Peer Group"
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
    "explanation": "**Đáp án đúng: A**\n\n- Đặc trưng cốt lõi của Walkthrough: Trình bày kịch bản (Scenario), chạy thử trên giấy (Dry Run), có sự tham gia của nhóm đồng nghiệp bình duyệt (Peer Group).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "One of the following is not a part of white box testing as per BS7925-II standards.",
    "options": [
      {
        "id": "A",
        "text": "Random testing"
      },
      {
        "id": "B",
        "text": "Data Flow testing."
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử ngẫu nhiên (Random testing) là kỹ thuật kiểm thử hộp đen, không thuộc kiểm thử cấu trúc hộp trắng theo tiêu chuẩn BS 7925-2.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Recording test inputs E. Reading test values from a data file"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Công cụ thực thi kiểm thử tự động (Test execution tool) KHÔNG THỂ tự động sáng tạo/sinh ra kết quả kỳ vọng đúng đắn (Generating expected outputs) nếu không có oracle hoặc con người cung cấp.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Hệ thống ghi nhận sự cố (Incident logging system) là nguồn thông tin vô cùng giá trị cho dự án nếu nó ghi nhận đầy đủ mọi sự cố phát sinh trong quá trình kiểm thử.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Measurement dysfunction is a problem because:",
    "options": [
      {
        "id": "A",
        "text": "Even though the numbers you look at appear better, to achieve these numbers, people are doing other aspects of their work much less well."
      },
      {
        "id": "B",
        "text": "We don&#039;t know how to measure a variable (our measurement is dysfunctional) and so we don&#039;t know how to interpret the result."
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
    "explanation": "**Đáp án đúng: A**\n\n- Sự rối loạn đo lường (Measurement dysfunction) xảy ra khi mọi người chỉ cố gắng làm cho các con số chỉ số đẹp lên trên báo cáo nhưng thực tế lại bỏ bê chất lượng các công việc cốt lõi khác.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is the standard for the Software product quality",
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
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn quốc tế định nghĩa mô hình chất lượng sản phẩm phần mềm (Software product quality) là ISO 9126 (sau này được kế thừa và phát triển thành ISO/IEC 25010).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Boundary value testing",
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
    "explanation": "**Đáp án đúng: B**\n\n- Phân tích giá trị biên (Boundary Value Analysis) là kỹ thuật kiểm tra các điều kiện ngay tại biên, ngay dưới biên và ngay trên biên của các phân vùng tương đương (on, below, and above edges).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Component Testing is also called as i) Unit Testing ii) Program Testing iii) Module Testing iv) System Component Testing.",
    "options": [
      {
        "id": "A",
        "text": "i,ii,iii are true and iv is false"
      },
      {
        "id": "B",
        "text": "i,ii,iii,iv are false"
      },
      {
        "id": "C",
        "text": "i,ii,iv are true and iii is false"
      },
      {
        "id": "D",
        "text": "All of them are true"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử thành phần (Component Testing) còn có các tên gọi tương đương là: Unit Testing, Program Testing, Module Testing. Không gọi là System Component Testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Software quality is not relevant to _____",
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
    "explanation": "**Đáp án đúng: C**\n\n- Viability (tính khả thi kinh doanh/kinh tế) là thước đo tài chính/quản lý dự án, không thuộc các thuộc tính chất lượng kỹ thuật của phần mềm theo ISO 9126.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Who is responsible for document all the issues, problems and open point that were identified during the review meeting",
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
    "explanation": "**Đáp án đúng: B**\n\n- Người chịu trách nhiệm ghi chép lại toàn bộ các vấn đề, lỗi và điểm còn mở trong cuộc họp review là Thư ký (Scribe / Recorder).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Khi mua một công cụ kiểm thử mới, nó phải được triển khai thí điểm (Pilot project) trước tiên bởi một nhóm nhỏ để tìm ra cách áp dụng và quy trình tối ưu nhất.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The Phases of formal review process is mentioned below arrange them in the correct order. i) Planning ii) Review Meeting iii) Rework iv) Individual Preparations v) Kick Off vi) Follow Up",
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
    "explanation": "**Đáp án đúng: C**\n\n- Thứ tự chuẩn của quy trình đánh giá chính thức (Formal Review Process): i) Planning (Lập kế hoạch) -> v) Kick-off (Khởi động) -> iv) Individual Preparation (Chuẩn bị cá nhân) -> ii) Review Meeting (Họp đánh giá) -> iii) Rework (Chỉnh sửa) -> vi) Follow-up (Theo dõi kiểm tra lại).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which test may not mimic real world situations (choose one answer)",
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
    "explanation": "**Đáp án đúng: B**\n\n- Kiểm thử cấu trúc / hộp trắng (Structural Testing) kiểm tra luồng logic và đường rẽ nhánh mã nguồn bên trong nên không mô phỏng sát hành vi sử dụng thực tế của người dùng ngoài đời thực như kiểm thử chức năng (Functional testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Mục tiêu hàng đầu và bản chất của kiểm thử phần mềm là phát hiện lỗi (Uncover software errors / find defects). Không thể loại bỏ mọi lỗi hay thay thế bảo trì.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Defects discovered by static analysis tools include: i. Variables that are never used. ii. Security vulnerabilities. iii. Programming Standard Violations iv. Uncalled functions and procedures",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv is correct"
      },
      {
        "id": "B",
        "text": "iii ,is correct I,ii,iv are incorrect."
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
    "explanation": "**Đáp án đúng: A**\n\n- Phân tích tĩnh bằng công cụ (Static analysis tools) có thể tự động phát hiện: i) Biến được khai báo nhưng không dùng; ii) Lỗ hổng bảo mật tiềm ẩn; iii) Vi phạm quy chuẩn lập trình; iv) Hàm/thủ tục không bao giờ được gọi (dead code).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following benefits are MOST likely to be achieved by using test tools? i) Easy to access information about tests and testing. ii) Reduced maintenance of testware. iii) Easy and cheap to implement. iv) Greater consistency of tests.",
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
    "explanation": "**Đáp án đúng: C**\n\n- Lợi ích lớn nhất khi sử dụng công cụ kiểm thử: i) Dễ dàng truy xuất thông tin về kết quả kiểm thử; iv) Tăng tính nhất quán và chuẩn mực giữa các lần thực thi test. (Tự động hóa không hề rẻ và thường làm tăng chi phí bảo trì testware).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Mức độ rủi ro (Level of Risk) được xác định bằng tích của hai yếu tố: Khả năng xảy ra rủi ro (Likelihood / Probability) và Mức độ ảnh hưởng nếu rủi ro xảy ra (Impact).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử chuyển trạng thái (State Transition Testing) là một kỹ thuật kiểm thử chức năng hộp đen (Black-box functional technique), KHÔNG PHẢI là kiểm thử phi chức năng (Non-functional testing). Usability, Performance, Security là phi chức năng.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The person who leads the review of the document(s), planning the review, running the meeting and follow-up after the meeting",
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
    "explanation": "**Đáp án đúng: C**\n\n- Điều phối viên (Moderator / Review Leader) là người chủ trì buổi đánh giá chính thức (formal review): lập kế hoạch, điều hành cuộc họp và theo dõi kết quả sau cuộc họp.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Reviews, static analysis and dynamic testing have the same objective",
    "options": [
      {
        "id": "A",
        "text": "(i) Identifying defects."
      },
      {
        "id": "B",
        "text": "(ii) Fixing defects."
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
    "explanation": "**Đáp án đúng: A**\n\n- Cả đánh giá tài liệu (Reviews), phân tích tĩnh (Static analysis) và kiểm thử động (Dynamic testing) đều có chung một mục tiêu cốt lõi là: Xác định và phát hiện lỗi (Identifying defects). Việc sửa lỗi (fixing defects) là trách nhiệm của Developer (Debugging).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "PDCA is known as",
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
    "explanation": "**Đáp án đúng: A**\n\n- Chu trình cải tiến chất lượng PDCA của Deming là viết tắt của: Plan (Lập kế hoạch) -> Do (Thực hiện) -> Check (Kiểm tra đánh giá) -> Act (Hành động cải tiến).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "id": "A",
        "text": "Faults in program specifications are the most expensive to fix"
      },
      {
        "id": "B",
        "text": "Faults in code are the most expensive to fix"
      },
      {
        "id": "C",
        "text": "Faults in requirements are the most expensive to fix"
      },
      {
        "id": "D",
        "text": "Faults in designs are the most expensive to fix"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Lỗi nằm trong tài liệu Yêu cầu (Requirements) là lỗi tốn kém chi phí sửa chữa nhất nếu không được phát hiện sớm, vì yêu cầu là nền móng cho toàn bộ kiến trúc, thiết kế, mã nguồn và ca kiểm thử phía sau.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Thời điểm dừng kiểm thử chuẩn xác nhất là khi các Tiêu chí hoàn thành kiểm thử đã định trước được thỏa mãn (When the test completion criteria / exit criteria have been met).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Where may functional testing be performed?",
    "options": [
      {
        "id": "A",
        "text": "At system and acceptance testing levels only"
      },
      {
        "id": "B",
        "text": "At all test levels"
      },
      {
        "id": "C",
        "text": "At all levels above integration testing"
      },
      {
        "id": "D",
        "text": "At the acceptance testing level only"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Kiểm thử chức năng (Functional testing) có thể và nên được thực hiện ở TẤT CẢ các cấp độ kiểm thử (At all test levels): Unit, Integration, System, và Acceptance testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following activities should be performed during the selection and implementation of a testing tool? i) Investigate the organisation&#039;s test process. ii) Conduct a proof of concept. iii) Implement the selected tool on a project behind schedule to save time. iv) Identify coaching and mentoring requirements for the use of the selected tool.",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii"
      },
      {
        "id": "B",
        "text": "ii, iii, iv"
      },
      {
        "id": "C",
        "text": "i, iii, iv"
      },
      {
        "id": "D",
        "text": "i, ii, iv SWT301 SU26 Final Exam Questions 21 to 25&#8203;"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Các hoạt động chuẩn khi chọn lựa và triển khai công cụ kiểm thử: i) Khảo sát quy trình kiểm thử hiện tại của tổ chức; ii) Tiến hành thử nghiệm PoC (Proof of Concept); iv) Xác định nhu cầu đào tạo và hướng dẫn kèm cặp (coaching/mentoring). Tuyệt đối không áp dụng công cụ mới vào một dự án đang trễ hạn.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: B**\n\n- False. Theo nguyên lý kiểm thử ISTQB số 2: \"Exhaustive testing is impossible\" (Kiểm thử kiệt quệ là bất khả thi), không thể loại bỏ 100% tất cả các lỗi trong phần mềm.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Defect Management process does not include",
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
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Quy trình quản lý lỗi (Defect Management) bao gồm phòng ngừa lỗi, báo cáo quản lý, theo dõi vòng đời của lỗi, nhưng không bao gồm Deliverable base-lining (đây là nhiệm vụ của Quản lý cấu hình - Configuration Management).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Kỹ thuật Loop Testing (Kiểm thử vòng lặp hộp trắng) áp dụng hiệu quả cho: Vòng lặp đơn giản (Simple loops), Vòng lặp lồng nhau (Nested loops), và Vòng lặp nối tiếp (Concatenated loops).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "(Choose 2 answers) Which TWO of the following statements about static analysis are correct?",
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
        "text": "Extensive statistical analysis will not be needed if white- Box testing is to be performed."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Phân tích tĩnh (Static analysis) có thể phát hiện các lỗi mã nguồn tiềm ẩn (lỗ hổng bảo mật, rò rỉ bộ nhớ, biến chưa khởi tạo) mà kiểm thử động rất khó kích hoạt hoặc mất nhiều công sức để phát hiện.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Kiểm thử đánh giá các thuộc tính chất lượng như an toàn bảo mật, hiệu năng tải, độ tin cậy và tính khả dụng của ngân hàng trực tuyến là Kiểm thử phi chức năng (Non-functional testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The purpose of exit criteria is: (choose one answer)",
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
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Mục đích của Exit Criteria (Tiêu chí dừng/kết thúc) là: Xác định khi nào dừng kiểm thử, hoàn thành một cấp độ kiểm thử, hoặc khi tập ca kiểm thử đạt được mức độ bao phủ và chất lượng kỳ vọng.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Match the following: 1. Test estimation 2. Test control 3. Test monitoring a. Measures of tracking process b. Effort required to perform activities c. Reallocation of resources",
    "options": [
      {
        "id": "A",
        "text": "1 -b, 2-c, 3-a"
      },
      {
        "id": "B",
        "text": "1 -b, 2-a, 3-c"
      },
      {
        "id": "C",
        "text": "1 -c, 2-a, 3-b"
      },
      {
        "id": "D",
        "text": "1 -a, 2-b, 3-c"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ghép nối:\n- 1. Test estimation (Ước lượng kiểm thử) -> b. Nỗ lực cần thiết để thực hiện công việc\n- 2. Test control (Kiểm soát kiểm thử) -> c. Tái phân bổ nguồn lực và điều chỉnh kế hoạch\n- 3. Test monitoring (Giám sát kiểm thử) -> a. Đo lường và theo dõi tiến độ thực tế.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which tool will be used to test the flag memory leaks and unassigned pointers",
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
    "explanation": "**Đáp án đúng: A**\n\n- Rò rỉ bộ nhớ (memory leaks) và con trỏ chưa gán/lạc hướng (unassigned/wild pointers) khi chương trình chạy được phát hiện tốt nhất bằng Công cụ phân tích động (Dynamic analysis tool - ví dụ Valgrind, Purify).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Find out what your budget would be for the tool E. Search the internet"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Bước đầu tiên và quan trọng nhất khi muốn mua/áp dụng công cụ kiểm thử mới là Phân tích nhu cầu và yêu cầu thực tế của tổ chức (Analyze your needs and requirements).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Can&#039;t say SWT301 Multiple Choice Exam Questions&#8203;"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Nâng cao chất lượng phần mềm nhờ các phương pháp phát triển tốt hơn (viết code chuẩn, static analysis, unit test kỹ) sẽ làm giảm số lượng bug phát sinh, từ đó giảm thời gian cần thiết cho các đợt kiểm thử (Reducing test time).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Theo tiêu chuẩn ISO 9126, 6 đặc tính chất lượng phần mềm gồm: Functionality, Reliability, Usability, Efficiency, Maintainability, Portability. Supportability không nằm trong ISO 9126 (nó thuộc mô hình FURPS+).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is not included in Test Plan.",
    "options": [
      {
        "id": "A",
        "text": "Features to be tested."
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
        "text": "Expected results."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Kết quả kỳ vọng (Expected results) được đặc tả chi tiết trong từng Test Case / Test Procedure Specification, KHÔNG nằm trong Kế hoạch kiểm thử tổng thể (Test Plan - chỉ định nghĩa scope, features to test, environmental needs, suspension criteria).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "One of the fields on a form contains a text box which accepts alpha numeric values. Identify the Valid Equivalence class",
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
        "text": "Boo01k"
      },
      {
        "id": "D",
        "text": "book"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trường nhập giá trị alpha-numeric (chữ và số kết hợp): \"Boo01k\" chứa cả ký tự chữ và số nên thuộc phân vùng hợp lệ (Valid Equivalence Class).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: B**\n\n- Sự khác biệt cốt lõi: Cuộc kiểm tra chính thức (Inspection) được dẫn dắt bởi một Điều phối viên độc lập (trained Moderator), trong khi Walkthrough do chính Tác giả của tài liệu (Author) chủ trì và trình bày.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Handover of Testware is a part of which Phase",
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
    "explanation": "**Đáp án đúng: C**\n\n- Bàn giao tài liệu kiểm thử và hiện vật (Handover of Testware) là hoạt động then chốt thuộc giai đoạn Đóng kiểm thử (Test Closure Activities).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which expression best matches the following characteristics or review processes: 1. Led by author 2. Undocumented 3. No management participation 4. Led by a trained moderator or leader 5. Uses entry exit criteria s) Inspection t) Peer review u) Informal review v) Walkthrough",
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
        "text": "s = 5, t = 4, u = 3, v = 1 and 2 E. s = 4 and 5, t = 1, u = 2, v = 3"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Khớp các loại Review:\n- s. Inspection: Dẫn dắt bởi trained moderator (4) và sử dụng tiêu chí entry/exit chuẩn (5)\n- t. Peer review: Thường không có sự tham gia của ban quản lý (3)\n- u. Informal review: Không cần ghi chép tài liệu trang trọng (2)\n- v. Walkthrough: Do tác giả chủ trì (1).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Testing wherein we subject the target of the test, to varying workloads to measure and evaluate the performance behaviors and ability of the target and of the test to continue to function properly under these different workloads.",
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử đặt hệ thống dưới các mức tải khác nhau để đo lường hành vi và hiệu năng vận hành là Kiểm thử tải (Load Testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Cost of the reviews will not include.",
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
        "text": "Tool support."
      },
      {
        "id": "D",
        "text": "Process improvement."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Chi phí trực tiếp của hoạt động review bao gồm: thời gian thực hiện quy trình review, phân tích chỉ số, công cụ hỗ trợ. Process improvement (cải tiến quy trình) là lợi ích dài hạn đem lại chứ không tính là chi phí thuần của buổi review.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Đoán lỗi (Error guessing) là một kỹ thuật kiểm thử động dựa trên kinh nghiệm (Experience-based dynamic technique), KHÔNG PHẢI là kỹ thuật kiểm thử tĩnh (Static testing). Walkthrough, Data flow analysis, Inspection đều là kiểm thử tĩnh.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The Planning phase of a formal review includes which of the followings?",
    "options": [
      {
        "id": "A",
        "text": "Explaining the objectives"
      },
      {
        "id": "B",
        "text": "Selecting the personnel, allocating roles."
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
    "explanation": "**Đáp án đúng: B**\n\n- Giai đoạn Lập kế hoạch (Planning) của buổi đánh giá tài liệu chính thức bao gồm: Xác định phạm vi mục tiêu, lựa chọn nhân sự tham gia và phân công vai trò (Author, Moderator, Scribe, Reviewer).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Độ phủ mã nguồn (Code Coverage: Statement coverage, Branch coverage) được sử dụng làm thước đo Hiệu quả kiểm thử (Test Effectiveness) và mức độ kỹ lưỡng của tập ca kiểm thử.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which is not the testing objectives",
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
    "explanation": "**Đáp án đúng: D**\n\n- Debugging (gỡ lỗi - định vị và sửa chữa lỗi mã nguồn) là công việc của lập trình viên, KHÔNG PHẢI là mục tiêu của kiểm thử phần mềm (Testing nhằm tìm lỗi, tạo dựng niềm tin và phòng ngừa lỗi).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Công cụ Record/Playback (Capture/Playback) được sử dụng phổ biến nhất để tự động hóa các ca kiểm thử hồi quy (Regression test).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "_____ includes both Black box and White Box Testing features (choose one answer)",
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
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Kiểm thử kết hợp cả đặc tính hộp đen (dựa trên yêu cầu) và cấu trúc hộp trắng (mã nguồn/cơ sở dữ liệu) được gọi là Gray Box Testing hoặc Hybrid Testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Who are the persons involved in a Formal Review i) Manager ii) Moderator iii) Scribe / Recorder iv) Assistant Manager",
    "options": [
      {
        "id": "A",
        "text": "i,ii,iii,iv are true"
      },
      {
        "id": "B",
        "text": "i,ii,iii are true and iv is false."
      },
      {
        "id": "C",
        "text": "ii,iii,iv are true and i is false."
      },
      {
        "id": "D",
        "text": "i,iv are true and ii, iii are false."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Các vai trò chuẩn trong Formal Review theo ISTQB gồm: i) Manager (quyết định thực hiện); ii) Moderator (chủ trì); iii) Scribe / Recorder (ghi chép biên bản). Assistant Manager không phải là vai trò chuẩn.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Mức độ độc lập cao nhất (Highest level of independence) trong kiểm thử là khi ca kiểm thử được thiết kế bởi người thuộc một tổ chức hoàn toàn độc lập (ví dụ đơn vị kiểm thử bên ngoài / 3rd party testing vendor).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Success Factors for a review include: i. Each Review does not have a predefined objective ii. Defects found are welcomed and expressed objectively iii. Management supports a good review process. iv. There is an emphasis on learning and process improvement.",
    "options": [
      {
        "id": "A",
        "text": "ii,iii,iv are correct and i is incorrect"
      },
      {
        "id": "B",
        "text": "iii , i , iv is correct and ii is incorrect"
      },
      {
        "id": "C",
        "text": "i , iii , iv , ii is in correct"
      },
      {
        "id": "D",
        "text": "ii is correct"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yếu tố thành công của review: ii) Lỗi phát hiện được hoan nghênh và diễn đạt khách quan; iii) Ban quản lý ủng hộ quy trình; iv) Chú trọng học hỏi và cải tiến quy trình. Mệnh đề i sai vì mỗi review BẮT BUỘC phải có mục tiêu xác định trước.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "In a review meeting a moderator is a person who",
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
    "explanation": "**Đáp án đúng: B**\n\n- Trong cuộc họp đánh giá, Moderator là người làm trung gian điều phối giữa mọi người (Mediates between people), đảm bảo cuộc họp diễn ra suôn sẻ, đúng giờ và tập trung vào mục tiêu.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is a Key Characteristics of WalkThrough",
    "options": [
      {
        "id": "A",
        "text": "Scenario , Dry Run , Peer Group"
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
    "explanation": "**Đáp án đúng: A**\n\n- Đặc trưng cốt lõi của Walkthrough: Trình bày kịch bản (Scenario), chạy thử trên giấy (Dry Run), có sự tham gia của nhóm đồng nghiệp bình duyệt (Peer Group).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "One of the following is not a part of white box testing as per BS7925-II standards.",
    "options": [
      {
        "id": "A",
        "text": "Random testing"
      },
      {
        "id": "B",
        "text": "Data Flow testing."
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử ngẫu nhiên (Random testing) là kỹ thuật kiểm thử hộp đen, không thuộc kiểm thử cấu trúc hộp trắng theo tiêu chuẩn BS 7925-2.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Recording test inputs E. Reading test values from a data file"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Công cụ thực thi kiểm thử tự động (Test execution tool) KHÔNG THỂ tự động sáng tạo/sinh ra kết quả kỳ vọng đúng đắn (Generating expected outputs) nếu không có oracle hoặc con người cung cấp.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Hệ thống ghi nhận sự cố (Incident logging system) là nguồn thông tin vô cùng giá trị cho dự án nếu nó ghi nhận đầy đủ mọi sự cố phát sinh trong quá trình kiểm thử.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Measurement dysfunction is a problem because:",
    "options": [
      {
        "id": "A",
        "text": "Even though the numbers you look at appear better, to achieve these numbers, people are doing other aspects of their work much less well."
      },
      {
        "id": "B",
        "text": "We don&#039;t know how to measure a variable (our measurement is dysfunctional) and so we don&#039;t know how to interpret the result."
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
    "explanation": "**Đáp án đúng: A**\n\n- Sự rối loạn đo lường (Measurement dysfunction) xảy ra khi mọi người chỉ cố gắng làm cho các con số chỉ số đẹp lên trên báo cáo nhưng thực tế lại bỏ bê chất lượng các công việc cốt lõi khác.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is the standard for the Software product quality",
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
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn quốc tế định nghĩa mô hình chất lượng sản phẩm phần mềm (Software product quality) là ISO 9126 (sau này được kế thừa và phát triển thành ISO/IEC 25010).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Boundary value testing",
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
    "explanation": "**Đáp án đúng: B**\n\n- Phân tích giá trị biên (Boundary Value Analysis) là kỹ thuật kiểm tra các điều kiện ngay tại biên, ngay dưới biên và ngay trên biên của các phân vùng tương đương (on, below, and above edges).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Component Testing is also called as i) Unit Testing ii) Program Testing iii) Module Testing iv) System Component Testing.",
    "options": [
      {
        "id": "A",
        "text": "i,ii,iii are true and iv is false"
      },
      {
        "id": "B",
        "text": "i,ii,iii,iv are false"
      },
      {
        "id": "C",
        "text": "i,ii,iv are true and iii is false"
      },
      {
        "id": "D",
        "text": "All of them are true"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử thành phần (Component Testing) còn có các tên gọi tương đương là: Unit Testing, Program Testing, Module Testing. Không gọi là System Component Testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Software quality is not relevant to _____",
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
    "explanation": "**Đáp án đúng: C**\n\n- Viability (tính khả thi kinh doanh/kinh tế) là thước đo tài chính/quản lý dự án, không thuộc các thuộc tính chất lượng kỹ thuật của phần mềm theo ISO 9126.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Who is responsible for document all the issues, problems and open point that were identified during the review meeting",
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
    "explanation": "**Đáp án đúng: B**\n\n- Người chịu trách nhiệm ghi chép lại toàn bộ các vấn đề, lỗi và điểm còn mở trong cuộc họp review là Thư ký (Scribe / Recorder).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Khi mua một công cụ kiểm thử mới, nó phải được triển khai thí điểm (Pilot project) trước tiên bởi một nhóm nhỏ để tìm ra cách áp dụng và quy trình tối ưu nhất.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The Phases of formal review process is mentioned below arrange them in the correct order. i) Planning ii) Review Meeting iii) Rework iv) Individual Preparations v) Kick Off vi) Follow Up",
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
    "explanation": "**Đáp án đúng: C**\n\n- Thứ tự chuẩn của quy trình đánh giá chính thức (Formal Review Process): i) Planning (Lập kế hoạch) -> v) Kick-off (Khởi động) -> iv) Individual Preparation (Chuẩn bị cá nhân) -> ii) Review Meeting (Họp đánh giá) -> iii) Rework (Chỉnh sửa) -> vi) Follow-up (Theo dõi kiểm tra lại).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which test may not mimic real world situations (choose one answer)",
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
    "explanation": "**Đáp án đúng: B**\n\n- Kiểm thử cấu trúc / hộp trắng (Structural Testing) kiểm tra luồng logic và đường rẽ nhánh mã nguồn bên trong nên không mô phỏng sát hành vi sử dụng thực tế của người dùng ngoài đời thực như kiểm thử chức năng (Functional testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Mục tiêu hàng đầu và bản chất của kiểm thử phần mềm là phát hiện lỗi (Uncover software errors / find defects). Không thể loại bỏ mọi lỗi hay thay thế bảo trì.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Defects discovered by static analysis tools include: i. Variables that are never used. ii. Security vulnerabilities. iii. Programming Standard Violations iv. Uncalled functions and procedures",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv is correct"
      },
      {
        "id": "B",
        "text": "iii ,is correct I,ii,iv are incorrect."
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
    "explanation": "**Đáp án đúng: A**\n\n- Phân tích tĩnh bằng công cụ (Static analysis tools) có thể tự động phát hiện: i) Biến được khai báo nhưng không dùng; ii) Lỗ hổng bảo mật tiềm ẩn; iii) Vi phạm quy chuẩn lập trình; iv) Hàm/thủ tục không bao giờ được gọi (dead code).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following benefits are MOST likely to be achieved by using test tools? i) Easy to access information about tests and testing. ii) Reduced maintenance of testware. iii) Easy and cheap to implement. iv) Greater consistency of tests.",
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
    "explanation": "**Đáp án đúng: C**\n\n- Lợi ích lớn nhất khi sử dụng công cụ kiểm thử: i) Dễ dàng truy xuất thông tin về kết quả kiểm thử; iv) Tăng tính nhất quán và chuẩn mực giữa các lần thực thi test. (Tự động hóa không hề rẻ và thường làm tăng chi phí bảo trì testware).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Mức độ rủi ro (Level of Risk) được xác định bằng tích của hai yếu tố: Khả năng xảy ra rủi ro (Likelihood / Probability) và Mức độ ảnh hưởng nếu rủi ro xảy ra (Impact).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử chuyển trạng thái (State Transition Testing) là một kỹ thuật kiểm thử chức năng hộp đen (Black-box functional technique), KHÔNG PHẢI là kiểm thử phi chức năng (Non-functional testing). Usability, Performance, Security là phi chức năng.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The person who leads the review of the document(s), planning the review, running the meeting and follow-up after the meeting",
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
    "explanation": "**Đáp án đúng: C**\n\n- Điều phối viên (Moderator / Review Leader) là người chủ trì buổi đánh giá chính thức (formal review): lập kế hoạch, điều hành cuộc họp và theo dõi kết quả sau cuộc họp.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Reviews, static analysis and dynamic testing have the same objective",
    "options": [
      {
        "id": "A",
        "text": "(i) Identifying defects."
      },
      {
        "id": "B",
        "text": "(ii) Fixing defects."
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
    "explanation": "**Đáp án đúng: A**\n\n- Cả đánh giá tài liệu (Reviews), phân tích tĩnh (Static analysis) và kiểm thử động (Dynamic testing) đều có chung một mục tiêu cốt lõi là: Xác định và phát hiện lỗi (Identifying defects). Việc sửa lỗi (fixing defects) là trách nhiệm của Developer (Debugging).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "PDCA is known as",
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
    "explanation": "**Đáp án đúng: A**\n\n- Chu trình cải tiến chất lượng PDCA của Deming là viết tắt của: Plan (Lập kế hoạch) -> Do (Thực hiện) -> Check (Kiểm tra đánh giá) -> Act (Hành động cải tiến).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "id": "A",
        "text": "Faults in program specifications are the most expensive to fix"
      },
      {
        "id": "B",
        "text": "Faults in code are the most expensive to fix"
      },
      {
        "id": "C",
        "text": "Faults in requirements are the most expensive to fix"
      },
      {
        "id": "D",
        "text": "Faults in designs are the most expensive to fix"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Lỗi nằm trong tài liệu Yêu cầu (Requirements) là lỗi tốn kém chi phí sửa chữa nhất nếu không được phát hiện sớm, vì yêu cầu là nền móng cho toàn bộ kiến trúc, thiết kế, mã nguồn và ca kiểm thử phía sau.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Thời điểm dừng kiểm thử chuẩn xác nhất là khi các Tiêu chí hoàn thành kiểm thử đã định trước được thỏa mãn (When the test completion criteria / exit criteria have been met).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Where may functional testing be performed?",
    "options": [
      {
        "id": "A",
        "text": "At system and acceptance testing levels only"
      },
      {
        "id": "B",
        "text": "At all test levels"
      },
      {
        "id": "C",
        "text": "At all levels above integration testing"
      },
      {
        "id": "D",
        "text": "At the acceptance testing level only"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Kiểm thử chức năng (Functional testing) có thể và nên được thực hiện ở TẤT CẢ các cấp độ kiểm thử (At all test levels): Unit, Integration, System, và Acceptance testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following activities should be performed during the selection and implementation of a testing tool? i) Investigate the organisation&#039;s test process. ii) Conduct a proof of concept. iii) Implement the selected tool on a project behind schedule to save time. iv) Identify coaching and mentoring requirements for the use of the selected tool.",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii"
      },
      {
        "id": "B",
        "text": "ii, iii, iv"
      },
      {
        "id": "C",
        "text": "i, iii, iv"
      },
      {
        "id": "D",
        "text": "i, ii, iv SWT301 SU26 Final Exam Questions 21 to 25&#8203;"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Các hoạt động chuẩn khi chọn lựa và triển khai công cụ kiểm thử: i) Khảo sát quy trình kiểm thử hiện tại của tổ chức; ii) Tiến hành thử nghiệm PoC (Proof of Concept); iv) Xác định nhu cầu đào tạo và hướng dẫn kèm cặp (coaching/mentoring). Tuyệt đối không áp dụng công cụ mới vào một dự án đang trễ hạn.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: B**\n\n- False. Theo nguyên lý kiểm thử ISTQB số 2: \"Exhaustive testing is impossible\" (Kiểm thử kiệt quệ là bất khả thi), không thể loại bỏ 100% tất cả các lỗi trong phần mềm.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Defect Management process does not include",
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
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Quy trình quản lý lỗi (Defect Management) bao gồm phòng ngừa lỗi, báo cáo quản lý, theo dõi vòng đời của lỗi, nhưng không bao gồm Deliverable base-lining (đây là nhiệm vụ của Quản lý cấu hình - Configuration Management).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Kỹ thuật Loop Testing (Kiểm thử vòng lặp hộp trắng) áp dụng hiệu quả cho: Vòng lặp đơn giản (Simple loops), Vòng lặp lồng nhau (Nested loops), và Vòng lặp nối tiếp (Concatenated loops).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "(Choose 2 answers) Which TWO of the following statements about static analysis are correct?",
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
        "text": "Extensive statistical analysis will not be needed if white- Box testing is to be performed."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Phân tích tĩnh (Static analysis) có thể phát hiện các lỗi mã nguồn tiềm ẩn (lỗ hổng bảo mật, rò rỉ bộ nhớ, biến chưa khởi tạo) mà kiểm thử động rất khó kích hoạt hoặc mất nhiều công sức để phát hiện.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Kiểm thử đánh giá các thuộc tính chất lượng như an toàn bảo mật, hiệu năng tải, độ tin cậy và tính khả dụng của ngân hàng trực tuyến là Kiểm thử phi chức năng (Non-functional testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The purpose of exit criteria is: (choose one answer)",
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
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Mục đích của Exit Criteria (Tiêu chí dừng/kết thúc) là: Xác định khi nào dừng kiểm thử, hoàn thành một cấp độ kiểm thử, hoặc khi tập ca kiểm thử đạt được mức độ bao phủ và chất lượng kỳ vọng.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Match the following: 1. Test estimation 2. Test control 3. Test monitoring a. Measures of tracking process b. Effort required to perform activities c. Reallocation of resources",
    "options": [
      {
        "id": "A",
        "text": "1 -b, 2-c, 3-a"
      },
      {
        "id": "B",
        "text": "1 -b, 2-a, 3-c"
      },
      {
        "id": "C",
        "text": "1 -c, 2-a, 3-b"
      },
      {
        "id": "D",
        "text": "1 -a, 2-b, 3-c"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ghép nối:\n- 1. Test estimation (Ước lượng kiểm thử) -> b. Nỗ lực cần thiết để thực hiện công việc\n- 2. Test control (Kiểm soát kiểm thử) -> c. Tái phân bổ nguồn lực và điều chỉnh kế hoạch\n- 3. Test monitoring (Giám sát kiểm thử) -> a. Đo lường và theo dõi tiến độ thực tế.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which tool will be used to test the flag memory leaks and unassigned pointers",
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
    "explanation": "**Đáp án đúng: A**\n\n- Rò rỉ bộ nhớ (memory leaks) và con trỏ chưa gán/lạc hướng (unassigned/wild pointers) khi chương trình chạy được phát hiện tốt nhất bằng Công cụ phân tích động (Dynamic analysis tool - ví dụ Valgrind, Purify).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Find out what your budget would be for the tool E. Search the internet"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Bước đầu tiên và quan trọng nhất khi muốn mua/áp dụng công cụ kiểm thử mới là Phân tích nhu cầu và yêu cầu thực tế của tổ chức (Analyze your needs and requirements).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Can&#039;t say SWT301 Multiple Choice Exam Questions&#8203;"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Nâng cao chất lượng phần mềm nhờ các phương pháp phát triển tốt hơn (viết code chuẩn, static analysis, unit test kỹ) sẽ làm giảm số lượng bug phát sinh, từ đó giảm thời gian cần thiết cho các đợt kiểm thử (Reducing test time).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Theo tiêu chuẩn ISO 9126, 6 đặc tính chất lượng phần mềm gồm: Functionality, Reliability, Usability, Efficiency, Maintainability, Portability. Supportability không nằm trong ISO 9126 (nó thuộc mô hình FURPS+).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is not included in Test Plan.",
    "options": [
      {
        "id": "A",
        "text": "Features to be tested."
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
        "text": "Expected results."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Kết quả kỳ vọng (Expected results) được đặc tả chi tiết trong từng Test Case / Test Procedure Specification, KHÔNG nằm trong Kế hoạch kiểm thử tổng thể (Test Plan - chỉ định nghĩa scope, features to test, environmental needs, suspension criteria).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "One of the fields on a form contains a text box which accepts alpha numeric values. Identify the Valid Equivalence class",
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
        "text": "Boo01k"
      },
      {
        "id": "D",
        "text": "book"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trường nhập giá trị alpha-numeric (chữ và số kết hợp): \"Boo01k\" chứa cả ký tự chữ và số nên thuộc phân vùng hợp lệ (Valid Equivalence Class).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: B**\n\n- Sự khác biệt cốt lõi: Cuộc kiểm tra chính thức (Inspection) được dẫn dắt bởi một Điều phối viên độc lập (trained Moderator), trong khi Walkthrough do chính Tác giả của tài liệu (Author) chủ trì và trình bày.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Handover of Testware is a part of which Phase",
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
    "explanation": "**Đáp án đúng: C**\n\n- Bàn giao tài liệu kiểm thử và hiện vật (Handover of Testware) là hoạt động then chốt thuộc giai đoạn Đóng kiểm thử (Test Closure Activities).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which expression best matches the following characteristics or review processes: 1. Led by author 2. Undocumented 3. No management participation 4. Led by a trained moderator or leader 5. Uses entry exit criteria s) Inspection t) Peer review u) Informal review v) Walkthrough",
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
        "text": "s = 5, t = 4, u = 3, v = 1 and 2 E. s = 4 and 5, t = 1, u = 2, v = 3"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Khớp các loại Review:\n- s. Inspection: Dẫn dắt bởi trained moderator (4) và sử dụng tiêu chí entry/exit chuẩn (5)\n- t. Peer review: Thường không có sự tham gia của ban quản lý (3)\n- u. Informal review: Không cần ghi chép tài liệu trang trọng (2)\n- v. Walkthrough: Do tác giả chủ trì (1).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Testing wherein we subject the target of the test, to varying workloads to measure and evaluate the performance behaviors and ability of the target and of the test to continue to function properly under these different workloads.",
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử đặt hệ thống dưới các mức tải khác nhau để đo lường hành vi và hiệu năng vận hành là Kiểm thử tải (Load Testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Cost of the reviews will not include.",
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
        "text": "Tool support."
      },
      {
        "id": "D",
        "text": "Process improvement."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Chi phí trực tiếp của hoạt động review bao gồm: thời gian thực hiện quy trình review, phân tích chỉ số, công cụ hỗ trợ. Process improvement (cải tiến quy trình) là lợi ích dài hạn đem lại chứ không tính là chi phí thuần của buổi review.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Đoán lỗi (Error guessing) là một kỹ thuật kiểm thử động dựa trên kinh nghiệm (Experience-based dynamic technique), KHÔNG PHẢI là kỹ thuật kiểm thử tĩnh (Static testing). Walkthrough, Data flow analysis, Inspection đều là kiểm thử tĩnh.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The Planning phase of a formal review includes which of the followings?",
    "options": [
      {
        "id": "A",
        "text": "Explaining the objectives"
      },
      {
        "id": "B",
        "text": "Selecting the personnel, allocating roles."
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
    "explanation": "**Đáp án đúng: B**\n\n- Giai đoạn Lập kế hoạch (Planning) của buổi đánh giá tài liệu chính thức bao gồm: Xác định phạm vi mục tiêu, lựa chọn nhân sự tham gia và phân công vai trò (Author, Moderator, Scribe, Reviewer).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Độ phủ mã nguồn (Code Coverage: Statement coverage, Branch coverage) được sử dụng làm thước đo Hiệu quả kiểm thử (Test Effectiveness) và mức độ kỹ lưỡng của tập ca kiểm thử.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which is not the testing objectives",
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
    "explanation": "**Đáp án đúng: D**\n\n- Debugging (gỡ lỗi - định vị và sửa chữa lỗi mã nguồn) là công việc của lập trình viên, KHÔNG PHẢI là mục tiêu của kiểm thử phần mềm (Testing nhằm tìm lỗi, tạo dựng niềm tin và phòng ngừa lỗi).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Công cụ Record/Playback (Capture/Playback) được sử dụng phổ biến nhất để tự động hóa các ca kiểm thử hồi quy (Regression test).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "_____ includes both Black box and White Box Testing features (choose one answer)",
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
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Kiểm thử kết hợp cả đặc tính hộp đen (dựa trên yêu cầu) và cấu trúc hộp trắng (mã nguồn/cơ sở dữ liệu) được gọi là Gray Box Testing hoặc Hybrid Testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Who are the persons involved in a Formal Review i) Manager ii) Moderator iii) Scribe / Recorder iv) Assistant Manager",
    "options": [
      {
        "id": "A",
        "text": "i,ii,iii,iv are true"
      },
      {
        "id": "B",
        "text": "i,ii,iii are true and iv is false."
      },
      {
        "id": "C",
        "text": "ii,iii,iv are true and i is false."
      },
      {
        "id": "D",
        "text": "i,iv are true and ii, iii are false."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Các vai trò chuẩn trong Formal Review theo ISTQB gồm: i) Manager (quyết định thực hiện); ii) Moderator (chủ trì); iii) Scribe / Recorder (ghi chép biên bản). Assistant Manager không phải là vai trò chuẩn.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Mức độ độc lập cao nhất (Highest level of independence) trong kiểm thử là khi ca kiểm thử được thiết kế bởi người thuộc một tổ chức hoàn toàn độc lập (ví dụ đơn vị kiểm thử bên ngoài / 3rd party testing vendor).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Success Factors for a review include: i. Each Review does not have a predefined objective ii. Defects found are welcomed and expressed objectively iii. Management supports a good review process. iv. There is an emphasis on learning and process improvement.",
    "options": [
      {
        "id": "A",
        "text": "ii,iii,iv are correct and i is incorrect"
      },
      {
        "id": "B",
        "text": "iii , i , iv is correct and ii is incorrect"
      },
      {
        "id": "C",
        "text": "i , iii , iv , ii is in correct"
      },
      {
        "id": "D",
        "text": "ii is correct"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yếu tố thành công của review: ii) Lỗi phát hiện được hoan nghênh và diễn đạt khách quan; iii) Ban quản lý ủng hộ quy trình; iv) Chú trọng học hỏi và cải tiến quy trình. Mệnh đề i sai vì mỗi review BẮT BUỘC phải có mục tiêu xác định trước.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "In a review meeting a moderator is a person who",
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
    "explanation": "**Đáp án đúng: B**\n\n- Trong cuộc họp đánh giá, Moderator là người làm trung gian điều phối giữa mọi người (Mediates between people), đảm bảo cuộc họp diễn ra suôn sẻ, đúng giờ và tập trung vào mục tiêu.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is a Key Characteristics of WalkThrough",
    "options": [
      {
        "id": "A",
        "text": "Scenario , Dry Run , Peer Group"
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
    "explanation": "**Đáp án đúng: A**\n\n- Đặc trưng cốt lõi của Walkthrough: Trình bày kịch bản (Scenario), chạy thử trên giấy (Dry Run), có sự tham gia của nhóm đồng nghiệp bình duyệt (Peer Group).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "One of the following is not a part of white box testing as per BS7925-II standards.",
    "options": [
      {
        "id": "A",
        "text": "Random testing"
      },
      {
        "id": "B",
        "text": "Data Flow testing."
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử ngẫu nhiên (Random testing) là kỹ thuật kiểm thử hộp đen, không thuộc kiểm thử cấu trúc hộp trắng theo tiêu chuẩn BS 7925-2.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Recording test inputs E. Reading test values from a data file"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Công cụ thực thi kiểm thử tự động (Test execution tool) KHÔNG THỂ tự động sáng tạo/sinh ra kết quả kỳ vọng đúng đắn (Generating expected outputs) nếu không có oracle hoặc con người cung cấp.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Hệ thống ghi nhận sự cố (Incident logging system) là nguồn thông tin vô cùng giá trị cho dự án nếu nó ghi nhận đầy đủ mọi sự cố phát sinh trong quá trình kiểm thử.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Measurement dysfunction is a problem because:",
    "options": [
      {
        "id": "A",
        "text": "Even though the numbers you look at appear better, to achieve these numbers, people are doing other aspects of their work much less well."
      },
      {
        "id": "B",
        "text": "We don&#039;t know how to measure a variable (our measurement is dysfunctional) and so we don&#039;t know how to interpret the result."
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
    "explanation": "**Đáp án đúng: A**\n\n- Sự rối loạn đo lường (Measurement dysfunction) xảy ra khi mọi người chỉ cố gắng làm cho các con số chỉ số đẹp lên trên báo cáo nhưng thực tế lại bỏ bê chất lượng các công việc cốt lõi khác.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is the standard for the Software product quality",
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
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn quốc tế định nghĩa mô hình chất lượng sản phẩm phần mềm (Software product quality) là ISO 9126 (sau này được kế thừa và phát triển thành ISO/IEC 25010).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Boundary value testing",
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
    "explanation": "**Đáp án đúng: B**\n\n- Phân tích giá trị biên (Boundary Value Analysis) là kỹ thuật kiểm tra các điều kiện ngay tại biên, ngay dưới biên và ngay trên biên của các phân vùng tương đương (on, below, and above edges).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Component Testing is also called as i) Unit Testing ii) Program Testing iii) Module Testing iv) System Component Testing.",
    "options": [
      {
        "id": "A",
        "text": "i,ii,iii are true and iv is false"
      },
      {
        "id": "B",
        "text": "i,ii,iii,iv are false"
      },
      {
        "id": "C",
        "text": "i,ii,iv are true and iii is false"
      },
      {
        "id": "D",
        "text": "All of them are true"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử thành phần (Component Testing) còn có các tên gọi tương đương là: Unit Testing, Program Testing, Module Testing. Không gọi là System Component Testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Software quality is not relevant to _____",
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
    "explanation": "**Đáp án đúng: C**\n\n- Viability (tính khả thi kinh doanh/kinh tế) là thước đo tài chính/quản lý dự án, không thuộc các thuộc tính chất lượng kỹ thuật của phần mềm theo ISO 9126.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Who is responsible for document all the issues, problems and open point that were identified during the review meeting",
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
    "explanation": "**Đáp án đúng: B**\n\n- Người chịu trách nhiệm ghi chép lại toàn bộ các vấn đề, lỗi và điểm còn mở trong cuộc họp review là Thư ký (Scribe / Recorder).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Khi mua một công cụ kiểm thử mới, nó phải được triển khai thí điểm (Pilot project) trước tiên bởi một nhóm nhỏ để tìm ra cách áp dụng và quy trình tối ưu nhất.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The Phases of formal review process is mentioned below arrange them in the correct order. i) Planning ii) Review Meeting iii) Rework iv) Individual Preparations v) Kick Off vi) Follow Up",
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
    "explanation": "**Đáp án đúng: C**\n\n- Thứ tự chuẩn của quy trình đánh giá chính thức (Formal Review Process): i) Planning (Lập kế hoạch) -> v) Kick-off (Khởi động) -> iv) Individual Preparation (Chuẩn bị cá nhân) -> ii) Review Meeting (Họp đánh giá) -> iii) Rework (Chỉnh sửa) -> vi) Follow-up (Theo dõi kiểm tra lại).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which test may not mimic real world situations (choose one answer)",
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
    "explanation": "**Đáp án đúng: B**\n\n- Kiểm thử cấu trúc / hộp trắng (Structural Testing) kiểm tra luồng logic và đường rẽ nhánh mã nguồn bên trong nên không mô phỏng sát hành vi sử dụng thực tế của người dùng ngoài đời thực như kiểm thử chức năng (Functional testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Mục tiêu hàng đầu và bản chất của kiểm thử phần mềm là phát hiện lỗi (Uncover software errors / find defects). Không thể loại bỏ mọi lỗi hay thay thế bảo trì.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "type": "single",
    "prompt": "Defects discovered by static analysis tools include: i. Variables that are never used. ii. Security vulnerabilities. iii. Programming Standard Violations iv. Uncalled functions and procedures",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii, iv is correct"
      },
      {
        "id": "B",
        "text": "iii ,is correct I,ii,iv are incorrect."
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
    "explanation": "**Đáp án đúng: A**\n\n- Phân tích tĩnh bằng công cụ (Static analysis tools) có thể tự động phát hiện: i) Biến được khai báo nhưng không dùng; ii) Lỗ hổng bảo mật tiềm ẩn; iii) Vi phạm quy chuẩn lập trình; iv) Hàm/thủ tục không bao giờ được gọi (dead code).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following benefits are MOST likely to be achieved by using test tools? i) Easy to access information about tests and testing. ii) Reduced maintenance of testware. iii) Easy and cheap to implement. iv) Greater consistency of tests.",
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
    "explanation": "**Đáp án đúng: C**\n\n- Lợi ích lớn nhất khi sử dụng công cụ kiểm thử: i) Dễ dàng truy xuất thông tin về kết quả kiểm thử; iv) Tăng tính nhất quán và chuẩn mực giữa các lần thực thi test. (Tự động hóa không hề rẻ và thường làm tăng chi phí bảo trì testware).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Mức độ rủi ro (Level of Risk) được xác định bằng tích của hai yếu tố: Khả năng xảy ra rủi ro (Likelihood / Probability) và Mức độ ảnh hưởng nếu rủi ro xảy ra (Impact).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử chuyển trạng thái (State Transition Testing) là một kỹ thuật kiểm thử chức năng hộp đen (Black-box functional technique), KHÔNG PHẢI là kiểm thử phi chức năng (Non-functional testing). Usability, Performance, Security là phi chức năng.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The person who leads the review of the document(s), planning the review, running the meeting and follow-up after the meeting",
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
    "explanation": "**Đáp án đúng: C**\n\n- Điều phối viên (Moderator / Review Leader) là người chủ trì buổi đánh giá chính thức (formal review): lập kế hoạch, điều hành cuộc họp và theo dõi kết quả sau cuộc họp.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Reviews, static analysis and dynamic testing have the same objective",
    "options": [
      {
        "id": "A",
        "text": "(i) Identifying defects."
      },
      {
        "id": "B",
        "text": "(ii) Fixing defects."
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
    "explanation": "**Đáp án đúng: A**\n\n- Cả đánh giá tài liệu (Reviews), phân tích tĩnh (Static analysis) và kiểm thử động (Dynamic testing) đều có chung một mục tiêu cốt lõi là: Xác định và phát hiện lỗi (Identifying defects). Việc sửa lỗi (fixing defects) là trách nhiệm của Developer (Debugging).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "PDCA is known as",
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
    "explanation": "**Đáp án đúng: A**\n\n- Chu trình cải tiến chất lượng PDCA của Deming là viết tắt của: Plan (Lập kế hoạch) -> Do (Thực hiện) -> Check (Kiểm tra đánh giá) -> Act (Hành động cải tiến).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following statements are true?",
    "options": [
      {
        "id": "A",
        "text": "Faults in program specifications are the most expensive to fix"
      },
      {
        "id": "B",
        "text": "Faults in code are the most expensive to fix"
      },
      {
        "id": "C",
        "text": "Faults in requirements are the most expensive to fix"
      },
      {
        "id": "D",
        "text": "Faults in designs are the most expensive to fix"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Lỗi nằm trong tài liệu Yêu cầu (Requirements) là lỗi tốn kém chi phí sửa chữa nhất nếu không được phát hiện sớm, vì yêu cầu là nền móng cho toàn bộ kiến trúc, thiết kế, mã nguồn và ca kiểm thử phía sau.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Thời điểm dừng kiểm thử chuẩn xác nhất là khi các Tiêu chí hoàn thành kiểm thử đã định trước được thỏa mãn (When the test completion criteria / exit criteria have been met).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Where may functional testing be performed?",
    "options": [
      {
        "id": "A",
        "text": "At system and acceptance testing levels only"
      },
      {
        "id": "B",
        "text": "At all test levels"
      },
      {
        "id": "C",
        "text": "At all levels above integration testing"
      },
      {
        "id": "D",
        "text": "At the acceptance testing level only"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Kiểm thử chức năng (Functional testing) có thể và nên được thực hiện ở TẤT CẢ các cấp độ kiểm thử (At all test levels): Unit, Integration, System, và Acceptance testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following activities should be performed during the selection and implementation of a testing tool? i) Investigate the organisation&#039;s test process. ii) Conduct a proof of concept. iii) Implement the selected tool on a project behind schedule to save time. iv) Identify coaching and mentoring requirements for the use of the selected tool.",
    "options": [
      {
        "id": "A",
        "text": "i, ii, iii"
      },
      {
        "id": "B",
        "text": "ii, iii, iv"
      },
      {
        "id": "C",
        "text": "i, iii, iv"
      },
      {
        "id": "D",
        "text": "i, ii, iv SWT301 SU26 Final Exam Questions 21 to 25&#8203;"
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Các hoạt động chuẩn khi chọn lựa và triển khai công cụ kiểm thử: i) Khảo sát quy trình kiểm thử hiện tại của tổ chức; ii) Tiến hành thử nghiệm PoC (Proof of Concept); iv) Xác định nhu cầu đào tạo và hướng dẫn kèm cặp (coaching/mentoring). Tuyệt đối không áp dụng công cụ mới vào một dự án đang trễ hạn.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: B**\n\n- False. Theo nguyên lý kiểm thử ISTQB số 2: \"Exhaustive testing is impossible\" (Kiểm thử kiệt quệ là bất khả thi), không thể loại bỏ 100% tất cả các lỗi trong phần mềm.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Defect Management process does not include",
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
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Quy trình quản lý lỗi (Defect Management) bao gồm phòng ngừa lỗi, báo cáo quản lý, theo dõi vòng đời của lỗi, nhưng không bao gồm Deliverable base-lining (đây là nhiệm vụ của Quản lý cấu hình - Configuration Management).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: D**\n\n- Kỹ thuật Loop Testing (Kiểm thử vòng lặp hộp trắng) áp dụng hiệu quả cho: Vòng lặp đơn giản (Simple loops), Vòng lặp lồng nhau (Nested loops), và Vòng lặp nối tiếp (Concatenated loops).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "(Choose 2 answers) Which TWO of the following statements about static analysis are correct?",
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
        "text": "Extensive statistical analysis will not be needed if white- Box testing is to be performed."
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Phân tích tĩnh (Static analysis) có thể phát hiện các lỗi mã nguồn tiềm ẩn (lỗ hổng bảo mật, rò rỉ bộ nhớ, biến chưa khởi tạo) mà kiểm thử động rất khó kích hoạt hoặc mất nhiều công sức để phát hiện.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Kiểm thử đánh giá các thuộc tính chất lượng như an toàn bảo mật, hiệu năng tải, độ tin cậy và tính khả dụng của ngân hàng trực tuyến là Kiểm thử phi chức năng (Non-functional testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The purpose of exit criteria is: (choose one answer)",
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
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Mục đích của Exit Criteria (Tiêu chí dừng/kết thúc) là: Xác định khi nào dừng kiểm thử, hoàn thành một cấp độ kiểm thử, hoặc khi tập ca kiểm thử đạt được mức độ bao phủ và chất lượng kỳ vọng.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Match the following: 1. Test estimation 2. Test control 3. Test monitoring a. Measures of tracking process b. Effort required to perform activities c. Reallocation of resources",
    "options": [
      {
        "id": "A",
        "text": "1 -b, 2-c, 3-a"
      },
      {
        "id": "B",
        "text": "1 -b, 2-a, 3-c"
      },
      {
        "id": "C",
        "text": "1 -c, 2-a, 3-b"
      },
      {
        "id": "D",
        "text": "1 -a, 2-b, 3-c"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Ghép nối:\n- 1. Test estimation (Ước lượng kiểm thử) -> b. Nỗ lực cần thiết để thực hiện công việc\n- 2. Test control (Kiểm soát kiểm thử) -> c. Tái phân bổ nguồn lực và điều chỉnh kế hoạch\n- 3. Test monitoring (Giám sát kiểm thử) -> a. Đo lường và theo dõi tiến độ thực tế.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which tool will be used to test the flag memory leaks and unassigned pointers",
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
    "explanation": "**Đáp án đúng: A**\n\n- Rò rỉ bộ nhớ (memory leaks) và con trỏ chưa gán/lạc hướng (unassigned/wild pointers) khi chương trình chạy được phát hiện tốt nhất bằng Công cụ phân tích động (Dynamic analysis tool - ví dụ Valgrind, Purify).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Find out what your budget would be for the tool E. Search the internet"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Bước đầu tiên và quan trọng nhất khi muốn mua/áp dụng công cụ kiểm thử mới là Phân tích nhu cầu và yêu cầu thực tế của tổ chức (Analyze your needs and requirements).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Can&#039;t say SWT301 Multiple Choice Exam Questions&#8203;"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Nâng cao chất lượng phần mềm nhờ các phương pháp phát triển tốt hơn (viết code chuẩn, static analysis, unit test kỹ) sẽ làm giảm số lượng bug phát sinh, từ đó giảm thời gian cần thiết cho các đợt kiểm thử (Reducing test time).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Theo tiêu chuẩn ISO 9126, 6 đặc tính chất lượng phần mềm gồm: Functionality, Reliability, Usability, Efficiency, Maintainability, Portability. Supportability không nằm trong ISO 9126 (nó thuộc mô hình FURPS+).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is not included in Test Plan.",
    "options": [
      {
        "id": "A",
        "text": "Features to be tested."
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
        "text": "Expected results."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Kết quả kỳ vọng (Expected results) được đặc tả chi tiết trong từng Test Case / Test Procedure Specification, KHÔNG nằm trong Kế hoạch kiểm thử tổng thể (Test Plan - chỉ định nghĩa scope, features to test, environmental needs, suspension criteria).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "One of the fields on a form contains a text box which accepts alpha numeric values. Identify the Valid Equivalence class",
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
        "text": "Boo01k"
      },
      {
        "id": "D",
        "text": "book"
      }
    ],
    "correctOptionIds": [
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Trường nhập giá trị alpha-numeric (chữ và số kết hợp): \"Boo01k\" chứa cả ký tự chữ và số nên thuộc phân vùng hợp lệ (Valid Equivalence Class).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: B**\n\n- Sự khác biệt cốt lõi: Cuộc kiểm tra chính thức (Inspection) được dẫn dắt bởi một Điều phối viên độc lập (trained Moderator), trong khi Walkthrough do chính Tác giả của tài liệu (Author) chủ trì và trình bày.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Handover of Testware is a part of which Phase",
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
    "explanation": "**Đáp án đúng: C**\n\n- Bàn giao tài liệu kiểm thử và hiện vật (Handover of Testware) là hoạt động then chốt thuộc giai đoạn Đóng kiểm thử (Test Closure Activities).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which expression best matches the following characteristics or review processes: 1. Led by author 2. Undocumented 3. No management participation 4. Led by a trained moderator or leader 5. Uses entry exit criteria s) Inspection t) Peer review u) Informal review v) Walkthrough",
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
        "text": "s = 5, t = 4, u = 3, v = 1 and 2 E. s = 4 and 5, t = 1, u = 2, v = 3"
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Khớp các loại Review:\n- s. Inspection: Dẫn dắt bởi trained moderator (4) và sử dụng tiêu chí entry/exit chuẩn (5)\n- t. Peer review: Thường không có sự tham gia của ban quản lý (3)\n- u. Informal review: Không cần ghi chép tài liệu trang trọng (2)\n- v. Walkthrough: Do tác giả chủ trì (1).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Testing wherein we subject the target of the test, to varying workloads to measure and evaluate the performance behaviors and ability of the target and of the test to continue to function properly under these different workloads.",
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử đặt hệ thống dưới các mức tải khác nhau để đo lường hành vi và hiệu năng vận hành là Kiểm thử tải (Load Testing).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Cost of the reviews will not include.",
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
        "text": "Tool support."
      },
      {
        "id": "D",
        "text": "Process improvement."
      }
    ],
    "correctOptionIds": [
      "D"
    ],
    "explanation": "**Đáp án đúng: D**\n\n- Chi phí trực tiếp của hoạt động review bao gồm: thời gian thực hiện quy trình review, phân tích chỉ số, công cụ hỗ trợ. Process improvement (cải tiến quy trình) là lợi ích dài hạn đem lại chứ không tính là chi phí thuần của buổi review.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Đoán lỗi (Error guessing) là một kỹ thuật kiểm thử động dựa trên kinh nghiệm (Experience-based dynamic technique), KHÔNG PHẢI là kỹ thuật kiểm thử tĩnh (Static testing). Walkthrough, Data flow analysis, Inspection đều là kiểm thử tĩnh.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The Planning phase of a formal review includes which of the followings?",
    "options": [
      {
        "id": "A",
        "text": "Explaining the objectives"
      },
      {
        "id": "B",
        "text": "Selecting the personnel, allocating roles."
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
    "explanation": "**Đáp án đúng: B**\n\n- Giai đoạn Lập kế hoạch (Planning) của buổi đánh giá tài liệu chính thức bao gồm: Xác định phạm vi mục tiêu, lựa chọn nhân sự tham gia và phân công vai trò (Author, Moderator, Scribe, Reviewer).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Độ phủ mã nguồn (Code Coverage: Statement coverage, Branch coverage) được sử dụng làm thước đo Hiệu quả kiểm thử (Test Effectiveness) và mức độ kỹ lưỡng của tập ca kiểm thử.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which is not the testing objectives",
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
    "explanation": "**Đáp án đúng: D**\n\n- Debugging (gỡ lỗi - định vị và sửa chữa lỗi mã nguồn) là công việc của lập trình viên, KHÔNG PHẢI là mục tiêu của kiểm thử phần mềm (Testing nhằm tìm lỗi, tạo dựng niềm tin và phòng ngừa lỗi).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Công cụ Record/Playback (Capture/Playback) được sử dụng phổ biến nhất để tự động hóa các ca kiểm thử hồi quy (Regression test).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "_____ includes both Black box and White Box Testing features (choose one answer)",
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
      "C"
    ],
    "explanation": "**Đáp án đúng: C**\n\n- Kiểm thử kết hợp cả đặc tính hộp đen (dựa trên yêu cầu) và cấu trúc hộp trắng (mã nguồn/cơ sở dữ liệu) được gọi là Gray Box Testing hoặc Hybrid Testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Who are the persons involved in a Formal Review i) Manager ii) Moderator iii) Scribe / Recorder iv) Assistant Manager",
    "options": [
      {
        "id": "A",
        "text": "i,ii,iii,iv are true"
      },
      {
        "id": "B",
        "text": "i,ii,iii are true and iv is false."
      },
      {
        "id": "C",
        "text": "ii,iii,iv are true and i is false."
      },
      {
        "id": "D",
        "text": "i,iv are true and ii, iii are false."
      }
    ],
    "correctOptionIds": [
      "B"
    ],
    "explanation": "**Đáp án đúng: B**\n\n- Các vai trò chuẩn trong Formal Review theo ISTQB gồm: i) Manager (quyết định thực hiện); ii) Moderator (chủ trì); iii) Scribe / Recorder (ghi chép biên bản). Assistant Manager không phải là vai trò chuẩn.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Mức độ độc lập cao nhất (Highest level of independence) trong kiểm thử là khi ca kiểm thử được thiết kế bởi người thuộc một tổ chức hoàn toàn độc lập (ví dụ đơn vị kiểm thử bên ngoài / 3rd party testing vendor).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Success Factors for a review include: i. Each Review does not have a predefined objective ii. Defects found are welcomed and expressed objectively iii. Management supports a good review process. iv. There is an emphasis on learning and process improvement.",
    "options": [
      {
        "id": "A",
        "text": "ii,iii,iv are correct and i is incorrect"
      },
      {
        "id": "B",
        "text": "iii , i , iv is correct and ii is incorrect"
      },
      {
        "id": "C",
        "text": "i , iii , iv , ii is in correct"
      },
      {
        "id": "D",
        "text": "ii is correct"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Yếu tố thành công của review: ii) Lỗi phát hiện được hoan nghênh và diễn đạt khách quan; iii) Ban quản lý ủng hộ quy trình; iv) Chú trọng học hỏi và cải tiến quy trình. Mệnh đề i sai vì mỗi review BẮT BUỘC phải có mục tiêu xác định trước.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "In a review meeting a moderator is a person who",
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
    "explanation": "**Đáp án đúng: B**\n\n- Trong cuộc họp đánh giá, Moderator là người làm trung gian điều phối giữa mọi người (Mediates between people), đảm bảo cuộc họp diễn ra suôn sẻ, đúng giờ và tập trung vào mục tiêu.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is a Key Characteristics of WalkThrough",
    "options": [
      {
        "id": "A",
        "text": "Scenario , Dry Run , Peer Group"
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
    "explanation": "**Đáp án đúng: A**\n\n- Đặc trưng cốt lõi của Walkthrough: Trình bày kịch bản (Scenario), chạy thử trên giấy (Dry Run), có sự tham gia của nhóm đồng nghiệp bình duyệt (Peer Group).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "One of the following is not a part of white box testing as per BS7925-II standards.",
    "options": [
      {
        "id": "A",
        "text": "Random testing"
      },
      {
        "id": "B",
        "text": "Data Flow testing."
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
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử ngẫu nhiên (Random testing) là kỹ thuật kiểm thử hộp đen, không thuộc kiểm thử cấu trúc hộp trắng theo tiêu chuẩn BS 7925-2.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
        "text": "Recording test inputs E. Reading test values from a data file"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Công cụ thực thi kiểm thử tự động (Test execution tool) KHÔNG THỂ tự động sáng tạo/sinh ra kết quả kỳ vọng đúng đắn (Generating expected outputs) nếu không có oracle hoặc con người cung cấp.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: C**\n\n- Hệ thống ghi nhận sự cố (Incident logging system) là nguồn thông tin vô cùng giá trị cho dự án nếu nó ghi nhận đầy đủ mọi sự cố phát sinh trong quá trình kiểm thử.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Measurement dysfunction is a problem because:",
    "options": [
      {
        "id": "A",
        "text": "Even though the numbers you look at appear better, to achieve these numbers, people are doing other aspects of their work much less well."
      },
      {
        "id": "B",
        "text": "We don&#039;t know how to measure a variable (our measurement is dysfunctional) and so we don&#039;t know how to interpret the result."
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
    "explanation": "**Đáp án đúng: A**\n\n- Sự rối loạn đo lường (Measurement dysfunction) xảy ra khi mọi người chỉ cố gắng làm cho các con số chỉ số đẹp lên trên báo cáo nhưng thực tế lại bỏ bê chất lượng các công việc cốt lõi khác.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Which of the following is the standard for the Software product quality",
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
    "explanation": "**Đáp án đúng: A**\n\n- Tiêu chuẩn quốc tế định nghĩa mô hình chất lượng sản phẩm phần mềm (Software product quality) là ISO 9126 (sau này được kế thừa và phát triển thành ISO/IEC 25010).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Boundary value testing",
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
    "explanation": "**Đáp án đúng: B**\n\n- Phân tích giá trị biên (Boundary Value Analysis) là kỹ thuật kiểm tra các điều kiện ngay tại biên, ngay dưới biên và ngay trên biên của các phân vùng tương đương (on, below, and above edges).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Component Testing is also called as i) Unit Testing ii) Program Testing iii) Module Testing iv) System Component Testing.",
    "options": [
      {
        "id": "A",
        "text": "i,ii,iii are true and iv is false"
      },
      {
        "id": "B",
        "text": "i,ii,iii,iv are false"
      },
      {
        "id": "C",
        "text": "i,ii,iv are true and iii is false"
      },
      {
        "id": "D",
        "text": "All of them are true"
      }
    ],
    "correctOptionIds": [
      "A"
    ],
    "explanation": "**Đáp án đúng: A**\n\n- Kiểm thử thành phần (Component Testing) còn có các tên gọi tương đương là: Unit Testing, Program Testing, Module Testing. Không gọi là System Component Testing.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "type": "single",
    "prompt": "Software quality is not relevant to _____",
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
    "explanation": "**Đáp án đúng: C**\n\n- Viability (tính khả thi kinh doanh/kinh tế) là thước đo tài chính/quản lý dự án, không thuộc các thuộc tính chất lượng kỹ thuật của phần mềm theo ISO 9126.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "Who is responsible for document all the issues, problems and open point that were identified during the review meeting",
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
    "explanation": "**Đáp án đúng: B**\n\n- Người chịu trách nhiệm ghi chép lại toàn bộ các vấn đề, lỗi và điểm còn mở trong cuộc họp review là Thư ký (Scribe / Recorder).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "explanation": "**Đáp án đúng: A**\n\n- Khi mua một công cụ kiểm thử mới, nó phải được triển khai thí điểm (Pilot project) trước tiên bởi một nhóm nhỏ để tìm ra cách áp dụng và quy trình tối ưu nhất.\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
    "prompt": "The Phases of formal review process is mentioned below arrange them in the correct order. i) Planning ii) Review Meeting iii) Rework iv) Individual Preparations v) Kick Off vi) Follow Up",
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
    "explanation": "**Đáp án đúng: C**\n\n- Thứ tự chuẩn của quy trình đánh giá chính thức (Formal Review Process): i) Planning (Lập kế hoạch) -> v) Kick-off (Khởi động) -> iv) Individual Preparation (Chuẩn bị cá nhân) -> ii) Review Meeting (Họp đánh giá) -> iii) Rework (Chỉnh sửa) -> vi) Follow-up (Theo dõi kiểm tra lại).\n- *Xem ảnh chụp đề thi gốc phòng máy bên dưới để đối chiếu nội dung chi tiết.*",
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
