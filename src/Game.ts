import {Application} from 'pixi.js';

export default class Game extends Application {
    constructor() {
        super();

        this.init().then(() => this.ready());
    }

    public async init(): Promise<void> {
        this.onResize()
    }

    private ready(): void {
        document.body.appendChild(this.view)
        window.addEventListener('resize', this.onResize.bind(this))
    }

    private onResize(): void {
        this.renderer.resize(window.innerWidth + 2, window.innerHeight + 2)
        this.stage.children.forEach((element: any) => element.resize(this.renderer.width, this.renderer.height))
    }
}
