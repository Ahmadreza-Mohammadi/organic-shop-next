import ProductsComponent from "@/components/products/products";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
