<!--
* @Component:
* @Maintainer: AI00
* @Description:
-->
<script setup lang="ts">
import { useTodoStore } from "../Store";
import {MdEditor, ToolbarNames} from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import * as ai00Type from "@/ai00sdk/ai00Type";
import  Copy  from "./Copy.vue";

const todoStore = useTodoStore();

const toolbar = ref([
  'bold',
  'underline',
  'italic',
  '-',
  'title',
  'quote',
  'unorderedList',
  'orderedList',
  'task',
  '-',
  'codeRow',
  'code',
  'table',
  '-',
  'revoke',
  'next',
  '=',
  'prettier',
  'preview',
]) as ToolbarNames[];


const sendPrompt = async () => {

const prompt = todoStore.text
const temp :string = todoStore.text
if(todoStore.SamplerType == 'Nucleus'){


  const body: ai00Type.OaiCompletionsType = {
    prompt: [prompt],
    max_tokens: todoStore.Max_Tokens,
    temperature: todoStore.Temperature,
    top_p: todoStore.TOP_P,
    presence_penalty: todoStore.Presence,
    frequency_penalty: todoStore.Frequency,
    penalty_decay: Math.exp(-0.69314718055994 / Number(todoStore.Penalty)),
    stop: ["\n\n","\nQ:","\nUser:","\nQuestion:","\n\nQ:","\n\nUser:","\n\nQuestion:","Q:","User:","Question:"],
    stream: true,
  }
  window.Ai00Api.oai_completions(body, async (res: string) => {
    todoStore.text = temp + res

  })
}else if(todoStore.SamplerType == 'Mirostat'){
  const body: ai00Type.OaiCompletionsType = {
    prompt: [prompt],
    max_tokens: todoStore.Max_Tokens,
    tau: todoStore.tau,
    rate: todoStore.tau,
    stop: ["\n\n","\nQ:","\nUser:","\nQuestion:","\n\nQ:","\n\nUser:","\n\nQuestion:","Q:","User:","Question:"],
    stream: true,
  }
  window.Ai00Api.oai_completions(body, async (res: string) => {
    todoStore.text = temp + res

  })

}



  // 调用 window.Ai00Api.oai_chat_completions 函数，传入参数：
  // body 参数数据结构是 /ai00sdk/ai00Type.ts 中定义 的 ai00Type.OaiChatCompletionsType

};


import * as htmlToImage from 'html-to-image';


const goClipboard = async () => {
const element = document.getElementById("po");
if (element) {
  const blob = await htmlToImage.toBlob(element, { cacheBust: true,  skipFonts: true,skipAutoScale: true, backgroundColor: '#f8f8f8' })
  if (blob) {
    await navigator.clipboard.write([
      new ClipboardItem({ [blob.type]: blob })
    ]);
  }
}
};

</script>

<template>
  <v-card height="100%"
  prepend-icon="mdi-file-document-edit">
    <template v-slot:title>
      {{ $t("write.write") }}
      <v-spacer></v-spacer>

        <v-btn  color="primary" @click="sendPrompt">        {{ $t("write.write") }} </v-btn>

        <v-btn  color="primary" @click="todoStore.text=''" style="margin-left: 30px;">{{ $t("write.clear") }}</v-btn>

        <v-btn  color="primary" @click="goClipboard" style="margin-left: 30px;">{{ $t("write.screenshot") }}</v-btn>
      </template>
      <v-card-text  >
      <MdEditor v-model="todoStore.text"
      :toolbars="toolbar"
      class="editor"
      :preview = false

      />
      <div class="hidejietu" id="po">

          <Copy  :text="todoStore.text+'\n\n'" />
          <p style="margin-top: 20px;">✅ Powered by AI00 for RWKV ( https://github.com/cgisky1980/ai00_rwkv_server ) </p>
      </div>
      </v-card-text>

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

.editor{
  height: calc(100vh - 200px);
}

.hidejietu{
  margin-top: 20px;
  padding: 20px;
}
</style>
