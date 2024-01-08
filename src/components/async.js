import axios from "axios";

export const allAnimals = async (dispatch) => {
  const { data } = await axios.post("/animals").catch(err => {
    console.log(err);
    return;
  });

  dispatch({type: "ANIMALS", payload: data});
}