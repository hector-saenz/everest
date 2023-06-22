import manageEvents from "../js/manageEvents";
import loadPage from "../js/loadPage";

const feed = document.querySelector("#feed");

window.addEventListener("click", manageEvents);

loadPage(feed);
