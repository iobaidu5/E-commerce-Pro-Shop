import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 


const Footer = () => {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col className="text-center py-3">
                            Copyright &copy; Pro-Shop Create by Obaid-Khan
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer
