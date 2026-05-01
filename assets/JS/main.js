// بيانات عامة
let data = {
  headerTitle: "دليل فعاليات الجامعة الافتراضية",
  headerList:["الرئيسية", "الفعاليات", "اتصل بنا", "عن الدليل"],
  headerListLinks: ["index.html", "events.html", "contact.html", "about.html"],
  footerP: " دليل فعاليات الجامعة الافتراضية | للتواصل",
  eventsTitle: "فلترة الفعاليات حسب"
};

// بيانات للصفخة الرئيسية
let indexData = {
  sliderImg: ["assets/Img/slider-1.jpeg", "assets/Img/drone-competition.png", "assets/Img/day-with-tutor.jpg"],
  h3: ["التصنيفات السريعة", "احدث الفعاليات"],
  btnGroup: ["حفلات تخرج", "ندوات", "مسابقات"],
  fastEventsTitle: ["ندوات برمجة", "سباق درونز", "معارض تكنلوجيا المعلومات"],
  fastEventsImg: ["assets/Img/code-competition.jpg", "assets/Img/drone-competition.png", "assets/Img/technology-exhibition.jpg"]
};

// بيانات اتصل بنا
let contact = {
  title: "تواصل معنا",
  nameTab: "الاسم",
  emailTab: "البريد الالكتروني",
  messageTab: "الرسالة",
  button: "ارسال",
  otherWays: "وسائل اخرى للتواصل:"
};

// بيانات عن الدليل
let about = {
  p:"دليل فعاليات الجامعة الافتراضية هو منصتك الموثوقة لاستكشاف كل ما يحدث في جامعتك. نسعى إلى تقديم معلومات شاملة ومحدثة عن الفعاليات الثقافية، الترفيهية، الرياضية، والفنية لتسهيل تنسيق جدولك واختيار النشاطات التي تناسب اهتماماتك. هدفنا هو ربط السكان والزوار بالمناسبات المحلية بكل سهولة ويسر، مع توفير تفاصيل دقيقة عن مكان وتوقيت وأهمية كل فعالية. نسعى من خلال هذا الدليل إلى تعزيز التواصل الطلابي وتشجيع المشاركة في الحياة المحلية. للتواصل والملاحظات, راسلنا على:",
  policy:"نحرص في موقع دليل فعاليات الجامعة الافتراضية على نشر محتوى عالي الجودة يتميز بالدقة والموضوعية، ويتماشى مع قيمنا الأخلاقية والمهنية. يُمنع نشر أي مواد تحتوي على محتوى مسيء أو مخالف للقوانين أو حقوق الملكية الفكرية. نحتفظ بحق تعديل أو حذف أي محتوى لا يتوافق مع معاييرنا، ونرحب بالمستخدمين الذين يلتزمون بالمشاركة البناءة والاحترام المتبادل. كما نلتزم بحماية بيانات المستخدمين وعدم استخدامها إلا للأغراض المتعلقة بتحسين تجربة تصفح الموقع.",
  img1:"assets/Img/avatar-man.jpg",
  img2:"assets/Img/avatar-woman.jpg"
};

// for filter option
let dateOption = ["1/6/2026", "5/7/2026", "17/10/2026", "15/10/2026", "15/11/2026", "11/11/2026"];
let rankOption = ["رياضية", "ثقافية", "تقنية", "امنية", "حفلات تخرج"];
let locationOption = ["حلبة نادي السيارات السوري", "مقر الجامعة الافتراضية في كفرسوسة", "مدينة المعارض", "فندف الداماروز", "دار الاوبرا في دمشق"];

