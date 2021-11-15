import React from 'react';
import './home.scss';
import employeeService from '../../services/EmployeeService';
import deleteIcon from '../../assets/icons/delete-black-18dp.svg';
import editIcon from '../../assets/icons/create-black-18dp.svg';
import profile1 from '../../assets/profile-imgs/Ellipse -3.png';
import profile2 from '../../assets/profile-imgs/Ellipse -1.png';
import profile3 from '../../assets/profile-imgs/Ellipse -8.png';
import profile4 from '../../assets/profile-imgs/Ellipse -7.png';

const Display = (props) => {
    var imgUrl;
var loadImg=(img) =>{
    if(img==='../../assets/profile-images/Ellipse -1.png')
    {
        console.log("1")
        imgUrl = profile2
    }
    if(img==='../../assets/profile-images/Ellipse -3.png')
    {
        console.log("2")
        imgUrl = profile1
    }
    if(img==='../../assets/profile-images/Ellipse -8.png')
    {
        console.log("3")
        imgUrl = profile3
    }
    if(img==='../../assets/profile-images/Ellipse -7.png')
    {
        console.log("4")
        imgUrl = profile4
    }
}
    const update = (id) => {
        let employeeData;
        employeeService.getEmployee(id).then(data => {
            employeeData = data.data;
            localStorage.setItem("employeeData", JSON.stringify(employeeData));
        }).catch(error => {
            console.log("Error after ", error);
        });
        employeeService.updateEmployee(employeeData, id).then(data => {
            console.log("Updated data: ", data);
        }).catch(error => {
            console.log("Error after ", error);
        })
        window.location.replace("/update");

    }
    
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
                            <td><img className="profile" alt=""  onLoad={loadImg(employee.profileUrl)} src={imgUrl} /></td>
                            <td>{employee.name}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.department && employee.department.map(dept =>
                                (<div className="dept-label">{dept}</div>))}</td>
                            <td> ₹ {employee.salary}</td>
                            <td>{employee.startDate}</td>
                            <td><img src={deleteIcon} onClick={() => remove(employee.id)} alt="delete" />
                                <img src={editIcon} onClick={() => update(employee.id)} alt="edit" /></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
const remove = (id) => {
}


export default Display;