	 ok=()=>{
	 	let num=document.getElementById("rep").value;
	 	localStorage.setItem("num",num)
	 	for(let i=0;i<num;i++)
	{
		let node=document.createElement("input")
		
		node.style.cssText="margin-top:10px;margin-left:10px;display:block"
	document.getElementById("in").append(node)
	

	node.id="in"+i


			}
			var j
		next=()=>{
			for(let i=0;i<localStorage.getItem("num");i++)
			{
localStorage.setItem("val"+i, document.getElementById("in"+i).value)


			}
		}
		let nod=document.createElement("button")
		nod.textContent="store"
		nod.addEventListener("click",next)
document.getElementById("in").append(nod)
			var node2=document.createElement("input");
start=()=> {
    
    var arr = [];
    for (let i = 0; i < num; i++) {
        arr[i] = localStorage.getItem("val"+i);
    }
   
    let ran=arr[Math.floor(Math.random()*arr.length)]
    
    node2.value=ran
    node2.style.cssText="display:block"
    document.getElementById("out").append(node2)
};

// console.log(arr)

let no=document.createElement("button")
		no.textContent="start"
		no.addEventListener("click",start)
document.getElementById("start").append(no)
			}

		

	

	