// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// const appendAlert = (message, type) => {
//   const wrapper = document.createElement('div')
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//   ].join('')

//   alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
//     appendAlert('Nice, you triggered this alert message!', 'success')
//   })
// }

let ctitle = document.getElementsByClassName("card-title")[0];
ctitle.style.color = "red";

let card = document.getElementById("first-card");
card.style.color = "yellow";
console.log(document.getElementsByName("search"));