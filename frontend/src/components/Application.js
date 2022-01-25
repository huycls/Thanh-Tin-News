import React from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import parse from 'html-react-parser';

export default withNamespaces((props) => props.namespaces)(function Application(props){
    const {t} = props;
    const {application} = props;
    const time = new Date(application.createdAt);
    const createdtime = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(time);
    return (  
            <div key= {application._id}  className="news-component">
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image" to={`/tin-moi/${application._id}`}>
                                <img src={application.articleimage}  alt="news-bla" />
                            </Link> 
                        </div>
                        <div className='news-review'>
                            <Link className="newscomponent-title" to={`/tin-moi/${application._id}`}>{t("title",{application}).length > 50 ? t("title",{application}).substring(0, 47) + "..." : t("title",{application})}</Link>                        
                            <small>{createdtime}</small>
                            <p>{parse(t("content",{application}).length > 250 ? t("content",{application}).substring(0, 247) + "..." : t("content",{application}))}</p> 
                        </div>
                </div>
    );
})