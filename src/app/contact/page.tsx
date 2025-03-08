import AsideContact from "@/components/contact/asideContact/asideContact";
import ContactForm from "@/components/contact/contactForm/contactForm";

export default function Contact() {
  return (
    <div className="flex gap-[24px] px-[300px] justify-center items-center  min-h-screen">
      <AsideContact />
      <ContactForm />
    </div>
  );
}
