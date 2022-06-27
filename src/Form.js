import {React,useState} from 'react';
import Navbars from './components/Navbars';
import { Button, Form,FormGroup, Input, Label } from 'reactstrap';
import { Redirect} from 'react-router-dom';
const FormPage = () => {
    const [firstName,setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [appointmentType,setAppointmentType] = useState("");
    const [appointmentPlace, setAppointmentPlace] = useState("");
    const [instaId, setInstaId] = useState("");
    const [contact, setContact] = useState("");

    const body = {
        firstName: firstName,
        lastName: lastName,
        address: address,
        appointmentDate: appointmentDate,
        appointmentPlace: appointmentPlace,
        appointmentType: appointmentType,
        instaId: instaId,
        contact: contact
    }
    

    const submitResponse = async () => {
        await fetch('http://localhost:8000/orders',{
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then((res)=>{
            const data = res.data;
            console.log(data.json())
            console.log("Done");
        });
        <Redirect to='/orders'/>
    }
  return (
      <div className='formpage'>
      <Navbars/>
      <Form className='forms'>
          <FormGroup className='ele'>
              <Label for='firstName'>First Name: </Label>
              <Input id='firstName' name='firstName' type='text' placeholder='First Name' onChange={(e)=>{setFirstName(e.target.value)}}>   </Input>
          </FormGroup > 
          <FormGroup className='ele'>
              <Label for='lastName'>Last Name:</Label>
              <Input id='lastName' name='lastName' type='text' placeholder='Last Name' onChange={(e)=>{setLastName(e.target.value)}}></Input>
          </FormGroup>
          <FormGroup className='ele'>
              <Label for='contact'>Contact no:</Label>
              <Input id='contact' name='contact' type='text' placeholder='Contact' onChange={(e)=>{
                  setContact(e.target.value)
              }}></Input>
          </FormGroup>
          <FormGroup className='ele'>
              <Label for='appointment-type'>Appointment Type:</Label>
              <Input id='appointment-type' name='appointment-type' type='text' placeholder='Select Type' onChange={(e)=>{
                  setAppointmentType(e.target.value)
              }}></Input>
          </FormGroup>
          <FormGroup className='ele'>
              <Label for='appointmentPlace'>Appointment Place:</Label>
              <Input id='appointmentPlace' name='appointmentPlace' type='text' placeholder='Appointment Place' onChange={(e)=>{
                  setAppointmentPlace(e.target.value)
              }}></Input>
          </FormGroup>
          <FormGroup className='ele'>
              <Label for='appointmentDate'>Appointment Date:</Label>
              <Input id='appointmentDate' name='appointmentDate' type='date' onChange={(e)=>{
                  setAppointmentDate(e.target.value)
              }}></Input>
          </FormGroup>
          <FormGroup className='ele'>
              <Label for='instaId'>Instagram ID:</Label>
              <Input id='instaId' name='instaId' type='text' placeholder='Instagram Id' onChange={(e)=>{
                  setInstaId(e.target.value)
              }}></Input>
          </FormGroup>
          <FormGroup className='ele'>
              <Label for='address'>Address:</Label>
              <Input id='address' name='address' type='text' placeholder='Enter Address: ' onChange={(e)=>{
                  setAddress(e.target.value)
              }}></Input>
          </FormGroup>
          <Button color='success' type='submit' onClick={()=>submitResponse()}>Submit </Button>
      </Form>
      
      </div>
  )
}

export default FormPage