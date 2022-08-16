import joi from "joi";

export type signInData = {
    email: string
    password: string
    type: "ong" | "adopter"
};

const signInSchema = joi.object< signInData >({
    email: joi.string().email().regex(/^([\w\-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w\-]{2,3})$/).required(),
    password: joi.string().min(8).alphanum().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).required(),
    type: joi.valid('ong', 'adopter').required()
});

export default signInSchema;