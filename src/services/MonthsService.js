import { AppState } from "../AppState.js"

class MonthsService {
  monthUp() {
    AppState.currentMonth += 1
  }

  monthDown() {
    AppState.currentMonth -= 1
  }

}

export const monthsService = new MonthsService()