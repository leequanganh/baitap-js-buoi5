// quan ly sinh vien ///
var a = "a"
var b = "b"
var c = "c"
var x = "x"
var diemChuanEl = document.getElementById("diem-chuan")
var diemMon1El = document.getElementById("diem-mon1")
var diemMon2El = document.getElementById("diem-mon2")
var diemMon3El = document.getElementById("diem-mon3")
var diemKhuVucEl = document.getElementById("diem-khu-vuc")
var diemDoiTuongEl = document.getElementById("diem-doi-tuong")
function getDiemKhuVuc(khuvuc){
    switch(khuvuc){
        case a:
            return 2;
            break
        case b:
            return 1;
            break
        case c:
            return 0.5;
            break
        case x:
            return 0;
    }       
}
function getDiemDoiTuong(doituong) {
    switch(doituong){
        case 1:
            return 2.5
            break
        case 2:
            return 1.5
            break
        case 3:
            return1
            break
        case 0:
            return 0
    }
}
function ketqua(){
    var tongDiem
    var diemChuanValue = diemChuanEl.value*1
    var diemMon1Value = diemMon1El.value*1
    var diemMon2Value = diemMon2El.value*1
    var diemMon3Value = diemMon3El.value*1
    var diemKhuVucValue = diemKhuVucEl.value
    var diemDoiTuongValue = diemDoiTuongEl.value*1
    
    // alert(diemChuanValue)
    var diemKhuVuc = getDiemKhuVuc(diemKhuVucValue)
    var diemDoiTuong = getDiemDoiTuong(diemDoiTuongValue)
    // alert(diemKhuVuc)
    tongDiem = ( + diemMon1Value + diemMon2Value + diemMon3Value + diemKhuVuc + diemDoiTuong)
    if(tongDiem>=diemChuanValue && diemMon1Value >0 && diemMon2Value >0 && diemMon3Value >0){
        alert("chúc mừng bạn đã đậu với số diểm là :" + tongDiem);
    }
    else{
        alert("bạn không thể đậu với số điểm này :" + tongDiem)
    }
}
// tinh tien dien 
var tenKhachEl = document.getElementById("tenKhach")
var soKwEl = document.getElementById("soKw")


// function tinhTienDien(){
//     var tenKhachValue = tenKhachEl.value
//     var tongTien
//     var soKwValue = soKwEl.value*1
//     if (soKwValue <= 50 && soKwValue >0){
//         tongTien=soKwValue*500
//         alert(tenKhachValue+" "+ tongTien)
//     }
//     else if(soKwValue>50 && soKwValue <=100) {
//         tongTien= 50*500 + (soKwValue-50)*650
//         alert(tenKhachValue+" "+ tongTien)
//     }
//     else if (soKwValue<=200 && soKwValue >100){
//         tongTien= 50*500 + 50*650 +(soKwValue-100)*850
//         alert(tenKhachValue+" "+ tongTien)
//     }
//     else if (soKwValue>200 && soKwValue<=350){
//         tongTien= 50*500 + 50*650 + 100*850 + (soKwValue-200)*1100
//         alert(tenKhachValue+" "+ tongTien)
//     }
//     else if (soKwValue > 350){
//         tongTien= 50*500 + 50*650 + 100*850 + 350*1100 + (soKwValue-350)*1300
//         alert(tenKhachValue+" "+ tongTien)
//     }
// }
var gia50KwDau = 500
var giaFrom50KwTo100Kw = 650
var giaFrom100KwTo200Kw = 850
var giaFrom200KwTo350Kw = 1100
var giaFrom350Kw = 1300

