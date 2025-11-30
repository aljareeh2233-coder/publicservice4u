/* ==========================================================================
   scripts.js - المنطق البرمجي (يعتمد على translations.js)
   ========================================================================== */

(function() {
    // 1. تهيئة فورية لمنع الوميض
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

    // دالة التحديث الرئيسية
    function updateContent() {
        const lang = localStorage.getItem('lang') || 'ar';

        // 1. تحديث القائمة العلوية (مشترك)
        if (translations.common) {
            const homeLink = document.getElementById('homeLink');
            if (homeLink) homeLink.textContent = translations.common.homeLink[lang];
            if (langSwitch) langSwitch.textContent = translations.common.langSwitch[lang];
        }

        // 2. معرفة الصفحة الحالية (تمت إضافة صفحة نجم هنا)
        let pageKey = null;
        if (path.includes('civil_forms')) pageKey = 'civil_forms';
        else if (path.includes('passport_forms')) pageKey = 'passport_forms';
        else if (path.includes('traffic_forms')) pageKey = 'traffic_forms';
        else if (path.includes('najiz')) pageKey = 'najiz';
        else if (path.includes('bank_alahli')) pageKey = 'bank_alahli';
        else if (path.includes('bank_alrajhi')) pageKey = 'bank_alrajhi';
        else if (path.includes('bank_riyad')) pageKey = 'bank_riyad';
        else if (path.includes('bekare')) pageKey = 'bekare';
        else if (path.includes('taaminy')) pageKey = 'taaminy';
        else if (path.includes('Najm_website')) pageKey = 'Najm_website';
        else if (path.includes('commerce')) pageKey = 'commerce';   
        else if (path.includes('qiwa')) pageKey = 'qiwa';
        else if (path.includes('citizen')) pageKey = 'citizen';
        else if (path.includes('education')) pageKey = 'education';
        else if (path.includes('municipal')) pageKey = 'municipal';
        else if (path.includes('social')) pageKey = 'social';
        else if (path.includes('about')) pageKey = 'about';
        else if (path.includes('terms')) pageKey = 'terms';
        // ... (بقية الشروط) ...
        else if (path.includes('contact')) {
            pageKey = 'contact';
            // كود خاص لصفحة اتصل بنا لتغيير الـ Placeholders
            const data = translations['contact'];
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            
            if(nameInput) nameInput.placeholder = data.ph_name[lang];
            if(emailInput) emailInput.placeholder = data.ph_email[lang];
            if(subjectInput) subjectInput.placeholder = data.ph_subject[lang];
            if(messageInput) messageInput.placeholder = data.ph_message[lang];
        }
        // ... (داخل دالة updateContent) ...
        else if (path.includes('faq')) {
            pageKey = 'faq';
            // كود خاص لصفحة الأسئلة الشائعة
            const data = translations['faq'];
            const searchInput = document.getElementById('searchInput');
            const searchBtn = document.getElementById('searchBtn');
            const accordionItems = document.querySelectorAll('.accordion-item');

            if(searchInput) searchInput.placeholder = data.searchPH[lang];
            if(searchBtn) searchBtn.textContent = data.searchBtn[lang];

            // تعبئة الأسئلة والأجوبة ديناميكياً
            if(data.questions && accordionItems.length > 0) {
                accordionItems.forEach((item, index) => {
                    if(data.questions[index]) {
                        const btn = item.querySelector('.accordion-button');
                        const body = item.querySelector('.accordion-body');
                        if(btn) btn.textContent = lang === 'en' ? data.questions[index].q_en : data.questions[index].q_ar;
                        if(body) body.innerHTML = lang === 'en' ? data.questions[index].a_en : data.questions[index].a_ar;
                    }
                });
            }
        }
        
        else if (path.includes('privacy')) {
            pageKey = 'privacy';
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
                        if(btn) btn.textContent = lang === 'en' ? data.items[index].t_en : data.items[index].t_ar;
                        if(body) body.innerHTML = lang === 'en' ? data.items[index].b_en : data.items[index].b_ar;
                    }
                });
            }
        }

        // 3. تطبيق الترجمة
        if (pageKey && translations[pageKey]) {
            const data = translations[pageKey];
            
            // نمر على كل المفاتيح في ملف الترجمة ونبحث عن ID مطابق في HTML
            for (const [id, textObj] of Object.entries(data)) {
                const element = document.getElementById(id);
                if (element) {
                    element.innerHTML = textObj[lang];
                }
            }
        }
    }

    // دالة تبديل اللغة
    function switchLanguage() {
        const current = localStorage.getItem('lang') || 'ar';
        const next = current === 'ar' ? 'en' : 'ar';
        localStorage.setItem('lang', next);
        location.reload(); 
    }

    // دالة تبديل الوضع
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

    // تفعيل الأزرار
    if (langSwitch) langSwitch.addEventListener('click', switchLanguage);
    if (modeSwitch) modeSwitch.addEventListener('click', switchMode);

    // ضبط الناف بار عند التحميل
    const savedMode = localStorage.getItem('mode') || 'dark';
    if (navEl) {
        if (savedMode === 'dark') navEl.classList.add('navbar-dark-mode');
        else navEl.classList.add('navbar-light-mode');
    }

    // تشغيل الترجمة
    updateContent();
});