import {Title} from "./Title";
import {RichText} from "./Rich Text";
import {ActionButton} from "./Action Button";
import {Image} from "./Image";
import {Gallery} from "./Gallery";

export class Component {
    constructor(items) {
        this.items = items;
    }

    render() {
        this.items.forEach((item) => {
            new Component(item).renderTitle();

            if (item.type === "TITLE") {
                new Title(item).render();
            } else if (item.type === "RICH_TEXT") {
                new RichText(item).render();
            } else if (item.type === "IMAGE") {
                new Image(item).render();
            } else if (item.type === "GALLERY") {
                new Gallery(item).render();
            } else if (item.type === "ACTION_BUTTON") {
                new ActionButton(item).render();
            }
        });
    }

    renderTitle() {

    }
}
