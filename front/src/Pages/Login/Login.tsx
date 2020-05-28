import React from 'react';
import { Formik } from 'formik';

import TextField from '../../Components/Form/Input/Text';
import Password from '../../Components/Form/Input/Password';

import { post, ApiResult } from '../../Api/http-request'; 


export default function Login() {
    return (
        <div>
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                onSubmit={(values, actions) => {
                    post<string, number>('/login', values).then(
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
                            <form onSubmit={handleSubmit} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <div>
                                    <TextField
                                        label="Nombre de usuario"
                                        name="username"
                                    />
                                </div>
                                <div>
                                    <Password
                                        label="Contraseña"
                                        name="password"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    Submit Form
                                </button>
                            </form>
                        )
                }
            </Formik>
        </div>
    )
}