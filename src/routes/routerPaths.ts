export const routerPaths = {
  Root: '/',
  SignIn: '/signIn',
  SignUp: '/signUp',

  App: {
    Root: '/app/',
    Home: 'home',
    Favorites: 'favorites',
  },
  Research: {
    Root: '/research/:id/*',
    Constructor: {
      relative: 'constructor',
      absolute: '/research/:id/constructor',
    },
  },
};
