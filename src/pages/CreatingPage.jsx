
import axios from 'axios';
import React,{useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useParams } from 'react-router-dom';
import { createSuperhero } from '../api/createSuperhero';
import {Formik, useFormik} from 'formik';
import { getSuperheros } from '../api/getSuperheros';

function CreatingPage() {
  const { superheroId } = useParams();
  const [superhero, setSuperhero] = useState(null);

  useEffect(() => {
    if (superheroId) {
      axios.get(`http://localhost:4444/superheros/${superheroId}`).then((response) => {
        setSuperhero(response.data);
      });
    }
  }, [superheroId]);

  const formik = useFormik({
    initialValues: {
      nickname: superhero ? superhero.nickname || '' : '',
      real_name: superhero ? superhero.real_name || '' : '',
      origin_description: superhero ? superhero.origin_description || '' : '',
      superpowers: superhero ? superhero.superpowers || '' : '',
      catch_phrase: superhero ? superhero.catch_phrase || '' : '',
      images: []// Array to hold uploaded images
    },
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append('nickname', values.nickname);
        formData.append('real_name', values.real_name);
        formData.append('origin_description', values.origin_description);
        formData.append('superpowers', values.superpowers);
        formData.append('catch_phrase', values.catch_phrase);
        //console.log(formData);
       
        // Add uploaded images to the FormData
        for (const image of values.images) {
          formData.append('images', image);
         // console.log(formData.getAll('images')); // Log the "images" field
        }

        for (const pair of formData.entries()) {
          console.log(`${pair[0]}: ${pair[1]}`);
        }


        if (superheroId) {
          // Update superhero
          await axios.put(`http://localhost:4444/superheros/${superheroId}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log('Superhero updated');
        } else {
          
          console.log(values);
          // Create superhero
          await axios.post('http://localhost:4444/superheros', formData , {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          //console.log(formData);
          console.log('Superhero created');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
    /*async (values) => {
      try {
        const formData = new FormData();
        formData.append('nickname', values.nickname);
        formData.append('real_name', values.real_name);
        formData.append('origin_description', values.origin_description);
        formData.append('superpowers', values.superpowers);
        formData.append('catch_phrase', values.catch_phrase);
        // Add more formData.append lines for other fields
        console.log('FormData:', formData);
        console.log('Form Values:', values); // Add this line to see the FormData content in the console
    
        // ... Rest of your code ...
      } catch (error) {
        console.error('Error:', error);
      }
    }*/
  });

  const handleImageUpload = (event) => {
    const uploadedImages = Array.from(event.target.files);
    formik.setFieldValue('images', [...formik.values.images, ...uploadedImages]);
  };

  const removeImage = (index) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue('images', updatedImages);
  };

  return (
    <form onSubmit={formik.handleSubmit}  encType="multipart/form-data" >
      <div align="center">
        <h1>{superheroId ? 'Updating Form' : 'Creating Form'}</h1>
        <div className="content__items" align="center">
          {/* Image upload input field */}
          <input
            type="file"
            id="image"
            name="images"
            multiple
            accept='image/*'
          onChange={handleImageUpload }
          />
          {/* Display uploaded images */}
          <div className="uploaded-images">
            {formik.values.images.map((image, index) => (
              <div key={index} className="uploaded-image">
                <img src={URL.createObjectURL(image)} alt={`Image ${index}`} />
                <button type="button" onClick={() => removeImage(index)}>Remove</button>
              </div>
            ))}
          </div>
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
            {superheroId ? 'Update' : 'Create'}
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
