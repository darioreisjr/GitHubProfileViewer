# GitHub Profile Viewer

<div align="center">
  
![GitHub Profile Viewer Logo](https://placeholder-for-project-logo.com/logo.png)

[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.3.0-646CFF.svg)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB.svg)](https://reactjs.org/)
[![Material UI](https://img.shields.io/badge/Material_UI-5.13.0-0081CB.svg)](https://mui.com/)
[![Zod](https://img.shields.io/badge/Zod-4.0.0-blue.svg)](https://github.com/colinhacks/zod)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

## 📋 Overview

GitHub Profile Viewer is a responsive web application that allows users to search for GitHub profiles and view comprehensive information about users and their repositories. Built with React, TypeScript, and Material UI, it provides a clean, modern interface that adapts to any device size.

<div align="center">
  <img src="https://placeholder-for-screenshot.com/desktop.png" alt="Desktop Screenshot" width="80%">
</div>

## ✨ Features

- **GitHub User Search**: Search for any GitHub username
- **Comprehensive Profile Display**: View avatar, bio, location, company, and other profile details
- **Repository Listing**: See the user's most recent repositories with details like language, stars, and forks
- **Fully Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Multi-language Support**: Interface available in English, Portuguese, and Spanish
- **Robust State Management**: Using Zustand for predictable state handling
- **Form Validation**: Client-side validation with React Hook Form and Zod
- **Comprehensive Testing**: Unit and component tests with Vitest and Testing Library

## 🛠️ Technologies

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **UI Framework**: Material UI
- **State Management**: Zustand
- **Form Handling**: React Hook Form
- **Validation**: Zod 4.0
- **HTTP Client**: Axios
- **Internationalization**: i18next
- **Testing**: Vitest, React Testing Library
- **Styling**: Emotion CSS-in-JS

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/github-profile-viewer.git
   cd github-profile-viewer
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:coverage` - Generate test coverage report

## 📱 Responsive Design

The application is fully responsive and provides an optimal viewing experience across a wide range of devices:

<div align="center">
  <img src="https://placeholder-for-screenshot.com/mobile.png" alt="Mobile Screenshot" width="30%">
  <img src="https://placeholder-for-screenshot.com/tablet.png" alt="Tablet Screenshot" width="45%">
</div>

- **Mobile View**: Optimized interface with drawer navigation and card-based layouts
- **Tablet View**: Enhanced layouts with improved spacing and readability
- **Desktop View**: Full-featured interface with list views and expanded content

## 🌐 Internationalization

The application supports multiple languages:

- English (default)
- Portuguese
- Spanish

Users can switch languages via the language selector in the top right corner of the application.

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   └── ... # Shared components
│   ├── layout/
│   │   └── ... # Layout components
│   ├── profile/
│   │   └── ... # Profile-related components
│   ├── search/
│   │   └── ... # Search-related components
│   └── ui/
│       └── ... # UI components
├── hooks/
│   └── ... # Custom hooks
├── services/
│   └── ... # API services
├── schemas/
│   └── ... # Zod validation schemas
├── store/
│   └── ... # Zustand state management
├── styles/
│   └── ... # Global styles and theme
├── i18n/
│   └── ... # Internationalization files
├── types/
│   └── ... # TypeScript types
├── utils/
│   └── ... # Utility functions
├── pages/
│   └── ... # Page components
├── App.tsx
└── main.tsx
```

## 🧪 Testing

The application uses Vitest and React Testing Library for testing. Components and services are tested for functionality and responsiveness.

Run tests with:

```bash
npm run test
```

## 🔄 State Management

State is managed using Zustand, providing a simple and predictable state container:

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

## 🔍 API Integration

The application uses the GitHub REST API to fetch user and repository data:

- User information: `https://api.github.com/users/{username}`
- Repositories: `https://api.github.com/users/{username}/repos?sort=updated&per_page=5`

Data is validated using Zod schemas to ensure type safety and consistent data structure.

## 🎨 Styling

Material UI provides the foundation for styling with custom theme extensions:

```typescript
const theme = createTheme({
  palette: {
    primary: {
      main: "#2b3137",
      light: "#565a5f",
      dark: "#000a12",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#6e5494",
      light: "#9d82c4",
      dark: "#412967",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f6f8fa",
      paper: "#ffffff",
    },
  },
  // Additional theme customizations...
});
```

## 🚧 Future Improvements

- **Dark Mode Toggle**: Add support for dark/light theme switching
- **GitHub Authentication**: Allow users to log in with their GitHub accounts
- **Advanced Search Options**: Filter users by location, language, etc.
- **User Activity Graph**: Display user contribution activity
- **Repository Analysis**: Provide insights about repository technologies and statistics
- **PWA Support**: Convert to a Progressive Web App for offline use
- **GitHub Gists**: Display user's public gists

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [GitHub API](https://docs.github.com/en/rest) for providing the data
- [Material UI](https://mui.com/) for the UI components
- [Vite](https://vitejs.dev/) for the blazing fast build tool
- All the open-source libraries used in this project

---

<div align="center">
  
Made with ❤️ by [Your Name or Organization]

</div>