// البيانات العربية للكروت
let events = [{
    name: "فعالية سباق الدرونز",
    date: "1/6/2026",
    place: "حلبة نادي السيارات السوري",
    rank: "فعاليات رياضية",
    discription: "سباق درونز مثير بمشاركة سائقين محليين محترفين و هاوين.",
    img: "assets/Img/drone-competition.png",
    img1: "",
    img2: "",
    img3: "",
    map: "assets/Img/racetrack.png"
  },
  {
    name: "المسابقة البرمجية السورية",
    date: "5/7/2026",
    place: "مقر الجامعة الافتراضية في كفرسوسة",
    rank: "فعاليات تقنية",
    discription: "مسابقة سنوية تقوم بها الجامعة الافتراضية السورية كل سنة لطلابها المهتمين في عالم البرمجة.",
    img: "assets/Img/code-competition.jpg",
    img1: "",
    img2: "",
    img3: "",
    map: "assets/Img/svu_ks_center.png"
  },
  {
    name: "مسابقة الامن السيبراني ",
    date: "17/10/2026",
    place: "مدينة المعارض",
    rank: "فعاليات امنية",
    discription: "مسابقة محلية تجمع العديد من المواهب المهمة من الناحية التقنية والتي لها اهمية كبيرة في مجال حماية المعلومات.",
    img: "assets/Img/cybersecurity-competition.jpg",
    img1: "",
    img2: "",
    img3: "",
    map: "assets/Img/exhibition-city.png"
  },
  {
    name: "حفل التخرج الخامس والعشرين",
    date: "15/10/2026",
    place: "دار الاوبرا في دمشق",
    rank: "حفل تخرج",
    discription: "حفل التخرج الخامس والعشرين في الجامعة الافتراضية السورية، احتفال بتخرج دفعة جديدة من الطلاب والطالبات الذين أكملوا دراستهم بنجاح.",
    img: "assets/Img/graduation-party.jpeg",
    img1: "",
    img2: "",
    img3: "",
    map: "assets/Img/opra-house.png"
  },
  {
    name: "معارض تكنلوجيا المعلومات",
    date: "15/11/2026",
    place: "فندف الداماروز",
    rank: "فعاليات تقنية",
    discription: "معرض تقني يحتوي على شركات وعروض لأحدث حلول تكنولوجيا المعلومات.",
    img: "assets/Img/technology-exhibition.jpg",
    img1: "",
    img2: "",
    img3: "",
    map: "assets/Img/dama-rose-hotel.png"
  },
  {
    name: "يوم تفاعلي مع الدكتور",
    date: "11/11/2026",
    place: "مقر الجامعة الافتراضية في كفرسوسة",
    rank: "فعاليات ثقافية",
    discription: "فعالية طلابية تجمع بين دكتور مادة معينة مع طلابه لكي يتسنى لهم التفاعل فيزيائيا في قاعة مجهزة بجميع المستلزمات.",
    img: "assets/Img/day-with-tutor.jpg",
    img1: "",
    img2: "",
    img3: "",
    map: "assets/Img/svu_ks_center.png"
  }
];

// header انشاء
function header() {
  let currentPage = window.location.href.split('/').pop();
  let arr = data;
  const header = document.getElementsByTagName('header')[0];
  let vHtml = `
    <nav class="navbar navbar-expand-lg navbar-dark w-100">
    <a class="navbar-brand logo" href="index.html">${arr.headerTitle}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="container-fluid">
        <div class="collapse navbar-collapse justify-content-end" id="mainNav">
          <ul class="navbar-nav p-0">`;
          for(let i = 0; i < arr.headerList.length; i++){
            let liLink = arr.headerListLinks[i];
            let li =arr.headerList[i];
            vHtml += `
              <li class="nav-item me-3">
                <a class="nav-link p-0 ${currentPage === liLink ? "active" : ""}" href="${liLink}">
                  ${li}<div class="underliner"></div>
                </a>
              </li>
            `;
          }
          vHtml += `
          </ul>
        </div>
      </div>
    </nav>
  `;
  header.innerHTML = vHtml;
}

