<template>
    <GoogleMap :pins="mapData"/>
</template>

<script>
    import GoogleMap from "@/components/GoogleMap";
    import _ from "lodash";

    export default {
        name: "Map",
        components: {GoogleMap},
        computed: {
            mapData: function () {
                //Put all the pins on the map
                const mapData = [];
                const people = this.$store.state.people
                _.forEach(people, (person) => {
                    mapData.push({
                        lat: person.location.latitude,
                        lng: person.location.longitude,
                        title: person.name
                    })
                });
                return mapData
            }
        }
    }
</script>
