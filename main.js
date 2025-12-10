/* main.js - النسخة الكاملة والمحدثة مع تحويل نتائج البحث إلى Modal */

document.addEventListener('DOMContentLoaded', function () {
  
  // 1. تعريف العناصر الأساسية
  const modeSwitch = document.getElementById('modeSwitch');
  const langSwitch = document.getElementById('langSwitch');
  const menuList = document.getElementById('menuList');
  const footerContent = document.getElementById('footerContent');
  const brandName = document.getElementById('brandName'); // تم الاحتفاظ به رغم عدم التعديل عليه

  // =========================================================
  //  نصوص القوائم والترجمة (AR / EN) - النسخة المتطابقة
  // =========================================================
  const menus = {
    ar: `
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">الخدمات الحكومية</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="https://www.absher.sa/wps/portal/individuals/static/ca-book-appointment/" target="_blank">الأحوال المدنية (حجز موعد)</a></li>
          <li><a class="dropdown-item" href="https://www.absher.sa" target="_blank">الجوازات</a></li>
          <li><a class="dropdown-item" href="https://www.absher.sa" target="_blank">المرور</a></li>
          <li><a class="dropdown-item" href="https://www.moj.gov.sa" target="_blank">المحاكم (ناجز)</a></li>
          <li class="dropdown-submenu">
            <a class="dropdown-item dropdown-toggle" href="#">وزارة الخارجية</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="https://ratification.mofa.gov.sa/" target="_blank">موعد تصاديق</a></li>
              <li><a class="dropdown-item" href="https://ksavisa.sa/" target="_blank">التأشيرات الإلكترونية</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">الخدمات البنكية</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="https://www.alahli.com/" target="_blank">البنك الأهلي</a></li>
          <li><a class="dropdown-item" href="https://www.alrajhibank.com.sa/" target="_blank">بنك الراجحي</a></li>
          <li><a class="dropdown-item" href="https://www.riyadbank.com/" target="_blank">بنك الرياض</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">التأمين والمطالبات</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="https://www.cchi.gov.sa/" target="_blank">التأمين الصحي</a></li>
          <li><a class="dropdown-item" href="https://najm.sa/home/" target="_blank">مطالبات السيارات</a></li>
          <li><a class="dropdown-item" href="https://tree.com.sa/ar/" target="_blank">تأمين السفر</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">الخدمات التعليمية</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="https://noor.moe.gov.sa/" target="_blank">نظام نور</a></li>
          <li><a class="dropdown-item" href="https://schools.madrasati.sa/" target="_blank">منصة مدرستي</a></li>
          <li><a class="dropdown-item" href="https://safeer2.moe.gov.sa/" target="_blank">نظام سفير</a></li>
          <li><a class="dropdown-item" href="https://rbu-admit.edu.sa/" target="_blank">القبول الجامعي الموحد</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">الخدمات البلدية</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="https://balady.gov.sa/" target="_blank">منصة بلدي</a></li>
          <li><a class="dropdown-item" href="https://ecrp.balady.gov.sa/" target="_blank">الرخص الإنشائية</a></li>
          <li><a class="dropdown-item" href="https://www.jeddah.gov.sa/" target="_blank">أمانة جدة</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">الضمان الاجتماعي</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="https://sbis.hrsd.gov.sa/#/login" target="_blank">تسجيل جديد</a></li>
          <li><a class="dropdown-item" href="https://hrsd.gov.sa/" target="_blank">تحديث البيانات</a></li>
          <li><a class="dropdown-item" href="https://www.my.gov.sa/" target="_blank">الاستعلام عن الأهلية</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">النماذج الرسمية</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="https://www.gdp.gov.sa/Ar/ServicesAndProcedures/Pages/Forms.aspx" target="_blank">نماذج الجوازات</a></li>
          <li><a class="dropdown-item" href="https://is.gd/reFWHs" target="_blank">نماذج الاحوال المدنية</a></li>
          <li><a class="dropdown-item" href="https://is.gd/1LHzx2" target="_blank">نماذج المرور</a></li>
        </ul>
      </li>
    `,
    // ================= النسخة الإنجليزية (تمت مطابقتها بالعربية) =================
    en: `
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Government Services</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="https://www.absher.sa/wps/portal/individuals/static/ca-book-appointment/" target="_blank">Civil Affairs (Book Appointment)</a></li>
          <li><a class="dropdown-item" href="https://www.absher.sa" target="_blank">Passports (Jawazat)</a></li>
          <li><a class="dropdown-item" href="https://www.absher.sa" target="_blank">Traffic (Muroor)</a></li>
          <li><a class="dropdown-item" href="https://www.moj.gov.sa" target="_blank">Courts (Najiz)</a></li>
          <li class="dropdown-submenu">
            <a class="dropdown-item dropdown-toggle" href="#">Ministry of Foreign Affairs</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="https://ratification.mofa.gov.sa/" target="_blank">Attestation Appointment</a></li>
              <li><a class="dropdown-item" href="https://ksavisa.sa/" target="_blank">E-Visas</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Banking Services</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="https://www.alahli.com/" target="_blank">SNB AlAhli Bank</a></li>
          <li><a class="dropdown-item" href="https://www.alrajhibank.com.sa/" target="_blank">Al Rajhi Bank</a></li>
          <li><a class="dropdown-item" href="https://www.riyadbank.com/" target="_blank">Riyad Bank</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Insurance & Claims</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="https://www.cchi.gov.sa/" target="_blank">Health Insurance (CCHI)</a></li>
          <li><a class="dropdown-item" href="https://najm.sa/home/" target="_blank">Vehicle Claims</a></li>
          <li><a class="dropdown-item" href="https://tree.com.sa/en/" target="_blank">Travel Insurance</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Educational Services</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="https://noor.moe.gov.sa/" target="_blank">Noor System</a></li>
          <li><a class="dropdown-item" href="https://schools.madrasati.sa/" target="_blank">Madrasati Platform</a></li>
          <li><a class="dropdown-item" href="https://safeer2.moe.gov.sa/" target="_blank">Safeer System</a></li>
          <li><a class="dropdown-item" href="https://rbu-admit.edu.sa/" target="_blank">Unified University Admission</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Municipal Services</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="https://balady.gov.sa/" target="_blank">Balady Platform</a></li>
          <li><a class="dropdown-item" href="https://ecrp.balady.gov.sa/" target="_blank">Construction Permits</a></li>
          <li><a class="dropdown-item" href="https://www.jeddah.gov.sa/" target="_blank">Jeddah Municipality</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Social Security</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="https://sbis.hrsd.gov.sa/#/login" target="_blank">New Registration</a></li>
          <li><a class="dropdown-item" href="https://hrsd.gov.sa/" target="_blank">Update Data</a></li>
          <li><a class="dropdown-item" href="https://www.my.gov.sa/" target="_blank">Eligibility Inquiry</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Official Forms</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="https://www.gdp.gov.sa/Ar/ServicesAndProcedures/Pages/Forms.aspx" target="_blank">Passport Forms</a></li>
          <li><a class="dropdown-item" href="https://is.gd/reFWHs" target="_blank">Civil Affairs Forms</a></li>
          <li><a class="dropdown-item" href="https://is.gd/1LHzx2" target="_blank">Traffic Forms</a></li>
        </ul>
      </li>
    `
  };

  const footerText = {
    ar: `
      <div class="col-lg-6 col-md-6 mb-4 mb-md-0 text-md-start">
        <h5 class="text-uppercase mb-4">أقسام الموقع</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white text-decoration-none">الخدمات الحكومية</a></li>
          <li><a href="#" class="text-white text-decoration-none">الخدمات البنكية</a></li>
          <li><a href="#" class="text-white text-decoration-none">التأمين والمطالبات</a></li>
          <li><a href="#" class="text-white text-decoration-none">الخدمات التعليمية</a></li>
          <li><a href="#" class="text-white text-decoration-none">الخدمات البلدية</a></li>
          <li><a href="#" class="text-white text-decoration-none">الضمان الاجتماعي</a></li>
        </ul>
      </div>
      <div class="col-md-3 mb-3">
  <h5>روابط الموقع</h5>
  <ul class="list-unstyled">
    <li><a href="faq.html" class="text-white text-decoration-none">الأسئلة الشائعة</a></li>
    <li><a href="contact.html" class="text-white text-decoration-none">اتصل بنا</a></li>
    <li><a href="about.html" class="text-white text-decoration-none">عن الموقع</a></li>
    
    <li><a href="map.html" class="text-white text-decoration-none">📊 خريطة الزوار التفاعلية</a></li>
    
    <li><a href="privacy.html" class="text-white text-decoration-none">الخصوصية وسياسة الاستخدام</a></li>
    <li><a href="terms.html" class="text-white text-decoration-none">الشروط والأحكام</a></li>
  </ul>
</div>
    `,
    en: `
      <div class="col-lg-6 col-md-6 mb-4 mb-md-0 text-md-start">
        <h5 class="text-uppercase mb-4">Site Sections</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white text-decoration-none">Government Services</a></li>
          <li><a href="#" class="text-white text-decoration-none">Banking Services</a></li>
          <li><a href="#" class="text-white text-decoration-none">Insurance & Claims</a></li>
          <li><a href="#" class="text-white text-decoration-none">Educational Services</a></li>
          <li><a href="#" class="text-white text-decoration-none">Municipal Services</a></li>
          <li><a href="#" class="text-white text-decoration-none">Social Security</a></li>
        </ul>
      </div>
      <div class="col-md-3 mb-3">
  <h5 id="footerLinksTitle">Website Links</h5>
  <ul class="list-unstyled">
    <li><a href="faq.html" class="text-white text-decoration-none" id="linkFaq">FAQ</a></li>
    <li><a href="contact.html" class="text-white text-decoration-none" id="linkContact">Contact Us</a></li>
    <li><a href="about.html" class="text-white text-decoration-none" id="linkAbout">About</a></li>
    
    <li><a href="map.html" class="text-white text-decoration-none" id="linkMap">Interactive Visitor Map 📊</a></li>
    
    <li><a href="privacy.html" class="text-white text-decoration-none" id="linkPrivacy">Privacy Policy</a></li>
    <li><a href="terms.html" class="text-white text-decoration-none" id="linkTerms">Terms & Conditions</a></li>
  </ul>
</div>
    `
  };

  // =========================================================
  //  بيانات ترجمة السلايدر (Mini Cards)
  // =========================================================
  const sliderTranslations = {
    ar: [
      { title: "الأحوال المدنية", desc: "نماذج وتعاميم الأحوال" },
      { title: "الجوازات", desc: "إصدار وتجديد الجوازات" },
      { title: "المرور", desc: "رخص السير واللوحات" },
      { title: "ناجز", desc: "المحاكم والوكالات" },
      { title: "حساب المواطن", desc: "التسجيل والأهلية" },
      { title: "التعليم (نور)", desc: "نتائج الطلاب والتسجيل" },
      { title: "منصة بلدي", desc: "الرخص التجارية والإنشائية" },
      { title: "منصة قوى", desc: "نقل الكفالة والعقود" },
      { title: "وزارة التجارة", desc: "السجلات التجارية" },
      { title: "الضمان المطور", desc: "التسجيل والدعم" },
      { title: "البنك الأهلي", desc: "خدمات الأهلي أونلاين" },
      { title: "مصرف الراجحي", desc: "المباشر للأفراد" },
      { title: "بنك الرياض", desc: "أونلاين الرياض" },
      { title: "بي كير", desc: "مقارنة أسعار التأمين" },
      { title: "تأميني", desc: "شراء تأمين المركبات" },
      { title: "نجم", desc: "طباعة تقارير الحوادث" }
    ],
    en: [
      { title: "Civil Affairs", desc: "Forms and Regulations" },
      { title: "Passports", desc: "Issuance and Renewal" },
      { title: "Traffic", desc: "Licenses and Plates" },
      { title: "Najiz", desc: "Courts and POAs" },
      { title: "Citizen Account", desc: "Registration & Eligibility" },
      { title: "Education (Noor)", desc: "Grades and Registration" },
      { title: "Balady", desc: "Commercial & Construction Licenses" },
      { title: "Qiwa Platform", desc: "Sponsorship Transfer & Contracts" },
      { title: "Ministry of Commerce", desc: "Commercial Registers" },
      { title: "Social Security", desc: "Registration and Support" },
      { title: "SNB Bank", desc: "AlAhli Online Services" },
      { title: "Al Rajhi Bank", desc: "Al Mubasher Retail" },
      { title: "Riyad Bank", desc: "Riyad Online" },
      { title: "BCare", desc: "Insurance Price Comparison" },
      { title: "Tameeni", desc: "Buy Vehicle Insurance" },
      { title: "Najm", desc: "Accident Reports" }
    ]
  };

  // =========================================================
  //  وظائف تغيير اللغة والوضع (Language & Mode)
  // =========================================================
  function switchLanguage(lang) {
    const mainTitle = document.getElementById("mainTitle");
    const mainDesc = document.getElementById("mainDesc");
    const cards = document.querySelectorAll(".service-card h2");
    const cardTexts = document.querySelectorAll(".service-card p");
    const newsTitle = document.getElementById("newsTitle");
    const newsSlider = document.querySelector(".news-slider");
    const nav = document.querySelector('nav');
    
    // إعدادات الاتجاه والنافبار
    if (lang === "en") {
        nav.classList.add('navbar-dark'); 
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
    } else {
        nav.classList.remove('navbar-dark');
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    }
    // ========================================================
    // 🛠️ التعديلات النهائية الشاملة (البحث، السلايدر، الزر الأخضر)
    // ========================================================
    
    // 1. ترجمة زر البحث + النص التوضيحي داخله
    const btnSearch = document.getElementById('searchBtn');
    const inputSearch = document.getElementById('searchInput');
    
    if (btnSearch) {
        btnSearch.textContent = lang === 'en' ? 'Search' : 'بحث';
    }
    if (inputSearch) {
        inputSearch.placeholder = lang === 'en' ? 'Search the site...' : 'ابحث في الموقع...';
    }

    // 2. ترجمة عنوان الخدمات السريعة (السلايدر)
    const sliderSecTitle = document.querySelector('#serviceSliderSection h2');
    if (sliderSecTitle) {
        sliderSecTitle.textContent = lang === 'en' ? 'Quick Electronic Services' : 'الخدمات الإلكترونية السريعة';
    }

    // 3. ترجمة الأزرار الخضراء (النماذج + الأدوات)
    const namazjiLabel = document.getElementById('namazjiText');
    if (namazjiLabel) {
        namazjiLabel.textContent = lang === 'en' ? 'Government Services Forms' : 'نماذج الخدمات الحكومية';
    }

    const toolsLabel = document.getElementById('toolsText');
    if (toolsLabel) {
        toolsLabel.textContent = lang === 'en' ? 'Smart Tools & Calculators' : 'أدوات وحاسبات ذكية';
    }
    // ========================================================
    // 4. ترجمة واجهة الشات بوت (Bot Interface)
    // ========================================================
    const chatInput = document.getElementById('userInput');
    const chatSendBtn = document.getElementById('sendBtn');
    const chatTitle = document.querySelector('.chatbot-title');

    if (chatInput) {
        chatInput.placeholder = lang === 'en' ? 'Type your question...' : 'اكتب سؤالك...';
        // تغيير اتجاه الكتابة داخل الحقل
        chatInput.style.textAlign = lang === 'en' ? 'left' : 'right';
    }
    if (chatSendBtn) {
        chatSendBtn.textContent = lang === 'en' ? 'Send' : 'إرسال';
    }
    if (chatTitle) {
        // الحفاظ على الأيقونة وتغيير النص
        chatTitle.innerHTML = lang === 'en' ? 'Public Services Bot 💬' : 'بوت الخدمات العامة 💬';
    }

    // --------------------------------------------------------
    // تحديث ترجمة بطاقات السلايدر (Mini Cards)
    // --------------------------------------------------------
    const sliderCards = document.querySelectorAll('.mini-card');
    const sliderBtnText = lang === 'en' ? 'Go' : 'انتقال';
    const currentSliderData = sliderTranslations[lang];

    if (currentSliderData && sliderCards.length > 0) {
      sliderCards.forEach((card, index) => {
        // نستخدم باقي القسمة للتعامل مع البطاقات المنسخة (Clones)
        const realIndex = index % currentSliderData.length;
        const data = currentSliderData[realIndex];
        
        if (data) {
          const titleEl = card.querySelector('h5');
          const descEl = card.querySelector('p');
          const btnEl = card.querySelector('.btn');

          if (titleEl) titleEl.textContent = data.title;
          if (descEl) descEl.textContent = data.desc;
          if (btnEl) btnEl.textContent = sliderBtnText;
        }
      });
    }

    // --------------------------------------------------------
    // تحديث باقي نصوص الصفحة
    // --------------------------------------------------------
    if (lang === "en") {
      document.querySelectorAll('.service-card button').forEach(btn => btn.textContent = 'Continue');
      if(mainTitle) mainTitle.textContent = "Welcome to the Public Services Platform";
      if(mainDesc) mainDesc.textContent = "Choose the type of service you want from the menu above";
      
      const titlesEn = [
        "Government Services", "Banking Services", "Insurance & Claims",
        "Ministry of Commerce Services", "Qiwa Platform Services", "Citizen Account Services",
        "Educational Services", "Municipal Services", "Social Security"
      ];
      cards.forEach((el, index) => { if(titlesEn[index]) el.textContent = titlesEn[index]; });

      const descEn = [
        "Learn how to fill out official government forms.",
        "Learn how to make deposits, print cards, and more.",
        "Learn how to choose the right insurance company and submit claims.",
        "Learn about Ministry of Commerce services such as issuing and updating commercial registrations.",
        "Main Qiwa services such as work permits, employee transfer, and contract attestation.",
        "How to register, update information, and check eligibility in the Citizen Account program.",
        "Learn how to access Noor, Madrasati, and other educational platforms.",
        "Learn how to issue municipal licenses and follow up transactions electronically.",
        "Learn how to register for Social Security and check your support status."
      ];
      cardTexts.forEach((el, index) => { if(descEn[index]) el.textContent = descEn[index]; });

      if (newsTitle) newsTitle.textContent = "Latest Orders and Decisions";
      if (newsSlider) {
        newsSlider.innerHTML = `
          <a href="https://www.spa.gov.sa/news/tags/4" target="_blank" class="list-group-item">Cabinet session chaired by the Crown Prince on Saudization of professions (Nov 4, 2025)</a>
          <a href="https://www.spa.gov.sa/news/tags/3?page=1" target="_blank" class="list-group-item">Royal Decree No. (M/73) appointing a new Grand Mufti (Nov 7, 2025)</a>
          <a href="https://uqn.gov.sa/" target="_blank" class="list-group-item">Amendment to the table of violations and penalties of the Labor Law (latest HRSD update)</a>
          <a href="https://www.spa.gov.sa/news/tags/5" target="_blank" class="list-group-item">Ministry of Education launches the Smart Schools Initiative across all regions (Nov 15, 2025)</a>
          <a href="https://www.spa.gov.sa/news/tags/8" target="_blank" class="list-group-item">Ministry of Health launches the second phase of the National Health Transformation Program (Nov 20, 2025)</a>
          <a href="https://www.spa.gov.sa/news/tags/1" target="_blank" class="list-group-item">SDAIA launches a new digital platform to serve citizens (Nov 25, 2025)</a>
        `;
      }
      document.getElementById('menuList').innerHTML = menus.en;
      footerContent.innerHTML = footerText.en;

    } else {
      // عربي
      if(mainTitle) mainTitle.textContent = "مرحباً بك في منصة الخدمات العامة";
      if(mainDesc) mainDesc.textContent = "اختر نوع الخدمة التي ترغب بالوصول إليها من القائمة أعلاه";
      document.querySelectorAll('.service-card button').forEach(btn => btn.textContent = 'للمتابعة');
     
     const titlesAr = [
        "الخدمات الحكومية", "الخدمات البنكية", "التأمين والمطالبات",
        "خدمات وزارة التجارة", "خدمات منصة قوى", "خدمات حساب المواطن",
        "الخدمات التعليمية", "الخدمات البلدية", "الضمان الاجتماعي"
      ];
      cards.forEach((el, index) => { if(titlesAr[index]) el.textContent = titlesAr[index]; });

      const descAr = [
        "تستطيع في هذه الخدمة التعلم طريقة ملئ النماذج الحكومية الرسمية.",
        "تستطيع في هذه الخدمة التعلم طريقة الايداع وطباعة البطاقات وغيرها.",
        "تستطيع في هذه الخدمة التعلم طريقة التامين والاختيار ومطالبة الشركات.",
        "تعرف على خدمات وزارة التجارة مثل إصدار السجل التجاري وتحديث بياناته.",
        "خطوات استخدام منصة قوى مثل تسديد الرسوم ونقل خدمات العامل وتوثيق العقود.",
        "شرح التسجيل في حساب المواطن وتحديث البيانات وحل المشاكل الشائعة.",
        "تستطيع عبر هذه الخدمة التعلم كيفية الدخول إلى منصة نور ومتابعة الأبناء عبر المنصة.",
        "تعرف على طريقة استخراج الرخص البلدية وتقديم البلاغات والشكاوى.",
        "تعرف على خطوات التسجيل والاستعلام عن الدعم والمساعدات."
      ];
      cardTexts.forEach((el, index) => { if(descAr[index]) el.textContent = descAr[index]; });

      if (newsTitle) newsTitle.textContent = "اخر الاخبار السعودية";
      if (newsSlider) {
        newsSlider.innerHTML = `
          <a href="https://www.spa.gov.sa/news/tags/4" target="_blank" class="list-group-item">جلسة مجلس الوزراء برئاسة ولي العهد حول توطين المهن (4 نوفمبر 2025)</a>
          <a href="https://www.spa.gov.sa/news/tags/3?page=1" target="_blank" class="list-group-item">مرسوم ملكي رقم (م/73) بتعيين مفتي عام جديد (7 نوفمبر 2025)</a>
          <a href="https://uqn.gov.sa/" target="_blank" class="list-group-item">تعديل جدول المخالفات والعقوبات لنظام العمل (أحدث تحديث HRSD)</a>
          <a href="https://www.spa.gov.sa/news/tags/5" target="_blank" class="list-group-item">وزارة التعليم تعلن إطلاق مبادرة المدارس الذكية في جميع المناطق (15 نوفمبر 2025)</a>
          <a href="https://www.spa.gov.sa/news/tags/8" target="_blank" class="list-group-item">وزارة الصحة تبدأ المرحلة الثانية من برنامج التحول الصحي الوطني (20 نوفمبر 2025)</a>
          <a href="https://www.spa.gov.sa/news/tags/1" target="_blank" class="list-group-item">الهيئة السعودية للبيانات والذكاء الاصطناعي تطلق منصة رقمية جديدة لخدمة المواطنين (25 نوفمبر 2025)</a>
        `;
      }
      document.getElementById('menuList').innerHTML = menus.ar;
      footerContent.innerHTML = footerText.ar;
    }
    document.dispatchEvent(new CustomEvent('languageChanged'));
  }

  // تهيئة القوائم واللغة والوضع
  menuList.innerHTML = menus.ar;
  footerContent.innerHTML = footerText.ar;
  const savedLang = localStorage.getItem('lang') || 'ar';
  switchLanguage(savedLang);
  langSwitch.textContent = savedLang === 'ar' ? 'EN' : 'AR';

  const savedMode = localStorage.getItem('mode') || 'dark';
  const nav = document.querySelector('nav');
  if (savedMode === 'light') {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    nav.classList.add('navbar-light-mode');
    nav.classList.remove('navbar-dark-mode');
  } else {
    document.body.classList.add('dark-mode');
    nav.classList.add('navbar-dark-mode');
    nav.classList.remove('navbar-light-mode');
  }

  // أحداث أزرار التبديل
  modeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
    nav.classList.toggle('navbar-light-mode');
    nav.classList.toggle('navbar-dark-mode');
    localStorage.setItem('mode', document.body.classList.contains('light-mode') ? 'light' : 'dark');
  });

  langSwitch.addEventListener('click', () => {
    const current = localStorage.getItem('lang') || 'ar';
    const next = current === 'ar' ? 'en' : 'ar';
    localStorage.setItem('lang', next);
    switchLanguage(next);
    langSwitch.textContent = next === 'ar' ? 'EN' : 'AR';
  });

  // =========================================================
  //  بيانات المودال (التفاصيل)
  // =========================================================
  const detailsData = {
    ar: [
      {
        title: "الخدمات الحكومية",
        body: `
          <p>تستطيع في هذه الخدمة التعلم طريقة ملئ النماذج الحكومية الرسمية.</p>
          <ul>
            <li><a href="civil_forms.html" class="text-decoration-none text-primary">نماذج الأحوال المدنية</a></li>
            <li><a href="passport_forms.html" class="text-decoration-none text-primary">نماذج إصدار وتجديد الجوازات وخدمات المقيمين</a></li>
            <li><a href="traffic_forms.html" class="text-decoration-none text-primary">نماذج المرور إصدار لوحات وإسقاط تالف</a></li>
            <li><a href="najiz.html" class="text-decoration-none text-primary">خدمات ناجز والمحاكم الإلكترونية</a></li>
          </ul>
        `
      },
      {
        title: "الخدمات البنكية",
        body: `
          <p>تستطيع في هذه الخدمة التعلم طريقة الايداع وطباعة البطاقات وغيرها.</p>
          <ul>
            <li><a href="bank_alahli.html" class="text-decoration-none text-primary">البنك الأهلي السعودي</a></li>
            <li><a href="bank_alrajhi.html" class="text-decoration-none text-primary">مصرف الراجحي</a></li>
            <li><a href="bank_riyad.html" class="text-decoration-none text-primary">بنك الرياض</a></li>
          </ul>
        `
      },
      {
        title: "التأمين والمطالبات",
        body: `
          <p>تستطيع في هذه الخدمة التعلم طريقة اختيار الشركات وطريقة المطالبات.</p>
          <ul>
            <li><a href="bekare.html" class="text-decoration-none text-primary">منصة بي كير</a></li>
            <li><a href="taaminy.html" class="text-decoration-none text-primary">منصة تأميني</a></li>
            <li><a href="Najm_website.html" class="text-decoration-none text-primary">موقع نجم ومطالبات التأمين</a></li>
          </ul>
        `
      },
      {
        title: "خدمات وزارة التجارة",
        body: `
         <p>خدمات وزارة التجارة مثل إصدار السجل التجاري، تجديده، تعديله وشطبه.</p>
         <ul>
           <li><a href="commerce.html" class="text-decoration-none text-primary">الدخول لخدمات السجل التجاري والأسماء التجارية</a></li>
         </ul>
       `
      },
      {
        title: "خدمات منصة قوى",
        body: `
          <p>شرح أهم خدمات منصة قوى مثل إصدار وتجديد رخص العمل، نقل خدمات العامل، وتوثيق العقود.</p>
          <ul>
           <li><a href="qiwa.html" class="text-decoration-none text-primary">شرح نقل الكفالة وتوثيق العقود ورخص العمل</a></li>
         </ul>
       `
      },
      {
        title: "خدمات حساب المواطن",
        body: `
          <p>خطوات التسجيل في حساب المواطن، إضافة التابعين، وتحديث البيانات والاستعلام عن الأهلية.</p>
          <ul>
           <li><a href="citizen.html" class="text-decoration-none text-primary">دليل التسجيل والإفصاح عن الدخل والاعتراضات</a></li>
         </ul>
       `
      },
      {
        title: "الخدمات التعليمية",
        body: `
          <p>تستطيع عبر هذه الخدمة التعلم كيفية الدخول إلى منصة نور ومتابعة الأبناء عبر المنصة.</p>
          <ul>
            <li><a href="education.html" class="text-decoration-none text-primary">الدخول إلى نظام نور وإضافة طالب جديد</a></li>
          </ul>
        `
      },
      {
        title: "الخدمات البلدية",
        body: `
          <p>تستطيع عبر هذه الخدمة التعلم كيفية إصدار الرخص ومتابعة المعاملات البلدية إلكترونيًا.</p>
          <ul>
            <li><a href="municipal.html" class="text-decoration-none text-primary">إصدار الرخص ومتابعة المعاملات البلدية</a></li>
          </ul>
        `
      },
      {
        title: "الضمان الاجتماعي",
        body: `
          <p>تستطيع عبر هذه الخدمة التعلم كيفية التسجيل في الضمان الاجتماعي والاستعلام عن الدعم.</p>
          <ul>
            <li><a href="social.html" class="text-decoration-none text-primary">التسجيل والاستعلام عن حالة الضمان الاجتماعي</a></li>
          </ul>
        `
      }
    ],
    en: [
      {
        title: "Government Services",
        body: `
          <p>Through this service, you can learn how to fill out official government forms.</p>
          <ul>
            <li><a href="civil_forms.html" class="text-decoration-none text-primary">Civil Affairs Forms</a></li>
            <li><a href="passport_forms.html" class="text-decoration-none text-primary">Passport and Residency Services</a></li>
            <li><a href="traffic_forms.html" class="text-decoration-none text-primary">Traffic Forms</a></li>
            <li><a href="najiz.html" class="text-decoration-none text-primary">Najiz and Electronic Court Services</a></li>
          </ul>
        `
      },
      {
        title: "Banking Services",
        body: `
          <p>Through this service, you can learn how to make deposits, print cards, and more.</p>
          <ul>
            <li><a href="bank_alahli.html" class="text-decoration-none text-primary">SNB – The Saudi National Bank</a></li>
            <li><a href="bank_alrajhi.html" class="text-decoration-none text-primary">Al Rajhi Bank</a></li>
            <li><a href="bank_riyad.html" class="text-decoration-none text-primary">Riyad Bank</a></li>
          </ul>
        `
      },
      {
        title: "Insurance and Claims",
        body: `
          <p>Through this service, you can learn how to choose the right insurance company and submit claims.</p>
          <ul>
            <li><a href="bekare.html" class="text-decoration-none text-primary">Bcare Platform</a></li>
            <li><a href="taaminy.html" class="text-decoration-none text-primary">Tameeni Platform</a></li>
            <li><a href="Najm_website.html" class="text-decoration-none text-primary">Najm website and insurance claims</a></li>
          </ul>
        `
      },
      {
        title: "Ministry of Commerce Services",
        body: `
           <p>Ministry of Commerce services such as issuing, renewing, modifying, and canceling commercial registrations.</p>
           <ul>
             <li><a href="commerce.html" class="text-decoration-none text-primary">Commercial Registration & Trade Names</a></li>
           </ul>
       `
      },
      {
        title: "Qiwa Platform Services",
        body: `
          <p>Main Qiwa services such as issuing work permits, transferring employees, and contract attestation.</p>
          <ul>
             <li><a href="qiwa.html" class="text-decoration-none text-primary">Employee Transfer, Contracts & Work Permits</a></li>
           </ul>
       `
      },
      {
        title: "Citizen Account Services",
        body: `
          <p>How to register, update information, and check eligibility in the Citizen Account program.</p>
          <ul>
             <li><a href="citizen.html" class="text-decoration-none text-primary">Registration, Income Disclosure & Objections</a></li>
           </ul>
       `
      },
      {
        title: "Educational Services",
        body: `
          <p>Through this service, you can learn how to access the Noor system, Madrasati platform, and Safeer system.</p>
          <ul><li><a href="education.html" class="text-decoration-none text-primary">Noor System</a></li></ul>
        `
      },
      {
        title: "Municipal Services",
        body: `
          <p>Through this service, you can learn how to issue licenses and follow up on municipal transactions electronically.</p>
          <ul><li><a href="municipal.html" class="text-decoration-none text-primary">Issue licenses and follow municipal transactions</a></li></ul>
        `
      },
      {
        title: "Social Security",
        body: `
          <p>Through this service, you can learn how to register for Social Security and check your support status.</p>
          <ul><li><a href="social.html" class="text-decoration-none text-primary">Register and check your Social Security status</a></li></ul>
        `
      }
    ]
  };

  const modalEl = document.getElementById('detailsModal');
  const modal = new bootstrap.Modal(modalEl);
  const detailsTitle = document.getElementById('detailsTitle');
  const detailsBody = document.getElementById('modalDetailsBody');

  function showDetails(index) {
    const lang = localStorage.getItem('lang') || 'ar';
    const data = detailsData[lang][index];
    detailsTitle.textContent = data.title;
    detailsBody.innerHTML = data.body;
    modal.show();
  }

  const detailButtons = document.querySelectorAll('.service-card button');
  function attachModalButtons() {
    detailButtons.forEach((btn, i) => {
      btn.removeEventListener('click', btn._listener);
      btn._listener = () => showDetails(i);
      btn.addEventListener('click', btn._listener);
    });
  }
  attachModalButtons();
  document.addEventListener('languageChanged', () => setTimeout(attachModalButtons, 50));

  // =========================================================
  //  البحث (Search) - تم التعديل هنا
  // =========================================================
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const searchResults = document.getElementById('searchResults'); // تم الاحتفاظ به لغرض التنظيف

  // تعريف Modal البحث الجديد (الذي تم إضافته في index.html)
  const searchModalEl = document.getElementById('searchModal');
  const searchModal = new bootstrap.Modal(searchModalEl);
  const searchModalTitle = document.getElementById('searchModalTitle');
  const searchModalBody = document.getElementById('modalSearchResultsBody');


  function performSearch(query) {
    const lang = localStorage.getItem('lang') || 'ar';
    const isArabic = lang === 'ar';

    if (!query.trim()) {
      // إذا كان الاستعلام فارغًا، افتح Modal برسالة خطأ
      searchModalTitle.textContent = isArabic ? `نتائج البحث` : `Search Results`;
      searchModalBody.innerHTML = isArabic ? 
        `<p class="mt-3 text-muted">الرجاء إدخال كلمة بحث صحيحة.</p>` : 
        `<p class="mt-3 text-muted">Please enter a valid search term.</p>`;
      searchModal.show();
      return;
    }
    
    const lowerQuery = query.toLowerCase();
    
    let cardResults = '';
    let menuResults = '';
    let newsResults = '';
    let hasResults = false;

    // ----------------- منطق البحث (نفس المنطق السابق) -----------------
    const currentDetailsData = detailsData[lang];
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, idx) => {
      const title = (card.querySelector('h2')?.textContent || '').toLowerCase();
      const desc = (card.querySelector('p')?.textContent || '').toLowerCase();
      let modalContent = '';
      if (currentDetailsData[idx]) {
        modalContent = (currentDetailsData[idx].body || '').toLowerCase();
      }
      if (title.includes(lowerQuery) || desc.includes(lowerQuery) || modalContent.includes(lowerQuery)) {
        const cardTitle = card.querySelector('h2')?.textContent || '';
        const cardDesc = (card.querySelector('p')?.textContent || '').substring(0, 60) + '...';
        // يجب أن تعمل showDetails في السياق العام للصفحة (Global Scope)
        cardResults += `<a href="#" class="list-group-item list-group-item-action" data-index="${idx}" onclick="showDetails(${idx}); searchModal.hide(); return false;">${cardTitle} - ${cardDesc}</a>`;
        hasResults = true;
      }
    });

    const menuItems = document.querySelectorAll('#menuList .dropdown-item');
    menuItems.forEach(item => {
      const txt = (item.textContent || '').toLowerCase().trim();
      if (txt.includes(lowerQuery)) {
        menuResults += `<a href="${item.href}" class="list-group-item list-group-item-action" target="_blank">${item.textContent}</a>`;
        hasResults = true;
      }
    });
    
    const newsItems = document.querySelectorAll('.news-slider .list-group-item');
    newsItems.forEach(item => {
      const txt = (item.textContent || '').toLowerCase();
      if (txt.includes(lowerQuery)) {
        newsResults += `<a href="${item.href}" class="list-group-item list-group-item-action" target="_blank">${item.textContent}</a>`;
        hasResults = true;
      }
    });
    // ------------------------------------------------------------------

    let resultsHTML = '';
    if (cardResults) resultsHTML += (isArabic ? '<h6 class="mt-3">الكروت الرئيسية:</h6>' : '<h6 class="mt-3">Main Cards:</h6>') + `<div class="list-group">${cardResults}</div>`;
    if (menuResults) resultsHTML += (isArabic ? '<h6 class="mt-3">القائمة العلوية:</h6>' : '<h6 class="mt-3">Top Menu:</h6>') + `<div class="list-group">${menuResults}</div>`;
    if (newsResults) resultsHTML += (isArabic ? '<h6 class="mt-3">الأخبار:</h6>' : '<h6 class="mt-3">News:</h6>') + `<div class="list-group">${newsResults}</div>`;

    if (!hasResults) resultsHTML = isArabic ? `<p class="mt-3 text-muted">لم يتم العثور على نتائج مطابقة لـ "${query}". جرب كلمات أخرى!</p>` : `<p class="mt-3 text-muted">No matching results for "${query}". Try other words!</p>`;

    // 🚀 تطبيق التغيير: عرض النتائج في Modal
    searchModalTitle.textContent = isArabic ? `نتائج البحث عن: ${query}` : `Search Results for: ${query}`;
    searchModalBody.innerHTML = resultsHTML;
    searchModal.show();
    
    // تنظيف العنصر القديم (اختياري)
    if (searchResults) searchResults.innerHTML = '';
  }

  searchBtn.addEventListener('click', () => performSearch(searchInput.value));
  searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') performSearch(searchInput.value); });

  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(drop => {
    drop.addEventListener('mouseenter', function () {
      const menu = this.querySelector('.dropdown-menu');
      if (menu) { this.classList.add('show'); menu.classList.add('show'); }
    });
    drop.addEventListener('mouseleave', function () {
      const menu = this.querySelector('.dropdown-menu');
      if (menu) { this.classList.remove('show'); menu.classList.remove('show'); }
    });
  });

  const newsContainer = document.querySelector('.news-slider-container');
  if (newsContainer) {
    newsContainer.addEventListener('mouseenter', () => {
      document.querySelector('.news-slider').style.animationPlayState = 'paused';
    });
    newsContainer.addEventListener('mouseleave', () => {
      document.querySelector('.news-slider').style.animationPlayState = 'running';
    });
  }

  // =========================================================
  //  تشات بوت
  // =========================================================
  const icon = document.getElementById('chatbot-icon');
  const chatbox = document.getElementById('chatbox');
  const sendBtn = document.getElementById('sendBtn');
  const chatMessages = document.getElementById('chatMessages');
  const input = document.getElementById('userInput');

  function addMessage(text, sender) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble', sender);
    bubble.innerHTML = text;
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // تعديل: فتح الشات مع رسالة ترحيب حسب اللغة
  icon.addEventListener('click', () => {
    const isHidden = (chatbox.style.display === 'none' || chatbox.style.display === '');
    chatbox.style.display = isHidden ? 'block' : 'none';
    
    // التحقق هل تم الترحيب سابقاً؟
    if (isHidden && !chatbox.dataset.greeted) {
      chatbox.dataset.greeted = 'true';
      
      // تحديد اللغة الحالية
      const currentLang = localStorage.getItem('lang') || 'ar';
      
      // النص المترجم
      const welcomeText = currentLang === 'en' 
        ? "Welcome to Public Services Bot 👋🇸🇦\nType the entity name like: Noor, Balady, or Rajhi."
        : "أهلاً بك في بوت الخدمات العامة 👋🇸🇦\nاكتب اسم الجهة مثل: نور، بلدي، أو راجحي.";

      setTimeout(() => { addMessage(welcomeText, 'bot'); }, 400);
    }
  });

  document.getElementById('closeChat').addEventListener('click', () => { chatbox.style.display = 'none'; });

  async function sendMessage() {
    const msg = input.value.trim();
    if (!msg) return;
    addMessage(msg, 'user');
    input.value = '';
    addMessage('⏳ جاري المعالجة...', 'bot');
    try {
      const res = await fetch('https://khdamat-saudia-bot.onrender.com/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg })
      });
      const data = await res.json();
      chatMessages.lastChild.innerHTML = data.reply || '❌ حدث خطأ في الرد.';
    } catch (err) {
      chatMessages.lastChild.textContent = '⚠️ تعذر الاتصال بالسيرفر.';
    }
  }

  sendBtn.onclick = sendMessage;
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendMessage(); });

  document.dispatchEvent(new CustomEvent('languageChanged'));

  // =========================================================
  // 🚀 تحريك البطاقات (مصحح للاتجاه العربي RTL) 🚀 - تم استخدام translate3d للتحسين
  // =========================================================
  try {
    const slider = document.getElementById("serviceSlider");
    
    // إذا لم يجد السلايدر، لا يكمل لكي لا يوقف الصفحة
    if (slider) {
      // تنظيف أي نسخ قديمة لتجنب التكرار
      const existingClones = slider.querySelectorAll('.cloned-card');
      existingClones.forEach(clone => clone.remove());
      
      const originalCards = slider.querySelectorAll(".mini-card");
      
      // إذا كانت البطاقات موجودة
      if (originalCards.length > 0) {
        // نسخ أول 4 بطاقات
        const clonesCount = 4;
        for (let i = 0; i < clonesCount; i++) {
          if (originalCards[i]) {
            const clone = originalCards[i].cloneNode(true);
            clone.classList.add('cloned-card');
            slider.appendChild(clone);
          }
        }

        let index = 0;
        const transitionTime = 1000;
        const slideInterval = 3500;

        function moveSlider() {
          if (!originalCards[0]) return; 
          
          const cardWidth = originalCards[0].offsetWidth + 15; 
          index++;
          
          slider.style.transition = `transform ${transitionTime}ms ease-in-out`;

          // ✨ استخدام translate3d لتحسين أداء الحركة ✨
          const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
          const directionMultiplier = isRTL ? 1 : -1; 
          
          slider.style.transform = `translate3d(${index * cardWidth * directionMultiplier}px, 0, 0)`;

          // إعادة التعيين عند النهاية
          if (index >= originalCards.length) {
            setTimeout(() => {
              slider.style.transition = 'none';
              index = 0;
              slider.style.transform = `translate3d(0px, 0, 0)`;
            }, transitionTime);
          }
        }

        setInterval(moveSlider, slideInterval);
      }
    }
  } catch (error) {
    console.error("Slider Error Ignored:", error);
  }

});

