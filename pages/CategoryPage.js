import React from "react";
import { Link } from 'react-router-dom';
import './category.css';
const CategoryPage = () => {
    return (
        <div>
            <h1>Pilih Kategori Game:</h1>
            <ul className="category-wrapper">
                <li className="navlink"><Link to="/shooter">Shooter</Link></li>
                <li className="navlink"><Link to="/mmorpg">MMORPG</Link></li>
                <li className="navlink"><Link to="/anime">Anime</Link></li>
                <li className="navlink"><Link to="/strategy">Strategy</Link></li>
                <li className="navlink"><Link to="/fantasy">Fantasy</Link></li>
                <li className="navlink"><Link to="/sci-fi">Sci-Fi</Link></li>
                <li className="navlink"><Link to="/racing">Racing</Link></li>
                <li className="navlink"><Link to="/social">Social</Link></li>
                <li className="navlink"><Link to="/sports">Sports</Link></li>
            </ul>
        </div>
    );
};

export default CategoryPage;
