function toMilhar(value){
    let val = ""+value
    let val2 =""
    let count = 0
    let finalVal = ""
    for (let i = val.length-1; i >= 0 ; i--) {
        val2 += val[i]
        count ++
        if (count === 3 && i !== 0){
            val2 += "."
            count = 0
        }
    }
    for (let i = val2.length-1; i >= 0 ; i--) {
        finalVal += val2[i]
    }
    return finalVal
}

export default toMilhar;