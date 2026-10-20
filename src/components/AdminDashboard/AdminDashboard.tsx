import { useAuthContext } from "../../context/AuthContext/AuthContext";
import { HeaderDashboard } from "../HeaderDashboard/HeaderDashboard";
import { TargetAction } from "../TargetAction/TargetAction";
import branch from '../../assets/branch.png'
import user from '../../assets/student.png'
import subject from '../../assets/subject.png'
import group from '../../assets/group.png'
import addGroup from '../../assets/addGroup.png'

export const AdminDashboard = () => {
  const { auth } = useAuthContext();
  return (
    <>
      <HeaderDashboard />
      <main className="mx-auto max-w-7xl p-6">
        <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">
            Welcome Again, {auth.name}
          </h2>
        </section>
        <section className="p-10 flex gap-5">
          <TargetAction
            image={branch}
            name="CREATE BRANCH"
            url="/private/create_branch"
          />
          <TargetAction
            image={user}
            name="CREATE USER"
            url="/private/create_user"
          />
          <TargetAction
            image={subject}
            name="CREATE SUBJECT"
            url="/private/create_subject"
          />
          <TargetAction
            image={group}
            name="CREATE GROUP"
            url="/private/create_group"
          />
          <TargetAction
            image={addGroup}
            name="ASSIGN GROUP"
            url="/private/assign_group"
          />
        </section>
      </main>
    </>
  );
};