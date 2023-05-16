const boxes = document.querySelectorAll('#box ');
const buttons = document.querySelectorAll("#buttons .btn");
const inputBox = document.querySelector("#input");


inputBox.addEventListener("keyup", (e) => {

    const searchText = e.target.value.toLowerCase().trim()
    boxes.forEach((box) => {
        const dataItem = box.dataset.item
        if (dataItem.includes(searchText)) {
            box.style.display = "block";
        } else {
            box.style.display = "none"
        }
    })

    buttons.forEach((btn) => {
        btn.classList.remove("btn-active")
    })

    buttons[0].classList.add('btn-active');

})


buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const dataFilter = e.target.dataset.filter;
        setActive(e);
        boxes.forEach((box) => {
            const data = box.dataset.item;

            if (dataFilter == "all") {
                box.style.display = "block"
            } else {
                if (dataFilter == data) {
                    box.style.display = 'block';
                } else {
                    box.style.display = "none";
                }
            }
        })
    })
})

function setActive(e) {

    buttons.forEach((btn) => {
        btn.classList.remove("btn-active")
    })
    e.target.classList.add('btn-active')

}
