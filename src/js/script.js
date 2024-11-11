fetch('../src/components/about-section.html')
  .then((response) => response.text())
  .then((data) => (document.querySelector('.about-section-placeholder').innerHTML = data));
fetch('../src/components/event-section.html')
  .then((response) => response.text())
  .then((data) => (document.querySelector('.event-section-placeholder').innerHTML = data));
fetch('../src/components/faq-section.html')
  .then((response) => response.text())
  .then((data) => {
    document.querySelector('.faq-section-placeholder').innerHTML = data
    populateFaq();
  });


  // FAQ Expand and Collapse
  function toggleFAQ(button) {
    const content = button.nextElementSibling;
    const isOpen = button.getAttribute("aria-expanded") === "true";
  
    // Toggle aria-expanded attribute
    button.setAttribute("aria-expanded", !isOpen);
    
    // Handle max-height transition for sliding effect
    content.style.maxHeight = isOpen ? "0" : `${content.scrollHeight}px`;
    content.style.transition = 'max-height 0.5s ease';
  
    // Manually rotate the SVG using inline styles
    const svg = button.querySelector("svg");
    svg.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
    svg.style.transition = "transform 0.5s ease";
  }


  // FAQ POPULATION FUNCTION
  function populateFaq() {
    const FAQs = {
      1: { question: "Why did the math book look sad?", answer: "Because it had too many problems!" },
      2: { question: "What do you call an alligator in a vest?", answer: "An investigator!" },
      3: { question: "Why don't skeletons fight each other?", answer: "Because they don't have the guts!" },
      4: { question: "How do you catch a squirrel?", answer: "Climb a tree and act like a nut!" },
      5: { question: "How do you do?", answer: "Fit and fine." }
    };
  
    const faqInsert = document.querySelector(".accordion-group");
    Object.entries(FAQs).forEach(([idx, val]) => {
      const newFaqData = document.createElement("div");
      newFaqData.innerHTML = `
        <div class="accordion py-8" style="border-bottom: 1px solid #fff;">
          <button onclick="toggleFAQ(this)" class="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-[#BFBFBE] w-full transition duration-500" aria-expanded="false">
            <h5>${idx}. ${val.question}</h5>
            <svg class="text-[#BFBFBE]" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
          <div class="accordion-content overflow-hidden" style="max-height: 0; transition: max-height 0.5s ease;">
            <p class="text-base font-normal text-[#BFBFBE] p-4">${val.answer}</p>
          </div>
        </div>`;
      faqInsert.appendChild(newFaqData);
    });
  }
