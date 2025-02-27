import SERVICES from "@/data/services";

export const SERVICES_SECTION_ID = "home-view-services-section";

export default function ServicesSection() {
  return (
    <section id={SERVICES_SECTION_ID} className="home-view-section py-8">
      <h2 className="text-3xl font-bold text-center mb-4">Services</h2>
      <span className="text-xl text-center block mb-8">What We Offer</span>
      <div className="services__container container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <ServiceContent
            key={`service-content-${index}`}
            icon={
              <service.icon
                className={`text-4xl text-${getColorByIndex(index)}-500`}
              />
            }
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

function getColorByIndex(index: number): string {
  const colors = ["blue", "green", "yellow", "red", "purple", "indigo"];
  return colors[index % colors.length];
}

function ServiceContent({ icon, title, description }) {
  return (
    <div className="services__content p-4 border rounded-lg shadow-lg">
      <div className="icon__box flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="services__title text-xl font-semibold mb-2">{title}</h3>
      <p className="services__description text-secondary dark:text-secondary-dark">
        {description}
      </p>
    </div>
  );
}
