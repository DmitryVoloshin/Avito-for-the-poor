


const initialState = { 
    cars:[
        {
            id:1,
            name:'BMW',
            model:'x7',
        },
        {
            id:2,
            name:'mercedes',
            model:'325',
        }
    ]
};


const reducer = ( state = initialState ,action ) =>{

    switch(action.type){
        case 'CARS_LOADED':
            return{
                cars: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
