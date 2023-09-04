export const modal = () => {
  const modalBlock = document.querySelector(".header-modal");
  const modalOverlay = document.querySelector(".overlay");
  const modalOpenBtn = document.querySelector(".button");
  const modalClose = document.querySelector(".header-modal__close");

  const hidenOrVisible = () => {
    modalBlock.style.display === "block"
      ? ((modalBlock.style.display = "none"),
        (modalOverlay.style.display = "none"),
        (document.body.style.overflow = "hidden"))
      : ((modalBlock.style.display = "block"),
        (modalOverlay.style.display = "block"),
        (document.body.style.overflow = "hidden"));
  };

  modalOpenBtn.addEventListener("click", hidenOrVisible);
  modalClose.addEventListener("click", hidenOrVisible);
};
