import { isMobileDevice } from "../utils/isMobileDevice";

const modal = document.querySelector("#modal");

const isMobile = isMobileDevice();

const viewImage = (event) => {
	const imageSrc = isMobile
		? event.target.src
		: event.target.parentElement.previousSibling.attributes.src.value;

	const imageContainer = document.createElement("div");
	const image = document.createElement("img");
	const button = document.createElement("button");

	modal.style.display = "flex";

	imageContainer.className = "modal__image-container";
	image.className = "modal__image";
	button.className = "modal__button button button-danger";
	button.textContent = "Cerrar";

	image.src = imageSrc;

	imageContainer.append(button, image);
	modal.appendChild(imageContainer);
};

const closeImage = (event) => {
	const imageContainer = event.target.parentElement;

	modal.style.display = "none";
	modal.removeChild(imageContainer);
};

export { viewImage, closeImage };
