import { EventEmitter, Output, Input, Directive } from '@angular/core'

@Directive({
  selector:'ack-array'
}) export class AckArray {
  @Input() idKey
  @Input() ref
  @Output() refChange = new EventEmitter()

  @Input() array:any[]
  @Output() arrayChange = new EventEmitter()

  ngOnInit(){
    setTimeout(()=>this.refChange.emit(this), 0)
  }

  getItemId(item){
    return this.idKey ? item[this.idKey] : item
  }

  getCompareArray(){
    if(this.array && this.idKey){
      return this.array.map(item=>item[this.idKey])
    }

    return this.array || []
  }

  selected(item){
    return this.itemIndex(item) >= 0 ? true : false
  }

  itemIndex(item){
    const array = this.getCompareArray()
    const itemId = this.getItemId(item)
    
    for(let x=array.length-1; x >= 0; --x){
      if(itemId==array[x]){
        return x
      }
    }

    return -1
  }

  toggle(item){
    const index = this.itemIndex(item)

    if(index>=0){
      return this.array.splice(index,1)
    }

    if(!this.array){
      this.arrayChange.emit( this.array=[] )
    }
    
    this.array.push( item )
  }
}