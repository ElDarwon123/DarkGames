//  importing createContext and useState for the CartContextProvider 
import { createContext, useState } from "react";
//  exporting createContext as CartContext
export const CartContext = createContext();
// creating contexts as CartContextProvider
export const CartContextProvider = ({ children }) => {
    //estado del los detaller del card
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

    //mostrar o esconder detalles del card
    const openProductDetail = () => setIsProductDetailOpen(true)
    
    const closeProductDetail = () => setIsProductDetailOpen(false)
/*
    //mostrar o esconder carrito
    const[CheckoutSideMenuOpen, setCheckoutSideMenuOpen] = useState(false)
*/
    //mostrar detalles del producto del card
    const[productToShow, setProductToShow] = useState({})

    return(
        <CartContext.Provider value={{
            isProductDetailOpen, setIsProductDetailOpen,
            openProductDetail, 
            closeProductDetail,
            productToShow, setProductToShow
        }}
        >
            {children}
        </CartContext.Provider>
    )
    
    
}