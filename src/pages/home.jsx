import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Sparkles, 
  Layers, 
  Zap, 
  Play, 
  Pause, 
  RotateCcw,
  ChevronRight,
  Eye,
  Palette,
  MousePointer,
  Cpu
} from 'lucide-react';
import { Button } from '../components/button';
import AnimatedBackground from '../components/AnimatedBackground';
import { CodeSection, CodeBlock, FeatureCard, FloatingElement } from '../components/InteractiveComponents';
import '../App.css';
import { motion } from 'framer-motion';

import bgImage from '../assets/3d-concept-design.png';
import vincaCircle from '../assets/VINCA CIRCLE.png';

function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const sections = [
    "Gérer mon compte",
    "Publier un post",
    "Créer un reel",
    "Partager une story",
    "Points Vinca Family & Cercle"
  ];

  const features = [
    {
      icon: Code,
      title: "Gérer mon compte",
      description: "Gère ton compte et développe ta communauté digitale.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sparkles,
      title: "Créer et publier du contenu",
      description: "Publie des posts et crée des reels pour partager tes idées, booster ta visibilité et rester actif.",
      color: "from-purple-500 to-emerald-500"
    },
    {
      icon: Layers,
      title: "Partager une story",
      description: "Partage des stories et engage ta communauté.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Cpu,
      title: "Points Vinca Family & Cercle",
      description: "Gagne ou achète des points pour débloquer des options exclusives !",
      color: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"
      style={{
        backgroundImage: `url(${bgImage}), linear-gradient(to bottom right, #0f172a, #6d28d9, #0f172a)`,
        backgroundSize: '100vw 100vh',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <AnimatedBackground isPlaying={isPlaying} />
      
      {/* Curseur personnalisé */}
      <div
        className="fixed w-6 h-6 bg-blue-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />

      {/* Header avec navigation */}
      <header className="relative z-10 p-4 sm:p-6">
        <nav className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <FloatingElement delay={0.2}>
            <div className="flex items-center gap-3">
              <img
                src={vincaCircle}
                alt="Logo Vinca Cercle"
                className="h-20 w-auto sm:h-32 md:h-[200px]"
              />
              
            </div>
          </FloatingElement>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? 'Pause' : 'Play'} Animations
            </Button>
            <Link to="/login">
              <Button
                variant="default"
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
              >
                Se connecter
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Section Hero */}
      <section className="relative z-10 text-center py-12 sm:py-20 px-4 sm:px-6">
        <FloatingElement amplitude={30} delay={0.5}>
          <h2
            className="text-4xl sm:text-6xl md:text-8xl font-extrabold mb-6"
            style={{
              background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Vinca Circle
          </h2>
        </FloatingElement>

        <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
          Bienvenue sur Vinca Circle, la plateforme pour gérer ton compte, publier des posts, des reels, des stories et développer ta communauté digitale. 
          Gagne ou achète des points Vinca Family & Vinca Circle pour accéder à des options exclusives et booster ta présence en ligne !
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {sections.map((section, index) => (
            <button
              key={section}
              onClick={() => setCurrentSection(index)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full border transition-all duration-300 text-sm sm:text-base ${
                currentSection === index
                  ? 'bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </section>

      {/* Section des fonctionnalités */}
      <section className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-4xl font-bold text-center mb-10 sm:mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Fonctionnalités Vinca circle
          </h3>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="w-full sm:w-80 max-w-xs">
                <FeatureCard
                  {...feature}
                  delay={1.6 + index * 0.1}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section d'analyse du code */}
      <section
        className="relative z-10 py-20 px-6"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          
          <CodeSection
            title="1. Structure et Imports"
            icon={Code}
            delay={0.2}
          >
            <p className="text-gray-300 mb-4">
              Le composant LandingPage.jsx utilise une architecture React moderne avec des imports optimisés :
            </p>
            <CodeBlock>
{`import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChartLine, FaShoppingCart, FaFileInvoiceDollar, FaCog, FaArrowRight } from 'react-icons/fa';
import Button from './button';
import Card from './card';
import Badge from './badge';`}
            </CodeBlock>
            <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-blue-300 text-sm">
                <strong>Points clés :</strong> Utilisation de framer-motion pour les animations, 
                react-router-dom pour la navigation, et react-icons pour les icônes vectorielles.
              </p>
            </div>
          </CodeSection>

          <CodeSection
            title="2. gerer ton compte"
            icon={Sparkles}
            delay={0.4}
          >
            <p className="text-gray-300 mb-4">
              Les animations sont gérées par Framer Motion avec des effets d'apparition sophistiqués :
            </p>
            <CodeBlock>
{`<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
>
  {/* Contenu de la section Hero */}
</motion.div>`}
            </CodeBlock>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                <h4 className="text-purple-300 font-semibold mb-2">Animation d'entrée</h4>
                <p className="text-gray-300 text-sm">
                  Effet de glissement vertical (y: 20 → 0) avec transition d'opacité
                </p>
              </div>
              <div className="p-4 bg-pink-500/10 border border-pink-500/20 rounded-lg">
                <h4 className="text-pink-300 font-semibold mb-2">Animation en cascade</h4>
                <p className="text-gray-300 text-sm">
                  Délai progressif (delay: index * 0.1) pour les cartes de fonctionnalités
                </p>
              </div>
            </div>
          </CodeSection>

          <CodeSection
            title="3. posts"
            icon={Palette}
            delay={0.6}
          >
            <p className="text-gray-300 mb-4">
              Le design utilise Tailwind CSS pour un styling utilitaire et responsive :
            </p>
            <CodeBlock>
{`<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
  <nav className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        {/* Navigation content */}
      </div>
    </div>
  </nav>
</div>`}
            </CodeBlock>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-gradient-to-b from-gray-50 to-white rounded"></div>
                <span className="text-sm text-gray-300">Dégradé de background subtil</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-white shadow-sm rounded"></div>
                <span className="text-sm text-gray-300">Navigation avec ombre légère</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-600 rounded"></div>
                <span className="text-sm text-gray-300">Couleurs d'accent cohérentes</span>
              </div>
            </div>
          </CodeSection>

          <CodeSection
            title="4. reels"
            icon={Zap}
            delay={0.8}
          >
            <p className="text-gray-300 mb-4">
              Pour un design "très très très belle et avancer avec des bouco animations et 3d" :
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl"
              >
                <h4 className="text-blue-300 font-semibold mb-3 flex items-center gap-2">
                  <Cpu className="w-5 h-5" />
                  Intégration 3D avec Three.js
                </h4>
                <CodeBlock language="bash">
{`npm install three @react-three/fiber @react-three/drei`}
                </CodeBlock>
                <p className="text-gray-300 text-sm mt-2">
                  Ajouter des objets 3D interactifs, des particules et des effets de parallaxe
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl"
              >
                <h4 className="text-purple-300 font-semibold mb-3 flex items-center gap-2">
                  <MousePointer className="w-5 h-5" />
                  Animations Avancées
                </h4>
                <CodeBlock language="jsx">
{`<motion.div
  whileHover={{ 
    scale: 1.05, 
    rotateY: 5,
    boxShadow: "0 25px 50px rgba(0,0,0,0.25)"
  }}
  transition={{ type: "spring" }}
>`}
                </CodeBlock>
                <p className="text-gray-300 text-sm mt-2">
                  Effets de survol 3D, transitions élastiques et micro-interactions
                </p>
              </motion.div>
            </div>

            <div className="mt-6 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
              <h4 className="text-green-300 font-semibold mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Background Animé Actuel
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Cette page utilise déjà un background animé avec particules, formes géométriques et lignes de connexion dynamiques !
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Particules flottantes</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Formes géométriques</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">Lignes de connexion</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">Animation Canvas</span>
              </div>
            </div>
          </CodeSection>

        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative z-10 py-12 px-6 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <FloatingElement delay={1} amplitude={15}>
            <p className="text-gray-400 mb-4">
              Vinca Cercle : la plateforme pour gérer, publier et booster ta présence digitale !
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Recommencer l'analyse
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                Voir le code source
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </FloatingElement>
        </div>
      </footer>
    </div>
  );
}

export default Home;

