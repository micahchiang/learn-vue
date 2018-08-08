<template>
    <div class="pa2 code">
        <div class="f2 mb2">
            {{item.title}}
            <template v-if="item.url">
                <a :href="item.url">{{item.url | hostname}}</a>
            </template>
        </div>
        <div class="f3">
            <nuxt-link :to="'/user/'+item.by">{{item.by}}</nuxt-link>
            <span class="i">{{item.time | timeSince}}</span>
        </div>

        <ul class="pa0">
            <comments-component v-for="id in item.kids" :key="id" :id="id"></comments-component>
        </ul>
    </div>
</template>

<script>
    import CommentsComponent from '~/components/CommentsComponent';
    import axios from '~/plugins/axios';

    export default {
        components: {CommentsComponent},
        data() {
            return {
                item: {}
            }
        },
        async asyncData( {route} ) {
            const response = await axios.get(`item/${route.params.id}.json`);
            return {item: response.data};  
        }
    }
</script>