import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { getFirestore, getDocs, query, where, collection } from 'firebase/firestore';

import Container from 'react-bootstrap/Container';


import { ItemList } from './ItemList';

import { Load } from './Load';


export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();

        let refCollection;
        
        if (!id) refCollection = collection(db, "Items");
        else {
                setProducts([]);
                refCollection = query (
                                    collection (db, "Items"),
                                    where("categoryID","==",id)
                                    );
        }          
        getDocs(refCollection).then((snapshot) => {
            const newProducts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setProducts(newProducts);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <Load/>;

    return (
        <Container className='container' >
            <ItemList products={products}/>
        </Container>
    )
}