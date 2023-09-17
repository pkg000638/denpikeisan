function calculateCost() {
    const mileage = parseFloat(document.getElementById("mileage").value);
    const gasolineCost = parseFloat(document.getElementById("gasolineCost").value);
    const electricityCost = parseFloat(document.getElementById("electricityCost").value);
    const monthlyDistance = parseFloat(document.getElementById("monthlyDistance").value);

    const gasolineCostPerKm = gasolineCost / mileage;
    const electricityCostPerKm = electricityCost / 10; // 1kWの電気代を1kmあたりに変換
    const fuelCostDifference = (electricityCostPerKm - gasolineCostPerKm) * monthlyDistance;

    document.getElementById("gasolineCostPerKm").textContent = gasolineCostPerKm.toFixed(2);
    document.getElementById("electricityCostPerKm").textContent = electricityCostPerKm.toFixed(2); // 1kmあたりの電気代を表示
    document.getElementById("fuelCostDifference").textContent = fuelCostDifference.toFixed(2);
}
