function createImage() {
    const container = document.createElement('div')
    const image = document.createElement('img')
    const span = document.createElement('span')
    const button = document.createElement('button')

    container.className = 'feed__image-skeleton'
    image.className = 'feed__image'
    span.className = 'feed__image-overlay'
    button.className = 'button button-primary'
    button.textContent = 'Visualizar'

    span.append(button)
    container.append(image, span)

    return container
}


async function getImage(image) {
    const imageData = await fetchImage()
    
    const imgObj = new Image()
    imgObj.src = imageData.url
    imgObj.onload = function() {
        getSize(this, image)
    }

    image.firstChild.src = imageData.url
}

function getSize(imageThis, container) {

    let size

    const vertical = imageThis.width < imageThis.height
    const horizontal = imageThis.width > imageThis.height
    const difference = imageThis.height - imageThis.width

    if(vertical) {
        if(difference > 200) {
            size = 'big'
        }
        size = 'medium'
    }

    if(horizontal) {
        size = 'small'
    }

    container.className = `feed__image-container ${size}`
}

function fetchImage() {
    const collections = [
        '9454911',
        '3178572',
        '3694365',
        '1020971',
        '9248817',
        '9042799',
        '9042806',
        '778914',
        '209138',
        '566331',
        '446755',
        '881002',
        '762960',
        '2199410',

    ]
    const randomId = () => Math.floor(Math.random() * (5000 - 1)) + 1
    const randomCol = () => Math.floor(Math.random() * (9 - 0)) + 0
    const image = fetch(`https://source.unsplash.com/collection/${collections[randomCol()]}/${randomId()}`)
    return image 
}

export {
    createImage,
    getImage
}