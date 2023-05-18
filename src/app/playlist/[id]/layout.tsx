interface Props {
  children: React.ReactNode;
}

export default function PlaylistLayout({ children }: Props) {
  return (
    <div className="">
      <div className="">{children}</div>
    </div>
  );
}
