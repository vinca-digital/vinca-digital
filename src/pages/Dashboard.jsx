import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import DashboardCard from '../components/DashboardCard';
import StatProgress from '../components/StatProgress';
import RankBadge from '../components/RankBadge';

const Dashboard = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  
  // Données factices pour le dashboard
  const statsCards = [
    {
      title: "Espace boutique",
      value: "12 produits",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      ),
      color: "purple",
      trend: "up",
      trendValue: "8%"
    },
    {
      title: "Mon forfait",
      value: "Premium",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      ),
      color: "blue",
      trend: "up",
      trendValue: "50%"
    },
    {
      title: "Mes reportings",
      value: "15 rapports",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
        </svg>
      ),
      color: "green",
      trend: "up",
      trendValue: "3%"
    },
    {
      title: "Mes factures",
      value: "3 en attente",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
        </svg>
      ),
      color: "yellow",
      trend: "up",
      trendValue: "5%"
    }
  ];

  const progressStats = [
    {
      title: "Nombre de tournages (VISUAL)",
      current: 8,
      total: 12,
      color: "yellow"
    },
    {
      title: "Nombre de publications Réels (SOCIAL)",
      current: 15,
      total: 20,
      color: "red"
    },
    {
      title: "Nombre de publications Visuels (SOCIAL)",
      current: 18,
      total: 25,
      color: "red"
    },
    {
      title: "Nombre de publications Carrousels (SOCIAL)",
      current: 12,
      total: 15,
      color: "red"
    },
    {
      title: "Nombre d'articles (WEB)",
      current: 10,
      total: 15,
      color: "blue"
    }
  ];

  const quickLinks = [
    { name: "Espace boutique", icon: "🛍️", color: "bg-purple-100 text-purple-600", link: "/boutique" },
    { name: "Mon forfait", icon: "📊", color: "bg-blue-100 text-blue-600", link: "/forfait" },
    { name: "Mes reportings", icon: "📈", color: "bg-green-100 text-green-600", link: "/reportings" },
    { name: "Mes factures", icon: "📑", color: "bg-yellow-100 text-yellow-600", link: "/factures" }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      
      <br>
        
              </br>
      <Navbar />
      
      <div className="flex">
        <Sidebar />

        
        
        <div className="flex-1 ml-64 p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              
              <h1 className="text-2xl font-bold text-gray-800">Tableau de bord</h1>
              <div className="flex items-center">
                <RankBadge rank="Gold" />
              </div>
            </div>
            
            <div className="flex flex-row space-x-4 overflow-x-auto pb-4">
              {statsCards.map((card, index) => (
                <DashboardCard
                  key={index}
                  title={card.title}
                  value={card.value}
                  icon={card.icon}
                  color={card.color}
                  trend={card.trend}
                  trendValue={card.trendValue}
                />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-medium text-gray-800 mb-4">Progression du contrat</h2>
              <div className="space-y-4">
                {progressStats.map((stat, index) => (
                  <StatProgress
                    key={index}
                    title={stat.title}
                    current={stat.current}
                    total={stat.total}
                    color={stat.color}
                  />
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Mois en cours</h3>
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-vinca-primary h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <span className="ml-4 text-sm font-medium text-gray-700">75%</span>
                </div>
                <p className="mt-2 text-xs text-gray-500">Période: 1 juin - 30 juin 2025</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-medium text-gray-800 mb-4">Accès rapide</h2>
              <div className="grid grid-cols-2 gap-4">
                {quickLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.link}
                    className={`${link.color} p-4 rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105`}
                  >
                    <span className="text-2xl mb-1">{link.icon}</span>
                    <span className="text-sm font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Services supplémentaires</h3>
                <div className="bg-gradient-to-r from-vinca-primary to-vinca-secondary text-white p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Ajouter Des Points</h4>
                      <p className="text-xs opacity-80">Découvrez nos services premium</p>
                    </div>
                  </div>
                  <button className="mt-3 w-full bg-white text-vinca-primary font-medium py-2 px-4 rounded-md text-sm hover:bg-opacity-90 transition-colors">
                    Explorer
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-800">Activité récente</h2>
              <button className="text-sm text-vinca-primary hover:text-vinca-secondary">Voir tout</button>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start pb-4 border-b border-gray-100">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">Post Instagram publié</p>
                    <p className="text-xs text-gray-500 mt-1">Il y a {item} jour{item > 1 ? 's' : ''}</p>
                  </div>
                  <div className="ml-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Succès
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
