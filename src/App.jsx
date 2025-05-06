import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import MucLuc from "./pages/MucLuc";
import TongQuan from "./pages/TongQuan";
import Chuong1_1_1 from "./chapters/chuong1/Chuong1_1_1";
import Chuong1_1_2 from "./chapters/chuong1/Chuong1_1_2";
import Chuong1_1_3 from "./chapters/chuong1/Chuong1_1_3";
import Chuong1_1_4a from "./chapters/chuong1/Chuong1_1_4a";
import Chuong1_1_4b from "./chapters/chuong1/Chuong1_1_4b";
import Chuong1_1_4c from "./chapters/chuong1/Chuong1_1_4c";
import Chuong2_2_1 from "./chapters/chuong2/Chuong2_2_1";
import Chuong2_2_2 from "./chapters/chuong2/Chuong2_2_2";
import Chuong2_2_3 from "./chapters/chuong2/Chuong2_2_3";
import Chuong2_2_4 from "./chapters/chuong2/Chuong2_2_4";
import Chuong3_3_2 from "./chapters/chuong3/Chuong3_3_2";
import Chuong3_3_3 from "./chapters/chuong3/Chuong3_3_3";
import Chuong3_3_4 from "./chapters/chuong3/Chuong3_3_4";
import Chuong3_1_1 from "./chapters/chuong3/Chuong3_1_1";
import ThuVien from "./pages/ThuVien";
import CauHoi from "./pages/CauHoi";
import KetLuan from "./pages/KetLuan";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="muc-luc" element={<MucLuc />} />
          <Route path="tong-quan" element={<TongQuan />} />

          <Route path="chuong-1/1.1" element={<Chuong1_1_1 />} />
          <Route path="chuong-1/1.2" element={<Chuong1_1_2 />} />
          <Route path="chuong-1/1.3" element={<Chuong1_1_3 />} />
          <Route path="chuong-1/1.4a" element={<Chuong1_1_4a />} />
          <Route path="chuong-1/1.4b" element={<Chuong1_1_4b />} />
          <Route path="chuong-1/1.4c" element={<Chuong1_1_4c />} />
          <Route path="chuong-2/2.1" element={<Chuong2_2_1 />} />
          <Route path="chuong-2/2.2" element={<Chuong2_2_2 />} />
          <Route path="chuong-2/2.3" element={<Chuong2_2_3 />} />
          <Route path="chuong-2/2.4" element={<Chuong2_2_4 />} />
          <Route path="chuong-3/3.1" element={<Chuong3_1_1 />} />
          <Route path="chuong-3/3.2" element={<Chuong3_3_2 />} />
          <Route path="chuong-3/3.3" element={<Chuong3_3_3 />} />
          <Route path="chuong-3/3.4" element={<Chuong3_3_4 />} />
          <Route path="thu-vien" element={<ThuVien />} />
          <Route path="cau-hoi" element={<CauHoi />} />
          <Route path="ket-luan" element={<KetLuan />} />

          <Route path="*" element={<div>404 - Không tìm thấy trang</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
