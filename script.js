document.addEventListener("DOMContentLoaded", () => {

  const groups = document.querySelectorAll('.menu-group');

  groups.forEach(group => {
    const menu = group.querySelector('.menu-item');

    if (!menu) return;

    menu.addEventListener('click', (e) => {
      e.preventDefault();

      groups.forEach(g => {
        if (g !== group) g.classList.remove('active');
      });

      group.classList.toggle('active');
    });
  });

  const billData = {
    paid: 65,
    unpaid: 25,
    overdue: 10
  };

  function updateChart() {
    const { paid, unpaid, overdue } = billData;

    const chart = document.getElementById("chart");
    if (!chart) return;

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

  const data = [
    { month: "Jan", electricity: 80, water: 50 },
    { month: "Feb", electricity: 40, water: 70 },
    { month: "Mar", electricity: 75, water: 70 },
    { month: "Apr", electricity: 15, water: 8 }
  ];

  const barsContainer = document.getElementById("chart-bars");
  const labelsContainer = document.getElementById("chart-labels");

  if (barsContainer && labelsContainer) {

    const values = [];
    data.forEach(d => values.push(d.electricity, d.water));

    const maxValue = Math.max(...values);

    data.forEach(item => {

      const group = document.createElement("div");
      group.className = "bar-chart-group";

      const eBar = document.createElement("div");
      eBar.className = "bar-chart-bar bar-chart-bar-electricity";

      const wBar = document.createElement("div");
      wBar.className = "bar-chart-bar bar-chart-bar-water";

      const chartHeight = 100;

      eBar.style.height = (item.electricity / maxValue) * chartHeight + "px";
      wBar.style.height = (item.water / maxValue) * chartHeight + "px";

      group.appendChild(eBar);
      group.appendChild(wBar);
      barsContainer.appendChild(group);

      const label = document.createElement("div");
      label.textContent = item.month;
      labelsContainer.appendChild(label);
    });
  }

    const popups = document.querySelectorAll(".popup");

  // OPEN POPUP
  document.querySelectorAll("[data-popup]").forEach(trigger => {
    trigger.addEventListener("click", () => {

      const target = trigger.getAttribute("data-popup");
      const popup = document.getElementById(target);

      if (popup) {
        popup.classList.add("active");
      }

    });
  });

  // CLOSE POPUP
  popups.forEach(popup => {

    const closeBtn = popup.querySelector(".popup-close");
    const overlay = popup.querySelector(".popup-overlay");

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        popup.classList.remove("active");
      });
    }

    if (overlay) {
      overlay.addEventListener("click", () => {
        popup.classList.remove("active");
      });
    }

  });
});