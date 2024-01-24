import { Navigate, Route, Routes } from "react-router-dom";
import { GradeProvider } from "../context/GradeProvider";
import { GradesPage } from "../pages/GradesPage";

export const GradeRoutes = () => {
  return (
    <>
      <GradeProvider>
        <Routes>
          <Route path="/" element={<GradesPage />} />
          <Route path="/" element={<Navigate to="grades" />} />
        </Routes>
      </GradeProvider>
    </>
  );
};
