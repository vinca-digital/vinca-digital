import React from 'react';
import DashboardCard from '../components/DashboardCard';

const AdminDashboard = () => {
  // Données factices pour le dashboard administrateur
  const adminStatsCards = [
    {
      title: "Utilisateurs Totaux",
      value: "1,250",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "blue",
      trend: "up",
      trendValue: "+12% ce mois"
    },
    {
      title: "Abonnements Actifs",
      value: "840",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "green",
      trend: "up",
      trendValue: "+5.2%"
    },
    {
      title: "Projets",
      value: "27",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7a2 2 0 012-2h2l2-2h4l2 2h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
        </svg>
      ),
      color: "orange",
      trend: "up",
      trendValue: "+8%"
    },
    {
      title: "Revenu Mensuel",
      value: "€12,345",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "purple",
      trend: "up",
      trendValue: "+2.1%"
    },
    {
      title: "Tickets de Support",
      value: "12 en attente",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "yellow",
      trend: "down",
      trendValue: "-3"
    }
  ];

  const recentUsers = [
    { id: 1, name: 'Anass Bendriss', email: 'anass.bendriss@example.com', plan: 'Premium', registered: '2024-06-20', avatar: '/COIN 1.png' },
    { id: 2, name: 'Fatima Zahra', email: 'fatima.zahra@example.com', plan: 'Standard', registered: '2024-06-19', avatar: '/COIN 2.png' },
    { id: 3, name: 'Youssef El Amrani', email: 'youssef.elamrani@example.com', plan: 'Premium', registered: '2024-06-19', avatar: '/COIN 3.png' },
    { id: 4, name: 'Admin User', email: 'admin@example.com', plan: 'Admin', registered: '2024-06-18', avatar: '/COIN 4.png' },
  ];
  
  const quickLinks = [
    { name: "Gestion Utilisateurs", icon: "👥", color: "bg-blue-100 text-blue-600", link: "#" },
    { name: "Statistiques", icon: "📊", color: "bg-green-100 text-green-600", link: "#" },
    { name: "Paramètres", icon: "⚙️", color: "bg-purple-100 text-purple-600", link: "#" },
    { name: "Contenu", icon: "📝", color: "bg-yellow-100 text-yellow-600", link: "#" }
  ];

  // Projets fictifs
  const recentProjects = [
    { id: 1, name: 'Site Web Vinca', client: 'Vinca Corp', status: 'En cours', date: '2024-06-20' },
    { id: 2, name: 'Campagne Social Media', client: 'Fatima Agency', status: 'Terminé', date: '2024-06-18' },
    { id: 3, name: 'Refonte Logo', client: 'StartupX', status: 'En attente', date: '2024-06-15' },
    { id: 4, name: 'SEO Audit', client: 'Admin User', status: 'En cours', date: '2024-06-10' },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Tableau de bord Administrateur</h1>
        <p className="text-gray-500 mt-1">Vue d'ensemble du système et des activités.</p>
      </div>
      {/* Cartes statistiques en ligne (horizontal) */}
      <div className="flex flex-row gap-6 mb-8 overflow-x-auto">
        {adminStatsCards.map((card, index) => (
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
      
      {/* Section Projets récents */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Projets récents</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Projet</th>
                <th className="px-6 py-3">Client</th>
                <th className="px-6 py-3">Statut</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {recentProjects.map(project => (
                <tr key={project.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{project.name}</td>
                  <td className="px-6 py-4">{project.client}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold 
                      ${project.status === 'Terminé' ? 'bg-green-100 text-green-700' : project.status === 'En cours' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'}`}>{project.status}</span>
                  </td>
                  <td className="px-6 py-4">{project.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white text-xs font-semibold rounded-full shadow-lg border border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition transform hover:-translate-y-0.5"
                    >
                      <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Gérer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-800">Utilisateurs Récents</h2>
            <button
              type="button"
              onClick={() => alert('Formulaire d\'ajout utilisateur à venir !')}
              className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
            >
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path></svg>
              Ajouter un utilisateur
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">Utilisateur</th>
                  <th scope="col" className="px-6 py-3">Forfait</th>
                  <th scope="col" className="px-6 py-3">Date d'inscription</th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map(user => (
                  <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      <div className="flex items-center">
                        <img className="h-10 w-10 rounded-full" src={user.avatar} alt={user.name} />
                        <div className="pl-3">
                          <div className="text-base font-semibold">{user.name}</div>
                          <div className="font-normal text-gray-500">{user.email}</div>
                        </div>  
                      </div>
                    </td>
                    <td className="px-6 py-4">{user.plan}</td>
                    <td className="px-6 py-4">{user.registered}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white text-xs font-semibold rounded-full shadow-lg border border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition transform hover:-translate-y-0.5"
                      >
                        <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Gérer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Accès rapide</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickLinks.map((link, index) => (
              <a 
                key={index}
                href={link.link}
                className={`${link.color} p-4 rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105 text-center`}
              >
                <span className="text-2xl mb-1">{link.icon}</span>
                <span className="text-sm font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 