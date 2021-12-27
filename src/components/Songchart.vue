<template>
    <div>
        <h1>
            Song Chart
        </h1>

        <table>
            <tr>
                <th>Song</th>
                <th>Points</th>
            </tr>
            <tr v-for="(list,index) in SongRankingList.slice().sort((a , b) => b.points - a.points)" v-bind:key="index"> 
                <td v-bind="list">
                    {{list.song.title }}
                </td>

                <td v-bind="list">
                    {{list.points }}
                </td>
            </tr>
        </table>   


    </div>
</template>

<script>

import { GChart } from "vue-google-charts";

export default {
    
    name: "Songchart",
    props : ["SongRankingList"],
    components: {
        GChart,
        },
    mounted() {
        this.print(this.SongRankingList);
        this.objtolist(this.SongRankingList)
    },
    methods : {
        print(SongRankingList) {
            console.log("From chart")
            console.log(SongRankingList)
            
        },
        objtolist(SongRankingList){
            let ordered = SongRankingList
            let points = []
            let title = []

            for (let index = 0; index < ordered.length; index++) {
                const t = SongRankingLIst[index].song.title;
                const p = SongRankingLIst[index].points;
                points.push(p)
                title.push(t) 
            }
            //is empty untill you make a change and vue reloads
            console.log("points " , points);
        }
    } 
}
</script>
