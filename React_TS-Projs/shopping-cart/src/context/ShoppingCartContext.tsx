import { createContext, useContext } from 'react';

type ShoppingCartProviderProps = {
    children: React.ReactNode;
}

const ShoppingCartContext = createContext({});


export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> =({ children }) => {
    return(
        <ShoppingCartContext.Provider 
            value={{

            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
} 

export const useShoppingCart = () => useContext(ShoppingCartContext)
