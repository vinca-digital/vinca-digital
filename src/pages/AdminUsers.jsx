import React from 'react';
import SidebarAdmin from '../components/SidebarAdmin';
import NavbarAdmin from '../components/NavbarAdmin';
import { useState } from 'react';
import { CheckCircle, Edit2, Trash2, UserPlus, PlusCircle } from 'lucide-react';

// Toast component (simple)
function Toast({ message, onClose }) {
  return (
    <div className="fixed top-6 right-6 z-[9999] bg-vinca-dark text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-2 animate-fade-in">
      <CheckCircle className="w-5 h-5 text-green-400" />
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 text-white/60 hover:text-white">&times;</button>
    </div>
  );
}

const users = [
  { id: 1, name: 'Anass Bendriss', email: 'anass.bendriss@example.com', phone: '+212 600-000-001', company: 'Vinca Corp', avatar: '/COIN 1.png', projects: [1, 2] },
  { id: 2, name: 'Fatima Zahra', email: 'fatima.zahra@example.com', phone: '+212 600-000-002', company: 'Fatima Agency', avatar: '/COIN 2.png', projects: [3] },
  { id: 3, name: 'Youssef El Amrani', email: 'youssef.elamrani@example.com', phone: '+212 600-000-003', company: 'StartupX', avatar: '/COIN 3.png', projects: [4] },
  { id: 4, name: 'Admin User', email: 'admin@example.com', phone: '+212 600-000-004', company: 'Admin', avatar: '/COIN 4.png', projects: [] },
];

const projects = [
  { id: 1, name: 'Site Web Vinca', client: 'Vinca Corp', status: 'En cours', date: '2024-06-20' },
  { id: 2, name: 'Campagne Social Media', client: 'Fatima Agency', status: 'Terminé', date: '2024-06-18' },
  { id: 3, name: 'Refonte Logo', client: 'StartupX', status: 'En attente', date: '2024-06-15' },
  { id: 4, name: 'SEO Audit', client: 'Admin User', status: 'En cours', date: '2024-06-10' },
];

