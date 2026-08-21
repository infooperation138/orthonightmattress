// Add your business WhatsApp number below, including country code without +.
// Example: const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_NUMBER = "917303420392";

function sendEnquiry(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const model = document.getElementById("model").value;
  const message = document.getElementById("message").value.trim();

  if (!WHATSAPP_NUMBER) {
    alert("Website is ready. Add your WhatsApp number in script.js to enable enquiries.");
    return;
  }

  const text = `Hello ORTHO NIGHT,%0A%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(phone)}%0AInterested in: ${encodeURIComponent(model)}%0AMessage: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
}
