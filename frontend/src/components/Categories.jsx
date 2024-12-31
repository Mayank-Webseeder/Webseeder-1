import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBusinessTime, faMicrochip, faRocket, faChartSimple } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  const categories = [
    { title: "Business", bg: "bg-white", icon: faBusinessTime },
    { title: "Startup", bg: "bg-yellow-400", icon: faRocket },
    { title: "Economy", bg: "bg-white", icon: faChartSimple },
    { title: "Technology", bg: "bg-white", icon: faMicrochip },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-0">
      <h2 className="mb-6 text-xl sm:text-2xl font-semibold text-center text-gray-800"><b>All Categories</b></h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div key={index} className={`p-4 border rounded-lg ${category.bg} shadow flex flex-col items-center text-center`}>
            <FontAwesomeIcon icon={category.icon} className="w-8 h-8 mb-4 text-gray-700" />
            <h3 className="text-lg font-semibold">{category.title}</h3>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
