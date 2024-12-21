import * as Yup from "yup";

export const schema = Yup.object().shape(
    {
        name  : Yup
            .string()
            .min(3, "The name must be at least 3 characters long.")
            .max(50, "The name must be no more than 50 characters long.")
            .required("Name is required"),
        number: Yup
            .string()
            .min(3, "The number must be at least 3 characters long.")
            .max(50, "The number must be no more than 50 characters long.")
            .required("Number is required")
    }
);
