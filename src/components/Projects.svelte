<script>
    import ProjectTile from "./ProjectTile.svelte";

    let projects = ["Hello World", "Another tile", "Lorem Ipsum", "BLABLABLA", "Very fun there as I see", "We're having so much fun"]
</script>

<main class="min-h-screen bg-blue-600">
    <div class="border-black border-2">
        <div class="grid sm:grid-cols-2 gap-8 p-10 md:grid-cols-3 lg:grid-cols-4">
            {#each projects as project}
                <ProjectTile project={project}/>
            {/each}
        </div>
    </div>
</main>