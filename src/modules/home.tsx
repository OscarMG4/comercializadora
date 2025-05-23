import React from 'react';
import { 
  Truck, 
  Package, 
  Users, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Soluciones Logísticas Integrales para su Empresa
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Optimizamos su cadena de suministro con tecnología de punta y un servicio personalizado.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
            >
              Contáctenos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Nuestros Servicios</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ofrecemos soluciones completas para la gestión de su inventario y logística
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Distribución Eficiente</h3>
              <p className="text-gray-600">
                Optimizamos las rutas de entrega para garantizar la puntualidad y eficiencia en cada envío.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Gestión de Inventario</h3>
              <p className="text-gray-600">
                Control total de su inventario con tecnología de punta y reportes en tiempo real.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Atención Personalizada</h3>
              <p className="text-gray-600">
                Un equipo dedicado a entender y satisfacer las necesidades específicas de su empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">¿Por qué elegirnos?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Nos destacamos por nuestra experiencia y compromiso con la excelencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Experiencia Comprobada</h3>
                  <p className="text-gray-600 mt-1">
                    Más de 10 años en el mercado, sirviendo a empresas de todos los tamaños.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Tecnología de Punta</h3>
                  <p className="text-gray-600 mt-1">
                    Implementamos las últimas innovaciones en gestión logística y control de inventario.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Servicio Personalizado</h3>
                  <p className="text-gray-600 mt-1">
                    Adaptamos nuestras soluciones a las necesidades específicas de cada cliente.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">98%</h3>
                  <p className="text-gray-600">Clientes Satisfechos</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
                  <p className="text-gray-600">Soporte Técnico</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Eficiencia en Entregas</span>
                  <span className="text-gray-900 font-semibold">99.5%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-600 rounded-full" style={{ width: '99.5%' }} />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Precisión en Inventario</span>
                  <span className="text-gray-900 font-semibold">99.9%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-600 rounded-full" style={{ width: '99.9%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para optimizar su logística?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contáctenos hoy mismo y descubra cómo podemos ayudarle a mejorar su operación.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Solicitar Información
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};