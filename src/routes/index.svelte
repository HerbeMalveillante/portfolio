<script>

    function scrollTo(id){
        var element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }


</script>


<main class="dark">
    <div class="flex flex-col justify-center items-center bg-white dark:bg-gray-800 h-screen w-screen">
        <div class="flex flex-col items-center">
            <div class="relative group">
                <h1 class="absolute lg:text-9xl md:text-7xl text-5xl font-ubuntu font-black bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent filter blur-xl animate-pulse duration-500">Herbe Malveillante</h1>
                <h1 class="relative lg:text-9xl md:text-7xl text-5xl font-ubuntu font-black bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Herbe Malveillante</h1>
            </div>
            <h2 class="lg:text-4xl md:text-2xl text-xl font-ubuntu dark:text-white">Fullstack Web Developer</h2>
            <svg on:click={() => scrollTo('about')} class="lg:w-24 lg:h-24 w-12 h-12 text-blue-500  lg:mt-5 sm:mt-3 hover:text-pink-500 hover:rotate-[360deg] transition duration-500 ease-in-out hover:scale-125" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd"></path></svg>
        </div>
    </div>

    <div class="" id="about">
        <div class="flex lg:flex-row lg:space-x-10 flex-col justify-center items-center bg-white dark:bg-gray-800 h-screen w-screen">
            <div class="flex flex-col items-center md:w-[40rem] md:p-0 p-10 w-full">
                <div class="flex items-center w-full">
                    <h2 class="dark:text-white font-ubuntu md:text-4xl text-2xl">👋 Hello, my name is </h2><p class="ml-2 animate-bounce bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent md:text-4xl text-3xl font-ubuntu">Pacôme</p>
                </div>
                <div class="">
                    <p class="dark:text-white font-mono"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime temporibus nihil eligendi hic repellendus magni blanditiis praesentium molestias, officiis ut eveniet provident iusto sed assumenda quam repellat odio, adipisci harum? </p>
                </div>
            </div>
            <img class="md:w-80 md:h-80 w-96 h-96 rounded-full shadow-xl hover:scale-110 transition ease-in-out duration-300 hover:shadow-2xl"  src = "../static/pfp.jpg" alt = "pfp">
        </div>
        
    </div>
</main>