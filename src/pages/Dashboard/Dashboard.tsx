import { AdminDashboard } from "../../components/AdminDashboard/AdminDashboard";
import { RootDashboard } from "../../components/RootDashboard/RootDashboard";
import { StudentDashboard } from "../../components/StudentDashboard/StudentDashboard";
import { TeacherDashboard } from "../../components/TeacherDashboard/TeacherDashboard";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export const Dashboard = () => {
  const { auth } = useAuthContext()
  switch (auth.role) {
    case "root":
      return <RootDashboard />

    case "student":
      return <StudentDashboard/>
    
    case "teacher":
      return <TeacherDashboard/>

    case "admin":
      return <AdminDashboard/>
  }
};