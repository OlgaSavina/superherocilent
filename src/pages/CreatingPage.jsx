
import axios from 'axios';
import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useParams } from 'react-router-dom';
import { createSuperhero } from '../api/createSuperhero';
import {Formik, useFormik} from 'formik';
import { getSuperheros } from '../api/getSuperheros';

function CreatingPage() {
  const { superheroId } = useParams();
  const [superhero, setSuperhero] = useState(null);
  React.useEffect(() => {
    axios.get(`http://localhost:4444/superheros/${superheroId}`).then((response) => {
      setSuperhero(response.data);
    });
  }, [superheroId]);


  const formik = useFormik({
    initialValues: {
      nickname: superhero ? superhero.nickname || '' : '',
      real_name: superhero ? superhero.real_name || '' : '',
      origin_description: superhero ? superhero.origin_description || '' : '',
      superpowers: superhero ? superhero.superpowers || '' : '',
      catch_phrase: superhero ? superhero.catch_phrase || '' : '',
    },
    onSubmit: (values) => {
      if (superhero) {
       
        axios.put(`http://localhost:4444/superheros/${superhero._id}`, values)
        .then(response => {
          console.log('Superhero updated:', response.data);
        })
        .catch(error => {
          console.error('Error updating superhero:', error);
        });;
        //console.log('Updating superhero with values:', values);
      } else {
        // Handle create logic here
        axios.post('http://localhost:4444/superheros', values)
        .then(response => console.log('👉 Returned data:', response));
        console.log('Creating superhero with values:', values);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div align="center">
        <h1>{superhero ? 'Updating Form' : 'Creating Form'}</h1>
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
            label="Superpowers"
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
            label="Catchphrase"
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
            <Button variant="contained">Cancel</Button>
          </Link>
          <Button type="submit" variant="contained" color="primary">
            {superhero ? 'Update' : 'Create'}
          </Button>
          <p>
            <Link to="/">
              <Button variant="contained" color="primary">
                Back
              </Button>
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}



export default CreatingPage;