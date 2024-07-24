const num = 5;
const func = () => {
  console.log("shanu");
};

const hof = (func, num,) => {
    for (let i = 0; i < num; i++){
        func();
    }
};
hof(func,num);

