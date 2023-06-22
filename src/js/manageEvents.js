import { isMobileDevice } from "../utils/isMobileDevice";
import { viewImage, closeImage } from "./viewImage";

const manageEvents = (event) => {
	const isMobile = isMobileDevice();

	isMobile ? openModalInMobile(event) : openModalInDesktop(event);
};

const openModalInDesktop = (event) => {
	if (
		event.target.nodeName === "BUTTON" &&
		event.target.outerText === "Visualizar"
	) {
		viewImage(event);
	}

	if (
		event.target.nodeName === "BUTTON" &&
		event.target.outerText === "Cerrar"
	) {
		closeImage(event);
	}
};

const openModalInMobile = (event) => {
	if (
		event.target.nodeName === "IMG" &&
		event.target.className === "feed__image"
	) {
		viewImage(event);
	}

	if (
		event.target.nodeName === "BUTTON" &&
		event.target.outerText === "Cerrar"
	) {
		closeImage(event);
	}
};

export default manageEvents;
