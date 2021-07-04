import { api } from "../utils/index.js";

export default () =>
	api(
		"boulanger.com/webapp/wcs/stores/servlet/BLGetDynamicOffer?leadOfferCatentryId=1650318&storeId=10001&catalogId=10001&langId=-2"
	)
		.then((res) => res.json())
		.then((data) =>
			data.buyable ? "https://www.boulanger.com/ref/1147567" : false
		);
