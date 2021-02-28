  
// import d3 function  
  d3.json("samples.json").then(function(data){
    console.log("hello");
});


// get wfreq from data
d3.json("samples.json").then(function(data){
  wfreq = data.metadata.map(person => person.wfreq);
  console.log(wfreq);
});


// sort wfeq in desc
d3.json("samples.json").then(function(data){
  wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
  console.log(wfreq);
});



// remove null 
d3.json("samples.json").then(function(data){
  wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
  filteredWfreq = wfreq.filter(element => element !=
null);
  console.log(filteredWfreq);
});

// display metdata of any individual 
d3.json("samples.json").then(function(data){
  firstPerson = data.metadata[0];
  Object.entries(firstPerson).forEach(([key, value]) =>
    {console.log(key + ': ' + value);});
});