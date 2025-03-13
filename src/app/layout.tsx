import Provider from "@/redux/Provider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
