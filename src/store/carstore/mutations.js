/*
export function someMutation (state) {
}
*/
export const GET_CARS_MUTATION = (state, cars) => {
  state.cars = cars
}

export const GET_TANKS_MUTATION = (state, tanks) => {
  // console.log("get tanks mutation")
  state.tanks = tanks
}