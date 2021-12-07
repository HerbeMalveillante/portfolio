<script>

    function isOnMobile(){
        return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    }

    function scrollTo(id){
        var element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    function testHover(language){

        let skillDescription = document.getElementById("skillDescription");

        if (language == "svelte"){
            skillDescription.innerHTML = "Svelte is a JavaScript framework for building UI components. It allow me to create reactive and interactive web apps of all kinds.";
        } else if (language == "python"){
            skillDescription.innerHTML = "Python is a programming language that is interpreted, object-oriented, and high-level. I started to learn it seven years ago as I was in middle school, allowing me to acquire a good knowledge of it.";
        } else if (language == "tailwind"){
            skillDescription.innerHTML = "Tailwind CSS is a utility-first CSS framework for rapidly building custom, high performance, and accessible user interfaces. I started to learn it at the same time as Svelte, and I use the two together to build most of my projects."
        } else if (language == "git"){
            skillDescription.innerHTML = "Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people. I use git and Github to manage all of my open source and private projects.";
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


</script>


<main class="dark">
    <div class="flex flex-col justify-center items-center bg-white dark:bg-gray-800 h-screen w-screen">
        <div class="flex flex-col items-center">
            <div class="relative group">
                <h1 class="absolute lg:text-9xl md:text-7xl text-4xl font-ubuntu font-black bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent filter blur-xl animate-pulse duration-500">Herbe Malveillante</h1>
                <h1 class="relative lg:text-9xl md:text-7xl text-4xl font-ubuntu font-black bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Herbe Malveillante</h1>
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
                    <p class="dark:text-white font-mono"> I am a young developer based in France, interested in fullstack web development. I am currently learning computer science in the french engineering school "<a class="underline bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent" href="https://polytech.univ-tours.fr/" target = "_blank">Polytech Tours</a>", and developing my personal skills and portfolio during my personal time. I'm available for hire ! Scroll down to learn more about how I can help you. 👍</p>
                </div>
            </div>
            <img class="w-80 h-80 rounded-full shadow-xl hover:scale-110 transition ease-in-out duration-300 hover:shadow-2xl"  src = "../pfp.jpg" alt = "pfp">
        </div>
    </div>

    <div class="" id="skills">
        <div class="flex flex-col bg-white dark:bg-gray-800 h-screen w-screen justify-center items-center md:space-y-16 space-y-10">
            <h2 class="md:text-9xl text-6xl font-black font-ubuntu bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Skills</h2>
            <div class="flex dark:text-white md:space-x-24 space-x-8">
                <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                <img on:click={() => openInNewTab("https://svelte.dev/", "svelte")} on:mouseover={() => testHover("svelte")} class="md:h-36 md:w-36 h-16 w-16 hover:scale-125 transition ease-in-out duration-300 cursor-pointer" src="../svelte.svg" alt="svelte logo">
                <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                <img on:click={() => openInNewTab("https://python.org/", "python")} on:mouseover={() => testHover("python")} class="md:h-36 md:w-36 h-16 w-16 hover:scale-125 transition ease-in-out duration-300 cursor-pointer" src="../python.svg" alt="python logo">
                <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                <img on:click={() => openInNewTab("https://tailwindcss.com/", "tailwind")} on:mouseover={() => testHover("tailwind")} class="md:h-36 md:w-36 h-16 w-16 hover:scale-125 transition ease-in-out duration-300 cursor-pointer" src="../tailwind.svg" alt="tailwind logo">
                <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                <img on:click={() => openInNewTab("https://git-scm.com/", "git")} on:mouseover={() => testHover("git")} class="md:h-36 md:w-36 h-16 w-16 hover:scale-125 transition ease-in-out duration-300 cursor-pointer" src="../git.svg" alt="git logo">
            </div>
            <h3 class="test-xl h-40 md:pl-44 md:pr-44 pl-10 pr-10 dark:text-white font-ubuntu" id="skillDescription"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo illum sint amet qui, tenetur, dignissimos iste sit fuga praesentium in velit error. Sunt explicabo delectus vitae nemo alias at distinctio. Asperiores officiis fuga numquam ut corrupti iste, eos iure temporibus.</h3>
        </div>
    </div>
</main>