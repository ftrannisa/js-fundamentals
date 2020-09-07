var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

// Splice
  input.splice(4,1,);
  input.splice(1,2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
  input.splice(5,2, "Pria", "SMA Internasional Metro")
  console.log(input)

// Split dan Switch 
  const hasilSplit = input[3].split("/");
  //console.log(hasilSplit)
  var month = hasilSplit[1];
  // console.log(month);

switch (parseInt(month)) {
    case 01:
    console.log("Januari");
    break;
    case 02:
    console.log("Februari");
    break;
    case 03:
    console.log("Maret");
    break;
    case 04:
    console.log("April");
    break;
    case 05:
    console.log("Mei");
    break;
    default:
    console.log('default');
}
// Sort descending
var sortDesc = input[3].split("/").sort(function(value1, value2) { return value2 - value1 });
console.log(sortDesc); 

// Join
join = hasilSplit.join('-');
console.log(join);

// Slice
var name = input[1];
var nameTrue = name.slice(0,14); 
console.log(nameTrue);
