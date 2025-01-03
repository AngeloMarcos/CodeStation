import {Box, Button, Container, Grid, styled, Typography} from "@mui/material";
import React from "react";
import Avatar from "../../../assets/images/perfil.jpg";

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../components/styledButton/StyledButon";
import { AnimatedBackground } from "../../../components/AnimadedBackground/AnimadedBackground";


const Hero = () => {

  const StyledImg = styled('img')(() => ({
    width: "80%",
    borderRadius: "50%",
    border: '1px solid #abd726'
  }));


  const StyledHero = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.primary.dark,
    height: "100vh",
    display: "flex",
    alignItems:"center",
    [theme.breakpoints.up('xs')]: { // <= mobile
      paddingTop: "100px",

  },
  [theme.breakpoints.up('md')]: { // >=mobile
      paddingTop: "0",
  }
  }));

    return (
      <>
           <StyledHero>
          <Container maxWidth="lg" >
          <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Box position="relative">
          <Box position="absolute" width="100%" top="-100" right="0">
            <AnimatedBackground/>
          </Box>
          <Box position="relative" textAlign="center"> <StyledImg src={Avatar} alt="perfil" /></Box>
        </Box>
     
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography color='#abd726' variant="h1" textAlign="center">Angelo Marcos</Typography>
        <Typography color='primary.contrastText'  variant="h2" textAlign="center" patting-botton="3px">I´m Software Engineer</Typography>
        
        <Grid container display="flex"   justifyContent="center" spacing={4}>
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("download")}>
              <FileDownloadIcon />
             <Typography> Download CV</Typography>
              </StyledButton>
            </Grid>
            <Grid item xs={12} md={4} display="flex" justifyContent="center"> 
            <StyledButton>
              <EmailIcon/>
              <Typography onClick={() => console.log("contact me")}>Contact me</Typography>
              </StyledButton>
        </Grid>
        </Grid>
        
        
      </Grid>
      
    </Grid>
      
    </Container>
          </StyledHero>

      </>
    )
  }
  
  export default Hero