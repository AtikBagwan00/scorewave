import { AppBar, IconButton, Typography } from '@mui/material';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    return (
        <AppBar position='static'>
            <toolbar >
                <IconButton color='inherit'>
                    <MenuIcon />
                    <Typography variant="h5">
                    Live Score
                </Typography>
                </IconButton>

            </toolbar>

        </AppBar>
    );
}

export default Navbar;
