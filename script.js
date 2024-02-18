const busTicketBtn = document.getElementById("buy-button");

busTicketBtn.addEventListener("click", function () {
  document
    .getElementById("ph-paribahan")
    .scrollIntoView({ behavior: "smooth" });
});

const seats = document.getElementsByClassName("seat-btn");
const tableBody = document.getElementById("table-body");
let count = 0;
let leftSeatCount = 40;

for (const seat of seats) {
  let setHiestCount = document.getElementById("seat-total-count").innerText;
  if ((setHiestCount > 4)) {
   
  }
  seat.addEventListener("click", function (event) {
    const bgColor = (event.target.style.backgroundColor = "#1dd100");
    const getSeatNum = event.target;
    getSeatNum.disabled = true;
    const seatNum = getSeatNum.innerText;
    tableBody.innerHTML += `
      <tr class='seat-count'>
      <td class="py-2">${seatNum}</td>
       <td>Economy</td>
        <td class="text-right">550</td>
        </tr>
      
      `;

    let seatCountShow = parseFloat(
      document.getElementById("seat-total-count").innerText
    );
    seatCountShow += 1;
    document.getElementById("seat-total-count").innerText = seatCountShow;

    let totalMoney = document.getElementById("totalMoney");
    totalMoney = parseFloat(totalMoney.innerText);
    totalMoney += 550;
    document.getElementById("totalMoney").innerText = totalMoney;

    let leftSeat = parseFloat(
      document.getElementById("left-seat-btn").innerText
    );
    leftSeat -= 1;
    document.getElementById("left-seat-btn").innerText = leftSeat;

   
  });
}
