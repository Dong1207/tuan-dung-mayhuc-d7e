import React from 'react'

const Chuong1_1_3 = () => (
  <div className="chapter-content">
    <h1 style={{color: '#0066cc', fontSize: '1.5rem', marginBottom: 24}}>
      1.3. Nguyên lý hoạt động
    </h1>
    <div className="content">
      <p style={{textIndent: 36}}>
        Chúng ta liên hệ sự làm việc của biến mômen với sự làm việc của hai quạt gió. Quạt chủ động được nối với nguồn điện, cánh của nó đẩy không khí sang quạt bị động (không nối với nguồn điện) đặt đối diện như hình dưới. Quạt bị động sẽ quay cùng chiều với quạt chủ động nhờ không khí đập vào. Như vậy sự truyền năng lượng thực hiện qua không khí.
      </p>
      <div style={{textAlign: 'center', margin: '24px 0'}}>
        <img src="/images/NOI_DUNGI_3_1.jpg" alt="Mô hình nguyên lý làm việc của biến mômen" style={{maxWidth: 488, width: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
        <div style={{fontStyle: 'italic', color: '#444', marginTop: 8}}>Hình 1.3. Mô hình nguyên lý làm việc của biến mômen</div>
      </div>
      <p style={{textIndent: 36}}>
        Với biến mômen thủy lực thì vai trò của luồng khí được thực hiện bởi dòng dầu thủy lực. Dầu thủy lực nặng hơn không khí nên năng lượng truyền của thủy lực sẽ lớn hơn. Khi bánh Bơm bắt đầu quay, dầu bên trong bánh Bơm chạy dọc theo các cánh dẫn hướng và bị phun ra ngoài bởi lực ly tâm, dầu bị phun ra đi vào cánh Turbine và chuyển động theo đường xoắn ốc.
      </p>
      <p style={{textIndent: 36}}>
        Dầu đi vào Turbine sẽ va đập vào cánh Turbine với một lực rất lớn, gây ra sự thay đổi hướng chuyển động của dòng dầu khi đi vào bánh Phản ứng. Kết quả là phản lực tại các cánh của Turbine sẽ làm cho Turbine chuyển động quay. Do đó công suất của động cơ được truyền tới tầng tiếp theo phía sau của hệ thống truyền lực.
      </p>
      <p style={{textIndent: 36}}>
        Dầu từ phần trung tâm bên trong bánh Turbine chạy qua bánh Phản ứng, tại đây dầu bị thay đổi hướng chuyển động và lại đi vào bánh Bơm một lần nữa.
      </p>
      <p style={{textIndent: 36}}>
        Như vậy, nhờ lực ly tâm nên dầu chạy từ bánh Bơm sang bánh Turbine rồi về bánh Phản ứng rồi lại chạy đến bánh Bơm theo một vòng tròn. Hướng chạy của dòng dầu được thể hiện như hình dưới.
      </p>
      <div style={{textAlign: 'center', margin: '24px 0'}}>
        <img src="/images/NOI_DUNGI_3_2.jpg" alt="Chiều dòng chất lỏng công tác trong biến mômen" style={{maxWidth: 592, width: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
        <div style={{fontStyle: 'italic', color: '#444', marginTop: 8}}>Hình 1.4. Chiều dòng chất lỏng công tác trong biến mômen</div>
      </div>
      <p style={{textIndent: 36}}>
        Trong khi dầu chạy từ bánh Bơm sang bánh Turbine đến bánh Phản ứng và lại trở về bánh Bơm thì công suất của động cơ đã được truyền từ bánh Bơm đến trục bánh Turbine. Dòng lực (mô men xoắn) từ trục động cơ được truyền đến bánh Bơm qua bánh đà, bánh răng và vỏ truyền động. Qua bánh Phản ứng, lực (mô men) này được biến đổi và truyền đến bánh Turbine. Sau đó được truyền đến trục bánh Turbine và nhờ mối ghép then hoa sẽ được truyền qua khớp nối đến các cơ cấu ở phía sau.
      </p>
      <div style={{textAlign: 'center', margin: '24px 0'}}>
        <img src="/images/NOI_DUNGI_3_3.jpg" alt="Dòng lực (momen) truyền qua biến mô men" style={{maxWidth: 403, width: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
        <div style={{fontStyle: 'italic', color: '#444', marginTop: 8}}>Hình 1.5. Dòng lực (momen) truyền qua biến mô men</div>
      </div>
      <p style={{textIndent: 36}}>
        Bánh Bơm quay tự do trên trục bánh Phản ứng bằng ổ bi và bánh Turbine được cố định trên trục của nó bằng then hoa. Chuyển động quay của bánh Turbine được truyền từ trục Turbine đến khớp nối đầu ra của biến mômen. Bánh Phản ứng của biến mômen được lắp với ống lót bằng các bulong, ống lót này được liên kết chặt chẽ với trục bánh phản ứng nhờ mối ghép then hoa. Trong biến mômen này, trục bánh phản ứng không có khớp một chiều và nó được lắp chặt với vỏ biến mômen bằng các bulong và hoàn toàn không chuyển động.
      </p>
    </div>
  </div>
)

export default Chuong1_1_3
