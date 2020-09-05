const d1 = document.querySelectorAll(".domains");
const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
const card4 = document.querySelector("#card4");
const card2Content = document.querySelector("#card2-content");
const card3Content = document.querySelector("#card3-content");
const card2Buttons = document.querySelector("#card2-buttons");
const title = document.getElementById("main-domain-title");
const title2 = document.getElementById("main-domain-title-4");
const image = document.getElementById("main-domain-image");
const image2 = document.getElementById("main-domain-image-4");
const text = document.getElementById("main-domain-text");
const text3 = document.getElementById("main-domain-text-3");
const container = document.getElementById("main-domain");
const events = document.getElementById("add-event");
const events3 = document.getElementById("add-event-3");
const achieve = document.getElementById("link-to-achievements");
const achieve2 = document.getElementById("link-to-achievements-2");
const achieve3 = document.getElementById("card2-buttons");
const contact1 = document.getElementById("contact-btn");
const contact2 = document.getElementById("contact-btn2");

const pro1 = document.getElementById("pro1");
const pro2 = document.getElementById("pro2");
const pro3 = document.getElementById("pro3");
const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
const name3 = document.getElementById("name3");
const post1 = document.getElementById("post1");
const post2 = document.getElementById("post2");
const post3 = document.getElementById("post3");
const linked1 = document.getElementById("linked1");
const linked2 = document.getElementById("linked2");
const linked3 = document.getElementById("linked3");
const propic1 = document.getElementById("propic1");
const propic2 = document.getElementById("propic2");
const propic3 = document.getElementById("propic3");

