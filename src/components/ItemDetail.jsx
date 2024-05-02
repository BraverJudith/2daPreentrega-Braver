import { ItemCount } from './ItemCount';
import Card from 'react-bootstrap/Card'; 
import { Link,useParams } from 'react-router-dom';

import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const ItemDetail = ({product}) => {
    const { addItem } = useContext(CartContext);
    const [quantityAdded, setQuantityAdded] = useState(0);

    const {id} = useParams();
    
    const handleOnAdded = (quantity) => {
        addItem(product, id, quantity);
        setQuantityAdded(quantity);
    }

    return(
        <Card className='itemCard'>
                <Card.Img className='detailImg' variant="top" src={product.imageURL} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                    {product.description}
                    </Card.Text>
                    <Card.Text>$
                    {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {
                        quantityAdded > 0 ? (
                            <Link to= '/cart' className ='button buttonB'>Ver Carrito</Link>
                        ):(
                            <ItemCount initial={1} stock={product.stock} onAdd={handleOnAdded} />
                        )   
                    }
                </Card.Footer>
            </Card>
    )
}