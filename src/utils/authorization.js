import axios from 'axios';

async function authorization() {
    const storage = localStorage;

    let hasLogin = false;
    let username = storage.getItem('username');

    const expiredTime = Number(storage.getItem('expired_time'));
    const current = (new Date()).getTime();
    const refreshToken = storage.getItem('refresh_token');

    // 初始 token 未过期
    if (expiredTime > current) {
        hasLogin = true;
        console.log('鉴权通过');
    }
    // 初始 token 过期
    // 申请刷新 token
    else if (refreshToken !== null) {
        try {
            let response = await axios.post('/api/token/refresh/', {refresh: refreshToken});

            const nextExpiredTime = Date.parse(response.headers.date) + 60 * 100 * 1000;

            storage.setItem('access_token', response.data.access);
            storage.setItem('expired_time', nextExpiredTime);
            storage.removeItem('refresh_token');

            hasLogin = true;

            console.log('鉴权跟新')
        }
        catch (err) {
            storage.clear();
            hasLogin = false;

            console.log('鉴权失败')
        }
    }
    // 无任何有效 token
    else {
        storage.clear();
        hasLogin = false;
        console.log('无鉴权')
    }

    console.log('鉴权完毕');
    // console.log(localStorage);

    return [hasLogin, username]
}

export default authorization;