const pros = [
  {
    // name1: "Bhushan Pagare",
    // name2: "Shreyas Godbole",
    // name3: "none",

    // post: "Web Head",

    // linked1: "https://www.linkedin.com/in/bhushan-pagare-953333159/",
    // linked2: "https://www.linkedin.com/in/shreyas-godbole-963681183/",
    // linked3: "",

    // propic1: "assets/img/profile/male.png",
    // propic2: "assets/img/profile/shreyas.png",
    // propic3: "assets/img/profile/picture.png",

    name1: "Null",
    name2: "Null ",
    name3: "Null",

    post: "Null",

    linked1: "Null",
    linked2: "Null",
    linked3: "",

    propic1: "./Domains-Page/assets/img/profile/male.png",
    propic2: "./Domains-Page/assets/img/profile/male.png",
    propic3: "./Domains-Page/assets/img/profile/male.png",
  },
  {
    name1: "Ritesh Badaan",
    name2: "Siddharth Patil",
    name3: "none",

    post: "App Head",

    linked1: "https://www.linkedin.com/in/ritesh-badaan-a457a216b/",
    linked2: "https://www.linkedin.com/in/siddharth-patil-77839b180/",
    linked3: "",

    propic1: "./Domains-Page/assets/img/profile/ritesh.png",
    propic2: "./Domains-Page/assets/img/profile/siddharth.png",
    propic3: "./Domains-Page/assets/img/profile/picture.png",
  },
  {
    name1: "Ajay Kadam",
    name2: "Tanmay Nale",
    name3: "Saumitra Kulkarni",

    post: "Programming Head",

    linked1: "https://www.linkedin.com/in/ajay-kadam-512255177/",
    linked2: "https://www.linkedin.com/in/tanmay-nale-939733172/",
    linked3: "https://www.linkedin.com/in/saumitra-kulkarni-0494b6149/",

    propic1: "./Domains-Page/assets/img/profile/ajay.png",
    propic2: "./Domains-Page/assets/img/profile/tanmay.png",
    propic3: "./Domains-Page/assets/img/profile/saumitra.png",
  },
  {
    name1: "Kapil Mirchandani",
    name2: "Kushal Chordiya",
    name3: "none",

    post: "XOdia Head",
    post2: "DataWiz Head",

    linked1: "https://www.linkedin.com/in/kapil-mirchandani-084914183/",
    linked2: "https://www.linkedin.com/in/kushal-chordiya/",
    linked3: "",

    propic1: "./Domains-Page/assets/img/profile/kapil.png",
    propic2: "./Domains-Page/assets/img/profile/kushal.png",
    propic3: "./Domains-Page/assets/img/profile/picture.png",
  },
  {
    name1: "Nishita Pali",
    name2: "Rashmi Venkateshwaran",
    name3: "none",

    post: "Design Head",

    linked1: "https://www.linkedin.com/in/nishita-pali-3a9054180/",
    linked2: "https://www.linkedin.com/in/rashmi-venkateshwaran-188400171/",
    linked3: "",

    propic1: "./Domains-Page/assets/img/profile/nishita.jpg",
    propic2: "./Domains-Page/assets/img/profile/rashmi.png",
    propic3: "./Domains-Page/assets/img/profile/picture.png",
  },
  {
    name1: "Muskan Jain",
    name2: "Rohit Nagotkar",
    name3: "none",

    post: "Roboliga Head",
    post2: "Cretronix Head",

    linked1: "https://www.linkedin.com/in/muskan-jain-03ab881aa/",
    linked2: "https://www.linkedin.com/in/rohit-nagotkar-491744149/",
    linked3: "",

    propic1: "./Domains-Page/assets/img/profile/muskan.png",
    propic2: "./Domains-Page/assets/img/profile/rohit.png",
    propic3: "./Domains-Page/assets/img/profile/picture.png",
  },
  {
    name1: "Purvesh Jain",
    name2: "Sudhanshu Bhoi",
    name3: "none",

    post: "Wallstreet Head",
    post2: "B-Plan Head",

    linked1: "https://www.linkedin.com/in/purvesh-jain-035727155/",
    linked2: "https://www.linkedin.com/in/sudhanshu-b-64113b129/",
    linked3: "",

    propic1: "./Domains-Page/assets/img/profile/purvesh.png",
    propic2: "./Domains-Page/assets/img/profile/sudhanshu.png",
    propic3: "./Domains-Page/assets/img/profile/picture.png",
  },
  {
    name1: "Piyusha Gumte",
    name2: "Amol Gandhi",
    name3: "Vansh Kaul",

    post: "NTH Head",
    post2: "Enigma Head",

    linked1: "https://www.linkedin.com/in/piyusha-gumte-769117193/",
    linked2: "https://www.linkedin.com/in/amol-gandhi-606ba71a0/",
    linked3: "https://www.linkedin.com/in/vansh-kaul-a863b1192",

    propic2: "./Domains-Page/assets/img/profile/amol.png",
    propic3: "./Domains-Page/assets/img/profile/vansh.png",
    propic1: "./Domains-Page/assets/img/profile/piyusha.png",
  },
];

const titles = [
  "WEB DEVELOPMENT",
  "APP DEVELOPMENT",
  "COMPETITIVE PROGRAMMING",
  "MACHINE LEARNING & ARTIFICIAL INTELLIGENCE",
  "DIGITAL DESIGN",
  "IoT & ROBOTICS",
  "MARKETING & FINANCE",
  "LOGIC & REASONING",
];

const images = [
  "./Domains-Page/assets/img/domains/web-dev.png",
  "./Domains-Page/assets/img/domains/app-dev.png",
  "./Domains-Page/assets/img/domains/cp.png",
  "./Domains-Page/assets/img/domains/ml.png",
  "./Domains-Page/assets/img/domains/design.png",
  "./Domains-Page/assets/img/domains/iot.png",
  "./Domains-Page/assets/img/domains/marketing.png",
  "./Domains-Page/assets/img/domains/lnr.png",
];

