function insert(num){
        let res = document.querySelector(".resultado").innerHTML
        document.querySelector(".resultado").innerHTML = res + num
    }
    function delAll(){
        document.querySelector(".resultado").innerHTML = ""
    }
    function delOnce(){
        let res = document.querySelector(".resultado").innerHTML
        document.querySelector(".resultado").innerHTML = res.substring(0, res.length -1)
    }
    function calc(){
        let res = document.querySelector(".resultado").innerHTML
        res = res.replace("x","*")
        res = res.replace("÷","/")
        if(res){
            let calc = eval(res)
            
            if(isNaN(calc)){
                document.querySelector(".resultado").innerHTML = "Aí não"
            } else {
                document.querySelector(".resultado").innerHTML = calc
            }
        }
    }