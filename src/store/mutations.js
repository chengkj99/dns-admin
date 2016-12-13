/**
 * Created by chengkj on 16/12/8.
 */


 const mutations={

  //获取缓存组信息
  GET_CACHE_GROUP_DATA (state,payload) {
    state.CacheGroupListData=payload.CacheGroupListData
  },
  //添加IP
  ADD_IP (state,payload) {
    state.CacheGroupListData=payload.CacheGroupListData
  },
  //查询缓存组区域覆盖
  QUERY_CACHE_GROUP_COVER (state,payload) {
    state.CacheGroupCoverDataList=payload.CacheGroupCoverDataList
  },



  //获取调度平台管理信息
  GET_DISPATCH_PLATFORM_DATA (state,payload) {
    state.DispatchPlatformListData=payload.DispatchPlatformListData
  },
  //获取IP信息
  GET_IP_NAME_DATA (state,payload) {
    state.DomainNameData=payload.DomainNameData
  },
  //获取区域信息
  GET_REGION_NAME_DATA (state,payload) {
    state.RegionNameData=payload.RegionNameData
  },
  //获取缓存组信息
  GET_CACHE_GROUP_NAME_DATA (state,payload) {
    state.CacheGroupNameData=payload.CacheGroupNameData
  }
}

export default mutations
