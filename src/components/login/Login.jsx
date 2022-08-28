import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const users = useSelector((state) => state.users);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const checks = { isEmpty: false, incorrectCombo: false };
  const navigate = useNavigate();
  console.log(userName);
  console.log(password);

  function handleSubmit(e) {
    e.preventDefault();
    e.preventDefault();
    const d = new Date();
    d.setTime(d.getTime() + 5 * 24 * 60 * 60 * 1000);
    console.log("clicked");
    const user = users.find(
      (user) => user.userName === userName && user.password === password
    );
    console.log(user);
    //navigate(`/home/${user.id}`);
    document.cookie = `id=${user.id};expires=${d}; path=/;`;

    console.log(document.cookie);
  }
  return (
    <div>
      <form>
        <legend>Login in here Trainer</legend>
        <div>
          <legend>Username</legend>
          {checks.isEmpty ? <h2>cant be empty</h2> : null}
          <input
            type="text"
            name="username"
            id="username"
            onChange={({ target }) => setUserName(target.value)}
            value={userName}
          />
        </div>
        <div>
          <legend>password</legend>
          {checks.isEmpty ? <h2>cant be empty</h2> : null}
          <input
            type="password"
            name="password"
            id="password"
            onChange={({ target }) => setPassword(target.value)}
            value={password}
          />
        </div>
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}

export default Login;
