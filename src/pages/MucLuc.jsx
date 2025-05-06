import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/MucLuc.css'

const MucLuc = () => {
  const chapters = [
    {
      id: 1,
      title: 'Chương I: Tổng quan về máy hút bụi D7E',
      sections: [
        { id: '1.1', title: 'Giới thiệu chung', path: '/chuong-1/1.1' },
        { id: '1.2', title: 'Cấu tạo máy hút bụi D7E', path: '/chuong-1/1.2' },
        { id: '1.3', title: 'Nguyên lý hoạt động', path: '/chuong-1/1.3' },
        { id: '1.4', title: 'Các bộ phận chính', path: '/chuong-1/1.4' },
        { id: '1.5', title: 'Hướng dẫn sử dụng', path: '/chuong-1/1.5' }
      ]
    },
    {
      id: 2,
      title: 'Chương II: Chi tiết các bộ phận',
      sections: [
        { id: '2.1', title: 'Động cơ và quạt hút', path: '/chuong-2/2.1' },
        { id: '2.2', title: 'Bộ lọc bụi', path: '/chuong-2/2.2' },
        { id: '2.3', title: 'Túi đựng bụi', path: '/chuong-2/2.3' },
        { id: '2.4', title: 'Các phụ kiện đi kèm', path: '/chuong-2/2.4' }
      ]
    },
    {
      id: 3,
      title: 'Chương III: Bảo trì và sửa chữa',
      sections: [
        { id: '3.1', title: 'Vệ sinh và bảo dưỡng', path: '/chuong-3/3.1' },
        { id: '3.2', title: 'Các lỗi thường gặp', path: '/chuong-3/3.2' },
        { id: '3.3', title: 'Hướng dẫn sửa chữa', path: '/chuong-3/3.3' },
        { id: '3.4', title: 'Lưu ý khi sử dụng', path: '/chuong-3/3.4' }
      ]
    }
  ]

  return (
    <div className="muc-luc">
      <h1>Mục Lục</h1>
      
      {chapters.map(chapter => (
        <div key={chapter.id} className="chapter">
          <h2>{chapter.title}</h2>
          <ul>
            {chapter.sections.map(section => (
              <li key={section.id}>
                <Link to={section.path}>
                  {section.id}. {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default MucLuc 