import ServicesIntro from "@/components/ServicesIntro";
import ServiceSection from "@/components/ServiceSection";
import { servicesPage } from "@/data/servicesPage";

export default function ServicesPage() {
  return (
    <>
      <ServicesIntro />

      {servicesPage.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service}
          index={index}
        />
      ))}
    </>
  );
}
