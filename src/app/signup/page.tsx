"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Axios } from "axios";
export default function SignUpPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const onSignUP = async () => {};
  return (
    <div className="flex min-h-screen flex-col justify-center items-center gap-2">
      <h1 className="text-center text-3xl font-bold">SignUp Page</h1>
      <div className="flex flex-col items-start gap-2 bg-white p-2 rounded-lg text-black">
        <label htmlFor="email" className="font-medium text-xl">
          Email
        </label>
        <input
          className="w-full  p-1 border-black border border-solid rounded-lg"
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <label htmlFor="email" className="font-medium text-xl">
          Email
        </label>
        <input
          className="w-full  p-1 border-black border border-solid rounded-lg"
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <label htmlFor="email" className="font-medium text-xl">
          Email
        </label>
        <input
          className="w-full  p-1 border-black border border-solid rounded-lg"
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </div>
    </div>
  );
}
