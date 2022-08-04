export const SET_LIST_DISPLAY = "SET_LIST_DISPLAY";

export const setListDisplay = (bool) => {
  return (dispatch) => {
    dispatch({
      type: SET_LIST_DISPLAY,
      payload: bool,
    });
  };
};
