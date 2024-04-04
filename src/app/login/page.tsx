"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Axios } from "axios";
export default function LoginUpPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {};
  return (
    <div className="flex min-h-screen flex-col justify-center items-center gap-2">
      <h1 className="text-center text-3xl font-bold">Login Page</h1>
      <div className="flex flex-col items-start gap-2 bg-white p-2 rounded-lg text-black">
        <label htmlFor="email" className="font-medium text-xl">
          Email :
        </label>
        <input
          className="w-full  p-1 border-black border border-solid rounded-lg"
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="email" className="font-medium text-xl">
          Password :
        </label>
        <input
          className="w-full  p-1 border-black border border-solid rounded-lg"
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button
          onClick={() => onLogin()}
          className="w-full p-1 rounded-lg bg-black text-white text-xl font-medium"
        >
          Login here
        </button>
      </div>
      <Link className="underline" href="/signup">
        Visit signup
      </Link>
    </div>
  );
}
