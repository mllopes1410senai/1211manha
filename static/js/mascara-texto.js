document.addEventListener('DOMContentLoaded', function() {
   var itens = document.querySelectorAll(".mask-text")

    for (let item of itens) {
        var valorOriginal = item.innerHTML
        valorOriginal = valorOriginal.split(",")

        var centavos = ""

        if (valorOriginal[1]) {
            centavos = valorOriginal[1].split("").reverse().join("") + ","
        }

        valorOriginal = valorOriginal[0]

        if (valorOriginal.length > 3) {
            var valorComMask = centavos
            console.log(valorOriginal)
            valorOriginal = String(valorOriginal).split("").reverse()

            var cont = 0
            
            for (let letra of valorOriginal) {

                if (cont === 3) {
                    valorComMask += "."
                    cont = 0
                }

                valorComMask += letra
                cont = cont + 1

                console.log(valorComMask, letra)
            }

            valorComMask = (valorComMask.split("").reverse().join("")).toString()

            console.log(valorComMask)

            item.innerHTML = valorComMask
        }
    }


}, false);