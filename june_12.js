window.onload = function() {

    var blank = document.getElementById("blank");
    blank.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
            validate(e);
        }
    });

    function validate(e) {
        var text = e.target.value;
        if(text === "smile") {
            document.getElementById('blank').readOnly = true;
            document.getElementById("blank").style.border="1px solid green";
            document.getElementById("img_here").src="/Volumes/workplace/test/smile.jpeg";
            startConfetti();
        } else {
            document.getElementById("blank").style.border="1px solid red";
        }
        //validation of the input...
    }
}