// import { useState } from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../assets/logo_dwwm_quizz.png";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../customTheme";

const navigation = [
  { name: "Accueil", href: "#" },
  { name: "Dashboard", href: "#" },
  { name: "Ressources", href: "#" },
  { name: "Inscription/Connexion", href: "#" },
];

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="Logo" className="h-8" />
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ color: theme.palette.accent.main }}
          >
            "Web-Dev-Quizz c'est le quizz qui permet de réviser la certification
            de développeur web tout en s'amusant"
          </Typography>{" "}
          <div>
            {navigation.map((item) => (
              <Button
                key={item.name}
                href={item.href}
                color="inherit"
                sx={{ color: theme.palette.common.white }}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
