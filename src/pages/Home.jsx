import React from "react";
import { getSuperheros } from '../api/getSuperheros';
import {deleteSuperhero} from '../api/deleteSuperhero';
import {Button, SuperheroBlock} from '../components';
import Pagination from '@mui/material/Pagination';
import { Link } from "react-router-dom";

function Home() {
    const [superheros, setSuperheros] = React.useState([]);
    const [item, setItem] = React.useState([]);

    const [currentPage, setCurrentPage]= React.useState(1);
    const [superherosPerPage] = React.useState(5);
  
    
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
      console.log(superhero)
   
      setItem(superhero);
      
      // ...
  };

  const lastSuperheroIndex = currentPage * superherosPerPage;
    const firstSuperheroIndex = lastSuperheroIndex - superherosPerPage;
    const currentSuperhero = superheros.slice(firstSuperheroIndex, lastSuperheroIndex );
    const paginate =  (event, value) => {
      setCurrentPage(value);
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
      <div className="content__pagination">
          {<Pagination count={Math.ceil(superheros.length/5)} page={currentPage} onChange={paginate} />}
          </div>
        <div  className="content__items" align="center">
        <ul>
        {currentSuperhero.map((obj) => (
            <li  key={obj._id}  >
          <SuperheroBlock
            {...obj}> 
            </SuperheroBlock>
            <div>
            <Button onClick={() => onDeleteClick(obj)} className="button--add"> Delete</Button>
            <Link to={`/creatingpage/${obj._id}`}
             >
                <Button onClick={()=> onUpdateClick(obj)} className="button--add"> Update </Button>
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
  