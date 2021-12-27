<template>
    <div>
        <button @click="goToPage('home')">
            Go to home
        </button>


        <SongRanking
        :SongRankingList="SongRankingList"
        />

        <!-- <Songchart
        :SongRankingList="SongRankingList"
        /> -->

    </div>
</template>

<script>
import SongRanking from "../components/SongRanking.vue";
//import Songchart from '../components/Songchart.vue';

export default {
    name: "Rankingpage",
    components: {
        SongRanking,
        //Songchart,

        },
    data() {
        return {
            SongRankingList:{}
        }
    },
    mounted() {
        this.fetchSongs()
        //setInterval(this.fetchSongs, 10000);
        },
    methods: {
        goToPage(page){
            this.$emit("change-page",page);
        },
        fetchSongs() {
            //get all songs
            const url = "http://webservies.be/eurosong/Songs";

            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((songs) => {
                    //console.log(songs);
                    this.fetchVotes(songs);
                });
        },
        fetchVotes(songs){
            let SongRankingList = [];
           const url = "http://webservies.be/eurosong/Votes";

            fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((votes) => {
                //Loop over array songs with for each method
                songs.map((song) => {
                    //find votes in array
                    
                    //console.log(votes.filter(vote =>  vote.songID == song.id));
                    const vote = votes.filter(vote =>  vote.songID == song.id);

                    let points = 0;
                    for (let i = 0; i < vote.length; i++) {
                    points += vote[i].points;
                    }


                    SongRankingList.push({
                        song: song,
                        points: points
                    });

                    
                    //return new object
                    this.SongRankingList = SongRankingList;
                    return SongRankingList;
                });

                this.SongRankingList = SongRankingList;
                return SongRankingList



            });
            //console.log("From page")
            //console.log(SongRankingList)
            this.SongRankingList = SongRankingList;
            return SongRankingList
        },       
    }
}
</script>
