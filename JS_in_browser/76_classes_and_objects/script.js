class RailwayForm{

    submit(){
        alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }

    cancel(){
        alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    }

    fill(givenname, trainno){
        this.name = givenname
        this.trainno = trainno
    }
    
}

let RanjitForm = new RailwayForm();
RanjitForm.fill("Ranjit", 346457)

let HarryForm1 = new RailwayForm();
let HarryForm2 = new RailwayForm();

HarryForm1.fill("Harry", 222420)
HarryForm2.fill("Harry", 245789)

RanjitForm.submit();
// RanjitForm.cancel();
HarryForm1.submit();
HarryForm2.submit();
HarryForm1.cancel();
HarryForm2.cancel();
