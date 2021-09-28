import { useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@emotion/react';

import { Layout, DefaultComponent } from './components';

import { AppContext, ThemeModeContext } from './contexts';
import { AppClient, ThemeModeClient } from './clients';
import { routes } from './config';
import { APP_TITLE } from './utils/constants';
import { Route as AppRoute } from './types/Route';

function App() {
  const appClient = new AppClient();
  const themeModeClient = new ThemeModeClient();

  const theme = useMemo(() => {
    let theme = createTheme({
      palette: {
        mode: themeModeClient.themeMode,
      },
    });
    theme = responsiveFontSizes(theme);
    return theme;
  }, [themeModeClient.themeMode]);

  const addRoute = (route: AppRoute) => (
    <Route
      key={route.key}
      path={route.path}
      component={route.component || DefaultComponent}
      exact
    />
  );

  return (
    <>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <AppContext.Provider value={appClient}>
        <ThemeModeContext.Provider value={themeModeClient}>
          <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Router>
                <Switch>
                  <Layout>
                    {routes.map((route: AppRoute) =>
                      route.subRoutes
                        ? route.subRoutes.map((item: AppRoute) =>
                            addRoute(item)
                          )
                        : addRoute(route)
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
