import * as React from 'react';
import {useState} from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import LoginModal from "../components/Modals/Login";

export default function About() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    return (
        <Container maxWidth="sm">
            <Box sx={{my: 4}}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Next.js example
                </Typography>
                <Button variant="contained" onClick={() => setShowLoginModal(true)}>
                    Go to the main page
                </Button>
                <ProTip/>
                <Copyright/>
            </Box>
            {showLoginModal && <LoginModal isLogin={true} handleClose={() => setShowLoginModal(false)}/>}
        </Container>
    );
}