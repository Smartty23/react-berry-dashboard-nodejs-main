import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';

// project imports
import Breadcrumbs from './../../ui-component/extended/Breadcrumbs';
import Header from './Header';
import Sidebar from './Sidebar';
import Customization from './../Customization';
import navigation from './../../menu-items';
import { drawerWidth } from '../../store/constant';
import { SET_MENU } from './../../store/actions';

// assets
import { IconChevronRight } from '@tabler/icons-react';

//-----------------------|| MAIN LAYOUT ||-----------------------//

const MainLayout = ({ children }) => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

    // Handle left drawer
    const leftDrawerOpened = useSelector((state) => state.customization.opened);
    const dispatch = useDispatch();
    const handleLeftDrawerToggle = () => {
        dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
    };

    React.useEffect(() => {
        dispatch({ type: SET_MENU, opened: !matchDownMd });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownMd]);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* header */}
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    backgroundColor: theme.palette.background.default,
                    transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
                }}
            >
                <Toolbar>
                    <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
                </Toolbar>
            </AppBar>

            {/* drawer */}
            <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

            {/* main content */}
            <Box
                component="main"
                sx={{
                    ...theme.typography.mainContent,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    transition: theme.transitions.create('margin', {
                        easing: leftDrawerOpened ? theme.transitions.easing.easeOut : theme.transitions.easing.sharp,
                        duration: leftDrawerOpened ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen
                    }),
                    [theme.breakpoints.up('md')]: {
                        marginLeft: leftDrawerOpened ? 0 : -(drawerWidth - 20),
                        width: `calc(100% - ${drawerWidth}px)`
                    },
                    [theme.breakpoints.down('md')]: {
                        marginLeft: '20px',
                        width: `calc(100% - ${drawerWidth}px)`,
                        padding: '16px'
                    },
                    [theme.breakpoints.down('sm')]: {
                        marginLeft: '10px',
                        width: `calc(100% - ${drawerWidth}px)`,
                        padding: '16px',
                        marginRight: '10px'
                    }
                }}
            >
                {/* breadcrumb */}
                <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign />
                <Box>{children || <Outlet />}</Box>
            </Box>
            <Customization />
        </Box>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node
};

export default MainLayout;
