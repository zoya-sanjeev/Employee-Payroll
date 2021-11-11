import React, {userState, useEffect} from 'react';
import {useParams, Link, withRouter} from 'react-router-dom';

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
                            <input type="radio" checked={formValue.profileUrl=='../../assets/profile-images/Ellipse -3.png'} name="profileurl"
                                value="../../assets/profile-images/Ellipse -3.png" onChange={changeValue} />
                            <img className="profile" src={profilel} />
                        </label>
                        <label>
                            <input type="radio" name="profileurl" checked={formValue.profileUrl=='../../assets/profile-images/Ellipse 1.png'}
                                value="../../assets/profile-images/Ellipse 1.png" onChange={changeValue} />
                            <img className="profile" src={profile2} />
                        </label>
                        <label>
                            <input type="radio" name="profileurl" checked={formValue.profileurl=='../../assets/profile-images/Ellipse -8.png'}
                                value="../../assets/profile-images/Ellipse -8.png" onChange={changeValue} />
                            <img className="profile" src={profile3} />
                        </label>
                        <label>
                            <input type="radio" name="profileurl" checked={formValue.profileUrl=='../../assets/profile-images/Ellipse -7.png' }
                                value="../../assets/profile-images/Ellipse -7.png" onChange={changeValue} />
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
)


export default withRouter(PayrollForm);