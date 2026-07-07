import "./globals.css";

export const metadata = {
  title: "National Epoxy Pros",
  description: "Enterprise PWA shell for National Epoxy Pros.",
  manifest: "/manifest.json"
};

export const viewport = {
  themeColor: "#d9a441",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