function tinhTienDien(){
    var tenKhachValue = tenKhachEl.value
    var tongTien
    var soKwValue = soKwEl.value*1
    if(soKwValue>=0 && soKwValue<=50){
        tongTien=soKwValue*gia50KwDau
        alert(tenKhachValue+ " " + tongTien)

    }
    else if (soKwValue>50 && soKwValue<=100){
        tongTien=50*gia50KwDau + (soKwValue-50)*giaFrom50KwTo100Kw
        alert(tenKhachValue+ " " + tongTien)
    }
    else if(soKwValue>100 && soKwValue<=200){
        tongTien=50*gia50KwDau +50*giaFrom50KwTo100Kw + (soKwValue-100)*giaFrom100KwTo200Kw
                alert(tenKhachValue+ " " + tongTien)

    }
    else if(soKwValue>200 && soKwValue<=350){
        tongTien=50*gia50KwDau +50*giaFrom50KwTo100Kw + 100*giaFrom100KwTo200Kw + (soKwValue-200)*giaFrom200KwTo350Kw
                alert(tenKhachValue+ " " + tongTien)

    }
    else if(soKwValue>350){
        tongTien=50*gia50KwDau +50*giaFrom50KwTo100Kw + 100*giaFrom100KwTo200Kw + 150*giaFrom200KwTo350Kw + (soKwValue-350)*giaFrom350Kw    
                alert(tenKhachValue+ " " + tongTien)

    }
    
}
// thuế cá nhân ///
var nameEl = document.getElementById("name")
var thuNhapEl = document.getElementById("thuNhap")
var phuThuocEl = document.getElementById("phuThuoc")
    function tinhTienThue(){
        var ketQua
        var nameValue = nameEl.value 
        var thuNhapValue = thuNhapEl.value*1
        var phuThuocValue = phuThuocEl.value*1
        var thuNhapChiuThue = thuNhapValue - 4000000 - phuThuocValue*1600000 
        if(thuNhapChiuThue>0 && thuNhapChiuThue<=60000000 ){
            ketQua=thuNhapChiuThue*0.05
            alert(nameValue + " " + ketQua)
        }
        else if (thuNhapChiuThue>60000000 && thuNhapChiuThue<=120000000){

            ketQua=thuNhapChiuThue*0.1
                        alert(nameValue + " " + ketQua)

        }
        else if (thuNhapChiuThue>120000000 && thuNhapChiuThue<=210000000){
            ketQua=thuNhapChiuThue*0.15
                        alert(nameValue + " " + ketQua)


        }
        else if (thuNhapChiuThue>210000000 && thuNhapChiuThue<=384000000){
            ketQua=thuNhapChiuThue*0.2
                        alert(nameValue + " " + ketQua)


        }
        else if (thuNhapChiuThue>384000000 && thuNhapChiuThue<=624000000){
            ketQua=thuNhapChiuThue*0.25
                        alert(nameValue + " " + ketQua)


        }
        else if (thuNhapChiuThue>624000000 && thuNhapChiuThue<=960000000){
            ketQua=thuNhapChiuThue*0.3
                        alert(nameValue + " " + ketQua)


        }
        else if (thuNhapChiuThue>960000000){
            ketQua=thuNhapChiuThue*0.35
                        alert(nameValue + " " + ketQua)


        }
        else{
            alert(nameEl+" "+ "bạn không cần nộp thuế")
        }
    }
// tinh tien cap ///


// var nhaDan = document.getElementById("nhaDan")
function onskn(){
    soKetNoi.style.display="block"
} 
function offskn(){
    soKetNoi.style.display="none"
}

// /
var maKh = document.getElementById("maKh")
var soKenh = document.getElementById("soKenhCaoCap")
var nhaDan = "nhaDan"
var doanhNghiep = "doanhNghiep"
var soKetNoi = document.getElementById("soKetNoi")
function getPhiHoaDon(loaiKh){
    if(loaiKh == nhaDan) {
        return 4.5
    }
    if(loaiKh == doanhNghiep){
        return 15
    }
}
function getThueKenhCaoCap(loaiKh){
    if(loaiKh==nhaDan){
        return 7.5
    }
    if(loaiKh==doanhNghiep){
        return 50
    }
}
function getPhiDichVu(loaiKh){
    var soKetNoiValue=soKetNoi.value*1
    if(loaiKh == nhaDan){
        return 20.5
    }
    if(loaiKh == doanhNghiep){
        if (soKetNoiValue<=50){
            return 75
        }
        else if (soKetNoiValue>50){
            return (soKetNoiValue-50)*5 + 75
        }
    }    
}  
function tinhTienCap(){
    var maKhvalue = maKh.value
    var ketQua
    var loaikhValue = document.querySelector('input[name="loaikh"]:checked').value
    var  phiHoaDon = getPhiHoaDon(loaikhValue)
    var phiThueKenhCc = getThueKenhCaoCap(loaikhValue)
    var phiDichVu=getPhiDichVu(loaikhValue)
    var soKenhValue=soKenh.value*1
    var phiThueKenh = soKenhValue*phiThueKenhCc
    
        ketQua= phiHoaDon + phiDichVu + phiThueKenh
    
        alert("khách hàng" +" " + maKhvalue+ "" + "có chi phí là: "+  " " + ketQua + "$")
    
}