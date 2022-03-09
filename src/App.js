import './App.css';
import React, { useState, useEffect } from "react";
import bg from './images/download.png';
import missing_child from './images/missing.png';
import found_child from './images/find.png';
import { Button, CardGroup, Card, Row, Col, Container, Form, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdCancel } from "react-icons/md";
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
}

function App() {
  // Modal States
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // Modal
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div>
      <div className='main_image' >
        <img height={"20%"} width={"30%"} src={bg} alt="bg" />
      </div>
      <Row className='row'>
        <Col className='col card' onClick={openModal}>
          <img height={"70%"} width={"40%"} src={missing_child} alt="missing chid icon" />
          <Row className='img_text'>
            Report Missing Child
          </Row>
        </Col>
        <Col className='col card'>
          <img height={"70%"} width={"40%"} src={found_child} alt="find chid icon" />
          <Row className='img_text'>
            Report Found Child
          </Row>
        </Col>
      </Row>









      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        className="ModelContent"
      // contentLabel="Example Modal"
      >
        <h1 className='cancel_icon' onClick={closeModal}><MdCancel /></h1>

        <h2 className='modal_text'>Report Missing Child</h2>
        <Form style={{ fontSize: "120%" }}>
          <Form.Group className="mb-3 input_field" controlId="ChildPic">
            <Form.Label>Recent Child Picture</Form.Label>
            <Form.Control type="file" multiple="multiple" name='ChildPic' />
          </Form.Group>
          <Form.Group className="mb-3 input_field" controlId="Name">
            <Form.Label> Name</Form.Label>
            <Form.Control type="text" placeholder=" Name" name='Name' />
          </Form.Group>
          <Form.Group className="mb-3 input_field" controlId="HostName">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Phone Number" name='PhoneNumber' />
          </Form.Group>
          <Form.Group className="mb-3 input_field" controlId="Age">
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" placeholder="Age" name='Age' />
          </Form.Group>
          <Form.Group className="mb-3 input_field" controlId="Gender">
            <Form.Label>Gender</Form.Label>
            <Form.Control type="text" placeholder="Gender" name='Gender' />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal>




    </div>

  );
}

export default App;
