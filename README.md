# walletbtw 🚀

> **Gerenciador de Carteiras de Criptomoedas Open-Source**

Uma aplicação web moderna e segura para gestão completa de ativos digitais. Desenvolvida com foco em privacidade, performance e experiência do usuário.

[![Open Source](https://img.shields.io/badge/Open%20Source-100%25-brightgreen)](https://github.com/freitasbtw/walletbtw)
[![Privacy First](https://img.shields.io/badge/Privacy-First-blue)](https://github.com/freitasbtw/walletbtw)
[![React](https://img.shields.io/badge/React-18.2.0-61dafb)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646cff)](https://vitejs.dev/)

## ✨ Recursos Principais

### 📊 **Gestão Completa de Ativos**
- **Registro de Transações**: Histórico detalhado de compras e vendas
- **Preço Médio Automático**: Cálculo inteligente do PM por ativo
- **Simulador de Preço Teto**: Defina alvos e visualize potencial de ganho
- **Alocação por Ativo**: Percentual de participação na carteira

### 🔄 **Cotações em Tempo Real**
- **API Mercado Bitcoin**: Integração direta com dados oficiais
- **Atualização Automática**: Sincronização a cada 5 minutos
- **Múltiplas Moedas**: Suporte a BTC, ETH, SOL, XRP, USDT, ADA

### 🏦 **Múltiplas Carteiras**
- **Perfis Separados**: Organize estratégias diferentes
- **Personalização Visual**: Cores e ícones únicos por carteira
- **Controle Independente**: Cada carteira com seus próprios ativos

### 🔒 **Privacidade e Segurança**
- **100% Client-Side**: Dados armazenados apenas no navegador
- **IndexedDB**: Persistência local robusta
- **Zero Rastreamento**: Sem coleta de dados pessoais
- **Open Source**: Código auditável por qualquer pessoa

### 🎨 **Experiência do Usuário**
- **Interface Moderna**: Design inspirado em DeFi
- **Dark Mode**: Tema escuro otimizado
- **Responsivo**: Funciona perfeitamente em desktop e mobile
- **Intuitivo**: Navegação simples e direta

## 🚀 Como Usar

### Pré-requisitos
- Node.js 18+ instalado
- Navegador moderno (Chrome, Firefox, Safari, Edge)

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/freitasbtw/walletbtw.git
   cd walletbtw
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação:**
   - Abra seu navegador em `http://localhost:5173`
   - A aplicação será carregada instantaneamente

### Primeiro Uso

1. **Crie sua primeira carteira** clicando no botão "+" na sidebar
2. **Adicione ativos** através do botão "Nova Transação"
3. **Configure preços teto** clicando diretamente nos valores
4. **Acompanhe seu portfólio** em tempo real

## 🏗️ Arquitetura

```
walletbtw/
├── src/
│   ├── App.jsx          # Componente principal
│   ├── services/
│   │   └── db.js        # Gerenciamento IndexedDB
│   └── index.jsx        # Ponto de entrada
├── public/              # Assets estáticos
└── package.json         # Dependências e scripts
```

### Tecnologias

- **Frontend Framework**: React 18 com Hooks
- **Build Tool**: Vite para desenvolvimento rápido
- **Styling**: Tailwind CSS para design system
- **Icons**: Lucide React para ícones consistentes
- **Storage**: IndexedDB via API nativa do navegador
- **API**: Mercado Bitcoin para cotações

### Segurança

- ✅ **Zero dependências externas** para dados sensíveis
- ✅ **Execução 100% client-side** sem backend
- ✅ **Código open-source** auditável pela comunidade
- ✅ **Sem rastreamento** ou coleta de dados
- ✅ **Persistência local** via IndexedDB

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Clone** seu fork: `git clone https://github.com/SEU_USERNAME/walletbtw.git`
3. **Crie uma branch** para sua feature: `git checkout -b feature/nova-funcionalidade`
4. **Commit suas mudanças**: `git commit -m "feat: adiciona nova funcionalidade"`
5. **Push para o branch**: `git push origin feature/nova-funcionalidade`
6. **Abra um Pull Request**

### Tipos de Commit

Seguimos o padrão [Conventional Commits](https://conventionalcommits.org/):

- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Mudanças na documentação
- `style:` - Mudanças de estilo (formatação, etc.)
- `refactor:` - Refatoração de código
- `test:` - Adição ou correção de testes
- `chore:` - Mudanças em ferramentas, configurações

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Gabriel Freitas**

[![X](https://img.shields.io/badge/X-000?style=for-the-badge&logo=x)](https://x.com/Freitasbtw)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-dsf/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/freitasbtw)
---

<div align="center">
  <p>Feito com ❤️ e muito ☕</p>
  <p>
    <a href="#walletbtw-">Voltar ao topo</a>
  </p>
</div>