// footer انشاء 
function footer() {
  let arr = data;
  const footer = document.getElementsByTagName('footer')[0];
  let vHtml = `
    <div class="footer-contact"><a href="mailto:info@svuevents.com">${arr.footerP}: info@svuevents.com</a></div>
    <div class="footer-contact-icon">
      <a href="#" class="text-white me-2" aria-label="Facebook"><i class="bi bi-facebook" aria-hidden="true"></i></a>
      <a href="#" class="text-white me-2" aria-label="X (Twitter)"><i class="bi bi-x" aria-hidden="true"></i></a>
      <a href="#" class="text-white me-2" aria-label="Instagram"><i class="bi bi-instagram" aria-hidden="true"></i></a>
      <a href="#" class="text-white" aria-label="WhatsApp"><i class="bi bi-whatsapp" aria-hidden="true"></i></a>
    </div>
  `;
  footer.innerHTML = vHtml;

  // Add scroll to top button
  if (!document.getElementById('scrollToTopBtn')) {
    const btn = document.createElement('button');
    btn.id = 'scrollToTopBtn';
    btn.className = 'btn btn-primary scroll-to-top';
    btn.innerHTML = '↑';
    btn.onclick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    document.body.appendChild(btn);
    
    // Add scroll event to show/hide button
    window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
        btn.style.display = 'block';
      } else {
        btn.style.display = 'none';
      }
    });
  }
}

// انشاء الصفحة الرئيسية
function indexPage(){
  let arr = indexData;
  const idxMain = document.getElementById("index-main");
  let vHtml = `
    <div id="mainCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button class="active" type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
      </div>
      <div class="carousel-inner">
      `;
      for(let i = 0; i < arr.sliderImg.length; i++){
        vHtml += `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
          <img src="${arr.sliderImg[i]}" class="d-block w-100" alt="Slide-${i + 1}">
        </div>`;
      }
      vHtml += `
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- التصنيفات السريعة -->
    <div class="container mt-2 mb-2 p-3">
      <h3><b>${arr.h3[0]}</b></h3>
      <div class="btn-group">
      `;
      for(let i = 0; i < arr.btnGroup.length; i++){
        vHtml +=`<button class="btn btn-outline-primary">${arr.btnGroup[i]}</button>`
      }
      vHtml += `</div>
    </div>
    
    <!-- احدث الفعاليات -->
    <section class="new-events container mt-2 mb-2 p-3">
      <h3><b>${arr.h3[1]}</b></h3>
      <div class="row g-3">
      `;
      for(let i = 0; i < arr.fastEventsTitle.length; i++){
        vHtml += `<div class="col-12 col-sm-6 col-md-4">
          <div class="card">
            <img src="${arr.fastEventsImg[i]}" class="card-img-top" alt="Event 1">
            <div class="card-body text-start">
              <h5 class="card-title">${arr.fastEventsTitle[i]}</h5>
            </div>
          </div>
        </div>
        `;
      }
    vHtml += `
      </section>
    `;
  idxMain.innerHTML = vHtml;
}

