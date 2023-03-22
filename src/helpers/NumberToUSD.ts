export function numberToUSD(number: number) {
	return new Intl.NumberFormat("us-US", {
		style: "currency",
		currency: "USD",
		}).format(Math.abs(number))
}