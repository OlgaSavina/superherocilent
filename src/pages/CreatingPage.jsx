
import axios from 'axios';
import React,{useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { createSuperhero } from '../api/createSuperhero';
import {Formik, useFormik} from 'formik';


function CreatingPage() {
 

  const formik = useFormik({
    initialValues: {
    nickname: "",
    real_name:"",
    origin_description: "",
    superpowers: "",
    catch_phrase: "",

    
    },
    onSubmit: values => {
      console.log(values)
      axios.post('http://localhost:4444/superheros', values)
          .then(response => console.log('👉 Returned data:', response));
  
  }
    /*
    validationSchema: Yup.object({
      password: Yup.string()
        .max(20, 'Must be 10 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),*/
    });

    const onSubmit = () => {
      alert("User is added");
    }

  
 
    return(
     <form onSubmit={formik.handleSubmit}>
<div align="center"> 
    <h1>Creating form </h1>
<div className="content__items" align="center">
    <TextField
        label="NickName"
        variant="filled"
        id="nickname"
        name="nickname"
        value={formik.values.nickname}
        onChange={formik.handleChange}

     
      />
      <TextField
        label="RealName"
        variant="filled"
        type="real_name"
        id="real_name"
        name="real_name"
        value={formik.values.real_name}
        onChange={formik.handleChange}
      
    /> 
    <TextField
        label="superpowers"
        variant="filled"
        type="superpowers"
        id="superpowers"
        name="superpowers"
        value={formik.values.superpowers}
        onChange={formik.handleChange}
      
    /> 
    <TextField
        label="Origin Description"
        variant="filled"
        type=""
        id="origin_description"
        name="origin_description"
        value={formik.values.origin_description}
        onChange={formik.handleChange}
      
    /> 
    <TextField
        label="catchphrase"
        variant="filled"
        type="catch_phrase"
        id="catch_phrase"
        name="catch_phrase"
        value={formik.values.catch_phrase}
        onChange={formik.handleChange}
      
    /> 
    </div>
      <div>
        <Link to="/">
        <Button variant="contained">
          Cancel
        </Button>
        </Link>
        
        <Button type="submit" variant="contained" color="primary"  onClick={onSubmit}> 
          Signup
        </Button>
        <p>
        <Button variant="contained" color="primary" href='/'> Back</Button>
        </p>
    
        </div>
     </div>
     </form>
    );
    
}
export default CreatingPage;