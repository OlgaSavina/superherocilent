import axios from 'axios';
import React,{useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Formik, useFormik} from 'formik';
import { Link } from 'react-router-dom';

function UpdatingPage({superhero}) {
  console.log(superhero);
   const formik = useFormik({
    initialValues: {
    nickname: superhero.nickname,
    real_name:superhero.real_name,
    origin_description: superhero.origin_description,
    superpowers: superhero.superpowers,
    catch_phrase: superhero.catch_phrase,

    
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
    
 return(
        
   <div align="center"> 
       <h1> Update form </h1>
 
       <form>
<div align="center"> 
    <h1>Creating form </h1>

    <TextField
        label="NickName"
        variant="filled"
        id="nickname"
        name="nickname"
        value={superhero.nickname}
        onChange={formik.handleChange}

     
      />
      <TextField
        label="RealName"
        variant="filled"
        type="real_name"
        id="real_name"
        name="real_name"
        value={formik.superhero.real_name}
        onChange={formik.handleChange}
      
    /> 
    <TextField
        label="superpowers"
        variant="filled"
        type="superpowers"
        id="superpowers"
        name="superpowers"
        value={formik.superhero.superpowers}
        onChange={formik.handleChange}
      
    /> 
    <TextField
        label="Origin Description"
        variant="filled"
        type=""
        id="origin_description"
        name="origin_description"
        value={formik.superhero.origin_description}
        onChange={formik.handleChange}
      
    /> 
    <TextField
        label="catchphrase"
        variant="filled"
        type="catch_phrase"
        id="catch_phrase"
        name="catch_phrase"
        value={formik.superhero.catch_phrase}
        onChange={formik.handleChange}
      
    /> 
      <div>
        <Link to="/">
        <Button variant="contained">
          Cancel
        </Button>
        </Link>
        
        <Button type="submit" variant="contained" color="primary"  onClick={console.log(superhero)}> 
          Signup
        </Button>
        <p>
        <Button variant="contained" color="primary" href='/'> Back</Button>
        </p>
    
        </div>
     </div>
     </form>
       
        </div>
        
       );
       

}
   
   export default UpdatingPage;