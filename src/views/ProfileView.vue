<script setup>
    import { ref } from "vue";

    // components
    import Button from 'primevue/button';
    import Dialog from 'primevue/dialog';

    // css
    import '@/assets/style/profile.css';

    // function
    const visible = ref(false);

    const count = ref(0);

    const increment = () => {
        count.value++
    };
    const decrement = () => {
        count.value--
    };
</script>

<template>
    <section class="about">
        <div class="wrapper">
            <h1>This is an profile page</h1>
            <br/>
            <div class="btn-wrapper">
                <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
            </div>
        </div>
        <br/> 
        <h3>Current count: {{ count }}</h3>
        <Button class="mr-3" @click="increment">Increment</Button>
        <Button @click="decrement">Decrement</Button>

    </section>
    <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </Dialog>
</template>