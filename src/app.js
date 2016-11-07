export class App {
  configureRouter(config, router) {
    config.title = 'BMT';
    config.map([
      { route: ['', 'home'],    name: 'home',       moduleId: 'home/home',          nav: true,  title: 'Home' },
      { route: 'new',           name: 'new',        moduleId: 'measure/measure',    nav: true,  title: 'New Measurement' },
      { route: 'edit',          name: 'edit',       moduleId: 'measure/measure',    nav: false, title: 'Edit Measurement' },
      { route: 'history',       name: 'history',    moduleId: 'measure/list',       nav: true,  title: 'History' }
    ]);

    this.router = router;
  }
}
