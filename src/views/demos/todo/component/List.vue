<!--
* @Component:
* @Maintainer: AI00
* @Description:
-->
<script setup lang="ts">
import { useTodoStore } from "../Store";
import { Todo } from "../Types";

const props = defineProps<{
  tasks: Todo[];
}>();

const todoStore = useTodoStore();
const searchKey = ref("");

const getLabelColor = (id: string) => {
  // Find the label by id from the labels array
  const label = todoStore.labels.find((l) => l.id === id);
  // Return the color for that label, or an empty string
  return label ? label.color : "";
};

// filterdTodoList is a computed value that will filter the todoList based on the searchKey value
const filterdTodoList = computed(() => {
  return props.tasks.filter((todo) => {
    return todo.title.toLowerCase().includes(searchKey.value.toLowerCase());
  });
});
</script>

<template>
  <v-card height="100%">
    <!-- ---------------------------------------------- -->
    <!-- Filter Input -->
    <!-- ---------------------------------------------- -->
    <v-text-field
      clearable
      variant="solo"
      class="elevation-1 ma-3"
      hide-details
      prepend-inner-icon="mdi-magnify"
      placeholder="Filter Tasks"
      v-model="searchKey"
    ></v-text-field>

    <!-- ---------------------------------------------- -->
    <!-- List -->
    <!-- ---------------------------------------------- -->
    <perfect-scrollbar class="todo-list">
      <transition-group name="fade">
        <div v-for="todo in filterdTodoList" :key="todo.id" >
          <div class="todo-item   pa-5">

            <div class="flex-fill mx-5">
              <div
                class="font-weight-bold"
                >
                {{ todo.title }}
              </div>
              <div>
                {{ todo.detail }}
              </div>
              <div>
                <v-chip
                  :key="tag"
                  size="x-small"
                  variant="outlined"
                  class="mr-1 mt-1"
                  :color="getLabelColor(tag)"
                  v-for="tag in todo.tags"
                >
                  {{ tag }}
                </v-chip>
              </div>
            </div>
 
          </div>
        </div>
      </transition-group>
    </perfect-scrollbar>
  </v-card>
</template>

<style scoped lang="scss">
.todo-list {
  height: 100%;

  .todo-item {
    transition: all 0.3s;
    border-bottom: 1px solid #eee;
    &:hover {
      transition: all 0.3s;
      background-color: rgba(99, 99, 99, 0.2);
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
      cursor: pointer;
    }
  }
}
</style>
