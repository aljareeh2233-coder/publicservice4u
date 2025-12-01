/* ==========================================================================
   scripts.js - النسخة النهائية (الذكية)
   ========================================================================== */

(function() {
    // 1. تهيئة فورية لمنع الوميض (FOUC)
    const savedLang = localStorage.getItem('lang') || 'ar';
    const savedMode = localStorage.getItem('mode') || 'dark';

    document.documentElement.lang = savedLang;
    document.documentElement.dir = (savedLang === 'en') ? 'ltr' : 'rtl';

    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
})();

document.addEventListener('DOMContentLoaded', function () {
    const langSwitch = document.getElementById('langSwitch');
    const modeSwitch = document.getElementById('modeSwitch');
    const navEl = document.querySelector('nav');
    const path = window.location.pathname;

    // --- خريطة الصفحات (لربط اسم الملف بمفتاح الترجمة) ---
    // هذه الطريقة أسرع وأذكى من if...else if المتعددة
    const pageMap = {
        'civil_forms': 'civil_forms',
        'passport_forms': 'passport_forms',
        'traffic_forms': 'traffic_forms',
        'najiz': 'najiz',
        'bank_alahli': 'bank_alahli',
        'bank_alrajhi': 'bank_alrajhi',
        'bank_riyad': 'bank_riyad',
        'bekare': 'bekare',
        'taaminy': 'taaminy',
        'Najm_website': 'Najm_website',
        'commerce': 'commerce',
        'qiwa': 'qiwa',
        'citizen': 'citizen',
        'education': 'education',
        'municipal': 'municipal',
        'social': 'social',
        'about': 'about',
        'terms': 'terms',
        'contact': 'contact',
        'faq': 'faq',
        'privacy': 'privacy'
    };

    // دالة التحديث الرئيسية
    function updateContent() {
        const lang = localStorage.getItem('lang') || 'ar';

        // 1. تحديث القائمة العلوية (مشترك لجميع الصفحات)
        if (translations.common) {
            const homeLink = document.getElementById('homeLink');
            if (homeLink) homeLink.textContent = translations.common.homeLink[lang];
            if (langSwitch) langSwitch.textContent = translations.common.langSwitch[lang];
        }

        // 2. تحديد مفتاح الصفحة الحالية بذكاء
        let pageKey = null;
        for (const [urlPart, key] of Object.entries(pageMap)) {
            if (path.includes(urlPart)) {
                pageKey = key;
                break; 
            }
        }

        // 3. معالجة الصفحات الخاصة (اتصل بنا، الأسئلة، الخصوصية)
        if (pageKey === 'contact') {
            const data = translations['contact'];
            if(data) {
                const fields = ['name', 'email', 'subject', 'message'];
                const phKeys = ['ph_name', 'ph_email', 'ph_subject', 'ph_message'];
                fields.forEach((id, idx) => {
                    const el = document.getElementById(id);
                    if(el) el.placeholder = data[phKeys[idx]][lang];
                });
            }
        } else if (pageKey === 'faq') {
            const data = translations['faq'];
            const searchInput = document.getElementById('searchInput');
            const searchBtn = document.getElementById('searchBtn');
            const accordionItems = document.querySelectorAll('.accordion-item');

            if(searchInput) searchInput.placeholder = data.searchPH[lang];
            if(searchBtn) searchBtn.textContent = data.searchBtn[lang];

            if(data.questions && accordionItems.length > 0) {
                accordionItems.forEach((item, index) => {
                    if(data.questions[index]) {
                        const btn = item.querySelector('.accordion-button');
                        const body = item.querySelector('.accordion-body');
                        if(btn) btn.innerHTML = lang === 'en' ? data.questions[index].q_en : data.questions[index].q_ar;
                        if(body) body.innerHTML = lang === 'en' ? data.questions[index].a_en : data.questions[index].a_ar;
                    }
                });
            }
        } else if (pageKey === 'privacy') {
            const data = translations['privacy'];
            const searchInput = document.getElementById('searchInput');
            const searchBtn = document.getElementById('searchBtn');
            const accordionItems = document.querySelectorAll('.accordion-item');

            if(searchInput) searchInput.placeholder = data.searchPH[lang];
            if(searchBtn) searchBtn.textContent = data.searchBtn[lang];

            if(data.items && accordionItems.length > 0) {
                accordionItems.forEach((item, index) => {
                    if(data.items[index]) {
                        const btn = item.querySelector('.accordion-button');
                        const body = item.querySelector('.accordion-body');
                        if(btn) btn.innerHTML = lang === 'en' ? data.items[index].t_en : data.items[index].t_ar;
                        if(body) body.innerHTML = lang === 'en' ? data.items[index].b_en : data.items[index].b_ar;
                    }
                });
            }
        }

        // 4. التطبيق العام للترجمة (لباقي النصوص في الصفحة)
        if (pageKey && translations[pageKey]) {
            const data = translations[pageKey];
            for (const [id, textObj] of Object.entries(data)) {
                const element = document.getElementById(id);
                if (element) {
                    // نستخدم innerHTML لدعم التنسيق (Bold, List, etc.)
                    element.innerHTML = textObj[lang];
                }
            }
        }
        
        // تحديث اتجاه الصفحة (RTL/LTR)
        document.documentElement.dir = (lang === 'en') ? 'ltr' : 'rtl';
        document.documentElement.lang = lang;
    }

    // دالة تبديل اللغة (Reload لضمان تطبيق كل شيء)
    function switchLanguage() {
        const current = localStorage.getItem('lang') || 'ar';
        const next = current === 'ar' ? 'en' : 'ar';
        localStorage.setItem('lang', next);
        location.reload(); 
    }

    // دالة تبديل الوضع (Dark/Light)
    function switchMode() {
        const isDark = document.body.classList.contains('dark-mode');
        if (isDark) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('mode', 'light');
            if(navEl) { navEl.classList.remove('navbar-dark-mode'); navEl.classList.add('navbar-light-mode'); }
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark');
            if(navEl) { navEl.classList.remove('navbar-light-mode'); navEl.classList.add('navbar-dark-mode'); }
        }
    }

    // ربط الأحداث
    if (langSwitch) langSwitch.addEventListener('click', switchLanguage);
    if (modeSwitch) modeSwitch.addEventListener('click', switchMode);

    // ضبط الناف بار عند التحميل
    const savedMode = localStorage.getItem('mode') || 'dark';
    if (navEl) {
        if (savedMode === 'dark') navEl.classList.add('navbar-dark-mode');
        else navEl.classList.add('navbar-light-mode');
    }

    // التشغيل الأولي
    updateContent();
});