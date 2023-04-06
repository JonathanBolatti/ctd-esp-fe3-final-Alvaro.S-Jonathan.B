import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PopUp } from './PopUp';
import { H1, ButtonForm, FormContainer, ButtomContainer } from '../Styles/StyleComponents'

export const ToSubscribe = () => {

    const [click, setClick] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            text: '',
            email: '',
        },

        validationSchema: Yup.object({

            name: Yup.string()
                .trim("Blank spaces are not allowed")
                .strict().min(5, "The minimum is 5 characters")
                .required("The name is obligatory")
                .matches(/^[aA-zZ\s]+$/, "Numbers and special characters are not allowed"),

            email: Yup.string()
                .email("It is not a valid email")
                .required("Email is required"),

        }),

        onSubmit: (formData) => {
            console.log(formData);
            setIsFormValid(true);
        }
    })

    const handleClick = () => {
        setClick(true)
        setIsFormValid(false);
    }

    const handleResetCard = () => {
        setIsFormValid(false);
        setClick(false)
    }

    const handleResetCardAndFormFields = () => {
        formik.handleReset();
        handleResetCard();
    }

    return (

        <FormContainer>
            <Form onSubmit={formik.handleSubmit}>
                <H1>Contact us</H1>

                <Form.Input
                    type="text"
                    placeholder="Enter your full name"
                    name="name"
                    onChange={formik.handleChange}
                    error={formik.errors.name}
                    value={formik.values.name}
                />

                <Form.TextArea
                    type="text"
                    placeholder="Write here your query"
                    name="text"
                    onChange={formik.handleChange}
                    value={formik.values.text}
                />

                <Form.Input
                    type="text"
                    placeholder="Enter your Email"
                    name="email"
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                    value={formik.values.email}
                />
                <ButtomContainer>
                    <ButtonForm>
                        <Button style={{ background: "none", color: "#FFFFFF", border: "none" }} type="submit" onClick={handleClick}>subscribe</Button>
                    </ButtonForm>

                    <ButtonForm>
                        <Button style={{ background: "none", color: "#FFFFFF", border: "none" }} type="button" onClick={handleResetCardAndFormFields} >clean fields</Button>
                    </ButtonForm>
                </ButtomContainer>

            </Form>

            {click && isFormValid &&
                <PopUp
                    name={formik.values.name}
                    email={formik.values.email}
                />
            }
        </FormContainer>

    )
}
