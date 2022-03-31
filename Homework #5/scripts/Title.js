import {Container} from "./Container";

export class Title extends Container {

    constructor(item) {
        super(item);
        this.item = item;
        this.title = item.title;
    }

    render() {
        const root = document.querySelector("#root");
        const {wrapper, header} = this.renderWrapper();
        const title = this.renderTitle();
        const deleteBtn = this.renderDeleteButton();
        const sortBtn = this.renderSortButton();
        const wrapperBtn = document.createElement('div');
        wrapperBtn.classList.add("wrapper_btn");
        wrapperBtn.append(deleteBtn,sortBtn);
        header.append(title, wrapperBtn);
        this.item.fields.forEach((field) => {
            const inputWrapper = document.createElement('div');
            inputWrapper.classList.add("input_wrapper");
            const input = document.createElement("input");
            input.classList.add("item_text_input", "item_input");
            input.setAttribute("type", field.type);
            input.setAttribute("placeholder", field.label);
            inputWrapper.append(input);
            wrapper.append(inputWrapper);
        });
        root.append(wrapper);
    }
}