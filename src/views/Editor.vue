<template>
    <div class="editor">
        <div class="editor__person" v-for="person in people" :key="person._id">
            <div class="editor__item">
                <label>Name: </label>
                <input type="text" v-model="person.name"/>
            </div>
            <div class="editor__item">
                <label>Gender: </label>
                <input type="text" v-model="person.gender"/>
            </div>
            <div class="editor__item">
                <label>Eye Colour: </label>
                <input type="text" v-model="person.eyeColor"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .editor {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;

        .editor__person {
            display: flex;
            justify-content: space-around;
            padding: 10px 0;
            flex-wrap: wrap;
            background: #42b983;

            &:nth-child(even) {
                background: #8AEABF
            }

            input {
                font-size: 16px;
            }

            label {
                font-size: 16px;
            }
        }
    }
</style>

<script>
    // @ is an alias to /src
    export default {
        name: 'Editor',
        data: function () {
            return {
                people: []
            }
        },
        mounted() {
            this.people = this.$store.state.people
        },
        watch: {
            // When the data is changed, we want to update the store
            people: {
                deep: true,
                handler() {
                    this.$store.commit('setPeople', this.people)
                }
            }
        }
    }
</script>
