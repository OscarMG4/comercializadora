import { ReactNode } from "react";

export const Card = ({
  image,
  title,
  description,
  className = "",
  children,
  style,
}: {
  image?: string;
  title?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <div className={`m-4 rounded-3xl border-2 shadow-2xl overflow-hidden transition-all duration-500 hover:scale-105 group ${className}`} style={style}>
      {image && <img src={image} alt={title} className="w-full h-48 object-cover object-top" />}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <div className="text-gray-400 text-base leading-relaxed">
          {children || description}
        </div>
      </div>
    </div>
  );
};

export default Card;