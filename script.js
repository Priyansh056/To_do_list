async function findBus() {
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;

  const res = await fetch('http://localhost:5000/findbus', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to })
  });

  const data = await res.json();
  const out = document.getElementById('output');

  if (res.status === 200) {
    out.innerHTML = `
      <h3>🚍 Bus Name: ${data.name}</h3>
      <p>⏰ Departure Time: ${data.departureTime}</p>
      <p>🕒 Estimated Arrival Time: ${data.arrivalTime}</p>
      <p>📍 Current Location: ${data.currentLocation}</p>
    `;
  } else {
    out.innerHTML = `<p>❌ No bus found for this route.</p>`;
  }
}