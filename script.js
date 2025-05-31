 let isOn = false;

    function toggleBulb() {
      const bulb = document.getElementById("bulb");
      const btn = document.getElementById("toggleBtn");

      if (isOn) {
        bulb.src = "bulb-off.jpg.webp";
        btn.textContent = "ON";
        isOn = false;
      } else {
        bulb.src = "bulb-on.jpg.webp";
        btn.textContent = "OFF";
        isOn = true;
      }
    }