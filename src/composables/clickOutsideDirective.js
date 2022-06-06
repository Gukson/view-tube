const ClickOutsideDirective = {
    mounted (el, binding) {
        // ustawiamy to jako metodę bezpośrednio na elemencie __ zostało dodane żeby nie było później błędów wynikających z duplikacji nazw zmiennych
        el.__clickOutsideHandler__ = event => {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value(event)
            }
        }
        // dodanie event listenera
        document.body.addEventListener('click', el.__clickOutsideHandler__)
    },
    unmounted (el) {
        // usunięcie event listenera
        document.body.removeEventListener('click', el.__clickOutsideHandler__)
    }
}

export default (app) => {
    // tworzenie directive // nie trzeba dawać v-click-outside, bo vue samo to doda
    app.directive('click-outside', ClickOutsideDirective)
}
