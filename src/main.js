import * as components from './components';

const componentLibrary = {
    install(Vue) {
        for (const componentName in components) {
            const component = components[componentName];

            Vue.component(`C${component.name}`, component);
        }
    }
}

export default componentLibrary;

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(componentLibrary);
}
