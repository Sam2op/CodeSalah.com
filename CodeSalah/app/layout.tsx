export const metadata = {
  title: "IlmForge",
  description: "Projects on Demand by Sami & Faruq",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}