import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import data from "../../data";
import { ICartData } from "../../types/type";

interface IinitialState {
    carts: ICartData[],
    quantity: number,
    total: number
}

const initialState: IinitialState = {
    carts: data,
    quantity: 4,
    total: 0

}


const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        deleteAllCart: (state) => {
            state.carts = [];
        },
        deleteCart: (state, action: PayloadAction<string>) => {
            const deletedCart = state.carts.filter((item) => (
                item.id !== action.payload
            ));

            state.carts = deletedCart;
        },
        increment: (state, action: PayloadAction<string>) => {
            const cartItem: ICartData | undefined = state.carts.find((item) => item.id === action.payload)
            cartItem!.quantity += 1;
        },
        decrement: (state, action: PayloadAction<string>) => {
            const cartItem: ICartData | undefined = state.carts.find((item) => item.id === action.payload)
            cartItem!.quantity -= 1;
        },
        calculateTotal: (state) => {
            let total: number = 0;
            let quantity: number = 0;

            state.carts.forEach((item) => {
                total += item.price * item.quantity;
                quantity += item.quantity;
            });

            state.total = total;
            state.quantity = quantity;
        }
    }
})


export const {deleteCart, increment, decrement, calculateTotal, deleteAllCart} = courseSlice.actions;
export const courseReducer = courseSlice.reducer;