import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {useDispatch, useSelector} from "react-redux";
import {getTheBreedImage} from "../../store/dog.reducers";
import {selectImage} from "../../store/dog.selectors";
import Api from "../../service/Api";
import {ImageDto} from "../../model/imageDto";
import SearchComponent from "../SearchComponent";
import ImageTitleModalComponent from "./ImageTitleModal";
import AiSearchComponent from "../ai-search/AiSearchComponent";

interface DogBreed {
    name: string;

}

const DogBreedWithModal: React.FC<DogBreed> = ({ name }) => {

    let dispatch = useDispatch();
    // let theImage:string | undefined = useSelector(selectImage);
    // console.log('=== ',theImage);
    const [show, setShow] = useState(false);
    let api = new Api();

    let [img , setImage]= useState("");


   // const handleClose = () => setShow(false);
    const handleShow1 = async () =>{

        const data:ImageDto | undefined = await api.getDasDogImage(name)
        // @ts-ignore
        console.log('data ', typeof data.imageUrl);
        // @ts-ignore
        dispatch(getTheBreedImage(data.imageUrl))

       // @ts-ignore
        //setImage(data.imageUrl)

        setShow(true);




    }


    // @ts-ignore
    return(
        <>

            <button className="btn-filled-dark" onClick={handleShow1}
                    style={{ marginRight: 'auto', borderRadius: '10px' }}
            >{name}</button>

            <ImageTitleModalComponent show={show} handleShow={setShow}/>


        </>
    )
}

export default DogBreedWithModal;


