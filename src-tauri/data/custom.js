window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});(function() {
    // 等到页面加载完
    window.addEventListener('load', function() {

        // ========== 创建两个按钮的容器 ==========
        let bar = document.createElement('div');
        bar.style.position = 'fixed';
        bar.style.left = '20px';
        bar.style.bottom = '20px';
        bar.style.zIndex = '99999';
        bar.style.display = 'flex';
        bar.style.gap = '10px';

        // ========== 按钮1：回到应用商店首页 ==========
        let btnHome = document.createElement('button');
        btnHome.innerText = '回到应用商店首页';
        btnHome.style.padding = '8px 14px';
        btnHome.style.backgroundColor = '#0d6efd';
        btnHome.style.color = '#fff';
        btnHome.style.border = 'none';
        btnHome.style.borderRadius = '6px';
        btnHome.style.cursor = 'pointer';
        btnHome.onclick = function() {
            window.location.href = 'https://hydro.ac/user/120359';
        };

        // ========== 按钮2：使用默认浏览器打开当前页 ==========
        let btnBrowser = document.createElement('button');
        btnBrowser.innerText = '使用默认浏览器打开';
        btnBrowser.style.padding = '8px 14px';
        btnBrowser.style.backgroundColor = '#6c757d';
        btnBrowser.style.color = '#fff';
        btnBrowser.style.border = 'none';
        btnBrowser.style.borderRadius = '6px';
        btnBrowser.style.cursor = 'pointer';
        btnBrowser.onclick = function() {
            try {
                // Pake 环境调用系统默认浏览器
                window.pake && window.pake.openBrowser(window.location.href);
            } catch(e) {
                window.open(window.location.href, '_blank');
            }
        };

        // 把按钮放进容器
        bar.appendChild(btnHome);
        bar.appendChild(btnBrowser);
        document.body.appendChild(bar);

        // ========== 所有下载自动用默认浏览器打开（解决 .bin 问题） ==========
        document.addEventListener('click', function(e) {
            let a = e.target.closest('a[href]');
            if (!a) return;

            let href = a.href.toLowerCase();
            let exts = ['.exe', '.apk', '.zip', '.rar', '.7z', '.msi', '.bin', '.tar.gz'];

            // 如果是下载链接 → 强制用默认浏览器打开下载
            if (exts.some(ext => href.endsWith(ext))) {
                e.preventDefault();
                try {
                    window.pake && window.pake.openBrowser(a.href);
                } catch(err) {
                    window.open(a.href, '_blank');
                }
            }
        }, true);
    });
})();