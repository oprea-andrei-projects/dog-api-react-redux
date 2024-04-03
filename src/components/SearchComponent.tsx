import React, {useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Api from "../service/Api";
import {useDispatch} from "react-redux";
import {getTheBreedImage} from "../store/dog.reducers";
import Image from "react-bootstrap/Image";
import {selectImage} from "../store/dog.selectors";
import {ImageDto} from "../model/imageDto";
interface SearchProps {

}

const SearchComponent: React.FC<SearchProps> = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    let dispatch = useDispatch();
    let [img , setImage]= useState("");
    const handleSearch = async () => {
        let api = new Api();
        const searchBreed: string | undefined = inputRef.current?.value;

        // @ts-ignore
        const data:ImageDto | undefined = await api.getDasDogImage(searchBreed)
        // @ts-ignore
        dispatch(getTheBreedImage(data.imageUrl))

        // @ts-ignore
       // setImage(data.imageUrl);

    };



    return (
        <div>

            <InputGroup className="mb-3" style={{marginTop:'10px'}}>

                <Form.Control
                    placeholder="Enter dog breed..."
                    aria-label="Enter dog breed"
                    aria-describedby="basic-addon2"
                    ref={inputRef}
                    style={{fontStyle:'italic'}}
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={handleSearch}>
                    Search
                </Button>

                <Image src={img} fluid style={{ marginTop: '10px' }} />

            </InputGroup>
        </div>
    );
};

export default SearchComponent;