// إنشاء كروت الفعاليات
function eventsPage(){
  let arr = events;
  let place = locationOption;
  let options = ["التاريخ", "التصنيف", "الموقع"];
  const eventHtml = document.getElementById('events-cards');

  // دالة توليد الكروت حسب الفلاتر
  function renderCards(filterType, filterValue) {
    let filtered = arr;
    if (filterType === 'date' && filterValue !== "") {
      const val = dateOption[filterValue];
      filtered = arr.filter(ev => ev.date === val);
    } else if (filterType === 'rank' && filterValue !== "") {
      const val = rankOption[filterValue];
      filtered = arr.filter(ev => (ev.rank && ev.rank.includes(val)));
    } else if (filterType === 'location' && filterValue !== "") {
      const val = place[filterValue];
      filtered = arr.filter(ev => (ev.place && ev.place.includes(val)));
    }
    let vHtml = `
      <div class="input-group container pt-3">
        <h3 class="pe-2 align-self-start mx-2">تصفية الفعاليات حسب</h3>
        <select class="form-select mx-2" id="filter-type-select">
          <option value="">اختر نوع الفلتر</option>
          <option value="date"${filterType==="date"?" selected":''}>${options[0]}</option>
          <option value="rank"${filterType==="rank"?" selected":''}>${options[1]}</option>
          <option value="location"${filterType==="location"?" selected":''}>${options[2]}</option>
        </select>
    `;
    // قائمة القيم حسب نوع الفلتر
    if (filterType === 'date') {
      vHtml += `<select class="form-select" id="filter-value-select"><option value="">${options[0]}</option>`;
      for(let i = 0; i < dateOption.length; i++){
        vHtml+= `<option value="${i}"${filterValue==i?" selected":''}>${dateOption[i]}</option>`;
      }
      vHtml += `</select>`;
    } else if (filterType === 'rank') {
      vHtml += `<select class="form-select" id="filter-value-select"><option value="">${options[1]}</option>`;
      for(let i = 0; i < rankOption.length; i++){
        vHtml+= `<option value="${i}"${filterValue==i?" selected":''}>${rankOption[i]}</option>`;
      }
      vHtml += `</select>`;
    } else if (filterType === 'location') {
      vHtml += `<select class="form-select" id="filter-value-select"><option value="">${options[2]}</option>`;
      for(let i = 0; i < place.length; i++){
        vHtml+= `<option value="${i}"${filterValue==i?" selected":''}>${place[i]}</option>`;
      }
      vHtml += `</select>`;
    }
    vHtml += `</div>`;
    for(let i = 0; i < filtered.length; i++){
      if(i % 3 == 0){
        vHtml += `<div class="row mt-1 g-4">`;
      }
      vHtml += `
        <div class="col-12 col-md-4">
          <div class="card">
            <img src="${filtered[i].img}" class="card-img-top" alt="Event">
            <div class="card-body text-start">
              <h5 class="card-title">${filtered[i].name}</h5>
              <p class="date">${filtered[i].date}</p>
              <p class="place">${filtered[i].place}</p>
              <p class="rank">${filtered[i].rank}</p>
              <p class="discription">${filtered[i].discription}</p>
              <a href="event.html?id=${arr.indexOf(filtered[i])}"><button class="btn btn-primary details-btn">التفاصيل</button></a>
            </div>
          </div>
        </div>`;
      if(i % 3 == 2 || i === filtered.length-1){
        vHtml += `</div>`;
      }
    }
    eventHtml.innerHTML = vHtml;
    // تفعيل زر التفاصيل
    document.querySelectorAll('.details-btn').forEach(btn => {
      btn.onclick = function(e){
        const idx = btn.parentElement.parentElement.parentElement.querySelector('a').href.split('id=')[1];
        eventPage(idx);
      };
    });
    // تفعيل الفلاتر
    document.getElementById('filter-type-select').onchange = function(){
      renderCards(this.value, "");
    };
    const valueSelect = document.getElementById('filter-value-select');
    if(valueSelect){
      valueSelect.onchange = function(){
        renderCards(filterType, this.value);
      };
    }
  }
  // أول تحميل: عرض كل شيء
  renderCards("", "");
}

