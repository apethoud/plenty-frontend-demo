const swatches = [
  { name: "brand-950", className: "bg-brand-950" },
  { name: "brand-900", className: "bg-brand-900" },
  { name: "brand-800", className: "bg-brand-800" },
  { name: "brand-600", className: "bg-brand-600" },
  { name: "brand-400", className: "bg-brand-400" },
  { name: "brand-100", className: "bg-brand-100" },
  { name: "gold-500", className: "bg-gold-500" },
  { name: "gold-200", className: "bg-gold-200" },
  { name: "gold-100", className: "bg-gold-100" },
  { name: "graphite-400", className: "bg-graphite-400" },
  { name: "magenta-600", className: "bg-magenta-600" },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-12 px-8 py-16 sm:px-16">
      <section className="flex flex-col gap-2">
        <h1 className="font-heading text-4xl font-semibold text-brand-950">
          Plenty Design System
        </h1>
        <p className="max-w-xl text-brand-900">
          Colors and typography are wired up as Tailwind theme tokens. Build
          pages against these instead of raw hex values.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-medium text-brand-900">
          Colors
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {swatches.map((swatch) => (
            <div key={swatch.name} className="flex flex-col gap-2">
              <div
                className={`h-16 w-full rounded-lg border border-brand-100 ${swatch.className}`}
              />
              <span className="font-sans text-sm text-brand-950">
                {swatch.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-2xl font-medium text-brand-900">
          Typography
        </h2>
        <div className="flex flex-col gap-3">
          <p className="font-heading text-3xl font-semibold text-brand-950">
            Fredoka heading
          </p>
          <p className="font-sans text-lg font-normal text-brand-950">
            Mukta Mahee body text, weight 400
          </p>
          <p className="font-sans text-lg font-semibold text-brand-950">
            Mukta Mahee body text, weight 600
          </p>
        </div>
      </section>
    </main>
  );
}
