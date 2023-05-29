"use client";

import * as React from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

const LoginForm: React.FC = () => {
  const loginWithSpotify = React.useCallback(() => {
    signIn("spotify");
  }, []);
  return (
    <form className="mx-20">
      <h1 className="text-4xl text-center font-bold text-white mb-6 mt-4">
        Log in to Spotify
      </h1>
      <div className="mb-6">
        <button
          onClick={loginWithSpotify}
          className="rounded-full py-2 px-6 text-neutral-900 font-semibold bg-[--text-bright-accent] text-center inline-flex justify-center relative select-none"
        >
          <span className="capitalize m-auto flex flex-row gap-x-3 items-center">
            Login with Spotify
          </span>
        </button>
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-semibold text-neutral-100"
        >
          Email or username
        </label>
        <input
          type="email"
          id="email"
          className=" bg-[--background-base] border placeholder:text-neutral-400 border-neutral-500 text-neutral-100 text-sm rounded-sm block w-full p-3"
          placeholder="Email or username"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-semibold text-neutral-100"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className=" bg-[--background-base] border placeholder:text-neutral-400 border-neutral-500 text-neutral-100 text-sm rounded-sm block w-full p-3  "
        />
      </div>

      <button
        type="submit"
        className="bg-[--text-bright-accent] focus:outline-none font-semibold rounded-full px-5 py-2.5 text-center w-full"
      >
        Log In
      </button>
      <p className="mt-4 text-sm text-center text-neutral-400">
        Don{`'`}t have an account?
        <Link
          href="/signup"
          className="font-medium hover:underline text-neutral-200 ml-2"
        >
          Sign up for Spotify
        </Link>
        .
      </p>
    </form>
  );
};

export default LoginForm;
