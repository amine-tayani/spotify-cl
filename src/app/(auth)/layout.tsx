interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="">
      <div className="">{children}</div>
    </div>
  );
}
