import Background from "./background";

export const SectionWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <section className={`min-h-screen flex flex-col items-center justify-center relative overflow-hidden ${className}`}>
      <Background />
      <div className="relative z-10 w-full px-4 md:px-6 lg:px-8 py-16">
        {children}
      </div>
    </section>
  );
};