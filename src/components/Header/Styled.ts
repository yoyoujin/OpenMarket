import { InnerWrapper } from './../Wrapper/InnerWrapper';
import styled from 'styled-components';
import searchIcon from '../../assets/images/icon-search.svg';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 90px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;

export const InnerHeader = styled(InnerWrapper)`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;

  h1 {
    width: 124px;
    > img {
      width: 100%;
    }
  }

  > form {
    width: 400px;
    height: 46px;
    margin-left: 30px;
    position: relative;

    > input {
      width: 100%;
      padding: 13px 22px;
      border: 2px solid var(--main-color);
      border-radius: 50px;

      &::placeholder {
        font-size: 1.4rem;
        line-height: 2em;
      }
    }
    > .search-btn {
      width: 28px;
      height: 28px;
      background: url(${searchIcon}) no-repeat;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      right: 22px;
    }
  }

  .header-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 26px;
    margin-left: auto;

    p {
      margin-top: 4px;
      font-size: 1.2rem;
      line-height: 1.4rem;
      text-align: center;
      color: var(--grey76);
    }
  }
`;
