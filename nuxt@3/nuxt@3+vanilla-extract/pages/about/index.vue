<script setup lang="ts">
import * as styles from "./index.css";
</script>

<template>
  <h1 :class="styles.heading()">About</h1>
  <ul>
    <li>
      <NuxtLink to="/">Back to Index</NuxtLink>
    </li>
  </ul>
  <LoremIpsum />
</template>
