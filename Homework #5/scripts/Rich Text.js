import {Container} from "./Container";

export class RichText extends Container{
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
            const textArea = document.createElement("textarea");
            textArea.classList.add("item_rich_text_input", "item_input");
            textArea.setAttribute("type", field.type);
            textArea.setAttribute("placeholder", field.label);
            inputWrapper.append(textArea);
            wrapper.append(inputWrapper);
        });
        root.append(wrapper);
    }
}