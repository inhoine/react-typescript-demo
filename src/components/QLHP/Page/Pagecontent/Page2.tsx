import IDetails from "../Details/IDetails";
import DSHV from "../DSHV/DSHV";
import Details from "../Title/Details";
import User from "../User/User";


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