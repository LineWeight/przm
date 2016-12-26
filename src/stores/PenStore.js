import {EventEmitter} from 'events'
import * as SortConst from '../constants/SortConst'
import dispatcher from "../dispatcher"
import penData from '../Pens.json'

class PenStore extends EventEmitter {

  constructor(){
    super()
    this.pens = penData
  }

  getPenList(){
    let pens = []
    for(let p of this.pens){
      if(p.visible){
        pens.push(p)
      }
    }
    return pens
  }

  sortPens(sortFlag){

    function colorIdSort(a,b){
      if(a.colorId > b.colorId){
        return 1
      }else if(a.colorId < b.colorId){
        return -1
      }
      return 0
    }

    function nameSort(a,b){
      if(a.name > b.name){
        return 1
      }else if(a.name < b.name){
        return -1
      }
      return 0
    }

    function orgIdSort(a,b){
      if(a.orgId > b.orgId){
        return 1
      }else if(a.orgId < b.orgId){
        return -1
      }
      return 0
    }

    switch (sortFlag) {
      case SortConst.COLOR:
        this.pens.sort(colorIdSort)
        this.emit("change")
        break;
      case SortConst.NAME:
        this.pens.sort(nameSort)
        this.emit("change")
        break;
      case SortConst.ORG:
        this.pens.sort(orgIdSort)
        this.emit("change")
        break;
      default:

    }
  }

  filterPens(filterFlag){
    for(let e of this.pens){
      if(e.groups[filterFlag]){
        e.visible = true;
      }else{
        e.visible = false;
      }
    }
    this.emit("change")
  }

  handleActions(action){
    switch (action.type) {
      case "FILTER_PENS":
        this.filterPens(action.filterFlag)
        break;
      case "SORT_PENS":
        this.sortPens(action.sortFlag)
        break;
      default:
    }
  }

}

const penStore = new PenStore()
dispatcher.register(penStore.handleActions.bind(penStore))
export default penStore
