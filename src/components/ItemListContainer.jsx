import Container from 'react-bootstrap/Container';

export const ItemListContainer = ({greetings}) => {
    return (
        <Container className='mt-4 text-center' >
            <h1>{greetings}</h1>
        </Container>
    )
}