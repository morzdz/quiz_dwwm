import { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import logo from "../../assets/logo_dwwm_quizz.png";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../customTheme";
import { useMediaQuery } from '@mui/material';

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Ressources", href: "/ressources" },
  { name: "Inscription / Connexion", href: "/signup" }, 
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <div className="logo-container">
            <img src={logo} alt="Logo" width={`100`} />
          </div>
          {isMobile ? (
            <div className="mobile-menu">
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              {isMenuOpen && (
                <div className="mobile-menu-items">
                  {navigation.map((item) => (
                    <Button
                      key={item.name}
                      component={Link}
                      to={item.href}
                      color="inherit"
                      sx={{
                        color: theme.palette.common.white,
                        width: '100%',
                        textAlign: 'center',
                      }}
                    >
                      {item.name}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div style={{ marginLeft: "auto" }}>
              {navigation.map((item, index) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.href}
                  color="inherit"
                  sx={{
                    color: theme.palette.common.white,
                    marginRight: index < navigation.length - 1 ? "10px" : 0,
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;