function constructionCrew(worker) {
if(worker.dizziness){
   worker.levelOfHydrated+=(worker.weight * 0.1)*worker.experience
worker.dizziness=false;
}
return worker;
}
let worker1 = {
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}

let worker2 = {
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
let worker3 = {
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}

constructionCrew(worker1);
constructionCrew(worker2);
constructionCrew(worker3);