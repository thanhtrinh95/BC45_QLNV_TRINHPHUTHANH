
function stringToSlug(title) {
    //Đổi chữ hoa thành chữ thường
    slug = title.toLowerCase();

    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');

    return slug;
}



//----------------------Validation--------------------
function kiemtraRong(value, name) {
    if (value.trim() == '') {
        document.querySelector(`#error-required-${name}`).innerHTML = `${name} không được bỏ trống`;
        return false;
    }
    document.querySelector(`#error-required-${name}`).innerHTML = '';
    return true;
}

function kiemTraEmail(value, name) {

    var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regexEmail.test(value)) {
        document.querySelector(`#error-regex-${name}`).innerHTML = '';
        return true;
    }
    document.querySelector(`#error-regex-${name}`).innerHTML = `Email không hợp lệ !`;
    return false;


}

function kiemTraSo(value, name) {
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value)) {
        document.querySelector(`#error-regex-${name}`).innerHTML = '';
        return true;
    }
    document.querySelector(`#error-regex-${name}`).innerHTML = `${name} không hợp lệ !`;
    return false;
}

function kiemtraKyTu(value, name) {
    var regexLetter = /^[A-Za-z]+$/;;
    if (regexLetter.test(value)) {
        document.querySelector(`#error-regex-${name}`).innerHTML = '';
        return true;
    }
    document.querySelector(`#error-regex-${name}`).innerHTML = `${name} không hợp lệ !`;
    return false;
}

function kiemTraOption(value, name) {
    if (value == 'Chọn chức vụ') {
        document.querySelector(`#error-option-${name}`).innerHTML = `Chưa chọn chức vụ`;
        return false;
    } document.querySelector(`#error-option-${name}`).innerHTML = '';
    return true;
}

function kiemTraDoDai(value, name, minLength, maxLength) {
    if (value.trim().length < minLength || value.trim().length > maxLength) {
        document.querySelector(`#error-length-${name}`).innerHTML = `${name} từ ${minLength} - ${maxLength} ký tự !`;
        return false;
    }
    document.querySelector(`#error-length-${name}`).innerHTML = ``;
    return true;
}

function kiemTraGiaTri(value, name, minValue, maxValue) {

    if (Number.isNaN(value) || value < minValue || value > maxValue) {
        document.querySelector(`#error-value-${name}`).innerHTML = `${name} giá trị từ ${minValue} - ${maxValue}`;
        return false;
    }

    document.querySelector(`#error-value-${name}`).innerHTML = ``;
    return true;

}





