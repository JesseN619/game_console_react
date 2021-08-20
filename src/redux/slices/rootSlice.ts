import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Xbox 360',
        company: "Microsoft Corporation",
        price: "299.99",
        release_date: "2005-11-22T00:00:00"

    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseCompany: (state, action) => { state.company = action.payload },
        choosePrice: (state, action) => { state.price = action.payload},
        chooseReleaseDate: (state, action) => { state.release_date = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, chooseCompany, choosePrice, chooseReleaseDate} = rootSlice.actions;