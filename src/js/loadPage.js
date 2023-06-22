import { createImage, getImage } from "./createImage";
import registerLastImage from "./infinite-scroll";

async function loadPage(feed) {
	const images = [];

	for (let i = 0; i < 15; i++) {
		const image = createImage();

		images.push(image);
	}

	feed.append(...images);

	for (let i = 0; i < images.length; i++) {
		await getImage(images[i]);
	}

	registerLastImage(feed.lastChild);
}

export default loadPage;
