import IDetails from "./Table/IDetails";
import Details from "./Title/Details";
import User from "./User/User";

function Page2() {
    return (
      <div className="content">
        <User />
        <Details />
        <IDetails />
      </div>
    );
  }
  
  export default Page2;