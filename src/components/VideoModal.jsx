import React from "react";
import "../styles/VideoModal.css";

const VideoModal = ({ isOpen, onClose, videoSrc, title }) => {
  if (!isOpen) return null;

  return (
    <div className="preview-modal">
      <div className="preview-content">
        <div className="preview-header">
          <h3>{title || "Video"}</h3>
          <div className="preview-actions">
            <button onClick={onClose}>Đóng</button>
          </div>
        </div>
        <div className="preview-body">
          <video controls className="video-modal-video">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
