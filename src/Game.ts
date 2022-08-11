import {Application} from 'pixi.js';
import {Components} from './helpers/enums/components';
import MainController from './controllers/MainController';

export default class Game extends Application {
    private _mainController: MainController;

    constructor() {
        super();

        this._mainController = new MainController(this)
        this.init()
            .then(this.ready.bind(this));
    }

    public async init(): Promise<void> {
        await this._mainController.initComponents([
            Components.BACKGROUND,
        ]);
        this.onResize();
    }

    private ready(): void {
        document.body.appendChild(this.view);
        window.addEventListener('resize', this.onResize.bind(this));
    }

    private onResize(): void {
        this.renderer.resize(window.innerWidth + 2, window.innerHeight + 2);
        this.stage.children.forEach((element: any) => element.resize(this.renderer.width, this.renderer.height));
    }
}
