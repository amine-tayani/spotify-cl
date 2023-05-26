interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex justify-center min-h-screen ml-60 overflow-hidden">
      <div className="bg-black px-24 py-8 mt-10 h-[500px] rounded-lg w-[700px] relative z-40">
        {children}
      </div>
    </div>
  );
}
