import dispatcher from "../dispatcher"

export function sortPens(sortFlag){
  dispatcher.dispatch({
    type: "SORT_PENS",
    sortFlag
  })
}

export function filterPens(filterFlag){
  dispatcher.dispatch({
    type: "FILTER_PENS",
    filterFlag
  })
}
