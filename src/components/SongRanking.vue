<template>
    <div>
        <h1>
            songsranking
        </h1>

        <table>
            <tr>
                <th>Song</th>
                <th>Points</th>
            </tr>
            <tr v-for="(list,index) in SongRankingList.slice().sort((a , b) => b.points - a.points)" v-bind:key="index"> 
                <td v-bind="list">
                    <b v-if="index == 0">{{list.song.title }}</b>
                    <a v-else> {{list.song.title }}</a>
                </td>

                <td v-bind="list">
                    {{list.points }}
                </td>
            </tr>
        </table>        
    </div>
</template>

<script>
export default {
    name: "SongRanking",
    props : ["SongRankingList"],

    mounted() {
        
        //this.print(this.SongRankingList);
    },
    methods : {
        print(SongRankingList) {
            console.log("From metod")
            console.log(SongRankingList)
            
        },
    }
}
</script>
