<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div class="container h-full mx-auto flex justify-center items-center flex-col">
	<h2 class="h2 m-4">Donnations</h2>

	<div class="flex gap-5 justify-around">
		<div class="card p-5">
			<h3 class="h3 mb-2 font-bold">Payment links</h3>
			<div class="flex flex-col gap-2">
				<a class="btn variant-filled-primary" href="https://mixpay.me/41127124/5usd">5 $US</a>
				<a class="btn variant-filled-primary" href="https://mixpay.me/41127124/10usd">10 $US</a>
				<a class="btn variant-filled-primary" href="https://mixpay.me/41127124/20usd">20 $US</a>
			</div>
		</div>

		<div class="card p-5">
			<h3 class="h3 mb-2 font-bold">Short Links</h3>
			<form action="?/createShortLink" method="post">
				<div class="flex flex-col gap-5">
					<input class="input" type="number" name="amount" placeholder="Amount" />
					<select name="quoteAsset" class="select">
						<option value="USDT">USDT</option>
						<option value="USDC">USDC</option>
						<option value="BUSD">BUSD</option>
						<option value="BTC">BTC</option>
						<option value="ETH">ETH</option>
						<option value="BNB">BNB</option>
					</select>
					<button class="btn variant-filled-primary" type="submit">Donnate</button>
				</div>
			</form>
		</div>
	</div>
</div>
