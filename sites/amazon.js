import { request } from "../utils/index.js";

export default () =>
	request("amazon.fr/dp/B08H93ZRK9").then((document) =>
		document
			.querySelector("#availability > span")
			?.textContent?.replace(/\n/g, "")
			?.startsWith("En stock")
			? "https://www.amazon.fr/dp/B08H93ZRK9"
			: false
	);
