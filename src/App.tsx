import { Routes, Route } from "react-router-dom";
import AuthProvider from "src/lib/AuthProvider";
import Home from "src/pages/home/Home";
import List from "src/pages/list/List";
import Layout from "src/components/Layout";

export default function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}
