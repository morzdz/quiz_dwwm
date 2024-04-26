import { createTheme } from '@mui/material/styles'

// Définir les couleurs
const colors = {
    white: '#FEFDFC',
    black: '#34302E',
    darkBlue: '#002626',
    turquoise: '#0E4749',
    yellow: '#FFDB58',
};

// Créer le thème MUI
const theme = createTheme({
    palette: {
        common: {
        white: colors.white,
        black: colors.black,
        },
        primary: {
        main: colors.darkBlue,
        },
        secondary: {
        main: colors.turquoise,
        },
        accent: {
        main: colors.yellow,
        },
    },
});

export default theme;
