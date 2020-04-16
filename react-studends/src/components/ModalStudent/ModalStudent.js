import React, {useState, forwardRef, useImperativeHandle} from 'react';

import {Modal, Button } from 'react-bootstrap';

const ModalStudent = forwardRef((props, ref) => {

    const [showModal, setShowModal] = useState(false);

    const [formInput, setFormInput] = useState(
        {id: '', fullName: '', age: '', address: ''}
    );
    const setStudentHandler = (student) => {
        let {id, fullName, age, address} = student;
        setFormInput( prevState => ({
            ...prevState,
            id: id,
            fullName: fullName,
            age: age,
            address: address,
        }));
    };
    useImperativeHandle(ref, () => ({
        showModalHandler(student) {
          setShowModal(true);
          if(student){
            setStudentHandler(student);
          }
        }
    }));

    const hideModalHandler = () => {
        setShowModal(false);
        setFormInput( prevState => ({
            ...prevState,
            id: '',
            fullName: '',
            age: '',
            address: '',
        }));
    };
    const inputHandlerChange = (e) => {
        const {name , value} = e.target;
        setFormInput( prevState => ({
            ...prevState,
            [name] : value
        }));
    };

    const saveStudentHandler = (e) => {
        e.preventDefault();
        props.onSave(formInput);
        hideModalHandler();
    };

    return (
        <div id="modal-div">
            <Modal size="lg" show={showModal} onHide={hideModalHandler} >
                <Modal.Header closeButton>
                    <Modal.Title id="pic-title">Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body id="pic-info">
                    <form>
                        <div className="form-group">
                            <label>ID</label>
                            <input name='id' type="number" value={formInput.id} onChange={inputHandlerChange} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input name='fullName' type="text" value={formInput.fullName} onChange={inputHandlerChange} className="form-control"  placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input name='age' type="text" value={formInput.age} onChange={inputHandlerChange} className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input name='address' type="text" value={formInput.address} onChange={inputHandlerChange} className="form-control" placeholder="Password" />
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={saveStudentHandler}>Save</Button>
                    <Button variant="danger" onClick={hideModalHandler}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
});

export default ModalStudent;