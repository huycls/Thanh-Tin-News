import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  createApplication,
  deleteApplication,
  listApplications,
} from '../actions/applicationActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
  APPLICATION_CREATE_RESET,
  APPLICATION_DELETE_RESET,
} from '../constants/applicationConstants';
import {Helmet} from 'react-helmet';
import Pagination from '../Pagination';




export default function ApplicationListScreen(props) {

  const applicationList = useSelector((state) => state.applicationList);
  const { loading, error, applications } = applicationList;

  const applicationCreate = useSelector((state) => state.applicationCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    application: createdApplication,
  } = applicationCreate;

  const applicationDelete = useSelector((state) => state.applicationDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = applicationDelete;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: APPLICATION_CREATE_RESET });
      props.history.push(`/ung-dung/${createdApplication._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: APPLICATION_DELETE_RESET });
    }
    dispatch(
      listApplications({})
    );
    
  }, [
    createdApplication,
    dispatch,
    props.history,
    successCreate,
    successDelete,
    userInfo._id,
  ]);

  const deleteHandler = (application) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteApplication(application._id));
    }
  };
  const createHandler = () => {
    dispatch(createApplication());
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(20);

  //get current products
  const indexOfLastProduct = currentPage * productPerPage;
  const inxdexOfFirstProduct = indexOfLastProduct - productPerPage;

  //change page
  const paginate = (pagehomeNumber) => setCurrentPage(pagehomeNumber);
  
  return (
    <div>
      <Helmet>
        <title>Danh sách bài viết </title>
      </Helmet>
      <div className="row">
        <h1>Ứng dụng</h1>
        <button type="button" className="primary" onClick={createHandler}>
          Thêm bài viết
        </button>
      </div>

      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
         
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tiêu đề</th>
                <th>CATEGORY</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {applications.slice(0).reverse().slice(inxdexOfFirstProduct, indexOfLastProduct).map((application) => (
                <tr key={application._id}>
                  <td>{application._id}</td>
                  <td>{application.title}</td>
                  <td>{application.applicationcategory}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        props.history.push(`/ung-dung/${application._id}/edit`)
                      }
                    >
                      Sửa
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(application)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="rowe center pagination">
          <Pagination productPerPage={productPerPage} totalProduct={applications.length} paginate={paginate}  currentPage={currentPage}/>
          </div>
        </>
      )}
    </div>
  );
}
