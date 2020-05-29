import React from 'react';
import { Formik } from 'formik';

import TextField from '../../Components/Form/Input/Text';
import Password from '../../Components/Form/Input/Password';

import Button from '../../Components/Button';

import { APIInstance } from '../../Api/http-request';

import './login-style.css';


export default function Login() {
    return (
        <div className="login__container">
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                onSubmit={(values, actions) => {
                    APIInstance.post<string, number>('/login', values).then(
                        data => {
                            if (typeof data.data.response === 'string') {
                                alert(`Token: ${data.data.response}`);
                            } else {
                                alert(`Error: ${data.data.response.description}`);
                            }
                        }
                    );
                    actions.setSubmitting(false);
                }}
            >
                {
                    ({
                        handleSubmit,
                        isSubmitting
                    }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="login__form">
                                    <div className="login__form-input">
                                        <TextField
                                            label="Nombre de usuario"
                                            name="username"
                                        />
                                    </div>
                                    <div className="login__form-input">
                                        <Password
                                            label="Contraseña"
                                            name="password"
                                        />
                                    </div>
                                    <div className="login__form-submit">
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            color="primary"
                                            variant="contained"
                                        >
                                            Submit Form
                                    </Button>
                                    </div>

                                </div>
                            </form>
                        )
                }
            </Formik>
        </div>
    )
}