// بيانات عامة
let arData = {
  headerTitle: "دليل فعاليات المدينة",
  headerList:["الرئيسية", "الفعاليات", "اتصل بنا", "عن الدليل"],
  headerListLinks: ["index.html", "events.html", "contact.html", "about.html"],
  footerP: " دليل فعاليات المدينة | للتواصل",
  eventsTitle: "تصفية الفعاليات حسب"
};
let enData = {
  headerTitle: "City events guide",
  headerList: [ "Home", "Events", "Contact Us", "About"],
  headerListLinks: ["index.html", "events.html", "contact.html", "about.html"],
  footerP: "City events guide | Contact us on",
  eventsTitle: "Filter events by"
};

// بيانات للصفخة الرئيسية
let arIndexData = {
  sliderImg: ["assets/Img/technology-exhibition.jpg", "assets/Img/race-event.jpg", "assets/Img/select-your-major.jpeg"],
  h3: ["التصنيفات السريعة", "احدث الفعاليات"],
  btnGroup: ["ثقافة", "موسيفى", "عائلي"],
  fastEventsTitle: ["المعرض الكبير", "سباق السيارات", "معارض تكنلوجيا المعلومات"],
  fastEventsImg: ["assets/Img/Big-exhibition.webp", "assets/Img/race-event.jpg", "assets/Img/technology-exhibition.jpg"]
};
let enIndexData = {
  sliderImg: ["assets/Img/technology-exhibition.jpg", "assets/Img/race-event.jpg", "assets/Img/select-your-major.jpeg"],
  h3: ["Quick ranks", "Newest events"],
  btnGroup: ["Cultural", "Musical", "Family"],
  fastEventsTitle:["The Big Exhibition", "Car Racing", "Information Technology Exhibitions"],
  fastEventsImg: ["assets/Img/Big-exhibition.webp", "assets/Img/race-event.jpg", "assets/Img/technology-exhibition.jpg"]
};

// بيانات اتصل بنا
let arContact = {
  title: "تواصل معنا",
  nameTab: "الاسم",
  emailTab: "البريد الالكتروني",
  messageTab: "الرسالة",
  button: "ارسال",
  otherWays: "وسائل اخرى للتواصل:"
};
let enContact = {
  title: "Contact Us",
  nameTab: "Name",
  emailTab: "Email",
  messageTab: "Message",
  button: "Send",
  otherWays: "Other ways to contact"
};

// بيانات عن الدليل
let arAbout = {
  p:"دليل فعاليات المدينة هو منصتك الموثوقة لاستكشاف كل ما يحدث في مدينتك. نسعى إلى تقديم معلومات شاملة ومحدثة عن الفعاليات الثقافية، الترفيهية، الرياضية، والفنية لتسهيل تنسيق جدولك واختيار النشاطات التي تناسب اهتماماتك. هدفنا هو ربط السكان والزوار بالمناسبات المحلية بكل سهولة ويسر، مع توفير تفاصيل دقيقة عن مكان وتوقيت وأهمية كل فعالية. نسعى من خلال هذا الدليل إلى تعزيز التواصل المجتمعي وتشجيع المشاركة في الحياة المحلية. للتواصل والملاحظات, راسلنا على:",
  policy:"نحرص في موقع دليل فعاليات المدينة على نشر محتوى عالي الجودة يتميز بالدقة والموضوعية، ويتماشى مع قيمنا الأخلاقية والمهنية. يُمنع نشر أي مواد تحتوي على محتوى مسيء أو مخالف للقوانين أو حقوق الملكية الفكرية. نحتفظ بحق تعديل أو حذف أي محتوى لا يتوافق مع معاييرنا، ونرحب بالمستخدمين الذين يلتزمون بالمشاركة البناءة والاحترام المتبادل. كما نلتزم بحماية بيانات المستخدمين وعدم استخدامها إلا للأغراض المتعلقة بتحسين تجربة تصفح الموقع.",
  img1:"assets/Img/avatar-man.jpg",
  img2:"assets/Img/avatar-woman.jpg",
  img3:"assets/Img/avatar-man.jpg"
};
let enAbout = {
  p:"The City Events Directory is your trusted platform to explore everything happening in your city. We aim to provide comprehensive and up-to-date information about cultural, entertainment, sports, and artistic events, making it easy for you to plan your schedule and choose activities that match your interests. Our goal is to connect residents and visitors with local happenings seamlessly, offering detailed information about each event’s location, time, and importance. Through this directory, we strive to foster community engagement and encourage participation in local life. For communication and comments, please contact us at:", 
  policy:"We are committed to publishing high-quality content that is accurate and objective, aligned with our ethical and professional values. Any content containing offensive or illegal material, or infringing on intellectual property rights, is strictly prohibited. We reserve the right to edit or remove content that does not meet our standards. We also welcome users who participate constructively and respectfully. Additionally, we are dedicated to protecting user data and will not use it beyond improving the browsing experience on our site.",
  img1:"assets/Img/avatar-man.jpg",
  img2:"assets/Img/avatar-woman.jpg",
  img3:"assets/Img/avatar-man.jpg"
};

