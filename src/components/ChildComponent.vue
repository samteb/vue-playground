<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>Created: {{ created }}</h3>
    <h3>Mounted: {{ mounted }}</h3>
  </div>
</template>

<script>
export default {
    name: 'ChildComponent',
    props: {
        create: {
            type: String,
            default: ''
        },
        mount: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            title: 'Child Component'
        };
    },
    computed: {
        created () {
            console.log('From Child ------------> create prop has changed!');
            return this.create;
        },
        mounted () {
            console.log('From Child ------------> mount prop has changed!');
            return this.mount;
        }
    },
    beforeCreate () {
        console.log('CHILD beforeCreate');
    },
    created () {
        console.log('CHILD created');
    },
    beforeMount () {
        console.log('CHILD beforeMount');
    },
    mounted () {
        console.log('CHILD mounted');
    },
    beforeUpdate () {
        console.log('CHILD beforeUpdate');
    },
    updated () {
        console.log('CHILD updated');
    }
};
</script>

<style scoped>

</style>