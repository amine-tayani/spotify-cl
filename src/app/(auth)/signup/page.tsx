import SignupForm from "@/components/ui/auth/SignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
  description: "Create your account",
};

export default function SignupPage() {
  return <SignupForm />;
}
