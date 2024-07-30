import { Metadata } from "next";
import React from "react";
import Form from "./form";

export const metadata: Metadata = {
  title: "login",
  description: "Login page",
};

const Login = () => {
  return <Form />;
};

export default Login;
