
// Bank Soal: Lebih dari 30 soal untuk memastikan pengacakan yang baik.
const questionBank = [
 // LINGKARAN
 {
  id: 10101,
  materi: "Persamaan Lingkaran",
  kognitif: "ipk01",
  jenis: "PG",
  teks: "Diketahui $P(h,k)$ dan $r$ berturut-turut sebagai pusat dan jari-jari lingkaran $x^2 + y^2 + 6x + 4y - 3 = 0$. Maka pernyataan berikut yang benar adalah ....",
  opsi: [
   { key: 'A', text: '$h + k = 5$' },
   { key: 'B', text: '$h + r = 7$' },
   { key: 'C', text: '$k + r = 2$' },
   { key: 'D', text: '$h + k - r = 1$' },
   { key: 'E', text: '$h + k + r = 3$' }],
  kunci: ['C']
 },
 {
  id: 10102,
  materi: "Persamaan Lingkaran",
  kognitif: "ipk01",
  jenis: "PG",
  teks: "Diketahui $P(h,k)$ dan $r$ berturut-turut sebagai pusat dan jari-jari lingkaran $x^2 + y^2 + 6x - 4y - 3 = 0$. Maka pernyataan berikut yang benar adalah ....",
  opsi: [
   { key: 'A', text: '$h + k = 1$' },
   { key: 'B', text: '$h + r = 7$' },
   { key: 'C', text: '$k + r = 2$' },
   { key: 'D', text: '$h + k - r = 1$' },
   { key: 'E', text: '$h + k + r = 3$' }],
  kunci: ['E']
 },
 {
  id: 10103,
  materi: "Persamaan Lingkaran",
  kognitif: "ipk01",
  jenis: "PG",
  teks: "Diketahui $P(h,k)$ dan $r$ berturut-turut sebagai pusat dan jari-jari lingkaran $x^2 + y^2 + 4x + 6y - 3 = 0$. Maka pernyataan berikut yang benar adalah ....",
  opsi: [
   { key: 'A', text: '$h + k = 5$' },
   { key: 'B', text: '$h + r = 2$' },
   { key: 'C', text: '$k + r = 7$' },
   { key: 'D', text: '$h + k - r = 1$' },
   { key: 'E', text: '$h + k + r = 3$' }],
  kunci: ['B']
 },
 {
  id: 10104,
  materi: "Persamaan Lingkaran",
  kognitif: "ipk01",
  jenis: "PG",
  teks: "Diketahui $P(h,k)$ dan $r$ berturut-turut sebagai pusat dan jari-jari lingkaran $x^2 + y^2 - 4x + 6y - 3 = 0$. Maka pernyataan berikut yang benar adalah ....",
  opsi: [
   { key: 'A', text: '$h + k = 5$' },
   { key: 'B', text: '$h + r = 2$' },
   { key: 'C', text: '$k + r = 7$' },
   { key: 'D', text: '$h + k - r = 1$' },
   { key: 'E', text: '$h + k + r = 3$' }],
  kunci: ['E']
 },
 {
  id: 10105,
  materi: "Lingkaran",
  kognitif: "ipk01",
  jenis: "PG",
  teks: "Pemerintah kota berencana menyediakan fasilitas wifi gratis di beberapa area publik. Sebuah perangkat wifi utama dipasang pada koordinat $(0,3)$ dalam satuan cm di peta kota berskala 1:100000 dengan jangkauan sinyal sejauh 5 km ke segala arah. Lokasi yang akan menerima sinyal wifi gratis tersebut berada pada titik lokasi ....",
  opsi: [
   { key: 'A', text: '$(5,5)$' },
   { key: 'B', text: '$(-5,4)$' },
   { key: 'C', text: '$(-4,-3)$' },
   { key: 'D', text: '$(3,-1)$' },
   { key: 'E', text: '$(1,-2)$' }],
  kunci: ['D']
 },
 {
  id: 10106,
  materi: "Lingkaran",
  kognitif: "ipk01",
  jenis: "PG",
  teks: "Pemerintah kota berencana menyediakan fasilitas wifi gratis di beberapa area publik. Sebuah perangkat wifi utama dipasang pada koordinat $(3,0)$ dalam satuan cm di peta kota berskala 1:100000 dengan jangkauan sinyal sejauh 5 km ke segala arah. Lokasi yang akan menerima sinyal wifi gratis tersebut berada pada titik lokasi ....",
  opsi: [
   { key: 'A', text: '$(-2,1)$' },
   { key: 'B', text: '$(-1,3)$' },
   { key: 'C', text: '$(-3,-4)$' },
   { key: 'D', text: '$(4,-5)$' },
   { key: 'E', text: '$(5,5)$' }],
  kunci: ['B']
 },
 {
  id: 10201,
  materi: "Persamaan Garis Singgung Lingkaran",
  kognitif: "ipk02",
  jenis: "PG",
  teks: "Diketahui persamaan lingkaran $x^2 + y^2 = 16$ dan garis $y = x +k$. Agar garis bersinggungan dengan lingkaran, maka nilai $k = $ ....",
  opsi: [
   { key: 'A', text: '4' },
   { key: 'B', text: '4$\\sqrt{2}$' },
   { key: 'C', text: '4$\\sqrt{3}$' },
   { key: 'D', text: '8' },
   { key: 'E', text: '4$\\sqrt{5}$' }],
  kunci: ['B']
 },
 {
  id: 10202,
  materi: "Persamaan Garis Singgung Lingkaran",
  kognitif: "ipk02",
  jenis: "PG",
  teks: "Persamaan garis singgung lingkaran $(x-2)^2 + (y+1)^2 = 13$ di titik $(5,1)$ adalah ....",
  opsi: [
   { key: 'A', text: '$3x + 2y - 17 = 0$' },
   { key: 'B', text: '$3x - 2y - 13 = 0 $' },
   { key: 'C', text: '$2x + 3y - 13 = 0$' },
   { key: 'D', text: '$3x + 2y - 13 = 0$' },
   { key: 'E', text: '$2x - 3y + 5 = 0$' }],
  kunci: ['A']
 },
 {
  id: 10203,
  materi: "Persamaan Garis Singgung Lingkaran",
  kognitif: "ipk02",
  jenis: "PG",
  teks: "Persamaan garis singgung lingkaran $x^2 + y^2 = 16$ yang tegak lurus dengan garis $x + y = 2$ adalah ....",
  opsi: [
   { key: 'A', text: '$y = x \\pm 4\\sqrt{2}$' },
   { key: 'B', text: '$y = x \\pm 4$' },
   { key: 'C', text: '$y = x \\pm 2$' },
   { key: 'D', text: '$y = x \\pm 2\\sqrt{2}$' },
   { key: 'E', text: '$y = x \\pm 8$' }],
  kunci: ['A']
 },
 {
  id: 10204,
  materi: "Persamaan Garis Singgung Lingkaran",
  kognitif: "ipk02",
  jenis: "PG",
  teks: "Salah satu persamaan garis singgung lingkaran $(x-3)^2 + y^2 = 5$ yang sejajar dengan garis $y + 2x - 4 = 0$ adalah ....",
  opsi: [
   { key: 'A', text: '$y = -2x + 1$' },
   { key: 'B', text: '$y = -2x - 11$' },
   { key: 'C', text: '$y = 2x - 1$' },
   { key: 'D', text: '$y = -2x - 1$' },
   { key: 'E', text: '$y = 2x + 11$' }],
  kunci: ['A']
 },
 {
  id: 10301,
  materi: "Persamaan Elips",
  kognitif: "ipk03",
  jenis: "PG",
  teks: "Diketahui elips dengan titik puncak $(-4,3)$ dan $(12,3)$. Jika salah satu titik fokusnya adalah $(8,3)$, maka persamaan elipsnya adalah ....",
  opsi: [
   { key: 'A', text: '$\\dfrac{(x-4)^2}{64} + \\dfrac{(y-3)^2}{48} = 1$' },
   { key: 'B', text: '$\\dfrac{(x+4)^2}{64} + \\dfrac{(y+3)^2}{48} = 1$' },
   { key: 'C', text: '$\\dfrac{(x-8)^2}{16} + \\dfrac{(y-3)^2}{9} = 1$' },
   { key: 'D', text: '$\\dfrac{(x+8)^2}{16} + \\dfrac{(y+3)^2}{9} = 1$' },
   { key: 'E', text: '$\\dfrac{(x-4)^2}{16} + \\dfrac{(y-3)^2}{9} = 1$' }],
  kunci: ['A']
 },
 {
  id: 10302,
  materi: "Persamaan Elips",
  kognitif: "ipk03",
  jenis: "PG",
  teks: "Sebuah galeri pameran didesain dengan langit-langit berbentuk setengah elips untuk memanfaatkan sifat akustiknya yang unik (dikenal sebagai <i>whispering gallery</i>). Sifat ini memungkinkan suara yang berasal dari satu fokus untuk dipantulkan secara sempurna ke fokus lainnya, sehingga seseorang yang berdiri di titik B dapat mendengar bisikan dari titik A meskipun jaraknya jauh. Jika galeri itu memiliki panjang total 100 meter dan tinggi maksimum di pusatnya adalah 30 meter. Persamaan elips yang merepresentasikan bentuk langit-langit galeri tersebut dengan pusat elips berada di titik asal $(0,0)$ adalah ....",
  opsi: [
   { key: 'A', text: '$\\dfrac{x^2}{100} + \\dfrac{y^2}{30} = 1$' },
   { key: 'B', text: '$\\dfrac{x^2}{2500} + \\dfrac{y^2}{225} = 1$' },
   { key: 'C', text: '$\\dfrac{x^2}{2500} + \\dfrac{y^2}{900} = 1$' },
   { key: 'D', text: '$\\dfrac{x^2}{10000} + \\dfrac{y^2}{900} = 1$' },
   { key: 'E', text: '$\\dfrac{x^2}{10000} + \\dfrac{y^2}{3600} = 1$' }],
  kunci: ['C']
 },
 {
  id: 10303,
  materi: "Persamaan Elips",
  kognitif: "ipk03",
  jenis: "PG",
  teks: "Sebuah planet mengelilingi matahari dalam lintasan berbentuk elips dengan matahari berada pada salah satu titik fokusnya. Jarak terjauh (afelion) planet dari matahari adalah 18 juta km dan jarak terdekat (perihelion) adalah 2 juta km. Persamaan standar elips lintasan planet tersebut (dengan pusat di titik $(0,0)$ dan sumbu mayor pada sumbu $X$) adalah....",
  opsi: [
   { key: 'A', text: '$\\dfrac{x^2}{64} + \\dfrac{y^2}{36} = 1$' },
   { key: 'B', text: '$\\dfrac{x^2}{100} + \\dfrac{y^2}{36} = 1$' },
   { key: 'C', text: '$\\dfrac{x^2}{100} + \\dfrac{y^2}{64} = 1$' },
   { key: 'D', text: '$\\dfrac{x^2}{64} + \\dfrac{y^2}{100} = 1$' },
   { key: 'E', text: '$\\dfrac{x^2}{36} + \\dfrac{y^2}{100} = 1$' }],
  kunci: ['B']
 },
 {
  id: 10401,
  materi: "Limit di Keberhinggaan Fungsi Aljabar",
  kognitif: "ipk04",
  jenis: "PG",
  teks: "Nilai $\\lim\\limits_{x \\to 3} \\frac{x^2 - x - 6}{x^2 - 9}$ adalah ....",
  opsi: [
   { key: 'A', text: '$\\frac{1}{6}$' },
   { key: 'B', text: '$\\frac{5}{6}$' },
   { key: 'C', text: '$\\frac{1}{3}$' },
   { key: 'D', text: '$\\frac{2}{3}$' },
   { key: 'E', text: '$\\frac{5}{3}$' }],
  kunci: ['B']
 },
 {
  id: 10402,
  materi: "Limit di Keberhinggaan Fungsi Aljabar",
  kognitif: "ipk04",
  jenis: "PG",
  teks: "Nilai $\\lim\\limits_{x \\to 4} \\frac{x - 4}{\\sqrt{x} - 2}$ adalah ....",
  opsi: [
   { key: 'A', text: '2' },
   { key: 'B', text: '4' },
   { key: 'C', text: '6' },
   { key: 'D', text: '8' },
   { key: 'E', text: '16' }],
  kunci: ['B']
 },
 {
  id: 10403,
  materi: "Limit di Keberhinggaan Fungsi Aljabar",
  kognitif: "ipk04",
  jenis: "PG",
  teks: "Jika $\\lim\\limits_{x \\to a} \\frac{x^2 - (a+1)x + a}{x - a} = 5$, maka nilai $a$ adalah ....",
  opsi: [
   { key: 'A', text: '1' },
   { key: 'B', text: '3' },
   { key: 'C', text: '4' },
   { key: 'D', text: '5' },
   { key: 'E', text: '6' }],
  kunci: ['E']
 },
 // Soal Penerapan Tambahan
 {
  id: 10501,
  materi: "Limit di Ketakhinggaan Fungsi Aljabar",
  kognitif: "ipk05",
  jenis: "PG",
  teks: "Nilai $\\lim\\limits_{x \\to \\infty} \\dfrac{2x(4x-3)(3x-4)^2}{3(2x^2-3)^2} = $ ....",
  opsi: [
   { key: 'A', text: '2' },
   { key: 'B', text: '3' },
   { key: 'C', text: '4' },
   { key: 'D', text: '6' },
   { key: 'E', text: '12' }],
  kunci: ['D']
 },
 {
  id: 10502,
  materi: "Limit di Ketakhinggaan Fungsi Aljabar",
  kognitif: "ipk05",
  jenis: "PG",
  teks: "Nilai $\\lim\\limits_{x \\to \\infty} \\dfrac{4x(2x-3)^2(3x-4)}{3(4x^2-3)^2} = $ ....",
  opsi: [
   { key: 'A', text: '1' },
   { key: 'B', text: '3' },
   { key: 'C', text: '4' },
   { key: 'D', text: '6' },
   { key: 'E', text: '8' }],
  kunci: ['A']
 },
 {
  id: 10601,
  materi: "Limit Fungsi trigonoentri",
  kognitif: "ipk06",
  jenis: "PG",
  teks: "Nilai $\\lim\\limits_{x \\to 0} \\dfrac{12x^3(x-2)}{\\sin{3x} - \\sin{3x}\\cos{4x}} = $ ....",
  opsi: [
   { key: 'A', text: '$-2$' },
   { key: 'B', text: '$-1$' },
   { key: 'C', 'text': '0,5' },
   { key: 'D', text: '1' },
   { key: 'E', text: '2' }],
  kunci: ['B']
 },
 {
  id: 10602,
  materi: "Limit Fungsi trigonoentri",
  kognitif: "ipk06",
  jenis: "PG",
  teks: "Nilai $\\lim\\limits_{x \\to 0} \\dfrac{18x^3(x+6)}{\\sin{3x} - \\sin{3x}\\cos{6x}} = $ ....",
  opsi: [
   { key: 'A', text: '$-2$' },
   { key: 'B', text: '$-1$' },
   { key: 'C', 'text': '0,5' },
   { key: 'D', text: '1' },
   { key: 'E', text: '2' }],
  kunci: ['E']
 },
 {
  id: 10701,
  materi: "Turunan Fungsi Aljabar",
  kognitif: "ipk07",
  jenis: "PG",
  teks: "Jika suatu partikel bergerak mengikuti fungsi posisi $s(t) = t^2 + 2t$ $(s$ dalam meter dan $t$ dalam detik$)$, maka kecepatan sesaat pada $t = 2$ detik adalah ....",
  opsi: [
   { key: 'A', text: '1' },
   { key: 'B', text: '2' },
   { key: 'C', text: '4' },
   { key: 'D', text: '6' },
   { key: 'E', text: '8' }],
  kunci: ['D']
 },
 {
  id: 10702,
  materi: "Turunan Fungsi Aljabar",
  kognitif: "ipk07",
  jenis: "PG",
  teks: "Diketahui $f(x) = (2x-1)(3x+1)$. Jika $f'(x)$ adalah turunan dari $f(x)$, maka nilai $f'(1) = $ ....",
  opsi: [
   { key: 'A', text: '3' },
   { key: 'B', text: '6' },
   { key: 'C', text: '11' },
   { key: 'D', text: '12' },
   { key: 'E', text: '13' }],
  kunci: ['C']
 },
 {
  id: 10703,
  materi: "Turunan",
  kognitif: "ipk07",
  jenis: "PG",
  teks: "Jika $f(x) = \\dfrac{x}{x-1}$, maka $f'(x) = ....$",
  opsi: [
   { key: 'A', text: '$\\dfrac{1}{x-1}$' },
   { key: 'B', text: '$\\dfrac{1}{(x-1)^2}$' },
   { key: 'C', text: '$\\dfrac{2}{(x-1)^2}$' },
   { key: 'D', text: '$-\\dfrac{2}{(x-1)^2}$' },
   { key: 'E', text: '$-\\dfrac{1}{(x-1)^2}$' }],
  kunci: ['E']
 },
 {
  id: 10801,
  materi: "Turunan Fungsi Trigonometri",
  kognitif: "ipk08",
  jenis: "PG",
  teks: "Jika $f(x) = \\sin^2{x} + 2\\sin{x}\\cos{x} + \\cos^2{x}$, maka $f'(x) = ....$",
  opsi: [
   { key: 'A', text: '$2 \\sin{2x}$' },
   { key: 'B', text: '$2 \\cos{2x}$' },
   { key: 'C', text: '$4 \\cos{2x}$' },
   { key: 'D', text: '$2 \\sin{x} \\cos{x}$' },
   { key: 'E', text: '$4 \\sin{x} \\cos{x}$' }],
  kunci: ['B']
 },
 {
  id: 10802,
  materi: "Turunan Fungsi Trigonometri",
  kognitif: "ipk08",
  jenis: "PG",
  teks: "Jika $f(x) = \\sin^2{2x} + 2\\sin{2x}\\cos{2x} + \\cos^2{2x}$, maka $f'(x) = ....$",
  opsi: [
   { key: 'A', text: '$2 \\sin{4x}$' },
   { key: 'B', text: '$2 \\cos{4x}$' },
   { key: 'C', text: '$4 \\cos{4x}$' },
   { key: 'D', text: '$2 \\sin{2x} \\cos{2x}$' },
   { key: 'E', text: '$4 \\sin{2x} \\cos{2x}$' }],
  kunci: ['B']
 },
 {
  id: 10803,
  materi: "Turunan Fungsi Trigonometri",
  kognitif: "ipk08",
  jenis: "PG",
  teks: "Jika $f(x) = \\sin^2{3x} + 2\\sin{3x}\\cos{3x} + \\cos^2{3x}$, maka $f'(x) = ....$",
  opsi: [
   { key: 'A', text: '$6 \\sin{6x}$' },
   { key: 'B', text: '$6 \\cos{6x}$' },
   { key: 'C', text: '$12 \\cos{6x}$' },
   { key: 'D', text: '$6 \\sin{3x} \\cos{3x}$' },
   { key: 'E', text: '$18 \\sin{3x} \\cos{3x}$' }],
  kunci: ['B']
 },
 {
  id: 10901,
  materi: "Turunan Fungsi Logaritma",
  kognitif: "ipk09",
  jenis: "PG",
  teks: "Jika $f(x) = \\ln^2{x}$, maka $f'(x) = ....$",
  opsi: [
   { key: 'A', text: '$\\frac{1}{x}$' },
   { key: 'B', text: '$\\frac{2}{x}$' },
   { key: 'C', text: '$\\frac{\\ln{x}}{2}$' },
   { key: 'D', text: '$\\frac{\\ln{x}}{x} $' },
   { key: 'E', text: '$\\frac{2\\ln{x}}{x}$' }],
  kunci: ['E']
 },
 {
  id: 10902,
  materi: "Turunan Fungsi Logaritma",
  kognitif: "ipk09",
  jenis: "PG",
  teks: "Jika $f(x) = \\ln^2{2x}$, maka $f'(x) = ....$",
  opsi: [
   { key: 'A', text: '$\\frac{1}{2x}$' },
   { key: 'B', text: '$\\frac{1}{x}$' },
   { key: 'C', text: '$\\frac{\\ln{2x}}{2x}$' },
   { key: 'D', text: '$\\frac{\\ln{2x}}{x} $' },
   { key: 'E', text: '$\\frac{2\\ln{2x}}{x}$' }],
  kunci: ['E']
 },
 {
  id: 10903,
  materi: "Turunan Fungsi Logaritma",
  kognitif: "ipk09",
  jenis: "PG",
  teks: "Jika $f(x) = \\ln^2{3x}$, maka $f'(x) = ....$",
  opsi: [
   { key: 'A', text: '$\\frac{1}{3x}$' },
   { key: 'B', text: '$\\frac{2}{3x}$' },
   { key: 'C', text: '$\\frac{2\\ln{3x}}{3x}$' },
   { key: 'D', text: '$\\frac{2\\ln{3x}}{x} $' },
   { key: 'E', text: '$\\frac{6\\ln{3x}}{x}$' }],
  kunci: ['D']
 },
 {
  id: 11001,
  materi: "Turunan Fungsi Eksponensial",
  kognitif: "ipk10",
  jenis: "PG",
  teks: "Jika $f(x) = e^{2x}$, maka $f'(x) = ....$",
  opsi: [
   { key: 'A', text: '$2e^{x}$' },
   { key: 'B', text: '$2e^{2x}$' },
   { key: 'C', text: '$2e^{2x} \\ln(2)$' },
   { key: 'D', text: '$2e^{2x} \\ln(x)$' },
   { key: 'E', text: '$2e^{2x} \\ln(2x)$' }],
  kunci: ['B']
 },
 {
  id: 11002,
  materi: "Turunan Fungsi Eksponensial",
  kognitif: "ipk10",
  jenis: "PG",
  teks: "Jika $f(x) = e^{3x}$, maka $f'(x) = ....$",
  opsi: [
   { key: 'A', text: '$3e^{x}$' },
   { key: 'B', text: '$3e^{3x}$' },
   { key: 'C', text: '$3e^{3x} \\ln(3)$' },
   { key: 'D', text: '$3e^{3x} \\ln(x)$' },
   { key: 'E', text: '$3e^{3x} \\ln(3x)$' }],
  kunci: ['B']
 },
 {
  id: 11101,
  materi: "Aplikasi Turunan: Gradien Garis Singgung",
  kognitif: "ipk11",
  jenis: "PG",
  teks: "Jika $y=x^3-2x+3$, maka gradien garis singgung di titik berabsis $-1$ adalah ....",
  opsi: [
   { key: 'A', text: '$-5$' },
   { key: 'B', text: '$-3$' },
   { key: 'C', text: '1' },
   { key: 'D', text: '3' },
   { key: 'E', text: '5' }],
  kunci: ['C']
 },
 {
  id: 11102,
  materi: "Aplikasi Turunan: Gradien Garis Singgung",
  kognitif: "ipk11",
  jenis: "PG",
  teks: "Jika $y=x^3+2x-3$, maka gradien garis singgung di titik berabsis $-1$ adalah ....",
  opsi: [
   { key: 'A', text: '$-5$' },
   { key: 'B', text: '$-3$' },
   { key: 'C', text: '1' },
   { key: 'D', text: '3' },
   { key: 'E', text: '5' }],
  kunci: ['E']
 },
 {
  id: 11201,
  materi: "Aplikasi Turunan: Persamaan Garis Singgung",
  kognitif: "ipk12",
  jenis: "PG",
  teks: "Jika $y=x^3-2x+3$, maka persamaan garis singgung dengan titik singgung di titik berabsis $-1$ adalah ....",
  opsi: [
   { key: 'A', text: '$x - y = -5$' },
   { key: 'B', text: '$3x + y = -5$' },
   { key: 'C', text: '$3x - y = -5$' },
   { key: 'D', text: '$5x - y = -5$' },
   { key: 'E', text: '$5x + y = -5$' }],
  kunci: ['A']
 },
 {
  id: 11202,
  materi: "Aplikasi Turunan: Persamaan Garis Singgung",
  kognitif: "ipk12",
  jenis: "PG",
  teks: "Jika $y=x^3+2x-3$, maka persamaan garis singgung dengan titik singgung di titik berabsis $-1$ adalah ....",
  opsi: [
   { key: 'A', text: '$x - y = 1$' },
   { key: 'B', text: '$3x + y = 1$' },
   { key: 'C', text: '$3x - y = 1$' },
   { key: 'D', text: '$5x - y = 1$' },
   { key: 'E', text: '$5x + y = 1$' }],
  kunci: ['D']
 },
 {
  id: 11301,
  materi: "Aplikasi Turunan: Interval Monoton Fungsi",
  kognitif: "ipk13",
  jenis: "PG",
  teks: "Grafik fungsi $y=x^3 - 3x^2 - 72x + 1$ monoton turun pada interval ....",
  opsi: [
   { key: 'A', text: '$-4 < x < 6$' },
   { key: 'B', text: '$-6 < x < 4$' },
   { key: 'C', text: '$4 < x < 6$' },
   { key: 'D', text: '$x < -4$ atau $x > 6$' },
   { key: 'E', text: '$x < -6$ atau $x > 4$' }],
  kunci: ['A']
 },
 {
  id: 11302,
  materi: "Aplikasi Turunan: Interval Monoton Fungsi",
  kognitif: "ipk13",
  jenis: "PG",
  teks: "Grafik fungsi $y=x^3 - 3x^2 - 72x + 1$ monoton naik pada interval ....",
  opsi: [
   { key: 'A', text: '$-4 < x < 6$' },
   { key: 'B', text: '$-6 < x < 4$' },
   { key: 'C', text: '$4 < x < 6$' },
   { key: 'D', text: '$x < -4$ atau $x > 6$' },
   { key: 'E', text: '$x < -6$ atau $x > 4$' }],
  kunci: ['D']
 },
 {
  id: 11303,
  materi: "Aplikasi Turunan: Interval Monoton Fungsi",
  kognitif: "ipk13",
  jenis: "PG",
  teks: "Grafik fungsi $y=x^3 + 3x^2 - 72x + 1$ monoton turun pada interval ....",
  opsi: [
   { key: 'A', text: '$-4 < x < 6$' },
   { key: 'B', text: '$-6 < x < 4$' },
   { key: 'C', text: '$4 < x < 6$' },
   { key: 'D', text: '$x < -4$ atau $x > 6$' },
   { key: 'E', text: '$x < -6$ atau $x > 4$' }],
  kunci: ['B']
 },
 {
  id: 11304,
  materi: "Aplikasi Turunan: Interval Monoton Fungsi",
  kognitif: "ipk13",
  jenis: "PG",
  teks: "Grafik fungsi $y=x^3 + 3x^2 - 72x + 1$ monoton naik pada interval ....",
  opsi: [
   { key: 'A', text: '$-4 < x < 6$' },
   { key: 'B', text: '$-6 < x < 4$' },
   { key: 'C', text: '$4 < x < 6$' },
   { key: 'D', text: '$x < -4$ atau $x > 6$' },
   { key: 'E', text: '$x < -6$ atau $x > 4$' }],
  kunci: ['E']
 },
 {
  id: 11401,
  materi: "Aplikasi Turunan: Titik Stasioner",
  kognitif: "ipk14",
  jenis: "PG",
  teks: "Titik stasioner fungsi $f(x) = x^3 - 6x^2 + 9x + 1$ terletak pada $x = $ ....",
  opsi: [
   { key: 'A', text: '0 dan 1' },
   { key: 'B', text: '0 dan 3' },
   { key: 'C', text: '1 dan 2' },
   { key: 'D', text: '1 dan 3' },
   { key: 'E', text: '2 dan 3' }],
  kunci: ['D']
 },
 {
  id: 11402,
  materi: "Aplikasi Turunan: Titik Stasioner",
  kognitif: "ipk14",
  jenis: "PG",
  teks: "Titik stasioner fungsi $f(x) = x^3 + 6x^2 + 9x + 1$ terletak pada $x = $ ....",
  opsi: [
   { key: 'A', text: '0 dan -1' },
   { key: 'B', text: '0 dan -3' },
   { key: 'C', text: '-1 dan -2' },
   { key: 'D', text: '-1 dan -3' },
   { key: 'E', text: '-2 dan -3' }],
  kunci: ['D']
 },
 {
  id: 11403,
  materi: "Aplikasi Turunan: Titik Stasioner",
  kognitif: "ipk14",
  jenis: "PG",
  teks: "Titik stasioner fungsi $f(x) = x^3 - 3x^2 - 72x + 1$ terletak pada $x = $ ....",
  opsi: [
   { key: 'A', text: '-6 dan 0' },
   { key: 'B', text: '-4 dan 0' },
   { key: 'C', text: '-6 dan -4' },
   { key: 'D', text: '-6 dan 4' },
   { key: 'E', text: '-4 dan 6' }],
  kunci: ['E']
 },
 {
  id: 11404,
  materi: "Aplikasi Turunan: Titik Stasioner",
  kognitif: "ipk14",
  jenis: "PG",
  teks: "Titik stasioner fungsi $f(x) = x^3 + 3x^2 - 72x + 1$ terletak pada $x = $ ....",
  opsi: [
   { key: 'A', text: '-6 dan 0' },
   { key: 'B', text: '-4 dan 0' },
   { key: 'C', text: '-6 dan -4' },
   { key: 'D', text: '-6 dan 4' },
   { key: 'E', text: '-4 dan 6' }],
  kunci: ['D']
 },
 {
  id: 11501,
  materi: "Aplikasi Turunan: Nilai Maksimum dan Minimum",
  kognitif: "ipk15",
  jenis: "PG",
  teks: "Pada interval $-3 \\le x \\le 3$, nilai maksimum dari fungsi $f(x) = x^3 - 3x^2 - 24x + 1$ adalah ....",
  opsi: [
   { key: 'A', text: '19' },
   { key: 'B', text: '29' },
   { key: 'C', text: '38' },
   { key: 'D', text: '73' },
   { key: 'E', text: '97' }],
  kunci: ['B']
 },
 {
  id: 11502,
  materi: "Aplikasi Turunan: Nilai Maksimum dan Minimum",
  kognitif: "ipk15",
  jenis: "PG",
  teks: "Pada interval $-3 \\le x \\le 3$, nilai maksimum dari fungsi $f(x) = x^3 - 9x^2 + 24x + 2$ adalah ....",
  opsi: [
   { key: 'A', text: '20' },
   { key: 'B', text: '22' },
   { key: 'C', text: '24' },
   { key: 'D', text: '48' },
   { key: 'E', text: '50' }],
  kunci: ['B']
 }
];

