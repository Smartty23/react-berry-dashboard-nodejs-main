import React from 'react';
import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider as StylesThemeProvider } from '@mui/styles';

// routing
import AppRoutes from './routes';

// defaultTheme
import theme from './themes';

// project imports
import NavigationScroll from './layout/NavigationScroll';

//-----------------------|| APP ||-----------------------//

const App = () => {
    const customization = useSelector((state) => state.customization);
    const appTheme = theme(customization);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={appTheme}>
                <StylesThemeProvider theme={appTheme}>
                    <CssBaseline />
                    <NavigationScroll>
                        <AppRoutes />
                    </NavigationScroll>
                </StylesThemeProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
