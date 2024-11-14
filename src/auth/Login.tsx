import React, { FormEvent, useState } from "react";
import { Form, FormWrapper } from "../styles/registerStyles";
import axiosInstance from "../utils/axiosInstance";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [redirect, setRedirect] = useState<boolean>(false);

  const validateForm = () => {
    if (!email || !password) {
      setError("All fields are required");
      return false;
    }
    setError("");
    return true;
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const { data } = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);

      setRedirect(true);
    } catch (error: any) {
      console.error("Error log in", error.message);
      setError("Login failed, please try again.");
    }
  };

  if (redirect) return <Navigate to="/profile" />;

  return (
    <FormWrapper>
      <Form onSubmit={submit}>
        {error && <p>{error}</p>}

        <input
          type="email"
          name="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign In</button>
      </Form>
    </FormWrapper>
  );
};

export default Login;
