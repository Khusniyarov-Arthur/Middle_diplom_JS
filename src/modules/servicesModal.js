export const servicesModal = () => {
  const services = document.getElementById('services')
  const modalOverlay = document.querySelector('.overlay')
  const modalOpen = document.querySelector('.services-modal')
  const modalClose = document.querySelector('.services-modal__close')

  const showServicesModal = () => {
    modalOpen.style.display = "block" 
    modalOverlay.style.display = "block"
    document.body.style.overflow = "hidden"
  }

  const hidenServicesModal = () => {
    modalOpen.style.display = "none"
    modalOverlay.style.display = "none"
    document.body.style.overflow = ""
  }

  services.addEventListener('click', (e)=> {
    if (e.target.closest('.service-button')) {
      showServicesModal()
    }
  })

  modalClose.addEventListener('click', hidenServicesModal)
}