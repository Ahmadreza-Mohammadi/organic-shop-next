import { ReactNode } from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

interface Props {
  children: ReactNode;
}

export default function LayoutComponent({ children }: Props) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
