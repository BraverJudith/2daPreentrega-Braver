import { useState } from "react";
import { createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [items, setItems] = useState ([]);

    const clear = () => setItems ([]);

    const addItem = (item, id, quantity) => {
        const exists = items.some((i) => i.id === item.id);
            if (exists) {
            const updateItems = items.map((i) => {
                if (i.id === item.id) {
                return {
                    ...i,
                    quantity: i.quantity + quantity,
                };
                } else {
                return i;
                }
            });
            setItems(updateItems);
            } else {
            setItems((prev) => {
                return [...prev, { ...item, id, quantity }];
            });
            }
        };

    const removeItem = (itemId) =>{
        const filteredItems = items.filter ((item) => item.id !== itemId);
        setItems(filteredItems);
    }
    return (
        <CartContext.Provider value = {{addItem, clear, items, removeItem }} >
            {children}
        </CartContext.Provider>
    );
};
