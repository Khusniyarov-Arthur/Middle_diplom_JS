import { animate } from "./helpers"

export const sertificate = () => {

  const sertificatePreview = document.querySelector('.sertificate-preview')

  const overlay = document.querySelector('.overlay')
  const sertificateModal = document.querySelector('.sertificate-modal')
  const sertificateModalClose = document.querySelector('.sertificate-modal__close')
  const imgSertificate = document.querySelector('.img-sertificate')

  const showModal = () => {
    animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
         sertificateModal.style.opacity = progress 
         overlay.style.opacity = progress 
      }
    });
    sertificateModal.style.display = "block" 
    overlay.style.display = "block"
    document.body.style.overflow = "hidden"
  }

  const hidenModal = () => {
    sertificateModal.style.display = "none"
    overlay.style.display = "none"
    document.body.style.overflow = ""
  }


  sertificateModalClose.addEventListener('click', hidenModal)

  sertificatePreview.addEventListener('click', (e)=> {
    e.preventDefault()
    if (e.target.closest('.sertificate-document')) {
      imgSertificate.src = e.target.closest('.sertificate-document').getAttribute('href')
      showModal()
    }
  })
}