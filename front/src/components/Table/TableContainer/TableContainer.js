import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import classes from './TableContainer.module.css'

const TableContainer = (prop) => {
    return (<Container fluid className={classes.TableContainer}>
        <Row className={classes.TableContainerRow}>
            <Row lg={12}>
                <Col lg={3} sm={12}>HI</Col>
                <Col lg={3} sm={12}>HI</Col>
                <Col lg={3} sm={12}>HI</Col>
                <Col lg={3} sm={12}>HI</Col>
            </Row>
        </Row>
    </Container>);
}
export default TableContainer;