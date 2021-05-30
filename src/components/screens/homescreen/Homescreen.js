import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import CategoriesBar from '../../categoriesBar/CategoriesBar'
import Video from "../../video/Video";

const Homescreen = () => {
    return (
        <div>
            <Container>
                <CategoriesBar/>
                <Row>
                    {
                        [...new Array(20)].map(() => (
                            <Col lg={3} md={4}>
                                <Video/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Homescreen
