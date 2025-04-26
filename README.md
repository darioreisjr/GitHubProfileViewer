# GitHub Profile Viewer

<div align="center">
  
![Logo do GitHub Profile Viewer](https://placeholder-for-project-logo.com/logo.png)

[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.3.0-646CFF.svg)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB.svg)](https://reactjs.org/)
[![Material UI](https://img.shields.io/badge/Material_UI-5.13.0-0081CB.svg)](https://mui.com/)
[![Zod](https://img.shields.io/badge/Zod-4.0.0-blue.svg)](https://github.com/colinhacks/zod)
[![Licença](https://img.shields.io/badge/Licença-MIT-green.svg)](LICENSE)

</div>

## 📋 Visão Geral

GitHub Profile Viewer é uma aplicação web responsiva que permite aos usuários pesquisar perfis do GitHub e visualizar informações detalhadas sobre usuários e seus repositórios. Construída com React, TypeScript e Material UI, oferece uma interface limpa e moderna que se adapta a qualquer tamanho de dispositivo.

<div align="center">
  <img src="https://placeholder-for-screenshot.com/desktop.png" alt="Captura de tela em Desktop" width="80%">
</div>

## ✨ Funcionalidades

- **Pesquisa de Usuários do GitHub**: Busque por qualquer nome de usuário do GitHub
- **Exibição Detalhada de Perfil**: Visualize avatar, biografia, localização, empresa e outros detalhes do perfil
- **Lista de Repositórios**: Veja os repositórios mais recentes do usuário com detalhes como linguagem, estrelas e forks
- **Design Totalmente Responsivo**: Funciona perfeitamente em dispositivos móveis, tablets e desktops
- **Suporte a Múltiplos Idiomas**: Interface disponível em inglês, português e espanhol
- **Gerenciamento Robusto de Estado**: Usando Zustand para um controle de estado previsível
- **Validação de Formulários**: Validação no lado do cliente com React Hook Form e Zod
- **Testes Abrangentes**: Testes unitários e de componentes com Vitest e Testing Library

## 🛠️ Tecnologias

- **Framework Frontend**: React 18
- **Ferramenta de Build**: Vite
- **Linguagem**: TypeScript
- **Framework de UI**: Material UI
- **Gerenciamento de Estado**: Zustand
- **Tratamento de Formulários**: React Hook Form
- **Validação**: Zod 4.0
- **Cliente HTTP**: Axios
- **Internacionalização**: i18next
- **Testes**: Vitest, React Testing Library
- **Estilização**: Emotion CSS-in-JS

## 🚀 Começando

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seunome/github-profile-viewer.git
   cd github-profile-viewer
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Abra seu navegador e acesse:
   ```
   http://localhost:5173
   ```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o aplicativo para produção
- `npm run preview` - Visualiza a versão de produção localmente
- `npm run test` - Executa testes no modo de observação
- `npm run test:run` - Executa os testes uma vez
- `npm run test:coverage` - Gera relatório de cobertura de testes

## 📱 Design Responsivo

A aplicação é totalmente responsiva e proporciona uma experiência de visualização ideal em uma ampla variedade de dispositivos:

<div align="center">
  <img src="https://placeholder-for-screenshot.com/mobile.png" alt="Captura de tela em Dispositivo Móvel" width="30%">
  <img src="https://placeholder-for-screenshot.com/tablet.png" alt="Captura de tela em Tablet" width="45%">
</div>

- **Visualização Móvel**: Interface otimizada com navegação em drawer e layouts baseados em cards
- **Visualização em Tablet**: Layouts aprimorados com melhor espaçamento e legibilidade
- **Visualização em Desktop**: Interface completa com visualizações em lista e conteúdo expandido

## 🌐 Internacionalização

A aplicação suporta múltiplos idiomas:

- Inglês (padrão)
- Português
- Espanhol

Os usuários podem alternar entre idiomas através do seletor de idiomas no canto superior direito da aplicação.

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── common/
│   │   └── ... # Componentes compartilhados
│   ├── layout/
│   │   └── ... # Componentes de layout
│   ├── profile/
│   │   └── ... # Componentes relacionados ao perfil
│   ├── search/
│   │   └── ... # Componentes relacionados à pesquisa
│   └── ui/
│       └── ... # Componentes de UI
├── hooks/
│   └── ... # Hooks personalizados
├── services/
│   └── ... # Serviços de API
├── schemas/
│   └── ... # Esquemas de validação Zod
├── store/
│   └── ... # Gerenciamento de estado com Zustand
├── styles/
│   └── ... # Estilos globais e tema
├── i18n/
│   └── ... # Arquivos de internacionalização
├── types/
│   └── ... # Tipos TypeScript
├── utils/
│   └── ... # Funções utilitárias
├── pages/
│   └── ... # Componentes de página
├── App.tsx
└── main.tsx
```

## 🧪 Testes

A aplicação utiliza Vitest e React Testing Library para testes. Componentes e serviços são testados quanto à funcionalidade e responsividade.

Execute os testes com:

```bash
npm run test
```

## 🔄 Gerenciamento de Estado

O estado é gerenciado usando Zustand, proporcionando um container de estado simples e previsível:

```typescript
export const useGithubStore = create<GithubState>((set) => ({
  user: null,
  repos: [],
  isLoading: false,
  error: null,
  
  searchUsername: async (username: string) => {
    set({ isLoading: true, error: null });
    
    try {
      const data = await fetchUserData(username);
      set({ user: data.user, repos: data.repos, isLoading: false });
    } catch (err) {
      set({ error: err, isLoading: false, user: null, repos: [] });
    }
  },
  
  reset: () => {
    set({ user: null, repos: [], error: null, isLoading: false });
  },
}));
```

## 🔍 Integração com API

A aplicação utiliza a API REST do GitHub para buscar dados de usuários e repositórios:

- Informações do usuário: `https://api.github.com/users/{username}`
- Repositórios: `https://api.github.com/users/{username}/repos?sort=updated&per_page=5`

Os dados são validados usando esquemas Zod para garantir segurança de tipos e estrutura de dados consistente.

## 🎨 Estilização

O Material UI fornece a base para estilização com extensões personalizadas de tema:

```typescript
const theme = createTheme({
  palette: {
    primary: {
      main: '#2b3137',
      light: '#565a5f',
      dark: '#000a12',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6e5494',
      light: '#9d82c4',
      dark: '#412967',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f6f8fa',
      paper: '#ffffff',
    },
  },
  // Personalizações adicionais de tema...
});
```

## 🚧 Melhorias Futuras

- **Alternância de Modo Escuro**: Adicionar suporte para alternância entre temas claro e escuro
- **Autenticação GitHub**: Permitir que usuários façam login com suas contas do GitHub
- **Opções de Pesquisa Avançada**: Filtrar usuários por localização, linguagem, etc.
- **Gráfico de Atividade do Usuário**: Exibir atividade de contribuição do usuário
- **Análise de Repositório**: Fornecer insights sobre tecnologias e estatísticas do repositório
- **Suporte a PWA**: Converter para um Progressive Web App para uso offline
- **GitHub Gists**: Exibir gists públicos do usuário

## 👥 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para enviar um Pull Request.

1. Faça um fork do repositório
2. Crie sua branch de feature (`git checkout -b feature/recurso-incrivel`)
3. Faça commit de suas alterações (`git commit -m 'Adiciona algum recurso incrível'`)
4. Faça push para a branch (`git push origin feature/recurso-incrivel`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙏 Agradecimentos

- [API do GitHub](https://docs.github.com/pt/rest) por fornecer os dados
- [Material UI](https://mui.com/) pelos componentes de UI
- [Vite](https://vitejs.dev/) pela ferramenta de build extremamente rápida
- Todas as bibliotecas de código aberto utilizadas neste projeto

---

<div align="center">
  
Feito com ❤️ por Dario Reis

</div>
