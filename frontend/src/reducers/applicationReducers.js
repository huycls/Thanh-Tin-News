const {
    APPLICATION_LIST_REQUEST,
    APPLICATION_LIST_SUCCESS,
    APPLICATION_LIST_FAIL,
    APPLICATION_DETAILS_REQUEST,
    APPLICATION_DETAILS_SUCCESS,
    APPLICATION_DETAILS_FAIL,
    APPLICATION_CREATE_REQUEST,
    APPLICATION_CREATE_SUCCESS,
    APPLICATION_CREATE_FAIL,
    APPLICATION_CREATE_RESET,
    APPLICATION_UPDATE_REQUEST,
    APPLICATION_UPDATE_SUCCESS,
    APPLICATION_UPDATE_FAIL,
    APPLICATION_UPDATE_RESET,
    APPLICATION_DELETE_REQUEST,
    APPLICATION_DELETE_SUCCESS,
    APPLICATION_DELETE_FAIL,
    APPLICATION_DELETE_RESET,
    APPLICATION_CATEGORY_LIST_REQUEST,
    APPLICATION_CATEGORY_LIST_SUCCESS,
    APPLICATION_CATEGORY_LIST_FAIL,
    APPLICATION_TYPE_LIST_REQUEST,
    APPLICATION_TYPE_LIST_SUCCESS,
    APPLICATION_TYPE_LIST_FAIL,
    APPLICATION_REVIEW_SAVE_REQUEST,
    APPLICATION_REVIEW_SAVE_SUCCESS,
    APPLICATION_REVIEW_SAVE_FAIL,
    APPLICATION_REVIEW_SAVE_RESET,

  } = require('../constants/applicationConstants');
  
  export const applicationListReducer = (
    state = { loading: true, applications: [] },
    action
  ) => {
    switch (action.type) {
      case APPLICATION_LIST_REQUEST:
        return { loading: true };
      case APPLICATION_LIST_SUCCESS:
        return {
          loading: false,
          applications: action.payload.applications,
        };
      case APPLICATION_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const applicationCategoryListReducer = (
    state = { loading: true, applications: [] },
    action
  ) => {
    switch (action.type) {
      case APPLICATION_CATEGORY_LIST_REQUEST:
        return { loading: true };
      case APPLICATION_CATEGORY_LIST_SUCCESS:
        return { loading: false, articlecategories: action.payload };
      case APPLICATION_CATEGORY_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const applicationTypeListReducer = (
    state = { loading: true, applications: [] },
    action
  ) => {
    switch (action.type) {
      case APPLICATION_TYPE_LIST_REQUEST:
        return { loading: true };
      case APPLICATION_TYPE_LIST_SUCCESS:
        return { loading: false, articletypes: action.payload };
      case APPLICATION_TYPE_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
 
  export const applicationDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case APPLICATION_DETAILS_REQUEST:
        return { loading: true };
      case APPLICATION_DETAILS_SUCCESS:
        return { loading: false, application: action.payload };
      case APPLICATION_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const applicationCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case APPLICATION_CREATE_REQUEST:
        return { loading: true };
      case APPLICATION_CREATE_SUCCESS:
        return { loading: false, success: true, application: action.payload };
      case APPLICATION_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case APPLICATION_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const applicationUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case APPLICATION_UPDATE_REQUEST:
        return { loading: true };
      case APPLICATION_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case APPLICATION_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case APPLICATION_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const applicationDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case APPLICATION_DELETE_REQUEST:
        return { loading: true };
      case APPLICATION_DELETE_SUCCESS:
        return { loading: false, success: true };
      case APPLICATION_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case APPLICATION_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const applicationReviewSaveReducer = (state = {}, action) => {
    switch (action.type) {
      case APPLICATION_REVIEW_SAVE_REQUEST:
        return { loading: true };
      case APPLICATION_REVIEW_SAVE_SUCCESS:
        return { loading: false, success: true, review: action.payload };
      case APPLICATION_REVIEW_SAVE_FAIL:
        return { loading: false, error: action.payload };
      case APPLICATION_REVIEW_SAVE_RESET:
        return {};
      default:
        return state;
    }
  };