import { AdminDashboard } from "../../components/AdminDashboard/AdminDashboard";
import { RootDashboard } from "../../components/RootDashboard/RootDashboard";
import { StudentDashboard } from "../../components/StudentDashboard/StudentDashboard";
import { TeacherDashboard } from "../../components/TeacherDashboard/TeacherDashboard";

export const Dashboard = () => {
  return (
    <>
    {/* <StudentDashboard/> */}
    <AdminDashboard/>
    <RootDashboard />
    {/* <TeacherDashboard/> */}
    </>
  );
};