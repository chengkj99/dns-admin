/**
 * Created by chengkj on 16/12/9.
 */

function ipsCheck(IPS) {

  let markType=IPS.lastIndexOf('；');
  let IPSArr;
  if(markType!=-1){
    IPSArr=IPS.split('；')
  }else{
    IPSArr=IPS.split(';')
  }

  let IPSFilter=IPSArr.filter( (it) => {
    if(it!=""){
      return it
    }
  })
  return IPSFilter;

}
export default ipsCheck;
