import { useEffect, useState } from "react";
import Card from "../components/card";
import { SectionWrapper } from "../components/section-wrapper";

export const AboutUs: React.FC = () => {
    const carouselImages = [
        "/images/1.jpg",
        "/images/2.jpg",
        "/images/3.jpg",
        "/images/4.jpg",
        "/images/5.jpg",
        "/images/6.jpg",
        "/images/7.jpg",
        "/images/8.jpg",
        "/images/9.jpg",
        "/images/10.jpg",
        "/images/11.jpg",
        "/images/12.jpg",
        "/images/13.jpg",
        "/images/14.jpg",
        "/images/15.jpg",
        "/images/16.jpg",
        "/images/17.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [carouselImages.length]);

    return (
        <SectionWrapper className="text-center bg-gradient-to-b from-black to-gray-900">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/noise.png')] mix-blend-overlay animate-grain" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-holographic-flow" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-12 lg:py-20">
                <div className="mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 animate-ultra-slow-reveal relative">
                            ¿Quiénes Somos?
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 blur-3xl -z-10" />
                        </span>
                    </h2>

                    <div className="space-y-6 opacity-0 animate-slow-fade-in [animation-delay:1.5s] max-w-3xl mx-auto">
                        <p className="text-slate-300 text-xl leading-relaxed text-center [animation-delay:2s] relative group">
                            <span className="bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent font-medium">
                                Studio X
                            </span>
                            <span className="ml-2 text-slate-400">arquitectos de experiencias digitales memorables</span>
                            <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </p>

                        <div className="h-px bg-gradient-to-r from-cyan-400/20 via-slate-600 to-purple-400/20 my-8 opacity-0 animate-slow-fade-in [animation-delay:3s]" />

                        <p className="text-slate-300 text-xl leading-relaxed text-center opacity-0 animate-slow-fade-in [animation-delay:3.5s] relative">
                            Soluciones visuales impactantes que conectan marcas con su audiencia
                            <span className="absolute -bottom-2 left-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 transform -translate-x-1/2 opacity-0 animate-pulse [animation-delay:5s]" />
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 opacity-0 animate-slow-fade-in [animation-delay:4s]">
                            {[
                                {
                                    title: "Nuestro Enfoque",
                                    content: "Combinamos diseño innovador con estrategias digitales efectivas",
                                    color: "from-cyan-400 to-blue-500"
                                },
                                {
                                    title: "Nuestra Promesa",
                                    content: "Contenido visual de alta calidad que genera engagement",
                                    color: "from-purple-400 to-pink-500"
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="border-l-4 pl-4 relative overflow-hidden group"
                                    style={{ borderImage: `linear-gradient(to bottom, ${item.color}) 1` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-transparent -z-10" />
                                    <h4 className="text-slate-100 font-semibold mb-3 text-lg animate-slow-fade-in">
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-400 text-base leading-relaxed animate-slow-fade-in [animation-delay:0.3s]">
                                        {item.content}
                                    </p>
                                    <div className="absolute -right-8 top-0 w-32 h-32 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 mb-20 relative bg-slate-700/50 backdrop-blur-xl border-2 border-slate-600/30 rounded-2xl overflow-hidden aspect-video opacity-0 animate-slow-fade-in [animation-delay:5.5s] group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-holographic-flow" />
                    <div className="relative w-full h-full">
                        {carouselImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt="Proyectos destacados"
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out transform group-hover:scale-105 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                    }`}
                                loading="eager"
                            />
                        ), [currentIndex])}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {[
                        {
                            title: "Misión",
                            content: "Desarrollar estrategias creativas integrales para potenciar presencia digital",
                            color: "from-cyan-400 to-blue-500",
                            delay: 6
                        },
                        {
                            title: "Visión",
                            content: "Ser el estudio creativo referente en Latinoamérica para 2030",
                            color: "from-purple-400 to-pink-500",
                            delay: 6.3
                        }
                    ].map((item, index) => (
                        <Card
                            key={index}
                            className="bg-slate-800/90 backdrop-blur-lg p-8 rounded-2xl border-2 border-slate-600/30 opacity-0 animate-slow-fade-in relative overflow-hidden group"
                            style={{ animationDelay: `${item.delay}s` }}
                        >
                            <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-r ${item.color} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                            <div className="flex items-center mb-6">
                                <div className={`w-3 h-12 bg-gradient-to-b ${item.color} mr-4 rounded-full animate-ultra-slow-reveal`} />
                                <h3 className="text-2xl font-bold text-slate-100 opacity-0 animate-slow-fade-in [animation-delay:0.3s]">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-slate-300 leading-relaxed opacity-0 animate-slow-fade-in [animation-delay:0.6s]">
                                {item.content}
                            </p>
                        </Card>
                    ))}
                </div>

                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-center mb-12 opacity-0 animate-slow-fade-in [animation-delay:7.5s]">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 animate-ultra-slow-reveal">
                            Pilares Fundamentales
                        </span>
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Creatividad sin Límites",
                                content: "Innovamos en cada proyecto con soluciones visuales únicas",
                                icon: "🎨",
                                color: "from-cyan-400 to-blue-500"
                            },
                            {
                                title: "Excelencia Visual",
                                content: "Diseños que reflejan altos estándares de calidad",
                                icon: "📸",
                                color: "from-purple-400 to-pink-500"
                            },
                            {
                                title: "Impacto Digital",
                                content: "Estrategias que generan conversiones medibles",
                                icon: "📈",
                                color: "from-orange-400 to-red-500"
                            }
                        ].map((value, index) => (
                            <Card
                                key={index}
                                className="p-8 rounded-2xl border-2 border-slate-600/30 backdrop-blur-lg opacity-0 animate-slow-fade-in relative overflow-hidden group"
                                style={{ animationDelay: `${8 + index * 0.5}s` }}
                            >
                                <div className={`absolute -inset-2 bg-gradient-to-r ${value.color} rounded-2xl blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
                                <div className={`text-4xl mb-6 bg-gradient-to-r ${value.color} bg-clip-text text-transparent animate-ultra-slow-reveal`}>
                                    {value.icon}
                                </div>
                                <h4 className="text-xl font-bold text-slate-100 mb-4 opacity-0 animate-slow-fade-in [animation-delay:0.5s]">
                                    {value.title}
                                </h4>
                                <p className="text-slate-300 leading-relaxed opacity-0 animate-slow-fade-in [animation-delay:0.8s]">
                                    {value.content}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};