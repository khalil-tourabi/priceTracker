import { Metadata } from 'next';
import React from 'react'
import Form from './form';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "signup",
    description: "signup page",
  };

const Register = async () => {
  const session = await getServerSession();
    if(session) {
        redirect('/signin');
    }
  return <Form />;
}

export default Register