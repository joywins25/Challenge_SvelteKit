import { writable } from "svelte/store";
import { PUBLIC_ERROR_MESSAGE, PUBLIC_SUCCESS_MESSAGE } from '$env/static/public';


const messageStore = writable({
    show: false, message: '', type: 'error', 
})

export default {
    subscribe: messageStore.subscribe,

    showError: function(message=PUBLIC_ERROR_MESSAGE){
        console.log(message);
        messageStore.set({
            show: true, 
            message, 
            type: 'Error',
        })
    },

    showSuccess: function(message=PUBLIC_SUCCESS_MESSAGE){
        console.log(message);
        messageStore.set({
            show: true, 
            message, 
            type: 'Success',
        })
    },

    hide: function(){
        messageStore.set({
            show: false, 
            message: '', 
            type: 'Hide',
        })
    },

}