import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {Helmet} from 'react-helmet';
import { withNamespaces } from 'react-i18next';

export default withNamespaces((props) => props.namespaces) (function SigninScreen(props) {
  const {t} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
      <Helmet>
        <title>{t("Sign in")}</title>
      </Helmet>
      <form className="form" onSubmit={submitHandler}>       
        <h1>{t("Sign in")}</h1>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">{t("Password")}</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            {t("Sign in")}
          </button>
        </div>
        <div>
          <label />
          <div>
            {t("newuser.label")}?{' '}
            <Link to={`/dang-ky-tai-khoan?redirect=${redirect}`}>
              {t("registernow.label")}
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
})
