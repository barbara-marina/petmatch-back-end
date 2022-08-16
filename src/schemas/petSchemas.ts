import joi from "joi";

export type petData = {
    name: string
    species: string
    breed: string
    size: string
    weigth: string
    age: number
    story: string
};

const petSchema = joi.object< petData >({
    name: joi.string().required(),
    species: joi.string().required(),
    breed: joi.string().required(),
    size: joi.string().required(),
    weigth: joi.string().required(),
    age: joi.number().required(),
    story: joi.string().required()
});

export default petSchema;