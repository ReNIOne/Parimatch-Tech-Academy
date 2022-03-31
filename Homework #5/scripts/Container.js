export class Container {
    constructor(item) {
        this.item = item;
    }

    renderWrapper() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        const header = document.createElement("div");
        header.classList.add("item_header");
        wrapper.append(header);
        return {
            wrapper,
            header
        };
    }

    renderDeleteButton() {
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete_btn");
        deleteBtn.textContent = "delete";
        return deleteBtn;
    }

    renderSortButton() {
        const sortBtn = document.createElement("button");
        sortBtn.classList.add("sort_btn");
        sortBtn.textContent = "sort";
        return sortBtn;
    }

    renderTitle() {
        const title = document.createElement("h2");
        title.classList.add("item_title");
        title.textContent = this.item.title;
        return title;
    }
}
