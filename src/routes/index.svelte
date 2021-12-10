<script>

    import Project from "../components/Project.svelte";

    function isOnMobile(){
        return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    }

    function scrollTo(id){
        var element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }

    function testHover(language){

        let skillDescription = document.getElementById("skillDescription");

        if (language == "svelte"){
            skillDescription.innerHTML = "Svelte is a JavaScript framework for building UI components. It allow me to create reactive and interactive web apps of all kinds.";
        } else if (language == "python"){
            skillDescription.innerHTML = "Python is a programming language that is interpreted, object-oriented, and high-level. I started to learn it seven years ago as I was in middle school, allowing me to acquire a very good knowledge of it.";
        } else if (language == "tailwind"){
            skillDescription.innerHTML = "Tailwind CSS is a utility-first CSS framework for rapidly building custom, responsive, high performance, and accessible user interfaces. I started to learn it at the same time as Svelte, and I use the two together to build most of my projects."
        } else if (language == "git"){
            skillDescription.innerHTML = "Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people. I use git and Github to manage all of my open source and private projects.";
        } else if (language == "others"){
            skillDescription.innerHTML = "I also have a lot of other skills with other technologies : HTML, CSS, JavaScript, SQL, Lua, Linux, etc. I worked a lot with Discord, Google and Twitter APIs, allowing me to create automation projects for Discord, YouTube, or virtually any other platform.";
        }

        console.log("hover")
    }

    function openInNewTab(url, altLanguage){

        if (!isOnMobile()){
            var win = window.open(url, '_blank');
            win.focus();
        } else {
            testHover(altLanguage);
        }

    }

    function pass(){
        pass
    }

    function toggleTheme(){
        var theme = document.getElementById("theme");
        if (theme.className == "dark"){
            theme.className = "light";
        } else {
            theme.className = "dark";
        }
    }

</script>


