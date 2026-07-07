const services = [
  ["Metallic Epoxy", "Luxe movement, flat walkable finish, reflective depth."],
  ["Full Flake", "Dense broadcast texture with showroom durability."],
  ["Polished Concrete", "Clean industrial clarity with premium restraint."],
  ["Visualizer", "Help the buyer choose a floor with confidence."]
];

export function ServiceCards() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {services.map(([title, description]) => (
        <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-bold text-white">{title}</div>
          <p className="mt-2 text-sm leading-6 text-white/70">{description}</p>
        </article>
      ))}
    </section>
  );
}
