const form = document.getElementById('order-form')
const requaredFields = form.querySelectorAll('input[required]')
const formContainer = document.querySelector('.form__container')
const payContainer = document.querySelector('.pay__message__container')

const initBooking = () => {
    if (form) {
        form.addEventListener('submit', sendBookingData);
    }
}

const sendBookingData = (e) => {
    e.preventDefault();
    const hasAllData = Array.from(requaredFields).every((field) => field.value)
    if (hasAllData) {
        //тут будет отправка данных
        console.log(Array.from(requaredFields).map((field) => ({ [field.name]: field.value })))
        formContainer.classList.add('form__container_hide')
        payContainer.classList.add('pay__message__container_active')
    }
};


export default initBooking