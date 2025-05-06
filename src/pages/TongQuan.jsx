import React from "react";

const TongQuan = () => (
  <div className="chapter-content">
    <h1
      style={{
        color: "#0066cc",
        fontSize: "1.6rem",
        marginBottom: 24,
        textAlign: "center",
      }}
    >
      TỔNG QUAN VỀ HỆ THỐNG TRUYỀN LỰC MÁY HÚC D7E
    </h1>
    <div className="content">
      <h2>1. Giới thiệu tổng quát về hệ thống truyền lực (HTTL)</h2>
      <h3>1.1. Nhiệm vụ của HTTL</h3>
      <p>
        HTTL là tập hợp tất cả các cơ cấu nối từ động cơ tới bánh xe chủ động,
        bao gồm các cơ cấu truyền, cắt, đổi chiều quay, biến đổi giá trị mô men
        truyền.
      </p>
      <p>HTTL có các nhiệm vụ cơ bản sau:</p>
      <ul>
        <li>
          Truyền và biến đổi mômen quay và tốc độ góc từ động cơ tới bánh xe chủ
          động sao cho phù hợp giữa chế độ làm việc của động cơ và mômen sản
          sinh ra trong quá trình xe máy chuyển động.
        </li>
        <li>Cắt dòng truyền trong thời gian ngắn hoặc dài.</li>
        <li>
          Thực hiện đổi chiều chuyển động nhằm tạo nên chuyển động lùi cho xe
          máy.
        </li>
        <li>
          Tạo khả năng chuyển động êm mại và tính năng việt dã cần thiết trên
          đường.
        </li>
      </ul>
      <h3>1.2. Phân loại HTTL</h3>
      <ul>
        <li>
          <b>a) Phân chia theo hình thức truyền năng lượng</b>
          <ul>
            <li>
              HTTL cơ khí: bao gồm các bộ truyền ma sát, các hộp biến tốc, hộp
              phân phối truyền động các-đăng. Loại này được dùng phổ biến.
            </li>
            <li>
              HTTL cơ khí - thủy lực: bao gồm các bộ truyền cơ khí, bộ truyền
              thủy lực.
            </li>
            <li>
              HTTL điện tử: bao gồm nguồn điện, các động cơ điện, Rơle điện tử,
              dây dẫn.
            </li>
            <li>
              HTTL thủy lực: bao gồm bơm thủy lực, các động cơ thủy lực, van
              điều khiển, ống dẫn.
            </li>
            <li>
              HTTL liên hợp: bao gồm một số bộ phận cơ khí, một số bộ phận thủy
              lực, một số bộ phận điện tử.
            </li>
          </ul>
        </li>
        <li>
          <b>b) Phân chia theo đặc điểm biến đổi các số truyền</b>
          <ul>
            <li>
              Truyền lực có cấp là truyền lực có các tỷ số truyền cố định, việc
              thay đổi số truyền theo bậc thang.
            </li>
            <li>
              Truyền lực vô cấp là truyền lực có tỷ số truyền lực biến đổi liên
              tục tuỳ thuộc vào chế độ làm việc của động cơ và mô men cản từ mặt
              đường.
            </li>
          </ul>
        </li>
        <li>
          <b>c) Phân chia theo phương pháp điều khiển thay đổi tốc độ</b>
          <ul>
            <li>Điều khiển bằng cần số.</li>
            <li>Điều khiển bằng bán tự động.</li>
            <li>Điều khiển tự động.</li>
          </ul>
        </li>
      </ul>
      <h2>2. Hệ thống truyền lực máy húc D7E</h2>
      <h3>2.1. Công dụng</h3>
      <p>
        HTTL trên máy húc D7E là tập hợp tất cả các cơ cấu nối từ động cơ tới
        bánh xe chủ động, bao gồm các cơ cấu truyền, cắt, đổi chiều quay, biến
        đổi giá trị mô men truyền. HTTL có các nhiệm vụ cơ bản sau:
      </p>
      <ul>
        <li>
          Truyền và biến đổi mômen quay và tốc độ góc từ động cơ tới bánh xe chủ
          động sao cho phù hợp giữa chế độ làm việc của động cơ và mômen sản
          sinh ra trong quá trình xe máy chuyển động.
        </li>
        <li>Cắt dòng truyền trong thời gian ngắn hoặc dài.</li>
        <li>
          Thực hiện đổi chiều chuyển động nhằm tạo nên chuyển động lùi cho xe
          máy.
        </li>
        <li>
          Tạo khả năng chuyển động êm mại và tính năng việt dã cần thiết trên
          đường.
        </li>
      </ul>
      <h3>2.2. Cấu tạo</h3>
      <div style={{ textAlign: "center", margin: "24px 0" }}>
        <img
          src={"/images/NOI_DU1.jpg"}
          alt="Hệ thống truyền lực máy húc D7E"
          style={{
            maxWidth: 420,
            width: "100%",
            height: "auto",
            borderRadius: 8,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        />
        <div style={{ fontStyle: "italic", color: "#444", marginTop: 8 }}>
          Hình 1.1. Hệ thống truyền lực máy húc D7E
        </div>
        <div
          style={{
            fontStyle: "italic",
            color: "#444",
            marginTop: 4,
            fontSize: "0.95em",
          }}
        >
          1- Động cơ; 2- Biến mômen thủy lực; 3- Hộp số thủy cơ; 4- Hộp số hành
          tinh; 5- Cơ cấu quay vòng; 6- Truyền lực cạnh; 7- Bánh sao chủ động.
        </div>
      </div>
      <p>
        HTTL sử dụng trên máy húc D7E là HTTL cơ khí - thủy lực (hay còn gọi là
        HTTL thủy cơ) điều khiển bằng cần số. Các thành phần chính của HTTL này
        gồm: Biến mômen thủy lực; hộp số hành tinh điều khiển bằng thủy lực;
        truyền lực cạnh và bánh sao chủ động.
      </p>
    </div>
  </div>
);

export default TongQuan;
