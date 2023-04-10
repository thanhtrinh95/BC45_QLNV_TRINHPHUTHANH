
var arrNhanVien = [];
var vndFormat = new Intl.NumberFormat('it-IT');
document.querySelector('#btnThemNV').onclick = function (event) {
    event.preventDefault();

    var nv = new NhanVien();

    nv.taiKhoan = document.querySelector('#tknv').value;
    nv.hoTen = document.querySelector('#name').value;
    nv.email = document.querySelector('#email').value;
    nv.password = document.querySelector('#password').value;
    nv.ngayLam = document.querySelector('#datepicker').value;
    nv.luongCoBan = +document.querySelector('#luongCB').value;
    var chucvu = document.querySelector('#chucvu');
    nv.chucVu = chucvu.options[chucvu.selectedIndex].text;
    nv.giolam = document.querySelector('#gioLam').value;
    console.log(nv);

    //validation
    var valid = true;
    valid =
        kiemtraRong(nv.taiKhoan, 'TaiKhoan') &
        kiemtraRong(nv.hoTen, 'HovaTen') &
        kiemtraRong(nv.email, 'email') &
        kiemtraRong(nv.password, 'password') &
        kiemtraRong(nv.ngayLam, 'NgayLam') &
        kiemtraRong(nv.giolam, 'GioLam');

    valid = valid & kiemtraKyTu(nv.hoTen, 'HovaTen') &
        kiemTraEmail(nv.email, 'email')
    kiemTraSo(nv.luongCoBan, 'luongCoBan');
    valid = valid & kiemTraOption(nv.chucVu, 'ChucVu');
    valid = valid & kiemTraDoDai(nv.taiKhoan, 'TaiKhoan', 4, 6) &
        kiemTraDoDai(nv.password, 'password', 6, 10);
    valid = valid & kiemTraGiaTri(nv.luongCoBan, 'luongCoBan', 1000000, 20000000) &
        kiemTraGiaTri(nv.giolam, 'GioLam', 80, 200);
    if (!valid) {
        return;
    }
    arrNhanVien.push(nv);
    renderNhanVien(arrNhanVien);
    document.querySelector('#themthanhcong').innerHTML = 'Thêm nhân viên thành công!!';
    saveStorage();
}
//In thông tin nhân viên
function renderNhanVien(arrNV) {
    var htmlcontent = '';

    for (var i = 0; i < arrNV.length; i++) {
        var nvNew = new NhanVien();
        var nv = arrNV[i];
        Object.assign(nvNew, nv);
        htmlcontent += `
            <tr>
                <td> ${nvNew.taiKhoan}</td>
                <td> ${nvNew.hoTen}</td>
                <td> ${nvNew.email}</td>
                <td> ${nvNew.ngayLam}</td>
                <td> ${nvNew.chucVu}</td>
                <td> ${vndFormat.format(nvNew.tongLuong())}vnd</td>   
                <td> ${nvNew.tinhxepLoai()}</td>
                <td><button class="btn btn-primary mx-2" onclick="suaNhanVien('${nvNew.taiKhoan}')" data-toggle="modal"
                data-target="#myModal">Sửa</button></td>
                <td><button class="btn btn-danger mx-2" onclick="xoaNhanVien('${nvNew.taiKhoan}')">Xoá</button></td>
                
            </tr>
        
        `;
    }

    document.querySelector('#tableDanhSach').innerHTML = htmlcontent;
    return htmlcontent;
}
// sửa thông tin nhân viên

function suaNhanVien(matkClick) {
    var indexEdit = -1;
    for (i = 0; i < matkClick.length; i++) {
        if (matkClick === arrNhanVien[i].taiKhoan) {
            indexEdit = i;
            break;
        }
    }
    if (indexEdit !== -1) {
        document.querySelector('#tknv').value = arrNhanVien[indexEdit].taiKhoan;
        document.querySelector('#name').value = arrNhanVien[indexEdit].hoTen;
        document.querySelector('#email').value = arrNhanVien[indexEdit].email;
        document.querySelector('#password').value = arrNhanVien[indexEdit].password;
        document.querySelector('#datepicker').value = arrNhanVien[indexEdit].ngayLam;
        document.querySelector('#luongCB').value = arrNhanVien[indexEdit].luongCoBan;
        var chucvu = document.querySelector('#chucvu');
        chucvu.options[chucvu.selectedIndex].text = arrNhanVien[indexEdit].chucVu;

        document.querySelector('#gioLam').value = arrNhanVien[indexEdit].giolam;

        document.querySelector('#tknv').disabled = true;
        document.querySelector('#btnThemNV').disabled = true;
        document.querySelector('#header-title').innerHTML = 'Sửa Nhân Viên';
    }
}

