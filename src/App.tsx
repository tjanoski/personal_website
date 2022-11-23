import React from 'react';
import './App.css';
import TV from "./components/TV";
import {Box, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Source_Code_Pro from "./fonts/Source_Code_Pro/SourceCodePro-VariableFont_wght.ttf";
import Digitalist from "./fonts/d3-digitalism-font/D3DigitalismRound-YzRy.ttf";
import DigitalistItalic from './fonts/d3-digitalism-font/D3DigitalismItalic-8M1Z.ttf'

const theme = createTheme({
    typography: {
        fontFamily: 'Digitalist, Source_Code_Pro, Arial',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                  font-family: 'Digitalist';
                  font-display: swap;
                  font-style: normal;
                  src: local('Digitalist'), url(${Digitalist}) format('truetype');
                }
                 @font-face {
                  font-family: 'Source_Code_Pro';
                  font-display: swap;
                  font-style: normal;
                  src: local('Source_Code_Pro'), url(${Source_Code_Pro}) format('truetype');
                }
                @font-face {
                  font-family: 'DigitalistItalic';
                  font-display: swap;
                  font-style: normal;
                  src: local('DigitalistItalic'), url(${DigitalistItalic}) format('truetype');
                }
                
                
            `,
        },
    },
});


function App() {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          {/*<Box*/}
          {/*    sx={{*/}
          {/*        fontFamily: 'digitalis',*/}
          {/*        fontSize: 120,*/}
          {/*    }}*/}
          {/*>*/}
          {/*    Digital Age*/}
          {/*</Box>*/}

          <div className="App">
              <TV />
          </div>
      </ThemeProvider>
  );
}

export default App;
