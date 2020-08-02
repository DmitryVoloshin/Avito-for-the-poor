import React from 'react';
import { CarStoreServiceConsumer } from './../car-service-context'

const withCarStoreService = ( ) => (Wrapped) =>{
    return (props) =>{
        return(
        <CarStoreServiceConsumer>
            {
                (carService)=>{
                   return(
                     <Wrapped {...props} carService={carService}/>
                   ) 
                }
            }
        </CarStoreServiceConsumer>
        );
    }
}

export default withCarStoreService