<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div class="container h-full mx-auto flex justify-center items-center flex-col">
	<h2 class="h2 m-4">Create a ShortLink</h2>

	<form method="post" class="form flex flex-col gap-3" use:enhance>
		<label class="label">
			<span>Amount</span>
			<input type="number" name="amount" class="input" placeholder="Amount" min="0" />
		</label>

		<label class="label">
			<span>Quote asset</span>
			<select name="quoteAsset" class="select">
				<option value="BTC">BTC</option>
				<option value="ETH">ETH</option>
				<option value="USDT">USDT</option>
			</select>
		</label>

		<label class="label">
			<span>Settlement asset</span>
			<select name="settlementAsset" class="select">
				<option value="BTC">BTC</option>
				<option value="ETH">ETH</option>
				<option value="USDT">USDT</option>
			</select>
		</label>

		<button type="submit" class="btn variant-filled-primary">Create ShortLink</button>
	</form>
</div>
