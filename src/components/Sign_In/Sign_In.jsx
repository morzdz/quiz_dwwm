import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import theme from '../../customTheme';
import './Sign_In.css';

const Sign_In = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={Yup.object({
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
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {formik => (
                <form id="signin-form" style={{backgroundColor: theme.palette.common.white}} onSubmit={formik.handleSubmit}>
                    <div>
                        <FormControl id='input' sx={{ m: 1 }} variant="outlined">
                            <InputLabel id="label" htmlFor="email">Email</InputLabel>
                            <OutlinedInput
                                required
                                id="email"
                                label="Email"
                                type="email"
                                {...formik.getFieldProps('email')}
                            />
                        </FormControl>
                        {formik.touched.email && formik.errors.email ? (
                            <div id='error' style={{color: theme.palette.accent.main, fontWeight: 'bold'}}>{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div>
                        <FormControl id='input' sx={{ m: 1 }} variant="outlined">
                            <InputLabel id="label" htmlFor="password">Password</InputLabel>
                            <OutlinedInput
                                required
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
                            <div id='error' style={{color: theme.palette.accent.main, fontWeight: 'bold'}}>{formik.errors.password}</div>
                        ) : null}
                    </div>

                    <Button 
                        id="submit" 
                        variant="contained" 
                        type="submit" 
                        sx={{
                            backgroundColor: theme.palette.background.default,
                            border: `2px solid ${theme.palette.primary.main}`,
                            color: theme.palette.primary.main,
                            transition: 'background-color 0.3s, color 0.3s',
                            '&:hover': {
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.common.white
                            }
                        }}
                    >
                        Valider
                    </Button> 
                </form>
            )}
        </Formik>
    );
};

export default Sign_In;
