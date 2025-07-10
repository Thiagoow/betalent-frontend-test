import HomePage from '@/pages/index';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/global';
import { lightTheme } from '@/styles/theme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
