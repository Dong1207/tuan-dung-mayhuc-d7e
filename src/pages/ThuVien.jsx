import React, { useState, useEffect } from "react";
import "../styles/ThuVien.css";

const ThuVien = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPath, setCurrentPath] = useState(".");
  const [allData, setAllData] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const response = await fetch("/files.json");
        if (!response.ok) throw new Error("Failed to load files.json");
        const data = await response.json();
        setAllData(data);
        setFiles(data["."] || []);
      } catch (error) {
        console.error("Error loading files:", error);
      }
      setLoading(false);
    };
    load();
  }, []);

  const handleFileClick = (file) => {
    if (file.isDirectory) {
      const nextPath = currentPath === "." ? file.name : `${currentPath}/${file.name}`;
      setCurrentPath(nextPath);
      setFiles(allData[nextPath] || []);
    } else {
      setSelectedFile({ ...file, url: `/${currentPath === "." ? "" : currentPath + "/"}${file.name}` });
    }
  };

  const handleBack = () => {
    if (currentPath === ".") return;
    const parentPath = currentPath.split("/").slice(0, -1).join("/") || ".";
    setCurrentPath(parentPath);
    setFiles(allData[parentPath] || []);
  };

  const handleClosePreview = () => setSelectedFile(null);

  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = file.url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="thu-vien">
      <h1>Thư Viện Tài Liệu</h1>
      <div className="content">
        <div className="path-navigation">
          {currentPath !== "." && (
            <button className="back-button" onClick={handleBack}>
              ← Quay lại
            </button>
          )}
          <h2>{currentPath === "." ? "public" : currentPath}</h2>
        </div>
        {loading ? (
          <div className="loading">Đang tải...</div>
        ) : (
          <div className="file-grid">
            {files
              .filter((file) => file.name !== "files.json")
              .map((file, index) => (
                <div
                  key={index}
                  className={`file-card ${file.isDirectory ? "directory" : ""}`}
                  onClick={() => handleFileClick(file)}
                >
                  <div className="file-preview">
                    {file.isDirectory ? (
                      <div className="folder-icon">📁</div>
                    ) : file.type.startsWith("image/") ? (
                      <img src={`/${currentPath === "." ? "" : currentPath + "/"}${file.name}`} alt={file.name} />
                    ) : file.type === "video/mp4" ? (
                      <video src={`/${currentPath === "." ? "" : currentPath + "/"}${file.name}`} />
                    ) : file.type === "application/pdf" ? (
                      <div className="pdf-icon">📄</div>
                    ) : (
                      <div className="unknown-icon">❓</div>
                    )}
                  </div>
                  <div className="file-info">
                    <div className="file-name">{file.name}</div>
                    {!file.isDirectory && <div className="file-size">{file.size}</div>}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      {selectedFile && !selectedFile.isDirectory && (
        <div className="preview-modal">
          <div className="preview-content">
            <div className="preview-header">
              <h3>{selectedFile.name}</h3>
              <div className="preview-actions">
                <button onClick={() => handleDownload(selectedFile)}>Tải xuống</button>
                <button onClick={handleClosePreview}>Đóng</button>
              </div>
            </div>
            <div className="preview-body">
              {selectedFile.type.startsWith("image/") ? (
                <img src={selectedFile.url} alt={selectedFile.name} />
              ) : selectedFile.type === "video/mp4" ? (
                <video controls src={selectedFile.url} />
              ) : selectedFile.type === "application/pdf" ? (
                <iframe src={selectedFile.url} width="100%" height="100%" />
              ) : (
                <div>Không thể xem trước file này</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThuVien;
