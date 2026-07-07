const cards = [
  ["Lead captured", "Quote request submitted with garage goals"],
  ["Design aligned", "Floor type, color direction, and vehicle inspiration set"],
  ["Install scheduled", "Job assigned and installer checklist prepared"],
  ["Job complete", "Photos, notes, and sign-off archived"]
];

export function WorkflowCards() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map(([title, text], index) => (
        <article key={title} className="rounded-3xl border border-white/10 bg-[#17120d] p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d4af37] text-sm font-black text-black">
              {index + 1}
            </div>
            <div className="text-sm font-bold text-white">{title}</div>
          </div>
          <p className="mt-3 text-sm leading-6 text-white/70">{text}</p>
        </article>
      ))}
    </section>
  );
}
