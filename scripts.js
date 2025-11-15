/* ========================== تهيئة مبكرة تمنع الوميض ========================== */
// نضبط اللغة/الاتجاه والوضع فورًا قبل أي تنفيذ آخر

document.addEventListener('DOMContentLoaded', function () {
  // 1. 👈 انقل تعاريف المتغيرات إلى هنا!
  const earlyLang = localStorage.getItem('lang') || 'ar';
  const earlyMode = localStorage.getItem('mode') || 'dark'; 

  // 2. يتم استخدامها الآن في نطاقها بشكل صحيح
  const modeSwitch = document.getElementById('modeSwitch');
  const langSwitch = document.getElementById('langSwitch');
  const brandName = document.getElementById('brandName');
  const homeLink = document.getElementById('homeLink');
  const navEl = document.querySelector('nav');
  if (!modeSwitch || !langSwitch) {
    console.warn('⚠️ عناصر الرأس (modeSwitch/langSwitch) غير موجودة في الصفحة الحالية.');
    // حتى لو غاب الهيدر، نبقي التهيئة المبكرة مفعّلة فلا يحصل وميض
    return;
  }
  // 🌐 دالة التبديل الموحدة
  function switchLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'en') ? 'ltr' : 'rtl';

    if (lang === 'en') {
      langSwitch.textContent = 'AR';
//      if (brandName) brandName.textContent = 'Public Services';
      if (homeLink) homeLink.textContent = 'Home';
      const homeNav = document.querySelector('.nav-link');
      if (homeNav && !homeLink) homeNav.textContent = 'Home';
    } else {
      langSwitch.textContent = 'EN';
  //    if (brandName) brandName.textContent = 'الخدمات العامة';
//      if (homeLink) homeLink.textContent = 'الرئيسية';
      const homeNav = document.querySelector('.nav-link');
      if (homeNav && !homeLink) homeNav.textContent = 'الرئيسية';
    }
  }

  // 🌙☀️ استرجاع الوضع المحفوظ (مع احترام التهيئة المبكرة)
  const savedMode = localStorage.getItem('mode') || earlyMode;
  // نضمن تزامن الـ <nav> مع وضع الصفحة
  if (navEl) {
    // إزالة أي فئات متعارضة أولاً
    navEl.classList.remove('navbar-dark-mode', 'navbar-light-mode');
    if (document.body.classList.contains('dark-mode')) {
      navEl.classList.add('navbar-dark-mode');
    } else {
      navEl.classList.add('navbar-light-mode');
    }
  }

  // زر التبديل بين الوضعين
  modeSwitch.addEventListener('click', () => {
    const toDark = !document.body.classList.contains('dark-mode'); // إذا كنا في light سيتحول إلى dark
    document.body.classList.toggle('dark-mode', toDark);
    document.body.classList.toggle('light-mode', !toDark);
    if (navEl) {
      navEl.classList.toggle('navbar-dark-mode', toDark);
      navEl.classList.toggle('navbar-light-mode', !toDark);
    }
    localStorage.setItem('mode', toDark ? 'dark' : 'light');
  });

  // 🌐 استرجاع اللغة المحفوظة (نستخدم earlyLang لتطابق الواجهة من أول لحظة)
  const savedLang = localStorage.getItem('lang') || earlyLang;
  switchLanguage(savedLang);

  // عند الضغط على زر اللغة
  langSwitch.addEventListener('click', () => {
    const newLang = langSwitch.textContent === 'EN' ? 'en' : 'ar';
    switchLanguage(newLang);
  });
  // ======================= تمييز الصفحة الحالية =======================
  const page = window.location.pathname;

  // قسم عام للعناوين الرئيسية (مشتركة في معظم الصفحات)
  const mainTitle = document.getElementById('mainTitle');
  const mainDesc = document.getElementById('mainDesc');
  const footerBottom = document.getElementById('footerBottom');

  function updateCommonText(lang) {
    if (mainTitle && mainDesc && footerBottom) {
      if (lang === 'en') {
        footerBottom.textContent = "©2025 All rights reserved for Public Services website";
      } else {
        footerBottom.textContent = "©2025 كافة الحقوق محفوظة لموقع الخدمات العامة";
      }
    }
  }
  updateCommonText(savedLang);

  // ==========================================================
  // 📞 CONTACT PAGE
  // ==========================================================
  if (page.includes('contact.html')) {
    const pageTitle = document.getElementById('pageTitle');
    const contactDesc = document.getElementById('contactDesc');
    const formLabels = document.querySelectorAll('label');
    const submitBtn = document.getElementById('submitBtn');
    const contactHeaders = document.querySelectorAll('.contact-header');
    const contactParagraphs = document.querySelectorAll('.contact-info p');

    function updateContactText(lang) {
      if (pageTitle) pageTitle.textContent = lang === 'en' ? "Contact Us" : "اتصل بنا";
      if (contactDesc)
        contactDesc.textContent = lang === 'en'
          ? "We are happy to serve you and respond to your inquiries. Use the form below or the contact info on the right."
          : "نسعد بخدمتك والإجابة على استفساراتك. يمكنك التواصل معنا عبر النموذج أدناه أو باستخدام المعلومات على اليمين.";

      if (formLabels.length >= 4) {
        formLabels[0].textContent = lang === 'en' ? "Full Name" : "الاسم الكامل";
        formLabels[1].textContent = lang === 'en' ? "Email Address" : "البريد الإلكتروني";
        formLabels[2].textContent = lang === 'en' ? "Subject" : "الموضوع";
        formLabels[3].textContent = lang === 'en' ? "Message" : "الرسالة";
      }

      if (submitBtn) submitBtn.textContent = lang === 'en' ? "Send Message" : "إرسال الرسالة";

      // ترجمة قسم معلومات الاتصال
      if (contactHeaders.length === 4 && contactParagraphs.length === 4) {
        if (lang === 'en') {
          contactHeaders[0].innerHTML = '<i class="fas fa-map-marker-alt me-2"></i>Address';
          contactParagraphs[0].textContent = 'Jeddah, Kingdom of Saudi Arabia';
          contactHeaders[1].innerHTML = '<i class="fas fa-phone me-2"></i>Phone';
          contactParagraphs[1].textContent = '+966577478383';
          contactHeaders[2].innerHTML = '<i class="fas fa-envelope me-2"></i>Email';
          contactParagraphs[2].textContent = 'support@publicservices.sa';
          contactHeaders[3].innerHTML = '<i class="fas fa-clock me-2"></i>Working Hours';
          contactParagraphs[3].textContent = 'Sunday to Thursday, 8 AM - 4 PM';
        } else {
          contactHeaders[0].innerHTML = '<i class="fas fa-map-marker-alt me-2"></i>العنوان';
          contactParagraphs[0].textContent = 'جدة، المملكة العربية السعودية';
          contactHeaders[1].innerHTML = '<i class="fas fa-phone me-2"></i>الهاتف';
          contactParagraphs[1].textContent = '+966577478383';
          contactHeaders[2].innerHTML = '<i class="fas fa-envelope me-2"></i>الإيميل';
          contactParagraphs[2].textContent = 'support@publicservices.sa';
          contactHeaders[3].innerHTML = '<i class="fas fa-clock me-2"></i>ساعات العمل';
          contactParagraphs[3].textContent = 'من الأحد إلى الخميس، 8 صباحاً - 4 مساءً';
        }
      }
    }

    updateContactText(savedLang);
  }
  // ==========================================================
  // ℹ️ ABOUT PAGE
  // ==========================================================
  else if (page.includes('about.html')) {
    const mainTitle = document.getElementById('mainTitle');
    const mainDesc = document.getElementById('mainDesc');
    const missionTitle = document.getElementById('missionTitle');
    const missionText = document.getElementById('missionText');
    const statsTexts = document.querySelectorAll('.stats-card p');
    const startBtn = document.getElementById('startBtn');

    function updateAboutText(lang) {
      if (mainTitle)
        mainTitle.textContent = lang === 'en' ? "About the Platform" : "عن المنصة";

      if (mainDesc)
        mainDesc.textContent = lang === 'en'
          ? "The Public Services platform provides unified access to government, banking, and insurance services, simplifying daily tasks for citizens and residents."
          : "منصة الخدمات العامة توفر وصولًا موحدًا إلى الخدمات الحكومية والبنكية والتأمينية، لتسهيل الإجراءات اليومية للمواطنين والمقيمين.";

      if (missionTitle)
        missionTitle.textContent = lang === 'en' ? "Our Vision" : "رؤيتنا";

      if (missionText)
        missionText.textContent = lang === 'en'
          ? "We aim to simplify daily procedures and enhance digital transformation in Saudi Arabia as part of Vision 2030."
          : "نهدف إلى تبسيط الإجراءات اليومية وتعزيز التحول الرقمي في المملكة العربية السعودية ضمن رؤية 2030.";

      // ترجمة بطاقات الإحصائيات
      if (statsTexts.length >= 4) {
        if (lang === 'en') {
          statsTexts[0].textContent = "Monthly Users";
          statsTexts[1].textContent = "Service Links";
          statsTexts[2].textContent = "Languages";
          statsTexts[3].textContent = "Rating";
        } else {
          statsTexts[0].textContent = "مستخدم شهري";
          statsTexts[1].textContent = "روابط خدمة";
          statsTexts[2].textContent = "لغات";
          statsTexts[3].textContent = "تقييم";
        }
      }

      if (startBtn) startBtn.textContent = lang === 'en' ? "Start Now" : "ابدأ الآن";
    }

    updateAboutText(savedLang);
  }

  // ==========================================================
  // 🏦 BANK ALAHLI PAGE
  // ==========================================================
  else if (page.includes('bank_alahli.html')) {
    const pageTitle = document.getElementById('pageTitle');
    const video1Title = document.getElementById('video1Title');
    const video2Title = document.getElementById('video2Title');
    const video3Title = document.getElementById('video3Title');
    const instructionsTitle = document.getElementById('instructionsTitle');
    const instructionsText = document.getElementById('instructionsText');
    const relatedTitle = document.getElementById('relatedTitle');
    const relatedLinks = document.getElementById('relatedLinks');

    function updateBankAlahliText(lang) {
      if (pageTitle) pageTitle.textContent = lang === 'en' ? "SNB – The Saudi National Bank" : "البنك الأهلي السعودي";
      if (video1Title) video1Title.textContent = lang === 'en' ? "Video 1: Login to SNB Online" : "تسجيل الدخول في الأهلي أونلاين";
      if (video2Title) video2Title.textContent = lang === 'en' ? "Video 2: Transfer Between Accounts" : "التحويل بين الحسابات";
      if (video3Title) video3Title.textContent = lang === 'en' ? "Video 3: Print or Renew ATM Card" : "طباعة أو تجديد بطاقة الصراف";
      if (instructionsTitle) instructionsTitle.textContent = lang === 'en' ? "Instructions" : "الشرح";
      if (instructionsText) instructionsText.textContent = lang === 'en' ?
        "In this page, you can explore the digital banking services of SNB (The Saudi National Bank). These include online login, money transfers between accounts, and renewing or printing your ATM card easily through self-service machines or the mobile app." :
        "في هذه الصفحة يمكنك التعرف على الخدمات الإلكترونية للبنك الأهلي السعودي. تشمل هذه الخدمات تسجيل الدخول إلى حسابك البنكي عبر الإنترنت، تنفيذ التحويلات المالية بين الحسابات، وطباعة أو تجديد بطاقة الصراف الآلي بكل سهولة من خلال أجهزة الخدمة الذاتية أو التطبيق الإلكتروني.";
      if (relatedTitle) relatedTitle.textContent = lang === 'en' ? "Related Links" : "روابط ذات صلة";
      if (relatedLinks) relatedLinks.innerHTML = lang === 'en' ?
        '<a href="https://www.alahli.com/" target="_blank"><i class="fa-solid fa-globe"></i> SNB Official Website</a>' :
        '<a href="https://www.alahli.com/" target="_blank"><i class="fa-solid fa-globe"></i> الموقع الرسمي للبنك الأهلي السعودي</a>';
    }
    updateBankAlahliText(savedLang);
  }

  // ==========================================================
  // 🏦 BANK ALRAJHI PAGE
  // ==========================================================
  else if (page.includes('bank_alrajhi.html')) {
    const pageTitle = document.getElementById('pageTitle');
    const video1Title = document.getElementById('video1Title');
    const video2Title = document.getElementById('video2Title');
    const video3Title = document.getElementById('video3Title');
    const instructionsTitle = document.getElementById('instructionsTitle');
    const instructionsText = document.getElementById('instructionsText');
    const relatedTitle = document.getElementById('relatedTitle');
    const relatedLinks = document.getElementById('relatedLinks');

    function updateBankAlrajhiText(lang) {
      if (pageTitle) pageTitle.textContent = lang === 'en' ? "Al Rajhi Bank" : "مصرف الراجحي";
      if (video1Title) video1Title.textContent = lang === 'en' ? "Video 1: Login to Al Rajhi Online" : "فيديو 1: تسجيل الدخول في الراجحي أونلاين";
      if (video2Title) video2Title.textContent = lang === 'en' ? "Video 2: Local and International Transfers" : "فيديو 2: التحويل المحلي بدون اضافة مستفيد";
      if (video3Title) video3Title.textContent = lang === 'en' ? "Video 3: Issue or Renew Mada Card" : "فيديو 3: إصدار أو تجديد بطاقة مدى";
      if (instructionsTitle) instructionsTitle.textContent = lang === 'en' ? "Instructions" : "الشرح";
      if (instructionsText) instructionsText.textContent = lang === 'en' ?
        "Al Rajhi Bank provides digital banking services allowing customers to manage their accounts easily. With Al Rajhi Online, you can log in, make local or international transfers, and issue or renew your Mada card via self-service machines or the bank website." :
        "يقدم مصرف الراجحي مجموعة من الخدمات البنكية الإلكترونية التي تسهل على العملاء إدارة حساباتهم بسهولة. من خلال \"الراجحي أونلاين\" يمكنك تسجيل الدخول، التحويل داخل الراجحي بدون اضافة مستفيد، وإصدار أو تجديد بطاقة مدى عبر أجهزة الخدمة الذاتية أو من خلال الموقع الإلكتروني.";
      if (relatedTitle) relatedTitle.textContent = lang === 'en' ? "Related Links" : "روابط ذات صلة";
      if (relatedLinks) relatedLinks.innerHTML = lang === 'en' ?
        '<a href="https://www.alrajhibank.com.sa/" target="_blank"><i class="fa-solid fa-globe"></i> Al Rajhi Bank Official Website</a>' :
        '<a href="https://www.alrajhibank.com.sa/" target="_blank"><i class="fa-solid fa-globe"></i> الموقع الرسمي لمصرف الراجحي</a>';
    }
    updateBankAlrajhiText(savedLang);
  }

  // ==========================================================
  // 🏦 BANK RIYAD PAGE
  // ==========================================================
  else if (page.includes('bank_riyad.html')) {
    const pageTitle = document.getElementById('pageTitle');
    const video1Title = document.getElementById('video1Title');
    const video2Title = document.getElementById('video2Title');
    const video3Title = document.getElementById('video3Title');
    const instructionsTitle = document.getElementById('instructionsTitle');
    const instructionsText = document.getElementById('instructionsText');
    const relatedTitle = document.getElementById('relatedTitle');
    const relatedLinks = document.getElementById('relatedLinks');

    function updateBankRiyadText(lang) {
      if (pageTitle) pageTitle.textContent = lang === 'en' ? "Riyad Bank" : "بنك الرياض";
      if (video1Title) video1Title.textContent = lang === 'en' ? "Video 1: Login to Riyad Online" : "فيديو 1: تسجيل الدخول في بنك الرياض أونلاين";
      if (video2Title) video2Title.textContent = lang === 'en' ? "Video 2: Local and International Transfers" : "فيديو 2: التحويل المحلي والدولي";
      if (video3Title) video3Title.textContent = lang === 'en' ? "Video 3: Issue or Renew Mada Card" : "فيديو 3: إصدار أو تجديد بطاقة مدى";
      if (instructionsTitle) instructionsTitle.textContent = lang === 'en' ? "Instructions" : "الشرح";
      if (instructionsText) instructionsText.textContent = lang === 'en' ?
        "Riyad Bank provides comprehensive online banking services for its customers, including secure login, easy local and international transfers, and the ability to issue or renew Mada cards through self-service machines or the bank’s website." :
        "يتيح بنك الرياض خدمات إلكترونية متكاملة لعملائه عبر الإنترنت، تشمل تسجيل الدخول الآمن إلى الحساب البنكي، تنفيذ التحويلات المالية المحلية والدولية بسهولة، وإصدار أو تجديد بطاقات مدى من خلال أجهزة الخدمة الذاتية أو عبر الموقع الإلكتروني للبنك.";
      if (relatedTitle) relatedTitle.textContent = lang === 'en' ? "Related Links" : "روابط ذات صلة";
      if (relatedLinks) relatedLinks.innerHTML = lang === 'en' ?
        '<a href="https://www.riyadbank.com/" target="_blank"><i class="fa-solid fa-globe"></i> Riyad Bank Official Website</a>' :
        '<a href="https://www.riyadbank.com/" target="_blank"><i class="fa-solid fa-globe"></i> الموقع الرسمي لبنك الرياض</a>';
    }
    updateBankRiyadText(savedLang);
  }

  // ==========================================================
  // 📋 CIVIL FORMS PAGE
  // ==========================================================
  else if (page.includes('civil_forms.html')) {
    const pageTitle = document.getElementById('pageTitle');
    const videoTitle = document.getElementById('videoTitle');
    const instructionsTitle = document.getElementById('instructionsTitle');
    const instructionsText = document.getElementById('instructionsText');

    function updateCivilFormsText(lang) {
      if (pageTitle) pageTitle.textContent = lang === 'en' ? "Civil Affairs Forms" : "خطوات تسجيل مولود في ابشر";
      if (videoTitle) videoTitle.textContent = lang === 'en' ? "Tutorial Video: Filling Civil Forms" : "فيديو تعليمي: تعبئة نماذج الأحوال المدنية";
      if (instructionsTitle) instructionsTitle.textContent = lang === 'en' ? "Instructions" : "الشرح";
      if (instructionsText) instructionsText.textContent = lang === 'en' ?
        "Civil affairs forms include applications for birth certificates, marriage, divorce, and death records. Fill in personal details accurately, attach photos and IDs, pay the fee via SADAD. After completion, submit to the nearest Civil Affairs office or upload via Absher platform if available electronically." :
        "تشمل الدخول الى نظام ابشر. قم بتعبئة البيانات الشخصية بدقة،اختار خدماتي ثم الاحوال المدنية واختار اسم المولود وتأكد من البيانات، وبعد إكمال النموذج، اتجه الى طباعة شهادة الميلاد سدد الرسوم التوصيل عبر  الصفحة او عبر السداد.";
    }
    updateCivilFormsText(savedLang);
  }

