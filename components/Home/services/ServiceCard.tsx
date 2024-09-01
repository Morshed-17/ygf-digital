import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const ServiceCard = ({ icon: Icon, title, description }: Props) => (
  <div className="group relative overflow-hidden rounded-xl bg-white/10 p-8 shadow-lg backdrop-blur-lg transition-all duration-500 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 transition-opacity duration-500 group-hover:opacity-20"></div>
    <div className="relative z-10">
      <div className="mb-6 inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-3 text-white shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:scale-110">
        <Icon size={28} />
      </div>
      <h3 className="mb-3 text-2xl font-bold text-white transition-colors duration-500 group-hover:text-blue-300">
        {title}
      </h3>
      <p className="text-gray-300 transition-colors duration-500 group-hover:text-white">
        {description}
      </p>
    </div>
  </div>
);

export default ServiceCard
