import React, {useState} from 'react';
import ModalContent from "../modalBreed/ModalBreed";
import {useSelector} from "react-redux";
import {selectImage} from "../../store/dog.selectors";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

interface DogBreed {
    name: string;
    image?:string;
}

const DogBreedComponent: React.FC<DogBreed> = ({ name }) => {

    const [isModalOpen, setModalOpen] = useState(false);
    let theImage:string | undefined = useSelector(selectImage);
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


                        </div>
                    </div>

                )
            }



        </>

    );
}

export default DogBreedComponent;
