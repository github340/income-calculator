const now = new Date(); // 현재 시간
// console.log(now.getTime());

// 날짜 세팅
now.setDate(25);
now.setMonth(11);

const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const day = now.getDay();

let dayString = "";
// if (day === 0) {
//   dayString = "Sun";
// }
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
dayString = days[day];

// console.log(`${year}-${month}-${date} ${dayString}`);

// console.log("toDateString(): ", now.toDateString());
// console.log("toISOString(): ", now.toISOString());
// console.log("toLocaleString(): ", now.toLocaleString());
// console.log("toDateString(): ", now.toDateString());

function printCalendar(year, month) {
  const currentDate = new Date();
  currentDate.setFullYear(year);
  currentDate.setMonth(month - 1);
  currentDate.setDate(1);
  const firstDay = currentDate.getDay();

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)
  ) {
    daysInMonth[1] = 29;
  }
  const lastDate = daysInMonth[currentDate.getMonth()];

  for (let i = 0; i < lastDate; i++) {
    currentDate.setDate(i + 1);
    process.stdout.write(
      `${currentDate.getMonth() + 1}월 ${i + 1}일 ${
        days[currentDate.getDay()]
      } `
    );
    //   if (i % 7 === 6) {
    //     console.log();
    //   }
    if (currentDate.getDay() === 6) {
      console.log();
    }
  }
}

// printCalendar(2008, 2);
const testDate = new Date();
testDate.setDate(-1);
console.log(testDate.toLocaleString());
