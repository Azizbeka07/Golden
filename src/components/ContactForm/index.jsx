import React from "react";
import * as Yup from "yup";
import { Container } from "components/Container/style";
import { Title } from "components/WhyUs/style";
import { Formik } from "formik";
import axios from "axios";
import ErrorMessageHandler from "components/ErrorMessageHander";
import * as S from "./style";

const ContactForm = () => {
    const contactInitialValues = {
        name: "",
        email: "",
    };

    const onSubmit = async (values, { resetForm }) => {
        const res = await axios.post("https://reqres.in/api/users", {
            data: values,
        });

        if (res.status == 201) {
            resetForm();
        } else {
            console.log("errors");
        }
    };

    const ContactFormValidation = Yup.object().shape({
        name: Yup.string().min(3, "Too short!").required(),
        email: Yup.string().email("Invalid email").required(),
    });

    return (
        <S.ContactFormWrapper>
            <Container>
                <S.FormContent>
                    <Title>Мы Вам перезвоним</Title>
                    <S.FormContentText>
                        Если у вас возникли какие-то вопросы или проблемы,
                        заполните форму и мы Вам перезвоним.
                    </S.FormContentText>
                    <Formik
                        initialValues={contactInitialValues}
                        onSubmit={onSubmit}
                        validationSchema={ContactFormValidation}
                        validateOnChange
                    >
                        {(formik) => {
                            console.log(formik);
                            return (
                                <S.ContactForm onSubmit={formik.handleSubmit}>
                                    <S.FormRows>
                                        <S.FormInput
                                            type='text'
                                            name='name'
                                            className={`${
                                                formik.errors.name && "error"
                                            }`}
                                            onChange={formik.handleChange}
                                            placeholder='Ваше имя'
                                        />
                                        <ErrorMessageHandler name='name' />
                                    </S.FormRows>
                                    <S.FormRows>
                                        <S.FormInput
                                            type='email'
                                            name='email'
                                            className={`${
                                                formik.errors.email && "error"
                                            }`}
                                            onChange={formik.handleChange}
                                            placeholder='Ваш Email'
                                        />
                                        <ErrorMessageHandler name='email' />
                                    </S.FormRows>
                                    <S.SubmitBtn type='submit'>
                                        Отправить
                                    </S.SubmitBtn>
                                </S.ContactForm>
                            );
                        }}
                    </Formik>
                </S.FormContent>
            </Container>
        </S.ContactFormWrapper>
    );
};

export default ContactForm;
