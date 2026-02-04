import React, { useState, useMemo, useEffect } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { loadPortfolios, savePortfolios } from './services/db';
import { 
  TrendingDown, 
  TrendingUp, 
  Wallet, 
  Eye, 
  EyeOff,
  Sun,
  Moon,
  RefreshCw,
  PlusCircle,
  Briefcase,
  User,
  ChevronRight,
  ChevronLeft,
  Save,
  X,
  Trash2,
  PieChart,
  ShieldCheck,
  Zap,
  Layout,
  Palette,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

const ICONS = {
  Wallet: Wallet,
  Briefcase: Briefcase,
  User: User,
  PieChart: PieChart,
  Zap: Zap
};

const COLORS = [
  { name: 'Blue', class: 'bg-blue-600' },
  { name: 'Emerald', class: 'bg-emerald-600' },
  { name: 'Indigo', class: 'bg-indigo-600' },
  { name: 'Rose', class: 'bg-rose-600' },
  { name: 'Amber', class: 'bg-amber-600' },
  { name: 'Purple', class: 'bg-purple-600' },
];

// Dados iniciais de exemplo (Vazio por padrão)
const DEFAULT_PORTFOLIOS = {};

const CurrencyInput = ({ value, onChange, className }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localValue, setLocalValue] = useState('');

  useEffect(() => {
    if (!isEditing) {
       setLocalValue(new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value));
    }
  }, [value, isEditing]);

  const handleFocus = () => {
    setIsEditing(true);
    setLocalValue(value.toString());
  };

  const handleChange = (e) => {
    setLocalValue(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    // Replace comma with dot for float parsing, handle thousands separator if user typed it (simple logic)
    // Assuming user types simple number or comma decimal. 
    // Ideally we'd use a library, but let's try basic parsing
    let val = localValue.replace(/\./g, '').replace(',', '.');
    let num = parseFloat(val);
    if (!isNaN(num)) {
      onChange(num);
    }
  };

  if (isEditing) {
    return (
      <input
        autoFocus
        type="number"
        value={localValue}
        onChange={handleChange}
        onBlur={handleBlur}
        className={className}
        step="any"
      />
    );
  }

  return (
    <div onClick={handleFocus} className={className + " cursor-text truncate"}>
      {localValue}
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#050505] text-white selection:bg-white selection:text-black overflow-hidden relative font-sans">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse delay-700" />

      {/* Navbar */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit">
        <nav className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-8 shadow-2xl">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">
              <Zap size={14} fill="currentColor" />
            </div>
            <span className="font-bold text-sm tracking-tight hidden md:block">Walletbtw</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-xs font-medium text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#assets" className="hover:text-white transition-colors">Assets</a>
            <a href="#security" className="hover:text-white transition-colors">Security</a>
          </div>

          <Link 
            to="/dashboard" 
            className="px-4 py-1.5 bg-white text-black rounded-full text-xs font-bold hover:bg-gray-200 transition-colors flex items-center gap-1"
          >
            Open App <ChevronRight size={12} />
          </Link>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 text-center pt-32 pb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400 text-[10px] uppercase tracking-widest mb-8 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
          <ShieldCheck size={12} className="text-emerald-500" /> Secure Local Storage
        </div>

        <h1 className="text-5xl md:text-8xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-6 max-w-5xl leading-[0.9]">
          One-click for <br />
          Asset Defense
        </h1>
        
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Dive into the art of assets, where innovative blockchain technology meets financial expertise. <span className="text-white">100% Client-side privacy.</span>
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/dashboard"
            className="group px-8 py-4 bg-white text-black rounded-full font-bold text-sm transition-all hover:scale-105 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            Open App <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a 
            href="#features" 
            className="px-8 py-4 rounded-full font-bold text-sm transition-all border border-white/10 hover:bg-white/5 text-white hover:border-white/20"
          >
            Discover More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 w-full py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400 text-[10px] uppercase tracking-widest mb-6">Features</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">Tudo que você precisa</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Ferramentas profissionais para gestão completa dos seus ativos digitais.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <Briefcase size={20} />, title: "Registro de Transações", desc: "Histórico completo de compras e vendas para controle fiscal." },
              { icon: <TrendingUp size={20} />, title: "Simulador de Preço Teto", desc: "Defina alvos e visualize potencial de ganho em tempo real." },
              { icon: <PieChart size={20} />, title: "Gestão de Preço Médio", desc: "Cálculo automático do PM para cada ativo da carteira." },
              { icon: <RefreshCw size={20} />, title: "Cotações em Tempo Real", desc: "Integração direta com API do Mercado Bitcoin." },
              { icon: <Layout size={20} />, title: "Múltiplas Carteiras", desc: "Organize diferentes estratégias em carteiras separadas." },
              { icon: <ShieldCheck size={20} />, title: "Privacidade Total", desc: "Dados armazenados localmente no seu navegador." }
            ].map((feature, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent hover:border-white/10 transition-all duration-300 hover:scale-[1.02]">
                <div className="mb-4 text-white/60 group-hover:text-white transition-colors">{feature.icon}</div>
                <h3 className="font-bold text-base mb-2 text-white">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="relative z-10 w-full py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] uppercase tracking-widest mb-6">
              <ShieldCheck size={10} className="inline mr-1" /> Security First
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">Seus dados, seu controle</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Walletbtw não possui servidores. Todas as informações são armazenadas exclusivamente no seu navegador através do IndexedDB. 
              Nenhum dado é enviado para fora do seu dispositivo. <span className="text-white font-semibold">Zero rastreamento, zero coleta de dados.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={24} className="text-emerald-400" />
              </div>
              <h3 className="font-bold text-white mb-2">100% Client-Side</h3>
              <p className="text-sm text-gray-500">Execução completa no navegador sem backend.</p>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <Eye size={24} className="text-blue-400" />
              </div>
              <h3 className="font-bold text-white mb-2">Open Source</h3>
              <p className="text-sm text-gray-500">Código aberto e auditável por qualquer pessoa.</p>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <Zap size={24} className="text-purple-400" />
              </div>
              <h3 className="font-bold text-white mb-2">Rápido & Leve</h3>
              <p className="text-sm text-gray-500">Performance otimizada sem dependências externas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="relative z-10 w-full border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
              <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center">
                <Zap size={12} fill="currentColor" />
              </div>
              <span className="font-bold text-white">Walletbtw</span>
            </div>
            <p className="text-xs text-gray-600">© 2026 Gabriel Freitas. Open Source.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/freitasbtw" target="_blank" rel="noopener noreferrer" 
               className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/gabriel-dsf" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
              <Linkedin size={18} />
            </a>
            <a href="https://twitter.com/Freitasbtw" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </footer>
      
      {/* Simple Footer for Credits */}
      <div className="fixed bottom-6 left-6 text-[10px] text-gray-600 hover:text-gray-400 transition-colors z-50 mix-blend-difference">
        Gabriel Freitas © 2026
      </div>
    </div>
  );
};

// Componente Modal de Nova Carteira
const NewPortfolioModal = ({ isOpen, onClose, onSave, isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    owner: '',
    color: 'bg-blue-600',
    icon: 'Briefcase'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ name: '', owner: '', color: 'bg-blue-600', icon: 'Briefcase' });
    onClose();
  };

  const inputClass = `w-full p-3 rounded-xl border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 outline-none transition-colors`;
  const labelClass = `block text-xs font-bold uppercase mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
      <div className={`w-full max-w-md p-8 rounded-3xl shadow-2xl ${isDarkMode ? 'bg-[#161B22] border border-gray-700' : 'bg-white'}`}>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Nova Carteira</h3>
            <p className="text-sm text-gray-500">Personalize seu espaço de investimento.</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-2"><X size={24} /></button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={labelClass}>Nome da Carteira</label>
            <input 
              required
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              className={inputClass} 
              placeholder="Ex: Hold Cripto"
            />
          </div>

          <div>
            <label className={labelClass}>Dono / Responsável</label>
            <input 
              required
              value={formData.owner}
              onChange={e => setFormData({...formData, owner: e.target.value})}
              className={inputClass} 
              placeholder="Ex: Seu Nome"
            />
          </div>

          <div>
            <label className={labelClass}>Cor de Identificação</label>
            <div className="flex flex-wrap gap-3">
              {COLORS.map((c) => (
                <button
                  key={c.class}
                  type="button"
                  onClick={() => setFormData({...formData, color: c.class})}
                  className={`w-10 h-10 rounded-full transition-all ${c.class} ${formData.color === c.class ? 'ring-4 ring-offset-2 ring-blue-500' : 'opacity-80 hover:opacity-100'}`}
                />
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>Ícone</label>
            <div className="flex gap-4">
              {Object.keys(ICONS).map((iconName) => {
                const IconComp = ICONS[iconName];
                return (
                  <button
                    key={iconName}
                    type="button"
                    onClick={() => setFormData({...formData, icon: iconName})}
                    className={`p-3 rounded-xl border transition-all ${formData.icon === iconName ? 'bg-blue-500 text-white border-blue-600' : isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-400' : 'bg-gray-50 border-gray-200 text-gray-500'}`}
                  >
                    <IconComp size={20} />
                  </button>
                );
              })}
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 rounded-2xl font-bold bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
          >
            Criar Carteira
          </button>
        </form>
      </div>
    </div>
  );
};

