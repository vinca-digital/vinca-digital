
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import StatProgress from '../components/StatProgress';
import RankBadge from '../components/RankBadge';

const Forfait = () => {
  const [currentTab, setCurrentTab] = useState('details');
  
  const forfaitDetails = {
    name: "Forfait Business Pro",
    posts: 30,
    reels: 8,
    stories: 60,
    analytics: true,
    support: "Premium",
    price: "490€",
    nextRenewal: "30 juin 2025",
    usedPosts: 24,
    usedReels: 6,
    usedStories: 45
  };
  
  const historique = [
    { date: "01/05/2025", action: "Renouvellement forfait", montant: "490€" },
    { date: "01/04/2025", action: "Renouvellement forfait", montant: "490€" },
    { date: "15/03/2025", action: "Ajout 5 reels", montant: "175€" },
    { date: "01/03/2025", action: "Renouvellement forfait", montant: "490€" },
    { date: "01/02/2025", action: "Renouvellement forfait", montant: "490€" }
  ];
  
  const upgrades = [
    {
      name: "Pack Reels Premium",
      description: "+5 reels par mois",
      price: "175€",
      icon: "🎬"
    },
    {
      name: "Pack Stories Pro",
      description: "+20 stories par mois",
      price: "90€",
      icon: "📱"
    },
    {
      name: "Analytics Avancé",
      description: "Rapports hebdomadaires détaillés",
      price: "120€",
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1 ml-64 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Mon forfait</h1>
            <div className="flex items-center">
              <RankBadge rank="Gold" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-vinca-primary to-vinca-secondary p-6 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">{forfaitDetails.name}</h2>
                  <p className="opacity-90">Prochain renouvellement: {forfaitDetails.nextRenewal}</p>
                </div>
                <div className="text-2xl font-bold">{forfaitDetails.price}/mois</div>
              </div>
            </div>
            
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setCurrentTab('details')}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                    currentTab === 'details'
                      ? 'border-vinca-primary text-vinca-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Détails du forfait
                </button>
                <button
                  onClick={() => setCurrentTab('usage')}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                    currentTab === 'usage'
                      ? 'border-vinca-primary text-vinca-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Utilisation
                </button>
                <button
                  onClick={() => setCurrentTab('history')}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                    currentTab === 'history'
                      ? 'border-vinca-primary text-vinca-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Historique
                </button>
              </nav>
            </div>
            
            <div className="p-6">
              {currentTab === 'details' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Inclus dans votre forfait</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Posts Instagram</p>
                        <p className="text-lg font-medium">{forfaitDetails.posts} par mois</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <div className="bg-purple-100 p-2 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Reels</p>
                        <p className="text-lg font-medium">{forfaitDetails.reels} par mois</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <div className="bg-pink-100 p-2 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Stories</p>
                        <p className="text-lg font-medium">{forfaitDetails.stories} par mois</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <div className="bg-green-100 p-2 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Analytics</p>
                        <p className="text-lg font-medium">{forfaitDetails.analytics ? 'Inclus' : 'Non inclus'}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Améliorez votre forfait</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {upgrades.map((upgrade, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="text-3xl mb-2">{upgrade.icon}</div>
                          <h4 className="font-medium text-gray-800">{upgrade.name}</h4>
                          <p className="text-sm text-gray-500 mb-3">{upgrade.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="font-bold">{upgrade.price}</span>
                            <button className="bg-vinca-primary hover:bg-vinca-secondary text-white py-1 px-3 rounded text-sm">
                              Ajouter
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {currentTab === 'usage' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Utilisation du forfait</h3>
                  <div className="space-y-6">
                    <StatProgress
                      title="Posts Instagram"
                      current={forfaitDetails.usedPosts}
                      total={forfaitDetails.posts}
                      color="vinca-primary"
                    />
                    
                    <StatProgress
                      title="Reels"
                      current={forfaitDetails.usedReels}
                      total={forfaitDetails.reels}
                      color="purple"
                    />
                    
                    <StatProgress
                      title="Stories"
                      current={forfaitDetails.usedStories}
                      total={forfaitDetails.stories}
                      color="pink"
                    />
                  </div>
                  
                  <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-yellow-100 p-2 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Besoin de plus de contenu ?</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Vous avez utilisé 80% de votre forfait ce mois-ci. Envisagez d'ajouter des services supplémentaires pour éviter toute interruption.
                        </p>
                        <button className="mt-3 text-sm font-medium text-vinca-primary hover:text-vinca-secondary">
                          Voir les options
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {currentTab === 'history' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Historique des transactions</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Montant
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Facture
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {historique.map((item, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {item.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {item.action}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                              {item.montant}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <a href="#" className="text-vinca-primary hover:text-vinca-secondary">
                                Télécharger
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-800">Besoin d'aide avec votre forfait ?</h3>
              <button className="bg-vinca-primary hover:bg-vinca-secondary text-white py-2 px-4 rounded-md text-sm transition-colors">
                Contacter le support
              </button>
            </div>
            <p className="text-gray-600">
              Notre équipe est disponible pour vous aider à optimiser votre forfait et répondre à toutes vos questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forfait;
