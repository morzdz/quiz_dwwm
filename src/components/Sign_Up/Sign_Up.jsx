import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {Button,FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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
                        <div>
                            <FormControl sx={{ m: 1 }} variant="outlined">
                            <InputLabel htmlFor="firstname">Prénom</InputLabel>
                                <OutlinedInput
                                    required
                                    id="firstname"
                                    label="Prénom"
                                    type="text"
                                    {...formik.getFieldProps('firstname')}
                                />
                            </FormControl>
                            {formik.touched.firstname && formik.errors.firstname ? (
                                <div>{formik.errors.firstname}</div>
                            ) : null}
                            <FormControl sx={{ m: 1 }} variant="outlined">
                            <InputLabel htmlFor="lastname">Nom</InputLabel>
                            <OutlinedInput
                                required
                                id="lastname"
                                label="Nom"
                                type="text"
                                {...formik.getFieldProps('lastname')}
                            />
                            </FormControl>
                            {formik.touched.lastname && formik.errors.lastname ? (
                                <div>{formik.errors.lastname}</div>
                            ) : null}
                            <FormControl sx={{ m: 1 }} variant="outlined">
                            <InputLabel htmlFor="pseudo">Pseudo</InputLabel>
                            <OutlinedInput
                                required
                                id="pseudo"
                                label="Pseudo"
                                type="text"
                                {...formik.getFieldProps('pseudo')}
                            />
                            </FormControl>
                            {formik.touched.pseudo && formik.errors.pseudo ? (
                                <div>{formik.errors.pseudo}</div>
                            ) : null}
                            <FormControl sx={{ m: 1 }} variant="outlined">
                            <InputLabel htmlFor="email">Email</InputLabel>
                                <OutlinedInput
                                    required
                                    id="email"
                                    label="Email"
                                    type="email"
                                    {...formik.getFieldProps('email')}
                                />
                            </FormControl>
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
                    <Button variant="contained" type="submit">
                        Valider
                    </Button>
                </form>
            )}
        </Formik>
    );
};

export default Sign_Up;
