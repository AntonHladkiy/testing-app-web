import React, {useEffect} from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {useLogIn} from "../api/authApi";
import {useNavigate} from "react-router";

export function Login() {
    const [logIn, response, isLoading, error] = useLogIn();
    let navigate = useNavigate();
    useEffect(() => {
        if (response) {
            navigate("/tasks");
        }
    }, [response])
    return <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={(values, {setSubmitting}) => {
            logIn(values);
            setSubmitting(false);
        }}
    >
        {({
              isSubmitting,
              /* and other goodies */
          }) => (
            <Form>
                <div>Username:</div>
                <div><Field type="text" name="username"/></div>
                <ErrorMessage name="username" component="div"/>
                <div>Password:</div>
                <div><Field type="password" name="password"/></div>
                <ErrorMessage name="password" component="div"/>
                <button type="submit" disabled={isSubmitting}>
                    Login
                </button>
            </Form>
        )}
    </Formik>
}
