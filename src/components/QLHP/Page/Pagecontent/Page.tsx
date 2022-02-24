import TableList from "../Table/TableList";
import Title from "../Title/Title";
import User from "../User/User";

function Page() {
  return (
    <div className="content">
      <User />
      <Title />
      <TableList />
    </div>
  );
}

export default Page;