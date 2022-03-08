import { SHOW_MODAL, HIDE_MODAL } from '../types';

const showModal = modal => ({
  type: SHOW_MODAL,
  payload: modal,
});
const hideModal = () => ({
  type: HIDE_MODAL,
});

export function showModalAction(modal) {
  return dispatch => {
    dispatch(showModal(modal));
  };
}
export function hideModalAction() {
  return dispatch => {
    dispatch(hideModal());
  };
}
