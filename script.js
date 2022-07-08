
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}

function renderModal(textContent) {
  const section = document.querySelector(".home-section");
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.id = "modal";
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  modalContent.id = "modalContent";
  const modalTitle = document.createElement("h3");
  modalTitle.className = "modal__title";
  const modalText = document.createElement("p");
  modalText.className = "modal__text";
  modalText.textContent = textContent
  modalText.style.color = "white";

  section.appendChild(modal);
    modal.appendChild(modalContent);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalText);
}




document.querySelector("#over_ons").addEventListener("click", ()=>{
    const textContentOverOns = " Over ons ons ons ons ons ons ons"
    renderModal(textContentOverOns);

    }
);


document.querySelector("#diensten").addEventListener("click", ()=>{
    const textContentDiensten = "Diensten diensten diensten diensten diensten diensten diensten"
    renderModal(textContentDiensten);

    }
);

document.querySelector("#contact").addEventListener("click", ()=>{
    const textContentContact = "Contact contact contact contact contact contact contact"
    renderModal(textContentContact);

    }
);

document.querySelector("#portfolio").addEventListener("click", ()=>{
    const textContentOverOns = " Portfolio portfolio portfolio portfolio portfolio portfolio portfolio"
    renderModal(textContentOverOns);

    }
);


document.querySelector("#home_btn").addEventListener("click", ()=>{
    document.querySelector("#modal").remove();

    }
);
 

document.querySelector("#muteBtn").addEventListener("click", ()=>{
    document.querySelector("#videoBG").muted = true;
    }
);


