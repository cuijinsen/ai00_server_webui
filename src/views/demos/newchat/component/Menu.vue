<!--
* @Component:
* @Maintainer: AI00
* @Description:
-->
<script setup lang="ts">
import { useTodoStore } from "../Store";
const todoStore = useTodoStore();
</script>

<template>
<v-card
      class="rr d-none d-md-block sidebar"
      prepend-icon="mdi-cog"
 
    >
      <template v-slot:title>
        {{ $t("write.settings") }}
      </template>

      <template v-slot:text>
        <v-select
  label="Sampler Type"
  :items="['Nucleus', 'Mirostat']"
  v-model="todoStore.SamplerType"
  variant="outlined"
></v-select> 
        <v-card-text> Max Tokens </v-card-text>
        <v-slider
          v-model="todoStore.Max_Tokens"
          color="primary"
          :min="100"
          :max="8000"
          :step="100"
          thumb-label="always"
        ></v-slider>
        <div v-if="todoStore.SamplerType == 'Nucleus'">
        <v-card-text> Top P </v-card-text>
        <v-slider
          v-model="todoStore.TOP_P"
          color="primary"
          :min="0"
          :max="1"
          :step="0.1"
          thumb-label="always"
        ></v-slider>

        <v-card-text> Temperature </v-card-text>
        <v-slider
          v-model="todoStore.Temperature"
          color="primary"
          :min="0"
          :max="2"
          :step="0.1"
          thumb-label="always"
        ></v-slider>

        <v-card-text> Presence Penalty </v-card-text>
        <v-slider
          v-model="todoStore.Presence"
          color="primary"
          :min="0"
          :max="2"
          :step="0.1"
          thumb-label="always"
        ></v-slider>

        <v-card-text> Frequency Penalty </v-card-text>
        <v-slider
          v-model="todoStore.Frequency"
          color="primary"
          :min="0"
          :max="2"
          :step="0.1"
          thumb-label="always"
        ></v-slider>
        <v-card-text> Half Life </v-card-text>
        <v-slider
          v-model="todoStore.Penalty"
          color="primary"
          :min="100"
          :max="1000"
          :step="10"
          thumb-label="always"
        ></v-slider>
        </div>
        <div v-if="todoStore.SamplerType == 'Mirostat'">
        <v-card-text> Tau </v-card-text>
        <v-slider
          v-model="todoStore.tau"
          color="primary"
          :min="1"
          :max="6"
          :step="0.1"
          thumb-label="always"
        ></v-slider>
        <v-card-text> Learning_rate </v-card-text>
        <v-slider
          v-model="todoStore.rate"
          color="primary"
          :min="0"
          :max="1"
          :step="0.1"
          thumb-label="always"
        ></v-slider>
        </div>
      </template>
    </v-card>
</template>

<style scoped lang="scss"></style>
