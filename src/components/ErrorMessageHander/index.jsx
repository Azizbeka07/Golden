import React from "react";
import { ErrorMessage } from "formik";

const ErrorMessageHandler = ({ name }) => {
    return (
        <ErrorMessage
            render={(el) => {
                return <div className='error_message'>{el}</div>;
            }}
            name={name}
        />
    );
};

export default ErrorMessageHandler;
