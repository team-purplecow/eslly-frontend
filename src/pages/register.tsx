import { useEffect } from 'react';

const Register = ({ userId }) => {
  useEffect(() => {
    const registerInfo = {
      title: '정션',
      number: `${userId}`,
      startDate: '2023-08-06',
      finishDate: '2023-08-26',
    };

    fetch('http://solumjunction.store/api/event/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(registerInfo),
    }).then((res) => {
      console.log(res);
      return res.json();
    });
  }, []);
  return <div> 부스 등록페이지 입니다. {userId} 의 정보를 등록합니다.</div>;
};

Register.getInitialProps = async (ctx) => {
  const { pathname, query } = ctx;

  return { pathname, userId: query.userId };
};

export default Register;
