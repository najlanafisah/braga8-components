document.addEventListener("DOMContentLoaded", () => {

  console.log("JS MASUK");

  // ======================
  // PIE CHART
  // ======================
  const billData = {
    paid: 65,
    unpaid: 25,
    overdue: 10
  };

  function updateChart() {
    const { paid, unpaid, overdue } = billData;

    const chart = document.getElementById("chart");
    if (!chart) {
      console.log("PIE CHART GA KETEMU");
      return;
    }

    chart.style.background = `
      conic-gradient(
        #ff8a2a 0% ${paid}%,
        #d65a0f ${paid}% ${paid + unpaid}%,
        #8b3a0e ${paid + unpaid}% 100%
      )
    `;

    const paidEl = document.getElementById("paid");
    const unpaidEl = document.getElementById("unpaid");
    const overdueEl = document.getElementById("overdue");

    if (paidEl) paidEl.innerText = paid + "%";
    if (unpaidEl) unpaidEl.innerText = unpaid + "%";
    if (overdueEl) overdueEl.innerText = overdue + "%";
  }

  updateChart();

  // ======================
  // BAR CHART
  // ======================
  const data = [
    { month: "Jan", electricity: 80, water: 50 },
    { month: "Feb", electricity: 40, water: 70 },
    { month: "Mar", electricity: 75, water: 70 },
    { month: "April", electricity: 15, water: 8 }
  ];

  const barsContainer = document.getElementById("chart-bars");
  const labelsContainer = document.getElementById("chart-labels");

  if (!barsContainer || !labelsContainer) {
    console.log("ELEMENT BAR CHART GA KETEMU");
    return;
  }

  const values = [];
  data.forEach(d => {
    values.push(d.electricity, d.water);
  });

  const maxValue = Math.max(...values);

  if (!maxValue) {
    console.log("MAX VALUE ERROR");
    return;
  }

  data.forEach(item => {

    const group = document.createElement("div");
    group.className = "bar-chart-group";

    const eBar = document.createElement("div");
    eBar.className = "bar-chart-bar bar-chart-bar-electricity";

    const wBar = document.createElement("div");
    wBar.className = "bar-chart-bar bar-chart-bar-water";

    const chartHeight = 160;

    eBar.style.height = (item.electricity / maxValue) * chartHeight + "px";
    wBar.style.height = (item.water / maxValue) * chartHeight + "px";

    group.appendChild(eBar);
    group.appendChild(wBar);
    barsContainer.appendChild(group);

    const label = document.createElement("div");
    label.textContent = item.month;
    labelsContainer.appendChild(label);
  });

  // ======================
  // POPUP
  // ======================
  const popup = document.querySelector(".popup");
  const openBtn = document.querySelector(".open-popup"); // tombol trigger
  const closeBtn = document.querySelector(".popup-close");
  const overlay = document.querySelector(".popup-overlay");

  // buka popup
  if (openBtn && popup) {
    openBtn.addEventListener("click", () => {
      popup.classList.add("active");
    });
  }

  // tutup popup (X)
  if (closeBtn && popup) {
    closeBtn.addEventListener("click", () => {
      popup.classList.remove("active");
    });
  }

  // tutup popup (klik overlay)
  if (overlay && popup) {
    overlay.addEventListener("click", () => {
      popup.classList.remove("active");
    });
  }

});