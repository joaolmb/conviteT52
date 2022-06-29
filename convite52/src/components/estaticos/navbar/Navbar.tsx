import { Typography, AppBar, Toolbar } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css'


function Navbar() {
    return (
        <>
            <AppBar position="static" className='appbar'>
                <Toolbar variant="dense" className='toolbar'>
                    <Box  style={{ cursor: "pointer" }}>
                        <Typography color="inherit" className='tittle'>
                            ObeeMEPERS
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;