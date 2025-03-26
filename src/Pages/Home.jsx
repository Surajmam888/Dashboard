import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '../ThemeContext';
import Dashboard from '../Components/Dashboard';


// const ThemeToggleButton = () => {
//     const { darkMode, toggleTheme } = useTheme();

//     return (
//         <Button variant="contained" onClick={toggleTheme}>
//             Switch to {darkMode ? "Light" : "Dark"} Mode
//         </Button>
//     );
// };

const Home = () => {
    return (
        <Box sx={{ textAlign: "center", marginTop: "10px", marginRight: "10px" }}>
            {/* <Box
                sx={{
                    minHeight: "5vh",
                    display: "flex",

                    alignItems: "left",
                    justifyContent: "right",
                    gap: 2,
                }}
            >
                <ThemeToggleButton />
            </Box> */}
            <Dashboard />
        </Box>
    );
};

export default Home;