// ==========================================================
// 🎓 EDUCATION PAGE
// ==========================================================
else if (page.includes('education.html')) {
  const pageTitle = document.getElementById('pageTitle');
  const video1Title = document.getElementById('video1Title');
  const video1Desc = document.getElementById('video1Desc');
  const video2Title = document.getElementById('video2Title');
  const video2Desc = document.getElementById('video2Desc');
  const instructionsTitle = document.getElementById('instructionsTitle');
  const instructionsText = document.getElementById('instructionsText');
  const relatedTitle = document.getElementById('relatedTitle');
  const relatedLinks = document.getElementById('relatedLinks');

  function updateEducationText(lang) {
    if (pageTitle) pageTitle.textContent = lang === 'en' ? "Educational Services" : "الخدمات التعليمية";
    if (video1Title) video1Title.textContent = lang === 'en' ? "Video 1: Login to Noor System" : "فيديو 1: الدخول إلى نظام نور";
    if (video1Desc) video1Desc.textContent = lang === 'en'
      ? "This video explains how to log in to the Noor system using a parent or student account, showing all correct steps."
      : "في هذا الفيديو ستتعرف على طريقة الدخول إلى نظام نور باستخدام حساب ولي الأمر أو الطالب، مع شرح خطوات تسجيل الدخول الصحيحة.";
    if (video2Title) video2Title.textContent = lang === 'en' ? "Video 2: Add a New Student in Noor" : "فيديو 2: إضافة طالب جديد في نظام نور";
    if (video2Desc) video2Desc.textContent = lang === 'en'
      ? "This video shows how to add a new student in the Noor system easily through the parent’s dashboard, selecting the suitable school."
      : "هذا الفيديو يشرح كيفية إضافة طالب جديد في نظام نور بخطوات سهلة وبسيطة من خلال لوحة ولي الأمر، مع تحديد المدرسة المناسبة.";
    if (instructionsTitle) instructionsTitle.textContent = lang === 'en' ? "Instructions" : "الشرح";
    if (instructionsText) instructionsText.textContent = lang === 'en'
      ? "This page provides a simple guide to using the Noor system, from login to adding new students. Watch the videos above for practical understanding."
      : "تقدم هذه الصفحة دليلاً مبسطاً للتعامل مع نظام نور، بدءاً من تسجيل الدخول وحتى إضافة الطلاب الجدد. يمكنك متابعة الفيديوهات أعلاه لفهم الخطوات بشكل عملي.";
    if (relatedTitle) relatedTitle.textContent = lang === 'en' ? "Related Links" : "روابط ذات صلة";
    if (relatedLinks) relatedLinks.innerHTML = lang === 'en'
      ? '<a href="https://noor.moe.gov.sa/" target="_blank"><i class="fa-solid fa-globe"></i> Noor Platform</a><a href="https://schools.madrasati.sa/" target="_blank"><i class="fa-solid fa-globe"></i> Madrasati Platform</a>'
      : '<a href="https://noor.moe.gov.sa/" target="_blank"><i class="fa-solid fa-globe"></i> منصة نور</a><a href="https://schools.madrasati.sa/" target="_blank"><i class="fa-solid fa-globe"></i> منصة مدرستي</a>';
  }

  updateEducationText(savedLang);
}

  // ==========================================================
  // 🛡️ BEKARE PAGE
  // ==========================================================
  else if (page.includes('bekare.html')) {
    const pageTitle = document.getElementById('pageTitle');
    const video1Title = document.getElementById('video1Title');
    const video2Title = document.getElementById('video2Title');
    const video3Title = document.getElementById('video3Title');
    const instructionsTitle = document.getElementById('instructionsTitle');
    const instructionsText = document.getElementById('instructionsText');
    const relatedTitle = document.getElementById('relatedTitle');
    const relatedLinks = document.getElementById('relatedLinks');

    function updateBekareText(lang) {
      if (pageTitle) pageTitle.textContent = lang === 'en' ? "Bcare Platform" : "منصة بي كير";
      if (video1Title) video1Title.textContent = lang === 'en' ? "Video 1: Register on Bcare Platform" : "فيديو 1: التسجيل في منصة بي كير واختيار شركة التأمين المناسبة للمركبات";
      if (video2Title) video2Title.textContent = lang === 'en' ? "Video 2: Choose the Right Insurance Company" : "فيديو 2: اختيار شركة التأمين الطبي للموظفين";
      if (instructionsTitle) instructionsTitle.textContent = lang === 'en' ? "Instructions" : "الشرح";
      if (instructionsText) instructionsText.textContent = lang === 'en' ?
        "The Bcare platform provides complete online services for comparing insurance offers and submitting claims. You can easily register, choose the best insurance for your car or travel, and file claims online without visiting branches." :
        "منصة بي كير توفر خدمات إلكترونية متكاملة لمقارنة عروض شركات التأمين عبر الإنترنت. يمكنك من خلالها التسجيل بسهولة، اختيار التأمين الأنسب لمركبتك او التأمين الطبي لافراد العائلة او العمالة لديك.";
      if (relatedTitle) relatedTitle.textContent = lang === 'en' ? "Related Links" : "روابط ذات صلة";
      if (relatedLinks) relatedLinks.innerHTML = lang === 'en' ?
        '<a href="https://www.bcare.com.sa/" target="_blank"><i class="fa-solid fa-globe"></i> Bcare Official Website</a>' :
        '<a href="https://www.bcare.com.sa/" target="_blank"><i class="fa-solid fa-globe"></i> الموقع الرسمي لمنصة بي كير</a>';
    }
    updateBekareText(savedLang);
  }

  // ==========================================================
  // 🏛️ MUNICIPAL PAGE
  // ==========================================================
  else if (page.includes('municipal.html')) {
    const pageTitle = document.getElementById('pageTitle');
    const video1Title = document.getElementById('video1Title');
    const video2Title = document.getElementById('video2Title');
    const video1Desc = document.getElementById('video1Desc');
    const video2Desc = document.getElementById('video2Desc');
    const instructionsTitle = document.getElementById('instructionsTitle');
    const instructionsText = document.getElementById('instructionsText');
    const relatedTitle = document.getElementById('relatedTitle');
    const relatedLinks = document.getElementById('relatedLinks');

    function updateMunicipalText(lang) {
      if (pageTitle) pageTitle.textContent = lang === 'en' ? "Municipal Services" : "الخدمات البلدية";
      if (video1Title) video1Title.textContent = lang === 'en' ? "Video 1: Obtain a Municipal License via Balady Platform" : "فيديو 1: استخراج رخصة بلدية عبر منصة بلدي";
      if (video2Title) video2Title.textContent = lang === 'en' ? "Video 2: Submit a Complaint or Report via Balady Platform" : "فيديو 2: تقديم بلاغ أو شكوى عبر منصة بلدي";
      if (video1Desc) video1Desc.textContent = lang === 'en' ?
        "This video explains how to obtain a municipal license electronically through the Balady platform in a few simple steps." :
        "يوضح هذا الفيديو خطوات استخراج رخصة بلدية إلكترونيًا من خلال منصة بلدي بخطوات بسيطة وسريعة دون الحاجة لمراجعة الأمانة.";
      if (video2Desc) video2Desc.textContent = lang === 'en' ?
        "This video shows how to submit a report or complaint through the Balady platform or municipality app and track it until resolution." :
        "يشرح هذا الفيديو كيفية تقديم بلاغ أو شكوى عبر منصة بلدي أو تطبيق الأمانة، مع متابعة حالة البلاغ حتى يتم معالجته.";
      if (instructionsTitle) instructionsTitle.textContent = lang === 'en' ? "Instructions" : "الشرح";
      if (instructionsText) instructionsText.textContent = lang === 'en' ?
        "Municipal electronic services allow you to issue licenses, submit reports, and track transactions easily via the Balady platform or municipality website." :
        "توفر الخدمات البلدية الإلكترونية إمكانية استخراج الرخص، وتقديم البلاغات، ومتابعة المعاملات بكل سهولة من خلال منصة بلدي أو عبر موقع الأمانة.";
      if (relatedTitle) relatedTitle.textContent = lang === 'en' ? "Related Links" : "روابط ذات صلة";
      if (relatedLinks) relatedLinks.innerHTML = lang === 'en' ?
        '<a href="https://balady.gov.sa/" target="_blank"><i class="fa-solid fa-globe"></i> Balady Platform</a><a href="https://www.jeddah.gov.sa/" target="_blank"><i class="fa-solid fa-globe"></i> Jeddah Municipality</a>' :
        '<a href="https://balady.gov.sa/" target="_blank"><i class="fa-solid fa-globe"></i> منصة بلدي</a><a href="https://www.jeddah.gov.sa/" target="_blank"><i class="fa-solid fa-globe"></i> أمانة جدة</a>';
    }
    updateMunicipalText(savedLang);
  }

  // ==========================================================
  // 🛡️ NAjm PAGE
  // ==========================================================
  else if (page.includes('Najm_website.html')) {
    const pageTitle = document.getElementById('pageTitle');
    const video1Title = document.getElementById('video1Title');
    const video2Title = document.getElementById('video2Title');
    const video3Title = document.getElementById('video3Title');
    const instructionsTitle = document.getElementById('instructionsTitle');
    const instructionsText = document.getElementById('instructionsText');
    const relatedTitle = document.getElementById('relatedTitle');
    const relatedLinks = document.getElementById('relatedLinks');

    function updateGonsureText(lang) {
      if (pageTitle) pageTitle.textContent = lang === 'en' ? "Najm Platform" : "موقع نجم والمطالبات";
      if (video1Title) video1Title.textContent = lang === 'en' ? "Video 1: Register on Gonsure Platform" : "فيديو 1: التسجيل في موقع نجم";
      if (video2Title) video2Title.textContent = lang === 'en' ? "Video 2: Compare Insurance Offers" : "فيديو 2: الابلاغ عن الحوادث";
      if (video3Title) video3Title.textContent = lang === 'en' ? "Video 3: Submit an Online Claim" : "فيديو 3: تقديم مطالبة إلكترونية";
      if (instructionsTitle) instructionsTitle.textContent = lang === 'en' ? "Instructions" : "الشرح";
      if (instructionsText) instructionsText.textContent = lang === 'en' ?
        "Gonsure is a Saudi online platform that allows users to compare car and travel insurance offers and submit claims easily. You can register, select the best offer, and manage your policies conveniently online." :
        "موقع نجم هي منصة إلكترونية سعودية توفر للمستخدمين الابلاغ عن الحوادث ومتابعة الاجراءات القانونية، وإدارة وثائق التأمين الخاصة بك عبر الإنترنت.";
      if (relatedTitle) relatedTitle.textContent = lang === 'en' ? "Related Links" : "روابط ذات صلة";
      if (relatedLinks) relatedLinks.innerHTML = lang === 'en' ?
        '<a href="https://najm.sa/home" target="_blank"><i class="fa-solid fa-globe"></i>The official website of the najm/a>' :
        '<a href="https://najm.sa/home" target="_blank"><i class="fa-solid fa-globe"></i>الموقع الرسمي لنجم</a>';
    }
    updateGonsureText(savedLang);
  }

  // ==========================================================
  // ⚖️ NAJIZ PAGE
  // ==========================================================
  else if (page.includes('najiz.html')) {
    const pageTitle = document.getElementById('pageTitle');
    const v1Title = document.getElementById('v1Title');
    const v1Text = document.getElementById('v1Text');
    const v2Title = document.getElementById('v2Title');
    const v2Text = document.getElementById('v2Text');
    const v3Title = document.getElementById('v3Title');
    const v3Text = document.getElementById('v3Text');
    const v4Title = document.getElementById('v4Title');
    const v4Text = document.getElementById('v4Text');
    const v5Title = document.getElementById('v5Title');
    const v5Text = document.getElementById('v5Text');
    const linksTitle = document.getElementById('linksTitle');
    const linkNajiz = document.getElementById('linkNajiz');
    const linkMoj = document.getElementById('linkMoj');

    function updateNajizText(lang) {
      if (pageTitle) pageTitle.textContent = lang === 'en' ? "Najiz & e-Court Services" : "خدمات ناجز والمحاكم الإلكترونية";
      if (v1Title) v1Title.textContent = lang === 'en' ? "Electronic Lawsuit Filing" : "تقديم صحيفة دعوى إلكترونية";
      if (v1Text) v1Text.textContent = lang === 'en' ?
        "This service allows filing a lawsuit electronically without visiting the court. Fill in the plaintiff's and defendant's details and the case subject, then attach the required documents. After submission, it is referred electronically to the competent circuit via the Najiz platform." :
        "تتيح هذه الخدمة رفع صحيفة دعوى إلكترونيًا دون الحاجة لزيارة المحكمة. قم بتعبئة بيانات المدعي والمدعى عليه وموضوع الدعوى، ثم أرفق المستندات المطلوبة. بعد الإرسال يتم إحالتها إلكترونيًا إلى الدائرة المختصة عبر منصة \"ناجز\".";
      if (v2Title) v2Title.textContent = lang === 'en' ? "Electronic Power of Attorney Issuance" : "إصدار وكالة إلكترونية";
      if (v2Text) v2Text.textContent = lang === 'en' ?
        "Issue an electronic power of attorney quickly through Najiz. Specify the grantor and grantee details, the scope of authority, and validity period. It is issued and delivered digitally for immediate use." :
        "إصدار وكالة إلكترونية بسرعة عبر ناجز. حدد بيانات الموكل والمفوض، نطاق الصلاحيات، ومدة الصلاحية. يتم إصدارها وتسليمها إلكترونيًا للاستخدام الفوري.";
      if (v3Title) v3Title.textContent = lang === 'en' ? "Case Status Inquiry" : "استعلام عن حالة القضية";
      if (v3Text) v3Text.textContent = lang === 'en' ?
        "Track your case status anytime via Najiz by entering the case number or parties' IDs. View updates on hearings, decisions, and next steps without physical visits." :
        "تابع حالة قضيتك في أي وقت عبر ناجز بإدخال رقم القضية أو هويات الأطراف. شاهد التحديثات حول الجلسات والقرارات والخطوات التالية دون زيارات حضورية.";
      if (v4Title) v4Title.textContent = lang === 'en' ? "Electronic Payment of Court Fees" : "دفع الرسوم القضائية إلكترونيًا";
      if (v4Text) v4Text.textContent = lang === 'en' ?
        "Pay court fees securely online through Najiz using SADAD or credit cards. Receive instant confirmation and update your case records accordingly." :
        "ادفع الرسوم القضائية بأمان عبر الإنترنت من خلال ناجز باستخدام السداد أو بطاقات الائتمان. احصل على تأكيد فوري وتحديث سجلات قضيتك.";
      if (v5Title) v5Title.textContent = lang === 'en' ? "Request Court Session Postponement" : "طلب تأجيل جلسة المحكمة";
      if (v5Text) v5Text.textContent = lang === 'en' ?
        "Request to postpone a court session electronically via Najiz for valid reasons. Submit the request with supporting documents and await approval notification." :
        "اطلب تأجيل جلسة المحكمة إلكترونيًا عبر ناجز لأسباب مشروعة. قدم الطلب مع المستندات الداعمة وانتظر إشعار الموافقة.";
      if (linksTitle) linksTitle.textContent = lang === 'en' ? "Related Links" : "روابط ذات صلة";
      if (linkNajiz) linkNajiz.textContent = lang === 'en' ? "Najiz Main Platform" : "المنصة الرئيسية لناجز";
      if (linkNajiz) linkNajiz.href = "https://najiz.sa/";
      if (linkMoj) linkMoj.textContent = lang === 'en' ? "Ministry of Justice" : "وزارة العدل السعودية";
      if (linkMoj) linkMoj.href = "https://www.moj.gov.sa/";
    }
    updateNajizText(savedLang);
  }

  // ==========================================================
  // 🛂 PASSPORT FORMS PAGE
  // ==========================================================
  else if (page.includes('passport_forms.html')) {
    const pageTitle = document.getElementById('pageTitle');
    const video1Title = document.getElementById('video1Title');
    const video1Desc = document.getElementById('video1Desc');
    const video2Title = document.getElementById('video2Title');
    const video2Desc = document.getElementById('video2Desc');
    const linksTitle = document.getElementById('linksTitle');
    const linkAbsher = document.getElementById('linkAbsher');
    const linkForms = document.getElementById('linkForms');

    function updatePassportFormsText(lang) {
      if (pageTitle) pageTitle.textContent = lang === 'en' ? "Passport & Residency Forms" : "نماذج إصدار الجوازات للمواطنين وخدمات المقيمين";
      if (video1Title) video1Title.textContent = lang === 'en' ? "Tutorial Video: Saudi Passport Issuance" : "فيديو تعليمي: إصدار جواز سفر الالكتروني للمواطنين";
      if (video1Desc) video1Desc.textContent = lang === 'en' ?
        "In this video, you will learn how to fill out the Saudi passport issuance or renewal form. It covers entering the citizen's data, photo, and signature, along with required documents such as ID card and fee payment. After completion, the form can be submitted to the Passport Department or via Absher." :
        "في هذا الفيديو ستتعلم كيفية تعبئة نموذج إصدار جواز السفر الالكتروني. عبر منصة \"أبشر\".";
      if (video2Title) video2Title.textContent = lang === 'en' ? "Tutorial Video: Residency (Iqama) Issuance for Expatriates" : "فيديو تعليمي: إصدار إقامة للمقيمين";
      if (video2Desc) video2Desc.textContent = lang === 'en' ?
        "In this video, you will learn how to fill out the residency (Iqama) issuance or renewal form for expatriates. Ensure that all data such as residency number, sponsor, and occupation are correct. After filling the form, it can be uploaded through Absher Business or submitted directly to the Passport Office." :
        "في هذا الفيديو ستتعلم خطوات تعبئة نموذج إصدار الإقامة للمقيمين. تأكد من إدخال بيانات العامل أو المقيم بدقة، مثل رقم الإقامة، الجهة الراعية، والمهنة. بعد اكتمال النموذج، يتم رفعه عبر منصة \"أبشر أعمال\" أو تقديمه في إدارة الجوازات مع المستندات المطلوبة.";
      if (linksTitle) linksTitle.textContent = lang === 'en' ? "Related Links" : "روابط ذات صلة";
      if (linkAbsher) linkAbsher.textContent = lang === 'en' ? "Absher Platform" : "منصة أبشر";
      if (linkAbsher) linkAbsher.href = "https://www.absher.sa/";
      if (linkForms) linkForms.textContent = lang === 'en' ? "Official Passport Forms Page" : "صفحة النماذج الرسمية للجوازات";
      if (linkForms) linkForms.href = "https://www.gdp.gov.sa/forms/";
    }
    updatePassportFormsText(savedLang);
  }

  // ==========================================================
  // 💳 SOCIAL SECURITY PAGE
  // ==========================================================
  else if (page.includes('social.html')) {
    const pageTitle = document.getElementById('pageTitle');
    const video1Title = document.getElementById('video1Title');
    const video2Title = document.getElementById('video2Title');
    const video1Desc = document.getElementById('video1Desc');
    const video2Desc = document.getElementById('video2Desc');
    const instructionsTitle = document.getElementById('instructionsTitle');
    const instructionsText = document.getElementById('instructionsText');
    const relatedTitle = document.getElementById('relatedTitle');
    const relatedLinks = document.getElementById('relatedLinks');

    function updateSocialText(lang) {
      if (pageTitle) pageTitle.textContent = lang === 'en' ? "Social Security" : "الضمان الاجتماعي";
      if (video1Title) video1Title.textContent = lang === 'en' ? "Video 1: Register for Social Security" : "فيديو 1: التعريف بنظام الضمان الاجتماعي المطور";
      if (video1Title) video1Title.textContent = lang === 'en' ? "Video 1: Register for Social Security" : "فيديو 2: التسجيل في الضمان الاجتماعي";
      if (video2Title) video2Title.textContent = lang === 'en' ? "Video 2: Check Application and Support Status" : "فيديو 3: الاستعلام عن حالة الطلب والدعم";
      if (video1Desc) video1Desc.textContent = lang === 'en' ?
        "This video explains how to register for the new Social Security system through the unified national platform in simple steps." :
        "يوضح هذا الفيديو كيفية التسجيل في الضمان الاجتماعي الجديد عبر المنصة الوطنية الموحدة بخطوات بسيطة وواضحة.";
      if (video2Desc) video2Desc.textContent = lang === 'en' ?
        "This video shows how to check your application status and support amount via the Ministry of Human Resources and Social Development portal." :
        "يشرح هذا الفيديو طريقة الاستعلام عن حالة الطلب ومقدار الدعم المالي المستحق عبر بوابة وزارة الموارد البشرية والتنمية الاجتماعية.";
      if (instructionsTitle) instructionsTitle.textContent = lang === 'en' ? "Instructions" : "الشرح";
      if (instructionsText) instructionsText.textContent = lang === 'en' ?
        "The Social Security program supports low-income families through financial and developmental programs. You can register and track your status online without visiting offices." :
        "يهدف الضمان الاجتماعي إلى دعم الأسر ذات الدخل المحدود عبر برامج مالية وتنموية متنوعة. يمكنك التسجيل ومتابعة حالتك إلكترونيًا دون الحاجة لمراجعة الفروع.";
      if (relatedTitle) relatedTitle.textContent = lang === 'en' ? "Related Links" : "روابط ذات صلة";
      if (relatedLinks) relatedLinks.innerHTML = lang === 'en' ?
        '<a href="https://ssf.gov.sa/" target="_blank"><i class="fa-solid fa-globe"></i> Social Security Official Website</a><a href="https://hrsd.gov.sa/" target="_blank"><i class="fa-solid fa-globe"></i> Ministry of Human Resources and Social Development</a>' :
        '<a href="https://ssf.gov.sa/" target="_blank"><i class="fa-solid fa-globe"></i> موقع الضمان الاجتماعي الرسمي</a><a href="https://hrsd.gov.sa/" target="_blank"><i class="fa-solid fa-globe"></i> وزارة الموارد البشرية والتنمية الاجتماعية</a>';
    }
    updateSocialText(savedLang);
  }

  // ==========================================================
  // 🛡️ TAAMINI PAGE
  // ==========================================================
  else if (page.includes('taaminy.html')) {
    const pageTitle = document.getElementById('pageTitle');
    const video1Title = document.getElementById('video1Title');
    const video2Title = document.getElementById('video2Title');
    const video3Title = document.getElementById('video3Title');
    const instructionsTitle = document.getElementById('instructionsTitle');
    const instructionsText = document.getElementById('instructionsText');
    const relatedTitle = document.getElementById('relatedTitle');
    const relatedLinks = document.getElementById('relatedLinks');

    function updateTaaminyText(lang) {
      if (pageTitle) pageTitle.textContent = lang === 'en' ? "Tameeni Platform" : "منصة تأميني";
      if (video1Title) video1Title.textContent = lang === 'en' ? "Video 1: Register on Tameeni Platform" : "فيديو 1: التسجيل في منصة تأميني واختيار الشركة المناسبة للمركبات";
      if (video2Title) video2Title.textContent = lang === 'en' ? "Video 2: Compare Insurance Offers" : "فيديو 2: التأمين الطبي لافراد الاسرة او الموظفين";
      if (instructionsTitle) instructionsTitle.textContent = lang === 'en' ? "Instructions" : "الشرح";
      if (instructionsText) instructionsText.textContent = lang === 'en' ?
        "Tameeni is one of the largest online insurance platforms in Saudi Arabia, allowing users to compare prices from over 20 insurance companies, purchase policies online easily, and submit and track claims electronically." :
        "منصة تأميني هي واحدة من أكبر منصات التأمين الإلكتروني في المملكة العربية السعودية، حيث تتيح للمستخدمين مقارنة الأسعار بين أكثر من 20 شركة تأمين، وشراء وثائق التأمين إلكترونيًا بخطوات بسيطة، كما توفر خدمة المطالبات الإلكترونية ومتابعة حالة الطلبات بشكل فوري.";
      if (relatedTitle) relatedTitle.textContent = lang === 'en' ? "Related Links" : "روابط ذات صلة";
      if (relatedLinks) relatedLinks.innerHTML = lang === 'en' ?
        '<a href="https://www.tameeni.com/" target="_blank"><i class="fa-solid fa-globe"></i> Tameeni Official Website</a>' :
        '<a href="https://www.tameeni.com/" target="_blank"><i class="fa-solid fa-globe"></i> الموقع الرسمي لمنصة تأميني</a>';
    }
    updateTaaminyText(savedLang);
  }

