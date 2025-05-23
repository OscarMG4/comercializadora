import React from 'react';
import { 
  Truck, 
  Package, 
  Users, 
  BarChart3,
  Clock,
  Shield,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Truck,
      title: 'Distribución y Logística',
      description: 'Servicio de distribución eficiente con seguimiento en tiempo real y optimización de rutas.',
      features: [
        'Entrega programada y flexible',
        'Seguimiento GPS en tiempo real',
        'Optimización de rutas',
        'Manejo de documentación'
      ]
    },
    {
      icon: Package,
      title: 'Gestión de Inventario',
      description: 'Control total de su inventario con tecnología de punta y reportes detallados.',
      features: [
        'Control de stock en tiempo real',
        'Alertas de inventario bajo',
        'Reportes personalizados',
        'Trazabilidad de productos'
      ]
    },
    {
      icon: Users,
      title: 'Atención al Cliente',
      description: 'Servicio personalizado con un equipo dedicado a satisfacer sus necesidades.',
      features: [
        'Asesoría especializada',
        'Soporte 24/7',
        'Resolución rápida de incidencias',
        'Comunicación directa'
      ]
    },
    {
      icon: BarChart3,
      title: 'Análisis y Reportes',
      description: 'Información detallada y análisis para la toma de decisiones estratégicas.',
      features: [
        'Dashboard personalizado',
        'Reportes de rendimiento',
        'Análisis de tendencias',
        'Métricas de servicio'
      ]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Eficiencia',
      description: 'Optimizamos sus procesos para maximizar la productividad y reducir costos.'
    },
    {
      icon: Shield,
      title: 'Seguridad',
      description: 'Garantizamos la integridad de sus productos y la confidencialidad de su información.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Soluciones logísticas integrales diseñadas para optimizar su cadena de suministro
              y potenciar el crecimiento de su empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Detallados */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Beneficios Clave</h2>
            <p className="mt-4 text-lg text-gray-600">
              Nuestros servicios están diseñados para brindar valor a su empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm p-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Necesita más información?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Nuestro equipo está listo para ayudarle a encontrar la solución perfecta para su empresa.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contáctenos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}; 