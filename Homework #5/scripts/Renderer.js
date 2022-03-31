import {Component} from "./Component";

class Renderer extends Component{
    constructor(items) {
        super(items);
        this.items = items;
    }

    render() {
        new Component(this.items).render();
    }
}

export default Renderer;