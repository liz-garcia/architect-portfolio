import { useEffect, useState } from "react";

import Input from "../../components/Input.jsx";
import PrimaryButton from "../../components/Buttons/PrimaryButton.jsx";
import useFetch from "../../hooks/useFetch.js";

const createUserStyle =
  "flex flex-col text-center items-center justify-center gap-1 p-8 w-fit justify-self-center border border-zinc-800 rounded-2xl text-base m-8";
const headerStyle = "pb-4 mb-4 border-b border-zinc-800";
const h1Style = "text-xl/tight font-bold 3xl:text-5xl";
const h2Style = "text-base 3xl:text-3xl";
const formStyle = "flex flex-col gap-4 items-stretch w-full";
const containerStyle = "flex flex-col justify-between gap-2";
const labelStyle = "text-left 3xl:text-3xl";
const buttonContainer = "w-full flex place-content-center mt-2";

// TODO Remember - All files related to CreateUser in client and server require extra work. This is just a very basic setup.
const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSuccess = () => {
    setUsername("");
    setPassword("");
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
      body: JSON.stringify({ user: { username, password } }),
    });
  };

  let statusComponent = null;

  if (error != null) {
    statusComponent = (
      <div>Error while trying to create user: {error.toString()}</div>
    );
  } else if (isLoading) {
    statusComponent = <div>Creating user....</div>;
  }

  return (
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
            name="username"
            value={username}
            onChange={(value) => setUsername(value)}
          />
        </div>
        <div className={containerStyle}>
          <label htmlFor="password" className={labelStyle}>
            Enter password:
          </label>
          <Input
            name="password"
            value={password}
            onChange={(value) => setPassword(value)}
          />
        </div>
        <div className={buttonContainer}>
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </div>
      </form>
      {statusComponent}
    </div>
  );
};

export default CreateUser;
