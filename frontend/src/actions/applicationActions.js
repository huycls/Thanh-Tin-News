import Axios from 'axios';
import {
  APPLICATION_CREATE_FAIL,
  APPLICATION_CREATE_REQUEST,
  APPLICATION_CREATE_SUCCESS,
  APPLICATION_DETAILS_FAIL,
  APPLICATION_DETAILS_REQUEST,
  APPLICATION_DETAILS_SUCCESS,
  APPLICATION_LIST_FAIL,
  APPLICATION_LIST_REQUEST,
  APPLICATION_LIST_SUCCESS,
  APPLICATION_UPDATE_REQUEST,
  APPLICATION_UPDATE_SUCCESS,
  APPLICATION_UPDATE_FAIL,
  APPLICATION_DELETE_REQUEST,
  APPLICATION_DELETE_FAIL,
  APPLICATION_DELETE_SUCCESS,
  APPLICATION_CATEGORY_LIST_SUCCESS,
  APPLICATION_CATEGORY_LIST_REQUEST,
  APPLICATION_CATEGORY_LIST_FAIL,
  APPLICATION_TYPE_LIST_SUCCESS,
  APPLICATION_TYPE_LIST_REQUEST,
  APPLICATION_TYPE_LIST_FAIL,
  APPLICATION_REVIEW_SAVE_REQUEST,
  APPLICATION_REVIEW_SAVE_SUCCESS,
  APPLICATION_REVIEW_SAVE_FAIL,

} from '../constants/applicationConstants';

export const listApplications = ({
    title = '',
    articlecategory = '',
    articletype = '',
    
}) => async (dispatch) => {
  dispatch({
    type: APPLICATION_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      `/api/applications?title=${title}&articletype=${articletype}&articlecategory=${articlecategory}`
    );
    dispatch({ type: APPLICATION_LIST_SUCCESS, payload:data});
  } catch (error) {
    dispatch({ type: APPLICATION_LIST_FAIL, payload: error.message});
  }
};

export const listApplicationCategories = () => async (dispatch) =>{
  dispatch({
    type: APPLICATION_CATEGORY_LIST_REQUEST,
  });
  try {
    const {data} = await Axios.get(`api/applications/articlecategories`);
    dispatch({ type: APPLICATION_CATEGORY_LIST_SUCCESS, payload: data});
  } catch (error){
    dispatch({ type: APPLICATION_CATEGORY_LIST_FAIL, payload: error.message});
  }
};

export const listApplicationTypes = () => async (dispatch) =>{
  dispatch({
    type: APPLICATION_TYPE_LIST_REQUEST,
  });
  try {
    const {data} = await Axios.get(`api/applications/articletypes`);
    dispatch({ type: APPLICATION_TYPE_LIST_SUCCESS, payload: data});
  } catch (error){
    dispatch({ type: APPLICATION_TYPE_LIST_FAIL, payload: error.message});
  }
};

export const detailsApplication = (applicationId) => async (dispatch) => {
  dispatch({ type: APPLICATION_DETAILS_REQUEST, payload: applicationId });
  try {
    const { data } = await Axios.get(`/api/applications/${applicationId}`);
    dispatch({ type: APPLICATION_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: APPLICATION_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createApplication = () => async (dispatch, getState) => {
  dispatch({ type: APPLICATION_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/applications',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: APPLICATION_CREATE_SUCCESS,
      payload: data.application,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: APPLICATION_CREATE_FAIL, payload: message });
  }
};

export const updateApplication = (application) => async (dispatch, getState) => {
  dispatch({ type: APPLICATION_UPDATE_REQUEST, payload: application });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/applications/${application._id}`, application, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: APPLICATION_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: APPLICATION_UPDATE_FAIL, error: message });
  }
};
export const deleteApplication = (applicationId) => async (dispatch, getState) => {
  dispatch({ type: APPLICATION_DELETE_REQUEST, payload: applicationId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`/api/applications/${applicationId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: APPLICATION_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: APPLICATION_DELETE_FAIL, payload: message });
  }
};

export const saveApplicationReview = (applicationId, review) => async (dispatch, getState) => {
  try {
    const {
      userSignin: {
        userInfo: { token },
      },
    } = getState();
    dispatch({ type: APPLICATION_REVIEW_SAVE_REQUEST, payload: review });
    const { data } = await Axios.post(
      `/api/applications/${applicationId}/reviews`,
      review,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    dispatch({ type: APPLICATION_REVIEW_SAVE_SUCCESS, payload: data });
  } catch (error) {
    // report error
    dispatch({ type: APPLICATION_REVIEW_SAVE_FAIL, payload: error.message });
  }
};