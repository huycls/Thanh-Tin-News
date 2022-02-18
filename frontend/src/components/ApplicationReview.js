import React from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';



export default withNamespaces((props) => props.namespaces)(function ApplicationReview(props){
    const {t} = props;
    const {application} = props;
    function closeDropdown(){
        const dropdown1 = document.querySelector('.news-content'); 
        if(dropdown1.classList.contains("show")){
          dropdown1.classList.remove("show");
        }
      }
    const formatter = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    return (  
            <div key= {application._id}  className="newsreview-component">
                <Link className="news-link-wrapper" onClick={closeDropdown} to={`/tin-moi/${application._id}`}>
                    <img className="news-link-img" src={application.articleimage} alt="news-img"></img>
                    <p className="news-link">
                        {t("title", {application}).length > 30 ? t("title",{application}).substring(0, 47) + "..." : t("title",{application})}
                        <small>{formatter.format(new Date(application.createdAt))}</small>
                    </p>
                </Link>
                </div>
    );
})