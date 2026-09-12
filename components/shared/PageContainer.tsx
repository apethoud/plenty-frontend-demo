export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-1 flex-col gap-4 px-8 py-16 sm:px-16">
      {children}
    </main>
  );
}