// for filter option
let dateOption = ["1/6/2025", "5/7/2025", "17/10/2025", "15/10/2025", "15/11/2025", "11/11/2025"];
let arRankOption = ["رياضية", "اطفال", "ثقافية", "تقنية", "عائلية"];
let arLocationOption = ["حلبة نادي السيارات السوري", "مدينة الملاهي", "مدرسة جودت الهاشمي", "مدينة المعارض", "فندف الداماروز", "مسرح الحمراء"];
let enRankOption = ["Sporty", "Childish", "Cultural", "Techology", "Family"];
let enLocationOption = ["Syrian Automobile Club Race Track", "Intertanment Land", "Jaudat Al-Hashmi Shcool", "Exibitions Land", "Dama Roze hotel", "Al-Hamraa Theater"]

// البيانات العربية للكروت
let arEvents = [{
    name: "فعالية سباق السيارات",
    date: "1/6/2025",
    place: "حلبة نادي السيارات السوري",
    rank: "فعاليات رياضية",
    discription: "سباق سيارات مثير بمشاركة سائقين محليين ومحترفين.",
    img: "assets/Img/race-event.jpg",
    img1: "",
    img2: "",
    img3: "",
    map: "assets/Img/racetrack.png"
  },
  {
    name: "فعالية العاب الاطفال",
    date: "5/7/2025",
    place: "مدينة الملاهي",
    rank: "فعاليات اطفال",
    discription: "مهرجان ألعاب وعروض ترفيهية مناسبة للأطفال والعائلات.",
    img: "assets/Img/kids-event.jpg",
    img1: "",
    img2: "",
    img3: "",
    map: "assets/Img/intertanment-land.png"
  },
  {
    name: "ورشة اختر تخصصك صح",
    date: "17/10/2025",
    place: "مدرسة جودت الهاشمي",
    rank: "فعاليات ثقافية",
    discription: "ورشة إرشادية تساعدك على اختيار التخصص الجامعي الصحيح.",
    img: "assets/Img/select-your-major.jpeg",
    img1: "",
    img2: "",
    img3: "",
    map: "assets/Img/jaudat-alhashmi-school.png"
  },
  {
    name: "المعرض الكبير",
    date: "15/10/2025",
    place: "مدينة المعارض",
    rank: "فعاليات ثقافية",
    discription: "معرض يضم عروضًا ومحلات محلية لعرض المنتجات والخدمات.",
    img: "assets/Img/Big-exhibition.webp",
    img1: "",
    img2: "",
    img3: "",
    map: "assets/Img/exhibition-city.png"
  },
  {
    name: "معارض تكنلوجيا المعلومات",
    date: "15/11/2025",
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
    name: "فعالية اسرة واحدة",
    date: "11/11/2025",
    place: "مسرح الحمراء",
    rank: "فعاليات عائلية",
    discription: "احتفالية عائلية بعروض مسرحية وأنشطة ترفيهية مشتركة.",
    img: "assets/Img/one-family.jpg",
    img1: "",
    img2: "",
    img3: "",
    map: "assets/Img/alhamraa-theater.png"
  }
];

