/* eslint-disable default-param-last */
import { SHOW_MODAL, HIDE_MODAL } from '../types';

const initialState = {
  active: false,
  action: '',
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        active: true,
        action: payload,
      };
    case HIDE_MODAL:
      return {
        ...state,
        active: false,
        action: '',
      };
    default:
      return state;
  }
}
