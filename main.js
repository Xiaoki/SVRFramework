
import './style.css'
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: false,
  securityLevel: 'loose',
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

  e.srcElement.parentElement.style.display = "none";
  
};

const showPopup = (e) => {

  document.querySelector(".popup").style.display = "flex";
}

const hideButton = document.getElementById("hideBtn");
hideButton.addEventListener("click", hideButtonElement);

document.getElementById("documentation").addEventListener("click", showPopup)






// Add hide function on button
//const buttonElement = document.getElementById("hideBtn");
////buttonElement.addEventListener("click", testHide());