// Componente Modal de Adicionar Transação
const TransactionModal = ({ isOpen, onClose, onSave, isDarkMode }) => {
  const [formData, setFormData] = useState({
    symbol: 'BTC',
    quantity: '',
    price: '',
    date: new Date().toISOString().split('T')[0]
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      quantity: parseFloat(formData.quantity.toString().replace(',', '.')),
      price: parseFloat(formData.price.toString().replace(',', '.')),
    });
    setFormData({ symbol: 'BTC', quantity: '', price: '', date: new Date().toISOString().split('T')[0] });
    onClose();
  };

  const inputClass = `w-full p-4 rounded-xl border appearance-none ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'} focus:ring-2 focus:ring-blue-500 outline-none transition-all`;
  const labelClass = `block text-xs font-bold uppercase mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
      <div className={`w-full max-w-lg p-8 rounded-3xl shadow-2xl ${isDarkMode ? 'bg-[#161B22] border border-gray-700' : 'bg-white'}`}>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Adicionar Transação</h3>
            <p className="text-sm text-gray-500">Registre uma nova compra ou aporte.</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-2"><X size={24} /></button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Ativo (Ticker)</label>
              <select 
                value={formData.symbol}
                onChange={e => setFormData({...formData, symbol: e.target.value})}
                className={inputClass}
              >
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="SOL">Solana (SOL)</option>
                <option value="XRP">Ripple (XRP)</option>
                <option value="USDT">Tether (USDT)</option>
                <option value="ADA">Cardano (ADA)</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Data da Compra</label>
              <input 
                type="date" 
                required
                value={formData.date}
                onChange={e => setFormData({...formData, date: e.target.value})}
                className={`${inputClass} cursor-pointer`}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Quantidade</label>
              <input 
                type="number" 
                step="any"
                required
                value={formData.quantity}
                onChange={e => setFormData({...formData, quantity: e.target.value})}
                className={inputClass} 
                placeholder="Ex: 0.5"
              />
            </div>
            <div>
              <label className={labelClass}>Preço Unitário (R$)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">R$</span>
                <input 
                  type="number" 
                  step="any"
                  required
                  value={formData.price}
                  onChange={e => setFormData({...formData, price: e.target.value})}
                  className={`${inputClass} pl-12`}
                  placeholder="0,00"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 flex gap-4">
            <button 
              type="button" 
              onClick={onClose}
              className={`flex-1 py-4 rounded-2xl font-bold transition-colors ${isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              Cancelar
            </button>
            <button 
              type="submit"
              className="flex-1 py-4 rounded-2xl font-bold bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center gap-2"
            >
              <Save size={20} /> Salvar Transação
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const App = () => {
  const navigate = useNavigate();
  // Estado inicial das carteiras
  const [portfolios, setPortfolios] = useState(DEFAULT_PORTFOLIOS);

  const [activePortfolioId, setActivePortfolioId] = useState(() => {
    const keys = Object.keys(DEFAULT_PORTFOLIOS);
    return keys.length > 0 ? keys[0] : null;
  });
  
  const [showBalances, setShowBalances] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('multiwallet_theme') === 'dark';
  });
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewPortfolioModalOpen, setIsNewPortfolioModalOpen] = useState(false);

  // Fechar menus/modais com ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
        setIsNewPortfolioModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Carregamento Inicial do IndexedDB
  useEffect(() => {
    const loadData = async () => {
      try {
        const saved = await loadPortfolios();
        if (saved && Object.keys(saved).length > 0) {
          setPortfolios(saved);
          const keys = Object.keys(saved);
          if (!activePortfolioId || !keys.includes(activePortfolioId)) {
            setActivePortfolioId(keys[0]);
          }
        }
      } catch (error) {
        console.error("Erro ao carregar dados do IndexedDB:", error);
      }
    };
    loadData();
  }, []);

  // Persistência no IndexedDB
  useEffect(() => {
    if (portfolios && Object.keys(portfolios).length >= 0) {
      savePortfolios(portfolios).catch(err => console.error("Erro ao salvar no IndexedDB:", err));
    }
  }, [portfolios]);

  useEffect(() => {
    localStorage.setItem('multiwallet_theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleDeletePortfolio = (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta carteira? Todos os ativos nela serão perdidos definitivamente.')) {
      setPortfolios(prev => {
        const newState = { ...prev };
        delete newState[id];
        return newState;
      });
      
      const remainingIds = Object.keys(portfolios).filter(pid => pid !== id);
      if (remainingIds.length > 0) {
        setActivePortfolioId(remainingIds[0]);
      } else {
        setActivePortfolioId(null);
      }
    }
  };

  const handleNewPortfolio = (data) => {
    const id = data.name.toLowerCase().replace(/\s+/g, '-');
    setPortfolios(prev => ({
      ...prev,
      [id]: {
        id,
        ...data,
        assets: []
      }
    }));
    setActivePortfolioId(id);
  };

  const activeAssets = portfolios[activePortfolioId]?.assets || [];

  const fetchPrices = async () => {
    if (activeAssets.length === 0) return;

    setIsLoading(true);
    try {
      const symbols = [...new Set(activeAssets.map(a => `${a.symbol}-BRL`))].join(',');
      
      const response = await fetch(`https://api.mercadobitcoin.net/api/v4/tickers?symbols=${symbols}`);
      const data = await response.json();
      
      const priceMap = {};
      data.forEach(item => {
        const symbol = item.pair.split('-')[0];
        priceMap[symbol] = parseFloat(item.buy);
      });

      setPortfolios(prev => ({
        ...prev,
        [activePortfolioId]: {
          ...prev[activePortfolioId],
          assets: prev[activePortfolioId].assets.map(asset => {
            if (priceMap[asset.symbol]) {
              return { ...asset, currentPrice: priceMap[asset.symbol] };
            }
            return asset;
          })
        }
      }));
      
      setLastUpdate(new Date().toLocaleTimeString());
    } catch (error) {
      console.error("Erro ao buscar preços:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 300000);
    return () => clearInterval(interval);
  }, [activePortfolioId]);

  const handleCeilingChange = (assetId, newValue) => {
    setPortfolios(prev => ({
      ...prev,
      [activePortfolioId]: {
        ...prev[activePortfolioId],
        assets: prev[activePortfolioId].assets.map(asset => 
          asset.id === assetId ? { ...asset, ceilingPrice: parseFloat(newValue) || 0 } : asset
        )
      }
    }));
  };

  const handleAddTransaction = (data) => {
    setPortfolios(prev => {
      const currentPortfolio = prev[activePortfolioId];
      if (!currentPortfolio) return prev;

      const existingAssetIndex = currentPortfolio.assets.findIndex(a => a.symbol === data.symbol);
      let newAssets = [...currentPortfolio.assets];

      if (existingAssetIndex >= 0) {
        const existing = newAssets[existingAssetIndex];
        const totalCostOld = existing.quantity * existing.avgPrice;
        const totalCostNew = data.quantity * data.price;
        const newQuantity = existing.quantity + data.quantity;
        const newAvgPrice = (totalCostOld + totalCostNew) / newQuantity;

        newAssets[existingAssetIndex] = {
          ...existing,
          quantity: newQuantity,
          avgPrice: newAvgPrice,
          currentPrice: existing.currentPrice > 0 ? existing.currentPrice : data.price 
        };
      } else {
        newAssets.push({
          id: Math.random().toString(36).substr(2, 9),
          name: getNameBySymbol(data.symbol),
          symbol: data.symbol,
          quantity: data.quantity,
          startDate: data.date.split('-').reverse().join('/'),
          avgPrice: data.price,
          currentPrice: data.price,
          ceilingPrice: data.price * 1.5,
          icon: `https://s3-symbol-logo.tradingview.com/crypto/XTVC${data.symbol}--big.svg`
        });
      }

      return {
        ...prev,
        [activePortfolioId]: {
          ...currentPortfolio,
          assets: newAssets
        }
      };
    });
    
    setTimeout(fetchPrices, 500);
  };

  const handleRemoveAsset = (assetId) => {
    if (window.confirm('Tem certeza que deseja remover este ativo?')) {
      setPortfolios(prev => ({
        ...prev,
        [activePortfolioId]: {
          ...prev[activePortfolioId],
          assets: prev[activePortfolioId].assets.filter(a => a.id !== assetId)
        }
      }));
    }
  };

  const getNameBySymbol = (s) => {
    const map = { 'BTC': 'Bitcoin', 'ETH': 'Ethereum', 'SOL': 'Solana', 'XRP': 'Ripple', 'USDT': 'Tether', 'ADA': 'Cardano' };
    return map[s] || s;
  };

  const stats = useMemo(() => {
    const totalInvested = activeAssets.reduce((acc, curr) => acc + (curr.quantity * curr.avgPrice), 0);
    const currentValue = activeAssets.reduce((acc, curr) => acc + (curr.quantity * curr.currentPrice), 0);
    const totalCeiling = activeAssets.reduce((acc, curr) => acc + (curr.quantity * curr.ceilingPrice), 0);
    const totalPL = currentValue - totalInvested;
    const totalPLPct = totalInvested > 0 ? (totalPL / totalInvested) * 100 : 0;
    
    const totalPotBrl = totalCeiling - currentValue;
    const totalPotPct = currentValue > 0 ? (totalPotBrl / currentValue) * 100 : 0;

    return { totalInvested, currentValue, totalPL, totalPLPct, totalPotBrl, totalPotPct };
  }, [activeAssets]);

  const formatValue = (val) => {
    if (!showBalances) return '••••';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(val);
  };

  // Estilos atualizados para Dashboard Dark Mode estilo Landing Page
  const themeClass = isDarkMode ? 'bg-[#050505] text-white selection:bg-white selection:text-black' : 'bg-[#F8F9FA] text-gray-800';
  const cardClass = isDarkMode ? 'bg-[#0A0A0A] border-white/10' : 'bg-white border-gray-200';
  const textSecondary = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={
        <div className={`min-h-screen flex font-sans ${themeClass} overflow-hidden relative`}>
           {/* Background Gradients for Dashboard (Dark Mode) */}
           {isDarkMode && (
             <>
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
             </>
           )}
          
          {/* SIDEBAR NAVIGATION */}
          <aside 
            className={`flex-shrink-0 transition-all duration-300 border-r relative z-20 backdrop-blur-xl
              ${isSidebarOpen ? 'w-64' : 'w-20'} 
              ${isDarkMode ? 'bg-[#050505]/80 border-white/10' : 'bg-white border-gray-200'}`}
          >
            <div className="h-full flex flex-col">
              <div className="h-16 flex items-center justify-center px-4 border-b border-gray-100/10">
                {isSidebarOpen ? (
                  <Link to="/" className="flex items-center gap-2 flex-1">
                    <span className="font-bold text-lg tracking-tight">Walletbtw</span>
                  </Link>
                ) : (
                  <button 
                    onClick={() => setIsSidebarOpen(true)}
                    className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                )}
                {isSidebarOpen && (
                  <button 
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-gray-100/10 transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                )}
              </div>

              <div className="flex-1 py-6 px-3 space-y-2 overflow-y-auto">
                {isSidebarOpen && <p className="text-xs font-bold uppercase text-gray-500 px-3 mb-2">Carteiras</p>}
                <button 
                  onClick={() => setIsNewPortfolioModalOpen(true)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all border border-dashed border-gray-600 hover:border-blue-500 hover:bg-blue-600/10 text-gray-400 hover:text-blue-400 ${!isSidebarOpen && 'justify-center'}`}
                  title="Criar Nova Carteira"
                >
                  <PlusCircle size={18} />
                  {isSidebarOpen && <span className="text-sm font-semibold">Nova Carteira</span>}
                </button>
                
                {Object.values(portfolios).map((portfolio) => {
                  const IconComp = ICONS[portfolio.icon] || Wallet;
                  return (
                    <div key={portfolio.id} className="relative group">
                      <button
                        onClick={() => setActivePortfolioId(portfolio.id)}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all
                          ${activePortfolioId === portfolio.id 
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                            : `hover:bg-gray-100/10 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`
                          }`}
                      >
                        <div className={`p-2 rounded-lg ${activePortfolioId === portfolio.id ? 'bg-white/20' : `${portfolio.color || 'bg-gray-200'} bg-opacity-20`}`}>
                          <IconComp size={18} />
                        </div>
                        {isSidebarOpen && (
                          <div className="text-left overflow-hidden">
                            <p className="font-semibold text-sm truncate">{portfolio.name}</p>
                            <p className={`text-[10px] truncate ${activePortfolioId === portfolio.id ? 'text-blue-100' : 'text-gray-500'}`}>
                              {portfolio.assets.length} ativos
                            </p>
                          </div>
                        )}
                      </button>
                      
                      {isSidebarOpen && (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeletePortfolio(portfolio.id);
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"
                          title="Excluir Carteira"
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="p-4 border-t border-gray-100/10 space-y-2">
                 <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100/10 transition-colors ${!isSidebarOpen && 'justify-center'}`}
                >
                  {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
                  {isSidebarOpen && <span className="text-sm font-medium">Tema {isDarkMode ? 'Escuro' : 'Claro'}</span>}
                </button>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <main className="flex-1 h-screen overflow-y-auto relative w-full">
            <div className={`sticky top-0 z-10 backdrop-blur-xl border-b px-6 py-4 ${isDarkMode ? 'bg-[#050505]/90 border-white/10' : 'bg-white/90 border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className={`md:hidden p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                  >
                    <Layout size={20} />
                  </button>
                  <div>
                    <h2 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {portfolios[activePortfolioId]?.name || 'Dashboard'}
                    </h2>
                    {lastUpdate && (
                      <p className="text-[10px] text-gray-500 flex items-center gap-1">
                        <RefreshCw size={10} /> Atualizado {lastUpdate}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setShowBalances(!showBalances)}
                    className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`}
                    title={showBalances ? "Ocultar valores" : "Mostrar valores"}
                  >
                    {showBalances ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full max-w-[1800px] mx-auto p-4 md:p-8 space-y-6">
              
              {/* Action Buttons */}
              <div className="flex items-center gap-3 flex-wrap">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg ${isDarkMode ? 'bg-white text-black hover:bg-gray-100 shadow-white/10' : 'bg-gray-900 text-white hover:bg-gray-800 shadow-gray-900/20'}`}
                >
                  <PlusCircle size={16} />
                  Nova Transação
                </button>

                <button 
                  onClick={fetchPrices}
                  disabled={isLoading || activeAssets.length === 0}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all border ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-300' : 'bg-white border-gray-200 hover:bg-gray-50 text-gray-600'}`}
                >
                  <RefreshCw size={16} className={isLoading ? 'animate-spin' : ''} />
                  Atualizar Preços
                </button>
              </div>

              {!portfolios[activePortfolioId] || activeAssets.length === 0 ? (
                <div className={`text-center py-20 rounded-2xl border border-dashed ${isDarkMode ? 'border-gray-800' : 'border-gray-300'}`}>
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                    <Wallet size={32} />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Carteira Vazia</h3>
                  <p className="text-gray-500 mb-6">Comece adicionando ativos à sua carteira {portfolios[activePortfolioId]?.name}.</p>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-2 rounded-lg font-bold bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center gap-2"
                  >
                    <PlusCircle size={18} /> Adicionar Ativo
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={`group p-6 rounded-2xl border transition-all hover:scale-[1.01] ${isDarkMode ? 'bg-gradient-to-br from-white/[0.03] to-transparent border-white/10 hover:border-white/20' : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm'}`}>
                      <div className="flex items-center justify-between mb-3">
                        <p className={`text-xs font-bold uppercase tracking-wider ${textSecondary}`}>Patrimônio Total</p>
                        <div className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'}`}>
                          <Wallet size={20} />
                        </div>
                      </div>
                      <p className={`text-3xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{formatValue(stats.currentValue)}</p>
                      <p className="text-xs text-gray-500 mt-2">Valor de mercado atual</p>
                    </div>
                    
                    <div className={`group p-6 rounded-2xl border transition-all hover:scale-[1.01] ${isDarkMode ? 'bg-gradient-to-br from-white/[0.03] to-transparent border-white/10 hover:border-white/20' : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm'}`}>
                      <div className="flex items-center justify-between mb-3">
                        <p className={`text-xs font-bold uppercase tracking-wider ${textSecondary}`}>Resultado Acumulado</p>
                        <div className={`p-2 rounded-lg transition-colors ${stats.totalPL >= 0 ? (isDarkMode ? 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20' : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100') : (isDarkMode ? 'bg-rose-500/10 text-rose-400 group-hover:bg-rose-500/20' : 'bg-rose-50 text-rose-600 group-hover:bg-rose-100')}`}>
                          {stats.totalPL >= 0 ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                        </div>
                      </div>
                      <p className={`text-3xl font-black tracking-tight ${stats.totalPL >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                        {formatValue(stats.totalPL)}
                      </p>
                      <p className={`text-xs mt-2 ${stats.totalPL >= 0 ? 'text-emerald-600/80' : 'text-rose-600/80'}`}>
                        {stats.totalPLPct >= 0 ? '+' : ''}{stats.totalPLPct.toFixed(2)}% de valorização
                      </p>
                    </div>
                  </div>

                  <div className={`rounded-2xl shadow-sm border overflow-hidden ${cardClass}`}>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className={`text-[10px] uppercase font-bold tracking-widest border-b ${isDarkMode ? 'bg-gray-800/50 text-gray-400 border-gray-700' : 'bg-gray-50 text-gray-400 border-gray-100'}`}>
                            <th className="px-6 py-4">Ticker</th>
                            <th className="px-4 py-4">Início</th>
                            <th className="px-4 py-4 text-center">Alocação</th>
                            <th className="px-4 py-4 text-right">Preço Médio</th>
                            <th className="px-4 py-4 text-right">Preço Atual</th>
                            <th className="px-4 py-4 text-right text-blue-500 bg-blue-500/5">Preço Teto</th>
                            <th className="px-4 py-4 text-right">Val. (%)</th>
                            <th className="px-4 py-4 text-right">Val. (R$)</th>
                            <th className="px-4 py-4 text-right text-emerald-500/80">Pot. (%)</th>
                            <th className="px-4 py-4 text-right text-emerald-500/80">Pot. (R$)</th>
                            <th className="px-6 py-4 text-right">Ações</th>
                          </tr>
                        </thead>
                        <tbody className={`divide-y ${isDarkMode ? 'divide-gray-800' : 'divide-gray-50'}`}>
                          <tr className={`${isDarkMode ? 'bg-blue-900/10' : 'bg-blue-50/50'} font-bold`}>
                            <td className="px-6 py-4"><span className="text-xs uppercase">TOTAL</span></td>
                            <td className="px-4 py-4 text-gray-400">—</td>
                            <td className="px-4 py-4 text-center"><span className="text-[10px] px-2 py-1 rounded bg-blue-600 text-white">100%</span></td>
                            <td className="px-4 py-4 text-right text-gray-400">—</td>
                            <td className="px-4 py-4 text-right text-gray-400">—</td>
                            <td className="px-4 py-4 text-right text-gray-400 bg-blue-500/5">—</td>
                            <td className={`px-4 py-4 text-right text-xs ${stats.totalPLPct >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                              {showBalances ? `${stats.totalPLPct >= 0 ? '+' : ''}${stats.totalPLPct.toFixed(2)}%` : '••••'}
                            </td>
                            <td className={`px-4 py-4 text-right text-xs ${stats.totalPL >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                              {formatValue(stats.totalPL)}
                            </td>
                            <td className={`px-4 py-4 text-right text-xs ${stats.totalPotPct >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                              {showBalances ? `${stats.totalPotPct >= 0 ? '+' : ''}${stats.totalPotPct.toFixed(2)}%` : '••••'}
                            </td>
                            <td className={`px-4 py-4 text-right text-xs ${stats.totalPotBrl >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                              {formatValue(stats.totalPotBrl)}
                            </td>
                            <td className="px-6 py-4 text-gray-400">—</td>
                          </tr>
                          {activeAssets.map((asset) => {
                            const currentTotal = asset.quantity * asset.currentPrice;
                            const investedTotal = asset.quantity * asset.avgPrice;
                            const valPct = ((asset.currentPrice - asset.avgPrice) / asset.avgPrice) * 100;
                            const valBrl = currentTotal - investedTotal;
                            const potPct = ((asset.ceilingPrice - asset.currentPrice) / asset.currentPrice) * 100;
                            const allocation = (currentTotal / stats.currentValue) * 100;

                            return (
                              <tr key={asset.id} className={`transition-colors text-sm ${isDarkMode ? 'hover:bg-gray-800/30' : 'hover:bg-gray-50/50'}`}>
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center overflow-hidden border ${isDarkMode ? 'bg-white border-gray-700' : 'bg-white border-gray-200'}`}>
                                      <img 
                                        src={asset.icon} 
                                        alt="" 
                                        className="w-5 h-5 object-contain"
                                        onError={(e) => { e.target.src = "https://via.placeholder.com/20?text=" + asset.symbol }} 
                                      />
                                    </div>
                                    <span className="font-bold">{asset.symbol}</span>
                                  </div>
                                </td>
                                <td className={textSecondary + " px-4 py-4 font-medium text-xs whitespace-nowrap"}>{asset.startDate}</td>
                                <td className="px-4 py-4 text-center">
                                  <span className={`text-[10px] font-bold px-2 py-1 rounded ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                                    {allocation.toFixed(1)}%
                                  </span>
                                </td>
                                <td className="px-4 py-4 text-right font-mono text-xs">{formatValue(asset.avgPrice)}</td>
                                <td className="px-4 py-4 text-right font-mono text-xs font-semibold text-blue-400">{formatValue(asset.currentPrice)}</td>
                                <td className="px-4 py-4 text-right bg-blue-500/5">
                                  <CurrencyInput
                                    value={asset.ceilingPrice}
                                    onChange={(newValue) => handleCeilingChange(asset.id, newValue)}
                                    className="w-28 bg-transparent border-b border-dashed border-blue-400/30 text-right font-mono text-xs font-bold text-blue-500 focus:outline-none focus:border-blue-500 transition-colors p-1"
                                  />
                                </td>
                                <td className={`px-4 py-4 text-right font-bold text-xs ${valPct >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                                  {showBalances ? `${valPct >= 0 ? '+' : ''}${valPct.toFixed(2)}%` : '••••'}
                                </td>
                                <td className={`px-4 py-4 text-right font-mono text-xs font-bold ${valBrl >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                                  {formatValue(valBrl)}
                                </td>
                                <td className={`px-4 py-4 text-right font-bold text-xs ${potPct >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                                  {showBalances ? `${potPct >= 0 ? '+' : ''}${potPct.toFixed(2)}%` : '••••'}
                                </td>
                                <td className={`px-4 py-4 text-right font-mono text-xs font-bold ${(asset.quantity * (asset.ceilingPrice - asset.currentPrice)) >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                                  {formatValue(asset.quantity * (asset.ceilingPrice - asset.currentPrice))}
                                </td>
                                <td className="px-6 py-4 text-right">
                                  <button 
                                    onClick={() => handleRemoveAsset(asset.id)}
                                    className="p-1 text-gray-400 hover:text-rose-500 transition-colors"
                                  >
                                    <Trash2 size={16} />
                                  </button>
                                </td>
                              </tr>
                            );
                        })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Transaction Log */}
                  <div className={`rounded-2xl shadow-sm border ${cardClass} overflow-hidden`}>
                    <div className="px-6 py-4 border-b border-gray-100/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-purple-900/20 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
                          <Briefcase size={18} />
                        </div>
                        <div>
                          <h3 className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Histórico de Transações</h3>
                          <p className="text-[10px] text-gray-500">Registro completo de todas as operações</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="overflow-x-auto max-h-96">
                      {activeAssets.length === 0 ? (
                        <div className="text-center py-12 text-gray-500">
                          <Briefcase size={32} className="mx-auto mb-2 opacity-30" />
                          <p className="text-sm">Nenhuma transação registrada ainda.</p>
                        </div>
                      ) : (
                        <table className="w-full text-left border-collapse">
                          <thead className={`sticky top-0 ${isDarkMode ? 'bg-gray-800/90 backdrop-blur' : 'bg-gray-50/90 backdrop-blur'}`}>
                            <tr className={`text-[10px] uppercase font-bold tracking-widest border-b ${isDarkMode ? 'text-gray-400 border-gray-700' : 'text-gray-500 border-gray-200'}`}>
                              <th className="px-6 py-3">Data</th>
                              <th className="px-4 py-3">Ativo</th>
                              <th className="px-4 py-3 text-right">Quantidade</th>
                              <th className="px-4 py-3 text-right">Preço Unitário</th>
                              <th className="px-4 py-3 text-right">Total</th>
                              <th className="px-4 py-3">Status</th>
                            </tr>
                          </thead>
                          <tbody className={`divide-y ${isDarkMode ? 'divide-gray-800' : 'divide-gray-100'}`}>
                            {activeAssets.map((asset) => (
                              <tr key={asset.id} className={`text-sm transition-colors ${isDarkMode ? 'hover:bg-gray-800/30' : 'hover:bg-gray-50'}`}>
                                <td className={`px-6 py-3 font-mono text-xs ${textSecondary}`}>{asset.startDate}</td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center gap-2">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center overflow-hidden border ${isDarkMode ? 'bg-white border-gray-700' : 'bg-white border-gray-200'}`}>
                                      <img 
                                        src={asset.icon} 
                                        alt="" 
                                        className="w-4 h-4 object-contain"
                                        onError={(e) => { e.target.src = "https://via.placeholder.com/16?text=" + asset.symbol }} 
                                      />
                                    </div>
                                    <span className="font-semibold text-xs">{asset.symbol}</span>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-right font-mono text-xs">{asset.quantity.toFixed(8)}</td>
                                <td className="px-4 py-3 text-right font-mono text-xs">{formatValue(asset.avgPrice)}</td>
                                <td className="px-4 py-3 text-right font-mono text-xs font-bold">{formatValue(asset.quantity * asset.avgPrice)}</td>
                                <td className="px-4 py-3">
                                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${isDarkMode ? 'bg-emerald-900/20 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                                    <TrendingUp size={10} /> Compra
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  </div>
                </>
              )}

            </div>
          </main>

          <TransactionModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleAddTransaction}
            isDarkMode={isDarkMode}
          />

          <NewPortfolioModal 
            isOpen={isNewPortfolioModalOpen}
            onClose={() => setIsNewPortfolioModalOpen(false)}
            onSave={handleNewPortfolio}
            isDarkMode={isDarkMode}
          />
        </div>
      } />
    </Routes>
  );
};

export default App;
