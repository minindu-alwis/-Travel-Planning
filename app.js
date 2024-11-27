console.log("Minidu ALwis");
let labelsArray = ['Transport', 'GrandPerl Hotel', 'Night Party', 'BreakFast'];
let paymentData = [100, 200, 50, 30];  // Initial payment data

const ctx = document.getElementById('myChart');
let chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labelsArray,
    datasets: [{
      label: 'Cost By $',
      data: paymentData, 
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function addPayment() {
    const paymentInput = document.getElementById("newPayment").value;
    const text=document.getElementById("newTitle").value;
    
    if (paymentInput !== "" && text !== "") {
        // Add new label
        labelsArray.push(text);
        
       
        paymentData.push(paymentInput); 
        
        // Create a new list item
        const newLi = `<li class="list-group-item">${text} - $ ${paymentInput}</li>`;
        document.getElementById("paymentList").innerHTML += newLi;
        
        // Clear the input field
        document.getElementById("newPayment").value = "";

        // Update the chart
        chart.update();  // Re-render the chart with updated data
    } else {
        alert("Enter Payment Please 🙄");
    }

    alert("Chart Was Updated ! Chek it Now");
    console.log(labelsArray);
    document.getElementById("newPayment").value="";
    document.getElementById("newTitle").value="";
}




function search(){
    alert("Alwis")
}


const countDownDate = new Date().getTime() + (30 * 24 * 60 * 60 * 1000);

// Update the countdown every 1 second
const x = setInterval(function() {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the countdown date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
  document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

  // If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);



function addCard() {
    const title = document.getElementById("newTitle").value;
    const description = document.getElementById("newDescription").value;

    if (title !== "" && description !== "") {
        const newCard = `
            <div class="col-lg-4 d-none d-lg-block">
                <div class="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp" class="card-img-top" alt="${title}" />
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${description}</p>
                         <a href="#!" data-mdb-ripple-init class="btn btn-primary" onclick="wish()">Add To Wish</a>
                    </div>
                </div>
            </div>
        `;

        document.getElementById("cardContainer").innerHTML += newCard;

        document.getElementById("newTitle").value = "";
        document.getElementById("newDescription").value = "";
    } else {
        alert("Please fill in all fields! 😪");
    }
}

function wish(){
    alert("SucsessFully Added To Wish List 🥰");
}





