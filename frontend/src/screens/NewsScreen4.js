import React from 'react';
// import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Sidebar from '../components/Sidebar';

function NewsScreen4(props){
    return <div className="main-content">
        <Sidebar />
        <div className="newspage">
    <Helmet>
        <title>Máy đo Sr - Sumet Germany (PTA Group)</title>
    </Helmet>
        <div className="newspage-content">
        <h1>Máy đo Sr - Sumet Germany (PTA Group)</h1>
          <div className="image-gallery">
            <img className="img-news" src="https://res.cloudinary.com/thanh-tin-tech/image/upload/v1626921423/thanh%20tin%20products/z2630846004445_6c3e8d8f3d9d245ca959fe91573230b4_a0l5pf.jpg" alt="sumet-germany"></img>
            <img className="img-news" src="https://res.cloudinary.com/thanh-tin-tech/image/upload/v1626921425/thanh%20tin%20products/z2630846014121_3ac46611190a06cf9a76edfba11a40ae_f3cywi.jpg" alt="sumet-germany"></img>
            <img className="img-news" src="https://res.cloudinary.com/thanh-tin-tech/image/upload/v1626921426/thanh%20tin%20products/z2630846027749_05055355574e49fc2d390a1d391ba76c_nwftpe.jpg" alt="sumet-germany"></img>
           </div>
        </div>
    </div>
    </div>
}
export default NewsScreen4;