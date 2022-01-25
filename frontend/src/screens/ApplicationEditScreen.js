import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { detailsApplication, updateApplication } from '../actions/applicationActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { APPLICATION_UPDATE_RESET } from '../constants/applicationConstants';
import useScript from '../useScript';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Helmet} from 'react-helmet';

export default function ApplicationEditScreen(props){
    const applicationId = props.match.params.id;
    const [title, setTitle] = useState('');
    const [entitle, setEntitle] = useState('');
    const [articletype, setArticletype] = useState('');
    const [enarticletype, setEnarticletype] = useState('');
    const [articleimage, setArticleimage] = useState('');
    const [content, setContent] = useState('');
    const [encontent, setEncontent] = useState('');
    const [articlecategory, setArticlecategory] = useState('');
    const [enarticlecategory, setEnarticlecategory] = useState('');

    const applicationDetails = useSelector((state) => state.applicationDetails);
    const { loading, error, application } = applicationDetails;

    const applicationUpdate = useSelector((state) => state.applicationUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = applicationUpdate;

    const dispatch = useDispatch();
    useEffect(() => {
        if(successUpdate){
            props.history.push('/applicationlist');
        }
        if (!application || application._id !== applicationId || successUpdate){
            dispatch({ type: APPLICATION_UPDATE_RESET});
            dispatch(detailsApplication(applicationId));
        } else {
            setTitle(application.title);
            setEntitle(application.entitle);
            setArticletype(application.articletype);
            setEnarticletype (application.enarticletype);
            setArticleimage(application.articleimage);
            setArticlecategory(application.articlecategory);
            setEnarticlecategory(application.enarticlecategory);
            setContent(application.content);
            setEncontent(application.encontent);
        }
    }, [application, dispatch, applicationId, successUpdate, props.history]);
    const submitHandler = (e) =>{
        e.preventDefault();
    // TODO: dispatch update product
        dispatch(
            updateApplication({
                _id: applicationId,
                title,
                entitle,
                articletype,
                enarticletype,
                articleimage,
                content,
                encontent,
                articlecategory,
                enarticlecategory,
            })
        );
    };
    const [loadingUpload, setLoadingUpload] = useState(false);
    const [errorUpload, setErrorUpload] = useState('');

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const uploadFileHandler = async (e) =>{
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('image', file);
        setLoadingUpload(true);
        try {
            const {data} = await Axios.post('/api/uploads', bodyFormData,{
                headers:{
                    'Content-type': 'multipart/form-data',
                    Authorization: `Bearer ${userInfo.token}`,
                },
            });
            setArticleimage(data);
            setLoadingUpload(false);
          } catch (error) {
            setErrorUpload(error.message);
            setLoadingUpload(false);
          }
    };
    const editorConfiguration = {
        toolbar: {
         items: [
           'code',
           'heading',
           '|',
           'bold',
           'italic',
           'link',
           'bulletedList',
           'numberedList',
           '|',
           'highlight',
           'fontBackgroundColor',
           'fontColor',
           'MathType',
           'specialCharacters',
           'fontFamily',
           'fontSize',
           'ChemType',
           '|',
           'outdent',
           'indent',
           '|',
           'CKFinder',
           
           'blockQuote',
           'insertTable',
           'imageInsert',
           'mediaEmbed',
           'htmlEmbed',
           '|',
           'undo',
           'redo'
         ]
       },
       language: 'vi',
       image: {
         toolbar: [
           'imageTextAlternative',
           'imageStyle:inline',
           'imageStyle:block',
           'imageStyle:side',
           'linkImage'
         ]
       },
       table: {
         contentToolbar: [
           'tableColumn',
           'tableRow',
           'mergeTableCells'
         ]
       }
    };
   
    useScript("https://ckeditor.com/apps/ckfinder/3.4.5/ckfinder.js");
    return (
        <div>
            <form className="form edit-form" onSubmit={submitHandler}>
                <h1>Id ứng dụng: {applicationId}</h1>
                {loadingUpdate && <LoadingBox></LoadingBox>}
                {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox> 
                ) : (
                    <>
                    <Helmet>
                        <title>Edit: {application.title}</title>
                    </Helmet>
                    <div>
                        <label htmlFor="title">Tiêu đề</label>
                        <input
                            id="title"
                            type="text"
                            placeholder="Thêm tiêu đề"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="entitle">Tiêu đề (English)</label>
                        <input
                            id="entitle"
                            type="text"
                            placeholder="Enter english title"
                            value={entitle}
                            onChange={(e) => setEntitle(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="image">Hình ảnh</label>
                        <input
                            id="image"
                            type="text"
                            placeholder="Enter image"
                            value={articleimage}
                            onChange={(e) => setArticleimage(e.target.value)}
                        ></input>
                    </div>
                    <div>
                    <label htmlFor="imageFile">Chọn ảnh từ máy tính</label>
                    <input
                        type="file"
                        id="imageFile"
                        label="Choose Image"
                        onChange={uploadFileHandler}
                    ></input>
                    {loadingUpload && <LoadingBox></LoadingBox>}
                    {errorUpload && (
                        <MessageBox variant="danger">{errorUpload}</MessageBox>
                    )}
                    </div>
                    <div>
                        <label htmlFor="articletype">Loại</label> 
                        <select id="articletype" className="form-select" value={articletype} onChange={(e) => setArticletype(e.target.value)} aria-label="Default select example">
                        <option value="tin-tuc-va-su-kien">Tin tức</option>
                        <option value="ung-dung">Ứng dụng</option>
                        <option value="du-an">Dự án</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="enarticletype">Loại</label> 
                        <select id="enarticletype" className="form-select" value={enarticletype} onChange={(e) => setEnarticletype(e.target.value)} aria-label="Default select example">
                        <option value="news">News</option>
                        <option value="application">Application</option>
                        <option value="project">Project</option>
        
                        </select>
                    </div>
                    <div>
                        <label htmlFor="articlecategory">Ngành ứng dụng</label> 
                        <select id="articlecategory" className="form-select" value={articlecategory} onChange={(e) => setArticlecategory(e.target.value)} aria-label="Default select example">
                        <option value="Tin tức và sự kiện">Tin tức và sự kiện</option>
                        <option value="Dự án">Dự án</option>
                        <option value="Ngành Thực phẩm">Ngành Thực phẩm</option>
                        <option value="Ngành Y tế">Ngành Y tế</option>
                        <option value="Ngành Môi trường">Môi trường</option>
                        <option value="Giấy">Giấy</option>
                        <option value="Bao bì giấy">Bao bì giấy</option>
                        <option value="Cao su - Nhựa">Cao su - Nhựa</option>
                        <option value="Xây dựng">Xây dựng</option>
                        <option value="Thiết bị phòng thí nghiệm">Thiết bị phòng thí nghiệm</option>
                        <option value="Sắt - thép">Sắt - thép</option>
                        </select>
                    </div>
                    <div>
                    <label htmlFor="enarticlecategory">Ngành ứng dụng (English)</label> 
                        <select id="enarticlecategory" className="form-select" value={enarticlecategory} onChange={(e) => setEnarticlecategory(e.target.value)} aria-label="Default select example">
                        <option value="Tin tức và sự kiện">Tin tức và sự kiện</option>
                        <option value="Dự án">Dự án</option>
                        <option value="Ngành Thực phẩm">Ngành Thực phẩm</option>
                        <option value="Ngành Y tế">Ngành Y tế</option>
                        <option value="Ngành Môi trường">Môi trường</option>
                        <option value="Giấy">Giấy</option>
                        <option value="Bao bì giấy">Bao bì giấy</option>
                        <option value="Cao su - Nhựa">Cao su - Nhựa</option>
                        <option value="Xây dựng">Xây dựng</option>
                        <option value="Thiết bị phòng thí nghiệm">Thiết bị phòng thí nghiệm</option>
                        <option value="Sắt - thép">Sắt - thép</option>
                        </select>
                    </div>
                    <div>
                    <label htmlFor="content">Nội dung</label>
                    <CKEditor 
                        className="content"
                        editor={ClassicEditor}
                        config={ editorConfiguration }
                        data={content}
                        onReady={editor =>{
                        }}
                        onChange={(e,editor)=>{
                        const data1 = editor.getData();
                        setContent(data1);
                        }}
                    />
                    </div>
                    <div>
                    <label htmlFor="encontent">Nội dung (English)</label>
                    <CKEditor 
                        className="encontent"
                        editor={ClassicEditor}
                        config={ editorConfiguration }
                        data={encontent}
                        onReady={editor =>{
                        }}
                        onChange={(e,editor)=>{
                        const data1 = editor.getData();
                        setEncontent(data1);
                        }}
                    />
                    </div>
                    <div>
                        
                        <button className="primary" type="submit">
                            Cập nhật
                        </button>
                    </div>
                    </>
                )}
            </form>
        </div>
    );
}


