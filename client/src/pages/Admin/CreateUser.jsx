import { useEffect, useState } from "react";

import Input from "../../components/Input.jsx";
import PrimaryButton from "../../components/Buttons/PrimaryButton.jsx";
import useFetch from "../../hooks/useFetch.js";

const layoutContainer = "size-full flex items-center justify-center";
const createUserStyle =
  "flex flex-col text-center items-center justify-center gap-1 p-8 w-fit justify-self-center border border-zinc-800 rounded-2xl text-base 3xl:text-lg/relaxed mb-2";
const headerStyle = "pb-4 mb-4 border-b border-zinc-800";
const h1Style = "text-xl/tight font-bold 3xl:text-3xl/relaxed";
const h2Style = "text-base 3xl:text-xl/relaxed";
const formStyle = "flex flex-col gap-4 items-stretch w-full";
const containerStyle = "flex flex-col justify-between gap-1";
const labelStyle = "text-left";
const buttonContainer = "w-full flex place-content-center mt-1";

// TODO Remember - All files related to CreateUser in client and server require extra work. This is just a very basic setup.
const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authCode, setAuthCode] = useState("");

  const onSuccess = () => {
    setUsername("");
    setPassword("");
    setAuthCode("");
  };
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    "/user/create",
    onSuccess
  );

  useEffect(() => {
    return cancelFetch;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    performFetch({
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ user: { username, password, authCode } }),
    });
  };

  let statusComponent = null;

  if (error != null) {
    statusComponent = (
      <div className="pt-2">
        Error while trying to create user: {error.toString()}
      </div>
    );
  } else if (isLoading) {
    statusComponent = <div className="pt-2">Creating user....</div>;
  }

  return (
    <div className={layoutContainer}>
      <div id="createUser" className={createUserStyle}>
        <header className={headerStyle}>
          <h1 className={h1Style}>Create a new user</h1>
          <h2 className={h2Style}>Please provide new user credentials.</h2>
        </header>
        <form onSubmit={handleSubmit} className={formStyle}>
          <div className={containerStyle}>
            <label htmlFor="username" className={labelStyle}>
              Enter new username:
            </label>
            <Input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(value) => setUsername(value)}
              required
            />
          </div>
          <div className={containerStyle}>
            <label htmlFor="password" className={labelStyle}>
              Enter password:
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(value) => setPassword(value)}
              required
            />
          </div>
          <div className={containerStyle}>
            <label htmlFor="authCode" className={labelStyle}>
              Enter authorization code:
            </label>
            <Input
              id="authCode"
              name="authCode"
              type="password"
              value={authCode}
              onChange={(value) => setAuthCode(value)}
              required
            />
          </div>
          <div className={buttonContainer}>
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </div>
        </form>
        {statusComponent}
      </div>
    </div>
  );
};

export default CreateUser;
