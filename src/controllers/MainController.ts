import {Application} from 'pixi.js';
import {Components} from '../helpers/enums/components';

export default class MainController {
    private _app: Application;

    constructor(app: Application) {
        this._app = app;
    }

    public async initComponents(components: Components[]) {

    }
}
