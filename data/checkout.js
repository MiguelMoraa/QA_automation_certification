import dotenv from 'dotenv'
dotenv.config()

export const chekoutData = {
    VALID_DATA: {
        firstname: process.env.FISTNAME,
        lastname: process.env.LASTNAME,
        postalcode: process.env.POSTALCODE
    },

    FISRTNAME_DATA: {
        firstname: '',
        lastname: process.env.LASTNAME,
        postalcode: process.env.POSTALCODE
    },

    LASTNAME_DATA: {
        firstname: process.env.FISTNAME,
        lastname: '',
        postalcode: process.env.POSTALCODE
    },

    POSTAL_DATA: {
        firstname: process.env.FISTNAME,
        lastname: process.env.LASTNAME,
        postalcode: ''
    }
}