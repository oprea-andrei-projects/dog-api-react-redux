import React from 'react';
import DogBreedComponent from './DogBreedComponent';

const BreedList: React.FC<{ breeds: string[] }> = ({ breeds }) => {
    return (
        <div>
            <h2>Breeds</h2>
            <div className="btn-group">
                {breeds.map((breed, index) => (
                    <DogBreedComponent key={index} name={breed} />
                ))}
            </div>
        </div>
    );
}

export default BreedList;