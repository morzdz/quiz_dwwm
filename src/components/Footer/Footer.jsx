import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles'; 
import theme from '../../customTheme'; 

const navigation = [
  { name: 'Accueil', href: '#' },
  { name: 'Dashboard', href: '#' },
  { name: 'Ressources', href: '#' },
  { name: 'Conditions d\'utilisation', href: '#' }, 
];

const Footer = () => {
  return (
    <ThemeProvider theme={theme}> 
      <AppBar position="static" sx={{ top: 'auto', bottom: 0 }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ flexDirection: 'column', backgroundColor: theme.palette.primary.main, color: 'white' }}> 
            <div>
              {navigation.map((item) => (
                <Button key={item.name} href={item.href} color="inherit">{item.name}</Button>
              ))}
            </div>
            <Typography
            variant="body1"
            component="div"
            sx={{ color: theme.palette.accent.main }}
          >
            &copy; {new Date().getFullYear()} Lola - Manon - Billy
          </Typography>{" "}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Footer;
