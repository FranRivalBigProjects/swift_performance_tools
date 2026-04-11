function analyze(){
let input=document.getElementById('input').value||"";
let notes="";

// performance
if(input.includes("for") || input.includes("while")){
  notes += "Loop detected. Potential performance impact.\n";
}

// memory leak
if(input.includes("retain") || input.includes("strong self")){
  notes += "Potential memory retention detected.\n";
}
if(input.includes("[weak self]")){
  notes += "Weak reference used (good practice).\n";
}

// threads
if(input.includes("DispatchQueue") || input.includes("Thread")){
  notes += "Thread usage detected.\n";
}

// async await
if(input.includes("async") || input.includes("await")){
  notes += "Async/await pattern detected.\n";
}

if(!notes) notes="No performance patterns detected.";

document.getElementById('result').innerText =
"Performance Analysis:\n"+notes;
}
