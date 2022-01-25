import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  createProduct,
  deleteProduct,
  listProducts,
} from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
  PRODUCT_CREATE_RESET,
  PRODUCT_DELETE_RESET,
} from '../constants/productConstants';
import {Helmet} from 'react-helmet';
import Pagination from '../Pagination';




export default function ProductListScreen(props) {
  const { pageNumber = 1 } = useParams();

  const sellerMode = props.match.path.indexOf('/seller') >= 0;
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
      props.history.push(`/san-pham/${createdProduct._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(
      listProducts({ seller: sellerMode ? userInfo._id : '', pageNumber })
    );
  }, [
    createdProduct,
    dispatch,
    props.history,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);

  const deleteHandler = (product) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteProduct(product._id));
    }
  };
  const createHandler = () => {
    dispatch(createProduct());
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
        <title>Product List </title>
      </Helmet>
      <div className="row">
        <h1>Sản phẩm</h1>
        <button type="button" className="primary" onClick={createHandler}>
          Thêm sản phẩm
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
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>CATEGORY</th>
                <th>Hãng sản xuất</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {products.slice(inxdexOfFirstProduct, indexOfLastProduct).map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        props.history.push(`/san-pham/${product._id}/edit`)
                      }
                    >
                      Sửa
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(product)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="rowe center pagination">
          <Pagination productPerPage={productPerPage} totalProduct={products.length} paginate={paginate}  currentPage={currentPage}/>
          </div>
        </>
      )}
    </div>
  );
}
