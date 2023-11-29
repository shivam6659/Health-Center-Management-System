import { NumericValueRegex } from "../constants/regex"
export const isNumeric = (val) => {
    if (val) {
        return NumericValueRegex.test(val)
    } else {
        return false
    }
}