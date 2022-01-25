import React from 'react';
// import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Sidebar from '../components/Sidebar';


function Ungdung(props){
    return <div className="main-content">
        <Sidebar />
        <div className="newspage">
    <Helmet>
        <title>Carbon and Nitrogen in lubricants</title>
    </Helmet>
        <div className="newspage-content">
            <h1>Carbon and Nitrogen in lubricants</h1>
            <h5>Instrument: ECS 8020</h5>
            <img src="../images/carbon1.png" alt="hinh-ung-dung" />
            <p>The determination of Carbon and Nitrogen in lubricants or lube oils is one of the basic analysis made on these type of samples. </p>
            <p>The determination of such elements in materials, that seem homogeneous but sometimes are hard to be analyzed, can be made by several methods or recognized standard methods (e.g. ASTM-D5291). ECS8020 can easily analyze these samples by a complete conversion of oils in gases and the detection of target elements. </p>
            <p>Thanks to this analysis, industries and laboratories can monitor and handle the dynamics of lubricants performances and behavior in engine and machines.</p>
            <p>Analyses can be associated to other techniques such as NMR or FTIR in order to identify structures and chemical compositions, to perform mass balances or to highlight trends in lubricants behavior.</p>
            <p>It is established that CHNS analysis is the base for these studies: such importance has to be sustained by a high quality instrument able to produce precise data.</p>
        </div>
    </div>
    </div>
}
export default Ungdung;