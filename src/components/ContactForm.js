import React from 'react';
import { Button, Label, Col, FormGroup, Form } from 'reactstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import { validateContactForm } from './validateContactForm';

function ContactForm() {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                agree: false,
                contactType: 'By Phone',
                feedback: '',
            }}
            onSubmit={handleSubmit}
            validate={validateContactForm}
        >
            <Form>
                <FormGroup row>
                    <Label htmlFor='firstName' md='2'>
                        First Name
                    </Label>
                    <Col md='10'>
                        <Field type='text' id='firstName' name='firstName' />
                    </Col>
                </FormGroup>
                <ErrorMessage name='firstName'>
                    {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
                <FormGroup row>
                    <Label htmlFor='lastName' md='2'>
                        Last Name
                    </Label>
                    <Col md='10'>
                        <Field type='text' id='lastName' name='lastName' />
                    </Col>
                </FormGroup>
                <ErrorMessage name='lastName'>
                    {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
                <FormGroup row>
                    <Label htmlFor='phoneNum' md='2'>
                        Phone
                    </Label>
                    <Col md='10'>
                        <Field type='text' id='phoneNum' name='phoneNum' />
                    </Col>
                </FormGroup>
                <ErrorMessage name='phoneNum'>
                    {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                        Email
                    </Label>
                    <Col md='10'>
                        <Field type='email' id='email' name='email' />
                    </Col>
                </FormGroup>
                <ErrorMessage name='email'>
                    {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
                <FormGroup row>
                    <Label check md={{ size: 4, offset: 2 }}>
                        <Field type='checkbox' name='agree' />{' '}
                        May we contact you?
                    </Label>
                    <Col md='4'>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='feedback' md='2'>
                        Your Feedback
                    </Label>
                    <Col md='10'>
                        <Field type='textarea' id='feedback' name='feedback' />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{ size: 10, offset: 2 }}>
                        <Button type='submit' color='primary'>
                            Submit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    );
}

export default ContactForm;