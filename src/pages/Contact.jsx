import "./../css/Contact.css";
import ContactForm from "../components/Contact";
import Map from "../components/Map";

const Contact = () => {
  

  return (
    <main id="contact-page" className="main-content columns">
       <ContactForm />
       <Map />
    </main>
  );
}

export default Contact;


