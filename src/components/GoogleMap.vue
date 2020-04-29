<template>
    <div>
        <div class="google-map" ref="googleMap"></div>
    </div>
</template>

<script>
    import GoogleMapsApiLoader from 'google-maps-api-loader';
    import _ from "lodash";

    export default {
        name: "GoogleMap",
        props: {
            pins: Array
        },
        data() {
            return {
                google: null,
                map: null,
                mapConfig: {
                    center: {lat: 47.751569, lng: 1.675063},
                    zoom: 3
                }
            }
        },
        async mounted() {
            this.google = await GoogleMapsApiLoader({
                apiKey: 'AIzaSyC9p4Lz0F553b8Hu8XWc5TRtpSItpxolM4'
            })
            this.initializeMap()
        },

        methods: {
            initializeMap() {
                const mapContainer = this.$refs.googleMap
                this.map = new this.google.maps.Map(mapContainer, this.mapConfig)

                //Put all the pins on the map
                _.forEach(this.pins, (pin) => {
                    new this.google.maps.Marker({
                        position: {
                            lat: pin['lat'],
                            lng: pin['lng']
                        },
                        map: this.map,
                        title: pin['title']
                    });
                });
            }
        }
    }
</script>

<style scoped>
    .google-map {
        width: 100%;
        height: calc(100vh - 95px);
        position: relative;
        overflow: hidden;
        z-index: 1;
    }
</style>
