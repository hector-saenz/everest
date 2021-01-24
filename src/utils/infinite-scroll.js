import loadPage from './loadPage'

const feed = document.querySelector('#feed')

const isIntersecting = (entry) => {
    return entry.isIntersecting
}

const loadNextPage = async (entry) => {
    loadPage(feed)
    observer.unobserve(entry.target)
}

const observer = new IntersectionObserver(entries => {
    entries
        .filter(isIntersecting)
        .forEach(loadNextPage)
})

const registerLastImage = (lastImage) => {
    observer.observe(lastImage)
}

export default registerLastImage