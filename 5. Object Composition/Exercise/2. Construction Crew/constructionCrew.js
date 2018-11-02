function fixWorker(workerObject) {
    if (workerObject.handsShaking) {
        workerObject.bloodAlcoholLevel += 0.1 * workerObject.experience * workerObject.weight;
        workerObject.handsShaking = false;
    }

    return workerObject;
}

console.log(fixWorker({
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
}));