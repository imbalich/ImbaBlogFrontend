import axios from 'axios';


export function useLogin() {
  const signIn = (signInName, signInPassword,router) => {
    
    axios
      .post('/api/token/', {
        username: signInName,
        password: signInPassword,
      })
      .then((response) => {
        const storage = localStorage;
        const expiredTime = Date.parse(response.headers.date) + 60 * 1000 * 1000;
        storage.setItem('access_token', response.data.access);
        storage.setItem('refresh_token', response.data.refresh);
        storage.setItem('expired_time', expiredTime);
        storage.setItem('username', signInName);

        axios
          .get(`/api/user/${signInName}/`)
          .then((response) => {
            storage.setItem('is_superuser', response.data.is_superuser);
            router.push({ name: 'Home' });  // 此处确保router对象存在并正确使用
          });
      })
      .catch((error) => {
        // 错误处理逻辑
      });
  };

  return {
    signIn,
  };
}