const texts = [
  "PISB has its own website developed from scratch by its members. The organisation offers newcomers to develop, build and maintain the website by working on various aspects involved in the process of web development. During Credenz, students get a chance to compete with other colleges in the race to create the best websites.",
  "Android is one of the most widely used mobile platforms. As an Android developer, you will have a chance to cater to the huge audience by creating mobile apps/games. We, at PISB aim to promote learning and research in the field of Android app development.",
  "Competitive programming is an art of solving critical problems through creative thinking and creativity. The adrenaline rush that you will get after seeing the green tick and your name on the leaderboard - there’s nothing compared to that feeling. We, at PISB conduct various competitive contests over the year and cater to a programmer's hunger.",
  "Machine Learning and AI is the new electricity, rising as one of the hottest fields in 2020. At PISB, we promote learning, research and application of AI through our competitions and mentor sessions. Get ready to dive into the domain of cool face recognition applications, chatbots, self-driving cars and much more!",
  "Design is the quintessential art of expressing thoughts into an aesthetically pleasing and functional way. For precise visual communication and to connect with an audience, one must have a firm grasp of design principles. We, at PISB aim to excel and flourish at creating visuals that appease a wide range of people.",
  "Robotics is an interdisciplinary research area that acts as the interface between computer science and engineering. Robotics involves the design, construction, operation, and use of robots. Our flagship event, called Roboliga consists of competitions between robots made by different colleges across Maharashtra.",
  "Marketing is the business process of promoting a product or service. From pitching your event to establishing a good rapport with the clients, marketing is essential to any event. Handling and allotting the resources comes under finance. We, at PISB make sure all the marketing and finance matters are handled accurately.",
  "Logical reasoning tests assess a candidate's ability to use structured thinking to deduce from a short passage which of a number of statements is the most accurate response to a posed question. We, at PISB, conduct many events and fun activities that will trigger your brains and help you in learning the perfect tactics and strategies of problem-solving.",
];

const eventsHTML = [
  '  <a href="./events.html#credenz-t-5"  class="events-cont" >  <button class="img-thumbnail "  id="link-to-webweaver">  <img src="./Domains-Page/assets/img/events/web.png" class="img-fluid event-image" alt="">      <div class="d-flex justify-content-center event-title">Web Weaver</div></button></a>',
  '  <a class="events-cont">                                  <button class="img-thumbnail disabled"  id="link-to-software">   <img src="./Domains-Page/assets/img/events/software.png" class="img-fluid event-image" alt=""> <div class="d-flex justify-content-center event-title">Software Development</div></button></a>',
  '  <a href="./events.html#credenz-t-2" class="events-cont" >  <button class="img-thumbnail "  id="link-to-clash">      <img src="./Domains-Page/assets/img/events/clash.png" class="img-fluid event-image" alt="">    <div class="d-flex justify-content-center event-title">Clash</div></button> </a>                   <a href="./events.html#credenz-t-2 "class="events-cont"  ><button class="img-thumbnail "  >    <img src="./Domains-Page/assets/img/events/rc.png" class="img-fluid event-image" id="link-to-rc" alt="">                   <div class="d-flex justify-content-center event-title">Reverse Coding</div></button></a>    <a href="./events.html#ctd-t-1" class="events-cont" > <button class="img-thumbnail ">    <img src="./Domains-Page/assets/img/events/ncc.png" class="img-fluid event-image" id="link-to-ncc" alt="">    <div class="d-flex justify-content-center event-title">NCC</div></button></a>',
  '  <a href="./events.html#credenz-t-6" class="events-cont" >  <button class="img-thumbnail "  id="link-to-xodia">      <img src="./Domains-Page/assets/img/events/xodia.png" class="img-fluid event-image" alt="">    <div class="d-flex justify-content-center event-title">XOdia</div></button> </a>                   <a href="./events.html#credenz-t-4 "class="events-cont"  ><button class="img-thumbnail "  >    <img src="./Domains-Page/assets/img/events/datawiz.png" class="img-fluid event-image" id="link-to-datawiz" alt="">         <div class="d-flex justify-content-center event-title">DataWiz</div></button></a>',
  '  <a href="./events.html#credenz-nt-2" class="events-cont" > <button class="img-thumbnail "  id="link-to-pixelate">   <img src="./Domains-Page/assets/img/events/pixelate.png" class="img-fluid event-image" alt=""> <div class="d-flex justify-content-center event-title">Pixelate</div></button></a>',
  '  <a href="./events.html#credenz-nt-4" class="events-cont" >  <button class="img-thumbnail "  id="link-to-roboliga">   <img src="./Domains-Page/assets/img/events/roboliga.png" class="img-fluid event-image" alt=""> <div class="d-flex justify-content-center event-title">RoboLIGA</div></button> </a>                <a href="./events.html#credenz-t-3" class="events-cont">   <button class="img-thumbnail "  >   <img src="./Domains-Page/assets/img/events/cretronix.png" class="img-fluid event-image" id="link-to-cretronix" alt="">     <div class="d-flex justify-content-center event-title">Cretronix</div></button></a>',
  '  <a href="./events.html#credenz-nt-1" class="events-cont" > <button class="img-thumbnail "  id="link-to-bplan">      <img src="./Domains-Page/assets/img/events/bplan.png" class="img-fluid event-image" alt="">    <div class="d-flex justify-content-center event-title">B-Plan</div></button> </a>                  <a href="./events.html#credenz-nt-3" class="events-cont">   <button class="img-thumbnail "  >  <img src="./Domains-Page/assets/img/events/wallstreet.png" class="img-fluid event-image" id="link-to-wallstreet" alt="">   <div class="d-flex justify-content-center event-title">Wall Street</div></button></a>',
  '  <a href="./events.html#ctd-t-2" class="events-cont" > <button class="img-thumbnail "  id="link-to-nth">      <img src="./Domains-Page/assets/img/events/nth.png" class="img-fluid event-image" alt="">    <div class="d-flex justify-content-center event-title">NTH</div></button> </a>                               <a href="./events.html#credenz-nt-5" class="events-cont" > <button class="img-thumbnail "  id="link-to-enigma">      <img src="./Domains-Page/assets/img/events/enigma.png" class="img-fluid event-image" alt="">    <div class="d-flex justify-content-center event-title">Enigma</div></button> </a> ',
];

