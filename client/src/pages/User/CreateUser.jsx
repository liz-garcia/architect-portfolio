import { useEffect, useState } from "react";

import Input from "../../components/Input/Input.jsx";
import useFetch from "../../hooks/useFetch.js";

// TODO Remember - All files related to CreateUser in client and server require extra work. This is just a basic setup.
const CreateUser = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSuccess = () => {
    setName("");
    setLastName("");
    setPassword("");
    setEmail("");
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
      body: JSON.stringify({ user: { name, lastName, password, email } }),
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
    <div>
      <h1>What should the user be?</h1>
      <form onSubmit={handleSubmit}>
        <Input name="name" value={name} onChange={(value) => setName(value)} />
        <Input
          name="lastName"
          value={lastName}
          onChange={(value) => setLastName(value)}
        />
        <Input
          name="password"
          value={password}
          onChange={(value) => setPassword(value)}
        />
        <Input
          name="email"
          value={email}
          onChange={(value) => setEmail(value)}
        />
        <button type="submit">Submit</button>
      </form>
      {statusComponent}
    </div>
  );
};

export default CreateUser;
