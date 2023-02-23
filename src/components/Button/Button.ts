import styled, { css } from 'styled-components';

const setSize = (size: string) => {
  switch (size) {
    case 'lg':
      return css`
        padding: 19px 0;
        font-size: 2.4rem;
        line-height: 3rem;
        font-weight: 700;
      `;
    case 'md':
      return css`
        padding: 19px 0;
        font-size: 1.8rem;
        line-height: 2.2rem;
        font-weight: 700;
      `;
    case 'sm':
      return css`
        padding: 17px 0;
        font-size: 1.8rem;
        line-height: 2rem;
      `;
    default:
      return css`
        padding: 10px 0;
        font-size: 1.6rem;
        line-height: 2rem;
      `;
  }
};

const Button = styled.button<{ width: string; size: string }>`
  width: ${({ width }) => width || '80px'};
  background: var(--main-color);
  color: var(--white);
  border-radius: 5px;

  &:disabled {
    background-color: var(--greyC4);
    cursor: not-allowed;
  }

  &:active {
    background-color: var(--white);
    outline: 1px solid var(--greyC4);
  }

  ${({ size }) => setSize(size)}
`;

export default Button;