const achievements = [
  "./achievements.html#vp",
  "./achievements.html#ca",
  "./achievements.html#hackathons-div",
  "./achievements.html#cpd",
  "#",
  "#",
  "./achievements.html#wallstreet",
  "#",
];

//Page Load//--------------------------------------------------------

$(".right").mousedown(() => {
  checkScrollR();
});

$(".left").mousedown(() => {
  checkScroll();
});

function checkScrollR() {
  console.log(
    $("#all-domains-container").scrollLeft() + " " + $(window).width()
  );
  if ($("#all-domains-container").scrollLeft() >= $(window).width() * 3) {
    $("#all-domains-container").animate(
      {
        scrollLeft: "-=3000vw",
      },
      400,
      "swing"
    );
  } else {
    $("#all-domains-container").animate(
      {
        scrollLeft: "+=300vw",
      },
      400,
      "swing"
    );
  }
}

function checkScroll() {
  if ($("#all-domains-container").scrollLeft() == 0) {
    $("#all-domains-container").animate(
      {
        scrollLeft: "+=3000vw",
      },
      400,
      "swing"
    );
  } else {
    $("#all-domains-container").animate(
      {
        scrollLeft: "-=300vw",
      },
      400,
      "swing"
    );
  }
}

function appear() {
  // alert("LOL")
  setTimeout(function () {
    card2.classList.toggle("add-invisible");
    card3.classList.toggle("add-invisible");
    card1.classList.toggle("add-invisible");
    card4.classList.toggle("add-invisible");
  }, 200);

  setTimeout(function () {
    card2.classList.toggle("card2-active");
    card3.classList.toggle("card3-active");
    card1.classList.toggle("card1-active");
    card4.classList.toggle("card4-active");
  }, 800);

  setTimeout(function () {
    card2Content.classList.toggle("add-invisible");
    card3Content.classList.toggle("add-invisible");
    card2Buttons.classList.toggle("add-invisible");
  }, 1500);
}

appear();

var currentDomain = 0;

//------------------------------------------------------Apply on-click animations
for (let i = 0; i < 8; i++) {
  d1[i].addEventListener("click", function () {
    if (i != currentDomain) {
      currentDomain = i;
      foo2(i);
    }
  });
}

