import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const LogoIcon = () => {
    return (
        <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="w-17 h-12"
        />
    );
};

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { to: '/', label: 'Inicio' },
        { to: '/servicios', label: 'Servicios' },
        { to: '/contacto', label: 'Contacto' }
    ];

    return (
        <nav className="bg-black/95 text-white py-4 shadow-xl border-b border-gray-500">
            <div className="container mx-auto flex items-center justify-between px-6">
                <LogoIcon />
                <div className="hidden md:flex space-x-8">
                    {links.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`relative text-lg font-semibold transition-all duration-300 after:content-[''] after:block after:h-1 after:rounded-full after:bg-gray-400 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${location.pathname === link.to ? 'text-gray-300' : 'text-gray-400 hover:text-white'}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <button className="md:hidden p-2 rounded-lg bg-gray-600 hover:bg-gray-500" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
                </button>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-black text-center py-4 space-y-4 border-t border-gray-600 animate-slideDown`}>
                {links.map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className={`block text-lg font-medium transition-all duration-300 hover:text-gray-400 ${location.pathname === link.to ? 'text-gray-400' : 'text-gray-500'}`}
                        onClick={() => setIsOpen(false)}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
