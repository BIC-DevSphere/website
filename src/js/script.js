fetch('../src/components/about-section.html')
  .then((response) => response.text())
  .then((data) => (document.querySelector('.about-section-placeholder').innerHTML = data));
fetch('../src/components/event-section.html')
  .then((response) => response.text())
  .then((data) => (document.querySelector('.event-section-placeholder').innerHTML = data));
fetch('../src/components/faq-section.html')
  .then((response) => response.text())
  .then((data) => (document.querySelector('.faq-section-placeholder').innerHTML = data));
