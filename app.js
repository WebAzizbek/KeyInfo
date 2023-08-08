let wrapper = document.querySelector("#wrapper");
// let key = document.querySelector("#key");
console.log(wrapper, key);

window.addEventListener("keydown", (e) => {
  wrapper.innerHTML = `
    <div class="key">
        <p class="small">event.key</p>
        ${e.key == " " ? "Space" : e.key}
    </div>
    <div class="key">
        <p class="small">keyCode</p>
        ${e.keyCode}
    </div>
    <div class="key">
        <p class="small">key</p>
        ${e.code}
    </div>
  `;
});
