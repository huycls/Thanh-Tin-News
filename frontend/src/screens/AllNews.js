import React, { useEffect, useState }  from 'react';
import {Link, useParams} from 'react-router-dom';
import { listApplications } from '../actions/applicationActions';
import {Helmet} from 'react-helmet';
import { withNamespaces } from 'react-i18next';
import Sidebar from '../components/Sidebar';
import Pagination from '../Pagination';
import Application from '../components/Application';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';


export default withNamespaces() (function Allnews(props){
    const {t} = props;
    const dispatch = useDispatch();
    const applicationList = useSelector((state) => state.applicationList);
    const { loading, error, applications } = applicationList;
    const {
        title='all',
        articletype = 'all',
    } = useParams();
    useEffect(() => {
        dispatch(
          listApplications({
            title: title !== 'all' ? title : '',
            articletype: articletype !== 'all' ? articletype : '',
            
          })
        );
      }, [  articletype,  dispatch, title]);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage] = useState(20);

    //get current products
    const indexOfLastProduct = currentPage * productPerPage;
    const inxdexOfFirstProduct = indexOfLastProduct - productPerPage;

    //change page
    const paginate = (pagehomeNumber) => setCurrentPage(pagehomeNumber);
    const getFilterUrl = (filter) => {
        const filterNewstype = filter.articletype|| articletype;
        return `/tin-tuc/articletype/${filterNewstype}`;
        };
    return <div className="main-content">
        <Helmet>
            <title>Tin tức - Công ty TNHH thiết bị và hóa chất Thành Tín</title>
        </Helmet>
        
           
                <div>
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <div>
                        {applications.length === 0 && <MessageBox>{t("noproduct.label")}</MessageBox>}
                        <div className="applications">
                            {applications.slice(0).reverse().slice(inxdexOfFirstProduct, indexOfLastProduct).map((application) => (
                            <Application key={application._id} application={application}></Application>
                            ))}
                        </div>
                        <Pagination productPerPage={productPerPage} totalProduct={applications.length} paginate={paginate} currentPage={currentPage}/>
                    </div> 
                )}
                </div>
            
        
    </div>
})
