function Multi() {
    var a = document.getElementById('num1').value;
    var b = document.getElementById('num2').value;
    var c = document.getElementById('num3').value;

    function mul(a) {
        return function(b) {
            return function(c) {
                document.getElementById('res').innerHTML = (a * b * c);
            }
        }
    }
    // document.getElementById('res').innerHTML = mul(a)(b)(c);
    mul(a)(b)(c)

}