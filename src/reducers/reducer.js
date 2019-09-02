const initialState={
    video:[],
    curr:{},
    id:'',
    status:false
}
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'AUTO':return{
            ...state,
            video:action.payload,
            status:false,
            id:''
        }
        case 'ONCLICK':
            var d=action.payload.id;
            if(typeof(action.payload.id)!=='string')
            d=action.payload.id.videoId        
            return{
                ...state,
                status:true,
                curr:action.payload,
                id:d
            }
        default:return state;
    }
}