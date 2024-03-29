import { ref,onMounted } from 'vue'
import authorization from '@/utils/authorization'

export const useAuthorization = () => {
  const username = ref('');
  const hasLogin = ref(false);
  const isSuperuser = JSON.parse(localStorage.getItem('is_superuser'));

  const fetchData = async () => {
    const [loginStatus, name] = await authorization();
    hasLogin.value = loginStatus;
    username.value = name;
  };

  const logout = () => {
    // localStorage.clear();
    localStorage.removeItem('access_token');
    localStorage.removeItem('expired_time');
    localStorage.removeItem('is_superuser');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('username');
    window.location.reload(false);
  };

  const refresh = () => {
    username.value = localStorage.getItem('username');
  };

  onMounted(fetchData);

  return {
    username,
    hasLogin,
    isSuperuser,
    logout,
    refresh
  };
};