import React, {Dispatch, SetStateAction, useState} from "react";
import Modal from "react-bootstrap/Modal";
import SearchComponent from "../SearchComponent";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import {selectImage} from "../../store/dog.selectors";
import {useSelector} from "react-redux";
import AiSearchComponent from "../ai-search/AiSearchComponent";
// @ts-ignore
import QuestionMark from "../home/images/icons8-question-mark-64.png";

interface ImageTitleModalProps{

    show: boolean;
    handleShow:Dispatch<SetStateAction<boolean>>;

}

const ImageTitleModalComponent:React.FC<ImageTitleModalProps>=({show,handleShow}) =>{

    const [ai, setAi] = useState(false);
    let theImage:string | undefined = useSelector(selectImage);
   let title:string | undefined = theImage?.split('/')[4].toUpperCase();
    let doNotShowModal = ()=>{
        handleShow(false);
    }

    let handleAISerach = ()=>{

       setAi(prevAi => !prevAi);
    }

    return(
        <>

            <Modal show={show} onHide={doNotShowModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button variant="info" onClick={handleAISerach}>Ask Our AI</Button>{' '}

                    {
                        ai &&(
                            <AiSearchComponent />
                        )
                    }

                    <SearchComponent />
                    <Image src={theImage || QuestionMark} fluid />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={doNotShowModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default ImageTitleModalComponent;