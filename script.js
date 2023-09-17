function calculateCost() {
    const mileage = parseFloat(document.getElementById("mileage").value);
    const gasolineCost = parseFloat(document.getElementById("gasolineCost").value);
    const electricityCost = parseFloat(document.getElementById("electricityCost").value);
    const monthlyDistance = parseFloat(document.getElementById("monthlyDistance").value);

    const gasolineCostPerKm = gasolineCost / mileage;
    const electricityCostPerKm = electricityCost / 10; // 1kW = 10km分
    const fuelCostDifference = (electricityCostPerKm - gasolineCostPerKm) * monthlyDistance;

    document.getElementById("gasolineCostPerKm").textContent = gasolineCostPerKm.toFixed(2);
    document.getElementById("fuelCostDifference").textContent = fuelCostDifference.toFixed(2);
}
