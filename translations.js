const translations = {
    // --- نصوص مشتركة ---
    common: {
        homeLink: { ar: "الرئيسية", en: "Home" },
        langSwitch: { ar: "EN", en: "AR" }
    },

    // =========================================================
    // 1. صفحة الأحوال المدنية (Civil Affairs)
    // =========================================================
    civil_forms: {
        pageTitle: { ar: "خدمات الأحوال المدنية وتسجيل المواليد", en: "Civil Affairs & Birth Registration Services" },
        pageDesc: { 
            ar: "نقدم لك دليلاً شاملاً وتفصيلياً لكيفية الاستفادة من خدمات الأحوال المدنية الرقمية في المملكة. سواء كنت ترغب في تسجيل مولود جديد، إصدار سجل الأسرة، أو تجديد الهوية الوطنية، فإننا نشرح لك الخطوات النظامية لتجنب الأخطاء الشائعة وضمان إنجاز المعاملة من منزلك.", 
            en: "We provide a comprehensive guide on utilizing digital Civil Affairs services in KSA. Whether you want to register a newborn, issue a family registry, or renew a national ID, we explain the regulatory steps to avoid common mistakes and complete the transaction from home." 
        },
        stepsTitle: { ar: '<i class="fas fa-list-ol ms-2 text-success"></i> خطوات تسجيل المواليد وتوصيل الوثائق', en: '<i class="fas fa-list-ol me-2 text-success"></i> Birth Registration & Delivery Steps' },
        stepsList: {
            ar: `
                <li><strong>1. تسجيل الدخول الآمن:</strong> توجه إلى منصة <strong>أبشر</strong> الرسمية، وقم بتسجيل الدخول باستخدام رقم الهوية وكلمة المرور، مع إتمام التحقق الثنائي.</li>
                <li><strong>2. الوصول للخدمة:</strong> من قائمة "خدماتي"، اختر "الأحوال المدنية"، ثم انتقل إلى خدمة <strong>"تسجيل المواليد"</strong>. ستظهر لك قائمة بالمواليد الذين تم التبليغ عنهم من المستشفى إلكترونياً.</li>
                <li><strong>3. تعبئة وتدقيق البيانات:</strong> اختر المولود المراد تسجيله. تأكد من صحة الاسم وتاريخ الميلاد كما ورد في تبليغ المستشفى. أي خطأ هنا يتطلب مراجعة الفرع للتصحيح.</li>
                <li><strong>4. طلب توصيل الوثيقة:</strong> بعد التسجيل، لا حاجة لزيارة الفرع. اختر خدمة "توصيل الوثائق" عبر البريد السعودي (سبل)، وحدد عنوانك الوطني بدقة.</li>
                <li><strong>5. سداد الرسوم والتأكيد:</strong> قم بسداد رسوم التوصيل عبر نظام "سداد". بعد الدفع، سيتم طباعة شهادة الميلاد وسجل الأسرة المحدث وإرسالهما إلى باب منزلك.</li>
            `,
            en: `
                <li><strong>1. Secure Login:</strong> Go to the official <strong>Absher</strong> platform, log in using your ID and password, and complete the 2FA verification.</li>
                <li><strong>2. Access Service:</strong> Under "My Services", select "Civil Affairs", then go to <strong>"Birth Registration"</strong>. You will see a list of newborns reported electronically by the hospital.</li>
                <li><strong>3. Data Entry & Verification:</strong> Select the newborn. Verify the name and date of birth match the hospital report. Any error here requires a branch visit.</li>
                <li><strong>4. Document Delivery:</strong> No need to visit the office. Choose "Document Delivery" via Saudi Post (SPL) and select your National Address accurately.</li>
                <li><strong>5. Payment & Confirmation:</strong> Pay the delivery fees via "SADAD". Once paid, the birth certificate and updated family registry will be printed and shipped to your doorstep.</li>
            `
        },
        alertText: { ar: "تنبيه هام: تأكد من سداد رسوم التوصيل خلال 24 ساعة من الطلب لتفادي إلغاء المعاملة.", en: "Important: Ensure delivery fees are paid within 24 hours to avoid cancellation." },
        serviceNote: { ar: "تُعد هذه الخدمة إلزامية لربط بيانات المولود مع مركز المعلومات الوطني واستحقاقات حساب المواطن.", en: "This service is mandatory to link the newborn's data with NIC and Citizen Account benefits." },
        videoTitle: { ar: '<i class="fas fa-video ms-2 text-success"></i> شرح عملي بالفيديو', en: '<i class="fas fa-video me-2 text-success"></i> Video Tutorial' },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية', en: '<i class="fas fa-link me-2"></i> Official Links' },
        linkAbsher: { ar: '<i class="fas fa-globe ms-2"></i> منصة أبشر الرسمية', en: '<i class="fas fa-globe me-2"></i> Absher Platform' },
        linkMoi: { ar: '<i class="fas fa-building ms-2"></i> موقع الأحوال المدنية', en: '<i class="fas fa-building me-2"></i> Civil Affairs Website' }
    },

    // =========================================================
    // 2. صفحة الجوازات (Passport Forms)
    // =========================================================
    passport_forms: {
        pageTitle: { ar: "خدمات الجوازات: الإصدار والتجديد والإقامة", en: "Passports: Issuance, Renewal & Residency" },
        pageDesc: { 
            ar: "تعرف على أحدث الإجراءات لتجديد جواز السفر السعودي إلكترونياً، وإصدار الإقامة للعمالة المنزلية أو التجارية. نوفر لك شرحاً دقيقاً للمتطلبات المالية والتأمين الطبي اللازم لضمان قبول طلبك فورياً عبر منصة أبشر.", 
            en: "Learn the latest procedures for renewing Saudi passports electronically and issuing residencies. We provide a detailed explanation of financial requirements and medical insurance needed to ensure immediate approval via Absher." 
        },
        video1Title: { ar: '<i class="fa-solid fa-passport ms-2 text-success"></i> الإصدار والتجديد', en: '<i class="fa-solid fa-passport me-2 text-success"></i> Issuance & Renewal' },
        video1Desc: { 
            ar: `<p>نستعرض في هذا الشرح الخطوات الكاملة لتجديد الجواز لمدة 5 أو 10 سنوات. يجب أولاً سداد الرسوم الحكومية عبر تطبيق البنك، ثم الدخول لأبشر وطلب التجديد.</p><p>يشرح الفيديو أيضاً كيفية تفعيل الجواز الجديد عبر "أبشر" بعد استلامه من البريد، وهي خطوة يغفل عنها الكثيرون وتسبب تعطل السفر.</p>`, 
            en: `<p>We review the full steps to renew the passport for 5 or 10 years. First, pay government fees via your bank app, then request renewal on Absher.</p><p>The video also explains how to activate the new passport via Absher after delivery, a crucial step often missed.</p>` 
        },
        video2TitleDesk: { ar: '<i class="fa-solid fa-id-card ms-2 text-success"></i> إصدار الإقامة (أبشر أعمال)', en: '<i class="fa-solid fa-id-card me-2 text-success"></i> Residency Issuance (Absher Business)' },
        video2TitleMob: { ar: '<i class="fa-solid fa-id-card ms-2 text-success"></i> إصدار الإقامة', en: '<i class="fa-solid fa-id-card me-2 text-success"></i> Issue Residency' },
        video2Desc: { 
            ar: `<p>لأصحاب الأعمال، نشرح كيفية إصدار إقامة جديدة للعامل الوافد. يجب التأكد أولاً من اجتياز الفحص الطبي وربطه بالجوازات، ووجود تأمين طبي ساري، وسداد رسوم الإصدار ورخصة العمل.</p><p>يوضح الفيديو طريقة التحقق من "الرقم الحدودي" للعامل لإتمام الإجراءات بشكل صحيح.</p>`, 
            en: `<p>For business owners, we explain how to issue a new residency. First, ensure the medical exam is passed and linked, valid insurance exists, and fees are paid.</p><p>The video shows how to verify the worker's "Border Number" to complete procedures correctly.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية', en: '<i class="fas fa-link me-2"></i> Official Links' },
        linkAbsher: { ar: '<i class="fas fa-globe ms-2"></i> منصة أبشر', en: '<i class="fas fa-globe me-2"></i> Absher Platform' },
        linkForms: { ar: '<i class="fas fa-file-pdf ms-2"></i> نماذج الجوازات (PDF)', en: '<i class="fas fa-file-pdf me-2"></i> Passport Forms (PDF)' }
    },

    // =========================================================
    // 3. صفحة المرور (Traffic Forms)
    // =========================================================
    traffic_forms: {
        pageTitle: { ar: "خدمات المرور: اللوحات وإسقاط المركبات", en: "Traffic Services: Plates & Vehicle Scrapping" },
        pageDesc: { 
            ar: "كل ما يخص معاملاتك المرورية في مكان واحد. نشرح لك بالتفصيل كيفية إصدار لوحات المركبات الجديدة (بشعار أو بدون)، وخطوات إسقاط المركبات التالفة والمهملة من سجلك لتفادي الغرامات المتراكمة.", 
            en: "Everything related to traffic transactions in one place. We explain in detail how to issue new vehicle plates (with/without logo) and steps to scrap damaged vehicles from your record to avoid fines." 
        },
        video1Title: { ar: '<i class="fa-solid fa-car-side ms-2 text-success"></i> طلب اللوحات', en: '<i class="fa-solid fa-car-side me-2 text-success"></i> Request Plates' },
        video1Desc: { 
            ar: `<p>هل ترغب بتغيير لوحة سيارتك إلى "ملكية" أو "طويلة"؟ يشرح هذا الفيديو كيفية الدخول لخدمة "تواصل" أو "استبدال اللوحات" في أبشر، ورفع الطلب إلكترونياً.</p><p>نركز أيضاً على طريقة سداد الرسوم الخاصة باللوحات، وكيفية تسليم اللوحات القديمة واستلام الجديدة عبر خدمة التوصيل.</p>`, 
            en: `<p>Want to change your plate to "Royal" or "Long"? This video explains accessing "Tawasul" or "Replace Plates" in Absher and submitting the request.</p><p>We also focus on paying plate fees and how to hand over old plates and receive new ones via delivery.</p>` 
        },
        video2TitleDesk: { ar: '<i class="fa-solid fa-trash ms-2 text-success"></i> خدمة إسقاط المركبات التالفة', en: '<i class="fa-solid fa-trash me-2 text-success"></i> Vehicle Scrapping Service' },
        video2TitleMob: { ar: '<i class="fa-solid fa-trash ms-2 text-success"></i> إسقاط المركبات', en: '<i class="fa-solid fa-trash me-2 text-success"></i> Vehicle Scrapping' },
        video2Desc: { 
            ar: `<p>خلال المهلة التصحيحية، يمكنك إسقاط المركبة التالفة مجاناً ودون غرامات. يوضح الفيديو كيفية اختيار مركز التشليح المعتمد والحصول على "رمز التحقق" لإعطائه للمركز.</p><p>بمجرد تسليم المركبة والرمز للمركز، يتم إسقاطها فوراً من أبشر، مما يعفيك من رسوم التجديد والتأمين مستقبلاً.</p>`, 
            en: `<p>During the correction period, scrap damaged vehicles for free. The video shows how to choose an approved center and get the "Verification Code".</p><p>Once the vehicle and code are given to the center, it's instantly dropped from Absher, saving you future renewal fees.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط هامة', en: '<i class="fas fa-link me-2"></i> Important Links' },
        linkAbsher: { ar: '<i class="fas fa-globe ms-2"></i> منصة أبشر', en: '<i class="fas fa-globe me-2"></i> Absher Platform' },
        linkMoi: { ar: '<i class="fas fa-building ms-2"></i> المرور - وزارة الداخلية', en: '<i class="fas fa-building me-2"></i> Traffic - MOI' },
        linkForms: { ar: '<i class="fas fa-file-pdf ms-2"></i> نموذج المرور الرسمي (PDF)', en: '<i class="fas fa-file-pdf me-2"></i> Official Traffic Form (PDF)' }
    },

    // =========================================================
    // 4. صفحة ناجز (Najiz)
    // =========================================================
    najiz: {
        pageTitle: { ar: "خدمات ناجز: القضاء والوكالات الإلكترونية", en: "Najiz: Judiciary & Electronic POAs" },
        pageDesc: { 
            ar: "تعرف على بوابة الخدمات العدلية الإلكترونية (ناجز). نقدم شروحات مبسطة لكيفية رفع الدعاوي القضائية، إصدار الوكالات وفسخها، وحضور الجلسات المرئية عن بعد، مما يغنيك عن زيارة المحاكم وكتابات العدل.", 
            en: "Discover the e-Justice portal (Najiz). We offer simplified guides on filing lawsuits, issuing/revoking POAs, and attending virtual hearings, saving you visits to courts and notaries." 
        },
        v1Title: { ar: '<i class="fa-solid fa-file-signature ms-2 text-success"></i> صحيفة الدعوى', en: '<i class="fa-solid fa-file-signature me-2 text-success"></i> Lawsuit Sheet' },
        v1Desc: { 
            ar: `<p>الخطوة الأولى لأي مطالبة حقوقية هي "صحيفة الدعوى". يشرح الفيديو كيفية تصنيف الدعوى (مالية، أحوال شخصية، عمالية) وتعبئة بيانات المدعى عليه بدقة.</p><p>كما نوضح أهمية إرفاق الأسانيد والمستندات في الخانات المخصصة لضمان قبول الدعوى وعدم رفضها شكلاً من قبل المحكمة.</p>`, 
            en: `<p>The first step for any claim is the "Lawsuit Sheet". The video explains classifying the case and entering defendant data.</p><p>We also highlight attaching evidence in the correct fields to ensure the case is accepted by the court.</p>` 
        },
        v2TitleMob: { ar: '<i class="fa-solid fa-user-pen ms-2 text-success"></i> الوكالة الإلكترونية', en: '<i class="fa-solid fa-user-pen me-2 text-success"></i> Electronic POA' },
        v2TitleDesk: { ar: '<i class="fa-solid fa-user-pen ms-2 text-success"></i> إصدار وفسخ الوكالات', en: '<i class="fa-solid fa-user-pen me-2 text-success"></i> Issue/Revoke POAs' },
        v2Desc: { 
            ar: `<p>يمكنك الآن توكيل محامٍ أو قريب وأنت في منزلك. يوضح الشرح طريقة اختيار بنود الوكالة وتحديد مدة سريانها.</p><p>كما يشرح كيفية "فسخ الوكالة" فورياً إلكترونياً في حال انتهاء الغرض منها لضمان حماية حقوقك القانونية.</p>`, 
            en: `<p>You can authorize a lawyer or relative from home. The guide shows selecting POA terms and duration.</p><p>It also explains how to "Revoke POA" instantly online once its purpose is served to protect your legal rights.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-scale-balanced ms-2 text-success"></i> الاستعلام وحضور الجلسات', en: '<i class="fa-solid fa-scale-balanced me-2 text-success"></i> Inquiries & Hearings' },
        v3Desc: { 
            ar: `<p>عند تحديد موعد الجلسة، ستصلك رسالة نصية. يوضح الفيديو كيفية الدخول لخدمة "التقاضي الإلكتروني" وحضور الجلسة عبر الاتصال المرئي.</p><p>نشرح أيضاً كيفية تقديم المذكرات الجوابية والردود أثناء أو قبل الجلسة عبر النظام لضمان وصول دفوعك للقاضي.</p>`, 
            en: `<p>When a hearing is set, you get an SMS. The video shows accessing "E-Litigation" and attending via video call.</p><p>We also explain submitting memos and responses during or before the session to ensure your defense reaches the judge.</p>` 
        },
        v4TitleMob: { ar: '<i class="fa-solid fa-credit-card ms-2 text-success"></i> التكاليف القضائية', en: '<i class="fa-solid fa-credit-card me-2 text-success"></i> Judicial Costs' },
        v4TitleDesk: { ar: '<i class="fa-solid fa-credit-card ms-2 text-success"></i> سداد التكاليف القضائية', en: '<i class="fa-solid fa-credit-card me-2 text-success"></i> Pay Judicial Costs' },
        v4Desc: { 
            ar: `<p>وفقاً للنظام الجديد، قد تتطلب بعض الدعاوي سداد تكاليف قضائية. يشرح الفيديو كيفية استعراض الفاتورة عبر ناجز وسدادها.</p><p>كما نوضح الحالات المعفاة من الرسوم وكيفية تقديم طلب استرداد الرسوم في حال كسب القضية والحكم لصالحك.</p>`, 
            en: `<p>Under the new system, some cases require fees. The video explains viewing the invoice on Najiz and paying it.</p><p>We also clarify fee-exempt cases and how to request a refund if you win the case.</p>` 
        },
        v5Title: { ar: '<i class="fa-solid fa-clock ms-2 text-success"></i> طلبات التأجيل والاعتراض', en: '<i class="fa-solid fa-clock me-2 text-success"></i> Postponement & Objection' },
        v5Desc: { 
            ar: `<p>في حال لم تتمكن من حضور الجلسة، يجب تقديم "طلب تأجيل" بعذر مقبول قبل الموعد. يوضح الفيديو المسار الصحيح للطلب.</p><p>كما نشرح طريقة تقديم طلب "الاستئناف" أو الاعتراض على الحكم الصادر خلال المدة النظامية المحددة.</p>`, 
            en: `<p>If you can't attend, submit a "Postponement Request" with a valid excuse beforehand. The video shows the correct path.</p><p>We also explain how to file an "Appeal" or objection to the judgment within the specified legal period.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية', en: '<i class="fas fa-link me-2"></i> Official Links' },
        linkNajiz: { ar: '<i class="fas fa-globe ms-2"></i> بوابة ناجز', en: '<i class="fas fa-globe me-2"></i> Najiz Portal' },
        linkMoj: { ar: '<i class="fas fa-building ms-2"></i> وزارة العدل', en: '<i class="fas fa-building me-2"></i> Ministry of Justice' }
    },

    // =========================================================
    // 5. صفحة البنك الأهلي (SNB AlAhli)
    // =========================================================
    bank_alahli: {
        pageTitle: { ar: "خدمات البنك الأهلي: التطبيق والخدمة الذاتية", en: "SNB Services: App & Self-Service" },
        pageDesc: { 
            ar: "شرح شامل لكيفية إدارة حسابك البنكي في البنك الأهلي السعودي (SNB) دون زيارة الفرع. نغطي خطوات تسجيل الدخول لأول مرة، تفعيل المستفيدين للتحويلات المحلية، وطريقة طباعة بطاقة الصراف (مدى) من أجهزة الخدمة الذاتية المنتشرة.", 
            en: "Comprehensive guide to managing your SNB account without visiting the branch. We cover first-time login, activating beneficiaries for local transfers, and printing Mada debit cards from self-service kiosks." 
        },
        v1Title: { ar: '<i class="fa-solid fa-right-to-bracket ms-2 text-success"></i> تسجيل الدخول', en: '<i class="fa-solid fa-right-to-bracket me-2 text-success"></i> Login & Recovery' },
        v1Desc: { 
            ar: `<p>نسيت كلمة المرور؟ لا تقلق. يوضح الفيديو خطوات التسجيل في "الأهلي أونلاين" باستخدام رقم الهوية ورقم بطاقة الصراف.</p><p>كما نشرح كيفية تفعيل "الدخول السريع" (البصمة) عبر التطبيق لتسهيل الوصول لحسابك في المرات القادمة بأمان تام.</p>`, 
            en: `<p>Forgot password? The video explains registering in "AlAhli Online" using ID and debit card number.</p><p>We also show enabling "Quick Login" (Biometric) via the app for secure and easy future access.</p>` 
        },
        v2TitleMob: { ar: '<i class="fa-solid fa-money-bill-transfer ms-2 text-success"></i> إضافة مستفيد وتحويل', en: '<i class="fa-solid fa-money-bill-transfer me-2 text-success"></i> Add Beneficiary & Transfer' },
        v2TitleDesk: { ar: '<i class="fa-solid fa-money-bill-transfer ms-2 text-success"></i> التحويلات المحلية وتفعيل المستفيد', en: '<i class="fa-solid fa-money-bill-transfer me-2 text-success"></i> Local Transfers & Beneficiary Activation' },
        v2Desc: { 
            ar: `<p>لإجراء تحويل محلي، يجب أولاً إضافة المستفيد وتفعيله. يشرح الفيديو كيفية إدخال الآيبان (IBAN) الصحيح، وتفعيل المستفيد عبر اتصال آلي من البنك.</p><p>بعد التفعيل، نوضح خطوات إجراء الحوالة الفورية (سريع) لضمان وصول المبلغ في نفس اللحظة.</p>`, 
            en: `<p>For local transfers, first add and activate the beneficiary. The video explains entering the correct IBAN and activating via bank call.</p><p>Once activated, we show steps for Instant Transfer (Sarie) to ensure funds arrive immediately.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-print ms-2 text-success"></i> طباعة بطاقة مدى', en: '<i class="fa-solid fa-print me-2 text-success"></i> Print Mada Card' },
        v3Desc: { 
            ar: `<p>وفر وقتك واطبع بطاقتك بنفسك. يستعرض الفيديو طريقة استخدام أجهزة الخدمة الذاتية (Kiosks) لطباعة بطاقة صراف جديدة أو بدل فاقد.</p><p>العملية تتطلب فقط رقم الهوية وبصمة الإصبع، ويتم استلام البطاقة مفعلة وجاهزة للاستخدام خلال دقائق معدودة.</p>`, 
            en: `<p>Save time and print your card yourself. The video reviews using Self-Service Kiosks to print a new or replacement debit card.</p><p>The process only requires ID and fingerprint, and the card is issued activated and ready in minutes.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية', en: '<i class="fas fa-link me-2"></i> Official Links' },
        linkAlahli: { ar: '<i class="fas fa-globe ms-2"></i> موقع البنك الأهلي', en: '<i class="fas fa-globe me-2"></i> SNB AlAhli Website' },
        linkLocations: { ar: '<i class="fas fa-map-location-dot ms-2"></i> مواقع أجهزة الخدمة الذاتية', en: '<i class="fas fa-map-location-dot me-2"></i> Self-Service Kiosk Locations' }
    },

    // =========================================================
    // 6. صفحة بنك الراجحي (Al Rajhi Bank)
    // =========================================================
    bank_alrajhi: {
        pageTitle: { ar: "خدمات مصرف الراجحي: مباشر للأفراد", en: "Al Rajhi Services: Mubasher Retail" },
        pageDesc: { 
            ar: "دليلك لاستخدام تطبيق مصرف الراجحي، الأكثر شعبية في المملكة. نوضح لك كيفية التسجيل في خدمة المباشر، إجراء الحوالات المحلية والدولية، وطرق تجديد البطاقات واستخراجها عبر أجهزة الخدمة الأسرع.", 
            en: "Your guide to using Al Rajhi App, the most popular in KSA. We explain registering for Mubasher, making local/international transfers, and card renewal via fast-service machines." 
        },
        v1Title: { ar: '<i class="fa-solid fa-right-to-bracket ms-2 text-success"></i> التسجيل في التطبيق', en: '<i class="fa-solid fa-right-to-bracket me-2 text-success"></i> App Registration' },
        v1Desc: { 
            ar: `<p>يشرح الفيديو بالتفصيل كيفية التسجيل في تطبيق الراجحي لأول مرة. يتطلب الأمر وجود بطاقة الصراف ورقم جوال مسجل في أبشر.</p><p>نركز على حل مشاكل "نسيان كلمة المرور" وكيفية إعادة تعيينها دون الحاجة لزيارة الفرع، بالإضافة لتفعيل الإشعارات.</p>`, 
            en: `<p>The video details first-time registration in Al Rajhi App. It requires a debit card and mobile number registered in Absher.</p><p>We focus on solving "Forgot Password" issues and resetting it without visiting a branch, plus enabling notifications.</p>` 
        },
        v2TitleMob: { ar: '<i class="fa-solid fa-money-bill-transfer ms-2 text-success"></i> التحويل المحلي السريع', en: '<i class="fa-solid fa-money-bill-transfer me-2 text-success"></i> Fast Local Transfer' },
        v2TitleDesk: { ar: '<i class="fa-solid fa-money-bill-transfer ms-2 text-success"></i> التحويل المحلي وإدارة المستفيدين', en: '<i class="fa-solid fa-money-bill-transfer me-2 text-success"></i> Local Transfer & Beneficiaries' },
        v2Desc: { 
            ar: `<p>تعلم كيفية إضافة مستفيد في بنك محلي آخر وتفعيله فوراً عبر التطبيق. يوضح الفيديو الفرق بين "الحوالة المجدولة" و"الحوالة الفورية".</p><p>كما نشرح ميزة "UrPay" والمحافظ الرقمية وكيفية التحويل منها وإليها عبر حسابك الجاري بسهولة.</p>`, 
            en: `<p>Learn to add and activate a local beneficiary instantly via the app. The video explains the difference between "Scheduled" and "Instant" transfers.</p><p>We also explain "UrPay" and digital wallets, and how to transfer to/from your current account easily.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-print ms-2 text-success"></i> طباعة البطاقة', en: '<i class="fa-solid fa-print me-2 text-success"></i> Print Card' },
        v3Desc: { 
            ar: `<p>مصرف الراجحي يوفر أجهزة خدمة ذاتية في معظم الفروع والمولات. يوضح الفيديو خطوات طباعة بطاقة "مدى" الجديدة في أقل من دقيقة.</p><p>يتم شرح كيفية إدخال البطاقة القديمة (للتجديد) أو استخدام رقم الهوية (للبدل فاقد)، وتعيين الرقم السري الجديد.</p>`, 
            en: `<p>Al Rajhi offers self-service kiosks in most branches/malls. The video shows printing a new "Mada" card in under a minute.</p><p>It explains inserting the old card (renewal) or using ID (replacement), and setting a new PIN.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية', en: '<i class="fas fa-link me-2"></i> Official Links' },
        linkAlRajhi: { ar: '<i class="fas fa-globe ms-2"></i> موقع مصرف الراجحي', en: '<i class="fas fa-globe me-2"></i> Al Rajhi Bank Website' },
        linkLocations: { ar: '<i class="fas fa-map-location-dot ms-2"></i> مواقع الفروع والخدمة الذاتية', en: '<i class="fas fa-map-location-dot me-2"></i> Branches & Self-Service Locations' }
    },

    // =========================================================
    // 7. صفحة بنك الرياض (Riyad Bank)
    // =========================================================
    bank_riyad: {
        pageTitle: { ar: "خدمات بنك الرياض: أونلاين وتطبيق", en: "Riyad Bank Services: Online & App" },
        pageDesc: { 
            ar: "استفد من خدمات بنك الرياض الرقمية المتطورة. نقدم لك شرحاً مفصلاً لطريقة التسجيل في أونلاين الرياض، سداد الفواتير الحكومية، وطباعة البطاقات المصرفية عبر أجهزة الخدمة الذاتية.", 
            en: "Benefit from Riyad Bank's advanced digital services. We provide a detailed explanation of registering for Riyad Online, paying government bills, and printing bank cards via self-service kiosks." 
        },
        v1Title: { ar: '<i class="fa-solid fa-right-to-bracket ms-2 text-success"></i> التسجيل في أونلاين الرياض', en: '<i class="fa-solid fa-right-to-bracket me-2 text-success"></i> Register in Riyad Online' },
        v1Desc: { 
            ar: `<p>لتفعيل حسابك الرقمي، اتبع الخطوات الموضحة في الفيديو. يتطلب التسجيل رقم الهوية وبطاقة الصراف الآلي.</p><p>نشرح أيضاً كيفية استعادة "اسم المستخدم" في حال نسيانه، وطريقة تفعيل "الرمز السري المتغير" لتوثيق العمليات البنكية الحساسة.</p>`, 
            en: `<p>To activate your digital account, follow the video steps. Registration requires ID and ATM card.</p><p>We also explain recovering "Username" if forgotten, and enabling "OTP" for securing sensitive banking transactions.</p>` 
        },
        v2TitleMob: { ar: '<i class="fa-solid fa-money-bill-transfer ms-2 text-success"></i> التحويل وسداد الفواتير', en: '<i class="fa-solid fa-money-bill-transfer me-2 text-success"></i> Transfer & Bill Payment' },
        v2TitleDesk: { ar: '<i class="fa-solid fa-money-bill-transfer ms-2 text-success"></i> التحويل المحلي وسداد الخدمات', en: '<i class="fa-solid fa-money-bill-transfer me-2 text-success"></i> Local Transfer & Bill Pay' },
        v2Desc: { 
            ar: `<p>يتميز تطبيق بنك الرياض بسهولة سداد المدفوعات الحكومية (مثل الجوازات والمرور). يوضح الفيديو كيفية اختيار نوع الخدمة والدفع برقم الهوية.</p><p>كما نستعرض خطوات التحويل لمستفيد في بنك آخر وتفعيل المستفيد فورياً عبر التطبيق.</p>`, 
            en: `<p>Riyad App excels in paying government bills (e.g., Passports, Traffic). The video shows selecting the service and paying via ID.</p><p>We also review steps to transfer to another bank's beneficiary and activate them instantly via the app.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-print ms-2 text-success"></i> طباعة البطاقات', en: '<i class="fa-solid fa-print me-2 text-success"></i> Print Cards' },
        v3Desc: { 
            ar: `<p>لا داعي للانتظار في الفرع. يشرح الفيديو كيفية استخدام أجهزة بنك الرياض الذكية لطباعة بطاقة "مدى" أو البطاقة الائتمانية.</p><p>نوضح خطوات اختيار "إصدار بطاقة بديلة"، إدخال الهوية، وتحديد الرقم السري الجديد لاستلام البطاقة فوراً.</p>`, 
            en: `<p>No need to wait at the branch. The video explains using Riyad Bank smart machines to print "Mada" or credit cards.</p><p>We show steps for "Replacement Card", entering ID, and setting a new PIN to receive the card instantly.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط هامة', en: '<i class="fas fa-link me-2"></i> Important Links' },
        linkRiyad: { ar: '<i class="fas fa-globe ms-2"></i> موقع بنك الرياض', en: '<i class="fas fa-globe me-2"></i> Riyad Bank Website' },
        linkCards: { ar: '<i class="fas fa-credit-card ms-2"></i> أنواع البطاقات والمزايا', en: '<i class="fas fa-credit-card me-2"></i> Card Types & Benefits' }
    },

    // =========================================================
    // 8. صفحة بي كير (Bcare)
    // =========================================================
    bekare: {
        pageTitle: { ar: "منصة بي كير: مقارنة وشراء التأمين", en: "Bcare: Compare & Buy Insurance" },
        pageDesc: { 
            ar: "وفر وقتك ومالك مع منصة بي كير. نشرح لك كيفية مقارنة أسعار تأمين المركبات بين أكثر من 20 شركة، خطوات إصدار التأمين الطبي للمنشآت وربطه بمجلس الضمان الصحي، وتأمين الزيارة العائلية.", 
            en: "Save time and money with Bcare. We explain how to compare vehicle insurance prices across 20+ companies, steps for SME medical insurance issuance and linking with CCHI, and family visit insurance." 
        },
        v1Title: { ar: '<i class="fa-solid fa-car-burst ms-2 text-success"></i> تأمين المركبات', en: '<i class="fa-solid fa-car-burst me-2 text-success"></i> Vehicle Insurance' },
        v1Desc: { 
            ar: `<p>قبل شراء التأمين، قارن الأسعار! يوضح الفيديو كيفية إدخال بيانات المركبة (الرقم التسلسلي) والهوية في منصة بي كير لاستعراض العروض.</p><p>نشرح الفرق بين "تأمين ضد الغير" و"التأمين الشامل"، وكيف يتم ربط الوثيقة فوراً بنظام "نجم" والمرور لتجديد الاستمارة.</p>`, 
            en: `<p>Compare before you buy! The video shows entering vehicle data (Sequence No.) and ID in Bcare to view offers.</p><p>We explain the difference between "TPL" and "Comprehensive", and how the policy links instantly to "Najm" and Traffic for registration renewal.</p>` 
        },
        v2TitleMob: { ar: '<i class="fa-solid fa-users-medical ms-2 text-success"></i> التأمين الطبي (منشآت)', en: '<i class="fa-solid fa-users-medical me-2 text-success"></i> Medical Insurance (SMEs)' },
        v2TitleDesk: { ar: '<i class="fa-solid fa-users-medical ms-2 text-success"></i> التأمين الطبي للموظفين والربط', en: '<i class="fa-solid fa-users-medical me-2 text-success"></i> Employee Medical Insurance & Linking' },
        v2Desc: { 
            ar: `<p>لأصحاب المنشآت الصغيرة، بي كير توفر حلاً سهلاً لإصدار التأمين الطبي للموظفين. يشرح الفيديو طريقة إضافة الموظفين واختيار الشبكة الطبية المناسبة.</p><p>نركز على ميزة الربط الآلي مع مجلس الضمان الصحي (CCHI) الضروري لإصدار وتجديد إقامات العمالة.</p>`, 
            en: `<p>For SMEs, Bcare offers an easy medical insurance solution. The video explains adding employees and choosing the network.</p><p>We focus on the automatic linking with CCHI, essential for issuing and renewing worker residencies.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-plane-departure ms-2 text-success"></i> تأمين تمديد الزيارة', en: '<i class="fa-solid fa-plane-departure me-2 text-success"></i> Visit Extension Insurance' },
        v3Desc: { 
            ar: `<p>لتمديد تأشيرة الزيارة العائلية، يلزم وجود تأمين طبي ساري. يوضح الشرح خطوات إصدار وثيقة تأمين الزيارة عبر بي كير بأقل الأسعار.</p><p>يتم شرح كيفية استخدام رقم جواز السفر ورقم التأشيرة لإتمام العملية وربطها مع وزارة الخارجية.</p>`, 
            en: `<p>To extend a family visit visa, valid insurance is required. The guide shows issuing a visit insurance policy via Bcare at low rates.</p><p>It explains using passport and visa numbers to complete the process and link it with MOFA.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط هامة', en: '<i class="fas fa-link me-2"></i> Important Links' },
        linkBcare: { ar: '<i class="fas fa-globe ms-2"></i> موقع بي كير الرسمي', en: '<i class="fas fa-globe me-2"></i> Bcare Official Website' },
        linkChi: { ar: '<i class="fas fa-building-shield ms-2"></i> مجلس الضمان الصحي', en: '<i class="fas fa-building-shield me-2"></i> CCHI Website' }
    },

    // =========================================================
    // 9. صفحة تأميني (Tameeni)
    // =========================================================
    taaminy: {
        pageTitle: { ar: "منصة تأميني: التأمين الفوري للمركبات", en: "Tameeni: Instant Vehicle Insurance" },
        pageDesc: { 
            ar: "الحل الأسرع لتأمين سيارتك دون انتظار. نشرح لك كيفية مقارنة الأسعار، شراء وثيقة التأمين (ضد الغير أو شامل)، وضمان ربطها فورياً بأنظمة المرور لتجديد الاستمارة. كما نغطي التأمين الطبي للمنشآت.", 
            en: "The fastest solution to insure your car without waiting. We explain comparing prices, buying a policy (TPL/Comprehensive), and ensuring instant linking with Traffic systems for registration renewal. We also cover SME medical insurance." 
        },
        v1Title: { ar: '<i class="fa-solid fa-car-crash ms-2 text-success"></i> شراء تأمين المركبات', en: '<i class="fa-solid fa-car-crash me-2 text-success"></i> Buy Vehicle Insurance' },
        v1Desc: { 
            ar: `<p>تتميز منصة "تأميني" بالسرعة العالية في الربط مع نظام "أبشر". يشرح الفيديو خطوة بخطوة كيفية إدخال بيانات المركبة، اختيار نوع التأمين، والمقارنة بين الشركات.</p><p>نوضح أيضاً كيفية الحصول على خصم "عدم وجود مطالبات" (خصم الولاء) الذي قد يصل إلى نسبة كبيرة من قيمة الوثيقة.</p>`, 
            en: `<p>"Tameeni" features high-speed linking with "Absher". The video explains step-by-step entering vehicle data, selecting insurance type, and comparing companies.</p><p>We also explain getting the "No Claims Discount" (Loyalty), which can significantly reduce the policy cost.</p>` 
        },
        v2Title: { ar: '<i class="fa-solid fa-briefcase-medical ms-2 text-success"></i> التأمين الطبي للمنشآت', en: '<i class="fa-solid fa-briefcase-medical me-2 text-success"></i> SME Medical Insurance' },
        v2Desc: { 
            ar: `<p>لأصحاب العمل، توفر تأميني لوحة تحكم لإدارة التأمين الطبي للموظفين. يوضح الفيديو كيفية رفع بيانات الموظفين وإصدار الوثيقة الموحدة.</p><p>الخدمة مرتبطة كلياً مع مجلس الضمان الصحي، مما يسمح لك بتجديد إقامات الموظفين فور صدور الوثيقة دون تأخير.</p>`, 
            en: `<p>For employers, Tameeni offers a dashboard for employee medical insurance. The video shows uploading employee data and issuing the unified policy.</p><p>The service is fully linked with CCHI, allowing immediate residency renewal for employees upon policy issuance.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-user-doctor ms-2 text-success"></i> تأمين الأخطاء الطبية', en: '<i class="fa-solid fa-user-doctor me-2 text-success"></i> Medical Malpractice Insurance' },
        v3Desc: { 
            ar: `<p>للممارسين الصحيين، التأمين ضد الأخطاء الطبية شرط لتجديد الترخيص. نشرح كيفية إصدار الوثيقة عبر تأميني وربطها مع "ممارس بلس".</p><p>تغطي الوثيقة المسؤولية المدنية الناتجة عن الأخطاء المهنية، وهي حماية قانونية ومالية ضرورية لكل طبيب وممارس.</p>`, 
            en: `<p>For health practitioners, malpractice insurance is required for license renewal. We explain issuing it via Tameeni and linking with "Mumaris Plus".</p><p>The policy covers civil liability from professional errors, essential legal/financial protection for every doctor.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية', en: '<i class="fas fa-link me-2"></i> Official Links' },
        linkTameeni: { ar: '<i class="fas fa-globe ms-2"></i> منصة تأميني', en: '<i class="fas fa-globe me-2"></i> Tameeni Platform' },
        linkChi: { ar: '<i class="fas fa-shield-halved ms-2"></i> مجلس الضمان الصحي', en: '<i class="fas fa-shield-halved me-2"></i> CCHI Website' }
    },

    // =========================================================
    // 10. صفحة نجم (Najm)
    // =========================================================
    Najm_website: {
        pageTitle: { ar: "خدمات نجم: الحوادث والمطالبات", en: "Najm: Accidents & Claims" },
        pageDesc: { 
            ar: "دليلك للتصرف الصحيح عند وقوع الحوادث المرورية. نشرح كيفية الإبلاغ عن الحادث عبر تطبيق نجم، تصوير الأضرار، ومتابعة تقرير المسؤولية. كما نوضح خطوات رفع المطالبات المالية لشركات التأمين إلكترونياً.", 
            en: "Your guide to correct action during traffic accidents. We explain reporting via Najm App, photographing damages, and tracking liability reports. We also cover submitting electronic financial claims to insurance companies." 
        },
        v1Title: { ar: '<i class="fa-solid fa-user-plus ms-2 text-success"></i> التسجيل والإبلاغ عن حادث', en: '<i class="fa-solid fa-user-plus me-2 text-success"></i> Register & Report Accident' },
        v1Desc: { 
            ar: `<p>عند وقوع حادث (لا قدر الله)، استخدم تطبيق نجم فوراً. يشرح الفيديو كيفية تحديد الموقع بدقة، وتصوير المركبات من الزوايا الصحيحة قبل تحريكها.</p><p>هذه الخطوة تسرع وصول المحقق وتضمن حقك في تقرير الحادث. يجب أن يكون لدى أحد الأطراف تأمين ساري للاستفادة من خدمات نجم.</p>`, 
            en: `<p>In case of an accident, use Najm App immediately. The video explains precise location pinning and photographing vehicles from correct angles.</p><p>This speeds up the investigator's arrival and ensures your rights. One party must have valid insurance to use Najm.</p>` 
        },
        v2Title: { ar: '<i class="fa-solid fa-file-contract ms-2 text-success"></i> طباعة تقرير الحادث', en: '<i class="fa-solid fa-file-contract me-2 text-success"></i> Print Accident Report' },
        v2Desc: { 
            ar: `<p>بعد معاينة الحادث، يصلك إشعار بتقرير المسؤولية (0%، 50%، 100%). يوضح الفيديو كيفية الدخول للتطبيق أو الموقع لطباعة التقرير وإذن الإصلاح.</p><p>إذن الإصلاح ضروري جداً للورش، ويجب إصداره إلكترونياً عبر منصة "أبشر" أو من خلال تطبيق نجم المربوط بها.</p>`, 
            en: `<p>After inspection, you get a liability report (0%, 50%, 100%). The video shows printing the report and repair permit via App/Web.</p><p>The repair permit is mandatory for workshops and must be issued electronically via "Absher" or linked Najm App.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-file-invoice-dollar ms-2 text-success"></i> رفع المطالبة المالية', en: '<i class="fa-solid fa-file-invoice-dollar me-2 text-success"></i> Submit Financial Claim' },
        v3Desc: { 
            ar: `<p>لتحصيل التعويض، لا داعي لزيارة شركة التأمين. نشرح خطوات خدمة "المطالبات الإلكترونية": تعبئة البيانات، إرفاق تقدير الأضرار، وإدخال رقم الآيبان.</p><p>يتم تحويل مبلغ التعويض إلى حسابك البنكي خلال المدة النظامية (غالباً 14 يوم عمل) من تاريخ اعتماد المطالبة.</p>`, 
            en: `<p>To get compensation, don't visit the insurer. We explain "E-Claims": filling data, attaching damage assessment, and IBAN.</p><p>Compensation is transferred to your bank account within the legal period (usually 14 working days) from approval.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية', en: '<i class="fas fa-link me-2"></i> Official Links' },
        linkNajm: { ar: '<i class="fas fa-globe ms-2"></i> خدمات نجم للأفراد', en: '<i class="fas fa-globe me-2"></i> Najm Services' }
    },

    // =========================================================
    // 11. صفحة وزارة التجارة (Commerce)
    // =========================================================
    commerce: {
        pageTitle: { ar: "وزارة التجارة: السجل التجاري والأعمال", en: "Ministry of Commerce: CR & Business" },
        pageDesc: { 
            ar: "بوابة التاجر السعودي. نقدم شرحاً تفصيلياً لخدمات المركز السعودي للأعمال: إصدار السجل التجاري في 180 ثانية، حجز الأسماء التجارية، وإدارة التراخيص. دليلك القانوني لبدء نشاطك التجاري بشكل نظامي.", 
            en: "The Saudi Merchant Portal. Detailed guide to Saudi Business Center services: Issuing CR in 180 seconds, reserving trade names, and license management. Your legal guide to starting business systematically." 
        },
        v1Title: { ar: '<i class="fa-solid fa-file-signature ms-2 text-success"></i> إصدار السجل التجاري', en: '<i class="fa-solid fa-file-signature me-2 text-success"></i> Instant CR Issuance' },
        v1Desc: { 
            ar: `<p>أصدر سجلك وأنت في مكانك. يوضح الفيديو خطوات الدخول للمنصة الموحدة، اختيار نوع النشاط (ISIC4)، وتحديد مدة السجل (سنة إلى 5 سنوات).</p><p>نشرح أيضاً كيفية سداد الفاتورة الموحدة التي تشمل رسوم السجل واشتراك الغرفة التجارية في خطوة واحدة.</p>`, 
            en: `<p>Issue your CR remotely. The video shows accessing the unified platform, selecting activity (ISIC4), and duration (1-5 years).</p><p>We also explain paying the unified invoice covering CR fees and Chamber of Commerce subscription in one step.</p>` 
        },
        v2Title: { ar: '<i class="fa-solid fa-tag ms-2 text-success"></i> حجز الاسم التجاري', en: '<i class="fa-solid fa-tag me-2 text-success"></i> Trade Name Reservation' },
        v2Desc: { 
            ar: `<p>الاسم هو هوية مشروعك. نشرح خدمة "الاستعلام عن الأسماء التجارية" وكيفية حجز اسم خاص بك إلكترونياً قبل إصدار السجل.</p><p>يجب مراعاة شروط الأسماء (عربية، ذات معنى، غير مضللة). بعد الموافقة، يتم حجز الاسم لك لمدة 60 يوماً لحين إصدار السجل.</p>`, 
            en: `<p>The name is your brand identity. We explain "Trade Name Inquiry" and reserving your name electronically before CR issuance.</p><p>Note name conditions (Arabic, meaningful, not misleading). Once approved, it's reserved for 60 days until CR issuance.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-ban ms-2 text-success"></i> تعديل أو شطب السجل', en: '<i class="fa-solid fa-ban me-2 text-success"></i> Modify or Cancel CR' },
        v3Desc: { 
            ar: `<p>في حال تغيير النشاط أو الرغبة في الإغلاق، يجب تعديل أو شطب السجل رسمياً لتجنب الغرامات. يوضح الفيديو خطوات الشطب الإلكتروني.</p><p>يشترط للشطب: عدم وجود عمالة، سداد الزكاة والضريبة، وإلغاء التراخيص المرتبطة. بمجرد الشطب، تسقط الالتزامات المستقبلية.</p>`, 
            en: `<p>Changing activity or closing? Modify or cancel the CR officially to avoid fines. The video shows electronic cancellation steps.</p><p>Conditions: No labor, paid Zakat/Tax, cancelled licenses. Once cancelled, future liabilities are dropped.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية', en: '<i class="fas fa-link me-2"></i> Official Links' },
        linkMC: { ar: '<i class="fas fa-globe ms-2"></i> موقع وزارة التجارة', en: '<i class="fas fa-globe me-2"></i> Ministry of Commerce' },
        linkBusiness: { ar: '<i class="fas fa-laptop-house ms-2"></i> المركز السعودي للأعمال', en: '<i class="fas fa-laptop-house me-2"></i> Saudi Business Center' }
    },

    // =========================================================
    // 12. صفحة قوى (Qiwa)
    // =========================================================
    qiwa: {
        pageTitle: { ar: "منصة قوى: التوطين ونقل الخدمات", en: "Qiwa: Saudization & Transfer Services" },
        pageDesc: { 
            ar: "المنصة الموحدة لقطاع الأعمال والأفراد. نشرح بالتفصيل النظام الجديد لنقل الخدمات الوظيفية (بديل نقل الكفالة)، كيفية توثيق العقود إلكترونياً لضمان الحقوق، وإدارة رخص العمل وتجديدها للمنشآت.", 
            en: "Unified platform for business/individuals. We detail the new Employee Transfer system (replacing sponsorship), electronic contract authentication for rights, and managing/renewing work permits." 
        },
        v1Title: { ar: '<i class="fa-solid fa-people-arrows ms-2 text-success"></i> نقل الخدمات', en: '<i class="fa-solid fa-people-arrows me-2 text-success"></i> Employee Transfer' },
        v1Desc: { 
            ar: `<p>لم يعد هناك "نقل كفالة" بالمفهوم القديم. العملية الآن رقمية بالكامل. تبدأ بتقديم "عرض وظيفي" من المنشأة الجديدة عبر قوى.</p><p>يشرح الفيديو كيف يقوم الموظف بالدخول لحسابه في "قوى أفراد" لقبول العرض. إذا كان العقد الساري منتهياً، يتم النقل فوراً دون موافقة صاحب العمل الحالي.</p>`, 
            en: `<p>No more "Sponsorship Transfer". It's fully digital. Starts with a "Job Offer" from the new firm via Qiwa.</p><p>The video shows the employee logging into "Qiwa Individuals" to accept. If the current contract is expired, transfer is immediate without current employer approval.</p>` 
        },
        v2Title: { ar: '<i class="fa-solid fa-file-contract ms-2 text-success"></i> توثيق العقود إلكترونياً', en: '<i class="fa-solid fa-file-contract me-2 text-success"></i> Electronic Contract Auth' },
        v2Desc: { 
            ar: `<p>توثيق العقد هو الضمان القانوني لحقك. يجب على المنشأة إنشاء العقد وإرساله للموظف. تصلك رسالة نصية للدخول والموافقة أو الرفض.</p><p>نوضح أهمية مراجعة بنود العقد (الراتب، ساعات العمل، الإجازات) قبل الضغط على "قبول"، حيث يتم اعتماد العقد فوراً في التأمينات الاجتماعية.</p>`, 
            en: `<p>Contract auth is your legal guarantee. The firm creates and sends the contract. You get an SMS to accept/reject.</p><p>We highlight reviewing terms (salary, hours, leave) before clicking "Accept", as it's instantly approved in GOSI.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-id-card-clip ms-2 text-success"></i> إصدار رخص العمل', en: '<i class="fa-solid fa-id-card-clip me-2 text-success"></i> Issue Work Permits' },
        v3Desc: { 
            ar: `<p>قبل تجديد إقامة العامل، يجب إصدار رخصة العمل. تعتمد الرسوم على نسبة التوطين في المنشأة.</p><p>يشرح الفيديو كيفية تحديد العمالة، إصدار رقم سداد موحد، وبعد الدفع يتم تحديث الحالة آلياً في "أبشر" للسماح بإتمام تجديد الإقامة.</p>`, 
            en: `<p>Before renewing residency, issue a Work Permit. Fees depend on Saudization ratio.</p><p>The video explains selecting workers, issuing a unified SADAD number. After payment, status updates in "Absher" to allow renewal.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية', en: '<i class="fas fa-link me-2"></i> Official Links' },
        linkQiwa: { ar: '<i class="fas fa-globe ms-2"></i> منصة قوى (أعمال/أفراد)', en: '<i class="fas fa-globe me-2"></i> Qiwa Platform' },
        linkHRSD: { ar: '<i class="fas fa-building-user ms-2"></i> وزارة الموارد البشرية', en: '<i class="fas fa-building-user me-2"></i> HRSD Ministry' }
    },

    // =========================================================
    // 13. صفحة حساب المواطن (Citizen Account)
    // =========================================================
    citizen: {
        pageTitle: { ar: "دعم حساب المواطن: التسجيل والأهلية", en: "Citizen Account: Registration & Eligibility" },
        pageDesc: { 
            ar: "الدليل الكامل الشامل لبرنامج حساب المواطن. نشرح لك بالتفصيل كيفية التسجيل الجديد، شروط الأهلية المحدثة، وطريقة الإفصاح عن الدخل لتجنب إيقاف الدعم. كما نساعدك في خطوات تقديم الاعتراضات المالية بشكل صحيح.", 
            en: "The complete guide to the Citizen Account program. We explain new registration, updated eligibility conditions, and income disclosure to avoid suspension. We also help you submit financial objections correctly." 
        },
        v1Title: { ar: '<i class="fa-solid fa-users-viewfinder ms-2 text-success"></i> التسجيل الجديد', en: '<i class="fa-solid fa-users-viewfinder me-2 text-success"></i> Registration' },
        v1Desc: { 
            ar: `<p>لضمان قبول طلبك، يجب تعبئة "تكوين المنزل" بدقة. يشرح الفيديو كيفية إضافة الزوجة والأبناء كتابعين، وكيفية إثبات السكن للمستقل (عقد إيجار أو صك ملكية).</p><p>نركز على أهمية تطابق البيانات المدخلة مع سجلات الأحوال المدنية، حيث أن أي اختلاف قد يؤدي لرفض الأهلية لبعض التابعين.</p>`, 
            en: `<p>To ensure acceptance, fill "Household Composition" accurately. The video explains adding spouse/children and proving housing for singles.</p><p>We focus on matching data with Civil Affairs records, as discrepancies lead to eligibility rejection for dependents.</p>` 
        },
        v2Title: { ar: '<i class="fa-solid fa-money-check-dollar ms-2 text-success"></i> الإفصاح عن الدخل', en: '<i class="fa-solid fa-money-check-dollar me-2 text-success"></i> Income Disclosure' },
        v2Desc: { 
            ar: `<p>السبب الرئيسي لرسالة "تجاوز الحد المانع" هو خطأ الإفصاح. يجب تسجيل الراتب "الإجمالي" (شاملاً البدلات) كما هو في التأمينات، وليس الراتب الذي ينزل في البنك.</p><p>يجب أيضاً الإفصاح عن أي دخل من نشاط تجاري، أو عوائد عقارية، أو دعم حكومي آخر (مثل حافز أو ساند) لتجنب الملاحقة القانونية أو استرداد المبالغ.</p>`, 
            en: `<p>The main reason for "Exceeding Limit" is disclosure error. Register "Gross" salary (incl. allowances) as in GOSI, not net bank deposit.</p><p>Also disclose business income, real estate returns, or other support (Hafiz/Saned) to avoid legal action or repayment.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-gavel ms-2 text-success"></i> تقديم الاعتراضات', en: '<i class="fa-solid fa-gavel me-2 text-success"></i> Objections' },
        v3Desc: { 
            ar: `<p>هل نزل الدعم ناقصاً أو ظهرت حالة "غير مؤهل"؟ لديك مهلة 90 يوماً للاعتراض. يوضح الفيديو طريقة اختيار نوع الاعتراض وإرفاق كشف الحساب أو تعريف الراتب.</p><p>نشرح أيضاً كيفية متابعة حالة الاعتراض، وفي حال قبوله، يتم صرف المبالغ المستحقة بأثر رجعي في الدفعة القادمة.</p>`, 
            en: `<p>Received partial support or "Ineligible"? You have 90 days to object. The video shows selecting objection type and attaching bank statement/salary letter.</p><p>We also explain tracking the objection. If accepted, dues are paid retroactively in the next batch.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية', en: '<i class="fas fa-link me-2"></i> Official Links' },
        linkPortal: { ar: '<i class="fas fa-globe ms-2"></i> بوابة حساب المواطن', en: '<i class="fas fa-globe me-2"></i> Citizen Account Portal' },
        linkCalc: { ar: '<i class="fas fa-calculator ms-2"></i> الحاسبة التقديرية', en: '<i class="fas fa-calculator me-2"></i> Support Calculator' }
    },

    // =========================================================
    // 14. صفحة التعليم (Education)
    // =========================================================
    education: {
        pageTitle: { ar: "الخدمات التعليمية: نور ومدرستي", en: "Education: Noor & Madrasati" },
        pageDesc: { 
            ar: "البوابة الرقمية للطالب وولي الأمر. نقدم شروحات تفصيلية لكيفية استخدام نظام نور للاطلاع على النتائج وتسجيل الطلاب المستجدين، بالإضافة إلى دليل استخدام منصة مدرستي للتعليم عن بعد وحل الواجبات.", 
            en: "The digital gateway for students and parents. We offer detailed guides on using Noor for results and new student registration, plus a guide for Madrasati platform for remote learning and assignments." 
        },
        v1Title: { ar: '<i class="fa-solid fa-id-card ms-2 text-success"></i> نظام نور: النتائج', en: '<i class="fa-solid fa-id-card me-2 text-success"></i> Noor: Results' },
        v1Desc: { 
            ar: `<p>كيف تستخرج شهادة ابنك بضغطة زر؟ يشرح الفيديو الدخول لحساب ولي الأمر، واستعراض "التقارير" لطباعة إشعار الدرجات أو شهادة الفصل الدراسي.</p><p>كما نوضح طريقة تفعيل حساب الطالب في نور إذا فقد كلمة المرور، وكيفية ربط الحساب برقم جوال ولي الأمر لاستعادة البيانات.</p>`, 
            en: `<p>How to get your child's certificate instantly? The video explains guardian login and viewing "Reports" to print grades or term certificates.</p><p>We also show activating the student account in Noor if password is lost, and linking it to the guardian's mobile.</p>` 
        },
        v2Title: { ar: '<i class="fa-solid fa-user-graduate ms-2 text-success"></i> تسجيل الطلاب المستجدين', en: '<i class="fa-solid fa-user-graduate me-2 text-success"></i> New Student Registration' },
        v2Desc: { 
            ar: `<p>فترة التسجيل حساسة جداً وتعتمد على الشواغر. يوضح الفيديو خطوات التسجيل في الوقت المحدد، واختيار المدرسة الأقرب للحي حسب النطاق الجغرافي.</p><p>نشرح المستندات المطلوبة (إثبات السكن، التحصينات) وكيفية حجز موعد "فحص اللياقة" في المراكز الصحية لضمان قبول الطالب.</p>`, 
            en: `<p>Registration is sensitive and vacancy-based. The video shows registering on time and choosing the nearest school by zone.</p><p>We explain required documents (residence proof, vaccinations) and booking the "Fitness Exam" to ensure acceptance.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-laptop-code ms-2 text-success"></i> منصة مدرستي', en: '<i class="fa-solid fa-laptop-code me-2 text-success"></i> Madrasati Platform' },
        v3Desc: { 
            ar: `<p>منصة مدرستي هي الرفيق اليومي للطالب. نستعرض كيفية الدخول بحساب مايكروسوفت، وحل الواجبات والاختبارات المرسلة من المعلم.</p><p>كما نوضح لولي الأمر كيفية متابعة إنجاز الطالب ومراسلة المعلمين عبر المنصة، وكيفية الدخول للحصص الافتراضية عبر "تيمز" في وقتها.</p>`, 
            en: `<p>Madrasati is the student's daily companion. We review logging in with Microsoft, and solving assignments/tests.</p><p>We also show parents how to track progress, message teachers, and join virtual classes via "Teams" on time.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية', en: '<i class="fas fa-link me-2"></i> Official Links' },
        linkNoor: { ar: '<i class="fas fa-globe ms-2"></i> نظام نور', en: '<i class="fas fa-globe me-2"></i> Noor System' },
        linkMadrasati: { ar: '<i class="fas fa-school ms-2"></i> منصة مدرستي', en: '<i class="fas fa-school me-2"></i> Madrasati Platform' }
    },

    // =========================================================
    // 15. صفحة البلدية (Municipal)
    // =========================================================
    municipal: {
        pageTitle: { ar: "الخدمات البلدية: الرخص والبلاغات (بلدي)", en: "Municipal: Licenses & Reports (Balady)" },
        pageDesc: { 
            ar: "أنجز معاملاتك البلدية رقمياً. دليل شامل لمنصة بلدي لاستخراج الرخص التجارية والإنشائية، إصدار الشهادات الصحية للعاملين، وتقديم بلاغات تحسين المشهد الحضري (940) للمساهمة في جودة الحياة.", 
            en: "Complete municipal transactions digitally. Comprehensive guide to Balady for commercial/construction licenses, workers' health certificates, and submitting urban improvement reports (940)." 
        },
        v1Title: { ar: '<i class="fa-solid fa-shop ms-2 text-success"></i> إصدار الرخص التجارية', en: '<i class="fa-solid fa-shop me-2 text-success"></i> Commercial Licenses' },
        v1Desc: { 
            ar: `<p>ابدأ مشروعك اليوم! يشرح الفيديو خطوات إصدار "الرخصة الفورية" للمحلات. يجب أولاً توثيق عقد الإيجار إلكترونياً، ثم الدخول لبلدي وتحديد النشاط.</p><p>نوضح كيفية حساب الرسوم آلياً بناءً على المساحة واللوحة، وكيفية الحصول على موافقة الدفاع المدني إلكترونياً لبعض الأنشطة.</p>`, 
            en: `<p>Start your business! The video explains "Instant License" steps. First, document the lease online, then select activity in Balady.</p><p>We show auto-fee calculation based on area/signage, and getting Civil Defense approval online for some activities.</p>` 
        },
        v2Title: { ar: '<i class="fa-solid fa-camera ms-2 text-success"></i> صور وأرسل (بلاغات 940)', en: '<i class="fa-solid fa-camera me-2 text-success"></i> Snap & Send (940 Reports)' },
        v2Desc: { 
            ar: `<p>ساهم في تحسين مدينتك. يوضح الفيديو كيفية استخدام تطبيق بلدي لتصوير المخالفات (حفر، إنارة، نظافة) وإرسالها. الميزة الأهم هي تحديد الموقع GPS بدقة.</p><p>نشرح كيفية متابعة حالة البلاغ حتى يتم إغلاقه من قبل الأمانة، وتقييم سرعة التجاوب مع البلاغ.</p>`, 
            en: `<p>Improve your city. The video shows using Balady app to snap/send violations (potholes, lights, hygiene) with precise GPS.</p><p>We explain tracking the report until closure by the municipality and rating the response speed.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-user-doctor ms-2 text-success"></i> الشهادة الصحية', en: '<i class="fa-solid fa-user-doctor me-2 text-success"></i> Health Certificate' },
        v3Desc: { 
            ar: `<p>للمطاعم والمقاهي، الشهادة الصحية إلزامية. نشرح خطوات حجز موعد الفحص الطبي، وبعد ظهور النتيجة "لائق"، يتم إصدار الشهادة فوراً عبر بلدي.</p><p>يجب طباعة الشهادة ووضعها في مكان بارز في المحل لتجنب الغرامات أثناء الجولات الرقابية للبلدية.</p>`, 
            en: `<p>For restaurants/cafes, Health Cert is mandatory. We explain booking medical exams. Once "Fit", the cert is issued instantly on Balady.</p><p>Print and display it prominently in the shop to avoid fines during municipal inspections.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية', en: '<i class="fas fa-link me-2"></i> Official Links' },
        linkBalady: { ar: '<i class="fas fa-globe ms-2"></i> منصة بلدي', en: '<i class="fas fa-globe me-2"></i> Balady Platform' },
        linkMomrah: { ar: '<i class="fas fa-building-columns ms-2"></i> وزارة الشؤون البلدية', en: '<i class="fas fa-building-columns me-2"></i> MOMRAH Ministry' }
    },

    // =========================================================
    // 16. صفحة الضمان الاجتماعي (Social Security)
    // =========================================================
    social: {
        pageTitle: { ar: "نظام الضمان الاجتماعي المطور", en: "Developed Social Security System" },
        pageDesc: { 
            ar: "دليلك للحصول على الدعم والحماية الاجتماعية. نشرح الفرق بين النظام القديم والمطور، خطوات التسجيل في الملف الموحد، شروط الاستحقاق المبنية على الدخل، وكيفية التعامل مع نتائج الأهلية الشهرية.", 
            en: "Your guide to Social Support and Protection. We explain the difference between old/new systems, Unified File registration steps, income-based eligibility conditions, and handling monthly eligibility results." 
        },
        v1Title: { ar: '<i class="fa-solid fa-scale-balanced ms-2 text-success"></i> أهداف النظام المطور', en: '<i class="fa-solid fa-scale-balanced me-2 text-success"></i> System Objectives' },
        v1Desc: { 
            ar: `<p>النظام المطور يهدف لتمكين المستفيدين. الاستحقاق يعتمد على "مجموع دخل الأسرة" مقارنة بالحد المانع، وليس على الحالة الاجتماعية فقط.</p><p>يوضح الفيديو الفئات المستهدفة، وكيف يتم احتساب الدخل المكتسب وغير المكتسب لتحديد قيمة الدعم الشهري.</p>`, 
            en: `<p>The developed system aims to empower beneficiaries. Eligibility depends on "Total Household Income" vs the Limit, not just social status.</p><p>The video explains target groups and how earned/unearned income is calculated to determine monthly support.</p>` 
        },
        v2Title: { ar: '<i class="fa-solid fa-file-signature ms-2 text-success"></i> التسجيل في الملف الموحد', en: '<i class="fa-solid fa-file-signature me-2 text-success"></i> Register in Unified File' },
        v2Desc: { 
            ar: `<p>التسجيل يتم عبر منصة الدعم والحماية الاجتماعية (SBIS). نشرح خطوة بخطوة كيفية تعبئة الملف الموحد: بيانات السكن، الدخل، والممتلكات.</p><p>نركز على أهمية "إسناد التابعين" وقبولهم للطلب، حيث أن عدم قبول التابع للارتباط يسقطه من الاحتساب في المعاش.</p>`, 
            en: `<p>Registration is via SBIS platform. We explain step-by-step filling the Unified File: Housing, Income, Assets.</p><p>We focus on "Assigning Dependents" and their acceptance, as failure to accept drops them from pension calculation.</p>` 
        },
        v3Title: { ar: '<i class="fa-solid fa-list-check ms-2 text-success"></i> متابعة الأهلية والاعتراض', en: '<i class="fa-solid fa-list-check me-2 text-success"></i> Eligibility Tracking & Objection' },
        v3Desc: { 
            ar: `<p>تصدر نتائج الأهلية يوم 27 من كل شهر ميلادي. إذا كانت النتيجة "غير مؤهل"، يوضح الفيديو كيفية قراءة سبب الرفض وتقديم اعتراض مدعم بالمستندات.</p><p>في حال قبول الاعتراض، يتم صرف الدفعات المحتجزة بأثر رجعي (بحد أقصى 6 أشهر) مع الدفعة التالية.</p>`, 
            en: `<p>Eligibility results are out on the 27th of each Gregorian month. If "Ineligible", the video shows reading the reason and objecting with docs.</p><p>If objection is accepted, withheld payments are paid retroactively (max 6 months) with the next batch.</p>` 
        },
        linksTitle: { ar: '<i class="fas fa-link ms-2"></i> روابط رسمية', en: '<i class="fas fa-link me-2"></i> Official Links' },
        linkSBIS: { ar: '<i class="fas fa-globe ms-2"></i> منصة الدعم والحماية', en: '<i class="fas fa-globe me-2"></i> Support & Protection Platform' },
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
        txt_email: { ar: "info@publicservice4u.com", en: "info@publicservice4u.com" },
        hdr_hours: { ar: '<i class="fas fa-clock me-2"></i>ساعات العمل', en: '<i class="fas fa-clock me-2"></i>Working Hours' },
        txt_hours: { ar: "من الأحد إلى الخميس، 8 صباحاً - 4 مساءً", en: "Sunday to Thursday, 8 AM - 4 PM" },
        msg_success: { ar: "✅ تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.", en: "✅ Message sent successfully! Thank you." },
        msg_error: { ar: "❌ حدث خطأ أثناء الإرسال، حاول مرة أخرى لاحقاً.", en: "❌ Error sending message, please try again." }
    },

    // --- صفحة من نحن  ---
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
        statsTitle: { ar: "مميزات المنصة", en: "Platform Features" }, 
        stat_users: { ar: "مجاني بالكامل", en: "100% Free" }, 
        stat_links: { ar: "نموذج جاهز", en: "Ready Templates" }, 
        stat_langs: { ar: "لغات مدعومة", en: "Supported Languages" }, 
        val_easy: { ar: "سهل", en: "Easy" }, 
        stat_rating: { ar: "متوافق مع الجوال", en: "Mobile Friendly" }, 
        contactBoxTitle: { ar: "تواصل معنا", en: "Contact Us" },
        contactBoxP1: { ar: "للاقتراحات أو الاستفسارات، يرجى التواصل عبر البريد الإلكتروني:", en: "For suggestions or inquiries, please contact us via email:" },
        contactBoxNote: { ar: "* تنويه: هذا الموقع مجهود شخصي ولا يمثل جهة حكومية.", en: "* Note: This website is a personal effort and does not represent any government entity." },
        startBtn: { ar: "ابدأ الآن", en: "Start Now" }
    }, // <--- هنا كان الخطأ، تم إغلاق قسم About بشكل صحيح الآن

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
                a_ar: 'استخدم صفحة "اتصل بنا" في المنيو، أو أرسل إيميل إلى info@publicservice4u.com.', 
                q_en: "How do I contact support?",
                a_en: 'Use the "Contact Us" page in the menu or email info@publicservice4u.com.' 
            }
        ]
    }, 
    
    // --- صفحة الخصوصية (محدثة لـ AdSense) ---
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
                b_ar: "نجمع البيانات الشخصية مثل الاسم والإيميل فقط عند الاتصال بنا. لا نجمع بيانات حساسة، ونستخدم ملفات تعريف الارتباط (cookies) لتحسين التجربة.",
                t_en: "2. Data Collection",
                b_en: "We collect personal data like name and email only when you contact us. We do not collect sensitive data and use cookies for better experience."
            },
            {
                t_ar: "3. إعلانات Google وملفات تعريف الارتباط",
                b_ar: "نستخدم طرفاً ثالثاً (Google AdSense) لعرض الإعلانات. تستخدم Google ملفات تعريف الارتباط (بما في ذلك ملف DART) لعرض الإعلانات بناءً على زياراتك السابقة لموقعنا أو لمواقع أخرى. يمكن للمستخدمين إلغاء الاشتراك في استخدام ملفات تعريف الارتباط DART عن طريق زيارة <a href='https://policies.google.com/technologies/ads' target='_blank'>سياسة الخصوصية لإعلانات Google</a>.",
                t_en: "3. Google Ads & Cookies",
                b_en: "We use a third-party vendor (Google AdSense) to serve ads. Google uses cookies (including the DART cookie) to serve ads based on your prior visits to our website or other websites. Users may opt-out of the use of the DART cookie by visiting the <a href='https://policies.google.com/technologies/ads' target='_blank'>Google Ad and Content Network Privacy Policy</a>."
            },
            {
                t_ar: "4. استخدام البيانات",
                b_ar: "نستخدم البيانات للرد على استفساراتك، تحسين الخدمات، وإرسال تحديثات. نحتفظ بالبيانات لمدة 2 سنة، ثم نحذفها.",
                t_en: "4. Data Usage",
                b_en: "We use data to respond to inquiries, improve services, and send updates. Data is retained for 2 years then deleted."
            },
            {
                t_ar: "5. حقوقك",
                b_ar: "لديك الحق في الوصول، التعديل، الحذف، أو الاعتراض على معالجة بياناتك. اتصل بنا لممارسة حقوقك.",
                t_en: "5. Your Rights",
                b_en: "You have the right to access, modify, delete, or object to data processing. Contact us to exercise your rights."
            },
            {
                t_ar: "6. شروط الاستخدام",
                b_ar: "يجب أن تكون فوق 18 عاماً للاستخدام. لا تستخدم الموقع لأغراض غير قانونية. نحن غير مسؤولين عن الروابط الخارجية.",
                t_en: "6. Terms of Use",
                b_en: "You must be 18+ to use. Do not use for illegal purposes. We are not responsible for external links."
            },
            {
                t_ar: "7. الأمان",
                b_ar: "نستخدم HTTPS وتشفير البيانات. إذا اكتشفت خرق، أبلغنا فوراً. نحن ملتزمون بالإبلاغ للجهات المختصة.",
                t_en: "7. Security",
                b_en: "We use HTTPS and encryption. Report any breach immediately. We are committed to reporting to authorities."
            },
            {
                t_ar: "8. التعديلات",
                b_ar: "نعدّل السياسة حسب الحاجة، وننشر التغييرات هنا. آخر تحديث: 30 نوفمبر 2025.",
                t_en: "8. Amendments",
                b_en: "We update the policy as needed. Changes are published here. Last updated: Nov 30, 2025."
            },
            {
                t_ar: "9. الاتصال",
                b_ar: 'لأي استفسار، اتصل بنا عبر <a href="mailto:info@publicservice4u.com">info@publicservice4u.com</a> أو صفحة "اتصل بنا".',
                t_en: "9. Contact",
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