// ==========================================================
// ❓ FAQ PAGE
// ==========================================================
else if (page.includes('faq.html')) {
  const mainTitle = document.getElementById('mainTitle');
  const mainDesc = document.getElementById('mainDesc');
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const accordionButtons = document.querySelectorAll('.accordion-button');
  const accordionBodies = document.querySelectorAll('.accordion-body');

  function updateFAQText(lang) {
    if (mainTitle) mainTitle.textContent = lang === 'en' ? "Frequently Asked Questions" : "الأسئلة الشائعة";
    if (mainDesc) mainDesc.textContent = lang === 'en'
      ? "Here are answers to the most common questions about services. If you can’t find yours, contact us."
      : "إليك إجابات على أكثر الأسئلة شيوعاً حول الخدمات. إذا لم تجد إجابتك، تواصل معنا.";

    if (searchInput) searchInput.placeholder = lang === 'en' ? "Search questions..." : "ابحث في الأسئلة...";
    if (searchBtn) searchBtn.textContent = lang === 'en' ? "Search" : "بحث";

    if (accordionButtons.length >= 8 && accordionBodies.length >= 8) {
      if (lang === 'en') {
        accordionButtons[0].textContent = "How do I book an appointment at Civil Affairs?";
        accordionBodies[0].innerHTML = 'Go to Absher, choose “Book Appointment,” and follow the steps. Link: <a href="https://www.absher.sa" target="_blank">Absher</a>.';

        accordionButtons[1].textContent = "Which banks are supported for transactions?";
        accordionBodies[1].textContent = "SNB, Al Rajhi, and Riyad Bank. You can access them from the menu links.";

        accordionButtons[2].textContent = "How do I file an insurance claim?";
        accordionBodies[2].innerHTML = 'Visit your insurance company’s website (like Tawuniya) and use the claim form. Link: <a href="https://www.tawuniya.com.sa/" target="_blank">Tawuniya</a>.';

        accordionButtons[3].textContent = "Are the services available 24/7?";
        accordionBodies[3].textContent = "Yes, most electronic services are available anytime, though some appointments are limited to business hours.";

        accordionButtons[4].textContent = "How do I change the website language?";
        accordionBodies[4].textContent = "Click the EN/AR button at the top right to switch between Arabic and English.";

        accordionButtons[5].textContent = "What is dark mode?";
        accordionBodies[5].textContent = "Click ☀️ / 🌙 to toggle between light and dark modes for eye comfort.";

        accordionButtons[6].textContent = "Is the website secure?";
        accordionBodies[6].textContent = "Yes, all links are official, and the website uses HTTPS and best security practices.";

        accordionButtons[7].textContent = "How do I contact support?";
        accordionBodies[7].textContent = 'Use the “Contact Us” page in the menu or email <a href="mailto:support@publicservices.sa">support@publicservices.sa</a>.';
      } else {
        accordionButtons[0].textContent = "كيف أحجز موعد في الأحوال المدنية؟";
        accordionBodies[0].innerHTML = 'ادخل على أبشر، اختر "حجز موعد"، واتبع الخطوات. الرابط: <a href="https://www.absher.sa" target="_blank">أبشر</a>.';

        accordionButtons[1].textContent = "ما هي البنوك المدعومة للمعاملات؟";
        accordionBodies[1].textContent = "البنك الأهلي، الراجحي، والرياض. الوصول من خلال الروابط الرسمية في المنيو.";

        accordionButtons[2].textContent = "كيف أقدّم مطالبة تأمين؟";
        accordionBodies[2].innerHTML = 'ادخل على موقع الشركة (مثل التعاونية)، واستخدم نموذج المطالبات. رابط: <a href="https://www.tawuniya.com.sa/" target="_blank">التعاونية</a>.';

        accordionButtons[3].textContent = "هل الخدمات متاحة 24/7؟";
        accordionBodies[3].textContent = "نعم، معظم الخدمات الإلكترونية متاحة دائماً، لكن بعض المواعيد محدودة بالساعات الرسمية.";

        accordionButtons[4].textContent = "كيف أغيّر اللغة في الموقع؟";
        accordionBodies[4].textContent = "اضغط على زر EN/AR في أعلى اليمين للتبديل بين العربية والإنجليزية.";

        accordionButtons[5].textContent = "ما هو الوضع المظلم؟";
        accordionBodies[5].textContent = "اضغط على ☀️ / 🌙 للتبديل بين الوضع الفاتح والمظلم لتوفير العيون.";

        accordionButtons[6].textContent = "هل الموقع آمن؟";
        accordionBodies[6].textContent = "نعم، كل الروابط رسمية، ونستخدم HTTPS وأفضل ممارسات الأمان.";

        accordionButtons[7].textContent = "كيف أتواصل مع الدعم؟";
        accordionBodies[7].innerHTML = 'استخدم صفحة "اتصل بنا" في المنيو، أو أرسل إيميل إلى <a href="mailto:support@publicservices.sa">support@publicservices.sa</a>.';
      }
    }
  }

  updateFAQText(savedLang);
}

