import {createStore, combineReducers} from "redux"

const reducers = combineReducers({
    numeros: function(state, action){
       

        switch(action.type){
            case 'MIN_VALUE_CHANGED':
                return {
                    ...state,
                    min: action.payload,
                    
                }
            case 'MAX_VALUE_CHANGED':
                return{
                    ...state,
                    max: action.payload
                }    
            default:
                 return {
                     min:0,
                     max:0
                 }
        }
      
    },
    nomes: function(state, action){
        return['ana', 'bia', 'carlos']
    }
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig;