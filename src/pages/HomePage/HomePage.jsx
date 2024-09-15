import { Link, Outlet, useMatches, useNavigate } from "react-router-dom";
import logout from "../../assets/logout.png";
import lyonImg from "../../assets/lyon.jpg";
import "./HomePage.css";

const HomePage = () => {
  //#region [router]
  const navigate = useNavigate();
  const matches = useMatches();
  //#endregion

  //#region [methods]
  const handleLogout = () => {
    localStorage.removeItem("finalcad.token");
    navigate("/login");
  };
  //#endregion

  //#region [render]
  const crumbs = matches
    .filter((match) => !!match.handle?.crumb)
    .map((match) => match.handle.crumb(match.data));
  return (
    <div className="home-page">
      <div className="home-page-header">
        <div className="home-page-header-left">
          <Link to="/" className="home-page-header-link-projects">
            <img src={lyonImg} alt="enterprise_img" />
            <div>
              <p>Gare de Lyon Part-Dieu</p>
              <p>gare-de-lyon-part-dieu | 1000 members</p>
            </div>
          </Link>
          {crumbs.length > 0 && (
            <div className="home-page-header-project">
              {">"}
              {crumbs[0]}
            </div>
          )}
        </div>
        <div className="home-page-header-right">
          <img src={logout} alt="logout" onClick={handleLogout} />
          <span>L</span>
        </div>
      </div>
      <div className="home-page-outlet">
        <Outlet />
      </div>
    </div>
  );
  //#endregion
};

export default HomePage;