// المعلومات الانكليزية للكروت
let enEvents = [{
    name: "Car Race Event",
    date: "1/6/2025",
    place: "Syrian Car Club Circuit",
    rank: "Sports Events",
    discription: "An exciting car race with local and professional drivers participating.",
    img: "assets/Img/race-event.jpg",
    img1: "",
    img2: "",
    img3: "",
    map: "assets/Img/racetrack.png"
  },
  {
    name: "Children's Games Event",
    date: "5/7/2025",
    place: "Amusement City",
    rank: "Children's Activities",
    discription: "Games festival and entertaining shows suitable for children and families.",
    img: "assets/Img/kids-event.jpg",
    img1: "",
    img2: "",
    img3: "",
    map: "assets/Img/intertanment-land.png"
  },
  {
    name: "Choose Your Major Workshop",
    date: "17/10/2025",
    place: "JoudAt Alhashmi School",
    rank: "Educational Events",
    discription: "A guidance workshop to help you choose the right university major.",
    img: "assets/Img/select-your-major.jpeg",
    img1: "",
    img2: "",
    img3: "",
    map: "assets/Img/jaudat-alhashmi-school.png"
  },
  {
    name: "The Big Exhibition",
    date: "15/10/2025",
    place: "Exhibition City",
    rank: "Educational Events",
    discription: "An exhibition featuring local shops and showcases of products and services.",
    img: "assets/Img/Big-exhibition.webp",
    img1: "",
    img2: "",
    img3: "",
    map: "assets/Img/exhibition-city.png"
  },
  {
    name: "Information Technology Exhibitions",
    date: "15/11/2025",
    place: "Al Damaroze Hotel",
    rank: "Technical Events",
    discription: "A technical exhibition featuring companies and displays of the latest IT solutions.",
    img: "assets/Img/technology-exhibition.jpg",
    img1: "",
    img2: "",
    img3: "",
    map: "assets/Img/dama-rose-hotel.png"
  },
  {
    name: "One Family Event",
    date: "11/11/2025",
    place: "Al Hamra Theater",
    rank: "Family Activities",
    discription: "A family celebration with theatrical performances and joint recreational activities.",
    img: "assets/Img/one-family.jpg",
    img1: "",
    img2: "",
    img3: "",
    map: "assets/Img/alhamraa-theater.png"
  }
];

// التقلب بين عربي و انكليزي
let html = document.getElementsByTagName('html')[0];
let title = document.getElementsByTagName('title')[0];
function arLang(){
  html.lang = "ar";
  html.dir = "rtl";
  header(html.lang);
  footer(html.lang);
  let currentPage = window.location.href.split('/').pop();
  const params = new URLSearchParams(window.location.search);
  const eventId = params.get("id");
  switch (currentPage) {
    case "index.html":
      title.innerHTML = "دليل فعاليات المدينة";
      indexPage(html.lang);
      break;
    case "about.html":
      title.innerHTML = "دليل فعاليات المدينة | عن الدليل";
      aboutPage(html.lang);
      break;
    case "contact.html":
      title.innerHTML = "دليل فعاليات المدينة | اتصل بنا";
      contactPage(html.lang);
      break;
    case "events.html":
      title.innerHTML = "دليل فعاليات المدينة | الفعاليات";
      eventsPage(html.lang);
      break;
    case "event.html" + "?id=" + eventId:
      title.innerHTML = "دليل فعاليات المدينة | الفعالية";
      eventPage(eventId, html.lang);
      break;
  }
}
function enLang(){
  html.lang = "en";
  html.dir = "ltr";
  header(html.lang);
  footer(html.lang);
  let currentPage = window.location.href.split('/').pop();
  const params = new URLSearchParams(window.location.search);
  const eventId = params.get("id");
  switch (currentPage) {
    case "index.html":
      indexPage(html.lang);
      title.innerHTML = "City Events Guide";
      break;
    case "about.html":
      title.innerHTML = "City Events Guide | About";
      aboutPage(html.lang);
      break;
    case "contact.html":
      title.innerHTML = "City Events Guide | Contact";
      contactPage(html.lang);
      break;
    case "events.html":
      title.innerHTML = "City Events Guide | Events";
      eventsPage(html.lang);
      break;
    case "event.html" + "?id=" + eventId:
      title.innerHTML = "City Events Guide | Event";
      eventPage(eventId, html.lang);
      break;
  }
}

