import AboutCo from "@/components/about/aboutCo/aboutCo";
import CustomerReviews from "@/components/about/customerReviews/customerReviews";
import Team from "@/components/about/team/team";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

function about() {
  return (
    <>
          <Navbar />
     
       <div>
          <AboutCo />
          <Team />
          <CustomerReviews />
        </div>
      <Footer />
    </>
  );
}

export default about;
