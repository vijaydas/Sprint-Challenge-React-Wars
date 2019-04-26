import React from 'react';

// The character function accepts props coming from the CharacterList tp build the character view

const Character = props => {
    return (
        <div className="characterCard">
            <h1>{props.character.name}</h1>
       
        <p>{props.character.birth_year}

        </p>

        <p>{props.character.height}

        </p>

        <p>{props.character.mass}


        </p>

        </div>





    );
};


export default Character;
