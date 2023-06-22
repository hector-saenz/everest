export const isMobileDevice = () => {
	if (window !== undefined) {
		if (window.innerWidth <= 1023) {
			return true;
		}

		return false;
	}
};
