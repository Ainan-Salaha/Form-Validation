import React, { useState } from 'react'
import './form.css'

const Form = () => {
    const [formData, setFormData] = useState({});
      const [error, setError] = useState('');
      const [getAge, setGetAge] = useState();
      const [salary, setSalary] = useState();
    
      let changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (formData.birthday) {
          let year = formData.birthday.split('-')[0];
          if (new Date().getFullYear() - year < 18) {
            alert('Age is less than 18');
          } else {
            setGetAge(new Date().getFullYear() - year);
          }
        }
        if (formData.salary) {
          setSalary(formData.salary);
        }
      };
    
      let submitHandler = () => {
        let errorObj = {};
        if (!formData.name) {
          errorObj.name = 'Name is required';
        }
        if (formData.name && formData.name.match('^[a-zA-Z ]*$') === null) {
          errorObj.name = 'Name is not valid';
        }
    
        if (!formData.birthday) {
          errorObj.birthday = 'Birthday is required';
        }
        if (!formData.mobile_number) {
          errorObj.mobile_number = 'Mobile Number is required';
        }
        if (
          formData.mobile_number &&
          (formData.mobile_number.length <= 10 ||
            formData.mobile_number.length >= 15)
        ) {
          errorObj.mobile_number = 'Mobile Number is invalid';
        }
        if (!formData.salary) {
          errorObj.salary = 'Salary is required';
        }
        if (!formData.address) {
          errorObj.address = 'Address is required';
        }
        if (!formData.gender) {
          errorObj.gender = 'Select gender';
        }
        if (!formData.upload) {
          errorObj.upload = 'Please Upload file';
        }
    
        if (!formData.country) {
          errorObj.country = 'Select the country';
        }
        if (Object.keys(errorObj).length > 0) {
          setError(errorObj);
          return;
        }
        
        alert('Form submitted successfully!');
      };
    
      let resetHandler = (e) => {
        e.preventDefault()
        setFormData({})
      };

    return (
        <>
            <div className="form">
                <h2>Register Form</h2>
                <div className="formContainer">

                    <div className='flex'>
                        <label htmlFor="name"><span>* </span>Name</label>
                        <input type="text" name='name' id='name' onChange={changeHandler} />
                        {error.name &&
                            <p style={{ color: 'red' }}>{error.name}</p>}
                    </div>

                    <div className='flex'>
                        <label htmlFor="birthday"><span>* </span>Birthdate</label>
                        <input type="date" name='birthday' id='birthday' onChange={changeHandler} />
                        {error.birthday &&
                            <p style={{ color: 'red' }}>{error.birthday}</p>}
                    </div>

                    <div className='flex'>
                        <label htmlFor="age"><span>* </span>Age</label>
                        <input type="number" name='age' id='age' disabled value={getAge && getAge} />
                    </div>

                    <div className='flex'>
                        <label htmlFor="no"><span>* </span>Mobile Number</label>
                        <input type="tel" name='mobile_number' id='no' onChange={changeHandler} />
                        {error.mobile_number &&
                            <p style={{ color: 'red' }}>{error.mobile_number}</p>}
                    </div>

                    <div className='flex'>
                        <label htmlFor="salary"><span>* </span>Salary</label>
                        <input type='number' value={salary && salary} disabled />
                        <input type='range' name='salary' id='salary' min='20000' max='500000' onChange={changeHandler} />
                        {error.salary &&
                            <p style={{ color: 'red' }}>{error.salary}</p>}
                    </div>

                    <div className='flex'>
                        <label htmlFor="address"><span>* </span>Address</label>
                        <textarea name="address" onChange={changeHandler} id="" cols="30" rows="10"></textarea>
                        {error.address &&
                            <p style={{ color: 'red' }}>{error.address}</p>}
                    </div>

                    <div className='gender'>
                        <label htmlFor="gender"><span>* </span>Gender</label>
                        <input type="radio" id='male' name='gender' value='male' onChange={changeHandler} />
                        <label htmlFor="male">Male</label>
                        <input type="radio" id='female' name='gender' value='female' onChange={changeHandler} />
                        <label htmlFor="female">Female</label>
                        {error.gender &&
                            <p style={{ color: 'red' }}>{error.gender}</p>}
                    </div>

                    <div className='flex'>
                        <label htmlFor="upload"><span>* </span>Upload</label>
                        <input type='file' id='upload' name='upload' accept='.doc,.docx' onChange={changeHandler} />
                        {error.upload &&
                            <p style={{ color: 'red' }}>{error.upload}</p>}
                    </div>

                    <div className='flex'>
                        <select name="country" id="country" onChange={changeHandler}>Country
                            <option>Select</option>
                            <option value="India">India</option>
                            <option value="Sri Lank">Sri Lanka</option>
                            <option value="Russia">Russia</option>
                            <option value="Afganistan">Afganistan</option>
                            <option value="Australia">Australia</option>
                        </select>
                        {error.country &&
                            <p style={{ color: 'red' }}>{error.country}</p>}
                    </div>
                    <div className='btn'>
                        <button type='submit' onClick={submitHandler} style={{backgroundColor:" green"}}>Save</button>
                        <button onClick={resetHandler}  style={{backgroundColor:" red"}} >Reset</button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Form