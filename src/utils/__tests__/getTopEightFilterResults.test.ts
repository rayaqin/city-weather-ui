import { getTopEightFilterResults } from "../getTopEightFilterResults"
import { CapitalCity } from "../types"

describe("getTopEightFilterResults", () => {
  const allOptions = [
    { name: "London" },
    { name: "New York" },
    { name: "Paris" },
    { name: "Tokyo" },
    { name: "Sydney" },
    { name: "Berlin" },
    { name: "Rome" },
    { name: "Madrid" },
    { name: "Amsterdam" },
    { name: "Vienna" },
    { name: "Cairo" },
    { name: "Moscow" },
    { name: "Beijing" },
    { name: "Bangkok" },
    { name: "Dubai" },
    { name: "Toronto" },
    { name: "Los Angeles" },
    { name: "Mumbai" },
    { name: "Singapore" },
    { name: "Istanbul" },
  ]

  const allOptionsTestCase = [
    { name: "ActestCity" },
    { name: "tAbestCity" },
    { name: "teAbstCity" },
    { name: "AbtestCity" },
    { name: "teAcstCity" },
    { name: "tAcestCity" },
  ]

  it("should return exactly eight matches if there are at least eight options matching the filter text", () => {
    const filterText1 = "o"
    expect(getTopEightFilterResults(filterText1, allOptions)).toHaveLength(8)
  })

  it("should return an empty array if there are no matches", () => {
    const filterText3 = "xyz"
    const expectedResults: CapitalCity[] = []
    expect(getTopEightFilterResults(filterText3, allOptions)).toEqual(
      expectedResults,
    )
  })

  it("should return one match if there is only one option matching the filter text", () => {
    const filterText2 = "par"
    const expectedResults = [{ name: "Paris" }]
    expect(getTopEightFilterResults(filterText2, allOptions)).toEqual(
      expectedResults,
    )
  })

  it("should return matches where the filter text is at the beginning of the string first, and match groups should be sorted alphabetically", () => {
    const filterText4 = "a"
    const expectedResults = [
      { name: "AbtestCity" },
      { name: "ActestCity" },
      { name: "tAbestCity" },
      { name: "tAcestCity" },
      { name: "teAbstCity" },
      { name: "teAcstCity" },
    ]

    expect(getTopEightFilterResults(filterText4, allOptionsTestCase)).toEqual(
      expectedResults,
    )
  })
})
