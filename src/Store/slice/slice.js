import { createSlice } from "@reduxjs/toolkit";
import localStoragefun from "../../localstoragedata";

const userslice = createSlice({
    name: 'firstslice',
    initialState: {
        data: localStoragefun(),
        open: false,
        search: ""

    },
    reducers: {
        addData: (state, action) => {
            state.data.push(action.payload);
        },
        setOpen: (state) => {
            state.open = true;

        },
        setClose: (state) => {
            state.open = false;
        },
        setSearch: (state, action) => {
            state.search = action.payload.toLowerCase();
        },
        onDelete: (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload);
        },


        onEdit: (state, action) => {
            const { id, title, description } = action.payload;
            const existinguser = state.data.find((user) => user.id === id);
            if (existinguser) {
                existinguser.title = title;
                existinguser.description = description;
            }
        }

    }
})

export default userslice.reducer;
export const { addData, setOpen, setClose, setSearch, onDelete, onEdit } = userslice.actions;
