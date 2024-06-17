function sayhello(){
  console.log('hello1');
};

sayhello();
sayhello();

let obj = {
  num : 30,
  sayhello : function(){
    console.log("sayhello");
    console.log('sayhello');
    console.log('sayhello');
  },

}

console.log(obj.num);
console.log(obj.sayhello);

console.log("안녕");
console.log("안녕");