function foo2(index) {
  for (let i = 0; i < 8; i++) {
    d1[i].classList.remove("selected");
  }
  d1[index].classList.add("selected");

  $("html, body").animate(
    {
      scrollTop: $("#main-domain").offset().top - 75,
    },
    "slow"
  );

  // Removing appear animation
  image.classList.remove("card__image-appear");
  image2.classList.remove("card__image-appear");
  image.style.opacity = 1;
  image2.style.opacity = 1;

  title.classList.remove("card__content-appear");
  title2.classList.remove("card__content-appear");

  // Fade-out content
  card2Content.classList.toggle("add-invisible");
  card3Content.classList.toggle("add-invisible");
  card2Buttons.classList.toggle("add-invisible");

  // Cards collapse
  card2.classList.toggle("card2-active");
  card3.classList.toggle("card3-active");
  card1.classList.toggle("card1-active");
  card4.classList.toggle("card4-active");

  // Card1 animation
  setTimeout(function () {
    image.classList.toggle("an-image-change");
    image2.classList.toggle("an-image-change");
    title.classList.toggle("a-title-change");
    title2.classList.toggle("a-title-change");
  }, 600);

  // Content change
  setTimeout(function () {
    contact1.style.display = "flex";
    contact2.style.display = "flex";

    if (index === 0) {
      contact1.style.display = "none";
      contact2.style.display = "none";
    }

    pro1.style.display = "flex";
    pro2.style.display = "flex";
    pro3.style.display = "none";

    name1.textContent = pros[index].name1;
    name2.textContent = pros[index].name2;
    name3.textContent = pros[index].name3;

    post1.textContent = pros[index].post;
    if (index === 3 || index === 5 || index === 6) {
      post2.textContent = pros[index].post;
    } else {
      post2.textContent = pros[index].post;
    }
    post3.textContent = pros[index].post2;

    linked1.setAttribute("href", pros[index].linked1);
    linked2.setAttribute("href", pros[index].linked2);
    linked3.setAttribute("href", pros[index].linked3);

    propic1.setAttribute("src", pros[index].propic1);
    propic2.setAttribute("src", pros[index].propic2);
    propic3.setAttribute("src", pros[index].propic3);

    if (index === 2 || index === 7) {
      pro3.style.display = "flex";
    }

    achieve3.style.visibility = "";
    achieve2.style.visibility = "";

    if (index === 4 || index === 5 || index === 7) {
      achieve3.style.visibility = "hidden";
      achieve2.style.visibility = "hidden";
    }

    title.textContent = titles[index];
    title2.textContent = titles[index];
    image.setAttribute("src", images[index]);
    image2.setAttribute("src", images[index]);

    text.textContent = texts[index];
    text3.textContent = texts[index];
    events.innerHTML = eventsHTML[index];
    events3.innerHTML = eventsHTML[index];

    text.style.marginTop = "";
    document.querySelector("#image-content-3").style.paddingBottom = "";
    document.querySelector("#card3-ac").style.height = "";

    if (index === 4 || index === 5 || index === 7) {
      text.style.marginTop = "3vw";
      document.querySelector("#card3-ac").style.height = "0";
    }

    if (index != 0) {
      document.querySelector("#image-content-3").style.paddingBottom = "8vw";
    }

    achieve.setAttribute("href", achievements[index]);
    achieve2.setAttribute("href", achievements[index]);
  }, 900);

  // Card 1 Post animation
  setTimeout(function () {
    image.classList.toggle("an-image-change");
    image2.classList.toggle("an-image-change");
    title.classList.toggle("a-title-change");
    title2.classList.toggle("a-title-change");
  }, 1100);

  // cards Expand
  setTimeout(function () {
    card2.classList.toggle("card2-active");
    card3.classList.toggle("card3-active");
    card1.classList.toggle("card1-active");
    card4.classList.toggle("card4-active");
  }, 1500);

  // Content appears
  setTimeout(function () {
    card2Content.classList.toggle("add-invisible");
    card3Content.classList.toggle("add-invisible");

    card2Buttons.classList.toggle("add-invisible");
  }, 2100);
}

function foo() {
  card2Buttons.classList.toggle("add-invisible");
  card2Content.classList.toggle("add-invisible");
  card1.classList.toggle("card1-active");
  card2.classList.toggle("card2-active");
}
