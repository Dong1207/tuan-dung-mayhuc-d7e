import React from 'react'

const Chuong1_1_4b = () => (
  <div className="chapter-content">
    <h1 style={{color: '#0066cc', fontSize: '1.5rem', marginBottom: 24}}>
      1.4b. Quy trình tháo lắp và hoạt động của biến mô men
    </h1>
    <div className="content">
      <p style={{textIndent: 36}}>
        Dưới đây là các video minh họa quy trình tháo lắp, hoạt động của bơm bánh răng và biến mô men:
      </p>
      <ol style={{fontSize: '1.1rem', marginLeft: 24}}>
        <li style={{marginBottom: 16}}>
          <b>Tháo lắp bơm bánh răng</b>
          <div style={{margin: '12px 0'}}>
            <video controls style={{maxWidth: 400, width: '100%'}}>
              <source src="/videos/BBR_THAO_LAP.mp4" type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
          </div>
        </li>
        <li style={{marginBottom: 16}}>
          <b>Hoạt động bơm bánh răng</b>
          <div style={{margin: '12px 0'}}>
            <video controls style={{maxWidth: 400, width: '100%'}}>
              <source src="/videos/BBR_DONG_HOC.mp4" type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
          </div>
        </li>
        <li style={{marginBottom: 16}}>
          <b>Tháo biến mô men</b>
          <div style={{margin: '12px 0'}}>
            <video controls style={{maxWidth: 400, width: '100%'}}>
              <source src="/videos/QUY_TRINH_THAO_BIEN_MO_MEN.mp4" type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
          </div>
        </li>
        <li style={{marginBottom: 16}}>
          <b>Lắp biến mô men</b>
          <div style={{margin: '12px 0'}}>
            <video controls style={{maxWidth: 400, width: '100%'}}>
              <source src="/videos/QUY_TRINH_LAP_BIEN_MO_MEN.mp4" type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
          </div>
        </li>
      </ol>
    </div>
  </div>
)

export default Chuong1_1_4b
