import {EventEmitter} from 'events'
import * as SortConst from '../constants/SortConst'
import * as FilterConst from '../constants/FilterConst'
import dispatcher from "../dispatcher"
import penData from '../Pens.json'

class PenStore extends EventEmitter {



  constructor(){
    super()
    this.pens = penData
    this.filterFlag = FilterConst.ALL
    this.sortFlag = SortConst.ORG
    this.isCurrentlyEditing = false
  }

  isEditing(){
    return this.isCurrentlyEditing
  }

  getPenList(){
    let pens = []
    this.sortPens(this.sortFlag)
    this.filterPens(this.filterFlag)
    for(let p of this.pens){
      if(p.visible){
        pens.push(p)
      }
    }
    return pens
  }

  getFilter(){
    return this.filterFlag
  }

  getSort(){
    return this.sortFlag
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
        break;
      case SortConst.NAME:
        this.pens.sort(nameSort)
        break;
      case SortConst.ORG:
        this.pens.sort(orgIdSort)
        break;
      default:

    }
  }

  filterPens(filterFlag){
    for(let e of this.pens){
      if(e.groups[filterFlag] || e.users[filterFlag]){
        e.visible = true;
      }else{
        e.visible = false;
      }
    }
  }

  userHasColor(user, colorId){
    let pen = this.pens.find((x) => x.colorId === colorId)
    return pen.users[user]
  }

  addPenToUser(user, colorId){
    let pen = this.pens.find((x) => x.colorId === colorId)
    pen.users[user] = true
    this.emit("change")
  }

  removePenFromUser(user, colorId){
    let pen = this.pens.find((x)=> x.colorId === colorId)
    delete(pen.users[user])
    this.emit("change")
  }

  handleActions(action){
    switch (action.type) {
      case "FILTER_PENS":
        this.filterFlag = action.filterFlag
        this.emit("change")
        break;
      case "SORT_PENS":
        this.sortFlag = action.sortFlag
        this.emit("change")
        break;
      case "USER_ADD_PEN":
        this.addPenToUser(action.user, action.colorId);
        break;
      case "USER_REMOVE_PEN":
        this.removePenFromUser(action.user, action.colorId);
        break;
      case "BEGIN_EDIT":
        this.isCurrentlyEditing = true
        this.emit("change")
        break;
      case "END_EDIT":
        this.isCurrentlyEditing = false
        this.emit("change")
        break;
      default:
    }
  }

}

const penStore = new PenStore()
dispatcher.register(penStore.handleActions.bind(penStore))
export default penStore
