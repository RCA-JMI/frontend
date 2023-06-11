import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/



export const userSchema =yup.object().shape({
    name : yup.string().required("Please enter a name"),
    mobileNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email : yup.string().email("Invalid Email").required("Email field is required"),
    message : yup.string()
});






