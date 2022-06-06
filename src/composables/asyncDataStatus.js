export default {
    data() {
        return {
            asyncDataStatus_ready: false
        }
    },
    methods: {
        asyncDataStatusChange() {
            this.asyncDataStatus_ready = true
            this.$emit('ready')
        }
    }
}