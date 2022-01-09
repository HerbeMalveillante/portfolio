<script>

    import collection from '/static/collection/json/collection.json';
    console.log(collection);


    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    function getFormattedDate(timestamp){
        // return the date in format DD-MM-YYYY with the month name
        var date = new Date(parseInt(timestamp)*1000);
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        return monthNames[month] + " " + day + ", " + year;
    }

</script>

<main class="bg-gray-800">
    <div class="flex flex-col w-full justify-center items-center p-10">
        <h1 class="lg:text-9xl md:text-8xl text-5xl font-black font-ubuntu bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Collection</h1>
        <h2 class="text-white font-ubuntu text-xl w-3/4 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, facilis! Recusandae harum, labore ipsa reiciendis dolor autem dignissimos tempore doloribus.</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-6 text-white font-ubuntu pb-6">
        {#each collection as item}
            <div on:click={() => openInNewTab(item.link)} class="flex group flex-col items-center relative border-2 border-white p-3 rounded-md w-full space-y-2">
                <div>
                    <img class="rounded-md" src={item.thumbnail} alt={item.description}/>
                    <div class="absolute top-1 -right-36 opacity-0 scale-0 group-hover:scale-100 group-hover:right-1 group-hover:opacity-100 transition-all duration-100 bg-gradient-to-r from-pink-500 to-blue-500 p-2 text-white rounded-lg">
                        <p>{getFormattedDate(item.date)}</p>
                    </div>
                </div>
                <p class="text-lg font-bold">{item.title}</p>
                <p class="text-xs px-10 text-center font-mono">{item.description}</p>
                <div class="flex space-x-1 text-sm p-2">
                    {#each item.tags as tag}
                        <p class="bg-gradient-to-r from-pink-500 to-blue-500 rounded-full px-2">● {tag}</p>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</main>

