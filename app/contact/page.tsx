import { LockedPage } from "@/components/locked/LockedPage";

export default function ContactPage() {
  return (
    <LockedPage title="CONTACT" subtitle="Support email, WhatsApp, contact form, and digital bid CTA." heroSrc="/images/hero/national-epoxy-pros-garage-epoxy-hero.png" heroAlt="Contact hero">
      <div className="rounded-[1rem] bg-[#fbfaf8] p-5 text-sm leading-7 text-black/80">
        support@nationalepoxypros.com
        <br />
        leads@nationalepoxypros.com
        <br />
        WhatsApp: +15559730487
      </div>
    </LockedPage>
  );
}
