import { viewImage, closeImage } from './viewImage'

const manageEvents = (event) => {
    if(event.target.outerText === 'Visualizar' && 
       event.target.nodeName === 'BUTTON') {
        viewImage(event)
    }

    if(event.target.outerText === 'Cerrar' && 
       event.target.nodeName === 'BUTTON') {
        closeImage(event)
    }

    return true
}

export default manageEvents