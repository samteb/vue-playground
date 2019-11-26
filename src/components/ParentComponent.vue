<template>
  <div>
    <h1>{{ message }}</h1>
    <ChildComponent
      :create="create"
      :mount="mount"
    />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
    name: 'ParentComponent',
    components: {
        ChildComponent
    },
    props: {
        message: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            create: '',
            mount: ''
        };
    },
    /***
     * This hook runs at the very initialization of your component. hook
     * observes data and initialization events in your component. Here, data
     * is still not reactive and events that occur during the component’s
     * lifecycle have not been set up yet.
     ***/
    beforeCreate () {
        // console.log('beforeCreate ------------> this.message = ' + this.message);
        // TypeError: Cannot read property 'message' of undefined
        console.log('PARENT beforeCreate ------------> this.$props = ' + this.$props); // undefined
        console.log('PARENT beforeCreate ------------> this.$data = ' + this.$data); // undefined
        console.log('PARENT beforeCreate ------------> this.counter = ' + this.create); // undefined
    },
    /***
     * This hook is invoked when Vue has set up events and data observation.
     * Here, events are active and access to reactive data is enabled though
     * templates have not yet been mounted or rendered. The most frequently
     * used patterns are fetching data for your component.
     ***/
    created () {
        console.log('PARENT created ------------> this.$props = ' + JSON.stringify(this.$props)); // undefined
        console.log('PARENT created ------------> this.$data = ' + JSON.stringify(this.$data)); // undefined
        console.log('PARENT created ------------> this.message = ' + this.create);
        this.create = 'Samuel Teboul';
        setTimeout(() => {
            this.create = this.create + ' has changed! ';
        }, 5 * 1000);
    },
    /***
     * Mounting hooks are often the most-used hooks and they allow you to
     * access your component immediately before and after the first render.
     * The beforeMount allows you to access your component
     * immediately before and after the first render.
     ***/
    beforeMount () {
        console.log('PARENT beforeMount ------------> this.$el = ' + this.$el);
    },
    /*** This is a most used hook and you will have full access to the reactive
     * component, templates, and rendered DOM (via. this.$el).
     ***/
    mounted () {
        console.log('PARENT mounted ------------> this.$el.textContent = ' + this.$el.textContent);
        this.mount = 'Samuel Teboul';
        setTimeout(() => {
            this.mount = this.mount + ' has changed! ';
        }, 5 * 1000);
    },
    /*** Updating hooks are called whenever a reactive property used by your component changes,
     * or something else causes it to re-render. The beforeUpdate hook runs after data changes
     * on your component and the update cycle begins, right before the DOM is patched and re-rendered.
     ***/
    beforeUpdate () {
        console.log('PARENT beforeUpdate');
        // console.log('beforeUpdate ------------> this.$el.counter = ' + this.$el.children[1].children[0].textContent.trim());
        // console.log('beforeUpdate ------------> this.counter = ' + this.counter);
        // console.log(+ this.$el.children[1].children[0].textContent.trim() === this.counter);
        // this.$nextTick(() => console.log(+ this.$el.children[1].children[0].textContent.trim() === this.counter));
    },
    /*** This hook runs after data changes on your component and the DOM re-renders. ***/
    updated () {
        console.log('PARENT updated');
        // console.log('beforeUpdate ------------> this.$el.counter = ' + this.$el.children[1].children[0].textContent.trim());
        // console.log('updated ------------> this.counter = ' + this.counter);
    },
    /*** Destruction hooks allow you to perform actions when your component is destroyed,
     * such as cleanup or analytics sending. The beforeDestroy hook is fired right before teardown.
     * If you need to cleanup events or reactive subscriptions, beforeDestroy would probably be the
     * time to do it. Your component will still be fully present and functional.
     ***/
    beforeDestroy () {},
    /*** This hooks is called after your component has been destroyed, its directives have been unbound
     * and its event listeners have been removed.
     ***/
    destroyed () {
        console.log(this); // Nothing to show here
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
