import { createContext, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
// Redux imports
import { Provider } from 'react-redux';
import store from './redux/store';

import GlobalStyle from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/theme';

import Layout from './layout/Layout';
import RoutesComponent from './Routes';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('dark');
  const memoTheme = useMemo(() => ({ theme, setTheme }), [theme]);
  const themeStyle = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={memoTheme}>
      <ThemeProvider theme={themeStyle}>
        <Provider store={store}>
          <GlobalStyle />
          <Layout>
            <RoutesComponent />
          </Layout>
        </Provider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
