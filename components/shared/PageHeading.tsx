export default function PageHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h1 className="font-heading text-4xl font-semibold text-brand-950">
      {children}
    </h1>
  );
}
