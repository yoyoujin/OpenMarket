import React from 'react';
import Logo from '../../assets/images/Logo-hodu.png';
import { HeaderWrapper, InnerHeader } from './Styled';

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
            <img src="" alt="" /> 장바구니
          </div>
          <div>
            <img src="" alt="" /> 로그인
          </div>
        </div>
      </InnerHeader>
    </HeaderWrapper>
  );
};

export default Header;
