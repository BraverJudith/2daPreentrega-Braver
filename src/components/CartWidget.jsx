import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import Imagen from '../assets/shopping-cart.png';


export const CartWidget = () => {

    const {items} = useContext(CartContext);

    const total = items.reduce (
        (acumulator, valorActual) => acumulator + valorActual.quantity, 0 
    );

    if(!total) return ( 
                <div>
                    <img className="cart" src={Imagen} alt="" />
                    <span className='cartNum'>{total}</span>
                </div>      
    );
    
    return  (
            <Link to="/cart">
                <div>
                    <img className="cart" src={Imagen} alt="" />
                    <span className='cartNum'>{total}</span>
                </div>
            </Link>);
};