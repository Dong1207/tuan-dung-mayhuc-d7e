import React from 'react'

const Chuong2_2_3 = () => (
  <div className="chapter-content">
    <h2 style={{ color: '#FF0000' }}>2.3. Nguyên lý hoạt động</h2>
    <p style={{ textIndent: 36, textAlign: 'justify' }}>
      Ta xét sự làm việc của HSHT trên máy ủi KOMATSU D7E. Hộp số này gồm 5 ly hợp khóa tương ứng với ba số truyền tiến và ba số truyền lùi.
    </p>
    <div style={{ textAlign: 'center', margin: '24px 0' }}>
      <img src="/images/chuong2_3_image002.jpg" alt="Hình 2.4. Sơ đồ động học hộp số hành tinh D7E" style={{ maxWidth: '100%', marginBottom: 8 }} />
      <div style={{ fontStyle: 'italic', fontSize: 16 }}>Hình 2.4. Sơ đồ động học hộp số hành tinh D7E</div>
    </div>
    <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
      LH1- Ly hợp số lùi; LH2- Ly hợp số tiến; LH3- Ly hợp số truyền 3; LH4- Ly hợp số truyền 2; LH5- Ly hợp số truyền 1.
    </p>
    <p style={{ textIndent: 36, textAlign: 'justify' }}>
      Hộp số hành tinh sử dụng trên máy ủi D85A-21 được điều khiển bằng thủy lực. Dòng dầu có áp được chuyển từ bơm qua van phân phối đến các ly hợp khóa để cố định các thành phần của hộp số trong từng số truyền. Từ sơ đồ động học của hộp số ta có thể mô tả nguyên lý hoạt động của hộp số ở từng số truyền như sau:
    </p>
    <h3 style={{ color: '#FF0000', marginTop: 32 }}>1. Số 1, tiến</h3>
    <div style={{ textAlign: 'center', margin: '24px 0' }}>
      <img src="/images/chuong2_3_image004.jpg" alt="Hình 2.5. Dòng lực (mô men) truyền qua HSHT ở số truyền tiến" style={{ maxWidth: '100%', marginBottom: 8 }} />
      <div style={{ fontStyle: 'italic', fontSize: 16 }}>Hình 2.5. Dòng lực (mô men) truyền qua HSHT ở số truyền tiến</div>
    </div>
    <p style={{ textIndent: 36, textAlign: 'justify' }}>
      Các ly hợp số 2 và 5 đóng, bánh răng ngoài luôn 14 của LH2 được cố định, giá hành tinh 36 của LH4 và bánh răng ngoài luôn 23 của LH5 được liên kết cùng với nhau. Khi bánh răng ngoài luôn 14 (LH2) cố định thì chuyển động quay từ động cơ được truyền tới giá hành tinh 38 của LH2-3. Tốc độ quay này được giảm xuống qua trục vào 6 của hộp số và bánh răng mặt trời 12 của LH2. Vì thế, giá hành tinh 38 (LH2-3) cũng quay cùng chiều với trục vào 6.
    </p>
    <p style={{ textIndent: 36, textAlign: 'justify' }}>
      Khi giá hành tinh 36 (LH4) và bánh răng ngoài luôn 23 (LH5) ăn khớp nhau thì bánh răng mặt trời 15, bánh răng ngoài luôn 17, giá hành tinh 36 (LH4), bánh răng ngoài luôn 23 (LH5) và giá piston 33 sẽ nối cùng với nhau thành một khối.
    </p>
    <p style={{ textIndent: 36, textAlign: 'justify' }}>
      Chuyển động quay của giá hành tinh 38 (LH2-3) sẽ được truyền tới trục ra 24 của hộp số và chúng có cùng chiều và tốc độ quay. Trục ra 24 quay làm bánh răng côn 28 quay theo nhưng tốc độ đã được giảm xuống nhờ các bánh răng dẫn động 26 và bánh răng bị dẫn 31.
    </p>
    <p style={{ textIndent: 36, textAlign: 'justify' }}>
      Bánh răng côn 28 quay ngược chiều với trục ra 24.
    </p>
    <h3 style={{ color: '#FF0000', marginTop: 32 }}>2. Số 1, lùi</h3>
    <div style={{ textAlign: 'center', margin: '24px 0' }}>
      <img src="/images/chuong2_3_image006.jpg" alt="Hình 2.6. Dòng lực (mô men) truyền qua HSHT ở số truyền lùi" style={{ maxWidth: '100%', marginBottom: 8 }} />
      <div style={{ fontStyle: 'italic', fontSize: 16 }}>Hình 2.6. Dòng lực (mô men) truyền qua HSHT ở số truyền lùi</div>
    </div>
    <p style={{ textIndent: 36, textAlign: 'justify' }}>
      Các ly hợp LH1 và LH5 đóng. Bánh răng ngoài luôn của LH1 cố định. Giá hành tinh của LH4 và bánh răng ngoài luôn của LH5 được nối cùng. Khi các ly hợp LH1 và LH5 đóng thì bánh răng ngoài luôn 9 (LH1) được cố định, giá hành tinh 36 (LH4) và bánh răng ngoài luôn 23 (LH5) được nối cùng với nhau. Khi bánh răng ngoài luôn 9 (LH1) cố định thì giá hành tinh 40 (LH1) ăn khớp với nó cũng được cố định.
    </p>
    <p style={{ textIndent: 36, textAlign: 'justify' }}>
      Chuyển động quay được truyền từ động cơ đến bánh răng ngoài luôn 11 qua trục vào 6 và bánh răng và bánh răng mặt trời 7 (LH1). Bánh răng ngoài luôn 11 quay cùng chiều với trục 6 và bánh răng mặt trời 7 nhưng tốc độ được giảm đi.
    </p>
    <p style={{ textIndent: 36, textAlign: 'justify' }}>
      Khi bánh răng ngoài luôn 11 ăn khớp với giá hành tinh 38 (LH2-3) thì chuyển động quay được truyền đến giá hành tinh 38. Chuyển động này được truyền đến trục ra 24 và làm nó quay cùng chiều với chiều quay của nó khi ở số tiến.
    </p>
    <p style={{ textIndent: 36, textAlign: 'justify' }}>
      Trục ra 24 quay ngược chiều với trục vào 6. Chuyển động quay của trục ra 24 được truyền đến bánh răng côn 28 và cũng được giảm tốc độ nhờ các bánh răng 26 và 31. Bánh răng côn 28 quay ngược chiều với trục ra 24.
    </p>
    <p style={{ textIndent: 36, textAlign: 'justify' }}>
      Ở các số truyền khác nguyên lý cũng tương tự. Ta có thể thống kê như sau:
    </p>
    <div style={{ overflowX: 'auto', margin: '24px 0' }}>
      <table border="1" cellPadding="4" style={{ borderCollapse: 'collapse', minWidth: 400 }}>
        <thead>
          <tr style={{ background: '#FDE9D9' }}>
            <th>T</th>
            <th>L</th>
            <th>LH1</th>
            <th>LH2</th>
            <th>LH3</th>
            <th>LH4</th>
            <th>LH5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="3" style={{ background: '#DBE5F1' }}>Số 1</td>
            <td style={{ background: '#FDE9D9' }}>X</td>
            <td style={{ background: '#DBE5F1' }}>X</td>
            <td style={{ background: '#FDE9D9' }}></td>
            <td style={{ background: '#DBE5F1' }}></td>
            <td style={{ background: '#FDE9D9' }}></td>
            <td style={{ background: '#DBE5F1' }}>X</td>
          </tr>
          <tr>
            <td style={{ background: '#FDE9D9' }}>X</td>
            <td style={{ background: '#DBE5F1' }}>X</td>
            <td style={{ background: '#FDE9D9' }}></td>
            <td style={{ background: '#DBE5F1' }}>X</td>
            <td style={{ background: '#FDE9D9' }}></td>
            <td style={{ background: '#DBE5F1' }}></td>
          </tr>
          <tr>
            <td style={{ background: '#FDE9D9' }}>X</td>
            <td style={{ background: '#DBE5F1' }}>X</td>
            <td style={{ background: '#FDE9D9' }}>X</td>
            <td style={{ background: '#DBE5F1' }}>X</td>
            <td style={{ background: '#FDE9D9' }}></td>
            <td style={{ background: '#DBE5F1' }}></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default Chuong2_2_3
