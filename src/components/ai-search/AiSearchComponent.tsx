import React, {useRef, useState} from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Api from "../../service/Api";
import {useDispatch} from "react-redux";
import {AISuggestionResponse} from "../../model/aiSuggestionResponse";
import {ImageDto} from "../../model/imageDto";
import {getTheBreedImage} from "../../store/dog.reducers";

interface AiSearchProps{

}
const AiSearchComponent : React.FC<AiSearchProps> = () =>{

    const [context, setContext] = useState("You are an AI Assistant specialised in dog breeds. You will receive dog descriptions and you will respond only with onw word, representing the breed name. You can only respond with one of the following breed names: affenpinscher,african,airedale,akita,appenzeller,australian,basenji,beagle,bluetick,borzoi,bouvier,boxer,brabancon,briard,buhund,bulldog,bullterrier,cattledog,chihuahua,chow,clumber,cockapoo,collie,coonhound,corgi,cotondetulear,dachshund,dalmatian,dane,deerhound,dhole,dingo,doberman,elkhound,entlebucher,eskimo,finnish,frise,germanshepherd,greyhound,groenendael,havanese,hound,husky,keeshond,kelpie,komondor,kuvasz,labradoodle,labrador,leonberg,lhasa,malamute,malinois,maltese,mastiff,mexicanhairless,mix,mountain,newfoundland,otterhound,ovcharka,papillon,pekinese,pembroke,pinscher,pitbull,pointer,pomeranian,poodle,pug,puggle,pyrenees,redbone,retriever,ridgeback,rottweiler,saluki,samoyed,schipperke,schnauzer,segugio,setter,sharpei,sheepdog,shiba,shihtzu,spaniel,spitz,springer,stbernard,terrier,tervuren,vizsla,waterdog,weimaraner,whippet,wolfhound")
    let dispatch = useDispatch();
    // @ts-ignore
    const inputRef = useRef<HTMLTextAreaElement >(null);
    let handleKeyDown = async (e: { key: string; }) => {
        let api :Api = new Api();

        if (e.key === 'Enter') {
            // @ts-ignore
            let aidata:AISuggestionResponse = await api.getAISuggestion(inputRef.current?.value + " " + context);

            console.log('Aidata:', aidata);

            if (aidata && aidata.choices && aidata.choices.length > 0) {
                const content = aidata.choices[0].message.content;

                const data:ImageDto | undefined = await api.getDasDogImage(content);

                // @ts-ignore
                dispatch(getTheBreedImage(data.imageUrl))

            } else {
                console.error('No data received ');

            }
        }
    }



    // @ts-ignore
    return (
        <>

            <FloatingLabel
                controlId="floatingTextarea"
                label="Enter your breed description and hit Enter..."
                className="mb-3"
                style={{fontStyle:'italic', marginTop:'10px'}}


            >
                <Form.Control as="textarea"
                              placeholder="Leave a comment here"
                              ref={inputRef}
                              onKeyDown={handleKeyDown}
                />
            </FloatingLabel>




        </>
    )
}

export default AiSearchComponent;