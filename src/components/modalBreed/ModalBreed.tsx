import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import React from 'react';


interface ModalContentProps {
    breed:string,

}

const ModalContent: React.FC<ModalContentProps> = ({ breed }) => {

    return (

        <>
            <h3>{breed}</h3>
            <Col xs={6} md={4}>
                <Image src="holder.js/171x180" roundedCircle />
            </Col>
        </>
    )

}

export default ModalContent;
