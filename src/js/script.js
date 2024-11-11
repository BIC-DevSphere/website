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

  function populateFaq(){
    // FAQS COLLECTION
    const FAQs = {
      1: {
        question: "Why did the math book look sad?",
        answer: "Because it had too many problems!"
      },

      2: {
        question: "What do you call an alligator in a vest?",
        answer: "An investigator!"
      },

      3: {
        question: "Why don't skeletons fight each other?",
        answer: "Because they don't have the guts!"
      },

      4: {
        question: "How do you catch a squirrel?",
        answer: "Climb a tree and act like a nut!"
      },

      5: {
        question: "How do you do?",
        answer: "Fit and fine."
      }
    }

    // FAQS INSERTION
    const faqInsert = document.querySelector(".faq-container")
    Object.entries(FAQs).forEach(([idx, val])=>{
      const newFaqData = document.createElement("div")
      newFaqData.innerHTML = `<div class="content bg-[#D9D9D9] bg-opacity-10 p-3 pr-5 rounded-3xl w-[80vw] m-auto my-4">
      <div class="before-exp flex items-center justify-between">
        <h2 class="text-left m-3">${idx}. ${val.question}</h2>
        <svg
        class="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          color="#fff"
          fill="none"
        >
          <path
            d="M12 4V20"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 12H20"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          class="hidden cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          color="#fff"
          fill="none"
        >
          <path
            d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <h3 class="hidden text-left m-3">${val.answer}</h3>
  </div>`

  faqInsert.appendChild(newFaqData)
  //     faqInsert.insertAdjacentHTML("beforeend",
  //       `<div class="content bg-[#D9D9D9] bg-opacity-10 p-3 pr-5 rounded-3xl w-[80vw] m-auto my-4">
  //     <div class="before-exp flex items-center justify-between">
  //       <h2 class="text-left m-3">${idx}. ${val.question}</h2>
  //       <svg
  //       class="cursor-pointer"
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 24 24"
  //         width="24"
  //         height="24"
  //         color="#fff"
  //         fill="none"
  //       >
  //         <path
  //           d="M12 4V20"
  //           stroke="currentColor"
  //           stroke-width="1.5"
  //           stroke-linecap="round"
  //           stroke-linejoin="round"
  //         />
  //         <path
  //           d="M4 12H20"
  //           stroke="currentColor"
  //           stroke-width="1.5"
  //           stroke-linecap="round"
  //           stroke-linejoin="round"
  //         />
  //       </svg>
  //       <svg
  //         class="hidden cursor-pointer"
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 24 24"
  //         width="24"
  //         height="24"
  //         color="#fff"
  //         fill="none"
  //       >
  //         <path
  //           d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6"
  //           stroke="currentColor"
  //           stroke-width="1.5"
  //           stroke-linecap="round"
  //           stroke-linejoin="round"
  //         />
  //       </svg>
  //     </div>
  //     <h3 class="hidden text-left m-3">${val.answer}</h3>
  // </div>`)
    })

    // FAQS EXPAND AND COLLAPSE
    const icon = document.querySelectorAll("svg");
    icon.forEach((element) => {
      element.addEventListener("click", () => {
        const h3 = element.parentElement.parentElement.querySelector("h3");
        const svg = element.parentElement.querySelectorAll("svg");
        h3.classList.toggle("hidden");
        svg[0].classList.toggle("hidden");
        svg[1].classList.toggle("hidden");
      });
    });
  }
