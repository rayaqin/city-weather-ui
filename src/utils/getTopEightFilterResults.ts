/*
  Given a filter text and a list of options, returns the top eight results. Results are first sorted alphabetically, then results where the match happens earlier in the string are prioritized. This leads to higher priority matches being at the top of the list, but also ensures that within priority groups the results are sorted alphabetically.
*/

import { CapitalCity } from "./types"

const sortByHitQuality = (a: CapitalCity, b: CapitalCity, filterText: string) =>
  a.name.toLowerCase().indexOf(filterText.toLowerCase()) -
  b.name.toLowerCase().indexOf(filterText.toLowerCase())

export const getTopEightFilterResults = (
  filterText: CapitalCity["name"],
  allOptions: CapitalCity[],
) =>
  allOptions
    .filter((option) =>
      option.name.toLowerCase().includes(filterText.toLowerCase()),
    )
    .toSorted((a, b) => (a.name > b.name ? 1 : -1))
    .toSorted((a, b) => sortByHitQuality(a, b, filterText))
    .slice(0, 8)
