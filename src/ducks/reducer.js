
const initialState = {
  name: "User",
  score: 0,
  color: "orange",
  animals: []
};

export default function reducer(state = initialState, action){
  switch(action.type){
    case "INCREMENT":
      return {...state, score: state.score+1};
    case "DECREMENT":
      return {...state, score: state.score-1};
    case "INCREMENT_BY":
      return {...state, score: state.score + +action.payload};
    case "UPDATE_COLOR":
      return {...state, color: action.payload};
    case "ANIMALS":
      return {...state, animals: action.payload};
    default:
      return state;
  };
}