// ==========================================================
// 🔒 PRIVACY PAGE
// ==========================================================
else if (page.includes('privacy.html')) {
  const mainTitle = document.getElementById('mainTitle');
  const mainDesc = document.getElementById('mainDesc');
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const accordionButtons = document.querySelectorAll('.accordion-button');
  const accordionBodies = document.querySelectorAll('.accordion-body');

  function updatePrivacyText(lang) {
    if (mainTitle) mainTitle.textContent = lang === 'en' ? "Privacy & Terms of Use" : "الخصوصية وسياسة الاستخدام";
    if (mainDesc) mainDesc.textContent = lang === 'en'
      ? "We are committed to protecting your privacy and data. This policy explains how we collect, use, and protect information, and outlines the website’s terms of use."
      : "نحن ملتزمون بحماية خصوصيتك وبياناتك. هذه السياسة توضح كيف نجمع ونستخدم المعلومات، وشروط استخدام الموقع.";

    if (searchInput) searchInput.placeholder = lang === 'en' ? "Search in policy..." : "ابحث في السياسة...";
    if (searchBtn) searchBtn.textContent = lang === 'en' ? "Search" : "بحث";

    if (accordionButtons.length >= 8 && accordionBodies.length >= 8) {
      if (lang === 'en') {
        accordionButtons[0].textContent = "1. Introduction";
        accordionBodies[0].textContent = "The Public Services platform (publicservices.sa) is committed to protecting user privacy according to the Saudi PDPL and international standards like GDPR. This policy applies to all visitors and users.";

        accordionButtons[1].textContent = "2. Data Collection";
        accordionBodies[1].textContent = "We collect personal data such as name and email only when you contact us. We do not collect sensitive data and use cookies to improve the experience (you can disable them in your browser). We never sell or share data with third parties without consent.";

        accordionButtons[2].textContent = "3. Data Usage";
        accordionBodies[2].textContent = "We use data to respond to your inquiries, improve services, and send updates (you can unsubscribe). Data is retained for 2 years, then deleted.";

        accordionButtons[3].textContent = "4. Your Rights";
        accordionBodies[3].textContent = "You have the right to access, modify, delete, or object to data processing. Contact us via support@publicservices.sa to exercise your rights.";

        accordionButtons[4].textContent = "5. Terms of Use";
        accordionBodies[4].textContent = "You must be over 18 to use the website. Do not use it for illegal purposes. We are not responsible for external links, and terms may change without prior notice.";

        accordionButtons[5].textContent = "6. Security";
        accordionBodies[5].textContent = "We use HTTPS and data encryption. If you discover a breach, inform us immediately. We are committed to notifying the Saudi Data & AI Authority (SDAIA).";

        accordionButtons[6].textContent = "7. Policy Updates";
        accordionBodies[6].textContent = "We update this policy as needed and publish changes here. Last updated: November 1, 2025.";

        accordionButtons[7].textContent = "8. Contact";
        accordionBodies[7].innerHTML = 'For inquiries, contact us at <a href="mailto:support@publicservices.sa">support@publicservices.sa</a> or via the “Contact Us” page.';
      } else {
        accordionButtons[0].textContent = "1. مقدمة";
        accordionBodies[0].textContent = "منصة الخدمات العامة (publicservices.sa) ملتزمة بحماية خصوصية المستخدمين وفقاً لقانون حماية البيانات الشخصية في المملكة العربية السعودية (PDPL) ومعايير عالمية مثل GDPR. هذه السياسة تنطبق على جميع الزوار والمستخدمين.";

        accordionButtons[1].textContent = "2. جمع البيانات";
        accordionBodies[1].textContent = "نجمع البيانات الشخصية مثل الاسم والإيميل فقط عند الاتصال بنا. لا نجمع بيانات حساسة، ونستخدم cookies لتحسين التجربة (يمكنك تعطيلها في المتصفح). لا نبيع أو نشارك بياناتك مع أطراف ثالثة دون موافقة.";

        accordionButtons[2].textContent = "3. استخدام البيانات";
        accordionBodies[2].textContent = "نستخدم البيانات للرد على استفساراتك، تحسين الخدمات، وإرسال تحديثات (يمكنك إلغاء الاشتراك). نحتفظ بالبيانات لمدة 2 سنة، ثم نحذفها.";

        accordionButtons[3].textContent = "4. حقوقك";
        accordionBodies[3].textContent = "لديك الحق في الوصول، التعديل، الحذف، أو الاعتراض على معالجة بياناتك. اتصل بنا عبر support@publicservices.sa لممارسة حقوقك.";

        accordionButtons[4].textContent = "5. شروط الاستخدام";
        accordionBodies[4].textContent = "يجب أن تكون فوق 18 عاماً للاستخدام. لا تستخدم الموقع لأغراض غير قانونية. نحن غير مسؤولين عن الروابط الخارجية. يحق لنا تعديل الشروط دون إشعار.";

        accordionButtons[5].textContent = "6. الأمان";
        accordionBodies[5].textContent = "نستخدم HTTPS وتشفير البيانات. إذا اكتشفت خرق، أبلغنا فوراً. نحن ملتزمون بالإبلاغ للهيئة السعودية للبيانات والذكاء الاصطناعي (SDAIA).";

        accordionButtons[6].textContent = "7. التعديلات";
        accordionBodies[6].textContent = "نعدّل السياسة حسب الحاجة، وننشر التغييرات هنا. آخر تحديث: 1 نوفمبر 2025.";

        accordionButtons[7].textContent = "8. الاتصال";
        accordionBodies[7].innerHTML = 'لأي استفسار، اتصل بنا عبر <a href="mailto:support@publicservices.sa">support@publicservices.sa</a> أو صفحة "اتصل بنا".';
      }
    }
  }

  updatePrivacyText(savedLang);
}

