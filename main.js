
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