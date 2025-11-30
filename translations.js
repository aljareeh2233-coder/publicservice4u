const translations = {
    // --- نصوص مشتركة ---
    common: {
        homeLink: { ar: "الرئيسية", en: "Home" },
        langSwitch: { ar: "EN", en: "AR" }
    },

    // --- صفحة الأحوال المدنية ---
    civil_forms: {
        pageTitle: { ar: "نماذج الأحوال المدنية", en: "Civil Affairs Services" },
        pageDesc: { 
            ar: "دليلك الشامل لخدمات الأحوال المدنية، شرح الخطوات، وحلول المشاكل الشائعة.", 
            en: "Your comprehensive guide to Civil Affairs services, steps explanation, and common issues solutions." 
        },
        stepsTitle: { ar: '<i class="fas fa-list-ol ms-2 text-success"></i> خطوات تنفيذ الخدمة', en: '<i class="fas fa-list-ol me-2 text-success"></i> Service Steps' },
        stepsList: {
            ar: `<li><strong>الدخول للمنصة:</strong> ابدأ بالدخول إلى حسابك في منصة <strong>أبشر</strong> ثم انتقل لتبويب "خدماتي".</li><li><strong>اختيار الخدمة:</strong> اختر خدمة <strong>تسجيل المواليد</strong>.</li><li><strong>تعبئة البيانات:</strong> أدخل بيانات المولود بدقة.</li><li><strong>التوصيل:</strong> اختر طريقة استلام سجل الأسرة (واصل).</li><li><strong>التأكيد:</strong> راجع البيانات ثم اضغط "تأكيد الطلب".</li>`,
            en: `<li><strong>Login:</strong> Log in to <strong>Absher</strong> and go to "My Services".</li><li><strong>Select Service:</strong> Choose <strong>Birth Registration</strong>.</li><li><strong>Fill Data:</strong> Enter newborn details accurately.</li><li><strong>Delivery:</strong> Choose (Wasel) for delivery.</li><li><strong>Confirm:</strong> Review and click "Confirm Request".</li>`
        },
        alertText: { ar: "ملاحظة هامة: يجب تسديد أجور التوصيل عبر سداد.", en: "Important: Delivery fees must be paid via SADAD." },
        serviceNote: { ar: "تعتبر هذه الخدمة من أهم الخدمات الإلكترونية.", en: "This is one of the most important e-services." },
        videoTitle: { ar: '<i class="fas fa-video ms-2 text-success"></i> شرح عملي بالفيديو', en: '<i class="fas fa-video me-2 text-success"></i> Video Tutorial' },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط هامة', en: '<i class="fas fa-link me-2"></i> Important Links' },
        linkAbsher: { ar: '<i class="fas fa-globe ms-2"></i> منصة أبشر الرسمية', en: '<i class="fas fa-globe me-2"></i> Absher Platform' },
        linkMoi: { ar: '<i class="fas fa-building ms-2"></i> موقع الأحوال المدنية', en: '<i class="fas fa-building me-2"></i> Civil Affairs Website' }
    },

    // --- صفحة الجوازات ---
    passport_forms: {
        pageTitle: { ar: "نماذج إصدار وتجديد الجوازات وخدمات المقيمين", en: "Passport & Residency Issuance Forms" },
        pageDesc: { 
            ar: "دليلك الشامل لإصدار الجوازات وتجديد الإقامات عبر الأنظمة الإلكترونية بخطوات واضحة وسهلة.", 
            en: "Your comprehensive guide to issuing passports and renewing residencies via electronic systems with clear steps." 
        },
        video1Title: { ar: '<i class="fa-solid fa-passport ms-2 text-success"></i> إصدار جواز سفر عبر أبشر', en: '<i class="fa-solid fa-passport me-2 text-success"></i> Issue Passport via Absher' },
        video1Desc: { 
            ar: `<p>يشرح هذا الفيديو الطريقة الصحيحة لإصدار جواز السفر السعودي بالكامل عبر منصة <strong>أبشر</strong> دون الحاجة لزيارة الجوازات.</p><p>يوضح الفيديو أيضًا كيفية اختيار مدة الجواز المناسبة، وتحديد العنوان الوطني لاستلام الجواز الجديد.</p>`, 
            en: `<p>This video explains the correct method to issue a Saudi passport fully via <strong>Absher</strong> without visiting the office.</p><p>It also shows how to select the validity period and the National Address for delivery.</p>` 
        },
        video2TitleDesk: { ar: '<i class="fa-solid fa-id-card ms-2 text-success"></i> إصدار إقامة عبر أبشر أعمال', en: '<i class="fa-solid fa-id-card me-2 text-success"></i> Issue Residency via Absher Business' },
        video2TitleMob: { ar: '<i class="fa-solid fa-id-card ms-2 text-success"></i> إصدار إقامة عبر أبشر أعمال', en: '<i class="fa-solid fa-id-card me-2 text-success"></i> Issue Residency via Absher Business' },
        video2Desc: { 
            ar: `<p>يوضح هذا الفيديو خطوات إصدار إقامة جديدة للعامل عبر منصة <strong>أبشر أعمال</strong> بسهولة وبخطوات واضحة.</p><p>بعد ذلك يتم اختيار مدة الإقامة، وطريقة السداد، مع التأكد من توفر التأمين الصحي وسريان تصريح العمل.</p>`, 
            en: `<p>This video demonstrates the steps to issue a new residency for a worker via <strong>Absher Business</strong> easily.</p><p>It covers selecting the duration, payment method, and ensuring valid health insurance and work permit.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية هامة', en: '<i class="fas fa-link me-2"></i> Important Official Links' },
        linkAbsher: { ar: '<i class="fas fa-globe ms-2"></i> منصة أبشر', en: '<i class="fas fa-globe me-2"></i> Absher Platform' },
        linkForms: { ar: '<i class="fas fa-file-pdf ms-2"></i> نماذج الجوازات (PDF)', en: '<i class="fas fa-file-pdf me-2"></i> Passport Forms (PDF)' }
    },

    // --- صفحة المرور ---
    traffic_forms: {
        pageTitle: { ar: "نماذج المرور - إصدار اللوحات وإسقاط المركبة", en: "Traffic Forms - Plate Issuance & Vehicle Scrapping" },
        pageDesc: { 
            ar: "شرح شامل بالفيديو لكيفية تعبئة نماذج المرور، إصدار اللوحات الجديدة، وإسقاط المركبات التالفة عبر منصة أبشر.", 
            en: "Comprehensive video guide on filling traffic forms, issuing new plates, and scrapping damaged vehicles via Absher." 
        },
        video1Title: { ar: '<i class="fa-solid fa-car-side ms-2 text-success"></i> شرح خطوات تعبئة نموذج إصدار لوحة', en: '<i class="fa-solid fa-car-side me-2 text-success"></i> Plate Issuance Form Steps' },
        video1Desc: { 
            ar: `<p>يشرح هذا الفيديو الطريقة الصحيحة لتعبئة نموذج إصدار لوحة جديدة للمركبة، وهي خطوة أساسية عند استبدال اللوحات. يبدأ الشرح بتوضيح البيانات التي يجب تعبئتها بدقة.</p><p>بعد ذلك يستعرض الفيديو كيفية سداد الرسوم عبر “سداد”، ثم طريقة رفع النموذج عبر منصة “أبشر”.</p>`, 
            en: `<p>This video explains the correct way to fill out the new vehicle plate issuance form. It starts by clarifying the data to be filled accurately.</p><p>It then reviews how to pay fees via SADAD and how to upload the form via Absher.</p>` 
        },
        video2TitleDesk: { ar: '<i class="fa-solid fa-trash ms-2 text-success"></i> شرح خطوات إسقاط مركبة تالفة', en: '<i class="fa-solid fa-trash me-2 text-success"></i> Vehicle Scrapping Steps' },
        video2TitleMob: { ar: '<i class="fa-solid fa-trash ms-2 text-success"></i> إسقاط المركبة عبر أبشر', en: '<i class="fa-solid fa-trash me-2 text-success"></i> Vehicle Scrapping via Absher' },
        video2Desc: { 
            ar: `<p>يقدم هذا الفيديو شرحًا دقيقًا لخطوات إسقاط مركبة تالفة عبر منصة “أبشر”. يبدأ الشرح بتوضيح كيفية الدخول إلى الحساب ثم الوصول إلى خدمة إسقاط المركبات.</p><p>بعد ذلك يشرح الفيديو طريقة إدخال البيانات المطلوبة ورفع المستندات مثل إثبات ملكية المركبة.</p>`, 
            en: `<p>This video provides a detailed explanation of the steps to scrap a damaged vehicle via Absher. It starts with logging in and accessing the vehicle scrapping service.</p><p>It then explains how to enter the required data and upload documents like proof of ownership.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط هامة', en: '<i class="fas fa-link me-2"></i> Important Links' },
        linkAbsher: { ar: '<i class="fas fa-globe ms-2"></i> منصة أبشر', en: '<i class="fas fa-globe me-2"></i> Absher Platform' },
        linkMoi: { ar: '<i class="fas fa-building ms-2"></i> المرور - وزارة الداخلية', en: '<i class="fas fa-building me-2"></i> Traffic - MOI' },
        linkForms: { ar: '<i class="fas fa-file-pdf ms-2"></i> نموذج المرور الرسمي (PDF)', en: '<i class="fas fa-file-pdf me-2"></i> Official Traffic Form (PDF)' }
    },

    // --- صفحة ناجز ---
    najiz: {
        pageTitle: { ar: "خدمات ناجز ووزارة العدل", en: "Najiz & MOJ Services" },
        pageDesc: { 
            ar: "دليل مرئي وشامل لأهم خدمات وزارة العدل عبر منصة <strong>ناجز</strong>، يساعدك على إنجاز معاملاتك القضائية والقانونية بسهولة.", 
            en: "A comprehensive video guide to the most important Ministry of Justice services via <strong>Najiz</strong> platform." 
        },
        v1Title: { ar: '<i class="fa-solid fa-file-signature ms-2 text-success"></i> طريقة رفع صحيفة دعوى', en: '<i class="fa-solid fa-file-signature me-2 text-success"></i> Filing a Lawsuit' },
        v1Desc: { 
            ar: `<p>يوضح الفيديو خطوات رفع صحيفة دعوى بشكل إلكتروني دون الحاجة لزيارة المحكمة. تبدأ العملية بالدخول إلى حسابك في منصة ناجز.</p><p>يشرح الفيديو كيفية رفع المستندات المطلوبة بصيغتها الصحيحة، ومتابعة الطلب.</p>`, 
            en: `<p>This video explains how to file a lawsuit electronically without visiting the court, starting with logging into Najiz.</p><p>It covers uploading required documents correctly and tracking the application.</p>` 
        },
        v2TitleMob: { ar: '<i class="fa-solid fa-user-pen ms-2 text-success"></i> إصدار وكالة إلكترونية', en: '<i class="fa-solid fa-user-pen me-2 text-success"></i> Issue Electronic POA' },
        v2TitleDesk: { ar: '<i class="fa-solid fa-user-pen ms-2 text-success"></i> إصدار وكالة إلكترونية', en: '<i class="fa-solid fa-user-pen me-2 text-success"></i> Issue Electronic Power of Attorney' },
        v2Desc: { 
            ar: `<p>يقدم الفيديو شرحًا سريعًا لطريقة إصدار وكالة إلكترونية عبر منصة ناجز. يبدأ بشرح طريقة اختيار نوع الوكالة وتحديد البنود.</p><p>يوضح الفيديو أيضًا كيفية إدخال بيانات الموكل والموكل له، ثم اعتماد الوكالة.</p>`, 
            en: `<p>This video provides a quick guide to issuing an electronic Power of Attorney via Najiz, including selecting the type and terms.</p><p>It also explains entering the principal and agent details and approving the POA.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-scale-balanced ms-2 text-success"></i> الاستعلام عن حالة الدعوى', en: '<i class="fa-solid fa-scale-balanced me-2 text-success"></i> Case Status Inquiry' },
        v3Desc: { 
            ar: `<p>يوضح الفيديو كيفية متابعة حالة الدعوى من لحظة تقديمها، حيث يمكن معرفة ما إذا تم قبولها أو تحويلها للمحكمة.</p><p>يشرح الفيديو أيضًا كيفية عرض تفاصيل الجلسات، ورفع المرفقات المطلوبة.</p>`, 
            en: `<p>This video shows how to track a case status from submission, checking if it was accepted or referred to court.</p><p>It also explains viewing session details and uploading required attachments.</p>` 
        },
        v4TitleMob: { ar: '<i class="fa-solid fa-credit-card ms-2 text-success"></i> دفع الرسوم القضائية', en: '<i class="fa-solid fa-credit-card me-2 text-success"></i> Pay Judicial Fees' },
        v4TitleDesk: { ar: '<i class="fa-solid fa-credit-card ms-2 text-success"></i> دفع الرسوم القضائية', en: '<i class="fa-solid fa-credit-card me-2 text-success"></i> Pay Judicial Fees' },
        v4Desc: { 
            ar: `<p>يشرح الفيديو طريقة دفع الرسوم القضائية المطلوبة لبعض الطلبات. يبدأ بالدخول إلى الفاتورة الإلكترونية عبر ناجز.</p><p>بعد ذلك يوضح طريقة الدفع عبر حسابك البنكي أو من خلال تطبيق البنك.</p>`, 
            en: `<p>This video explains how to pay required judicial fees for certain requests, starting with accessing the e-invoice on Najiz.</p><p>It then shows payment via bank account or app.</p>` 
        },
        v5Title: { ar: '<i class="fa-solid fa-clock ms-2 text-success"></i> طلب تأجيل الجلسة', en: '<i class="fa-solid fa-clock me-2 text-success"></i> Request Session Postponement' },
        v5Desc: { 
            ar: `<p>يشرح الفيديو طريقة تقديم طلب تأجيل جلسة المحكمة عبر منصة ناجز. يتم اختيار القضية وإرفاق سبب التأجيل.</p><p>يوضح الفيديو أيضًا آلية إرسال الطلب ومتابعته لحين اعتماده.</p>`, 
            en: `<p>This video explains how to request a court session postponement via Najiz by selecting the case and attaching the reason.</p><p>It also covers submitting the request and tracking it until approval.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية هامة', en: '<i class="fas fa-link me-2"></i> Important Official Links' },
        linkNajiz: { ar: '<i class="fas fa-globe ms-2"></i> منصة ناجز', en: '<i class="fas fa-globe me-2"></i> Najiz Platform' },
        linkMoj: { ar: '<i class="fas fa-building ms-2"></i> وزارة العدل السعودية', en: '<i class="fas fa-building me-2"></i> Ministry of Justice' }
    },

    // --- صفحة البنك الأهلي ---
    bank_alahli: {
        pageTitle: { ar: "خدمات البنك الأهلي السعودي", en: "SNB AlAhli Services" },
        pageDesc: { 
            ar: "شرح مرئي مبسّط لأبرز خدمات البنك الأهلي عبر التطبيق ومنصة الخدمات الإلكترونية بخطوات واضحة وسهلة.", 
            en: "A simplified video guide to the most prominent SNB AlAhli services via the app and online platform with clear steps." 
        },
        v1Title: { ar: '<i class="fa-solid fa-right-to-bracket ms-2 text-success"></i> تسجيل الدخول للأهلي أونلاين', en: '<i class="fa-solid fa-right-to-bracket me-2 text-success"></i> Login to AlAhli Online' },
        v1Desc: { 
            ar: `<p>يوضح هذا الفيديو طريقة تسجيل الدخول إلى حسابك في الأهلي أونلاين سواء من التطبيق أو من المتصفح. تبدأ الخطوات بإدخال رقم الهوية أو الرقم المستخدم.</p><p>يعرض الفيديو طريقة استرجاع اسم المستخدم أو إعادة تعيين كلمة المرور في حال نسيانها.</p>`, 
            en: `<p>This video shows how to log in to your AlAhli Online account via the app or browser, starting with entering your ID or username.</p><p>It also explains how to retrieve a username or reset a forgotten password.</p>` 
        },
        v2TitleMob: { ar: '<i class="fa-solid fa-money-bill-transfer ms-2 text-success"></i> التحويل المحلي', en: '<i class="fa-solid fa-money-bill-transfer me-2 text-success"></i> Local Transfer' },
        v2TitleDesk: { ar: '<i class="fa-solid fa-money-bill-transfer ms-2 text-success"></i> التحويل المحلي', en: '<i class="fa-solid fa-money-bill-transfer me-2 text-success"></i> Local Transfer' },
        v2Desc: { 
            ar: `<p>يشرح الفيديو خطوات إجراء التحويل المحلي داخل المملكة عبر تطبيق البنك الأهلي. تبدأ العملية باختيار الحساب وإدخال بيانات المستفيد.</p><p>يوضح الفيديو طريقة إضافة مستفيد جديد، واستقبال رمز التفعيل، ثم إتمام التحويل.</p>`, 
            en: `<p>This video explains the steps for local transfer within the Kingdom via the SNB AlAhli app, starting with selecting the account and entering beneficiary details.</p><p>It shows how to add a new beneficiary, receive the activation code, and complete the transfer.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-print ms-2 text-success"></i> طباعة بطاقة الصراف (مدى)', en: '<i class="fa-solid fa-print me-2 text-success"></i> Print Mada Card' },
        v3Desc: { 
            ar: `<p>يتناول الفيديو طريقة طلب وإعادة طباعة بطاقة مدى من أجهزة الخدمة الذاتية التابعة للبنك الأهلي. يوضح كيفية تحديد أقرب جهاز وإدخال الهوية.</p><p>كما يشرح الفيديو الفرق بين “إعادة الإصدار” و“إصدار بطاقة جديدة”.</p>`, 
            en: `<p>This video covers how to request and reprint a Mada card from SNB AlAhli self-service kiosks, showing how to locate the nearest machine and enter your ID.</p><p>It also explains the difference between "Re-issuance" and "New Card Issuance".</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية هامة', en: '<i class="fas fa-link me-2"></i> Important Official Links' },
        linkAlahli: { ar: '<i class="fas fa-globe ms-2"></i> موقع البنك الأهلي', en: '<i class="fas fa-globe me-2"></i> SNB AlAhli Website' },
        linkLocations: { ar: '<i class="fas fa-map-location-dot ms-2"></i> مواقع أجهزة الخدمة الذاتية', en: '<i class="fas fa-map-location-dot me-2"></i> Self-Service Kiosk Locations' }
    },

    // --- صفحة بنك الراجحي ---
    bank_alrajhi: {
        pageTitle: { ar: "خدمات بنك الراجحي", en: "Al Rajhi Bank Services" },
        pageDesc: { 
            ar: "شرح لأهم خدمات الراجحي بخطوات واضحة عبر التطبيق والمنصة الإلكترونية الخاصة بالبنك.", 
            en: "Clear explanation of the most important Al Rajhi services via the app and online platform." 
        },
        v1Title: { ar: '<i class="fa-solid fa-right-to-bracket ms-2 text-success"></i> تسجيل الدخول لتطبيق الراجحي', en: '<i class="fa-solid fa-right-to-bracket me-2 text-success"></i> Login to Al Rajhi App' },
        v1Desc: { 
            ar: `<p>يوضّح الفيديو الطريقة الصحيحة لتسجيل الدخول في تطبيق الراجحي، بدءًا من إدخال رقم المستخدم أو رقم الهوية.</p><p>كما يشرح كيفية استرجاع كلمة المرور في حال نسيانها، وطريقة تفعيل البصمة لتسهيل الدخول.</p>`, 
            en: `<p>This video shows the correct way to log in to the Al Rajhi app, starting with entering your username or ID.</p><p>It also explains how to reset a forgotten password and enable fingerprint login.</p>` 
        },
        v2TitleMob: { ar: '<i class="fa-solid fa-money-bill-transfer ms-2 text-success"></i> التحويل المحلي', en: '<i class="fa-solid fa-money-bill-transfer me-2 text-success"></i> Local Transfer' },
        v2TitleDesk: { ar: '<i class="fa-solid fa-money-bill-transfer ms-2 text-success"></i> التحويل المحلي', en: '<i class="fa-solid fa-money-bill-transfer me-2 text-success"></i> Local Transfer' },
        v2Desc: { 
            ar: `<p>يقدم الفيديو توضيحًا كاملاً لخطوات التحويل المحلي داخل المملكة عبر تطبيق الراجحي. تبدأ العملية باختيار الحساب وإدخال بيانات المستفيد.</p><p>بعدها يتم إدخال مبلغ التحويل مع كتابة الغرض من العملية، ثم تأكيد الطلب.</p>`, 
            en: `<p>This video fully explains the steps for local transfer within the Kingdom via the Al Rajhi app, starting with selecting the account and beneficiary.</p><p>It then covers entering the amount, purpose of transfer, and confirming the request.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-print ms-2 text-success"></i> طباعة بطاقة الراجحي (مدى)', en: '<i class="fa-solid fa-print me-2 text-success"></i> Print Al Rajhi Card (Mada)' },
        v3Desc: { 
            ar: `<p>يشرح الفيديو طريقة طباعة بطاقة الصراف “مدى” من أجهزة الخدمة الذاتية التابعة لبنك الراجحي. تبدأ العملية بتحديد أقرب جهاز وإدخال الهوية.</p><p>بعد ذلك يتم اختيار “طباعة بطاقة”، ثم اتباع خطوات تأكيد الطلب واستلام البطاقة فورًا.</p>`, 
            en: `<p>This video explains how to print a "Mada" debit card from Al Rajhi self-service kiosks, starting with locating the nearest machine and entering your ID.</p><p>It then covers selecting "Print Card", confirming the request, and collecting the card instantly.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية هامة', en: '<i class="fas fa-link me-2"></i> Important Official Links' },
        linkAlRajhi: { ar: '<i class="fas fa-globe ms-2"></i> موقع بنك الراجحي', en: '<i class="fas fa-globe me-2"></i> Al Rajhi Bank Website' },
        linkLocations: { ar: '<i class="fas fa-map-location-dot ms-2"></i> مواقع أجهزة الخدمة الذاتية', en: '<i class="fas fa-map-location-dot me-2"></i> Self-Service Kiosk Locations' }
    },

    // --- صفحة بنك الرياض ---
    bank_riyad: {
        pageTitle: { ar: "خدمات بنك الرياض", en: "Riyad Bank Services" },
        pageDesc: { 
            ar: "شرح مبسّط لأبرز خدمات بنك الرياض عبر التطبيق والمنصة الإلكترونية بخطوات واضحة وسهلة.", 
            en: "Simplified explanation of the most prominent Riyad Bank services via the app and online platform." 
        },
        v1Title: { ar: '<i class="fa-solid fa-right-to-bracket ms-2 text-success"></i> تسجيل الدخول لتطبيق بنك الرياض', en: '<i class="fa-solid fa-right-to-bracket me-2 text-success"></i> Login to Riyad Bank App' },
        v1Desc: { 
            ar: `<p>يوضّح الفيديو طريقة تسجيل الدخول في تطبيق بنك الرياض عبر خطوات سهلة وسريعة. تبدأ العملية بإدخال اسم المستخدم أو رقم الهوية.</p><p>الفيديو يعرض أيضًا كيفية استرجاع معلومات الدخول، إضافة إلى تفعيل الدخول بالبصمة.</p>`, 
            en: `<p>This video shows how to log in to the Riyad Bank app quickly and easily, starting with entering your username or ID.</p><p>It also covers retrieving login information and enabling fingerprint login.</p>` 
        },
        v2TitleMob: { ar: '<i class="fa-solid fa-money-bill-transfer ms-2 text-success"></i> التحويل المحلي', en: '<i class="fa-solid fa-money-bill-transfer me-2 text-success"></i> Local Transfer' },
        v2TitleDesk: { ar: '<i class="fa-solid fa-money-bill-transfer ms-2 text-success"></i> التحويل المحلي', en: '<i class="fa-solid fa-money-bill-transfer me-2 text-success"></i> Local Transfer' },
        v2Desc: { 
            ar: `<p>يقدّم الفيديو خطوات إجراء التحويل المحلي داخل المملكة من خلال تطبيق بنك الرياض. تبدأ العملية باختيار الحساب وتحديد المستفيد.</p><p>بعدها يتم إدخال مبلغ التحويل وكتابة وصف مخصص للعملية. عند التأكيد يتم إرسال رمز التحقق.</p>`, 
            en: `<p>This video presents the steps for local transfer within the Kingdom via the Riyad Bank app, starting with selecting the account and beneficiary.</p><p>It then covers entering the amount, description, and confirming with the verification code.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-print ms-2 text-success"></i> طباعة بطاقة الصراف (مدى)', en: '<i class="fa-solid fa-print me-2 text-success"></i> Print Mada Card' },
        v3Desc: { 
            ar: `<p>يشرح الفيديو طريقة طباعة بطاقة الصراف “مدى” من أجهزة الخدمة الذاتية لبنك الرياض. تبدأ العملية بتحديد أقرب جهاز، ثم إدخال رقم الهوية.</p><p>بعد ذلك يتم اختيار “إصدار بطاقة جديدة” أو “استبدال البطاقة”، ثم اتباع الخطوات البسيطة لاستلام البطاقة.</p>`, 
            en: `<p>This video explains how to print a "Mada" debit card from Riyad Bank self-service kiosks, starting with locating the nearest machine and entering your ID.</p><p>It then covers selecting "New Card" or "Replace Card" and following the simple steps.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط هامة', en: '<i class="fas fa-link me-2"></i> Important Links' },
        linkRiyad: { ar: '<i class="fas fa-globe ms-2"></i> موقع بنك الرياض', en: '<i class="fas fa-globe me-2"></i> Riyad Bank Website' },
        linkCards: { ar: '<i class="fas fa-credit-card ms-2"></i> بطاقات مدى والائتمانية', en: '<i class="fas fa-credit-card me-2"></i> Mada & Credit Cards' }
    },

    // --- صفحة بي كير ---
    bekare: {
        pageTitle: { ar: "خدمات منصة بي كير (Bcare)", en: "Bcare Platform Services" },
        pageDesc: { 
            ar: "دليل شامل لاستخدام أول منصة تأمين ذكية في المملكة. خطوات إصدار تأمين المركبات، التأمين الطبي للمنشآت، وتأمين الزيارة العائلية.", 
            en: "Comprehensive guide to Saudi's first smart insurance platform. Steps for vehicle insurance, medical insurance for SMEs, and family visit insurance." 
        },
        v1Title: { ar: '<i class="fa-solid fa-car-burst ms-2 text-success"></i> تأمين المركبات وربط أبشر', en: '<i class="fa-solid fa-car-burst me-2 text-success"></i> Vehicle Insurance & Absher Linking' },
        v1Desc: { 
            ar: `<p>تُعد خدمة تأمين المركبات عبر منصة "بي كير" الخيار الأسرع لملايين المستفيدين، حيث تتيح المنصة مقارنة أسعار أكثر من 20 شركة تأمين.</p><p>تتميز المنصة بالربط الإلكتروني المباشر مع نظام "نجم" والمرور لتحديث الحالة في "أبشر" فوراً.</p>`, 
            en: `<p>Vehicle insurance via "Bcare" is the fastest option, allowing comparison of over 20 insurance companies.</p><p>The platform features direct electronic linking with "Najm" and Traffic systems to update status in "Absher" instantly.</p>` 
        },
        v2TitleMob: { ar: '<i class="fa-solid fa-users-medical ms-2 text-success"></i> التأمين الطبي للموظفين (CCHI)', en: '<i class="fa-solid fa-users-medical me-2 text-success"></i> Medical Insurance (CCHI)' },
        v2TitleDesk: { ar: '<i class="fa-solid fa-users-medical ms-2 text-success"></i> التأمين الطبي للموظفين (CCHI)', en: '<i class="fa-solid fa-users-medical me-2 text-success"></i> Medical Insurance for Employees (CCHI)' },
        v2Desc: { 
            ar: `<p>لأصحاب المنشآت الصغيرة والمتوسطة، تقدم بي كير حلاً رقمياً لإدارة التأمين الطبي للموظفين. تتيح الخدمة استعراض الشبكات الطبية المتاحة.</p><p>أهم ما يميز هذه الخدمة هو الربط الآلي مع مجلس الضمان الصحي (CCHI)، وهو شرط أساسي لإصدار الإقامات.</p>`, 
            en: `<p>For SMEs, Bcare offers a digital solution for managing employee medical insurance, allowing review of available medical networks.</p><p>A key feature is automatic linking with CCHI, a prerequisite for issuing residencies.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-plane-departure ms-2 text-success"></i> تأمين تمديد الزيارة العائلية', en: '<i class="fa-solid fa-plane-departure me-2 text-success"></i> Family Visit Extension Insurance' },
        v3Desc: { 
            ar: `<p>مع إلزامية وجود تأمين طبي ساري المفعول لتمديد تأشيرات الزيارة العائلية، توفر منصة بي كير خياراً سريعاً لإصدار وثيقة التأمين.</p><p>تغطي الوثيقة الحالات الطارئة، ويتم ربطها مباشرة مع وزارة الخارجية ومنصة أبشر.</p>`, 
            en: `<p>With mandatory valid medical insurance for extending family visit visas, Bcare offers a quick option to issue the policy.</p><p>The policy covers emergencies and is directly linked to the Ministry of Foreign Affairs and Absher.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط هامة', en: '<i class="fas fa-link me-2"></i> Important Links' },
        linkBcare: { ar: '<i class="fas fa-globe ms-2"></i> موقع بي كير الرسمي', en: '<i class="fas fa-globe me-2"></i> Bcare Official Website' },
        linkChi: { ar: '<i class="fas fa-building-shield ms-2"></i> مجلس الضمان الصحي', en: '<i class="fas fa-building-shield me-2"></i> CCHI Website' }
    },

    // --- صفحة تأميني ---
    taaminy: {
        pageTitle: { ar: "خدمات منصة تأميني (Tameeni)", en: "Tameeni Platform Services" },
        pageDesc: { 
            ar: "أول منصة معتمدة في المملكة لمقارنة وشراء التأمين. نوضح هنا خطوات تأمين المركبات وربطها بالمرور، وحلول التأمين الطبي للمنشآت والممارسين الصحيين.", 
            en: "The first accredited platform in the Kingdom for comparing and buying insurance. We explain vehicle insurance steps, SME medical solutions, and malpractice insurance." 
        },
        v1Title: { ar: '<i class="fa-solid fa-car-crash ms-2 text-success"></i> تأمين المركبات الفوري', en: '<i class="fa-solid fa-car-crash me-2 text-success"></i> Instant Vehicle Insurance' },
        v1Desc: { 
            ar: `<p>تتميز منصة "تأميني" بكونها الأسرع في ربط وثائق التأمين مع الأنظمة الحكومية. تتيح الخدمة لمالك المركبة استعراض عروض أكثر من 20 شركة.</p><p>بمجرد السداد، يتم إصدار الوثيقة فوراً وإرسالها إلى نظام <strong>(نجم)</strong> والمرور، مما يضمن تحديث حالة المركبة في "أبشر".</p>`, 
            en: `<p>"Tameeni" is the fastest in linking insurance policies with government systems, allowing users to compare offers from over 20 companies.</p><p>Upon payment, the policy is issued instantly and sent to "Najm" and Traffic, updating the vehicle status in "Absher".</p>` 
        },
        v2Title: { ar: '<i class="fa-solid fa-briefcase-medical ms-2 text-success"></i> التأمين الطبي للمنشآت (SMEs)', en: '<i class="fa-solid fa-briefcase-medical me-2 text-success"></i> Medical Insurance for SMEs' },
        v2Desc: { 
            ar: `<p>تقدم منصة تأميني حلاً مثالياً للمنشآت الصغيرة والمتوسطة لإصدار وثيقة التأمين الطبي الموحدة للموظفين. يمكن لصاحب العمل إضافة الموظفين واختيار فئة الشبكة الطبية.</p><p>الخدمة مرتبطة بشكل كامل مع <strong>مجلس الضمان الصحي (CCHI)</strong>، مما يتيح تجديد إقامات الموظفين عبر منصة "قوى" فور إصدار الوثيقة.</p>`, 
            en: `<p>Tameeni offers an ideal solution for SMEs to issue unified medical insurance for employees, allowing employers to add staff and select network categories.</p><p>The service is fully integrated with CCHI, enabling immediate residency renewal via Qiwa platform upon policy issuance.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-user-doctor ms-2 text-success"></i> تأمين الأخطاء الطبية للممارسين', en: '<i class="fa-solid fa-user-doctor me-2 text-success"></i> Medical Malpractice Insurance' },
        v3Desc: { 
            ar: `<p>يُعد تأمين الأخطاء الطبية شرطاً أساسياً من الهيئة السعودية للتخصصات الصحية لتجديد الرخص المهنية. توفر منصة تأميني هذه الوثيقة بخطوات رقمية.</p><p>تغطي الوثيقة المسؤولية المدنية الناتجة عن الأخطاء المهنية الطبية تجاه الطرف الثالث، ويتم ربط الوثيقة آلياً مع "ممارس بلس".</p>`, 
            en: `<p>Medical malpractice insurance is a prerequisite for renewing professional licenses. Tameeni provides this policy digitally.</p><p>The policy covers civil liability for medical errors towards third parties and is automatically linked with "Mumaris Plus".</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية', en: '<i class="fas fa-link me-2"></i> Official Links' },
        linkTameeni: { ar: '<i class="fas fa-globe ms-2"></i> منصة تأميني', en: '<i class="fas fa-globe me-2"></i> Tameeni Platform' },
        linkChi: { ar: '<i class="fas fa-shield-halved ms-2"></i> مجلس الضمان الصحي', en: '<i class="fas fa-shield-halved me-2"></i> CCHI Website' }
    },

    // --- صفحة نجم ---
    Najm_website: {
        pageTitle: { ar: "خدمات نجم للحوادث والمطالبات", en: "Najm Services for Accidents" },
        pageDesc: { 
            ar: "الدليل الرقمي لخدمات شركة نجم (Najm). تعلم كيفية استخدام التطبيق للإبلاغ عن الحوادث، وخطوات رفع المطالبات المالية لشركات التأمين إلكترونياً.", 
            en: "Digital guide to Najm services. Learn how to report accidents via the app and submit financial claims to insurance companies electronically." 
        },
        v1Title: { ar: '<i class="fa-solid fa-user-plus ms-2 text-success"></i> التسجيل في خدمات نجم', en: '<i class="fa-solid fa-user-plus me-2 text-success"></i> Register in Najm' },
        v1Desc: { 
            ar: `<p>تُعد الخطوة الأولى للاستفادة من خدمات الحوادث والتأمين هي إنشاء حساب في تطبيق أو موقع "نجم". يتيح الحساب للمستفيد متابعة حالة الحوادث المسجلة عليه.</p><p>التسجيل يتطلب رقم الهوية ورقم الجوال المسجل في أبشر، وهو ضروري جداً لضمان وصول رسائل التنبيه.</p>`, 
            en: `<p>The first step is to create an account in the Najm app or website. The account allows beneficiaries to track accident status.</p><p>Registration requires ID number and a mobile number registered in Absher for notifications.</p>` 
        },
        v2Title: { ar: '<i class="fa-solid fa-car-burst ms-2 text-success"></i> الإبلاغ عن حادث مروري', en: '<i class="fa-solid fa-car-burst me-2 text-success"></i> Report Traffic Accident' },
        v2Desc: { 
            ar: `<p>في حال وقوع حادث بسيط (لا قدر الله) وكان أحد الأطراف يحمل تأميناً سارياً، يجب استخدام تطبيق نجم للإبلاغ فوراً بدلاً من انتظار الدورية.</p><p>يشرح الفيديو خطوات تحديد موقع الحادث بدقة عبر الخريطة، وتصوير المركبات المتضررة لإرفاقها في التطبيق.</p>`, 
            en: `<p>In case of a minor accident with valid insurance, use the Najm app to report immediately instead of waiting for a patrol.</p><p>The video explains how to pinpoint the location on the map and upload photos of damaged vehicles.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-file-invoice-dollar ms-2 text-success"></i> رفع المطالبات المالية', en: '<i class="fa-solid fa-file-invoice-dollar me-2 text-success"></i> Submit Financial Claims' },
        v3Desc: { 
            ar: `<p>بعد الانتهاء من تخطيط الحادث، تأتي مرحلة استلام التعويض. تتيح خدمة "المطالبات الإلكترونية" رفع الطلب لشركات التأمين دون زيارة مقراتها.</p><p>يتم الدخول للموقع، وتعبئة نموذج المطالبة وإرفاق الآيبان البنكي (IBAN). يتم تحويل مبلغ التعويض إلى حساب المتضرر البنكي مباشرة.</p>`, 
            en: `<p>After accident assessment, comes the compensation phase. "E-Claims" allows submitting requests to insurance companies online.</p><p>Access the site, fill the claim form, and attach the IBAN. Compensation is transferred directly to the victim's bank account.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية', en: '<i class="fas fa-link me-2"></i> Official Links' },
        linkNajm: { ar: '<i class="fas fa-globe ms-2"></i> الدخول لخدمات نجم للأفراد', en: '<i class="fas fa-globe me-2"></i> Najm Services Login' }
    },

    // --- صفحة التجارة ---
    commerce: {
        pageTitle: { ar: "خدمات وزارة التجارة (المركز السعودي للأعمال)", en: "Ministry of Commerce Services (SBC)" },
        pageDesc: { 
            ar: "دليل التاجر ورواد الأعمال. شرح مفصل لخدمات إصدار السجل التجاري، حجز الأسماء التجارية، وإدارة التراخيص عبر منصة الأعمال.", 
            en: "A guide for merchants and entrepreneurs. Detailed explanation of Commercial Registration issuance, trade name reservation, and license management via the Business Platform." 
        },
        v1Title: { ar: '<i class="fa-solid fa-file-signature ms-2 text-success"></i> إصدار السجل التجاري (180 ثانية)', en: '<i class="fa-solid fa-file-signature me-2 text-success"></i> Issue Commercial Registration (180 Seconds)' },
        v1Desc: { 
            ar: `<p>تُعد خدمة إصدار السجل التجاري إلكترونياً من أبرز الخدمات التي تقدمها الوزارة لتمكين رواد الأعمال. لا يتطلب الأمر زيارة أي فرع، ويتم الإصدار خلال دقائق معدودة.</p><p>يمكن للمستفيد إصدار سجل لمؤسسة فردية أو شركة. يتطلب النظام تحديد نوع النشاط بدقة وسداد الرسوم الموحدة.</p>`, 
            en: `<p>Electronic Commercial Registration issuance is a key service empowering entrepreneurs. It requires no branch visits and is completed in minutes.</p><p>Beneficiaries can issue a CR for an establishment or company. The system requires accurate activity selection and unified fee payment.</p>` 
        },
        v2Title: { ar: '<i class="fa-solid fa-tag ms-2 text-success"></i> حجز الاسم التجاري', en: '<i class="fa-solid fa-tag me-2 text-success"></i> Trade Name Reservation' },
        v2Desc: { 
            ar: `<p>قبل إصدار السجل، يرغب الكثيرون في اختيار "اسم تجاري" مميز. تتيح هذه الخدمة البحث عن الأسماء وحجزها إلكترونياً لضمان تفرد العلامة التجارية.</p><p>يجب أن يكون الاسم عربياً، ذا معنى واضح، ولا يحتوي على كلمات ممنوعة. بعد الموافقة، يتم حجز الاسم لمدة 60 يوماً.</p>`, 
            en: `<p>Before issuing a CR, many prefer a unique "Trade Name". This service allows searching and reserving names electronically to ensure brand uniqueness.</p><p>The name must be Arabic, meaningful, and free of prohibited words. Once approved, it is reserved for 60 days.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-ban ms-2 text-success"></i> شطب السجل التجاري', en: '<i class="fa-solid fa-ban me-2 text-success"></i> Cancel Commercial Registration' },
        v3Desc: { 
            ar: `<p>عند الرغبة في إغلاق النشاط التجاري نهائياً، يجب المبادرة بطلب "شطب السجل" لتفادي تراكم الرسوم الحكومية وغرامات التأخير.</p><p>تشترط الوزارة لإتمام الشطب: عدم وجود عمالة على السجل، وسداد جميع المستحقات الحكومية. بمجرد الشطب، يتم إسقاط الرقم الضريبي والزكوي آلياً.</p>`, 
            en: `<p>When closing a business permanently, initiate a "CR Cancellation" request to avoid accumulating government fees and fines.</p><p>Conditions for cancellation include: no labor on the CR and payment of all dues. Once cancelled, Tax and Zakat numbers are dropped automatically.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية', en: '<i class="fas fa-link me-2"></i> Official Links' },
        linkMC: { ar: '<i class="fas fa-globe ms-2"></i> موقع وزارة التجارة', en: '<i class="fas fa-globe me-2"></i> Ministry of Commerce Website' },
        linkBusiness: { ar: '<i class="fas fa-laptop-house ms-2"></i> المركز السعودي للأعمال', en: '<i class="fas fa-laptop-house me-2"></i> Saudi Business Center' }
    },

    // --- صفحة قوى ---
    qiwa: {
        pageTitle: { ar: "خدمات منصة قوى (Qiwa)", en: "Qiwa Platform Services" },
        pageDesc: { 
            ar: "الواجهة الموحدة لخدمات وزارة الموارد البشرية. شرح خطوات نقل الخدمات الوظيفية، توثيق العقود، وإدارة رخص العمل للمنشآت والأفراد.", 
            en: "The unified interface for Ministry of Human Resources services. Explaining steps for employee transfer, contract authentication, and work permit management." 
        },
        v1Title: { ar: '<i class="fa-solid fa-people-arrows ms-2 text-success"></i> نقل الخدمات (نقل الكفالة)', en: '<i class="fa-solid fa-people-arrows me-2 text-success"></i> Employee Transfer Service' },
        v1Desc: { 
            ar: `<p>تغير نظام نقل الكفالة القديم جذرياً عبر منصة قوى، حيث أصبح يعتمد على "العلاقة التعاقدية". تبدأ العملية بتقديم المنشأة الجديدة عرضاً وظيفياً للموظف.</p><p>يجب على الموظف الدخول لحسابه في "قوى أفراد" وقبول العرض. في حال إكمال الفترة، يتم النقل فوراً دون موافقة الكفيل السابق.</p>`, 
            en: `<p>The sponsorship transfer system has evolved into a "Contractual Relationship" model via Qiwa. The process starts with the new establishment sending a job offer.</p><p>The employee must log in to "Qiwa Individuals" to accept. If the contract period is complete, transfer is immediate without former employer approval.</p>` 
        },
        v2Title: { ar: '<i class="fa-solid fa-file-contract ms-2 text-success"></i> إدارة وتوثيق العقود', en: '<i class="fa-solid fa-file-contract me-2 text-success"></i> Contract Management' },
        v2Desc: { 
            ar: `<p>ألزمت الوزارة جميع المنشآت بتوثيق عقود الموظفين إلكترونياً بنسبة 100%. يضمن العقد الموثق حقوق الطرفين.</p><p>يقوم صاحب العمل بإنشاء العقد وإرساله. تصل رسالة للموظف للقبول أو الرفض. بعد القبول، يتم تحديث البيانات في التأمينات.</p>`, 
            en: `<p>The Ministry mandates 100% electronic contract authentication. A documented contract guarantees the rights of both parties.</p><p>The employer creates and sends the contract. The employee receives a notification to accept or reject. Upon acceptance, data is updated in GOSI.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-id-card-clip ms-2 text-success"></i> إصدار وتجديد رخص العمل', en: '<i class="fa-solid fa-id-card-clip me-2 text-success"></i> Issue/Renew Work Permits' },
        v3Desc: { 
            ar: `<p>رخصة العمل هي الوثيقة الأساسية التي تسبق تجديد إقامة العامل. تعتمد الرسوم على نسبة التوطين في المنشأة.</p><p>يتم إصدار رقم سداد موحد. بعد السداد، يتم تحديث الحالة في نظام "أبشر أعمال" فوراً للسماح بتجديد الإقامة.</p>`, 
            en: `<p>The Work Permit is prerequisite for renewing residency. Fees depend on the establishment's Saudization ratio.</p><p>A unified SADAD number is issued. After payment, status is updated in "Absher Business" immediately to allow residency renewal.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية', en: '<i class="fas fa-link me-2"></i> Official Links' },
        linkQiwa: { ar: '<i class="fas fa-globe ms-2"></i> الدخول لمنصة قوى', en: '<i class="fas fa-globe me-2"></i> Qiwa Platform Login' },
        linkHRSD: { ar: '<i class="fas fa-building-user ms-2"></i> وزارة الموارد البشرية', en: '<i class="fas fa-building-user me-2"></i> HRSD Ministry' }
    },

    // --- صفحة حساب المواطن ---
    citizen: {
        pageTitle: { ar: "خدمات برنامج حساب المواطن", en: "Citizen Account Program Services" },
        pageDesc: { 
            ar: "الدليل الكامل للاستفادة من دعم حساب المواطن. شرح خطوات التسجيل الجديد، طريقة الإفصاح عن الدخل، ورفع الاعتراضات المالية.", 
            en: "Complete guide to Citizen Account support. Explaining new registration steps, income disclosure methods, and submitting financial objections." 
        },
        // 1. التسجيل
        v1Title: { ar: '<i class="fa-solid fa-users-viewfinder ms-2 text-success"></i> التسجيل وإضافة التابعين', en: '<i class="fa-solid fa-users-viewfinder me-2 text-success"></i> Registration & Adding Dependents' },
        v1Desc: { 
            ar: `<p>الخطوة الأولى للحصول على الدعم هي إنشاء حساب جديد لرب الأسرة، ثم إضافة التابعين (الزوجة والأبناء) بشكل صحيح. يتطلب النظام إثبات استقلالية السكن للفرد المستقل.</p><p>يجب التأكد من تطابق بيانات التابعين مع السجلات المدنية، حيث يتم التحقق آلياً. أي خطأ في البيانات قد يؤدي لعدم احتساب التابع.</p>`, 
            en: `<p>The first step to get support is creating an account for the head of household and adding dependents correctly. Independent individuals must prove housing independence.</p><p>Ensure dependent data matches civil records as verification is automated. Errors may lead to excluding the dependent from support.</p>` 
        },
        // 2. الدخل
        v2Title: { ar: '<i class="fa-solid fa-money-check-dollar ms-2 text-success"></i> الإفصاح الصحيح عن الدخل', en: '<i class="fa-solid fa-money-check-dollar me-2 text-success"></i> Correct Income Disclosure' },
        v2Desc: { 
            ar: `<p>السبب الأول لظهور حالة "غير مؤهل" هو عدم الإفصاح الكامل عن الدخل. يجب تسجيل الراتب الإجمالي (شاملاً البدلات قبل خصم التأمينات)، وليس الصافي.</p><p>كما يجب الإفصاح عن أي دخل إضافي مثل العوائد التجارية، أو "حافز" وساند. إخفاء أي دخل قد يعرضك لإيقاف الدعم.</p>`, 
            en: `<p>The main reason for "Ineligible" status is incomplete income disclosure. You must declare the total gross salary (including allowances), not the net salary.</p><p>Additional income like commercial returns or Hafiz/Saned must also be disclosed. Hiding income may lead to support suspension.</p>` 
        },
        // 3. الاعتراض
        v3Title: { ar: '<i class="fa-solid fa-gavel ms-2 text-success"></i> الاعتراض على الأهلية والدفعات', en: '<i class="fa-solid fa-gavel me-2 text-success"></i> Eligibility & Payment Objections' },
        v3Desc: { 
            ar: `<p>في حال ظهرت النتيجة "غير مؤهل"، يمنح النظام المستفيد مهلة 90 يوماً لتقديم اعتراض إلكتروني وإرفاق المستندات التي تثبت زوال سبب المنع.</p><p>كما يمكن تقديم اعتراض مالي إذا كان المبلغ ناقصاً. في حال قبول الاعتراض، يتم صرف المستحقات بأثر رجعي.</p>`, 
            en: `<p>If the result is "Ineligible", the beneficiary has 90 days to submit an objection with documents proving the issue is resolved.</p><p>Financial objections can be submitted for missing amounts. If accepted, dues are paid retroactively.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية', en: '<i class="fas fa-link me-2"></i> Official Links' },
        linkPortal: { ar: '<i class="fas fa-globe ms-2"></i> البوابة الإلكترونية لحساب المواطن', en: '<i class="fas fa-globe me-2"></i> Citizen Account Portal' },
        linkCalc: { ar: '<i class="fas fa-calculator ms-2"></i> الحاسبة التقديرية للدعم', en: '<i class="fas fa-calculator me-2"></i> Support Calculator' }
    },

    // --- صفحة التعليم ---
    education: {
        pageTitle: { ar: "الخدمات التعليمية (نور ومدرستي)", en: "Educational Services (Noor & Madrasati)" },
        pageDesc: { 
            ar: "بوابة الطالب وولي الأمر للخدمات التعليمية في المملكة. خطوات التسجيل في نظام نور، استخراج النتائج، وشرح التعامل مع منصة مدرستي للتعليم عن بعد.", 
            en: "Student and parent gateway for educational services. Steps for Noor registration, results extraction, and using Madrasati platform." 
        },
        // 1. نور
        v1Title: { ar: '<i class="fa-solid fa-id-card ms-2 text-success"></i> نظام نور: النتائج والشهادات', en: '<i class="fa-solid fa-id-card me-2 text-success"></i> Noor System: Results & Certificates' },
        v1Desc: { 
            ar: `<p>يُعتبر "نظام نور" العصب الرئيسي للإدارة التعليمية في المملكة. الخدمة الأكثر استخداماً هي الاستعلام عن النتائج وطباعة الشهادات والتعريف الدراسي.</p><p>يتم الدخول للنظام عبر حساب ولي الأمر أو عبر "النفاذ الوطني الموحد". يتيح النظام لولي الأمر متابعة غياب الطالب والاطلاع على التقارير الفترية.</p>`, 
            en: `<p>"Noor System" is the main hub for educational management. It allows inquiring about results and printing certificates.</p><p>Access is via guardian account or Nafath. It enables parents to track student attendance and view periodic reports.</p>` 
        },
        // 2. تسجيل
        v2Title: { ar: '<i class="fa-solid fa-user-graduate ms-2 text-success"></i> تسجيل الطلاب المستجدين', en: '<i class="fa-solid fa-user-graduate me-2 text-success"></i> New Student Registration' },
        v2Desc: { 
            ar: `<p>خدمة تسجيل طلاب الصف الأول الابتدائي ورياض الأطفال هي عملية موسمية تعتمد على الأولوية والشواغر. يتم فتح باب التسجيل وفق جدول زمني.</p><p>يجب على ولي الأمر تجهيز المستندات لتحديد المدرسة الأقرب. يشرح الفيديو خطوات حجز المقعد، إرفاق المرفقات، والكشف الطبي المبدئي.</p>`, 
            en: `<p>Registering first-grade and kindergarten students depends on priority and vacancies. Registration opens according to a schedule.</p><p>Parents must prepare documents to select the nearest school. The video explains seat reservation and medical examination steps.</p>` 
        },
        // 3. مدرستي
        v3Title: { ar: '<i class="fa-solid fa-laptop-code ms-2 text-success"></i> منصة مدرستي: التعليم الرقمي', en: '<i class="fa-solid fa-laptop-code me-2 text-success"></i> Madrasati: Digital Learning' },
        v3Desc: { 
            ar: `<p>بينما يُستخدم "نور" للإجراءات الإدارية، فإن "منصة مدرستي" هي الفصل الدراسي الرقمي اليومي للطالب. الدخول للمنصة يتطلب حساب مايكروسوفت.</p><p>من خلال المنصة، يقوم الطالب بحضور الحصص الافتراضية عبر "تيمز"، حل الواجبات، والتواصل مع المعلمين.</p>`, 
            en: `<p>"Madrasati" is the daily digital classroom. Access requires a Microsoft account.</p><p>Through the platform, students attend virtual classes via Teams, solve assignments, and communicate with teachers.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية', en: '<i class="fas fa-link me-2"></i> Official Links' },
        linkNoor: { ar: '<i class="fas fa-globe ms-2"></i> الدخول لنظام نور', en: '<i class="fas fa-globe me-2"></i> Noor System Login' },
        linkMadrasati: { ar: '<i class="fas fa-school ms-2"></i> الدخول لمنصة مدرستي', en: '<i class="fas fa-school me-2"></i> Madrasati Login' }
    },

    // --- صفحة البلدية ---
    municipal: {
        pageTitle: { ar: "الخدمات البلدية (منصة بلدي)", en: "Municipal Services (Balady Platform)" },
        pageDesc: { 
            ar: "بوابتك الرقمية لإنجاز المعاملات البلدية دون زيارة الأمانة. شرح خطوات استخراج الرخص التجارية، الشهادات الصحية، وتقديم البلاغات لتحسين المشهد الحضري.", 
            en: "Your digital gateway for municipal services. Steps for commercial licenses, health certificates, and submitting reports to improve the urban landscape." 
        },
        // 1. رخصة
        v1Title: { ar: '<i class="fa-solid fa-shop ms-2 text-success"></i> إصدار الرخصة التجارية الفورية', en: '<i class="fa-solid fa-shop me-2 text-success"></i> Instant Commercial License Issuance' },
        v1Desc: { 
            ar: `<p>تُعد "الرخصة الفورية" عبر منصة بلدي نقلة نوعية لأصحاب المشاريع. يشترط النظام وجود عقد إيجار إلكتروني موثق عبر شبكة "إيجار".</p><p>يتم تحديد نوع النشاط ومساحة المحل، وسداد الرسوم إلكترونياً. في بعض الأنشطة، تتطلب الرخصة موافقة الدفاع المدني وتركيب كاميرات المراقبة.</p>`, 
            en: `<p>The "Instant License" via Balady is a game-changer. It requires a documented electronic lease contract via "Ejar".</p><p>Select activity type and shop area, then pay fees online. Some activities require Civil Defense approval and CCTV installation.</p>` 
        },
        // 2. بلاغات
        v2Title: { ar: '<i class="fa-solid fa-camera ms-2 text-success"></i> البلاغات (صور وأرسل)', en: '<i class="fa-solid fa-camera me-2 text-success"></i> Reports (Snap & Send)' },
        v2Desc: { 
            ar: `<p>تتيح خدمة البلاغات (940) للمواطنين والمقيمين المساهمة في تحسين المشهد الحضري. يمكن الإبلاغ عن الحفر، أعطال الإنارة، أو النظافة العامة عبر تطبيق بلدي.</p><p>تتميز الخدمة بميزة تحديد الموقع الجغرافي (GPS) وإرفاق صور للمخالفة. يتم إرسال البلاغ لفرقة الصيانة المختصة ومعالجته.</p>`, 
            en: `<p>The 940 reporting service allows residents to improve the urban landscape. Report potholes, lighting faults, or hygiene issues via Balady app.</p><p>The service features GPS location and photo attachment. The report is sent to the maintenance team for processing.</p>` 
        },
        // 3. شهادة صحية
        v3Title: { ar: '<i class="fa-solid fa-user-doctor ms-2 text-success"></i> الشهادة الصحية للعاملين', en: '<i class="fa-solid fa-user-doctor me-2 text-success"></i> Health Certificate for Workers' },
        v3Desc: { 
            ar: `<p>الشهادة الصحية شرط إلزامي لجميع العاملين في الأنشطة المتعلقة بالصحة العامة. يتم إصدارها بعد إجراء الفحص الطبي في أحد المراكز المعتمدة.</p><p>بمجرد ظهور نتيجة الفحص "لائق"، يتم ربط النتيجة آلياً بمنصة بلدي، ويمكن لصاحب العمل طباعة الشهادة فوراً وسداد الرسوم.</p>`, 
            en: `<p>A Health Certificate is mandatory for public health-related activities. It is issued after a medical examination at an accredited center.</p><p>Once the result is "Fit", it's linked to Balady, allowing the employer to print the certificate instantly after payment.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية', en: '<i class="fas fa-link me-2"></i> Official Links' },
        linkBalady: { ar: '<i class="fas fa-globe ms-2"></i> منصة بلدي', en: '<i class="fas fa-globe me-2"></i> Balady Platform' },
        linkMomrah: { ar: '<i class="fas fa-building-columns ms-2"></i> وزارة الشؤون البلدية', en: '<i class="fas fa-building-columns me-2"></i> MOMRAH Ministry' }
    },

    // --- صفحة الضمان ---
    social: {
        pageTitle: { ar: "نظام الضمان الاجتماعي المطور", en: "Developed Social Security System" },
        pageDesc: { 
            ar: "الدليل الشامل لمنصة الدعم والحماية الاجتماعية. شرح خطوات التسجيل في النظام المطور، شروط الاستحقاق، ومتابعة الأهلية الشهرية.", 
            en: "Comprehensive guide to the Social Support and Protection Platform. Steps for registration, eligibility conditions, and tracking monthly eligibility." 
        },
        // 1. التعريف
        v1Title: { ar: '<i class="fa-solid fa-scale-balanced ms-2 text-success"></i> أهداف النظام المطور', en: '<i class="fa-solid fa-scale-balanced me-2 text-success"></i> System Objectives' },
        v1Desc: { 
            ar: `<p>يختلف "الضمان الاجتماعي المطور" عن النظام السابق بأنه لا يعتمد فقط على الحالة الاجتماعية، بل يعتمد بشكل أساسي على **حالة الدخل** وعدد أفراد الأسرة.</p><p>يهدف النظام إلى تمكين المستفيدين وتحويلهم من الاحتياج إلى الإنتاج، مع ضمان تغطية الاحتياجات الأساسية للأسر الأشد حاجة.</p>`, 
            en: `<p>The "Developed Social Security" differs from the old system by focusing on **income status** and household size rather than just social status.</p><p>It aims to empower beneficiaries, moving them from need to production, while covering basic needs for the most needy families.</p>` 
        },
        // 2. التسجيل
        v2Title: { ar: '<i class="fa-solid fa-file-signature ms-2 text-success"></i> التسجيل والملف الموحد', en: '<i class="fa-solid fa-file-signature me-2 text-success"></i> Registration & Unified File' },
        v2Desc: { 
            ar: `<p>الخطوة الأولى للاستفادة من الدعم هي التسجيل في منصة الدعم والحماية الاجتماعية وتعبئة "الملف الموحد" بدقة. يجب الإفصاح عن جميع مصادر الدخل.</p><p>يشرح الفيديو بالتفصيل طريقة تكوين المنزل وإسناد التابعين، حيث أن أي خطأ في البيانات قد يؤدي إلى رفض الطلب.</p>`, 
            en: `<p>The first step is registering on the platform and accurately filling out the "Unified File", disclosing all income sources.</p><p>The video explains household formation and adding dependents. Data errors may lead to request rejection.</p>` 
        },
        // 3. الأهلية
        v3Title: { ar: '<i class="fa-solid fa-list-check ms-2 text-success"></i> دراسة الأهلية والاعتراض', en: '<i class="fa-solid fa-list-check me-2 text-success"></i> Eligibility Study & Objection' },
        v3Desc: { 
            ar: `<p>يتم صدور نتائج الأهلية شهرياً. تظهر النتيجة إما "مؤهل" لاستلام الدفعة، أو "غير مؤهل" مع ذكر السبب.</p><p>في حال عدم الأهلية، يحق للمستفيد تقديم **اعتراض** إلكتروني وإرفاق المستندات التي تثبت أحقيته.</p>`, 
            en: `<p>Eligibility results are issued monthly. The result is either "Eligible" or "Ineligible" with a reason.</p><p>If ineligible, the beneficiary can submit an electronic **objection** with supporting documents.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية', en: '<i class="fas fa-link me-2"></i> Official Links' },
        linkSBIS: { ar: '<i class="fas fa-globe ms-2"></i> منصة الدعم والحماية (التسجيل والدخول)', en: '<i class="fas fa-globe me-2"></i> Support & Protection Platform' },
        linkHRSD: { ar: '<i class="fas fa-building-user ms-2"></i> وزارة الموارد البشرية', en: '<i class="fas fa-building-user me-2"></i> HRSD Ministry' }
    },

    // --- صفحة اتصل بنا ---
    contact: {
        pageTitle: { ar: "اتصل بنا", en: "Contact Us" },
        mainDesc: { 
            ar: "نحن هنا لمساعدتك في أي استفسار أو اقتراح. يرجى ملء النموذج أدناه، أو استخدام معلومات الاتصال.", 
            en: "We are here to help you with any inquiries or suggestions. Please fill out the form below or use the contact information." 
        },
        formTitle: { ar: "أرسل رسالتك", en: "Send Your Message" },
        lbl_name: { ar: "الاسم الكامل", en: "Full Name" },
        lbl_email: { ar: "البريد الإلكتروني", en: "Email Address" },
        lbl_subject: { ar: "الموضوع", en: "Subject" },
        lbl_message: { ar: "الرسالة", en: "Message" },
        ph_name: { ar: "أدخل اسمك", en: "Enter your name" },
        ph_email: { ar: "example@email.com", en: "example@email.com" },
        ph_subject: { ar: "وصف الموضوع", en: "Subject description" },
        ph_message: { ar: "اكتب رسالتك هنا...", en: "Write your message here..." },
        btn_send: { ar: '<i class="fas fa-paper-plane me-2"></i> إرسال الرسالة', en: '<i class="fas fa-paper-plane me-2"></i> Send Message' },
        hdr_address: { ar: '<i class="fas fa-map-marker-alt me-2"></i>العنوان', en: '<i class="fas fa-map-marker-alt me-2"></i>Address' },
        txt_address: { ar: "جدة، المملكة العربية السعودية", en: "Jeddah, Saudi Arabia" },
        hdr_phone: { ar: '<i class="fas fa-phone me-2"></i>الهاتف', en: '<i class="fas fa-phone me-2"></i>Phone' },
        txt_phone: { ar: "+966577478383", en: "+966577478383" },
        hdr_email: { ar: '<i class="fas fa-envelope me-2"></i>الإيميل', en: '<i class="fas fa-envelope me-2"></i>Email' },
        hdr_hours: { ar: '<i class="fas fa-clock me-2"></i>ساعات العمل', en: '<i class="fas fa-clock me-2"></i>Working Hours' },
        txt_hours: { ar: "من الأحد إلى الخميس، 8 صباحاً - 4 مساءً", en: "Sunday to Thursday, 8 AM - 4 PM" }
    },

    // --- صفحة من نحن ---
    about: {
        pageTitle: { ar: "عن المنصة", en: "About Us" },
        pageDesc: { 
            ar: "منصة الخدمات العامة توفر وصولاً موحداً إلى الخدمات الحكومية والبنكية والتأمينية.", 
            en: "Public Services Platform provides unified access to government, banking, and insurance services." 
        },
        mainTitle: { ar: "عن المنصة", en: "About Us" },
        mainDesc: { 
            ar: "منصة الخدمات العامة توفر وصولاً موحداً إلى الخدمات الحكومية والبنكية والتأمينية.", 
            en: "Public Services Platform provides unified access to government, banking, and insurance services." 
        },
        missionTitle: { ar: "رؤيتنا", en: "Our Vision" },
        missionText: { 
            ar: "نسعى لأن نكون المنصة السعودية الرائدة للوصول السريع إلى الخدمات ضمن رؤية 2030.", 
            en: "We aim to be the leading Saudi platform for quick access to services within Vision 2030." 
        },
        historyTitle: { ar: "تاريخنا", en: "Our History" },
        hist_2025: { ar: "إطلاق المنصة مع 7 خدمات أساسية.", en: "Launching the platform with 7 core services." },
        hist_2026: { ar: "إضافة 20 خدمة جديدة ودعم العمل دون اتصال (PWA).", en: "Adding 20 new services and PWA support." },
        hist_2030: { ar: "التكامل الكامل مع جميع الجهات الحكومية.", en: "Full integration with all government entities." },
        statsTitle: { ar: "إحصائياتنا", en: "Our Statistics" },
        stat_users: { ar: "مستخدم شهري", en: "Monthly Users" },
        stat_links: { ar: "روابط خدمة", en: "Service Links" },
        stat_langs: { ar: "لغات", en: "Languages" },
        stat_rating: { ar: "تقييم", en: "Rating" },
        startBtn: { ar: "ابدأ الآن", en: "Start Now" }
    },

    // --- صفحة الأسئلة الشائعة (الجديدة) ---
    faq: {
        mainTitle: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions" },
        mainDesc: { 
            ar: "إليك إجابات على أكثر الأسئلة شيوعاً حول الخدمات. إذا لم تجد إجابتك، تواصل معنا.", 
            en: "Here are answers to the most common questions. If you can't find your answer, contact us." 
        },
        searchPH: { ar: "ابحث في الأسئلة...", en: "Search questions..." },
        searchBtn: { ar: "بحث", en: "Search" },
        questions: [
            {
                q_ar: "كيف أحجز موعد في الأحوال المدنية؟",
                a_ar: 'ادخل على أبشر، اختر "حجز موعد"، واتبع الخطوات. الرابط: <a href="https://www.absher.sa" target="_blank">أبشر</a>.',
                q_en: "How do I book an appointment at Civil Affairs?",
                a_en: 'Go to Absher, choose "Book Appointment," and follow the steps. Link: <a href="https://www.absher.sa" target="_blank">Absher</a>.'
            },
            {
                q_ar: "ما هي البنوك المدعومة للمعاملات؟",
                a_ar: "البنك الأهلي، الراجحي، والرياض. الوصول من خلال الروابط الرسمية في المنيو.",
                q_en: "Which banks are supported?",
                a_en: "SNB, Al Rajhi, and Riyad Bank. Access them via the menu links."
            },
            {
                q_ar: "كيف أقدّم مطالبة تأمين؟",
                a_ar: 'ادخل على موقع الشركة (مثل التعاونية)، واستخدم نموذج المطالبات. رابط: <a href="https://www.tawuniya.com.sa/" target="_blank">التعاونية</a>.',
                q_en: "How do I file an insurance claim?",
                a_en: 'Visit the company website (like Tawuniya) and use the claim form. Link: <a href="https://www.tawuniya.com.sa/" target="_blank">Tawuniya</a>.'
            },
            {
                q_ar: "هل الخدمات متاحة 24/7؟",
                a_ar: "نعم، معظم الخدمات الإلكترونية متاحة دائماً، لكن بعض المواعيد محدودة بالساعات الرسمية.",
                q_en: "Are services available 24/7?",
                a_en: "Yes, most e-services are available anytime, though some appointments are limited to business hours."
            },
            {
                q_ar: "كيف أغيّر اللغة في الموقع؟",
                a_ar: "اضغط على زر EN/AR في أعلى اليمين للتبديل بين العربية والإنجليزية.",
                q_en: "How do I change the language?",
                a_en: "Click the EN/AR button at the top right to switch between Arabic and English."
            },
            {
                q_ar: "ما هو الوضع المظلم؟",
                a_ar: "اضغط على ☀️ / 🌙 للتبديل بين الوضع الفاتح والمظلم لتوفير العيون.",
                q_en: "What is dark mode?",
                a_en: "Click ☀️ / 🌙 to toggle between light and dark modes for eye comfort."
            },
            {
                q_ar: "هل الموقع آمن؟",
                a_ar: "نعم، كل الروابط رسمية، ونستخدم HTTPS وأفضل ممارسات الأمان.",
                q_en: "Is the website secure?",
                a_en: "Yes, all links are official, and we use HTTPS and best security practices."
            },
            {
                q_ar: "كيف أتواصل مع الدعم؟",
                a_ar: 'استخدم صفحة "اتصل بنا" في المنيو، أو أرسل إيميل إلى support@publicservices.sa.',
                q_en: "How do I contact support?",
                a_en: 'Use the "Contact Us" page in the menu or email support@publicservices.sa.'
            }
        ]
    }, 
    
    // --- صفحة الخصوصية ---
    privacy: {
        mainTitle: { ar: "الخصوصية وسياسة الاستخدام", en: "Privacy Policy & Terms" },
        mainDesc: { 
            ar: "نحن ملتزمون بحماية خصوصيتك وبياناتك. هذه السياسة توضح كيف نجمع ونستخدم المعلومات، وشروط استخدام الموقع.", 
            en: "We are committed to protecting your privacy. This policy explains data collection, usage, and terms of use." 
        },
        searchPH: { ar: "ابحث في السياسة...", en: "Search policy..." },
        searchBtn: { ar: "بحث", en: "Search" },
        items: [
            {
                t_ar: "1. مقدمة",
                b_ar: "منصة الخدمات العامة ملتزمة بحماية خصوصية المستخدمين وفقاً لقانون حماية البيانات الشخصية في المملكة العربية السعودية (PDPL) ومعايير عالمية مثل GDPR.",
                t_en: "1. Introduction",
                b_en: "Public Services Platform is committed to protecting user privacy in accordance with the Saudi PDPL and international standards like GDPR."
            },
            {
                t_ar: "2. جمع البيانات",
                b_ar: "نجمع البيانات الشخصية مثل الاسم والإيميل فقط عند الاتصال بنا. لا نجمع بيانات حساسة، ونستخدم cookies لتحسين التجربة.",
                t_en: "2. Data Collection",
                b_en: "We collect personal data like name and email only when you contact us. We do not collect sensitive data and use cookies for better experience."
            },
            {
                t_ar: "3. استخدام البيانات",
                b_ar: "نستخدم البيانات للرد على استفساراتك، تحسين الخدمات، وإرسال تحديثات. نحتفظ بالبيانات لمدة 2 سنة، ثم نحذفها.",
                t_en: "3. Data Usage",
                b_en: "We use data to respond to inquiries, improve services, and send updates. Data is retained for 2 years then deleted."
            },
            {
                t_ar: "4. حقوقك",
                b_ar: "لديك الحق في الوصول، التعديل، الحذف، أو الاعتراض على معالجة بياناتك. اتصل بنا لممارسة حقوقك.",
                t_en: "4. Your Rights",
                b_en: "You have the right to access, modify, delete, or object to data processing. Contact us to exercise your rights."
            },
            {
                t_ar: "5. شروط الاستخدام",
                b_ar: "يجب أن تكون فوق 18 عاماً للاستخدام. لا تستخدم الموقع لأغراض غير قانونية. نحن غير مسؤولين عن الروابط الخارجية.",
                t_en: "5. Terms of Use",
                b_en: "You must be 18+ to use. Do not use for illegal purposes. We are not responsible for external links."
            },
            {
                t_ar: "6. الأمان",
                b_ar: "نستخدم HTTPS وتشفير البيانات. إذا اكتشفت خرق، أبلغنا فوراً. نحن ملتزمون بالإبلاغ للجهات المختصة.",
                t_en: "6. Security",
                b_en: "We use HTTPS and encryption. Report any breach immediately. We are committed to reporting to authorities."
            },
            {
                t_ar: "7. التعديلات",
                b_ar: "نعدّل السياسة حسب الحاجة، وننشر التغييرات هنا. آخر تحديث: 1 نوفمبر 2025.",
                t_en: "7. Amendments",
                b_en: "We update the policy as needed. Changes are published here. Last updated: Nov 1, 2025."
            },
            {
                t_ar: "8. الاتصال",
                b_ar: 'لأي استفسار، اتصل بنا عبر <a href="mailto:info@publicservice4u.com">info@publicservice4u.com</a> أو صفحة "اتصل بنا".',
                t_en: "8. Contact",
                b_en: 'For inquiries, email <a href="mailto:info@publicservice4u.com">info@publicservice4u.com</a> or visit "Contact Us".'
            }
        ]
    }, 

    // --- صفحة الشروط والأحكام ---
    terms: {
        pageTitle: { ar: "الشروط والأحكام", en: "Terms and Conditions" },
        
        termsTitle: { ar: "مقدمة", en: "Introduction" },
        termsIntro: { 
            ar: `<p>مرحباً بك في منصة الخدمات العامة (publicservice4u.com). هذه الشروط والأحكام تحكم استخدامك للموقع وخدماته التعليمية والإرشادية المتعلقة بالخدمات الحكومية والبنكية والتعليمية في المملكة العربية السعودية. باستخدام الموقع، توافق على هذه الشروط. إذا كنت لا توافق، يرجى عدم استخدام الموقع.</p><p>المنصة تقدم معلومات تعليمية مجانية فقط، ولا تتحمل أي مسؤولية قانونية عن الأخطاء أو الإجراءات الناتجة عن استخدام المعلومات. نلتزم بقوانين المملكة العربية السعودية، بما في ذلك نظام مكافحة الجرائم الإلكترونية.</p>`, 
            en: `<p>Welcome to Public Service Platform (publicservice4u.com). These Terms govern your use of the site and its educational services regarding government, banking, and educational services in KSA. By using the site, you agree to these terms. If you do not agree, please do not use the site.</p><p>The platform provides free educational information only and assumes no legal liability for errors or actions resulting from the use of information. We adhere to Saudi laws, including the Anti-Cyber Crime Law.</p>` 
        },

        terms1Title: { ar: "1. حقوق الملكية الفكرية", en: "1. Intellectual Property Rights" },
        terms1: { 
            ar: `<p>جميع المحتويات (نصوص، فيديوهات، صور) ملكية خاصة بمنصة الخدمات العامة أو مصادرها الرسمية (مثل YouTube أو مواقع حكومية). يُمنع نسخ أو توزيع أو تعديل المحتوى دون إذن كتابي مسبق. يُسمح بالاستخدام الشخصي غير التجاري فقط.</p>`, 
            en: `<p>All content (text, videos, images) is the private property of Public Service Platform or its official sources (e.g., YouTube, government sites). Copying, distributing, or modifying content without prior written permission is prohibited. Only personal non-commercial use is permitted.</p>` 
        },

        terms2Title: { ar: "2. مسؤولية المستخدم", en: "2. User Responsibility" },
        terms2: { 
            ar: `<p>أنت مسؤول عن دقة المعلومات التي تقدمها (مثل في نماذج الاتصال). يجب أن تكون فوق 18 عامًا أو تحت إشراف ولي أمر. نرفض أي محتوى مخالف للأعراف السعودية أو القوانين، وندعو للإبلاغ عنه عبر صفحة الاتصال.</p>`, 
            en: `<p>You are responsible for the accuracy of information you provide (e.g., in contact forms). You must be over 18 or under guardian supervision. We reject any content violating Saudi norms or laws and encourage reporting it via the contact page.</p>` 
        },

        terms3Title: { ar: "3. الخصوصية والأمان", en: "3. Privacy and Security" },
        terms3: { 
            ar: `<p>نحن ملتزمون بحماية بياناتك وفقًا لسياسة الخصوصية (رابط: <a href="privacy.html">سياسة الخصوصية</a>). لا نجمع بيانات شخصية إلا لأغراض تعليمية، ونستخدم ملفات تعريف الارتباط (cookies) لتحسين التجربة. يُمنع استخدام الموقع لأغراض غير قانونية.</p>`, 
            en: `<p>We are committed to protecting your data per our Privacy Policy (Link: <a href="privacy.html">Privacy Policy</a>). We collect personal data only for educational purposes and use cookies to improve experience. Illegal use of the site is prohibited.</p>` 
        },

        terms4Title: { ar: "4. الإخلال والإنهاء", en: "4. Violation and Termination" },
        terms4: { 
            ar: `<p>في حالة انتهاك هذه الشروط، نحق لنا تعليق أو إنهاء الوصول إلى الموقع دون إشعار. لا نتحمل مسؤولية عن أي خسائر ناتجة عن استخدام المعلومات (مثل أخطاء في الإجراءات الحكومية).</p>`, 
            en: `<p>In case of violation, we reserve the right to suspend or terminate access without notice. We are not liable for losses resulting from the use of information (e.g., errors in government procedures).</p>` 
        },

        terms5Title: { ar: "5. التعديلات", en: "5. Amendments" },
        terms5: { 
            ar: `<p>نحق لنا تعديل هذه الشروط في أي وقت، وسيعلم المستخدمون بالتغييرات عبر الموقع. استمرار الاستخدام يعني الموافقة على التعديلات.</p><p>آخر تحديث: 9 نوفمبر 2025.</p>`, 
            en: `<p>We reserve the right to amend these terms at any time. Users will be notified via the site. Continued use implies agreement to amendments.</p><p>Last updated: November 9, 2025.</p>` 
        },

        relatedTitle: { ar: "روابط ذات صلة", en: "Related Links" },
        relatedLinks: {
            ar: `<a href="privacy.html" target="_blank"><i class="fa-solid fa-shield-halved"></i> سياسة الخصوصية</a>
                 <a href="index.html"><i class="fa-solid fa-home"></i> العودة إلى الرئيسية</a>
                 <a href="contact.html"><i class="fa-solid fa-envelope"></i> اتصل بنا</a>`,
            en: `<a href="privacy.html" target="_blank"><i class="fa-solid fa-shield-halved"></i> Privacy Policy</a>
                 <a href="index.html"><i class="fa-solid fa-home"></i> Back to Home</a>
                 <a href="contact.html"><i class="fa-solid fa-envelope"></i> Contact Us</a>`
        }
    } 
}; 