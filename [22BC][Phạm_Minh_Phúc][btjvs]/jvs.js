document.getElementById("btnTienluong").onclick = function() {
    const luong1ngay = 100000;
    var so1 = document.getElementById("txtSongay").value * 1;
    var Tienluong = so1 * luong1ngay;
    console.log(Tienluong);

    document.getElementById("thanhtien").innerHTML = (Tienluong) + ('VND');
}

document.getElementById("btnTinhTB").onclick = function() {
    var so1 = document.getElementById("txtSo_1").value * 1;
    var so2 = document.getElementById("txtSo_2").value * 1;
    var so3 = document.getElementById("txtSo_3").value * 1;
    var so4 = document.getElementById("txtSo_4").value * 1;
    var so5 = document.getElementById("txtSo_5").value * 1;
    var TongTB = (so1 + so2 + so3 + so4 + so5) / 5;
    console.log(TongTB);
    document.getElementById("TinhTB").innerHTML = ('tong trung binh la: ') + (TongTB);
};

document.getElementById("btnQuydoi").onclick = function() {
    const giaUSD = 23500;
    var tienUSD = document.getElementById("txtUSD").value * 1;
    var giaVND = tienUSD * giaUSD;
    console.log(giaVND);
    document.getElementById("TinhgiaUSD").innerHTML = ('so tien VND la: ') + (giaVND) + ('VND');
};

document.getElementById("tinhHCN").onclick = function() {
    var a = document.getElementById("chieudai").value * 1;
    var b = document.getElementById("chieurong").value * 1;
    var cv = (a + b) * 2;
    var dt = a * b;
    console.log(a);
    console.log(b);
    document.getElementById("chuvi").innerHTML = ("chu vi HCN la:") + (cv);
    document.getElementById("dientich").innerHTML = ("dien tich HCN la:") + (dt);
};

document.getElementById("Tong_KySo").onclick = function() {
    var kyso = document.getElementById("txt5_kyso").value * 1;
    var a = (kyso % 10);
    var b = Math.floor(kyso / 10);
    var c = a + b;
    console.log(c);
    document.getElementById("KetQua_kyso").innerHTML = ("Tong Ky So la: ") + (c);
};