import React, { useState, useRef } from 'react';

import ModalStudent from '../ModalStudent/ModalStudent';

import './ListStudent.css';

const ListStudent = () => {

    const [listStudents, setListStudent] = useState([
        {id: 1, fullName: 'Tran Van Nam', age: 23,address: 'Nghe An'},
        {id: 2, fullName: 'Tran Van Son', age: 23,address: 'Nghe An'},
        {id: 3, fullName: 'Tran Van Phi', age: 30,address: 'Nghe An'},
        {id: 4, fullName: 'Tran Thi Nga', age: 27,address: 'Nghe An'},
        {id: 5, fullName: 'Le Cong Khanh', age: 23,address: 'Nghe An'},
        {id: 6, fullName: 'Pham Anh Quan', age: 23,address: 'Nghe An'},
    ]);
    
    const modalRef = useRef();

    const showModal = (id) => {
        let student = listStudents.find((student) => {return student.id === id});
        modalRef.current.showModalHandler(student);
    };

    
    const deleteRowHandler = (id) => {
        setListStudent(listStudents.filter((student)=> {return student.id !== id}));
    };

    const saveStudentHandler = (student) => {
        let currentStudent = listStudents.find((item) => {return item.id === student.id});
        if(currentStudent){
            console.log(currentStudent);
            console.log(student);
        }else{
            setListStudent(listStudents.concat(student));
        }
        
    };

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>
                            <button className="btn btn-info" onClick={showModal}>
                                Add
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {listStudents.map((student) => {
                        return (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.fullName}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                                <td className="student_table__button">
                                    <button className="btn btn-primary mr-1" onClick={showModal.bind(this, student.id)}>
                                        Edit 
                                    </button>
                                    <button className="btn btn-danger" onClick={deleteRowHandler.bind(this, student.id)}> 
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );                       
                    })} 
                </tbody>
            </table>

            <ModalStudent ref={modalRef} onSave={saveStudentHandler}/>
        </div>
    );
};

export default ListStudent;