// ==========================================================
// 📞 CONTACT PAGE
// ==========================================================
else if (page.includes('contact.html')) {
  const mainTitle = document.getElementById('mainTitle');
  const mainDesc = document.getElementById('mainDesc');
  const formLabels = document.querySelectorAll('.form-label');
  const inputs = document.querySelectorAll('.form-control');
  const sendButton = document.querySelector('button[type="submit"]');
  const contactHeaders = document.querySelectorAll('.contact-header');
  const contactInfoParagraphs = document.querySelectorAll('.contact-info p');

  function updateContactText(lang) {
setTimeout(() => { document.title = document.title; }, 100);
    // ✅ تحديث عنوان التبويب (Title)
    if (lang === 'en') {
      document.title = "Contact Us - Public Services Platform";
    } else {
      document.title = "اتصل بنا - منصة الخدمات العامة";
    }

    if (mainTitle) mainTitle.textContent = lang === 'en' ? "Contact Us" : "اتصل بنا";
    if (mainDesc) mainDesc.textContent = lang === 'en'
      ? "We are happy to serve you and answer your inquiries. You can reach us using the form below or through the following information."
      : "نسعد بخدمتك والإجابة على استفساراتك. يمكنك التواصل معنا عبر النموذج أدناه أو باستخدام المعلومات التالية.";

    if (formLabels.length >= 4 && inputs.length >= 4) {
      if (lang === 'en') {
        formLabels[0].textContent = "Full Name";
        inputs[0].placeholder = "Enter your name";

        formLabels[1].textContent = "Email Address";
        inputs[1].placeholder = "example@email.com";

        formLabels[2].textContent = "Subject";
        inputs[2].placeholder = "Describe your subject";

        formLabels[3].textContent = "Message";
        inputs[3].placeholder = "Write your message here...";

        sendButton.innerHTML = '<i class="fas fa-paper-plane me-2"></i> Send Message';

        contactHeaders[0].innerHTML = '<i class="fas fa-map-marker-alt me-2"></i>Address';
        contactHeaders[1].innerHTML = '<i class="fas fa-phone me-2"></i>Phone';
        contactHeaders[2].innerHTML = '<i class="fas fa-envelope me-2"></i>Email';
        contactHeaders[3].innerHTML = '<i class="fas fa-clock me-2"></i>Working Hours';

        contactInfoParagraphs[0].textContent = "Jeddah, Saudi Arabia";
        contactInfoParagraphs[1].textContent = "+966577478383";
        contactInfoParagraphs[2].textContent = "support@publicservices.sa";
        contactInfoParagraphs[3].textContent = "Sunday to Thursday, 8 AM - 4 PM";
      } else {
        formLabels[0].textContent = "الاسم الكامل";
        inputs[0].placeholder = "أدخل اسمك";

        formLabels[1].textContent = "البريد الإلكتروني";
        inputs[1].placeholder = "example@email.com";

        formLabels[2].textContent = "الموضوع";
        inputs[2].placeholder = "وصف الموضوع";

        formLabels[3].textContent = "الرسالة";
        inputs[3].placeholder = "اكتب رسالتك هنا...";

        sendButton.innerHTML = '<i class="fas fa-paper-plane me-2"></i> إرسال الرسالة';

        contactHeaders[0].innerHTML = '<i class="fas fa-map-marker-alt me-2"></i>العنوان';
        contactHeaders[1].innerHTML = '<i class="fas fa-phone me-2"></i>الهاتف';
        contactHeaders[2].innerHTML = '<i class="fas fa-envelope me-2"></i>الإيميل';
        contactHeaders[3].innerHTML = '<i class="fas fa-clock me-2"></i>ساعات العمل';

        contactInfoParagraphs[0].textContent = "جدة، المملكة العربية السعودية";
        contactInfoParagraphs[1].textContent = "+966577478383";
        contactInfoParagraphs[2].textContent = "support@publicservices.sa";
        contactInfoParagraphs[3].textContent = "من الأحد إلى الخميس، 8 صباحاً - 4 مساءً";
      }
    }
  }

  updateContactText(savedLang);
}

