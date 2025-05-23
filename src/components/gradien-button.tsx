import { Link } from "react-router-dom";

export const GradientButton = ({
    onClick,
    children,
    href,
    type = "button",
}: {
    onClick?: () => void;
    children: string;
    href?: string;
    type?: "button" | "submit" | "reset";
}) => {
    const className = `
        relative overflow-hidden
        text-white font-medium py-3 px-6
        rounded-md border border-gray-400
        hover:shadow-2xl
        transition-all duration-300
        active:scale-95
        group
    `;

    const gradientOverlay = `
        absolute inset-0
        bg-gradient-to-r from-gray-400 to-gray-300
        opacity-0 group-hover:opacity-30
        transition-all duration-500
        -translate-x-full group-hover:translate-x-0
    `;

    if (href) {
        return (
            <Link to={href} className={className + " inline-block"}>
                <div className={gradientOverlay}></div>
                <span className="relative z-10">{children}</span>
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={className} type={type}>
            <div className={gradientOverlay}></div>
            <span className="relative z-10">{children}</span>
        </button>
    );
};

export default GradientButton;