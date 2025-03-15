import { ReactNode } from "react";
import FilterBar from "../filter-bar/filterBar";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

interface Props {
  children: ReactNode;
}

export default function LayoutComponent({ children }: Props) {
  return (
    <div>
      <Navbar />
      <FilterBar />
      {children}
      <Footer />
    </div>
  );
}
