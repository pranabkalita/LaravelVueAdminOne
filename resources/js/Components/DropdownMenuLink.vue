<template>
    <div class="navbar-item dropdown has-divider">
        <a class="navbar-link" @click.prevent="toggleSimpleMenu">
            <slot name="header"></slot>
        </a>
        <div class="navbar-dropdown" v-if="simpleMenuToggle">
            <slot name="items"></slot>
        </div>
    </div>
</template>

<script setup>
// Imports
import { ref, watchEffect, onBeforeUnmount } from 'vue';

// Uses

// Refs
const simpleMenuToggle = ref(false)

// Props & Emits
const props = defineProps({
    hasAvatar: {
        type: Boolean,
        default: false
    }
})

// Computed

// Methods
const toggleSimpleMenu = () => {
    simpleMenuToggle.value = !simpleMenuToggle.value;
};

// Hooks
// Global click event listener to close the menu when clicking elsewhere
watchEffect(() => {
    const clickHandler = (e) => {
    if (
        simpleMenuToggle.value &&
        !e.target.closest('.navbar-item.dropdown')
    ) {
        simpleMenuToggle.value = false;
    }
    };

    document.addEventListener('click', clickHandler);

    // Cleanup the event listener when the component is unmounted
    onBeforeUnmount(() => {
        document.removeEventListener('click', clickHandler);
    });
});
</script>

<style scoped>
</style>
