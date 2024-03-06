import { defineStore } from "pinia";
import type { clist } from "./chatTypes";



export const ChatListStore = defineStore({
  id: "rpgchatlist",
  state: () => ({
    ids:[],
  }),

  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ["ids"] }],
  },

  getters: {
    getChatList() {
      return this.ids;
    },


  },
  actions: {

    addToChatList(payload: clist) {
      this.ids.push(payload);
    },
    clearChatList() {
      this.ids = [];
    },

    removeChatList(value:string) {
      
 
      const arrLen = this.ids.length
      for (let i = 0; i < arrLen ; i++) {
 
        if (this.ids[i].id_name === value) {

          this.ids.splice(i, 1)
          break;
          

        }

    }

    },
    getChatid(id:number){
      return this.ids[id];

    },
    getidbyname(name:string){
      const arrLen = this.ids.length
      for (let i = 0; i < arrLen; i++) {

        if (this.ids[i].id_name === name) {

          return i;

        }
      }
    },
    getListnum() {
      return this.ids.length
    },
    setHistory(history,value){
      const arrLen = this.ids.length
      for (let i = 0; i < arrLen; i++) {

        if (this.ids[i].id_name === value) {

          this.ids[i].history = history

        }
    }
    },
    getHistory(value){
      const arrLen = this.ids.length
      for (let i = 0; i < arrLen; i++) {

        if (this.ids[i].id_name === value) {

          return this.ids[i].history
        }
    }
    },
  },
});
