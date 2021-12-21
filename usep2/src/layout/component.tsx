import { FC } from "react";
import {useDispatch, useSelector} from "react-redux";
import images from "../assets";
import "./styles.css";
import {userRefreshTokenSelector, userTokenSelector, userUsernameSelector} from "../redux/user/selectors";
import { loadingSelector } from "../redux/ui/selectors";
import { Link } from "react-router-dom";
import {logoutRequested} from "../redux/user/actions";

const Layout: FC = ({ children }) => {
  const { University } = images;

  const loading = useSelector(loadingSelector);
  const tokenUser = useSelector(userTokenSelector);
  const refreshTokenUser = useSelector(userRefreshTokenSelector);
  const userUsername = useSelector(userUsernameSelector);

  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logoutRequested({
            token: tokenUser,
            refreshToken: refreshTokenUser
          }));
  }


  return (
    <div className="usep-container">
            <header className="usep-header">
            <Link to="/">
                <University className="usep-logo" />
            </Link>
                <ul className="usep-firstMenu">
                    <li className="clickable"> <Link className="header-link" to="/tramiteUniv">Univ</Link></li>
                    <li className="clickable"> <Link className="header-link" to="/tramiteSep">Sep</Link></li>
                </ul>
                <ul className="usep-secondMenu">
                    <li className="clickable"><Link className="header-link" to="">Contact</Link></li>
                    {/* <li className="clickable"> <Link className="header-link" to="/login">Log in</Link> </li>  */}
                    {!tokenUser ? (
                        <li className="clickable">
                        <Link className="header-link" to="/login">Log in</Link>
                        </li>
                    ) : <li className="clickable" onClick={logoutUser}>
                            <Link className="username" to="/">{userUsername}</Link>
                        </li>}
                </ul>
            </header>

            <div className="usep-content">{children}</div>

            <footer className="usep-footer">
                <ul className="footer-greyList">
                    <li className="clickable"></li>
                    <li className="clickable"></li>
                    <li className="clickable"></li>
                </ul>
                <ul className="footer-second-greyList">
                    <li className="clickable">{"Terms & conditions"}</li>
                    <li className="clickable">Privacy Policy</li>
                </ul>
                <div className="footer-rights">
                    <p>© 2021 Usep System</p>
                    <p>All rights reserved</p>
                </div>
            </footer>
        </div>
  );
};

export default Layout;
