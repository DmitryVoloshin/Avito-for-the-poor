import React from 'react';
import CarListItem from '../car-list-item';
import { connect } from 'react-redux'

import withCarstoreService from './../hoc/with-carstore-service';

class CarList extends React.Component{

    componentDidMount(){
        const { carService } = this.props;
        const data = carService.getCars();
        console.log(data)
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

export default withCarstoreService(connect(mapStateToProps)(CarList));