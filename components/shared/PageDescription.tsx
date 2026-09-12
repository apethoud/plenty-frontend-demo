export default function PageDescription({
  children = "This page is under construction.",
}: {
  children?: React.ReactNode;
}) {
  return <p className="max-w-xl text-brand-900">{children}</p>;
}
