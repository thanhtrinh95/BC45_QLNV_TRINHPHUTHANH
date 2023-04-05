function NhanVien() {
    this.taiKhoan = '';
    this.hoTen = '';
    this.email = '';
    this.password = '';
    this.ngayLam = '';
    this.luongCoBan = 0;
    this.chucVu = '';
    this.tongLuong = function () {
        var luong = 0;
        if (this.chucVu === 'Sếp') {
            luong = this.luongCoBan * 3;
        } else if (this.chucVu === 'Trưởng phòng') {
            luong = this.luongCoBan * 2;

        } else if (this.chucVu === 'Nhân viên') {
            luong += this.luongCoBan;
        }
        return luong;
    }
    this.giolam = 0;
    this.tinhxepLoai = function () {
        var xeploai = '';
        if (this.giolam >= 192) {
            xeploai += ' Xuất Sắc';
        } else if (this.giolam >= 172 && this.giolam < 192) {
            xeploai += ' giỏi';
        } else if (this.giolam >= 160 && this.giolam < 172) {
            xeploai += 'Khá';
        } else {
            xeploai += 'Trung bình';
        }
        return xeploai;

    }

}