import joi from "joi";

export type petImage = {
    petId: number
    url: string
};

const petImageSchema = joi.object< petImage >({
    url: joi.string().uri().required(),
    petId: joi.number().required()
});

export default petImageSchema;