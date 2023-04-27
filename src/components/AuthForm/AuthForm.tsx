import React from 'react';

type AuthFromProps = { type: string };

const AuthForm = ({ type }: AuthFromProps): JSX.Element => {
  if (typeof type !== 'string') {
    throw new Error('type prop must be a string');
  }
  console.log(type);
  return (
    <>
      <div>
        <h2>{type === 'signup' ? '회원가입' : '로그인'}</h2>
      </div>

      <form>
        <input
          type="email"
          placeholder="이메일"
          name="email"
          // value={user.email}
          // onChange={handleChange}
        />
        <input type="password" placeholder="비밀번호" name="password" />
        {type === 'signup' && (
          <input
            type="password"
            placeholder="비밀번호 확인"
            name="passwordcheck"
          />
        )}
      </form>
      <button>가입하기</button>
    </>
  );
};

export default AuthForm;
