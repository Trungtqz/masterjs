// Bai 1
const buttonA = document.getElementById('btna');

buttonA.addEventListener("click", function () {
  const luongMotNgay = document.getElementById('luongmotngay').value;
  const soNgayLam = document.getElementById('songaylam').value;

  let ketQuaNgayLuong = 0;
  ketQuaNgayLuong = luongMotNgay * soNgayLam;
  document.getElementById('ketquabaimot').innerHTML = ketQuaNgayLuong.toLocaleString() + ' Vnd';
});

// Bai 2
const buttonB = document.getElementById('btnb');

buttonB.addEventListener("click", function () {
  const soThuNhat = parseFloat(document.getElementById('sothunhat').value);
  const soThuHai = parseFloat(document.getElementById('sothuhai').value);
  const soThuBa = parseFloat(document.getElementById('sothuba').value);
  const soThuBon = parseFloat(document.getElementById('sothubon').value);
  const soThuNam = parseFloat(document.getElementById('sothunam').value);
  
  let tongSo = soThuNhat + soThuHai + soThuBa + soThuBon + soThuNam;
  let ketQuaTongSo = tongSo / 5;
  document.getElementById('ketquabaihai').innerText = "Giá trị trung bình là: " + ketQuaTongSo;
});

// Bai 3
const buttonC = document.getElementById('btnc');

buttonC.addEventListener("click", function () {
  const doLa = parseFloat(document.getElementById('usd').value);
  const usd = 23500;
  let quyDoi = usd * doLa;
  document.getElementById('ketquabaiba').innerText = quyDoi.toLocaleString() + ' Vnd';
});

// Bai 4
const buttonD = document.getElementById('btnd');

buttonD.addEventListener("click", function () {
  const length = parseFloat(document.getElementById('length').value);
  const width = parseFloat(document.getElementById('width').value);
  
  let perimeter = (length + width) * 2;
  let area = length * width;
  document.getElementById('ketquabaibon').innerHTML = `perimeter: ${perimeter}, area: ${area}`;
});

// Bai 5
const buttonE = document.getElementById('btne');

buttonE.addEventListener("click", function () {
  const number = parseFloat(document.getElementById('numer').value);
  const errorElement = document.getElementById('error');
  if (number >= 10 && number <= 99) {
    const digit1 = Math.floor(number / 10);
    const digit2 = number % 10;
    let addition = digit1 + digit2; 
    document.getElementById('ketquabainam').innerText = `Tổng 2 ký số là: ${addition}`;
    errorElement.innerText = "";
  } else {
      errorElement.innerText = "Vui lòng nhập số có 2 chữ số!";
      document.getElementById('ketquabainam').innerText = "";
  }
});