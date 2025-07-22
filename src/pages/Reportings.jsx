import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Reportings = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const periods = [
    { id: 'week', label: 'Cette semaine' },
    { id: 'month', label: 'Ce mois' },
    { id: 'year', label: 'Cette année' }
  ];

  // Données statiques pour les graphiques
  const engagementData = [
    { day: 'Lun', value: 75 },
    { day: 'Mar', value: 85 },
    { day: 'Mer', value: 65 },
    { day: 'Jeu', value: 90 },
    { day: 'Ven', value: 80 }
  ];

  const performanceData = [
    { day: 'Lun', value: 70 },
    { day: 'Mar', value: 80 },
    { day: 'Mer', value: 75 },
    { day: 'Jeu', value: 85 },
    { day: 'Ven', value: 95 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-2 sm:p-4">
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Reportings</h1>
            <div className="flex flex-wrap gap-2 sm:gap-2">
              {periods.map(period => (
                <button
                  key={period.id}
                  onClick={() => setSelectedPeriod(period.id)}
                  className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                    selectedPeriod === period.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl border border-gray-200 p-4"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Engagement</h2>
              <div className="h-48 flex items-end justify-around">
                {engagementData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="w-8 bg-blue-500 rounded-t-lg transition-all duration-500"
                      style={{ height: `${item.value}%` }}
                    />
                    <span className="text-xs text-gray-500 mt-2">{item.day}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl border border-gray-200 p-4"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Performance</h2>
              <div className="h-48 flex items-end justify-around">
                {performanceData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="w-8 bg-green-500 rounded-t-lg transition-all duration-500"
                      style={{ height: `${item.value}%` }}
                    />
                    <span className="text-xs text-gray-500 mt-2">{item.day}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-200 p-4"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Progression</h2>
              <div className="space-y-4">
                  <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Posts</span>
                    <span className="text-gray-900 font-medium">75%</span>
                          </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full" style={{ width: '75%' }} />
                          </div>
                    </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Stories</span>
                    <span className="text-gray-900 font-medium">60%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full" style={{ width: '60%' }} />
                          </div>
                          </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Reels</span>
                    <span className="text-gray-900 font-medium">90%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-purple-500 rounded-full" style={{ width: '90%' }} />
                  </div>
                </div>
                        </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl border border-gray-200 p-4"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Statistiques</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Vues totales</div>
                  <div className="text-2xl font-bold text-gray-900">12.5K</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Engagement</div>
                  <div className="text-2xl font-bold text-gray-900">3.2K</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Nouveaux abonnés</div>
                  <div className="text-2xl font-bold text-gray-900">245</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Taux de conversion</div>
                  <div className="text-2xl font-bold text-gray-900">4.8%</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reportings;