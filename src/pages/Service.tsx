

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}

const services: Service[] = [
  {
    title: "Web Development",
    description: "We build modern, responsive, and fast websites tailored to your needs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h11M9 21H7a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v2m3 3h5m-3-3v6"
        />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    description:
      "Create user-friendly mobile apps for both iOS and Android platforms.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18l-6-6m0 0l6-6m-6 6h18"
        />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your business with our data-driven digital marketing strategies.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h11m-6 6H7a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v2m3 3h5m-3-3v6"
        />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
