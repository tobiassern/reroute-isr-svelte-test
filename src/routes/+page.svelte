<p data-sveltekit-preload-data="false">
	ISR with reroute (rerouted path): <a href="/isr">/isr</a>
</p>
<p data-sveltekit-preload-data="false">ISR with reroute (original path): <a href="/reroute-and-isr">/reroute-and-isr</a></p>

<br />
<p>Reroute without ISR (rerouted path): <a href="/reroute/no-isr">/reroute/no-isr</a></p>
<p>
	Reroute without ISR (original path): <a href="/reroute-without-isr">/reroute-without-isr</a>
</p>
<br />
<p>Reroute without SSR (rerouted path): <a href="/no-ssr">/no-ssr</a></p>
<p>
	Reroute without SSR (original path): <a href="/reroute-without-ssr">/reroute-without-ssr</a>
</p>
<br />
<p>ISR without reroute: <a href="/no-reroute-with-isr">/no-reroute-with-isr</a></p>
<form method="POST" action="?/prerender-revalidate">
	<button>Revalidate ISR</button>
</form>