export default function AdminUsers() {
  const [showUserModal, setShowUserModal] = useState(false);
  const [userForm, setUserForm] = useState({ name: '', email: '', phone: '', company: '', avatar: '' });
  const [userList, setUserList] = useState(users);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [projectForm, setProjectForm] = useState({ name: '', client: '', status: 'En cours', date: '' });
  const [projectList, setProjectList] = useState(projects);
  const [editUserId, setEditUserId] = useState(null);
  const [editProjectId, setEditProjectId] = useState(null);
  const [toast, setToast] = useState(null);

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const handleProjectInput = (e) => {
    const { name, value } = e.target;
    setProjectForm({ ...projectForm, [name]: value });
  };

  // Ouvre le formulaire utilisateur en mode édition
  const handleEditUser = (user) => {
    setUserForm({ name: user.name, email: user.email, phone: user.phone, company: user.company, avatar: user.avatar });
    setEditUserId(user.id);
    setShowUserModal(true);
  };

  // Ouvre le formulaire projet en mode édition
  const handleEditProject = (project) => {
    setProjectForm({ name: project.name, client: project.client, status: project.status, date: project.date });
    setEditProjectId(project.id);
    setShowProjectModal(true);
  };

  // Ajout ou édition utilisateur
  const handleAddUser = (e) => {
    e.preventDefault();
    if (!userForm.name || !userForm.email) return;
    if (editUserId) {
      setUserList(userList.map(u => u.id === editUserId ? { ...u, ...userForm } : u));
      setEditUserId(null);
      setToast('Utilisateur modifié avec succès !');
    } else {
      setUserList([
        ...userList,
        {
          id: userList.length + 1,
          ...userForm,
          avatar: userForm.avatar || '/COIN 1.png',
          projects: [],
        },
      ]);
      setToast('Utilisateur ajouté avec succès !');
    }
    setUserForm({ name: '', email: '', phone: '', company: '', avatar: '' });
    setShowUserModal(false);
  };

  // Ajout ou édition projet
  const handleAddProject = (e) => {
    e.preventDefault();
    if (!projectForm.name || !projectForm.client) return;
    if (editProjectId) {
      setProjectList(projectList.map(p => p.id === editProjectId ? { ...p, ...projectForm } : p));
      setEditProjectId(null);
      setToast('Projet modifié avec succès !');
    } else {
      setProjectList([
        ...projectList,
        {
          id: projectList.length + 1,
          ...projectForm,
        },
      ]);
      setToast('Projet ajouté avec succès !');
    }
    setProjectForm({ name: '', client: '', status: 'En cours', date: '' });
    setShowProjectModal(false);
  };

  // Suppression utilisateur
  const handleDeleteUser = (id) => {
    if (window.confirm('Supprimer cet utilisateur ?')) {
      setUserList(userList.filter(u => u.id !== id));
      setToast('Utilisateur supprimé.');
    }
  };

  // Suppression projet
  const handleDeleteProject = (id) => {
    if (window.confirm('Supprimer ce projet ?')) {
      setProjectList(projectList.filter(p => p.id !== id));
      setToast('Projet supprimé.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f1f5ff] to-[#e0e7ff]">
      <NavbarAdmin />
      <div className="flex flex-col md:flex-row pt-16">
        <SidebarAdmin />
        <main className="flex-1 p-2 sm:p-4 lg:p-12 max-w-[1200px] ml-auto">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-4xl font-black text-vinca-dark tracking-tight mb-2">Utilisateurs & Projets</h1>
            <p className="text-gray-500 text-base sm:text-lg">Gérez vos clients et leurs projets dans un espace moderne et intuitif.</p>
          </div>

          {toast && <Toast message={toast} onClose={() => setToast(null)} />}

          {/* Modal ajout utilisateur */}
          {showUserModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 animate-fade-in">
              <form onSubmit={handleAddUser} className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-lg relative border border-vinca-primary animate-pop-in">
                <button type="button" onClick={() => { setShowUserModal(false); setEditUserId(null); }} className="absolute top-4 right-4 text-gray-400 hover:text-vinca-dark text-2xl">&times;</button>
                <h3 className="text-2xl font-bold mb-6 text-vinca-dark flex items-center gap-2"><UserPlus className="w-6 h-6" /> {editUserId ? 'Modifier' : 'Ajouter'} un utilisateur</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1">Nom</label>
                    <input name="name" value={userForm.name} onChange={handleUserInput} className="w-full border border-vinca-primary/30 rounded-xl px-4 py-2 focus:ring-2 focus:ring-vinca-primary" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Email</label>
                    <input name="email" type="email" value={userForm.email} onChange={handleUserInput} className="w-full border border-vinca-primary/30 rounded-xl px-4 py-2 focus:ring-2 focus:ring-vinca-primary" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Téléphone</label>
                    <input name="phone" value={userForm.phone} onChange={handleUserInput} className="w-full border border-vinca-primary/30 rounded-xl px-4 py-2 focus:ring-2 focus:ring-vinca-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Entreprise</label>
                    <input name="company" value={userForm.company} onChange={handleUserInput} className="w-full border border-vinca-primary/30 rounded-xl px-4 py-2 focus:ring-2 focus:ring-vinca-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Avatar (URL)</label>
                    <input name="avatar" value={userForm.avatar} onChange={handleUserInput} className="w-full border border-vinca-primary/30 rounded-xl px-4 py-2 focus:ring-2 focus:ring-vinca-primary" />
                  </div>
                </div>
                <button type="submit" className="mt-6 w-full bg-vinca-dark text-white py-3 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-vinca-primary transition-all shadow-lg"><PlusCircle className="w-5 h-5" /> {editUserId ? 'Modifier' : 'Ajouter'}</button>
              </form>
            </div>
          )}

          {/* Modal ajout projet */}
          {showProjectModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 animate-fade-in">
              <form onSubmit={handleAddProject} className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-lg relative border border-blue-400 animate-pop-in">
                <button type="button" onClick={() => { setShowProjectModal(false); setEditProjectId(null); }} className="absolute top-4 right-4 text-gray-400 hover:text-blue-700 text-2xl">&times;</button>
                <h3 className="text-2xl font-bold mb-6 text-blue-700 flex items-center gap-2"><PlusCircle className="w-6 h-6" /> {editProjectId ? 'Modifier' : 'Ajouter'} un projet</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1">Nom du projet</label>
                    <input name="name" value={projectForm.name} onChange={handleProjectInput} className="w-full border border-blue-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Client</label>
                    <select name="client" value={projectForm.client} onChange={handleProjectInput} className="w-full border border-blue-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400" required>
                      <option value="">Sélectionner un client</option>
                      {userList.map(user => (
                        <option key={user.id} value={user.name}>{user.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Statut</label>
                    <select name="status" value={projectForm.status} onChange={handleProjectInput} className="w-full border border-blue-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400">
                      <option value="En cours">En cours</option>
                      <option value="Terminé">Terminé</option>
                      <option value="En attente">En attente</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Date</label>
                    <input name="date" type="date" value={projectForm.date} onChange={handleProjectInput} className="w-full border border-blue-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400" />
                  </div>
                </div>
                <button type="submit" className="mt-6 w-full bg-blue-700 text-white py-3 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-800 transition-all shadow-lg"><PlusCircle className="w-5 h-5" /> {editProjectId ? 'Modifier' : 'Ajouter'}</button>
              </form>
            </div>
          )}

          {/* Carte Utilisateurs */}
          <div className="bg-white/80 rounded-3xl shadow-2xl border border-gray-200 hover:shadow-[0_8px_32px_rgba(80,80,160,0.15)] transition-all duration-300 p-6 mb-12 overflow-x-auto animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-vinca-dark flex items-center gap-2">Utilisateurs</h2>
              <button onClick={() => { setShowUserModal(true); setEditUserId(null); }} className="inline-flex items-center px-5 py-2 bg-vinca-dark hover:bg-vinca-primary text-white text-base font-semibold rounded-xl shadow transition gap-2"><UserPlus className="w-5 h-5" /> Ajouter</button>
            </div>
            <div className="overflow-x-auto rounded-2xl">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gradient-to-r from-vinca-primary/10 to-white sticky top-0 z-10">
                  <tr>
                    <th className="px-6 py-3 text-left font-bold text-vinca-dark uppercase tracking-wider">Avatar</th>
                    <th className="px-6 py-3 text-left font-bold text-vinca-dark uppercase tracking-wider">Nom</th>
                    <th className="px-6 py-3 text-left font-bold text-vinca-dark uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left font-bold text-vinca-dark uppercase tracking-wider">Téléphone</th>
                    <th className="px-6 py-3 text-left font-bold text-vinca-dark uppercase tracking-wider">Entreprise</th>
                    <th className="px-6 py-3 text-left font-bold text-vinca-dark uppercase tracking-wider">Projets</th>
                    <th className="px-6 py-3 text-left font-bold text-vinca-dark uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {userList.map((user, idx) => (
                    <tr key={user.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-vinca-primary/5 hover:bg-vinca-primary/10 transition'}>
                      <td className="px-6 py-4">
                        <div className="relative w-12 h-12">
                          <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full border-2 border-vinca-primary shadow-md" />
                          <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full shadow"></span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-vinca-dark">{user.name}</td>
                      <td className="px-6 py-4 text-gray-700">{user.email}</td>
                      <td className="px-6 py-4 text-gray-700">{user.phone}</td>
                      <td className="px-6 py-4 text-gray-700">{user.company}</td>
                      <td className="px-6 py-4">
                        {user.projects.length > 0 ? (
                          <ul className="list-disc list-inside text-xs text-gray-700">
                            {user.projects.map(pid => {
                              const project = projectList.find(p => p.id === pid);
                              return project ? <li key={pid}>{project.name}</li> : null;
                            })}
                          </ul>
                        ) : <span className="text-xs text-gray-400">Aucun</span>}
                      </td>
                      <td className="px-6 py-4 flex gap-2 items-center">
                        <button onClick={() => handleEditUser(user)} title="Modifier" className="p-2 rounded-full bg-yellow-50 hover:bg-yellow-100 text-yellow-700 shadow transition"><Edit2 className="w-4 h-4" /></button>
                        <button onClick={() => handleDeleteUser(user.id)} title="Supprimer" className="p-2 rounded-full bg-red-50 hover:bg-red-100 text-red-700 shadow transition"><Trash2 className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Séparateur visuel */}
          <div className="w-full flex items-center mb-12">
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-vinca-primary/30 to-transparent" />
          </div>

          {/* Carte Projets */}
          <div className="bg-white/80 rounded-3xl shadow-2xl border border-blue-200 hover:shadow-[0_8px_32px_rgba(80,80,160,0.15)] transition-all duration-300 p-6 overflow-x-auto animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-2">Projets</h2>
              <button onClick={() => { setShowProjectModal(true); setEditProjectId(null); }} className="inline-flex items-center px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white text-base font-semibold rounded-xl shadow transition gap-2"><PlusCircle className="w-5 h-5" /> Ajouter</button>
            </div>
            <div className="overflow-x-auto rounded-2xl">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gradient-to-r from-blue-100 to-white sticky top-0 z-10">
                  <tr>
                    <th className="px-6 py-3 text-left font-bold text-blue-700 uppercase tracking-wider">Nom du projet</th>
                    <th className="px-6 py-3 text-left font-bold text-blue-700 uppercase tracking-wider">Client</th>
                    <th className="px-6 py-3 text-left font-bold text-blue-700 uppercase tracking-wider">Statut</th>
                    <th className="px-6 py-3 text-left font-bold text-blue-700 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left font-bold text-blue-700 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {projectList.map((project, idx) => (
                    <tr key={project.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-blue-50 hover:bg-blue-100 transition'}>
                      <td className="px-6 py-4 font-semibold text-blue-700">{project.name}</td>
                      <td className="px-6 py-4 text-gray-700">{project.client}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold shadow transition ${project.status === 'Terminé' ? 'bg-green-100 text-green-700' : project.status === 'En cours' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-500'}`}>{project.status}</span>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{project.date}</td>
                      <td className="px-6 py-4 flex gap-2 items-center">
                        <button onClick={() => handleEditProject(project)} title="Modifier" className="p-2 rounded-full bg-yellow-50 hover:bg-yellow-100 text-yellow-700 shadow transition"><Edit2 className="w-4 h-4" /></button>
                        <button onClick={() => handleDeleteProject(project.id)} title="Supprimer" className="p-2 rounded-full bg-red-50 hover:bg-red-100 text-red-700 shadow transition"><Trash2 className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Animations CSS (à ajouter dans le CSS global ou tailwind.config.js)
// .animate-fade-in { animation: fadeIn 0.4s; }
// .animate-pop-in { animation: popIn 0.3s; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes popIn { 0% { opacity: 0; transform: scale(0.95); } 100% { opacity: 1; transform: scale(1); } } 