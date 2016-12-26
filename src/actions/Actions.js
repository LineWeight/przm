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

export function userAddPen(user, colorId){
  dispatcher.dispatch({
    type: "USER_ADD_PEN",
    user, colorId
  })
}export function userRemovePen(user, colorId){
  dispatcher.dispatch({
    type: "USER_REMOVE_PEN",
    user, colorId
  })
}

export function beginEdit(){
  dispatcher.dispatch({
    type: "BEGIN_EDIT"
  })
}

export function endEdit(){
  dispatcher.dispatch({
    type: "END_EDIT"
  })
}
