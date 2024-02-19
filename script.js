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
let selectedButtons = [];

// Define the event handler function separately
function seatClickHandler(event) {
  const bgColor = (event.target.style.backgroundColor = "#1dd100");
  
  const getSeatNum = event.target;
  getSeatNum.disabled = true;
  const seatNum = getSeatNum.innerText;
  let tableAppendBody = (tableBody.innerHTML += `
      <tr class='seat-count'>
      <td class="py-2">${seatNum}</td>
       <td>Economy</td>
        <td class="text-right">550</td>
        </tr>
      
      `);

  let seatCountShow = parseFloat(
    document.getElementById("seat-total-count").innerText
  );
  seatCountShow += 1;

  if (seatCountShow == 4) {
    // Remove the event listener when seat count reaches 4
    for (const seat of seats) {
      seat.removeEventListener("click", seatClickHandler);
    }
  }

  document.getElementById("seat-total-count").innerText = seatCountShow;

  let totalMoney = document.getElementById("totalMoney");
  totalMoney = parseFloat(totalMoney.innerText);
  totalMoney += 550;
  document.getElementById("totalMoney").innerText = totalMoney;

  let grandTotalbyid = document.getElementById("grand-total-id");
  grandTotalbyid = parseFloat(grandTotalbyid.innerText);
  grandTotalbyid += 550;
  document.getElementById("grand-total-id").innerText = grandTotalbyid;

  let leftSeat = parseFloat(document.getElementById("left-seat-btn").innerText);
  leftSeat -= 1;
  document.getElementById("left-seat-btn").innerText = leftSeat;
}


for (const seat of seats) {
  seat.addEventListener("click", seatClickHandler);
}
const couponInput = document.getElementById("couponInput");
const couponButton = document.getElementById("couponButton");
let couponLabel = document.getElementById('couponLabel')

couponButton.addEventListener("click", function () {
  let grandTotalbyid = document.getElementById("grand-total-id").innerText;


  if (couponInput.value === "NEW15") {
    let value = parseFloat(grandTotalbyid) - (parseFloat(grandTotalbyid) * 15) / 100;
    document.getElementById("grand-total-id").innerText = value.toString(); // 
    couponLabel.classList.add('hidden');
  }
  else if(couponInput.value === "Couple 20"){
    let value = parseFloat(grandTotalbyid) - (parseFloat(grandTotalbyid) * 20) / 100;
    document.getElementById("grand-total-id").innerText = value.toString(); 
    couponLabel.classList.add('hidden');
  }
  else{
    alert('Please provide a valid Coupon code')
  }
});


document.addEventListener("DOMContentLoaded", function (e) {
  const openModalButton = document.getElementById("openModalButton");
  const closeModalButton = document.getElementById("closeModalButton");
  const myModal = document.getElementById("modal");
  
  e.preventDefault();  

  openModalButton.addEventListener("click", function () {
    myModal.showModal();
  });

  closeModalButton.addEventListener("click", function () {
    myModal.close();
  });
});




// *********************************
