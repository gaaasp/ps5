import { request } from "../utils/index.js";

export default () =>
	request("fnac.com/Console-Sony-PS5-Edition-Standard/a14119956/w-4").then(
		(document) =>
			document.querySelector(
				"body > div.Main.Main--fullWidth > div > div.productPageTop > div.f-productPage-colRight.clearfix > section > ul.f-productOffers-contents.js-productOffersContent > li > div > div > div:nth-child(1) > div.f-buyBox-infos > div > p > span"
			)?.textContent === "En stock"
				? "https://www.fnac.com/Console-Sony-PS5-Edition-Standard/a14119956/w-4"
				: false
	);
