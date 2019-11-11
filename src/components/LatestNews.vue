<template lang="html">

    <section class="latest-news">
        <h1>latest-news Component</h1>
    </section>

</template>

<script lang="js">
    import * as Twitter from 'twitter';
    import {fromEvent, of} from 'rxjs';
    import {switchMap} from 'rxjs/operators'
    console.log(process.env);
    const client = new Twitter({
        consumer_key: process.env.VUE_APP_TWIT_CONSUMER_KEY,
        consumer_secret: process.env.VUE_APP_TWIT_CONSUMER_SECRET,
        access_token: process.env.VUE_APP_TWIT_ACCESS_TOKEN,
        access_token_secret: process.env.VUE_APP_TWIT_ACCESS_SECRET,
    });

    export default {
        name: 'latest-news',
        props: [],
        mounted() {
          this.getTweet().subscribe(a => console.log(a));
        },
        data() {
            return {}
        },
        methods: {
            getTweet() {
                return of(client).pipe(
                    switchMap(client => {
                        console.log(client);
                        fromEvent(client.stream('statuses/user_timeline', {screen_name: 'ACM_UofM', count: 1}), 'data')
                    })
                );
            }
        },
        computed: {}
    }


</script>

<style scoped lang="scss">
    .latest-news {

    }
</style>
