const student = {
  name: "Sachine",
  age: 23,
  eng: 75,
  chm: 66,
  phy: 65,

  getAvg() {
    let avg = (this.eng + this.chm + this.phy) / 3;
    console.log(avg);
  },
};
