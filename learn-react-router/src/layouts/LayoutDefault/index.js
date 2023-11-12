import "./style.scss";
import { Outlet, NavLink } from "react-router-dom";
import { getCookie } from "../../helpers/cookie";
import { useSelector } from "react-redux";
function LayoutDefault() {
  const token = getCookie("token"); // chưa có token test tạm email
  const username = getCookie("username");

  console.log(username);

  const isLogin = useSelector((state) => state.loginReducer);
  console.log(isLogin);
  return (
    <>
      <div className="layout__default">
        <header className="layout__default--header">
          <div className="layout__default--logo">Logo</div>
          <div className="layout__default--menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </div>
          <div className="layout__default--account">
            <ul>
              {token ? (
                <li>
                  <NavLink to="/info-user" className="username">
                    {username}
                  </NavLink>
                  <NavLink to="/logout">Đăng xuất</NavLink>
                </li>
              ) : (
                <li>
                  <NavLink to="/login" className="login">
                    Đăng nhập
                  </NavLink>
                  <NavLink to="/register">Đăng ký</NavLink>
                </li>
              )}
            </ul>
          </div>
        </header>
        <main className="layout__default--main">
          <Outlet />
        </main>
        <footer className="layout__default--footer">
          Copyright @2023 by hann.com
        </footer>
      </div>
    </>
  );
}

export default LayoutDefault;
