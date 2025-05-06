import React from "react";
import "../styles/KetLuan.css";

const ketLuanText = `Sau một thời gian nghiên cứu lý thuyết kết hợp với khảo sát thực tế, đề tài "Mô phỏng 3D kết cấu và nguyên lý làm việc một số cụm điển hình trên xe máy công binh" đã đạt được những kết quả đáng ghi nhận sau:

Thứ nhất, đề tài đã xây dựng thành công bộ dữ liệu ảo chi tiết về ba cụm quan trọng trong hệ thống truyền lực trên xe máy công binh, bao gồm: biến mô men thủy lực, hộp số hành tinh và truyền lực cạnh. Bộ dữ liệu này không chỉ thể hiện chính xác kết cấu của từng chi tiết mà còn mô phỏng được nguyên lý hoạt động và quy trình tháo lắp của các cụm, tạo điều kiện thuận lợi cho việc giảng dạy và học tập các môn học chuyên ngành.

Thứ hai, việc ứng dụng công nghệ mô phỏng 3D cho phép hiển thị trực quan và sinh động các chi tiết máy với màu sắc và ký hiệu khác nhau, giúp người học dễ dàng nhận biết và hiểu rõ hơn về cấu tạo phức tạp của các cụm. Đây là một bước tiến quan trọng trong việc khắc phục hạn chế về trang thiết bị học tập hiện có tại Học viện.

Thứ ba, bộ dữ liệu ảo được xây dựng với giao diện thân thiện, có thể chạy trên các phần mềm thông dụng, không đòi hỏi các chương trình chuyên dụng phức tạp. Điều này giúp tăng tính tiếp cận và khả năng ứng dụng rộng rãi của kết quả nghiên cứu, không chỉ trong Học viện mà còn có thể được triển khai đến các đơn vị công binh và xe máy trong toàn quân.

Tuy nhiên, đề tài cũng còn một số hạn chế nhất định. Do thời gian thực hiện ngắn và khối lượng công việc lớn, đề tài mới chỉ tập trung vào ba cụm chính trong hệ thống truyền lực mà chưa thể mô phỏng toàn bộ hệ thống. Ngoài ra, đề tài chưa đi sâu vào mô phỏng động lực học cũng như tính toán, kiểm tra bền, ứng suất và khả năng chịu tải ở các chế độ khác nhau.

Hướng phát triển tiếp theo của đề tài là mở rộng phạm vi mô phỏng sang các cụm và hệ thống khác của xe máy công binh, đồng thời ứng dụng các phần mềm chuyên dụng để phân tích động lực học, ứng suất và độ bền của các chi tiết. Từ đó, hướng tới xây dựng một bộ tài liệu kỹ thuật chuyên ngành hoàn chỉnh, phục vụ hiệu quả cho công tác đào tạo cán bộ kỹ thuật và nghiên cứu phát triển trong lĩnh vực xe máy công binh.`;

const KetLuan = () => {
  return (
    <div className="ketluan-page">
      <h1>Kết luận</h1>
      <div className="ketluan-content">
        {ketLuanText.split("\n\n").map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </div>
  );
};

export default KetLuan; 