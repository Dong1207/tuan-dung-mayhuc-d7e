import React, { useState } from "react";
import VideoModal from '../../components/VideoModal';

const videoBase41 = "/videos/chuong3-mo-phong-chi-tiet/";
const videoBase42 = "/videos/chuong3-mo-phong-nguyen-ly/";

const moPhongChiTiet = [
  { label: "1. BR chậu", file: "BANH-RANG-CHAU.mp4" },
  { label: "2. BR quả dứa", file: "BANH-RANG-QUA-DUA.mp4" },
  { label: "3. BR lớn", file: "BANH-RANG-LON.mp4" },
  { label: "4. Bánh sao chủ động", file: "BANH-SAO-CHU-DONG.mp4" },
  { label: "5. Càng gạt", file: "CANG-GAT.mp4" },
  { label: "6. Càng xoay", file: "CANG-XOAY.mp4" },
  { label: "7. Cụm đai phanh", file: "CUM-DAI-PHANH.mp4" },
  { label: "8. Đĩa ép", file: "DIA-EP.mp4" },
  { label: "9. Dẫn động", file: "DAN-DONG.mp4" },
  { label: "10. Mặt bích", file: "MAT-BICH.mp4" },
  { label: "11. Nắp BR vành chậu", file: "NAP-TRUC-BANH-RANG-VANH-CHAU.mp4" },
  { label: "12. Nắp vỏ dẫn hướng", file: "NAP-VO-DAN-HUONG.mp4" },
];

const moPhongNguyenLy = [
  [
    { label: "1. Tháo lắp ly hợp", file: "THAO-LAP-LY-HOP.mp4" },
    { label: "1. Nguyên lý quay vòng phải", file: "QUAY-VNG-PHAI.mp4" },
  ],
  [
    { label: "2. Lắp ly hợp", file: "THAO-LY-HOP.mp4" },
    { label: "2. Nguyên lý quay vòng trái", file: "QUAY-VNG-TRAI.mp4" },
  ],
  [
    { label: "3. Nguyên lý đi thẳng", file: "NGUYÊN-LÝ-DI-THẲNG-1.mp4" },
    { label: "3. Nguyên lý quay vòng gấp", file: "QUAY-VNG-GAP-PHAI.mp4" },
  ],
];

const Chuong3_3_4 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const openModal = (videoFile) => {
    setCurrentVideo(videoFile);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="chapter-content">
      <h2 style={{ color: "#FF0000" }}>3.4. Mô phỏng</h2>
      <h3 style={{ color: "#FF0000", marginTop: 24 }}>Mô phỏng chi tiết</h3>
      <table
        border="1"
        style={{ width: "100%", marginBottom: 32, borderCollapse: "collapse" }}
      >
        <tbody>
          {moPhongChiTiet
            .reduce((rows, item, idx) => {
              if (idx % 3 === 0) rows.push([]);
              rows[rows.length - 1].push(item);
              return rows;
            }, [])
            .map((row, i) => (
              <tr key={i}>
                {row.map((item, j) => (
                  <td
                    key={j}
                    style={{ padding: 12, textAlign: "center", fontSize: 16 }}
                  >
                    <div>{item.label}</div>
                    <button
                      onClick={() => openModal(videoBase41 + item.file)}
                      style={{
                        marginTop: 8,
                        padding: "6px 18px",
                        fontSize: 15,
                      }}
                    >
                      Xem video
                    </button>
                  </td>
                ))}
                {row.length < 3 &&
                  Array.from({ length: 3 - row.length }).map((_, k) => (
                    <td key={k + 10}></td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
      <h3 style={{ color: "#FF0000", marginTop: 24 }}>Mô phỏng nguyên lý</h3>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: 8, fontSize: 16 }}>Mô phỏng tháo lắp</th>
            <th style={{ padding: 8, fontSize: 16 }}>Mô phỏng nguyên lý</th>
          </tr>
        </thead>
        <tbody>
          {moPhongNguyenLy.map((row, i) => (
            <tr key={i}>
              {row.map((item, j) => (
                <td
                  key={j}
                  style={{ padding: 12, textAlign: "center", fontSize: 16 }}
                >
                  <div>{item.label}</div>
                  <button
                    onClick={() => openModal(videoBase42 + item.file)}
                    style={{ marginTop: 8, padding: "6px 18px", fontSize: 15 }}
                  >
                    Xem video
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoSrc={currentVideo}
      />
    </div>
  );
};

export default Chuong3_3_4;
