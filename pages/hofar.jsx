import { MainPage } from "../components/MainPage";
import styles from "../styles/Home.module.css";

export default function HofarPage() {
    let index = 0;

    return (
        <MainPage pageTitle="Hofar's Page">
            <h2>TO DO APP</h2>
            <form style={{ display: "flex", flexDirection: "column" }}>
                <button id="btnCreate" onClick={createToDo} type="button">
                    create a new todo
                </button>
                <div class="boxInput" data-key={index}>
                    <input type="text" value={this} name={"toDo-" + index} onChange={inputChange} />
                    <select>
                        <option value="active">active</option>
                        <option value="completed">completed</option>
                    </select>
                    <button type="button" class="simpan" onClick={simpan}>
                        simpan
                    </button>
                    <button type="button" class="hapus">
                        hapus
                    </button>
                </div>
                <div class="boxStatus" style={{ marginTop: 1 + "rem" }}>
                    <button type="button">all</button>
                    <button type="button">active</button>
                    <button type="button">completed</button>
                </div>
            </form>
        </MainPage>
    );

    function createToDo() {
        console.log("test");
        let boxInputEl = document.createElement("div");
        let inputEl = document.createElement("input");
        let btnSimpan = document.createElement("button");
        let btnHapus = document.createElement("button");
        let toDoEl = document.querySelector(".boxInput");
        let newKey = ++index;
        let select = document.createElement("select");
        let option1 = document.createElement("option");
        let option2 = document.createElement("option");

        boxInputEl.setAttribute("class", "boxInput");
        boxInputEl.setAttribute("data-key", newKey);
        inputEl.setAttribute("type", "text");
        inputEl.setAttribute("name", "toDo-" + newKey);
        inputEl.setAttribute("autofocus", true);
        option1.value = "active";
        option1.text = "active";
        option1.value = "completed";
        option1.text = "completed";
        select.appendChild(option1);
        select.appendChild(option2);
        btnSimpan.classList.add("simpan");
        btnHapus.classList.add("hapus");
        btnSimpan.innerText = "simpan";
        btnHapus.innerText = "hapus";
        btnSimpan.setAttribute("type", "button");
        btnHapus.setAttribute("type", "button");
        inputEl.addEventListener("change", function (evt) {
            inputChange(evt);
        });
        btnSimpan.addEventListener("click", function (evt) {
            simpan(evt);
        });
        boxInputEl.appendChild(inputEl);
        boxInputEl.appendChild(btnSimpan);
        boxInputEl.appendChild(btnHapus);
        toDoEl.parentNode.insertBefore(boxInputEl, toDoEl.nextSibling);
    }
    function inputChange(evt) {
        console.log(evt.target.value);
        console.log(evt.target);
    }
    function simpan(evt) {
        let dis = evt.target;
        let parent = dis.parentNode;
        let input = parent.querySelector("input");
        let btnSimpan = parent.querySelector(".simpan");

        if (input.value !== "") {
            input.setAttribute("readonly", true);
            btnSimpan.style.display = "none";
        }
    }
}
