import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useEffect } from 'react';
import { useState } from 'react';
import { decodeToken } from "react-jwt";
import { useNavigate } from 'react-router';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';

const settings = ['Dashboard', 'Logout'];

function UserLayout({ children }) {


    const [isadmin, setIsadmin] = useState(false);
    const [isLogin, setIslogin] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {


        const token = sessionStorage.getItem('access-token');

        console.log(token);

        if (token) {
            setIslogin(true);
            const data = decodeToken(token);
            //token decode
            console.log(data);

            const { isAdmin, isSuperAdmin } = data;

            // check for isadmin or issuperAdmin

            setIsadmin(isAdmin || isSuperAdmin);

        }





    }, [])
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar position="sticky">
                <Container maxWidth="xl">
                    <Toolbar >
                        <AdbIcon sx={{ display: { xs: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 0,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            SAAS
                        </Typography>

                        {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                             {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem> 
                            ))} 
                        </Menu>
                    </Box> */}
                        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"

                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography> */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>

                        </Box>

                        {isLogin ? <> <Box sx={{ flexGrow: 0, px: 1 }}>
                            <Tooltip title="Open settings" >
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                                    <Avatar alt="" src="" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >

                                {isadmin && <MenuItem >
                                    <Typography textAlign="center">Dashboard</Typography>
                                </MenuItem>}
                                <MenuItem >
                                    <Typography onClick={() => {
                                        sessionStorage.removeItem('access-token');
                                        setIslogin(false);
                                        handleCloseUserMenu();



                                    }} textAlign="center">Log out</Typography>

                                </MenuItem>

                            </Menu>

                        </Box>
                            <IconButton color='inherit' onClick={() => navigate('/cart')} >
                                <LocalMallSharpIcon sx={{ fontSize: 40 }} />
                            </IconButton>
                        </>
                            : <><Button
                                onClick={() => navigate('/signup')}
                                variant="h6"
                                noWrap
                                component="a"
                              
                                sx={{
                                    mr: 0,
                                    display: { xs: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                SignUp
                            </Button><Button
                                onClick={() => navigate('/login')}
                                variant="h6"
                                noWrap
                                component="a"
                                sx={{
                                    mr: 0,
                                    display: { xs: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                    LogIn
                                </Button>
                            </>}
                    </Toolbar>
                </Container>
            </AppBar>
            {children}
        </>
    );
}
export default UserLayout;