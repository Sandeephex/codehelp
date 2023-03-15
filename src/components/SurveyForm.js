import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hexapi from './HexAPI/HexapiV3';
import StateList from './StateList'
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const SurveyForm = () => {
 

    const [formData, setFormData] = useState({
        Answer24: "",
        Answer25: '',
        Answer26: '',

    })
    const [total,settotal]=useState()
   const[getuserid,setuserid]=useState('')
    const[totaldata,settotaldata]=useState()
const[QuestionID,SetQuestionID]=useState(['24','25','26'].toString())

console.log(QuestionID)
console.log(formData)

useEffect(()=>{
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams.getAll("UserID"));
    var UserID = urlParams.getAll("UserID").toString();
    console.log(UserID);
    setuserid(UserID)
},[])

    // const submitForm = () => {
    //     let obj = {
    //         'query': `[SLCI_Web_Proc_Report_CalendarAttendance_Attendance_GetList]@UserID='{0}',
    //                  @EmpID='{1}',@MonthID='{2}'`,
    //         'queryArr': [`18`, `21`, `2204`],
    //         // 'file':'sddsdsf'
    //     }
    //     Hexapi(obj).then(resp => {
    //         console.log(resp)
    //     }).catch(err => console.error(err))
    //     alert("Api Hit done")
    //     console.warn(formData) //user data 
    // }

    
    const handleformChange = (e) => {
        // console.log(e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    
        
    }

    const submitForm=()=>{
        let obj={
            query:`HRApp_Droid_Proc_User_SurveyForm_Submit @UserID='{0}',@QuesIDs='{1}',@Responses='{2}'`,
            queryArr:[getuserid,QuestionID,data],
        }
        Hexapi(obj).then((resp)=>{
            console.log(resp)
        }).catch((err)=>{
            console.error(err)
        })
    }
    // const setSelectedState = (e) =>{
    //     console.log('Answer24: ' +e.target.value)
    // }

    // const setSelectedCity = (e) =>{
    //     console.log(e)
    // }
// console.log(formData.Answer24)
let obj=Object.values(formData)
console.log(obj)
let data=obj.toString()
console.log(data)
    return (
        <>
    
            <h1 className='text-center'>What is your Motivation?</h1>
            <div className='survey-form-trackhr'>
                {/* <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter company name" onChange={(e) => handleformChange(e)}
                            name='companyName' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Company Size</Form.Label>
                        <Form.Control type="text" placeholder="Enter company size" onChange={(e) => handleformChange(e)} name='companySize'/>
                    </Form.Group>

                    <StateList
                        onlyState={false}
                        inline={true}
                        onStateChange={(e) => setFormData({...formData,state:e.target.value})}
                        stateLabelStyle={{ fontSize: "18px", fontWeight: "600" }}
                        cityLabelStyle={{ fontSize: "18px", fontWeight: "600" }}
                        onCityChange={(e) => setFormData({...formData,city:e.target.value})}
                        stateValue={formData.state}
                        cityValue={formData.city}
                        required={true}
                        stateCustomClassName={'allstates'}
                        cityCustomClassName={'mycities'}
                    />

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contact Person</Form.Label>
                        <Form.Control type="text" placeholder="Enter contact person" onChange={(e) => handleformChange(e)} name='contactPerson'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Company Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter company number" onChange={(e) => handleformChange(e)} name='companyNumber'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" onChange={(e) => handleformChange(e)} name='email'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control type="text" placeholder="Enter your designation" onChange={(e) => handleformChange(e)} name='designation'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Office address</Form.Label>
                        <Form.Control type="text" placeholder="Enter office address" onChange={(e) => handleformChange(e)} name='officeAddress'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Type of business</Form.Label>
                        <Form.Control type="text" placeholder="Enter type of business" onChange={(e) => handleformChange(e)} name='typeofBusiness'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>How do you know about us ?</Form.Label>
                        <Form.Control type="text" placeholder="" onChange={(e) => handleformChange(e)} name='knowAboutus'/>
                    </Form.Group>
                    <Button variant="primary" onClick={submitForm}>
                        Submit
                    </Button>
                </Form> */}
<Form.Label>What motivates you to do your very best work?</Form.Label>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }}
                        onChange={(e) => handleformChange(e)} name="Answer24"></textarea>
                </div>

                <Form.Label>How do you motivate other people to do their very best work?</Form.Label>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }}
                        onChange={(e) => handleformChange(e)} name="Answer25"></textarea>
                </div>

                <Form.Label>What is your most difficult challenge in motivating other people?</Form.Label>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }}
                        onChange={(e) => handleformChange(e)} name="Answer26"></textarea>
                </div><br/>
<div>


                <Button variant="primary" onClick={submitForm}>
                        Submit
                    </Button>
</div>


            </div>
        </>
    )
}

export default SurveyForm