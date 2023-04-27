import React from 'react';
import Logo from '../../assets/images/Logo-hodu.png';
import { HeaderWrapper, InnerHeader } from './Styled';
import shoppingCartIcon from '../../assets/images/icon-shopping-cart.svg';
import userIcon from '../../assets/images/icon-user.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrapper>
      <InnerHeader>
        <h1>
          <img src={Logo} alt="호두마켓 로고 이미지" />
        </h1>
        <form>
          <input type="text" placeholder="상품을 검색해보세요!" />
          <button className="search-btn" type="button"></button>
        </form>
        <div className="header-icons">
          <div>
            <img src={shoppingCartIcon} alt="" />
            <p>장바구니</p>
          </div>
          <div>
            <Link to="login">
              <img src={userIcon} alt="" />
              <p>로그인</p>
            </Link>
          </div>
        </div>
      </InnerHeader>
    </HeaderWrapper>
  );
};

export default Header;
