class RailwayForm{

    constructor(givenname, trainno){
        console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
        this.name = givenname
        this.trainno = trainno
    }

    submit(){
        alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }

    cancel(){
        alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    }
    
}

let RanjitForm = new RailwayForm("Ranjit", 346457);
// RanjitForm.fill()

let HarryForm1 = new RailwayForm("Harry", 222420);
let HarryForm2 = new RailwayForm("Harry", 245789);

RanjitForm.submit();
// RanjitForm.cancel();
HarryForm1.submit();
HarryForm2.submit();
HarryForm1.cancel();
HarryForm2.cancel();
