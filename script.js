var dateDiffInDays = function (date1, date2) {
  //   write your code here
	let d1 = new Date(date1);
	let d2 = new Date(date2);

	let diffInMill = Math.floor((Date.UTC(d1.getFullYear(),d1.getMonth(),d1.getDate()) - Date.UTC(d2.getFullYear(),d2.getMonth(),d2.getDate()))/24*60*60*1000)
	return diffInMill;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
