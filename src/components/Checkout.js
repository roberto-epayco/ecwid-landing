import React from "react";

const { REACT_APP_BASE_APIFY_PRIVATE_URL: BASE_APIFY_PRIVATE_URL } = process.env;

const Checkout = () => {
	const confirmationUrl = `${BASE_APIFY_PRIVATE_URL}/ecwid/update-payment`;
	const urlParams = new URLSearchParams(window.location.search);
   const handler = window.ePayco.checkout.configure({
		key: urlParams.get("publicKey"),
		test: false
	});
	const data = {
		name: urlParams.get("orderDescription"),
		description: urlParams.get("orderDescription"),
		invoice: urlParams.get("orderId"),
		currency: urlParams.get("currency"),
		amount: urlParams.get("total"),
		tax: urlParams.get("tax"),
		external: "true",
		confirmation: confirmationUrl,
		response: urlParams.get("returnUrl"),
		extra1: urlParams.get("token"),
		extra2: urlParams.get("storeId"),
		extra3: urlParams.get("referenceTransactionId")
	};

   handler.open(data);
   
   return <div></div>;
}

export default Checkout;