import { useEffect } from 'react';

const Register = ({ userId }) => {
  fetch(`https://solumjunction.store/api/visit/company/${userId}?companyName=SOLUM`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  }).then((res) => {
    console.log(res);
    return res.json();
  });

  return <div> 부스 등록페이지 입니다. {userId} 의 정보를 등록합니다.</div>;
};

Register.getInitialProps = async (ctx) => {
  const { pathname, query } = ctx;

  return { pathname, userId: query.userId };
};

export default Register;
