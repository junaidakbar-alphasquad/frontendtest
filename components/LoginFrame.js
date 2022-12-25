import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../reduxsetup/dataApi";
import { setAuthData } from "../reduxsetup/dataSlice";

const LoginFrame = () => {
  const [email, setEmail] = useState("");
  const [login] = useLoginMutation();
  const dispatch=useDispatch()
  const handlesubmit = (e) => {
    e.preventDefault();
    login({ email })
      .unwrap()
      .then((res) => {
        dispatch(setAuthData(res))
        console.log(res)
        sessionStorage.setItem("token", res.token);
      });
  };
  return (
    <form onSubmit={(e) => handlesubmit(e)}>
      <input
        className="rounded-md bg-slate-700 outline-none"
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginFrame;
