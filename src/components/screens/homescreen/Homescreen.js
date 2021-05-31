import React,{useEffect} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import CategoriesBar from '../../categoriesBar/CategoriesBar'
import Video from "../../video/Video";
import {vidoesAction} from '../../../redux-store/actions/vidoes.action'
import {useDispatch} from 'react-redux'

const Homescreen = () => {

    const dispatch = useDispatch()
    useEffect(() => (
        dispatch(vidoesAction())
    ))

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
