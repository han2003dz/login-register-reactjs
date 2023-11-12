import "./style.scss";
import { checkExits, register } from "../../services/usersService";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../helpers/cookie";
import { useDispatch } from "react-redux";
import { generateToken } from "../../helpers/generateToken";
function Register() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const checkExitsEmail = await checkExits("email", email);
    if (checkExitsEmail.length > 0) {
      alert("Email đã tồn tại !");
    } else {
      const options = {
        username: username,
        email: email,
        password: password,
        token: generateToken(20),
      };
      const response = await register(options);
      if (response) {
        navigate("/");
      } else {
        alert("Đăng ký thất bại");
      }
    }
  };

  const checkPassword = () => {};
  return (
    <>
      <div
        className="register
      "
      >
        <h1>Đăng ký tài khoản</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName">FullName</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Nhập tên đầy đủ..."
            />
          </div>
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
          <button type="submit">Đăng ký</button>
        </form>
      </div>
    </>
  );
}

export default Register;
