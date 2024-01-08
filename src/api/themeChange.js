// 点击切换主题的方法
function toggleTheme(theme) {
  localStorage.setItem('theme', theme);
}

// 监听主题变化的方法
function listenThemeChange(callback) {
  window.addEventListener('storage', (event) => {
    if (event.key === 'theme') {
      const newTheme = event.newValue;
      callback(newTheme);
    }
  });
}
