<template>
    <div>
        <div>this is template body</div>

      <table>
        <tbody v-for="(val ,key , index) in data">
          <tr>
            <td>
              {{val}}
            </td>
            <td>
              {{key}}
            </td>
            <td>
              {{index}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>


</template>


<script>
export default{
  data () {
    return {
      data:{
        'aaa':'111',
        'bbb':'222',
        'ccc':null,
        'ddd':[ {'v':'8'},{'u':'9'} ]
      }
    }
  }
}


</script>

