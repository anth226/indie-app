import React, { useEffect } from "react";
import queryString from "query-string";
import { useDispatch } from "react-redux";
import cookie from "react-cookies";
import { getUser } from "../../actions/auth";

function LoginSuccess(props) {
  const value = queryString.parse(props.location.search);
  const { token, id } = value;
  cookie.save("token", token, { path: "/" });
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(getUser(id));
  });
  return <></>;
}

export default LoginSuccess;
