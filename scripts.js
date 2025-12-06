/* ==========================================================================
   scripts.js - النسخة المصححة (تم إصلاح الأقواس وحذف ترجمة الفوتر)
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

    // --- خريطة الصفحات ---
    const pageMap = {
        'civil_forms.html': 'civil_forms',
        'passport_forms.html': 'passport_forms',
        'traffic_forms.html': 'traffic_forms',
        'najiz.html': 'najiz',
        'bank_alahli.html': 'bank_alahli',
        'bank_alrajhi.html': 'bank_alrajhi',
        'bank_riyad.html': 'bank_riyad',
        'bekare.html': 'bekare',
        'taaminy.html': 'taaminy',
        'Najm_website.html': 'Najm_website',
        'commerce.html': 'commerce',
        'qiwa.html': 'qiwa',
        'citizen.html': 'citizen',
        'education.html': 'education',
        'municipal.html': 'municipal',
        'social.html': 'social',
        'about.html': 'about',
        'terms.html': 'terms',
        'contact.html': 'contact',
        'faq.html': 'faq',
        'privacy.html': 'privacy'
    };

    // دالة التحديث الرئيسية
    function updateContent() {
        const lang = localStorage.getItem('lang') || 'ar';

        // 1. تحديث القائمة العلوية
        if (typeof translations !== 'undefined' && translations.common) {
            const homeLink = document.getElementById('homeLink');
            if (homeLink) homeLink.textContent = translations.common.homeLink[lang];
            if (langSwitch) langSwitch.textContent = translations.common.langSwitch[lang];
        }

        // 2. تحديد مفتاح الصفحة الحالية
        const fileName = path.split('/').pop();
        let pageKey = pageMap[fileName] || pageMap[Object.keys(pageMap).find(k => k.toLowerCase() === fileName.toLowerCase())];
        if (!pageKey) pageKey = 'common'; 

        // 3. معالجة الصفحات الخاصة
        
        // --- أ: صفحة اتصل بنا (Contact) ---
        if (pageKey === 'contact') {
            const contactData = translations['contact'];
            
            // 1. ترجمة الحقول (Placeholders)
            if (contactData) {
                const fields = ['name', 'email', 'subject', 'message'];
                const phKeys = ['ph_name', 'ph_email', 'ph_subject', 'ph_message'];
                fields.forEach((id, idx) => {
                    const el = document.getElementById(id);
                    if (el && contactData[phKeys[idx]]) {
                        el.placeholder = contactData[phKeys[idx]][lang];
                    }
                });
            }

            // (تم حذف كود الفوتر من هنا بناءً على طلبك)

            // 2. منطق النموذج (Form Logic)
            const form = document.getElementById('contactForm');
            if (form) {
                const newForm = form.cloneNode(true);
                form.parentNode.replaceChild(newForm, form);
                
                let formMessage = document.getElementById('formMessage');
                if (!formMessage) {
                    formMessage = document.createElement("div");
                    formMessage.id = "formMessage";
                    formMessage.className = "mt-3 alert text-center";
                    formMessage.style.display = "none";
                    newForm.after(formMessage);
                }

                newForm.addEventListener("submit", async function(e) {
                    e.preventDefault();
                    formMessage.style.display = "none";
                    
                    const t_success = (contactData && contactData.msg_success) ? contactData.msg_success[lang] : "Message Sent!";
                    const t_error = (contactData && contactData.msg_error) ? contactData.msg_error[lang] : "Error Sending.";

                    const formData = new FormData(newForm);
                    try {
                        const response = await fetch(newForm.action, {
                            method: newForm.method,
                            body: formData,
                            headers: { "Accept": "application/json" }
                        });

                        if (response.ok) {
                            formMessage.className = "mt-3 alert alert-success text-center";
                            formMessage.textContent = t_success;
                            formMessage.style.display = "block";
                            newForm.reset();
                        } else {
                            throw new Error("Error");
                        }
                    } catch (error) {
                        formMessage.className = "mt-3 alert alert-danger text-center";
                        formMessage.textContent = t_error;
                        formMessage.style.display = "block";
                    }
                });
            }
        } // <--- تم إغلاق شرط contact هنا بشكل صحيح

        // --- ب: صفحة الأسئلة الشائعة (FAQ) ---
        else if (pageKey === 'faq') {
            const data = translations['faq'];
            const searchInput = document.getElementById('searchInput');
            const searchBtn = document.getElementById('searchBtn');
            const accordionItems = document.querySelectorAll('.accordion-item');

            if(searchInput && data.searchPH) searchInput.placeholder = data.searchPH[lang];
            if(searchBtn && data.searchBtn) searchBtn.textContent = data.searchBtn[lang];

            if(data && data.questions && accordionItems.length > 0) {
                accordionItems.forEach((item, index) => {
                    if(data.questions[index]) {
                        const btn = item.querySelector('.accordion-button');
                        const body = item.querySelector('.accordion-body');
                        if(btn) btn.innerHTML = lang === 'en' ? data.questions[index].q_en : data.questions[index].q_ar;
                        if(body) body.innerHTML = lang === 'en' ? data.questions[index].a_en : data.questions[index].a_ar;
                    }
                });
            }
        }

        // --- ج: صفحة الخصوصية (Privacy) ---
        else if (pageKey === 'privacy') {
            const data = translations['privacy'];
            const searchInput = document.getElementById('searchInput');
            const searchBtn = document.getElementById('searchBtn');
            const accordionItems = document.querySelectorAll('.accordion-item');

            if(searchInput && data.searchPH) searchInput.placeholder = data.searchPH[lang];
            if(searchBtn && data.searchBtn) searchBtn.textContent = data.searchBtn[lang];

            if(data && data.items && accordionItems.length > 0) {
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

        // 4. التطبيق العام للترجمة
        if (pageKey && translations[pageKey]) {
            const data = translations[pageKey];
            for (const [id, textObj] of Object.entries(data)) {
                const element = document.getElementById(id);
                if (element) {
                    element.innerHTML = textObj[lang];
                }
            }
        }
        
        // 5. تحديث الإعدادات العامة
        document.documentElement.dir = (lang === 'en') ? 'ltr' : 'rtl';
        document.documentElement.lang = lang;
        
        const brandImg = document.querySelector('#brandName img');
        if (brandImg) {
            brandImg.alt = (lang === 'en') ? 'Public Services Platform' : 'منصة الخدمات العامة';
        }
    }

    // دوال التبديل
    function switchLanguage() {
        const current = localStorage.getItem('lang') || 'ar';
        const next = current === 'ar' ? 'en' : 'ar';
        localStorage.setItem('lang', next);
        location.reload(); 
    }

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

    const savedMode = localStorage.getItem('mode') || 'dark';
    if (navEl) {
        if (savedMode === 'dark') navEl.classList.add('navbar-dark-mode');
        else navEl.classList.add('navbar-light-mode');
    }

    updateContent();
});