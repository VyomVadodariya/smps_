import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SMPS Electric. Request a quote, product inquiry, or partnership opportunities.",
};

export default function ContactPage() {
  return <ContactClient />;
}
