import "./style.scss";
import { login } from "../../services/usersService";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../helpers/cookie";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../action/login";
function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const response = await login(email, password);
    if (response.length > 0) {
      setCookie("id", response[0].id, 1);
      setCookie("email", response[0].email, 1);
      setCookie("token", response[0].token, 1);
      setCookie("username", response[0].username, 1);
      // lưu thêm token,...
      dispatch(checkLogin(true));
      navigate("/");
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  };

  // const checkPassword = () => {}; // mắt xem pass
  return (
    <>
      <div className="login">
        <h1>Đăng nhập</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Nhập email..."
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Nhập mật khẩu..."
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
