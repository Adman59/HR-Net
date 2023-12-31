import { configureStore, createSlice } from "@reduxjs/toolkit"

const employeesSlice = createSlice({
    name: "employees",
    initialState: [],
    reducers: {
        addEmployee: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const { addEmployee } = employeesSlice.actions;

export const mainStore = configureStore({
    reducer: {
        employees: employeesSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(), //Permet de retirer l'erreur non serializable de la console
    devTools: true,
})