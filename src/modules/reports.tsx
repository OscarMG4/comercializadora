import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Calendar, 
  Download,
  DollarSign,
  Package,
  Users,
  AlertTriangle
} from 'lucide-react';

const Reports: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Reportes y Análisis</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-gray-600" />
            Seleccionar Período
          </button>
          <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
            <Download className="h-5 w-5 mr-2 text-gray-600" />
            Exportar
          </button>
        </div>
      </div>

      {/* KPIs Principales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Ventas Totales</p>
              <p className="text-2xl font-semibold text-gray-900">$1,234,567</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-600" />
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              +12.5% vs mes anterior
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pedidos Completados</p>
              <p className="text-2xl font-semibold text-gray-900">1,234</p>
            </div>
            <Package className="h-8 w-8 text-blue-600" />
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              +8.3% vs mes anterior
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Nuevos Clientes</p>
              <p className="text-2xl font-semibold text-gray-900">45</p>
            </div>
            <Users className="h-8 w-8 text-purple-600" />
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              +15.2% vs mes anterior
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Productos por Vencer</p>
              <p className="text-2xl font-semibold text-red-600">23</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-red-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              +5.2% vs mes anterior
            </div>
          </div>
        </div>
      </div>

      {/* Gráficos y Análisis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Tendencia de Ventas</h2>
          <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-16 w-16 text-gray-400" />
            {/* Aquí irá el gráfico de ventas */}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Distribución de Productos</h2>
          <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-16 w-16 text-gray-400" />
            {/* Aquí irá el gráfico de distribución */}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Rendimiento por Categoría</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Categoría A</span>
              <div className="flex items-center">
                <div className="w-32 h-2 bg-gray-100 rounded-full mr-2">
                  <div className="h-2 bg-blue-600 rounded-full" style={{ width: '75%' }} />
                </div>
                <span className="text-sm font-medium text-gray-900">75%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Categoría B</span>
              <div className="flex items-center">
                <div className="w-32 h-2 bg-gray-100 rounded-full mr-2">
                  <div className="h-2 bg-green-600 rounded-full" style={{ width: '60%' }} />
                </div>
                <span className="text-sm font-medium text-gray-900">60%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Categoría C</span>
              <div className="flex items-center">
                <div className="w-32 h-2 bg-gray-100 rounded-full mr-2">
                  <div className="h-2 bg-yellow-600 rounded-full" style={{ width: '45%' }} />
                </div>
                <span className="text-sm font-medium text-gray-900">45%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Alertas y Recomendaciones</h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-900">Stock Crítico</p>
                  <p className="text-sm text-red-600 mt-1">5 productos requieren reabastecimiento inmediato</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-yellow-900">Rotación Baja</p>
                  <p className="text-sm text-yellow-600 mt-1">3 categorías muestran rotación por debajo del objetivo</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-start">
                <TrendingUp className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-green-900">Oportunidad de Crecimiento</p>
                  <p className="text-sm text-green-600 mt-1">2 categorías muestran potencial de expansión</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports; 