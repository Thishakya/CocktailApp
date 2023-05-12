import { useState, useEffect } from 'react';
import CocktailCard from './CocktailCard';
import './App.css';
import SearchIcon from './search.svg';
import GridIcon from './grid.svg';
import ListIcon from './list.svg';

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const App = () => {

    const [cocktails, setCocktails] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [listView, setListView] = useState(false);

    console.log(cocktails?.length);

    function toggle(){
        setListView(listView => !listView);
    }

    let toggleView = listView ? 'active': '';
    
    const searchCocktails = async (title) => {
        const response = await fetch(`${API_URL}${title}`); 
        const data = await response.json();
        console.log(data);

        setCocktails(data.drinks);
    }

    useEffect(() => {
        searchCocktails('margarita')
    }, []);

    return (
        <div className="app">
            <h1>Cocktail Menu</h1>

            <div className="search">
                <input 
                    placeholder="search for cocktails"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchCocktails(searchTerm)}
                />
                                
            </div>
                
            <div className="view">
                <img 
                    src={GridIcon}
                    alt="gridView"
                    onClick={() => toggle()}
                />
                <img 
                    src={ListIcon}
                    alt="listView"
                    onClick={() => toggle()}
                />
            </div>
            {
                cocktails?.length > 0
                    ?   (
                        <div className="container">
                            {cocktails.map((cocktail) => (
                                <CocktailCard cocktail={cocktail} view={toggleView}/>
                            ))}
                        </div>
                    )   :   (
                        <div className="empty">
                            <h2>No cocktails found!</h2>
                        </div>
                    )
            }
        </div>
    );
}

export default App;