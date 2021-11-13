import React from 'react';
import './home.scss';
import deleteIcon from '../../assets/icons/delete-black-18dp.svg';
import editIcon from '../../assets/icons/create-black-18dp.svg';
import profile1 from '../../assets/profile-images/Ellipse -3.png';

const Display = (props) => {
    return (
        <table id="display" className="table">
            <tbody>

                <tr key={-1}>
                    <th></th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Startdate</th>
                    <th>Actions</th>
                </tr>
                {
                    props.employeeArray && props.employeeArray.map((employee, ind) => (
                        <tr key={ind}>
                            <td><img className="profile" src={profile1} alt="" /></td>
                            <td>{employee.name}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.department && employee.department.map(dept =>
                                (<div className="dept-label">{dept}</div>))}</td>
                            <td> ₹ {employee.salary}</td>
                            <td>{employee.startDate}</td>
                            <td><img src={deleteIcon} onClick={() => remove(employee.id)} alt="delete" />
                                <img src={editIcon} onClick={() => edit(employee.id)} alt="edit" /></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
const remove = (id) => {
}

const edit = (id) => {
}

export default Display;