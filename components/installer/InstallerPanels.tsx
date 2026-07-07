const items = [
  ["Job card", "Today’s install, notes, and scope"],
  ["Progress stepper", "Prep, repair, coat, cure, handoff"],
  ["Photo upload", "Before, during, after, and detail shots"],
  ["Checklist", "Safety, masking, mix, broadcast, finish"],
  ["Notes", "Crew notes and client observations"]
];

export function InstallerPanels() {
  return (
    <div className="grid gap-4">
      {items.map(([title, text], index) => (
        <section key={title} className="rounded-3xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d4af37] text-sm font-black text-black">{index + 1}</div>
            <div className="text-sm font-bold text-white">{title}</div>
          </div>
          <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
        </section>
      ))}
    </div>
  );
}
