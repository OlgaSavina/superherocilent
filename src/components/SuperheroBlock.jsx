import React from "react";
import Button from "./Button";
//import PropTypes from "prop-types";


function SuperheroBlock({
  _id,
  nickname,
  real_name,
  origin_description,
  superpowers,
  catch_phrase,
}) {
    const [isShown, setIsShown] = React.useState(false);
    
    const handleClick = event => {
      setIsShown(current => !current);
  
      
    };
//const onClickDelete = () => {};


  return (
    <div className="superhero-block">
      {/*<img className="product-block__image" src={imageUrl} alt="smth" />*/}

      <h4 className="superhero-block__title">{nickname}</h4>
  

      <div className="superhero-block__bottom">
        <div className="superhero-block__price">Real name: {real_name}</div>
        {isShown && (
        <div>
          
          <h4>Origin description: {origin_description}</h4>
          <h4>Superpower: {superpowers}</h4>
          <h4>Catch phrase: {catch_phrase}</h4>
        </div>
      )}
    
     
     <Button onClick={handleClick} className="button--details" >
          <span>Details</span>
        </Button>
      </div>
    </div>
  );
        }
/*
ProductBlock.propTypes = {
  name: PropTypes.string.isRequired,
  //  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClickAddProduct: PropTypes.func,
  addedCount: PropTypes.number,
};

ProductBlock.defaultProps = {
  name: "---",
  price: 0,
};
*/
export default SuperheroBlock;
