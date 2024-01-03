import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'cart',
    initialState: {
        cardnumber: '----------------',
        fullname: 'Full Name',
        cvv: 'cvv',
        countrycode: 'Code',
        phonenumber: 'Phone Number',
        expirydate: 'MM / YY'
    },
    reducers: {
        addCardNumber: (state, action) => {
            state.cardnumber = action.payload
        },
        addFullName: (state, action) => {
            state.fullname = action.payload
        },
        addCvv: (state, action) => {
            state.cvv = action.payload
        },
        addCountryCode: (state, action) => {
            state.countrycode = action.payload
        },
        addPhoneNumber: (state, action) => {
            state.phonenumber = action.payload
        },
        addExpiryDate: (state, action) => {
            state.expirydate = action.payload
        },
    }
})

export const {addCardNumber, addCountryCode, addCvv, addExpiryDate, addFullName, addPhoneNumber} = cardSlice.actions;

export default cardSlice.reducer;