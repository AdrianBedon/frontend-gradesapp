import { Navigate, Route, Routes } from "react-router-dom";
import { GradesPage } from "./pages/GradesPage";
import { GradeRoutes } from "./routes/GradeRoutes";

export const GradesApp = () => {
  return (
    <Routes>
      <Route exact path="*" element={<GradeRoutes />} />
      <Route exact path="*" element={<Navigate to="*" />} />
    </Routes>
  );
};
