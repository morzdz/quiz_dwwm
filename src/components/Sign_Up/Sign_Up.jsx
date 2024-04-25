import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import theme from '../../customTheme';

const Sign_Up = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Formik
            initialValues={{
                firstname: '',
                lastname: '',
                pseudo: '',
                email: '',
                password: '',
                confirmpassword: ''
            }}
            validationSchema={Yup.object({
                firstname: Yup.string()
                    .max(15, 'Limité à 15 caractères ou moins')
                    .required('Requis'),
                lastname: Yup.string()
                    .max(20, 'Limité à 20 caractères ou moins')
                    .required('Requis'),
                pseudo: Yup.string()
                    .max(20, 'Limité à 20 caractères ou moins')
                    .required('Requis'),
                email: Yup.string()
                    .email('Adresse email invalide')
                    .required('Requis'),
                password: Yup.string()
                    .min(8, 'Doit contenir au moins 8 caractères')
                    .matches(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                        'Doit contenir au moins 1 majuscule, 1 minuscule, 1 chiffre, sans caractères spéciaux'
                    )
                    .required('Requis'),
                confirmpassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Les mots de passe ne correspondent pas')
                    .required('Requis')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                required
                                id="firstname"
                                label="Prénom"
                                type="text"
                                {...formik.getFieldProps('firstname')}
                            />
                            {formik.touched.firstname && formik.errors.firstname ? (
                                <div>{formik.errors.firstname}</div>
                            ) : null}
                            <TextField
                                required
                                id="lastname"
                                label="Nom"
                                type="text"
                                {...formik.getFieldProps('lastname')}
                            />
                            {formik.touched.lastname && formik.errors.lastname ? (
                                <div>{formik.errors.lastname}</div>
                            ) : null}
                            <TextField
                                required
                                id="pseudo"
                                label="Pseudo"
                                type="text"
                                {...formik.getFieldProps('pseudo')}
                            />
                            {formik.touched.pseudo && formik.errors.pseudo ? (
                                <div>{formik.errors.pseudo}</div>
                            ) : null}
                            <TextField
                                required
                                id="email"
                                label="Email"
                                type="email"
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>
                            ) : null}
                            <FormControl sx={{ m: 1 }} variant="outlined">
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <OutlinedInput
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    {...formik.getFieldProps('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            {formik.touched.password && formik.errors.password ? (
                                <div>{formik.errors.password}</div>
                            ) : null}
                            <FormControl sx={{ m: 1 }} variant="outlined">
                                <InputLabel htmlFor="confirmpassword">Confirmez le mot de passe</InputLabel>
                                <OutlinedInput
                                    id="confirmpassword"
                                    type={showPassword ? 'text' : 'password'}
                                    {...formik.getFieldProps('confirmpassword')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Confirmez le mot de passe"
                                />
                            </FormControl>
                            {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
                                <div>{formik.errors.confirmpassword}</div>
                            ) : null}
                        </div>
                    </Box>
                    <Button variant="contained" type="submit">
                        Valider
                    </Button>
                </form>
            )}
        </Formik>
    );
};

export default Sign_Up;
