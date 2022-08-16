import joi from "joi";

export type adoptingData = {
    petId: number
};

const adoptingPetSchema = joi.object< adoptingData >({
    petId: joi.number().required()
});

export default adoptingPetSchema;