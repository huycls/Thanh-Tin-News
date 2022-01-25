import React from 'react';
import { withNamespaces } from 'react-i18next';
import {Helmet} from 'react-helmet';
import Sidebar from '../components/Sidebar';

function IntroScreen({t}){
    return <div className="main-content">
        <Helmet>
            <title>Giới thiệu</title>
        </Helmet>
        <Sidebar />
        <div className="intro-content intro-page">
         <h1><img className="intro-image" src="../images/logofavico.jpg" alt="intro"></img>{t("Giới thiệu")}</h1>
         <small>15-1-2020, 4:51 pm</small>
            <p><span><strong className="company-name">{t("Thanh Tin Instrument And Chemical Co.LTD")}</strong> {t("intro.p1")}</span></p>
            <ul>
                <li><i className="fas fa-chevron-right"></i>{t("intro.l1")}</li>
                <li><i className="fas fa-chevron-right"></i>{t("intro.l2")}</li>
                <li><i className="fas fa-chevron-right"></i>{t("intro.l3")}</li>
                <li><i className="fas fa-chevron-right"></i>{t("intro.l4")}</li>
                <li><i className="fas fa-chevron-right"></i>{t("intro.l5")}</li>
                <li><i className="fas fa-chevron-right"></i>{t("intro.l6")}</li>
           </ul>
           <h2>{t("intro.h2")}</h2>
           <ul>
               <li><i className="fas fa-chevron-right"></i>{t("intro.li1")}</li>
               <li><i className="fas fa-chevron-right"></i>{t("intro.li2")}</li>
                <li><i className="fas fa-chevron-right"></i>{t("intro.li3")}</li>
           </ul>
           <h2>{t("intro.h21")}</h2>
           <ul>
               <li><i className="fas fa-chevron-right"></i>{t("intro.li4")}</li>
               <li><i className="fas fa-chevron-right"></i>{t("intro.li5")}</li>
                <li><i className="fas fa-chevron-right"></i>{t("intro.li6")}</li>
           </ul>
           <p className="p2">{t("intro.p2")}</p>
         <div className="introinfo-field">
         <div className="intro-info">
             <strong className="company-name">{t("Contact Information")}</strong>
             <p><strong className="office-name">{t("VP HCM")}: </strong>{t("78 1A St, Quater 4, Binh Hung Hoa B Ward, Binh Tan Dist., Ho Chi Minh City, VietNam")}</p>
             <p><strong>{t("Hotline")}: </strong>(028) 36 360 901</p>
             <p><span><strong>Fax: </strong>(028) 36 360 902  <strong>{t("MST:")}</strong>0311941553</span></p>
             <p><strong>{t("Sale Department")}: </strong><a href="mailto:sales@thanhtin-tech.com">sales@thanhtin-tech.com</a>   </p>
             <p><strong>{t("Technical Department")}: </strong><a href="mailto:service@thanhtin-tech.com">service@thanhtin-tech.com</a></p>
         </div>
         <div className="intro-info">
             <p><strong className="office-name">Ha Noi Office (ADANA Complex) : </strong>{t("Lot 3, A1-A2-A3 Area, Cau Thanh Tri St., Cu Khoi Ward, Long Bien Dist., Ha Noi, VietNam")}</p>
             <p><strong>{t("Sale Department")}: </strong><a href="mailto:hanoi@thanhtin-tech.com">hanoi@thanhtin-tech.com</a></p>
             <p><strong>{t("Technical Department")}: </strong><a href="mailto:service@thanhtin-tech.com">service@thanhtin-tech.com</a></p>
         </div>
         </div>
       </div>
    </div>
}
export default  withNamespaces()(IntroScreen);