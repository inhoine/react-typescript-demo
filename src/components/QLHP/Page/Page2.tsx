import DSHV from "./Details/DSHV";
import IDetails from "./Details/IDetails";
import Details from "./Title/Details";
import User from "./User/User";

function Page2() {
    return (
      <div className="content">
        <User />
        <Details />
        {/* <IDetails /> */}
        <DSHV />
      </div>
    );
  }
  
  export default Page2;