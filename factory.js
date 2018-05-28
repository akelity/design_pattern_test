
const brands = ["Fiat","Ferrari","Maserati"];

const car = () => {
  const brand = brands[Math.floor(Math.random()*brands.length)];
  return {
    getBrand: () => brand
  }
}

const cars = [1,1,1,1].map(() => car());

cars.forEach(c => {
  console.log(c.getBrand());
});
