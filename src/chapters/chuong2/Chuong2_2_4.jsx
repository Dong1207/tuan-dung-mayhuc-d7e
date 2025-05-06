import React, { useState } from "react";
import VideoModal from '../../components/VideoModal';

const moPhongChiTiet = [
  { label: "1. Giá hành tinh số 1", file: "GIA-HANH-TINH-No1.mp4" },
  { label: "2. Giá hành tinh số 2,3", file: "GIA-HANH-TINH-No2,-No3.mp4" },
  { label: "3. Giá hành tinh số 4", file: "GIA-HANH-TINH-No4.mp4" },
  { label: "4. Bánh răng hành tinh số 1,2", file: "BANH-RANG-HANH-TINH-No1,-No2.mp4" },
  { label: "5. Bánh răng hành tinh số 3,4", file: "BANH-RANG-HANH-TINH-No3,-No4.mp4" },
  { label: "6. Bánh răng mặt trời số 1", file: "BANH-RANG-MAT-TROI-No1.mp4" },
  { label: "7. Bánh răng mặt trời số 2", file: "BANH-RANG-MAT-TROI-No2.mp4" },
  { label: "8. Bánh răng mặt trời số 3", file: "BANH-RANG-MAT-TROI-No3.mp4" },
  { label: "9. Bánh răng mặt trời số 4", file: "BANH-RANG-MAT-TROI-No4.mp4" },
  { label: "10. Bánh răng trục ra", file: "BANH-RANG-TRUC-RA-Z49.mp4" },
  { label: "11. Bánh răng ngoài luân số 2", file: "BANH-RANG-NGOAI-LUAN-No2.mp4" },
  { label: "12. Bánh răng ngoài luân số 3", file: "BANH-RANG-NGOAI-LUAN-No3.mp4" },
];

const moPhongNguyenLy = [
  [
    { label: "1. Tháo ruột hộp số", file: "QUY-TRINH-THAO-RUOT-HOP-SO.mp4" },
    { label: "1. Nguyên lý số 1 và 3", file: "NGUYEN-LY-HOAT-DONG-No1+No3.mp4" },
  ],
  [
    { label: "2. Lắp ruột hộp số", file: "QUY-TRINH-LAP-RUOT-HOP-SO.mp4" },
    { label: "2. Nguyên lý số 1 và 4", file: "NGUYEN-LY-HOAT-DONG-No1+No4.mp4" },
  ],
  [
    { label: "3. Tháo tổng thể hộp số", file: "QUY-TRINH-THAO-TONG-THE-HOP-SO.mp4" },
    { label: "3. Nguyên lý số 2 và 3", file: "NGUYEN-LY-HOAT-DONG-No2+No3.mp4" },
  ],
  [
    { label: "4. Lắp tổng thể hộp số", file: "QUY-TRINH-LAP-TONG-THE-HOP-SO.mp4" },
    { label: "4. Nguyên lý số 2 và 4", file: "NGUYEN-LY-HOAT-DONG-No2+No4.mp4" },
  ],
];

const videoBase41 = "/videos/chuong2-mo-phong-chi-tiet/";
const videoBase42 = "/videos/chuong2-mo-phong-nguyen-ly/";

const Chuong2_2_4 = () => {
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
      <h2 style={{ color: '#FF0000' }}>2.4. Mô phỏng</h2>
      <h3 style={{ color: '#FF0000', marginTop: 24 }}>4.1. Mô phỏng chi tiết</h3>
      <table border="1" style={{ width: '100%', marginBottom: 32, borderCollapse: 'collapse' }}>
        <tbody>
          {moPhongChiTiet.reduce((rows, item, idx) => {
            if (idx % 3 === 0) rows.push([]);
            rows[rows.length - 1].push(item);
            return rows;
          }, []).map((row, i) => (
            <tr key={i}>
              {row.map((item, j) => (
                <td key={j} style={{ padding: 12, textAlign: 'center', fontSize: 16 }}>
                  <div>{item.label}</div>
                  <button
                    className="primary"
                    onClick={() => openModal(videoBase41 + item.file)}
                    style={{ marginTop: 8, padding: '6px 18px', fontSize: 15 }}
                  >
                    Xem video
                  </button>
                </td>
              ))}
              {row.length < 3 && Array.from({ length: 3 - row.length }).map((_, k) => <td key={k + 10}></td>)}
            </tr>
          ))}
        </tbody>
      </table>
      <h3 style={{ color: '#FF0000', marginTop: 24 }}>4.2. Mô phỏng nguyên lý</h3>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
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
                <td key={j} style={{ padding: 12, textAlign: 'center', fontSize: 16 }}>
                  <div>{item.label}</div>
                  <button
                    className="primary"
                    onClick={() => openModal(videoBase42 + item.file)}
                    style={{ marginTop: 8, padding: '6px 18px', fontSize: 15 }}
                  >
                    Xem video
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <VideoModal isOpen={isModalOpen} onClose={closeModal} videoSrc={currentVideo} />
    </div>
  );
};

export default Chuong2_2_4;
