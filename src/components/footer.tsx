export const Footer = () => {
    return (
        <footer className="bg-black/95 text-white py-6 border-t border-gray-800 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center gap-2 text-center">
                    <p className="text-gray-300 text-sm">
                        © {new Date().getFullYear()} Todos los derechos reservados.
                    </p>
                    <p className="text-gray-400 text-xs font-light">
                        Desarrollo por Ing. Oscar Muñoz
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;