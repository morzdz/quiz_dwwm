import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../../assets/logo_dwwm_quizz.png';

const navigation = [
  { name: 'Accueil', href: '#' },
  { name: 'Dashboard', href: '#' },
  { name: 'Ressources', href: '#' },
  { name: 'Inscription/Connexion', href: '#' },
];

const Header = () => {
  return (
    <AppBar position="static" sx={{ boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src={logo} alt="Logo" className="h-8" />
        </Typography>
        <div>Web-Dev-Quizz c'est le quizz qui permet de réviser la certification de développeur web tout en s'amusant</div>
        <div>
          {navigation.map((item) => (
            <Button key={item.name} href={item.href} color="inherit">{item.name}</Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;