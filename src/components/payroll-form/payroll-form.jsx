import React, {userState, useEffect} from 'react';
import profile1 from "../../../assets/profile-images/Ellipse -1.png";
import profile2 from "../../../assets/profile-images/Ellipse -2.png";
import profile3 from "../../../assets/profile-images/Ellipse -3.png";
import profile4 from "../../../assets/profile-images/Ellipse -4.png";
import profile5 from "../../../assets/profile-images/Ellipse -5.png";
import profile6 from "../../../assets/profile-images/Ellipse -7.png";
import "./payroll-form.scss";
import {useParams, Link, withRouter} from 'react-router-dom';
import EmployeeService from '../../services/employee-services';

export default class PayrollForm extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: "",
        profileUrl: "",
        gender: "",
        departments: [],
        salary: 300000,
        day: "Day",
        month: "Month",
        year: "Year",
        notes: "",
        nameError: "",
        dateError: "",
      };
      this.departmentArray = [];
    }
  
    save = () => {
        event.preventDefault();
       let object = {
           name : formValue.name,
           department : formValue.department,
           gender : formValue.gender,
           salary : formValue.salary,
           startDate : formValue.startDate,
           notes : formValue.notes,
           id : formValue.id,
           profileUrl : formValue.profileUrl
       }
       EmployeeService.addEmployee(object).then(data => {
           console.log("data added");
           this.props.history.push('')
       }).catch(err =>{
           console.log("error");
       })
    };
  
    reset = () => {
      this.setState({
        name: "",
        profileUrl: "",
        gender: "",
        departments: [],
        salary: 300000,
        day: "Day",
        month: "Month",
        year: "Year",
        notes: "",
        nameError: "",
        dateError: "",
      });
    };
  
    handleRadio = (profile) => {
      this.setState({ [profile.target.name]: profile.target.value });
    };
  
    handleCheckBox = (element) => {
      if (!element.target.checked) {
        let index = this.departmentArray.indexOf(element.target.value);
        this.departmentArray.splice(index, 1);
      } else {
        if (!this.departmentArray.includes(element.target.value)) {
          this.departmentArray.push(element.target.value);
        }
      }
      this.setState({ [element.target.name]: this.departmentArray });
    };
  
    handleInputChange = (element) => {
      this.setState({
        [element.target.id]: element.target.value,
      });
  
      if (element.target.id == "name") {
        try {
          checkName(element.target.value);
          this.setState({ nameError: "" });
        } catch (error) {
          this.setState({ nameError: error });
        }
  
        if (element.target.value == "") {
          this.setState({ nameError: "" });
        }
      }
  
      if (element.target.id == "day") {
        try {
          checkStartDate(
            new Date(this.state.year, this.state.month - 1, element.target.value)
          );
          this.setState({ dateError: "" });
        } catch (error) {
          this.setState({ dateError: error });
        }
      }
  
      if (element.target.id == "month") {
        try {
          checkStartDate(
            new Date(this.state.year, element.target.value - 1, this.state.day)
          );
          this.setState({ dateError: "" });
        } catch (error) {
          this.setState({ dateError: error });
        }
      }
  
      if (element.target.id == "year") {
        try {
          checkStartDate(
            new Date(element.target.value, this.state.month - 1, this.state.day)
          );
          this.setState({ dateError: "" });
        } catch (error) {
          this.setState({ dateError: error });
        }
      }
    };
  
    render() {
return(
    <div className="payroll-main">
        <Toolbar />
        <div className="content">
            <form className="form" action="#" onSubmit={save} >
                <div className="form-head">Employee Payroll form</div>
                <div className="row">
                    <label className="label text" htmlFor="name"> Name </label>
                    <input className="input" type="text" id="name" name="name" value={formvalue.name} onChange={changeValue} placeholder="Your name.." />
                </div>
                <div className="error"> {formvalue.error.name} </div>
                <div className="row">
                    <label className="label text" htmlFor="profileUrl">Profile image</label>
                    <div className="profile-radio-button">
                        <label>
                            <input type="radio" checked={formValue.profileUrl=='../../assets/profile-imgs/Ellipse -3.png'} name="profileurl"
                                value="../../assets/profile-imgs/Ellipse -3.png" onChange={changeValue} />
                            <img className="profile" src={profilel} />
                        </label>
                        <label>
                            <input type="radio" name="profileurl" checked={formValue.profileUrl=='../../assets/profile-imgs/Ellipse 1.png'}
                                value="../../assets/profile-imgs/Ellipse 1.png" onChange={changeValue} />
                            <img className="profile" src={profile2} />
                        </label>
                        <label>
                            <input type="radio" name="profileurl" checked={formValue.profileurl=='../../assets/profile-imgs/Ellipse -8.png'}
                                value="../../assets/profile-imgs/Ellipse -8.png" onChange={changeValue} />
                            <img className="profile" src={profile3} />
                        </label>
                        <label>
                            <input type="radio" name="profileurl" checked={formValue.profileUrl=='../../assets/profile-imgs/Ellipse -7.png' }
                                value="../../assets/profile-imgs/Ellipse -7.png" onChange={changeValue} />
                            <img className="profile" src={profile4} />
                        </label>
                    </div>
                </div>
                <div className="error" > {formValue.error.profileUrl} </div>
                <div className="row">
                    <label className="label text" htmlFor="gender">Gender</label>
                    <div>
                        <input type="radio" id="male" onChange={changeValue} name="gender" value="male" />
                        <label className="text" htmlFor="male">Male</label>
                        <input type="radio" id="female" onChange={changeValue} name="gender" value="female" />
                        <label className="text" htmlFor="female">Female</label>
                    </div>
                </div>
                <div className="error"> {formValue.error.gender} </div>
                <div className="row">
                <label className="label text" htmlFor="department">Department</label>
                <div>
                    {formValue.allDepartment.map(item =>(
                        <span key={item}>
                            <input className="checkbox" type="checkbox" onChange={() => onCheckChange(item)} name={item}
                                defaultChecked={() => getchecked( item)} value={item} />
                            <label className="text" htmlFor={item}>{item}</label>
                        </span>
                    ))}
                </div>
            </div>
        <div className="error"> {formValue.error.department} </div>
        <div className="row">
            <label className="label text" htmlFor="salary">Salary</label>
            <input className="input" type="number" onChange={ changevalue} id="salary" value={formValue.salary} name="salary" placeholder="Salary" />
        </div>
        <div className="error"> {formValue.error.salary} </div>
        <div className="row"> <label className="label text" htmlFor="startDate">Start Date</label><div>
            <select onChange={changeValue} id="day" name="day"> <option value="1">1</option><option value="2">2</option></select>
            <select onChange={changevalue} id="month" name="month"> <option value="Jan">January</option><option value="Feb">Febuary</option> </select>
            <select onChange={changevalue} id="year" name="year">
                <option value="2020">2020</option>
            </select>
        </div>
        </div>
        <div className="error"> {formValue.error.startDate} </div>
        <div className="row">
        <label className="label text" htmlFor="notes" >Notes</label>
        <textarea onChange={changeValue} id="notes" value={formValue.notes} className="input" name="notes" placeholder=""
            style={{ height: '100%' }}></textarea>
        </div>
        <div className="buttonParent">
            <a routerLink="" className="resetButton button cancelButton">Cancel</a>
            <div className="submit-reset">
                <button type="submit" className="button submitButton" id="submitButton">{formValue. isUpdate ? 'Update' : 'Submit'}</button>
                <button type="button" onclick={reset} className="resetButton button">Reset</button>
            </div>
        </div>
    </form>
    </div>
</div>

);
}
}

