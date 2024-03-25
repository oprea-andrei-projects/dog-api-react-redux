import React, {useState} from 'react';
import ModalContent from "../modalBreed/ModalBreed";

interface DogBreed {
    name: string;
}

const DogBreedComponent: React.FC<DogBreed> = ({ name }) => {

    const [isModalOpen, setModalOpen] = useState(false);

    const handleButtonClick = () => {

        setModalOpen(true);

    };

    const handleCloseModal = () => {

        setModalOpen(false);
    };


    return (
        <>

            <button className="btn-filled-dark" onClick={handleButtonClick} >{name}</button>

            {
                isModalOpen &&(
                    <div className="modal-overlay">
                        <div className="modal">
                                <span className="close" onClick={handleCloseModal}>
                                  &times;
                                </span>
                            <ModalContent breed={name} />

                        </div>
                    </div>

                )
            }



        </>

    );
}

export default DogBreedComponent;
