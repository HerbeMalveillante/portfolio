<script>

    export let background;
    export let name = "Unknown name";
</script>

<main class="">
    <div class="w-full pt-3 pb-4">
        <div class="overflow-hidden relative flex m-3 justify-center items-center text-white h-52 dark:border-white border-gray-700 border-4 shadow-2xl cursor-pointer hover:scale-105 hover:from-pink-500 hover:to-blue-500 bg-gradient-to-r from-pink-500/10 to-blue-500/10 bg-gray-700 transition-all duration-200 group"> 
            
            {#if background}
                <img class="filter group-hover:blur-sm duration-[0ms]" src={background} alt="background">
            {/if}
            <h2 class="absolute font-ubuntu text-xl group-hover:-translate-y-72 transition duration-200">{name}</h2>
            <p class="p-5 absolute font-ubuntu text-md group-hover:-translate-y-0 translate-y-72 duration-200"><slot></slot></p>
        </div>
    </div>
</main>
