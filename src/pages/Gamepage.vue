<template>
    <div>
        <button @click="goToPage('home')">
            Go to home
        </button>
        <h1>
            Game
        </h1>


        <Carousel
            :items="songs"
            :activeIndex="activeSongIndex"

            @change-index="changeActiveSongIndex"
        />
        <div v-for="(vote, index) in votes" :key="index">
            <button  @click="AddVote(vote.points)" v-if="!vote.isVoted">
                Add {{vote.points}} points
            </button>
        </div>
    </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";

export default {
    name: "Gamepage",
    components: {
        Carousel
    },

    data() {
        return {
            songs:[],
            activeSongIndex: 0,
            votes: [
                {
                    points: 1,
                    isVoted: false
                },
                {
                    points: 2,
                    isVoted: false
                },
                {
                    points: 4,
                    isVoted: false
                },
                {
                    points: 8,
                    isVoted: false
                },
            ]
        }
    },
    mounted(){
        this.fetchSongs()
    },
    methods: {
        // nav methods
        
        goToPage(page){
            this.$emit("change-page",page);
        },

        //data methods
        fetchSongs() {
            //get all songs
            const url = "http://webservies.be/eurosong/Songs";

            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((songs) => {
                    console.log(songs);
                    this.fetchArtists(songs);
                });
        },

        fetchArtists(songs){
           const url = "http://webservies.be/eurosong/Artists";

            fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((artists) => {
                //Loop over array songs with for each method
                songs.map((song) => {
                    //find artist in array
                    const artist = artists.find((artist) => artist.id == song.artist)

                    //repalce id by artist object
                    song.artist = artist
                    
                    //return new object
                    return song;
                });

                //change data of songs, dso everything zill get rerenenderd
                this.songs = songs;

            });
        },
        postVote(points) {
            const songId = this.songs[this.activeSongIndex].id;
            const url = "http://webservies.be/eurosong/Votes";

            fetch(url, {
                method: "POST",
                headers: {
                    'Accept' : 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    songID : songId,
                    points : points,
                    })
                }).then((response) => {
                    return response.json();
                }).then((result) => {
                    console.log(result);
                })
        },

        // logic methods
        changeActiveSongIndex(index) {
            this.activeSongIndex = index;
        },
        AddVote(points) {
            let votes = this.votes;
            // create
            votes.map((vote => {
                if (vote.points == points) {
                    vote.isVoted = true;
                }
                return vote;
            }));
        this.postVote(points)

        //check if allvotes are set to true OR there are no false votes
        let activeVotes = votes.filter((vote) => vote.isVoted == true);

        //if all voted, redirect to ranking
        if(activeVotes.length == votes.length) {
            this.goToPage("ranking");
        }
        console.log(activeVotes);
        },
    }
}
</script>
