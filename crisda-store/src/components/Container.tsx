export default function Container({
  children,
  y  = '12'
}: {
  children: React.ReactNode;
  y? : string
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12 lg:py-${y}`}>
      {children}
    </div>
  );
}