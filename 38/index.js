class RailwayForm {
    constructor() {
        console.log('constructor called...' + givenname + "" + trainno)
        this.name = givenname
        this.trainno = trainno
    }
    submit() {
        alert('form submitted' + this.trainno);
    }

    cancel() {
        alert('form is cancelled' + this.trainno);
    }
}

let chinz = new RailwayForm()
chinz.submit();