import React from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';


export default withNamespaces((props) => props.namespaces) (function Product(props) {
  const {t} = props;
  const { product } = props;
  function stringToSlug(str) {
    // remove accents
    var from = "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ",
        to   = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy";
    for (var i=0, l=from.length ; i < l ; i++) {
      str = str.replace(RegExp(from[i], "gi"), to[i]);
    }
  
    str = str.toLowerCase()
          .trim()
          .replace(/[^a-z0-9\-]/g, '-')
          .replace(/-+/g, '-');
  
    return str;
  }
  
  return (
    <div key={product._id} className="card product-card">
      <Link className="card-header" 
        to={`/san-pham/${product._id}`}>
        <img className="small" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link className="product-name"
	      to={`/san-pham/${product._id}`}>
          <h2>{t("cutname", {product}).length > 50 ? t("cutname", {product}).substring(0, 47) + "..." : t("cutname", {product}) }</h2>
        </Link>
        <div className="row">
          <div className="product-model"><strong>Model: </strong> {product.model}</div>
          <div className="product-brand"><strong>{t("brand.label")}: </strong> {t("productbrand", {product})}</div>
        </div>
        <Link className="details-btn" to={`/san-pham/${product._id}`}>
          {t("detailbtn.label")}
        </Link>
      </div>
    </div>
  );
})