// ==========================================================
// 🚗 TRAFFIC FORMS PAGE
// ==========================================================
else if (page.includes('traffic_forms.html')) {
  const pageTitle = document.getElementById('pageTitle');
  const video1Title = document.getElementById('video1Title');
  const video1Desc = document.getElementById('video1Desc');
  const video2Title = document.getElementById('video2Title');
  const video2Desc = document.getElementById('video2Desc');
  const linksTitle = document.getElementById('linksTitle');
  const linkAbsher = document.getElementById('linkAbsher');
  const linkMoi = document.getElementById('linkMoi');
  const linkForms = document.getElementById('linkForms');

  function updateTrafficText(lang) {
    // ✅ تحديث عنوان الصفحة في التبويب
    document.title = lang === 'en'
      ? "Traffic Forms - License Plates & Vehicle Write-off"
      : "نماذج المرور | منصة الخدمات العامة";

    if (pageTitle) pageTitle.textContent = lang === 'en'
      ? "Traffic Forms - Plate Issuance & Vehicle Write-off"
      : "نماذج المرور - إصدار اللوحات وإسقاط التالف";

    if (video1Title) video1Title.textContent = lang === 'en'
      ? "Tutorial Video: Filling Plate Issuance Form"
      : "فيديو تعليمي: تعبئة نموذج إصدار لوحة جديدة";

    if (video1Desc) video1Desc.textContent = lang === 'en'
      ? "This video explains how to fill out the new plate issuance form, including vehicle owner data, chassis number, registration form number, and required documents such as ID, old registration, and payment via SADAD. Once completed, the form is submitted via Absher or delivered to the Traffic Department."
      : "في هذا الفيديو ستتعلم كيفية تعبئة نموذج إصدار لوحة جديدة للمركبة. يشمل الشرح تعبئة بيانات المالك ورقم الهيكل ورقم الاستمارة، مع توضيح المستندات المطلوبة مثل الهوية، الاستمارة القديمة، وسداد الرسوم عبر سداد. بعد اكتمال النموذج يتم رفعه عبر منصة \"أبشر\" أو تسليمه في إدارة المرور.";

    if (video2Title) video2Title.textContent = lang === 'en'
      ? "Tutorial Video: Filling Vehicle Write-off Form"
      : "فيديو تعليمي: تعبئة نموذج إسقاط مركبة تالفة";

    if (video2Desc) video2Desc.textContent = lang === 'en'
      ? "This video explains how to fill out the damaged vehicle write-off form. It covers filling in vehicle data, plate number, reason for write-off, and owner details. Once completed, submit the form via Absher or deliver it to the Traffic Department with supporting documents."
      : "في هذا الفيديو ستتعلم طريقة تعبئة نموذج إسقاط مركبة تالفة من المرور. يشمل الخطوات تعبئة بيانات المركبة، رقم اللوحة، سبب الإسقاط، وبيانات المالك. بعد تعبئة النموذج، يتم رفعه إلكترونيًا عبر منصة \"أبشر\" أو تسليمه في إدارة المرور مع ما يثبت تلف المركبة أو بيعها للتشليح.";

    if (linksTitle) linksTitle.textContent = lang === 'en' ? "Related Links" : "روابط ذات صلة";

    if (linkAbsher) linkAbsher.textContent = lang === 'en' ? "Absher Platform" : "منصة أبشر";
    if (linkMoi) linkMoi.textContent = lang === 'en' ? "Ministry of Interior - Traffic" : "موقع وزارة الداخلية - المرور";
    if (linkForms) linkForms.textContent = lang === 'en' ? "Official Traffic Form (PDF)" : "نموذج المرور الرسمي (PDF)";
  }

  updateTrafficText(savedLang);
}

});
