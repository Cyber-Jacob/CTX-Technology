const products = {
  core: {
    number: "00",
    title: "Core",
    copy: "Dependable basics for support, accounts, devices, and a calmer operating baseline.",
    price: "From $79 / user / month",
    subject: "CTX Core checkout request"
  },
  shield: {
    number: "01",
    title: "Shield",
    copy: "Layered protection for endpoints, identity, Microsoft 365, and response readiness.",
    price: "From $129 / user / month",
    subject: "CTX Shield checkout request"
  },
  signal: {
    number: "02",
    title: "Signal",
    copy: "Proactive monitoring, human support, email deliverability, and domain health.",
    price: "From $149 / user / month",
    subject: "CTX Signal checkout request"
  },
  forge: {
    number: "03",
    title: "Forge",
    copy: "AI development, deployment, consulting, and security expertise for the work ahead.",
    price: "From $225 / user / month",
    subject: "CTX Forge checkout request"
  }
};

const queryProduct = new URLSearchParams(window.location.search).get("product");
const selected = products[queryProduct] ? queryProduct : "core";
const config = window.CTX_STRIPE_LINKS || {};
const product = products[selected];

document.querySelectorAll("[data-product]").forEach((card) => {
  card.classList.toggle("is-selected", card.dataset.product === selected);
});

document.querySelector("[data-summary-number]").textContent = product.number;
document.querySelector("[data-summary-title]").textContent = product.title;
document.querySelector("[data-summary-copy]").textContent = product.copy;
document.querySelector("[data-summary-price]").textContent = product.price;

const payNow = document.querySelector("#pay-now");
const paymentNote = document.querySelector("[data-payment-note]");
const paymentLink = typeof config[selected] === "string" ? config[selected].trim() : "";

if (paymentLink) {
  payNow.href = paymentLink;
  payNow.target = "_blank";
  payNow.rel = "noopener noreferrer";
  payNow.classList.add("is-configured");
  payNow.innerHTML = "Continue to secure checkout <span aria-hidden=\"true\">↗</span>";
  paymentNote.textContent = "You will continue to Stripe's secure hosted checkout.";
} else {
  payNow.href = `mailto:hello@ctxtechnology.com?subject=${encodeURIComponent(product.subject)}`;
  payNow.innerHTML = `Request ${product.title} checkout <span aria-hidden="true">↗</span>`;
  paymentNote.textContent = "Stripe checkout is being connected for this product. Request a checkout link now and CTX will follow up within one business day.";
}
