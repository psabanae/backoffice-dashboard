const createProductButton = document.querySelector('#create-product');
const modal = document.querySelector('#main-modal');
const alertModal = document.querySelector('#modal-alert');

const deleteProductButton = document.querySelectorAll('.delete-product');
const deleteAlert = document.querySelector('#delete-alert');

deleteProductButton.forEach((value, index) => {
    deleteProductButton[index].addEventListener('click', () => {
        deleteAlert.classList.remove('d-none');
    })
})


createProductButton.addEventListener('click', () => {
    alertModal.classList.remove('d-none');    
})
