export class Year {
  constructor(data) {
    this.year = data  // int
    this.months = {
      "January": 31,
      "February": data % 4 == 0 ? 29 : 28,
      "March": 31,
      "April": 30,
      "May": 31,
      "June": 30,
      "July": 31,
      "August": 31,
      "September": 30,
      "October": 31,
      "November": 30,
      "December": 31
    }
  }
}