import StyledButton from './StyledButton';

const Button = ({ type, size, state, name, onClick, disabled }) => {
  return (
    <StyledButton
      type={type}
      size={size}
      state={state}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </StyledButton>
  );
};

export default Button;
