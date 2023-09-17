function calculateCost() {
    const recommendedCar = document.getElementById("recommendedCar").value;
    const catalogNotation = parseFloat(document.getElementById("catalogNotation").value); // カタログ表記の選択肢
    const mileage = parseFloat(document.getElementById("mileage").value);
    const gasolineCost = parseFloat(document.getElementById("gasolineCost").value);
    const electricityCost = parseFloat(document.getElementById("electricityCost").value);
    const monthlyDistance = parseFloat(document.getElementById("monthlyDistance").value);

    let gasolineCostPerKm;
    let electricityCostPerKm;
    let variableValue;

    if (recommendedCar === "leaf") {
        variableValue = 8.05;
    } else if (recommendedCar === "aria") {
        variableValue = 7.12;
    } else if (recommendedCar === "sakura") {
        variableValue = 9;
    }

    gasolineCostPerKm = gasolineCost / mileage;
    electricityCostPerKm = electricityCost / (variableValue * catalogNotation); // カタログ表記の選択肢による修正
    const fuelCostDifference = (electricityCostPerKm - gasolineCostPerKm) * monthlyDistance;

    document.getElementById("gasolineCostPerKm").textContent = gasolineCostPerKm.toFixed(2);
    document.getElementById("electricityCostPerKm").textContent = electricityCostPerKm.toFixed(2);
    document.getElementById("fuelCostDifference").textContent = fuelCostDifference.toFixed(2);
}
