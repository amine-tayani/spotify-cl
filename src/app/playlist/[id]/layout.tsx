interface Props {
  children: React.ReactNode;
}

export default function PlaylistLayout({ children }: Props) {
  return (
    <div className="">
      <div className="-mt-20 relative">{children}</div>
    </div>
  );
}
