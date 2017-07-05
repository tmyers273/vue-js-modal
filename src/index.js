import Modal from './Modal.vue'

const Plugin = {
    install (Vue, options = {}) {
        if (this.installed) {
            return
        }

        this.installed = true
        this.event = new Vue()

        Vue.prototype.$modal = {
            show (name, params) {
                Plugin.event.$emit('toggle', name, true, params)
            },

            hide (name, params) {
                Plugin.event.$emit('toggle', name, false, params)
            },

            toggle (name, params) {
                Plugin.event.$emit('toggle', name, undefined, params)
            }
        }

        let component_name = options.component_name ? options.component_name : 'modal';

        Vue.component(component_name, Modal)
    }
}

export default Plugin
