import React, {Fragment} from 'react';

import './car-list-item.css'


const CarListItem = ( { car } ) =>{
    const { name,model } = car;
    return(
        <Fragment>
            <span>{name}</span>
            <span>{model}</span>
        </Fragment>
    )
}

export default CarListItem