import { useContext,useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";

import { getFirestore, collection, addDoc } from "firebase/firestore";

import Swal from 'sweetalert2';

import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Imagen from  "../assets/mensajefinal.jpg";
import { Load } from "./Load";


const initialValues = {
    name:'',
    email:'',
    phone:'',
};
export const Cart = () => {
    const [buyer, setBuyer] = useState(initialValues);
    const {clear, items, removeItem} = useContext(CartContext);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (ev) => { 
        const { name, value } = ev.target;
        setBuyer ((prev) => {
            return {
                ...prev,
                [name]:value,
            };
        });
    };

    const handleClearCart = () => { clear();};

    const total = items.reduce((acu, act) => acu + act.price * act.quantity, 0);

    const handleOrder = () => {
        setIsLoading(true);

        if (items.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El carrito está vacío. Por favor añade productos antes de comprar.',
            });
            setIsLoading(false);
            return;
        }

        if (buyer.name.length < 5) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, ingrese su Nombre',
            });
            setIsLoading(false);
            return;
        }
        
        if (!buyer.email.includes('@')) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, ingrese una dirección de correo electrónico válida.',
            });
            setIsLoading(false);
            return;
        }
        
        if (buyer.phone.length < 10) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, ingrese un número de teléfono válido',
            });
            setIsLoading(false);
            return;
        }        
    
        const order = {
            buyer,
            items,
            total,
        };

        const db=getFirestore();
        const orderCollection = collection (db,"orders");

        addDoc(orderCollection, order).then(({ id }) => {
            setIsLoading(false);
            if (id){
                    Swal.fire({
                        title: "Pedido Realizado con éxito, ID de compra: " +id ,
                        text: "Tejido con amor, enviado con cuidado. Disfruta de tu creación mientras nos ocupamos del resto. ¡Gracias por elegirnos para tus proyectos de lana!",
                        imageUrl: Imagen,
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: "Corazones en lana",
                        showConfirmButton: true,
                        confirmButtonText: "Inicio",
                        showCancelButton: false,
                    }).then(() => {
                        navigate("/");
                        clear();
                    }); 
                    }          
                }      
            )};
    return (
        <Container>
            {isLoading && <Load/>}
            <Table striped bordered hover className="cart-table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Quitar producto</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                    <tr key={item.id}> 
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td><button onClick={() => removeItem(item.id)}>Eliminar producto</button></td>
                    </tr>
                ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2"></td>
                        <td>Total:</td>
                        <td>{total}</td>
                    </tr>
                </tfoot>
            </Table>
            <div className="btncontainer">
                <Link to="/"><button className="button">Seguir comprando</button></Link>
                <button className="button" onClick={handleClearCart}>Vaciar carrito</button>
            </div>
            <Form className="form">
                <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre y Apellido *</Form.Label>
                        <Form.Control type="text" value={buyer.name} name="name" onChange={handleChange} placeholder="Ingrese su Nombre completo" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control type="email" value={buyer.email} name="email" onChange={handleChange} placeholder="Ingrese su direccion de email" required/>
                        <Form.Text className="text-muted">
                        Su direccion de mail no sera compartida a terceros.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Celular *</Form.Label>
                        <Form.Control type="string" value={buyer.phone} name="phone" onChange={handleChange} placeholder="Ingrese su direccion numero de celular" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Quiero recibir novedades" />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={handleOrder}>
                        Comprar
                    </Button>
            </Form>
        </Container>
    );
}