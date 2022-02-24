import DSHV from "../DSHV/DSHV";
import User from "../User/User";
import TitleHSHV from "../Title/TitleHSHV";

function Page3() {
    return (
      <div className="content">
        <User />
        <TitleHSHV />
        <DSHV />
      </div>
    );
  }
  
  export default Page3;