import "./Navmenu.css";

import Navbar from "./Nav/Navmenu";
import Page from "./Page/Page";
import Page2 from "./Page/Page2";

function AppPage() {
  return (
    <div className="app-page">
      <Navbar />
      {/* <Page /> */}
      <Page2 />
    </div>
  );
}

export default AppPage;