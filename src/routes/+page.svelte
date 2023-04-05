<script lang="ts">
    import {onMount} from "svelte";
    import initWasm from "../lib/wasm/btc-address.wasm";
    import { AnonymousIdentity } from "@dfinity/agent";

    onMount(async () => {
        const tmp = await initWasm('/wasm/ic_btc_address_bg.wasm');
        console.log("Wasm:", tmp);

        // TODO: according doc not a promise but, is that correct?
        const address = tmp.derive_btc_address({ 'Testnet' : null }, {
            owner: new AnonymousIdentity().getPrincipal(),
            subaccount: []
        });

        console.log("Derive address:", address);
    });
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
