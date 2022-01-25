import React from 'react';
import { withNamespaces } from 'react-i18next';
import {Helmet} from 'react-helmet';
import Sidebar from '../components/Sidebar';

export default withNamespaces()(function ContactScreen({t}){
    return <div className="main-content">
        <Sidebar />
        <div className="contact-page">
        <Helmet>
            <title>Liên hệ - Công ty TNHH thiết bị và hóa chất Thành Tín</title>
        </Helmet>
        <div className="introinfo-field">
            <div className="intro-info">
                <strong className="company-name">{t("contact.label")}</strong>
                <p><strong className="office-name">{t("hcm.label")}: </strong>{t("hcmadd.label")}</p>
                <p><strong>{t("phone.label")}: </strong>(028) 36 360 901</p>
                <p><span><strong>Fax: </strong>(028) 36 360 902  <strong>{t("mst.label")}</strong>0311941553</span></p>
                <p><strong>{t("sale.label")}: </strong><a href="mailto:sales@thanhtin-tech.com">sales@thanhtin-tech.com</a>   </p>
                <p><strong>{t("tech.label")}: </strong><a href="mailto:service@thanhtin-tech.com">service@thanhtin-tech.com</a></p>
            </div>
            <div className="intro-info">
                <p><strong className="office-name">Ha Noi Office (ADANA Complex) : </strong>{t("hnadd.label")}</p>
                <p><strong>{t("sale.label")}: </strong><a href="mailto:hanoi@thanhtin-tech.com">hanoi@thanhtin-tech.com</a></p>
                <p><strong>{t("tech.label")}: </strong><a href="mailto:service@thanhtin-tech.com">service@thanhtin-tech.com</a></p>
            </div>
        </div>
    </div>
    </div>
})