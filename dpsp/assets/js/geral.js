// function de validação cliente //
function validationForm() { 
    let nomeResponsavel = document.querySelector('#nomeResponsavel').value;
    let nomeCliente = document.querySelector('#nomeCliente').value;
    let cod = document.querySelector('#cod').value;
    let quantidade = document.querySelector('#quantidade').value;
    let phone = document.querySelector('#phone').value;
    let nomeItem = document.querySelector('#nomeItem').value

    if(nomeResponsavel == '') { 
        alert('Preencha o nome!!');
        return false
    }
    if(nomeCliente == '') { 
        alert('Preencha o sobrenome!!')
        return false
    }
    if(cod < 1) { 
        alert('Digite o valor correto!')
        return false
    }
    if(phone < 10) { 
        alert('Digite o número correto!')
        return false
    }
    if(quantidade == '') { 
        alert('Digite o horário!')
        return false
    }
    if(nomeItem =='') { 
        alert('Digite o nome do item!')
        return false
    }
    return true
}
// function de mostrar cliente //
function showData() { 
    let peopleList;
    if(localStorage.getItem('peopleList') == null) { 
        peopleList = [];
    }
    else { 
        peopleList = JSON.parse(localStorage.getItem('peopleList'));

    } 

let novoHtml = ''
    peopleList.forEach(function (element, index) { 
        
       novoHtml += `
        <tr>
        <td> ${element.nomeResponsavel}</td>
        <td> ${element.nomeCliente}</td>
        <td> ${element.cod}</td>
        <td> ${element.nomeItem}</td>
        <td> ${element.quantidade}</td>
        <td> ${element.phone}</td>

        <td class="editOptions">
        <button onclick="deleteData(${index})" class="btn btn-danger" id="del">Deletar</button>
        <button onclick="updateData(${index})" class="btn btn-warning" id="up">Editar</button>
        </td>
        </tr> `
        
    });
    document.querySelector('#crudTable tbody').innerHTML = novoHtml;
}
// load all data 
document.onload = showData();

// function adicionarCliente // 
function AddData() { 
    if(validationForm() == true) { 
        let nomeResponsavel = document.querySelector('#nomeResponsavel').value;
        let nomeCliente = document.querySelector('#nomeCliente').value;
        let cod = document.querySelector('#cod').value;
        let quantidade = document.querySelector('#quantidade').value
        let phone = document.querySelector('#phone').value;
        let nomeItem = document.querySelector('#nomeItem').value;

    
        let peopleList;
        if(localStorage.getItem('peopleList') == null) { 
            peopleList = [];
        }
        else { 
            peopleList = JSON.parse(localStorage.getItem('peopleList'));
        } 
        
          peopleList.push({
            nomeResponsavel:nomeResponsavel,
            nomeCliente: nomeCliente,
            cod: cod,
            quantidade: quantidade,
            phone: phone,
            nomeItem:nomeItem
          });

            localStorage.setItem('peopleList', JSON.stringify(peopleList));
            showData()
            document.querySelector('#nomeResponsavel').value = '';
            document.querySelector('#nomeCliente').value = '';
            document.querySelector('#cod').value = '';
            document.querySelector('#quantidade').value = '';
            document.querySelector('#phone').value = '';
            document.querySelector('#nomeItem').value = '';



    }
}
// function deletarCliente //
function deleteData(index) { 
    let peopleList;
    if(localStorage.getItem('peopleList') == null) { 
        peopleList = [];
    }
    else { 
        peopleList = JSON.parse(localStorage.getItem('peopleList'));
    } 

    peopleList.splice(index,1)
    localStorage.setItem('peopleList', JSON.stringify(peopleList));
    showData()
}

// function editarCliente //
function updateData(index) { 
    document.querySelector('#Submit').style.display = 'none';
    document.querySelector('#Update').style.display = 'block';

        let peopleList;

        if(localStorage.getItem('peopleList') == null) { 
            peopleList = [];
        }
        else { 
            peopleList = JSON.parse(localStorage.getItem('peopleList'));
        }
        
        document.querySelector('#nomeResponsavel').value = peopleList[index].nomeResponsavel;
        document.querySelector('#nomeCliente').value = peopleList[index].nomeCliente;
        document.querySelector('#cod').value = peopleList[index].cod;
        document.querySelector('#quantidade').value = peopleList[index].quantidade;
        document.querySelector('#phone').value = peopleList[index].phone;
        document.querySelector('#nomeItem').value = peopleList[index].nomeItem;



        // function click no edit //
        document.querySelector('#Update').onclick = function () {
            if(validationForm() == true) { 
                peopleList[index].nomeResponsavel = document.querySelector('#nomeResponsavel').value;
                peopleList[index].nomeCliente = document.querySelector('#nomeCliente').value
                peopleList[index].cod = document.querySelector('#cod').value
                peopleList[index].quantidade = document.querySelector('#quantidade').value
                peopleList[index].phone = document.querySelector('#phone').value
                peopleList[index].phone = document.querySelector('#nomeItem').value


                localStorage.setItem('peopleList', JSON.stringify(peopleList));
                showData()

                document.querySelector('#nomeResponsavel').value = '';
                document.querySelector('#nomeCliente').value = '';
                document.querySelector('#cod').value = '';
                document.querySelector('#quantidade').value = '';
                document.querySelector('#phone').value = '';
                document.querySelector('#nomeItem').value = '';
                
                document.querySelector('#Submit').style.display = 'block';
                document.querySelector('#Update').style.display = 'none';
            }

            
        }
}