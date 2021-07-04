import { request } from "../utils/index.js";

export default () =>
	request("auchan.fr/sony-console-ps5-edition-standard/p-c1315865").then(
		(document) =>
			document.querySelector(
				"#wrapper > div.col-xs-12.editorial-page--container > div.content > div > div > div.error-container--title"
			)?.textContent === " Envolée ! "
				? false
				: "https://www.auchan.fr/sony-console-ps5-edition-standard/p-c1315865"
	);
