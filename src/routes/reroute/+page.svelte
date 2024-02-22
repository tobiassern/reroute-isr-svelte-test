<script lang="ts">
	export let data;
</script>

<p>Reroute success</p>
<p>Reroute test data: {data.test}</p>
<p>Last updated: {new Date(data.last_update).toLocaleString()}</p>
