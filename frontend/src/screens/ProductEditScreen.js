import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { detailsProduct, updateProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
// import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import useScript from '../useScript';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Helmet} from 'react-helmet';
import parse from 'html-react-parser';

// import DecoupledDocumentEditor from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor.js';



export default function ProductEditScreen(props) {
  const productId = props.match.params.id;
  const [name, setName] = useState('');
  const [enname, setEnname] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [encategory, setEncategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [parameter, setParameter] = useState('');
  const [enparameter, setEnparameter] = useState('');
  const [video, setVideo] = useState('');
  const [catalog, setCatalog] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [brand, setBrand] = useState('');
  const [vnbrand, setVnbrand] = useState('');
  const [description, setDescription] = useState('');
  const [endescription, setEndescription] = useState('');
  const [model, setModel] = useState('');

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push('/productlist');
    }
    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProduct(productId));
    } else {
      setName(product.name);
      setEnname(product.enname);
      setPrice(product.price);
      setImage(product.image);
      setCategory(product.category);
      setEncategory(product.encategory);
      setSubcategory(product.subcategory);
      setParameter(product.parameter);
      setEnparameter(product.enparameter);
      setVideo(product.video);
      setCatalog(product.catalog);
      setCountInStock(product.countInStock);
      setBrand(product.brand);
      setVnbrand(product.vnbrand);
      setDescription(product.description);
      setEndescription(product.endescription);
      setModel(product.model);
    }
  }, [product, dispatch, productId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      updateProduct({
        _id: productId,
        name,
        enname,
        price,
        image,
        category,
        encategory,
        subcategory,
        parameter,
        enparameter,
        model,
        video,
        catalog,
        brand,
        vnbrand,
        countInStock,
        description,
        endescription,
      })
    );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  // ClassicEditor
  //   .create( document.querySelector( '#editor' ) )
  //   .then( editor => {
  //       console.log( editor );
  //   } )
  //   .catch( error => {
  //       console.error( error );
  //   } );
  // Plugins to include in the build.
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
          <h1>Edit Product id: {productId}</h1>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <Helmet>
              <title>Edit: {product.name}</title>
            </Helmet>
            <div>
              <label htmlFor="name">Tên sản phẩm </label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="enname">Tên sản phẩm (English) </label>
              <input
                id="enname"
                type="text"
                placeholder="Enter enname"
                value={enname}
                onChange={(e) => setEnname(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="price">Giá (VNĐ)</label>
              <input
                id="price"
                type="text"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="image">Hình ảnh</label>
              <input
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
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
            {/* <div>
              <label htmlFor="subcategory">Category</label>
               <input
                id="subcategory"
                type="text"
                placeholder="Enter category"
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                ></input>
            </div> */}
            <div>
                <label htmlFor="category">Category</label>
                <select id="category" className="form-select" value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Default select example">
                <option value="thiet-bi-nganh-giay">Thiết bị ngành giấy</option>
                <option value="be-cach-thuy-be-dieu-nhiet">Bể cách thủy/Bể điều nhiệt</option>
                <option value="khuc-xa-ke">Khúc xạ kế cầm tay/kỹ thuật số</option>
                <option value="thiet-bi-thu-nghiem-co-ly-tinh">Thiết bị thử nghiệm cơ, lý tính</option>
                <option value="lo-nung">Lò nung</option>
                <option value="thiet-bi-nganh-nhua-cao-su">Thiết bị ngành nhựa, cao su</option>
                <option value="may-cat-nuoc">Máy cất nước/ Máy lọc nước</option>
                <option value="camera-may-in">Camera/Máy in</option>
                <option value="noi-hap-tiet-trung">Nồi hấp tiệt trùng</option>
                <option value="may-ly-tam-may-lac">Máy ly tâm/ Máy lắc</option>
                <option value="hoa-chat-va-thuoc-thu">Thuốc thử</option>
                <option value="phan-cuc-ke-ong-phan-cuc">Phân cực kế/Ống phân cực</option>
                <option value="thiet-bi-do-khi">Thiết bị đo khí</option>
                <option value="thiet-bi-do-ty-trong">Thiết bị đo tỷ trọng</option>
		            <option value="thiet-bi-do-do-nong-chay">Thiết bị đo độ nóng chảy</option>
                <option value="so-mau">Thiết bị quan sát nguồn sáng/ Đo màu</option>
                <option value="tu-an-toan-sinh-hoc-hoa-chat">Tủ an toàn sinh học/Tủ hóa chất</option>
                <option value="tu-say">Tủ sấy</option>
                <option value="kinh-hien-vi">Kính hiển vi</option>
                <option value="tu-am-lanh">Tủ ấm/Tủ ấm lạnh</option>
                <option value="may-do-do-nhot">Máy đo độ nhớt</option>
                <option value="may-do-do-luu-bien">Máy đo độ lưu biến</option>
                <option value="may-phan-tich-ket-cau">Máy phân tích kết cấu</option>
                <option value="may-do-do-dan-dien-ec">Máy đo độ dẫn điện, EC</option>
                <option value="may-do-do-ph">Máy đo độ pH</option>
                <option value="can-ky-thuat">Cân kỹ thuật</option>
                <option value="can-phan-tich">Cân phân tích</option>
                <option value="may-khuay-tu">Máy khuấy từ</option>
                <option value="may-khuay-dua">Máy khuấy đũa</option>
                <option value="may-lac">Máy lắc</option>
                <option value="may-dong-hoa">Máy đồng hóa</option>
                <option value="co-quay-chan-khong">Cô quay chân không</option>
                <option value="may-do-nhiet-luong">Nhiệt kế</option>
                <option value="tu-vi-khi-hau">Tủ vi khí hậu</option>
                <option value="quang-pho-phan-tu">Quang phổ phân tử</option>
                <option value="phan-tich-nguyen-to">Phân tích nguyên tố</option>
                <option value="dac-tinh-be-mat">Đặc tính bề mặt</option>
                <option value="phan-tich-hat">Phân tích hạt</option>
                <option value="thiet-bi-moi-truong">Thiết bị môi trường</option>
                <option value="thiet-bi-khoa-hoc-hinh-su">Thiết bị khoa học hình sự</option>
                <option value="thiet-bi-do-nhiet-do-ap-suat">Thiết bị đo nhiệt độ/ Áp suất</option>
                <option value="thiet-bi-phan-tich">Thiết bị phân tích</option>
                <option value="thiet-bi-hap-thu-nguyen-tu">Thiết bị hấp thụ nguyên tử</option>
                <option value="huynh-quang-nguyen-tu">Huỳnh quang nguyên tử</option>
                <option value="may-chuan-do">Máy chuẩn độ</option>
                <option value="may-test-do-hoa-tan">Máy test độ hòa tan</option>
                <option value="may-do-sac-ky">Máy đo sắc ký</option>
                <option value="lo-vi-song-pha-mau">Lò vi sóng phá mẫu</option>
                <option value="may-tao-khi">Máy tạo khí</option>
                <option value="khoi-pho-ke">Khối phổ kế</option>
                <option value="do-luong-va-thu-nghiem-xang-dau">Đo lường và thử nghiệm xăng-dầu</option>
                <option value="may-nghien-bi">Máy nghiền bi</option>
                <option value="tu-hut-am">Tủ hút ẩm</option>
                <option value="tu-nuoi-cay-te-bao-thuc-vat-co-lac">Tủ nuôi cấy tế bào thực vật có lắc</option>

              </select>
            </div>
            {/* <div>
              <label htmlFor="encategory">Category (English) </label>
               <input
                id="encategory"
                type="text"
                placeholder="Enter encategory"
                value={encategory}
                onChange={(e) => setEncategory(e.target.value)}
                ></input>
            </div>
             */}
            <div>
              <label htmlFor="vnbrand">Hãng sản xuất</label>
              <select id="vnbrand" className="form-select" value={vnbrand} onChange={(e) => setVnbrand(e.target.value)} aria-label="Default select example">
                <option defaultValue="ALP - Japan">ALP - Nhật Bản</option>
                <option value="EMCO - Đức">EMCO - Đức</option>
                <option value="CONSORT">CONSORT</option>
                <option value="DOSER - Đức">DOSER - Đức</option>
                <option value="PNSHAR - Trung Quốc">PNSHAR - Trung Quốc</option>
                <option value="KRUSS - Đức">KRUSS - Đức</option>
                <option value="PTA - Europe">PTA - Europe</option>
                <option value="COMETECH - Đài loan">COMETECH - Đài loan</option>
                <option value="NABERTHERM - Đức">NABERTHERM - Đức</option>
                <option value="TILO">TILO</option>
                <option value="IDM TEST - Tây Ban Nha">IDM TEST - Tây Ban Nha</option>
                <option value="HAMILTON - England">HAMILTON - Anh</option>
                <option value="NOVAPRO - Korea">NOVAPRO - Hàn Quốc</option>
                <option value="STURDY - Đài loan">STURDY - Đài loan</option>
                <option value="XRITE - Mỹ">XRITE - Mỹ</option>
                <option value="ANDREAS HETTICH - Đức">ANDREAS HETTICH - Đức</option>
                <option value="Mettler Toledo">Mettler Toledo</option>
                <option value="Labthink">Labthink</option>
                <option value="Memmert">Memmert</option>
                <option value="Brookfield">Brookfield</option>
                <option value="Ika - Đức">Ika - Đức</option>
                <option value="Hanna Instruments">Hanna Instruments</option>
                <option value="Binder - Đức">Binder - Đức</option> 
                <option value="Lamy Rheology">Lamy Rheology</option>
                <option value="Horiba">Horiba</option>
                <option value="Technosoft">Technosoft</option>
                <option value="Testometic">Testometric</option>
                <option value="Zeuter - Đức">Zeuter - Đức</option>
                <option value="PG Instruments - Anh">PG Instruments - Anh</option>
                <option value="Young In - Hàn Quốc">Young In - Hàn Quốc</option>
                <option value="Soltec - Ý">Soltec - Ý</option>
                <option value="Koehler Instruments">Koehler Instruments</option>
                <option value="XS - Instruments">XS - Instruments</option>
                <option value="Julabo - Đức">Julabo - Đức</option>
                <option value="Hunterlab - Mỹ">Hunterlab - Mỹ</option>
                <option value="Xylem - Analytics">Xylem - Analytics</option>
                <option value="Bettersize - Trung Quốc">Bettersize - Trung Quốc</option>
                <option value="Metrohm - Thụy Sĩ">Metrohm - Thụy Sĩ</option>
                <option value="Sh Scientific">Sh Scientific</option>
  
              </select>
            </div>
            <div>
              <label htmlFor="brand">Hãng sản xuất (English)</label>
              <select id="brand" className="form-select" value={brand} onChange={(e) => setBrand(e.target.value)} aria-label="Default select example">
                <option defaultValue="ALP - Japan">ALP - Japan</option>
                <option value="EMCO - Germany">EMCO - Germany</option>
                <option value="CONSORT">CONSORT</option>
                <option value="DOSER - Germany">DOSER - Germany</option>
                <option value="PNSHAR - China">PNSHAR - China</option>
                <option value="KRUSS - Germany">KRUSS - Germany</option>
                <option value="PTA - Europe">PTA - EUROPE</option>
                <option value="COMETECH - Taiwan">COMETECH - Taiwan</option>
                <option value="NABERTHERM - Germany">NABERTHERM - Germany</option>
                <option value="TILO">TILO</option>
                <option value="IDM TEST - Spain">IDM TEST - Spain</option>
                <option value="HAMILTON - England">HAMILTON - England</option>
                <option value="NOVAPRO - Korea">NOVAPRO - Korea</option>
                <option value="STURDY - Taiwan">STURDY - Taiwan</option>
                <option value="XRITE - USA">XRITE - USA</option>
                <option value="ANDREAS HETTICH - Germany">ANDREAS HETTICH - Germany</option>
                <option value="Mettler Toledo">Mettler Toledo</option>
                <option value="Labthink">Labthink</option>
                <option value="Memmert">Memmert</option>
                <option value="Brookfield">Brookfield</option>
                <option value="Ika - Germany">Ika - Germany</option>
                <option value="Hanna Instruments">Hanna Instruments</option> 
                <option value="Binder - Germany">Binder - Germany</option> 
                <option value="Lamy Rheology">Lamy Rheology</option>
                <option value="Horiba">Horiba</option>
                <option value="Technosoft">Technosoft</option>
                <option value="Testometic">Testometric</option>
                <option value="Zeuter - Germany">Zeuter - Germany</option>
                <option value="PG Instruments - England">PG Instruments - England</option>
                <option value="Young In - Korea">Young In - Korea</option>  
                <option value="Soltec - Italy">Soltec - Italy</option>
                <option value="Koehler Instruments">Koehler Instruments</option>
                <option value="XS - Instruments">XS - Instruments</option>
                <option value="Julabo - Germany">Julabo - Germany</option>
                <option value="Hunterlab - America">Hunterlab - America</option>
                <option value="Xylem - Analytics">Xylem - Analytics</option>
                <option value="Bettersize - China">Bettersize - China</option>
                <option value="Metrohm - Switzerland">Metrohm - Switzerland</option>
                <option value="Sh Scientific">Sh Scientific</option>
 
              </select>
            </div>       
            <div>
              <label htmlFor="countInStock">Số lượng</label>
              <input
                id="countInStock"
                type="text"
                placeholder="Enter countInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="model">Model:</label>
              <input
                id="model"
                type="text"
                placeholder="Enter Model"
                value={model}
                onChange = {(e) => setModel(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="description">Mô tả:</label>
              <textarea
                name="description"
                rows="4"
                id="description"
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label htmlFor="endescription">Mô tả: (English)</label>
              <textarea
                name="endescription"
                rows="4"
                id="endescription"
                type="text"
                placeholder="Enter endescription"
                value={endescription}
                onChange={(e) => setEndescription(e.target.value)}
              ></textarea>
            </div>           
            <div>
              <label htmlFor="parameter">Thông số kỹ thuật</label>
              <CKEditor 
                className="parameter"
                editor={ClassicEditor}
                config={ editorConfiguration }
                data={parameter}
                onReady={editor =>{
                }}
                onChange={(e,editor)=>{
                  const data1 = editor.getData();
                  setParameter(data1);
                }}
              />
            </div>
            <div>
              <label htmlFor="enparameter">Thông số kỹ thuật (English)</label>
              <CKEditor 
                className="enparameter"
                editor={ClassicEditor}
                config={ editorConfiguration }
                data={enparameter}
                onReady={editor =>{
                }}
                onChange={(e,editor)=>{
                  const data = editor.getData();
                  setEnparameter(data);
                }}
              />
            </div>
            {/* <div id="editor">
              <p>This is the initial editor content.</p>
            </div> */}
            <div>
               <label htmlFor="video">Link Video</label>
               <input
                id="video"
                type="text"
                placeholder="Enter Link video"
                value={video}
                onChange={(e) => setVideo(e.target.value)}
               ></input> 
            </div>
            
            <div>
               <label htmlFor="catalog">Link catalog</label>
               <input
                id="catalog"
                type="text"
                placeholder="Enter Link catalog"
                value={catalog}
                onChange={(e) => setCatalog(e.target.value)}
               ></input> 
            </div>
            <div>
              <label></label>
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
