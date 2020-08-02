import React from 'react';
import { CarstoreServiceConsumer } from './../car-service-context'

const withCarStoreService = ( ) => (Wrapped) =>{
    return (props) =>{
        return(
        <CarstoreServiceConsumer>
            {
                (carService)=>{
                   return(
                     <Wrapped {...props} carService={carService}/>
                   ) 
                }
            }
        </CarstoreServiceConsumer>
        );
    }
}

export default withCarStoreService