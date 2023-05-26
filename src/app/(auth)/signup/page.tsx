import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Signup",
  description: "Create your account",
};

export default function SignupPage() {
  return (
    <form className="mx-20">
      <h1 className="text-xl text-center font-bold text-white my-6">
        Sign up for free to start listening.
      </h1>
      <div className="mb-6">
        <button
          className="rounded-full text-neutral-100 font-semibold bg-[--background-base] text-center inline-flex justify-center border border-neutral-500 relative select-none"
          style={{
            paddingInline: "40px",
            paddingBlock: "12px",
            verticalAlign: "middle",
            inlineSize: "100%",
          }}
        >
          <span
            style={{
              background:
                "url(https://accounts.scdn.co/sso/images/new-google-icon.72fd940a229bc94cf9484a3320b3dccb.svg) no-repeat center center",
            }}
            className="w-6 h-6"
          ></span>
          <span className="capitalize m-auto flex flex-row gap-x-3 items-center">
            Continue with Google
          </span>
        </button>
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-semibold text-neutral-100"
        >
          What& your email?
        </label>
        <input
          type="email"
          id="email"
          className=" bg-[--background-base] border placeholder:text-neutral-400 border-neutral-500 text-neutral-100 text-sm rounded-sm block w-full p-3"
          placeholder="Email or username"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-semibold text-neutral-100"
        >
          Create a password
        </label>
        <input
          type="password"
          id="password"
          className=" bg-[--background-base] border placeholder:text-neutral-400 border-neutral-500 text-neutral-100 text-sm rounded-sm block w-full p-3  "
          required
          placeholder="Create a password"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-semibold text-neutral-100"
        >
          What should we call you?
        </label>
        <input
          type="password"
          id="password"
          className=" bg-[--background-base] border placeholder:text-neutral-400 border-neutral-500 text-neutral-100 text-sm rounded-sm block w-full p-3  "
          required
          placeholder="Enter a profile name"
        />
      </div>

      <button
        type="submit"
        className="bg-[--text-bright-accent] focus:outline-none font-semibold rounded-full px-5 py-2.5 text-center w-full"
      >
        Log In
      </button>
    </form>
  );
}
