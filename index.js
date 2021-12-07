var hexCode = [
    {
        color: "indian red",
        hex: "#B0171F"
    },
    {
        color: "crimson",
        hex: "#DC143C"
    },
    {
        color: "lightpink",
        hex: "#FFB6C1"
    },
    {
        color: "pink",
        hex: "#FFC0CB"
    },
    {
        color: "palevioletred",
        hex: "#DB7093"
    },
    {
        color: "lavenderblush",
        hex: "#FFF0F5"
    },
    {
        color: "violetred",
        hex: "#FF3E96"
    },
    {
        color: "hotpink",
        hex: "#FF69B4"
    },
    {
        color: "raspberry",
        hex: "#872657"
    },
    {
        color: "deeppink",
        hex: "#FF1493"
    },
    {
        color: "maroon",
        hex: "#FF34B3"
    },
    {
        color: "mediumvioletred",
        hex: "#C71585"
    },
    {
        color: "violetred",
        hex: "#D02090"
    },
    {
        color: "orchid",
        hex: "#DA70D6"
    },
    {
        color: "thistle",
        hex: "#D8BFD8"
    },
    {
        color: "plum",
        hex: "#DDA0DD"
    },
    {
        color: "violet",
        hex: "#EE82EE"
    },
    {
        color: "magenta",
        hex: "#FF00FF"
    },
    {
        color: "purple*",
        hex: "#800080"
    },
    {
        color: "mediumorchid",
        hex: "#BA55D3"
    },
    {
        color: "darkviolet",
        hex: "#9400D3"
    },
    {
        color: "darkorchid",
        hex: "#9932CC"
    },
    {
        color: "indigo",
        hex: "#4B0082"
    },
    {
        color: "blueviolet",
        hex: "#8A2BE2"
    },
    {
        color: "purple",
        hex: "#9B30FF"
    },
    {
        color: "mediumpurple",
        hex: "#9370DB"
    },
    {
        color: "darkslateblue",
        hex: "#483D8B"
    },
    {
        color: "lightslateblue",
        hex: "#8470FF"
    },
    {
        color: "mediumslateblue",
        hex: "#7B68EE"
    },
    {
        color: "slateblue",
        hex: "#6A5ACD"
    },
    {
        color: "ghostwhite",
        hex: "#F8F8FF"
    },
    {
        color: "lavender",
        hex: "#E6E6FA"
    },
    {
        color: "blue",
        hex: "#0000FF"
    },
    {
        color: "mediumblue",
        hex: "#0000CD"
    },
    {
        color: "darkblue",
        hex: "#00008B"
    },
    {
        color: "navy",
        hex: "#000080"
    },
    {
        color: "midnightblue",
        hex: "#191970"
    },
    {
        color: "cobalt",
        hex: "#3D59AB"
    },
    {
        color: "royalblue",
        hex: "#4169E1"
    },
    {
        color: "cornflowerblue",
        hex: "#6495ED"
    },
    {
        color: "lightsteelblue",
        hex: "#B0C4DE"
    },
    {
        color: "lightslategray",
        hex: "#778899"
    },
    {
        color: "slategray",
        hex: "#708090"
    },
    {
        color: "dodgerblue",
        hex: "#1E90FF"
    },
    {
        color: "aliceblue",
        hex: "#F0F8FF"
    },
    {
        color: "steelblue",
        hex: "#4682B4"
    },
    {
        color: "lightskyblue",
        hex: "#87CEFA"
    },
    {
        color: "skyblue",
        hex: "#87CEFF"
    },
    {
        color: "deepskyblue",
        hex: "#00BFFF"
    },
    {
        color: "peacock",
        hex: "#33A1C9"
    },
    {
        color: "lightblue",
        hex: "#ADD8E6"
    },
    {
        color: "powderblue",
        hex: "#B0E0E6"
    },
    {
        color: "cadetblue",
        hex: "#98F5FF"
    },
    {
        color: "turquoise",
        hex: "#00F5FF"
    },
    {
        color: "cadetblue",
        hex: "#5F9EA0"
    },
    {
        color: "darkturquoise",
        hex: "#00CED1"
    },
    {
        color: "azure",
        hex: "#F0FFFF"
    },
    {
        color: "lightcyan",
        hex: "#E0FFFF"
    }
];
function randomIndexHex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return hexCode[Math.floor(Math.random() * (max - min)) + min];
}
function randomIndexAux(min, max, vetorAux) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return vetorAux[Math.floor(Math.random() * (max - min)) + min];
}
function randomNumber(cores) {
    var vetor = [];
    var quantidade = 5;
    var aux = 0;
    for (var i = 0; i < quantidade; i++) {
        var r = randomIndexHex(0, cores.length);
        if (vetor.length != 0 && vetor.includes(r)) {
            do {
                var aux2 = randomIndexHex(0, cores.length);
                console.log(aux2);
            } while (vetor.includes(aux2));
            vetor[aux] = aux2;
            aux = aux + 1;
        }
        else {
            vetor[aux] = r;
            aux = aux + 1;
        }
    }
    return vetor;
}
function escolher(cores) {
    var vetor = [];
    var fim = false;
    var vetorAux = randomNumber(cores);
    var regex = /^[a-zA-Z\s]*$/;
    var index = randomIndexAux(0, vetorAux.length, vetorAux);
    var corEscolhida = index.color;
    var corEscolhidaHex = index.hex;
    var vetorCores = getCoresNomes(vetorAux);
    //alert(corEscolhida);
    do {
        var cor = prompt("Eu estou pensando em uma dessas cores: \n\n ".concat(vetorCores, " \n\nEm qual cor estou pensado?"));
        if (vetorCores.includes(cor)) {
            if (cor.match(regex)) {
                if (cor.match(corEscolhida)) {
                    fim = true;
                    document.body.style.backgroundColor = corEscolhidaHex;
                    alert("Parábens você acertou!!!");
                }
                else {
                    if (cor.substr(0, 1) > corEscolhida.substr(0, 1)) {
                        alert("A cor escolhida é alfabeticamente menor");
                    }
                    else if (cor.substr(0, 1) < corEscolhida.substr(0, 1)) {
                        alert("A cor escolhida é alfabeticamente maior");
                    }
                    else if (cor.substr(0, 1) == corEscolhida.substr(0, 1)) {
                        alert("A cor escolhida é alfabeticamente igual");
                    }
                }
            }
            else {
                alert("Inválido");
            }
        }
        else {
            alert("A cor escolhida não existe");
        }
    } while (fim == false);
}
function getCoresNomes(data) {
    var vetor = [data.length];
    for (var i = 0; i < data.length; i++) {
        vetor[i] = data[i].color;
    }
    return vetor;
}
function getCoresHex(data) {
    var vetor = [data.length];
    for (var i = 0; i < data.length; i++) {
        vetor[i] = data[i].hex;
    }
    return vetor;
}
escolher(hexCode);
