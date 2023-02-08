
function PrintResult(){
    event.preventDefault();
    const number = document.getElementById('setup').value;
    let n1 = 0, n2 = 1, nextTerm;
    let txt = "";
    if (number==0){
        txt = "You can not generate less than one fibonacci number!"
    }
    else{
        for (let i = 1; i <= number; i++) {
            console.log(n1);
            txt += n1 + " ";
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
    }
    document.getElementById("result").innerHTML= txt
}
