import React from 'react';
import "./StarWars.css";

// The character function accepts props coming from the CharacterList tp build the character view

const Character = props => {
    return (
        <div className="characterCard">
            <h1>{props.character.name}</h1>
       
        <p>BIRTH YEAR: {props.character.birth_year}

        </p>

        <p>HEIGHT: {props.character.height}

        </p>

        <p>MASS: {props.character.mass}


        </p>

        </div>





    );
};


export default Character;
