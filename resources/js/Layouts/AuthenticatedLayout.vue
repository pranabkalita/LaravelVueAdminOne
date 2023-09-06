<script setup>
import Navigation from '@/Layouts/Partials/Navigation.vue'
import Aside from '@/Layouts/Partials/Aside.vue'
import Footer from '@/Layouts/Partials/Footer.vue'
import { loadCustomJs } from '@/CustomJs/main'
import { onMounted } from 'vue'

onMounted(() => {
    loadCustomJs()
})
</script>

<template>
    <div id="auth">
        <Navigation />

        <Aside />

        <section class="is-title-bar" v-if="$slots.breadcrumbs">
            <slot name="breadcrumbs" />
        </section>

        <section class="is-hero-bar" v-if="$slots.topHeader">
            <slot name="topHeader" />
        </section>

        <section class="section main-section">
            <slot />
        </section>

        <Footer />
    </div>
</template>

<style scoped src="../../css/main.css"></style>
