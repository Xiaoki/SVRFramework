
import './style.css'
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: false,
  flowchart: {
    useMaxWidth: false,
    htmlLabels: true,
},
})

const drawDiagram = async () => {
  const element = document.querySelector(".content");
  const graphDefinition = document.querySelector(".content").textContent;
  const { svg } = await mermaid.render('svgID', graphDefinition);
  
  element.innerHTML = svg;

  var panAndZoom= svgPanZoom("svg", {
    zoomEnabled: true,
    controlIconsEnabled: false,
    fit: true,
    center: true,
    zoomScaleSensitivity: 0.7
  })

}

await drawDiagram();

const hideButtonElement = (e) => {
  console.log(e.srcElement)
  e.srcElement.parentElement.style.display = "none";
  
};

const showPopup = (e) => {
  //document.getElementsByClassName("popup").style.display = "block";
  console.log(document.querySelector(".popup"));
  document.querySelector(".popup").style.display = "block";
}

const hideButton = document.getElementById("hideBtn");
hideButton.addEventListener("click", hideButtonElement);

document.getElementById("documentation").addEventListener("click", showPopup)






// Add hide function on button
//const buttonElement = document.getElementById("hideBtn");
////buttonElement.addEventListener("click", testHide());