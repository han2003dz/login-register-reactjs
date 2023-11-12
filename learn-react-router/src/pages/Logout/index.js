/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../helpers/cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../action/login";
function Logout() {
  const navigate = useNavigate();
  deleteAllCookies();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLogin(false));
    navigate("/login");
  }, []);
  return <></>;
}

export default Logout;
