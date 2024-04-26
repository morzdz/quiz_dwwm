import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const navigation = [
  { name: 'Accueil', href: '#' },
  { name: 'Dashboard', href: '#' },
  { name: 'Ressources', href: '#' },
  { name: "Conditions d'utilisation", href: '#' },
];

const Footer = () => {
  return (
    <AppBar position="static" sx={{ top: 'auto', bottom: 0 }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ flexDirection: 'column' }}>
          <div>
            {navigation.map((item) => (
              <Button key={item.name} href={item.href} color="inherit">{item.name}</Button>
            ))}
          </div>
          <Typography variant="body1" component="div" sx={{ textAlign: 'center' }}>
            &copy; {new Date().getFullYear()} Lola - Manon - Billy
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;