// header انشاء
function header(lang) {
  let currentPage = window.location.href.split('/').pop();
  let arr = lang == "ar" ? arData : enData;
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
              <li class="nav-item me-3"><a class="nav-link p-0 ${currentPage === liLink ? "active" : ""}" href="${liLink}">${li}<div class="underliner"></div></a></li>
            `;
          }
          vHtml += `
            <li class="nav-item me-3"><img onclick="arLang()" id="ar-lang" class="s-flag-ar align-self-center" src="assets/Img/ar.png" alt="Arabic"></li>
            <li class="nav-item me-3"><img onclick="enLang()" id="en-lang" class="a-flag-en align-self-center" src="assets/Img/en.png" alt="English"></li>
          </ul>
        </div>
      </div>
    </nav>
  `;
  header.innerHTML = vHtml;
}

// footer انشاء 
function footer(lang) {
  let arr = lang == "ar" ? arData : enData;
  const footer = document.getElementsByTagName('footer')[0];
  let vHtml = `
    <div class="footer-contact"><a href="mailto:info@cityevents.com">${arr.footerP}: info@cityevents.com</a></div>
    <div class="footer-contact-icon">
      <a href="#" class="text-white me-2" aria-label="Facebook"><i class="bi bi-facebook" aria-hidden="true"></i></a>
      <a href="#" class="text-white me-2" aria-label="X (Twitter)"><i class="bi bi-x" aria-hidden="true"></i></a>
      <a href="#" class="text-white me-2" aria-label="Instagram"><i class="bi bi-instagram" aria-hidden="true"></i></a>
      <a href="#" class="text-white" aria-label="WhatsApp"><i class="bi bi-whatsapp" aria-hidden="true"></i></a>
    </div>
  `;
  footer.innerHTML = vHtml;
}

// انشاء الصفحة الرئيسية
function indexPage(lang){
  let arr = lang == "ar" ? arIndexData : enIndexData;
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
function eventsPage(lang){
  let arr = lang == "ar" ? arEvents : enEvents;
  let rankOption = lang == "ar" ? arRankOption: enRankOption;
  let place = lang == "ar" ? arLocationOption: enLocationOption;
  let button = lang == "ar" ? "التفاصيل" : "Details";
  let h3 = lang == "ar" ? "تصفية الفعاليات حسب" : "Filter events by";
  let options = lang == "ar" ? ["التاريخ", "التصنيف", "الموقع"] : ["Date", "Rank", "Location"];
  eventHtml = document.getElementById('events-cards');
  let vHtml = `
    <!-- شريط الفلترة -->
    <div class="input-group container pt-3">
      <h3 class="pe-2 align-self-start mx-2">${h3}</h3>
      <select class="form-select date-select" name="date" id="date-select">
      <option value="">${options[0]}</option>
      `;
      for(let i = 0; i < dateOption.length; i++){
        vHtml+= `
          <option value="${i}">${dateOption[i]}</option>
        `;
      }
      vHtml +=`
      </select>
      <select class="form-select rank-select" name="rank" id="rank-select">
      <option value="">${options[1]}</option>
      `;
      for(let i = 0; i < rankOption.length; i++){
        vHtml+= `
          <option value="${i}">${rankOption[i]}</option>
        `;
      }
      vHtml +=`
      </select>
      <select class="form-select location-select" name="location" id="location-select">
      <option value="">${options[2]}</option>
      `;
      for(let i = 0; i < place.length; i++){
        vHtml+= `
          <option value="${i}">${place[i]}</option>
        `;
      }
      vHtml +=`
      </select>
    </div>
  `;
  let i = 0;
  for(; i < arr.length; i++){
    if(i % 3 == 0){
      vHtml += `<div class="row mt-1 g-4">`;
    }
    vHtml += `
      <div class="col-12 col-md-4">
        <div class="card">
          <img src="${arr[i].img}" class="card-img-top" alt="Event">
          <div class="card-body text-start">
            <h5 class="card-title">${arr[i].name}</h5>
            <p class="date">${arr[i].date}</p>
            <p class="place">${arr[i].place}</p>
            <p class="rank">${arr[i].rank}</p>
            <p class="discription">${arr[i].discription}</p>
            <a href="event.html?id=${i}"><button id="details-btn" class="btn btn-primary">${button}</button></a>
          </div>
        </div>
      </div>`;
    if(i == 2 || i == 5 || i == 8){
      vHtml += `</div>`;
    }
  }
  eventHtml.innerHTML = vHtml;
  document.getElementById('details-btn').onclick = () => {
    eventPage(i, lang);
  };
  // let date = "";
  // let rank = ""; 
  // let location = "";
  // document.getElementById('date-select').onchange = () => {
  //   date = document.getElementById('date-select').value;
  // };
  // document.getElementById('rank-select').onchange = () => {
  //   rank = document.getElementById('rank-select').value;
  // };
  // document.getElementById('location-select').onchange = () => {
  //   location = document.getElementById('location-select').value;
  // };
}

// انشاء صحفة الفعالية
function eventPage(idx, lang){
  let arr = lang == "ar" ? arEvents : enEvents;
  let item = arr[idx];
  let addbtn = lang == "ar" ? "اضف للتقويم" : "Add to calender";
  let goinbtn = lang == "ar" ? "شارك" : "Goin";
  let h3 = lang == "ar" ? "فعاليات ذات صلة" : "Related Events";
  let location = lang == "ar" ? "الموقع": "Location";
  let button = lang == "ar" ? "التفاصيل" : "Details";
  let morePhotos = lang == "ar" ? "المزيد من الصور" : "More Photos"
  let event = document.getElementById("event-main");
  let vHtml2 = `
    <div class="row">
      <img src="${item.img}" class="event-img col-6" alt="Event">
      <div class="card col-6 p-0">
        <div class="card-body text-start">
          <h4 class="card-title">${item.name}</h5>
          <p class="date">${item.date}</p>
          <p class="place">${item.place}</p>
          <p class="rank">${item.rank}</p>
          <p class="discription">${item.discription}</p>
          <button class="btn btn-warning">${addbtn}</button>
          <button class="btn btn-success">${goinbtn}</button>
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
}

