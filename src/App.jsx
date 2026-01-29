import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competences" element={<Skills />} />
          <Route path="/projets" element={<Projects />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
