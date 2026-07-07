import "./globals.css";

export const metadata = {
  title: "National Epoxy Pros",
  description: "Enterprise PWA shell for National Epoxy Pros."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
