import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ImageDto} from "../model/imageDto";

export interface DogBreedState{

    dogBreeds:string[];
    imageUrl?:string;
}

let initialDogState:DogBreedState ={

    dogBreeds:[],

}


const dogBreedSlice = createSlice({

    name:"load",
    initialState: initialDogState,
    reducers:{

        loadDogBreeds(state, action: PayloadAction<string[]>){

            state.dogBreeds = action.payload;
        },

        getTheBreedImage(state, action: PayloadAction<string | undefined>){

            state.imageUrl = action.payload;
        }
    }

});

export const {loadDogBreeds,getTheBreedImage} =dogBreedSlice.actions;

export default dogBreedSlice.reducer;