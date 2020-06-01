const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }




const routes = [
    { path: "/home", component: homeVue },
    { path: "/menu", component: Foo },
    { path: "/context", component: Bar }
];
const router = new VueRouter({
    routes,
});