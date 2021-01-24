import manageEvents from '../utils/manageEvents'
import loadPage from '../utils/loadPage'

const feed = document.querySelector('#feed')

window.addEventListener('click', manageEvents)

loadPage(feed)