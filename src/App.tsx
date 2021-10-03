import { useMemo, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createTheme, responsiveFontSizes, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@emotion/react';

import { Layout, PageDefault } from './components';

import { AppContext, ThemeModeContext } from './contexts';
import { AppClient } from './clients';
import { routes } from './config';
import { APP_TITLE } from './utils/constants';
import { Route as AppRoute } from './types/Route';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const appClient = new AppClient();

  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() => {
    let theme = createTheme({
      palette: {
        mode,
      },
    });
    theme = responsiveFontSizes(theme);
    return theme;
  }, [mode]);

  const addRoute = (route: AppRoute) => (
    <Route key={route.key} path={route.path} component={route.component || PageDefault} exact />
  );

  return (
    <>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <AppContext.Provider value={appClient}>
        <ThemeModeContext.Provider value={themeMode}>
          <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Router>
                <Switch>
                  <Layout>
                    {routes.map((route: AppRoute) =>
                      route.subRoutes ? route.subRoutes.map((item: AppRoute) => addRoute(item)) : addRoute(route)
                    )}
                  </Layout>
                </Switch>
              </Router>
            </ThemeProvider>
          </MuiThemeProvider>
        </ThemeModeContext.Provider>
      </AppContext.Provider>
    </>
  );
}

export default App;