<main class="dark" id="theme">

    <div on:click={toggleTheme} class="z-50 fixed bg-gradient-to-r from-pink-500 to-blue-500 h-8 w-14 rounded-full bottom-3 right-3 flex items-center justify-center cursor-pointer">
        <div class="relative flex justify-center items-center h-9 w-9 dark:bg-white bg-gray-800 rounded-full dark:translate-x-3 -translate-x-3 transition-all duration-200">
            <svg class="absolute w-6 h-6  text-white dark:opacity-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>
            <svg class="absolute w-6 h-6 text-gray-800 dark:opacity-100 opacity-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
        </div>
    </div>




    <div class="flex flex-col justify-center items-center bg-white dark:bg-gray-800 h-screen w-screen transition-all duration-500">
        <div class="flex flex-col items-center">
            <div class="relative group">
                <h1 class="absolute lg:text-9xl md:text-7xl text-4xl font-ubuntu font-black bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent filter blur-xl animate-pulse duration-500">Herbe Malveillante</h1>
                <h1 class="relative lg:text-9xl md:text-7xl text-4xl font-ubuntu font-black bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Herbe Malveillante</h1>
            </div>
            <h2 class="lg:text-4xl md:text-2xl text-xl font-ubuntu dark:text-white text-gray-800 transition-all duration-500">Fullstack Web Developer</h2>
            <svg on:click={() => scrollTo('about')} class="cursor-pointer lg:w-24 lg:h-24 w-12 h-12 text-blue-500  lg:mt-5 sm:mt-3 hover:text-pink-500 hover:rotate-[360deg] transition duration-500 ease-in-out hover:scale-125" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd"></path></svg>
        </div>
    </div>

    <div class="" id="about">
        <div class="flex lg:flex-row lg:space-x-10 flex-col justify-center items-center bg-white dark:bg-gray-800 h-screen w-screen transition-all duration-500">
            <div class="flex flex-col items-center md:w-[40rem] md:p-0 p-10 w-full">
                <div class="flex items-center w-full">
                    <h2 class="dark:text-white font-ubuntu md:text-4xl text-2xl transition-all duration-500 text-gray-800">👋 Hello, my name is </h2><p class="ml-2 animate-bounce bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent md:text-4xl text-3xl font-ubuntu">Pacôme</p>
                </div>
                <div class="">
                    <p class="dark:text-white font-mono transition-all duration-500 text-gray-800"> I am a young developer based in France, interested in fullstack web development. I am currently learning computer science in the french engineering school "<a class="underline bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent" href="https://polytech.univ-tours.fr/" target = "_blank">Polytech Tours</a>", and developing my personal skills and portfolio during my personal time. I'm available for hire ! Scroll down to learn more about how I can help you. 👍</p>
                </div>
            </div>
            <img class="w-80 h-80 rounded-full shadow-xl hover:scale-110 transition ease-in-out duration-300 hover:shadow-2xl"  src = "../pfp.jpg" alt = "pfp">
        </div>
    </div>

    <div class="" id="skills">
        <div class="flex flex-col bg-white dark:bg-gray-800 h-screen w-screen justify-center items-center md:space-y-16 space-y-10 transition-all duration-500">
            <h2 class="md:text-9xl text-6xl font-black font-ubuntu bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Skills</h2>
            <div class="flex dark:text-white md:space-x-24 space-x-2">
                <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                <img on:click={() => openInNewTab("https://svelte.dev/", "svelte")} on:mouseover={() => testHover("svelte")} class="md:h-36 md:w-36 h-16 w-16 hover:scale-125 transition ease-in-out duration-300 cursor-pointer" src="../svelte.svg" alt="svelte logo">
                <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                <img on:click={() => openInNewTab("https://python.org/", "python")} on:mouseover={() => testHover("python")} class="md:h-36 md:w-36 h-16 w-16 hover:scale-125 transition ease-in-out duration-300 cursor-pointer" src="../python.svg" alt="python logo">
                <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                <img on:click={() => openInNewTab("https://tailwindcss.com/", "tailwind")} on:mouseover={() => testHover("tailwind")} class="md:h-36 md:w-36 h-16 w-16 hover:scale-125 transition ease-in-out duration-300 cursor-pointer" src="../tailwind.svg" alt="tailwind logo">
                <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                <img on:click={() => openInNewTab("https://git-scm.com/", "git")} on:mouseover={() => testHover("git")} class="md:h-36 md:w-36 h-16 w-16 hover:scale-125 transition ease-in-out duration-300 cursor-pointer" src="../git.svg" alt="git logo">
                <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                <svg on:click={() => openInNewTab("https://github.com/herbemalveillante", "others")} on:mouseover={() => testHover("others")} class="md:h-36 md:w-36 h-16 w-16 hover:scale-125 transition ease-in-out duration-300 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"></path></svg>
            </div>
            <h3 class="test-xl h-40 md:pl-44 md:pr-44 pl-10 pr-10 dark:text-white font-ubuntu transition-all duration-500 text-gray-800" id="skillDescription"> {isOnMobile ? 'Hover' : 'Touch'} an icon to display information about my skills with a specific technology.</h3>
        </div>
    </div>

    <!-- Insert testimonials here -->

    <div class="" id="projects">
        <div class="flex flex-col bg-white dark:bg-gray-800 min-h-screen w-screen justify-center items-center md:space-y-16 space-y-10 transition-all duration-500">
            <h2 class="md:text-9xl text-6xl font-black font-ubuntu bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent p-2">Projects</h2>
            <div class="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 p-5 w-full">
                <Project name="Neon Background" background="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vitae voluptates quaerat dolorum explicabo reprehenderit aliquid aliquam nihil id perspiciatis fugit, est soluta aspernatur facere placeat aperiam similique quam recusandae.</Project>
                <Project name="3D Village" background="https://media.sketchfab.com/models/7c9b7638b74e4708869f048055c10e0f/thumbnails/92e33f5442704ffd886e137f20eb87f9/c22f2c6f552b4c9987e8fb4d9b6ccf36.jpeg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam nam quam ab nobis alias non mollitia hic sit, cum dolore id culpa explicabo? Provident vel rem facere optio voluptatibus sed?</Project>
                <Project name="Profile" background="/pfp.jpg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nisi quaerat nam voluptate saepe dolor cupiditate voluptas. Impedit, cupiditate magni! Repudiandae, dolor? Id rem exercitationem amet quidem totam magni sunt.</Project>
                <Project>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus voluptatum facere quisquam libero quas mollitia qui. Obcaecati nulla nostrum eligendi fugit adipisci, iste ut asperiores placeat, velit dicta necessitatibus magni.</Project>
            </div>
        </div>
    </div>
</main>