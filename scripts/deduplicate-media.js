import fs from "fs";
import path from "path";
import crypto from "crypto";

// === CẤU HÌNH ===
const step = 1; // Đặt 1 để kiểm tra, 2 để xóa và cập nhật import

const exts = ["jpg", "jpeg", "bmp", "png", "gif", "mp4"];
const mediaDirs = ["public/images", "public/videos"];

// === HÀM LẤY FILE MEDIA ===
function getAllMediaFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      results = results.concat(getAllMediaFiles(filePath));
    } else {
      const ext = path.extname(file).toLowerCase().slice(1);
      if (exts.includes(ext)) results.push(filePath);
    }
  });
  return results;
}

const allFiles = mediaDirs.flatMap(getAllMediaFiles);

// === TÍNH HASH ===
function getFileHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  return crypto.createHash("md5").update(fileBuffer).digest("hex");
}

const hashMap = {};
allFiles.forEach((file) => {
  const hash = getFileHash(file);
  if (!hashMap[hash]) hashMap[hash] = [];
  hashMap[hash].push(file);
});

// === LỌC NHÓM FILE TRÙNG ===
const duplicateGroups = Object.values(hashMap).filter((group) => group.length > 1);

if (step === 1) {
  // === CHỈ KIỂM TRA ===
  if (duplicateGroups.length === 0) {
    console.log("Không có file trùng nhau.");
  } else {
    console.log(`Có ${duplicateGroups.length} nhóm file trùng nhau:`);
    duplicateGroups.forEach((group, idx) => {
      console.log(`\nNhóm ${idx + 1}:`);
      group.forEach(file => console.log("  " + file));
    });
    let totalDup = duplicateGroups.reduce((sum, group) => sum + group.length - 1, 0);
    console.log(`\nTổng số file trùng cần loại bỏ: ${totalDup}`);
  }
} else if (step === 2) {
  // === XÓA FILE TRÙNG & CẬP NHẬT IMPORT ===
  function replaceInSrc(oldPath, newPath) {
    const srcDir = "src";
    function walk(dir) {
      fs.readdirSync(dir).forEach((file) => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
          walk(fullPath);
        } else if (/(\.js|\.jsx|\.ts|\.tsx|\.json|\.md|\.html|\.css)$/i.test(file)) {
          let content = fs.readFileSync(fullPath, "utf8");
          // Thay cả dạng /images/abc.jpg và images/abc.jpg
          const oldRel = oldPath.replace(/^public\//, "/");
          const oldNoSlash = oldRel.replace(/^\//, "");
          const newRel = newPath.replace(/^public\//, "/");
          const newNoSlash = newRel.replace(/^\//, "");
          let newContent = content
            .split(oldRel).join(newRel)
            .split(oldNoSlash).join(newNoSlash);
          if (content !== newContent) {
            fs.writeFileSync(fullPath, newContent, "utf8");
            console.log(`Updated import in: ${fullPath}`);
          }
        }
      });
    }
    walk(srcDir);
  }

  duplicateGroups.forEach((group) => {
    const keepFile = group[0];
    group.slice(1).forEach((removeFile) => {
      replaceInSrc(removeFile, keepFile);
      fs.unlinkSync(removeFile);
      console.log(`Removed duplicate: ${removeFile} (kept: ${keepFile})`);
    });
  });

  console.log("Đã loại bỏ file trùng và cập nhật import/tham chiếu trong src!");
} else {
  console.log("Vui lòng đặt biến step = 1 (kiểm tra) hoặc step = 2 (xóa & cập nhật import)");
} 