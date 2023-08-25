const API_URL = 'http://localhost:4000';

export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/auth/signup`,
  SIGN_IN: `${API_URL}/api/auth/login`,
  PROJECTS: `${API_URL}/api/projects`,
};

export const APP_ROUTES = {
  SIGN_UP: '/Inscription',
  SIGN_IN: '/Connexion',
  ADD_PROJECT: '/Ajouter',
  PROJECT: '/project/:id',
  UPDATE_PROJECT: 'project/modifier/:id',
};
