import type { Question } from "../../../types/study";

export const swtQuestions: Question[] = [
  {
    "id": "swt-c1-01",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Theo định nghĩa chuẩn của ISTQB, nhận định nào sau đây mô tả ĐÚNG NHẤT về mục đích chính của kiểm thử phần mềm?",
    "options": [
      {
        "id": "a",
        "text": "Chứng minh rằng phần mềm không có bất kỳ lỗi nào trước khi phát hành."
      },
      {
        "id": "b",
        "text": "Tìm ra các khiếm khuyết, đánh giá mức độ chất lượng và cung cấp thông tin giúp giảm thiểu rủi ro sự cố khi vận hành."
      },
      {
        "id": "c",
        "text": "Sửa chữa tất cả các lỗi trong mã nguồn do lập trình viên gây ra."
      },
      {
        "id": "d",
        "text": "Đảm bảo dự án hoàn thành đúng thời hạn và không vượt quá ngân sách."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Tìm ra các khiếm khuyết, đánh giá mức độ chất lượng và cung cấp thông tin giúp giảm thiểu rủi ro sự cố khi vận hành..\n\nKiểm thử nhằm tìm kiếm các lỗi (defects), ngăn ngừa lỗi lọt vào giai đoạn sau, đánh giá chất lượng và giảm thiểu rủi ro. Phương án A sai vì theo Principle 1, kiểm thử không bao giờ chứng minh được phần mềm hoàn toàn sạch lỗi. Phương án C sai vì việc sửa lỗi là của lập trình viên (Debugging)."
  },
  {
    "id": "swt-c1-02",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Sự khác biệt cốt lõi giữa 'Debugging' và 'Testing' là gì?",
    "options": [
      {
        "id": "a",
        "text": "Testing do lập trình viên thực hiện; Debugging do kiểm thử viên thực hiện."
      },
      {
        "id": "b",
        "text": "Testing tìm ra sự hiện diện của lỗi (defects/failures); Debugging tìm nguyên nhân gốc rễ, phân tích mã nguồn và sửa chữa lỗi."
      },
      {
        "id": "c",
        "text": "Testing sửa chữa mã nguồn; Debugging thiết kế kịch bản kiểm thử."
      },
      {
        "id": "d",
        "text": "Testing và Debugging là hai thuật ngữ hoàn toàn đồng nghĩa và có thể dùng thay thế cho nhau."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Testing tìm ra sự hiện diện của lỗi (defects/failures); Debugging tìm nguyên nhân gốc rễ, phân tích mã nguồn và sửa chữa lỗi..\n\nTesting là hoạt động kích hoạt và phát hiện sự hiện diện của khiếm khuyết (Defects) hoặc sự cố (Failures). Trong khi đó, Debugging là hoạt động của Developer nhằm định vị nguyên nhân gốc rễ trong mã nguồn, phân tích và sửa chữa lỗi đó."
  },
  {
    "id": "swt-c1-03",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Một lập trình viên sơ suất gõ nhầm công thức tính thuế trong mã nguồn. Thuật ngữ nào mô tả chính xác hành động sai lầm này của lập trình viên?",
    "options": [
      {
        "id": "a",
        "text": "Failure"
      },
      {
        "id": "b",
        "text": "Defect"
      },
      {
        "id": "c",
        "text": "Error (Mistake)"
      },
      {
        "id": "d",
        "text": "Incident"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Đáp án đúng là **C**: Error (Mistake).\n\nError (hoặc Mistake) là hành động sai lầm của con người (như hiểu sai đặc tả, gõ nhầm code). Hành động này sinh ra Defect (Bug) nằm tĩnh trong mã nguồn."
  },
  {
    "id": "swt-c1-04",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Khi người dùng đang sử dụng ứng dụng thanh toán ngân hàng trực tuyến và bấm nút 'Chuyển tiền', ứng dụng đột ngột bị sập (crash) và hiển thị thông báo lỗi hệ thống. Hiện tượng này được gọi là gì?",
    "options": [
      {
        "id": "a",
        "text": "Defect (Bug)"
      },
      {
        "id": "b",
        "text": "Failure (Sự cố)"
      },
      {
        "id": "c",
        "text": "Error (Sai sót)"
      },
      {
        "id": "d",
        "text": "Root Cause (Nguyên nhân gốc)"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Failure (Sự cố).\n\nFailure là sự sai lệch (deviation) có thể quan sát được giữa hành vi thực tế và hành vi kỳ vọng khi phần mềm đang thực thi (Runtime). Việc ứng dụng bị crash khi bấm nút là một Failure điển hình."
  },
  {
    "id": "swt-c1-05",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Một dòng mã nguồn chứa lỗi logic nằm trong một khối lệnh điều kiện không bao giờ được kích hoạt trong môi trường vận hành thực tế. Nhận định nào sau đây là ĐÚNG?",
    "options": [
      {
        "id": "a",
        "text": "Dòng mã này không chứa Defect vì nó không gây ra Failure."
      },
      {
        "id": "b",
        "text": "Dòng mã này chứa Defect nhưng không dẫn đến Failure nào."
      },
      {
        "id": "c",
        "text": "Dòng mã này vừa là Error vừa là Failure."
      },
      {
        "id": "d",
        "text": "Hệ thống chắc chắn sẽ bị sập nếu có lỗi nằm trong code."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Dòng mã này chứa Defect nhưng không dẫn đến Failure nào..\n\nDefect là lỗi tồn tại trong tài liệu hoặc code. Tuy nhiên, một Defect chỉ dẫn đến Failure khi phần mã đó được thực thi và gặp điều kiện kích hoạt. Nếu code không bao giờ chạy tới (dead code), Defect đó sẽ không gây ra Failure."
  },
  {
    "id": "swt-c1-06",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Nguyên tắc kiểm thử nào khẳng định: 'Kiểm thử có thể chỉ ra sự hiện diện của khiếm khuyết, nhưng không thể chứng minh phần mềm không có lỗi'?",
    "options": [
      {
        "id": "a",
        "text": "Principle 1: Testing shows the presence of defects, not their absence"
      },
      {
        "id": "b",
        "text": "Principle 2: Exhaustive testing is impossible"
      },
      {
        "id": "c",
        "text": "Principle 5: Pesticide paradox"
      },
      {
        "id": "d",
        "text": "Principle 7: Absence-of-errors is a fallacy"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Principle 1: Testing shows the presence of defects, not their absence.\n\nPrinciple 1 nêu rõ: Kiểm thử làm giảm xác suất lỗi còn sót lại, nhưng ngay cả khi không tìm thấy lỗi nào thì cũng không thể kết luận phần mềm hoàn toàn đúng đắn 100%."
  },
  {
    "id": "swt-c1-07",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Một Tester thực hiện kiểm thử một biểu mẫu nhập số điện thoại gồm 10 chữ số. Tester muốn kiểm tra tất cả 10 tỷ tổ hợp số có thể có. Nguyên tắc kiểm thử nào giải thích tại sao hành động này là không khả thi trong thực tế?",
    "options": [
      {
        "id": "a",
        "text": "Early testing saves time and money"
      },
      {
        "id": "b",
        "text": "Exhaustive testing is impossible (Kiểm thử kiệt quệ là bất khả thi)"
      },
      {
        "id": "c",
        "text": "Defects cluster together"
      },
      {
        "id": "d",
        "text": "Absence-of-errors is a fallacy"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Exhaustive testing is impossible (Kiểm thử kiệt quệ là bất khả thi).\n\nPrinciple 2 khẳng định: Việc kiểm thử toàn bộ mọi khả năng đầu vào, đầu ra và tiền điều kiện (Exhaustive Testing) là bất khả thi trừ những trường hợp cực kỳ nhỏ. Do đó Tester phải dùng phân tích rủi ro và các kỹ thuật thiết kế test case (EP, BVA) để tối ưu độ phủ."
  },
  {
    "id": "swt-c1-08",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Trong một dự án, 80% các lỗi nghiêm trọng được phát hiện chỉ tập trung ở 2 trên tổng số 10 module của hệ thống. Hiện tượng này phù hợp nhất với nguyên tắc kiểm thử nào?",
    "options": [
      {
        "id": "a",
        "text": "Pesticide paradox"
      },
      {
        "id": "b",
        "text": "Defect clustering (Lỗi tập trung cục bộ / Nguyên lý Pareto 80/20)"
      },
      {
        "id": "c",
        "text": "Testing is context dependent"
      },
      {
        "id": "d",
        "text": "Early testing saves time and money"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Defect clustering (Lỗi tập trung cục bộ / Nguyên lý Pareto 80/20).\n\nPrinciple 4 (Defect Clustering) chỉ ra rằng một số ít module phức tạp, nhiều thay đổi hoặc nhiều phụ thuộc thường chứa phần lớn các lỗi được phát hiện trong dự án."
  },
  {
    "id": "swt-c1-09",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Nếu một bộ kiểm thử hồi quy được chạy lặp đi lặp lại nhiều lần mà không hề được cập nhật hay bổ sung kịch bản mới, sau một thời gian nó sẽ không còn phát hiện thêm lỗi mới nào nữa. Hiện tượng này phản ánh nguyên tắc nào?",
    "options": [
      {
        "id": "a",
        "text": "Exhaustive testing is impossible"
      },
      {
        "id": "b",
        "text": "Beware of the pesticide paradox (Nghịch lý thuốc trừ sâu)"
      },
      {
        "id": "c",
        "text": "Absence-of-errors is a fallacy"
      },
      {
        "id": "d",
        "text": "Testing is context dependent"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Beware of the pesticide paradox (Nghịch lý thuốc trừ sâu).\n\nPrinciple 5 (Pesticide Paradox): Tương tự như sâu bọ kháng thuốc trừ sâu, phần mềm sau khi sửa lỗi cũ sẽ thích ứng với bộ test cũ. Tester cần định kỳ rà soát, viết lại hoặc thêm các test case mới để tìm ra các lỗi mới."
  },
  {
    "id": "swt-c1-10",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Một ứng dụng di động được kiểm thử rất kỹ lưỡng và không phát hiện bất kỳ lỗi kỹ thuật nào, nhưng khi đưa ra thị trường người dùng lập tức gỡ cài đặt vì giao diện khó dùng và không đáp ứng được mục tiêu công việc của họ. Nguyên tắc nào phản ánh tình huống này?",
    "options": [
      {
        "id": "a",
        "text": "Testing shows presence of defects"
      },
      {
        "id": "b",
        "text": "Absence-of-errors is a fallacy (Ngụy biện về sự vắng bóng của lỗi)"
      },
      {
        "id": "c",
        "text": "Early testing saves time and money"
      },
      {
        "id": "d",
        "text": "Defect clustering"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Absence-of-errors is a fallacy (Ngụy biện về sự vắng bóng của lỗi).\n\nPrinciple 7: Việc sửa chữa toàn bộ lỗi hoặc xây dựng hệ thống không có bug kỹ thuật sẽ trở nên vô nghĩa nếu hệ thống đó không đáp ứng được nhu cầu thực tế và kỳ vọng của người dùng."
  },
  {
    "id": "swt-c1-11",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Hoạt động nào sau đây thuộc giai đoạn 'Test Analysis & Design' trong quy trình kiểm thử cơ bản (Fundamental Test Process)?",
    "options": [
      {
        "id": "a",
        "text": "Xác định các điều kiện kiểm thử (Test Conditions) và thiết kế các kịch bản kiểm thử (Test Cases)."
      },
      {
        "id": "b",
        "text": "Lập kế hoạch phân bổ ngân sách và nhân sự cho dự án."
      },
      {
        "id": "c",
        "text": "Chạy các bộ kiểm thử tự động và ghi nhận kết quả Pass/Fail."
      },
      {
        "id": "d",
        "text": "Lưu trữ các kịch bản kiểm thử và viết bài học kinh nghiệm sau khi phát hành."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Xác định các điều kiện kiểm thử (Test Conditions) và thiết kế các kịch bản kiểm thử (Test Cases)..\n\nTrong giai đoạn Test Analysis & Design, Tester phân tích tài liệu yêu cầu (Test Basis) để xác định xem CẦN TEST CÁI GÌ (Test Conditions), sau đó thiết kế các Test Cases và xác định dữ liệu kiểm thử (Test Data)."
  },
  {
    "id": "swt-c1-12",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Hoạt động nào sau đây thuộc giai đoạn 'Test Implementation & Execution'?",
    "options": [
      {
        "id": "a",
        "text": "Xác định xem đã đạt tiêu chí dừng kiểm thử (Exit criteria) hay chưa."
      },
      {
        "id": "b",
        "text": "Gom nhóm các Test Cases thành các Test Suites và thực thi chúng theo thứ tự ưu tiên."
      },
      {
        "id": "c",
        "text": "Đánh giá các rủi ro của dự án và lập kế hoạch kiểm thử."
      },
      {
        "id": "d",
        "text": "Bàn giao các công cụ kiểm thử cho đội ngũ bảo trì."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Gom nhóm các Test Cases thành các Test Suites và thực thi chúng theo thứ tự ưu tiên..\n\nTest Implementation bao gồm sắp xếp thứ tự ưu tiên test case, gom thành Test Suites, chuẩn bị test data chi tiết và môi trường. Test Execution là chạy các test suite đó và ghi nhận kết quả."
  },
  {
    "id": "swt-c1-13",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Câu hỏi 'Are we building the product right?' phản ánh hoạt động nào, và câu hỏi 'Are we building the right product?' phản ánh hoạt động nào?",
    "options": [
      {
        "id": "a",
        "text": "Verification - Validation"
      },
      {
        "id": "b",
        "text": "Validation - Verification"
      },
      {
        "id": "c",
        "text": "Static Testing - Dynamic Testing"
      },
      {
        "id": "d",
        "text": "White-box Testing - Black-box Testing"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Verification - Validation.\n\nVerification (Xác minh) đối chiếu sản phẩm với đặc tả thiết kế ('Are we building the product right?'). Validation (Xác nhận) đối chiếu sản phẩm với nhu cầu thực tế của người dùng cuối ('Are we building the right product?')."
  },
  {
    "id": "swt-c1-14",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Hiện tượng chi phí sửa chữa một lỗi tăng vọt gấp hàng chục đến hàng trăm lần khi lỗi đó lọt từ giai đoạn Requirements xuống đến giai đoạn Production được gọi là gì?",
    "options": [
      {
        "id": "a",
        "text": "Pesticide Paradox"
      },
      {
        "id": "b",
        "text": "Defect Cost Escalation"
      },
      {
        "id": "c",
        "text": "Defect Density"
      },
      {
        "id": "d",
        "text": "Cyclomatic Complexity"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Defect Cost Escalation.\n\nDefect Cost Escalation (Sự leo thang chi phí lỗi) giải thích tại sao nguyên tắc 'Early Testing' lại cực kỳ quan trọng: phát hiện lỗi ngay trong pha phân tích yêu cầu tiết kiệm chi phí gấp bội so với sửa khi đã lên Production."
  },
  {
    "id": "swt-c1-15",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Trong tâm lý học kiểm thử (Psychology of Testing), cách tiếp cận giao tiếp nào sau đây là ĐÚNG ĐẮN NHẤT khi Tester thông báo lỗi cho Developer?",
    "options": [
      {
        "id": "a",
        "text": "Chỉ trích năng lực cá nhân của lập trình viên vì đã tạo ra lỗi ngớ ngẩn."
      },
      {
        "id": "b",
        "text": "Giao tiếp trung lập, khách quan, tập trung vào sản phẩm và sự sai lệch giữa kết quả thực tế với đặc tả yêu cầu."
      },
      {
        "id": "c",
        "text": "Yêu cầu lập trình viên phải ký biên bản nhận trách nhiệm trước toàn bộ công ty."
      },
      {
        "id": "d",
        "text": "Tránh giao tiếp trực tiếp và chỉ báo cáo lên cấp quản lý cao nhất."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Giao tiếp trung lập, khách quan, tập trung vào sản phẩm và sự sai lệch giữa kết quả thực tế với đặc tả yêu cầu..\n\nKiểm thử thường mang tính xây dựng nhưng dễ bị hiểu lầm là phê phán người làm ra sản phẩm. Tester cần giữ thái độ khách quan, trung lập, tập trung vào chất lượng của phần mềm chứ không công kích cá nhân."
  },
  {
    "id": "swt-c1-16",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Theo Bộ quy tắc đạo đức nghề nghiệp ISTQB/IEEE (Code of Ethics), tiêu chuẩn nào sau đây được đặt lên hàng đầu?",
    "options": [
      {
        "id": "a",
        "text": "Lợi ích của công chúng (Public Interest)"
      },
      {
        "id": "b",
        "text": "Lợi ích kinh tế của khách hàng và nhà tuyển dụng"
      },
      {
        "id": "c",
        "text": "Bảo vệ danh tiếng của bản thân kiểm thử viên"
      },
      {
        "id": "d",
        "text": "Sự trung thành tuyệt đối với ý kiến của người quản lý"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Lợi ích của công chúng (Public Interest).\n\nTiêu chuẩn đạo đức tối cao của người làm kiểm thử phần mềm là phục vụ lợi ích của cộng đồng và công chúng (Public Interest), đảm bảo an toàn cho con người và xã hội."
  },
  {
    "id": "swt-c1-17",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Đặc tính nào sau đây KHÔNG PHẢI là mục tiêu chính của hoạt động kiểm thử tĩnh (Static Testing)?",
    "options": [
      {
        "id": "a",
        "text": "Đo lường thời gian phản hồi (Response Time) của server dưới tải 10,000 kết nối đồng thời."
      },
      {
        "id": "b",
        "text": "Phát hiện sự mơ hồ hoặc mâu thuẫn trong tài liệu đặc tả yêu cầu (SRS)."
      },
      {
        "id": "c",
        "text": "Kiểm tra việc tuân thủ các quy chuẩn lập trình (Coding Standards) bằng công cụ quét mã nguồn."
      },
      {
        "id": "d",
        "text": "Phát hiện các biến được khai báo nhưng không bao giờ được sử dụng."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Đo lường thời gian phản hồi (Response Time) của server dưới tải 10,000 kết nối đồng thời..\n\nĐo lường thời gian phản hồi dưới tải yêu cầu phải chạy phần mềm và đẩy tải thật $\\rightarrow$ Đây là kiểm thử động (Dynamic Testing / Performance Testing). Static Testing kiểm tra tài liệu và code mà KHÔNG chạy chương trình."
  },
  {
    "id": "swt-c1-18",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Theo mô hình FLM FPT 2026, công cụ AI (như ChatGPT, Claude, Gemini, Grok) có thể hỗ trợ hiệu quả nhất cho Tester trong hoạt động nào của Chapter 1?",
    "options": [
      {
        "id": "a",
        "text": "Tự động thay thế hoàn toàn Tester trong việc chịu trách nhiệm pháp lý về sản phẩm."
      },
      {
        "id": "b",
        "text": "Gợi ý các kịch bản kiểm thử biên, tư duy các trường hợp ngoại lệ (Edge Cases) từ User Story thông qua kỹ thuật Prompting."
      },
      {
        "id": "c",
        "text": "Tự động sửa chữa phần cứng server bị hỏng hóc vật lý."
      },
      {
        "id": "d",
        "text": "Ký duyệt biên bản nghiệm thu bàn giao hệ thống thay cho Giám đốc dự án."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Gợi ý các kịch bản kiểm thử biên, tư duy các trường hợp ngoại lệ (Edge Cases) từ User Story thông qua kỹ thuật Prompting..\n\nAI đóng vai trò trợ lý thông minh giúp Tester mở rộng góc nhìn, gợi ý các tình huống kiểm thử dị biệt (edge cases), sinh dữ liệu kiểm thử giả định và hỗ trợ rà soát tài liệu yêu cầu thông qua các câu lệnh prompt hiệu quả."
  },
  {
    "id": "swt-c1-19",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Một dự án phát triển hệ thống điều khiển phanh khẩn cấp trên ô tô tự hành áp dụng quy trình kiểm thử nghiêm ngặt hơn rất nhiều so với dự án làm website bán hoa tươi trực tuyến. Điều này phản ánh nguyên tắc kiểm thử nào?",
    "options": [
      {
        "id": "a",
        "text": "Testing is context dependent (Kiểm thử phụ thuộc vào ngữ cảnh)"
      },
      {
        "id": "b",
        "text": "Defects cluster together"
      },
      {
        "id": "c",
        "text": "Pesticide paradox"
      },
      {
        "id": "d",
        "text": "Absence-of-errors is a fallacy"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Testing is context dependent (Kiểm thử phụ thuộc vào ngữ cảnh).\n\nPrinciple 6: Không có một phương pháp kiểm thử nào áp dụng giống hệt nhau cho mọi dự án. Kiểm thử luôn phụ thuộc vào bối cảnh ngành nghề, độ rủi ro và mục đích sử dụng của hệ thống."
  },
  {
    "id": "swt-c1-20",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Hoạt động nào sau đây thuộc giai đoạn 'Evaluating Exit Criteria and Reporting'?",
    "options": [
      {
        "id": "a",
        "text": "So sánh kết quả thực thi kiểm thử với các tiêu chí dừng đã định nghĩa trong Test Plan để viết Báo cáo tổng kết kiểm thử."
      },
      {
        "id": "b",
        "text": "Cài đặt phần mềm Selenium trên máy tính của kiểm thử viên."
      },
      {
        "id": "c",
        "text": "Phân chia các lớp tương đương cho trường dữ liệu ngày sinh."
      },
      {
        "id": "d",
        "text": "Tổ chức cuộc họp Kick-off để phân phát tài liệu SRS."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: So sánh kết quả thực thi kiểm thử với các tiêu chí dừng đã định nghĩa trong Test Plan để viết Báo cáo tổng kết kiểm thử..\n\nGiai đoạn Đánh giá tiêu chí dừng và Báo cáo (Evaluating exit criteria and reporting) kiểm tra xem đã đạt các chỉ số mong muốn (độ phủ, số lượng bug mở) hay chưa, từ đó viết Test Summary Report cho stakeholders."
  },
  {
    "id": "swt-c1-21",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Khi nào thì hoạt động kiểm thử nên được bắt đầu trong một dự án phát triển phần mềm?",
    "options": [
      {
        "id": "a",
        "text": "Ngay khi giai đoạn lập trình mã nguồn hoàn tất 100%."
      },
      {
        "id": "b",
        "text": "Càng sớm càng tốt, ngay từ giai đoạn khởi tạo và xác định yêu cầu dự án."
      },
      {
        "id": "c",
        "text": "Khi sản phẩm đã được cài đặt lên môi trường UAT của khách hàng."
      },
      {
        "id": "d",
        "text": "Chỉ khi khách hàng yêu cầu kiểm thử độc lập."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Càng sớm càng tốt, ngay từ giai đoạn khởi tạo và xác định yêu cầu dự án..\n\nTheo nguyên tắc Early Testing, việc tham gia kiểm thử từ giai đoạn phân tích tài liệu yêu cầu giúp phát hiện và ngăn ngừa lỗi sớm nhất, tiết kiệm chi phí tối đa."
  },
  {
    "id": "swt-c1-22",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Một tài liệu Test Basis là gì?",
    "options": [
      {
        "id": "a",
        "text": "Là bản hợp đồng kinh tế giữa khách hàng và công ty gia công phần mềm."
      },
      {
        "id": "b",
        "text": "Tất cả tài liệu từ đó các yêu cầu của thành phần hoặc hệ thống có thể được suy ra (như SRS, bản vẽ kiến trúc, thiết kế)."
      },
      {
        "id": "c",
        "text": "Là danh sách bảng lương của toàn bộ nhóm kiểm thử viên."
      },
      {
        "id": "d",
        "text": "Là phần mềm ghi nhận lỗi Jira."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Tất cả tài liệu từ đó các yêu cầu của thành phần hoặc hệ thống có thể được suy ra (như SRS, bản vẽ kiến trúc, thiết kế)..\n\nTest Basis là cơ sở kiểm thử - bất kỳ tài liệu, kiến thức hoặc đặc tả nào được Tester sử dụng làm căn cứ để phân tích và thiết kế test case."
  },
  {
    "id": "swt-c1-23",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Điều kiện kiểm thử (Test Condition) được định nghĩa là gì?",
    "options": [
      {
        "id": "a",
        "text": "Một mục hoặc sự kiện hoặc khía cạnh của hệ thống có thể được xác minh bằng một hoặc nhiều test case (Ví dụ: 'Chức năng đăng nhập thành công')."
      },
      {
        "id": "b",
        "text": "Số lượng tiền lương thưởng cho kiểm thử viên khi tìm được bug."
      },
      {
        "id": "c",
        "text": "Cấu hình phần cứng tối thiểu của máy chủ kiểm thử."
      },
      {
        "id": "d",
        "text": "Thời gian giải lao giữa các ca kiểm thử."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Một mục hoặc sự kiện hoặc khía cạnh của hệ thống có thể được xác minh bằng một hoặc nhiều test case (Ví dụ: 'Chức năng đăng nhập thành công')..\n\nTest Condition là 'CÁI GÌ CẦN TEST' (What to test) - một khía cạnh hoặc chức năng cụ thể có thể kiểm chứng được."
  },
  {
    "id": "swt-c1-24",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Bộ kiểm thử (Test Suite) là gì?",
    "options": [
      {
        "id": "a",
        "text": "Một tập hợp gồm một hoặc nhiều test cases hoặc test scripts được gom nhóm lại để thực thi trong một đợt test cụ thể."
      },
      {
        "id": "b",
        "text": "Là phòng làm việc riêng của đội ngũ QA/QC."
      },
      {
        "id": "c",
        "text": "Là phần mềm quản lý dự án của Microsoft."
      },
      {
        "id": "d",
        "text": "Là tiêu chuẩn đánh giá bằng cấp của Tester."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Một tập hợp gồm một hoặc nhiều test cases hoặc test scripts được gom nhóm lại để thực thi trong một đợt test cụ thể..\n\nTest Suite là tập hợp các Test Cases được sắp xếp theo một mục tiêu hoặc kịch bản kiểm thử nhất định (ví dụ: Sanity Suite, Regression Suite)."
  },
  {
    "id": "swt-c1-25",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Khái niệm 'Test Oracle' trong kiểm thử phần mềm có ý nghĩa là gì?",
    "options": [
      {
        "id": "a",
        "text": "Là hệ quản trị cơ sở dữ liệu Oracle Database."
      },
      {
        "id": "b",
        "text": "Một nguồn thông tin đáng tin cậy để xác định kết quả kỳ vọng (Expected Result) nhằm so sánh với kết quả thực tế (Actual Result)."
      },
      {
        "id": "c",
        "text": "Là người quản lý cao nhất của phòng đảm bảo chất lượng."
      },
      {
        "id": "d",
        "text": "Là một ngôn ngữ lập trình dùng để viết unit test."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Một nguồn thông tin đáng tin cậy để xác định kết quả kỳ vọng (Expected Result) nhằm so sánh với kết quả thực tế (Actual Result)..\n\nTest Oracle là chuẩn đối chiếu (tài liệu đặc tả, phần mềm tiền nhiệm, kiến thức nghiệp vụ của chuyên gia) giúp xác định kết quả đúng đắn của phần mềm."
  },
  {
    "id": "swt-c1-26",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Mối quan hệ giữa Kiểm soát chất lượng (Quality Control - QC) và Đảm bảo chất lượng (Quality Assurance - QA) là gì?",
    "options": [
      {
        "id": "a",
        "text": "QA tập trung vào cải tiến quy trình để ngăn ngừa lỗi (Preventative); QC tập trung vào việc kiểm tra sản phẩm để tìm ra lỗi (Corrective/Detective)."
      },
      {
        "id": "b",
        "text": "QA và QC là hai thuật ngữ hoàn toàn giống hệt nhau."
      },
      {
        "id": "c",
        "text": "QA là việc của lập trình viên; QC là việc của khách hàng."
      },
      {
        "id": "d",
        "text": "QC lập kế hoạch quy trình; QA chỉ chạy test thủ công."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: QA tập trung vào cải tiến quy trình để ngăn ngừa lỗi (Preventative); QC tập trung vào việc kiểm tra sản phẩm để tìm ra lỗi (Corrective/Detective)..\n\nQA hướng vào quy trình (Process-oriented) nhằm đảm bảo quy trình sản xuất đúng chuẩn. QC hướng vào sản phẩm (Product-oriented) nhằm phát hiện khiếm khuyết trong thành phẩm."
  },
  {
    "id": "swt-c1-27",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Thuật ngữ 'Root Cause Analysis' (Phân tích nguyên nhân gốc) nhằm mục đích gì?",
    "options": [
      {
        "id": "a",
        "text": "Xác định lỗi của ai để tiến hành phạt tiền nhân viên."
      },
      {
        "id": "b",
        "text": "Tìm ra nguyên nhân cơ bản sâu xa nhất dẫn đến lỗi để có hành động khắc phục, ngăn ngừa lỗi tương tự tái diễn."
      },
      {
        "id": "c",
        "text": "Tăng thời gian chạy kiểm thử tự động lên gấp đôi."
      },
      {
        "id": "d",
        "text": "Xóa bỏ hoàn toàn mã nguồn cũ và viết lại từ đầu."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Tìm ra nguyên nhân cơ bản sâu xa nhất dẫn đến lỗi để có hành động khắc phục, ngăn ngừa lỗi tương tự tái diễn..\n\nRoot Cause Analysis phân tích tại sao lỗi xảy ra (do tài liệu mơ hồ, thiếu đào tạo hay áp lực thời gian) để cải tiến quy trình, ngăn lỗi tương tự lặp lại."
  },
  {
    "id": "swt-c1-28",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Khi nào thì một bài kiểm thử được coi là 'Pass' (Đạt)?",
    "options": [
      {
        "id": "a",
        "text": "Khi kiểm thử viên không thích tìm thêm lỗi nữa."
      },
      {
        "id": "b",
        "text": "Khi kết quả thực tế (Actual Result) trùng khớp với kết quả kỳ vọng (Expected Result) đã xác định trước."
      },
      {
        "id": "c",
        "text": "Khi phần mềm không xuất hiện màn hình xanh chết chóc (BSOD)."
      },
      {
        "id": "d",
        "text": "Khi lập trình viên khẳng định mã nguồn không có vấn đề gì."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Khi kết quả thực tế (Actual Result) trùng khớp với kết quả kỳ vọng (Expected Result) đã xác định trước..\n\nMột test case chỉ Pass khi hành vi thực tế quan sát được khớp hoàn toàn với kết quả kỳ vọng đã quy định trong đặc tả."
  },
  {
    "id": "swt-c1-29",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Tại sao kiểm thử phần mềm không thể chứng minh phần mềm không có lỗi?",
    "options": [
      {
        "id": "a",
        "text": "Vì Tester thường làm việc cẩu thả và thiếu tập trung."
      },
      {
        "id": "b",
        "text": "Vì số lượng đường dẫn thực thi và tổ hợp dữ liệu là vô hạn (Exhaustive Testing is impossible), kiểm thử chỉ bao quát được một tập con dựa trên rủi ro."
      },
      {
        "id": "c",
        "text": "Vì các công cụ kiểm thử tự động luôn luôn chứa mã độc."
      },
      {
        "id": "d",
        "text": "Vì lập trình viên luôn giấu mã nguồn không cho Tester xem."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Vì số lượng đường dẫn thực thi và tổ hợp dữ liệu là vô hạn (Exhaustive Testing is impossible), kiểm thử chỉ bao quát được một tập con dựa trên rủi ro..\n\nSố lượng tổ hợp dữ liệu và trạng thái trong thực tế là quá lớn đến mức vô hạn. Kiểm thử chỉ có thể lấy mẫu dựa trên phân tích rủi ro, do đó không thể chứng minh tính đúng đắn tuyệt đối."
  },
  {
    "id": "swt-c1-30",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Khi nào thì kiểm thử viên nên dừng việc kiểm thử một phiên bản phần mềm?",
    "options": [
      {
        "id": "a",
        "text": "Khi đã tiêu hết toàn bộ ngân sách dự án."
      },
      {
        "id": "b",
        "text": "Khi tất cả các tiêu chí dừng (Exit Criteria) được định nghĩa trong Test Plan đã được thỏa mãn đầy đủ."
      },
      {
        "id": "c",
        "text": "Khi lập trình viên yêu cầu dừng để phát hành sản phẩm."
      },
      {
        "id": "d",
        "text": "Khi không còn tìm thấy lỗi nào trong vòng 10 phút liên tục."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Khi tất cả các tiêu chí dừng (Exit Criteria) được định nghĩa trong Test Plan đã được thỏa mãn đầy đủ..\n\nViệc dừng kiểm thử phải dựa trên các tiêu chí khách quan (Exit Criteria) đã được thống nhất từ trước trong Test Plan (ví dụ: độ phủ, số lượng bug critical bằng 0)."
  },
  {
    "id": "swt-c2-01",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Trong mô hình chữ V (V-Model), cấp độ kiểm thử nào tương ứng trực tiếp với giai đoạn phân tích Yêu cầu người dùng (Business / User Requirements)?",
    "options": [
      {
        "id": "a",
        "text": "Component Testing (Unit Test)"
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
        "text": "Acceptance Testing (Kiểm thử chấp nhận)"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Đáp án đúng là **D**: Acceptance Testing (Kiểm thử chấp nhận).\n\nTrong V-Model: Acceptance Testing kiểm chứng User Requirements; System Testing kiểm chứng System Requirements/SRS; Integration Testing kiểm chứng High-level Architecture; Component Testing kiểm chứng Detailed Design/Code."
  },
  {
    "id": "swt-c2-02",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Đặc điểm nào sau đây mô tả ĐÚNG NHẤT về Component Testing (Unit Testing)?",
    "options": [
      {
        "id": "a",
        "text": "Do kiểm thử viên độc lập bên ngoài thực hiện trên toàn bộ hệ thống hoàn chỉnh."
      },
      {
        "id": "b",
        "text": "Tập trung kiểm tra các đơn vị mã nguồn nhỏ nhất có thể test riêng rẽ (hàm, class), thường do Developer thực hiện và sử dụng Stubs/Drivers/Mocks."
      },
      {
        "id": "c",
        "text": "Chỉ kiểm tra các khía cạnh phi chức năng như hiệu năng và tải."
      },
      {
        "id": "d",
        "text": "Thực hiện trực tiếp trên môi trường Production của khách hàng."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Tập trung kiểm tra các đơn vị mã nguồn nhỏ nhất có thể test riêng rẽ (hàm, class), thường do Developer thực hiện và sử dụng Stubs/Drivers/Mocks..\n\nComponent Testing (Unit Testing) do lập trình viên thực hiện nhằm kiểm tra logic nội bộ của từng hàm/class độc lập, cách ly với các thành phần khác bằng Mock/Stub."
  },
  {
    "id": "swt-c2-03",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Trong kiểm thử tích hợp (Integration Testing), chiến lược 'Top-Down' đòi hỏi phải sử dụng thành phần giả lập nào cho các module cấp dưới chưa được phát triển?",
    "options": [
      {
        "id": "a",
        "text": "Drivers"
      },
      {
        "id": "b",
        "text": "Stubs"
      },
      {
        "id": "c",
        "text": "Emulators"
      },
      {
        "id": "d",
        "text": "Oracles"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Stubs.\n\nChiến lược Top-Down đi từ module cấp cao xuống cấp thấp. Khi module cấp dưới chưa hoàn thành, cần dùng **Stubs** (module giả lập cấp dưới) để trả về dữ liệu mẫu."
  },
  {
    "id": "swt-c2-04",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Trong kiểm thử tích hợp 'Bottom-Up', thành phần nào được sử dụng để giả lập module cấp trên nhằm gọi và truyền dữ liệu cho module đang được test?",
    "options": [
      {
        "id": "a",
        "text": "Stubs"
      },
      {
        "id": "b",
        "text": "Drivers"
      },
      {
        "id": "c",
        "text": "Proxies"
      },
      {
        "id": "d",
        "text": "Adapters"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Drivers.\n\nChiến lược Bottom-Up tích hợp từ module cấp thấp lên cấp cao. Khi module điều khiển cấp trên chưa hoàn thành, cần viết **Drivers** để kích hoạt và gọi hàm của module cấp dưới."
  },
  {
    "id": "swt-c2-05",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Nhược điểm lớn nhất của chiến lược tích hợp 'Big Bang' là gì?",
    "options": [
      {
        "id": "a",
        "text": "Cần viết quá nhiều Stubs và Drivers phức tạp."
      },
      {
        "id": "b",
        "text": "Gộp tất cả các module lại cùng lúc rồi mới test, dẫn đến việc khi xảy ra lỗi cực kỳ khó cô lập và xác định nguyên nhân gốc rễ nằm ở module nào."
      },
      {
        "id": "c",
        "text": "Tốn kém chi phí mua bản quyền công cụ tự động hóa."
      },
      {
        "id": "d",
        "text": "Chỉ áp dụng được cho các hệ thống phần mềm nhúng."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Gộp tất cả các module lại cùng lúc rồi mới test, dẫn đến việc khi xảy ra lỗi cực kỳ khó cô lập và xác định nguyên nhân gốc rễ nằm ở module nào..\n\nBig Bang tích hợp toàn bộ hệ thống cùng lúc mà không theo từng bước, khiến việc debug và xác định vị trí phát sinh bug trở nên vô cùng khó khăn và tốn thời gian."
  },
  {
    "id": "swt-c2-06",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Khẳng định nào sau đây mô tả sự khác biệt chính giữa Alpha Testing và Beta Testing?",
    "options": [
      {
        "id": "a",
        "text": "Alpha Testing do Tester chuyên nghiệp làm; Beta Testing do lập trình viên làm."
      },
      {
        "id": "b",
        "text": "Alpha Testing diễn ra tại địa điểm của nhà phát triển (in-house); Beta Testing diễn ra tại môi trường thực tế của khách hàng / người dùng cuối."
      },
      {
        "id": "c",
        "text": "Alpha Testing chỉ test hiệu năng; Beta Testing chỉ test giao diện."
      },
      {
        "id": "d",
        "text": "Alpha Testing là kiểm thử tĩnh; Beta Testing là kiểm thử động."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Alpha Testing diễn ra tại địa điểm của nhà phát triển (in-house); Beta Testing diễn ra tại môi trường thực tế của khách hàng / người dùng cuối..\n\nAlpha Testing được thực hiện tại cơ sở của tổ chức phát triển phần mềm (in-house). Beta Testing (Field testing) được gửi đến cho người dùng bên ngoài chạy thử trên môi trường thực tế của họ."
  },
  {
    "id": "swt-c2-07",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Một khách hàng yêu cầu kiểm tra xem hệ thống website bán vé máy bay có thể chịu được 50,000 lượt truy cập đồng thời trong dịp Tết mà không bị sập hay không. Đây là loại kiểm thử nào?",
    "options": [
      {
        "id": "a",
        "text": "Functional Testing (Kiểm thử chức năng)"
      },
      {
        "id": "b",
        "text": "Non-functional Testing (Kiểm thử phi chức năng - Performance / Stress Testing)"
      },
      {
        "id": "c",
        "text": "Structural Testing (Kiểm thử cấu trúc)"
      },
      {
        "id": "d",
        "text": "Acceptance Testing nội bộ"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Non-functional Testing (Kiểm thử phi chức năng - Performance / Stress Testing).\n\nKiểm tra tải, tốc độ, độ ổn định và khả năng chịu tải là kiểm thử phi chức năng (Non-functional Testing). Nó trả lời câu hỏi hệ thống hoạt động TỐT NHƯ THẾ NÀO (How well)."
  },
  {
    "id": "swt-c2-08",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Sau khi Developer sửa một con bug trong module giỏ hàng, Tester chạy lại đúng kịch bản kiểm thử đã từng phát hiện ra con bug đó để xác nhận bug đã được khắc phục. Hoạt động này được gọi là gì?",
    "options": [
      {
        "id": "a",
        "text": "Regression Testing"
      },
      {
        "id": "b",
        "text": "Confirmation Testing (Re-testing)"
      },
      {
        "id": "c",
        "text": "Sanity Testing"
      },
      {
        "id": "d",
        "text": "Smoke Testing"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Confirmation Testing (Re-testing).\n\nConfirmation Testing (Re-testing) là việc chạy lại đúng bài test đã từng fail để kiểm tra xem lỗi cụ thể đó đã được sửa thành công hay chưa."
  },
  {
    "id": "swt-c2-09",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Hoạt động kiểm tra lại toàn bộ hoặc một phần hệ thống nhằm đảm bảo việc sửa lỗi hoặc thêm tính năng mới KHÔNG làm phát sinh lỗi mới ở các phần mã nguồn vốn đang hoạt động bình thường được gọi là gì?",
    "options": [
      {
        "id": "a",
        "text": "Confirmation Testing"
      },
      {
        "id": "b",
        "text": "Regression Testing (Kiểm thử hồi quy)"
      },
      {
        "id": "c",
        "text": "Unit Testing"
      },
      {
        "id": "d",
        "text": "Exploratory Testing"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Regression Testing (Kiểm thử hồi quy).\n\nRegression Testing kiểm tra xem việc thay đổi mã nguồn có gây ra 'tác dụng phụ' ngoài ý muốn lên các tính năng đã ổn định trước đó hay không."
  },
  {
    "id": "swt-c2-10",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Tại sao Regression Testing lại là ứng viên hàng đầu cho việc Tự động hóa (Test Automation)?",
    "options": [
      {
        "id": "a",
        "text": "Vì kịch bản Regression Test không bao giờ có thể chạy thủ công."
      },
      {
        "id": "b",
        "text": "Vì các bộ kiểm thử hồi quy phải được chạy lặp đi lặp lại nhiều lần sau mỗi lần build hoặc sửa code, tự động hóa giúp tiết kiệm thời gian và công sức lớn."
      },
      {
        "id": "c",
        "text": "Vì kiểm thử viên thủ công bị cấm thực hiện kiểm thử hồi quy theo chuẩn ISTQB."
      },
      {
        "id": "d",
        "text": "Vì chạy tự động sẽ tìm thấy 100% tất cả các lỗi có trong hệ thống."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Vì các bộ kiểm thử hồi quy phải được chạy lặp đi lặp lại nhiều lần sau mỗi lần build hoặc sửa code, tự động hóa giúp tiết kiệm thời gian và công sức lớn..\n\nRegression Testing có tính chất lặp đi lặp lại rất cao qua mỗi bản build/sprint. Tự động hóa giúp giải phóng Tester khỏi công việc lặp nhàm chán và phát hiện lỗi hồi quy nhanh chóng."
  },
  {
    "id": "swt-c2-11",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Tình huống nào sau đây sẽ KÍCH HOẠT hoạt động Kiểm thử bảo trì (Maintenance Testing)?",
    "options": [
      {
        "id": "a",
        "text": "Nâng cấp hệ điều hành máy chủ từ Windows Server 2016 lên Windows Server 2022 và chuyển cơ sở dữ liệu lên đám mây AWS."
      },
      {
        "id": "b",
        "text": "Khởi tạo ý tưởng dự án mới trong buổi họp đầu năm."
      },
      {
        "id": "c",
        "text": "Lập kế hoạch phân bổ ngân sách cho quý tiếp theo."
      },
      {
        "id": "d",
        "text": "Viết tài liệu User Story cho dự án chuẩn bị đấu thầu."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Nâng cấp hệ điều hành máy chủ từ Windows Server 2016 lên Windows Server 2022 và chuyển cơ sở dữ liệu lên đám mây AWS..\n\nMaintenance Testing diễn ra khi hệ thống đã đi vào vận hành (in-service) và gặp các yếu tố kích hoạt: Sửa đổi (Enhancement/Bug fix), Di chuyển môi trường (Migration), hoặc Hủy bỏ/Lưu trữ dữ liệu (Retirement)."
  },
  {
    "id": "swt-c2-12",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Trong kiểm thử bảo trì, kỹ thuật nào được dùng để xác định các khu vực có nguy cơ bị ảnh hưởng bởi một thay đổi nhằm khoanh vùng phạm vi kiểm thử hồi quy?",
    "options": [
      {
        "id": "a",
        "text": "Root Cause Analysis"
      },
      {
        "id": "b",
        "text": "Impact Analysis (Phân tích tác động)"
      },
      {
        "id": "c",
        "text": "Boundary Value Analysis"
      },
      {
        "id": "d",
        "text": "Equivalence Partitioning"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Impact Analysis (Phân tích tác động).\n\nImpact Analysis phân tích mối quan hệ phụ thuộc trong mã nguồn và kiến trúc để xác định thay đổi này có thể tác động đến những module nào, từ đó chọn lọc bộ Regression Test phù hợp."
  },
  {
    "id": "swt-c2-13",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kiểm thử cấu trúc (Structural Testing) dựa trên cơ sở nào để thiết kế test case?",
    "options": [
      {
        "id": "a",
        "text": "Tài liệu đặc tả yêu cầu chức năng của khách hàng."
      },
      {
        "id": "b",
        "text": "Cấu trúc nội bộ của phần mềm như mã nguồn, kiến trúc luồng dữ liệu hoặc điều khiển (White-box)."
      },
      {
        "id": "c",
        "text": "Kinh nghiệm cá nhân và trực giác của Tester."
      },
      {
        "id": "d",
        "text": "Sách hướng dẫn sử dụng của đối thủ cạnh tranh."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Cấu trúc nội bộ của phần mềm như mã nguồn, kiến trúc luồng dữ liệu hoặc điều khiển (White-box)..\n\nStructural Testing (thường là White-box) dựa trên kiến trúc, luồng điều khiển, mã nguồn hoặc các mô hình cấu trúc bên trong phần mềm."
  },
  {
    "id": "swt-c2-14",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Cấp độ kiểm thử nào kiểm tra toàn bộ luồng nghiệp vụ đầu cuối (end-to-end) trên một hệ thống hoàn chỉnh theo đúng tài liệu đặc tả yêu cầu phần mềm (SRS)?",
    "options": [
      {
        "id": "a",
        "text": "Component Testing"
      },
      {
        "id": "b",
        "text": "Integration Testing"
      },
      {
        "id": "c",
        "text": "System Testing (Kiểm thử hệ thống)"
      },
      {
        "id": "d",
        "text": "Unit Testing"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Đáp án đúng là **C**: System Testing (Kiểm thử hệ thống).\n\nSystem Testing kiểm tra toàn bộ hệ thống tích hợp hoàn chỉnh dựa trên đặc tả yêu cầu hệ thống (SRS/FRD), bao gồm cả chức năng và phi chức năng."
  },
  {
    "id": "swt-c2-15",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Operational Acceptance Testing (OAT) bao gồm các nội dung kiểm tra nào sau đây?",
    "options": [
      {
        "id": "a",
        "text": "Kiểm tra font chữ và màu sắc logo trên trang chủ."
      },
      {
        "id": "b",
        "text": "Kiểm tra quy trình sao lưu và phục hồi dữ liệu (Backup and Restore), khôi phục sau thảm họa (Disaster Recovery) và các quy trình bảo trì hệ thống."
      },
      {
        "id": "c",
        "text": "Kiểm tra độ phức tạp Cyclomatic của từng hàm trong mã nguồn C++."
      },
      {
        "id": "d",
        "text": "Đếm số lượng comment trong file mã nguồn Java."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Kiểm tra quy trình sao lưu và phục hồi dữ liệu (Backup and Restore), khôi phục sau thảm họa (Disaster Recovery) và các quy trình bảo trì hệ thống..\n\nOAT (Kiểm thử chấp nhận vận hành) do đội ngũ SysAdmin/DevOps thực hiện nhằm đảm bảo hệ thống sẵn sàng vận hành ổn định (Backup, Disaster recovery, Security checks)."
  },
  {
    "id": "swt-c2-16",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Một bài kiểm thử nhằm xác minh tính tương thích của ứng dụng web trên 5 trình duyệt khác nhau (Chrome, Firefox, Safari, Edge, Opera) thuộc loại kiểm thử nào?",
    "options": [
      {
        "id": "a",
        "text": "Functional Testing"
      },
      {
        "id": "b",
        "text": "Non-functional Testing (Compatibility Testing)"
      },
      {
        "id": "c",
        "text": "Structural Testing"
      },
      {
        "id": "d",
        "text": "Regression Testing"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Non-functional Testing (Compatibility Testing).\n\nCompatibility Testing (Kiểm thử tính tương thích) là một nhánh của kiểm thử phi chức năng (Non-functional Testing)."
  },
  {
    "id": "swt-c2-17",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Nhận định nào sau đây là ĐÚNG về mối quan hệ giữa các cấp độ kiểm thử trong mô hình Agile?",
    "options": [
      {
        "id": "a",
        "text": "Agile không có các cấp độ kiểm thử riêng biệt mà chỉ có kiểm thử hệ thống."
      },
      {
        "id": "b",
        "text": "Trong Agile, các cấp độ kiểm thử (Unit, Integration, System, Acceptance) vẫn tồn tại nhưng được thực hiện lặp đi lặp lại liên tục và song song trong từng Sprint."
      },
      {
        "id": "c",
        "text": "Agile cấm lập trình viên viết Unit Test."
      },
      {
        "id": "d",
        "text": "Agile chỉ cho phép thực hiện kiểm thử thủ công sau khi dự án kết thúc."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Trong Agile, các cấp độ kiểm thử (Unit, Integration, System, Acceptance) vẫn tồn tại nhưng được thực hiện lặp đi lặp lại liên tục và song song trong từng Sprint..\n\nCác cấp độ kiểm thử là nền tảng chất lượng phổ quát. Trong Agile, chúng diễn ra nhanh, liên tục và lặp đi lặp lại trong từng vòng lặp (Sprint/Iteration)."
  },
  {
    "id": "swt-c2-18",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Khi nào thì việc phân tích tác động (Impact Analysis) nên được thực hiện?",
    "options": [
      {
        "id": "a",
        "text": "Sau khi phần mềm đã được phát hành và khách hàng đã khiếu nại về lỗi."
      },
      {
        "id": "b",
        "text": "Trước khi tiến hành thay đổi mã nguồn, để đánh giá chi phí, rủi ro và xác định phạm vi kiểm thử hồi quy cần thiết."
      },
      {
        "id": "c",
        "text": "Chỉ khi toàn bộ dự án bị hủy bỏ."
      },
      {
        "id": "d",
        "text": "Khi chuyển đổi từ kiểm thử tự động sang kiểm thử thủ công."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Trước khi tiến hành thay đổi mã nguồn, để đánh giá chi phí, rủi ro và xác định phạm vi kiểm thử hồi quy cần thiết..\n\nImpact Analysis nên được thực hiện sớm TRƯỚC KHI thay đổi mã nguồn để ước tính rủi ro, khối lượng công việc và xác định đúng vùng bị ảnh hưởng."
  },
  {
    "id": "swt-c2-19",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Thuật ngữ 'Regression' trong kiểm thử phần mềm có nghĩa đen là gì?",
    "options": [
      {
        "id": "a",
        "text": "Sự cải tiến vượt bậc về tốc độ."
      },
      {
        "id": "b",
        "text": "Sự thoái lui hoặc suy thoái (một tính năng vốn đang chạy tốt nay bị hỏng do mã mới thêm vào)."
      },
      {
        "id": "c",
        "text": "Quá trình biên dịch mã nguồn sang ngôn ngữ máy."
      },
      {
        "id": "d",
        "text": "Việc lập trình viên bàn giao tài liệu cho Tester."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Sự thoái lui hoặc suy thoái (một tính năng vốn đang chạy tốt nay bị hỏng do mã mới thêm vào)..\n\nRegression nghĩa là sự thoái lui/tụt lùi về chất lượng - code mới vô tình làm hỏng tính năng cũ."
  },
  {
    "id": "swt-c2-20",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Sự khác biệt giữa Component Testing và System Testing về môi trường kiểm thử là gì?",
    "options": [
      {
        "id": "a",
        "text": "Component test chạy trên môi trường giả lập/cô lập; System test đòi hỏi môi trường hoàn chỉnh và càng sát với môi trường Production càng tốt."
      },
      {
        "id": "b",
        "text": "Component test chạy trên điện thoại người dùng; System test chạy trên máy tính lập trình viên."
      },
      {
        "id": "c",
        "text": "Cả hai cấp độ đều bắt buộc phải dùng chung một máy chủ duy nhất."
      },
      {
        "id": "d",
        "text": "Không có sự khác biệt nào."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Component test chạy trên môi trường giả lập/cô lập; System test đòi hỏi môi trường hoàn chỉnh và càng sát với môi trường Production càng tốt..\n\nComponent test chạy cô lập với Mock/Stub. System test cần môi trường hoàn chỉnh tích hợp mạng, database, cấu hình chuẩn giống hệt Production."
  },
  {
    "id": "swt-c3-01",
    "subjectId": "swt",
    "chapterId": "swt-ch3",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Đặc điểm nào sau đây phân biệt ĐÚNG NHẤT giữa Static Testing và Dynamic Testing?",
    "options": [
      {
        "id": "a",
        "text": "Static testing do máy tính thực hiện; Dynamic testing do con người thực hiện."
      },
      {
        "id": "b",
        "text": "Static testing kiểm tra sản phẩm công việc mà KHÔNG CẦN CHẠY MÃ NGUỒN; Dynamic testing bắt buộc PHẢI THỰC THI MÃ NGUỒN phần mềm."
      },
      {
        "id": "c",
        "text": "Static testing chỉ áp dụng cho tài liệu Word; Dynamic testing chỉ áp dụng cho mã nguồn."
      },
      {
        "id": "d",
        "text": "Static testing luôn đắt đỏ hơn Dynamic testing."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Static testing kiểm tra sản phẩm công việc mà KHÔNG CẦN CHẠY MÃ NGUỒN; Dynamic testing bắt buộc PHẢI THỰC THI MÃ NGUỒN phần mềm..\n\nBản chất cốt lõi: Static Testing kiểm tra tài liệu và code tĩnh mà không execute chương trình. Dynamic Testing kiểm tra hành vi phần mềm khi đang chạy."
  },
  {
    "id": "swt-c3-02",
    "subjectId": "swt",
    "chapterId": "swt-ch3",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Lợi ích nổi bật nhất của việc áp dụng kỹ thuật Review trong giai đoạn sớm của dự án là gì?",
    "options": [
      {
        "id": "a",
        "text": "Loại bỏ hoàn toàn sự cần thiết phải kiểm thử động về sau."
      },
      {
        "id": "b",
        "text": "Phát hiện và sửa chữa các khiếm khuyết ngay trong tài liệu yêu cầu và thiết kế với chi phí rẻ hơn hàng chục lần so với khi code đã chạy."
      },
      {
        "id": "c",
        "text": "Tăng số lượng dòng mã nguồn được viết ra trong một ngày."
      },
      {
        "id": "d",
        "text": "Cho phép lập trình viên không cần đọc tài liệu yêu cầu."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Phát hiện và sửa chữa các khiếm khuyết ngay trong tài liệu yêu cầu và thiết kế với chi phí rẻ hơn hàng chục lần so với khi code đã chạy..\n\nStatic review tìm lỗi ngay từ gốc (Requirement, Architecture), ngăn ngừa lỗi chuyển hóa thành bug trong code, tiết kiệm rất lớn chi phí sửa chữa (Early Defect Detection)."
  },
  {
    "id": "swt-c3-03",
    "subjectId": "swt",
    "chapterId": "swt-ch3",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Trong quy trình Review chính thức (Formal Review), ai là người chịu trách nhiệm quan trọng nhất trong việc điều phối cuộc họp, giữ hòa khí và đảm bảo buổi review đi đúng trọng tâm?",
    "options": [
      {
        "id": "a",
        "text": "Author (Tác giả)"
      },
      {
        "id": "b",
        "text": "Moderator / Facilitator (Điều phối viên)"
      },
      {
        "id": "c",
        "text": "Scribe / Recorder (Thư ký)"
      },
      {
        "id": "d",
        "text": "Manager (Nhà quản lý)"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Moderator / Facilitator (Điều phối viên).\n\nModerator (Facilitator) là vai trò then chốt nhất của buổi review chính thức, chịu trách nhiệm dẫn dắt, giải quyết bất đồng và quản lý thời gian."
  },
  {
    "id": "swt-c3-04",
    "subjectId": "swt",
    "chapterId": "swt-ch3",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Vai trò nào trong quy trình Review chịu trách nhiệm ghi chép chi tiết từng khiếm khuyết được phát hiện và các quyết định vào Defect Log?",
    "options": [
      {
        "id": "a",
        "text": "Author"
      },
      {
        "id": "b",
        "text": "Moderator"
      },
      {
        "id": "c",
        "text": "Scribe (Recorder - Thư ký)"
      },
      {
        "id": "d",
        "text": "Reviewer"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Đáp án đúng là **C**: Scribe (Recorder - Thư ký).\n\nScribe (Recorder) có nhiệm vụ ghi chép trung thực, đầy đủ mọi defect và ghi chú phát sinh trong cuộc họp vào biên bản kiểm thử tĩnh."
  },
  {
    "id": "swt-c3-05",
    "subjectId": "swt",
    "chapterId": "swt-ch3",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Hình thức Review nào sau đây mang tính chính thức cao nhất (Most Formal), được dẫn dắt bởi một Moderator được đào tạo bài bản và bắt buộc sử dụng Checklist cùng các số liệu đo lường (Metrics)?",
    "options": [
      {
        "id": "a",
        "text": "Informal Review"
      },
      {
        "id": "b",
        "text": "Walkthrough"
      },
      {
        "id": "c",
        "text": "Technical Review"
      },
      {
        "id": "d",
        "text": "Inspection (Thanh tra)"
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Đáp án đúng là **D**: Inspection (Thanh tra).\n\nInspection là hình thức review khắt khe và chính thức nhất theo chuẩn ISTQB, có tiêu chí vào/ra rõ ràng, dùng checklist và tác giả KHÔNG ĐƯỢC làm người dẫn dắt."
  },
  {
    "id": "swt-c3-06",
    "subjectId": "swt",
    "chapterId": "swt-ch3",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Trong hình thức Review nào, TÁC GIẢ (Author) là người trực tiếp trình bày sản phẩm, dẫn dắt buổi họp nhằm mục đích chia sẻ kiến thức, đào tạo và thu thập ý kiến đóng góp?",
    "options": [
      {
        "id": "a",
        "text": "Inspection"
      },
      {
        "id": "b",
        "text": "Walkthrough"
      },
      {
        "id": "c",
        "text": "Formal Management Review"
      },
      {
        "id": "d",
        "text": "Static Analysis Tool Review"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Walkthrough.\n\nTrong Walkthrough, tác giả tài liệu/code là người đứng ra thuyết trình, dẫn dắt các thành viên đi qua từng phần của sản phẩm để cùng hiểu và thu thập phản hồi."
  },
  {
    "id": "swt-c3-07",
    "subjectId": "swt",
    "chapterId": "swt-ch3",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Hình thức Review nào diễn ra tự do giữa hai lập trình viên (như Pair Programming hoặc Peer Review bàn bên) mà không cần chuẩn bị kịch bản hay ghi chép biên bản chính thức?",
    "options": [
      {
        "id": "a",
        "text": "Inspection"
      },
      {
        "id": "b",
        "text": "Technical Review"
      },
      {
        "id": "c",
        "text": "Informal Review"
      },
      {
        "id": "d",
        "text": "Formal Audit"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Đáp án đúng là **C**: Informal Review.\n\nInformal Review là hình thức không chính thức, diễn ra linh hoạt, tốn ít chi phí tổ chức nhưng vẫn đem lại hiệu quả cao trong việc phát hiện lỗi nhanh."
  },
  {
    "id": "swt-c3-08",
    "subjectId": "swt",
    "chapterId": "swt-ch3",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Giai đoạn nào trong quy trình Review chính thức 6 bước thường tiêu tốn nhiều thời gian và công sức độc lập của các Reviewers nhất?",
    "options": [
      {
        "id": "a",
        "text": "Planning"
      },
      {
        "id": "b",
        "text": "Kick-off"
      },
      {
        "id": "c",
        "text": "Individual Preparation (Chuẩn bị cá nhân)"
      },
      {
        "id": "d",
        "text": "Follow-up"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Đáp án đúng là **C**: Individual Preparation (Chuẩn bị cá nhân).\n\nIndividual Preparation đòi hỏi từng Reviewer phải tự đọc kỹ tài liệu, soi từng chi tiết, ghi chú lỗi và thắc mắc trước khi bước vào phòng họp chung."
  },
  {
    "id": "swt-c3-09",
    "subjectId": "swt",
    "chapterId": "swt-ch3",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Công cụ Phân tích tĩnh (Static Analysis Tools) thường phát hiện hiệu quả nhất loại khiếm khuyết nào sau đây trong mã nguồn?",
    "options": [
      {
        "id": "a",
        "text": "Thời gian phản hồi chậm khi có 10,000 người dùng đồng thời."
      },
      {
        "id": "b",
        "text": "Mã không bao giờ được thực thi (Dead code / Unreachable code), biến chưa khởi tạo đã sử dụng, vi phạm chuẩn lập trình và rò rỉ bộ nhớ tiềm ẩn."
      },
      {
        "id": "c",
        "text": "Lỗi giao diện bị lệch 2 pixel trên màn hình iPhone."
      },
      {
        "id": "d",
        "text": "Yêu cầu nghiệp vụ của khách hàng bị hiểu sai hoàn toàn."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Mã không bao giờ được thực thi (Dead code / Unreachable code), biến chưa khởi tạo đã sử dụng, vi phạm chuẩn lập trình và rò rỉ bộ nhớ tiềm ẩn..\n\nStatic Analysis Tool (như SonarQube, ESLint) phân tích cấu trúc mã nguồn (AST, Control flow) mà không chạy code, cực kỳ hiệu quả để tìm Dead code, Null pointer, Unused variables."
  },
  {
    "id": "swt-c3-10",
    "subjectId": "swt",
    "chapterId": "swt-ch3",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Độ phức tạp Cyclomatic (Cyclomatic Complexity) của Thomas McCabe đo lường điều gì thông qua phân tích tĩnh mã nguồn?",
    "options": [
      {
        "id": "a",
        "text": "Số lượng comment trong file mã nguồn."
      },
      {
        "id": "b",
        "text": "Số lượng đường đi độc lập tuyến tính qua mã nguồn, phản ánh độ phức tạp logic và số lượng test case tối thiểu cần để phủ toàn bộ nhánh."
      },
      {
        "id": "c",
        "text": "Tốc độ gõ phím của lập trình viên."
      },
      {
        "id": "d",
        "text": "Dung lượng bộ nhớ RAM mà chương trình sẽ tiêu thụ."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Số lượng đường đi độc lập tuyến tính qua mã nguồn, phản ánh độ phức tạp logic và số lượng test case tối thiểu cần để phủ toàn bộ nhánh..\n\nCyclomatic Complexity đo lường độ phức tạp logic của cấu trúc rẽ nhánh trong code, cho biết số đường đi độc lập cơ bản cần kiểm thử."
  },
  {
    "id": "swt-c3-11",
    "subjectId": "swt",
    "chapterId": "swt-ch3",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Nhận định nào sau đây là một yếu tố tâm lý QUAN TRỌNG quyết định sự thành công của một buổi Review?",
    "options": [
      {
        "id": "a",
        "text": "Xem buổi Review là dịp để phê bình và xếp loại thi đua cá nhân tác giả."
      },
      {
        "id": "b",
        "text": "Tạo bầu không khí tin cậy, cởi mở, tập trung vào việc tìm lỗi của SẢN PHẨM để cải tiến chất lượng chứ không công kích con người tác giả."
      },
      {
        "id": "c",
        "text": "Bắt buộc tác giả phải đồng ý sửa tất cả mọi yêu cầu mà Reviewer nêu ra mà không được phản biện."
      },
      {
        "id": "d",
        "text": "Chỉ mời những người có cùng quan điểm tham gia."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Tạo bầu không khí tin cậy, cởi mở, tập trung vào việc tìm lỗi của SẢN PHẨM để cải tiến chất lượng chứ không công kích con người tác giả..\n\nThành công của Review phụ thuộc vào văn hóa không đổ lỗi (Blameless culture), coi khiếm khuyết là cơ hội nâng cao chất lượng sản phẩm."
  },
  {
    "id": "swt-c3-12",
    "subjectId": "swt",
    "chapterId": "swt-ch3",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Theo quy chuẩn FLM 2026, khi sử dụng AI để hỗ trợ Static Testing cho tài liệu yêu cầu (SRS), Tester cần lưu ý điều gì quan trọng nhất?",
    "options": [
      {
        "id": "a",
        "text": "Tin tưởng tuyệt đối vào mọi nhận định của AI vì AI không bao giờ mắc lỗi."
      },
      {
        "id": "b",
        "text": "AI có thể gặp hiện tượng 'ảo giác' (Hallucination) hoặc bịa đặt quy tắc không có thật, do đó Tester phải kiểm chứng lại bằng kiến thức nghiệp vụ thực tế."
      },
      {
        "id": "c",
        "text": "AI sẽ tự động ký biên bản bàn giao nghiệm thu thay cho khách hàng."
      },
      {
        "id": "d",
        "text": "AI chỉ hoạt động được khi chương trình đang chạy trên server."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: AI có thể gặp hiện tượng 'ảo giác' (Hallucination) hoặc bịa đặt quy tắc không có thật, do đó Tester phải kiểm chứng lại bằng kiến thức nghiệp vụ thực tế..\n\nAI là công cụ hỗ trợ rà soát mâu thuẫn rất tốt, nhưng Tester phải chịu trách nhiệm cuối cùng và luôn kiểm chứng để tránh bẫy ảo giác của mô hình ngôn ngữ."
  },
  {
    "id": "swt-c3-13",
    "subjectId": "swt",
    "chapterId": "swt-ch3",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Điều kiện vào (Entry Criteria) của một buổi Review chính thức thường bao gồm điều gì?",
    "options": [
      {
        "id": "a",
        "text": "Sản phẩm đã được người dùng chấm điểm 5 sao trên App Store."
      },
      {
        "id": "b",
        "text": "Tài liệu cần review đã hoàn chỉnh, đã được kiểm tra chính tả sơ bộ và các tài liệu tham chiếu liên quan đã sẵn sàng."
      },
      {
        "id": "c",
        "text": "Tất cả lập trình viên trong công ty đều có mặt đông đủ."
      },
      {
        "id": "d",
        "text": "Dự án đã tiêu hết 100% kinh phí."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Tài liệu cần review đã hoàn chỉnh, đã được kiểm tra chính tả sơ bộ và các tài liệu tham chiếu liên quan đã sẵn sàng..\n\nEntry Criteria của Review đảm bảo tài liệu đầu vào đủ chất lượng để không làm lãng phí thời gian của hội đồng đánh giá."
  },
  {
    "id": "swt-c3-14",
    "subjectId": "swt",
    "chapterId": "swt-ch3",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Điều kiện ra (Exit Criteria) của buổi Inspection được coi là thỏa mãn khi nào?",
    "options": [
      {
        "id": "a",
        "text": "Tất cả các lỗi nghiêm trọng đã được sửa chữa (Rework) và được Moderator xác nhận hoàn tất (Follow-up), các số liệu kiểm thử đạt chuẩn."
      },
      {
        "id": "b",
        "text": "Khi đồng hồ điểm đúng 12 giờ trưa."
      },
      {
        "id": "c",
        "text": "Khi tác giả hứa bằng miệng rằng sẽ sửa lỗi sau."
      },
      {
        "id": "d",
        "text": "Khi không còn ai muốn đặt câu hỏi nữa."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Tất cả các lỗi nghiêm trọng đã được sửa chữa (Rework) và được Moderator xác nhận hoàn tất (Follow-up), các số liệu kiểm thử đạt chuẩn..\n\nExit criteria của Inspection yêu cầu mọi khiếm khuyết phát hiện phải được theo dõi sửa chữa và có biên bản xác nhận đóng lỗi chính thức từ Moderator."
  },
  {
    "id": "swt-c3-15",
    "subjectId": "swt",
    "chapterId": "swt-ch3",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Sự khác biệt giữa Static Analysis và Dynamic Testing về việc tìm lỗi là gì?",
    "options": [
      {
        "id": "a",
        "text": "Static Analysis tìm thấy nguyên nhân trực tiếp (Defect) trong code; Dynamic Testing tìm thấy triệu chứng sai lệch (Failure) khi chạy."
      },
      {
        "id": "b",
        "text": "Static Analysis tìm Failure; Dynamic Testing tìm Defect."
      },
      {
        "id": "c",
        "text": "Cả hai phương pháp đều chỉ tìm thấy Error của con người."
      },
      {
        "id": "d",
        "text": "Static Analysis không bao giờ tìm được lỗi nào có ích."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Static Analysis tìm thấy nguyên nhân trực tiếp (Defect) trong code; Dynamic Testing tìm thấy triệu chứng sai lệch (Failure) khi chạy..\n\nStatic analysis soi trực tiếp vào cấu trúc văn bản/mã nguồn để chỉ ra Defect. Dynamic testing chạy thử nghiệm để quan sát xem có Failure nào xuất hiện hay không."
  },
  {
    "id": "swt-c4-01",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Một trường nhập liệu 'Điểm thi' chấp nhận các giá trị số nguyên từ 0 đến 10 (bao gồm cả 0 và 10). Nếu áp dụng kỹ thuật Phân tích giá trị biên 2 giá trị (2-value BVA theo ISTQB), tập giá trị nào sau đây là ĐÚNG ĐẮN NHẤT?",
    "options": [
      {
        "id": "a",
        "text": "0, 5, 10"
      },
      {
        "id": "b",
        "text": "-1, 0, 10, 11"
      },
      {
        "id": "c",
        "text": "-1, 0, 1, 9, 10, 11"
      },
      {
        "id": "d",
        "text": "0, 10"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: -1, 0, 10, 11.\n\n2-value BVA chọn giá trị tại biên và giá trị ngay bên ngoài biên. Biên dưới là 0 (valid) và -1 (invalid). Biên trên là 10 (valid) và 11 (invalid). Tập giá trị gồm: -1, 0, 10, 11."
  },
  {
    "id": "swt-c4-02",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Một hệ thống cho phép người dùng nhập tuổi từ 18 đến 60 tuổi để đăng ký lái xe. Theo kỹ thuật Phân vùng tương đương (Equivalence Partitioning), có bao nhiêu phân vùng (partitions) tối thiểu cần được xác định?",
    "options": [
      {
        "id": "a",
        "text": "1 phân vùng hợp lệ"
      },
      {
        "id": "b",
        "text": "2 phân vùng: 1 hợp lệ và 1 không hợp lệ"
      },
      {
        "id": "c",
        "text": "3 phân vùng: 1 phân vùng hợp lệ (18 đến 60) và 2 phân vùng không hợp lệ (< 18 và > 60)"
      },
      {
        "id": "d",
        "text": "60 phân vùng tương ứng với 60 độ tuổi"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Đáp án đúng là **C**: 3 phân vùng: 1 phân vùng hợp lệ (18 đến 60) và 2 phân vùng không hợp lệ (< 18 và > 60).\n\nMiền giá trị được chia thành 3 lớp: Lớp 1 (Invalid): tuổi < 18; Lớp 2 (Valid): 18 <= tuổi <= 60; Lớp 3 (Invalid): tuổi > 60."
  },
  {
    "id": "swt-c4-03",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Trong kỹ thuật Boundary Value Analysis 3 giá trị (3-value BVA), với khoảng giá trị hợp lệ nguyên $[10, 20]$, tập các giá trị kiểm thử tại biên dưới và biên trên sẽ là gì?",
    "options": [
      {
        "id": "a",
        "text": "10 và 20"
      },
      {
        "id": "b",
        "text": "9, 10 và 20, 21"
      },
      {
        "id": "c",
        "text": "9, 10, 11 (biên dưới) và 19, 20, 21 (biên trên)"
      },
      {
        "id": "d",
        "text": "0, 10, 20, 30"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Đáp án đúng là **C**: 9, 10, 11 (biên dưới) và 19, 20, 21 (biên trên).\n\n3-value BVA lấy 3 giá trị cho mỗi biên: giá trị ngay trước biên, tại biên, và ngay sau biên. Biên 10 lấy: 9, 10, 11. Biên 20 lấy: 19, 20, 21."
  },
  {
    "id": "swt-c4-04",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Một bảng quyết định (Decision Table) có 3 điều kiện nhị phân độc lập (chỉ nhận giá trị True hoặc False). Số lượng cột (Rules) tối đa của bảng quyết định này khi chưa rút gọn là bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "3 cột"
      },
      {
        "id": "b",
        "text": "6 cột"
      },
      {
        "id": "c",
        "text": "8 cột ($2^3$)"
      },
      {
        "id": "d",
        "text": "9 cột ($3^2$)"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Đáp án đúng là **C**: 8 cột ($2^3$).\n\nVới $N$ điều kiện nhị phân độc lập (True/False), số lượng quy tắc (Rules/Columns) đầy đủ là $2^N = 2^3 = 8$ quy tắc."
  },
  {
    "id": "swt-c4-05",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Khi nào thì kỹ thuật Kiểm thử bảng quyết định (Decision Table Testing) phát huy hiệu quả cao nhất?",
    "options": [
      {
        "id": "a",
        "text": "Khi kiểm tra tốc độ phản hồi của cơ sở dữ liệu."
      },
      {
        "id": "b",
        "text": "Khi hệ thống có sự kết hợp phức tạp của nhiều điều kiện logic và quy tắc nghiệp vụ dẫn đến các hành vi khác nhau."
      },
      {
        "id": "c",
        "text": "Khi kiểm tra khả năng tương thích của ứng dụng trên các trình duyệt khác nhau."
      },
      {
        "id": "d",
        "text": "Khi chỉ có một trường dữ liệu số nguyên duy nhất."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Khi hệ thống có sự kết hợp phức tạp của nhiều điều kiện logic và quy tắc nghiệp vụ dẫn đến các hành vi khác nhau..\n\nDecision Table cực kỳ hiệu quả để bao quát tất cả các tổ hợp logic điều kiện nghiệp vụ (Conditions $\\rightarrow$ Actions), tránh bỏ sót trường hợp hiếm gặp."
  },
  {
    "id": "swt-c4-06",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Xét đoạn mã sau:\n```java\nif (a > 10) {\n    x = x + 1;\n}\nprint(x);\n```\nĐể đạt 100% Statement Coverage (Độ phủ câu lệnh), số lượng ca kiểm thử (test cases) tối thiểu cần thực thi là bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "1 test case (với a = 15)"
      },
      {
        "id": "b",
        "text": "2 test cases (với a = 15 và a = 5)"
      },
      {
        "id": "c",
        "text": "3 test cases"
      },
      {
        "id": "d",
        "text": "Không thể xác định được"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: 1 test case (với a = 15).\n\nChỉ cần 1 test case với $a = 15$ để điều kiện \\`a > 10\\` là True, khi đó lệnh \\`x = x + 1\\` và \\`print(x)\\` đều được chạy $\\rightarrow$ Đạt 100% Statement Coverage."
  },
  {
    "id": "swt-c4-07",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Cũng với đoạn mã trên:\n```java\nif (a > 10) {\n    x = x + 1;\n}\nprint(x);\n```\nĐể đạt 100% Decision Coverage (Độ phủ quyết định / nhánh), số lượng test cases tối thiểu cần là bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "1 test case (với a = 15)"
      },
      {
        "id": "b",
        "text": "2 test cases (1 test với a = 15 làm nhánh True chạy, 1 test với a = 5 làm nhánh False chạy)"
      },
      {
        "id": "c",
        "text": "4 test cases"
      },
      {
        "id": "d",
        "text": "0 test case"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: 2 test cases (1 test với a = 15 làm nhánh True chạy, 1 test với a = 5 làm nhánh False chạy).\n\nCâu lệnh IF có 2 nhánh: True và False. Cần tối thiểu 2 test cases: 1 test làm điều kiện True ($a=15$) và 1 test làm điều kiện False ($a=5$) để phủ cả 2 nhánh."
  },
  {
    "id": "swt-c4-08",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Nhận định nào sau đây là ĐÚNG TUYỆT ĐỐI về mối quan hệ giữa Statement Coverage và Decision Coverage?",
    "options": [
      {
        "id": "a",
        "text": "100% Statement Coverage luôn đảm bảo 100% Decision Coverage."
      },
      {
        "id": "b",
        "text": "100% Decision Coverage luôn đảm bảo 100% Statement Coverage."
      },
      {
        "id": "c",
        "text": "Hai độ đo này hoàn toàn độc lập và không có mối liên hệ nào với nhau."
      },
      {
        "id": "d",
        "text": "Statement Coverage luôn mạnh hơn và khó đạt được hơn Decision Coverage."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: 100% Decision Coverage luôn đảm bảo 100% Statement Coverage..\n\nĐịnh lý chuẩn: Đạt 100% Decision Coverage luôn luôn đảm bảo đạt 100% Statement Coverage. Ngược lại, 100% Statement Coverage CHƯA CHẮC đạt 100% Decision Coverage (vì nhánh False không có lệnh vẫn bị bỏ sót)."
  },
  {
    "id": "swt-c4-09",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Một đồ thị luồng điều khiển (Control Flow Graph - CFG) có 9 cạnh ($E = 9$), 7 nút ($N = 7$) và 1 thành phần liên thông ($P = 1$). Độ phức tạp Cyclomatic $V(G)$ tính theo công thức McCabe là bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "$V(G) = 9 - 7 + 2(1) = 4$"
      },
      {
        "id": "b",
        "text": "$V(G) = 9 + 7 - 2 = 14$"
      },
      {
        "id": "c",
        "text": "$V(G) = 9 - 7 = 2$"
      },
      {
        "id": "d",
        "text": "$V(G) = 7 - 9 + 2 = 0$"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: $V(G) = 9 - 7 + 2(1) = 4$.\n\nCông thức McCabe: $V(G) = E - N + 2P = 9 - 7 + 2(1) = 4$."
  },
  {
    "id": "swt-c4-10",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Nếu một hàm mã nguồn không chứa bất kỳ câu lệnh rẽ nhánh hay vòng lặp nào (chỉ là các câu lệnh gán tuần tự từ trên xuống dưới), độ phức tạp Cyclomatic $V(G)$ của hàm đó bằng bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "0"
      },
      {
        "id": "b",
        "text": "1"
      },
      {
        "id": "c",
        "text": "2"
      },
      {
        "id": "d",
        "text": "Vô cùng"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: 1.\n\nMột đoạn code tuần tự không có rẽ nhánh có 1 đường đi độc lập duy nhất $\\rightarrow V(G) = P_{\\text{decision}} + 1 = 0 + 1 = 1$."
  },
  {
    "id": "swt-c4-11",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kỹ thuật kiểm thử chuyển trạng thái (State Transition Testing) phù hợp nhất với loại hệ thống nào sau đây?",
    "options": [
      {
        "id": "a",
        "text": "Một hệ thống chỉ thực hiện phép tính cộng trừ hai số tĩnh."
      },
      {
        "id": "b",
        "text": "Một hệ thống có các trạng thái khác nhau phụ thuộc vào lịch sử sự kiện xảy ra trước đó (như máy rút tiền ATM, quy trình đặt hàng, máy bán hàng tự động)."
      },
      {
        "id": "c",
        "text": "Một trang web tĩnh chỉ hiển thị thông tin bài viết tin tức."
      },
      {
        "id": "d",
        "text": "Một chương trình tính toán số thực dấu phẩy động."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Một hệ thống có các trạng thái khác nhau phụ thuộc vào lịch sử sự kiện xảy ra trước đó (như máy rút tiền ATM, quy trình đặt hàng, máy bán hàng tự động)..\n\nState Transition Testing được áp dụng khi hành vi của hệ thống thay đổi dựa trên trạng thái hiện tại và các sự kiện kích hoạt (Events $\\rightarrow$ Transitions $\\rightarrow$ Actions)."
  },
  {
    "id": "swt-c4-12",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Trong kiểm thử chuyển trạng thái, độ phủ '0-switch coverage' (hay 1-hop coverage) có nghĩa là gì?",
    "options": [
      {
        "id": "a",
        "text": "Kiểm thử không có sự kiện nào xảy ra."
      },
      {
        "id": "b",
        "text": "Kiểm tra tất cả các chuyển đổi trạng thái đơn lẻ (mọi mũi tên đơn giữa hai trạng thái trong sơ đồ)."
      },
      {
        "id": "c",
        "text": "Kiểm tra tất cả các chuỗi gồm 2 chuyển đổi liên tiếp nhau."
      },
      {
        "id": "d",
        "text": "Kiểm tra việc chuyển trạng thái bị lỗi."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Kiểm tra tất cả các chuyển đổi trạng thái đơn lẻ (mọi mũi tên đơn giữa hai trạng thái trong sơ đồ)..\n\n0-switch coverage (1-hop) đòi hỏi mỗi chuyển đổi hợp lệ đơn lẻ giữa trạng thái $S_i \\rightarrow S_j$ phải được thực thi ít nhất một lần."
  },
  {
    "id": "swt-c4-13",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Kỹ thuật 'Error Guessing' (Đoán lỗi) dựa trên yếu tố cốt lõi nào của người kiểm thử?",
    "options": [
      {
        "id": "a",
        "text": "Dựa hoàn toàn vào các công thức toán học ma trận."
      },
      {
        "id": "b",
        "text": "Dựa trên kiến thức, kinh nghiệm quá khứ, trực giác và sự hiểu biết về các lỗi lập trình viên thường mắc phải."
      },
      {
        "id": "c",
        "text": "Dựa trên việc chọn ngẫu nhiên các ký tự trên bàn phím."
      },
      {
        "id": "d",
        "text": "Dựa trên mã nguồn do AI tự động viết."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Dựa trên kiến thức, kinh nghiệm quá khứ, trực giác và sự hiểu biết về các lỗi lập trình viên thường mắc phải..\n\nError Guessing là kỹ thuật dựa trên kinh nghiệm (Experience-based), nơi Tester dự đoán các lỗi tiềm ẩn dựa trên kinh nghiệm thực tế về các bẫy code thường gặp."
  },
  {
    "id": "swt-c4-14",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kỹ thuật 'Exploratory Testing' (Kiểm thử thăm dò) được định nghĩa chuẩn là gì?",
    "options": [
      {
        "id": "a",
        "text": "Việc kiểm thử hoàn toàn không có mục tiêu, ai thích bấm gì thì bấm."
      },
      {
        "id": "b",
        "text": "Một phương pháp kiểm thử thực hành nơi việc học hỏi, thiết kế bài kiểm thử và thực thi bài kiểm thử diễn ra đồng thời (concurrently)."
      },
      {
        "id": "c",
        "text": "Việc cho phép robot tự động đi khắp phòng máy chủ."
      },
      {
        "id": "d",
        "text": "Kiểm thử chỉ dựa trên việc dịch ngược mã nguồn."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Một phương pháp kiểm thử thực hành nơi việc học hỏi, thiết kế bài kiểm thử và thực thi bài kiểm thử diễn ra đồng thời (concurrently)..\n\nExploratory Testing kết hợp đồng thời việc tìm hiểu hệ thống, thiết kế test case trong đầu và thực thi ngay lập tức, thường được dẫn dắt bởi một bản Test Charter trong khung thời gian cố định (Time-box)."
  },
  {
    "id": "swt-c4-15",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Kiểm thử dựa trên Use Case (Use Case Testing) giúp ích nhiều nhất cho việc kiểm tra khía cạnh nào của phần mềm?",
    "options": [
      {
        "id": "a",
        "text": "Kiểm tra rò rỉ bộ nhớ ở mức hàm."
      },
      {
        "id": "b",
        "text": "Kiểm tra các luồng tương tác thực tế giữa người dùng (Actor) và hệ thống, bao gồm cả luồng chính (Main flow) và các luồng thay thế/ngoại lệ (Alternative/Exception flows)."
      },
      {
        "id": "c",
        "text": "Đo lường độ phủ câu lệnh của mã nguồn."
      },
      {
        "id": "d",
        "text": "Kiểm tra độ bền cơ học của bàn phím máy tính."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Kiểm tra các luồng tương tác thực tế giữa người dùng (Actor) và hệ thống, bao gồm cả luồng chính (Main flow) và các luồng thay thế/ngoại lệ (Alternative/Exception flows)..\n\nUse Case Testing mô phỏng các kịch bản sử dụng thực tế của Actor để đảm bảo phần mềm hoàn thành đúng mục tiêu nghiệp vụ từ đầu đến cuối."
  },
  {
    "id": "swt-c4-16",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Trong một bảng quyết định, nếu một điều kiện không làm ảnh hưởng đến kết quả đầu ra (dù True hay False thì Action vẫn như nhau), ký hiệu nào thường được dùng để rút gọn cột đó?",
    "options": [
      {
        "id": "a",
        "text": "Ký hiệu 'X'"
      },
      {
        "id": "b",
        "text": "Ký hiệu '-' (Don't care)"
      },
      {
        "id": "c",
        "text": "Ký hiệu '?'"
      },
      {
        "id": "d",
        "text": "Ký hiệu '! '"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Ký hiệu '-' (Don't care).\n\nKý hiệu \\`-\\` (hoặc Don't care / N/A) cho biết điều kiện đó không ảnh hưởng tới kết quả, giúp gộp các cột trùng lặp lại để tối giản số lượng test case."
  },
  {
    "id": "swt-c4-17",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Một bài toán yêu cầu mật khẩu phải có độ dài từ 6 đến 12 ký tự. Phân tích giá trị biên 2 giá trị sẽ cho các giá trị độ dài nào cần test?",
    "options": [
      {
        "id": "a",
        "text": "6 và 12"
      },
      {
        "id": "b",
        "text": "5, 6, 12, 13"
      },
      {
        "id": "c",
        "text": "5, 6, 7, 11, 12, 13"
      },
      {
        "id": "d",
        "text": "0, 6, 12, 100"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: 5, 6, 12, 13.\n\nKhoảng hợp lệ là $[6, 12]$. Biên dưới: 6 (hợp lệ) và 5 (không hợp lệ). Biên trên: 12 (hợp lệ) và 13 (không hợp lệ). Tổng cộng 4 giá trị độ dài: 5, 6, 12, 13."
  },
  {
    "id": "swt-c4-18",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Một biểu đồ CFG có 4 nút quyết định nhị phân (Predicate nodes: ví dụ 4 câu lệnh \\`if\\`). Độ phức tạp Cyclomatic $V(G)$ theo công thức số nút rẽ nhánh là bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "$V(G) = 4 + 1 = 5$"
      },
      {
        "id": "b",
        "text": "$V(G) = 4 \\times 2 = 8$"
      },
      {
        "id": "c",
        "text": "$V(G) = 4 - 1 = 3$"
      },
      {
        "id": "d",
        "text": "$V(G) = 4$"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: $V(G) = 4 + 1 = 5$.\n\nCông thức tính nhanh độ phức tạp Cyclomatic từ số nút rẽ nhánh nhị phân: $V(G) = P + 1 = 4 + 1 = 5$."
  },
  {
    "id": "swt-c4-19",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Kỹ thuật Checklist-based Testing thuộc nhóm kỹ thuật nào?",
    "options": [
      {
        "id": "a",
        "text": "Black-box testing"
      },
      {
        "id": "b",
        "text": "White-box testing"
      },
      {
        "id": "c",
        "text": "Experience-based testing"
      },
      {
        "id": "d",
        "text": "Automated stress testing"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Đáp án đúng là **C**: Experience-based testing.\n\nChecklist-based testing là một kỹ thuật dựa trên kinh nghiệm, trong đó Tester sử dụng danh sách kiểm tra (Checklist) đúc kết từ kinh nghiệm quá khứ để định hướng việc test."
  },
  {
    "id": "swt-c4-20",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Khi lựa chọn kỹ thuật thiết kế bài kiểm thử, yếu tố nào sau đây CẦN ĐƯỢC CÂN NHẮC?",
    "options": [
      {
        "id": "a",
        "text": "Mức độ rủi ro của hệ thống, loại tài liệu đặc tả sẵn có, tiêu chuẩn ngành, kỹ năng của Tester và thời gian cho phép."
      },
      {
        "id": "b",
        "text": "Chỉ duy nhất sở thích cá nhân của lập trình viên."
      },
      {
        "id": "c",
        "text": "Màu sắc màn hình máy tính của khách hàng."
      },
      {
        "id": "d",
        "text": "Vị trí địa lý của máy chủ lưu trữ."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Mức độ rủi ro của hệ thống, loại tài liệu đặc tả sẵn có, tiêu chuẩn ngành, kỹ năng của Tester và thời gian cho phép..\n\nViệc chọn kỹ thuật test phụ thuộc vào rủi ro, thời gian, chi phí, loại hệ thống (tài chính, nhúng, web) và loại tài liệu đặc tả có sẵn."
  },
  {
    "id": "swt-c5-01",
    "subjectId": "swt",
    "chapterId": "swt-ch5",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Cấp độ độc lập nào sau đây trong kiểm thử phần mềm được đánh giá là mang lại tính khách quan CAO NHẤT?",
    "options": [
      {
        "id": "a",
        "text": "Lập trình viên tự kiểm thử mã nguồn của chính mình."
      },
      {
        "id": "b",
        "text": "Lập trình viên trong cùng nhóm kiểm thử chéo cho nhau."
      },
      {
        "id": "c",
        "text": "Nhóm kiểm thử độc lập nội bộ thuộc công ty."
      },
      {
        "id": "d",
        "text": "Chuyên gia kiểm thử độc lập thuộc tổ chức bên thứ ba (Outsourced / External 3rd Party)."
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Đáp án đúng là **D**: Chuyên gia kiểm thử độc lập thuộc tổ chức bên thứ ba (Outsourced / External 3rd Party)..\n\nCấp độ độc lập cao nhất theo ISTQB là kiểm thử viên hoặc tổ chức kiểm thử độc lập hoàn toàn bên ngoài dự án, loại bỏ triệt để thiên kiến xác nhận."
  },
  {
    "id": "swt-c5-02",
    "subjectId": "swt",
    "chapterId": "swt-ch5",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Nhiệm vụ nào sau đây thuộc về trách nhiệm điển hình của một TEST MANAGER (Test Lead), chứ không phải của Tester?",
    "options": [
      {
        "id": "a",
        "text": "Phân tích tài liệu yêu cầu để thiết kế các kịch bản kiểm thử chi tiết."
      },
      {
        "id": "b",
        "text": "Lập kế hoạch kiểm thử (Test Plan), ước lượng nguồn lực, lựa chọn công cụ và viết Báo cáo tổng kết kiểm thử (Test Summary Report)."
      },
      {
        "id": "c",
        "text": "Thực thi các ca kiểm thử thủ công và chụp ảnh màn hình báo cáo lỗi."
      },
      {
        "id": "d",
        "text": "Cài đặt và thiết lập dữ liệu kiểm thử cụ thể cho từng test case."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Lập kế hoạch kiểm thử (Test Plan), ước lượng nguồn lực, lựa chọn công cụ và viết Báo cáo tổng kết kiểm thử (Test Summary Report)..\n\nTest Manager quản lý ở mức chiến lược: Test Plan, Estimation, Resource allocation, Risk analysis, Metrics monitoring và Summary Report. Tester phụ trách phân tích, thiết kế và chạy test case."
  },
  {
    "id": "swt-c5-03",
    "subjectId": "swt",
    "chapterId": "swt-ch5",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Sự khác biệt cốt lõi giữa 'Product Risk' và 'Project Risk' là gì?",
    "options": [
      {
        "id": "a",
        "text": "Product Risk liên quan đến khả năng phần mềm không đáp ứng chất lượng hoặc gây thiệt hại khi vận hành; Project Risk liên quan đến các yếu tố quản lý dự án như chậm tiến độ, thiếu hụt nhân sự, vượt ngân sách."
      },
      {
        "id": "b",
        "text": "Product Risk do khách hàng chịu; Project Risk do Tester chịu."
      },
      {
        "id": "c",
        "text": "Product Risk chỉ xảy ra khi code; Project Risk chỉ xảy ra khi test."
      },
      {
        "id": "d",
        "text": "Hai khái niệm này hoàn toàn đồng nghĩa."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Product Risk liên quan đến khả năng phần mềm không đáp ứng chất lượng hoặc gây thiệt hại khi vận hành; Project Risk liên quan đến các yếu tố quản lý dự án như chậm tiến độ, thiếu hụt nhân sự, vượt ngân sách..\n\nProduct Risk (Rủi ro chất lượng sản phẩm): bug, sập app, bảo mật kém. Project Risk (Rủi ro quản lý dự án): thiếu kinh phí, nhân sự nghỉ việc, trễ hạn bàn giao."
  },
  {
    "id": "swt-c5-04",
    "subjectId": "swt",
    "chapterId": "swt-ch5",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Mức độ rủi ro (Risk Level) thường được định lượng thông qua công thức nào?",
    "options": [
      {
        "id": "a",
        "text": "$\\text{Risk Level} = \\text{Likelihood (Xác suất xảy ra)} \\times \\text{Impact (Mức độ tổn thất)}$"
      },
      {
        "id": "b",
        "text": "$\\text{Risk Level} = \\text{Số lượng bug} + \\text{Số lượng Tester}$"
      },
      {
        "id": "c",
        "text": "$\\text{Risk Level} = \\text{Chi phí dự án} / \\text{Thời gian phát triển}$"
      },
      {
        "id": "d",
        "text": "$\\text{Risk Level} = \\text{Số dòng code} \\times 2$"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: $\\text{Risk Level} = \\text{Likelihood (Xác suất xảy ra)} \\times \\text{Impact (Mức độ tổn thất)}$.\n\nRủi ro được tính bằng ma trận: Khả năng xảy ra rủi ro (Likelihood/Probability) nhân với Mức độ ảnh hưởng/tổn thất nếu rủi ro đó xảy ra (Impact/Consequence)."
  },
  {
    "id": "swt-c5-05",
    "subjectId": "swt",
    "chapterId": "swt-ch5",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Trong phương pháp Kiểm thử dựa trên rủi ro (Risk-Based Testing), khu vực nào của hệ thống sẽ được ưu tiên kiểm thử trước tiên và kỹ lưỡng nhất?",
    "options": [
      {
        "id": "a",
        "text": "Khu vực có rủi ro cao nhất (Likelihood cao và Impact nghiêm trọng)."
      },
      {
        "id": "b",
        "text": "Khu vực dễ viết kịch bản kiểm thử nhất."
      },
      {
        "id": "c",
        "text": "Khu vực mà lập trình viên tự tin nhất."
      },
      {
        "id": "d",
        "text": "Khu vực có ít người dùng sử dụng nhất."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Khu vực có rủi ro cao nhất (Likelihood cao và Impact nghiêm trọng)..\n\nRisk-Based Testing tập trung nguồn lực kiểm thử vào các vùng có mức độ rủi ro cao nhất để giảm thiểu tối đa tổn thất tiềm tàng cho tổ chức."
  },
  {
    "id": "swt-c5-06",
    "subjectId": "swt",
    "chapterId": "swt-ch5",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Một khiếm khuyết khiến nút 'Hủy tài khoản' bị lỗi chính tả nhỏ nhưng mọi chức năng khác vẫn hoạt động hoàn hảo. Khiếm khuyết này có mức độ Severity và Priority như thế nào?",
    "options": [
      {
        "id": "a",
        "text": "High Severity, High Priority"
      },
      {
        "id": "b",
        "text": "Low Severity, Low Priority (hoặc Medium Priority tùy yêu cầu thương hiệu)"
      },
      {
        "id": "c",
        "text": "Critical Severity, Low Priority"
      },
      {
        "id": "d",
        "text": "High Severity, Low Priority"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Low Severity, Low Priority (hoặc Medium Priority tùy yêu cầu thương hiệu).\n\nLỗi chính tả không làm sập hệ thống hay mất dữ liệu $\\rightarrow$ Severity thấp (Low). Mức độ khẩn cấp sửa chữa cũng không quá gấp $\\rightarrow$ Priority thấp."
  },
  {
    "id": "swt-c5-07",
    "subjectId": "swt",
    "chapterId": "swt-ch5",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Một lỗi làm phần mềm kế toán bị treo cứng khi chạy trên hệ điều hành Windows 98 cổ điển (hiện tại 99.9% khách hàng dùng Windows 11). Con bug này có đặc tính gì?",
    "options": [
      {
        "id": "a",
        "text": "High Severity nhưng Low Priority"
      },
      {
        "id": "b",
        "text": "Low Severity nhưng High Priority"
      },
      {
        "id": "c",
        "text": "Critical Severity và High Priority"
      },
      {
        "id": "d",
        "text": "Low Severity và Low Priority"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: High Severity nhưng Low Priority.\n\nTreo cứng hệ thống là lỗi kỹ thuật rất nặng (High/Critical Severity), nhưng môi trường Windows 98 gần như không còn ai dùng trong thực tế nên mức độ khẩn cấp sửa chữa rất thấp (Low Priority)."
  },
  {
    "id": "swt-c5-08",
    "subjectId": "swt",
    "chapterId": "swt-ch5",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Trạng thái nào trong vòng đời của Defect (Defect Lifecycle) cho biết con bug đã được lập trình viên sửa xong và đang chờ Tester kiểm tra lại?",
    "options": [
      {
        "id": "a",
        "text": "New"
      },
      {
        "id": "b",
        "text": "Assigned"
      },
      {
        "id": "c",
        "text": "Fixed / Pending Retest"
      },
      {
        "id": "d",
        "text": "Closed"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Đáp án đúng là **C**: Fixed / Pending Retest.\n\nFixed (hoặc Pending Retest) là trạng thái sau khi Developer hoàn thành việc sửa code và bàn giao lại cho Tester thực hiện Confirmation Testing."
  },
  {
    "id": "swt-c5-09",
    "subjectId": "swt",
    "chapterId": "swt-ch5",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Nếu Tester chạy lại test case kiểm tra con bug ở trạng thái 'Fixed' nhưng nhận thấy lỗi vẫn tiếp tục xảy ra, Tester sẽ chuyển trạng thái của bug sang gì?",
    "options": [
      {
        "id": "a",
        "text": "Closed"
      },
      {
        "id": "b",
        "text": "Deferred"
      },
      {
        "id": "c",
        "text": "Reopened"
      },
      {
        "id": "d",
        "text": "Rejected"
      }
    ],
    "correctOptionIds": [
      "c"
    ],
    "explanation": "Đáp án đúng là **C**: Reopened.\n\nKhi Re-testing thất bại và lỗi vẫn còn tái diễn, Tester sẽ mở lại con bug (Reopen) kèm theo log/video bằng chứng mới."
  },
  {
    "id": "swt-c5-10",
    "subjectId": "swt",
    "chapterId": "swt-ch5",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Tài liệu Kế hoạch kiểm thử (Test Plan) theo chuẩn IEEE 829 bao gồm nội dung nào sau đây?",
    "options": [
      {
        "id": "a",
        "text": "Mã nguồn hoàn chỉnh của toàn bộ phần mềm."
      },
      {
        "id": "b",
        "text": "Phạm vi kiểm thử (In scope / Out of scope), phương pháp tiếp cận, nguồn lực, lịch trình, môi trường kiểm thử và tiêu chí dừng."
      },
      {
        "id": "c",
        "text": "Bảng lương chi tiết của giám đốc dự án."
      },
      {
        "id": "d",
        "text": "Mật khẩu tài khoản ngân hàng của khách hàng."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Phạm vi kiểm thử (In scope / Out of scope), phương pháp tiếp cận, nguồn lực, lịch trình, môi trường kiểm thử và tiêu chí dừng..\n\nTest Plan chuẩn IEEE 829 định nghĩa toàn bộ chiến lược, phạm vi, tài nguyên, lịch trình, môi trường, rủi ro và các mốc bàn giao của hoạt động kiểm thử."
  },
  {
    "id": "swt-c5-11",
    "subjectId": "swt",
    "chapterId": "swt-ch5",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Sự khác biệt giữa hai kỹ thuật ước lượng kiểm thử: 'Metrics-based' và 'Expert-based' là gì?",
    "options": [
      {
        "id": "a",
        "text": "Metrics-based dựa trên dữ liệu định lượng thu thập từ các dự án tương tự trước đây; Expert-based dựa trên kinh nghiệm và phán đoán của các chuyên gia."
      },
      {
        "id": "b",
        "text": "Metrics-based do máy tự làm; Expert-based do khách hàng ước lượng."
      },
      {
        "id": "c",
        "text": "Metrics-based chỉ áp dụng cho kiểm thử tự động; Expert-based chỉ áp dụng cho kiểm thử thủ công."
      },
      {
        "id": "d",
        "text": "Hai kỹ thuật này là một."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Metrics-based dựa trên dữ liệu định lượng thu thập từ các dự án tương tự trước đây; Expert-based dựa trên kinh nghiệm và phán đoán của các chuyên gia..\n\nMetrics-based phân tích số liệu lịch sử (defect density, test run rate); Expert-based tham khảo ý kiến chuyên gia (Planning Poker, Delphi technique)."
  },
  {
    "id": "swt-c5-12",
    "subjectId": "swt",
    "chapterId": "swt-ch5",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Mục tiêu chính của việc Quản lý cấu hình (Configuration Management) trong kiểm thử là gì?",
    "options": [
      {
        "id": "a",
        "text": "Theo dõi giờ giấc làm việc của nhân viên."
      },
      {
        "id": "b",
        "text": "Đảm bảo rằng tất cả các mục testware (tài liệu test, kịch bản test, code phiên bản test, môi trường) được định danh rõ ràng, kiểm soát phiên bản và có thể truy vết xuyên suốt."
      },
      {
        "id": "c",
        "text": "Tự động tăng lương cho kiểm thử viên."
      },
      {
        "id": "d",
        "text": "Cấm lập trình viên thay đổi máy tính làm việc."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Đảm bảo rằng tất cả các mục testware (tài liệu test, kịch bản test, code phiên bản test, môi trường) được định danh rõ ràng, kiểm soát phiên bản và có thể truy vết xuyên suốt..\n\nConfiguration Management đảm bảo tính toàn vẹn: biết chính xác test case phiên bản nào đang chạy trên bản build code nào và môi trường cấu hình ra sao."
  },
  {
    "id": "swt-c5-13",
    "subjectId": "swt",
    "chapterId": "swt-ch5",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Báo cáo tóm tắt kiểm thử (Test Summary Report) do ai viết và nhằm mục đích gì?",
    "options": [
      {
        "id": "a",
        "text": "Do Lập trình viên viết để khen ngợi năng lực của bản thân."
      },
      {
        "id": "b",
        "text": "Do Test Manager viết để tổng kết các hoạt động kiểm thử, đánh giá mức độ đạt được so với Exit Criteria và cung cấp căn cứ để ban lãnh đạo quyết định phát hành sản phẩm."
      },
      {
        "id": "c",
        "text": "Do Khách hàng viết để khiếu nại công ty phần mềm."
      },
      {
        "id": "d",
        "text": "Do Nhân viên nhân sự viết để tuyển thêm người."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Do Test Manager viết để tổng kết các hoạt động kiểm thử, đánh giá mức độ đạt được so với Exit Criteria và cung cấp căn cứ để ban lãnh đạo quyết định phát hành sản phẩm..\n\nTest Summary Report là báo cáo chính thức kết thúc đợt test, đánh giá chất lượng sản phẩm so với tiêu chí dừng để hỗ trợ quyết định Go/No-Go."
  },
  {
    "id": "swt-c5-14",
    "subjectId": "swt",
    "chapterId": "swt-ch5",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Chỉ số 'Defect Density' (Mật độ lỗi) thường được tính bằng công thức nào?",
    "options": [
      {
        "id": "a",
        "text": "Tổng số lỗi chia cho tổng số Tester."
      },
      {
        "id": "b",
        "text": "Số lượng lỗi phát hiện được chia cho quy mô của sản phẩm (ví dụ: số lỗi trên 1,000 dòng mã nguồn - KLOC hoặc trên số Function Points)."
      },
      {
        "id": "c",
        "text": "Số giờ làm việc chia cho số bug."
      },
      {
        "id": "d",
        "text": "Tổng số test case chia cho số ngày làm việc."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Số lượng lỗi phát hiện được chia cho quy mô của sản phẩm (ví dụ: số lỗi trên 1,000 dòng mã nguồn - KLOC hoặc trên số Function Points)..\n\nDefect Density = Số defect / Quy mô phần mềm (KLOC / Function Points / User Stories), giúp so sánh chất lượng giữa các module."
  },
  {
    "id": "swt-c5-15",
    "subjectId": "swt",
    "chapterId": "swt-ch5",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Khi một con bug được gán trạng thái 'Deferred', điều đó có nghĩa là gì?",
    "options": [
      {
        "id": "a",
        "text": "Bug đó bị từ chối vĩnh viễn vì không phải lỗi."
      },
      {
        "id": "b",
        "text": "Bug được xác nhận là có thật nhưng việc sửa chữa được hoãn lại sang các phiên bản hoặc bản phát hành tiếp theo."
      },
      {
        "id": "c",
        "text": "Bug đã được sửa chữa thành công."
      },
      {
        "id": "d",
        "text": "Bug tự động biến mất khỏi hệ thống."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Bug được xác nhận là có thật nhưng việc sửa chữa được hoãn lại sang các phiên bản hoặc bản phát hành tiếp theo..\n\nDeferred nghĩa là lỗi được hoãn sửa (do mức độ ưu tiên thấp hoặc thời gian release quá gấp) để dời sang sprint/release sau."
  },
  {
    "id": "swt-c6-01",
    "subjectId": "swt",
    "chapterId": "swt-ch6",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Công cụ nào sau đây được phân loại là Công cụ Kiểm thử Tĩnh (Static Testing Tool)?",
    "options": [
      {
        "id": "a",
        "text": "Selenium WebDriver"
      },
      {
        "id": "b",
        "text": "SonarQube / Checkstyle"
      },
      {
        "id": "c",
        "text": "Apache JMeter"
      },
      {
        "id": "d",
        "text": "Postman"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: SonarQube / Checkstyle.\n\nSonarQube, Checkstyle, ESLint phân tích mã nguồn tĩnh mà không cần chạy code $\\rightarrow$ Static Testing Tool. Selenium, JMeter, Postman là Dynamic Tools."
  },
  {
    "id": "swt-c6-02",
    "subjectId": "swt",
    "chapterId": "swt-ch6",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Lợi ích tiềm năng lớn nhất của việc áp dụng Công cụ Thực thi Kiểm thử Tự động (Test Execution Tools) là gì?",
    "options": [
      {
        "id": "a",
        "text": "Loại bỏ hoàn toàn vai trò của con người trong toàn bộ dự án."
      },
      {
        "id": "b",
        "text": "Giảm đáng kể thời gian và công sức khi thực hiện các bài kiểm thử hồi quy lặp đi lặp lại nhiều lần với độ chính xác cao."
      },
      {
        "id": "c",
        "text": "Tự động tìm ra tất cả các lỗi logic nghiệp vụ mà không cần viết kịch bản."
      },
      {
        "id": "d",
        "text": "Đảm bảo phần mềm bán được giá cao hơn."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Giảm đáng kể thời gian và công sức khi thực hiện các bài kiểm thử hồi quy lặp đi lặp lại nhiều lần với độ chính xác cao..\n\nTự động hóa giúp chạy lại các kịch bản hồi quy lặp đi lặp lại cực nhanh, ổn định, không bị mệt mỏi, giải phóng sức lao động của Tester."
  },
  {
    "id": "swt-c6-03",
    "subjectId": "swt",
    "chapterId": "swt-ch6",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Rủi ro nào sau đây là rủi ro PHỔ BIẾN NHẤT khi một tổ chức triển khai kiểm thử tự động?",
    "options": [
      {
        "id": "a",
        "text": "Chi phí bảo trì kịch bản kiểm thử (Test script maintenance) tăng vọt khi giao diện phần mềm liên tục thay đổi."
      },
      {
        "id": "b",
        "text": "Kỳ vọng phi thực tế rằng công cụ tự động có thể thay thế hoàn toàn tư duy của kiểm thử viên."
      },
      {
        "id": "c",
        "text": "Đánh giá thấp thời gian và công sức ban đầu cần có để xây dựng framework kiểm thử."
      },
      {
        "id": "d",
        "text": "Tất cả các rủi ro trên đều đúng."
      }
    ],
    "correctOptionIds": [
      "d"
    ],
    "explanation": "Đáp án đúng là **D**: Tất cả các rủi ro trên đều đúng..\n\nCả 3 phương án đều là những cạm bẫy kinh điển: bảo trì script tốn kém khi UI đổi, kỳ vọng hão huyền và đánh giá thấp chi phí ban đầu."
  },
  {
    "id": "swt-c6-04",
    "subjectId": "swt",
    "chapterId": "swt-ch6",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Mục tiêu quan trọng nhất của việc thực hiện một 'Dự án thí điểm' (Pilot Project) khi đưa công cụ mới vào tổ chức là gì?",
    "options": [
      {
        "id": "a",
        "text": "Chạy kiểm thử cho toàn bộ 100% các dự án của công ty ngay lập tức."
      },
      {
        "id": "b",
        "text": "Tìm hiểu chi tiết về công cụ, đánh giá tính tương thích với quy trình hiện tại, thiết lập tiêu chuẩn đặt tên/viết script và ước lượng lợi ích/chi phí thực tế (ROI)."
      },
      {
        "id": "c",
        "text": "Tiêu hết ngân sách trước khi hết năm tài chính."
      },
      {
        "id": "d",
        "text": "Thay thế toàn bộ đội ngũ kiểm thử viên thủ công bằng phần mềm."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Tìm hiểu chi tiết về công cụ, đánh giá tính tương thích với quy trình hiện tại, thiết lập tiêu chuẩn đặt tên/viết script và ước lượng lợi ích/chi phí thực tế (ROI)..\n\nPilot project giúp thử nghiệm trên phạm vi nhỏ để học hỏi, chuẩn hóa quy trình và đo lường ROI trước khi quyết định đầu tư mở rộng (Roll-out)."
  },
  {
    "id": "swt-c6-05",
    "subjectId": "swt",
    "chapterId": "swt-ch6",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Công cụ nào sau đây được xếp vào nhóm Công cụ Giám sát và Kiểm thử Hiệu năng (Performance / Monitoring Tools)?",
    "options": [
      {
        "id": "a",
        "text": "Apache JMeter"
      },
      {
        "id": "b",
        "text": "Jira Software"
      },
      {
        "id": "c",
        "text": "GitLab Repository"
      },
      {
        "id": "d",
        "text": "Bugzilla"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Apache JMeter.\n\nJMeter, LoadRunner, K6, Gatling là các công cụ chuyên dụng để tạo tải ảo và đo lường hiệu năng của hệ thống."
  },
  {
    "id": "swt-c6-06",
    "subjectId": "swt",
    "chapterId": "swt-ch6",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Nhận định nào sau đây là ĐÚNG về việc áp dụng công cụ kiểm thử tự động?",
    "options": [
      {
        "id": "a",
        "text": "Bất kỳ kịch bản kiểm thử nào cũng nên được tự động hóa."
      },
      {
        "id": "b",
        "text": "Chỉ nên tự động hóa các kịch bản kiểm thử ổn định, có tính lặp lại cao (như Regression Tests, Smoke Tests); các tính năng đang thay đổi liên tục hoặc test Usability nên làm thủ công."
      },
      {
        "id": "c",
        "text": "Tự động hóa kiểm thử luôn rẻ hơn kiểm thử thủ công trong mọi trường hợp."
      },
      {
        "id": "d",
        "text": "Kiểm thử tự động không bao giờ gặp lỗi."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Chỉ nên tự động hóa các kịch bản kiểm thử ổn định, có tính lặp lại cao (như Regression Tests, Smoke Tests); các tính năng đang thay đổi liên tục hoặc test Usability nên làm thủ công..\n\nKhông phải cái gì cũng nên tự động hóa. Chỉ tự động hóa những test case ổn định, lặp lại nhiều lần. Các tính năng biến động liên tục nếu tự động hóa sẽ tốn chi phí bảo trì khổng lồ."
  },
  {
    "id": "swt-c6-07",
    "subjectId": "swt",
    "chapterId": "swt-ch6",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Một công cụ 'Test Harness' thường được hiểu là gì trong kiểm thử đơn vị và tích hợp?",
    "options": [
      {
        "id": "a",
        "text": "Một thiết bị phần cứng để đo nhiệt độ CPU."
      },
      {
        "id": "b",
        "text": "Môi trường kiểm thử bao gồm các thư viện, Stubs, Drivers và công cụ giả lập cần thiết để thực thi các bài test đơn vị hoặc tích hợp."
      },
      {
        "id": "c",
        "text": "Phần mềm diệt virus trên máy tính kiểm thử."
      },
      {
        "id": "d",
        "text": "Hệ thống camera giám sát phòng thi."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Môi trường kiểm thử bao gồm các thư viện, Stubs, Drivers và công cụ giả lập cần thiết để thực thi các bài test đơn vị hoặc tích hợp..\n\nTest Harness cung cấp khung sườn (Drivers, Stubs, Test execution framework) để cô lập và chạy kiểm thử cho các module."
  },
  {
    "id": "swt-c6-08",
    "subjectId": "swt",
    "chapterId": "swt-ch6",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Khi lựa chọn một công cụ kiểm thử cho dự án, tiêu chí nào sau đây KHÔNG PHẢI là yếu tố ưu tiên kỹ thuật?",
    "options": [
      {
        "id": "a",
        "text": "Khả năng tương thích với công nghệ và nền tảng của sản phẩm đang phát triển."
      },
      {
        "id": "b",
        "text": "Màu sắc logo của công ty sản xuất công cụ."
      },
      {
        "id": "c",
        "text": "Chi phí bản quyền, bảo trì và sự hỗ trợ đào tạo của nhà cung cấp."
      },
      {
        "id": "d",
        "text": "Độ dễ sử dụng và kỹ năng hiện có của đội ngũ kiểm thử."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Màu sắc logo của công ty sản xuất công cụ..\n\nMàu sắc logo hoàn toàn không liên quan đến tiêu chí kỹ thuật và hiệu quả kinh tế khi chọn tool."
  },
  {
    "id": "swt-c6-09",
    "subjectId": "swt",
    "chapterId": "swt-ch6",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Thuật ngữ 'Data-driven Testing' (Kiểm thử theo hướng dữ liệu) trong kiểm thử tự động có nghĩa là gì?",
    "options": [
      {
        "id": "a",
        "text": "Mỗi test case chỉ chạy đúng với 1 giá trị duy nhất được gõ cứng (hardcoded) trong mã script."
      },
      {
        "id": "b",
        "text": "Kịch bản kiểm thử được tách rời khỏi dữ liệu kiểm thử; script đọc dữ liệu từ nguồn ngoài (file Excel, CSV, Database) để chạy lặp lại nhiều lần với các bộ dữ liệu khác nhau."
      },
      {
        "id": "c",
        "text": "Kiểm thử chỉ kiểm tra dung lượng của ổ cứng."
      },
      {
        "id": "d",
        "text": "Kiểm thử tự động sinh ra dữ liệu giả ngẫu nhiên."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Kịch bản kiểm thử được tách rời khỏi dữ liệu kiểm thử; script đọc dữ liệu từ nguồn ngoài (file Excel, CSV, Database) để chạy lặp lại nhiều lần với các bộ dữ liệu khác nhau..\n\nData-driven testing tách biệt script và data. Một kịch bản tự động có thể chạy lặp lại hàng trăm lần với hàng trăm dòng dữ liệu đọc từ Excel/CSV."
  },
  {
    "id": "swt-c6-10",
    "subjectId": "swt",
    "chapterId": "swt-ch6",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Tại sao công cụ kiểm thử tự động bắt giữ và phát lại (Capture/Playback / Record & Playback) thường không bền vững trong các dự án dài hạn?",
    "options": [
      {
        "id": "a",
        "text": "Vì chúng quá đắt đỏ so với viết code."
      },
      {
        "id": "b",
        "text": "Vì kịch bản được ghi lại phụ thuộc cứng vào tọa độ hoặc thuộc tính giao diện cụ thể; chỉ cần giao diện đổi nhẹ là script bị gãy (fragile/brittle) và phải ghi lại từ đầu."
      },
      {
        "id": "c",
        "text": "Vì chúng làm máy tính chạy chậm đi 10 lần."
      },
      {
        "id": "d",
        "text": "Vì chuẩn ISTQB cấm sử dụng Capture/Playback."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Vì kịch bản được ghi lại phụ thuộc cứng vào tọa độ hoặc thuộc tính giao diện cụ thể; chỉ cần giao diện đổi nhẹ là script bị gãy (fragile/brittle) và phải ghi lại từ đầu..\n\nRecord & Playback tạo ra các script mong manh (brittle). Khi UI thay đổi một chút, script sẽ lập tức fail, dẫn đến chi phí bảo trì quá cao."
  },
  {
    "id": "swt-c7-01",
    "subjectId": "swt",
    "chapterId": "swt-ch7",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Triết lý 'Whole-Team Approach' (Cách tiếp cận toàn đội ngũ) trong kiểm thử Agile khẳng định điều gì?",
    "options": [
      {
        "id": "a",
        "text": "Chỉ có Tester mới phải chịu trách nhiệm khi sản phẩm xuất hiện lỗi trên Production."
      },
      {
        "id": "b",
        "text": "Chất lượng phần mềm là trách nhiệm chung của toàn bộ đội ngũ (Developer, Tester, BA, Product Owner); mọi người cùng cộng tác từ sớm để đảm bảo chất lượng."
      },
      {
        "id": "c",
        "text": "Tất cả mọi thành viên trong công ty đều phải kiêm nhiệm chức danh Tester."
      },
      {
        "id": "d",
        "text": "Lập trình viên không cần viết mã nguồn mà chỉ cần ngồi quan sát Tester làm việc."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Chất lượng phần mềm là trách nhiệm chung của toàn bộ đội ngũ (Developer, Tester, BA, Product Owner); mọi người cùng cộng tác từ sớm để đảm bảo chất lượng..\n\nTrong Agile, chất lượng không phải là việc kiểm tra ở khâu cuối, mà là trách nhiệm chung của toàn thể team từ phân tích yêu cầu đến triển khai."
  },
  {
    "id": "swt-c7-02",
    "subjectId": "swt",
    "chapterId": "swt-ch7",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Trong mô hình 4 góc phần tư kiểm thử Agile (Agile Testing Quadrants của Brian Marick), góc phần tư Q1 (Technology-facing, Support the team) bao gồm loại kiểm thử nào?",
    "options": [
      {
        "id": "a",
        "text": "Unit Testing và Component Testing (thường áp dụng TDD và chạy tự động)."
      },
      {
        "id": "b",
        "text": "User Acceptance Testing (UAT) do khách hàng trải nghiệm."
      },
      {
        "id": "c",
        "text": "Exploratory Testing và Usability Testing."
      },
      {
        "id": "d",
        "text": "Stress Testing và Penetration Testing bảo mật."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Unit Testing và Component Testing (thường áp dụng TDD và chạy tự động)..\n\nQ1 hỗ trợ lập trình viên xây dựng phần mềm đúng kỹ thuật từ đầu thông qua Unit tests và Component tests (TDD)."
  },
  {
    "id": "swt-c7-03",
    "subjectId": "swt",
    "chapterId": "swt-ch7",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Góc phần tư Q3 trong Agile Testing Quadrants (Business-facing, Critique the product) tập trung vào hoạt động nào sau đây?",
    "options": [
      {
        "id": "a",
        "text": "Viết Unit Test bằng JUnit."
      },
      {
        "id": "b",
        "text": "Exploratory Testing, Usability Testing và User Acceptance Testing (chủ yếu là kiểm thử thủ công để đánh giá trải nghiệm thực tế)."
      },
      {
        "id": "c",
        "text": "Kiểm tra tải với 100,000 requests/giây."
      },
      {
        "id": "d",
        "text": "Đo độ phủ mã nguồn SonarQube."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Exploratory Testing, Usability Testing và User Acceptance Testing (chủ yếu là kiểm thử thủ công để đánh giá trải nghiệm thực tế)..\n\nQ3 đánh giá sản phẩm dưới lăng kính kinh doanh và người dùng thực tế thông qua kiểm thử thăm dò (Exploratory), khả năng sử dụng (Usability) và chấp nhận (UAT)."
  },
  {
    "id": "swt-c7-04",
    "subjectId": "swt",
    "chapterId": "swt-ch7",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Quy trình 3 bước kinh điển của Test-Driven Development (TDD) diễn ra theo trình tự nào?",
    "options": [
      {
        "id": "a",
        "text": "Green $\\rightarrow$ Red $\\rightarrow$ Refactor"
      },
      {
        "id": "b",
        "text": "Red (Viết test fail) $\\rightarrow$ Green (Viết code tối thiểu để test pass) $\\rightarrow$ Refactor (Tối ưu cấu trúc code)"
      },
      {
        "id": "c",
        "text": "Code $\\rightarrow$ Test $\\rightarrow$ Deploy"
      },
      {
        "id": "d",
        "text": "Plan $\\rightarrow$ Do $\\rightarrow$ Check"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Red (Viết test fail) $\\rightarrow$ Green (Viết code tối thiểu để test pass) $\\rightarrow$ Refactor (Tối ưu cấu trúc code).\n\nNhịp điệu TDD: 1. Red (viết test và chạy thấy fail) $\\rightarrow$ 2. Green (viết mã vừa đủ để test pass) $\\rightarrow$ 3. Refactor (dọn dẹp, tái cấu trúc mã nguồn mà test vẫn xanh)."
  },
  {
    "id": "swt-c7-05",
    "subjectId": "swt",
    "chapterId": "swt-ch7",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Cú pháp chuẩn của kịch bản kiểm thử trong Behavior-Driven Development (BDD / Gherkin) bao gồm bộ ba từ khóa nào?",
    "options": [
      {
        "id": "a",
        "text": "If - Else - Finally"
      },
      {
        "id": "b",
        "text": "Given - When - Then"
      },
      {
        "id": "c",
        "text": "Input - Process - Output"
      },
      {
        "id": "d",
        "text": "Try - Catch - Throw"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Given - When - Then.\n\nBDD sử dụng cú pháp ngôn ngữ tự nhiên: **Given** (Tiền điều kiện ngữ cảnh) $\\rightarrow$ **When** (Hành động người dùng thực hiện) $\\rightarrow$ **Then** (Kết quả kỳ vọng quan sát được)."
  },
  {
    "id": "swt-c7-06",
    "subjectId": "swt",
    "chapterId": "swt-ch7",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Khái niệm 'Continuous Testing' (Kiểm thử liên tục) trong quy trình CI/CD có nghĩa là gì?",
    "options": [
      {
        "id": "a",
        "text": "Tester phải làm việc 24/7 không được nghỉ ngơi."
      },
      {
        "id": "b",
        "text": "Các bài kiểm thử tự động được tích hợp trực tiếp vào đường ống CI/CD, tự động chạy mỗi khi có commit mã nguồn mới để cung cấp phản hồi tức thì về chất lượng bản build."
      },
      {
        "id": "c",
        "text": "Chỉ kiểm thử khi dự án đã hoàn thành toàn bộ."
      },
      {
        "id": "d",
        "text": "Việc kiểm thử được giao hoàn toàn cho trí tuệ nhân tạo."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Các bài kiểm thử tự động được tích hợp trực tiếp vào đường ống CI/CD, tự động chạy mỗi khi có commit mã nguồn mới để cung cấp phản hồi tức thì về chất lượng bản build..\n\nContinuous Testing kích hoạt các bộ test tự động ngay trong pipeline CI/CD mỗi khi có mã mới được đẩy lên, đảm bảo phản hồi lỗi cực nhanh."
  },
  {
    "id": "swt-c7-07",
    "subjectId": "swt",
    "chapterId": "swt-ch7",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Một Tester sử dụng Prompt: 'Hãy phân tích User Story sau và liệt kê 5 kịch bản kiểm thử biên (Boundary Value Analysis) cùng 3 trường hợp ngoại lệ (Edge Cases)' trên ChatGPT. Kỹ thuật này thuộc về xu hướng nào trong FLM 2026?",
    "options": [
      {
        "id": "a",
        "text": "Tự động hóa phần cứng"
      },
      {
        "id": "b",
        "text": "AI-assisted Test Design (Thiết kế test hỗ trợ bởi AI)"
      },
      {
        "id": "c",
        "text": "Phân tích tĩnh truyền thống"
      },
      {
        "id": "d",
        "text": "Debugging tự động"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: AI-assisted Test Design (Thiết kế test hỗ trợ bởi AI).\n\nĐây là ứng dụng thực tế của AI trong việc hỗ trợ Tester động não (brainstorming), mở rộng tư duy kịch bản kiểm thử biên từ đặc tả User Story."
  },
  {
    "id": "swt-c7-08",
    "subjectId": "swt",
    "chapterId": "swt-ch7",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Cảnh báo quan trọng nhất về mặt BẢO MẬT khi sử dụng các công cụ AI công cộng (như ChatGPT, Grok, Gemini) trong hoạt động kiểm thử dự án thực tế là gì?",
    "options": [
      {
        "id": "a",
        "text": "AI sẽ làm máy tính cá nhân bị nóng."
      },
      {
        "id": "b",
        "text": "Tuyệt đối không dán (paste) dữ liệu nhạy cảm của khách hàng, mật khẩu, API keys hoặc mã nguồn độc quyền của công ty vào các dịch vụ AI công cộng."
      },
      {
        "id": "c",
        "text": "AI sẽ đòi tiền bản quyền từ khách hàng."
      },
      {
        "id": "d",
        "text": "Không có rủi ro bảo mật nào khi dùng AI."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Tuyệt đối không dán (paste) dữ liệu nhạy cảm của khách hàng, mật khẩu, API keys hoặc mã nguồn độc quyền của công ty vào các dịch vụ AI công cộng..\n\nĐưa thông tin định danh khách hàng (PII) hoặc bí mật kinh doanh lên AI công cộng vi phạm nghiêm trọng chính sách bảo mật dữ liệu và chuẩn đạo đức nghề nghiệp."
  },
  {
    "id": "swt-c7-09",
    "subjectId": "swt",
    "chapterId": "swt-ch7",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Trong Agile, khi nào một User Story được coi là hoàn thành (Definition of Done - DoD)?",
    "options": [
      {
        "id": "a",
        "text": "Khi lập trình viên vừa viết xong dòng code cuối cùng."
      },
      {
        "id": "b",
        "text": "Khi toàn bộ mã nguồn đã được review, các bài kiểm thử đơn vị và chấp nhận đã Pass 100%, không còn lỗi nghiêm trọng tồn đọng và đã triển khai thành công lên môi trường kiểm thử."
      },
      {
        "id": "c",
        "text": "Khi Product Owner gửi email khen ngợi."
      },
      {
        "id": "d",
        "text": "Khi hết thời gian của Sprint bất kể code có chạy được hay không."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Khi toàn bộ mã nguồn đã được review, các bài kiểm thử đơn vị và chấp nhận đã Pass 100%, không còn lỗi nghiêm trọng tồn đọng và đã triển khai thành công lên môi trường kiểm thử..\n\nDefinition of Done (DoD) là thỏa thuận chung của nhóm Agile, chỉ khi sản phẩm đáp ứng đầy đủ tiêu chí chất lượng (bao gồm kiểm thử) thì mới được coi là Done."
  },
  {
    "id": "swt-c7-10",
    "subjectId": "swt",
    "chapterId": "swt-ch7",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Kỹ thuật 'Session-Based Test Management' (SBTM) thường được dùng để quản lý loại kiểm thử nào trong Agile?",
    "options": [
      {
        "id": "a",
        "text": "Unit Testing tự động"
      },
      {
        "id": "b",
        "text": "Exploratory Testing (Kiểm thử thăm dò có cấu trúc)"
      },
      {
        "id": "c",
        "text": "Performance Testing dưới tải"
      },
      {
        "id": "d",
        "text": "Biên dịch mã nguồn"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Exploratory Testing (Kiểm thử thăm dò có cấu trúc).\n\nSBTM tổ chức kiểm thử thăm dò thành các phiên làm việc (Sessions) có thời lượng cố định (thường 60-90 phút), có Test Charter rõ ràng và báo cáo kết quả cụ thể."
  },
  {
    "id": "swt-q121",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Khi nào thì chi phí cho việc sửa chữa một khiếm khuyết phần mềm thường ở mức THẤP NHẤT?",
    "options": [
      {
        "id": "a",
        "text": "Trong giai đoạn phân tích và định nghĩa yêu cầu (Requirements)."
      },
      {
        "id": "b",
        "text": "Trong giai đoạn kiểm thử hệ thống (System testing)."
      },
      {
        "id": "c",
        "text": "Trong giai đoạn kiểm thử chấp nhận người dùng (UAT)."
      },
      {
        "id": "d",
        "text": "Sau khi phần mềm đã phát hành lên môi trường Production."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Trong giai đoạn phân tích và định nghĩa yêu cầu (Requirements)..\n\nTheo nguyên tắc Early Testing và mô hình Defect Cost Escalation, phát hiện và sửa chữa lỗi ngay trong pha Yêu cầu tốn ít chi phí và công sức nhất."
  },
  {
    "id": "swt-q122",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Một lập trình viên phát biểu: 'Chương trình của tôi đã vượt qua 100% tất cả các bài test được viết, do đó nó hoàn toàn không có bất kỳ lỗi nào.' Nhận định này vi phạm nguyên tắc kiểm thử nào?",
    "options": [
      {
        "id": "a",
        "text": "Principle 1: Testing shows the presence of defects, not their absence"
      },
      {
        "id": "b",
        "text": "Principle 4: Defect clustering"
      },
      {
        "id": "c",
        "text": "Principle 6: Testing is context dependent"
      },
      {
        "id": "d",
        "text": "Principle 5: Pesticide paradox"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Principle 1: Testing shows the presence of defects, not their absence.\n\nPrinciple 1 khẳng định: Dù bài test có pass 100% thì kiểm thử cũng không thể chứng minh phần mềm không có lỗi, chỉ chứng minh không tìm thấy lỗi trong phạm vi các test case đã chạy."
  },
  {
    "id": "swt-q123",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Thuật ngữ 'Confirmation Bias' (Thiên kiến xác nhận) trong tâm lý học kiểm thử có nghĩa là gì?",
    "options": [
      {
        "id": "a",
        "text": "Xu hướng con người muốn tìm kiếm bằng chứng xác nhận điều mình tin tưởng là đúng thay vì tìm bằng chứng chứng minh mình sai."
      },
      {
        "id": "b",
        "text": "Kỹ thuật kiểm tra xác nhận lại sau khi fix bug."
      },
      {
        "id": "c",
        "text": "Việc Tester luôn luôn tin tưởng vào lập trình viên."
      },
      {
        "id": "d",
        "text": "Việc quản lý dự án ký xác nhận báo cáo kiểm thử."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Xu hướng con người muốn tìm kiếm bằng chứng xác nhận điều mình tin tưởng là đúng thay vì tìm bằng chứng chứng minh mình sai..\n\nConfirmation bias khiến lập trình viên khó tự tìm ra lỗi trong code của chính mình vì họ có xu hướng tin rằng code mình viết là đúng. Đó là lý do cần kiểm thử viên độc lập."
  },
  {
    "id": "swt-q124",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Tại sao kiểm thử phần mềm lại đóng vai trò quan trọng trong việc xây dựng niềm tin (building confidence) của khách hàng?",
    "options": [
      {
        "id": "a",
        "text": "Vì kiểm thử làm chậm tiến độ dự án lại để khách hàng có thời gian chuẩn bị."
      },
      {
        "id": "b",
        "text": "Vì việc thực thi các bài kiểm thử thành công cung cấp bằng chứng định lượng về việc hệ thống đáp ứng đúng yêu cầu và hoạt động ổn định trong các điều kiện dự kiến."
      },
      {
        "id": "c",
        "text": "Vì Tester sẽ thay mặt khách hàng điều hành công ty."
      },
      {
        "id": "d",
        "text": "Vì kiểm thử cho phép khách hàng không cần trả tiền bản quyền phần mềm."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Vì việc thực thi các bài kiểm thử thành công cung cấp bằng chứng định lượng về việc hệ thống đáp ứng đúng yêu cầu và hoạt động ổn định trong các điều kiện dự kiến..\n\nKiểm thử cung cấp dữ liệu minh bạch, đo lường được về chất lượng sản phẩm, từ đó xây dựng niềm tin cho stakeholders trước khi quyết định bàn giao."
  },
  {
    "id": "swt-q125",
    "subjectId": "swt",
    "chapterId": "swt-ch1",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Nguyên nhân nào sau đây có thể dẫn đến một 'Failure' mà KHÔNG PHẢI do lỗi lập trình (Defect in code) gây ra?",
    "options": [
      {
        "id": "a",
        "text": "Đường truyền mạng bị đứt, máy chủ mất điện đột ngột hoặc phần cứng bị hỏng hóc vật lý."
      },
      {
        "id": "b",
        "text": "Lập trình viên gõ nhầm công thức toán học."
      },
      {
        "id": "c",
        "text": "Tài liệu thiết kế kiến trúc bị thiếu trang."
      },
      {
        "id": "d",
        "text": "Biến chưa được gán giá trị mặc định."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Đường truyền mạng bị đứt, máy chủ mất điện đột ngột hoặc phần cứng bị hỏng hóc vật lý..\n\nFailure có thể xuất phát từ lỗi con người trong code (Defect), nhưng cũng có thể do điều kiện môi trường bên ngoài: mất điện, đứt cáp quang, bức xạ làm đảo bit trong RAM."
  },
  {
    "id": "swt-q126",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Trong mô hình phát triển phần mềm lặp và tăng trưởng (Iterative and Incremental / Agile), hoạt động kiểm thử hồi quy (Regression Testing) diễn ra như thế nào?",
    "options": [
      {
        "id": "a",
        "text": "Chỉ diễn ra một lần duy nhất vào ngày cuối cùng trước khi đóng dự án."
      },
      {
        "id": "b",
        "text": "Phát triển và mở rộng dần theo từng vòng lặp (Sprint), đòi hỏi tự động hóa cao để kiểm tra liên tục các tính năng cũ mỗi khi mã mới được tích hợp."
      },
      {
        "id": "c",
        "text": "Bị cấm hoàn toàn vì tốn thời gian của các lập trình viên."
      },
      {
        "id": "d",
        "text": "Chỉ do khách hàng thực hiện bằng tay."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Phát triển và mở rộng dần theo từng vòng lặp (Sprint), đòi hỏi tự động hóa cao để kiểm tra liên tục các tính năng cũ mỗi khi mã mới được tích hợp..\n\nTrong mô hình lặp (Iterative), mã nguồn liên tục được bổ sung qua từng Sprint, do đó bộ Regression Test phải mở rộng và được chạy tự động liên tục."
  },
  {
    "id": "swt-q127",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Thử nghiệm tải (Load Testing) và Thử nghiệm chịu áp lực (Stress Testing) khác nhau cơ bản ở điểm nào?",
    "options": [
      {
        "id": "a",
        "text": "Load Testing kiểm tra hệ thống dưới mức tải dự kiến bình thường và cao điểm; Stress Testing đẩy tải vượt quá giới hạn thiết kế để xem hệ thống sập và phục hồi như thế nào."
      },
      {
        "id": "b",
        "text": "Load Testing là kiểm thử tĩnh; Stress Testing là kiểm thử động."
      },
      {
        "id": "c",
        "text": "Load Testing do Tester làm; Stress Testing do Hacker làm."
      },
      {
        "id": "d",
        "text": "Hai thuật ngữ này hoàn toàn giống nhau."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Load Testing kiểm tra hệ thống dưới mức tải dự kiến bình thường và cao điểm; Stress Testing đẩy tải vượt quá giới hạn thiết kế để xem hệ thống sập và phục hồi như thế nào..\n\nLoad Testing kiểm tra hành vi dưới các mức tải trong phạm vi thiết kế (ví dụ: 10,000 users). Stress Testing ép tải vượt ngưỡng (ví dụ: 50,000 users) để tìm điểm gãy (breaking point) và kiểm tra khả năng graceful degradation."
  },
  {
    "id": "swt-q128",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Kiểm thử tính khả dụng (Usability Testing) thuộc loại kiểm thử nào và nhằm mục đích gì?",
    "options": [
      {
        "id": "a",
        "text": "Kiểm thử chức năng; kiểm tra xem code có chạy đúng thuật toán không."
      },
      {
        "id": "b",
        "text": "Kiểm thử phi chức năng; đánh giá mức độ dễ học, dễ dùng, hiệu quả và sự hài lòng của người dùng khi tương tác với giao diện hệ thống."
      },
      {
        "id": "c",
        "text": "Kiểm thử cấu trúc; đo lường độ phủ câu lệnh."
      },
      {
        "id": "d",
        "text": "Kiểm thử bảo trì; kiểm tra việc sao lưu dữ liệu."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Kiểm thử phi chức năng; đánh giá mức độ dễ học, dễ dùng, hiệu quả và sự hài lòng của người dùng khi tương tác với giao diện hệ thống..\n\nUsability Testing là một phần cốt lõi của kiểm thử phi chức năng, tập trung vào trải nghiệm người dùng (UX/UI)."
  },
  {
    "id": "swt-q129",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Một ứng dụng thương mại điện tử cần chạy trên cả iOS, Android, macOS và Windows. Loại kiểm thử nào được sử dụng để xác minh khả năng này?",
    "options": [
      {
        "id": "a",
        "text": "Portability / Compatibility Testing (Kiểm thử tính di động / tương thích)"
      },
      {
        "id": "b",
        "text": "Security Testing"
      },
      {
        "id": "c",
        "text": "Unit Testing"
      },
      {
        "id": "d",
        "text": "Stress Testing"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Portability / Compatibility Testing (Kiểm thử tính di động / tương thích).\n\nPortability Testing xác định mức độ dễ dàng chuyển giao hoặc vận hành phần mềm trên các môi trường phần cứng, hệ điều hành khác nhau."
  },
  {
    "id": "swt-q130",
    "subjectId": "swt",
    "chapterId": "swt-ch2",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Tại sao 'Confirmation Testing' (Re-testing) phải luôn được thực hiện TRƯỚC 'Regression Testing'?",
    "options": [
      {
        "id": "a",
        "text": "Vì nếu con bug chưa được sửa thành công thì việc chạy toàn bộ bộ kiểm thử hồi quy lớn sẽ gây lãng phí thời gian vô ích."
      },
      {
        "id": "b",
        "text": "Vì quy định của luật pháp bắt buộc như vậy."
      },
      {
        "id": "c",
        "text": "Vì Re-testing chỉ mất 1 giây."
      },
      {
        "id": "d",
        "text": "Vì Regression Testing không thể chạy trên máy tính cá nhân."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Vì nếu con bug chưa được sửa thành công thì việc chạy toàn bộ bộ kiểm thử hồi quy lớn sẽ gây lãng phí thời gian vô ích..\n\nCần xác nhận xem bản vá có thực sự giải quyết được lỗi hay không trước (Confirmation Testing), sau đó mới chạy bộ kiểm thử hồi quy diện rộng."
  },
  {
    "id": "swt-q131",
    "subjectId": "swt",
    "chapterId": "swt-ch3",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Trong một buổi Inspection chính thức, nếu có bất đồng gay gắt giữa Tác giả và một Reviewer về việc một điểm có phải là lỗi hay không, ai là người có thẩm quyền quyết định hoặc hòa giải?",
    "options": [
      {
        "id": "a",
        "text": "Reviewer lớn tuổi nhất."
      },
      {
        "id": "b",
        "text": "Moderator (Điều phối viên)."
      },
      {
        "id": "c",
        "text": "Lập trình viên viết ra ngôn ngữ đó."
      },
      {
        "id": "d",
        "text": "Khách hàng ở nước ngoài."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Moderator (Điều phối viên)..\n\nModerator chịu trách nhiệm quản lý xung đột, giữ cho buổi họp không bị sa đà vào tranh cãi và đưa ra quyết định ghi nhận lỗi hoặc dời cuộc thảo luận sang một phiên riêng."
  },
  {
    "id": "swt-q132",
    "subjectId": "swt",
    "chapterId": "swt-ch3",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Checklist trong kỹ thuật Inspection đóng vai trò gì?",
    "options": [
      {
        "id": "a",
        "text": "Là danh sách các món ăn nhẹ phục vụ trong giờ giải lao."
      },
      {
        "id": "b",
        "text": "Là tập hợp các câu hỏi hoặc lỗi phổ biến đã được chuẩn hóa giúp Reviewer không bỏ sót các khía cạnh quan trọng khi đọc tài liệu."
      },
      {
        "id": "c",
        "text": "Là danh sách tên các nhân viên vắng mặt."
      },
      {
        "id": "d",
        "text": "Là mã nguồn của chương trình."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Là tập hợp các câu hỏi hoặc lỗi phổ biến đã được chuẩn hóa giúp Reviewer không bỏ sót các khía cạnh quan trọng khi đọc tài liệu..\n\nChecklist hướng dẫn Reviewer tập trung vào các loại lỗi hay gặp (như thiếu sót, mâu thuẫn, vi phạm chuẩn, lỗ hổng bảo mật)."
  },
  {
    "id": "swt-q133",
    "subjectId": "swt",
    "chapterId": "swt-ch3",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Hiện tượng 'Defect Masking' (Lỗi che khuất) trong kiểm thử phần mềm có nghĩa là gì?",
    "options": [
      {
        "id": "a",
        "text": "Việc lập trình viên cố tình che giấu lỗi không cho Tester biết."
      },
      {
        "id": "b",
        "text": "Hiện tượng một lỗi nghiêm trọng ở tầng trên làm chương trình bị sập, khiến các lỗi tiềm ẩn ở các tầng mã nguồn phía sau không thể kích hoạt và phát hiện được."
      },
      {
        "id": "c",
        "text": "Việc dùng AI để đổi tên biến trong code."
      },
      {
        "id": "d",
        "text": "Việc đổi màu giao diện để làm mờ lỗi chính tả."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Hiện tượng một lỗi nghiêm trọng ở tầng trên làm chương trình bị sập, khiến các lỗi tiềm ẩn ở các tầng mã nguồn phía sau không thể kích hoạt và phát hiện được..\n\nDefect Masking xảy ra khi một defect ngăn cản việc thực thi phần code chứa một defect khác, khiến defect thứ hai bị ẩn đi cho đến khi defect đầu tiên được sửa."
  },
  {
    "id": "swt-q134",
    "subjectId": "swt",
    "chapterId": "swt-ch3",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Một công cụ quét mã tĩnh (Static Code Analyzer) báo lỗi: 'Variable temp is assigned a value but never read'. Đây là ví dụ về loại lỗi nào?",
    "options": [
      {
        "id": "a",
        "text": "Syntax error (Lỗi cú pháp)"
      },
      {
        "id": "b",
        "text": "Data flow anomaly (Bất thường luồng dữ liệu / Unused variable)"
      },
      {
        "id": "c",
        "text": "Performance failure"
      },
      {
        "id": "d",
        "text": "Dynamic memory leak"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Data flow anomaly (Bất thường luồng dữ liệu / Unused variable).\n\nĐây là lỗi bất thường luồng dữ liệu (Data flow anomaly) điển hình mà phân tích tĩnh phát hiện được: khai báo, gán giá trị nhưng không bao giờ sử dụng."
  },
  {
    "id": "swt-q135",
    "subjectId": "swt",
    "chapterId": "swt-ch3",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Hình thức 'Perspective-based Reading' trong Review tài liệu yêu cầu có nghĩa là gì?",
    "options": [
      {
        "id": "a",
        "text": "Mỗi Reviewer đóng vai một đối tượng khác nhau (như End-user, Developer, System Admin, Tester) để đọc tài liệu dưới góc nhìn chuyên biệt của vai trò đó."
      },
      {
        "id": "b",
        "text": "Mọi người cùng đọc tài liệu dưới góc nhìn của Giám đốc tài chính."
      },
      {
        "id": "c",
        "text": "Đọc tài liệu từ trang cuối cùng ngược lên trang đầu tiên."
      },
      {
        "id": "d",
        "text": "Đọc tài liệu bằng phần mềm dịch tự động."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Mỗi Reviewer đóng vai một đối tượng khác nhau (như End-user, Developer, System Admin, Tester) để đọc tài liệu dưới góc nhìn chuyên biệt của vai trò đó..\n\nPerspective-based reading phân công các góc nhìn khác nhau (Tester, Dev, Designer, User) cho các Reviewer, giúp tăng tối đa độ bao phủ các loại lỗi."
  },
  {
    "id": "swt-q136",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Một cửa hàng trực tuyến áp dụng chính sách giảm giá như sau: Mua dưới 10 sản phẩm: Không giảm giá. Mua từ 10 đến 50 sản phẩm: Giảm 10%. Mua trên 50 sản phẩm: Giảm 20%. Số lượng sản phẩm mua là số nguyên dương. Nếu dùng 2-value BVA, tập các giá trị số lượng sản phẩm cần kiểm thử tại tất cả các biên là gì?",
    "options": [
      {
        "id": "a",
        "text": "9, 10, 50, 51"
      },
      {
        "id": "b",
        "text": "0, 10, 50, 100"
      },
      {
        "id": "c",
        "text": "9, 10, 11, 49, 50, 51"
      },
      {
        "id": "d",
        "text": "1, 10, 50"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: 9, 10, 50, 51.\n\nBiên 1 giữa [1, 9] và [10, 50] là: 9 và 10. Biên 2 giữa [10, 50] và [51, ...] là: 50 và 51. Tập giá trị 2-value BVA là: 9, 10, 50, 51."
  },
  {
    "id": "swt-q137",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Xét một hàm kiểm tra tài khoản ngân hàng:\n```c\nif (balance >= 1000) {\n    if (vip == true) {\n        bonus = 100;\n    } else {\n        bonus = 50;\n    }\n} else {\n    bonus = 0;\n}\n```\nCó bao nhiêu đường đi độc lập (Independent paths) trong hàm này?",
    "options": [
      {
        "id": "a",
        "text": "2 đường đi"
      },
      {
        "id": "b",
        "text": "3 đường đi"
      },
      {
        "id": "c",
        "text": "4 đường đi"
      },
      {
        "id": "d",
        "text": "5 đường đi"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: 3 đường đi.\n\nĐoạn mã có 2 nút quyết định nhị phân (\\`balance >= 1000\\` và \\`vip == true\\`). Có 3 đường đi: 1. balance < 1000 (bonus=0); 2. balance >= 1000 & vip=false (bonus=50); 3. balance >= 1000 & vip=true (bonus=100). Độ phức tạp Cyclomatic $V(G) = P + 1 = 2 + 1 = 3$."
  },
  {
    "id": "swt-q138",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Trong một bảng quyết định có 4 điều kiện nhị phân. Tuy nhiên, quy tắc nghiệp vụ quy định rằng nếu điều kiện 1 là True thì điều kiện 2, 3, 4 không cần quan tâm (Don't care). Điều này giúp giảm bao nhiêu cột trong bảng 16 cột?",
    "options": [
      {
        "id": "a",
        "text": "Giảm 1 cột"
      },
      {
        "id": "b",
        "text": "Gộp $2^3 = 8$ cột thành 1 cột duy nhất (giảm 7 cột)"
      },
      {
        "id": "c",
        "text": "Không giảm được cột nào"
      },
      {
        "id": "d",
        "text": "Giảm 15 cột"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Gộp $2^3 = 8$ cột thành 1 cột duy nhất (giảm 7 cột).\n\nKhi C1 = True, có $2^3 = 8$ tổ hợp của C2, C3, C4. Nếu tất cả đều cho cùng một Action thì 8 cột này được gộp thành 1 cột duy nhất với các dấu '-' (Don't care)."
  },
  {
    "id": "swt-q139",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Một hệ thống máy ATM có sơ đồ chuyển trạng thái với 4 trạng thái: [Chờ thẻ], [Đã nhận thẻ], [Đã nhập PIN], [Đang giao dịch]. Có 6 mũi tên chuyển đổi trạng thái hợp lệ giữa chúng. Để đạt 100% 0-switch (1-hop) coverage, cần bao nhiêu chuyển đổi được kiểm thử?",
    "options": [
      {
        "id": "a",
        "text": "Tối thiểu kiểm thử được cả 6 chuyển đổi trạng thái hợp lệ đó."
      },
      {
        "id": "b",
        "text": "Chỉ cần 1 chuyển đổi."
      },
      {
        "id": "c",
        "text": "Cần $4 \\times 6 = 24$ chuyển đổi."
      },
      {
        "id": "d",
        "text": "Cần 0 chuyển đổi."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Tối thiểu kiểm thử được cả 6 chuyển đổi trạng thái hợp lệ đó..\n\n0-switch coverage đòi hỏi mọi chuyển đổi hợp lệ đơn lẻ (mọi mũi tên trong sơ đồ, ở đây là 6 mũi tên) phải được thực thi ít nhất một lần."
  },
  {
    "id": "swt-q140",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Trong kỹ thuật Use Case Testing, kịch bản 'Happy Path' (hoặc Main Success Scenario) được định nghĩa là gì?",
    "options": [
      {
        "id": "a",
        "text": "Kịch bản mà phần mềm bị crash ngay từ bước đầu tiên."
      },
      {
        "id": "b",
        "text": "Luồng thực thi lý tưởng nhất khi mọi thứ diễn ra suôn sẻ, không có lỗi hay ngoại lệ nào xảy ra và mục tiêu của Actor được hoàn thành mỹ mãn."
      },
      {
        "id": "c",
        "text": "Kịch bản chỉ dành cho người dùng có tâm trạng vui vẻ."
      },
      {
        "id": "d",
        "text": "Kịch bản kiểm tra khả năng chịu tải của server."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Luồng thực thi lý tưởng nhất khi mọi thứ diễn ra suôn sẻ, không có lỗi hay ngoại lệ nào xảy ra và mục tiêu của Actor được hoàn thành mỹ mãn..\n\nHappy Path (Main success scenario) mô tả luồng tương tác chuẩn khi người dùng nhập dữ liệu đúng, hệ thống phản hồi đúng và đạt được mục đích nghiệp vụ mà không rẽ sang nhánh phụ hay lỗi."
  },
  {
    "id": "swt-q141",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Cho đoạn mã sau:\n```python\ndef check_val(x):\n    if x > 0:\n        print('Positive')\n    if x % 2 == 0:\n        print('Even')\n```\nĐể đạt 100% Decision Coverage, cần ít nhất bao nhiêu test cases?",
    "options": [
      {
        "id": "a",
        "text": "1 test case"
      },
      {
        "id": "b",
        "text": "2 test cases (ví dụ: x = 2 làm cả 2 IF đều True; x = -1 làm cả 2 IF đều False)"
      },
      {
        "id": "c",
        "text": "4 test cases"
      },
      {
        "id": "d",
        "text": "8 test cases"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: 2 test cases (ví dụ: x = 2 làm cả 2 IF đều True; x = -1 làm cả 2 IF đều False).\n\nĐoạn mã có 2 câu lệnh IF độc lập $\\rightarrow$ Tổng cộng 4 nhánh (2 True, 2 False). Có thể phủ 100% bằng 2 test cases: Test 1 với $x=2$ (True, True); Test 2 với $x=-1$ (False, False)."
  },
  {
    "id": "swt-q142",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Nếu một biểu đồ dòng điều khiển có 14 cạnh ($E=14$) và 10 nút ($N=10$), với $P=1$, độ phức tạp Cyclomatic $V(G)$ bằng bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "$V(G) = 14 - 10 + 2 = 6$"
      },
      {
        "id": "b",
        "text": "$V(G) = 14 - 10 = 4$"
      },
      {
        "id": "c",
        "text": "$V(G) = 10 - 14 + 2 = -2$"
      },
      {
        "id": "d",
        "text": "$V(G) = 14 + 10 = 24$"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: $V(G) = 14 - 10 + 2 = 6$.\n\nÁp dụng công thức McCabe: $V(G) = E - N + 2P = 14 - 10 + 2(1) = 6$."
  },
  {
    "id": "swt-q143",
    "subjectId": "swt",
    "chapterId": "swt-ch4",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Một ô nhập liệu mã bưu chính quốc gia yêu cầu đúng 5 chữ số từ 00000 đến 99999. Lớp tương đương KHÔNG HỢP LỆ (Invalid Equivalence Partition) nào sau đây là ĐÚNG?",
    "options": [
      {
        "id": "a",
        "text": "Chuỗi có 5 chữ số như '12345'"
      },
      {
        "id": "b",
        "text": "Chuỗi chứa ít hơn 5 chữ số (như '123'), chuỗi chứa nhiều hơn 5 chữ số (như '123456') hoặc chứa ký tự không phải chữ số (như '12A45')"
      },
      {
        "id": "c",
        "text": "Số 00000"
      },
      {
        "id": "d",
        "text": "Số 99999"
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Chuỗi chứa ít hơn 5 chữ số (như '123'), chuỗi chứa nhiều hơn 5 chữ số (như '123456') hoặc chứa ký tự không phải chữ số (như '12A45').\n\nCác lớp không hợp lệ gồm: độ dài < 5, độ dài > 5, chứa chữ cái hoặc ký tự đặc biệt, để trống."
  },
  {
    "id": "swt-q144",
    "subjectId": "swt",
    "chapterId": "swt-ch5",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Khi thực hiện ước lượng kiểm thử bằng kỹ thuật Planning Poker (chuyên gia), đơn vị ước lượng thường dùng là gì?",
    "options": [
      {
        "id": "a",
        "text": "Số mét dây mạng cần mua."
      },
      {
        "id": "b",
        "text": "Story Points (Điểm câu chuyện) theo dãy số Fibonacci (1, 2, 3, 5, 8, 13...)."
      },
      {
        "id": "c",
        "text": "Số lượng dòng mã nguồn."
      },
      {
        "id": "d",
        "text": "Số megabyte dữ liệu tải về."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Story Points (Điểm câu chuyện) theo dãy số Fibonacci (1, 2, 3, 5, 8, 13...)..\n\nPlanning Poker dùng thang điểm Story Points (thường theo dãy Fibonacci) để ước tính độ phức tạp và công sức tương đối giữa các tính năng."
  },
  {
    "id": "swt-q145",
    "subjectId": "swt",
    "chapterId": "swt-ch5",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Một khiếm khuyết được phát hiện ở giai đoạn cuối của dự án. Test Manager quyết định chuyển trạng thái của nó thành 'Won't Fix' (Không sửa). Quyết định này thường dựa trên lý do gì?",
    "options": [
      {
        "id": "a",
        "text": "Lập trình viên không biết sửa code."
      },
      {
        "id": "b",
        "text": "Lỗi có rủi ro và tác động kinh doanh cực kỳ thấp, trong khi chi phí và rủi ro hồi quy nếu sửa chữa lại quá cao so với lợi ích mang lại trước ngày phát hành."
      },
      {
        "id": "c",
        "text": "Tester tìm được quá nhiều lỗi nên bị phạt."
      },
      {
        "id": "d",
        "text": "Phần mềm được phát hành miễn phí."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Lỗi có rủi ro và tác động kinh doanh cực kỳ thấp, trong khi chi phí và rủi ro hồi quy nếu sửa chữa lại quá cao so với lợi ích mang lại trước ngày phát hành..\n\nQuyết định 'Won't Fix' là một quyết định cân bằng kinh tế và rủi ro: chi phí sửa và nguy cơ làm hỏng tính năng khác lớn hơn thiệt hại do lỗi gây ra."
  },
  {
    "id": "swt-q146",
    "subjectId": "swt",
    "chapterId": "swt-ch5",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Chỉ số 'Test Execution Progress' (Tiến độ thực thi test) thường đo lường mối quan hệ nào?",
    "options": [
      {
        "id": "a",
        "text": "Số test case đã chạy (Pass + Fail) so với tổng số test case được lên kế hoạch theo dòng thời gian."
      },
      {
        "id": "b",
        "text": "Số ly cà phê Tester đã uống trong tuần."
      },
      {
        "id": "c",
        "text": "Số lượng email gửi cho khách hàng."
      },
      {
        "id": "d",
        "text": "Số lỗi được phát hiện trên mỗi tester."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Số test case đã chạy (Pass + Fail) so với tổng số test case được lên kế hoạch theo dòng thời gian..\n\nTest execution progress theo dõi đường cong thực thi thực tế (S-curve) so với kế hoạch dự kiến để xem dự án có bị trễ hạn hay không."
  },
  {
    "id": "swt-q147",
    "subjectId": "swt",
    "chapterId": "swt-ch6",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Loại công cụ nào sau đây KHÔNG THỰC THI mã nguồn ứng dụng nhưng hỗ trợ quản lý mối quan hệ giữa Yêu cầu (Requirements), Ca kiểm thử (Test Cases) và Lỗi (Defects)?",
    "options": [
      {
        "id": "a",
        "text": "Test Management Tool (như TestRail, Zephyr, HP ALM)"
      },
      {
        "id": "b",
        "text": "Test Execution Tool (như Selenium)"
      },
      {
        "id": "c",
        "text": "Performance Testing Tool (như JMeter)"
      },
      {
        "id": "d",
        "text": "Dynamic Memory Profiler"
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Test Management Tool (như TestRail, Zephyr, HP ALM).\n\nTest Management Tool chuyên quản lý tài nguyên kiểm thử, theo dõi tiến độ và duy trì Ma trận truy vết yêu cầu (Traceability Matrix)."
  },
  {
    "id": "swt-q148",
    "subjectId": "swt",
    "chapterId": "swt-ch6",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "understand",
    "type": "single",
    "prompt": "Một framework kiểm thử tự động theo mô hình 'Keyword-driven' (Hướng từ khóa) có đặc điểm gì nổi bật?",
    "options": [
      {
        "id": "a",
        "text": "Kịch bản kiểm thử được viết bằng các từ khóa hành động trừu tượng (như \\`Click\\`, \\`EnterText\\`, \\`VerifyText\\`), cho phép kiểm thử viên không biết lập trình vẫn có thể tạo được test case tự động."
      },
      {
        "id": "b",
        "text": "Chỉ chạy được bằng lệnh trong hệ điều hành DOS."
      },
      {
        "id": "c",
        "text": "Mỗi kịch bản chỉ dài đúng 1 từ duy nhất."
      },
      {
        "id": "d",
        "text": "Chỉ kiểm tra chính tả của các từ khóa tiếng Anh."
      }
    ],
    "correctOptionIds": [
      "a"
    ],
    "explanation": "Đáp án đúng là **A**: Kịch bản kiểm thử được viết bằng các từ khóa hành động trừu tượng (như \\`Click\\`, \\`EnterText\\`, \\`VerifyText\\`), cho phép kiểm thử viên không biết lập trình vẫn có thể tạo được test case tự động..\n\nKeyword-driven framework tách biệt việc lập trình framework với việc tạo kịch bản, sử dụng các từ khóa chuẩn hóa để Tester nghiệp vụ có thể dựng kịch bản dễ dàng."
  },
  {
    "id": "swt-q149",
    "subjectId": "swt",
    "chapterId": "swt-ch7",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "remember",
    "type": "single",
    "prompt": "Trong quy trình BDD, vai trò 'Three Amigos' đại diện cho sự cộng tác của ba nhóm đối tượng nào?",
    "options": [
      {
        "id": "a",
        "text": "Giám đốc tài chính, Giám đốc nhân sự và Bảo vệ tòa nhà."
      },
      {
        "id": "b",
        "text": "Business (Product Owner/BA), Development (Developer) và Testing (Tester)."
      },
      {
        "id": "c",
        "text": "Khách hàng, Nhà cung cấp phần cứng và Đơn vị vận chuyển."
      },
      {
        "id": "d",
        "text": "Ba lập trình viên giỏi nhất nhóm."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Business (Product Owner/BA), Development (Developer) và Testing (Tester)..\n\nThree Amigos trong Agile/BDD là sự kết hợp của 3 góc nhìn: Kinh doanh (What), Kỹ thuật (How) và Kiểm thử (What could go wrong) trước khi bắt đầu code một User Story."
  },
  {
    "id": "swt-q150",
    "subjectId": "swt",
    "chapterId": "swt-ch7",
    "source": "slide-generated",
    "examTarget": "both",
    "difficulty": "scenario",
    "type": "single",
    "prompt": "Theo chuẩn FLM FPT 2026, ứng dụng AI nào sau đây là KHẢ THI và HIỆU QUẢ NHẤT cho hoạt động tạo Test Plan?",
    "options": [
      {
        "id": "a",
        "text": "Yêu cầu AI ký tên vào hợp đồng nghiệm thu thay cho khách hàng."
      },
      {
        "id": "b",
        "text": "Sử dụng AI để phác thảo cấu trúc khung Test Plan theo chuẩn IEEE 829, gợi ý các rủi ro sản phẩm tiềm ẩn từ mô tả dự án và đề xuất danh mục các loại test cần thực hiện."
      },
      {
        "id": "c",
        "text": "Để AI tự động phát triển phần cứng server cho hệ thống."
      },
      {
        "id": "d",
        "text": "Yêu cầu AI trả lương cho đội ngũ nhân viên."
      }
    ],
    "correctOptionIds": [
      "b"
    ],
    "explanation": "Đáp án đúng là **B**: Sử dụng AI để phác thảo cấu trúc khung Test Plan theo chuẩn IEEE 829, gợi ý các rủi ro sản phẩm tiềm ẩn từ mô tả dự án và đề xuất danh mục các loại test cần thực hiện..\n\nAI có khả năng sinh khung tài liệu, gợi ý các rủi ro thường gặp và checklist kiểm thử cho dự án từ bản mô tả ngắn (Project charter), giúp tiết kiệm thời gian soạn thảo."
  }
];
