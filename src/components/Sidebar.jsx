import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const [expandedChapters, setExpandedChapters] = useState({});
  const location = useLocation();

  const chapters = [
    {
      id: "trang-chinh",
      title: "Trang chính",
      path: "/",
    },
    {
      id: "tong-quan",
      title: "Tổng quan về HTTL máy húc D7E",
      path: "/tong-quan",
    },
    {
      id: 1,
      title:
        "Chương I: Mô phỏng kết cấu, nguyên lý hoạt động của biến moomen thủy lực",
      sections: [
        { id: "1.1", title: "Vị trí và chức năng", path: "/chuong-1/1.1" },
        { id: "1.2", title: "Cấu tạo chung", path: "/chuong-1/1.2" },
        { id: "1.3", title: "Nguyên lý hoạt động", path: "/chuong-1/1.3" },
        {
          id: "1.4",
          title: "Kết quả mô phỏng",
          subsections: [
            { id: "a", title: "Cấu tạo chi tiết", path: "/chuong-1/1.4a" },
            { id: "b", title: "Quy trình tháo lắp", path: "/chuong-1/1.4b" },
            { id: "c", title: "Nguyên lý làm việc", path: "/chuong-1/1.4c" },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Chương II: Mô phỏng kết cấu, nguyên lý hoạt động của hộp số",
      sections: [
        { id: "2.1", title: "Vị trí, chức năng", path: "/chuong-2/2.1" },
        { id: "2.2", title: "Cấu tạo chung", path: "/chuong-2/2.2" },
        { id: "2.3", title: "Nguyên lý hoạt động", path: "/chuong-2/2.3" },
        { id: "2.4", title: "Mô phỏng", path: "/chuong-2/2.4" },
      ],
    },
    {
      id: 3,
      title:
        "Chương III: Mô phỏng kết cấu, nguyên lý hoạt động của truyền lực cạnh",
      sections: [
        { id: "3.1", title: "Vị trí và công dụng", path: "/chuong-3/3.1" },
        { id: "3.2", title: "Đặc điểm cấu tạo", path: "/chuong-3/3.2" },
        { id: "3.3", title: "Nguyên lý hoạt động", path: "/chuong-3/3.3" },
        { id: "3.4", title: "Mô phỏng", path: "/chuong-3/3.4" },
      ],
    },
    {
      id: "cau-hoi",
      title: "Câu hỏi",
      path: "/cau-hoi",
    },
    {
      id: "thu-vien",
      title: "Thư viện",
      path: "/thu-vien",
    },
    {
      id: "ket-luan",
      title: "Kết luận",
      path: "/ket-luan",
    },
  ];

  const toggleChapter = (chapterId) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={`sidebar${collapsed ? " collapsed" : ""}`}>
      {/* <button
        className="sidebar-toggle"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? "»" : "«"}
      </button> */}
      <div className="sidebar-menu">
        {chapters.map((chapter) =>
          chapter.sections ? (
            <div key={chapter.id} className="sidebar-chapter">
              <button
                className={`chapter-title ${
                  expandedChapters[chapter.id] ? "expanded" : ""
                }`}
                onClick={() => toggleChapter(chapter.id)}
              >
                {chapter.title}
              </button>
              {expandedChapters[chapter.id] && (
                <ul className="chapter-sections-list">
                  {chapter.sections.map((section) => (
                    <li key={section.id}>
                      {section.subsections ? (
                        <div
                          className="sidebar-item"
                          style={{ cursor: "default" }}
                          onClick={() => toggleChapter(section.id)}
                        >
                          {section.id}. {section.title}
                        </div>
                      ) : (
                        <Link
                          to={section.path}
                          className={`sidebar-item ${
                            isActive(section.path) ? "active" : ""
                          }`}
                        >
                          {section.id}. {section.title}
                        </Link>
                      )}
                      {/* Nếu có subsections */}
                      {section.subsections && (
                        <ul
                          className="chapter-sections-list"
                          style={{ marginLeft: 16 }}
                        >
                          {section.subsections.map((sub) => (
                            <li key={sub.id}>
                              <Link
                                to={sub.path}
                                className={`sidebar-item ${
                                  isActive(sub.path) ? "active" : ""
                                }`}
                              >
                                {sub.id}) {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <Link
              key={chapter.id}
              to={chapter.path}
              className={`sidebar-item ${
                isActive(chapter.path) ? "active" : ""
              }`}
            >
              {chapter.title}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Sidebar;
