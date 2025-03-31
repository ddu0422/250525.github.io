function generateCalendar(year, month) {
  const daysInWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDate = new Date(year, month, 0).getDate();

  let table =
    "<table><tr>" +
    daysInWeek
      .map(
        (day, index) =>
          `<th class="${
            index === 0 ? "sunday" : index === 6 ? "saturday" : ""
          }">${day}</th>`
      )
      .join("") +
    "</tr>";
  let dayCount = 1;

  for (let row = 0; row < 6; row++) {
    let tr = "<tr>";
    for (let col = 0; col < 7; col++) {
      if (row === 0 && col < firstDay) {
        tr += "<td></td>"; // 빈 칸
      } else if (dayCount <= lastDate) {
        const isSunday = col === 0 || dayCount === 5 || dayCount === 6;
        const isSaturday = col === 6;
        const isHoliday = dayCount === 5 || dayCount === 6;
        const className = `${isSunday ? "sunday" : ""} ${
          isSaturday ? "saturday" : ""
        } ${isHoliday ? "holiday" : ""}`;

        tr +=
          dayCount === 25
            ? `<td class="${className}"><span class="circle">${dayCount}</span></td>` // 5월 25일 동그라미
            : `<td class="${className}">${dayCount}</td>`;

        dayCount++;
      } else {
        tr += "<td></td>"; // 빈 칸
      }
    }
    tr += "</tr>";
    table += tr;
    if (dayCount > lastDate) break;
  }
  table += "</table>";
  document.getElementById("calendar").innerHTML = table;
}

generateCalendar(2025, 5);
