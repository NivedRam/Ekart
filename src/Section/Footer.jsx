import React from 'react';
import { Container, Grid, TextField, Button, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
const footerStyles = {
  footer: {
    padding: '20px',
    marginTop: 'auto',
    backgroundColor: 'black',
    color:"white"
  },
  socialIcons: {
    marginTop: '10px',
    textAlign: 'center',
  },
};

const Footer = () => {
  return (
    <footer style={footerStyles.footer}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Newsletter Subscription</Typography>
            <form>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Your Email Address"
                name="email"
              />
              <Button variant="contained" color="primary" fullWidth>
                Subscribe
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Quick Links</Typography>
            <Typography>
              <a  style={{color:"white"}} href="/">Home</a>
            </Typography>
            <Typography>
              <a style={{color:"white"}} href="/about">About</a>
            </Typography>
            <Typography>
              <a style={{color:"white"}} href="/contact">Contact Us</a>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Connect With Us</Typography>
            <div style={footerStyles.socialIcons}>
              <IconButton color="primary" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="primary" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="primary" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton color="primary" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
