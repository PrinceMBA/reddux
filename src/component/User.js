import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editUser, deleteUser } from "../slice/UsersSlice";

const User = ({ user }) => {
  // State hooks for modal visibility and user details
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  // Dispatch hook for Redux actions
  const dispatch = useDispatch();

  // Handlers for modal visibility
  const toggleModal = () => setShowModal(!showModal);
  const closeModal = () => setShowModal(false);

  // Handlers for form input changes
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  // Handler for deleting a user
  const handleDelete = () => {
    dispatch(deleteUser(user.id));
  };

  // Handler for form submission
  const handleSubmit = () => {
    // Create new user data
    const newData = {
      id: user.id,
      name,
      email,
    };

    // Dispatch the editUser action
    dispatch(editUser(newData));

    // Close the modal
    closeModal();
  };

  // Component rendering
  return (
    <div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Name
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={handleNameChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      php Copy code
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <Button onClick={toggleModal}>Edit</Button>
      <Button onClick={handleDelete} variant="danger">
        Delete
      </Button>
    </div>
  );
};

export default User;
