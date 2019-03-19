let newDivApi = document.createElement("div");
newDivApi.id = "API";
let currentDivApi = document.getElementById("bodyContent").firstChild;
document.getElementById("bodyContent").insertBefore(newDivApi, currentDivApi);

let svgApi = dimple.newSvg("#API", 800, 600);

const graph1 = () => {


  async function getData() {
    let response = await fetch(
      "https://inside.becode.org/api/v1/data/random.json"
    );
    let data = await response.json();
    return data;
  }


  getData()
    .then(data => {
      let myData = [];

      for (let i = 0; i < data.length; i++) {
        myData.push({
          x: data[i][0],
          y: data[i][1]
        });
      }
      let chart = new dimple.chart(svgApi, myData);
      chart.addCategoryAxis("x", "x");
      chart.addMeasureAxis("y", "y");
      chart.addSeries(null, dimple.plot.line);
      chart.draw();


      const resetFunc = () => {
        chart.svg.selectAll("*").remove();
        graph1();
      };



      setTimeout(resetFunc, 1000);
    })

    .catch(err => {
      console.error("Erreur !");
      console.dir(err);
    });
};
graph1();

let newDivTab1 = document.createElement("div");
newDivTab1.id = "tab1";
document.getElementById("Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police").appendChild(newDivTab1);

let svgTab1 = dimple.newSvg("#tab1", 800, 600);


let table1 = document.getElementsByTagName("table")[0];


let table1DatasBrut = [];
for (let i = 2; i < table1.rows.length; i++) {
  table1DatasBrut.push(table1.rows[i].getElementsByTagName("td"));
}

let table1Datas = []


for (let i = 0; i < table1DatasBrut.length; i++) {
  let count = 1
  let date = 2002
  for (let y = 0; y < 11; y++) {
    table1Datas.push({
      pays: table1DatasBrut[i][0].innerHTML,
      Crimes: table1DatasBrut[i][count].innerHTML.replace(/:/g, "0"),
      date: date
    });
    count++
    date++
  }
}


const chartTable1 = () => {
  let chart = new dimple.chart(svgTab1, table1Datas);

  chart.addCategoryAxis("x", ["pays", "date"]);
  chart.addMeasureAxis("y", "Crimes");

  chart.addSeries("pays", dimple.plot.bar);

  chart.draw();
};
chartTable1();


let newDivTab2 = document.createElement("div");
newDivTab2.id = "tab2";
document.getElementById("Homicides").appendChild(newDivTab2);

let svgTab2 = dimple.newSvg("#tab2", 800, 600);




let table2 = document.getElementsByTagName("table")[1];


let table2DatasBrut = [];
for (let i = 1; i < table2.rows.length; i++) {
  table2DatasBrut.push(table2.rows[i].getElementsByTagName("td"));
}

let table22010 = [];
for (let i = 0; i < table2DatasBrut.length; i++) {
  table22010.push({
    pays: table2DatasBrut[i][0].innerHTML,
    Crimes: table2DatasBrut[i][1].innerHTML,
    date: 2010
  });
}


let table22007 = [];
for (let i = 0; i < table2DatasBrut.length; i++) {
  table22007.push({
    pays: table2DatasBrut[i][0].innerHTML,
    Crimes: table2DatasBrut[i][2].innerHTML,
    date: 2007
  });
}

table2Datas = table22007.concat(table22010);


const chartTable2 = () => {
  let chart = new dimple.chart(svgTab2, table2Datas);

  chart.addCategoryAxis("x", ["pays", "date"]);
  chart.addMeasureAxis("y", "Crimes");

  chart.addSeries("pays", dimple.plot.bar);

  chart.draw();
};
chartTable2();
