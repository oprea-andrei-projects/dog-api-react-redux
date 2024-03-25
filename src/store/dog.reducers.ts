import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface DogBreedState{

    dogBreeds:string[];
}

let initialDogState:DogBreedState ={

    dogBreeds:[]
}


const dogBreedSlice = createSlice({

    name:"load",
    initialState: initialDogState,
    reducers:{

        loadDogBreeds(state, action: PayloadAction<string[]>){

            state.dogBreeds = action.payload;
        }
    }

});

export const {loadDogBreeds} =dogBreedSlice.actions;

export default dogBreedSlice.reducer;