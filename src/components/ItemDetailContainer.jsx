import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, "Items", id);

        getDoc(refDoc)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.data();
                    setProduct(data);
                } 
            })
            .catch((error) => {
                console.error("Error al obtener el documento:", error);
            });
    }, [id]);

    if (!product) return null;

    return (
        <Container className='mt-4 text-center itemContainer' >
            <ItemDetail product={product}/>
        </Container>
    )
}