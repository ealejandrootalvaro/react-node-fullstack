import React from 'react';
import { Formik } from 'formik';

import TextField from '../../Components/Form/Input/Text';
import Password from '../../Components/Form/Input/Password';

export default function Login() {
    return (
        <div>
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                onSubmit={(values, actions) => {
                    console.log(values);
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