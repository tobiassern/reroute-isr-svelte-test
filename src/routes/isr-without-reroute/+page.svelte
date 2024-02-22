<script lang="ts">
	export let data;
</script>

<p>ISR without reroute</p>
<p>Test data: {data.test}</p>
<p>Last updated: {new Date(data.last_update).toLocaleString()}</p>
<a href="/">Go back home</a>