import { SET_USER ,SET_OFFER,RESET_USER,} from './action';

const initialState = {
    user:{
   name: 'duda',
    lastName: 'dudo',
    email: 'duda-1258**'
    },
offer:{
     SocieteName: 'zara',
              adress: 'zara 123',
              JobDescription: 'zara zara',
              JobRequirements: 'zaraaa zaraaa',
              HowToApply: 'zaraa zaraaaaaa',
              recruteurName: 'azuma'
}
 

}


export let reducer = (state = initialState, action) => {
    console.log('action', action)
    switch (action.type) {
        case SET_USER:
            return {
                                ...state,

                user: action.payload,
            };
            case RESET_USER:
                return {
                                    ...state,
    
                    user: initialState.user,
                };

             case SET_OFFER:
            return {
                                ...state,

                offer: action.payload,
            }
        default:
            return state;

    }
}