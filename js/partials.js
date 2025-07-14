// simple client-side include for partials
function includeHTML() {
  document.querySelectorAll('[data-include]').forEach(el => {
    const file = el.getAttribute('data-include');
    fetch(file)
      .then(res => res.text())
      .then(html => {
        el.outerHTML = html;
        includeHTML();
      })
      .catch(err => console.error('Include failed:', err));
  });
}
document.addEventListener('DOMContentLoaded', includeHTML);
