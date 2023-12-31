import "./styles.css";

const table = document.getElementById("table");

async function getData() {
  const url =
    "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const dataPromise = await fetch(url);
  const dataJson = await dataPromise.json();
  const municipality = Object.values(
    dataJson.dataset.dimension.Alue.category.label
  );
  const population = dataJson.dataset.value;

  console.log(dataJson);

  for (let i = 0; i < 310; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    td1.innerHTML = municipality[i];
    td2.innerHTML = population[i];

    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
  }
}

getData();
