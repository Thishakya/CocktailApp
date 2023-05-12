import React from 'react';


const CocktailCard = ({ cocktail, view }) => {
    
    return (
        <div className={`cocktail${view}`}>
            <div>
                <p>ID:{cocktail.idDrink}</p>
            </div>
            <div>
                <img src={cocktail.strDrinkThumb !== 'N/A' ? cocktail.strDrinkThumb : 'https://via.placeholder.com/400'} alt={cocktail.Title}/>
            </div>
            <div>
                <span>{cocktail.strCategory}</span>
                <h3>{cocktail.strDrink}</h3>
            </div>
        </div>
    );
}

export default CocktailCard;