import Imagen from '../assets/shopping-cart.png';
export const CartWidget = () => {
    return  (<>
                <img className="cart" src={Imagen} alt="" />
                <span className='cartNum'>0</span>
            </>)
}