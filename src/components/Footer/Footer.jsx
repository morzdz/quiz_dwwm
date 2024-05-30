import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../customTheme';

const Footer = () => {
  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Ressources', href: '/ressources' },
    { name: 'Conditions d\'utilisation', href: '/conditions' },
  ];

  const footerStyle = {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    textAlign: 'center',
    padding: '2em 0',
    marginTop: '4em'
  };

  const centerStyle = {
    // display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={footerStyle}>
        <Container maxWidth="lg">
        <Typography
            variant="body1"
            component="div"
            sx={{
              color: theme.palette.accent.main
            }}
          >
            "Web-Dev-Quizz c'est le quizz qui permet de réviser la certification
            de développeur web tout en s'amusant"
          </Typography>{" "}
          <Toolbar style={centerStyle}>
            {navigation.map((item) => (
              <Button key={item.name} component={Link} to={item.href} color="inherit">{item.name}</Button>
            ))}
          </Toolbar>
          <Typography variant="body1" component="div" sx={{ color: theme.palette.accent.main, textAlign: 'center' }}>
            &copy; {new Date().getFullYear()} Lola - Manon - Billy
          </Typography>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Footer;