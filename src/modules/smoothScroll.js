export const smoothScroll = () => {
  const headerId = document.getElementById("header");
  const smoothScrollBtn = document.querySelector(".smooth-scroll");

  const scrollDocument = () => {
    if (
      document.body.scrollTop > 560 ||
      document.documentElement.scrollTop > 560
    ) {
      smoothScrollBtn.style.display = "block";
    } else {
      smoothScrollBtn.style.display = "none";
    }
    console.log("debounce");
  };

  const toUp = () => {
    headerId.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const debounce = (fn, ms) => {
    let timeout;
    return () => {
      const fnCall = () => {
        fn.apply(this);
      };
      clearTimeout(timeout);
      timeout = setTimeout(fnCall, ms);
    };
  };

  let scrollDocumentDebounce = debounce(scrollDocument, 500);
  window.addEventListener("scroll", scrollDocumentDebounce);
  smoothScrollBtn.addEventListener("click", toUp);
};
