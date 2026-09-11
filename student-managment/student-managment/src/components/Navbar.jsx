import KolkataClock from "./KolkataClock";
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <nav>
        <h2> student task portal</h2>
        <div className="nav-utilities">
          <div className="nav-links">
            <Link to ={"/"}>Home</Link>
            <Link to ={"/tasks"}>Tasks</Link>
          </div>
          <KolkataClock />
        </div>
        </nav>
  );
}
export default Navbar;
