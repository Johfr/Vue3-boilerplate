<script setup lang="ts">
import Vbutton from '@/design-system/Vbutton.vue';
import { Todo } from '@/types/Todo'

defineProps<{
  item: Todo | undefined
}>()

const formModel = defineModel()
const newName = ref<String>('')
const closeForm = () => formModel.value = false
</script>

<template>
  <div class="form-container">
    <div class="overlay" @click="closeForm"></div>
    <form>
      <label for="title">
        <input id="title" type="text" :placeholder="item.name" v-model="newName"/>
      </label>

      <slot name="actions" :slotProps="{item, newName}"></slot>
      
      <Vbutton @click="closeForm" :btnTitle="'fermer'" />
    </form>
  </div>
</template>

<style lang="scss">
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 5;
  background-color: rgba(255 255 255/0.1);
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  max-width: 320px;
  background-color: #ccc;
  border-radius: 12px;
  position: absolute;
  z-index: 5;
}
</style>