document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>`

async function dynamicImportCSS() {
  await import("./style.css");
}

dynamicImportCSS().then(() => {
  console.log("Import successful!");
}, () => {
  console.log("Import failed!");
})
