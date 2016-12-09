/**
 * Created by chengkj on 16/12/8.
 */



const CacheGroupListData={

  "code": 200,
  "error": "",
  "data": [
    {
      "group_name": {
        "id": 1217,
        "name": "bj_changping_all_cnc",
        "available_ip_count": 4,
        "status": "enable"
      },
      "ip_info": [
        {
          "id": 2502,
          "ip": "1.1.1.1",
          "info": "",
          "status": "enable"
        },
        {
          "id": 2503,
          "ip": "2.2.2.2",
          "info": "",
          "status": "enable"
        },
        {
          "id": 2510,
          "ip": "66.66.66.66",
          "info": "",
          "status": "enable"
        },
        {
          "id": 2511,
          "ip": "77.77.77.77",
          "info": "",
          "status": "enable"
        }
      ]
    },
    {
      "group_name": {
        "id": 1218,
        "name": "tj_konggang_all_cnc",
        "available_ip_count": 2,
        "status": "enable"
      },
      "ip_info": [
        {
          "id": 2504,
          "ip": "3.3.3.3",
          "info": "",
          "status": "enable"
        },
        {
          "id": 2505,
          "ip": "4.4.4.4",
          "info": "",
          "status": "enable"
        }
      ]
    }
  ]
}


const State = {
  CacheGroupListData:CacheGroupListData

}
export default State
