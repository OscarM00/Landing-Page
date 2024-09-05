let myRequest = new XMLHttpRequest();
myRequest.open('GET', "https://api.adviceslip.com/advice", true);
myRequest.send();

myRequest.onreadystatechange = function() {
    if (this.readyState == 4) {
        if(this.status == 200) {
            let getAdvice = JSON.parse(this.responseText);
            let oneAdvice = document.getElementById('advice');
            oneAdvice.innerHTML = getAdvice.slip.advice;

        }
    }
}