// ✅ EDIT THESE
const HER_NAME = "princess";         // e.g. "Chloe"
const YOUR_NAME = "joshua";      // put your name
const START_DATE = "2025-12-01T00:00:00+08:00"; // when you became official (SGT)

// Optional secret message:
const SECRET_MESSAGE = "I'll protect you from anyone that tries to hurt you and heal all your wounds, replacing them with good memories instead🤍";

document.getElementById("herName").textContent = HER_NAME;
document.getElementById("yourName").textContent = YOUR_NAME;
document.getElementById("secretText").textContent = SECRET_MESSAGE;

// Secret reveal
const btn = document.getElementById("secretBtn");
const secret = document.getElementById("secret");
btn.addEventListener("click", () => {
  secret.hidden = !secret.hidden;
  btn.textContent = secret.hidden ? "Open secret message" : "Hide secret message";
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
document.getElementById("gallery").addEventListener("click", (e) => {
  const btn = e.target.closest(".photo");
  if(!btn) return;
  const src = btn.getAttribute("data-src");
  lightboxImg.src = src;
  lightbox.style.display = "grid";
  lightbox.setAttribute("aria-hidden", "false");
});
document.getElementById("closeLightbox").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeLightbox(); });

function closeLightbox(){
  lightbox.style.display = "none";
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}