// انشاء صحفة الفعالية
function eventPage(idx){
  let arr = events;
  let item = arr[idx];
  let addbtn = "اضف للتقويم";
  let sharebtn = "مشاركة";
  let h3 = "فعاليات ذات صلة";
  let location = "الموقع";
  let button = "التفاصيل";
  let morePhotos = "المزيد من الصور";
  let event = document.getElementById("event-main");
  let vHtml2 = `
    <div class="row">
      <img src="${item.img}" class="event-img col-6" alt="Event">
      <div class="card col-6 p-0">
        <div class="card-body text-start">
          <h4 class="card-title">${item.name}</h4>
          <p class="date">${item.date}</p>
          <p class="place">${item.place}</p>
          <p class="rank">${item.rank}</p>
          <p class="discription">${item.discription}</p>
          <button class="btn btn-warning w-25 mb-1">${addbtn}</button>
          <button id="share-btn" class="btn btn-success w-25">${sharebtn}</button>
        </div>
        <div id="more-photos" class="card-footer">
          <h5>${morePhotos}</h5>
          <div class="row">
            <img src="${item.img1}" class="col-4" alt="img-1">
            <img src="${item.img2}" class="col-4" alt="img-2">
            <img src="${item.img3}" class="col-4" alt="img-3">
          </div>
        </div>
      </div>
    </div>
    <h3 class="align-self-start mt-3">${location}</h3>
    <div class="row">
      <img src="${item.map}" class="col-12" alt="Map">
    </div>
  `;

  // قسم فعاليات ذات صلة
  // نأخذهم على حسب نفس التصنيف
  for(let i = 0; i < arr.length; i++){
    if(arr[i].rank == item.rank && arr[i].name != item.name){
      let item = arr[i];
      vHtml2 += `
      <h3 class="pt-3 align-self-start">${h3}</h3>
        <div class="row">
          <img src="${item.img}" class="event-img col-3 p-0" alt="Event">
          <div class="card col-3 p-0">
            <div class="card-body text-start">
              <h5 class="card-title">${item.name}</h5>
              <p class="date">${item.date}</p>
              <p class="place">${item.place}</p>
              <a href="event.html?id=${i}"><button class="btn btn-primary">${button}</button></a>
            </div>
          </div>
        </div>
      `;
    }
  }
  event.innerHTML = vHtml2;
  // تفعيل زر المشاركة
  const shareBtn = document.getElementById('share-btn');
  if (shareBtn) {
    shareBtn.onclick = function() {
      const shareData = {
        title: item.name,
        text: `${item.name} - ${item.discription}\n${item.date} - ${item.place}`,
        url: window.location.href
      };
      if (navigator.share) {
        navigator.share(shareData).catch(()=>{});
      } else {
        // fallback: نسخ الرابط
        navigator.clipboard.writeText(window.location.href);
        shareBtn.innerText = 'تم نسخ الرابط!';
        setTimeout(()=>{ shareBtn.innerText = 'مشاركة'; }, 2000);
      }
    };
  }

  // تفعيل زر أضف للتقويم
  const addToCalBtn = document.querySelector('.btn-warning');
  if (addToCalBtn) {
    addToCalBtn.onclick = function() {
      // تحويل التاريخ إلى صيغة YYYYMMDD
      function formatDate(dateStr) {
        // توقع الصيغة: يوم/شهر/سنة
        const parts = dateStr.split('/');
        if (parts.length === 3) {
          return parts[2] + parts[1].padStart(2, '0') + parts[0].padStart(2, '0');
        }
        return dateStr;
      }
      const dt = formatDate(item.date);
      // ملف ics بسيط
      const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${item.name}\nDESCRIPTION:${item.discription}\nLOCATION:${item.place}\nDTSTART:${dt}\nDTEND:${dt}\nEND:VEVENT\nEND:VCALENDAR`;
      const blob = new Blob([ics], { type: 'text/calendar' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${item.name}.ics`;
      document.body.appendChild(a);
      a.click();
      setTimeout(()=>{
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);
    };
  }
}

// انشاء صفحة اتصل بنا
function contactPage(){
  let arr = contact;
  let alertMsg = "املأ الحقول بشكل صحيح.";
  let successMsg = "تم إرسال الرسالة بنجاح.";
  let contactMain = document.getElementById('contact-main');
  let vHtml = `
    <form class="form-control mx-auto px-4 pt-4">
      <div class="row">
        <div class="col-4"></div>
        <h3 class="col-4">${arr.title}</h3>
        <div class="col-4"></div>
      </div>
      <h6 class="col-3 pt-3 form-label"><b>&#8226; ${arr.nameTab}:</b></h6>
      <div class="row g-2">
        <input id="name-input" type="text" class="form-control col-12">
      </div>
      <h6 class="col-4 pt-3 form-label"><b>&#8226; ${arr.emailTab}:</b></h6>
      <div class="row g-2">
        <input id="email-input" type="email" class="form-control col-12">
      </div>
      <h6 class="col-3 pt-3 form-label"><b>&#8226; ${arr.messageTab}:</b></h6>
      <div class="row g-2">
        <textarea id="message-input" class="form-control col-12"></textarea>
      </div>
      <div id="errorAlert" class="alert alert-danger d-none my-2">
        ${alertMsg}
      </div>
      <div id="successAlert" class="alert alert-success d-none my-2">
        ${successMsg}
      </div>
      <div class="row mt-2 g-2">
        <button id="send-form-btn" type="submit" class="btn btn-primary col-12">${arr.button}</button>
      </div>
      <div class="row my-3 g-2 d-flex align-items-center">
        <p class="col-md-4 col-12 form-label">&#8226; ${arr.otherWays}</p>
        <a href="mailto:#" class="text-black-50 col-md-4 col-12 mt-0">info@svuevents.com</a>
        <div class="d-flex gap-2 col-md-4 col-12 justify-content-center mt-0">
          <a href="#" class="text-black-50">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="#" class="text-black-50">
            <i class="bi bi-x"></i>
          </a>
          <a href="#" class="text-black-50">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="#" class="text-black-50">
            <i class="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </form>
  `;
  contactMain.innerHTML = vHtml;
  // التحقق باستخدام regular expressions
  function checkform(event){
    event.preventDefault();
    const name = document.getElementById('name-input').value.trim();
    const email = document.getElementById('email-input').value.trim();
    const message = document.getElementById('message-input').value.trim();
    // اسم عربي أو إنجليزي على الأقل حرفين
    const correctName = /^[\p{L} ]{2,}$/u;
    // بريد إلكتروني بسيط
    const correctEmail = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    // رسالة لا تقل عن 5 أحرف
    const correctMsg = /^.{5,}$/s;
    let valid = true;
    if (!correctName.test(name)) {
      document.getElementById('name-input').classList.add('is-invalid');
      valid = false;
    } else {
      document.getElementById('name-input').classList.remove('is-invalid');
      document.getElementById('name-input').classList.add('is-valid');
    }
    if (!correctEmail.test(email)) {
      document.getElementById('email-input').classList.add('is-invalid');
      valid = false;
    } else {
      document.getElementById('email-input').classList.remove('is-invalid');
      document.getElementById('email-input').classList.add('is-valid');
    }
    if (!correctMsg.test(message)) {
      document.getElementById('message-input').classList.add('is-invalid');
      valid = false;
    } else {
      document.getElementById('message-input').classList.remove('is-invalid');
      document.getElementById('message-input').classList.add('is-valid');
    }
    if (!valid) {
      document.getElementById('successAlert').classList.add('d-none');
      document.getElementById('errorAlert').classList.remove('d-none');
    } else {
      document.getElementById('errorAlert').classList.add('d-none');
      document.getElementById('successAlert').classList.remove('d-none');
    }
  }
  document.getElementById('send-form-btn').onclick = checkform;
}

// انشاء صفحة عن الدليل
function aboutPage(){
  let arr = about;
  let team = "فريق العمل";
  let share = "سياسة النشر";
  let aboutMain = document.getElementById('about-main');
  let vHtml = `
    <p class="px-3 text-center">
      ${arr.p} info@svuevents.com
    </p>
    <!-- فريق العمل -->
    <h2><b>${team}</b></h2>
    <div class="row justify-content-around partners">
      <div class="col"></div>
      <div class="card partners-card col-12 col-sm-3"> 
        <img class="partners-img rounded-circle object-fit-fill" src="${arr.img1}" alt="">
        <div class="card-body text-center pt-5 pb-0">
          <h5><b>muhammad_ 297424 C5</b></h5>
          <p>JavaScript</p>
        </div>
      </div>
      <div class="col-1"></div>
      <div class="card partners-card col-12 col-sm-3"> 
        <img class="partners-img rounded-circle object-fit-fill" src="${arr.img2}" alt="">
        <div class="card-body text-center pt-5 pb-0">
          <h5><b>maryan_286029 C5</b></h5>
          <p>HTML CSS</p>
        </div>
      </div>
      <div class="col-1"></div>
      <div class="card partners-card col-12 col-sm-3"> 
        <img class="partners-img rounded-circle object-fit-fill" src="${arr.img2}" alt="">
        <div class="card-body text-center pt-5 pb-0">
          <h5><b>riam_304965 C3</b></h5>
          <p>HTML CSS</p>
        </div>
      </div>
      <div class="col"></div>
    </div>
    <!-- سياسةالنشر -->
    <div class="row">
      <h3><b>${share}</b></h3>
      <p>${arr.policy}</p>
    </div>
  `;
  aboutMain.innerHTML = vHtml;
}