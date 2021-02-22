import {DISHES} from "../component/shared/dishes"
export const Dishes = (
  state = DISHES, action
) => {
  switch (action.type) {
  default:
      return state;
  }
};