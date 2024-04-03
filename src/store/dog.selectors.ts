import {DogBreedState} from "./dog.reducers";
import {createSelector} from "@reduxjs/toolkit";
interface RootState{

    dogBreedState:DogBreedState;
}

const selectDogBreedState=(state:RootState)=> state.dogBreedState;


export const selectDogBreeds = createSelector(
    selectDogBreedState,
    (dogBreedState:DogBreedState):typeof dogBreedState.dogBreeds =>dogBreedState.dogBreeds
)

export const selectImage = createSelector(
    selectDogBreedState,
    (dogBreedState:DogBreedState):typeof dogBreedState.imageUrl => dogBreedState.imageUrl
)