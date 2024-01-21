import { Navigate, Route, Routes } from "react-router-dom";

export const GradeRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="grades" element={<GradesPage />} />
        <Route path="/" element={<Navigate to="/grades" />} />
      </Routes>
    </>
  );
};
