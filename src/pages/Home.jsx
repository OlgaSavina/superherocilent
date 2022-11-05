import React from "react";
import { getSuperheros } from '../api/getSuperheros';
import {deleteSuperhero} from '../api/deleteSuperhero';
import {Button, SuperheroBlock} from '../components';
import { Link } from "react-router-dom";

function Home() {
    const [superheros, setSuperheros] = React.useState([]);
    const [item, setItem] = React.useState([]);
    
    React.useEffect(() => {
        getSuperheros().then((response) => {
          setSuperheros(response.data);
        });
      }, []);


    const onDeleteClick = (superhero) => {
        deleteSuperhero(superhero).then((response) => {
            
         setSuperheros(response.data);
       // getSuperheros();
        });
    };
    const onUpdateClick = (superhero) => {
   
      setItem(superhero);
      // ...
  };

   
    return (
      <div className="container">
         <div className="content__title" align="center">
        <h1> Superheros database </h1>
        <Link to="/creatingpage">
        <Button className="button--cart">
         <span>Tab to create superhero</span> 
        </Button>
      </Link>
      </div>
        <div  className="content__items" align="center">
        <ul>
        {superheros.map((obj) => (
            <li  key={obj._id}  >
          <SuperheroBlock
            {...obj}> 
            </SuperheroBlock>
            <div>
            <Button onClick={() => onDeleteClick(obj)} className="button--add"> Delete</Button>
            <Link to="/updatingpage"
             >
                <Button onClick={(obj)=> onUpdateClick(obj)} className="button--add"> Update </Button>
              </Link>
              </div>
            </li>
          )
          )
          }
         </ul> 
       </div>
       
      </div>
    );
  }

  
export default Home;
  