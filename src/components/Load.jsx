import Spinner from 'react-bootstrap/Spinner';

export const Load = () => {
    return (
        <div className='loading'>
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="light" />
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
        </div>
    );
};