// نافذة التنبيه (Disclaimer)
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('disclaimer-modal');
  const okBtn = document.getElementById('disclaimer-ok');
  if (modal && okBtn) {
    if (!localStorage.getItem('disclaimerAccepted')) {
      modal.style.opacity = '1';
      modal.style.visibility = 'visible';
    }
    okBtn.addEventListener('click', () => {
      modal.style.opacity = '0';
      modal.style.visibility = 'hidden';
      localStorage.setItem('disclaimerAccepted', 'true');
    });
  }  
});
// وظيفة showDetails يجب أن تكون متاحة خارج DOMContentLoaded لإمكانية استخدامها في روابط نتائج البحث
// (تم نقلها إلى Global Scope عبر خاصية onclick في روابط نتائج البحث داخل دالة performSearch)

// توفير showDetails في النطاق العام للتشغيل من الـ Modal
window.showDetails = function(index) {
    const detailsData = { /* ... (نسخ بيانات detailsData هنا إذا لم تكن موجودة عالميًا) ... */ };
    const modalEl = document.getElementById('detailsModal');
    const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
    const detailsTitle = document.getElementById('detailsTitle');
    const detailsBody = document.getElementById('modalDetailsBody');
    const lang = localStorage.getItem('lang') || 'ar';
    const data = detailsData[lang][index];
    detailsTitle.textContent = data.title;
    detailsBody.innerHTML = data.body;
    modal.show();
}