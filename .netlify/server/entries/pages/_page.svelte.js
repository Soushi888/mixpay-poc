import { c as create_ssr_component } from "../../chunks/index3.js";
import "../../chunks/singletons.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  {
    if (form?.url) {
      window.open(form.url, "_blank");
    }
  }
  {
    if (form?.error) {
      console.log(form.error);
    }
  }
  return `<div class="container h-full mx-auto flex justify-center items-center flex-col"><h2 class="h2 m-4">Donation</h2>

	<div class="flex gap-5 justify-around"><div class="card p-5"><h3 class="h3 mb-2 font-bold">Payment links</h3>
			<div class="flex flex-col gap-2"><a class="btn variant-filled-primary" href="https://mixpay.me/41127124/5usd" target="_blank">5 $US
				</a>
				<a class="btn variant-filled-primary" href="https://mixpay.me/41127124/10usd" target="_blank">10 $US
				</a>
				<a class="btn variant-filled-primary" href="https://mixpay.me/41127124/20usd" target="_blank">20 $US
				</a>
				<a class="btn variant-filled-primary" href="https://mixpay.me/41127124/donation" target="_blank">Choose Amount
				</a></div></div>

		</div></div>`;
});
export {
  Page as default
};
