import React from 'react';
import { CarstoreServiceConsumer } from './../car-service-context'

const withCarstoreService = ( ) => (Wrapped) =>{
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

export default withCarstoreService