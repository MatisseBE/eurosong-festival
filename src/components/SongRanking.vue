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
                    <b v-if="index == 0" style="color:gold;font-size:22px; ">{{list.song.title }}</b>
                    <b v-else-if="index == 1" style="color:silver;font-size:20px; ">{{list.song.title }}</b>
                    <b v-else-if="index == 2" style="color:grey;font-size:18; ">{{list.song.title }}</b>
                    <a v-else style="color:bronze;font-size:15; "> {{list.song.title }}</a>
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
