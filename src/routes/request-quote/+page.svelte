<script lang="ts">
    import FormTrackingFields from "$lib/components/tracking/FormTrackingFields/FormTrackingFields.svelte";
    import type {PageProps} from "./$types";
    let { form }: PageProps = $props();
</script>

<h2>Main CTA form</h2>
<form method="POST" class="flex flex-col" action="?/requestQuote">
    <label for="email">
        Email*
        <input id="email" name="email" type="email" placeholder="email@domain.me" class="form-field" />
    </label>

    <label for="message">
        Describe your request
        <textarea id="message" name="message" placeholder="Describe your request in as much detail as possible" class="form-field"></textarea>
    </label>

    <button type="submit" class="cta-btn">Submit</button>

    <FormTrackingFields />
</form>