<script>

    export let background;
</script>

<main class="dark">
    <div class="h-52 w-full pt-3 pb-4">
        <div class="relative object-cover flex m-3 justify-center items-center dark:text-white h-full border-green-500 border-4 shadow-2xl cursor-pointer {!background ?  'hover:scale-105 hover:from-pink-500 hover:to-blue-500 bg-gradient-to-r from-pink-500/10 to-blue-500/10 bg-gray-700' : 'bg-white'} transition-all duration-200"> 
            <img class="w-100% h-100%" src='/pfp.jpg' alt="background">
            <h2 class="absolute font-ubuntu text-xl">Project Sample</h2>
        </div>
    </div>
</main>