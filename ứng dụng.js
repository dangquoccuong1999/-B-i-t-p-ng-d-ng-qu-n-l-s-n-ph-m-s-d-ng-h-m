let phone = ["Sony Xperia", "SamSung Galaxy", "Nokia 6", "Apple iphone 6S", 'Oppo F9'];
function display() {
    let hienThi = "<table cellpadding=' 10' cellspacing='0' width='500px'>";
    let numberProduct = phone.length;
    for (let i = 0; i < phone.length; i++) {
        hienThi += "<tr>" + "<td>" + phone[i] + "</td>" + "<td><button id= " + i + " onclick='editName(this.id)'>Edit</button> </td>";
        hienThi += "<td> <button id= " + i + " onclick='deletePhone(this.id)'>Delete</button>" + "</td>" + "</tr>";
    }
    hienThi += "</table>"
    document.getElementById('sanPham').innerHTML = hienThi;
    document.getElementById('numberProduct').innerHTML = numberProduct;
}
display();

function addPhone() {
    let addPhone = document.getElementById('inputAdd').value;
    alert('Bạn vừa thêm điện thoại');
    phone.push(addPhone);
    display();
}

function editName(id) {
    let newName = prompt('Sửa tên sản phẩm: ');
    phone[id] = newName;
    display();
}

function deletePhone(id) {
    phone.splice(id,1);
    display();
}