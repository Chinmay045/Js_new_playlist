let attr = document.getElementsByTagName("div")[2];
// attr.innerHTML = attr.innerHTML + '<h1>Hello World</h1>';
// console.log(attr);
let div = document.createElement("div");
div.innerHTML = "<h1>Hello World</h1>";
attr.prepend(div);
// attr.remove()
first.className = "text-black black";