//Lưu thông nhân viên sau khi sửa 
document.querySelector('#btnCapNhat').onclick = function () {

    var nhanVienEdit = new NhanVien();

    nhanVienEdit.taiKhoan = document.querySelector('#tknv').value;
    nhanVienEdit.hoTen = document.querySelector('#name').value;
    nhanVienEdit.email = document.querySelector('#email').value;
    nhanVienEdit.password = document.querySelector('#password').value;
    nhanVienEdit.ngayLam = document.querySelector('#datepicker').value;
    nhanVienEdit.luongCoBan = document.querySelector('#luongCB').value;
    var chucvu = document.querySelector('#chucvu');
    nhanVienEdit.chucVu = chucvu.options[chucvu.selectedIndex].text;
    nhanVienEdit.giolam = document.querySelector('#gioLam').value;
    console.log(nhanVienEdit);
    var valid = true;
    valid =
        kiemtraRong(nhanVienEdit.taiKhoan, 'TaiKhoan') &
        kiemtraRong(nhanVienEdit.hoTen, 'HovaTen') &
        kiemtraRong(nhanVienEdit.email, 'email') &
        kiemtraRong(nhanVienEdit.password, 'password') &
        // kiemtraRong(nhanVienEdit.ngayLam, 'NgayLam') &
        kiemtraRong(nhanVienEdit.chucVu, 'ChucVu') &
        kiemtraRong(nhanVienEdit.giolam, 'GioLam');

    valid = valid & kiemtraKyTu(nhanVienEdit.hoTen, 'HovaTen') &
        kiemTraEmail(nhanVienEdit.email, 'email')
    kiemTraSo(nhanVienEdit.luongCoBan, 'luongCoBan');
    valid = valid & kiemTraOption(nv.chucVu, 'ChucVu');
    valid = valid & kiemTraDoDai(nhanVienEdit.taiKhoan, 'TaiKhoan', 4, 6) &
        kiemTraDoDai(nhanVienEdit.password, 'password', 6, 10);
    valid = valid & kiemTraGiaTri(nhanVienEdit.luongCoBan, 'luongCoBan', 1000000, 20000000) &
        kiemTraGiaTri(nhanVienEdit.giolam, 'GioLam', 80, 200);
    if (!valid) {
        return;
    }


    for (var i = 0; i < arrNhanVien.length; i++) {
        if (arrNhanVien[i].taiKhoan === nhanVienEdit.taiKhoan) {
            var nvMang = arrNhanVien[i];
            nvMang.hoTen = nhanVienEdit.hoTen;
            nvMang.password = nhanVienEdit.password;
            nvMang.email = nhanVienEdit.email;
            nvMang.password = nhanVienEdit.password;
            nvMang.luongCoBan = nhanVienEdit.luongCoBan;
            nvMang.chucVu = nhanVienEdit.chucVu;
            nvMang.giolam = nhanVienEdit.giolam;
            break;
        }
    }


    renderNhanVien(arrNhanVien);
    saveStorage();
    document.querySelector('#tknv').disabled = false;
    document.querySelector('#btnThemNV').disabled = false;


}

//xóa Nhân Viên
function xoaNhanVien(indexXoa) {
    arrNhanVien.splice(indexXoa, 1);

    renderNhanVien(arrNhanVien);
    saveStorage();
}

//tìm nhân viên
document.querySelector('#searchName').oninput = function () {
    var loaiNhanVien = document.querySelector('#searchName').value.trim();
    loaiNhanVien = stringToSlug(loaiNhanVien);

    var arrNhanVienTK = [];
    for (var i = 0; i < arrNhanVien.length; i++) {
        var nv = arrNhanVien[i];
        if (stringToSlug(nv.taiKhoan.trim()).search(loaiNhanVien) !== -1) {
            arrNhanVienTK.push(nv);
        }
    }
    renderNhanVien(arrNhanVienTK);
}

function saveStorage() {

    var sArrNhanVien = JSON.stringify(arrNhanVien);
    console.log(sArrNhanVien);
    localStorage.setItem('arrNhanVien', sArrNhanVien);

}

function getStorage() {
    if (localStorage.getItem('arrNhanVien')) {
        //lấy chuỗi đã luw trong localStorage gán cho biến stringArrSinhVien
        var stringArrNhanVien = localStorage.getItem('arrNhanVien');
        arrNhanVien = JSON.parse(stringArrNhanVien);
        //Chuyển đổi stringArrSinhVien thành object và gán vào arrSinhVien
        console.log('arrNhanVien', arrNhanVien);
    }
}
getStorage();

//gọi hàm renderSinhVien từ mãng đã load
renderNhanVien(arrNhanVien);

//Sắp xếp tăng dần
function sapXep(tagDongClick, name) {
    //lấy giá trị attribute
    var order = tagDongClick.getAttribute('order');


    var arrNVNew = [];
    for (var i = 0; i < arrNhanVien.length; i++) {
        var nv = arrNhanVien[i];

        var nvNew = new NhanVien();
        Object.assign(nvNew, nv);

        nvNew.alias = stringToSlug(nv.taiKhoan);
        arrNVNew.push(nvNew);

    }
    var orderArrBy = _.orderBy(arrNVNew, [name], [order]);
    if (order == 'asc') {
        tagDongClick.setAttribute('order', 'desc');

    } else {
        tagDongClick.setAttribute('order', 'asc')
    }
    //gọi lại hàm render
    renderNhanVien(orderArrBy);
}
