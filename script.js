function updateClock() {
    const now = new Date();
    
    // 更新时间
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.querySelector('.time').textContent = `${hours}:${minutes}:${seconds}`;
    
    // 更新日期
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    document.querySelector('.date').textContent = `${year}年${month}月${day}日`;

    // 更新周几
    const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    const weekday = weekdays[now.getDay()];
    document.querySelector('.weekday').textContent = `星期${weekday}`;
}

// 初始化时钟
updateClock();

// 每秒更新一次
setInterval(updateClock, 1000); 