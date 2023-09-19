function pogger(){
    var dia = Number(document.getElementById('dia').value)
    var mes = Number(document.getElementById('mes').value)
    var ano = Number(document.getElementById('ano').value) 
    var logico1;
    var logico2;
    
    
    if(dia > 31 || dia < 1 ){
        logico1 = false;
    } else if(mes > 12 || mes < 1){
        
        logico2 = false;

    }else{
        switch(mes){
            case 01:
                mes = "janeiro"
            break;
    
            case 02:
                mes = "fevereiro"
                break;
                case 03:
                    mes = "março"
                    break;
    
                    case 04:
                        mes = "abril"
                        break;
    
                        case 05:
                            mes = "maio"
                            break;
    
                            case 06:
                                mes = "junho"
                                break;
                                
                                case 07:
                                    mes = "julho"
                                    break;
    
                                    case 08:
                                        mes = "agosto"
                                        break;
    
                                        case 09:
                                            mes = "setembro"
                                            break;
    
                                            case 10:
                                                mes = "outubro"
                                                break;
    
                                                case 11:
                                                    mes = "novembro"
                                                    break;
    
                                                    case 12:
                                                        mes = "dezembro"
                                                        break;
    
    
        }
    
    
        alert(dia + " "+ "de" + " " + mes + " " + "de" + " " + ano)
    }

    if(logico1 == false && logico2 == false){
        alert("tanto dia quanto mês estão incorretos.")
    }
    if(logico1 == false){
        alert("valores maiores que 31 ou menores que 1 não serão aceitos.")
    }

    if(logico2 == false){
        alert("meses maiores que 12 ou menores que 1 não serão aceitos.")
    }
}

    

var button = document.getElementById('button')
button.addEventListener('click', pogger)