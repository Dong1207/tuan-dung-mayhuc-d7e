import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function scanDirectory(dirPath) {
  const result = {};

  function scan(currentPath, relativePath) {
    // Always ensure the directory key exists
    const dirKey = relativePath || ".";
    if (!result[dirKey]) result[dirKey] = [];

    const files = fs.readdirSync(currentPath);

    files.forEach((file) => {
      if (file.startsWith(".")) return; // Bỏ qua file/thư mục ẩn
      const fullPath = path.join(currentPath, file);
      const stats = fs.statSync(fullPath);
      const relativeFilePath = path.join(relativePath, file);

      if (stats.isDirectory()) {
        // Add directory entry
        result[dirKey].push({
          name: file,
          type: "directory",
          isDirectory: true,
        });
        // Recursively scan subdirectories
        scan(fullPath, relativeFilePath);
      } else {
        // Get file extension and determine type
        const ext = path.extname(file).toLowerCase().slice(1);
        if (["json", "svg"].includes(ext)) return; // Bỏ qua file .json và .svg
        let type = "unknown";
        if (["jpg", "jpeg", "bmp", "png", "gif"].includes(ext)) {
          type = `image/${ext === "jpg" ? "jpeg" : ext}`;
        } else if (ext === "mp4") {
          type = "video/mp4";
        } else if (ext === "pdf") {
          type = "application/pdf";
        }
        // Add file to result
        result[dirKey].push({
          name: file,
          type,
          isDirectory: false,
          size: stats.size,
        });
      }
    });
  }

  scan(dirPath, "");
  return result;
}

// Start scanning from public directory
const publicDir = path.join(path.dirname(__dirname), "public");
const filesData = scanDirectory(publicDir);

// Write to files.json
fs.writeFileSync(
  path.join(publicDir, "files.json"),
  JSON.stringify(filesData, null, 2)
);

console.log("Generated files.json successfully!");
