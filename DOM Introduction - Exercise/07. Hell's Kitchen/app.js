function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const textarea =document.querySelector(`#inputs textarea`).value
      const inputArray = JSON.parse(textarea.value.split('\n').filter(line => line.trim() !== ''));

      const bestRestaurantObj = processInput(inputArray);

      const bestRestaurantOutputReff = document.querySelector(`#bestRestaurant p`);
      const bestWorkerReff = document.querySelector('#workers p');



      bestRestaurantOutputReff.textContent = `Name: ${bestRestaurantObj.name} Average Salary: ${bestRestaurantObj.avgSalary.toFixed(2)} Best Salary: ${bestRestaurantObj.bestSalary.toFixed(2)}`;
      bestWorkerReff.textContent = bestRestaurantObj.workers.map(worker => `Name: ${worker.name} With Salary: ${worker.salary.toFixed(2)}`).join(' ');
      function processInput(inputArray) {

         let bestRestaurant = null;
         let bestAvgSalary = 0;


         for (const restaurantInfo of inputArray) {
            const [restaurant, ...workers] = restaurantInfo.split(' - ');

            const totalSalary = workers.reduce((sum, workerInfo) => {
               const [, salary] = workerInfo.split(' ');
               return sum + Number(salary);
            }, 0);

            const avgSalary = totalSalary / workers.length;

            if (!bestRestaurant || avgSalary > bestAvgSalary) {
               bestRestaurant = {
                  name: restaurant,
                  avgSalary: avgSalary,
                  bestSalary: Math.max(...workers.map(workerInfo => Number(workerInfo.split(' ')[1]))),
                  workers: workers.map(workerInfo => {
                     const [name, salary] = workerInfo.split(' ');
                     return { name, salary: Number(salary) };
                  }),
               };
               bestAvgSalary = avgSalary;
            }
         }
         return bestRestaurant;
      }

   }
}