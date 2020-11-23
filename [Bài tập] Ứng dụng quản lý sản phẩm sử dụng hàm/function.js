let arr = [];

function addItems(arr){
    arr.push(document.getElementById('items').value);
    document.getElementById('items').value = '';
    return arr;
}

function showItems(arr){
    let result = '';
    for(let i =0;i<arr.length;i++){
        result+=`<tr> <td>${arr[i]}</td>
                <td><input type="button" value="Edit" onclick="edit(${i})"></td>
                <td><input type="button" value="Delete" onclick="del(${i})"></td></tr>`;
    }
    document.getElementById('showItems').innerHTML = result;
    if(arr.length < 2){
        document.getElementById('product').innerHTML = arr.length + ' product';
    } else document.getElementById('product').innerHTML = arr.length + ' products';
}

function main(){
    addItems(arr);
    showItems(arr);
}

function edit(index){
    let editItem = prompt('Nhập tên mới');
    arr[index] = editItem;
    showItems(arr);
}

function del(index){
    arr.splice(index,1);
    showItems(arr);
}




