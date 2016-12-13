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

const CacheGroupCoverDataList= [
  {
    "id": 2500,
    "schedule_name": "all.lv2",
    "domain_name": "lxb.club",
    "view": "北京联通",
    "group_name": "bj_changping_all_cnc",
    "weight": 0,
    "ttl": 599,
    "status": "enable",
    "group_status": "enable",
    "view_type": "big_view",
    "comment": ""
  },
  {
    "id": 2504,
    "schedule_name": "all.lv2",
    "domain_name": "lxb.club",
    "view": "内蒙联通",
    "group_name": "bj_changping_all_cnc",
    "weight": 0,
    "ttl": 599,
    "status": "enable",
    "group_status": "enable",
    "view_type": "big_view",
    "comment": ""
  }
]

const DispatchPlatformListData=[]

const RegionNameData=[]
const DomainNameData=[]
const CacheGroupNameData=[]

const State = {
  CacheGroupListData:CacheGroupListData,
  CacheGroupCoverDataList:CacheGroupCoverDataList,
  DispatchPlatformListData:DispatchPlatformListData,
  DomainNameData:DomainNameData,
  RegionNameData:RegionNameData,
  CacheGroupNameData:CacheGroupNameData

}
export default State
