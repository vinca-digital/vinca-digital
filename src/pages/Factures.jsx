import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import RankBadge from '../components/RankBadge';

const Factures = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  
  const factures = [
    {
      id: 'FAC-2025-0601',
      date: '01/06/2025',
      montant: '490,00 €',
      description: 'Forfait Business Pro - Juin 2025',
      status: 'paid',
      pdfLink: '#'
    },
    {
      id: 'FAC-2025-0501',
      date: '01/05/2025',
      montant: '490,00 €',
      description: 'Forfait Business Pro - Mai 2025',
      status: 'paid',
      pdfLink: '#'
    },
    {
      id: 'FAC-2025-0415',
      date: '15/04/2025',
      montant: '175,00 €',
      description: 'Pack Reels Premium - Supplément',
      status: 'paid',
      pdfLink: '#'
    },
    {
      id: 'FAC-2025-0401',
      date: '01/04/2025',
      montant: '490,00 €',
      description: 'Forfait Business Pro - Avril 2025',
      status: 'paid',
      pdfLink: '#'
    },
    {
      id: 'FAC-2025-0301',
      date: '01/03/2025',
      montant: '490,00 €',
      description: 'Forfait Business Pro - Mars 2025',
      status: 'paid',
      pdfLink: '#'
    },
    {
      id: 'FAC-2025-0701',
      date: '01/07/2025',
      montant: '490,00 €',
      description: 'Forfait Business Pro - Juillet 2025',
      status: 'pending',
      pdfLink: '#'
    }
  ];
  
  const filteredFactures = filterStatus === 'all' 
    ? factures 
    : factures.filter(facture => facture.status === filterStatus);
  
  const getStatusBadge = (status) => {
    switch(status) {
      case 'paid':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Payée
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            En attente
          </span>
        );
      case 'overdue':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            En retard
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 p-4 md:p-8 md:ml-64 mt-20 md:mt-0">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-2">
            <h1 className="text-2xl font-bold text-gray-800">Mes factures</h1>
            <div className="flex items-center justify-start sm:justify-end">
              <RankBadge rank="Gold" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <h2 className="text-lg font-medium text-gray-800 mb-4 sm:mb-0">Historique des factures</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setFilterStatus('all')}
                    className={`px-3 py-1 text-sm font-medium rounded-md ${
                      filterStatus === 'all'
                        ? 'bg-vinca-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Toutes
                  </button>
                  <button
                    onClick={() => setFilterStatus('paid')}
                    className={`px-3 py-1 text-sm font-medium rounded-md ${
                      filterStatus === 'paid'
                        ? 'bg-vinca-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Payées
                  </button>
                  <button
                    onClick={() => setFilterStatus('pending')}
                    className={`px-3 py-1 text-sm font-medium rounded-md ${
                      filterStatus === 'pending'
                        ? 'bg-vinca-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    En attente
                  </button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-[700px] w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      N° Facture
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Montant
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Statut
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredFactures.map((facture) => (
                    <tr key={facture.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {facture.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {facture.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {facture.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {facture.montant}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(facture.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-3">
                          <a href={facture.pdfLink} className="text-vinca-primary hover:text-vinca-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                            </svg>
                          </a>
                          <a href="#" className="text-gray-500 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {filteredFactures.length === 0 && (
              <div className="p-6 text-center text-gray-500">
                Aucune facture trouvée pour ce statut.
              </div>
            )}
            
            <div className="px-6 py-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Affichage de {filteredFactures.length} factures sur {factures.length}
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    Précédent
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    Suivant
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-medium text-gray-800 mb-4">Informations de facturation</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Adresse de facturation</h3>
                  <p className="mt-1 text-sm text-gray-800">
                    Anass Haimoud<br />
                    123 Rue de Paris<br />
                    75001 Paris<br />
                    France
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Méthode de paiement</h3>
                  <div className="mt-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span className="text-sm text-gray-800">Visa se terminant par 4242</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button className="text-sm text-vinca-primary hover:text-vinca-secondary font-medium">
                  Modifier les informations de facturation
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-medium text-gray-800 mb-4">Prochaine facture</h2>
              <div className="border border-gray-200 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Date prévue</span>
                  <span className="text-sm font-medium">01/07/2025</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Montant</span>
                  <span className="text-sm font-medium">490,00 €</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Statut</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    En attente
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                Votre prochaine facture sera automatiquement prélevée sur votre moyen de paiement enregistré.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Factures;
