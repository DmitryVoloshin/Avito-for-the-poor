import React from 'react';
import CarListItem from '../car-list-item';
import { connect } from 'react-redux'

import {withCarstoreService} from './../hoc';

class CarList extends React.Component{

    componentDidMount(){
        const { carService } = this.props;
        const data = carService.getCars();

        this.props.carsLoaded(data);
    }
    
    render(){
        const { cars } = this.props;
        return(
            <ul>
                {
                    cars.map((car)=>{
                        return(
                            <li key={car.id}>
                                <CarListItem car={car} />
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ( { cars } ) =>{
    return{ cars };
};

const mapDispatchToProps = ( dispatch ) =>{
    return{
        carsLoaded : ( newCars ) =>{
            dispatch({
                type:'CARS_LAODED',
                payload: newCars
            })
        }
    }
};

export default withCarstoreService(connect(mapStateToProps,mapDispatchToProps)(CarList));