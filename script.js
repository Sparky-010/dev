const body = document.querySelector('body'),
      theme = document.getElementById('theme'),
      drop = document.getElementById('drop')

theme.onclick = ()=>{
   theme.querySelector('img:first-child').classList.toggle('hidden')
   theme.querySelector('img:nth-child(2)').classList.toggle('hidden')
   theme.querySelector('img:nth-child(2)').classList.toggle('bg-gray-900')
   theme.querySelector('img:last-child').classList.toggle('border')

   drop.classList.toggle('max-sm:bg-[var(--bg)]')
   drop.classList.toggle('max-sm:bg-[var(--txt)]')
   drop.classList.toggle('max-sm:text-[var(--light-txt)]')

   body.classList.toggle('bg-[var(--bg)]')
   body.classList.toggle('bg-[var(--txt)]')
   body.classList.toggle('text-[var(--txt)]')
   body.classList.toggle('text-[#d1d5dc]')

}

window.onscroll = ()=>{
   const header = document.querySelector('header')
   if(window.pageYOffset > 54) {
      header.classList.add('bg-[var(--pry)]','text-[var(--light-txt)]')
      drop.classList.add('max-sm:text-[var(--txt)]')
   }
   else {
      header.classList.remove('bg-[var(--pry)]','text-[var(--light-txt)]')
      drop.classList.add('max-sm:text-[var(--light-txt)]')
   }
}

function menu() {
   const menu = document.getElementById("menu");
   const drop = document.getElementById("drop");
   menu.addEventListener("click", () => {
      drop.classList.toggle("max-sm:mt-[-420px]");
      drop.classList.toggle("max-sm:overflow-y-hidden");
   });
}
menu();
function closeMenu() {
   const drop = document.getElementById("drop");
   drop.classList.add("max-sm:mt-[-420px]");
}
const headerLinks = document.querySelectorAll('header ul li a')
headerLinks.forEach(a => {
   a.onclick = closeMenu
})

document.getElementById("date").innerText = new Date().getFullYear();

function Certicates() {
   const certificates = [
      { img: "./certificate.png", title: "Responsive Design" },
      { img: "", title: "JavaScript" },
   ];

   const certiImgs = document.getElementById("certi-imgs"),
         certiTitles = document.getElementById("certi-titles"),
         nextCerti = document.getElementById("nextCerti"),
         prevCerti = document.getElementById("prevCerti");

   prevCerti.disabled = true;
   prevCerti.style.cursor = "not-allowed";
   certiImgs.innerHTML = `<a href="${certificates[0].img}">
                              <img src="${certificates[0].img}" alt="${certificates[0].title}" width="400" class="h-[300px]" title="View Certificate.">
                           </a>`;
   certiTitles.textContent = certificates[0].title;

   let n = 0;
   function nextCert() {
      prevCerti.disabled = false;
      prevCerti.style.cursor = "pointer";
      prevCerti.classList.remove("bg-gray-600");
      prevCerti.classList.add("bg-purple-600");
      n++;
      certiImgs.innerHTML = `<a href="${certificates[n].img}">
                                 <img src="${certificates[n].img}" width="400" class="h-[300px]" title="View Certificate.">
                              </a>`;
      certiTitles.textContent = certificates[n].title;
      n === certificates.length - 1 ? (n = -1) : "";
   }
   nextCerti.addEventListener("click", nextCert);

   function prevCert() {
      n--;
      n < 0 ? (n = certificates.length - 1) : "";
      certiImgs.innerHTML = `<a href="${certificates[n].img}">
                                 <img src="${certificates[n].img}" width="400" class="h-[300px]" title="View Certificate.">
                              </a>`;
      certiTitles.textContent = certificates[n].title;
   }
   prevCerti.addEventListener("click", prevCert);
}
Certicates();

// Portfolio
function portfolio() {
   const allProj = document.getElementById("allProj"),
         RD = document.getElementById("RD"),
         JS = document.getElementById("JS"),
         rd = document.getElementById("rd"),
         js = document.getElementById("js");

   allProj.addEventListener("click", (R) => {
      rd.classList.remove("hidden");
      js.classList.remove("hidden");
      RD.style.background = "";
      RD.style.color = "";
      JS.style.background = "";
      JS.style.color = "";
      allProj.classList.add("bg-[var(--pry)]", "text-white");
   });

   RD.addEventListener("click", (R) => {
      rd.classList.remove("hidden");
      js.classList.add("hidden");
      RD.style.background = "var(--pry)";
      RD.style.color = "#fff";
      JS.style.background = "";
      JS.style.color = "";
      allProj.classList.remove("bg-[var(--pry)]", "text-white");
   });
   JS.addEventListener("click", (R) => {
      rd.classList.add("hidden");
      js.classList.remove("hidden");
      JS.style.background = "var(--pry)";
      JS.style.color = "#fff";
      RD.style.background = "";
      RD.style.color = "";
      allProj.classList.remove("bg-[var(--pry)]", "text-white");
   });
}
portfolio();

function Message(clr,msgTxt) {
   const msgDiv = document.getElementById('msg-div'),
         msg = document.getElementById('msg')

   msgDiv.classList.toggle('-top-13')
   msgDiv.classList.toggle('top-12')
   msg.style.color = clr
   msg.textContent = msgTxt

   setTimeout(()=>{
      msgDiv.classList.toggle('top-12')
      msgDiv.classList.toggle('-top-13')
   },3000)
}

function sendMail() {
   if (navigator.onLine) {
      const name = document.getElementById("name"),
            email = document.getElementById("email"),
            phone = document.getElementById("phone"),
            subj = document.getElementById("subj"),
            msg = document.getElementById("msg")

      if (name.value && email.value && phone.value && subj.value && msg.value) {
         const params = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            subj: subj.value,
            msg: msg.value,
         };

         const serviceID = 'service_2sl431x',
               templateID = 'template_81dp8at'

         emailjs.send(serviceID, templateID, params)
         .then((result) => {
            Message('var(--pry)','Your message has been sent successfully, you will get a reply shortly.')
         })
         .catch((err) => {
            // alert('');
            Message('orange','An error occured please try again.')
         });
      }else {
         Message('red','Please fill in all fields!')
      }
   }else {
      Message('red','Please connect to the internet.')
   }
}
// document.getElementById("subBtn").addEventListener("click", sendMail);