import * as ackX from "ack-x/index-browser"

export function numberToPhone(val){
    if (val == null || !val)return val
    
    val = String(val).replace(/[^0-9]/g, '')

    if ( val.length==0 )return val

    return '(' + val.substring(0, 3) + ') ' + val.substring(3, 6) + '-' + val.substring(6, 10)
}

export function numberSuffix(val){
  val = Number(val)

  if(!val || isNaN(val))return ''

  var j = val % 10,
      k = val % 100;
  if (j == 1 && k != 11) {
      return "st";
  }
  if (j == 2 && k != 12) {
      return "nd";
  }
  if (j == 3 && k != 13) {
      return "rd";
  }
  return "th";
}

/** if input is array returned otherwise array created with  */
export function array(input, repeat?:number, repeatValue?){
  const isArray = input!=null && input.constructor == Array
  let rtn = isArray ? input : []
  const useRepeat = repeatValue!=null
  
  if(!useRepeat && !isArray && input!=null){
    rtn.push(input)
  }

  if((useRepeat || !isArray) && repeat && !isNaN(Number(repeat))){
    const val = useRepeat ? repeatValue : input 
    while(rtn.length<repeat){
      rtn.push( val )
    }
  }

  return rtn
}

export function markdownAnchor(input:string){
  input = input.toString().replace(/&/gi, 'amp')//possibly unneeded
  input = input.toString().replace(/ /gi,'-')
  input = input.replace(/[^a-z0-9_-]/gi,'')
  return input.toLowerCase()
}

  //use with bypassSecurityTrustResourceUrl for href
export function textDownload(input:any){
  if(input==null)return input
  return 'data:text/plain;charset=utf-8,' + encodeURIComponent(input)
}

export function yesno(input:any){
  if(input==null)return input
  return input ? 'yes' : 'no';
}

export function yesNo(input:any){
  if(input==null)return input
  return input ? 'Yes' : 'No';
}

export function boolean(input:any){
  if(input==null)return false
  
  const num = Number(input)
  if(!isNaN(num)){
    return Boolean(num) ? true : false;
  }

  if(input.toLowerCase){
    if( input.toLowerCase()=='true' )return true
    if( input.toLowerCase()=='false' )return false
  }

  return Boolean(input) ? true : false;
}

export function bit(input:any){
  return boolean(input) ? 1 : 0;
}

export function numbers(input:any){
  return input ? String(input).replace(/[^0-9]/g,'') : input
}

export function capitalizeWords(input:any){
  var reg = /[^\W_]+[^\s-]* */g
  return (!!input) ? input.replace(reg, function(txt:any){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}) : ''
}

/** each sentence word is capitalized */
export function capitalize(input:any){
  input = pipes.capitalizeOne(input)
  var reg = /[.?!][\s\r\t]+\w/g
  return (!!input) ? input.replace(reg, pipes.capitalizeAfterSentence) : ''
}

export function capitalizeAfterSentence(input:any){
  var reg = /[\s\r\t]\w/g
  return (!!input) ? input.replace(reg, function(txt:any){return txt.charAt(0) + txt.charAt(1).toUpperCase() + txt.substr(2).toLowerCase()}) : ''
}

export function capitalizeOne(input:any) {
  var reg = /[^\W_]+[^\s-]*/
  return (!!input) ? input.replace(reg, function(txt:any){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}) : ''
}

function a(name){
  return invokeRotator( ackX[name] )
}

function invokeRotator(invoke){
  return function(v,call0,call1,call2){
    var newkey, subargs, key, item, rtn = invoke(v)

    //loop extra arguments as property collectors
    for(var x=1; x < arguments.length; ++x){
      key = arguments[x]
      subargs = []

      //array where 1st arg is method and subs are positional arguments
      if(key.constructor==Array){
        newkey = key.shift()
        subargs = key
        key = newkey
      }

      item = rtn[key]

      if(item && item.constructor==Function){
        rtn = item.apply(rtn,subargs)
      }else{
        rtn = item
      }
    }

    return rtn
  }
}

export const aDate = a('date')
export const aTime = a('time')
export const ack = invokeRotator( ackX )

// maybe deprecated . Remove in future releases
export const pipes = {
  array:array,
  markdownAnchor:markdownAnchor,
  textDownload:textDownload,
  yesno:yesno,
  yesNo:yesNo,
  numbers:numbers,
  capitalizeWords:capitalizeWords,
  capitalize:capitalize,
  capitalizeAfterSentence:capitalizeAfterSentence,
  capitalizeOne:capitalizeOne,
  numberToPhone,
  numberSuffix,
  
  aDate:aDate,
  aTime:aTime,
  ack:ack
}