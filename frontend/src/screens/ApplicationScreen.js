import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import {  detailsApplication, saveApplicationReview  } from '../actions/applicationActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Application from '../components/Application';
import { listApplications } from '../actions/applicationActions';
import parse from 'html-react-parser';
import {Helmet} from 'react-helmet';
import { withNamespaces } from 'react-i18next';
import {useHistory, withRouter} from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import {Link} from 'react-router-dom';
import { APPLICATION_REVIEW_SAVE_RESET } from '../constants/applicationConstants';



export default withNamespaces((props) => props.namespaces) (function ApplicationScreen(props){
    const {t} = props;
    const dispatch = useDispatch();
    const applicationId =  props.match.params.id;
    const [qty, setQty] = useState(1);
    const [comment, setComment] = useState('');
    const applicationReviewSave = useSelector((state) => state.applicationReviewSave);
    const { success: applicationSaveSuccess } = applicationReviewSave;
    const applicationDetails = useSelector((state) => state.applicationDetails);
    const { loading, error, application } = applicationDetails;
    const applicationList = useSelector((state) => state.applicationList);
    const {applications} = applicationList;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    useEffect(() => { 
        if (applicationSaveSuccess) {
            alert('Review submitted successfully.');
            setComment('');
            dispatch({ type: APPLICATION_REVIEW_SAVE_RESET });
          }
        dispatch(detailsApplication(applicationId));
      }, [dispatch, applicationId]);
      
    useEffect(() => {
    dispatch(listApplications({}));
    }, [dispatch,applicationSaveSuccess]); 
    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch actions
        window.location.reload(false);
        dispatch(
            saveApplicationReview(applicationId, {
            name: userInfo.name,
            comment: comment,
          })
        );
      };
    const history = useHistory();
    const formatter = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    return (
        <div className='main-content'>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div className='newspage'>
                    <Helmet>
                        <title>{t("title",{application})} | Thành Tín Tech</title>
                    </Helmet>
                    <div className="newspage-content">
                    <button className="goback btn btn-outline-secondary"  onClick={() => history.goBack()}><i className="fas fa-arrow-left"></i> {t("back.label")}</button>
                        <div>    
                            <h5 className='application-category'>Category: <Link to={`/search-news/articlecategory/${application.articlecategory}`}>{application.articlecategory}</Link></h5>
                        </div>
                        <h1 className='application-title'>{t("title",{application})}</h1>
                        <small> Created: {formatter.format(new Date(application.createdAt))}</small>                        
                        <div> 
                            {parse(t("content",{application}))}
                        </div>
                    </div>
                    <hr/>
                    <div className="content-margined">
                        <h2>Bình luận</h2>
                        {!application.reviews.length && <div>Hiện chưa có bình luận nào.</div>}
                        <ul className="review" id="reviews">
                        {application.reviews.map((review) => (
                            <li key={review._id}>
                            <h3 className='comment-name'><img className='comment-avatar' src="../images/logo.png" />{review.name}</h3>
                            
                            <small><i className="far fa-clock"></i> {review.createdAt.substring(0, 10)}</small>
                            <div>{review.comment}</div>
                            </li>
                        ))}
                        <li>
                           
                            {userInfo ? (
                            <form onSubmit={submitHandler}>
                                <ul className="form-container">
                                    <li>   
                                        <textarea
                                        className='comment-field'
                                        placeholder='Bình luận của bạn'
                                        name="comment"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        ></textarea>
                                    </li>
                                    <li>
                                        <button type="submit" className="button primary">
                                        Gửi
                                        </button>
                                    </li>
                                </ul>
                            </form>
                            ) : (
                            <div>
                                Please <Link to="/dang-nhap">Sign-in</Link> to write a comment.
                            </div>
                            )}
                        </li>
                        </ul>
                    </div>
                </div>
                
            ) 
            }
        </div>
    )
})
