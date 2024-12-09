
import './App.css';
import { createTheme, MantineProvider } from '@mantine/core';

import {Login} from "./pages/Login.tsx";


const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'cyan',
});


function App() {
  return (
    <MantineProvider theme={theme} style={{alignItems: 'center'}}>
      <Login/>
    </MantineProvider>
    
  );
}

export default App;
