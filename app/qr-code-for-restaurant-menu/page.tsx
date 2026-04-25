import { Metadata } from "next";
import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Restaurant Menu QR Code Generator — Free & Simple",
  description: "Create a touchless menu for your restaurant. Generate a QR code that links directly to your PDF or online menu.",
};

export default function RestaurantPage() {
  return (
    <>
      <Header />
      <main className="main">
        <LandingPageTemplate 
          title="QR Codes for Restaurants"
          subtitle="A safer, faster dining experience."
          content={
            <>
              <h2>Contactless Menus</h2>
              <p>QR codes have become the standard for modern dining. They reduce printing costs and allow you to update your menu instantly without replacing physical copies.</p>
              <h2>How to setup</h2>
              <p>Upload your menu to your website or a cloud drive (like Google Drive), copy the link, and paste it into our URL generator above. We recommend using a high error correction level for table stickers.</p>
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
