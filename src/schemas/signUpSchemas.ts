import joi from "joi";

export type signUpData = {
    username: string
    email: string
    password: string
    passwordConfirm: string
    type: "ong" | "adopter"
};

const signUpSchema = joi.object< signUpData >({
    username: joi.string().required(),
    email: joi.string().email().regex(/^([\w\-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w\-]{2,3})$/).required(),
    password: joi.string().min(8).alphanum().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).required(),
    passwordConfirm: joi.ref('password'),
    type: joi.valid('ong', 'adopter').required()
});

export default signUpSchema;