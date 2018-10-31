function personalBMI(name, age, weight, height) {
    const bmi = calculateBmi(weight, height);
    const status = getStatus(bmi);

    const patient = {
        name: name,
        personalInfo: {
            age: Math.round(Number(age)),
            weight: Math.round(Number(weight)),
            height: Math.round(Number(height))
        },
        BMI: bmi,
        status: status,
    };

    if (status === "obese") {
        patient.recommendation = "admission required";
    }

    return patient;

    function calculateBmi(weight, height) {
        return Math.round(+weight / (+height / 100) ** 2);
    }

    function getStatus(bmi) {
        if (bmi < 18.5) {
            return "underweight";
        } else if (bmi < 25) {
            return "normal";
        } else if (bmi < 30) {
            return "overweight";
        } else {
            return "obese";
        }
    }
}

console.log(personalBMI('Honey Boo Boo', 9, 57, 137));