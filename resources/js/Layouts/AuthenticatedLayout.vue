<script setup>
import Navigation from '@/Layouts/Partials/Navigation.vue'
import Aside from '@/Layouts/Partials/Aside.vue'
import Footer from '@/Layouts/Partials/Footer.vue'
</script>

<template>
    <div>
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