// انشاء صفحة اتصل بنا
function contactPage(lang){
  let arr = lang == "ar" ? arContact : enContact;
  let alertMsg = lang == "ar" ? "املأ الحقول بشكل صحيح." : "Please fill in all fields correctly.";
  let successMsg = lang == "ar" ? "تم إرسال الرسالة بنجاح." : "Message sent successfully.";
  let contact = document.getElementById('contact-main');
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
        <a href="mailto:#" class="text-black-50 col-md-4 col-12 mt-0">info@cityevents.com</a>
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
  contact.innerHTML = vHtml;
  // لاظهار تنبيه في حالة لم يدخل مدخلات مقبولة
  function checkform(event){
    event.preventDefault();
    if( document.getElementById('name-input').value === "" ||
        !document.getElementById('email-input').value.includes('@') ||
        document.getElementById('message-input').value === ""
      )
    {
      document.getElementById('successAlert').classList.add('d-none');
      document.getElementById('errorAlert').classList.remove('d-none');
      document.getElementById('name-input').classList.add('is-invalid');
      document.getElementById('email-input').classList.add('is-invalid');
      document.getElementById('message-input').classList.add('is-invalid');
    }
    else{
      document.getElementById('errorAlert').classList.add('d-none');
      document.getElementById('name-input').classList.remove('is-invalid');
      document.getElementById('name-input').classList.add('is-valid');
      document.getElementById('email-input').classList.remove('is-invalid');
      document.getElementById('email-input').classList.add('is-valid');
      document.getElementById('message-input').classList.remove('is-invalid');
      document.getElementById('message-input').classList.add('is-valid');
      document.getElementById('successAlert').classList.remove('d-none');
    }
  }
  document.getElementById('send-form-btn').onclick = checkform;
}

// انشاء صفحة عن الدليل
function aboutPage(lang){
  let arr = lang == "ar" ? arAbout : enAbout;
  let share = lang == "ar" ? "سياسة النشر" : "Publication policy";
  let about = document.getElementById('about-main');
  let vHtml = `
    <p class="px-5 text-center">
      ${arr.p} info@cityevents.com
    </p>
    <!-- فريق العمل -->
    <div class="row justify-content-around partners">
      <div class="col-1"></div>
      <div class="card partners-card col-12 col-sm-3"> 
        <img class="partners-img rounded-circle object-fit-fill" src="${arr.img1}" alt="">
        <div class="card-body text-center pt-5 pb-0">
          <h4>muhammad_ 297424</h4>
          <p>JS with some HTML and CSS</p>
        </div>
      </div>
      <div class="card partners-card col-12 col-sm-3"> 
        <img class="partners-img rounded-circle object-fit-fill" src="${arr.img2}" alt="">
        <div class="card-body text-center pt-5 pb-0">
          <h4>hanan-209285</h4>
          <p>HTML</p>
        </div>
      </div>
      <div class="card partners-card col-12 col-sm-3"> 
        <img class="partners-img rounded-circle object-fit-fill" src="${arr.img3}" alt="">
        <div class="card-body text-center pt-5 pb-0">
          <h4></h4>
          <p>CSS</p>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
    <!-- سياسةالنشر -->
    <div class="row">
      <h3><b>${share}</b></h3>
      <p>${arr.policy}</p>
    </div>
  `;
  about.innerHTML = vHtml;
}