import data from './data.json'


const getProductList = () => {
    const { product } = data;
    const parentElement = document.getElementById('parentElement')



    product.map((item) => {
        const newElem = document.createElement("li")
        newElem.className = 'card__container'

        const card = document.createElement("div")
        card.className = 'card'

        const imgContainer = document.createElement("div")
        const photo = document.createElement("img")
        photo.className = 'card__photo'
        photo.src = item.img
        imgContainer.appendChild(photo)
        card.appendChild(photo)


        const textContainer = document.createElement("div")
        const desription = document.createElement("p")
        textContainer.className = 'card__description'
        desription.innerHTML = item.name
        textContainer.appendChild(desription)
        card.appendChild(textContainer)

        const priceContainer = document.createElement("div")
        priceContainer.className = 'card__price'
        priceContainer.innerHTML = item.price + ' P'
        card.appendChild(priceContainer)

        const buttonContainer = document.createElement("div")
        buttonContainer.className = 'buy-button'
        buttonContainer.innerHTML = 'Купить'
        card.appendChild(buttonContainer)

        newElem.appendChild(card)

        parentElement.appendChild(newElem)
    })



    const showPayFormButtons = document.getElementsByClassName("buy-button")
    const modalForm = document.getElementById("order-modal")
    modalForm.addEventListener('click', function (e) {
        if (e.target === modalForm) {
            modalForm.classList.remove('modal__active')
            const payContainer = document.querySelector('.pay__message__container')
            const formContainer = document.querySelector('.form__container')
            payContainer.classList.remove('pay__message__container_active')
            formContainer.classList.remove('form__container_hide')
        }
    })
    Array.from(showPayFormButtons).forEach(item => {
        item.addEventListener('click', function (e) {
            modalForm.classList.add('modal__active')
        })
    });

}

export default getProductList; 
