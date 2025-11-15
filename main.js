/* main.js - نسخة كاملة ومتكاملة */
/* لا تقم بدمج أكثر من ملف main.js واحد في الصفحة */

document.addEventListener('DOMContentLoaded', function () {
  const modeSwitch = document.getElementById('modeSwitch');
  const langSwitch = document.getElementById('langSwitch');
  const menuList = document.getElementById('menuList');
  const footerContent = document.getElementById('footerContent');
  const brandName = document.getElementById('brandName');

  // القوائم الكاملة (AR / EN)
  const menus = {
    ar: `
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">الخدمات الحكومية</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="https://www.absher.sa/wps/portal/individuals/static/ca-book-appointment/" target="_blank">الأحوال المدنية (حجز موعد)</a></li>
          <li><a class="dropdown-item" href="https://www.absher.sa" target="_blank">الجوازات</a></li>
          <li><a class="dropdown-item" href="https://www.absher.sa" target="_blank">المرور</a></li>
          <li><a class="dropdown-item" href="https://www.moj.gov.sa" target="_blank">المحاكم</a></li>
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
          <li><a class="dropdown-item" href="https://www.tawuniya.com.sa/" target="_blank">مطالبات السيارات</a></li>
          <li><a class="dropdown-item" href="https://www.walaa.com/" target="_blank">تأمين السفر</a></li>
        </ul>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">الخدمات التعليمية</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="https://noor.moe.gov.sa/Noor/Login.aspx?ref=noor" target="_blank">نظام نور</a></li>
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
    en: `
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Government Services</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="https://www.absher.sa/" target="_blank">Absher</a></li>
          <li><a class="dropdown-item" href="https://www.moj.gov.sa/" target="_blank">Najiz</a></li>
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
          <li><a class="dropdown-item" href="https://www.cchi.gov.sa/" target="_blank">Health Insurance</a></li>
          <li><a class="dropdown-item" href="https://www.tawuniya.com.sa/" target="_blank">Car Claims</a></li>
          <li><a class="dropdown-item" href="https://www.walaa.com/" target="_blank">Travel Insurance</a></li>
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
          <li><a class="dropdown-item" href="https://ecrp.balady.gov.sa/" target="_blank">Building Permits</a></li>
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
          <li><a class="dropdown-item" href="https://is.gd/1LHzx2" target="_blank">Traffic Forms</a></li>
          <li><a class="dropdown-item" href="https://is.gd/q2LnKP" target="_blank">Civil Affairs Forms</a></li>
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
        <h5>Website Links</h5>
        <ul class="list-unstyled">
          <li><a href="faq.html" class="text-white text-decoration-none">FAQ</a></li>
          <li><a href="contact.html" class="text-white text-decoration-none">Contact Us</a></li>
          <li><a href="about.html" class="text-white text-decoration-none">About</a></li>
          <li><a href="privacy.html" class="text-white text-decoration-none">Privacy & Terms</a></li>
        </ul>
      </div>
    `
  };

  // switchLanguage: يتحكم بترجمة الصفحة كاملة (العناوين، الأخبار، الفوتر، القوائم)
  function switchLanguage(lang) {
    const mainTitle = document.getElementById("mainTitle");
    const mainDesc = document.getElementById("mainDesc");
    const cards = document.querySelectorAll(".service-card h4");
    const cardTexts = document.querySelectorAll(".service-card p");
    const newsTitle = document.getElementById("newsTitle");
    const newsSlider = document.querySelector(".news-slider");
    const newsItems = [document.getElementById("newsItem1"), document.getElementById("newsItem2"), document.getElementById("newsItem3")];

    if (lang === "en") {
      // نصوص عامة
      document.querySelectorAll('.service-card button').forEach(btn => btn.textContent = 'Continue');
      mainTitle.textContent = "Welcome to the Public Services Platform";
      mainDesc.textContent = "Choose the type of service you want from the menu above";
      if (cards[0]) cards[0].textContent = "Government Services";
      if (cards[1]) cards[1].textContent = "Banking Services";
      if (cards[2]) cards[2].textContent = "Insurance & Claims";
      if (cards[3]) cards[3].textContent = "Educational Services";
      if (cards[4]) cards[4].textContent = "Municipal Services";
      if (cards[5]) cards[5].textContent = "Social Security";

      if (cardTexts[0]) cardTexts[0].textContent = "Civil Affairs, Passports, Traffic, Courts and Foreign Affairs services in one place.";
      if (cardTexts[1]) cardTexts[1].textContent = "Access official Saudi bank links and perform your transactions easily.";
      if (cardTexts[2]) cardTexts[2].textContent = "Information and links to submit claims at various insurance companies.";
      if (cardTexts[3]) cardTexts[3].textContent = "Learn how to access the Noor platform, follow students, and explore educational e-services.";
      if (cardTexts[4]) cardTexts[4].textContent = "Learn how to issue municipal licenses, submit reports, and file complaints.";
      if (cardTexts[5]) cardTexts[5].textContent = "Learn how to register and check support and assistance programs.";

      // أخبار
      if (newsTitle) newsTitle.textContent = "Latest Orders and Decisions";
      if (newsSlider) {
        newsSlider.innerHTML = `
          <a href="https://www.spa.gov.sa/news/tags/4" class="list-group-item" target="_blank">Cabinet session chaired by the Crown Prince on Saudization of professions (Nov 4, 2025)</a>
          <a href="https://www.spa.gov.sa/news/tags/3?page=1" class="list-group-item" target="_blank">Royal Decree No. (M/73) appointing a new Grand Mufti (Nov 7, 2025)</a>
          <a href="https://uqn.gov.sa/" class="list-group-item" target="_blank">Amendment to the table of violations and penalties of the Labor Law (latest HRSD update)</a>
        `;
      }

      // aria labels
      document.querySelectorAll('.service-card button')[0]?.setAttribute('aria-label', 'View Government Services details');
      document.querySelectorAll('.service-card button')[1]?.setAttribute('aria-label', 'View Banking Services details');
      document.querySelectorAll('.service-card button')[2]?.setAttribute('aria-label', 'View Insurance & Claims details');
      document.querySelectorAll('.service-card button')[3]?.setAttribute('aria-label', 'View Educational Services details');
      document.querySelectorAll('.service-card button')[4]?.setAttribute('aria-label', 'View Municipal Services details');
      document.querySelectorAll('.service-card button')[5]?.setAttribute('aria-label', 'View Social Security details');

      // فوتر و منيو
      document.getElementById('menuList').innerHTML = menus.en;
      footerContent.innerHTML = footerText.en;

    } else {
      // عربي - نصوص أصلية
      document.querySelectorAll('.service-card button').forEach(btn => btn.textContent = 'للمتابعة');
      if (mainTitle) mainTitle.textContent = "مرحباً بك في منصة الخدمات العامة";
      if (mainDesc) mainDesc.textContent = "اختر نوع الخدمة التي ترغب بالوصول إليها من القائمة أعلاه";
      if (cards[0]) cards[0].textContent = "الخدمات الحكومية";
      if (cards[1]) cards[1].textContent = "الخدمات البنكية";
      if (cards[2]) cards[2].textContent = "التأمين والمطالبات";
      if (cards[3]) cards[3].textContent = "الخدمات التعليمية";
      if (cards[4]) cards[4].textContent = "الخدمات البلدية";
      if (cards[5]) cards[5].textContent = "الضمان الاجتماعي";

      if (cardTexts[0]) cardTexts[0].textContent = "تستطيع في هذه الخدمة التعلم طريقة ملئ النماذج الحكومية الرسمية.";
      if (cardTexts[1]) cardTexts[1].textContent = "تستطيع في هذه الخدمة التعلم طريقة الايداع وطباعة البطاقات وغيرها.";
      if (cardTexts[2]) cardTexts[2].textContent = "تستطيع في هذه الخدمة التعلم طريقة التامين والاختيار ومطالبة الشركات.";
      if (cardTexts[3]) cardTexts[3].textContent = "تستطيع عبر هذه الخدمة التعلم كيفية الدخول إلى منصة نور ومتابعة الأبناء عبر المنصة.";
      if (cardTexts[4]) cardTexts[4].textContent = "تعرف على طريقة استخراج الرخص البلدية وتقديم البلاغات والشكاوى.";
      if (cardTexts[5]) cardTexts[5].textContent = "تعرف على خطوات التسجيل والاستعلام عن الدعم والمساعدات.";

      // أخبار عربي
      if (newsTitle) newsTitle.textContent = "اخر الاخبار الملكية";
      if (newsSlider) {
        newsSlider.innerHTML = `
          <a href="https://www.spa.gov.sa/news/tags/4" class="list-group-item" target="_blank">جلسة مجلس الوزراء برئاسة ولي العهد حول توطين المهن (4 نوفمبر 2025)</a>
          <a href="https://www.spa.gov.sa/news/tags/3?page=1" class="list-group-item" target="_blank">مرسوم ملكي رقم (م/73) بتعيين مفتي عام جديد (7 نوفمبر 2025)</a>
          <a href="https://uqn.gov.sa/" class="list-group-item" target="_blank">تعديل جدول المخالفات والعقوبات لنظام العمل (أحدث تحديث HRSD)</a>
        `;
      }

      // aria labels
      document.querySelectorAll('.service-card button')[0]?.setAttribute('aria-label', 'عرض تفاصيل الخدمات الحكومية');
      document.querySelectorAll('.service-card button')[1]?.setAttribute('aria-label', 'عرض تفاصيل الخدمات البنكية');
      document.querySelectorAll('.service-card button')[2]?.setAttribute('aria-label', 'عرض تفاصيل التأمين والمطالبات');
      document.querySelectorAll('.service-card button')[3]?.setAttribute('aria-label', 'عرض تفاصيل الخدمات التعليمية');
      document.querySelectorAll('.service-card button')[4]?.setAttribute('aria-label', 'عرض تفاصيل الخدمات البلدية');
      document.querySelectorAll('.service-card button')[5]?.setAttribute('aria-label', 'عرض تفاصيل الضمان الاجتماعي');

      document.getElementById('menuList').innerHTML = menus.ar;
      footerContent.innerHTML = footerText.ar;
    }

    // أرسل إشعار لتحديث أي عناصر معتمدة على اللغة
    document.dispatchEvent(new CustomEvent('languageChanged'));
  }

  // تهيئة القوائم والفوتر واللغة المحفوظة
  menuList.innerHTML = menus.ar;
  footerContent.innerHTML = footerText.ar;

  const savedLang = localStorage.getItem('lang') || 'ar';
  switchLanguage(savedLang);
  // زر اللغة: نعرض رمز الزر المعاكس
  langSwitch.textContent = savedLang === 'ar' ? 'EN' : 'AR';

  // حفظ وضع المود
  const savedMode = localStorage.getItem('mode') || 'dark';
  if (savedMode === 'light') {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    document.querySelector('nav').classList.add('navbar-light-mode');
    document.querySelector('nav').classList.remove('navbar-dark-mode');
  } else {
    document.body.classList.add('dark-mode');
    document.querySelector('nav').classList.add('navbar-dark-mode');
    document.querySelector('nav').classList.remove('navbar-light-mode');
  }

  // تفعيل الزرين
  modeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('navbar-light-mode');
    document.querySelector('nav').classList.toggle('navbar-dark-mode');
    localStorage.setItem('mode', document.body.classList.contains('light-mode') ? 'light' : 'dark');
  });

  langSwitch.addEventListener('click', () => {
    // اقلب لغة التخزين
    const current = localStorage.getItem('lang') || 'ar';
    const next = current === 'ar' ? 'en' : 'ar';
    localStorage.setItem('lang', next);
    switchLanguage(next);
    langSwitch.textContent = next === 'ar' ? 'EN' : 'AR';
  });

  // بيانات الـ modal باللغتين
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
            <li><a href="traffic_forms.html" class="text-decoration-none text-primary">Traffic Forms – Plate Issuance and Damage Replacement</a></li>
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

  // modal helpers
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

  // attach modal buttons (service cards)
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

  // search
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const searchResults = document.getElementById('searchResults');

  function performSearch(query) {
    if (!query.trim()) { searchResults.innerHTML = ''; return; }
    const lowerQuery = query.toLowerCase();
    const lang = localStorage.getItem('lang') || 'ar';
    const isArabic = lang === 'ar';
    let resultsHTML = '';
    let hasResults = false;

    // search cards
    const cards = document.querySelectorAll('.service-card');
    let cardResults = '';
    cards.forEach((card, idx) => {
      const title = (card.querySelector('h4')?.textContent || '').toLowerCase();
      const desc = (card.querySelector('p')?.textContent || '').toLowerCase();
      if (title.includes(lowerQuery) || desc.includes(lowerQuery)) {
        const cardTitle = card.querySelector('h4')?.textContent || '';
        const cardDesc = (card.querySelector('p')?.textContent || '').substring(0, 60) + '...';
        cardResults += `<a href="#" class="list-group-item list-group-item-action" onclick="showDetails(${idx}); return false;">${cardTitle} - ${cardDesc}</a>`;
        hasResults = true;
      }
    });
    if (cardResults) resultsHTML += (isArabic ? '<h6 class="mt-3">الكروت:</h6>' : '<h6 class="mt-3">Cards:</h6>') + `<div class="list-group">${cardResults}</div>`;

    // search menu
    const menuItems = document.querySelectorAll('.dropdown-item');
    let menuResults = '';
    menuItems.forEach(item => {
      const txt = (item.textContent || '').toLowerCase().trim();
      if (txt.includes(lowerQuery)) {
        menuResults += `<a href="${item.href}" class="list-group-item list-group-item-action" target="_blank">${item.textContent}</a>`;
        hasResults = true;
      }
    });
    if (menuResults) resultsHTML = (isArabic ? '<h6 class="mt-3">القائمة:</h6>' : '<h6 class="mt-3">Menu:</h6>') + `<div class="list-group">${menuResults}</div>` + resultsHTML;

    // search news
    const newsItems = document.querySelectorAll('.news-slider .list-group-item');
    let newsResults = '';
    newsItems.forEach(item => {
      const txt = (item.textContent || '').toLowerCase();
      if (txt.includes(lowerQuery)) {
        newsResults += `<a href="${item.href}" class="list-group-item list-group-item-action">${item.textContent}</a>`;
        hasResults = true;
      }
    });
    if (newsResults) resultsHTML = (isArabic ? '<h6 class="mt-3">الأخبار:</h6>' : '<h6 class="mt-3">News:</h6>') + `<div class="list-group">${newsResults}</div>` + resultsHTML;

    if (!hasResults) resultsHTML = isArabic ? `<p class="mt-3 text-muted">لم يتم العثور على نتائج مطابقة لـ "${query}". جرب كلمات أخرى!</p>` : `<p class="mt-3 text-muted">No matching results for "${query}". Try other words!</p>`;

    const resultsTitle = isArabic ? '<h5 class="mt-3">النتائج:</h5>' : '<h5 class="mt-3">Results:</h5>';
    searchResults.innerHTML = resultsTitle + resultsHTML;
  }

  searchBtn.addEventListener('click', () => performSearch(searchInput.value));
  searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') performSearch(searchInput.value); });

  // فتح قوائم بالماوس
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

  // ===================== أخبار - سلايدر عمودي بسيط (CSS animation used) =====================
  // لا حاجة لكود JS إضافي هنا لأننا نعتمد على animation في CSS.
  // لكن لو رغبت بتوقف عند hover أو إعادة تشغيل، نضيف ذلك:
  const newsContainer = document.querySelector('.news-slider-container');
  if (newsContainer) {
    newsContainer.addEventListener('mouseenter', () => {
      document.querySelector('.news-slider').style.animationPlayState = 'paused';
    });
    newsContainer.addEventListener('mouseleave', () => {
      document.querySelector('.news-slider').style.animationPlayState = 'running';
    });
  }

  // ===================== Chatbot (بسيط: ارسال إلى API خارجي) =====================
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

  icon.addEventListener('click', () => {
    const isHidden = (chatbox.style.display === 'none' || chatbox.style.display === '');
    chatbox.style.display = isHidden ? 'block' : 'none';
    if (isHidden && !chatbox.dataset.greeted) {
      chatbox.dataset.greeted = 'true';
      setTimeout(() => { addMessage('أهلًا بك في بوت الخدمات العامة 👋🇸🇦\nاكتب اسم الجهة مثل: نور، بلدي، أو راجحي.', 'bot'); }, 400);
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

  // ===================== Accessibility - aria labels initial =====================
  document.querySelectorAll('.service-card button')[0]?.setAttribute('aria-label', 'عرض تفاصيل الخدمات الحكومية');
  document.querySelectorAll('.service-card button')[1]?.setAttribute('aria-label', 'عرض تفاصيل الخدمات البنكية');
  document.querySelectorAll('.service-card button')[2]?.setAttribute('aria-label', 'عرض تفاصيل التأمين والمطالبات');
  document.querySelectorAll('.service-card button')[3]?.setAttribute('aria-label', 'عرض تفاصيل الخدمات التعليمية');
  document.querySelectorAll('.service-card button')[4]?.setAttribute('aria-label', 'عرض تفاصيل الخدمات البلدية');
  document.querySelectorAll('.service-card button')[5]?.setAttribute('aria-label', 'عرض تفاصيل الضمان الاجتماعي');

  // ===================== Safety: dispatch initial languageChanged to sync dependant parts =====================
  document.dispatchEvent(new CustomEvent('languageChanged'));
}); // end DOMContentLoaded
