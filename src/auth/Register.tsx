import React, { FormEvent, useState } from "react";
import { FormWrapper, Form, FSD } from "../styles/registerStyles";
import axiosInstance from "../utils/axiosInstance";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [redirect, setRedirect] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");

  const validateForm = () => {
    if (!userName || !email || !password) {
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
      await axiosInstance.post("/auth/register", {
        userName,
        email,
        password,
      });

      setRedirect(true);
    } catch (error: any) {
      console.error("Failed to register:", error.message);
      setError("Registration failed, please try again.");
    }
  };

  if (redirect) return <Navigate to="/login" />;

  return (
    <FormWrapper>
      <Form onSubmit={submit}>
        <h2>
          WellCome to <FSD>FSD</FSD>
        </h2>

        {error && <p>{error}</p>}

        <input
          type="text"
          name="userName"
          value={userName}
          placeholder="userName"
          onChange={(e) => setUserName(e.target.value)}
        />

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

        <button type="submit">Sign Up</button>
      </Form>
    </FormWrapper>
  );
};

export default Register;
