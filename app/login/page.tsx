import { Metadata } from "next";
import React from "react";
import Form from "./form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "login",
  description: "Login page",
};

const Login = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/dashboard");
  }
  return <Form />;
};

export default Login;
