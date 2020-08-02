

const CarsLoaded = ( newCars ) =>{
    return{
        type: 'CARS_LOADED',
        payload: newCars
    }
}

export {
    CarsLoaded
};